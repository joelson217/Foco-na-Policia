// ============================================================
// QUESTIONS_PESO1_REFORCO.JS — 20 questões inéditas cobrindo tópicos
// do edital com pouca ou nenhuma cobertura em peso 1:
// - Português: Vozes do Verbo, Tempos e Modos Verbais e Coesão/Coerência
//   Textual estavam com ZERO questões; Pronomes só tinha 1 (colocação).
// - Administrativo: Lei 14.133/21 (Nova Lei de Licitações) tinha
//   praticamente nenhuma questão — é a lei vigente, substituiu a 8.666/93.
// - História do RN: reforço em Municípios/Regiões e Cultura/Patrimônio.
// ============================================================

const QUESTIONS_PESO1_REFORCO = [
  // ---------------- PORTUGUÊS (10 questões) ----------------
  {
    id: 'p1r_port_1',
    disciplina: 'portugues',
    topico: 'Vozes do Verbo',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Assinale a frase em que o verbo está na voz passiva analítica:',
    alternativas: [
      { letra: 'A', texto: 'O policial prendeu o suspeito na madrugada.', comentario: 'Incorreta. Aqui o sujeito ("o policial") pratica a ação — é voz ativa, não passiva.' },
      { letra: 'B', texto: 'O suspeito foi preso pelo policial na madrugada.' },
      { letra: 'C', texto: 'Prendeu-se o suspeito na madrugada.', comentario: 'Incorreta. Trata-se de voz passiva SINTÉTICA (verbo + partícula apassivadora "se"), não analítica (que exige auxiliar ser/estar + particípio).' },
      { letra: 'D', texto: 'O suspeito se machucou durante a fuga.', comentario: 'Incorreta. "Se machucou" indica voz reflexiva, em que o sujeito é ao mesmo tempo agente e paciente da ação.' }
    ],
    gabarito: 'B',
    artigo: 'Gramática normativa',
    justificativa: 'Na voz passiva analítica, o sujeito sofre a ação, formada por verbo auxiliar (ser/estar) + particípio. Em "foi preso pelo policial", o suspeito (sujeito paciente) sofre a ação praticada pelo agente da passiva ("pelo policial").'
  },
  {
    id: 'p1r_port_2',
    disciplina: 'portugues',
    topico: 'Vozes do Verbo',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Na frase "Alugam-se apartamentos na região central", o "se" exerce a função de:',
    alternativas: [
      { letra: 'A', texto: 'Partícula apassivadora, formando voz passiva sintética.' },
      { letra: 'B', texto: 'Índice de indeterminação do sujeito.', comentario: 'Incorreta. O índice de indeterminação do sujeito ocorre com verbos intransitivos ou transitivos indiretos (ex.: "Precisa-se de funcionários"); aqui "alugar" é transitivo direto e há sujeito paciente expresso ("apartamentos"), configurando voz passiva sintética.' },
      { letra: 'C', texto: 'Objeto direto do verbo alugar.', comentario: 'Incorreta. "Apartamentos" é o sujeito paciente da oração (concorda em número com o verbo: "alugam-se"), não objeto direto; o "se" é partícula apassivadora.' },
      { letra: 'D', texto: 'Conjunção integrante.', comentario: 'Incorreta. Conjunção integrante introduz orações subordinadas substantivas (ex.: "que", "se" em "não sei se virá"); não é o caso aqui, onde "se" está junto ao verbo "alugar" como partícula apassivadora.' }
    ],
    gabarito: 'A',
    artigo: 'Gramática normativa',
    justificativa: 'Como o verbo "alugar" é transitivo direto e há sujeito paciente ("apartamentos"), o "se" é partícula apassivadora, formando a voz passiva sintética (equivalente a "Apartamentos são alugados").'
  },
  {
    id: 'p1r_port_3',
    disciplina: 'portugues',
    topico: 'Vozes do Verbo',
    peso: 1,
    mostCobrado: false,
    dificuldade: 'facil',
    enunciado: 'Qual das frases abaixo está na voz reflexiva?',
    alternativas: [
      { letra: 'A', texto: 'O agente penitenciário machucou o detento durante a revista.', comentario: 'Incorreta. Aqui o sujeito ("o agente") pratica a ação sobre outra pessoa ("o detento") — é voz ativa, não reflexiva.' },
      { letra: 'B', texto: 'O detento machucou-se ao tentar escalar o muro.' },
      { letra: 'C', texto: 'O detento foi machucado durante a revista.', comentario: 'Incorreta. Trata-se de voz passiva analítica (verbo auxiliar "foi" + particípio "machucado"), em que o sujeito apenas sofre a ação de outro agente, e não voz reflexiva.' },
      { letra: 'D', texto: 'Machuca-se muito quem tenta fugir.', comentario: 'Incorreta. Aqui o "se" tem valor de indeterminação do sujeito/generalização, não indicando que o mesmo sujeito pratica e sofre a ação simultaneamente como na voz reflexiva.' }
    ],
    gabarito: 'B',
    artigo: 'Gramática normativa',
    justificativa: 'Na voz reflexiva, o sujeito pratica e ao mesmo tempo sofre a ação. Em "machucou-se", o detento é ao mesmo tempo agente e paciente da ação.'
  },
  {
    id: 'p1r_port_4',
    disciplina: 'portugues',
    topico: 'Tempos e Modos Verbais',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Em "Se o preso cumprisse os requisitos, progrediria de regime", os verbos estão respectivamente no:',
    alternativas: [
      { letra: 'A', texto: 'Pretérito imperfeito do subjuntivo e futuro do pretérito do indicativo.' },
      { letra: 'B', texto: 'Pretérito perfeito do indicativo e presente do subjuntivo.', comentario: 'Incorreta. "Cumprisse" não é pretérito perfeito do indicativo (que seria "cumpriu"), e "progrediria" não é presente do subjuntivo (que seria "progrida"); a combinação correta é pretérito imperfeito do subjuntivo + futuro do pretérito do indicativo.' },
      { letra: 'C', texto: 'Futuro do subjuntivo e pretérito imperfeito do indicativo.', comentario: 'Incorreta. O futuro do subjuntivo de "cumprir" seria "cumprir" (ex.: "se cumprir"), diferente de "cumprisse"; e "progrediria" não é pretérito imperfeito do indicativo (que seria "progredia").' },
      { letra: 'D', texto: 'Presente do indicativo e futuro simples do indicativo.', comentario: 'Incorreta. Nem "cumprisse" nem "progrediria" correspondem a essas formas verbais; "cumprisse" é pretérito imperfeito do subjuntivo e "progrediria" é futuro do pretérito do indicativo.' }
    ],
    gabarito: 'A',
    artigo: 'Gramática normativa',
    justificativa: 'A oração condicional com "se" + pretérito imperfeito do subjuntivo ("cumprisse") pede, na oração principal, o futuro do pretérito do indicativo ("progrediria") — padrão clássico de período hipotético.'
  },
  {
    id: 'p1r_port_5',
    disciplina: 'portugues',
    topico: 'Tempos e Modos Verbais',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Assinale a alternativa em que o verbo destacado está corretamente flexionado no futuro do subjuntivo:',
    alternativas: [
      { letra: 'A', texto: 'Quando o juiz "vier" a decidir, comunicaremos as partes.' },
      { letra: 'B', texto: 'Quando o juiz "vir" a decidir, comunicaremos as partes.', comentario: 'Incorreta. "Vir" (sem acento) é o infinitivo/imperativo do verbo "ver", não a forma de futuro do subjuntivo de "vir", que é "vier".' },
      { letra: 'C', texto: 'Quando o juiz "veio" a decidir, comunicaremos as partes.', comentario: 'Incorreta. "Veio" é pretérito perfeito do indicativo do verbo "vir", incompatível com o valor de condição futura exigido pela oração iniciada por "quando".' },
      { letra: 'D', texto: 'Quando o juiz "virá" a decidir, comunicaremos as partes.', comentario: 'Incorreta. "Virá" é futuro do presente do indicativo, e não futuro do subjuntivo; orações iniciadas por "quando" com valor de condição futura pedem o futuro do subjuntivo ("vier").' }
    ],
    gabarito: 'A',
    artigo: 'Gramática normativa',
    justificativa: '"Vier" é a forma correta do futuro do subjuntivo do verbo "vir" na 3ª pessoa do singular, usada em orações iniciadas por "quando" com valor de condição futura. "Vir" (sem acento) é infinitivo/imperativo do verbo "ver".'
  },
  {
    id: 'p1r_port_6',
    disciplina: 'portugues',
    topico: 'Tempos e Modos Verbais',
    peso: 1,
    mostCobrado: false,
    dificuldade: 'facil',
    enunciado: 'O modo verbal que expressa ordem, pedido ou conselho é o:',
    alternativas: [
      { letra: 'A', texto: 'Indicativo.', comentario: 'Incorreta. O modo indicativo expressa certeza, fatos concretos ou reais, não ordem, pedido ou conselho.' },
      { letra: 'B', texto: 'Subjuntivo.', comentario: 'Incorreta. O subjuntivo expressa dúvida, possibilidade, desejo ou hipótese; embora suas formas sirvam de base para o imperativo, o modo que expressa ordem/pedido/conselho diretamente é o imperativo.' },
      { letra: 'C', texto: 'Imperativo.' },
      { letra: 'D', texto: 'Infinitivo pessoal.', comentario: 'Incorreta. O infinitivo pessoal indica a ação verbal flexionada por pessoa, sem valor específico de ordem, pedido ou conselho.' }
    ],
    gabarito: 'C',
    artigo: 'Gramática normativa',
    justificativa: 'O modo imperativo expressa ordem, pedido, súplica ou conselho, e se divide em afirmativo (derivado do presente do subjuntivo, exceto na 2ª pessoa) e negativo (inteiramente do presente do subjuntivo).'
  },
  {
    id: 'p1r_port_7',
    disciplina: 'portugues',
    topico: 'Coesão e Coerência Textual',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'No trecho "O preso cumpriu os requisitos legais; **todavia**, o benefício foi negado", o termo em destaque estabelece relação de:',
    alternativas: [
      { letra: 'A', texto: 'Adição.', comentario: 'Incorreta. Relação de adição seria expressa por conectivos como "e", "também", "além disso" — não é o caso de "todavia", que é adversativo.' },
      { letra: 'B', texto: 'Conclusão.', comentario: 'Incorreta. Relação de conclusão seria expressa por conectivos como "portanto", "logo", "por conseguinte" — não é o caso de "todavia".' },
      { letra: 'C', texto: 'Oposição/contraste.' },
      { letra: 'D', texto: 'Causa.', comentario: 'Incorreta. Relação de causa seria expressa por conectivos como "porque", "já que", "pois" — não é o caso de "todavia", que indica contraste.' }
    ],
    gabarito: 'C',
    artigo: 'Coesão textual',
    justificativa: '"Todavia" é conjunção adversativa, estabelecendo relação de oposição/contraste entre o cumprimento dos requisitos e a negativa do benefício — mesmo valor de "porém", "contudo", "entretanto".'
  },
  {
    id: 'p1r_port_8',
    disciplina: 'portugues',
    topico: 'Coesão e Coerência Textual',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Qual conectivo substitui adequadamente a lacuna, mantendo a coerência: "O agente foi advertido reiteradas vezes; ___, persistiu na conduta irregular"?',
    alternativas: [
      { letra: 'A', texto: 'porque', comentario: 'Incorreta. "Porque" tem valor causal e inverteria a lógica da frase, sugerindo que as advertências foram a causa da persistência, quando o sentido pretendido é de contraste/concessão.' },
      { letra: 'B', texto: 'mesmo assim' },
      { letra: 'C', texto: 'portanto', comentario: 'Incorreta. "Portanto" indicaria conclusão (como se a persistência fosse consequência lógica das advertências), o que não corresponde ao sentido concessivo/contrastante pretendido no período.' },
      { letra: 'D', texto: 'ou seja', comentario: 'Incorreta. "Ou seja" introduz uma explicação ou reformulação do que foi dito, não um contraste entre as advertências recebidas e a persistência na conduta.' }
    ],
    gabarito: 'B',
    artigo: 'Coesão textual',
    justificativa: '"Mesmo assim" indica contraste com valor concessivo (apesar das advertências, persistiu), coerente com o sentido do período. "Portanto" indicaria conclusão indevida, e "porque" indicaria causa, invertendo a lógica.'
  },
  {
    id: 'p1r_port_9',
    disciplina: 'portugues',
    topico: 'Coesão e Coerência Textual',
    peso: 1,
    mostCobrado: false,
    dificuldade: 'dificil',
    enunciado: 'A coesão referencial por anáfora ocorre quando um termo retoma um elemento:',
    alternativas: [
      { letra: 'A', texto: 'Já mencionado anteriormente no texto.' },
      { letra: 'B', texto: 'Que será mencionado posteriormente no texto (catáfora).', comentario: 'Incorreta. Essa descrição corresponde à catáfora (remissão para frente), mecanismo distinto da anáfora, que remete para trás.' },
      { letra: 'C', texto: 'Externo ao texto, do contexto situacional.', comentario: 'Incorreta. Essa descrição corresponde à dêixis/coesão exofórica, que remete a elementos fora do texto, e não à anáfora, que é intratextual.' },
      { letra: 'D', texto: 'Repetido literalmente, sem uso de pronomes ou sinônimos.', comentario: 'Incorreta. A anáfora normalmente se dá justamente por meio de pronomes, sinônimos ou expressões equivalentes, e não pela repetição literal do termo.' }
    ],
    gabarito: 'A',
    artigo: 'Coesão textual',
    justificativa: 'A anáfora é o mecanismo de coesão referencial que retoma (remete para trás) um elemento já citado no texto, geralmente por pronome, sinônimo ou expressão equivalente — diferente da catáfora, que antecipa um elemento ainda não mencionado.'
  },
  {
    id: 'p1r_port_10',
    disciplina: 'portugues',
    topico: 'Pronomes',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Em "O detento cujo comportamento foi exemplar progrediu de regime", o pronome "cujo":',
    alternativas: [
      { letra: 'A', texto: 'É pronome demonstrativo, substituindo "detento".', comentario: 'Incorreta. "Cujo" não substitui o antecedente como um pronome demonstrativo faria; ele relaciona duas orações estabelecendo posse, sendo classificado como pronome relativo.' },
      { letra: 'B', texto: 'É pronome relativo com valor possessivo, concordando com "comportamento".' },
      { letra: 'C', texto: 'É pronome indefinido, sem antecedente definido.', comentario: 'Incorreta. "Cujo" tem antecedente definido ("detento") e não expressa quantidade ou identidade indeterminada, como fazem os pronomes indefinidos.' },
      { letra: 'D', texto: 'É conjunção subordinativa causal.', comentario: 'Incorreta. "Cujo" não introduz relação de causa; é pronome relativo de valor possessivo, ligando o antecedente ao substantivo que o segue.' }
    ],
    gabarito: 'B',
    artigo: 'Gramática normativa',
    justificativa: '"Cujo" é pronome relativo de valor possessivo, que concorda em gênero e número com o substantivo que o segue ("comportamento" — masculino), e não com o antecedente ("detento"). Nunca é seguido de artigo.'
  },

  // ---------------- ADMINISTRATIVO — Lei 14.133/21 (6 questões) ----------------
  {
    id: 'p1r_adm_1',
    disciplina: 'administrativo',
    topico: 'Licitação e Contratos',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A modalidade de licitação criada pela Lei 14.133/2021, sem correspondente na Lei 8.666/93, destinada a contratações complexas em que a Administração dialoga com licitantes pré-selecionados para desenvolver soluções, é:',
    alternativas: [
      { letra: 'A', texto: 'Concorrência.', comentario: 'Incorreta. A concorrência já existia na Lei 8.666/93 e não envolve diálogo com licitantes pré-selecionados para desenvolver soluções técnicas; essa é a característica do diálogo competitivo.' },
      { letra: 'B', texto: 'Pregão eletrônico.', comentario: 'Incorreta. O pregão já existia (Lei 10.520/02) e destina-se a bens e serviços comuns, não a contratações complexas que exigem diálogo prévio com licitantes.' },
      { letra: 'C', texto: 'Diálogo competitivo.' },
      { letra: 'D', texto: 'Tomada de preços.', comentario: 'Incorreta. A tomada de preços era modalidade da Lei 8.666/93, revogada, e não envolvia diálogo com licitantes para desenvolver soluções técnicas.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 6º, XLII, Lei 14.133/21',
    justificativa: 'O diálogo competitivo é modalidade inteiramente nova, usada quando a Administração não tem, de antemão, condições de definir os meios técnicos para atender sua necessidade, dialogando com licitantes pré-selecionados por critérios objetivos.'
  },
  {
    id: 'p1r_adm_2',
    disciplina: 'administrativo',
    topico: 'Licitação e Contratos',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Sobre a Lei 14.133/2021, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Convive em paralelo com a Lei 8.666/93, que continua parcialmente em vigor.', comentario: 'Incorreta. Encerrado o período de transição, a Lei 8.666/93 foi integralmente revogada (art. 193), não havendo mais convivência paralela entre as duas leis.' },
      { letra: 'B', texto: 'Revogou integralmente a Lei 8.666/93, a Lei do Pregão (10.520/02) e partes da Lei do RDC.' },
      { letra: 'C', texto: 'Aplica-se apenas à União, não alcançando Estados e Municípios.', comentario: 'Incorreta. A Lei 14.133/21 é norma geral de licitações e contratos, aplicável à administração pública direta, autárquica e fundacional de todos os entes federativos — União, Estados, Distrito Federal e Municípios.' },
      { letra: 'D', texto: 'Manteve inalteradas todas as modalidades da lei anterior.', comentario: 'Incorreta. A nova lei extinguiu modalidades (como tomada de preços e convite) e criou outras novas (como diálogo competitivo), não mantendo inalterado o rol anterior.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 193, Lei 14.133/21',
    justificativa: 'A Lei 14.133/21 revogou integralmente a Lei 8.666/93, a Lei 10.520/02 (Pregão) e dispositivos da Lei do RDC (12.462/11) relativos a licitações, a partir de 30/12/2023 — encerrado o período de transição em que ambas podiam coexistir.'
  },
  {
    id: 'p1r_adm_3',
    disciplina: 'administrativo',
    topico: 'Licitação e Contratos',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'A contratação de profissional de notória especialização, para serviço técnico singular, é hipótese de:',
    alternativas: [
      { letra: 'A', texto: 'Dispensa de licitação, por se tratar de valor reduzido.', comentario: 'Incorreta. A dispensa (art. 75) fundamenta-se em hipóteses legais específicas como baixo valor ou situações emergenciais, e não na singularidade técnica do serviço combinada com notória especialização — essa é hipótese de inexigibilidade.' },
      { letra: 'B', texto: 'Inexigibilidade de licitação, por inviabilidade de competição.' },
      { letra: 'C', texto: 'Licitação obrigatória na modalidade concurso.', comentario: 'Incorreta. O concurso destina-se à escolha de trabalho técnico, científico ou artístico mediante prêmio, não à contratação direta de profissional especializado para serviço técnico singular.' },
      { letra: 'D', texto: 'Vedação legal, sendo proibida a contratação direta nesse caso.', comentario: 'Incorreta. A lei expressamente permite a contratação direta por inexigibilidade nesse caso (art. 74, III), não havendo vedação.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 74, III, Lei 14.133/21',
    justificativa: 'A contratação de profissional de notória especialização configura inexigibilidade, pois não há como comparar objetivamente propostas quando o serviço é singular e depende de características subjetivas do contratado — há inviabilidade jurídica de competição.'
  },
  {
    id: 'p1r_adm_4',
    disciplina: 'administrativo',
    topico: 'Princípios da Adm. Pública (LIMPE)',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Além dos princípios constitucionais do Art. 37 da CF (LIMPE), a Lei 14.133/21 previu expressamente, no rol do seu Art. 5º, os princípios da:',
    alternativas: [
      { letra: 'A', texto: 'Legalidade e moralidade, apenas repetindo o texto constitucional.', comentario: 'Incorreta. O rol do art. 5º vai além da mera repetição do art. 37 da CF, acrescentando princípios próprios como planejamento, segregação de funções e desenvolvimento nacional sustentável.' },
      { letra: 'B', texto: 'Segregação de funções, planejamento e desenvolvimento nacional sustentável.' },
      { letra: 'C', texto: 'Hierarquia militar e disciplina, próprios de corporações armadas.', comentario: 'Incorreta. Hierarquia militar e disciplina são princípios institucionais das corporações militares, não constando do rol de princípios de licitações e contratos do art. 5º da Lei 14.133/21.' },
      { letra: 'D', texto: 'Confidencialidade e sigilo processual, como regra geral.', comentario: 'Incorreta. A regra geral do processo licitatório é a publicidade e a transparência; sigilo e confidencialidade são exceções pontuais, não princípios gerais listados no art. 5º.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 5º, Lei 14.133/21',
    justificativa: 'O Art. 5º da nova lei lista, além dos princípios constitucionais clássicos, outros como planejamento, transparência, eficácia, segregação de funções, motivação, segurança jurídica, razoabilidade, competitividade, proporcionalidade e desenvolvimento nacional sustentável.'
  },
  {
    id: 'p1r_adm_5',
    disciplina: 'administrativo',
    topico: 'Atos Administrativos',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Os atributos do ato administrativo — presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade — significam, respectivamente, que o ato:',
    alternativas: [
      { letra: 'A', texto: 'É sempre definitivo, secreto, opcional e atípico.', comentario: 'Incorreta. Nenhum desses quatro atributos corresponde à definição correta dos institutos: presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade têm significados técnicos precisos, distintos de "definitivo, secreto, opcional e atípico".' },
      { letra: 'B', texto: 'Presume-se legal até prova em contrário; impõe-se independente da vontade do particular; pode ser executado pela própria Administração, sem intervenção judicial prévia; e deve corresponder a figura definida em lei.' },
      { letra: 'C', texto: 'Depende sempre de autorização judicial prévia para produzir efeitos.', comentario: 'Incorreta. Isso contraria justamente a autoexecutoriedade, atributo que permite à Administração executar o ato sem necessidade de prévia intervenção judicial, nos casos previstos em lei.' },
      { letra: 'D', texto: 'É discricionário em sua totalidade, sem qualquer vinculação legal.', comentario: 'Incorreta. Os atos administrativos podem ser vinculados ou discricionários; a tipicidade, inclusive, exige que o ato corresponda a figura prevista em lei, o que é incompatível com "discricionariedade total sem vinculação".' }
    ],
    gabarito: 'B',
    artigo: 'Doutrina de Direito Administrativo',
    justificativa: 'Presunção de legitimidade: presume-se válido até prova em contrário. Imperatividade: impõe-se coercitivamente. Autoexecutoriedade: a Administração executa sem precisar de ordem judicial prévia (nos casos previstos em lei). Tipicidade: deve corresponder a figura previamente definida em lei.'
  },
  {
    id: 'p1r_adm_6',
    disciplina: 'administrativo',
    topico: 'Poder de Polícia',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O poder de polícia administrativa, exercido para condicionar e restringir o uso de bens, direitos e atividades em favor do interesse público, possui como um de seus atributos a:',
    alternativas: [
      { letra: 'A', texto: 'Irrevogabilidade, sendo os atos de polícia sempre definitivos.', comentario: 'Incorreta. Os atos de polícia administrativa podem ser revistos e revogados pela própria Administração por razões de conveniência e oportunidade, respeitados direitos adquiridos; não são caracterizados por irrevogabilidade.' },
      { letra: 'B', texto: 'Discricionariedade absoluta, sem qualquer controle judicial.', comentario: 'Incorreta. Mesmo os atos discricionários de polícia estão sujeitos a controle judicial quanto à legalidade, e a discricionariedade nunca é absoluta, encontrando limites nos elementos vinculados do ato (competência, forma, finalidade).' },
      { letra: 'C', texto: 'Coercibilidade, que permite a imposição de medidas mesmo contra a vontade do administrado.' },
      { letra: 'D', texto: 'Exclusividade para atos de natureza penal.', comentario: 'Incorreta. O poder de polícia administrativa é de natureza administrativa, não penal; suas sanções (multas, interdições, apreensões) são administrativas, distintas das sanções penais aplicadas pelo Poder Judiciário.' }
    ],
    gabarito: 'C',
    artigo: 'Doutrina de Direito Administrativo',
    justificativa: 'A coercibilidade é atributo do poder de polícia que permite à Administração impor suas decisões coercitivamente, independentemente da concordância do administrado, podendo inclusive usar força, se necessário e nos limites legais.'
  },

  // ---------------- HISTÓRIA DO RN (4 questões) ----------------
  {
    id: 'p1r_hist_1',
    disciplina: 'historia',
    topico: 'Municípios e Regiões do RN',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O Rio Grande do Norte é dividido, para fins de planejamento, em quatro mesorregiões geográficas. São elas:',
    alternativas: [
      { letra: 'A', texto: 'Norte, Sul, Leste e Oeste Potiguar.', comentario: 'Incorreta. Essa nomenclatura não corresponde à divisão oficial do IBGE, que usa Oeste, Central, Agreste e Leste Potiguar.' },
      { letra: 'B', texto: 'Oeste Potiguar, Central Potiguar, Agreste Potiguar e Leste Potiguar.' },
      { letra: 'C', texto: 'Litoral, Sertão, Agreste e Zona da Mata.', comentario: 'Incorreta. Essa divisão é típica de outros estados nordestinos (como Pernambuco), não correspondendo à divisão oficial em mesorregiões do Rio Grande do Norte.' },
      { letra: 'D', texto: 'Metropolitana, Central, Serrana e Litorânea.', comentario: 'Incorreta. Essa nomenclatura não corresponde à divisão oficial do IBGE em mesorregiões do Rio Grande do Norte.' }
    ],
    gabarito: 'B',
    artigo: 'Geografia do RN (IBGE)',
    justificativa: 'O IBGE divide o Rio Grande do Norte em quatro mesorregiões: Oeste Potiguar, Central Potiguar, Agreste Potiguar e Leste Potiguar (onde está Natal).'
  },
  {
    id: 'p1r_hist_2',
    disciplina: 'historia',
    topico: 'Municípios e Regiões do RN',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'O segundo maior município do Rio Grande do Norte em população, importante polo do agronegócio (fruticultura) e da produção de sal, é:',
    alternativas: [
      { letra: 'A', texto: 'Parnamirim.', comentario: 'Incorreta. Parnamirim é um dos maiores municípios do RN e integra a região metropolitana de Natal, mas não é o polo tradicionalmente reconhecido pela produção de sal e fruticultura — esse destaque é de Mossoró.' },
      { letra: 'B', texto: 'Caicó.', comentario: 'Incorreta. Caicó é importante centro do Seridó potiguar, mas não é o segundo maior município em população nem se destaca pela produção de sal.' },
      { letra: 'C', texto: 'Mossoró.' },
      { letra: 'D', texto: 'Currais Novos.', comentario: 'Incorreta. Currais Novos é um município relevante do interior do RN, mas não é o segundo maior em população nem o principal polo de sal e fruticultura irrigada.' }
    ],
    gabarito: 'C',
    artigo: 'Geografia/Economia do RN',
    justificativa: 'Mossoró é o segundo maior município do RN em população e um dos principais polos econômicos do estado, destacando-se na produção de sal marinho, petróleo e fruticultura irrigada (melão).'
  },
  {
    id: 'p1r_hist_3',
    disciplina: 'historia',
    topico: 'Cultura e Patrimônio do RN',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'Considerado o maior cajueiro do mundo, ponto turístico do litoral norte potiguar, localiza-se no município de:',
    alternativas: [
      { letra: 'A', texto: 'Tibau do Sul.', comentario: 'Incorreta. Tibau do Sul é conhecido por praias como Pipa, mas não é onde se localiza o Cajueiro de Pirangi.' },
      { letra: 'B', texto: 'Pirangi do Norte (Parnamirim).' },
      { letra: 'C', texto: 'Touros.', comentario: 'Incorreta. Touros é um município do litoral norte potiguar, mas não é onde se localiza o Cajueiro de Pirangi.' },
      { letra: 'D', texto: 'São Miguel do Gostoso.', comentario: 'Incorreta. São Miguel do Gostoso é conhecido por suas praias e ventos para esportes náuticos, mas não é onde se localiza o Cajueiro de Pirangi.' }
    ],
    gabarito: 'B',
    artigo: 'Cultura e Patrimônio do RN',
    justificativa: 'O Cajueiro de Pirangi, em Pirangi do Norte (Parnamirim/RN), é reconhecido pelo Guinness World Records como o maior cajueiro do mundo em área de copa.'
  },
  {
    id: 'p1r_hist_4',
    disciplina: 'historia',
    topico: 'Cultura e Patrimônio do RN',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O Forte dos Reis Magos, principal monumento histórico de Natal, foi erguido no período colonial com qual finalidade original?',
    alternativas: [
      { letra: 'A', texto: 'Servir de igreja para a catequese dos indígenas.', comentario: 'Incorreta. A finalidade original do forte foi militar (defesa territorial), e não religiosa/catequética.' },
      { letra: 'B', texto: 'Defender a foz do Rio Potengi contra invasões, sobretudo francesas.' },
      { letra: 'C', texto: 'Funcionar como sede do governo provincial.', comentario: 'Incorreta. O forte teve finalidade militar de defesa, não administrativa/governamental.' },
      { letra: 'D', texto: 'Abrigar o primeiro presídio da capitania.', comentario: 'Incorreta. Embora o forte tenha sido usado posteriormente também como prisão em determinados períodos históricos, sua finalidade original na construção foi a defesa militar da foz do Potengi, não servir de presídio.' }
    ],
    gabarito: 'B',
    artigo: 'História do RN',
    justificativa: 'O Forte dos Reis Magos foi construído em 1598 para proteger a foz do Rio Potengi contra invasões estrangeiras, sobretudo francesas, consolidando a presença portuguesa na região — sua fundação está diretamente ligada à fundação de Natal (1599).'
  }
];
