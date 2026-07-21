// ============================================================
// APP.JS — Lógica Principal do PPRN Study App
// Polícia Penal RN | Banca Avalia
// ============================================================

'use strict';

// ===================== ESTADO GLOBAL =====================
let STATE = {
  currentTab: 'dashboard',
  stats: {
    totalAnswered: 0,
    totalCorrect: 0,
    totalWrong: 0,
    byDiscipline: {},
    byTopic: {},
    sessions: [],
    simulados: [],
    streak: 0,
    lastStudyDate: null,
    dailyGoal: 30,
    todayCount: 0,
    todayDate: new Date().toDateString(),
    xp: 0,
    markedForReview: [],
    wrongQuestions: [],
    seenQuestions: {},
    markedFlashcards: [],
    dailyHistory: {}
  },
  quiz: {
    active: false,
    questions: [],
    currentIndex: 0,
    answers: {},
    sessionCorrect: 0,
    sessionWrong: 0,
    filters: { disciplina: 'all', topico: 'all', dificuldade: 'all', cobrado: 'all' }
  },
  simulado: {
    active: false,
    questions: [],
    currentIndex: 0,
    answers: {},
    startTime: null,
    timerInterval: null,
    timeLimit: 240,
    mode: 'real'
  },
  flashcards: {
    deckId: null,
    cards: [],
    currentIndex: 0,
    isFlipped: false,
    marked: []
  }
};

// =================== CUSTOM QUESTIONS ====================
const CUSTOM_QUESTIONS = {
  getAll() {
    try {
      const data = localStorage.getItem('pprn_custom_questions');
      return data ? JSON.parse(data) : [];
    } catch(e) {
      console.error("Erro ao carregar questões personalizadas:", e);
      return [];
    }
  },
  saveAll(questions) {
    try {
      localStorage.setItem('pprn_custom_questions', JSON.stringify(questions));
    } catch(e) {
      console.error("Erro ao salvar questões personalizadas:", e);
    }
  },
  add(q) {
    const list = this.getAll();
    q.id = 'custom_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    list.push(q);
    this.saveAll(list);
    initQuestions();
    if (typeof QUIZ !== 'undefined' && QUIZ.updateFilteredCount) {
      QUIZ.updateFilteredCount();
    }
    return q;
  },
  delete(id) {
    let list = this.getAll();
    list = list.filter(q => q.id !== id);
    this.saveAll(list);
    initQuestions();
    if (typeof QUIZ !== 'undefined' && QUIZ.updateFilteredCount) {
      QUIZ.updateFilteredCount();
    }
  }
};

// =================== ALL QUESTIONS =======================
let ALL_QUESTIONS = [];

function initQuestions() {
  const sources = [
    typeof QUESTIONS_LEP !== 'undefined' ? QUESTIONS_LEP : [],
    typeof QUESTIONS_EXTRA_LEP !== 'undefined' ? QUESTIONS_EXTRA_LEP : [],
    typeof QUESTIONS_LEGISLACAO !== 'undefined' ? QUESTIONS_LEGISLACAO : [],
    typeof QUESTIONS_EXTRA_LEGISLACAO !== 'undefined' ? QUESTIONS_EXTRA_LEGISLACAO : [],
    typeof QUESTIONS_PENAL !== 'undefined' ? QUESTIONS_PENAL : [],
    typeof QUESTIONS_CONSTITUCIONAL !== 'undefined' ? QUESTIONS_CONSTITUCIONAL : [],
    typeof QUESTIONS_ADMINISTRATIVO !== 'undefined' ? QUESTIONS_ADMINISTRATIVO : [],
    typeof QUESTIONS_DH !== 'undefined' ? QUESTIONS_DH : [],
    typeof QUESTIONS_PORTUGUES !== 'undefined' ? QUESTIONS_PORTUGUES : [],
    typeof QUESTIONS_ETICA !== 'undefined' ? QUESTIONS_ETICA : [],
    typeof QUESTIONS_HISTORIA !== 'undefined' ? QUESTIONS_HISTORIA : []
  ];
  const custom = CUSTOM_QUESTIONS.getAll();
  ALL_QUESTIONS = sources.flat().concat(custom);
  console.log(`✅ Banco carregado: ${ALL_QUESTIONS.length} questões (sendo ${custom.length} personalizadas)`);
}

// =================== UTILS ===============================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function clamp(val, min, max) { return Math.max(min, Math.min(max, val)); }
function pct(correct, total) { return total === 0 ? 0 : Math.round((correct / total) * 100); }
function colorByPct(p) {
  if (p >= 75) return '#10b981';
  if (p >= 50) return '#f59e0b';
  return '#ef4444';
}
function formatDate(d) {
  return new Date(d).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });
}
function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function showToast(msg, duration = 2000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), duration);
}
function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return document.querySelectorAll(sel); }

// =================== STORAGE =============================
const STORAGE_KEY = 'pprn_study_state_v2';
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE.stats));
  } catch(e) { console.warn('Storage error:', e); }
}
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      STATE.stats = { ...STATE.stats, ...parsed };
      if (!STATE.stats.dailyHistory) STATE.stats.dailyHistory = {};
      checkStreak();
    }
  } catch(e) { console.warn('Load error:', e); }
}
function checkStreak() {
  const today = new Date().toDateString();
  const last = STATE.stats.lastStudyDate;
  if (!last) return;
  const diff = (new Date(today) - new Date(last)) / (1000 * 60 * 60 * 24);
  if (diff > 1.5) STATE.stats.streak = 0;
  if (STATE.stats.todayDate !== today) {
    STATE.stats.todayDate = today;
    STATE.stats.todayCount = 0;
  }
}

