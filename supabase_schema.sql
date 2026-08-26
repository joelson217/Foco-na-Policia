-- ============================================================
-- Foco na Polícia — schema inicial do Supabase (gerenciador de acesso)
-- Cole este arquivo inteiro no SQL Editor do Supabase e clique em "Run".
-- ============================================================

-- Tabela de assinantes: quem tem acesso a qual curso.
-- É esta tabela que você vai editar manualmente (pelo Table Editor do
-- Supabase, sem precisar mexer em SQL) toda vez que tiver um cliente novo.
create table if not exists assinantes (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  curso text not null check (curso in ('pprn', 'pppe', 'pcpe', 'pmpe')),
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
