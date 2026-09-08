// ============================================================
// EDITAL_PMPE.JS — Configuração do curso PMPE (Polícia Militar do
// Estado de Pernambuco), cargo Soldado (nível médio), banca
// Instituto AOCP.
//
// IMPORTANTE: o próximo concurso da PMPE (2026/2027, ~1.320 vagas)
// ainda NÃO teve edital publicado, e a banca ainda está em
// definição. Os dados abaixo foram reconstruídos a partir do
// último edital efetivamente realizado (PM-PE 2023/2024, Instituto
// AOCP), via fontes secundárias (guias de curso especializados),
// cruzadas com a legislação real (Lei 6.783/1974 - Estatuto dos
// Policiais-Militares de PE, via Alepe Legis).
//
// Diferença fundamental em relação à PPPE/PCPE: para o cargo de
// SOLDADO (esmagadora maioria das vagas: ~2.400 de 2.700 no último
// edital), NÃO cai Direito Penal, Processual Penal nem Direito
// Penal Militar — essas disciplinas só aparecem na prova de
// Oficial (nível superior, minoria das vagas, não coberta por este
// edital). Os 6 blocos reais de Soldado são: Português, História
// de Pernambuco, Raciocínio Lógico, Informática, Direito
// Constitucional e Direitos Humanos e Legislação Extravagante.
//
// "Direitos Humanos e Legislação Extravagante" é UM bloco só no
// edital real (10 questões), aqui desmembrado em 3 disciplinas
// (dh, legislacao, legislacao_pmpe) só para fins de organização e
// estatística de estudo no app — não é uma contagem oficial
// questão-a-questão.
//
// Atenção de fidelidade de formato: o Instituto AOCP usa 5
// alternativas por questão (A-E); o banco deste app usa o padrão
// de 4 alternativas (A-D) adotado nas demais carreiras. As questões
// continuam válidas para estudo de conteúdo, mas não replicam o
// formato exato de 5 alternativas da prova real.
// ============================================================

