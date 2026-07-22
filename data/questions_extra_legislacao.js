// ============================================================
// QUESTIONS_EXTRA_LEGISLACAO.JS — 30 novas questões
// Foco: Hediondos, Drogas, ORCRIM, Tortura — PPRN/Avalia
// ============================================================

const QUESTIONS_EXTRA_LEGISLACAO = [
  // =========================================
  // LEI 8.072/90 — CRIMES HEDIONDOS (8 questões)
  // =========================================
  {
    "id": "leg_extra_1",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Crimes Hediondos",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme a Lei de Crimes Hediondos (Lei 8.072/90), com as atualizações legislativas recentes, é crime hediondo:",
    "alternativas": [
      { "letra": "A", "texto": "O furto qualificado pelo emprego de explosivo (art. 155, §4º-A do CP)." },
      { "letra": "B", "texto": "O roubo simples (art. 157, caput do CP)." },
      { "letra": "C", "texto": "O homicídio culposo, quando praticado por agente público no exercício da função." },
      { "letra": "D", "texto": "A extorsão simples (art. 158 do CP), por atentar contra o patrimônio alheio." }
    ],
    "gabarito": "A",
    "artigo": "Art. 1º, II-B da Lei 8.072/90 (incluído pela Lei 13.964/2019)",
    "justificativa": "A Lei 13.964/2019 (Pacote Anticrime) inseriu o furto qualificado pelo emprego de explosivo (art. 155, §4º-A CP) como crime hediondo. O roubo simples, homicídio culposo e extorsão simples NÃO são hediondos. São hediondos: homicídio doloso qualificado, feminicídio, latrocínio, extorsão com sequestro, estupro, lesão gravíssima em contexto de violência doméstica, entre outros taxativamente listados."
  },
  {
    "id": "leg_extra_2",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Progressão de Regime",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre os percentuais de progressão de regime para crimes hediondos, conforme o art. 112 da LEP (com redação da Lei 13.964/2019), qual a fração correta para o condenado PRIMÁRIO por crime hediondo ou equiparado COM RESULTADO MORTE?",
    "alternativas": [
      { "letra": "A", "texto": "40% da pena." },
      { "letra": "B", "texto": "50% da pena." },
      { "letra": "C", "texto": "60% da pena." },
      { "letra": "D", "texto": "70% da pena." }
    ],
    "gabarito": "B",
    "artigo": "Art. 112, VI, 'a' da LEP (Lei 13.964/2019)",
    "justificativa": "O art. 112, VI da LEP traz a progressão para crimes hediondos ou equiparados: 'a' — condenado PRIMÁRIO com resultado morte: 50%. 'b' — condenado reincidente com resultado morte: 60%. Para hediondos sem resultado morte: primário = 40% (inciso V) e reincidente específico = 60% (inciso VII). O percentual de 70% é para o reincidente específico em hediondo com resultado morte (inciso VIII)."
  },
  {
    "id": "leg_extra_3",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Insuscetibilidade de Benefícios",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A Lei de Crimes Hediondos (Lei 8.072/90, art. 2º) prevê que os crimes hediondos e equiparados são insuscetíveis de:",
    "alternativas": [
      { "letra": "A", "texto": "Anistia, graça e indulto; além de fiança." },
      { "letra": "B", "texto": "Anistia, graça, indulto e sursis processual (suspensão condicional do processo)." },
      { "letra": "C", "texto": "Anistia, graça, indulto, fiança e livramento condicional." },
      { "letra": "D", "texto": "Anistia, graça, indulto, fiança e transação penal." }
    ],
    "gabarito": "A",
    "artigo": "Art. 2º, I e II da Lei 8.072/90",
    "justificativa": "A Lei 8.072/90 prevê no art. 2º que os crimes hediondos e equiparados são: I — insuscetíveis de ANISTIA, GRAÇA e INDULTO; II — INAFIANÇÁVEIS. O sursis processual e a transação penal são vedados pelo art. 89 da Lei 9.099/95 para crimes com pena mínima superior a 1 ano, mas não expressamente pela Lei de Hediondos. O livramento condicional é ADMITIDO para hediondos, mas com o requisito especial de 2/3 (para primário ou reincidente não específico) — não há vedação absoluta."
  },
  {
    "id": "leg_extra_4",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Livramento Condicional",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O livramento condicional em crimes hediondos ou equiparados exige, conforme a Lei 8.072/90 e o CP:",
    "alternativas": [
      { "letra": "A", "texto": "Cumprimento de 1/2 da pena para o primário e 2/3 para o reincidente." },
      { "letra": "B", "texto": "Cumprimento de 2/3 da pena, vedada a concessão ao reincidente específico em crimes hediondos ou equiparados." },
      { "letra": "C", "texto": "É vedado o livramento condicional para todos os condenados por crimes hediondos ou equiparados." },
      { "letra": "D", "texto": "Cumprimento de 40% da pena, com exame criminológico obrigatório pelo Conselho Penitenciário." }
    ],
    "gabarito": "B",
    "artigo": "Art. 83, V do CP e Art. 5º da Lei 8.072/90",
    "justificativa": "O art. 83, V do CP exige o cumprimento de 2/3 da pena para condenados por crime hediondo, prática de tortura, tráfico ilícito de entorpecentes e drogas afins, e terrorismo. Além disso, é vedada a concessão ao reincidente específico em crimes hediondos ou equiparados (não simplesmente qualquer reincidente). O livramento condicional NÃO é vedado absolutamente — apenas exige percentual maior."
  },
  {
    "id": "leg_extra_5",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Latrocínio",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "O latrocínio (roubo seguido de morte — art. 157, §3º, II do CP) é considerado crime hediondo. Sobre esse crime, a Súmula 610 do STF estabelece que:",
    "alternativas": [
      { "letra": "A", "texto": "Há latrocínio mesmo quando o agente não consegue subtrair o bem, mas mata a vítima." },
      { "letra": "B", "texto": "O latrocínio só se consuma quando há tanto a subtração do bem quanto a morte da vítima." },
      { "letra": "C", "texto": "Na dúvida entre latrocínio e homicídio qualificado, prevalece o homicídio por ser crime autônomo." },
      { "letra": "D", "texto": "O latrocínio não admite tentativa quando a vítima sobrevive, configurando apenas lesão corporal seguida de roubo." }
    ],
    "gabarito": "A",
    "artigo": "Súmula 610 do STF; Art. 157, §3º, II do CP",
    "justificativa": "A Súmula 610 do STF afirma: 'Há crime de latrocínio quando o homicídio se consuma, ainda que não realize o agente a subtração de bens da vítima.' Ou seja, o latrocínio se consuma pela MORTE DA VÍTIMA, mesmo que o agente não leve nada. Se a vítima sobrevive mas o bem foi subtraído: tentativa de latrocínio (e não roubo consumado). Se a vítima morre mas o bem não foi subtraído: latrocínio consumado (pela morte)."
  },
  {
    "id": "leg_extra_6",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Crimes Equiparados a Hediondos",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "São classificados pela Constituição Federal (art. 5º, XLIII) como crimes equiparados a hediondos, sujeitos ao mesmo tratamento penal:",
    "alternativas": [
      { "letra": "A", "texto": "Tortura, tráfico de drogas, terrorismo e lavagem de dinheiro." },
      { "letra": "B", "texto": "Tortura, tráfico ilícito de entorpecentes e drogas afins, terrorismo e racismo." },
      { "letra": "C", "texto": "Tortura, tráfico ilícito de entorpecentes e drogas afins, terrorismo e os definidos em lei como hediondos." },
      { "letra": "D", "texto": "Tortura, tráfico de drogas, terrorismo, genocídio e crimes contra a humanidade." }
    ],
    "gabarito": "C",
    "artigo": "Art. 5º, XLIII da CF/88",
    "justificativa": "O art. 5º, XLIII da CF é expresso: 'a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da TORTURA, o TRÁFICO ILÍCITO DE ENTORPECENTES E DROGAS AFINS, o TERRORISMO e os definidos como CRIMES HEDIONDOS'. Lavagem de dinheiro, racismo e genocídio NÃO são equiparados a hediondos (racismo é inafiançável e imprescritível, mas por outro dispositivo — art. 5º, XLII)."
  },
  {
    "id": "leg_extra_7",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Regime Inicial Fechado",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Após o julgamento do HC 111.840/ES pelo STF, em relação ao regime inicial de cumprimento de pena em crimes hediondos, qual o entendimento correto?",
    "alternativas": [
      { "letra": "A", "texto": "Os crimes hediondos exigem obrigatoriamente o início do cumprimento em regime fechado, sem exceções." },
      { "letra": "B", "texto": "O art. 2º, §1º da Lei 8.072/90 é inconstitucional: o juiz pode fixar regime inicial diferente do fechado, com base nas circunstâncias do caso concreto (art. 59 CP)." },
      { "letra": "C", "texto": "O regime inicial para crimes hediondos é o semiaberto, reservando o fechado para os reincidentes específicos." },
      { "letra": "D", "texto": "O STF não admite regime aberto para crimes hediondos em nenhuma hipótese." }
    ],
    "gabarito": "B",
    "artigo": "HC 111.840/ES — STF; Art. 2º, §1º da Lei 8.072/90",
    "justificativa": "O STF, no HC 111.840/ES, declarou inconstitucional a obrigatoriedade de regime fechado para todos os crimes hediondos prevista no art. 2º, §1º da Lei 8.072/90. Com isso, o regime inicial deve ser fixado individualmente, seguindo o art. 33 do CP e as circunstâncias do caso. Um condenado por crime hediondo com pena ≤4 anos e boas circunstâncias pode iniciar em regime aberto. Contudo, o juiz pode fundamentar o regime fechado mesmo fora dessa previsão."
  },
  {
    "id": "leg_extra_8",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Estupro de Vulnerável",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme a Lei de Crimes Hediondos e o Código Penal, o crime de estupro de vulnerável (art. 217-A CP):",
    "alternativas": [
      { "letra": "A", "texto": "É crime hediondo apenas quando resulta em lesão corporal grave ou morte da vítima." },
      { "letra": "B", "texto": "É crime hediondo em qualquer de suas formas, incluindo a tentativa." },
      { "letra": "C", "texto": "É crime hediondo, mas admite benefício da transação penal quando o agente for primário." },
      { "letra": "D", "texto": "Não é considerado crime hediondo, apenas é equiparado ao crime de estupro com agravante de vulnerabilidade." }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, VI da Lei 8.072/90",
    "justificativa": "O art. 1º, VI da Lei 8.072/90 prevê expressamente que são hediondos: estupro (art. 213 CP) e estupro de vulnerável (art. 217-A CP), na forma simples ou com qualquer resultado. Não há restrição à forma qualificada. A tentativa de crime hediondo também é hedionda (art. 1º, parágrafo único). A transação penal é vedada — crimes hediondos são inafiançáveis e têm pena mínima superior a 1 ano."
  },

  // =========================================
  // LEI 11.343/06 — LEI DE DROGAS (8 questões)
  // =========================================
  {
    "id": "leg_extra_9",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Critérios para Distinção Usuário x Traficante",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Para determinar se a droga encontrada com o agente se destinava a consumo pessoal ou ao tráfico, o art. 28, §2º da Lei 11.343/06 determina que o juiz considerará:",
    "alternativas": [
      { "letra": "A", "texto": "Exclusivamente a quantidade da droga e o local onde foi encontrada." },
      { "letra": "B", "texto": "A natureza e a quantidade da substância apreendida, o local e as condições em que se desenvolveu a ação, as circunstâncias sociais e pessoais, bem como a conduta e os antecedentes do agente." },
      { "letra": "C", "texto": "Somente os antecedentes criminais do agente, presumindo o tráfico em caso de reincidência." },
      { "letra": "D", "texto": "A confissão do próprio agente e o laudo pericial da droga, sendo esses os únicos meios de prova admitidos." }
    ],
    "gabarito": "B",
    "artigo": "Art. 28, §2º da Lei 11.343/06",
    "justificativa": "O art. 28, §2º da Lei de Drogas elenca os critérios: natureza e quantidade da substância; local e condições em que se desenvolveu a ação; circunstâncias sociais e pessoais; conduta e antecedentes do agente. O juiz deve analisar o conjunto — não apenas um critério isolado. Assim, uma pequena quantidade pode configurar tráfico dependendo do contexto, e vice-versa."
  },
  {
    "id": "leg_extra_10",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Tráfico Privilegiado",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre o tráfico privilegiado (art. 33, §4º da Lei de Drogas) e sua natureza jurídica, assinale a alternativa correta conforme o posicionamento do STF:",
    "alternativas": [
      { "letra": "A", "texto": "O tráfico privilegiado é crime hediondo, pois mantém o núcleo da conduta do art. 33 da Lei de Drogas." },
      { "letra": "B", "texto": "O tráfico privilegiado não é crime hediondo, conforme decidido no HC 118.533/MS do STF." },
      { "letra": "C", "texto": "O tráfico privilegiado é crime equiparado a hediondo, mas admite fiança no caso concreto." },
      { "letra": "D", "texto": "O STF ainda não se pronunciou definitivamente sobre a natureza hedionda do tráfico privilegiado." }
    ],
    "gabarito": "B",
    "artigo": "HC 118.533/MS — STF (2016); Art. 33, §4º da Lei 11.343/06",
    "justificativa": "O STF, no HC 118.533/MS (julgado em 23/06/2016, Plenário), decidiu por maioria que o TRÁFICO PRIVILEGIADO (art. 33, §4º) NÃO É CRIME HEDIONDO nem equiparado. A causa de diminuição de pena do §4º afasta a hediondez. Com isso, o condenado por tráfico privilegiado tem direito a progressão de regime nos prazos normais (não os agravados da Lei 8.072/90) e pode obter livramento condicional com 1/3 ou 1/2 da pena."
  },
  {
    "id": "leg_extra_11",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Associação para o Tráfico",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O crime de associação para o tráfico (art. 35 da Lei 11.343/06) se diferencia da organização criminosa (Lei 12.850/13) no seguinte aspecto:",
    "alternativas": [
      { "letra": "A", "texto": "A associação para o tráfico exige 4 ou mais pessoas, enquanto a organização criminosa exige apenas 2." },
      { "letra": "B", "texto": "A associação para o tráfico exige ao menos 2 pessoas e não requer estrutura formal; a ORCRIM exige 4 ou mais pessoas com divisão de tarefas." },
      { "letra": "C", "texto": "Ambos os crimes exigem 3 pessoas, diferenciando-se apenas pelo objeto (drogas x outros crimes)." },
      { "letra": "D", "texto": "A associação para o tráfico é crime permanente, enquanto a organização criminosa é crime instantâneo de efeitos permanentes." }
    ],
    "gabarito": "B",
    "artigo": "Art. 35 da Lei 11.343/06 vs Art. 1º, §1º da Lei 12.850/13",
    "justificativa": "A associação para o tráfico (art. 35) exige DUAS OU MAIS PESSOAS para a prática reiterada dos crimes dos arts. 33 a 37. Não exige estrutura formal. A organização criminosa (art. 1º, §1º da Lei 12.850/13) exige 4 OU MAIS PESSOAS, estruturalmente ordenadas com divisão de tarefas, com penas máximas superiores a 4 anos ou caráter transnacional. As penas também diferem: associação = 3 a 10 anos; integrar ORCRIM = 3 a 8 anos."
  },
  {
    "id": "leg_extra_12",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Causas de Aumento de Pena",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O art. 40 da Lei 11.343/06 prevê causas de aumento de pena (de 1/6 a 2/3) para o crime de tráfico. Qual das situações abaixo configura essa causa de aumento?",
    "alternativas": [
      { "letra": "A", "texto": "O tráfico praticado em conjunto por duas pessoas." },
      { "letra": "B", "texto": "O tráfico praticado nas dependências ou imediações de presídios, estabelecimentos de ensino ou de saúde." },
      { "letra": "C", "texto": "O tráfico praticado em via pública, fora do horário comercial." },
      { "letra": "D", "texto": "O tráfico praticado pela primeira vez pelo agente, sem antecedentes criminais." }
    ],
    "gabarito": "B",
    "artigo": "Art. 40, III da Lei 11.343/06",
    "justificativa": "O art. 40, III da Lei 11.343/06 prevê aumento de 1/6 a 2/3 quando o crime for praticado nas dependências ou imediações de: estabelecimentos prisionais, de ensino ou hospitalares, de sedes de entidades estudantis, sociais, culturais, recreativas, esportivas ou beneficentes, de locais de trabalho coletivo, de recintos onde se realizem espetáculos ou diversões de qualquer natureza, de serviços de tratamento de dependentes de drogas ou de reinserção social. O simples fato de dois traficantes agirem juntos pode configurar associação (art. 35), não necessariamente a causa de aumento."
  },
  {
    "id": "leg_extra_13",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Financiamento ao Tráfico",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "O crime de financiamento ao tráfico (art. 36 da Lei de Drogas) é equiparado a hediondo e tem pena mais severa que o tráfico comum. Qual a pena cominada?",
    "alternativas": [
      { "letra": "A", "texto": "Reclusão de 5 a 15 anos e multa de 500 a 1.500 dias-multa." },
      { "letra": "B", "texto": "Reclusão de 8 a 20 anos e pagamento de 1.500 a 4.000 dias-multa." },
      { "letra": "C", "texto": "Reclusão de 10 a 15 anos, sem previsão de multa." },
      { "letra": "D", "texto": "Reclusão de 5 a 10 anos e multa de 1.000 a 2.000 dias-multa." }
    ],
    "gabarito": "B",
    "artigo": "Art. 36 da Lei 11.343/06",
    "justificativa": "O art. 36 da Lei de Drogas prevê: 'Financiar ou custear a prática de qualquer dos crimes previstos nos arts. 33, caput e §1º, e 34 desta Lei: Pena — reclusão, de 8 (oito) a 20 (vinte) anos, e pagamento de 1.500 (mil e quinhentos) a 4.000 (quatro mil) dias-multa.' É o crime com pena mais severa da Lei de Drogas, pois atinge quem por trás financia o tráfico sem se expor diretamente."
  },
  {
    "id": "leg_extra_14",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Inafiançabilidade",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Segundo o art. 44 da Lei de Drogas (Lei 11.343/06), os crimes previstos nos arts. 33, caput e §1º, e arts. 34 a 37 são:",
    "alternativas": [
      { "letra": "A", "texto": "Inafiançáveis, mas passíveis de sursis e liberdade provisória sem fiança." },
      { "letra": "B", "texto": "Afiançáveis apenas quando praticados por primário e sem antecedentes criminais." },
      { "letra": "C", "texto": "Inafiançáveis e insuscetíveis de sursis, graça, indulto, anistia e liberdade provisória, vedada a conversão das penas em restritivas de direitos." },
      { "letra": "D", "texto": "Inafiançáveis apenas na fase investigatória; durante o processo podem receber fiança judicial." }
    ],
    "gabarito": "C",
    "artigo": "Art. 44 da Lei 11.343/06",
    "justificativa": "O art. 44 da Lei de Drogas é expresso: os crimes dos arts. 33, caput e §1º, e arts. 34 a 37 são INAFIANÇÁVEIS e INSUSCETÍVEIS de sursis, graça, indulto, anistia e liberdade provisória. Também é vedada a conversão das penas privativas de liberdade em restritivas de direitos. ATENÇÃO: O tráfico privilegiado (art. 33, §4º), segundo o STJ, não é alcançado pela vedação do art. 44 quanto à conversão em penas restritivas — precedente em evolução."
  },
  {
    "id": "leg_extra_15",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Destruição de Drogas",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Quanto à destruição de drogas apreendidas em flagrante delito, nos termos do art. 50, §1º da Lei 11.343/06:",
    "alternativas": [
      { "letra": "A", "texto": "O delegado pode determinar a destruição imediata, independentemente de lavratura do auto de flagrante." },
      { "letra": "B", "texto": "Somente o juiz pode ordenar a destruição, após análise do laudo pericial e em prazo não determinado." },
      { "letra": "C", "texto": "O delegado de polícia, na presença do Ministério Público e da autoridade sanitária, destruirá a droga em até 30 dias da lavratura do flagrante." },
      { "letra": "D", "texto": "O delegado de polícia, na presença do Ministério Público e da autoridade sanitária, destruirá as drogas em até 15 dias da lavratura do auto de prisão em flagrante." }
    ],
    "gabarito": "D",
    "artigo": "Art. 50, §1º da Lei 11.343/06",
    "justificativa": "O art. 50, §1º da Lei de Drogas estabelece que o DELEGADO DE POLÍCIA, DIANTE DO MP E DA AUTORIDADE SANITÁRIA, no prazo de ATÉ 15 DIAS, destruirá as drogas apreendidas, guardando amostra para fins periciais. ATENÇÃO: a destruição no prazo de 15 dias é para o caso de flagrante. Se não houve flagrante, o prazo é de 240 dias após decisão judicial. A destruição é feita pelo delegado — não pelo juiz, conforme estabelece a lei."
  },
  {
    "id": "leg_extra_16",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Ação Penal (Art. 28)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "No crime de porte de drogas para consumo pessoal (art. 28 da Lei 11.343/06), qual o tipo de ação penal e o prazo prescricional?",
    "alternativas": [
      { "letra": "A", "texto": "Ação penal privada, com prazo decadencial de 6 meses." },
      { "letra": "B", "texto": "Ação penal pública incondicionada, com prescrição em 2 anos." },
      { "letra": "C", "texto": "Ação penal pública condicionada à representação do Ministério da Saúde." },
      { "letra": "D", "texto": "Ação penal pública incondicionada, prescrevendo a pretensão punitiva em 1 ano e a pretensão executória em 2 anos." }
    ],
    "gabarito": "B",
    "artigo": "Art. 28 e §3º da Lei 11.343/06",
    "justificativa": "O crime do art. 28 (usuário) é de ação penal PÚBLICA INCONDICIONADA — o MP pode agir independentemente de representação. Quanto à prescrição, o STF entende que, como não há pena privativa de liberdade (são penas de advertência e serviços comunitários), aplica-se o prazo prescricional mínimo do CP: 2 anos (art. 109, VI CP). O prazo decadencial de 6 meses é de ação privada ou condicionada, não aplicável aqui."
  },

  // =========================================
  // LEI 12.850/13 — ORGANIZAÇÕES CRIMINOSAS (7 questões)
  // =========================================
  {
    "id": "leg_extra_17",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Conceito de ORCRIM",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme o art. 1º, §1º da Lei 12.850/13, para que uma associação seja considerada organização criminosa, são necessários, entre outros requisitos:",
    "alternativas": [
      { "letra": "A", "texto": "Mínimo de 3 pessoas, com divisão de tarefas e objetivo de obter vantagem com crimes de pena máxima superior a 2 anos." },
      { "letra": "B", "texto": "Mínimo de 4 pessoas, estruturadas com divisão de tarefas, visando praticar infrações penais com penas máximas superiores a 4 anos ou de caráter transnacional." },
      { "letra": "C", "texto": "Mínimo de 5 pessoas, com hierarquia militar e uso de violência, praticando crimes contra a administração pública." },
      { "letra": "D", "texto": "Mínimo de 2 pessoas, especializadas, com estrutura permanente e identidade de objetivos criminosos." }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, §1º da Lei 12.850/13",
    "justificativa": "O art. 1º, §1º define organização criminosa como a associação de 4 OU MAIS PESSOAS, estruturalmente ordenada e caracterizada pela divisão de tarefas (ainda que informalmente), com objetivo de obter vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam SUPERIORES A 4 ANOS ou que sejam de caráter TRANSNACIONAL. Difere da associação criminosa (art. 288 CP — mínimo 3 pessoas, qualquer crime) e da associação para o tráfico (art. 35 Lei Drogas — mínimo 2 pessoas)."
  },
  {
    "id": "leg_extra_18",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Colaboração Premiada",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre a colaboração premiada (delação premiada) na Lei 12.850/13, é INCORRETO afirmar que:",
    "alternativas": [
      { "letra": "A", "texto": "O acordo de colaboração premiada deve ser homologado pelo juiz, que verifica sua legalidade, voluntariedade e regularidade." },
      { "letra": "B", "texto": "A sentença condenatória não vincula o juiz aos termos do acordo de colaboração, podendo ele aplicar pena mais grave do que a prevista no acordo." },
      { "letra": "C", "texto": "O juiz é competente para homologar o acordo, mas não pode participar das negociações entre o MP e o colaborador." },
      { "letra": "D", "texto": "Nenhum acusado poderá ser condenado com fundamento apenas nas declarações do colaborador, salvo se confirmadas por outros meios de prova." }
    ],
    "gabarito": "B",
    "artigo": "Art. 4º, §11 e §10 da Lei 12.850/13",
    "justificativa": "O art. 4º, §11 da Lei 12.850/13 estabelece que o juiz NÃO PODE APLICAR PENA SUPERIOR ao máximo previsto no acordo de colaboração premiada, caso a colaboração seja efetiva e o colaborador cumpra suas obrigações. Portanto, a alternativa B está incorreta. O juiz apenas verifica a legalidade do acordo (não participa das negociações — art. 4º, §6º). A alternativa D reflete o art. 4º, §16 (nenhuma sentença condenatória baseada exclusivamente na colaboração)."
  },
  {
    "id": "leg_extra_19",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Infiltração de Agentes",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre a infiltração de agentes de polícia em organizações criminosas, prevista no art. 10 da Lei 12.850/13:",
    "alternativas": [
      { "letra": "A", "texto": "A infiltração é autorizada pelo delegado de polícia, com prazo máximo de 3 meses, renovável por igual período." },
      { "letra": "B", "texto": "A infiltração é autorizada pelo juiz, a requerimento do MP ou do delegado, com prazo de até 6 meses, renovável por iguais períodos quando comprovada a necessidade." },
      { "letra": "C", "texto": "A infiltração não necessita de autorização judicial prévia em casos de flagrante de organização criminosa." },
      { "letra": "D", "texto": "A infiltração só é admitida em organizações criminosas com atuação transnacional, mediante autorização do Ministro da Justiça." }
    ],
    "gabarito": "B",
    "artigo": "Art. 10 da Lei 12.850/13",
    "justificativa": "O art. 10 da Lei 12.850/13 prevê que a infiltração de agentes de polícia em tarefas de investigação é autorizada PELO JUIZ (não pelo delegado), a requerimento do MP ou do delegado de polícia. O prazo é de até 6 MESES, sem prejuízo de eventuais prorrogações, por iguais períodos, quando comprovada a necessidade. A autorização judicial PRÉVIA é sempre necessária. O delegado pode representar pela infiltração, mas quem autoriza é o juiz."
  },
  {
    "id": "leg_extra_20",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Ação Controlada",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A ação controlada, prevista no art. 8º da Lei 12.850/13, consiste em:",
    "alternativas": [
      { "letra": "A", "texto": "A atuação disfarçada de agente policial que finge integrar a organização criminosa para obter informações." },
      { "letra": "B", "texto": "O retardamento da intervenção policial ou administrativa para identificar e responsabilizar o maior número possível de integrantes da organização criminosa, mediante autorização judicial prévia." },
      { "letra": "C", "texto": "A escuta ambiental realizada sem o consentimento dos investigados, em locais onde a organização criminosa se reúne." },
      { "letra": "D", "texto": "O controle judicial sobre as atividades do delegado durante a investigação de organizações criminosas." }
    ],
    "gabarito": "B",
    "artigo": "Art. 8º da Lei 12.850/13",
    "justificativa": "A ação controlada (art. 8º) consiste em retardar a intervenção policial ou administrativa relativa à ação praticada por organização criminosa ou associação, desde que mantida sob observação e acompanhamento, para que a medida legal se concretize no momento mais eficaz à formação de provas. Exige COMUNICAÇÃO prévia ao juiz (e não mera autorização — após a Lei 13.964/2019, o delegado comunica ao juiz, que pode estabelecer limites). A alternativa A descreve infiltração de agentes; C descreve captação ambiental."
  },
  {
    "id": "leg_extra_21",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Crime de Integrar ORCRIM",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Qual é a pena prevista para o crime de promover, constituir, financiar ou integrar organização criminosa (art. 2º da Lei 12.850/13)?",
    "alternativas": [
      { "letra": "A", "texto": "Reclusão de 5 a 12 anos e multa." },
      { "letra": "B", "texto": "Reclusão de 3 a 8 anos e multa." },
      { "letra": "C", "texto": "Detenção de 2 a 6 anos e multa." },
      { "letra": "D", "texto": "Reclusão de 4 a 10 anos, sem previsão de multa." }
    ],
    "gabarito": "B",
    "artigo": "Art. 2º da Lei 12.850/13",
    "justificativa": "O art. 2º da Lei 12.850/13 prevê: 'Promover, constituir, financiar ou integrar, pessoalmente ou por interposta pessoa, organização criminosa: Pena — reclusão, de 3 (três) a 8 (oito) anos, e multa, sem prejuízo das penas correspondentes às demais infrações penais praticadas.' A pena aumenta de 1/6 a 2/3 se houver emprego de arma de fogo, participação de criança ou adolescente, envolvimento de agente público, ou se a conduta visar obstruir a investigação."
  },
  {
    "id": "leg_extra_22",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Benefícios da Colaboração",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Os benefícios que podem ser concedidos ao colaborador na colaboração premiada (art. 4º da Lei 12.850/13) incluem, EXCETO:",
    "alternativas": [
      { "letra": "A", "texto": "O perdão judicial." },
      { "letra": "B", "texto": "A redução da pena em até 2/3." },
      { "letra": "C", "texto": "A substituição da pena privativa de liberdade por restritiva de direitos." },
      { "letra": "D", "texto": "A extinção automática de todos os processos em curso contra o colaborador." }
    ],
    "gabarito": "D",
    "artigo": "Art. 4º, I a III da Lei 12.850/13",
    "justificativa": "O art. 4º prevê os seguintes benefícios: I — redução da pena privativa de liberdade em até 2/3; II — substituição por restritivas de direitos; III — perdão judicial. NÃO há extinção automática de todos os processos — os benefícios dependem da efetividade da colaboração e de decisão judicial motivada. Os processos continuam, mas o juiz pode aplicar os benefícios na sentença ou a qualquer momento, se a colaboração for efetiva."
  },
  {
    "id": "leg_extra_23",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Rescisão do Acordo",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "O acordo de colaboração premiada poderá ser rescindido nas seguintes hipóteses, conforme a Lei 12.850/13:",
    "alternativas": [
      { "letra": "A", "texto": "Apenas quando o colaborador mentir sobre os fatos relatados no acordo." },
      { "letra": "B", "texto": "Quando o colaborador der causa à rescisão ao não cumprir as obrigações, praticar novo crime, ou o MP descumprir os termos do acordo sem justa causa." },
      { "letra": "C", "texto": "Apenas a pedido do colaborador, que pode desistir do acordo a qualquer momento sem consequências." },
      { "letra": "D", "texto": "Somente pelo juiz competente, após decisão do Plenário do tribunal competente." }
    ],
    "gabarito": "B",
    "artigo": "Art. 4º, §§7º e 14 da Lei 12.850/13",
    "justificativa": "O acordo pode ser rescindido quando o colaborador não cumprir as obrigações assumidas (ex: não comparecer para depor, recusar-se a colaborar com a investigação) ou quando praticar novo crime após o acordo. Também pode o colaborador retratar-se da proposta, caso em que as provas por ele produzidas não poderão ser utilizadas exclusivamente em seu desfavor (art. 4º, §10). O MP também pode ser parte interessada na rescisão quando o colaborador descumprir obrigações."
  },

  // =========================================
  // LEI 9.455/97 — TORTURA (7 questões)
  // =========================================
  {
    "id": "leg_extra_24",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Tipos de Tortura",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme o art. 1º da Lei 9.455/97, constitui crime de tortura-coerção a conduta de:",
    "alternativas": [
      { "letra": "A", "texto": "Submeter à intensa dor ou sofrimento físico quem se encontra sob guarda, poder ou autoridade, para fins de castigo pessoal." },
      { "letra": "B", "texto": "Constranger alguém com emprego de violência ou grave ameaça, causando sofrimento físico ou mental, com a finalidade de obter informação, declaração ou confissão." },
      { "letra": "C", "texto": "Omitir-se, quando tinha o dever de evitar a conduta de tortura, respondendo com pena de detenção." },
      { "letra": "D", "texto": "Praticar ato de tortura fora do território nacional contra brasileiro." }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, I da Lei 9.455/97",
    "justificativa": "A tortura-coerção está no art. 1º, I: constranger alguém com emprego de violência ou grave ameaça, causando sofrimento físico ou mental. Finalidades: obter informação/confissão; provocar ação/omissão criminosa; aplicar castigo pessoal; medida de caráter preventivo; discriminação racial ou religiosa. Pena: 2 a 8 anos de reclusão. A alternativa A descreve a tortura-custódia (art. 1º, II). A alternativa C descreve a tortura por omissão (art. 1º, §2º). A D é questão de extraterritorialidade."
  },
  {
    "id": "leg_extra_25",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Tortura por Omissão",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O agente penitenciário que, tendo o dever de evitar a tortura, presencia um colega praticá-la contra um detento e nada faz para impedir, incorre em crime de:",
    "alternativas": [
      { "letra": "A", "texto": "Tortura comissiva, na qualidade de coautor, com a mesma pena do torturador." },
      { "letra": "B", "texto": "Prevaricação (art. 319 do CP), por deixar de praticar ato de ofício." },
      { "letra": "C", "texto": "Tortura por omissão (art. 1º, §2º da Lei 9.455/97), com pena de detenção de 1 a 4 anos." },
      { "letra": "D", "texto": "Cumplicidade no crime de tortura, com pena reduzida de 1/6 a 1/3 da pena do autor." }
    ],
    "gabarito": "C",
    "artigo": "Art. 1º, §2º da Lei 9.455/97",
    "justificativa": "O art. 1º, §2º da Lei de Tortura cria o delito de TORTURA POR OMISSÃO: 'Aquele que se omite em face dessas condutas, quando tinha o dever de evitá-las ou apurá-las, incorre na pena de detenção de 1 (um) a 4 (quatro) anos.' Note que a pena é de DETENÇÃO (não reclusão) e é bem menor que a da tortura comissiva. A prevaricação (alternativa B) exige elemento subjetivo específico (satisfação de interesse pessoal), não se aplicando aqui. Não é coautoria pois a conduta é omissiva, crime autônomo."
  },
  {
    "id": "leg_extra_26",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Resultado Morte",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Quando a tortura resulta em morte da vítima, qual a pena prevista na Lei 9.455/97?",
    "alternativas": [
      { "letra": "A", "texto": "Reclusão de 4 a 10 anos." },
      { "letra": "B", "texto": "Reclusão de 8 a 16 anos." },
      { "letra": "C", "texto": "Reclusão de 12 a 30 anos, por ser crime hediondo com resultado morte." },
      { "letra": "D", "texto": "Reclusão de 6 a 12 anos, mais 1/3 pelo resultado morte qualificador." }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, §3º da Lei 9.455/97",
    "justificativa": "O art. 1º, §3º da Lei 9.455/97 prevê: 'Se resulta lesão corporal de natureza grave ou gravíssima, a pena é de reclusão de 4 (quatro) a 10 (dez) anos; se resulta morte, a reclusão é de 8 (oito) a 16 (dezesseis) anos.' Lembrando que a tortura é crime HEDIONDO EQUIPARADO, portanto a progressão de regime segue os percentuais agravados. A pena de 8 a 16 anos é a qualificada pelo resultado morte, não pelo crime de homicídio doloso (que seria concurso formal)."
  },
  {
    "id": "leg_extra_27",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Efeitos da Condenação do Agente Público",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O agente público condenado pelo crime de tortura sofre, além da pena privativa de liberdade, efeito específico previsto na Lei 9.455/97. Assinale a alternativa correta sobre esse efeito:",
    "alternativas": [
      { "letra": "A", "texto": "A perda do cargo é automática com o trânsito em julgado da condenação, independentemente de ser declarada na sentença." },
      { "letra": "B", "texto": "O condenado por tortura perde o cargo ou função pública e fica interditado pelo dobro do prazo da pena aplicada, sendo esse efeito automático e obrigatório da condenação." },
      { "letra": "C", "texto": "A perda do cargo deve ser declarada motivadamente na sentença e é seguida de interdição do exercício por prazo igual à pena cumprida." },
      { "letra": "D", "texto": "A perda do cargo não é prevista em lei, apenas sendo possível em processo administrativo disciplinar posterior à condenação criminal." }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, §5º da Lei 9.455/97",
    "justificativa": "O art. 1º, §5º da Lei 9.455/97 é expresso: 'A condenação acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada.' ATENÇÃO: A redação da lei prevê que a perda é efeito da condenação. Contudo, a doutrina e a jurisprudência discutem se é automático ou depende de declaração judicial. O STJ tem entendido que é efeito automático da condenação por tortura (diferente dos efeitos do art. 92 CP, que não são automáticos). Cuidado com questões de bancas que podem adotar posição diferente."
  },
  {
    "id": "leg_extra_28",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Extraterritorialidade",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "A Lei de Tortura (Lei 9.455/97) aplica-se a crimes cometidos fora do território nacional? Se sim, em quais hipóteses?",
    "alternativas": [
      { "letra": "A", "texto": "Não se aplica extraterritorialmente; a Lei de Tortura só se aplica a crimes praticados em território nacional." },
      { "letra": "B", "texto": "Aplica-se quando praticada contra vítima brasileira por agente de qualquer nacionalidade, em qualquer parte do mundo." },
      { "letra": "C", "texto": "Aplica-se quando o crime é cometido fora do território nacional, mesmo que o agente não seja nacional e a vítima seja estrangeira, com base no princípio da universalidade." },
      { "letra": "D", "texto": "Aplica-se apenas se o agente torturador for de nacionalidade brasileira ou tenha atuado a mando do Estado brasileiro." }
    ],
    "gabarito": "C",
    "artigo": "Art. 2º da Lei 9.455/97",
    "justificativa": "O art. 2º da Lei 9.455/97 prevê a extraterritorialidade: 'O disposto nesta Lei aplica-se ainda quando o crime não tenha sido cometido em território nacional, sendo a vítima brasileira ou encontrando-se o agente em local sob jurisdição brasileira.' Além disso, o crime de tortura admite a aplicação do PRINCÍPIO DA UNIVERSALIDADE (art. 7º, II, 'a' do CP), pela qual qualquer Estado pode processar torturadores independente da nacionalidade do agente e da vítima, por ser crime internacional."
  },
  {
    "id": "leg_extra_29",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Causas de Aumento",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "A pena do crime de tortura é AUMENTADA de 1/6 a 1/3 quando a vítima é:",
    "alternativas": [
      { "letra": "A", "texto": "Servidor público ou pessoa de notória importância na comunidade." },
      { "letra": "B", "texto": "Criança, gestante, portador de deficiência, adolescente ou maior de 60 anos." },
      { "letra": "C", "texto": "Membro de organização criminosa ou reincidente em crime grave." },
      { "letra": "D", "texto": "Preso provisório ou condenado em regime fechado." }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, §4º, II da Lei 9.455/97",
    "justificativa": "O art. 1º, §4º prevê as causas de aumento de 1/6 a 1/3: I — quando o crime é cometido por AGENTE PÚBLICO; II — quando a vítima é criança, gestante, portador de deficiência, adolescente ou pessoa maior de 60 anos; III — quando o crime é praticado mediante sequestro. A condição de servidor público é causa de aumento pelo sujeito ATIVO (agente), não pela condição da vítima. Portanto, a alternativa B está correta quanto às condições da vítima que qualificam o aumento."
  },
  {
    "id": "leg_extra_30",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Regime de Cumprimento",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "O crime de tortura, por ser equiparado a crime hediondo, deve ser cumprido inicialmente:",
    "alternativas": [
      { "letra": "A", "texto": "Obrigatoriamente em regime fechado, sem possibilidade de regime diferente, independentemente das circunstâncias." },
      { "letra": "B", "texto": "Em regime inicialmente fechado, conforme a Lei 8.072/90, mas o STF declarou inconstitucional a obrigatoriedade absoluta, podendo o juiz fixar regime diverso motivadamente." },
      { "letra": "C", "texto": "Obrigatoriamente em regime semiaberto, com monitoração eletrônica obrigatória." },
      { "letra": "D", "texto": "Em regime aberto, pois a tortura, apesar de hedionda, não é punida com reclusão superior a 4 anos na modalidade simples." }
    ],
    "gabarito": "B",
    "artigo": "Art. 2º, §1º da Lei 8.072/90; HC 111.840 — STF",
    "justificativa": "A tortura, por ser crime hediondo equiparado, tem o regime inicial previsto como fechado pela Lei 8.072/90, art. 2º, §1º. Entretanto, o STF no HC 111.840 declarou inconstitucional a OBRIGATORIEDADE ABSOLUTA do regime fechado para todos os hediondos/equiparados, por violar o princípio da individualização da pena. Portanto, o juiz PODE, fundamentadamente, fixar regime inicial diferente do fechado, observando as circunstâncias do caso concreto e o art. 33 do CP."
  }
  ,
  {
    "id": "leg_extra_31",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Aplicação da Lei Anticrime",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Com a Lei 13.964/2019 (Pacote Anticrime), qual alteração trouxe maior impacto ao tratamento penal dos crimes hediondos?",
    "alternativas": [
      { "letra": "A", "texto": "A criação de novos crimes hediondos específicos para tráfico de armas." },
      { "letra": "B", "texto": "A inclusão do furto qualificado por explosivo como crime hediondo." },
      { "letra": "C", "texto": "A elevação da pena mínima para todos os crimes hediondos para 8 anos." },
      { "letra": "D", "texto": "A possibilidade de progressão de regime a partir de 25% da pena." }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, II-B da Lei 8.072/90 (alterado pela Lei 13.964/2019)",
    "justificativa": "A Lei Anticrime inseriu o furto qualificado pelo emprego de explosivo (art. 155, §4º-A CP) como crime hediondo, ampliando a lista tradicional."
  },
  {
    "id": "leg_extra_32",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Quantidade de droga para consumo pessoal",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Qual a quantidade máxima de substância entorpecente que, em princípio, pode ser considerada para uso pessoal, segundo jurisprudência do STJ?",
    "alternativas": [
      { "letra": "A", "texto": "Até 10 gramas para maconha e 5 gramas para cocaína." },
      { "letra": "B", "texto": "Até 25 gramas para maconha e 10 gramas para cocaína." },
      { "letra": "C", "texto": "Não há limite legal; a decisão depende exclusivamente da análise do juiz." },
      { "letra": "D", "texto": "Até 30 gramas para qualquer droga, independente da espécie." }
    ],
    "gabarito": "C",
    "artigo": "Jurisprudência STJ, Tema 951",
    "justificativa": "A Lei de Drogas não fixa quantidade mínima; o juiz considera circunstâncias, natureza e quantidade, porém a jurisprudência indica que a dose para consumo varia conforme a droga e a prática."
  },
  {
    "id": "leg_extra_33",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Reincidência específica",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Para o condenado reincidente específico por crime hediondo com resultado morte, qual o percentual de progressão de regime previsto na LEP?",
    "alternativas": [
      { "letra": "A", "texto": "70% da pena." },
      { "letra": "B", "texto": "60% da pena." },
      { "letra": "C", "texto": "55% da pena." },
      { "letra": "D", "texto": "50% da pena." }
    ],
    "gabarito": "A",
    "artigo": "Art. 112, VI, 'b' da LEP (Lei 13.964/2019)",
    "justificativa": "O inciso 'b' estabelece 70% da pena para reincidente específico em crime hediondo com resultado morte."
  },
  {
    "id": "leg_extra_34",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Tráfico privilegiado e reincidência",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "O tráfico privilegiado pode ser reconhecido quando a quantidade de droga apreendida for:",
    "alternativas": [
      { "letra": "A", "texto": "Igual ou inferior a 0,5 grama para cocaína." },
      { "letra": "B", "texto": "Inferior a 20 gramas para maconha, considerando circunstâncias favoráveis ao agente." },
      { "letra": "C", "texto": "Qualquer quantidade, desde que o agente seja primário e de bons antecedentes." },
      { "letra": "D", "texto": "Maior que 100 gramas, pois a lei prevê redução de pena apenas para tráfico de grande escala." }
    ],
    "gabarito": "B",
    "artigo": "Art. 33, §4º da Lei 11.343/06",
    "justificativa": "O artigo define tráfico privilegiado quando a quantidade, a natureza da substância e as circunstâncias indicam consumo pessoal, sem necessidade de grande escala."
  },
  {
    "id": "leg_extra_35",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Crime de Latrocínio",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "A Lei 8.072/90 classifica o latrocínio como crime hediondo. Qual o critério essencial para sua configuração?",
    "alternativas": [
      { "letra": "A", "texto": "A prática de roubo seguida de morte da vítima, independentemente da subtração do bem." },
      { "letra": "B", "texto": "A subtração do bem antes da morte da vítima." },
      { "letra": "C", "texto": "A tentativa de roubo que resulte em lesão corporal grave." },
      { "letra": "D", "texto": "A presença de arma de fogo no crime." }
    ],
    "gabarito": "A",
    "artigo": "Art. 157, §3º, II do CP",
    "justificativa": "A definição jurídica de latrocínio pressupõe a morte da vítima no contexto do roubo, mesmo que o bem não tenha sido efetivamente subtraído."
  },
  {
    "id": "leg_extra_36",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Tortura contra pessoa vulnerável",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Qual das circunstâncias agrava a pena de tortura quando a vítima é pessoa com deficiência?",
    "alternativas": [
      { "letra": "A", "texto": "A pena é aumentada de 1/6 a 1/3." },
      { "letra": "B", "texto": "A pena mínima é dobrada, mas não há aumento percentual." },
      { "letra": "C", "texto": "A pena permanece a mesma; a vulnerabilidade não gera aumento." },
      { "letra": "D", "texto": "Apenas a multa é aumentada, a reclusão permanece igual." }
    ],
    "gabarito": "A",
    "artigo": "Art. 1º, §4º, II da Lei 9.455/97",
    "justificativa": "O §4º da Lei da Tortura prevê aumento de pena quando a vítima é criança, gestante, portador de deficiência, adolescente ou maior de 60 anos."
  },
  {
    "id": "leg_extra_37",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Extinção de punibilidade por morte do agente",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Em que hipótese a ação penal contra organização criminosa pode ser extinta pela morte do agente principal?",
    "alternativas": [
      { "letra": "A", "texto": "Quando o agente era o único integrante da organização." },
      { "letra": "B", "texto": "Quando a morte ocorre antes da instauração do inquérito policial." },
      { "letra": "C", "texto": "Quando a morte do agente impede a identificação de demais integrantes e não há provas suficientes contra eles." },
      { "letra": "D", "texto": "A morte do agente nunca extingue a ação, pois a organização continua existindo." }
    ],
    "gabarito": "C",
    "artigo": "Art. 5º, I da Lei 12.850/13",
    "justificativa": "A lei permite extinção quando a morte do agente impede a continuação da persecução por falta de elementos."
  },
  {
    "id": "leg_extra_38",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Redução de pena por confissão",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "A confissão do réu em crime hediondo pode gerar redução de pena? Se sim, qual a redução máxima prevista?",
    "alternativas": [
      { "letra": "A", "texto": "Sim, até 1/3 da pena." },
      { "letra": "B", "texto": "Sim, até 1/6 da pena." },
      { "letra": "C", "texto": "Não, a confissão não traz redução em crimes hediondos." },
      { "letra": "D", "texto": "Sim, até 1/2 da pena, mas apenas se o réu for primário." }
    ],
    "gabarito": "B",
    "artigo": "Art. 65, §2º do Código Penal",
    "justificativa": "O Código Penal permite redução de até 1/6 da pena por confissão, inclusive para crimes hediondos, salvo se houver agravantes que impeçam."
  },
  {
    "id": "leg_extra_39",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Ação penal do crime de tráfico",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Qual o tipo de ação penal que rege o crime de tráfico de drogas?",
    "alternativas": [
      { "letra": "A", "texto": "Ação penal pública incondicionada." },
      { "letra": "B", "texto": "Ação penal pública condicionada à representação do Ministério Público." },
      { "letra": "C", "texto": "Ação penal privada." },
      { "letra": "D", "texto": "Ação penal pública condicionada à representação da autoridade policial." }
    ],
    "gabarito": "A",
    "artigo": "Art. 33 da Lei 11.343/06",
    "justificativa": "O tráfico de drogas é sujeito à ação penal pública incondicionada, podendo o MP agir independentemente de representação."
  },
  {
    "id": "leg_extra_40",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Colaboração premiada e perdão judicial",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "Ao firmar acordo de colaboração premiada, o colaborador pode receber perdão judicial?",
    "alternativas": [
      { "letra": "A", "texto": "Sim, desde que o juiz homologue o acordo e verifique a efetividade da colaboração." },
      { "letra": "B", "texto": "Não, o perdão judicial não é previsto como benefício da colaboração premiada." },
      { "letra": "C", "texto": "Sim, mas apenas se o colaborador for primário e não reincidente." },
      { "letra": "D", "texto": "Sim, mas somente nas hipóteses de crimes de menor potencial ofensivo." }
    ],
    "gabarito": "A",
    "artigo": "Art. 4º, I da Lei 12.850/13",
    "justificativa": "A lei contempla o perdão judicial como um dos benefícios possíveis ao colaborador, mediante homologação judicial."
  },
  {
    "id": "leg_extra_41",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Tratamento de reincidente em tortura",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Reincidente em crime de tortura tem aumento de pena previsto no artigo 1º, §4º da lei. Qual o percentual máximo de aumento?",
    "alternativas": [
      { "letra": "A", "texto": "1/3 da pena." },
      { "letra": "B", "texto": "1/2 da pena." },
      { "letra": "C", "texto": "2/3 da pena." },
      { "letra": "D", "texto": "Não há aumento para reincidência." }
    ],
    "gabarito": "A",
    "artigo": "Art. 1º, §4º, I da Lei 9.455/97",
    "justificativa": "O aumento para agente público (que inclui torturador como agente) é de 1/6 a 1/3; para reincidência, a lei não estabelece aumento específico além do previsto para agente público."
  },
  {
    "id": "leg_extra_42",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Indenização por danos morais em crime hediondo",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Em condenação por crime hediondo, a vítima tem direito à indenização por danos morais?",
    "alternativas": [
      { "letra": "A", "texto": "Sim, independentemente da condenação criminal, pois a indenização é civil" },
      { "letra": "B", "texto": "Não, a lei de hediondos exclui a reparação civil." },
      { "letra": "C", "texto": "Somente se houver pedido no processo criminal." },
      { "letra": "D", "texto": "Somente se a vítima for pessoa física, não pessoa jurídica." }
    ],
    "gabarito": "A",
    "artigo": "Art. 5º, §2º da Lei 8.072/90",
    "justificativa": "A legislação penal não impede a ação civil de indenização por danos morais, que pode ser pleiteada separadamente."
  },
  {
    "id": "leg_extra_43",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Substituição da pena por medida socioeducativa",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Para usuários de drogas com infração penal de menor potencial ofensivo, qual medida pode substituir a pena de prisão?",
    "alternativas": [
      { "letra": "A", "texto": "Prestação de serviço à comunidade e medida educativa de comparecimento a programa" },
      { "letra": "B", "texto": "Liberdade provisória com fiança" },
      { "letra": "C", "texto": "Internação em centro de recuperação de dependentes químicos" },
      { "letra": "D", "texto": "Advertência " }
    ],
    "gabarito": "A",
    "artigo": "Art. 33, §2º da Lei 11.343/06",
    "justificativa": "A lei permite substituição da pena privativa de liberdade por prestação de serviços e comparecimento a programa de tratamento para usuários."
  },
  {
    "id": "leg_extra_44",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Responsabilidade objetiva da empresa",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "Conforme a Lei de Organizações Criminosas, a empresa que não adota programa de compliance pode ser responsabilizada objetivamente por:",
    "alternativas": [
      { "letra": "A", "texto": "Corrupção ativa nos atos de gestão." },
      { "letra": "B", "texto": "Participação em organização criminosa, se houver omissão de prevenção." },
      { "letra": "C", "texto": "Só pode ser responsabilizada se houver condenação de seus diretores." },
      { "letra": "D", "texto": "Não há responsabilidade objetiva prevista na lei." }
    ],
    "gabarito": "B",
    "artigo": "Art. 3º da Lei 12.850/13",
    "justificativa": "A lei impõe responsabilidade objetiva às pessoas jurídicas pela prática de atos de organização criminosa quando não houver programa de compliance."
  },
  {
    "id": "leg_extra_45",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Extensão da aplicação da Lei de Hediondos",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Qual das seguintes condutas, embora não prevista expressamente na lista da Lei 8.072/90, foi equiparada a crime hediondo por jurisprudência do STF?",
    "alternativas": [
      { "letra": "A", "texto": "Genocídio" },
      { "letra": "B", "texto": "Estupro de vulnerável" },
      { "letra": "C", "texto": "Latrocínio" },
      { "letra": "D", "texto": "Tráfico de drogas com emprego de explosivo" }
    ],
    "gabarito": "C",
    "artigo": "Súmula 610 do STF",
    "justificativa": "O latrocínio, como roubo seguido de morte, está expressamente incluído como crime hediondo pela jurisprudência."
  },
  {
    "id": "leg_extra_46",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Medidas protetivas da vítima",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Qual medida pode ser concedida à vítima de tortura para garantir sua segurança?",
    "alternativas": [
      { "letra": "A", "texto": "Afastamento do agressor do lar, mediante medida protetiva." },
      { "letra": "B", "texto": "Concessão de indenização em dobro." },
      { "letra": "C", "texto": "Imposição de prisão preventiva ao agressor antes de sentença." },
      { "letra": "D", "texto": "Nenhuma medida especial; a lei trata apenas da punição do torturador." }
    ],
    "gabarito": "A",
    "artigo": "Art. 5º da Lei Maria da Penha (aplicável por analogia)",
    "justificativa": "Embora a Lei da Tortura não trate de medidas protetivas, o ordenamento permite aplicação de medidas protetivas previstas em outras leis, como a Maria da Penha, para proteção da vítima."
  },
  {
    "id": "leg_extra_47",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Penas de restritiva de direitos",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Qual das seguintes penas restritivas de direitos pode ser aplicada como benefício na colaboração premiada?",
    "alternativas": [
      { "letra": "A", "texto": "Interdição parcial de direitos políticos por 8 anos." },
      { "letra": "B", "texto": "Prestação de serviço à comunidade ou a entidades públicas." },
      { "letra": "C", "texto": "Proibição de exercer cargo ou função pública por 5 anos." },
      { "letra": "D", "texto": "Suspensão de carteira de habilitação por 2 anos." }
    ],
    "gabarito": "B",
    "artigo": "Art. 4º, II da Lei 12.850/13",
    "justificativa": "A lei prevê a substituição da pena privativa de liberdade por prestação de serviços à comunidade como benefício."
  },
  {
    "id": "leg_extra_48",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Livramento condicional para primário",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Para conceder livramento condicional a primário condenado por crime hediondo, é necessário que ele cumpra, no mínimo, qual fração da pena?",
    "alternativas": [
      { "letra": "A", "texto": "1/3 da pena." },
      { "letra": "B", "texto": "1/2 da pena." },
      { "letra": "C", "texto": "2/3 da pena." },
      { "letra": "D", "texto": "3/4 da pena." }
    ],
    "gabarito": "C",
    "artigo": "Art. 83, V da Lei 8.072/90",
    "justificativa": "O artigo estabelece 2/3 da pena para primário em crimes hediondos."
  },
  {
    "id": "leg_extra_49",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Medidas preventivas de urgência",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Qual medida preventiva pode ser adotada pelo juiz em investigação de tráfico de drogas?",
    "alternativas": [
      { "letra": "A", "texto": "Apreensão de bens móveis e imóveis do investigado." },
      { "letra": "B", "texto": "Detenção preventiva por até 30 dias sem necessidade de prova contundente." },
      { "letra": "C", "texto": "Proibição de frequência a determinados estabelecimentos ou de contato com certas pessoas." },
      { "letra": "D", "texto": "Suspensão da licença de condução de veículos."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 4º, §2º da Lei 11.343/06",
    "justificativa": "A lei permite medidas preventivas de restrição de locais e contatos nos processos de investigação."
  },
  {
    "id": "leg_extra_50",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Aplicação da Lei ao menor de 21 anos",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Um menor de 18 anos comete um crime hediondo. Qual o tratamento penal previsto?",
    "alternativas": [
      { "letra": "A", "texto": "Ele será julgado como adulto, aplicando-se a Lei dos Hediondos integralmente." },
      { "letra": "B", "texto": "Aplica-se o Estatuto da Criança e do Adolescente, com possibilidade de medida socioeducativa." },
      { "letra": "C", "texto": "Ele será apenas advertido e não responde criminalmente." },
      { "letra": "D", "texto": "A pena será reduzida automaticamente em 50% por sua condição de menor." }
    ],
    "gabarito": "B",
    "artigo": "Art. 121, §1º do ECA",
    "justificativa": "O ECA determina tratamento diferenciado, com medidas socioeducativas, mesmo para crimes considerados hediondos."
  },
  {
    "id": "leg_extra_51",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Agente infiltrado como testemunha",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "Um agente infiltrado em organização criminosa pode prestar depoimento como testemunha? Em que condição?",
    "alternativas": [
      { "letra": "A", "texto": "Sim, desde que tenha firmado contrato de colaboração premiada." },
      { "letra": "B", "texto": "Não, pois sua presença viola o princípio da vedação ao anonimato." },
      { "letra": "C", "texto": "Sim, porém somente após a conclusão da operação e com autorização judicial." },
      { "letra": "D", "texto": "Só se o agente renunciar ao sigilo da fonte e aceitar o risco pessoal." }
    ],
    "gabarito": "C",
    "artigo": "Art. 10, §3º da Lei 12.850/13",
    "justificativa": "A lei permite que o agente colabore como testemunha após autorização judicial e fim da operação."
  },
  {
    "id": "leg_extra_52",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Crime de tortura em ambiente de prisão",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A tortura praticada por agente penitenciário contra preso se enquadra no artigo 1º da Lei 9.455/97. Qual a consequência administrativa adicional prevista?",
    "alternativas": [
      { "letra": "A", "texto": "A perda do cargo e a interdição pelo dobro do prazo da pena criminal." },
      { "letra": "B", "texto": "Apenas a pena criminal, sem efeitos administrativos." },
      { "letra": "C", "texto": "A suspensão do cargo por 4 anos, independentemente da pena." },
      { "letra": "D", "texto": "A imposição de multa administrativa ao órgão penitenciário." }
    ],
    "gabarito": "A",
    "artigo": "Art. 1º, §5º da Lei 9.455/97",
    "justificativa": "Além da pena criminal, a lei prevê perda de cargo e interdição por dobro da pena para agente público."
  },
  {
    "id": "leg_extra_53",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Redução de pena por circunstâncias atenuantes",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Quais circunstâncias atenuantes podem ser consideradas no cálculo da pena para crimes hediondos?",
    "alternativas": [
      { "letra": "A", "texto": "Confissão espontânea e bons antecedentes." },
      { "letra": "B", "texto": "Motivo de relevante valor social ou moral e menoridade do agente." },
      { "letra": "C", "texto": "Arrependimento posterior à prática e reparação do dano." },
      { "letra": "D", "texto": "Todos os itens acima, desde que comprovados."
      }
    ],
    "gabarito": "D",
    "artigo": "Art. 65, §§ 2º e 3º do Código Penal",
    "justificativa": "O Código Penal lista essas atenuantes, aplicáveis inclusive a crimes hediondos."
  },
  {
    "id": "leg_extra_54",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Aposentadoria de agente penitenciário condenado por tráfico",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Um agente penitenciário condenado por tráfico de drogas perde o direito à aposentadoria?",
    "alternativas": [
      { "letra": "A", "texto": "Sim, a condenação determina perda automática da aposentadoria." },
      { "letra": "B", "texto": "Não, a aposentadoria só é perdida se houver condenação por crime hediondo." },
      { "letra": "C", "texto": "Depende se a pena aplicada inclui multa ou restrição de direitos." },
      { "letra": "D", "texto": "A aposentadoria permanece, mas o agente fica impedido de exercer funções."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, §5º da Lei 9.455/97 (aplicável a agente público), porém tráfico não é hediondo.",
    "justificativa": "A perda de cargo e aposentadoria depende da qualificadora hediondo; tráfico não se enquadra."
  },
  {
    "id": "leg_extra_55",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Crime de associação para o tráfico vs. organização criminosa",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "Qual diferença essencial entre associação para o tráfico (art. 35 da Lei 11.343) e organização criminosa (art. 1º da Lei 12.850/13)?",
    "alternativas": [
      { "letra": "A", "texto": "O número mínimo de participantes: 2 para associação, 4 para organização." },
      { "letra": "B", "texto": "A necessidade de estrutura hierárquica só existe na organização criminosa." },
      { "letra": "C", "texto": "A associação permite fins de lucro, enquanto a organização criminosa tem fins políticos." },
      { "letra": "D", "texto": "Não há diferença; são classificações equivalentes."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 35 da Lei 11.343/06 vs Art. 1º, §1º da Lei 12.850/13",
    "justificativa": "A organização criminosa exige divisão de tarefas e estrutura formal, enquanto a associação para o tráfico pode ser informal."
  },
  {
    "id": "leg_extra_56",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Recurso de habeas corpus em crime hediondo",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "É possível impetrar habeas corpus contra prisão preventiva em crime hediondo?",
    "alternativas": [
      { "letra": "A", "texto": "Sim, sempre, pois a prisão preventiva é medida cautelar que pode ser reavaliada." },
      { "letra": "B", "texto": "Não, a lei impede habeas corpus em casos de crimes hediondos." },
      { "letra": "C", "texto": "Só é permitido após sentença condenatória." },
      { "letra": "D", "texto": "Pode ser impetrado, porém exigindo demonstração de ilegalidade grave." }
    ],
    "gabarito": "D",
    "artigo": "HC 111.840/ES (STF) – admite habeas corpus, mas com requisitos mais rigorosos.",
    "justificativa": "O STF autoriza habeas corpus em crimes hediondos, mas a prisão preventiva deve estar bem fundamentada."
  },
  {
    "id": "leg_extra_57",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Excludente de ilicitude por diminuição de quantidade",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "A diminuição da quantidade de droga apreendida pode excluir a ilicitude do fato?",
    "alternativas": [
      { "letra": "A", "texto": "Sim, se a quantidade ficar abaixo do limiar de tráfico." },
      { "letra": "B", "texto": "Não, a posse continua ilícita independentemente da quantidade." },
      { "letra": "C", "texto": "Só se houver autorização judicial para a diminuição." },
      { "letra": "D", "texto": "Depende da finalidade do agente, se é consumo ou tráfico." }
    ],
    "gabarito": "D",
    "artigo": "Art. 28, §2º da Lei 11.343/06",
    "justificativa": "A ilicitude depende da destinação da droga; redução da quantidade pode mudar a classificação para usuário."
  },
  {
    "id": "leg_extra_58",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Reincidência em organização criminosa",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "A reincidência em crime de organização criminosa pode acarretar aumento de pena de até quanto?",
    "alternativas": [
      { "letra": "A", "texto": "1/6 da pena base." },
      { "letra": "B", "texto": "1/3 da pena base." },
      { "letra": "C", "texto": "1/2 da pena base." },
      { "letra": "D", "texto": "Não há aumento específico para reincidência." }
    ],
    "gabarito": "B",
    "artigo": "Art. 2º, §2º da Lei 12.850/13",
    "justificativa": "O inciso prevê aumento de 1/6 a 1/3 para reincidência, sendo 1/3 máximo."
  },
  {
    "id": "leg_extra_59",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Articulação de crime hediondo com uso de arma",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Quando o crime hediondo é praticado com emprego de arma de fogo, há agravante automática?",
    "alternativas": [
      { "letra": "A", "texto": "Sim, aumenta a pena em 1/6 a 1/3." },
      { "letra": "B", "texto": "Não, só há aumento se houver concurso de pessoas." },
      { "letra": "C", "texto": "Sim, mas apenas para homicídio qualificado." },
      { "letra": "D", "texto": "Não há agravante específico para arma de fogo em hediondos." }
    ],
    "gabarito": "A",
    "artigo": "Art. 2º, §2º da Lei 8.072/90",
    "justificativa": "O artigo prevê aumento de pena quando o crime hediondo envolve uso de arma de fogo."
  },
  {
    "id": "leg_extra_60",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Aplicação da lei a atos praticados fora do território brasileiro",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "A Lei de Tortura pode ser aplicada a atos praticados em território estrangeiro contra brasileiro?",
    "alternativas": [
      { "letra": "A", "texto": "Sim, quando a vítima é brasileira, independentemente do local." },
      { "letra": "B", "texto": "Não, a lei só se aplica dentro do território nacional." },
      { "letra": "C", "texto": "Só se o agente for brasileiro." },
      { "letra": "D", "texto": "Só se houver tratado de extradição em vigor." }
    ],
    "gabarito": "A",
    "artigo": "Art. 2º da Lei 9.455/97",
    "justificativa": "A lei tem aplicação extraterritorial quando a vítima é brasileira."
  },
  {
    "id": "leg_extra_61",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Dano ao bem jurídico da ordem pública",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Qual bem jurídico a Lei de Organizações Criminosas protege prioritariamente?",
    "alternativas": [
      { "letra": "A", "texto": "Segurança pública e ordem pública." },
      { "letra": "B", "texto": "Patrimônio da União." },
      { "letra": "C", "texto": "Direitos individuais do cidadão." },
      { "letra": "D", "texto": "Sistema financeiro nacional." }
    ],
    "gabarito": "A",
    "artigo": "Art. 1º da Lei 12.850/13",
    "justificativa": "A lei especifica a proteção da ordem e segurança pública."
  },
  {
    "id": "leg_extra_62",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Regime inicial em casos de primário e baixa pena",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Para um primário condenado por crime hediondo cuja pena inicial seja de 3 anos, o regime inicial pode ser:",
    "alternativas": [
      { "letra": "A", "texto": "Fechado, obrigatório." },
      { "letra": "B", "texto": "Semiaberto, desde que o juiz fundamente a decisão." },
      { "letra": "C", "texto": "Aberto, conforme o art. 33, CP, considerando a menor gravidade." },
      { "letra": "D", "texto": "Qualquer regime, pois a lei não impõe restrição para penas abaixo de 4 anos."
      }
    ],
    "gabarito": "B",
    "artigo": "HC 111.840/ES – STF; Art. 33, CP",
    "justificativa": "O STF permite que o juiz escolha regime adequado, inclusive semiaberto, quando a pena é curta e o réu é primário."
  },
  {
    "id": "leg_extra_63",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Sanção de associação para o tráfico",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Qual a pena mínima para a associação para o tráfico de drogas?",
    "alternativas": [
      { "letra": "A", "texto": "2 anos de reclusão." },
      { "letra": "B", "texto": "3 anos de reclusão." },
      { "letra": "C", "texto": "4 anos de reclusão." },
      { "letra": "D", "texto": "5 anos de reclusão." }
    ],
    "gabarito": "B",
    "artigo": "Art. 35 da Lei 11.343/06",
    "justificativa": "A pena mínima prevista é 3 anos."
  },
  {
    "id": "leg_extra_64",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Responsabilidade do superior hierárquico",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "Um superior hierárquico que ignora informações sobre tortura praticada por subordinado pode ser responsabilizado por:",
    "alternativas": [
      { "letra": "A", "texto": "Complicidade, com pena reduzida." },
      { "letra": "B", "texto": "Concurso de crime por omissão, com pena equivalente à do torturador." },
      { "letra": "C", "texto": "Responsabilidade penal e administrativa por omissão, conforme art. 1º, §2º." },
      { "letra": "D", "texto": "Nenhuma responsabilidade, pois não participou diretamente." }
    ],
    "gabarito": "C",
    "artigo": "Art. 1º, §2º da Lei 9.455/97",
    "justificativa": "O superior que se omite tem responsabilidade penal por omissão quando tinha o dever de impedir."
  },
  {
    "id": "leg_extra_65",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Crime de financiamento à organização criminosa",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Qual a pena prevista para o crime de financiamento a organização criminosa?",
    "alternativas": [
      { "letra": "A", "texto": "Reclusão de 2 a 5 anos e multa." },
      { "letra": "B", "texto": "Reclusão de 4 a 8 anos e multa." },
      { "letra": "C", "texto": "Detenção de 1 a 3 anos e multa." },
      { "letra": "D", "texto": "Reclusão de 3 a 6 anos e multa." }
    ],
    "gabarito": "D",
    "artigo": "Art. 2º, §4º da Lei 12.850/13",
    "justificativa": "A lei prevê reclusão de 3 a 6 anos e multa."
  },
  {
    "id": "leg_extra_66",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Confisco de bens em crime hediondo",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Em caso de condenação por crime hediondo, quais bens podem ser alvo de confisco?",
    "alternativas": [
      { "letra": "A", "texto": "Bens adquiridos com os recursos do crime e bens de valor equivalente." },
      { "letra": "B", "texto": "Somente bens móveis, como veículos." },
      { "letra": "C", "texto": "Apenas imóveis." },
      { "letra": "D", "texto": "Nenhum bem pode ser confiscado, apenas prestação de serviço."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 66, §§ 1º e 2º do Código Penal",
    "justificativa": "O Código Penal admite confisco de bens relacionados ao crime."
  },
  {
    "id": "leg_extra_67",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 — Reincidência em tráfico privilegiado",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "A reincidência em tráfico privilegiado acarreta aumento de pena?",
    "alternativas": [
      { "letra": "A", "texto": "Sim, aumento de 1/6 a 1/3 da pena base." },
      { "letra": "B", "texto": "Não, o tráfico privilegiado não tem aumento por reincidência." },
      { "letra": "C", "texto": "Só se a nova infração for de maior gravidade." },
      { "letra": "D", "texto": "Depende da decisão do juiz, não há previsão legal específica." }
    ],
    "gabarito": "B",
    "artigo": "Art. 33, §4º da Lei 11.343/06",
    "justificativa": "O tráfico privilegiado não possui aumento de pena por reincidência segundo jurisprudência."
  },
  {
    "id": "leg_extra_68",
    "disciplina": "legislacao",
    "topico": "Lei 12.850/13 — Extinção da punibilidade por prescrição",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Qual o prazo prescricional para crime de organização criminosa?",
    "alternativas": [
      { "letra": "A", "texto": "12 anos." },
      { "letra": "B", "texto": "20 anos." },
      { "letra": "C", "texto": "15 anos." },
      { "letra": "D", "texto": "10 anos." }
    ],
    "gabarito": "B",
    "artigo": "Art. 5º, II da Lei 12.850/13",
    "justificativa": "O prazo prescricional para organização criminosa é de 20 anos."
  },
  {
    "id": "leg_extra_69",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 — Qualificação de tortura como crime hediondo",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A Lei de Tortura classifica o crime como hediondo, portanto, quais são as consequências no regime inicial de cumprimento?",
    "alternativas": [
      { "letra": "A", "texto": "Cumprimento obrigatório em regime fechado." },
      { "letra": "B", "texto": "Pode iniciar em regime semiaberto, a critério do juiz." },
      { "letra": "C", "texto": "Só pode cumprir em regime aberto com monitoramento eletrônico." },
      { "letra": "D", "texto": "O regime inicial depende da quantidade de lesões provocadas." }
    ],
    "gabarito": "A",
    "artigo": "Art. 2º, §1º da Lei 8.072/90 (aplicável por analogia)",
    "justificativa": "Por ser crime hediondo, o regime inicial é fechado, salvo exceções constitucionais, mas a regra geral é fechado."
  },
  {
    "id": "leg_extra_70",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 — Art. 1º, inciso V (Latrocínio)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Qual é a pena mínima para latrocínio, crime hediondo?",
    "alternativas": [
      { "letra": "A", "texto": "8 anos de reclusão." },
      { "letra": "B", "texto": "12 anos de reclusão." },
      { "letra": "C", "texto": "6 anos de reclusão." },
      { "letra": "D", "texto": "10 anos de reclusão." }
    ],
    "gabarito": "A",
    "artigo": "Art. 1º, V da Lei 8.072/90",
    "justificativa": "A pena mínima para latrocínio é de 8 anos, conforme a lei."
  }
,
    {
        "id": "leg_extra_71",
        "disciplina": "legislacao",
        "topico": "Lei 11.343/06 — Quantidade mínima para tráfico privilegiado",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual a quantidade máxima de droga que ainda caracteriza tráfico privilegiado segundo a jurisprudência?",
        "alternativas": [
            { "letra": "A", "texto": "Até 2g de cocaína ou 5g de maconha." },
            { "letra": "B", "texto": "Até 10g de cocaína ou 30g de maconha." },
            { "letra": "C", "texto": "Qualquer quantidade, desde que o agente seja primário e sem antecedentes." },
            { "letra": "D", "texto": "Não há quantidade mínima; depende da circunstância." }
        ],
        "gabarito": "C",
        "artigo": "Art. 33, §4º da Lei 11.343/06",
        "justificativa": "O tráfico privilegiado depende de requisitos de culpa, não de quantidade fixa; o agente primário sem antecedentes pode ter a pena reduzida independentemente da quantidade."
    },
    {
        "id": "leg_extra_72",
        "disciplina": "legislacao",
        "topico": "Lei 12.850/13 — Extinção de punibilidade por morte do agente",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Em caso de falecimento do agente antes do trânsito em julgado, qual o efeito sobre o processo de organização criminosa?",
        "alternativas": [
            { "letra": "A", "texto": "Extinção da punibilidade e arquivamento automático." },
            { "letra": "B", "texto": "Preservação do processo para os demais acusados." },
            { "letra": "C", "texto": "Necessidade de nova ação contra sucessores." },
            { "letra": "D", "texto": "Suspensão do processo até decisão da Corte Suprema." }
        ],
        "gabarito": "B",
        "artigo": "Art. 6º da Lei 12.850/13",
        "justificativa": "A morte do agente não extingue a punibilidade dos demais participantes; o processo prossegue."
    },
    {
        "id": "leg_extra_73",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Suspensão de pena por doença grave",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual a consequência de diagnóstico de doença grave para condenado por crime hediondo?",
        "alternativas": [
            { "letra": "A", "texto": "Conversão de pena privativa em restritiva de direitos." },
            { "letra": "B", "texto": "Suspensão da execução da pena por até 2 anos." },
            { "letra": "C", "texto": "Redução de 1/3 da pena, conforme art. 66 do CP." },
            { "letra": "D", "texto": "Nenhum efeito; a pena segue normalmente." }
        ],
        "gabarito": "C",
        "artigo": "Art. 66, §1º do Código Penal",
        "justificativa": "A lei permite redução de pena quando o condenado tem doença grave incapacitante."
    },
    {
        "id": "leg_extra_74",
        "disciplina": "legislacao",
        "topico": "Lei 9.455/97 — Vítima em situação de vulnerabilidade",
        "peso": 2,
        "mostCobrado": true,
        "dificuldade": "medio",
        "enunciado": "A pena é aumentada quando a vítima é pessoa em situação de vulnerabilidade. Qual alternativa descreve corretamente essa vulnerabilidade?",
        "alternativas": [
            { "letra": "A", "texto": "Idoso acima de 70 anos." },
            { "letra": "B", "texto": "Criança, gestante, portador de deficiência, adolescente ou maior de 60 anos." },
            { "letra": "C", "texto": "Pessoa com renda abaixo de 2 salários mínimos." },
            { "letra": "D", "texto": "Qualquer pessoa que não tenha formação superior." }
        ],
        "gabarito": "B",
        "artigo": "Art. 1º, §4º, II da Lei 9.455/97",
        "justificativa": "O §4º estabelece que a condição de vulnerabilidade da vítima (criança, gestante, etc.) aumenta a pena."
    },
    {
        "id": "leg_extra_75",
        "disciplina": "legislacao",
        "topico": "Lei 11.343/06 — Medidas de segurança para usuário",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual medida pode ser imposta ao usuário de droga conforme o art. 28 da Lei 11.343/06?",
        "alternativas": [
            { "letra": "A", "texto": "Internação compulsória em clínica de reabilitação." },
            { "letra": "B", "texto": "Prestação de serviços à comunidade por até 600 horas." },
            { "letra": "C", "texto": "Multa de até 10 salários mínimos." },
            { "letra": "D", "texto": "Detenção de 1 a 4 anos." }
        ],
        "gabarito": "B",
        "artigo": "Art. 28, §3º da Lei 11.343/06",
        "justificativa": "A lei prevê prestação de serviços à comunidade ou medida educativa ao usuário."
    },
    {
        "id": "leg_extra_76",
        "disciplina": "legislacao",
        "topico": "Lei 12.850/13 — Coautoria vs. Participação",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Qual a diferença entre coautor e partícipe em organização criminosa?",
        "alternativas": [
            { "letra": "A", "texto": "Coautor executa o crime, partícipe apenas auxilia." },
            { "letra": "B", "texto": "Coautor tem culpa direta, partícipe tem culpa eventual." },
            { "letra": "C", "texto": "Coautor e partícipe são equivalentes, apenas nomenclatura diferente." },
            { "letra": "D", "texto": "Coautor tem participação mínima, partícipe tem liderança." }
        ],
        "gabarito": "B",
        "artigo": "Art. 2º da Lei 12.850/13",
        "justificativa": "Coautor tem participação direta no crime, partícipe auxilia sem executar o ato principal."
    },
    {
        "id": "leg_extra_77",
        "disciplina": "legislacao",
        "topico": "Lei 9.455/97 — Crime de tortura por omissão",
        "peso": 2,
        "mostCobrado": true,
        "dificuldade": "medium",
        "enunciado": "Qual a pena para tortura por omissão?",
        "alternativas": [
            { "letra": "A", "texto": "Reclusão de 2 a 8 anos." },
            { "letra": "B", "texto": "Detenção de 1 a 4 anos." },
            { "letra": "C", "texto": "Multa e prestação de serviços." },
            { "letra": "D", "texto": "Advertência escrita." }
        ],
        "gabarito": "B",
        "artigo": "Art. 1º, §2º da Lei 9.455/97",
        "justificativa": "A omissão que poderia prevenir a tortura tem pena de detenção de 1 a 4 anos."
    },
    {
        "id": "leg_extra_78",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Progressão de regime para primário sem resultado morte",
        "peso": 2,
        "mostCobrado": true,
        "dificuldade": "dificil",
        "enunciado": "Qual o percentual de pena cumprida para progressão de regime de primário sem resultado morte?",
        "alternativas": [
            { "letra": "A", "texto": "40% da pena." },
            { "letra": "B", "texto": "50% da pena." },
            { "letra": "C", "texto": "60% da pena." },
            { "letra": "D", "texto": "70% da pena." }
        ],
        "gabarito": "A",
        "artigo": "Art. 112, VI, 'c' da LEP",
        "justificativa": "Para primário sem resultado morte, a lei estabelece 40% da pena para progressão."
    },
    {
        "id": "leg_extra_79",
        "disciplina": "legislacao",
        "topico": "Lei 11.343/06 — Confisco de bens do traficante",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual bem pode ser confiscado de traficante conforme a Lei de Drogas?",
        "alternativas": [
            { "letra": "A", "texto": "Bens adquiridos com o produto do crime." },
            { "letra": "B", "texto": "Somente imóveis rurais." },
            { "letra": "C", "texto": "Qualquer bem, independentemente da origem." },
            { "letra": "D", "texto": "Nenhum bem, apenas multa." }
        ],
        "gabarito": "A",
        "artigo": "Art. 39 da Lei 11.343/06",
        "justificativa": "A lei permite confisco dos bens vinculados à prática delitiva."
    },
    {
        "id": "leg_extra_80",
        "disciplina": "legislacao",
        "topico": "Lei 12.850/13 — Acordo de colaboração premiada",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "dificil",
        "enunciado": "Qual benefício NÃO pode ser concedido por colaboração premiada?",
        "alternativas": [
            { "letra": "A", "texto": "Redução de pena em até 2/3." },
            { "letra": "B", "texto": "Perdão judicial." },
            { "letra": "C", "texto": "Substituição da pena privativa por restritiva de direitos." },
            { "letra": "D", "texto": "Extinção automática de todos os processos." }
        ],
        "gabarito": "D",
        "artigo": "Art. 4º da Lei 12.850/13",
        "justificativa": "A lei não prevê extinção automática de todos os processos; os demais permanecem."
    },
    {
        "id": "leg_extra_81",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Definição de crime hediondo",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual dos seguintes crimes NÃO está listado como hediondo na Lei 8.072/90?",
        "alternativas": [
            { "letra": "A", "texto": "Latrocínio." },
            { "letra": "B", "texto": "Estupro de vulnerável." },
            { "letra": "C", "texto": "Tráfico de entorpecentes." },
            { "letra": "D", "texto": "Furto simples." }
        ],
        "gabarito": "D",
        "artigo": "Art. 1º da Lei 8.072/90",
        "justificativa": "Furto simples não consta da lista de crimes hediondos."
    },
    {
        "id": "leg_extra_82",
        "disciplina": "legislacao",
        "topico": "Lei 9.455/97 — Pena mínima para tortura com resultado morte",
        "peso": 2,
        "mostCobrado": true,
        "dificuldade": "medio",
        "enunciado": "Qual a pena mínima para tortura que resulta em morte?",
        "alternativas": [
            { "letra": "A", "texto": "4 anos de reclusão." },
            { "letra": "B", "texto": "8 anos de reclusão." },
            { "letra": "C", "texto": "12 anos de reclusão." },
            { "letra": "D", "texto": "6 anos de reclusão." }
        ],
        "gabarito": "B",
        "artigo": "Art. 1º, §3º da Lei 9.455/97",
        "justificativa": "A lei estabelece 8 a 16 anos para tortura com resultado morte."
    },
    {
        "id": "leg_extra_83",
        "disciplina": "legislacao",
        "topico": "Lei 12.850/13 — Ação controlada",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "A ação controlada visa:",
        "alternativas": [
            { "letra": "A", "texto": "Infiltrar agentes na organização criminosa." },
            { "letra": "B", "texto": "Retardar intervenção policial para coleta de provas." },
            { "letra": "C", "texto": "Realizar escuta ambiental sem autorização judicial." },
            { "letra": "D", "texto": "Conferir benefícios ao investigado." }
        ],
        "gabarito": "B",
        "artigo": "Art. 8º da Lei 12.850/13",
        "justificativa": "A ação controlada consiste em retardar a intervenção para melhor comprovação."
    },
    {
        "id": "leg_extra_84",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Regime inicial para crime hediondo",
        "peso": 2,
        "mostCobrado": true,
        "dificuldade": "facil",
        "enunciado": "O STF declarou inconstitucional a obrigatoriedade de regime fechado para hediondos. Qual decisão pode o juiz tomar?",
        "alternativas": [
            { "letra": "A", "texto": "Manter o regime fechado em todos os casos." },
            { "letra": "B", "texto": "Fixar regime aberto se as circunstâncias permitirem." },
            { "letra": "C", "texto": "Aplicar somente regime semiaberto." },
            { "letra": "D", "texto": "Deixar a decisão a cargo do MP." }
        ],
        "gabarito": "B",
        "artigo": "HC 111.840/ES — STF",
        "justificativa": "O juiz pode fixar regime inicial diverso do fechado, conforme art. 33 do CP e circunstâncias."
    },
    {
        "id": "leg_extra_85",
        "disciplina": "legislacao",
        "topico": "Lei 9.455/97 — Perda do cargo por tortura",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual efeito específico a Lei 9.455/97 impõe ao agente público condenado por tortura?",
        "alternativas": [
            { "letra": "A", "texto": "Perda do cargo automaticamente." },
            { "letra": "B", "texto": "Interdição pelo dobro do prazo da pena aplicada." },
            { "letra": "C", "texto": "Impossibilidade de exercer qualquer função pública por 5 anos." },
            { "letra": "D", "texto": "Nenhum efeito adicional além da pena privativa." }
        ],
        "gabarito": "B",
        "artigo": "Art. 1º, §5º da Lei 9.455/97",
        "justificativa": "A lei prevê perda do cargo e interdição pelo dobro da pena."
    },
    {
        "id": "leg_extra_86",
        "disciplina": "legislacao",
        "topico": "Lei 11.343/06 — Reincidência em tráfico",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "A reincidência em tráfico gera aumento de pena de acordo com qual percentual?",
        "alternativas": [
            { "letra": "A", "texto": "1/6 a 1/3 da pena base." },
            { "letra": "B", "texto": "1/3 a 2/3 da pena base." },
            { "letra": "C", "texto": "Nenhum aumento; a pena segue a tabela original." },
            { "letra": "D", "texto": "Duplica a pena base." }
        ],
        "gabarito": "A",
        "artigo": "Art. 40, III da Lei 11.343/06",
        "justificativa": "O art. 40, III estabelece aumento de 1/6 a 1/3 para reincidência."
    },
    {
        "id": "leg_extra_87",
        "disciplina": "legislacao",
        "topico": "Lei 12.850/13 — Prazo de conservação de provas em infiltração",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "dificil",
        "enunciado": "Qual o prazo máximo de validade da autorização judicial para infiltração de agentes?",
        "alternativas": [
            { "letra": "A", "texto": "3 meses, prorrogáveis por igual período." },
            { "letra": "B", "texto": "6 meses, prorrogáveis por igual período." },
            { "letra": "C", "texto": "1 ano, sem prorrogação." },
            { "letra": "D", "texto": "Indeterminado, enquanto houver necessidade." }
        ],
        "gabarito": "B",
        "artigo": "Art. 10 da Lei 12.850/13",
        "justificativa": "A autorização judicial tem prazo de até 6 meses, renovável por iguais períodos."
    },
    {
        "id": "leg_extra_88",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Aumento de pena por sequestro durante tortura",
        "peso": 2,
        "mostCobrado": true,
        "dificuldade": "medio",
        "enunciado": "Qual causa de aumento de pena é aplicada quando a tortura ocorre mediante sequestro?",
        "alternativas": [
            { "letra": "A", "texto": "Art. 1º, §4º, I da Lei 9.455/97." },
            { "letra": "B", "texto": "Art. 1º, §4º, II da Lei 9.455/97." },
            { "letra": "C", "texto": "Art. 1º, §4º, III da Lei 9.455/97." },
            { "letra": "D", "texto": "Nenhuma causa de aumento específica." }
        ],
        "gabarito": "C",
        "artigo": "Art. 1º, §4º, III da Lei 9.455/97",
        "justificativa": "O §4º prevê aumento quando o crime é praticado mediante sequestro."
    },
    {
        "id": "leg_extra_89",
        "disciplina": "legislacao",
        "topico": "Lei 11.343/06 — Uso de arma de fogo no tráfico",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "O uso de arma de fogo no tráfico gera qual aumento de pena?",
        "alternativas": [
            { "letra": "A", "texto": "1/6 a 1/3 da pena base." },
            { "letra": "B", "texto": "1/3 a 2/3 da pena base." },
            { "letra": "C", "texto": "Nenhum aumento específico." },
            { "letra": "D", "texto": "Duplicação da pena base." }
        ],
        "gabarito": "A",
        "artigo": "Art. 40, II da Lei 11.343/06",
        "justificativa": "O art. 40, II estabelece aumento de 1/6 a 1/3 quando há uso de arma."
    },
    {
        "id": "leg_extra_90",
        "disciplina": "legislacao",
        "topico": "Lei 12.850/13 — Contribuição de menor de idade",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "dificil",
        "enunciado": "A participação de menor de idade em organização criminosa permite que a mesma seja considerada?",
        "alternativas": [
            { "letra": "A", "texto": "Sim, ainda que seja menor, a organização continua válida." },
            { "letra": "B", "texto": "Não, a presença de menor anula a organização criminosa." },
            { "letra": "C", "texto": "Só se o menor for maior de 14 anos." },
            { "letra": "D", "texto": "Depende de decisão judicial." }
        ],
        "gabarito": "A",
        "artigo": "Art. 2º da Lei 12.850/13",
        "justificativa": "A lei não exclui a organização por participação de menores."
    },
    {
        "id": "leg_extra_91",
        "disciplina": "legislacao",
        "topico": "Lei 9.455/97 — Direito de defesa do acusado de tortura",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual garantia constitucional é essencial no processo contra acusado de tortura?",
        "alternativas": [
            { "letra": "A", "texto": "Ampla defesa e contraditório." },
            { "letra": "B", "texto": "Prisão preventiva automática." },
            { "letra": "C", "texto": "Julgamento por tribunal militar." },
            { "letra": "D", "texto": "Audiência de custódia obrigatória." }
        ],
        "gabarito": "A",
        "artigo": "Art. 5º, LV da Constituição",
        "justificativa": "O princípio constitucional garante ampla defesa."
    },
    {
        "id": "leg_extra_92",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Progressão de regime para reincidente específico com resultado morte",
        "peso": 2,
        "mostCobrado": true,
        "dificuldade": "dificil",
        "enunciado": "Qual percentual de cumprimento é exigido para progressão de regime nesse caso?",
        "alternativas": [
            { "letra": "A", "texto": "60% da pena." },
            { "letra": "B", "texto": "70% da pena." },
            { "letra": "C", "texto": "80% da pena." },
            { "letra": "D", "texto": "90% da pena." }
        ],
        "gabarito": "B",
        "artigo": "Art. 112, VI, 'b' da LEP",
        "justificativa": "A progressão para reincidente específico com resultado morte exige 70% da pena."
    },
    {
        "id": "leg_extra_93",
        "disciplina": "legislacao",
        "topico": "Lei 11.343/06 — Medidas de segurança para usuário",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual medida alternativa ao serviço comunitário pode ser aplicada ao usuário de drogas?",
        "alternativas": [
            { "letra": "A", "texto": "Internação compulsória." },
            { "letra": "B", "texto": "Multa pecuniária." },
            { "letra": "C", "texto": "Curso de reeducação profissional." },
            { "letra": "D", "texto": "Advertência escrita." }
        ],
        "gabarito": "C",
        "artigo": "Art. 28, §4º da Lei 11.343/06",
        "justificativa": "A lei permite medida educativa como curso de reeducação."
    },
    {
        "id": "leg_extra_94",
        "disciplina": "legislacao",
        "topico": "Lei 12.850/13 — Responsabilidade do líder da organização",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "O líder de organização criminosa pode ser responsabilizado por quais atos praticados por integrantes?",
        "alternativas": [
            { "letra": "A", "texto": "Somente pelos crimes que ele próprio cometeu." },
            { "letra": "B", "texto": "Por todos os atos praticados pelos membros, independentemente de participação direta." },
            { "letra": "C", "texto": "Apenas pelos atos que ordenou diretamente." },
            { "letra": "D", "texto": "Não há responsabilidade adicional além da sua participação pessoal." }
        ],
        "gabarito": "B",
        "artigo": "Art. 2º, parágrafo único da Lei 12.850/13",
        "justificativa": "O líder responde pelos atos praticados pelos membros da organização."
    },
    {
        "id": "leg_extra_95",
        "disciplina": "legislacao",
        "topico": "Lei 9.455/97 — Consequência de condenação por tortura para agente público",
        "peso": 2,
        "mostCobrado": true,
        "dificuldade": "medio",
        "enunciado": "Além da pena privativa, qual efeito a condenação por tortura tem sobre o cargo do agente público?",
        "alternativas": [
            { "letra": "A", "texto": "Suspensão do cargo por 5 anos." },
            { "letra": "B", "texto": "Perda do cargo e interdição por dobro da pena." },
            { "letra": "C", "texto": "Proibição de exercer outra função pública por 10 anos." },
            { "letra": "D", "texto": "Nenhum efeito adicional." }
        ],
        "gabarito": "B",
        "artigo": "Art. 1º, §5º da Lei 9.455/97",
        "justificativa": "A lei estabelece perda do cargo e interdição proporcional."
    },
    {
        "id": "leg_extra_96",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Aumento de pena por vítima maior de 60 anos",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual a causa de aumento prevista quando a vítima tem mais de 60 anos?",
        "alternativas": [
            { "letra": "A", "texto": "Art. 1º, §4º, I da Lei 9.455/97." },
            { "letra": "B", "texto": "Art. 1º, §4º, II da Lei 9.455/97." },
            { "letra": "C", "texto": "Art. 1º, §4º, III da Lei 9.455/97." },
            { "letra": "D", "texto": "Não há aumento previsto." }
        ],
        "gabarito": "B",
        "artigo": "Art. 1º, §4º, II da Lei 9.455/97",
        "justificativa": "A condição de vítima idosa aumenta a pena."
    },
    {
        "id": "leg_extra_97",
        "disciplina": "legislacao",
        "topico": "Lei 11.343/06 — Lavratura de auto de prisão em flagrante",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual documento oficial deve ser lavrado no caso de apreensão de drogas em flagrante?",
        "alternativas": [
            { "letra": "A", "texto": "Auto de constatação de infração." },
            { "letra": "B", "texto": "Auto de apreensão de bens." },
            { "letra": "C", "texto": "Auto de prisão em flagrante." },
            { "letra": "D", "texto": "Termo de compromisso."
            }
        ],
        "gabarito": "C",
        "artigo": "Art. 23 da Lei 11.343/06",
        "justificativa": "O auto de prisão em flagrante formaliza a detenção."
    },
    {
        "id": "leg_extra_98",
        "disciplina": "legislacao",
        "topico": "Lei 12.850/13 — Suspensão de processos por prescrição",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Qual o prazo prescricional para crime de organização criminosa?",
        "alternativas": [
            { "letra": "A", "texto": "12 anos." },
            { "letra": "B", "texto": "20 anos." },
            { "letra": "C", "texto": "15 anos." },
            { "letra": "D", "texto": "10 anos." }
        ],
        "gabarito": "B",
        "artigo": "Art. 5º, II da Lei 12.850/13",
        "justificativa": "O prazo é de 20 anos para organização criminosa."
    },
    {
        "id": "leg_extra_99",
        "disciplina": "legislacao",
        "topico": "Lei 9.455/97 — Diferença entre tortura comissionada e por omissão",
        "peso": 2,
        "mostCobrado": true,
        "dificuldade": "medio",
        "enunciado": "Qual elemento caracteriza a tortura por omissão?",
        "alternativas": [
            { "letra": "A", "texto": "Uso direto de violência pelo agente." },
            { "letra": "B", "texto": "Falta de ação para impedir a prática quando há dever de agir." },
            { "letra": "C", "texto": "Ameaça verbal sem contato físico." },
            { "letra": "D", "texto": "Aplicação de tortura a menores de idade." }
        ],
        "gabarito": "B",
        "artigo": "Art. 1º, §2º da Lei 9.455/97",
        "justificativa": "A omissão que poderia impedir a tortura é punida."
    },
    {
        "id": "leg_extra_100",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Redução de pena por confissão",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "A confissão do acusado pode diminuir a pena em que percentual?",
        "alternativas": [
            { "letra": "A", "texto": "Até 1/6 da pena." },
            { "letra": "B", "texto": "Até 1/3 da pena." },
            { "letra": "C", "texto": "Até 1/2 da pena." },
            { "letra": "D", "texto": "Não há redução prevista." }
        ],
        "gabarito": "B",
        "artigo": "Art. 65 do Código Penal",
        "justificativa": "A confissão pode reduzir a pena até 1/3."
    },
    {
        "id": "leg_extra_101",
        "disciplina": "legislacao",
        "topico": "Lei 11.343/06 — Diminuição de pena por circunstâncias atenuantes",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Quais circunstâncias atenuantes podem reduzir a pena no crime de tráfico?",
        "alternativas": [
            { "letra": "A", "texto": "Primariedade e bons antecedentes." },
            { "letra": "B", "texto": "Concurso de pessoas e uso de arma." },
            { "letra": "C", "texto": "Participação em organização criminosa." },
            { "letra": "D", "texto": "Reincidência em crime similar." }
        ],
        "gabarito": "A",
        "artigo": "Art. 65, II do CP (aplicável por analogia)",
        "justificativa": "Primariedade e bons antecedentes são atenuantes reconhecidos."
    },
    {
        "id": "leg_extra_102",
        "disciplina": "legislacao",
        "topico": "Lei 12.850/13 — Requisitos de prova para condenação",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "dificil",
        "enunciado": "Qual é o requisito essencial de prova para condenar por organização criminosa?",
        "alternativas": [
            { "letra": "A", "texto": "Confissão do acusado." },
            { "letra": "B", "texto": "Provas de estrutura organizada e divisão de tarefas." },
            { "letra": "C", "texto": "Apenas prova documental de associação." },
            { "letra": "D", "texto": "Depoimento de testemunhas sem necessidade de material."
            }
        ],
        "gabarito": "B",
        "artigo": "Art. 1º, §1º da Lei 12.850/13",
        "justificativa": "É necessário demonstrar organização e divisão de funções."
    },
    {
        "id": "leg_extra_103",
        "disciplina": "legislacao",
        "topico": "Lei 9.455/97 — Possibilidade de recurso contra sentença de tortura",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Contra a sentença que condena por tortura, cabe qual recurso?",
        "alternativas": [
            { "letra": "A", "texto": "Apelação." },
            { "letra": "B", "texto": "Recurso extraordinário ao STF." },
            { "letra": "C", "texto": "Habeas corpus apenas." },
            { "letra": "D", "texto": "Recurso de revista ao STJ." }
        ],
        "gabarito": "A",
        "artigo": "Art. 593, I do Código de Processo Penal",
        "justificativa": "A sentença penal pode ser objeto de apelação."
    },
    {
        "id": "leg_extra_104",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Crime hediondo com tentativa",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "A tentativa de crime hediondo recebe qual tratamento penal?",
        "alternativas": [
            { "letra": "A", "texto": "É punida como crime consumado." },
            { "letra": "B", "texto": "Recebe o mesmo regime de cumprimento que o crime consumado, porém com redução da pena." },
            { "letra": "C", "texto": "É inafiançável, mas admite regime mais brando." },
            { "letra": "D", "texto": "Não é considerada crime hediondo." }
        ],
        "gabarito": "B",
        "artigo": "Art. 14, §1º do Código Penal (aplicado às hediondez)",
        "justificativa": "A tentativa tem redução de pena, mas mantém tratamento especial."
    },
    {
        "id": "leg_extra_105",
        "disciplina": "legislacao",
        "topico": "Lei 11.343/06 — Prisão preventiva em caso de tráfico privilegiado",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "facil",
        "enunciado": "Qual é a condição essencial para decretar prisão preventiva em tráfico privilegiado?",
        "alternativas": [
            { "letra": "A", "texto": "Risco de fuga ou ordem pública." },
            { "letra": "B", "texto": "Presença de arma de fogo no local." },
            { "letra": "C", "texto": "Reincidência em crime comum." },
            { "letra": "D", "texto": "Somente se houver confisco de bens." }
        ],
        "gabarito": "A",
        "artigo": "Art. 5º, §4º da Lei 11.343/06",
        "justificativa": "A prisão preventiva depende de risco de fuga ou ordem pública."
    },
    {
        "id": "leg_extra_106",
        "disciplina": "legislacao",
        "topico": "Lei 12.850/13 — Efeito da sentença sobre os bens da organização",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "dificil",
        "enunciado": "A condenação por organização criminosa pode acarretar a apreensão de quais bens?",
        "alternativas": [
            { "letra": "A", "texto": "Bens utilizados como estrutura da organização." },
            { "letra": "B", "texto": "Somente o dinheiro obtido com o crime." },
            { "letra": "C", "texto": "Qualquer bem, independentemente da origem." },
            { "letra": "D", "texto": "Nenhum bem, apenas pena privativa." }
        ],
        "gabarito": "A",
        "artigo": "Art. 20 da Lei 12.850/13",
        "justificativa": "A lei permite confisco de bens vinculados à organização criminosa."
    },
    {
        "id": "leg_extra_107",
        "disciplina": "legislacao",
        "topico": "Lei 9.455/97 — Reincidência em tortura",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "A reincidência em tortura pode acarretar qual aumento de pena?",
        "alternativas": [
            { "letra": "A", "texto": "Aumento de 1/6 a 1/3 da pena base." },
            { "letra": "B", "texto": "Duplicação da pena base." },
            { "letra": "C", "texto": "Nenhum aumento; a lei não trata da reincidência." },
            { "letra": "D", "texto": "Redução da pena por causas atenuantes." }
        ],
        "gabarito": "A",
        "artigo": "Art. 62, II do Código Penal (aplicado à tortura)",
        "justificativa": "A reincidência gera aumento de 1/6 a 1/3."
    },
    {
        "id": "leg_extra_108",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Possibilidade de livramento condicional para crime hediondo",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "dificil",
        "enunciado": "Em que situação o condenado por crime hediondo pode receber livramento condicional?",
        "alternativas": [
            { "letra": "A", "texto": "Após cumprimento de 2/3 da pena, se for primário e sem violência grave." },
            { "letra": "B", "texto": "Imediatamente após o início da pena, se houver bom comportamento." },
            { "letra": "C", "texto": "Nunca é permitido para crimes hediondos." },
            { "letra": "D", "texto": "Somente se houver indulto presidencial." }
        ],
        "gabarito": "A",
        "artigo": "Art. 83, V do CP e Art. 5º da Lei 8.072/90",
        "justificativa": "O livramento condicional exige 2/3 da pena para hediondos."
    },
    {
        "id": "leg_extra_109",
        "disciplina": "legislacao",
        "topico": "Lei 11.343/06 — Substituição de pena por prestação de serviços",
        "peso": 2,
        "mostCobrado": true,
        "dificuldade": "facil",
        "enunciado": "Qual a carga horária máxima prevista para prestação de serviços à comunidade como medida substitutiva?",
        "alternativas": [
            { "letra": "A", "texto": "600 horas." },
            { "letra": "B", "texto": "800 horas." },
            { "letra": "C", "texto": "1000 horas." },
            { "letra": "D", "texto": "1200 horas." }
        ],
        "gabarito": "A",
        "artigo": "Art. 28, §3º da Lei 11.343/06",
        "justificativa": "A lei estabelece até 600 horas de prestação de serviços."
    },
    {
        "id": "leg_extra_110",
        "disciplina": "legislacao",
        "topico": "Lei 9.455/97 — Aplicação da lei no exterior",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Em que situação a Lei de Tortura pode ser aplicada a crimes cometidos fora do território nacional?",
        "alternativas": [
            { "letra": "A", "texto": "Quando a vítima for brasileira." },
            { "letra": "B", "texto": "Sempre, independentemente da nacionalidade." },
            { "letra": "C", "texto": "Apenas quando o agente for brasileiro." },
            { "letra": "D", "texto": "Nunca, a lei só se aplica no território nacional." }
        ],
        "gabarito": "A",
        "artigo": "Art. 2º da Lei 9.455/97",
        "justificativa": "A extraterritorialidade depende da nacionalidade da vítima."
    }
,
    {
        "id": "leg_extra_111",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 111",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 111.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. X da Lei 8.072/90",
        "justificativa": "Justificativa da questão 111."
    },
    {
        "id": "leg_extra_112",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 112",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 112.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. Y da Lei 8.072/90",
        "justificativa": "Justificativa da questão 112."
    },
    {
        "id": "leg_extra_113",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 113",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 113.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. Z da Lei 8.072/90",
        "justificativa": "Justificativa da questão 113."
    },
    {
        "id": "leg_extra_114",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 114",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 114.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. W da Lei 8.072/90",
        "justificativa": "Justificativa da questão 114."
    },
    {
        "id": "leg_extra_115",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 115",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 115.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. V da Lei 8.072/90",
        "justificativa": "Justificativa da questão 115."
    },
    {
        "id": "leg_extra_116",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 116",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 116.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. U da Lei 8.072/90",
        "justificativa": "Justificativa da questão 116."
    },
    {
        "id": "leg_extra_117",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 117",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 117.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. T da Lei 8.072/90",
        "justificativa": "Justificativa da questão 117."
    },
    {
        "id": "leg_extra_118",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 118",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 118.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. S da Lei 8.072/90",
        "justificativa": "Justificativa da questão 118."
    },
    {
        "id": "leg_extra_119",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 119",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 119.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. R da Lei 8.072/90",
        "justificativa": "Justificativa da questão 119."
    },
    {
        "id": "leg_extra_120",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 120",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 120.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. Q da Lei 8.072/90",
        "justificativa": "Justificativa da questão 120."
    },
        {
        "id": "leg_extra_121",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 121",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 121.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. AA da Lei 8.072/90",
        "justificativa": "Justificativa da questão 121."
    },
    {
        "id": "leg_extra_122",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 122",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 122.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. AB da Lei 8.072/90",
        "justificativa": "Justificativa da questão 122."
    },
    {
        "id": "leg_extra_123",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 123",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 123.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. AC da Lei 8.072/90",
        "justificativa": "Justificativa da questão 123."
    },
    {
        "id": "leg_extra_124",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 124",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 124.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. AD da Lei 8.072/90",
        "justificativa": "Justificativa da questão 124."
    },
    {
        "id": "leg_extra_125",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 125",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 125.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. AE da Lei 8.072/90",
        "justificativa": "Justificativa da questão 125."
    },
    {
        "id": "leg_extra_126",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 126",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 126.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. AF da Lei 8.072/90",
        "justificativa": "Justificativa da questão 126."
    },
    {
        "id": "leg_extra_127",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 127",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 127.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. AG da Lei 8.072/90",
        "justificativa": "Justificativa da questão 127."
    },
    {
        "id": "leg_extra_128",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 128",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 128.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. AH da Lei 8.072/90",
        "justificativa": "Justificativa da questão 128."
    },
    {
        "id": "leg_extra_129",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 129",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 129.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. AI da Lei 8.072/90",
        "justificativa": "Justificativa da questão 129."
    },
    {
        "id": "leg_extra_130",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 130",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 130.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. AJ da Lei 8.072/90",
        "justificativa": "Justificativa da questão 130."
    },
    {
        "id": "leg_extra_131",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 131",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 131.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. AK da Lei 8.072/90",
        "justificativa": "Justificativa da questão 131."
    },
    {
        "id": "leg_extra_132",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 132",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 132.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. AL da Lei 8.072/90",
        "justificativa": "Justificativa da questão 132."
    },
    {
        "id": "leg_extra_133",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 133",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 133.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. AM da Lei 8.072/90",
        "justificativa": "Justificativa da questão 133."
    },
    {
        "id": "leg_extra_134",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 134",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 134.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. AN da Lei 8.072/90",
        "justificativa": "Justificativa da questão 134."
    },
    {
        "id": "leg_extra_135",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 135",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 135.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. AO da Lei 8.072/90",
        "justificativa": "Justificativa da questão 135."
    },
    {
        "id": "leg_extra_136",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 136",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 136.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. AP  da Lei 8.072/90",
        "justificativa": "Justificativa da questão 136."
    },
    {
        "id": "leg_extra_137",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 137",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 137.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. AQ da Lei 8.072/90",
        "justificativa": "Justificativa da questão 137."
    },
    {
        "id": "leg_extra_138",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 138",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 138.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. AR da Lei 8.072/90",
        "justificativa": "Justificativa da questão 138."
    },
    {
        "id": "leg_extra_139",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 139",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 139.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. AS da Lei 8.072/90",
        "justificativa": "Justificativa da questão 139."
    },
    {
        "id": "leg_extra_140",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 140",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 140.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. AT da Lei 8.072/90",
        "justificativa": "Justificativa da questão 140."
    },
    {
        "id": "leg_extra_141",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 141",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 141.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. AU da Lei 8.072/90",
        "justificativa": "Justificativa da questão 141."
    },
    {
        "id": "leg_extra_142",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 142",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 142.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. AV da Lei 8.072/90",
        "justificativa": "Justificativa da questão 142."
    },
    {
        "id": "leg_extra_143",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 143",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 143.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. AW da Lei 8.072/90",
        "justificativa": "Justificativa da questão 143."
    },
    {
        "id": "leg_extra_144",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 144",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 144.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. AX da Lei 8.072/90",
        "justificativa": "Justificativa da questão 144."
    },
    {
        "id": "leg_extra_145",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 145",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 145.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. AY da Lei 8.072/90",
        "justificativa": "Justificativa da questão 145."
    },
    {
        "id": "leg_extra_146",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 146",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 146.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. AZ da Lei 8.072/90",
        "justificativa": "Justificativa da questão 146."
    },
    {
        "id": "leg_extra_147",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 147",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 147.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. BA da Lei 8.072/90",
        "justificativa": "Justificativa da questão 147."
    },
    {
        "id": "leg_extra_148",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 148",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 148.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. BB da Lei 8.072/90",
        "justificativa": "Justificativa da questão 148."
    },
    {
        "id": "leg_extra_149",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 149",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 149.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. BC da Lei 8.072/90",
        "justificativa": "Justificativa da questão 149."
    },
    // placeholder end
    {
        "id": "leg_extra_150",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 150",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 150.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. P da Lei 8.072/90",
        "justificativa": "Justificativa da questão 150."
    },
    {
        "id": "leg_extra_151",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 151",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 151.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QA da Lei 8.072/90",
        "justificativa": "Justificativa da questão 151."
    },
    {
        "id": "leg_extra_152",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 152",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 152.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. QB da Lei 8.072/90",
        "justificativa": "Justificativa da questão 152."
    },
    {
        "id": "leg_extra_153",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 153",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 153.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. QC da Lei 8.072/90",
        "justificativa": "Justificativa da questão 153."
    },
    {
        "id": "leg_extra_154",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 154",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 154.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. QD da Lei 8.072/90",
        "justificativa": "Justificativa da questão 154."
    },
    {
        "id": "leg_extra_155",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 155",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 155.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QE da Lei 8.072/90",
        "justificativa": "Justificativa da questão 155."
    },
    {
        "id": "leg_extra_156",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 156",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 156.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. QF da Lei 8.072/90",
        "justificativa": "Justificativa da questão 156."
    },
    {
        "id": "leg_extra_157",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 157",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 157.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. QG da Lei 8.072/90",
        "justificativa": "Justificativa da questão 157."
    },
    {
        "id": "leg_extra_158",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 158",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 158.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. QH da Lei 8.072/90",
        "justificativa": "Justificativa da questão 158."
    },
    {
        "id": "leg_extra_159",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 159",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 159.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QI da Lei 8.072/90",
        "justificativa": "Justificativa da questão 159."
    },
    {
        "id": "leg_extra_160",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 160",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 160.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. QJ da Lei 8.072/90",
        "justificativa": "Justificativa da questão 160."
    },
    {
        "id": "leg_extra_161",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 161",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 161.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. QK da Lei 8.072/90",
        "justificativa": "Justificativa da questão 161."
    },
    {
        "id": "leg_extra_162",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 162",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 162.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. QL da Lei 8.072/90",
        "justificativa": "Justificativa da questão 162."
    },
    {
        "id": "leg_extra_163",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 163",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 163.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QM da Lei 8.072/90",
        "justificativa": "Justificativa da questão 163."
    },
    {
        "id": "leg_extra_164",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 164",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 164.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. QN da Lei 8.072/90",
        "justificativa": "Justificativa da questão 164."
    },
    {
        "id": "leg_extra_165",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 165",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 165.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. QO da Lei 8.072/90",
        "justificativa": "Justificativa da questão 165."
    },
    {
        "id": "leg_extra_166",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 166",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 166.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. QP da Lei 8.072/90",
        "justificativa": "Justificativa da questão 166."
    },
    {
        "id": "leg_extra_167",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 167",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 167.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QQ da Lei 8.072/90",
        "justificativa": "Justificativa da questão 167."
    },
    {
        "id": "leg_extra_168",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 168",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 168.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. QR da Lei 8.072/90",
        "justificativa": "Justificativa da questão 168."
    },
    {
        "id": "leg_extra_169",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 169",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 169.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. QS da Lei 8.072/90",
        "justificativa": "Justificativa da questão 169."
    },
    {
        "id": "leg_extra_170",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 170",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 170.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. QT da Lei 8.072/90",
        "justificativa": "Justificativa da questão 170."
    },
    {
        "id": "leg_extra_171",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 171",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 171.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QU da Lei 8.072/90",
        "justificativa": "Justificativa da questão 171."
    },
    {
        "id": "leg_extra_172",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 172",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 172.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. QV da Lei 8.072/90",
        "justificativa": "Justificativa da questão 172."
    },
    {
        "id": "leg_extra_173",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 173",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 173.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. QW da Lei 8.072/90",
        "justificativa": "Justificativa da questão 173."
    },
    {
        "id": "leg_extra_174",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 174",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 174.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. QX da Lei 8.072/90",
        "justificativa": "Justificativa da questão 174."
    },
    {
        "id": "leg_extra_175",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 175",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 175.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QY da Lei 8.072/90",
        "justificativa": "Justificativa da questão 175."
    },
    {
        "id": "leg_extra_176",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 176",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 176.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. QZ da Lei 8.072/90",
        "justificativa": "Justificativa da questão 176."
    },
    {
        "id": "leg_extra_177",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 177",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 177.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. QA1 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 177."
    },
    {
        "id": "leg_extra_178",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 178",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 178.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. QA2 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 178."
    },
    {
        "id": "leg_extra_179",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 179",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 179.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QA3 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 179."
    },
    {
        "id": "leg_extra_180",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 180",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 180.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. QA4 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 180."
    },
    {
        "id": "leg_extra_181",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 181",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 181.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. QA5 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 181."
    },
    {
        "id": "leg_extra_182",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 182",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 182.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. QA6 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 182."
    },
    {
        "id": "leg_extra_183",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 183",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 183.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QA7 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 183."
    },
    {
        "id": "leg_extra_184",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 184",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 184.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. QA8 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 184."
    },
    {
        "id": "leg_extra_185",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 185",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 185.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. QA9 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 185."
    },
    {
        "id": "leg_extra_186",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 186",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 186.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "D",
        "artigo": "Art. QA10 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 186."
    },
    {
        "id": "leg_extra_187",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 187",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 187.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QA11 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 187."
    },
    {
        "id": "leg_extra_188",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 188",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 188.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "B",
        "artigo": "Art. QA12 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 188."
    },
    {
        "id": "leg_extra_189",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 189",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 189.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "C",
        "artigo": "Art. QA13 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 189."
    },
    {
        "id": "leg_extra_190",
        "disciplina": "legislacao",
        "topico": "Lei 8.072/90 — Tema 190",
        "peso": 2,
        "mostCobrado": false,
        "dificuldade": "medio",
        "enunciado": "Enunciado da questão 190.",
        "alternativas": [
            { "letra": "A", "texto": "Opção A" },
            { "letra": "B", "texto": "Opção B" },
            { "letra": "C", "texto": "Opção C" },
            { "letra": "D", "texto": "Opção D" }
        ],
        "gabarito": "A",
        "artigo": "Art. QA14 da Lei 8.072/90",
        "justificativa": "Justificativa da questão 190."
    },

];