// =================== APP INIT ============================
const APP = {
  init() {
    this.runLoadingAnimation();
  },

  runLoadingAnimation() {
    const fill = document.getElementById('loading-fill');
    const text = document.getElementById('loading-text');
    const steps = [
      { pct: 20, msg: 'Carregando banco de questões...' },
      { pct: 50, msg: 'Inicializando módulos...' },
      { pct: 75, msg: 'Preparando flashcards...' },
      { pct: 95, msg: 'Quase pronto...' }
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        fill.style.width = steps[i].pct + '%';
        text.textContent = steps[i].msg;
        i++;
      } else {
        clearInterval(interval);
        fill.style.width = '100%';
        setTimeout(() => this.startApp(), 400);
      }
    }, 300);
  },

  startApp() {
    initQuestions();
    loadState();
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('app').classList.remove('hidden');
    this.initDisciplineFilters();
    this.initSimuladoGrid();
    this.initLeiSeca();
    STATS.initCharts();
    DASHBOARD.render();
    this.updateCountdown();
    GAMIFICATION.updateUI();
    setInterval(() => this.updateCountdown(), 60000);
    this.showTab('dashboard');
    document.getElementById('filter-disciplina').addEventListener('change', () => QUIZ.updateFilteredCount());
    document.getElementById('filter-topico').addEventListener('change', () => QUIZ.updateFilteredCount());
    document.getElementById('filter-dificuldade').addEventListener('change', () => QUIZ.updateFilteredCount());
    document.getElementById('filter-cobrado').addEventListener('change', () => QUIZ.updateFilteredCount());
    QUIZ.updateFilteredCount();
  },

  showTab(tabName) {
    STATE.currentTab = tabName;
    qsa('.tab-content').forEach(t => t.classList.remove('active'));
    qsa('.nav-btn').forEach(b => b.classList.remove('active'));
    const tab = document.getElementById('tab-' + tabName);
    if (tab) tab.classList.add('active');
    const btn = document.querySelector(`.nav-btn[data-tab="${tabName}"]`);
    if (btn) btn.classList.add('active');
    const titles = { dashboard: 'Dashboard', 'lei-seca': 'Lei Seca', questoes: 'Questões', simulado: 'Simulado', estatisticas: 'Estatísticas' };
    document.getElementById('tab-title').textContent = titles[tabName] || '';
    if (tabName === 'estatisticas') STATS.render();
    if (tabName === 'dashboard') DASHBOARD.render();
    if (tabName === 'questoes') QUIZ.updateFilteredCount();
    if (tabName === 'lei-seca') FLASHCARDS.resetView();
    window.scrollTo(0, 0);
  },

  updateCountdown() {
    const now = new Date();
    const target = EDITAL.dataProva;
    const diff = target - now;
    if (diff <= 0) {
      ['countdown-days', 'cd-dias', 'cd-horas', 'cd-min'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '0';
      });
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const countdownDays = document.getElementById('countdown-days');
    const cdDias = document.getElementById('cd-dias');
    const cdHoras = document.getElementById('cd-horas');
    const cdMin = document.getElementById('cd-min');
    if (countdownDays) countdownDays.textContent = days;
    if (cdDias) cdDias.textContent = String(days).padStart(2, '0');
    if (cdHoras) cdHoras.textContent = String(hours).padStart(2, '0');
    if (cdMin) cdMin.textContent = String(mins).padStart(2, '0');
  },

  initDisciplineFilters() {
    const sel = document.getElementById('filter-disciplina');
    EDITAL.disciplinas.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.id;
      opt.textContent = d.nome;
      sel.appendChild(opt);
    });
  },

  initSimuladoGrid() {
    const grid = document.getElementById('sim-disciplines-grid');
    if (!grid) return;
    grid.innerHTML = '';
    EDITAL.disciplinas.forEach(d => {
      const row = document.createElement('div');
      row.className = 'sim-disc-row';
      const pesoHtml = d.peso === 2
        ? `<span class="sim-disc-peso weight-2">Peso 2</span>`
        : `<span class="sim-disc-peso weight-1">Peso 1</span>`;
      row.innerHTML = `
        <span class="sim-disc-name">${d.icon} ${d.nome}</span>
        <span class="sim-disc-q">${d.questoes} Q</span>
        ${pesoHtml}
        <span class="sim-disc-pts">${d.pontos} pts</span>
      `;
      grid.appendChild(row);
    });
  },

  initLeiSeca() {
    // Combine base decks + extra decks into one unified list
    const allDecks = [
      ...LEI_SECA.decks,
      ...(typeof LEI_SECA_EXTRA !== 'undefined' ? LEI_SECA_EXTRA.decks : [])
    ];

    const sel = document.getElementById('lei-seca-select');
    if (sel) sel.innerHTML = '<option value="">Selecione a Lei/Disciplina...</option>';
    allDecks.forEach(deck => {
      const opt = document.createElement('option');
      opt.value = deck.id;
      opt.textContent = `${deck.icon} ${deck.nome}`;
      if (deck.destaque) opt.textContent += ' 🔥';
      sel.appendChild(opt);
    });
    if (sel) {
      const optMarked = document.createElement('option');
      optMarked.value = 'marked';
      optMarked.textContent = '🔖 Artigos Marcados';
      sel.appendChild(optMarked);
    }
    const grid = document.getElementById('quick-access-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    // Add marked cards shortcut first
    const markedCount = (STATE.stats.markedFlashcards || []).length;
    if (markedCount > 0) {
      const card = document.createElement('div');
      card.className = 'quick-card marked-shortcut-card';
      card.innerHTML = `
        <div class="qc-icon">🔖</div>
        <div class="qc-name">Artigos Marcados (${markedCount})</div>
      `;
      card.onclick = () => {
        document.getElementById('lei-seca-select').value = 'marked';
        FLASHCARDS.loadDeck('marked');
      };
      grid.appendChild(card);
    }
    
    allDecks.forEach(deck => {
      const card = document.createElement('div');
      card.className = `quick-card${deck.peso === 2 ? ' weight-2-card' : ''}`;
      card.innerHTML = `
        <div class="qc-icon">${deck.icon}</div>
        <div class="qc-name">${deck.nome}</div>
        ${deck.peso === 2 ? '<div class="qc-badge">🔥 Peso 2</div>' : ''}
      `;
      card.onclick = () => {
        document.getElementById('lei-seca-select').value = deck.id;
        FLASHCARDS.loadDeck(deck.id);
      };
      grid.appendChild(card);
    });
  },

  openConfirmModal(title, message, onConfirm) {
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    document.getElementById('confirm-ok-btn').onclick = () => {
      this.closeConfirmModal();
      onConfirm();
    };
    document.getElementById('confirm-modal').classList.remove('hidden');
  },

  closeConfirmModal() {
    document.getElementById('confirm-modal').classList.add('hidden');
  }
};


// =================== GAMIFICATION ========================
const GAMIFICATION = {
  ranks: [
    { title: 'Recruta', minXp: 0 },
    { title: 'Aluno', minXp: 50 },
    { title: 'Agente', minXp: 150 },
    { title: 'Inspetor', minXp: 300 },
    { title: 'Investigador', minXp: 500 },
    { title: 'Delegado', minXp: 1000 },
    { title: 'Elite PPRN', minXp: 2000 }
  ],
  getCurrentRank() {
    let xp = STATE.stats.xp || 0;
    let current = this.ranks[0];
    let next = this.ranks[1];
    for (let i = 0; i < this.ranks.length; i++) {
      if (xp >= this.ranks[i].minXp) {
        current = this.ranks[i];
        next = this.ranks[i+1] || { minXp: current.minXp * 2 };
      }
    }
    return { current, next, xp };
  },
  updateUI() {
    const rankInfo = this.getCurrentRank();
    const elTitle = document.getElementById('rank-title');
    const elFill = document.getElementById('xp-bar-fill');
    if (elTitle) elTitle.textContent = rankInfo.current.title;
    if (elFill) {
      const progress = ((rankInfo.xp - rankInfo.current.minXp) / (rankInfo.next.minXp - rankInfo.current.minXp)) * 100;
      elFill.style.width = Math.min(progress, 100) + '%';
    }
  },
  addXp(amount) {
    if (typeof STATE.stats.xp !== 'number') STATE.stats.xp = 0;
    STATE.stats.xp += amount;
    this.updateUI();
    saveState();
  },
  triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }
};

// =================== DASHBOARD ===========================
const DASHBOARD = {
  render() {
    this.updateStats();
    this.renderDisciplineBars();
    this.renderHotTopics();
    this.renderDiscStats();
    this.renderRecommendations();
    this.updateStreak();
    this.updateDailyProgress();
  },

  updateStats() {
    const s = STATE.stats;
    const total = s.totalAnswered;
    const correct = s.totalCorrect;
    const p = pct(correct, total);
    const setEl = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
    setEl('perf-percent', p + '%');
    setEl('total-correct', correct);
    setEl('total-wrong', s.totalWrong);
    setEl('total-answered', total);
    setEl('stats-total', total);
    setEl('stats-correct', correct);
    setEl('stats-wrong', s.totalWrong);
    setEl('stats-percent', p + '%');
  },

  updateDailyProgress() {
    const goal = STATE.stats.dailyGoal;
    const today = STATE.stats.todayCount;
    const p = clamp(today / goal, 0, 1);
    const circumference = 314;
    const offset = circumference * (1 - p);
    const ring = document.getElementById('daily-ring');
    if (ring) ring.style.strokeDashoffset = offset;
    const el = document.getElementById('today-count');
    if (el) el.textContent = today;
    const goalEl = document.getElementById('daily-goal');
    if (goalEl) goalEl.textContent = goal;
  },

  updateStreak() {
    const el = document.getElementById('streak-count');
    if (el) el.textContent = STATE.stats.streak;
  },

  renderDisciplineBars() {
    const container = document.getElementById('discipline-bars');
    if (!container) return;
    container.innerHTML = '';
    EDITAL.disciplinas.forEach(d => {
      const s = STATE.stats.byDiscipline[d.id] || { correct: 0, total: 0 };
      const p = pct(s.correct, s.total);
      const maxPts = EDITAL.pontuacaoMaxima;
      const discPct = Math.round((d.pontos / maxPts) * 100);
      const row = document.createElement('div');
      row.className = 'disc-bar-row';
      row.innerHTML = `
        <span class="disc-bar-label" title="${d.nome}">${d.icon} ${d.nome.replace('Direito ', 'Dir. ')}</span>
        <div class="disc-bar-track">
          <div class="disc-bar-fill" style="width:${discPct}%;background:${d.cor}"></div>
        </div>
        <span class="disc-bar-pct">${d.questoes}Q</span>
        <span class="disc-bar-weight ${d.peso === 2 ? 'weight-2' : 'weight-1'}">P${d.peso}</span>
      `;
      container.appendChild(row);
    });
  },

  renderHotTopics() {
    const container = document.getElementById('hot-topics-list');
    if (!container) return;
    container.innerHTML = '';
    const hot = [];
    EDITAL.disciplinas.forEach(d => {
      if (d.temasMaisCobrados) {
        d.temasMaisCobrados.slice(0, 2).forEach(t => {
          hot.push({ nome: t.nome, freq: t.frequencia, disc: d.nome, discId: d.id, icon: d.icon, peso: d.peso });
        });
      }
    });
    hot.sort((a, b) => (b.peso * 10 + b.freq) - (a.peso * 10 + a.freq));
    hot.slice(0, 8).forEach(t => {
      const item = document.createElement('div');
      item.className = 'hot-topic-item';
      item.innerHTML = `
        <span class="hot-fire">${t.icon}</span>
        <div class="hot-topic-text">
          <div class="hot-topic-name">${t.nome}</div>
          <div class="hot-topic-desc">${t.disc}${t.peso === 2 ? ' • Peso 2' : ''}</div>
        </div>
        <span class="hot-topic-count">~${t.freq}% das provas</span>
      `;
      item.onclick = () => {
        document.getElementById('filter-disciplina').value = t.discId;
        QUIZ.updateFilteredCount();
        APP.showTab('questoes');
      };
      container.appendChild(item);
    });
  },

  renderDiscStats() {
    const container = document.getElementById('disc-stats-list');
    if (!container) return;
    container.innerHTML = '';
    EDITAL.disciplinas.forEach(d => {
      const s = STATE.stats.byDiscipline[d.id] || { correct: 0, total: 0 };
      const p = pct(s.correct, s.total);
      const color = colorByPct(p);
      const row = document.createElement('div');
      row.className = 'disc-stat-row';
      row.innerHTML = `
        <span class="disc-stat-name">${d.icon} ${d.nome.split(' ')[0]}</span>
        <div class="disc-stat-bar-wrap">
          <div class="disc-stat-bar" style="width:${p}%;background:${color}"></div>
        </div>
        <span class="disc-stat-pct" style="color:${color}">${p}%</span>
        <span class="disc-stat-count">${s.correct}/${s.total}</span>
      `;
      container.appendChild(row);
    });
  },

  renderRecommendations() {
    const container = document.getElementById('recommendations-list');
    if (!container) return;
    if (STATE.stats.totalAnswered === 0) {
      container.innerHTML = '<div class="rec-placeholder">Responda questões para receber recomendações personalizadas!</div>';
      return;
    }
    container.innerHTML = '';
    const recs = [];
    EDITAL.disciplinas.forEach(d => {
      const s = STATE.stats.byDiscipline[d.id] || { correct: 0, total: 0 };
      if (s.total < 5) {
        recs.push({ type: 'practice', icon: '🎯', title: `Praticar ${d.nome}`, sub: 'Poucos exercícios feitos nessa disciplina', discId: d.id, priority: d.peso === 2 ? 3 : 1 });
      } else if (pct(s.correct, s.total) < 50) {
        recs.push({ type: 'urgent', icon: '🚨', title: `Reforçar ${d.nome}`, sub: `Apenas ${pct(s.correct, s.total)}% de acertos — abaixo do mínimo`, discId: d.id, priority: d.peso === 2 ? 5 : 3 });
      } else if (pct(s.correct, s.total) < 70) {
        recs.push({ type: 'review', icon: '📖', title: `Revisar ${d.nome}`, sub: `${pct(s.correct, s.total)}% de acertos — pode melhorar`, discId: d.id, priority: d.peso === 2 ? 4 : 2 });
      }
    });
    recs.sort((a, b) => b.priority - a.priority).slice(0, 5).forEach(r => {
      const card = document.createElement('div');
      card.className = `rec-card rec-${r.type}`;
      card.innerHTML = `<span class="rec-icon">${r.icon}</span><div class="rec-content"><div class="rec-title">${r.title}</div><div class="rec-sub">${r.sub}</div></div>`;
      card.onclick = () => {
        document.getElementById('filter-disciplina').value = r.discId;
        QUIZ.updateFilteredCount();
        APP.showTab('questoes');
      };
      container.appendChild(card);
    });
    if (recs.length === 0) {
      container.innerHTML = '<div class="rec-placeholder">🎉 Excelente desempenho em todas as disciplinas! Continue assim!</div>';
    }
  }
};

