// ============================================================
// EDITAL_PCPE.JS — Configuração dos cursos PCPE (Polícia Civil do
// Estado de Pernambuco), cargos Agente e Escrivão de Polícia,
// banca Cebraspe.
//
// IMPORTANTE: o próximo concurso da PCPE (2026/2027) ainda NÃO teve
// edital publicado. Os dados abaixo foram reconstruídos a partir do
// último edital efetivamente realizado (PC-PE 2023, Cebraspe) via
// fontes secundárias (PDF oficial do Cebraspe é digitalizado/imagem,
// não extraível em texto), cruzando o resumo de disciplinas de blogs
// especializados (estrategiaconcursos) com a legislação real:
//   - Lei 6.425/1972 (Estatuto dos Policiais Civis de PE) — Alepe Legis
//   - Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis) — texto
//     oficial via meuvademecumonline.com.br
// Banca, data da prova e distribuição exata de questões são
// estimativas de estudo, não dado oficial do edital novo (que pode
// alterar quantidade de questões por disciplina).
//
// Disciplinas exclusivas de cada cargo (bloco de conhecimentos
// específicos): Contabilidade Geral (Agente) e Arquivologia
// (Escrivão). As demais disciplinas (Legislação Penal Especial,
// Legislação Estadual, Constitucional, Administrativo, Penal e
// Processual Penal, Português, RLM, Informática, Estatística) são
// comuns aos dois cargos no edital real.
//
// "Legislação Penal Especial" (id: legislacao) foi confirmada como
// parte do conteúdo de Direito Penal da PCPE via fontes secundárias
// (blogs de concurso que reproduzem o edital verticalizado): Lei de
// Drogas, Tortura, Desarmamento, Hediondos, Maria da Penha, Abuso de
// Autoridade, Organização Criminosa e ECA. Reaproveita os bancos
// QUESTIONS_LEGISLACAO/QUESTIONS_EXTRA_LEGISLACAO (já usados por
// PPRN/PPPE), pois cobrem exatamente essas leis.
// ============================================================

const DISCIPLINAS_PCPE_COMUNS = [
  {
    id: 'penal',
    nome: 'Direito Penal e Processual Penal',
    questoes: 6,
    peso: 1,
    pontos: 7.5,
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
      'Ação Penal (tipos e condições)',
      'Cadeia de Custódia da Prova Pericial (Art. 158-A a 158-F CPP, Pacote Anticrime)'
    ],
    temasMaisCobrados: [
      { nome: 'Inquérito Policial (atribuições da Polícia Civil)', frequencia: 95 },
      { nome: 'Cadeia de Custódia da Prova (Pacote Anticrime)', frequencia: 92 },
      { nome: 'Prisão em Flagrante (modalidades)', frequencia: 90 },
      { nome: 'Prisão Preventiva (fundamentos)', frequencia: 85 },
      { nome: 'Excludentes de Ilicitude', frequencia: 80 }
    ]
  },
  {
    id: 'legislacao',
    nome: 'Legislação Penal Especial',
    questoes: 6,
    peso: 1,
    pontos: 7.5,
    cor: '#f97316',
    icon: '⚡',
    destaque: true,
    topicos: [
      'Lei 11.343/06 - Lei de Drogas',
      'Lei 9.455/97 - Lei de Tortura',
      'Lei 10.826/03 - Estatuto do Desarmamento',
      'Lei 8.072/90 - Crimes Hediondos',
      'Lei 11.340/06 - Lei Maria da Penha',
      'Lei 12.850/13 - Organização Criminosa',
      'Lei 13.869/19 - Abuso de Autoridade',
      'Lei 8.069/90 - Estatuto da Criança e do Adolescente (ECA)',
      'Lei 9.099/95 - Juizados Especiais Criminais (JECRIM)'
    ],
    temasMaisCobrados: [
      { nome: 'Lei de Drogas - usuário x traficante', frequencia: 92 },
      { nome: 'Organização Criminosa (conceito e colaboração premiada)', frequencia: 88 },
      { nome: 'Lei Maria da Penha', frequencia: 85 },
      { nome: 'Abuso de Autoridade', frequencia: 80 }
    ]
  },
  {
    id: 'legislacao_pcpe',
    nome: 'Legislação Estadual (PE) - Polícia Civil',
    questoes: 6,
    peso: 1,
    pontos: 7.5,
    cor: '#0891b2',
    icon: '🏛️',
    destaque: true,
    topicos: [
      'Lei 6.425/1972 - Estatuto dos Policiais Civis de PE (fundamento e provimento)',
      'Sistema Misto de Acesso (Art. 4º)',
      'Deveres e Transgressões Disciplinares (Art. 30-31)',
      'Penas Disciplinares e Processo Administrativo (Art. 34)',
      'Conselho Superior de Polícia',
      'Lei 14.735/2023 - Lei Orgânica Nacional das Polícias Civis (LONPC)',
      'Natureza Institucional e Funções Exclusivas (Art. 5-6)',
      'Estrutura Organizacional e Delegado-Geral (Art. 7-8)',
      'Garantias Funcionais - Porte de Arma e Prisão Especial (Art. 30)'
    ],
    temasMaisCobrados: [
      { nome: 'Deveres e Transgressões (Lei 6.425/72)', frequencia: 90 },
      { nome: 'Funções Exclusivas de Polícia Judiciária (LONPC, Art. 6º)', frequencia: 88 },
      { nome: 'Garantias Funcionais (LONPC, Art. 30)', frequencia: 78 },
      { nome: 'Processo Disciplinar e Penas (Art. 34)', frequencia: 72 }
    ]
  },
  {
    id: 'constitucional',
    nome: 'Direito Constitucional',
    questoes: 6,
    peso: 1,
    pontos: 7.5,
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
      { nome: 'Segurança Pública - Art. 144 (Polícia Civil)', frequencia: 92 }
    ]
  },
  {
    id: 'administrativo',
    nome: 'Direito Administrativo',
    questoes: 6,
    peso: 1,
    pontos: 7.5,
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
    id: 'portugues',
    nome: 'Língua Portuguesa',
    questoes: 8,
    peso: 1,
    pontos: 10,
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
    questoes: 6,
    peso: 1,
    pontos: 7.5,
    cor: '#0ea5e9',
    icon: '💻',
    topicos: [
      'Sistema Operacional (Windows e Linux) - Conceitos e Atalhos',
      'Editor de Texto, Planilha Eletrônica e Apresentações',
      'Internet, Navegadores, Sítios de Busca e Correio Eletrônico',
      'Segurança da Informação (Malware, Phishing, Backup, Autenticação)',
      'Redes de Computadores e Computação em Nuvem',
      'Organização e Gerenciamento de Informações (Arquivos e Pastas)'
    ],
    temasMaisCobrados: [
      { nome: 'Segurança da Informação', frequencia: 90 },
      { nome: 'Planilha Eletrônica (fórmulas)', frequencia: 80 }
    ]
  },
  {
    id: 'rlm',
    nome: 'Raciocínio Lógico-Matemático',
    questoes: 8,
    peso: 1,
    pontos: 10,
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
      { nome: 'Equivalências Lógicas e Leis de De Morgan', frequencia: 85 }
    ]
  },
  {
    id: 'estatistica',
    nome: 'Estatística',
    questoes: 4,
    peso: 1,
    pontos: 5,
    cor: '#8b5cf6',
    icon: '📊',
    topicos: [
      'População e Amostra',
      'Técnicas de Amostragem (Aleatória Simples, Estratificada, Sistemática)',
      'Classificação de Variáveis (Qualitativa e Quantitativa)',
      'Medidas de Dispersão (Variância, Desvio Padrão, Coeficiente de Variação)',
      'Distribuição de Frequência',
      'Correlação e Moda'
    ],
    temasMaisCobrados: [
      { nome: 'Amostragem (tipos)', frequencia: 85 },
      { nome: 'Medidas de Dispersão', frequencia: 80 }
    ]
  }
];

