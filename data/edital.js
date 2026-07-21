// ============================================================
// EDITAL.JS — Configuração do Edital PPRN-RN | Banca Avalia
// Data da Prova: 13 de Setembro de 2026
// ============================================================

const EDITAL = {
  concurso: 'Policial Penal do Rio Grande do Norte',
  sigla: 'PPRN-RN',
  banca: 'Instituto Avalia',
  dataProva: new Date('2026-09-13T08:00:00'),
  totalQuestoes: 100,
  pontuacaoMaxima: 145,
  pontuacaoMinima: 73,
  tempoProvaMinutos: 240,

  disciplinas: [
    {
      id: 'portugues',
      nome: 'Língua Portuguesa',
      questoes: 15,
      peso: 1,
      pontos: 15,
      cor: '#3b82f6',
      icon: '🔤',
      topicos: [
        'Ortografia e Acentuação',
        'Morfologia e Classes de Palavras',
        'Pronomes',
        'Tempos e Modos Verbais',
        'Vozes do Verbo',
        'Concordância Verbal e Nominal',
        'Regência Verbal e Nominal',
        'Crase',
        'Pontuação',
        'Coesão e Coerência Textual',
        'Interpretação de Texto',
        'Figuras de Linguagem'
      ],
      temasMaisCobrados: [
        { nome: 'Concordância Verbal', frequencia: 95 },
        { nome: 'Regência e Crase', frequencia: 88 },
        { nome: 'Interpretação de Texto', frequencia: 85 }
      ]
    },
    {
      id: 'historia',
      nome: 'História e Aspectos Geoeconômicos do RN',
      questoes: 5,
      peso: 1,
      pontos: 5,
      cor: '#8b5cf6',
      icon: '🗺️',
      topicos: [
        'História do Rio Grande do Norte',
        'Aspectos Econômicos do RN',
        'Aspectos Geográficos do RN',
        'Municípios e Regiões do RN',
        'Cultura e Patrimônio do RN',
        'Sistema Penitenciário do RN'
      ],
      temasMaisCobrados: [
        { nome: 'História do RN', frequencia: 80 },
        { nome: 'Aspectos Geoeconômicos', frequencia: 70 }
      ]
    },
    {
      id: 'etica',
      nome: 'Ética no Serviço Público',
      questoes: 5,
      peso: 1,
      pontos: 5,
      cor: '#06b6d4',
      icon: '⚖️',
      topicos: [
        'Ética e Moral',
        'Dec. 1.171/94 - Código de Ética do Servidor',
        'Lei 8.429/92 - Improbidade Administrativa',
        'Conduta Ética no Serviço Público',
        'Probidade Administrativa',
        'Transparência e Moralidade'
      ],
      temasMaisCobrados: [
        { nome: 'Código de Ética (Dec. 1.171/94)', frequencia: 90 },
        { nome: 'Improbidade Administrativa', frequencia: 75 }
      ]
    },
    {
      id: 'constitucional',
      nome: 'Direito Constitucional',
      questoes: 10,
      peso: 1,
      pontos: 10,
      cor: '#f59e0b',
      icon: '📜',
      topicos: [
        'Princípios Fundamentais (Art. 1-4)',
        'Direitos e Garantias Fundamentais (Art. 5)',
        'Direitos Sociais (Art. 6-11)',
        'Organização do Estado (Art. 18-36)',
        'Organização dos Poderes',
        'Segurança Pública (Art. 144)',
        'Administração Pública (Art. 37-43)',
        'Poder Judiciário',
        'Ministério Público',
        'Controle de Constitucionalidade'
      ],
      temasMaisCobrados: [
        { nome: 'Art. 5º - Direitos Fundamentais', frequencia: 95 },
        { nome: 'Segurança Pública - Art. 144', frequencia: 88 },
        { nome: 'Administração Pública - Art. 37', frequencia: 80 }
      ]
    },
    {
      id: 'administrativo',
      nome: 'Direito Administrativo',
      questoes: 10,
      peso: 1,
      pontos: 10,
      cor: '#10b981',
      icon: '🏛️',
      topicos: [
        'Princípios da Adm. Pública (LIMPE)',
        'Atos Administrativos',
        'Poderes Administrativos',
        'Organização Administrativa',
        'Agentes Públicos',
        'Licitação e Contratos',
        'Serviços Públicos',
        'Controle da Administração',
        'Responsabilidade Civil do Estado',
        'Improbidade Administrativa'
      ],
      temasMaisCobrados: [
        { nome: 'Princípios (LIMPE)', frequencia: 95 },
        { nome: 'Atos Administrativos', frequencia: 88 },
        { nome: 'Poder de Polícia', frequencia: 80 }
      ]
    },
    {
      id: 'dh',
      nome: 'Direitos Humanos',
      questoes: 10,
      peso: 1,
      pontos: 10,
      cor: '#ec4899',
      icon: '🕊️',
      topicos: [
        'Declaração Universal dos Direitos Humanos (1948)',
        'Pacto Internacional dos Direitos Civis e Políticos',
        'Pacto Internacional dos Direitos Econômicos',
        'Convenção Americana de DH (Pacto de São José)',
        'Dignidade da Pessoa Humana',
        'Regras de Mandela (ONU)',
        'Regras Mínimas para Tratamento de Presos',
        'Proteção Contra Tortura - CAT',
        'Direitos Humanos e Segurança Pública',
        'Sistema Interamericano de DH'
      ],
      temasMaisCobrados: [
        { nome: 'Declaração Universal (1948)', frequencia: 90 },
        { nome: 'Pacto de São José da Costa Rica', frequencia: 85 },
        { nome: 'Regras de Mandela', frequencia: 80 }
      ]
    },
    {
      id: 'lep',
      nome: 'Execução Penal (LEP)',
      questoes: 15,
      peso: 2,
      pontos: 30,
      cor: '#ef4444',
      icon: '🔒',
      destaque: true,
      topicos: [
        'Disposições Gerais (Art. 1-5)',
        'Assistência ao Preso (Art. 10-27)',
        'Trabalho do Preso (Art. 28-37)',
        'Deveres e Direitos do Preso (Art. 38-47)',
        'Faltas Disciplinares e Sanções (Art. 49-60)',
        'RDD - Regime Disciplinar Diferenciado (Art. 52)',
        'Órgãos de Execução Penal (Art. 61-82)',
        'Estabelecimentos Penais (Art. 82-104)',
        'Regime Fechado (Art. 87-92)',
        'Regime Semiaberto (Art. 93-95)',
        'Regime Aberto (Art. 93-97)',
        'Permissão de Saída (Art. 120-121)',
        'Saída Temporária (Art. 122-125)',
        'Remição de Pena (Art. 126-130)',
        'Progressão e Regressão de Regime (Art. 112-118)',
        'Livramento Condicional (Art. 131-146)'
      ],
      temasMaisCobrados: [
        { nome: 'Remição de Pena (Art. 126-130)', frequencia: 98 },
        { nome: 'Saída Temporária vs Permissão de Saída', frequencia: 96 },
        { nome: 'Progressão de Regime (Art. 112)', frequencia: 95 },
        { nome: 'Assistência ao Preso (Art. 10-27)', frequencia: 92 },
        { nome: 'Faltas Disciplinares e RDD', frequencia: 90 },
        { nome: 'Trabalho do Preso - Remunera.', frequencia: 88 }
      ]
    },
    {
      id: 'legislacao',
      nome: 'Legislação Específica',
      questoes: 20,
      peso: 2,
      pontos: 40,
      cor: '#f97316',
      icon: '⚡',
      destaque: true,
      topicos: [
        'Lei 8.072/90 - Crimes Hediondos',
        'Lei 11.343/06 - Lei de Drogas',
        'Lei 9.455/97 - Lei de Tortura',
        'Lei 10.826/03 - Estatuto do Desarmamento',
        'Lei 11.340/06 - Lei Maria da Penha',
        'Lei 12.850/13 - Organiz. Criminosas',
        'Lei 13.869/19 - Abuso de Autoridade',
        'Lei 13.260/16 - Antiterrorismo',
        'ECA - Lei 8.069/90 (partes cobradas)',
        'Lei 7.716/89 - Crimes de Preconceito',
        'Legislação Penitenciária do RN'
      ],
      temasMaisCobrados: [
        { nome: 'Lei de Crimes Hediondos (8.072/90)', frequencia: 98 },
        { nome: 'Lei de Drogas (11.343/06)', frequencia: 95 },
        { nome: 'Lei de Tortura (9.455/97)', frequencia: 92 },
        { nome: 'Lei Maria da Penha (11.340/06)', frequencia: 90 },
        { nome: 'Org. Criminosas (12.850/13)', frequencia: 85 },
        { nome: 'Abuso de Autoridade (13.869/19)', frequencia: 80 }
      ]
    },
    {
      id: 'penal',
      nome: 'Direito Penal e Processual Penal',
      questoes: 10,
      peso: 2,
      pontos: 20,
      cor: '#a855f7',
      icon: '⚖️',
      destaque: true,
      topicos: [
        'Princípios do Direito Penal',
        'Aplicação da Lei Penal (Art. 1-12 CP)',
        'Teoria do Crime (Fato Típico, Ilicitude, Culpabilidade)',
        'Excludentes de Ilicitude (Art. 23-25 CP)',
        'Extinção da Punibilidade (Art. 107 CP)',
        'Penas (Art. 32-76 CP)',
        'Crimes em Espécie (mais cobrados)',
        'Inquérito Policial (Art. 4-23 CPP)',
        'Prisão em Flagrante (Art. 302-310 CPP)',
        'Prisão Preventiva (Art. 311-316 CPP)',
        'Medidas Cautelares Alternativas (Art. 319 CPP)',
        'Ação Penal (tipos e condições)'
      ],
      temasMaisCobrados: [
        { nome: 'Prisão em Flagrante (modalidades)', frequencia: 95 },
        { nome: 'Prisão Preventiva (fundamentos)', frequencia: 90 },
        { nome: 'Excludentes de Ilicitude', frequencia: 88 },
        { nome: 'Inquérito Policial', frequencia: 85 }
      ]
    }
  ],

  get totalPeso() {
    return this.disciplinas.reduce((sum, d) => sum + (d.questoes * d.peso), 0);
  },

  getDisciplinaById(id) {
    return this.disciplinas.find(d => d.id === id);
  },

  getDisciplinasComPeso2() {
    return this.disciplinas.filter(d => d.peso === 2);
  }
};
