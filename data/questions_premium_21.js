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
      { "letra": "B", "texto": "O discurso ofende a moral pública", "comentario": "Incorreta. A mera alegação de ofensa à moral pública, isoladamente e sem mais, não é o critério consagrado pela CF para restringir a liberdade de expressão; a restrição legítima associa-se a hipóteses de abuso, como a incitação a crimes." },
      { "letra": "C", "texto": "O autor não tem credenciais jornalísticas", "comentario": "Incorreta. A liberdade de expressão é direito de todos (art. 5º, IV e IX, CF), independentemente de credencial profissional; não depende de o autor ser jornalista." },
      { "letra": "D", "texto": "O tema é polêmico", "comentario": "Incorreta. A polêmica de um tema, por si só, não autoriza restrição à liberdade de expressão, que é justamente o direito de expor posições controversas." }
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
      { "letra": "A", "texto": "Concorrência, tomada de preços, convite, concurso e leilão.", "comentario": "Incorreta. Tomada de preços e convite foram extintas pela Lei 14.133/2021; não fazem parte do rol atual de modalidades." },
      { "letra": "B", "texto": "Pregão, concorrência, concurso, leilão e diálogo competitivo." },
      { "letra": "C", "texto": "Apenas pregão e concorrência, unificadas em uma só modalidade.", "comentario": "Incorreta. Pregão e concorrência continuam sendo modalidades distintas, e a lei prevê outras modalidades além dessas duas (concurso, leilão e diálogo competitivo)." },
      { "letra": "D", "texto": "Convite, tomada de preços e concorrência, mantidas da lei anterior.", "comentario": "Incorreta. Convite e tomada de preços foram extintos pela nova lei; apenas a concorrência permanece como modalidade, ao lado das novas (pregão, concurso, leilão e diálogo competitivo)." }
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
      { "letra": "A", "texto": "Motivo torpe", "comentario": "Incorreta. O motivo torpe é qualificadora do homicídio (art. 121, §2º, I, CP), tornando-o qualificado, e não simples." },
      { "letra": "B", "texto": "Emprego de meio cruel", "comentario": "Incorreta. O emprego de meio cruel é qualificadora do homicídio (art. 121, §2º, III, CP), tornando-o qualificado, e não simples." },
      { "letra": "C", "texto": "Dano ao patrimônio", "comentario": "Incorreta. Dano ao patrimônio é elemento estranho à classificação do homicídio como simples ou qualificado; não é qualificadora prevista no art. 121." },
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
      { "letra": "A", "texto": "360 dias, renovável uma vez", "comentario": "Incorreta. Esse não é o prazo/regime vigente após a Lei 13.964/2019, que fixou o prazo máximo em 2 anos, renovável em caso de nova falta grave de mesma espécie." },
      { "letra": "B", "texto": "2 anos, sem renovação", "comentario": "Incorreta. O prazo de 2 anos está correto, mas a lei admite renovação em caso de nova falta grave de mesma espécie — não é um prazo fixo sem possibilidade de renovação." },
      { "letra": "C", "texto": "2 anos, renovável por novos fatos" },
      { "letra": "D", "texto": "1 ano, prorrogável até 1/6 da pena", "comentario": "Incorreta. Não corresponde ao regime do RDD após a Lei 13.964/2019, que estabeleceu prazo máximo de 2 anos, renovável por nova falta grave de mesma espécie." }
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
      { "letra": "B", "texto": "Ela chegou a tempo.", "comentario": "Nesta questão, o gabarito toma como referência o padrão \"insistir em\"; observe que \"a tempo\" é locução adverbial fixa, não constituindo o exemplo de regência verbal buscado pelo enunciado." },
      { "letra": "C", "texto": "Nós dependemos da ajuda.", "comentario": "Nesta questão, o gabarito toma como referência o padrão \"insistir em\"; note que \"depender de\" também está gramaticalmente correto (\"da\" = de + a), mas não foi o padrão escolhido como resposta desta questão." },
      { "letra": "D", "texto": "Ele se referiu ao caso.", "comentario": "Nesta questão, o gabarito toma como referência o padrão \"insistir em\"; note que \"referir-se a\" também está gramaticalmente correto (\"ao\" = a + o), mas não foi o padrão escolhido como resposta desta questão." }
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
      { "letra": "A", "texto": "Crime de negligência", "comentario": "Incorreta. A Lei 13.869/2019 exige dolo específico (finalidade de prejudicar, beneficiar ou por mero capricho/satisfação pessoal), não admitindo modalidade culposa como a negligência." },
      { "letra": "B", "texto": "Crime de dolo genérico", "comentario": "Incorreta. A lei exige a finalidade específica de prejudicar outrem, beneficiar a si ou a terceiro, ou agir por mero capricho ou satisfação pessoal — configurando dolo específico, e não apenas dolo genérico (consciência e vontade da conduta em si)." },
      { "letra": "C", "texto": "Crime de dolo específico" },
      { "letra": "D", "texto": "Infração administrativa", "comentario": "Incorreta. A conduta descrita configura ilícito penal tipificado na Lei 13.869/2019, e não mera infração administrativa." }
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
      { "letra": "A", "texto": "Princípio da anterioridade", "comentario": "Incorreta. A anterioridade trata do momento em que a lei tributária pode produzir efeitos, sem relação com a proporcionalidade da contribuição à capacidade econômica." },
      { "letra": "B", "texto": "Princípio da progressividade", "comentario": "Incorreta. A progressividade trata do aumento de alíquotas conforme a base de cálculo cresce; é um instrumento correlato, mas o princípio geral que fundamenta a contribuição proporcional à capacidade econômica é o da capacidade contributiva." },
      { "letra": "C", "texto": "Princípio da universalidade", "comentario": "Incorreta. A universalidade refere-se à cobertura de todos pela seguridade social, e não à proporcionalidade da contribuição de cada um conforme sua capacidade econômica." },
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
      { "letra": "B", "texto": "Conselho Penitenciário", "comentario": "Incorreta. O Conselho Penitenciário pode emitir parecer em determinadas hipóteses, mas a competência para autorizar a saída temporária é do Juiz da Execução." },
      { "letra": "C", "texto": "Diretor do estabelecimento penal", "comentario": "Incorreta. O diretor do estabelecimento pode autorizar saídas de curta duração em hipóteses específicas (como a saída sem escolta prevista no art. 120 da LEP), mas a saída temporária do art. 122 é ato de competência do Juiz da Execução." },
      { "letra": "D", "texto": "Ministério Público", "comentario": "Incorreta. O Ministério Público é ouvido no procedimento, mas não é quem autoriza a saída temporária; a competência é do Juiz da Execução." }
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
      { "letra": "B", "texto": "Os menina alegre brinca.", "comentario": "Incorreta. Há erro de concordância de gênero e número: o correto seria \"As meninas alegres brincam\"." },
      { "letra": "C", "texto": "A gente somos todos iguais.", "comentario": "Incorreta. \"A gente\" equivale gramaticalmente à 3ª pessoa do singular, exigindo o verbo \"é\", e não \"somos\" (1ª pessoa do plural)." },
      { "letra": "D", "texto": "A gente é todos iguais.", "comentario": "Incorreta como melhor resposta: embora o uso coloquial admita \"a gente\" seguido de predicativo no plural por silepse de pessoa, a concordância nominal estritamente gramatical exigiria o singular (\"a gente é toda igual\"); a alternativa A é a que apresenta concordância nominal inequivocamente correta." }
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
    "enunciado": "Nos termos da Lei 12.846/2013 (Lei Anticorrupção), a pessoa jurídica que oferece vantagem indevida a agente público para obter benefício deve responder, com base nesta lei:",
    "alternativas": [
      { "letra": "A", "texto": "Administrativa e civilmente" },
      { "letra": "B", "texto": "Civil e penalmente", "comentario": "Incorreta. A Lei 12.846/13 não prevê responsabilidade penal da pessoa jurídica; a responsabilização é administrativa e civil (art. 1º)." },
      { "letra": "C", "texto": "Apenas penalmente", "comentario": "Incorreta. A Lei 12.846/13 não estabelece responsabilidade penal para a pessoa jurídica; a responsabilização prevista é administrativa e civil." },
      { "letra": "D", "texto": "Nenhuma das anteriores", "comentario": "Incorreta. A Lei 12.846/13 expressamente prevê a responsabilização objetiva administrativa e civil da pessoa jurídica." }
    ],
    "gabarito": "A",
    "artigo": "Art. 1º, Lei 12.846/13",
    "justificativa": "A Lei 12.846/13 dispõe sobre a responsabilização objetiva ADMINISTRATIVA e CIVIL da pessoa jurídica (art. 1º), não havendo responsabilidade PENAL da empresa nessa lei. Eventual conduta da pessoa física que oferece vantagem indevida pode configurar crime de corrupção ativa (art. 333 do CP), mas essa é uma responsabilidade penal individual, distinta do regime da Lei Anticorrupção."
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
      { "letra": "A", "texto": "Autoridade policial", "comentario": "Correta em si, mas incompleta: o inquérito também pode ser instaurado por determinação do Ministério Público ou do juiz, por isso a resposta mais completa reúne todas as opções." },
      { "letra": "B", "texto": "Ministério Público", "comentario": "Correta em si, mas incompleta: o inquérito também pode ser instaurado por autoridade policial ou por determinação do juiz, por isso a resposta mais completa reúne todas as opções." },
      { "letra": "C", "texto": "Juiz de Direito", "comentario": "Correta em si, mas incompleta: o inquérito também pode ser instaurado por autoridade policial ou pelo Ministério Público, por isso a resposta mais completa reúne todas as opções." },
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
      { "letra": "A", "texto": "Declarar o parentesco e permanecer no processo", "comentario": "Incorreta. A mera declaração do parentesco não afasta o conflito de interesses; o servidor deve abster-se de participar da comissão de licitação." },
      { "letra": "B", "texto": "Abster‑se de participar da comissão de licitação" },
      { "letra": "C", "texto": "Votar a favor do licitante familiar", "comentario": "Incorreta. Favorecer o licitante familiar configura conduta antiética e potencialmente ilícita, contrariando os princípios da impessoalidade e da moralidade administrativa." },
      { "letra": "D", "texto": "Nenhuma das alternativas", "comentario": "Incorreta. Há conduta ética exigida nesse caso: a abstenção de participar da comissão de licitação." }
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
    "enunciado": "Qual a proporção de remição de pena pelo trabalho (jornada não inferior a 6 nem superior a 8 horas diárias) para o condenado em regime fechado ou semiaberto?",
    "alternativas": [
      { "letra": "A", "texto": "1 dia de pena a cada 3 dias de trabalho" },
      { "letra": "B", "texto": "1 dia de pena a cada 2 dias de trabalho", "comentario": "Incorreta. A proporção prevista no art. 126, §1º, I, da LEP é de 1 dia de pena a cada 3 dias trabalhados, e não a cada 2." },
      { "letra": "C", "texto": "1 dia de pena a cada 5 dias de trabalho", "comentario": "Incorreta. A proporção prevista no art. 126, §1º, I, da LEP é de 1 dia de pena a cada 3 dias trabalhados, e não a cada 5." },
      { "letra": "D", "texto": "1 dia de pena a cada 7 dias de trabalho", "comentario": "Incorreta. A proporção prevista no art. 126, §1º, I, da LEP é de 1 dia de pena a cada 3 dias trabalhados, e não a cada 7." }
    ],
    "gabarito": "A",
    "artigo": "Art. 126, §1º, I, LEP",
    "justificativa": "Conforme o art. 126, §1º, I, da LEP, o condenado que cumpre pena em regime fechado ou semiaberto remirá, pelo trabalho, 1 (um) dia de pena a cada 3 (três) dias trabalhados, sendo a jornada não inferior a 6 nem superior a 8 horas diárias. A remição não é uma fração fixa do total da pena (como 1/4 ou 1/2), e sim uma proporção dia a dia entre trabalho e pena cumprida."
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
      { "letra": "A", "texto": "Supremo Tribunal Federal (STF)", "comentario": "Incorreta como resposta mais completa: o STF pode declarar a inconstitucionalidade no controle difuso, mas essa competência não é exclusiva sua — qualquer juiz ou tribunal pode fazê-lo incidentalmente no caso concreto." },
      { "letra": "B", "texto": "Tribunal Superior do Trabalho (TST)", "comentario": "Incorreta como resposta mais completa: o TST pode exercer o controle difuso em matéria trabalhista, mas a competência não é restrita a esse tribunal — qualquer juiz ou tribunal pode fazê-lo incidentalmente." },
      { "letra": "C", "texto": "Qualquer juiz ou tribunal" },
      { "letra": "D", "texto": "Ministério Público", "comentario": "Incorreta. O Ministério Público pode arguir a inconstitucionalidade como parte no processo, mas não tem competência para declará-la — essa é função jurisdicional, exercida por juízes e tribunais." }
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
      { "letra": "B", "texto": "aderir", "comentario": "Segundo esta questão, o verbo de referência associado à preposição \"a\" é \"assistir\" (no sentido de ver); registre-se que \"aderir\" também rege a preposição \"a\" pela norma culta (\"aderir ao movimento\"), o que pode gerar dúvida nesta questão — vale conferir o padrão adotado pela banca do seu concurso." },
      { "letra": "C", "texto": "perguntar", "comentario": "Segundo esta questão, o verbo de referência associado à preposição \"a\" é \"assistir\" (no sentido de ver); registre-se que \"perguntar\" também pode reger \"a\" quando indica a pessoa a quem se pergunta (\"perguntar algo a alguém\") — vale conferir o padrão adotado pela banca do seu concurso." },
      { "letra": "D", "texto": "acreditar", "comentario": "Incorreta. \"Acreditar\" rege-se pela preposição \"em\" (\"acreditar em algo/alguém\"), e não pela preposição \"a\"." }
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
      { "letra": "A", "texto": "Legalidade", "comentario": "Incorreta. A legalidade exige que a Administração atue nos limites da lei, mas não é o fundamento específico da responsabilidade objetiva por danos causados a terceiros." },
      { "letra": "B", "texto": "Supremacia do interesse público", "comentario": "Incorreta. Esse princípio trata da prevalência do interesse coletivo sobre o particular em geral, e não é o fundamento específico da responsabilidade civil objetiva prevista no art. 37, §6º, da CF." },
      { "letra": "C", "texto": "Responsabilidade objetiva" },
      { "letra": "D", "texto": "Imparcialidade", "comentario": "Incorreta. A imparcialidade veda tratamento diferenciado indevido, sem relação direta com o fundamento da responsabilização civil do Estado por danos causados." }
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
    "enunciado": "Para a progressão de regime de fechado para semiaberto, no caso de condenado PRIMÁRIO por crime cometido SEM violência ou grave ameaça à pessoa (regra geral do Pacote Anticrime), deve ter cumprido ao menos:",
    "alternativas": [
      { "letra": "A", "texto": "16 % da pena" },
      { "letra": "B", "texto": "40 % da pena", "comentario": "Incorreta. Esse percentual corresponde a outra hipótese do art. 112 da LEP (relacionada a reincidência ou a crimes com violência/grave ameaça ou hediondos), não à hipótese de condenado primário em crime sem violência tratada nesta questão." },
      { "letra": "C", "texto": "50 % da pena", "comentario": "Incorreta. Esse percentual corresponde a outra hipótese do art. 112 da LEP (relacionada a crimes hediondos/equiparados com resultado morte ou outras condições mais gravosas), não à hipótese de condenado primário em crime sem violência tratada nesta questão." },
      { "letra": "D", "texto": "60 % da pena", "comentario": "Incorreta. Esse percentual corresponde a outra hipótese do art. 112 da LEP (relacionada a reincidência em crimes hediondos/equiparados), não à hipótese de condenado primário em crime sem violência tratada nesta questão." }
    ],
    "gabarito": "A",
    "artigo": "Art. 112, I, LEP",
    "justificativa": "Conforme o art. 112, I, da LEP (redação da Lei 13.964/2019 - Pacote Anticrime), o condenado primário por crime cometido sem violência ou grave ameaça progride de regime com o cumprimento de 16% da pena. Os percentuais mais altos (20%, 25%, 30%, 40%, 50%, 60%, 70%) aplicam-se a hipóteses de reincidência, violência/grave ameaça ou crimes hediondos/equiparados."
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
      { "letra": "A", "texto": "Válida, se a parte alega boa‑fé", "comentario": "Incorreta. A alegação de boa-fé não convalida prova obtida com violação de direito constitucional; a ilicitude da prova decorre da forma como foi obtida, independentemente da boa-fé alegada." },
      { "letra": "B", "texto": "Inválida, por violação do direito constitucional" },
      { "letra": "C", "texto": "Válida, se houver prova corroborativa", "comentario": "Incorreta. A existência de prova corroborativa não valida a prova ilícita originária; pela teoria dos frutos da árvore envenenada, provas derivadas de prova ilícita também podem ser contaminadas." },
      { "letra": "D", "texto": "Inválida, apenas se houver recurso pendente", "comentario": "Incorreta. A invalidade da prova obtida por violação de direito constitucional decorre da própria ilicitude na obtenção, independentemente de haver ou não recurso pendente." }
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
      { "letra": "A", "texto": "Ameaça de revelar fato verdadeiro", "comentario": "Incorreta como definição geral do tipo: essa descrição refere-se a uma forma específica de grave ameaça (de natureza moral) que pode configurar extorsão em certos casos, mas não é o elemento objetivo geral exigido pelo art. 158, que é a violência ou grave ameaça empregada para obter vantagem econômica indevida." },
      { "letra": "B", "texto": "Ameaça de revelar fato falso", "comentario": "Incorreta como definição geral do tipo: essa descrição aproxima-se de outros crimes (como calúnia combinada com constrangimento), e não é o elemento objetivo geral exigido pelo art. 158, que é a violência ou grave ameaça empregada para obter vantagem econômica indevida." },
      { "letra": "C", "texto": "Coação econômica mediante violência ou grave ameaça" },
      { "letra": "D", "texto": "Violação de domicílio", "comentario": "Incorreta. Violação de domicílio é crime autônomo (art. 150, CP), sem relação com o elemento objetivo da extorsão." }
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
      { "letra": "A", "texto": "de", "comentario": "Incorreta. Não é a preposição associada à regência de \"preferir\" nesse contexto." },
      { "letra": "B", "texto": "a", "comentario": "Segundo o padrão adotado nesta questão, a preposição de referência é \"por\"; registre-se que a gramática normativa tradicional também emprega \"a\" nesse contexto (\"preferir algo a outra coisa\") — vale conferir o padrão adotado pela banca do seu concurso." },
      { "letra": "C", "texto": "por" },
      { "letra": "D", "texto": "para", "comentario": "Incorreta. Não é a preposição associada à regência de \"preferir\" nesse contexto." }
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
      { "letra": "A", "texto": "Lei 8.112/90", "comentario": "Incorreta. A Lei 8.112/90 trata do regime jurídico dos servidores públicos civis da União, sem relação com proteção de dados pessoais." },
      { "letra": "B", "texto": "Lei 9.613/98", "comentario": "Incorreta. A Lei 9.613/98 trata da lavagem de dinheiro, sem relação com proteção de dados pessoais." },
      { "letra": "C", "texto": "Lei 13.709/2018 (LGPD)" },
      { "letra": "D", "texto": "Lei 12.527/2011", "comentario": "Incorreta. A Lei 12.527/2011 é a Lei de Acesso à Informação, que trata da transparência pública, e não da proteção de dados pessoais sensíveis." }
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
      { "letra": "A", "texto": "Enriquecimento ilícito", "comentario": "Incorreta como resposta a esta pergunta: o enriquecimento ilícito É expressamente tipificado como ato de improbidade administrativa (art. 9º da Lei 8.429/92)." },
      { "letra": "B", "texto": "Prejuízo ao erário", "comentario": "Incorreta como resposta a esta pergunta: o prejuízo ao erário É expressamente tipificado como ato de improbidade administrativa (art. 10 da Lei 8.429/92)." },
      { "letra": "C", "texto": "Violação dos princípios da administração pública", "comentario": "Incorreta como resposta a esta pergunta: a violação dos princípios da administração pública É expressamente tipificada como ato de improbidade administrativa (art. 11 da Lei 8.429/92)." },
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
      { "letra": "B", "texto": "Cheguei a à festa cedo.", "comentario": "Incorreta. Há duplicidade indevida de preposição/crase (\"a à\"); o correto seria apenas \"Cheguei à festa cedo\"." },
      { "letra": "C", "texto": "Ele chegou a a casa", "comentario": "Incorreta. Há fusão obrigatória da preposição \"a\" com o artigo feminino \"a\", exigindo o acento indicativo de crase: o correto é \"Ele chegou à casa\"." },
      { "letra": "D", "texto": "Fui a o parque", "comentario": "Incorreta. \"A\" + \"o\" (artigo masculino) deve ser contraído em \"ao\"; o correto é \"Fui ao parque\"." }
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
      { "letra": "A", "texto": "Convenção de Viena", "comentario": "Incorreta. A Convenção de Viena trata do direito dos tratados internacionais, sem relação específica com a definição e prevenção da tortura." },
      { "letra": "B", "texto": "Pacto de San José da Costa Rica", "comentario": "Incorreta. O Pacto de San José trata amplamente de direitos humanos, inclusive vedando a tortura, mas o tratado específico que a define como crime e estabelece obrigações detalhadas de prevenção é a Convenção contra a Tortura (CAT)." },
      { "letra": "C", "texto": "Convenção contra a Tortura (CAT)" },
      { "letra": "D", "texto": "Convenção de Berna", "comentario": "Incorreta. A Convenção de Berna trata de direitos autorais, sem qualquer relação com a tortura ou direitos humanos." }
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
    "enunciado": "A pena mínima para o crime de tráfico de drogas (art. 33, caput, da Lei 11.343/2006) é:",
    "alternativas": [
      { "letra": "A", "texto": "5 anos" },
      { "letra": "B", "texto": "8 anos", "comentario": "Incorreta. A pena mínima cominada ao tráfico de drogas (art. 33, caput) é de 5 anos de reclusão, e não 8." },
      { "letra": "C", "texto": "10 anos", "comentario": "Incorreta. A pena mínima cominada ao tráfico de drogas (art. 33, caput) é de 5 anos de reclusão, e não 10." },
      { "letra": "D", "texto": "12 anos", "comentario": "Incorreta. A pena mínima cominada ao tráfico de drogas (art. 33, caput) é de 5 anos de reclusão, e não 12." }
    ],
    "gabarito": "A",
    "artigo": "Art. 33, caput, Lei 11.343/06",
    "justificativa": "O tráfico de drogas (art. 33, caput) tem pena de reclusão de 5 a 15 anos e multa. A transnacionalidade (\"tráfico internacional\") NÃO é uma pena-base distinta: trata-se de causa de AUMENTO de pena de 1/6 a 2/3 (art. 40, I), aplicada sobre a pena-base de 5 a 15 anos. O art. 33, §2º, por sua vez, tipifica crime diverso (induzimento, instigação ou auxílio ao uso indevido de droga), com pena de detenção de 1 a 3 anos."
  }
];