// =================== QUIZ ================================
const QUIZ = {
  getFilteredQuestions() {
    const f = STATE.quiz.filters;
    const disc = document.getElementById('filter-disciplina')?.value || 'all';
    const topico = document.getElementById('filter-topico')?.value || 'all';
    const dif = document.getElementById('filter-dificuldade')?.value || 'all';
    const cobrado = document.getElementById('filter-cobrado')?.value || 'all';
    let qs = [...ALL_QUESTIONS];
    if (disc !== 'all') qs = qs.filter(q => q.disciplina === disc);
    if (topico !== 'all') qs = qs.filter(q => q.topico === topico);
    if (dif !== 'all') qs = qs.filter(q => q.dificuldade === dif);
    if (cobrado === 'cobrado') qs = qs.filter(q => q.mostCobrado);
    if (cobrado === 'erradas') qs = qs.filter(q => STATE.stats.wrongQuestions.includes(q.id));
    if (cobrado === 'marcadas') qs = qs.filter(q => STATE.stats.markedForReview.includes(q.id));
    return qs;
  },

  updateFilteredCount() {
    const disc = document.getElementById('filter-disciplina')?.value || 'all';
    if (disc !== 'all') {
      const discObj = EDITAL.getDisciplinaById(disc);
      if (discObj) {
        const topicoSel = document.getElementById('filter-topico');
        if (topicoSel) {
          topicoSel.innerHTML = '<option value="all">Todos os Tópicos</option>';
          discObj.topicos.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.textContent = t;
            topicoSel.appendChild(opt);
          });
        }
      }
    } else {
      const topicoSel = document.getElementById('filter-topico');
      if (topicoSel) topicoSel.innerHTML = '<option value="all">Todos os Tópicos</option>';
    }
    const count = this.getFilteredQuestions().length;
    const el = document.getElementById('filtered-count');
    if (el) el.textContent = `${count} questões disponíveis`;
    const btn = document.getElementById('btn-start-quiz');
    if (btn) btn.disabled = count === 0;
  },

  startSession() {
    let questions = this.getFilteredQuestions();
    if (questions.length === 0) { showToast('Nenhuma questão encontrada com esses filtros!'); return; }
    questions = shuffle(questions).slice(0, Math.min(20, questions.length));
    STATE.quiz.questions = questions;
    STATE.quiz.currentIndex = 0;
    STATE.quiz.answers = {};
    STATE.quiz.sessionCorrect = 0;
    STATE.quiz.sessionWrong = 0;
    STATE.quiz.active = true;
    document.getElementById('quiz-filter-screen').classList.add('hidden');
    document.getElementById('quiz-active-screen').classList.remove('hidden');
    document.getElementById('session-results').classList.add('hidden');
    document.getElementById('quiz-active-screen').querySelector('.quiz-body').style.display = '';
    this.renderQuestion();
  },

  exitSession() {
    APP.openConfirmModal('Sair da Sessão', 'Deseja sair? O progresso desta sessão será perdido.', () => {
      STATE.quiz.active = false;
      document.getElementById('quiz-filter-screen').classList.remove('hidden');
      document.getElementById('quiz-active-screen').classList.add('hidden');
    });
  },

  renderQuestion() {
    const q = STATE.quiz.questions[STATE.quiz.currentIndex];
    const total = STATE.quiz.questions.length;
    const current = STATE.quiz.currentIndex + 1;
    document.getElementById('quiz-current').textContent = current;
    document.getElementById('quiz-total').textContent = total;
    const fill = document.getElementById('quiz-progress-fill');
    if (fill) fill.style.width = `${(current / total) * 100}%`;
    const disc = EDITAL.getDisciplinaById(q.disciplina);
    const discBadge = document.getElementById('quiz-disc-badge');
    if (discBadge) discBadge.textContent = disc ? disc.nome : q.disciplina;
    document.getElementById('q-disciplina').textContent = disc ? disc.nome : q.disciplina;
    document.getElementById('q-topico').textContent = q.topico || '';
    const cobradoEl = document.getElementById('q-cobrado');
    if (cobradoEl) {
      cobradoEl.classList.toggle('hidden', !q.mostCobrado);
    }
    document.getElementById('question-text').textContent = q.enunciado;
    const altList = document.getElementById('alternatives-list');
    altList.innerHTML = '';
    q.alternativas.forEach(alt => {
      const btn = document.createElement('button');
      btn.className = 'alternative-btn';
      btn.dataset.letra = alt.letra;
      btn.innerHTML = `<span class="alt-letter">${alt.letra}</span><span>${alt.texto}</span>`;
      btn.onclick = () => this.selectAnswer(alt.letra);
      altList.appendChild(btn);
    });
    document.getElementById('feedback-card').classList.add('hidden');
    document.getElementById('btn-confirm').classList.remove('hidden');
    document.getElementById('btn-confirm').classList.add('hidden');
    document.getElementById('btn-next').classList.add('hidden');
    document.getElementById('btn-confirm').style.display = 'none';
    document.getElementById('btn-next').style.display = 'none';
    const reviewBtn = document.getElementById('btn-mark-review');
    if (reviewBtn) {
      const isMarked = STATE.stats.markedForReview.includes(q.id);
      reviewBtn.textContent = isMarked ? '🔖 Marcado' : '🔖';
    }
  },

  selectAnswer(letra) {
    if (STATE.quiz.answers[STATE.quiz.currentIndex] !== undefined) return;
    qsa('#alternatives-list .alternative-btn').forEach(btn => btn.classList.remove('selected'));
    const selected = document.querySelector(`#alternatives-list .alternative-btn[data-letra="${letra}"]`);
    if (selected) selected.classList.add('selected');
    document.getElementById('btn-confirm').style.display = '';
    document.getElementById('btn-confirm').dataset.selected = letra;
    document.getElementById('btn-confirm').onclick = () => this.confirmAnswer();
    document.getElementById('btn-confirm').classList.remove('hidden');
  },

    confirmAnswer() {
    const q = STATE.quiz.questions[STATE.quiz.currentIndex];
    const selected = document.getElementById('btn-confirm').dataset.selected;
    if (!selected) return;
    const isCorrect = selected === q.gabarito;
    STATE.quiz.answers[STATE.quiz.currentIndex] = { letra: selected, correct: isCorrect };
    
    // XP and Gamification
    if (isCorrect) {
      STATE.quiz.sessionCorrect++;
      GAMIFICATION.addXp(10);
    } else {
      STATE.quiz.sessionWrong++;
      GAMIFICATION.addXp(2);
      if (navigator.vibrate) navigator.vibrate(200); // Haptic feedback
    }

    this.recordAnswer(q, isCorrect);
    
    qsa('#alternatives-list .alternative-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.letra === q.gabarito) btn.classList.add('correct');
      else if (btn.dataset.letra === selected && !isCorrect) {
        btn.classList.add('wrong');
        btn.classList.add('shake');
      }
    });
    
    const fb = document.getElementById('feedback-card');
    const fbHeader = document.getElementById('feedback-header');
    const fbArtigo = document.getElementById('feedback-artigo');
    const fbText = document.getElementById('feedback-text');
    fb.classList.remove('hidden');
    fbHeader.className = `feedback-header ${isCorrect ? 'correct-header' : 'wrong-header'}`;
    fbHeader.textContent = isCorrect ? '✅ Correto!' : `❌ Errado! Gabarito: ${q.gabarito}`;
    fbArtigo.textContent = q.artigo || '';
    fbText.textContent = q.justificativa || q.comentario || '';
    document.getElementById('btn-confirm').style.display = 'none';
    const nextBtn = document.getElementById('btn-next');
    nextBtn.style.display = '';
    const isLast = STATE.quiz.currentIndex >= STATE.quiz.questions.length - 1;
    nextBtn.textContent = isLast ? 'Ver Resultado' : 'Próxima →';
    nextBtn.onclick = isLast ? () => this.showResults() : () => this.nextQuestion();
  },

  nextQuestion() {
    STATE.quiz.currentIndex++;
    if (STATE.quiz.currentIndex < STATE.quiz.questions.length) {
      this.renderQuestion();
    } else {
      this.showResults();
    }
  },

  markForReview() {
    const q = STATE.quiz.questions[STATE.quiz.currentIndex];
    if (!q) return;
    const idx = STATE.stats.markedForReview.indexOf(q.id);
    if (idx === -1) {
      STATE.stats.markedForReview.push(q.id);
      showToast('🔖 Marcada para revisar!');
    } else {
      STATE.stats.markedForReview.splice(idx, 1);
      showToast('🔖 Marcação removida');
    }
    saveState();
  },

  recordAnswer(q, isCorrect) {
    checkStreak();
    const s = STATE.stats;
    s.totalAnswered++;
    if (isCorrect) s.totalCorrect++;
    else {
      s.totalWrong++;
      if (!s.wrongQuestions.includes(q.id)) s.wrongQuestions.push(q.id);
    }
    if (!s.byDiscipline[q.disciplina]) s.byDiscipline[q.disciplina] = { correct: 0, total: 0 };
    s.byDiscipline[q.disciplina].total++;
    if (isCorrect) s.byDiscipline[q.disciplina].correct++;
    if (!s.byTopic[q.topico]) s.byTopic[q.topico] = { correct: 0, total: 0, disciplina: q.disciplina };
    s.byTopic[q.topico].total++;
    if (isCorrect) s.byTopic[q.topico].correct++;
    
    s.todayCount++;
    
    // Record in dailyHistory
    const todayStr = new Date().toDateString();
    if (!s.dailyHistory) s.dailyHistory = {};
    if (!s.dailyHistory[todayStr]) s.dailyHistory[todayStr] = { answered: 0, correct: 0 };
    s.dailyHistory[todayStr].answered++;
    if (isCorrect) s.dailyHistory[todayStr].correct++;

    // Streak logic
    const last = s.lastStudyDate;
    if (last && last !== todayStr) {
      const diff = (new Date(todayStr) - new Date(last)) / (1000 * 60 * 60 * 24);
      if (diff <= 1.5) {
        if (s.todayCount === 1) {
          s.streak++;
        }
      } else {
        s.streak = 1;
      }
    } else if (!last) {
      s.streak = 1;
    }
    s.lastStudyDate = todayStr;

    saveState();
    const streakEl = document.getElementById('streak-count');
    if (streakEl) streakEl.textContent = s.streak;
  },

  showResults() {
    const total = STATE.quiz.questions.length;
    const correct = STATE.quiz.sessionCorrect;
    const p = pct(correct, total);
    document.querySelector('#quiz-active-screen .quiz-body').style.display = 'none';
    const results = document.getElementById('session-results');
    results.classList.remove('hidden');
    const emojis = { high: '🎉', mid: '💪', low: '😅' };
    const emoji = p >= 75 ? emojis.high : p >= 50 ? emojis.mid : emojis.low;
    document.getElementById('results-emoji').textContent = emoji;
    document.getElementById('results-percent').textContent = p + '%';
    document.getElementById('results-correct').textContent = `${correct} acertos`;
    document.getElementById('results-wrong').textContent = `${total - correct} erros`;
    const breakdown = document.getElementById('results-breakdown');
    if (breakdown) {
      const bDisc = {};
      STATE.quiz.questions.forEach((q, i) => {
        const ans = STATE.quiz.answers[i];
        if (!ans) return;
        if (!bDisc[q.disciplina]) bDisc[q.disciplina] = { correct: 0, total: 0 };
        bDisc[q.disciplina].total++;
        if (ans.correct) bDisc[q.disciplina].correct++;
      });
      breakdown.innerHTML = Object.entries(bDisc).map(([id, s]) => {
        const disc = EDITAL.getDisciplinaById(id);
        return `<div style="font-size:0.8rem;margin-bottom:6px;display:flex;justify-content:space-between;">
          <span>${disc ? disc.icon + ' ' + disc.nome : id}</span>
          <span style="color:${colorByPct(pct(s.correct,s.total))};font-weight:700">${s.correct}/${s.total} (${pct(s.correct,s.total)}%)</span>
        </div>`;
      }).join('');
    }
  },

  reviewWrong() {
    document.getElementById('filter-cobrado').value = 'erradas';
    this.updateFilteredCount();
    document.getElementById('quiz-filter-screen').classList.remove('hidden');
    document.getElementById('quiz-active-screen').classList.add('hidden');
  }
};


      // =================== FLASHCARDS ==========================
