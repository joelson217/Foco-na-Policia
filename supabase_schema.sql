-- ============================================================
-- Operação Farda — schema inicial do Supabase (gerenciador de acesso)
-- Cole este arquivo inteiro no SQL Editor do Supabase e clique em "Run".
--
-- Se você JÁ rodou uma versão anterior deste arquivo (com apenas 4 cursos:
-- pprn/pppe/pcpe/pmpe), rode SÓ este bloco abaixo em vez de tudo, para
-- corrigir a lista de cursos sem apagar dados que já tiver cadastrado:
--
--   alter table assinantes drop constraint assinantes_curso_check;
--   alter table assinantes add constraint assinantes_curso_check
--     check (curso in ('pprn', 'pppe', 'pcpe_agente', 'pcpe_escrivao', 'pmpe'));
--
-- ============================================================

-- Tabela de assinantes: quem tem acesso a qual curso. 5 cursos possíveis
-- (Agente e Escrivão de PCPE são cursos/assinaturas SEPARADOS, não um pacote).
-- É esta tabela que você vai editar manualmente (pelo Table Editor do
-- Supabase, sem precisar mexer em SQL) toda vez que tiver um cliente novo.
create table if not exists assinantes (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  curso text not null check (curso in ('pprn', 'pppe', 'pcpe_agente', 'pcpe_escrivao', 'pmpe')),
  tipo text not null default 'pago' check (tipo in ('trial', 'pago')),
  ativo boolean not null default true,
  data_inicio timestamptz not null default now(),
  data_validade timestamptz, -- null = sem prazo definido (assinatura ativa manualmente controlada)
  observacoes text
);

-- Tabela de progresso: substitui o localStorage, sincronizado por conta.
create table if not exists progresso (
  email text primary key references assinantes(email) on delete cascade,
  stats jsonb not null default '{}'::jsonb,
  custom_questions jsonb not null default '[]'::jsonb,
  atualizado_em timestamptz not null default now()
);

-- Segurança: cada usuário só pode ler/gravar os próprios dados de progresso,
-- e só pode ler (não editar) sua própria linha de assinatura — quem edita
-- assinaturas é você, direto pelo Table Editor (com sua própria conta admin,
-- que tem acesso total por padrão no Supabase).
alter table assinantes enable row level security;
alter table progresso enable row level security;

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
