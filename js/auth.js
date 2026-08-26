// ============================================================
// AUTH.JS — Login por e-mail e senha (contas criadas só pelo admin,
// via admin.html) + controle de acesso por curso + bloqueio de sessão
// simultânea (Realtime) + sincronização de progresso na nuvem.
//
// Fluxo:
// 1. AUTH.init() roda no lugar de APP.init() direto (ver final do
//    arquivo). Verifica se já existe uma sessão válida (localStorage).
// 2. Sem sessão -> mostra #login-screen (e-mail + senha).
// 3. Com sessão -> consulta `assinantes` pelo e-mail logado.
//    - Sem linha ativa / expirada -> #no-access-screen.
//    - is_admin = true -> #curso-selector-screen (escolhe entre os
//      cursos já disponíveis, ver CURSOS_DISPONIVEIS).
//    - Cliente normal -> libera direto o `curso` cadastrado.
// 4. A cada login bem-sucedido, gera um token novo de sessão e grava
//    em `assinantes.sessao_atual`. Uma inscrição Realtime nessa linha
//    detecta se outro dispositivo logar depois (token muda) e derruba
//    esta sessão na hora — nunca 2 acessos simultâneos.
// ============================================================
'use strict';

// cursos com conteúdo pronto no app hoje, na ordem em que aparecem
// pro seletor da conta admin
const CURSOS_DISPONIVEIS = [
  { id: 'pprn', nome: 'Polícia Penal do RN (PPRN)' }
];

const SESSION_TOKEN_KEY = 'opfarda_session_token';

let CURRENT_CURSO = null;
let CURRENT_USER_EMAIL = null;
let CURRENT_IS_ADMIN = false;
let _saveProgressTimeout = null;
let _realtimeChannel = null;

const AUTH = {
  client: null,

  init() {
    this.client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    this.client.auth.getSession().then(({ data }) => {
      if (data.session) {
        this.handleSession(data.session, /* isFreshLogin */ false);
      } else {
        this.showLoginScreen();
      }
    });
  },

  showLoginScreen(message) {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('curso-selector-screen').classList.add('hidden');
    document.getElementById('no-access-screen').classList.add('hidden');
    document.getElementById('login-status').textContent = message || '';
    document.getElementById('login-screen').classList.remove('hidden');
  },

  showNoAccessScreen(message) {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('curso-selector-screen').classList.add('hidden');
    if (message) document.getElementById('no-access-message').textContent = message;
    document.getElementById('no-access-screen').classList.remove('hidden');
  },

  showCursoSelector() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('no-access-screen').classList.add('hidden');
    const list = document.getElementById('curso-selector-list');
    list.innerHTML = '';
    CURSOS_DISPONIVEIS.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-primary';
      btn.textContent = c.nome;
      btn.onclick = () => this.entrarNoCurso(c.id);
      list.appendChild(btn);
    });
    document.getElementById('curso-selector-screen').classList.remove('hidden');
  },

  async login(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const statusEl = document.getElementById('login-status');
    const btn = document.getElementById('login-submit-btn');

    if (!email || !password) {
      statusEl.textContent = 'Preencha e-mail e senha.';
      return;
    }

    btn.disabled = true;
    statusEl.textContent = 'Entrando...';

    const { data, error } = await this.client.auth.signInWithPassword({ email, password });

    btn.disabled = false;
    if (error || !data.session) {
      statusEl.textContent = 'E-mail ou senha incorretos.';
      console.error('Erro signInWithPassword:', error);
      return;
    }

    document.getElementById('login-password').value = '';
    await this.handleSession(data.session, /* isFreshLogin */ true);
  },

  async logout() {
    if (_realtimeChannel) { this.client.removeChannel(_realtimeChannel); _realtimeChannel = null; }
    if (this.client) await this.client.auth.signOut();
    localStorage.removeItem(SESSION_TOKEN_KEY);
    CURRENT_CURSO = null;
    CURRENT_USER_EMAIL = null;
    CURRENT_IS_ADMIN = false;
    document.getElementById('app').classList.add('hidden');
    document.getElementById('login-email').value = '';
    this.showLoginScreen();
  },

  async handleSession(session, isFreshLogin) {
    const email = session.user.email.toLowerCase();
    CURRENT_USER_EMAIL = email;

    const { data: assinatura, error } = await this.client
      .from('assinantes')
      .select('curso, is_admin, ativo, data_validade, sessao_atual')
      .eq('email', email)
      .maybeSingle();

    if (error) {
      console.error('Erro ao consultar assinatura:', error);
      this.showNoAccessScreen('Erro ao verificar sua assinatura. Tente novamente em instantes.');
      return;
    }

    if (!assinatura || !assinatura.ativo) {
      this.showNoAccessScreen();
      return;
    }

    if (assinatura.data_validade && new Date(assinatura.data_validade) < new Date()) {
      this.showNoAccessScreen('Sua assinatura expirou. Entre em contato para renovar o acesso.');
      return;
    }

    CURRENT_IS_ADMIN = !!assinatura.is_admin;

    // --- Controle de sessão única: nunca 2 dispositivos logados ao mesmo tempo ---
    if (isFreshLogin) {
      // Login explícito agora: este dispositivo passa a ser a sessão válida,
      // derrubando qualquer outra sessão aberta com o mesmo e-mail.
      const novoToken = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random());
      localStorage.setItem(SESSION_TOKEN_KEY, novoToken);
      await this.client.rpc('atualizar_sessao', { p_email: email, p_token: novoToken });
    } else {
      // Sessão restaurada (reabriu o app): confere se ainda é a sessão válida.
      const meuToken = localStorage.getItem(SESSION_TOKEN_KEY);
      if (!meuToken || meuToken !== assinatura.sessao_atual) {
        localStorage.removeItem(SESSION_TOKEN_KEY);
        await this.client.auth.signOut();
        this.showLoginScreen('Sua conta foi acessada em outro dispositivo. Faça login novamente.');
        return;
      }
    }

    this.watchForKick(email);

    if (CURRENT_IS_ADMIN) {
      this.showCursoSelector();
      return;
    }

    if (!CURSOS_DISPONIVEIS.some(c => c.id === assinatura.curso)) {
      this.showNoAccessScreen('Seu curso (' + assinatura.curso.toUpperCase() + ') ainda está em preparação. Avisaremos assim que o conteúdo estiver disponível.');
      return;
    }

    this.entrarNoCurso(assinatura.curso);
  },

  // Fica de olho na própria linha de assinante: se `sessao_atual` mudar
  // (outro dispositivo fez login), derruba esta sessão na hora.
  watchForKick(email) {
    if (_realtimeChannel) this.client.removeChannel(_realtimeChannel);
    _realtimeChannel = this.client
      .channel('assinante-' + email)
      .on('postgres_changes', {
        event: 'UPDATE', schema: 'public', table: 'assinantes', filter: `email=eq.${email}`
      }, (payload) => {
        const meuToken = localStorage.getItem(SESSION_TOKEN_KEY);
        if (payload.new.sessao_atual !== meuToken) {
          this.client.removeChannel(_realtimeChannel);
          _realtimeChannel = null;
          localStorage.removeItem(SESSION_TOKEN_KEY);
          this.client.auth.signOut();
          CURRENT_CURSO = null;
          document.getElementById('app').classList.add('hidden');
          this.showLoginScreen('Sua conta foi acessada em outro dispositivo. Você foi desconectado daqui.');
        }
      })
      .subscribe();
  },

  async entrarNoCurso(curso) {
    CURRENT_CURSO = curso;
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('curso-selector-screen').classList.add('hidden');
    document.getElementById('no-access-screen').classList.add('hidden');
    document.getElementById('loading-screen').style.display = 'flex';

    await CLOUD_SYNC.pullProgress(CURRENT_USER_EMAIL, curso);
    APP.init();
  }
};

