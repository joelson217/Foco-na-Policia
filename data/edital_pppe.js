// ============================================================
// EDITAL_PPPE.JS — Configuração do curso PPPE (Polícia Penal do
// Estado de Pernambuco), banca Cebraspe.
//
// IMPORTANTE: o próximo concurso (2026/2027, 700 vagas) teve a
// comissão organizadora formada em 27/08/2026, mas o edital ainda
// NÃO foi publicado (previsão: ainda em 2026, prova no 1º trimestre
// de 2027). Os dados abaixo são do último edital efetivamente
// realizado (SERES-PE/Cebraspe), usado como melhor referência
// disponível até a publicação do edital novo — data da prova e
// banca aqui são estimativas, não definitivos.
//
// Cebraspe não usa peso multiplicador por disciplina: as 60 questões
// valem o mesmo (1,25 pt cada, total 75 pts). A distribuição de
// questões por disciplina abaixo é uma estimativa de estudo baseada
// nos blocos do último edital (P1 Gerais + P2 Específicos), não uma
// contagem oficial questão-a-questão (que varia a cada edital).
// ============================================================

const EDITAL_PPPE = {
  concurso: 'Policial Penal do Estado de Pernambuco',
  sigla: 'PPPE',
  banca: 'Cebraspe (estimado)',
  dataProva: null, // edital 2026/2027 ainda não publicado
  totalQuestoes: 60,
  pontuacaoMaxima: 75,
  pontuacaoMinima: 45,
  tempoProvaMinutos: 240,

  disciplinas: [
    {
      id: 'penal',
      nome: 'Direito Penal e Processual Penal',
      questoes: 17,
      peso: 1,
      pontos: 21.25,
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
    },
    {
      id: 'legislacao_pe',
      nome: 'Legislação Estadual (PE)',
      questoes: 5,
      peso: 1,
      pontos: 6.25,
      cor: '#059669',
      icon: '🏛️',
      destaque: true,
      topicos: [
        'Lei 15.755/2016 - Código Penitenciário de PE (objetivo e finalidade)',
        'Estabelecimentos Penais e Padrão de Celas',
        'Direitos e Deveres do Preso (estadual)',
        'Faltas Disciplinares, RDD e Sanções',
        'Procedimento Disciplinar e Prescrição',
        'LC 150/2009 - Plano de Cargos GOSPEPE',
        'LC 422/2019 - Atribuições do Cargo',
        'LC 106/2007 - Antecedente das Normas Disciplinares',
        'Constituição do Estado de PE - Art. 101-104 (Polícia Penal)',
        'Lei 6.123/1968 - Estatuto dos Servidores Civis (deveres, proibições, penas, prescrição)'
      ],
      temasMaisCobrados: [
        { nome: 'Faltas Disciplinares e RDD (estadual)', frequencia: 92 },
        { nome: 'Estabelecimentos Penais (Art. 23)', frequencia: 85 },
        { nome: 'Prescrição de Faltas (Art. 150 e Lei 6.123/68)', frequencia: 80 },
        { nome: 'Plano de Cargos GOSPEPE', frequencia: 70 },
        { nome: 'Penas Disciplinares do Estatuto (Lei 6.123/68)', frequencia: 75 },
        { nome: 'Polícia Penal na Constituição de PE (Art. 101-104)', frequencia: 68 }
      ]
    },
    {
      id: 'constitucional',
      nome: 'Direito Constitucional',
      questoes: 5,
      peso: 1,
      pontos: 6.25,
      cor: '#f59e0b',
      icon: '📜',
      topicos: [
        'Princípios Fundamentais (Art. 1-4)',
        'Direitos e Garantias Fundamentais (Art. 5)',
        'Direitos Sociais (Art. 6-11)',
        'Organização do Estado (Art. 18-36)',
        'Segurança Pública (Art. 144)',
        'Administração Pública (Art. 37-43)'
      ],
      temasMaisCobrados: [
        { nome: 'Art. 5º - Direitos Fundamentais', frequencia: 95 },
        { nome: 'Segurança Pública - Art. 144', frequencia: 88 }
      ]
    },
    {
      id: 'administrativo',
      nome: 'Direito Administrativo',
      questoes: 5,
      peso: 1,
      pontos: 6.25,
      cor: '#10b981',
      icon: '🏛️',
      topicos: [
        'Princípios da Adm. Pública (LIMPE)',
        'Atos Administrativos',
        'Poderes Administrativos',
        'Agentes Públicos',
        'Licitação e Contratos',
        'Improbidade Administrativa'
      ],
      temasMaisCobrados: [
        { nome: 'Princípios (LIMPE)', frequencia: 95 },
        { nome: 'Atos Administrativos', frequencia: 88 }
      ]
    },
    {
      id: 'dh',
      nome: 'Direitos Humanos e Participação Social',
      questoes: 4,
      peso: 1,
      pontos: 5,
      cor: '#ec4899',
      icon: '🕊️',
      topicos: [
        'Declaração Universal dos Direitos Humanos (1948)',
        'Regras de Mandela (ONU) - Tratamento de Presos',
        'Convenção Americana de DH (Pacto de São José)',
        'Participação Social e Controle Externo'
      ],
      temasMaisCobrados: [
        { nome: 'Regras de Mandela', frequencia: 88 },
        { nome: 'Declaração Universal (1948)', frequencia: 82 }
      ]
    },
    {
      id: 'lep',
      nome: 'Execução Penal (LEP)',
      questoes: 4,
      peso: 1,
      pontos: 5,
      cor: '#ef4444',
      icon: '🔒',
      topicos: [
        'Disposições Gerais (Art. 1-5)',
        'Direitos e Deveres do Preso (Art. 38-47)',
        'Faltas Disciplinares e RDD (Art. 52)',
        'Progressão e Regressão de Regime (Art. 112-118)',
        'Remição de Pena (Art. 126-130)'
      ],
      temasMaisCobrados: [
        { nome: 'Progressão de Regime (Art. 112)', frequencia: 92 },
        { nome: 'Remição de Pena', frequencia: 85 }
      ]
    },
    {
      id: 'legislacao',
      nome: 'Legislação Especial (Federal)',
      questoes: 5,
      peso: 1,
      pontos: 6.25,
      cor: '#f97316',
      icon: '⚡',
      topicos: [
        'Lei 8.072/90 - Crimes Hediondos',
        'Lei 11.343/06 - Lei de Drogas',
        'Lei 9.455/97 - Lei de Tortura',
        'Lei 10.826/03 - Estatuto do Desarmamento',
        'Lei 11.340/06 - Lei Maria da Penha',
        'Lei 9.099/95 - Juizados Especiais (JECRIM)'
      ],
      temasMaisCobrados: [
        { nome: 'Lei de Drogas (11.343/06)', frequencia: 92 },
        { nome: 'Lei Maria da Penha (11.340/06)', frequencia: 88 }
      ]
    },
    {
      id: 'portugues',
      nome: 'Língua Portuguesa',
      questoes: 4,
      peso: 1,
      pontos: 5,
      cor: '#3b82f6',
      icon: '🔤',
      topicos: [
        'Interpretação de Texto',
        'Concordância Verbal e Nominal',
        'Regência Verbal e Nominal',
        'Crase',
        'Coesão e Coerência Textual'
      ],
      temasMaisCobrados: [
        { nome: 'Interpretação de Texto', frequencia: 95 },
        { nome: 'Concordância Verbal', frequencia: 88 }
      ]
    },
    {
      id: 'informatica',
      nome: 'Noções de Informática',
      questoes: 4,
      peso: 1,
      pontos: 5,
      cor: '#0ea5e9',
      icon: '💻',
      topicos: [
        'Sistema Operacional (Windows e Linux) - Conceitos e Atalhos',
        'Editor de Texto, Planilha Eletrônica e Apresentações',
        'Internet, Navegadores, Sítios de Busca e Correio Eletrônico',
        'Grupos de Discussão e Redes Sociais',
        'Segurança da Informação (Malware, Phishing, Backup, Autenticação)',
        'Redes de Computadores e Computação em Nuvem',
        'Organização e Gerenciamento de Informações (Arquivos e Pastas)'
      ],
      temasMaisCobrados: [
        { nome: 'Segurança da Informação', frequencia: 90 },
        { nome: 'Planilha Eletrônica (fórmulas)', frequencia: 82 },
        { nome: 'Sistema Operacional (Windows/Linux)', frequencia: 75 },
        { nome: 'Internet e Sítios de Busca', frequencia: 70 }
      ]
    },
    {
      id: 'etica',
      nome: 'Ética no Serviço Público',
      questoes: 3,
      peso: 1,
      pontos: 3.75,
      cor: '#06b6d4',
      icon: '⚖️',
      topicos: [
        'Dec. 1.171/94 - Código de Ética do Servidor',
        'Lei 8.429/92 - Improbidade Administrativa'
      ],
      temasMaisCobrados: [
        { nome: 'Código de Ética (Dec. 1.171/94)', frequencia: 90 }
      ]
    },
    {
      id: 'rlm',
      nome: 'Raciocínio Lógico-Matemático',
      questoes: 4,
      peso: 1,
      pontos: 5,
      cor: '#14b8a6',
      icon: '🧮',
      topicos: [
        'Proposições e Conectivos Lógicos',
        'Negação e Equivalências (Contrapositiva, Leis de De Morgan)',
        'Diagramas Lógicos (Venn)',
        'Lógica de Primeira Ordem (Quantificadores)',
        'Argumentos, Silogismos e Analogias',
        'Sequências Lógicas, Numéricas e Matriciais',
        'Conjuntos, Probabilidade e Combinatória',
        'Problemas Aritméticos e Geométricos'
      ],
      temasMaisCobrados: [
        { nome: 'Negação de Proposições', frequencia: 90 },
        { nome: 'Equivalências Lógicas e Leis de De Morgan', frequencia: 88 },
        { nome: 'Diagramas Lógicos e Conjuntos', frequencia: 78 },
        { nome: 'Raciocínio Matricial e Sequências', frequencia: 72 }
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