const FLASHCARDS = {
  resetView() {
    STATE.flashcards.deckId = null;
    const sel = document.getElementById('lei-seca-select');
    if (sel) sel.value = '';
    const container = document.getElementById('lei-seca-content');
    if (container) {
      container.innerHTML = `
        <div class="lei-placeholder">
          <div class="placeholder-icon">📖</div>
          <h3>Selecione uma Lei ou Disciplina</h3>
          <p>Estude os principais artigos cobrados em concursos policiais</p>
          <div class="quick-access-grid" id="quick-access-grid"></div>
        </div>
      `;
    }
    APP.initLeiSeca();
    const fcBtn = document.getElementById('btn-flashcard-mode');
    if (fcBtn) fcBtn.disabled = true;
    const voltarBtn = document.getElementById('btn-voltar-lei');
    if (voltarBtn) voltarBtn.style.display = 'none';
  },

  loadDeck(deckId) {
    if (!deckId) {
      this.resetView();
      return;
    }
    
    let deck;
    if (deckId === 'marked') {
      const markedIds = STATE.stats.markedFlashcards || [];
      if (markedIds.length === 0) {
        showToast('Nenhum artigo marcado para revisão ainda!');
        this.resetView();
        return;
      }
      const allArticles = [
        ...LEI_SECA.getAllArticles(),
        ...(typeof LEI_SECA_EXTRA !== 'undefined' ? LEI_SECA_EXTRA.getAllArticles() : [])
      ];
      const markedArticles = allArticles.filter(art => markedIds.includes(art.id));
      
      deck = {
        id: 'marked',
        nome: 'Artigos Marcados',
        sigla: 'Seus artigos salvos para revisão',
        icon: '🔖',
        secoes: [{
          titulo: '📌 Revisão Personalizada',
          artigos: markedArticles
        }]
      };
    } else {
      deck = LEI_SECA.getDeck(deckId) ||
             (typeof LEI_SECA_EXTRA !== 'undefined' ? LEI_SECA_EXTRA.getDeck(deckId) : null);
    }
    
    if (!deck) return;
    const container = document.getElementById('lei-seca-content');
    container.innerHTML = '';
    const header = document.createElement('div');
    header.innerHTML = `
      <button class="btn btn-outline btn-small" style="margin-bottom:12px; display:inline-flex; align-items:center;" onclick="FLASHCARDS.resetView()">
        ← Voltar para as Leis
      </button>
      <h2 style="font-size:1.1rem;font-weight:800;margin-bottom:4px;">${deck.icon} ${deck.nome}</h2>
      <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:16px;">${deck.sigla}${deck.destaque ? ' — <span style="color:var(--gold)">🔥 Disciplina de Alto Peso</span>' : ''}</p>
    `;
    container.appendChild(header);
    deck.secoes.forEach(sec => {
      const section = document.createElement('div');
      section.className = 'lei-section';
      section.innerHTML = `<div class="lei-section-title">${sec.titulo}</div>`;
      sec.artigos.forEach(art => {
        const card = document.createElement('div');
        card.className = `article-card${art.cobrado === 'hot' ? ' cobrado-hot' : art.cobrado === 'medium' ? ' cobrado-medium' : ''}`;
        const badgesHtml = [
          art.cobrado === 'hot' ? '<span class="article-badge badge-hot">🔥 Muito cobrado</span>' : '',
          ...(art.anos || []).map(a => `<span class="article-badge badge-year">${a}</span>`)
        ].filter(Boolean).join('');
        card.innerHTML = `
          <div class="article-num">${art.artigo}</div>
          <div class="article-title">${art.titulo}</div>
          <div class="article-text">${art.verso}</div>
          ${badgesHtml ? `<div class="article-badges">${badgesHtml}</div>` : ''}
        `;
        section.appendChild(card);
      });
      container.appendChild(section);
    });
    const fcBtn = document.getElementById('btn-flashcard-mode');
    if (fcBtn) fcBtn.disabled = false;
    const voltarBtn = document.getElementById('btn-voltar-lei');
    if (voltarBtn) voltarBtn.style.display = 'inline-block';
    const allCards = [];
    deck.secoes.forEach(sec => sec.artigos.forEach(art => allCards.push({ ...art, deckNome: deck.nome })));
    STATE.flashcards.deckId = deckId;
    STATE.flashcards.cards = allCards;
  },

  startFlashcardMode() {
    if (!STATE.flashcards.cards.length) return;
    STATE.flashcards.currentIndex = 0;
    STATE.flashcards.isFlipped = false;
    document.getElementById('flashcard-modal').classList.remove('hidden');
    this.renderCard();
  },

  renderCard() {
    const cards = STATE.flashcards.cards;
    const idx = STATE.flashcards.currentIndex;
    const card = cards[idx];
    if (!card) return;
    document.getElementById('fc-progress').textContent = `${idx + 1} / ${cards.length}`;
    document.getElementById('fc-topic').textContent = card.deckNome || '';
    document.getElementById('fc-front').textContent = card.frente;
    document.getElementById('fc-back').textContent = card.verso;
    document.getElementById('fc-artigo').textContent = card.artigo || '';
    const fc = document.getElementById('flashcard');
    fc.classList.remove('flipped');
    STATE.flashcards.isFlipped = false;
    const pctFill = ((idx + 1) / cards.length) * 100;
    document.getElementById('fc-progress-fill').style.width = pctFill + '%';
    
    // Update mark button text & class
    const markBtn = document.querySelector('.flashcard-controls button[onclick="FLASHCARDS.mark()"]');
    if (markBtn) {
      const isMarked = (STATE.stats.markedFlashcards || []).includes(card.id);
      markBtn.innerHTML = isMarked ? '🔖 Desmarcar' : '🔖 Marcar';
      markBtn.classList.toggle('active', isMarked);
    }
  },

  flip() {
    const fc = document.getElementById('flashcard');
    STATE.flashcards.isFlipped = !STATE.flashcards.isFlipped;
    fc.classList.toggle('flipped', STATE.flashcards.isFlipped);
  },

  next() {
    const cards = STATE.flashcards.cards;
    if (STATE.flashcards.currentIndex < cards.length - 1) {
      STATE.flashcards.currentIndex++;
      this.renderCard();
    } else {
      showToast('🎉 Você chegou ao final do deck!');
    }
  },

  prev() {
    if (STATE.flashcards.currentIndex > 0) {
      STATE.flashcards.currentIndex--;
      this.renderCard();
    }
  },

  mark() {
    const card = STATE.flashcards.cards[STATE.flashcards.currentIndex];
    if (!card) return;
    if (!STATE.stats.markedFlashcards) STATE.stats.markedFlashcards = [];
    const idx = STATE.stats.markedFlashcards.indexOf(card.id);
    if (idx === -1) { 
      STATE.stats.markedFlashcards.push(card.id); 
      showToast('🔖 Marcado para revisar!'); 
    } else { 
      STATE.stats.markedFlashcards.splice(idx, 1); 
      showToast('Marcação removida'); 
    }
    saveState();
    
    // Update button text immediately
    const markBtn = document.querySelector('.flashcard-controls button[onclick="FLASHCARDS.mark()"]');
    if (markBtn) {
      const isMarked = STATE.stats.markedFlashcards.includes(card.id);
      markBtn.innerHTML = isMarked ? '🔖 Desmarcar' : '🔖 Marcar';
      markBtn.classList.toggle('active', isMarked);
    }
    
    // Refresh Lei Seca dashboard if we exit/reload
    this.refreshLeiSecaView();
  },

  refreshLeiSecaView() {
    const sel = document.getElementById('lei-seca-select');
    // If we are currently viewing the marked deck, reload it dynamically
    if (sel && sel.value === 'marked') {
      this.loadDeck('marked');
    }
  },

  closeModal() {
    document.getElementById('flashcard-modal').classList.add('hidden');
  }
};