// ============================================================
// Sincronização de progresso (tabela `progresso`, chave email+curso)
// — mantém o localStorage como cache rápido/offline e espelha na nuvem.
// ============================================================
const CLOUD_SYNC = {
  async pullProgress(email, curso) {
    try {
      const { data, error } = await AUTH.client
        .from('progresso')
        .select('stats, custom_questions')
        .eq('email', email)
        .eq('curso', curso)
        .maybeSingle();

      if (error) { console.error('Erro ao buscar progresso na nuvem:', error); return; }

      if (data) {
        if (data.stats && Object.keys(data.stats).length > 0) {
          STATE.stats = { ...STATE.stats, ...data.stats };
          saveState(); // espelha no localStorage local também
        }
        if (Array.isArray(data.custom_questions) && data.custom_questions.length > 0) {
          localStorage.setItem('pprn_custom_questions', JSON.stringify(data.custom_questions));
        }
      } else {
        // Primeira vez deste e-mail neste curso: sobe o que já existir localmente.
        this.pushProgress();
      }
    } catch (e) {
      console.error('Falha ao sincronizar progresso:', e);
    }
  },

  pushProgress() {
    if (!CURRENT_USER_EMAIL || !CURRENT_CURSO || !AUTH.client) return;
    clearTimeout(_saveProgressTimeout);
    _saveProgressTimeout = setTimeout(async () => {
      try {
        const customQuestions = JSON.parse(localStorage.getItem('pprn_custom_questions') || '[]');
        await AUTH.client.from('progresso').upsert({
          email: CURRENT_USER_EMAIL,
          curso: CURRENT_CURSO,
          stats: STATE.stats,
          custom_questions: customQuestions,
          atualizado_em: new Date().toISOString()
        });
      } catch (e) {
        console.error('Falha ao enviar progresso para a nuvem:', e);
      }
    }, 2000);
  }
};

window.addEventListener('DOMContentLoaded', () => AUTH.init());
