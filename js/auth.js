// ============================================================
// AUTH.JS — Login por e-mail e senha (contas criadas só pelo admin,
// pela própria aba "Clientes" do app) + controle de acesso por curso +
// bloqueio de sessão simultânea (Realtime) + sincronização de progresso
// na nuvem.
//
// Fluxo:
// 1. AUTH.init() roda no lugar de APP.init() direto (ver final do
//    arquivo). Verifica se já existe uma sessão válida (localStorage).
// 2. Sem sessão -> mostra #login-screen (e-mail + senha).
// 3. Com sessão -> consulta `assinantes` pelo e-mail logado.
//    - Sem linha ativa / expirada -> #no-access-screen.
//    - is_admin = true -> entra direto no último curso usado (ou no
//      primeiro de CURSOS_DISPONIVEIS na primeira vez), sem tela
//      extra — a troca de curso já é feita pelo seletor no cabeçalho.
//    - Cliente normal -> libera direto o `curso` cadastrado.
// 4. A cada login bem-sucedido, gera um token novo de sessão e grava
//    em `assinantes.sessao_atual`. Uma inscrição Realtime nessa linha
//    detecta se outro dispositivo logar depois (token muda) e derruba
//    esta sessão na hora — nunca 2 acessos simultâneos.
// ============================================================
'use strict';

// Todos os cursos planejados já aparecem no seletor (pra conta admin
// poder cadastrar clientes e organizar tudo desde já), mas só os com
// `pronto: true` têm ao menos algum conteúdo real. Quais ABAS
// exatamente já têm conteúdo por curso está em CURSO_TABS_DISPONIVEIS
// logo abaixo — uma aba fora dessa lista mostra "conteúdo em
// preparação" (ver APP.atualizarDisponibilidadeConteudo() em app.js).
const CURSOS_DISPONIVEIS = [
  { id: 'pprn', nome: 'Polícia Penal do RN (PPRN)', pronto: true },
  { id: 'pppe', nome: 'Polícia Penal de PE (PPPE)', pronto: true },
  { id: 'pcpe_agente', nome: 'Polícia Civil de PE — Agente (PCPE)', pronto: false },
  { id: 'pcpe_escrivao', nome: 'Polícia Civil de PE — Escrivão (PCPE)', pronto: false },
  { id: 'pmpe', nome: 'Polícia Militar de PE (PMPE)', pronto: false }
];

// PPPE já tem banco próprio de Questões/Simulado (ver
// data/questions_legislacao_pe.js, data/questions_rlm.js,
// data/questions_informatica.js) e Lei Seca/Flashcards Visuais
// também (ver data/lei_seca_pe.js e o filtro em VISUAL_FLASHCARDS,
// js/app.js) — todas as abas já têm conteúdo real pra esse curso.
const CURSO_TABS_DISPONIVEIS = {
  pprn: ['dashboard', 'questoes', 'simulado', 'lei-seca', 'visuais'],
  pppe: ['dashboard', 'questoes', 'simulado', 'lei-seca', 'visuais'],
  pcpe_agente: [],
  pcpe_escrivao: [],
  pmpe: []
};

const SESSION_TOKEN_KEY = 'opfarda_session_token';
const AUTH_CRED_STORAGE = 'opfarda_login_cred_id';
const ADMIN_LAST_CURSO_KEY = 'opfarda_admin_last_curso';

let CURRENT_CURSO = null;
let CURRENT_USER_EMAIL = null;
let CURRENT_IS_ADMIN = false;
let _saveProgressTimeout = null;
let _realtimeChannel = null;
let _pendingSession = null;