// =================== SIMULADO ============================
const SIMULADO = {
  start() {
    const timeLimit = parseInt(document.getElementById('sim-time-select').value);
    const mode = document.getElementById('sim-mode-select').value;
    STATE.simulado.timeLimit = timeLimit;
    STATE.simulado.mode = mode;
    const questions = this.generateQuestions();
    if (!questions.length) { showToast('Questões insuficientes no banco!'); return; }
    STATE.simulado.questions = questions;
    STATE.simulado.currentIndex = 0;
    STATE.simulado.answers = {};
    STATE.simulado.startTime = Date.now();
    STATE.simulado.active = true;
    document.getElementById('simulado-setup-screen').classList.add('hidden');
    document.getElementById('simulado-results-screen').classList.add('hidden');
    document.getElementById('simulado-active-screen').classList.remove('hidden');
    document.getElementById('sim-total').textContent = questions.length;
    this.initNavigator();
    this.renderQuestion();
    if (timeLimit > 0) this.startTimer(timeLimit * 60);
  },

  generateQuestions() {
    const result = [];
    EDITAL.disciplinas.forEach(d => {
      const pool = shuffle(ALL_QUESTIONS.filter(q => q.disciplina === d.id));
      const selected = pool.slice(0, d.questoes);
      result.push(...selected);
    });
    return result;
  },

  startTimer(seconds) {
    let remaining = seconds;
    document.getElementById('timer-display').textContent = formatTime(remaining);
    if (STATE.simulado.timerInterval) clearInterval(STATE.simulado.timerInterval);
    STATE.simulado.timerInterval = setInterval(() => {
      remaining--;
      document.getElementById('timer-display').textContent = formatTime(remaining);
      if (remaining <= 600) document.getElementById('sim-timer').classList.add('urgent');
      if (remaining <= 0) {
        clearInterval(STATE.simulado.timerInterval);
        showToast('⏰ Tempo esgotado! Finalizando...', 3000);
        setTimeout(() => this.finish(), 2000);
      }
    }, 1000);
  },

  initNavigator() {
    const grid = document.getElementById('navigator-grid');
    grid.innerHTML = '';
    STATE.simulado.questions.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'nav-q-btn';
      btn.textContent = i + 1;
      btn.id = `nav-q-${i}`;
      btn.onclick = () => { STATE.simulado.currentIndex = i; this.renderQuestion(); };
      grid.appendChild(btn);
    });
  },

  updateNavigator() {
    STATE.simulado.questions.forEach((_, i) => {
      const btn = document.getElementById(`nav-q-${i}`);
      if (!btn) return;
      btn.classList.remove('answered', 'current');
      if (STATE.simulado.answers[i] !== undefined) btn.classList.add('answered');
      if (i === STATE.simulado.currentIndex) btn.classList.add('current');
    });
    const answered = Object.keys(STATE.simulado.answers).length;
    const total = STATE.simulado.questions.length;
    document.getElementById('sim-answered').textContent = answered;
    document.getElementById('sim-unanswered-badge').textContent = `${total - answered} sem resp.`;
  },

  renderQuestion() {
    const q = STATE.simulado.questions[STATE.simulado.currentIndex];
    const disc = EDITAL.getDisciplinaById(q.disciplina);
    document.getElementById('sim-q-number').textContent = STATE.simulado.currentIndex + 1;
    document.getElementById('sim-q-disciplina').textContent = disc ? disc.nome : q.disciplina;
    const cobradoEl = document.getElementById('sim-q-cobrado');
    if (cobradoEl) cobradoEl.style.display = q.mostCobrado ? '' : 'none';
    document.getElementById('sim-question-text').textContent = q.enunciado;
    const altList = document.getElementById('sim-alternatives-list');
    altList.innerHTML = '';
    const existingAnswer = STATE.simulado.answers[STATE.simulado.currentIndex];
    q.alternativas.forEach(alt => {
      const btn = document.createElement('button');
      btn.className = 'alternative-btn';
      btn.dataset.letra = alt.letra;
      btn.innerHTML = `<span class="alt-letter">${alt.letra}</span><span>${alt.texto}</span>`;
      if (existingAnswer) {
        btn.disabled = STATE.simulado.mode === 'real';
        if (STATE.simulado.mode === 'treino') {
          btn.disabled = true;
          if (alt.letra === q.gabarito) btn.classList.add('correct');
          else if (alt.letra === existingAnswer && alt.letra !== q.gabarito) btn.classList.add('wrong');
        } else {
          if (alt.letra === existingAnswer) btn.classList.add('selected');
        }
      } else {
        btn.onclick = () => this.selectAnswer(alt.letra);
      }
      altList.appendChild(btn);
    });
    if (existingAnswer && STATE.simulado.mode === 'treino') {
      const fb = document.getElementById('sim-feedback-card');
      fb.classList.remove('hidden');
      const isCorr = existingAnswer === q.gabarito;
      document.getElementById('sim-feedback-header').className = `feedback-header ${isCorr ? 'correct-header' : 'wrong-header'}`;
      document.getElementById('sim-feedback-header').textContent = isCorr ? '✅ Correto!' : `❌ Gabarito: ${q.gabarito}`;
      document.getElementById('sim-feedback-artigo').textContent = q.artigo || '';
      document.getElementById('sim-feedback-text').textContent = q.justificativa || '';
    } else {
      document.getElementById('sim-feedback-card').classList.add('hidden');
    }
    this.updateNavigator();
  },

  selectAnswer(letra) {
    STATE.simulado.answers[STATE.simulado.currentIndex] = letra;
    this.renderQuestion();
  },

  prevQuestion() {
    if (STATE.simulado.currentIndex > 0) {
      STATE.simulado.currentIndex--;
      this.renderQuestion();
    }
  },

  nextQuestion() {
    if (STATE.simulado.currentIndex < STATE.simulado.questions.length - 1) {
      STATE.simulado.currentIndex++;
      this.renderQuestion();
    }
  },

  toggleNavigator() {
    const nav = document.getElementById('sim-navigator');
    nav.classList.toggle('hidden');
  },

  confirmExit() {
    APP.openConfirmModal('Encerrar Simulado', 'Deseja encerrar? O progresso será perdido.', () => {
      if (STATE.simulado.timerInterval) clearInterval(STATE.simulado.timerInterval);
      STATE.simulado.active = false;
      document.getElementById('simulado-active-screen').classList.add('hidden');
      document.getElementById('simulado-setup-screen').classList.remove('hidden');
    });
  },

  finish() {
    if (STATE.simulado.timerInterval) clearInterval(STATE.simulado.timerInterval);
    checkStreak();
    const s = STATE.stats;
    const qs = STATE.simulado.questions;
    const answers = STATE.simulado.answers;
    let totalPts = 0, correct = 0, wrong = 0, blank = 0;
    const byDisc = {};
    EDITAL.disciplinas.forEach(d => { byDisc[d.id] = { correct: 0, total: 0, questoes: d.questoes, peso: d.peso, pontos: d.pontos, nome: d.nome, icon: d.icon }; });
    
    let simAnsweredCount = 0;
    let simCorrectCount = 0;

    qs.forEach((q, i) => {
      const ans = answers[i];
      const disc = byDisc[q.disciplina];
      if (disc) disc.total++;
      if (ans === undefined) { 
        blank++; 
        return; 
      }
      simAnsweredCount++;
      const isCorr = ans === q.gabarito;
      if (isCorr) {
        correct++;
        simCorrectCount++;
        if (disc) disc.correct++;
        totalPts += q.peso || 1;
      } else {
        wrong++;
      }

      // Update general statistics by discipline
      if (!s.byDiscipline[q.disciplina]) s.byDiscipline[q.disciplina] = { correct: 0, total: 0 };
      s.byDiscipline[q.disciplina].total++;
      if (isCorr) s.byDiscipline[q.disciplina].correct++;

      // Update general statistics by topic
      if (q.topico) {
        if (!s.byTopic[q.topico]) s.byTopic[q.topico] = { correct: 0, total: 0, disciplina: q.disciplina };
        s.byTopic[q.topico].total++;
        if (isCorr) s.byTopic[q.topico].correct++;
      }

      // Add to wrong questions for future quiz revision if incorrect
      if (!isCorr) {
        if (!s.wrongQuestions.includes(q.id)) s.wrongQuestions.push(q.id);
      }
    });

    const isApproved = totalPts >= EDITAL.pontuacaoMinima;
    const zerou = Object.entries(byDisc).some(([id, sd]) => {
      const disc = EDITAL.getDisciplinaById(id);
      return disc && sd.total > 0 && sd.correct === 0;
    });

    document.getElementById('simulado-active-screen').classList.add('hidden');
    document.getElementById('simulado-results-screen').classList.remove('hidden');
    const emoji = isApproved && !zerou ? '🏆' : zerou ? '⚠️' : '📊';
    document.getElementById('sim-result-emoji').textContent = emoji;
    const statusEl = document.getElementById('sim-result-status');
    if (isApproved && !zerou) {
      statusEl.textContent = '✅ APROVADO';
      statusEl.className = 'sim-result-status status-approved';
    } else {
      statusEl.textContent = zerou ? '❌ ZEROU UMA ÁREA — ELIMINADO' : '❌ ABAIXO DO MÍNIMO — ELIMINADO';
      statusEl.className = 'sim-result-status status-eliminated';
    }
    document.getElementById('sim-score-pts').textContent = totalPts;
    document.getElementById('sim-acertos').textContent = correct;
    document.getElementById('sim-erros').textContent = wrong;
    document.getElementById('sim-branco').textContent = blank;
    
    const discResultsEl = document.getElementById('sim-disc-results');
    discResultsEl.innerHTML = '';
    EDITAL.disciplinas.forEach(d => {
      const sd = byDisc[d.id];
      if (!sd) return;
      const p = pct(sd.correct, sd.total);
      const pts = sd.correct * d.peso;
      const row = document.createElement('div');
      row.className = 'sim-disc-result-row';
      row.innerHTML = `
        <span class="sdr-name">${d.icon} ${d.nome}</span>
        <span class="sdr-score ${sd.correct === 0 ? 'sdr-zeroed' : ''}" style="color:${colorByPct(p)}">${sd.correct}/${sd.total} (${p}%)</span>
        <span class="sdr-pts">${pts}pts</span>
      `;
      discResultsEl.appendChild(row);
    });

    // Update overall counts
    s.totalAnswered += simAnsweredCount;
    s.totalCorrect += simCorrectCount;
    s.totalWrong += (simAnsweredCount - simCorrectCount);
    s.todayCount += simAnsweredCount;

    // Record in dailyHistory
    const todayStr = new Date().toDateString();
    if (!s.dailyHistory) s.dailyHistory = {};
    if (!s.dailyHistory[todayStr]) s.dailyHistory[todayStr] = { answered: 0, correct: 0 };
    s.dailyHistory[todayStr].answered += simAnsweredCount;
    s.dailyHistory[todayStr].correct += simCorrectCount;

    // Streak logic
    const last = s.lastStudyDate;
    if (last && last !== todayStr) {
      const diff = (new Date(todayStr) - new Date(last)) / (1000 * 60 * 60 * 24);
      if (diff <= 1.5) {
        if (s.todayCount === simAnsweredCount) { // first study session of the day
          s.streak++;
        }
      } else {
        s.streak = 1;
      }
    } else if (!last) {
      s.streak = 1;
    }
    s.lastStudyDate = todayStr;

    const simRecord = {
      date: new Date().toISOString(),
      score: totalPts,
      correct, wrong, blank,
      approved: isApproved && !zerou,
      byDisc
    };
    s.simulados.push(simRecord);
    
    saveState();
    const streakEl = document.getElementById('streak-count');
    if (streakEl) streakEl.textContent = s.streak;
    
    this.renderSimuladoChart(byDisc);
  },

  renderSimuladoChart(byDisc) {
    const canvas = document.getElementById('sim-result-chart');
    if (!canvas) return;
    const existChart = Chart.getChart(canvas);
    if (existChart) existChart.destroy();
    const labels = EDITAL.disciplinas.map(d => d.nome.replace('Direito ', '').replace('Execução ', ''));
    const data = EDITAL.disciplinas.map(d => {
      const s = byDisc[d.id];
      return s ? pct(s.correct, s.total) : 0;
    });
    const colors = EDITAL.disciplinas.map(d => d.cor);
    new Chart(canvas, {
      type: 'bar',
      data: { labels, datasets: [{ label: '% Acertos', data, backgroundColor: colors.map(c => c + '99'), borderColor: colors, borderWidth: 1 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100, ticks: { color: '#8ba8cc', callback: v => v + '%' }, grid: { color: '#1e3a5f' } }, x: { ticks: { color: '#8ba8cc', maxRotation: 45 }, grid: { display: false } } } }
    });
  },

  reset() {
    STATE.simulado.active = false;
    document.getElementById('simulado-results-screen').classList.add('hidden');
    document.getElementById('simulado-setup-screen').classList.remove('hidden');
  },

  reviewAnswers() {
    const qs = STATE.simulado.questions;
    const answers = STATE.simulado.answers;
    if (!qs || qs.length === 0) {
      showToast('Nenhum simulado ativo para revisar.');
      return;
    }
    
    // Hide results screen and show review screen
    document.getElementById('simulado-results-screen').classList.add('hidden');
    document.getElementById('simulado-review-screen').classList.remove('hidden');
    
    // Populate review list
    const container = document.getElementById('sim-review-list');
    container.innerHTML = '';
    
    qs.forEach((q, i) => {
      const userAnswer = answers[i];
      const isCorrect = userAnswer === q.gabarito;
      const isBlank = userAnswer === undefined;
      
      const card = document.createElement('div');
      card.className = `review-question-card card`;
      card.dataset.status = isBlank ? 'blank' : (isCorrect ? 'correct' : 'wrong');
      
      const disc = EDITAL.getDisciplinaById(q.disciplina);
      const statusText = isBlank 
        ? '<span class="status-badge badge-warning">⚠️ Não Respondida</span>' 
        : (isCorrect ? '<span class="status-badge badge-success">✅ Correta</span>' : `<span class="status-badge badge-danger">❌ Errada (Sua resposta: ${userAnswer})</span>`);
        
      let altsHtml = '';
      q.alternativas.forEach(alt => {
        let altClass = '';
        if (alt.letra === q.gabarito) altClass = 'correct-alt';
        else if (alt.letra === userAnswer && !isCorrect) altClass = 'wrong-alt';
        
        altsHtml += `
          <div class="review-alternative ${altClass}">
            <span class="alt-letter">${alt.letra}</span>
            <span>${alt.texto}</span>
          </div>
        `;
      });
      
      card.innerHTML = `
        <div class="review-q-header">
          <div class="q-meta">
            <span class="q-number">Questão ${i + 1}</span>
            <span class="q-disciplina">${disc ? disc.nome : q.disciplina}</span>
            ${q.topico ? `<span class="q-topico">${q.topico}</span>` : ''}
          </div>
          <div class="q-status-badge">${statusText}</div>
        </div>
        <div class="review-q-text">${q.enunciado}</div>
        <div class="review-alts-list">${altsHtml}</div>
        <div class="review-feedback">
          <div class="feedback-title">💡 Justificativa & Lei Seca</div>
          <div class="feedback-artigo">${q.artigo || ''}</div>
          <div class="feedback-text">${q.justificativa || q.comentario || ''}</div>
        </div>
      `;
      container.appendChild(card);
    });
    
    // Update counts on filter buttons
    const countAll = qs.length;
    const countCorrect = qs.filter((_, i) => answers[i] === qs[i].gabarito).length;
    const countWrong = qs.filter((_, i) => answers[i] !== undefined && answers[i] !== qs[i].gabarito).length;
    const countBlank = qs.filter((_, i) => answers[i] === undefined).length;
    
    const btns = document.querySelectorAll('.review-filters .filter-buttons button');
    if (btns && btns.length >= 4) {
      btns[0].textContent = `Todas (${countAll})`;
      btns[1].textContent = `Corretas (${countCorrect})`;
      btns[2].textContent = `Erradas (${countWrong})`;
      btns[3].textContent = `Sem Resposta (${countBlank})`;
      
      // Make sure 'All' button is active
      btns.forEach(b => b.classList.remove('active'));
      btns[0].classList.add('active');
    }
  },
  
  filterReview(status) {
    const btns = document.querySelectorAll('.review-filters .filter-buttons button');
    btns.forEach(b => b.classList.remove('active'));
    
    const activeBtn = document.querySelector(`.review-filters .filter-buttons button[data-filter="${status}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    const cards = document.querySelectorAll('#sim-review-list .review-question-card');
    cards.forEach(card => {
      if (status === 'all') {
        card.style.display = '';
      } else {
        card.style.display = card.dataset.status === status ? '' : 'none';
      }
    });
  },
  
  exitReview() {
    document.getElementById('simulado-review-screen').classList.add('hidden');
    document.getElementById('simulado-results-screen').classList.remove('hidden');
  },

  startHistory() {
    APP.showTab('estatisticas');
  }
};

// =================== STATISTICS ==========================
const STATS = {
  disciplineChart: null,
  evolutionChart: null,
  radarChartInstance: null,

  initCharts() { /* charts initialized on render */ },

  render() {
    const s = STATE.stats;
    const setEl = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
    setEl('stats-total', s.totalAnswered);
    setEl('stats-correct', s.totalCorrect);
    setEl('stats-wrong', s.totalWrong);
    setEl('stats-percent', pct(s.totalCorrect, s.totalAnswered) + '%');
    this.renderDisciplineChart();
    this.renderEvolutionChart();
    this.renderDiscPerf();
    this.renderWeakStrong();
    this.renderSimuladoHistory();
  },

    renderDisciplineChart() {
    const canvas = document.getElementById('discipline-chart');
    if (!canvas) return;
    const existing = Chart.getChart(canvas);
    if (existing) existing.destroy();
    const labels = [], data = [], colors = [], dataPercents = [];
    EDITAL.disciplinas.forEach(d => {
      const s = STATE.stats.byDiscipline[d.id] || { correct: 0, total: 0 };
      if (s.total > 0) {
        labels.push(d.nome.replace('Direito ', ''));
        data.push(s.total);
        colors.push(d.cor);
        dataPercents.push(pct(s.correct, s.total));
      }
    });
    if (data.length === 0) { canvas.closest('.chart-card').innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px">Nenhuma questão respondida ainda.</p>'; return; }
    
    this.disciplineChart = new Chart(canvas, {
      type: 'doughnut',
      data: { labels, datasets: [{ data, backgroundColor: colors.map(c => c + 'bb'), borderColor: colors, borderWidth: 2 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { color: '#8ba8cc', font: { size: 10 }, boxWidth: 12 } } } }
    });

    // RADAR CHART
    const ctxRadar = document.getElementById('radar-chart');
    if (ctxRadar) {
      if (this.radarChartInstance) this.radarChartInstance.destroy();
      this.radarChartInstance = new Chart(ctxRadar, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Aproveitamento (%)',
            data: dataPercents,
            backgroundColor: 'rgba(29, 111, 239, 0.4)',
            borderColor: '#1d6fef',
            pointBackgroundColor: '#f0b429',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              pointLabels: { color: '#8ba8cc', font: { size: 10 } },
              ticks: { display: false, min: 0, max: 100, stepSize: 20 }
            }
          },
          plugins: { legend: { display: false } }
        }
      });
    }
  },

  renderDiscPerf() {
    const container = document.getElementById('disc-perf-list');
    if (!container) return;
    container.innerHTML = '';
    EDITAL.disciplinas.forEach(d => {
      const s = STATE.stats.byDiscipline[d.id] || { correct: 0, total: 0 };
      const p = pct(s.correct, s.total);
      const color = colorByPct(p);
      const row = document.createElement('div');
      row.className = 'disc-perf-row';
      row.innerHTML = `
        <div class="disc-perf-header">
          <span class="disc-perf-name">${d.icon} ${d.nome}</span>
          <span style="font-size:0.7rem;color:var(--text-muted)">${s.correct}/${s.total}</span>
          <span class="disc-perf-pct" style="color:${color}">${p}%</span>
        </div>
        <div class="disc-perf-bar-wrap">
          <div class="disc-perf-bar" style="width:${p}%;background:${color}"></div>
        </div>
      `;
      container.appendChild(row);
    });
  },

  renderWeakStrong() {
    const weakContainer = document.getElementById('weak-list');
    const strongContainer = document.getElementById('strong-list');
    if (!weakContainer || !strongContainer) return;
    const topics = Object.entries(STATE.stats.byTopic).map(([name, s]) => ({
      name, correct: s.correct, total: s.total, disciplina: s.disciplina,
      pct: pct(s.correct, s.total)
    })).filter(t => t.total >= 3);
    topics.sort((a, b) => a.pct - b.pct);
    const weak = topics.slice(0, 5);
    const strong = topics.slice(-5).reverse();
    weakContainer.innerHTML = weak.length ? weak.map(t =>
      `<div class="topic-row weak">
        <div class="topic-text"><strong>${t.name}</strong></div>
        <span class="topic-count">${t.correct}/${t.total}</span>
        <span class="topic-pct" style="color:${colorByPct(t.pct)}">${t.pct}%</span>
      </div>`).join('') : '<div class="empty-state">Sem dados suficientes ainda.</div>';
    strongContainer.innerHTML = strong.length ? strong.map(t =>
      `<div class="topic-row strong">
        <div class="topic-text"><strong>${t.name}</strong></div>
        <span class="topic-count">${t.correct}/${t.total}</span>
        <span class="topic-pct" style="color:${colorByPct(t.pct)}">${t.pct}%</span>
      </div>`).join('') : '<div class="empty-state">Sem dados suficientes ainda.</div>';
  },

  renderSimuladoHistory() {
    const container = document.getElementById('sim-history-list');
    if (!container) return;
    const sims = STATE.stats.simulados;
    if (!sims || sims.length === 0) {
      container.innerHTML = '<div class="empty-state">Nenhum simulado realizado ainda.</div>';
      return;
    }
    container.innerHTML = [...sims].reverse().slice(0, 10).map(s => {
      const d = new Date(s.date);
      return `<div class="sim-hist-row">
        <span class="sim-hist-date">📝 ${formatDate(d)}</span>
        <span class="sim-hist-score">${s.score}/145 pts</span>
        <span class="sim-hist-status ${s.approved ? 'approved' : 'eliminated'}">${s.approved ? '✅ Aprovado' : '❌ Eliminado'}</span>
      </div>`;
    }).join('');
  },

  renderEvolutionChart() {
    const canvas = document.getElementById('evolution-chart');
    if (!canvas) return;
    const existing = Chart.getChart(canvas);
    if (existing) existing.destroy();

    const labels = [];
    const dataAnswered = [];
    const dataCorrect = [];
    
    // Get last 7 days (including today)
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.toDateString();
      
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      labels.push(`${day}/${month}`);
      
      const dayData = STATE.stats.dailyHistory && STATE.stats.dailyHistory[dateStr]
        ? STATE.stats.dailyHistory[dateStr]
        : { answered: 0, correct: 0 };
        
      dataAnswered.push(dayData.answered);
      dataCorrect.push(dayData.correct);
    }

    this.evolutionChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Respondidas',
            data: dataAnswered,
            borderColor: '#3d8af7',
            backgroundColor: 'rgba(61, 138, 247, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
          },
          {
            label: 'Corretas',
            data: dataCorrect,
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: '#8ba8cc', font: { size: 10 } }
          }
        },
        scales: {
          y: {
            min: 0,
            ticks: { 
              color: '#8ba8cc', 
              precision: 0,
              stepSize: 5
            },
            grid: { color: 'rgba(30, 58, 95, 0.5)' }
          },
          x: {
            ticks: { color: '#8ba8cc' },
            grid: { display: false }
          }
        }
      }
    });
  },

  confirmReset() {
    APP.openConfirmModal('Resetar Estatísticas', 'Tem certeza? Todos os dados de progresso serão apagados permanentemente.', () => {
      STATE.stats = {
        totalAnswered: 0, totalCorrect: 0, totalWrong: 0,
        byDiscipline: {}, byTopic: {}, sessions: [], simulados: [],
        streak: 0, lastStudyDate: null, dailyGoal: 30, todayCount: 0,
        todayDate: new Date().toDateString(), markedForReview: [], wrongQuestions: [], seenQuestions: {},
        markedFlashcards: [], dailyHistory: {}
      };
      localStorage.removeItem(STORAGE_KEY);
      saveState();
      this.render();
      DASHBOARD.render();
      showToast('🗑️ Dados resetados!');
    });
  }
};

const CUSTOM_QUESTIONS_UI = {
  openManager() {
    // Populate discipline select in form if not already done
    const select = document.getElementById('cq-disciplina');
    if (select && select.options.length <= 1) {
      EDITAL.disciplinas.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.id;
        opt.textContent = d.nome;
        select.appendChild(opt);
      });
    }
    
    // Show modal and list view
    document.getElementById('custom-questions-modal').classList.remove('hidden');
    this.showList();
  },
  
  close() {
    document.getElementById('custom-questions-modal').classList.add('hidden');
  },
  
  showList() {
    document.getElementById('custom-questions-list-view').classList.remove('hidden');
    document.getElementById('custom-questions-form-view').classList.add('hidden');
    document.getElementById('custom-questions-title').textContent = 'Questões Personalizadas';
    this.renderList();
  },
  
  showAddForm() {
    document.getElementById('custom-questions-list-view').classList.add('hidden');
    document.getElementById('custom-questions-form-view').classList.remove('hidden');
    document.getElementById('custom-questions-title').textContent = 'Cadastrar Nova Questão';
    document.getElementById('custom-question-form').reset();
  },
  
  updateTopicSuggestions(discId) {
    const topicInput = document.getElementById('cq-topico');
    if (!topicInput || !discId) return;
    const disc = EDITAL.getDisciplinaById(discId);
    if (disc && disc.topicos && disc.topicos.length > 0) {
      topicInput.placeholder = `Ex: ${disc.topicos[0]}`;
    } else {
      topicInput.placeholder = 'Ex: Conceitos Gerais';
    }
  },
  
  renderList() {
    const list = CUSTOM_QUESTIONS.getAll();
    const tbody = document.getElementById('custom-questions-tbody');
    const emptyState = document.getElementById('custom-questions-empty');
    const table = document.getElementById('custom-questions-table');
    const countEl = document.getElementById('custom-questions-count');
    
    if (countEl) countEl.textContent = `${list.length} questão(ões) cadastrada(s)`;
    
    if (list.length === 0) {
      tbody.innerHTML = '';
      table.style.display = 'none';
      emptyState.classList.remove('hidden');
      return;
    }
    
    table.style.display = '';
    emptyState.classList.add('hidden');
    tbody.innerHTML = '';
    
    list.forEach(q => {
      const disc = EDITAL.getDisciplinaById(q.disciplina);
      const discName = disc ? disc.nome : q.disciplina;
      
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="disc-tag" style="background:${disc ? disc.cor + '22' : 'var(--bg-elevated)'}; color:${disc ? disc.cor : 'var(--text-secondary)'}">${discName}</span></td>
        <td><strong>${q.topico || '-'}</strong></td>
        <td class="text-truncate-cell" title="${q.enunciado}">${q.enunciado}</td>
        <td>
          <button class="btn btn-outline btn-small btn-danger-text" onclick="CUSTOM_QUESTIONS_UI.handleDelete('${q.id}')">Excluir</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },
  
  handleDelete(id) {
    APP.openConfirmModal('Excluir Questão', 'Deseja excluir permanentemente esta questão?', () => {
      CUSTOM_QUESTIONS.delete(id);
      this.renderList();
      showToast('Questão excluída com sucesso!');
    });
  },
  
  handleSave(e) {
    e.preventDefault();
    const disciplina = document.getElementById('cq-disciplina').value;
    const topico = document.getElementById('cq-topico').value;
    const dificuldade = document.getElementById('cq-dificuldade').value;
    const artigo = document.getElementById('cq-artigo').value;
    const enunciado = document.getElementById('cq-enunciado').value;
    const altA = document.getElementById('cq-alt-a').value;
    const altB = document.getElementById('cq-alt-b').value;
    const altC = document.getElementById('cq-alt-c').value;
    const altD = document.getElementById('cq-alt-d').value;
    const gabarito = document.getElementById('cq-gabarito').value;
    const justificativa = document.getElementById('cq-justificativa').value;
    
    const newQ = {
      disciplina,
      topico,
      dificuldade,
      peso: 1,
      mostCobrado: false,
      artigo,
      enunciado,
      alternativas: [
        { letra: 'A', texto: altA },
        { letra: 'B', texto: altB },
        { letra: 'C', texto: altC },
        { letra: 'D', texto: altD }
      ],
      gabarito,
      justificativa
    };
    
    CUSTOM_QUESTIONS.add(newQ);
    showToast('Questão cadastrada com sucesso!');
    this.showList();
  }
};

// =================== BOOT ================================
window.addEventListener('DOMContentLoaded', () => APP.init());
