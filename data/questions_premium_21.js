// Custom Mixed Set — 25 questões únicas (revisado: 5 fora do edital removidas,
// 73 duplicatas do lote "Assunto Q51..Q123" removidas, disciplinas corrigidas para
// os ids reconhecidos por EDITAL.disciplinas em data/edital.js)
const QUESTIONS_PREMIUM_21 = [
  {
    "id": "custom_21",
    "disciplina": "constitucional",
    "topico": "Direitos Fundamentais – Liberdade de Expressão",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A liberdade de expressão pode ser limitada quando:",
    "alternativas": [
      { "letra": "A", "texto": "Há incitação ao crime" },
      { "letra": "B", "texto": "O discurso ofende a moral pública" },
      { "letra": "C", "texto": "O autor não tem credenciais jornalísticas" },
      { "letra": "D", "texto": "O tema é polêmico" }
    ],
    "gabarito": "A",
    "artigo": "Art. 5º, IV, CF",
    "justificativa": "A Constituição permite restrição da liberdade de expressão em casos de incitação a crime."
  },
  {
    "id": "custom_22",
    "disciplina": "administrativo",
    "topico": "Licitação e Contratos",
    "peso": 3,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "A Lei 14.133/2021 (Nova Lei de Licitações), que revogou integralmente a Lei 8.666/93, prevê as seguintes modalidades de licitação:",
    "alternativas": [
      { "letra": "A", "texto": "Concorrência, tomada de preços, convite, concurso e leilão." },
      { "letra": "B", "texto": "Pregão, concorrência, concurso, leilão e diálogo competitivo." },
      { "letra": "C", "texto": "Apenas pregão e concorrência, unificadas em uma só modalidade." },
      { "letra": "D", "texto": "Convite, tomada de preços e concorrência, mantidas da lei anterior." }
    ],
    "gabarito": "B",
    "artigo": "Art. 28, Lei 14.133/2021",
    "justificativa": "A Lei 14.133/21 extinguiu as modalidades convite e tomada de preços e criou o diálogo competitivo. As modalidades atuais são: pregão, concorrência, concurso, leilão e diálogo competitivo (Art. 6º, XL c/c Art. 28)."
  },
  {
    "id": "custom_23",
    "disciplina": "penal",
    "topico": "Crimes em Espécie (mais cobrados)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Qual das circunstâncias abaixo configura homicídio simples (não qualificado)?",
    "alternativas": [
      { "letra": "A", "texto": "Motivo torpe" },
      { "letra": "B", "texto": "Emprego de meio cruel" },
      { "letra": "C", "texto": "Dano ao patrimônio" },
      { "letra": "D", "texto": "Ação sem qualificadora prevista no art. 121, §§ 2º‑4º" }
    ],
    "gabarito": "D",
    "artigo": "Art. 121, caput, CP",
    "justificativa": "A ausência de qualificadoras converte o crime em homicídio simples."
  },
  {
    "id": "custom_24",
    "disciplina": "lep",
    "topico": "RDD - Regime Disciplinar Diferenciado (Art. 52)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "O prazo máximo do RDD, após a Lei 13.964/2019, é:",
    "alternativas": [
      { "letra": "A", "texto": "360 dias, renovável uma vez" },
      { "letra": "B", "texto": "2 anos, sem renovação" },
      { "letra": "C", "texto": "2 anos, renovável por novos fatos" },
      { "letra": "D", "texto": "1 ano, prorrogável até 1/6 da pena" }
    ],
    "gabarito": "C",
    "artigo": "Art. 52, §1º, LEP",
    "justificativa": "A lei estabelece prazo máximo de 2 anos, renovável por nova falta grave."
  },
  {
    "id": "custom_25",
    "disciplina": "portugues",
    "topico": "Regência Verbal e Nominal",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Assinale a alternativa em que o verbo está corretamente regido por preposição:",
    "alternativas": [
      { "letra": "A", "texto": "Ele insistiu em viajar." },
      { "letra": "B", "texto": "Ela chegou a tempo." },
      { "letra": "C", "texto": "Nós dependemos da ajuda." },
      { "letra": "D", "texto": "Ele se referiu ao caso." }
    ],
    "gabarito": "A",
    "artigo": "Gramática normativa",
    "justificativa": "\"Insistir em\" exige preposição \"em\"."
  },
  {
    "id": "custom_26",
    "disciplina": "legislacao",
    "topico": "Lei 13.869/19 - Abuso de Autoridade",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme a Lei de Abuso de Autoridade (Lei 13.869/2019), o agente que age por mero capricho está cometendo:",
    "alternativas": [
      { "letra": "A", "texto": "Crime de negligência" },
      { "letra": "B", "texto": "Crime de dolo genérico" },
      { "letra": "C", "texto": "Crime de dolo específico" },
      { "letra": "D", "texto": "Infração administrativa" }
    ],
    "gabarito": "C",
    "artigo": "Art. 1º, §1º, Lei 13.869/19",
    "justificativa": "O dolo específico inclui agir por capricho ou satisfação pessoal."
  },
  {
    "id": "custom_27",
    "disciplina": "constitucional",
    "topico": "Direitos Sociais (Art. 6-11)",
    "peso": 3,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Qual princípio constitucional determina que todos devem contribuir para os custos da seguridade social na proporção de suas capacidades econômicas?",
    "alternativas": [
      { "letra": "A", "texto": "Princípio da anterioridade" },
      { "letra": "B", "texto": "Princípio da progressividade" },
      { "letra": "C", "texto": "Princípio da universalidade" },
      { "letra": "D", "texto": "Princípio da capacidade contributiva" }
    ],
    "gabarito": "D",
    "artigo": "Art. 145, §1º, CF",
    "justificativa": "A Constituição estabelece a capacidade contributiva como base do tributo."
  },
  {
    "id": "custom_29",
    "disciplina": "lep",
    "topico": "Saída Temporária (Art. 122-125)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A saída temporária no regime semi‑aberto pode ser autorizada por:",
    "alternativas": [
      { "letra": "A", "texto": "Juiz da Execução" },
      { "letra": "B", "texto": "Conselho Penitenciário" },
      { "letra": "C", "texto": "Diretor do estabelecimento penal" },
      { "letra": "D", "texto": "Ministério Público" }
    ],
    "gabarito": "A",
    "artigo": "Art. 124, LEP",
    "justificativa": "A competência para autorizar a saída temporária recai sobre o Juiz da Execução."
  },
  {
    "id": "custom_30",
    "disciplina": "portugues",
    "topico": "Concordância Verbal e Nominal",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Escolha a frase em que há concordância nominal correta:",
    "alternativas": [
      { "letra": "A", "texto": "As crianças felizes brincam no parque." },
      { "letra": "B", "texto": "Os menina alegre brinca." },
      { "letra": "C", "texto": "A gente somos todos iguais." },
      { "letra": "D", "texto": "A gente é todos iguais." }
    ],
    "gabarito": "A",
    "artigo": "Gramática normativa",
    "justificativa": "Na alternativa A, substantivo e adjetivo concordam em gênero e número."
  },
  {
    "id": "custom_31",
    "disciplina": "penal",
    "topico": "Crimes em Espécie (mais cobrados)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Nos termos da Lei 12.846/2013 (Lei Anticorrupção), o agente que oferece vantagem indevida a terceiro para obter benefício deve responder:",
    "alternativas": [
      { "letra": "A", "texto": "Apenas civilmente" },
      { "letra": "B", "texto": "Civil e penalmente" },
      { "letra": "C", "texto": "Apenas penalmente" },
      { "letra": "D", "texto": "Nenhuma das anteriores" }
    ],
    "gabarito": "B",
    "artigo": "Art. 12, Lei 12.846/13",
    "justificativa": "A lei prevê responsabilidade civil e administrativa; a conduta pode ser tipificada também como crime de corrupção."
  },
  {
    "id": "custom_32",
    "disciplina": "penal",
    "topico": "Inquérito Policial (Art. 4-23 CPP)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O inquérito policial pode ser instaurado por:",
    "alternativas": [
      { "letra": "A", "texto": "Autoridade policial" },
      { "letra": "B", "texto": "Ministério Público" },
      { "letra": "C", "texto": "Juiz de Direito" },
      { "letra": "D", "texto": "Todas as anteriores" }
    ],
    "gabarito": "D",
    "artigo": "Art. 4º, CPP",
    "justificativa": "Inquérito pode ser iniciado por autoridade policial, MP ou juiz."
  },
  {
    "id": "custom_33",
    "disciplina": "etica",
    "topico": "Conduta Ética no Serviço Público",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Durante uma licitação, um servidor que tem parentesco de primeiro grau com um dos licitantes deve:",
    "alternativas": [
      { "letra": "A", "texto": "Declarar o parentesco e permanecer no processo" },
      { "letra": "B", "texto": "Abster‑se de participar da comissão de licitação" },
      { "letra": "C", "texto": "Votar a favor do licitante familiar" },
      { "letra": "D", "texto": "Nenhuma das alternativas" }
    ],
    "gabarito": "B",
    "artigo": "Lei 8.112/90 – Art. 117",
    "justificativa": "A abstenção evita suspeita de favorecimento."
  },
  {
    "id": "custom_35",
    "disciplina": "lep",
    "topico": "Remição de Pena (Art. 126-130)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Quanto tempo de pena pode ser remido com trabalho externo, sendo a jornada de 6 a 8 horas diárias?",
    "alternativas": [
      { "letra": "A", "texto": "1/6 da pena" },
      { "letra": "B", "texto": "1/4 da pena" },
      { "letra": "C", "texto": "1/2 da pena" },
      { "letra": "D", "texto": "2/3 da pena" }
    ],
    "gabarito": "B",
    "artigo": "Art. 126, §1º, LEP",
    "justificativa": "Trabalho externo reduz a pena em 1/4, desde que a jornada seja de 6 a 8 horas."
  },
  {
    "id": "custom_36",
    "disciplina": "constitucional",
    "topico": "Controle de Constitucionalidade",
    "peso": 3,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "No controle difuso de constitucionalidade, quem tem competência para declarar a inconstitucionalidade de lei no caso concreto?",
    "alternativas": [
      { "letra": "A", "texto": "Supremo Tribunal Federal (STF)" },
      { "letra": "B", "texto": "Tribunal Superior do Trabalho (TST)" },
      { "letra": "C", "texto": "Qualquer juiz ou tribunal" },
      { "letra": "D", "texto": "Ministério Público" }
    ],
    "gabarito": "C",
    "artigo": "Art. 102, III, CF",
    "justificativa": "No controle difuso, qualquer juiz pode declarar a inconstitucionalidade no caso concreto."
  },
  {
    "id": "custom_38",
    "disciplina": "portugues",
    "topico": "Regência Verbal e Nominal",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Qual verbo exige a preposição \"a\" antes do complemento:",
    "alternativas": [
      { "letra": "A", "texto": "assistir" },
      { "letra": "B", "texto": "aderir" },
      { "letra": "C", "texto": "perguntar" },
      { "letra": "D", "texto": "acreditar" }
    ],
    "gabarito": "A",
    "artigo": "Gramática normativa",
    "justificativa": "\"Assistir a\" (no sentido de ver) requer a preposição \"a\"."
  },
  {
    "id": "custom_40",
    "disciplina": "administrativo",
    "topico": "Responsabilidade Civil do Estado",
    "peso": 3,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "A responsabilidade civil objetiva do Estado decorre do princípio de:",
    "alternativas": [
      { "letra": "A", "texto": "Legalidade" },
      { "letra": "B", "texto": "Supremacia do interesse público" },
      { "letra": "C", "texto": "Responsabilidade objetiva" },
      { "letra": "D", "texto": "Imparcialidade" }
    ],
    "gabarito": "C",
    "artigo": "Art. 37, §6º, CF",
    "justificativa": "O texto constitucional estabelece responsabilidade objetiva do Estado por atos ilícitos."
  },
  {
    "id": "custom_41",
    "disciplina": "lep",
    "topico": "Progressão e Regressão de Regime (Art. 112-118)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Para a progressão de regime de fechado para semi‑aberto, o condenado deve ter cumprido ao menos:",
    "alternativas": [
      { "letra": "A", "texto": "30 % da pena" },
      { "letra": "B", "texto": "40 % da pena" },
      { "letra": "C", "texto": "50 % da pena" },
      { "letra": "D", "texto": "60 % da pena" }
    ],
    "gabarito": "B",
    "artigo": "Art. 112, §3º, LEP",
    "justificativa": "A lei exige cumprimento de, no mínimo, 40 % da pena para progressão."
  },
  {
    "id": "custom_42",
    "disciplina": "penal",
    "topico": "Ação Penal (tipos e condições)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A prova obtida mediante violação de sigilo telefônico será considerada:",
    "alternativas": [
      { "letra": "A", "texto": "Válida, se a parte alega boa‑fé" },
      { "letra": "B", "texto": "Inválida, por violação do direito constitucional" },
      { "letra": "C", "texto": "Válida, se houver prova corroborativa" },
      { "letra": "D", "texto": "Inválida, apenas se houver recurso pendente" }
    ],
    "gabarito": "B",
    "artigo": "Art. 5º, XII, CF",
    "justificativa": "A Constituição garante inviolabilidade das comunicações; provas obtidas violando esse direito são ilícitas."
  },
  {
    "id": "custom_43",
    "disciplina": "penal",
    "topico": "Crimes em Espécie (mais cobrados)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Qual elemento objetivo caracteriza a extorsão (art. 158 do CP)?",
    "alternativas": [
      { "letra": "A", "texto": "Ameaça de revelar fato verdadeiro" },
      { "letra": "B", "texto": "Ameaça de revelar fato falso" },
      { "letra": "C", "texto": "Coação econômica mediante violência ou grave ameaça" },
      { "letra": "D", "texto": "Violação de domicílio" }
    ],
    "gabarito": "C",
    "artigo": "Art. 158, CP",
    "justificativa": "A extorsão consiste em exigir algo mediante violência ou grave ameaça."
  },
  {
    "id": "custom_44",
    "disciplina": "portugues",
    "topico": "Regência Verbal e Nominal",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Qual preposição acompanha o verbo “preferir” quando indica alternativa?",
    "alternativas": [
      { "letra": "A", "texto": "de" },
      { "letra": "B", "texto": "a" },
      { "letra": "C", "texto": "por" },
      { "letra": "D", "texto": "para" }
    ],
    "gabarito": "C",
    "artigo": "Gramática normativa",
    "justificativa": "\"Preferir por\" indica a escolha entre duas opções."
  },
  {
    "id": "custom_45",
    "disciplina": "etica",
    "topico": "Conduta Ética no Serviço Público",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O tratamento de dados pessoais sensíveis sem consentimento viola a Lei:",
    "alternativas": [
      { "letra": "A", "texto": "Lei 8.112/90" },
      { "letra": "B", "texto": "Lei 9.613/98" },
      { "letra": "C", "texto": "Lei 13.709/2018 (LGPD)" },
      { "letra": "D", "texto": "Lei 12.527/2011" }
    ],
    "gabarito": "C",
    "artigo": "Art. 7º, LGPD",
    "justificativa": "A LGPD regula o tratamento de dados pessoais, especialmente sensíveis."
  },
  {
    "id": "custom_46",
    "disciplina": "administrativo",
    "topico": "Improbidade Administrativa",
    "peso": 3,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Qual das condutas abaixo NÃO constitui ato de improbidade administrativa, segundo a Lei 8.429/1992?",
    "alternativas": [
      { "letra": "A", "texto": "Enriquecimento ilícito" },
      { "letra": "B", "texto": "Prejuízo ao erário" },
      { "letra": "C", "texto": "Violação dos princípios da administração pública" },
      { "letra": "D", "texto": "Conceder férias antecipadas ao servidor" }
    ],
    "gabarito": "D",
    "artigo": "Art. 11, Lei 8.429/92",
    "justificativa": "Conceder férias não caracteriza improbidade, ao passo que as demais são atos tipificados."
  },
  {
    "id": "custom_48",
    "disciplina": "portugues",
    "topico": "Crase",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Indique a frase correta quanto ao uso da crase:",
    "alternativas": [
      { "letra": "A", "texto": "Vou à praia amanhã." },
      { "letra": "B", "texto": "Cheguei a à festa cedo." },
      { "letra": "C", "texto": "Ele chegou a a casa" },
      { "letra": "D", "texto": "Fui a o parque" }
    ],
    "gabarito": "A",
    "artigo": "Gramática normativa",
    "justificativa": "Em \"vou à praia\" há fusão da preposição \"a\" com o artigo feminino \"a\"."
  },
  {
    "id": "custom_49",
    "disciplina": "dh",
    "topico": "Proteção Contra Tortura - CAT",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Qual tratado internacional define a tortura como crime e obriga os Estados a preveni‑la?",
    "alternativas": [
      { "letra": "A", "texto": "Convenção de Viena" },
      { "letra": "B", "texto": "Pacto de San José da Costa Rica" },
      { "letra": "C", "texto": "Convenção contra a Tortura (OPCAT)" },
      { "letra": "D", "texto": "Convenção de Berna" }
    ],
    "gabarito": "C",
    "artigo": "Convenção contra a Tortura e Outros Tratamentos ou Punições Cruéis, Desumanos ou Degradantes (1984)",
    "justificativa": "A convenção obriga os Estados a prevenir e punir a tortura."
  },
  {
    "id": "custom_50",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 - Lei de Drogas",
    "peso": 3,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "A pena mínima para tráfico internacional de drogas, segundo a Lei 11.343/2006, é:",
    "alternativas": [
      { "letra": "A", "texto": "7 anos" },
      { "letra": "B", "texto": "8 anos" },
      { "letra": "C", "texto": "10 anos" },
      { "letra": "D", "texto": "12 anos" }
    ],
    "gabarito": "C",
    "artigo": "Art. 33, §2º, Lei 11.343/06",
    "justificativa": "O tráfico internacional traz pena mínima de 10 a 20 anos."
  }
];
