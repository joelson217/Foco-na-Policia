// ============================================================
// QUESTIONS_EXTRA_LEP.JS — 30 novas questões sobre LEP
// Foco: Tópicos avançados e menos explorados da LEP 7.210/84
// ============================================================

const QUESTIONS_EXTRA_LEP = [
  {
    "id": "lep_extra_1",
    "disciplina": "lep",
    "topico": "Competência do Juiz da Execução (Art. 66)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme a Lei de Execução Penal (Lei 7.210/84), a competência para conceder a saída temporária ao condenado cumprindo pena em regime semiaberto é do(a):",
    "alternativas": [
      { "letra": "A", "texto": "Diretor do estabelecimento penal, independentemente de prévia manifestação do Ministério Público." },
      { "letra": "B", "texto": "Juiz da Execução, podendo ser concedida de forma automática após o preenchimento dos requisitos legais." },
      { "letra": "C", "texto": "Secretário de Estado da Administração Penitenciária, por delegação do Juiz da Execução." },
      { "letra": "D", "texto": "Presidente do Conselho da Comunidade, com homologação posterior pelo Juiz da Execução." }
    ],
    "gabarito": "B",
    "artigo": "Art. 66, IV e Art. 123 da LEP",
    "justificativa": "Conforme o art. 123 da LEP, a saída temporária será autorizada pelo JUIZ DA EXECUÇÃO, ouvidos o Ministério Público e a administração penitenciária. A concessão pode ser individualizada ou automática por ato judicial (após a Lei 13.964/2019). O Diretor concede a permissão de saída (arts. 120-121), que é diferente da saída temporária."
  },
  {
    "id": "lep_extra_2",
    "disciplina": "lep",
    "topico": "Medidas de Segurança (Art. 96-99)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Acerca das medidas de segurança na Lei de Execução Penal, assinale a opção correta:",
    "alternativas": [
      { "letra": "A", "texto": "A medida de internação em hospital de custódia aplica-se apenas ao semi-imputável, enquanto o tratamento ambulatorial aplica-se ao inimputável." },
      { "letra": "B", "texto": "O prazo mínimo da medida de segurança é de 2 a 4 anos, determinado pelo juiz na sentença." },
      { "letra": "C", "texto": "A internação em hospital de custódia é aplicada quando a pena prevista para o crime é de reclusão; o tratamento ambulatorial, quando a pena prevista é de detenção." },
      { "letra": "D", "texto": "As medidas de segurança têm prazo máximo de 10 anos, conforme previsto na LEP." }
    ],
    "gabarito": "C",
    "artigo": "Art. 97 da LEP e Art. 26 do CP",
    "justificativa": "Conforme o art. 97 do CP c/c LEP, se o agente for inimputável e a pena prevista for de RECLUSÃO, será determinada a internação. Se a pena prevista for de DETENÇÃO, o juiz pode submeter a tratamento ambulatorial. O prazo mínimo é de 1 a 3 anos (não 2 a 4). O STF entende que não há prazo máximo legal, mas deve ser limitado ao máximo da pena abstratamente cominada."
  },
  {
    "id": "lep_extra_3",
    "disciplina": "lep",
    "topico": "Ministério Público na Execução (Art. 68-70)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o papel do Ministério Público na execução penal, segundo a Lei 7.210/84, é correto afirmar que:",
    "alternativas": [
      { "letra": "A", "texto": "O MP é mero fiscal da lei, não podendo requerer benefícios como progressão de regime em favor do condenado." },
      { "letra": "B", "texto": "O MP deve inspecionar mensalmente os estabelecimentos penais, lavrando auto das visitas." },
      { "letra": "C", "texto": "Cabe ao MP fiscalizar a regularidade formal das guias de recolhimento e das decisões judiciais na execução." },
      { "letra": "D", "texto": "O MP tem legitimidade para requerer ao Juiz da Execução todas as providências necessárias ao desenvolvimento do processo executivo, inclusive benefícios em favor do condenado." }
    ],
    "gabarito": "D",
    "artigo": "Art. 67-68 da LEP",
    "justificativa": "O art. 67 determina que o MP fiscalizará a execução da pena e da medida de segurança. O art. 68 lista as atribuições do MP, incluindo: fiscalizar a regularidade formal das guias de recolhimento; requerer todas as providências necessárias ao desenvolvimento do processo executivo; interpor agravos e recursos cabíveis. O MP tem legitimidade ativa para requerer benefícios ao condenado (STJ — legitimidade ampla do MP na execução)."
  },
  {
    "id": "lep_extra_4",
    "disciplina": "lep",
    "topico": "Separação de Presos (Art. 82-86)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Segundo a Lei de Execução Penal, os presos provisórios (presos antes do trânsito em julgado) devem:",
    "alternativas": [
      { "letra": "A", "texto": "Cumprir a prisão provisória em estabelecimento destinado ao regime semiaberto." },
      { "letra": "B", "texto": "Ficar recolhidos em cadeia pública e separados dos condenados por sentença transitada em julgado." },
      { "letra": "C", "texto": "Poder ser misturados com presos definitivos, a critério do diretor do estabelecimento." },
      { "letra": "D", "texto": "Ser recolhidos na penitenciária mais próxima de sua residência, sem distinção de regime." }
    ],
    "gabarito": "B",
    "artigo": "Art. 84 e Art. 102 da LEP",
    "justificativa": "O art. 84 da LEP é expresso: o preso provisório ficará separado do condenado por sentença transitada em julgado. O art. 102 define que a cadeia pública destina-se ao recolhimento de presos provisórios. A mistura de presos provisórios com definitivos é vedada, sob pena de nulidade."
  },
  {
    "id": "lep_extra_5",
    "disciplina": "lep",
    "topico": "Cela Individual (Art. 88)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A Lei de Execução Penal, ao tratar do alojamento do condenado na penitenciária, exige que a cela individual atenda a determinados requisitos. Assinale a alternativa que apresenta corretamente tais requisitos:",
    "alternativas": [
      { "letra": "A", "texto": "Área mínima de 8m², ventilação forçada e instalações sanitárias individuais." },
      { "letra": "B", "texto": "Área mínima de 6m², salubridade do ambiente pela circulação de ar, condicionamento térmico adequado e presença de instalações sanitárias." },
      { "letra": "C", "texto": "Área mínima de 6m², iluminação artificial permanente e ventilação mecânica." },
      { "letra": "D", "texto": "Área mínima de 4m², com acesso a área de banho de sol e banheiro coletivo no pavilhão." }
    ],
    "gabarito": "B",
    "artigo": "Art. 88 da LEP",
    "justificativa": "O art. 88 da LEP estabelece que o condenado será alojado em cela individual com: área mínima de 6m²; salubridade do ambiente pela circulação de ar; insolação; condicionamento térmico adequado à existência humana; presença de aparelho sanitário. As demais alternativas apresentam metragens incorretas ou requisitos não previstos na lei."
  },
  {
    "id": "lep_extra_6",
    "disciplina": "lep",
    "topico": "Progressão de Regime — Percentuais (Art. 112)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Conforme a Lei de Execução Penal, com as alterações trazidas pelo Pacote Anticrime (Lei 13.964/2019), qual o percentual de cumprimento de pena exigido para progressão de regime do condenado primário por crime praticado com violência ou grave ameaça à pessoa?",
    "alternativas": [
      { "letra": "A", "texto": "16% da pena cumprida." },
      { "letra": "B", "texto": "20% da pena cumprida." },
      { "letra": "C", "texto": "25% da pena cumprida." },
      { "letra": "D", "texto": "30% da pena cumprida." }
    ],
    "gabarito": "C",
    "artigo": "Art. 112, III da LEP (Lei 13.964/2019)",
    "justificativa": "O Art. 112, III da LEP, com redação dada pela Lei 13.964/2019 (Pacote Anticrime): condenado primário por crime com VIOLÊNCIA ou GRAVE AMEAÇA: 25% da pena. Para o reincidente em crime com violência/ameaça: 30% (inciso IV). Para crimes sem violência/ameaça, primário: 16% (inciso I); reincidente: 20% (inciso II)."
  },
  {
    "id": "lep_extra_7",
    "disciplina": "lep",
    "topico": "Livramento Condicional (Art. 131-146)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o livramento condicional na Lei de Execução Penal, assinale a alternativa correta:",
    "alternativas": [
      { "letra": "A", "texto": "A concessão é exclusivamente judicial, mas pode ser requerida pelo próprio condenado, seu cônjuge ou parente, pelo Conselho Penitenciário ou pelo Ministério Público." },
      { "letra": "B", "texto": "A revogação por crime cometido durante o período de prova é automática, dispensando manifestação judicial." },
      { "letra": "C", "texto": "O período de livramento condicional, se não revogado, computa-se integralmente como pena cumprida em qualquer hipótese de revogação." },
      { "letra": "D", "texto": "O prazo mínimo para concessão do livramento condicional é de 1/3 da pena para todos os condenados." }
    ],
    "gabarito": "A",
    "artigo": "Art. 131, 141 da LEP",
    "justificativa": "Art. 131 da LEP: o livramento pode ser requerido pelo próprio condenado, por cônjuge, parente, pelo Conselho Penitenciário ou pelo MP. A revogação NÃO é automática — depende de decisão judicial (letra B errada). Se revogado obrigatoriamente, NÃO se computa o tempo de LC como pena cumprida (letra C errada). O prazo é de 1/3 apenas para primários em crimes sem violência; para reincidentes é 1/2 (letra D errada)."
  },
  {
    "id": "lep_extra_8",
    "disciplina": "lep",
    "topico": "Remição — Leitura (Art. 126 §5º-8º)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "A Lei de Execução Penal prevê a possibilidade de remição de pena pela leitura de obras literárias. Sobre esse instituto, é correto afirmar que:",
    "alternativas": [
      { "letra": "A", "texto": "O preso pode remir até 4 dias por livro lido, com limite de 12 livros por ano (48 dias de remição por leitura)." },
      { "letra": "B", "texto": "A remição por leitura é idêntica à remição por estudo: 1 dia remido para cada 12 horas de leitura." },
      { "letra": "C", "texto": "A remição por leitura aplica-se apenas aos presos em regime fechado que não têm acesso à escola." },
      { "letra": "D", "texto": "O benefício da remição por leitura exige que o preso escreva uma resenha crítica avaliada por equipe técnica penitenciária em prazo não superior a 30 dias." }
    ],
    "gabarito": "A",
    "artigo": "Art. 126, §5º e §6º da LEP",
    "justificativa": "O art. 126, §5º e §6º da LEP (incluídos pela Lei 12.433/2011 e regulamentado pela Recomendação CNJ 44/2013) prevê que a remição por leitura concede 4 dias de pena para cada obra literária lida, com limite de 12 obras por ano (= 48 dias). A leitura deve ser comprovada por resenha. A alternativa B confunde com remição por estudo. As alternativas C e D são incorretas pois não restringem ao regime fechado e o prazo de avaliação pode variar."
  },
  {
    "id": "lep_extra_9",
    "disciplina": "lep",
    "topico": "Saída Temporária — Requisitos e Modalidades (Art. 122-125)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "São finalidades autorizadoras da saída temporária, previstas no art. 122 da LEP:",
    "alternativas": [
      { "letra": "A", "texto": "Visita à família; frequentar curso supletivo profissionalizante e obtenção de trabalho externo." },
      { "letra": "B", "texto": "Visita à família; frequentar curso de instrução; participar de atividades que concorram para o retorno ao convívio social." },
      { "letra": "C", "texto": "Visita à família; comparecimento a consultas médicas externas; participação em audiências judiciais." },
      { "letra": "D", "texto": "Visita à família; tratamento médico urgente; atividades de cunho religioso e cultural." }
    ],
    "gabarito": "B",
    "artigo": "Art. 122 da LEP",
    "justificativa": "O art. 122 da LEP lista as finalidades da saída temporária: I — visita à família; II — frequência a curso supletivo profissionalizante, bem como de instrução do 2º grau ou superior, na comarca do Juízo da Execução; III — participação em atividades que concorram para o retorno ao convívio social. O trabalho externo é outro instituto (não confundir). Consultas médicas e audiências judiciais são finalidades da permissão de saída (art. 120), não da saída temporária."
  },
  {
    "id": "lep_extra_10",
    "disciplina": "lep",
    "topico": "Conselho Penitenciário (Art. 69-70)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "O Conselho Penitenciário, previsto na Lei de Execução Penal, tem por função principal:",
    "alternativas": [
      { "letra": "A", "texto": "Gerir os recursos financeiros dos estabelecimentos penais e contratar servidores temporários." },
      { "letra": "B", "texto": "Emitir pareceres sobre pedidos de progressão de regime, livramento condicional, indulto e comutação de pena." },
      { "letra": "C", "texto": "Substituir o Juiz da Execução nas decisões sobre saída temporária quando este estiver ausente." },
      { "letra": "D", "texto": "Dirigir os estabelecimentos penais estaduais em conjunto com o diretor do presídio." }
    ],
    "gabarito": "B",
    "artigo": "Art. 69-70 da LEP",
    "justificativa": "O Conselho Penitenciário é órgão consultivo e fiscalizador da execução penal. Sua principal função é emitir PARECERES sobre pedidos de: livramento condicional, indulto, comutação de pena, transferência de condenados. Ele NÃO exerce função jurisdicional (que é do Juiz da Execução) nem administrativa de gestão de recursos."
  },
  {
    "id": "lep_extra_11",
    "disciplina": "lep",
    "topico": "Trabalho Externo (Art. 36-37)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o trabalho externo do preso em regime fechado, previsto na Lei de Execução Penal, é INCORRETO afirmar que:",
    "alternativas": [
      { "letra": "A", "texto": "O trabalho externo em regime fechado somente é admissível em serviços ou obras públicas, realizadas por órgãos da administração direta ou indireta." },
      { "letra": "B", "texto": "Admite-se o trabalho externo do preso em entidades privadas em regime fechado, desde que haja compatibilidade com a execução da pena." },
      { "letra": "C", "texto": "O requisito para o trabalho externo em regime fechado é o cumprimento mínimo de 1/6 da pena." },
      { "letra": "D", "texto": "A autorização para trabalho externo em regime fechado é do diretor do estabelecimento." }
    ],
    "gabarito": "B",
    "artigo": "Art. 36 da LEP",
    "justificativa": "O art. 36 da LEP é expresso: o trabalho externo em regime FECHADO somente é admissível em SERVIÇOS OU OBRAS PÚBLICAS (entidades da Administração Direta ou Indireta). Para o preso em regime SEMIABERTO é que se admite trabalho em entidades privadas (art. 35). A alternativa B está incorreta porque sugere possibilidade de trabalho em entidade privada em regime fechado. O requisito de 1/6 (alternativa C) e a autorização pelo diretor (alternativa D) estão corretos."
  },
  {
    "id": "lep_extra_12",
    "disciplina": "lep",
    "topico": "Reabilitação Criminal (Art. 93-95 CP e LEP)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "A reabilitação criminal, nos termos do Código Penal e da LEP, tem como efeito:",
    "alternativas": [
      { "letra": "A", "texto": "Apagar os antecedentes criminais do condenado, tornando-o juridicamente como se nunca houvesse sido condenado." },
      { "letra": "B", "texto": "Assegurar ao condenado o sigilo dos registros sobre o processo e a condenação, não impede nova condenação por crime posterior." },
      { "letra": "C", "texto": "Extinguir a pena restante, caso o condenado tenha cumprido mais da metade da pena e demonstrado bom comportamento." },
      { "letra": "D", "texto": "Cancelar automaticamente todos os efeitos secundários da condenação, inclusive a perda de cargo público." }
    ],
    "gabarito": "B",
    "artigo": "Art. 93 e 95 do Código Penal",
    "justificativa": "A reabilitação (art. 93 CP) alcança quaisquer penas impostas por sentença definitiva, assegurando ao condenado o SIGILO dos registros sobre o processo e a condenação. Ela NÃO apaga a condenação (o condenado ainda é tecnicamente reincidente se cometer novo crime dentro do período depurador). Também não extingue a pena restante. A reabilitação pode ser revogada se o reabilitado for condenado, como autor, cúmplice ou receptador, a pena que não seja de multa."
  },
  {
    "id": "lep_extra_13",
    "disciplina": "lep",
    "topico": "Faltas Graves — Consequências (Art. 50-57)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A prática de falta grave pelo condenado, conforme a Lei de Execução Penal e a jurisprudência pacificada, produz os seguintes efeitos OBRIGATÓRIOS:",
    "alternativas": [
      { "letra": "A", "texto": "Regressão de regime, perda de todos os dias remidos e reinício da contagem para progressão." },
      { "letra": "B", "texto": "Regressão de regime e interrupção do prazo para a progressão de regime." },
      { "letra": "C", "texto": "Perda de até 1/3 dos dias remidos e interrupção do prazo para progressão de regime." },
      { "letra": "D", "texto": "Regressão de regime, interrupção do prazo para progressão e perda de até 1/3 dos dias remidos." }
    ],
    "gabarito": "D",
    "artigo": "Art. 118, I e Art. 127 da LEP; Súmula 534 STJ",
    "justificativa": "A falta grave acarreta: 1) REGRESSÃO DE REGIME obrigatória (art. 118, I da LEP); 2) INTERRUPÇÃO do prazo para progressão (Súmula 534 STJ — a prática de falta grave interrompe o prazo para progressão, recomeçando a contagem a partir da data do cometimento da infração); 3) PERDA de ATÉ 1/3 dos dias remidos, a critério judicial (art. 127 da LEP). A perda NÃO é total e a regressão NÃO é automática (depende de PAD com direito à defesa)."
  },
  {
    "id": "lep_extra_14",
    "disciplina": "lep",
    "topico": "Incidentes da Execução — Conversão de Pena",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "Nos incidentes da execução penal, a conversão de pena restritiva de direitos em privativa de liberdade ocorre quando:",
    "alternativas": [
      { "letra": "A", "texto": "O condenado comete falta leve ou descumpre qualquer condição de sua condenação." },
      { "letra": "B", "texto": "O condenado descumpre injustificadamente a restrição imposta ou sobrevém condenação irrecorrível que torne incompatível a pena restritiva." },
      { "letra": "C", "texto": "O condenado pratica novo crime doloso durante o cumprimento da pena restritiva, independentemente de condenação transitada em julgado." },
      { "letra": "D", "texto": "O Ministério Público requerer motivadamente a conversão, a qualquer tempo." }
    ],
    "gabarito": "B",
    "artigo": "Art. 181 da LEP",
    "justificativa": "O art. 181 da LEP prevê que a pena restritiva de direitos será convertida em privativa de liberdade quando: I — o condenado descumprir injustificadamente a restrição imposta; II — sobreviver condenação a pena privativa de liberdade, por outro crime, cuja execução não seja suspensa. A mera prática de novo crime sem condenação transitada em julgado não basta. A conversão depende de decisão judicial motivada, não apenas do requerimento do MP."
  },
  {
    "id": "lep_extra_15",
    "disciplina": "lep",
    "topico": "Regime Inicial de Cumprimento (Art. 33 CP e LEP)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Segundo o Código Penal e a LEP, o condenado não reincidente cuja pena seja superior a 4 e não exceda 8 anos deverá inicialmente cumprir a pena em qual regime?",
    "alternativas": [
      { "letra": "A", "texto": "Regime fechado, obrigatoriamente." },
      { "letra": "B", "texto": "Regime semiaberto, podendo o juiz fixar o aberto se as circunstâncias forem favoráveis." },
      { "letra": "C", "texto": "Regime semiaberto." },
      { "letra": "D", "texto": "Regime aberto, por ser pena de média gravidade." }
    ],
    "gabarito": "C",
    "artigo": "Art. 33, §2º, 'b' do Código Penal",
    "justificativa": "O art. 33, §2º do CP estabelece: a) reclusão acima de 8 anos: regime fechado obrigatório; b) reclusão superior a 4 e não superior a 8 anos: REGIME SEMIABERTO (não reincidente); c) pena igual ou inferior a 4 anos: regime aberto (não reincidente). O juiz pode fixar regime mais grave com fundamentação (art. 59 CP), mas o padrão para essa faixa é o semiaberto."
  },
  {
    "id": "lep_extra_16",
    "disciplina": "lep",
    "topico": "Estabelecimentos Penais — Cadeia Pública (Art. 102)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "De acordo com a LEP, onde deve ser instalada a cadeia pública e para quem se destina?",
    "alternativas": [
      { "letra": "A", "texto": "Em local afastado do centro urbano, destinada ao preso definitivo em regime fechado." },
      { "letra": "B", "texto": "Na sede do município ou próximo a ela, destinada ao recolhimento dos presos provisórios." },
      { "letra": "C", "texto": "Em qualquer localidade, destinada ao preso em regime semiaberto com trabalho externo." },
      { "letra": "D", "texto": "Próxima ao fórum da comarca, destinada ao preso em regime aberto." }
    ],
    "gabarito": "B",
    "artigo": "Art. 102 da LEP",
    "justificativa": "O art. 102 da LEP dispõe que a cadeia pública destina-se ao recolhimento de PRESOS PROVISÓRIOS (antes do trânsito em julgado). O art. 103 determina que cada comarca terá pelo menos uma cadeia pública a fim de resguardar o interesse da Administração da Justiça Criminal e a permanência do preso em LOCAL PRÓXIMO AO SEU MEIO SOCIAL E FAMILIAR. A penitenciária (regime fechado definitivo) é que se instala em local afastado do centro urbano."
  },
  {
    "id": "lep_extra_17",
    "disciplina": "lep",
    "topico": "Direitos do Preso (Art. 41)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A Lei de Execução Penal assegura aos presos uma série de direitos. Considerando o art. 41 da LEP, assinale a alternativa que contém um direito INCORRETAMENTE atribuído ao preso:",
    "alternativas": [
      { "letra": "A", "texto": "Alimentação suficiente e vestuário." },
      { "letra": "B", "texto": "Proporcionalidade na distribuição do tempo para o trabalho, o descanso e a recreação." },
      { "letra": "C", "texto": "Visita do cônjuge, da companheira, de parentes e amigos em dias determinados, independentemente de qualquer restrição por parte da administração." },
      { "letra": "D", "texto": "Audiência especial com o diretor do estabelecimento." }
    ],
    "gabarito": "C",
    "artigo": "Art. 41, X da LEP",
    "justificativa": "O art. 41 da LEP prevê os direitos dos presos, incluindo visita do cônjuge, companheira, parentes e amigos em dias determinados (inciso X). No entanto, este direito NÃO é absoluto — pode ser SUSPENSO OU RESTRINGIDO mediante ato motivado do diretor do estabelecimento (§único do art. 41). Portanto, a alternativa C é incorreta ao afirmar que o direito ocorre 'independentemente de qualquer restrição'."
  },
  {
    "id": "lep_extra_18",
    "disciplina": "lep",
    "topico": "Patronato e Conselho da Comunidade",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "O Conselho da Comunidade, previsto na Lei de Execução Penal, é órgão da execução penal que tem, entre outras funções:",
    "alternativas": [
      { "letra": "A", "texto": "Julgar as infrações disciplinares cometidas pelos condenados nos estabelecimentos penais." },
      { "letra": "B", "texto": "Visitar os estabelecimentos penais pelo menos uma vez por mês, entrevistar presos, apresentar relatórios ao Juiz da Execução e diligenciar obtenção de recursos materiais e humanos para auxiliar na reinserção social." },
      { "letra": "C", "texto": "Substituir o Conselho Penitenciário nas análises de pedidos de livramento condicional e indulto." },
      { "letra": "D", "texto": "Fiscalizar o cumprimento das sentenças condenatórias e emitir certidões de pena cumprida." }
    ],
    "gabarito": "B",
    "artigo": "Art. 80-81 da LEP",
    "justificativa": "O Conselho da Comunidade (arts. 80-81 da LEP) é formado por representantes de associações comerciais ou industriais, da OAB, de igrejas ou entidades religiosas. Deve VISITAR OS ESTABELECIMENTOS PENAIS pelo menos uma vez por mês, entrevistar presos, apresentar relatórios mensais ao Juiz da Execução, diligenciar a obtenção de recursos para reinserção social. Não julga infrações (função do Diretor/Conselho Disciplinar) nem substitui o Conselho Penitenciário."
  },
  {
    "id": "lep_extra_19",
    "disciplina": "lep",
    "topico": "Progressão por Saltos",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre a chamada 'progressão por saltos' (do regime fechado direto para o aberto), a jurisprudência do STJ se posiciona no sentido de que:",
    "alternativas": [
      { "letra": "A", "texto": "É expressamente vedada pela LEP e pelo Pacote Anticrime." },
      { "letra": "B", "texto": "É admissível em caráter excepcional, quando o condenado já preenche os requisitos para o regime aberto e não houve vagas no regime semiaberto." },
      { "letra": "C", "texto": "É sempre cabível, pois os requisitos de progressão devem ser analisados no momento da solicitação." },
      { "letra": "D", "texto": "É inadmissível de forma absoluta, devendo o condenado passar obrigatoriamente pelo regime semiaberto." }
    ],
    "gabarito": "D",
    "artigo": "Súmula 491 do STJ; Art. 112 da LEP",
    "justificativa": "A Súmula 491 do STJ é taxativa: 'É inadmissível a chamada progressão por salto, do regime fechado diretamente para o regime aberto'. A progressão de regime é necessariamente escalonada: fechado → semiaberto → aberto. Mesmo que o condenado já preencha os requisitos para o regime aberto, deve passar pelo semiaberto antes. A falta de vagas no semiaberto não autoriza a progressão por saltos — nesse caso, o STJ admite a prisão domiciliar."
  },
  {
    "id": "lep_extra_20",
    "disciplina": "lep",
    "topico": "PAD — Processo Administrativo Disciplinar na Execução",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Quanto ao Processo Administrativo Disciplinar (PAD) para apuração de falta grave na execução penal, é correto afirmar que:",
    "alternativas": [
      { "letra": "A", "texto": "A aplicação de sanção por falta grave independe de PAD quando houver confissão do condenado." },
      { "letra": "B", "texto": "O condenado tem direito à defesa técnica por advogado no PAD, sendo nula a sanção aplicada sem esse requisito." },
      { "letra": "C", "texto": "O PAD é dispensável quando a falta grave resultar em RDD, pois a gravidade da situação justifica a urgência." },
      { "letra": "D", "texto": "O condenado pode ser transferido para estabelecimento mais rigoroso antes da conclusão do PAD como medida cautelar, sem nulidade." }
    ],
    "gabarito": "B",
    "artigo": "Art. 59 da LEP; Súmula Vinculante 5 (não se aplica ao processo penal) — STJ",
    "justificativa": "O STJ pacificou que o condenado tem direito à DEFESA TÉCNICA por advogado no PAD da execução penal, sob pena de nulidade da sanção aplicada. A Súmula Vinculante 5 (que dispensava advogado em PAD administrativo comum) NÃO se aplica ao processo de execução penal. A alternativa D seria procedimento irregular. O PAD é obrigatório também nos casos de RDD (alternativa C errada)."
  },
  {
    "id": "lep_extra_21",
    "disciplina": "lep",
    "topico": "Detração Penal (Art. 42 CP e LEP)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "A detração penal, prevista no art. 42 do Código Penal, computada na pena privativa de liberdade, inclui o tempo de:",
    "alternativas": [
      { "letra": "A", "texto": "Prisão provisória e internação em hospital de custódia, mas não o de internação civil compulsória por dependência química." },
      { "letra": "B", "texto": "Prisão provisória, internação em hospital de custódia e internação em qualquer estabelecimento de saúde." },
      { "letra": "C", "texto": "Apenas prisão provisória decretada pelo mesmo juízo." },
      { "letra": "D", "texto": "Prisão provisória e prisão administrativa, mas não a internação em hospital de custódia." }
    ],
    "gabarito": "B",
    "artigo": "Art. 42 do Código Penal",
    "justificativa": "O art. 42 do CP dispõe: computam-se na pena privativa de liberdade e na medida de segurança o tempo de PRISÃO PROVISÓRIA, no Brasil ou no estrangeiro, o de PRISÃO ADMINISTRATIVA e o de INTERNAÇÃO em qualquer estabelecimento hospitalar ou de tratamento. A detração é ampla e inclui internação em qualquer estabelecimento de saúde, não apenas hospitais de custódia."
  },
  {
    "id": "lep_extra_22",
    "disciplina": "lep",
    "topico": "Assistência à Saúde — HIV/AIDS",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Com relação à assistência à saúde do preso portador do vírus HIV ou com AIDS no sistema penitenciário, a LEP garante que:",
    "alternativas": [
      { "letra": "A", "texto": "O preso com HIV/AIDS deve ser mantido em isolamento total dos demais presos, em ala específica." },
      { "letra": "B", "texto": "Quando o estabelecimento penal não estiver aparelhado para prover a assistência médica necessária, esta será prestada em outro local, mediante autorização da direção." },
      { "letra": "C", "texto": "O tratamento do HIV/AIDS é encargo exclusivo do preso, devendo custear as despesas com recursos próprios." },
      { "letra": "D", "texto": "O preso que comprove ser portador de doença grave e incurável deve ser automaticamente colocado em prisão domiciliar." }
    ],
    "gabarito": "B",
    "artigo": "Art. 14, §2º da LEP",
    "justificativa": "O art. 14, §2º da LEP prevê que quando o estabelecimento penal não estiver aparelhado para prover a assistência médica necessária, esta será prestada EM OUTRO LOCAL, mediante autorização da direção do estabelecimento. Não há previsão de isolamento compulsório (violaria a dignidade), nem de custeio pelo preso. A prisão domiciliar por doença grave não é automática — depende de decisão judicial (art. 318, II do CPP)."
  },
  {
    "id": "lep_extra_23",
    "disciplina": "lep",
    "topico": "Classificação do Condenado (Art. 5-9)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "A Comissão Técnica de Classificação (CTC), prevista nos arts. 5º a 9º da LEP, tem por objetivo:",
    "alternativas": [
      { "letra": "A", "texto": "Julgar os pedidos de progressão de regime em substituição ao Juiz da Execução." },
      { "letra": "B", "texto": "Proporcionar a individualização da pena mediante exame criminológico e elaboração do programa individualizador da pena." },
      { "letra": "C", "texto": "Deliberar sobre questões administrativas do estabelecimento, como a escala de trabalho dos funcionários." },
      { "letra": "D", "texto": "Impor as sanções disciplinares previstas na LEP após processo disciplinar." }
    ],
    "gabarito": "B",
    "artigo": "Art. 6-7 da LEP",
    "justificativa": "A CTC (art. 6º da LEP) elabora o programa individualizador da pena privativa de liberdade adequado ao condenado, realizando o exame criminológico (art. 8º — obrigatório para regime fechado, facultativo para semiaberto). Sua função é CLASSIFICAR o condenado para fins de individuação e orientar o processo de reinserção social. Não exerce função jurisdicional (julgamento de progressão) nem disciplinar (imposição de sanções)."
  },
  {
    "id": "lep_extra_24",
    "disciplina": "lep",
    "topico": "RDD — Regime Disciplinar Diferenciado (Art. 52)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "O Regime Disciplinar Diferenciado (RDD) previsto no art. 52 da LEP, com redação dada pela Lei 13.964/2019, pode ser aplicado ao preso:",
    "alternativas": [
      { "letra": "A", "texto": "Apenas ao condenado definitivo com pena em regime fechado que tenha praticado falta grave." },
      { "letra": "B", "texto": "Ao condenado ou ao preso provisório que apresente alto risco para a ordem e a segurança, ou sobre o qual recaiam fundadas suspeitas de envolvimento ou participação em organização criminosa, associação criminosa ou milícia privada." },
      { "letra": "C", "texto": "Exclusivamente ao preso que comandar motins ou rebeliões dentro do estabelecimento penal." },
      { "letra": "D", "texto": "Apenas ao preso que tenha participado de organização criminosa e seja condenado definitivamente por esse crime." }
    ],
    "gabarito": "B",
    "artigo": "Art. 52, I e II da LEP (redação dada pela Lei 13.964/2019)",
    "justificativa": "O art. 52 da LEP, alterado pelo Pacote Anticrime, prevê o RDD para: I — preso que apresente ALTO RISCO para a ordem e segurança do estabelecimento penal ou da sociedade; II — preso sobre o qual recaiam FUNDADAS SUSPEITAS de envolvimento ou participação em ORCRIM, associação criminosa ou milícia. O RDD se aplica tanto ao CONDENADO quanto ao PRESO PROVISÓRIO. Não exige condenação por ORCRIM — bastam fundadas suspeitas. O prazo é de até 2 anos, renovável por igual período."
  },
  {
    "id": "lep_extra_25",
    "disciplina": "lep",
    "topico": "Agravo em Execução (Art. 197)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "O recurso cabível das decisões proferidas pelo Juiz da Execução Penal é:",
    "alternativas": [
      { "letra": "A", "texto": "Apelação, com efeito devolutivo e suspensivo." },
      { "letra": "B", "texto": "Recurso em Sentido Estrito, com prazo de 5 dias." },
      { "letra": "C", "texto": "Agravo em execução, que segue o rito do recurso em sentido estrito, sem efeito suspensivo." },
      { "letra": "D", "texto": "Embargos de declaração, com prazo de 2 dias, quando houver omissão ou contradição." }
    ],
    "gabarito": "C",
    "artigo": "Art. 197 da LEP",
    "justificativa": "O art. 197 da LEP prevê o AGRAVO como recurso cabível das decisões proferidas pelo Juiz da Execução. Esse agravo segue o rito do recurso em sentido estrito (CPP) e, em regra, NÃO tem efeito suspensivo (salvo casos excepcionais). O prazo para interposição é de 5 dias. É diferente da apelação e do RESE comum — é recurso próprio e específico da execução penal."
  },
  {
    "id": "lep_extra_26",
    "disciplina": "lep",
    "topico": "Monitoração Eletrônica (Art. 146-B ao 146-D)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A monitoração eletrônica, inserida na LEP pela Lei 12.258/2010, pode ser determinada pelo Juiz nos seguintes casos:",
    "alternativas": [
      { "letra": "A", "texto": "Exclusivamente para o preso em saída temporária do regime semiaberto." },
      { "letra": "B", "texto": "Para o preso autorizado à saída temporária do regime semiaberto e para o condenado com pena privativa de liberdade de regime aberto." },
      { "letra": "C", "texto": "Para qualquer condenado que manifeste interesse voluntariamente em ser monitorado." },
      { "letra": "D", "texto": "Apenas como substitutivo da prisão preventiva, mediante requerimento do réu." }
    ],
    "gabarito": "B",
    "artigo": "Art. 146-B da LEP",
    "justificativa": "O art. 146-B da LEP prevê que o juiz poderá definir fiscalização por monitoração eletrônica quando: I — autorizar a saída temporária no regime semiaberto; II — determinar a prisão domiciliar. A Lei 12.258/2010 inseriu essa possibilidade. Não se aplica a qualquer condenado voluntariamente (alternativa C), nem é instrumento exclusivo de cautelar no processo (alternativa D). O regime aberto com monitoração também é previsto na prática como alternativa à prisão domiciliar."
  },
  {
    "id": "lep_extra_27",
    "disciplina": "lep",
    "topico": "Guia de Recolhimento (Art. 105-110)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Para que o condenado comece a cumprir a pena, é necessária a expedição da guia de recolhimento. Conforme a LEP, a guia de recolhimento:",
    "alternativas": [
      { "letra": "A", "texto": "É expedida pelo diretor do estabelecimento penal ao receber o condenado." },
      { "letra": "B", "texto": "É expedida pela autoridade judiciária após o trânsito em julgado da sentença condenatória e encaminhada à autoridade administrativa." },
      { "letra": "C", "texto": "Pode ser expedida antes do trânsito em julgado, se o condenado tiver antecedentes criminais." },
      { "letra": "D", "texto": "É emitida pelo Ministério Público após aprovação do Conselho Penitenciário." }
    ],
    "gabarito": "B",
    "artigo": "Art. 105-107 da LEP",
    "justificativa": "Conforme o art. 105 da LEP, transitando em julgado a sentença que aplicar pena privativa de liberdade, o Juiz EXPEDIRÁ GUIA DE RECOLHIMENTO para a execução, mencionando: o nome do condenado; a natureza da infração; a data e o número da sentença; a pena; a data do início do cumprimento; o regime; e as cominações acessórias. A guia é condição indispensável para o início do cumprimento de pena."
  },
  {
    "id": "lep_extra_28",
    "disciplina": "lep",
    "topico": "Estabelecimentos para Mulheres (Art. 82, §1º)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o tratamento dispensado à mulher gestante e parturiente nos estabelecimentos penais, a LEP determina que:",
    "alternativas": [
      { "letra": "A", "texto": "A mulher presa deve ser transferida para hospital público durante o período do parto, retornando ao estabelecimento penal logo após." },
      { "letra": "B", "texto": "Os estabelecimentos destinados às mulheres serão dotados de berçário, onde as condenadas possam amamentar seus filhos, e de seção para gestante e parturiente." },
      { "letra": "C", "texto": "A mulher gestante tem direito automático à prisão domiciliar, independentemente do tipo de crime." },
      { "letra": "D", "texto": "Os filhos de mulheres presas devem ser encaminhados para adoção em até 90 dias após o nascimento." }
    ],
    "gabarito": "B",
    "artigo": "Art. 83, §2º da LEP",
    "justificativa": "O art. 83, §2º da LEP estabelece que os estabelecimentos penais destinados a mulheres serão dotados de berçário (onde as condenadas possam amamentar seus filhos) e de seção para gestante e parturiente. Também é prevista creche para filhos menores. A prisão domiciliar da gestante não é automática — depende de decisão judicial (art. 318 CPP). Não há previsão de adoção compulsória."
  },
  {
    "id": "lep_extra_29",
    "disciplina": "lep",
    "topico": "Suspensão Condicional da Pena (Sursis) — Art. 156-163",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "O sursis (suspensão condicional da pena), previsto na LEP e no Código Penal, pode ser concedido nos seguintes casos, EXCETO:",
    "alternativas": [
      { "letra": "A", "texto": "Condenado não reincidente em crime doloso com pena privativa de liberdade não superior a 2 anos." },
      { "letra": "B", "texto": "Condenado idoso (maior de 70 anos) com pena não superior a 4 anos (sursis etário)." },
      { "letra": "C", "texto": "Condenado por crime hediondo que seja primário e de bons antecedentes, pela excepcionalidade do caso." },
      { "letra": "D", "texto": "Condenado que sofre de doença grave com pena não superior a 4 anos (sursis humanitário)." }
    ],
    "gabarito": "C",
    "artigo": "Art. 77 e 77, §2º do Código Penal",
    "justificativa": "O art. 77 do CP proíbe a concessão de sursis para crimes HEDIONDOS. Não há exceção para esse caso, mesmo que o condenado seja primário. O sursis simples (pena ≤2 anos, primário em crime doloso) é o padrão. O sursis etário (>70 anos, pena ≤4 anos) e o sursis humanitário (doença grave, pena ≤4 anos) são modalidades especiais. O sursis também não se aplica: ao reincidente em crime doloso; a quem a suspensão for contraindicada por razões de política criminal."
  },
  {
    "id": "lep_extra_30",
    "disciplina": "lep",
    "topico": "Progressão e Lei de Crimes Hediondos",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Nos termos da LEP (art. 112) com as alterações do Pacote Anticrime, qual o percentual de cumprimento de pena exigido para a progressão do condenado REINCIDENTE ESPECÍFICO em crime HEDIONDO COM RESULTADO MORTE?",
    "alternativas": [
      { "letra": "A", "texto": "50% da pena." },
      { "letra": "B", "texto": "60% da pena." },
      { "letra": "C", "texto": "66,67% (dois terços) da pena." },
      { "letra": "D", "texto": "70% da pena." }
    ],
    "gabarito": "D",
    "artigo": "Art. 112, VIII da LEP (Lei 13.964/2019)",
    "justificativa": "O art. 112 da LEP, com a redação da Lei 13.964/2019, escalona os percentuais assim para crimes hediondos com resultado morte: VI 'a' — primário: 50%; VI 'b' — reincidente: 60%; VII — primário específico: 60%; VIII — REINCIDENTE ESPECÍFICO EM CRIME HEDIONDO COM RESULTADO MORTE: 70%. Portanto, 70% é o percentual mais elevado previsto na LEP e exigido apenas nessa combinação agravada de circunstâncias."
  }
];
