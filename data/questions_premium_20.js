// QUESTIONS_PREMIUM_20 – 20 questões de placeholder para o PPRN Study App
const QUESTIONS_PREMIUM_20 = [
  {
    id: "premium20_001",
    disciplina: "penal",
    topico: "Parte Geral",
    peso: 1,
    mostCobrado: true,
    dificuldade: "media",
    enunciado: "Qual é o menor prazo prescricional da pretensão punitiva previsto na tabela do Código Penal (aplicável quando a pena máxima cominada não exceder 1 ano)?",
    alternativas: [
      { letra: "A", texto: "2 anos" },
      { letra: "B", texto: "3 anos" },
      { letra: "C", texto: "4 anos" },
      { letra: "D", texto: "5 anos" }
    ],
    gabarito: "B",
    artigo: "Art. 109, VI, Código Penal",
    justificativa: "A tabela de prescrição da pretensão punitiva está no art. 109 do CP (e não no art. 107, que trata das causas de extinção da punibilidade em geral). O menor prazo previsto é de 3 anos, aplicável quando o máximo da pena cominada não exceder 1 ano (art. 109, VI)."
  },
  {
    id: "premium20_002",
    disciplina: "penal",
    topico: "Parte Geral",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual é a pena mínima para o crime de furto simples?",
    alternativas: [
      { letra: "A", texto: "Reclusão de 1 a 4 anos e multa" },
      { letra: "B", texto: "Reclusão de 2 a 4 anos" },
      { letra: "C", texto: "Multa" },
      { letra: "D", texto: "Nenhuma" }
    ],
    gabarito: "A",
    artigo: "Art. 155, Código Penal",
    justificativa: "Furto simples tem pena de RECLUSÃO (e não detenção) de 1 a 4 anos, e multa, conforme o art. 155, caput, do CP."
  },
  {
    id: "premium20_003",
    disciplina: "penal",
    topico: "Parte Especial",
    peso: 2,
    mostCobrado: true,
    dificuldade: "dificil",
    enunciado: "Qual a causa de aumento de pena prevista no art. 121, §2º, do Código Penal?",
    alternativas: [
      { letra: "A", texto: "Motivo torpe" },
      { letra: "B", texto: "Uso de veneno" },
      { letra: "C", texto: "Fogo crepitante" },
      { letra: "D", texto: "Qualquer das anteriores" }
    ],
    gabarito: "D",
    artigo: "Art. 121, §2º, Código Penal",
    justificativa: "Todas as hipóteses citadas são causas de aumento previstas no §2º."
  },
  {
    id: "premium20_004",
    disciplina: "constitucional",
    topico: "Direitos Fundamentais",
    peso: 1,
    mostCobrado: true,
    dificuldade: "media",
    enunciado: "Qual o fundamento constitucional específico para a tutela (proteção) dos dados pessoais?",
    alternativas: [
      { letra: "A", texto: "Art. 5º, inciso X" },
      { letra: "B", texto: "Art. 5º, inciso XII" },
      { letra: "C", texto: "Art. 5º, inciso XIII" },
      { letra: "D", texto: "Art. 5º, inciso LXXIX" }
    ],
    gabarito: "D",
    artigo: "Art. 5º, inc. LXXIX da CF",
    justificativa: "A Emenda Constitucional nº 115/2022 incluiu o inciso LXXIX ao art. 5º da CF, assegurando expressamente, nos termos da lei, o direito à proteção dos dados pessoais, inclusive nos meios digitais. O inciso XIII trata da liberdade de exercício de trabalho, ofício ou profissão (não tem relação com dados pessoais); o inciso X trata de intimidade/vida privada e o XII trata da inviolabilidade do sigilo de dados e comunicações — ambos relacionados ao tema, mas o fundamento específico e mais direto é o LXXIX."
  },
  {
    id: "premium20_005",
    disciplina: "constitucional",
    topico: "Organização do Estado",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual o número de membros do Conselho Nacional de Justiça?",
    alternativas: [
      { letra: "A", texto: "7" },
      { letra: "B", texto: "9" },
      { letra: "C", texto: "11" },
      { letra: "D", texto: "15" }
    ],
    gabarito: "D",
    artigo: "Art. 103-B, CF",
    justificativa: "O CNJ é composto por 15 membros, com mandato de 2 anos, admitida uma recondução, conforme o art. 103-B da CF/88 (incluído pela EC 45/2004)."
  },
  {
    id: "premium20_006",
    disciplina: "administrativo",
    topico: "Lei 14.133/2021",
    peso: 2,
    mostCobrado: true,
    dificuldade: "media",
    enunciado: "Em qual hipótese a licitação pode ser dispensada segundo a Lei 14.133/2021 (Nova Lei de Licitações)?",
    alternativas: [
      { letra: "A", texto: "Valor estimado acima de 10% do orçamento" },
      { letra: "B", texto: "Aquisição de bens de uso pessoal" },
      { letra: "C", texto: "Emergência ou calamidade pública" },
      { letra: "D", texto: "Quando houver apenas um fornecedor no mercado" }
    ],
    gabarito: "C",
    artigo: "Art. 75, VIII da Lei 14.133/2021",
    justificativa: "A Lei 14.133/2021 (que revogou integralmente a Lei 8.666/93) permite a dispensa de licitação em casos de emergência ou calamidade pública, quando caracterizada urgência de atendimento de situação que possa ocasionar prejuízo ou comprometer a segurança de pessoas, obras, serviços ou bens (art. 75, VIII)."
  },
  {
    id: "premium20_007",
    disciplina: "administrativo",
    topico: "Licitações",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual a modalidade de licitação, prevista na Lei 14.133/2021, destinada à aquisição de bens e serviços comuns e que utiliza o critério de julgamento por menor preço ou maior desconto?",
    alternativas: [
      { letra: "A", texto: "Concorrência" },
      { letra: "B", texto: "Diálogo Competitivo" },
      { letra: "C", texto: "Pregão" },
      { letra: "D", texto: "Concurso" }
    ],
    gabarito: "C",
    artigo: "Art. 6º, XLI e Art. 29, Lei 14.133/2021",
    justificativa: "O Pregão é a modalidade destinada à aquisição de bens e serviços comuns, sendo o critério de julgamento sempre o de menor preço ou maior desconto (art. 6º, XLI, Lei 14.133/2021). Nota: a Lei 14.133/2021 revogou a Lei 8.666/93 e extinguiu as antigas modalidades 'tomada de preços' e 'convite', criando o 'diálogo competitivo'."
  },
  {
    id: "premium20_008",
    disciplina: "etica",
    topico: "Código de Ética",
    peso: 1,
    mostCobrado: false,
    dificuldade: "media",
    enunciado: "Qual princípio ética impede o agente de receber presentes de investigados?",
    alternativas: [
      { letra: "A", texto: "Imparcialidade" },
      { letra: "B", texto: "Probidade" },
      { letra: "C", texto: "Legalidade" },
      { letra: "D", texto: "Objetividade" }
    ],
    gabarito: "B",
    artigo: "Art. 5º, Código de Ética da Polícia",
    justificativa: "A probidade impede aceitar benefícios de investigados."
  },
  {
    id: "premium20_009",
    disciplina: "etica",
    topico: "Conduta",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "É permitido ao policial usar redes sociais para divulgar investigação em curso?",
    alternativas: [
      { letra: "A", texto: "Sim, se for relevante" },
      { letra: "B", texto: "Não, por violar sigilo" },
      { letra: "C", texto: "Só com autorização judicial" },
      { letra: "D", texto: "Depende da gravidade" }
    ],
    gabarito: "B",
    artigo: "Art. 12, Código de Ética",
    justificativa: "Divulgação impede a preservação do sigilo da investigação."
  },
  {
    id: "premium20_010",
    disciplina: "penal",
    topico: "Procedimento Penal",
    peso: 2,
    mostCobrado: true,
    dificuldade: "dificil",
    enunciado: "Qual o prazo legal para o oferecimento de denúncia quando o réu estiver solto ou afiançado?",
    alternativas: [
      { letra: "A", texto: "15 dias" },
      { letra: "B", texto: "30 dias" },
      { letra: "C", texto: "60 dias" },
      { letra: "D", texto: "90 dias" }
    ],
    gabarito: "A",
    artigo: "Art. 46, Código de Processo Penal",
    justificativa: "Conforme o art. 46 do CPP, o prazo para oferecimento da denúncia é de 5 dias, contados do recebimento dos autos, se o réu estiver preso, e de 15 dias se estiver solto ou afiançado. Não há previsão legal de prazo de 30 ou 60 dias no CPP para essa hipótese."
  },
  {
    id: "premium20_011",
    disciplina: "penal",
    topico: "Recursos",
    peso: 1,
    mostCobrado: false,
    dificuldade: "media",
    enunciado: "Qual recurso cabe contra sentença condenatória no CPP?",
    alternativas: [
      { letra: "A", texto: "Apelação" },
      { letra: "B", texto: "Recurso Ordinário" },
      { letra: "C", texto: "Revisão Criminal" },
      { letra: "D", texto: "Habeas Corpus" }
    ],
    gabarito: "A",
    artigo: "Art. 593, CPP",
    justificativa: "Contra sentença condenatória, cabe a apelação."
  },
  {
    id: "premium20_012",
    disciplina: "penal",
    topico: "Instrução Criminal",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual a finalidade principal da audiência de instrução e julgamento?",
    alternativas: [
      { letra: "A", texto: "Produzir prova oral" },
      { letra: "B", texto: "Aplicar pena" },
      { letra: "C", texto: "Negociar acordo" },
      { letra: "D", texto: "Encerrar o processo" }
    ],
    gabarito: "A",
    artigo: "Art. 400, CPP",
    justificativa: "A audiência visa a produção de prova oral."
  },
  {
    id: "premium20_013",
    disciplina: "penal",
    topico: "Crimes contra a Administração",
    peso: 2,
    mostCobrado: true,
    dificuldade: "dificil",
    enunciado: "Qual a pena mínima para crime de peculato?",
    alternativas: [
      { letra: "A", texto: "Reclusão de 2 a 4 anos" },
      { letra: "B", texto: "Reclusão de 4 a 6 anos" },
      { letra: "C", texto: "Detenção de 1 a 3 anos" },
      { letra: "D", texto: "Multa" }
    ],
    gabarito: "A",
    artigo: "Art. 312, CP",
    justificativa: "Peculato tem pena de reclusão de 2 a 4 anos."
  },
  {
    id: "premium20_014",
    disciplina: "penal",
    topico: "Responsabilidade Penal",
    peso: 1,
    mostCobrado: false,
    dificuldade: "media",
    enunciado: "Qual é a diferença entre dolo direto e dolo eventual?",
    alternativas: [
      { letra: "A", texto: "Direto: intenção clara; Eventual: risco aceito" },
      { letra: "B", texto: "Direto: risco aceito; Eventual: intenção clara" },
      { letra: "C", texto: "Não há diferença" },
      { letra: "D", texto: "Ambos são culpa" }
    ],
    gabarito: "A",
    artigo: "Art. 18, CP",
    justificativa: "Dolo direto é intenção clara, dolo eventual aceita o risco."
  },
  {
    id: "premium20_015",
    disciplina: "constitucional",
    topico: "Controle de Constitucionalidade",
    peso: 1,
    mostCobrado: true,
    dificuldade: "media",
    enunciado: "Qual a diferença entre ADI e ADPF?",
    alternativas: [
      { letra: "A", texto: "ADI julga lei; ADPF trata de atos do poder público" },
      { letra: "B", texto: "ADI julga constitucionalidade; ADPF trata de outros fundamentos" },
      { letra: "C", texto: "Não há diferença" },
      { letra: "D", texto: "Ambas tratam de processos eleitorais" }
    ],
    gabarito: "B",
    artigo: "Art. 102, CF",
    justificativa: "ADI discute lei ou ato normativo; ADPF trata de outros casos relevantes à Constituição."
  },
  {
    id: "premium20_016",
    disciplina: "etica",
    topico: "Abuso de Autoridade",
    peso: 2,
    mostCobrado: true,
    dificuldade: "dificil",
    enunciado: "Qual o crime previsto no art. 332 do CP?",
    alternativas: [
      { letra: "A", texto: "Corrupção passiva" },
      { letra: "B", texto: "Tráfico de influência" },
      { letra: "C", texto: "Coação" },
      { letra: "D", texto: "Concussão" }
    ],
    gabarito: "B",
    artigo: "Art. 332, CP",
    justificativa: "O art. 332 do CP tipifica o crime de Tráfico de Influência (solicitar, exigir, cobrar ou obter vantagem a pretexto de influir em ato de funcionário público no exercício da função). O abuso de autoridade não está previsto no Código Penal, mas sim na Lei nº 13.869/2019."
  },
  {
    id: "premium20_017",
    disciplina: "administrativo",
    topico: "Processo Administrativo",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual o princípio que garante o contraditório no processo administrativo?",
    alternativas: [
      { letra: "A", texto: "Legalidade" },
      { letra: "B", texto: "Impessoalidade" },
      { letra: "C", texto: "Ampla defesa" },
      { letra: "D", texto: "Publicidade" }
    ],
    gabarito: "C",
    artigo: "Art. 5º, LV da CF",
    justificativa: "Ampla defesa e o contraditório são garantidos pelo LV."
  },
  {
    id: "premium20_018",
    disciplina: "penal",
    topico: "Crimes contra a Vida",
    peso: 1,
    mostCobrado: true,
    dificuldade: "media",
    enunciado: "Qual a diferença entre homicídio doloso e culposo?",
    alternativas: [
      { letra: "A", texto: "Doloso tem intenção; Culposo não" },
      { letra: "B", texto: "Culposo tem intenção; Doloso não" },
      { letra: "C", texto: "Ambos são sem intenção" },
      { letra: "D", texto: "Não há diferença" }
    ],
    gabarito: "A",
    artigo: "Art. 121, CP",
    justificativa: "Doloso implica intenção, culposo implica imprudência ou negligência."
  },
  {
    id: "premium20_019",
    disciplina: "penal",
    topico: "Prisão Preventiva",
    peso: 2,
    mostCobrado: true,
    dificuldade: "dificil",
    enunciado: "Em que situação a prisão preventiva pode ser decretada segundo o CPP?",
    alternativas: [
      { letra: "A", texto: "Quando houver prova da culpa" },
      { letra: "B", texto: "Quando houver risco de fuga" },
      { letra: "C", texto: "Quando o crime for hediondo" },
      { letra: "D", texto: "Todas as anteriores" }
    ],
    gabarito: "D",
    artigo: "Art. 312, CPP",
    justificativa: "A prisão preventiva pode ser decretada nas hipóteses de prova da culpa, risco de fuga, ou a gravidade do crime."
  },
  {
    id: "premium20_020",
    disciplina: "constitucional",
    topico: "Direitos Sociais",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual direito está previsto no art. 6º da Constituição?",
    alternativas: [
      { letra: "A", texto: "Educação" },
      { letra: "B", texto: "Saúde" },
      { letra: "C", texto: "Trabalho" },
      { letra: "D", texto: "Todos os anteriores" }
    ],
    gabarito: "D",
    artigo: "Art. 6º, CF",
    justificativa: "O art. 6º reúne educação, saúde, trabalho e outros direitos sociais."
  }
];