const EDITAL_PCPE_AGENTE = {
  concurso: 'Agente de Polícia Civil do Estado de Pernambuco',
  sigla: 'PCPE - Agente',
  banca: 'Cebraspe (estimado)',
  dataProva: null, // edital 2026/2027 ainda não publicado
  totalQuestoes: 60,
  pontuacaoMaxima: 75,
  pontuacaoMinima: 45,
  tempoProvaMinutos: 240,

  disciplinas: [
    ...DISCIPLINAS_PCPE_COMUNS,
    {
      id: 'contabilidade',
      nome: 'Contabilidade Geral',
      questoes: 4,
      peso: 1,
      pontos: 5,
      cor: '#eab308',
      icon: '💰',
      destaque: true,
      topicos: [
        'Conceito de Patrimônio e Equação Fundamental (Ativo = Passivo + PL)',
        'Classificação do Ativo (Circulante e Não Circulante)',
        'Método das Partidas Dobradas',
        'Regime de Competência x Regime de Caixa',
        'Demonstração do Resultado do Exercício (DRE)',
        'Balanço Patrimonial',
        'Depreciação',
        'Plano de Contas'
      ],
      temasMaisCobrados: [
        { nome: 'Equação Patrimonial Básica', frequencia: 88 },
        { nome: 'Regime de Competência x Caixa', frequencia: 82 }
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

const EDITAL_PCPE_ESCRIVAO = {
  concurso: 'Escrivão de Polícia Civil do Estado de Pernambuco',
  sigla: 'PCPE - Escrivão',
  banca: 'Cebraspe (estimado)',
  dataProva: null, // edital 2026/2027 ainda não publicado
  totalQuestoes: 60,
  pontuacaoMaxima: 75,
  pontuacaoMinima: 45,
  tempoProvaMinutos: 240,

  disciplinas: [
    ...DISCIPLINAS_PCPE_COMUNS,
    {
      id: 'arquivologia',
      nome: 'Arquivologia',
      questoes: 4,
      peso: 1,
      pontos: 5,
      cor: '#78716c',
      icon: '🗄️',
      destaque: true,
      topicos: [
        'Conceito de Arquivo',
        'Teoria das Três Idades (Corrente, Intermediário, Permanente)',
        'Princípio da Proveniência',
        'Princípio da Organicidade',
        'Gestão de Documentos (Lei 8.159/1991)',
        'Tabela de Temporalidade e Avaliação de Documentos',
        'Protocolo e Classificação por Gênero'
      ],
      temasMaisCobrados: [
        { nome: 'Teoria das Três Idades', frequencia: 90 },
        { nome: 'Gestão de Documentos (Lei 8.159/91)', frequencia: 82 }
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
