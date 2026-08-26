-- ============================================================
-- Operação Farda — schema do Supabase (gerenciador de acesso)
-- Cole este arquivo inteiro no SQL Editor do Supabase e clique em "Run".
--
-- Como ainda não há clientes reais cadastrados, este script recria as
-- tabelas do zero (evita ficar remendando ALTER TABLE a cada mudança).
-- Se você já tinha rodado uma versão anterior, isso vai apagar e
-- recriar `assinantes` e `progresso` -- tudo bem nesta fase.
-- ============================================================

drop table if exists progresso cascade;
drop table if exists assinantes cascade;

-- Tabela de assinantes: quem tem acesso a qual curso, e se é a conta
-- administradora (dono do app, com acesso liberado a todos os cursos
-- já existentes, para testar/estudar por qualquer um deles).
create table assinantes (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  curso text not null check (curso in ('pprn', 'pppe', 'pcpe_agente', 'pcpe_escrivao', 'pmpe')),
  is_admin boolean not null default false,
  tipo text not null default 'pago' check (tipo in ('trial', 'pago')),
  ativo boolean not null default true,
  data_inicio timestamptz not null default now(),
  data_validade timestamptz, -- null = sem prazo definido (assinatura ativa manualmente controlada)
  sessao_atual text, -- token da sessão válida no momento; usado para derrubar login duplicado
  observacoes text
);

-- Tabela de progresso: substitui o localStorage, sincronizado por conta.
-- Chave composta (email + curso) para o admin poder ter progresso
-- separado em cada curso que ele acessar.
create table progresso (
  email text not null references assinantes(email) on delete cascade,
  curso text not null,
  stats jsonb not null default '{}'::jsonb,
  custom_questions jsonb not null default '[]'::jsonb,
  atualizado_em timestamptz not null default now(),
  primary key (email, curso)
);

alter table assinantes enable row level security;
alter table progresso enable row level security;

-- Cada usuário só lê a própria linha de assinatura (o `curso`, `ativo`,
-- `data_validade` só quem edita é você, pelo admin.html com a chave
-- service_role -- isso ignora RLS de propósito).
create policy "usuario le a propria assinatura"
  on assinantes for select
  using (auth.jwt() ->> 'email' = email);

create policy "usuario le o proprio progresso"
  on progresso for select
  using (auth.jwt() ->> 'email' = email);

create policy "usuario grava o proprio progresso"
  on progresso for insert
  with check (auth.jwt() ->> 'email' = email);

create policy "usuario atualiza o proprio progresso"
  on progresso for update
  using (auth.jwt() ->> 'email' = email);

-- Função segura que atualiza SÓ o token de sessão do próprio usuário --
-- impede que o cliente logado altere curso/ativo/validade da própria
-- linha diretamente (não existe policy de UPDATE geral em `assinantes`).
create or replace function public.atualizar_sessao(p_email text, p_token text)
returns void
language sql
security definer
set search_path = public
as $$
  update assinantes
  set sessao_atual = p_token
  where email = p_email and email = auth.jwt() ->> 'email';
$$;

grant execute on function public.atualizar_sessao(text, text) to authenticated;

-- Ativa Realtime na tabela assinantes -- é o que permite derrubar uma
-- sessão antiga instantaneamente quando um novo login acontece com o
-- mesmo e-mail (nunca 2 acessos simultâneos).
alter publication supabase_realtime add table assinantes;