const EDITAL_PMPE = {
  concurso: 'Soldado da Polícia Militar do Estado de Pernambuco',
  sigla: 'PMPE',
  banca: 'Instituto AOCP (estimado)',
  dataProva: null, // edital 2026/2027 ainda não publicado
  totalQuestoes: 60,
  pontuacaoMaxima: 60,
  pontuacaoMinima: 36,
  tempoProvaMinutos: 240,

  disciplinas: [
    {
      id: 'portugues',
      nome: 'Língua Portuguesa',
      questoes: 10,
      peso: 1,
      pontos: 10,
      cor: '#3b82f6',
      icon: '🔤',
      destaque: true,
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
      id: 'historia_pe',
      nome: 'História de Pernambuco',
      questoes: 10,
      peso: 1,
      pontos: 10,
      cor: '#b45309',
      icon: '🏛️',
      destaque: true,
      topicos: [
        'Capitania de Pernambuco - Duarte Coelho e Fundação de Olinda',
        'Invasão Holandesa, Governo de Maurício de Nassau e Sinagoga Kahal Zur Israel',
        'Batalhas dos Guararapes (1648-1649) e Insurreição Pernambucana (Expulsão dos Holandeses, 1654)',
        'Quilombo dos Palmares e Zumbi (repressão pelo governo de Pernambuco, 1694-1695)',
        'Guerra dos Mascates (1710-1711) e Transferência da Capital para Recife (1827)',
        'Revolução Pernambucana de 1817, Frei Caneca e Confederação do Equador (1824)',
        'Emancipação de Alagoas (1817) e Guerra dos Cabanos / Cabanada (1832-1835)',
        'Revolução Praieira (1848-1850)',
        'Economia Colonial e Divisão Regional (Zona da Mata, Agreste, Sertão)',
        'Cultura Popular e Patrimônio (Frevo, Maracatu, Olinda, Fernando de Noronha, Manguebeat)',
        'Personalidades de Pernambuco (Joaquim Nabuco, Lampião)'
      ],
      temasMaisCobrados: [
        { nome: 'Invasão Holandesa e Nassau', frequencia: 92 },
        { nome: 'Guerra dos Mascates', frequencia: 88 },
        { nome: 'Revolução Pernambucana de 1817', frequencia: 85 },
        { nome: 'Confederação do Equador e Frei Caneca', frequencia: 80 },
        { nome: 'Batalhas dos Guararapes', frequencia: 78 },
        { nome: 'Quilombo dos Palmares', frequencia: 72 }
      ]
    },
    {
      id: 'rlm',
      nome: 'Raciocínio Lógico-Matemático',
      questoes: 10,
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
        { nome: 'Equivalências Lógicas e Leis de De Morgan', frequencia: 88 }
      ]
    },
    {
      id: 'informatica',
      nome: 'Noções de Informática',
      questoes: 10,
      peso: 1,
      pontos: 10,
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
      id: 'constitucional',
      nome: 'Direito Constitucional',
      questoes: 10,
      peso: 1,
      pontos: 10,
      cor: '#f59e0b',
      icon: '📜',
      destaque: true,
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
        { nome: 'Segurança Pública - Art. 144 (Polícia Militar)', frequencia: 92 },
        { nome: 'Princípios Fundamentais - Art. 1º a 4º', frequencia: 85 }
      ]
    },
    {
      id: 'dh',
      nome: 'Direitos Humanos',
      questoes: 3,
      peso: 1,
      pontos: 3,
      cor: '#ec4899',
      icon: '🕊️',
      topicos: [
        'Declaração Universal dos Direitos Humanos (1948)',
        'Convenção Americana de DH (Pacto de São José)',
        'Pacto Internacional de Direitos Civis e Políticos (PIDCP)',
        'Convenção da ONU contra a Tortura',
        'Direitos Humanos na Constituição Federal',
        'Sistema Interamericano de Proteção'
      ],
      temasMaisCobrados: [
        { nome: 'Declaração Universal (1948)', frequencia: 88 },
        { nome: 'Convenção Americana (Pacto de São José)', frequencia: 82 }
      ]
    },
    {
      id: 'legislacao',
      nome: 'Legislação Extravagante (Federal)',
      questoes: 4,
      peso: 1,
      pontos: 4,
      cor: '#f97316',
      icon: '⚡',
      destaque: true,
      topicos: [
        'Lei 8.069/90 - Estatuto da Criança e do Adolescente (ECA)',
        'Lei 13.869/19 - Abuso de Autoridade',
        'Lei 9.455/97 - Lei de Tortura',
        'Lei 11.340/06 - Lei Maria da Penha',
        'Lei 11.343/06 - Lei de Drogas',
        'Lei 8.072/90 - Crimes Hediondos',
        'Lei 9.605/1998 - Crimes Ambientais'
      ],
      temasMaisCobrados: [
        { nome: 'Lei Maria da Penha', frequencia: 90 },
        { nome: 'ECA', frequencia: 85 },
        { nome: 'Abuso de Autoridade', frequencia: 82 }
      ]
    },
    {
      id: 'legislacao_pmpe',
      nome: 'Legislação Estadual - Estatuto do PM de PE',
      questoes: 3,
      peso: 1,
      pontos: 3,
      cor: '#0891b2',
      icon: '🎖️',
      destaque: true,
      topicos: [
        'Lei 6.783/1974 - Estatuto dos Policiais-Militares de PE',
        'Hierarquia e Disciplina (Art. 12)',
        'Círculos Hierárquicos (Art. 13-14)',
        'Deveres, Prerrogativas e Direitos Policiais-Militares (Art. 30, 68 e 49)',
        'Crime Militar x Transgressão Disciplinar (Art. 40)',
        'Conselho de Disciplina (Art. 48) e Conselho de Justificação (Art. 47)',
        'Agregação (Art. 75)',
        'Ausência, Deserção, Desaparecimento e Extravio (Art. 81-84)',
        'Desligamento ou Exclusão do Serviço Ativo (Art. 85)'
      ],
      temasMaisCobrados: [
        { nome: 'Hierarquia e Disciplina', frequencia: 90 },
        { nome: 'Deveres Policiais-Militares', frequencia: 85 },
        { nome: 'Círculos Hierárquicos', frequencia: 78 },
        { nome: 'Desligamento do Serviço Ativo (Art. 85)', frequencia: 70 }
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
