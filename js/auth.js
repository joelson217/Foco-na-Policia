// ============================================================
// AUTH.JS — Login por link mágico (Supabase) + controle de acesso
// por curso + sincronização de progresso na nuvem.
//
// Fluxo:
// 1. AUTH.init() roda no lugar de APP.init() direto (ver final do
//    arquivo). Verifica se já existe uma sessão válida.
// 2. Sem sessão -> mostra #login-screen, usuário digita e-mail,
//    recebe um link por e-mail (magic link), sem senha.
// 3. Com sessão -> consulta a tabela `assinantes` pelo e-mail logado.
//    Sem linha ativa -> #no-access-screen. Com linha ativa -> libera
//    o curso indicado e chama APP.init() normalmente.
// 4. CURRENT_CURSO fica disponível globalmente para o resto do app.
// ============================================================
'use strict';

const CURSOS_DISPONIVEIS = ['pprn']; // cursos com conteúdo pronto no app hoje

let CURRENT_CURSO = null;
let CURRENT_USER_EMAIL = null;
let _saveProgressTimeout = null;

const AUTH = {
  client: null,

  init() {
    this.client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    this.client.auth.onAuthStateChange((_event, session) => {
      if (session) this.handleSession(session);
    });

    this.client.auth.getSession().then(({ data }) => {
      if (data.session) {
        this.handleSession(data.session);
      } else {
        this.showLoginScreen();
      }
    });
  },

  showLoginScreen() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('no-access-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
  },

  showNoAccessScreen(message) {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('login-screen').classList.add('hidden');
    if (message) document.getElementById('no-access-message').textContent = message;
    document.getElementById('no-access-screen').classList.remove('hidden');
  },

  async sendMagicLink() {
    const emailInput = document.getElementById('login-email');
    const statusEl = document.getElementById('login-status');
    const btn = document.getElementById('login-submit-btn');
    const email = emailInput.value.trim().toLowerCase();

    if (!email || !email.includes('@')) {
      statusEl.textContent = 'Digite um e-mail válido.';
      return;
    }

    btn.disabled = true;
    statusEl.textContent = 'Enviando link...';

    const { error } = await this.client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.href }
    });

    btn.disabled = false;
    if (error) {
      statusEl.textContent = 'Não foi possível enviar o link. Tente novamente em alguns minutos.';
      console.error('Erro signInWithOtp:', error);
      return;
    }
    statusEl.textContent = '✅ Link enviado! Confira seu e-mail (e a caixa de spam) e clique nele para entrar.';
  },

  async logout() {
    if (this.client) await this.client.auth.signOut();
    CURRENT_CURSO = null;
    CURRENT_USER_EMAIL = null;
    document.getElementById('app').classList.add('hidden');
    document.getElementById('no-access-screen').classList.add('hidden');
    document.getElementById('login-email').value = '';
    document.getElementById('login-status').textContent = '';
    this.showLoginScreen();
  },

  async handleSession(session) {
    const email = session.user.email.toLowerCase();
    CURRENT_USER_EMAIL = email;

    const { data: assinatura, error } = await this.client
      .from('assinantes')
      .select('curso, ativo, data_validade')
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

    if (!CURSOS_DISPONIVEIS.includes(assinatura.curso)) {
      this.showNoAccessScreen('Seu curso (' + assinatura.curso.toUpperCase() + ') ainda está em preparação. Avisaremos assim que o conteúdo estiver disponível.');
      return;
    }

    CURRENT_CURSO = assinatura.curso;
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('no-access-screen').classList.add('hidden');
    document.getElementById('loading-screen').style.display = 'flex';

    await CLOUD_SYNC.pullProgress(email);
    APP.init();
  }
};

// ============================================================
// Sincronização de progresso (tabela `progresso`) — mantém o
// localStorage como cache rápido/offline e espelha na nuvem.
// ============================================================
const CLOUD_SYNC = {
  async pullProgress(email) {
    try {
      const { data, error } = await AUTH.client
        .from('progresso')
        .select('stats, custom_questions')
        .eq('email', email)
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
        // Primeira vez deste e-mail: sobe o que já existir localmente (se houver).
        this.pushProgress();
      }
    } catch (e) {
      console.error('Falha ao sincronizar progresso:', e);
    }
  },

  pushProgress() {
    if (!CURRENT_USER_EMAIL || !AUTH.client) return;
    clearTimeout(_saveProgressTimeout);
    _saveProgressTimeout = setTimeout(async () => {
      try {
        const customQuestions = JSON.parse(localStorage.getItem('pprn_custom_questions') || '[]');
        await AUTH.client.from('progresso').upsert({
          email: CURRENT_USER_EMAIL,
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
