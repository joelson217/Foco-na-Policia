// ============================================================
// ADMIN.JS — Painel de clientes, integrado na aba "Clientes" do
// próprio app (só aparece pra conta com is_admin=true). Usa a chave
// service_role do Supabase (colada manualmente pelo dono, nunca salva
// em disco/git) para criar contas de cliente com senha gerada
// automaticamente e gerenciar a tabela `assinantes`.
//
// A chave service_role ignora TODAS as políticas de RLS -- por isso
// ela nunca pode ir para o código-fonte público (app.js), só é usada
// aqui, digitada manualmente a cada sessão de uso desta aba.
// ============================================================
'use strict';

const CURSOS_LABEL = {
  pprn: 'PPRN — Polícia Penal do RN',
  pppe: 'PPPE — Polícia Penal de PE',
  pcpe_agente: 'PCPE — Agente',
  pcpe_escrivao: 'PCPE — Escrivão',
  pmpe: 'PMPE — Polícia Militar de PE'
};

function gerarSenhaAleatoria() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  let senha = '';
  const bytes = new Uint32Array(12);
  crypto.getRandomValues(bytes);
  for (let i = 0; i < 12; i++) senha += chars[bytes[i] % chars.length];
  return senha;
}

const ADMIN = {
  client: null,

  connect() {
    const key = document.getElementById('admin-service-key').value.trim();
    const statusEl = document.getElementById('admin-connect-status');
    if (!key) { statusEl.textContent = 'Cole a chave service_role.'; return; }

    this.client = window.supabase.createClient(SUPABASE_URL, key, {
      auth: { autoRefreshToken: false, persistSession: false }
    });

    // sessionStorage: some quando a aba/janela fecha, nunca vai pro git.
    sessionStorage.setItem('opfarda_admin_key', key);

    statusEl.textContent = '✅ Conectado.';
    statusEl.style.color = '#10b981';
    document.getElementById('admin-panel-content').classList.remove('hidden');
    this.carregarClientes();
  },

  async criarCliente() {
    const email = document.getElementById('cliente-email').value.trim().toLowerCase();
    const curso = document.getElementById('cliente-curso').value;
    const tipo = document.getElementById('cliente-tipo').value;
    const validadeInput = document.getElementById('cliente-validade').value;
    const isAdmin = document.getElementById('cliente-is-admin').checked;
    const statusEl = document.getElementById('admin-status-msg');
    const passwordBox = document.getElementById('admin-generated-password-box');

    if (!email || !email.includes('@')) { statusEl.textContent = 'Digite um e-mail válido.'; return; }

    statusEl.textContent = 'Criando...';
    passwordBox.classList.add('hidden');

    const senha = gerarSenhaAleatoria();

    try {
      const { data: userData, error: userError } = await this.client.auth.admin.createUser({
        email, password: senha, email_confirm: true
      });

      if (userError) {
        if (!String(userError.message || '').toLowerCase().includes('already')) {
          throw userError;
        }
        statusEl.textContent = 'Este e-mail já tinha uma conta — atualizando a assinatura (senha não muda). Use "Nova senha" na lista se precisar redefinir.';
      }

      const { error: upsertError } = await this.client.from('assinantes').upsert({
        email, curso, tipo, is_admin: isAdmin, ativo: true,
        data_validade: validadeInput ? new Date(validadeInput).toISOString() : null
      }, { onConflict: 'email' });

      if (upsertError) throw upsertError;

      if (!userError) {
        document.getElementById('admin-generated-password-value').textContent = senha;
        passwordBox.classList.remove('hidden');
        statusEl.textContent = '✅ Cliente criado com sucesso.';
      } else {
        statusEl.textContent = '✅ Assinatura atualizada (conta de login já existia).';
      }
      statusEl.style.color = '#10b981';

      document.getElementById('cliente-email').value = '';
      document.getElementById('cliente-validade').value = '';
      document.getElementById('cliente-is-admin').checked = false;
      this.carregarClientes();
    } catch (e) {
      console.error(e);
      statusEl.textContent = '❌ Erro: ' + (e.message || e);
      statusEl.style.color = '#ef4444';
    }
  },

  async carregarClientes() {
    const { data, error } = await this.client
      .from('assinantes')
      .select('email, curso, tipo, ativo, data_validade, is_admin')
      .order('data_inicio', { ascending: false });

    if (error) { console.error(error); return; }

    const tbody = document.getElementById('clientes-tbody');
    tbody.innerHTML = '';
    data.forEach((c, i) => {
      const tr = document.createElement('tr');
      const validadeISO = c.data_validade ? new Date(c.data_validade).toISOString().slice(0, 10) : '';
      const cursoLabel = (CURSOS_LABEL[c.curso] || c.curso) + (c.is_admin ? ' (admin)' : '');
      const inputId = 'validade-input-' + i;
      tr.style.borderBottom = '1px solid var(--border)';
      tr.innerHTML = `
        <td style="padding:8px;">${c.email}</td>
        <td style="padding:8px;">${cursoLabel}</td>
        <td style="padding:8px;">${c.tipo}</td>
        <td style="padding:8px;">${c.ativo ? '🟢 ativo' : '🔴 inativo'}</td>
        <td style="padding:8px;">
          <input type="date" id="${inputId}" value="${validadeISO}" style="padding:4px; font-size:0.8rem; width:130px; background: var(--bg-primary); border: 1px solid var(--border); color: var(--text-primary); border-radius:4px;">
          <button class="btn btn-outline" style="margin:4px 0 0; padding:4px 10px; font-size:0.75rem;" onclick="ADMIN.atualizarValidade('${c.email}', '${inputId}')">Salvar</button>
          <button class="btn btn-outline" style="margin:4px 0 0; padding:4px 10px; font-size:0.75rem;" onclick="ADMIN.limparValidade('${c.email}', '${inputId}')">Sem prazo</button>
        </td>
        <td style="padding:8px;">
          <button class="btn btn-outline" style="margin:0; padding:4px 10px; font-size:0.8rem;" onclick="ADMIN.alternarAtivo('${c.email}', ${!c.ativo})">${c.ativo ? 'Revogar' : 'Reativar'}</button>
          <button class="btn btn-outline" style="margin:0; padding:4px 10px; font-size:0.8rem;" onclick="ADMIN.resetarSenha('${c.email}')">Nova senha</button>
        </td>`;
      tbody.appendChild(tr);
    });
  },

  async alternarAtivo(email, novoValor) {
    const { error } = await this.client.from('assinantes').update({ ativo: novoValor }).eq('email', email);
    if (error) { alert('Erro: ' + error.message); return; }
    this.carregarClientes();
  },

  async atualizarValidade(email, inputId) {
    const valor = document.getElementById(inputId).value;
    const novaData = valor ? new Date(valor + 'T23:59:59').toISOString() : null;
    const { error } = await this.client.from('assinantes').update({ data_validade: novaData }).eq('email', email);
    if (error) { alert('Erro: ' + error.message); return; }
    this.carregarClientes();
  },

  async limparValidade(email, inputId) {
    document.getElementById(inputId).value = '';
    const { error } = await this.client.from('assinantes').update({ data_validade: null }).eq('email', email);
    if (error) { alert('Erro: ' + error.message); return; }
    this.carregarClientes();
  },

  async resetarSenha(email) {
    const { data: userList, error: listError } = await this.client.auth.admin.listUsers();
    if (listError) { alert('Erro: ' + listError.message); return; }
    const user = userList.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) { alert('Usuário não encontrado no Auth.'); return; }

    const novaSenha = gerarSenhaAleatoria();
    const { error } = await this.client.auth.admin.updateUserById(user.id, { password: novaSenha });
    if (error) { alert('Erro: ' + error.message); return; }

    document.getElementById('admin-generated-password-value').textContent = novaSenha;
    document.getElementById('admin-generated-password-box').classList.remove('hidden');
    alert('Nova senha gerada para ' + email + ':\n\n' + novaSenha);
  }
};

// Recupera a chave desta aba (se a página foi recarregada dentro da mesma sessão)
window.addEventListener('DOMContentLoaded', () => {
  const savedKey = sessionStorage.getItem('opfarda_admin_key');
  const keyInput = document.getElementById('admin-service-key');
  if (savedKey && keyInput) {
    keyInput.value = savedKey;
    ADMIN.connect();
  }
});