const AUTH = {
  client: null,

  init() {
    this.client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Nunca restaura a sessão em silêncio: mesmo com uma sessão válida
    // guardada, sempre exige reconhecimento facial ou senha para entrar.
    this.client.auth.getSession().then(({ data }) => {
      _pendingSession = data.session || null;
      this.showLoginScreen(null, !!_pendingSession);
    });
  },

  // hasStoredSession = true quando existe uma sessão válida guardada
  // (ex.: reabriu o app). Três estados possíveis:
  // 1. Sessão guardada + Face ID já cadastrado neste aparelho -> botão
  //    "Entrar com Face ID" (some o formulário de senha).
  // 2. Sessão guardada + Face ID ainda não cadastrado -> botão
  //    "Configurar Face ID e entrar" (usa a sessão já válida, sem pedir
  //    senha de novo — só passa a pedir senha se isso falhar).
  // 3. Sem sessão guardada (nunca logou ou deslogou) -> formulário de
  //    e-mail e senha, o único jeito de autenticar do zero.
  showLoginScreen(message, hasStoredSession) {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('no-access-screen').classList.add('hidden');
    document.getElementById('login-status').textContent = message || '';

    const credId = localStorage.getItem(AUTH_CRED_STORAGE);
    const bioBtn = document.getElementById('login-biometria-btn');
    const setupBtn = document.getElementById('login-setup-biometria-btn');
    const senhaBtn = document.getElementById('login-usar-senha-btn');
    const form = document.getElementById('login-form');
    const subtitle = document.getElementById('login-subtitle');
    // .btn é inline-flex por padrão (é isso que centraliza e alinha o
    // ícone+texto) — nunca usar 'block' aqui, senão vira caixa cheia
    // encostada na esquerda em vez de centralizada.
    const setBtn = (el, show) => { if (el) el.style.display = show ? 'inline-flex' : 'none'; };
    const setForm = (el, show) => { if (el) el.style.display = show ? 'flex' : 'none'; };
    const recForm = document.getElementById('login-recuperacao-form');

    if (hasStoredSession && window.PublicKeyCredential && credId) {
      setBtn(bioBtn, true); setBtn(setupBtn, false); setBtn(senhaBtn, true); setForm(form, false); setForm(recForm, false);
      if (subtitle) subtitle.textContent = 'Toque para entrar com reconhecimento facial';
    } else if (hasStoredSession && window.PublicKeyCredential && !credId) {
      setBtn(bioBtn, false); setBtn(setupBtn, true); setBtn(senhaBtn, true); setForm(form, false); setForm(recForm, false);
      if (subtitle) subtitle.textContent = 'Configure o Face ID/Touch ID para entrar sem digitar senha';
    } else {
      setBtn(bioBtn, false); setBtn(setupBtn, false); setBtn(senhaBtn, false); setForm(form, true); setForm(recForm, false);
      if (subtitle) subtitle.textContent = 'Entre com o e-mail e a senha da sua assinatura';
    }

    document.getElementById('login-screen').classList.remove('hidden');
  },

  mostrarFormSenha() {
    const bioBtn = document.getElementById('login-biometria-btn');
    const setupBtn = document.getElementById('login-setup-biometria-btn');
    const senhaBtn = document.getElementById('login-usar-senha-btn');
    const recForm = document.getElementById('login-recuperacao-form');
    if (bioBtn) bioBtn.style.display = 'none';
    if (setupBtn) setupBtn.style.display = 'none';
    if (senhaBtn) senhaBtn.style.display = 'none';
    if (recForm) recForm.style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('login-subtitle').textContent = 'Entre com o e-mail e a senha da sua assinatura';
  },

  // Recuperação avançada: só funciona pra quem tem a chave service_role
  // do Supabase (ou seja, só o administrador/dono do sistema). Define
  // uma senha nova sem precisar saber a antiga e já entra com ela.
  mostrarRecuperacao() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('login-recuperacao-form').style.display = 'flex';
    document.getElementById('login-subtitle').textContent = 'Recuperação avançada (apenas administrador)';
  },

  async recuperarComChave(event) {
    event.preventDefault();
    const email = document.getElementById('recuperacao-email').value.trim().toLowerCase();
    const chave = document.getElementById('recuperacao-chave').value.trim();
    const novaSenha = document.getElementById('recuperacao-nova-senha').value;
    const statusEl = document.getElementById('recuperacao-status');
    const btn = document.getElementById('recuperacao-submit-btn');

    if (!email || !chave || !novaSenha) { statusEl.textContent = 'Preencha todos os campos.'; return; }
    if (novaSenha.length < 6) { statusEl.textContent = 'A nova senha precisa ter pelo menos 6 caracteres.'; return; }

    btn.disabled = true;
    statusEl.textContent = 'Verificando chave...';

    const tempClient = window.supabase.createClient(SUPABASE_URL, chave, {
      auth: { autoRefreshToken: false, persistSession: false }
    });

    const { error: checkError } = await tempClient.from('assinantes').select('email').limit(1);
    if (checkError) {
      statusEl.textContent = '❌ Chave service_role inválida.';
      btn.disabled = false;
      return;
    }

    statusEl.textContent = 'Localizando conta...';
    const { data: userList, error: listError } = await tempClient.auth.admin.listUsers();
    if (listError) { statusEl.textContent = '❌ Erro: ' + listError.message; btn.disabled = false; return; }
    const user = userList.users.find(u => u.email.toLowerCase() === email);
    if (!user) { statusEl.textContent = '❌ E-mail não encontrado.'; btn.disabled = false; return; }

    statusEl.textContent = 'Definindo nova senha...';
    const { error: updateError } = await tempClient.auth.admin.updateUserById(user.id, { password: novaSenha });
    if (updateError) { statusEl.textContent = '❌ Erro ao definir senha: ' + updateError.message; btn.disabled = false; return; }

    statusEl.textContent = 'Entrando...';
    const { data, error: signInError } = await this.client.auth.signInWithPassword({ email, password: novaSenha });
    btn.disabled = false;
    if (signInError || !data.session) {
      statusEl.textContent = '✅ Senha definida! Agora toque em "Usar e-mail e senha" e entre com ela.';
      return;
    }

    document.getElementById('recuperacao-chave').value = '';
    document.getElementById('recuperacao-nova-senha').value = '';
    await this.handleSession(data.session, /* isFreshLogin */ true);
    this.oferecerBiometriaLogin(email);
  },

  // Usa a sessão já guardada (sem pedir senha) pra cadastrar o Face
  // ID/Touch ID neste aparelho e entrar na hora. Só cai pro formulário
  // de senha se a sessão tiver expirado de fato.
  async configurarFaceIdEEntrar() {
    const statusEl = document.getElementById('login-status');
    if (!_pendingSession) {
      statusEl.textContent = 'Sessão expirada. Faça login com e-mail e senha.';
      this.mostrarFormSenha();
      return;
    }
    statusEl.textContent = 'Configurando Face ID...';
    await this.oferecerBiometriaLogin(_pendingSession.user.email);
    statusEl.textContent = 'Entrando...';
    await this.handleSession(_pendingSession, /* isFreshLogin */ false);
  },

  // Confirma a identidade por Face ID/Touch ID e, se validado, usa a
  // sessão já restaurada (nunca pula direto sem essa confirmação).
  async entrarComBiometria() {
    const credIdB64 = localStorage.getItem(AUTH_CRED_STORAGE);
    const statusEl = document.getElementById('login-status');
    try {
      const credId = Uint8Array.from(atob(credIdB64), c => c.charCodeAt(0));
      await navigator.credentials.get({
        publicKey: {
          challenge: crypto.getRandomValues(new Uint8Array(32)),
          allowCredentials: [{ id: credId, type: 'public-key' }],
          userVerification: 'required',
          timeout: 60000
        }
      });
    } catch (e) {
      console.warn('Biometria recusada/indisponível:', e);
      statusEl.textContent = 'Não foi possível confirmar. Use e-mail e senha.';
      this.mostrarFormSenha();
      return;
    }

    if (!_pendingSession) {
      statusEl.textContent = 'Sessão expirada. Faça login com e-mail e senha.';
      this.mostrarFormSenha();
      return;
    }
    statusEl.textContent = 'Entrando...';
    await this.handleSession(_pendingSession, /* isFreshLogin */ false);
  },

  // Depois de um login manual bem-sucedido, oferece cadastrar Face
  // ID/Touch ID neste aparelho pra próxima vez não precisar digitar
  // senha (mas o reconhecimento continua sendo exigido a cada entrada).
  async oferecerBiometriaLogin(email) {
    if (!window.PublicKeyCredential || localStorage.getItem(AUTH_CRED_STORAGE)) return;
    try {
      const cred = await navigator.credentials.create({
        publicKey: {
          challenge: crypto.getRandomValues(new Uint8Array(32)),
          rp: { name: 'Operação Farda' },
          user: {
            id: crypto.getRandomValues(new Uint8Array(16)),
            name: email || CURRENT_USER_EMAIL || 'usuario-operacao-farda',
            displayName: 'Operação Farda'
          },
          pubKeyCredParams: [{ type: 'public-key', alg: -7 }, { type: 'public-key', alg: -257 }],
          authenticatorSelection: { authenticatorAttachment: 'platform', userVerification: 'required' },
          timeout: 60000
        }
      });
      const credIdB64 = btoa(String.fromCharCode(...new Uint8Array(cred.rawId)));
      localStorage.setItem(AUTH_CRED_STORAGE, credIdB64);
    } catch (e) {
      console.warn('Biometria de login não configurada (seguindo sem ela):', e);
    }
  },

  showNoAccessScreen(message) {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('login-screen').classList.add('hidden');
    if (message) document.getElementById('no-access-message').textContent = message;
    document.getElementById('no-access-screen').classList.remove('hidden');
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
    this.oferecerBiometriaLogin(email);
  },

  async logout() {
    if (_realtimeChannel) { this.client.removeChannel(_realtimeChannel); _realtimeChannel = null; }
    if (this.client) await this.client.auth.signOut();
    localStorage.removeItem(SESSION_TOKEN_KEY);
    _pendingSession = null;
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
      // Sem tela extra de escolha — entra direto no último curso usado
      // neste aparelho (ou no primeiro disponível na primeira vez). Pra
      // trocar de curso depois, é só usar o seletor do cabeçalho.
      const ultimoCurso = localStorage.getItem(ADMIN_LAST_CURSO_KEY);
      const cursoParaEntrar = CURSOS_DISPONIVEIS.some(c => c.id === ultimoCurso) ? ultimoCurso : CURSOS_DISPONIVEIS[0].id;
      this.entrarNoCurso(cursoParaEntrar);
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

  // Cada curso tem seu próprio EDITAL (banca, questões, disciplinas) —
  // troca o objeto global `EDITAL` (ver data/edital.js e
  // data/edital_pppe.js) pro do curso escolhido antes de renderizar
  // qualquer tela. Cursos sem edital próprio ainda caem no do PPRN.
  aplicarEditalDoCurso(curso) {
    if (curso === 'pppe' && typeof EDITAL_PPPE !== 'undefined') {
      EDITAL = EDITAL_PPPE;
    } else if (typeof EDITAL_PPRN !== 'undefined') {
      EDITAL = EDITAL_PPRN;
    }
  },

  async entrarNoCurso(curso) {
    CURRENT_CURSO = curso;
    this.aplicarEditalDoCurso(curso);
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('no-access-screen').classList.add('hidden');
    document.getElementById('loading-screen').style.display = 'flex';

    const navClientes = document.getElementById('nav-btn-clientes');
    if (navClientes) navClientes.classList.toggle('hidden', !CURRENT_IS_ADMIN);

    // Conta admin: seletor de curso fixo no cabeçalho, pra trocar a
    // qualquer momento sem precisar deslogar (dá visão dos dados de
    // cada curso, como se fosse um cliente daquele curso). Também
    // lembra a escolha, pra próxima vez já entrar direto nesse curso.
    const switcher = document.getElementById('header-curso-switcher');
    const label = document.getElementById('header-curso-label');
    if (CURRENT_IS_ADMIN && switcher) {
      switcher.innerHTML = CURSOS_DISPONIVEIS.map(c => `<option value="${c.id}">${c.nome}${c.pronto ? '' : ' (em preparação)'}</option>`).join('');
      switcher.value = curso;
      switcher.classList.remove('hidden');
      if (label) label.classList.add('hidden');
      localStorage.setItem(ADMIN_LAST_CURSO_KEY, curso);
    }

    await CLOUD_SYNC.pullProgress(CURRENT_USER_EMAIL, curso);
    APP.init();
  },

  // Troca de curso em tempo real, sem deslogar (só disponível pra conta
  // admin). Salva o progresso do curso atual antes de trocar, zera a
  // tela para o novo curso e busca o progresso dele na nuvem.
  async trocarCurso(novoCurso) {
    if (!novoCurso || novoCurso === CURRENT_CURSO) return;
    clearTimeout(_saveProgressTimeout);
    await CLOUD_SYNC.pushProgressNow(CURRENT_USER_EMAIL, CURRENT_CURSO);
    CURRENT_CURSO = novoCurso;
    this.aplicarEditalDoCurso(novoCurso);
    localStorage.setItem(ADMIN_LAST_CURSO_KEY, novoCurso);
    STATE.stats = defaultStats();
    initQuestions(); // banco de questões é filtrado por curso
    await CLOUD_SYNC.pullProgress(CURRENT_USER_EMAIL, novoCurso);
    APP.refreshAfterCursoSwitch();
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
  },

  // Envio imediato (sem debounce) — usado ao trocar de curso, pra não
  // perder as últimas respostas do curso que está sendo deixado.
  async pushProgressNow(email, curso) {
    if (!email || !curso || !AUTH.client) return;
    try {
      const customQuestions = JSON.parse(localStorage.getItem('pprn_custom_questions') || '[]');
      await AUTH.client.from('progresso').upsert({
        email, curso, stats: STATE.stats, custom_questions: customQuestions,
        atualizado_em: new Date().toISOString()
      });
    } catch (e) {
      console.error('Falha ao enviar progresso (flush):', e);
    }
  }
};

window.addEventListener('DOMContentLoaded', () => AUTH.init());
