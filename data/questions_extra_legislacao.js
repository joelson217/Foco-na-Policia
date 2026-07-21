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
];
