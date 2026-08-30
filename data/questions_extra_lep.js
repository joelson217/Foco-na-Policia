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
      { "letra": "A", "texto": "Diretor do estabelecimento penal, independentemente de prévia manifestação do Ministério Público.", "comentario": "Incorreto: a saída temporária é autorizada pelo Juiz da Execução, e não pelo diretor do estabelecimento — este último apenas concede a permissão de saída (arts. 120-121 da LEP), instituto diverso. Além disso, a lei exige que sejam ouvidos o Ministério Público e a administração penitenciária antes da decisão judicial." },
      { "letra": "B", "texto": "Juiz da Execução, podendo ser concedida de forma automática após o preenchimento dos requisitos legais." },
      { "letra": "C", "texto": "Secretário de Estado da Administração Penitenciária, por delegação do Juiz da Execução.", "comentario": "Incorreto: a competência para autorizar a saída temporária é exclusiva do Juiz da Execução (art. 123 da LEP), não havendo previsão legal de delegação a Secretário de Estado." },
      { "letra": "D", "texto": "Presidente do Conselho da Comunidade, com homologação posterior pelo Juiz da Execução.", "comentario": "Incorreto: não há previsão legal de que o Presidente do Conselho da Comunidade decida sobre saída temporária; a autorização compete ao Juiz da Execução, ouvidos o Ministério Público e a administração penitenciária." }
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
      { "letra": "A", "texto": "A medida de internação em hospital de custódia aplica-se apenas ao semi-imputável, enquanto o tratamento ambulatorial aplica-se ao inimputável.", "comentario": "Incorreto: o critério legal (art. 97 do CP) não é semi-imputável x inimputável, mas sim a natureza da pena cominada ao crime — reclusão leva à internação e detenção permite tratamento ambulatorial, independentemente do grau de imputabilidade do agente." },
      { "letra": "B", "texto": "O prazo mínimo da medida de segurança é de 2 a 4 anos, determinado pelo juiz na sentença.", "comentario": "Incorreto: o prazo mínimo da medida de segurança é de 1 a 3 anos, e não de 2 a 4 anos, sendo fixado pelo juiz dentro desse intervalo." },
      { "letra": "C", "texto": "A internação em hospital de custódia é aplicada quando a pena prevista para o crime é de reclusão; o tratamento ambulatorial, quando a pena prevista é de detenção." },
      { "letra": "D", "texto": "As medidas de segurança têm prazo máximo de 10 anos, conforme previsto na LEP.", "comentario": "Incorreto: não há prazo máximo fixo de 10 anos previsto na LEP; o STF entende que a medida de segurança deve ficar limitada ao máximo da pena abstratamente cominada ao delito, não havendo um teto legal uniforme de 10 anos." }
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
      { "letra": "A", "texto": "O MP é mero fiscal da lei, não podendo requerer benefícios como progressão de regime em favor do condenado.", "comentario": "Incorreto: o MP não atua apenas como fiscal da lei — segundo entendimento do STJ, possui legitimidade ativa ampla para requerer também benefícios em favor do condenado, como a progressão de regime, conforme prevê o art. 68 da LEP." },
      { "letra": "B", "texto": "O MP deve inspecionar mensalmente os estabelecimentos penais, lavrando auto das visitas.", "comentario": "Incorreto: as atribuições do MP listadas no art. 68 da LEP referem-se a fiscalizar a regularidade formal das guias e requerer providências ao Juiz da Execução; a formulação de uma obrigação de inspeção mensal com lavratura de auto não corresponde à disciplina legal descrita para o MP na execução penal." },
      { "letra": "C", "texto": "Cabe ao MP fiscalizar a regularidade formal das guias de recolhimento e das decisões judiciais na execução.", "comentario": "Incorreto: embora o MP realmente fiscalize a regularidade formal das guias de recolhimento (art. 68, I), a lei não atribui a ele a fiscalização das decisões judiciais, o que exorbitaria a função de fiscal da lei; a alternativa também é incompleta por omitir a legitimidade do MP para requerer providências e benefícios ao condenado." },
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
      { "letra": "A", "texto": "Cumprir a prisão provisória em estabelecimento destinado ao regime semiaberto.", "comentario": "Incorreto: o preso provisório deve ser recolhido em cadeia pública (art. 102 da LEP), destinada especificamente a essa finalidade, e não em estabelecimento de regime semiaberto, que se destina a condenados definitivos." },
      { "letra": "B", "texto": "Ficar recolhidos em cadeia pública e separados dos condenados por sentença transitada em julgado." },
      { "letra": "C", "texto": "Poder ser misturados com presos definitivos, a critério do diretor do estabelecimento.", "comentario": "Incorreto: a separação entre presos provisórios e definitivos é imperativa (art. 84 da LEP), não sendo uma faculdade do diretor do estabelecimento — a mistura é vedada e pode gerar nulidade." },
      { "letra": "D", "texto": "Ser recolhidos na penitenciária mais próxima de sua residência, sem distinção de regime.", "comentario": "Incorreto: o preso provisório deve ser recolhido em cadeia pública, e não em penitenciária (destinada a condenados definitivos), sendo obrigatória a separação em relação aos presos já condenados definitivamente." }
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
      { "letra": "A", "texto": "Área mínima de 8m², ventilação forçada e instalações sanitárias individuais.", "comentario": "Incorreto: a área mínima exigida pelo art. 88 da LEP é de 6m², e não 8m²; além disso, a lei exige salubridade pela circulação de ar e condicionamento térmico adequado, não fazendo menção a 'ventilação forçada'." },
      { "letra": "B", "texto": "Área mínima de 6m², salubridade do ambiente pela circulação de ar, condicionamento térmico adequado e presença de instalações sanitárias." },
      { "letra": "C", "texto": "Área mínima de 6m², iluminação artificial permanente e ventilação mecânica.", "comentario": "Incorreto: embora a metragem de 6m² esteja correta, o art. 88 da LEP não exige iluminação artificial permanente nem ventilação mecânica, mas sim salubridade pela circulação natural de ar, insolação e condicionamento térmico adequado." },
      { "letra": "D", "texto": "Área mínima de 4m², com acesso a área de banho de sol e banheiro coletivo no pavilhão.", "comentario": "Incorreto: a área mínima legal é de 6m², e não 4m²; ademais, a lei exige aparelho sanitário na própria cela individual, e não apenas acesso a banho de sol e banheiro coletivo no pavilhão." }
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
      { "letra": "A", "texto": "16% da pena cumprida.", "comentario": "Incorreto: 16% é o percentual aplicável ao condenado primário por crime SEM violência ou grave ameaça (art. 112, I), e não ao crime cometido com violência ou grave ameaça, questionado no enunciado." },
      { "letra": "B", "texto": "20% da pena cumprida.", "comentario": "Incorreto: 20% é o percentual exigido do condenado REINCIDENTE em crime sem violência ou grave ameaça (art. 112, II), não se aplicando ao caso do condenado primário em crime violento tratado no enunciado." },
      { "letra": "C", "texto": "25% da pena cumprida." },
      { "letra": "D", "texto": "30% da pena cumprida.", "comentario": "Incorreto: 30% é o percentual exigido do condenado REINCIDENTE em crime com violência ou grave ameaça (art. 112, IV); como o enunciado trata do condenado primário, o percentual correto é 25% (inciso III)." }
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
      { "letra": "B", "texto": "A revogação por crime cometido durante o período de prova é automática, dispensando manifestação judicial.", "comentario": "Incorreto: a revogação do livramento condicional não é automática — depende de decisão judicial motivada, ainda que a causa seja a prática de novo crime durante o período de prova." },
      { "letra": "C", "texto": "O período de livramento condicional, se não revogado, computa-se integralmente como pena cumprida em qualquer hipótese de revogação.", "comentario": "Incorreto: o tempo de livramento condicional só se computa como pena cumprida quando a revogação NÃO é obrigatória; em caso de revogação obrigatória (ex.: nova condenação por crime cometido durante o período de prova), esse tempo não é computado." },
      { "letra": "D", "texto": "O prazo mínimo para concessão do livramento condicional é de 1/3 da pena para todos os condenados.", "comentario": "Incorreto: o prazo de 1/3 da pena aplica-se apenas ao condenado primário em crime sem violência ou grave ameaça; para o reincidente, o prazo exigido é de 1/2 da pena, e não 1/3 para todos os condenados." }
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
      { "letra": "B", "texto": "A remição por leitura é idêntica à remição por estudo: 1 dia remido para cada 12 horas de leitura.", "comentario": "Incorreto: essa é a regra da remição por ESTUDO (1 dia de pena remido a cada 12 horas de atividade escolar), e não da remição por LEITURA, que concede 4 dias por obra lida, com limite de 12 obras por ano." },
      { "letra": "C", "texto": "A remição por leitura aplica-se apenas aos presos em regime fechado que não têm acesso à escola.", "comentario": "Incorreto: a remição por leitura não é restrita ao regime fechado nem condicionada à ausência de acesso à escola; pode ser aplicada a presos de diferentes regimes, cumulativamente com outras formas de remição, conforme a Recomendação CNJ 44/2013." },
      { "letra": "D", "texto": "O benefício da remição por leitura exige que o preso escreva uma resenha crítica avaliada por equipe técnica penitenciária em prazo não superior a 30 dias.", "comentario": "Incorreto: embora a leitura deva ser comprovada por resenha avaliada por equipe técnica, a lei e a regulamentação não fixam o prazo de 30 dias como condição do benefício — esse detalhe não corresponde à disciplina legal do instituto." }
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
      { "letra": "A", "texto": "Visita à família; frequentar curso supletivo profissionalizante e obtenção de trabalho externo.", "comentario": "Incorreto: a obtenção de trabalho externo não é uma das finalidades da saída temporária listadas no art. 122 da LEP — trata-se de instituto distinto, disciplinado nos arts. 36-37 da LEP." },
      { "letra": "B", "texto": "Visita à família; frequentar curso de instrução; participar de atividades que concorram para o retorno ao convívio social." },
      { "letra": "C", "texto": "Visita à família; comparecimento a consultas médicas externas; participação em audiências judiciais.", "comentario": "Incorreto: comparecimento a consultas médicas e participação em audiências judiciais são finalidades da PERMISSÃO DE SAÍDA (art. 120 da LEP), concedida pelo diretor do estabelecimento em casos de urgência, e não da saída temporária autorizada pelo juiz." },
      { "letra": "D", "texto": "Visita à família; tratamento médico urgente; atividades de cunho religioso e cultural.", "comentario": "Incorreto: o tratamento médico urgente é finalidade da permissão de saída (art. 120), não da saída temporária; a LEP tampouco elenca especificamente 'atividades de cunho religioso e cultural', mas sim, de forma mais ampla, a participação em atividades que concorram para o retorno ao convívio social." }
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
      { "letra": "A", "texto": "Gerir os recursos financeiros dos estabelecimentos penais e contratar servidores temporários.", "comentario": "Incorreto: o Conselho Penitenciário é órgão consultivo e fiscalizador, sem função de gestão administrativo-financeira dos estabelecimentos penais ou de contratação de pessoal." },
      { "letra": "B", "texto": "Emitir pareceres sobre pedidos de progressão de regime, livramento condicional, indulto e comutação de pena." },
      { "letra": "C", "texto": "Substituir o Juiz da Execução nas decisões sobre saída temporária quando este estiver ausente.", "comentario": "Incorreto: o Conselho Penitenciário não exerce função jurisdicional; decisões sobre saída temporária são de competência exclusiva do Juiz da Execução, não podendo ser substituídas por parecer do Conselho." },
      { "letra": "D", "texto": "Dirigir os estabelecimentos penais estaduais em conjunto com o diretor do presídio.", "comentario": "Incorreto: o Conselho Penitenciário não dirige estabelecimentos penais — essa é atribuição do diretor do estabelecimento e da administração penitenciária, sendo o Conselho um órgão meramente consultivo e fiscalizador." }
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
      { "letra": "A", "texto": "O trabalho externo em regime fechado somente é admissível em serviços ou obras públicas, realizadas por órgãos da administração direta ou indireta.", "comentario": "Esta alternativa está CORRETA: o art. 36 da LEP realmente restringe o trabalho externo em regime fechado a serviços ou obras públicas, executados por órgãos da administração direta ou indireta. Por descrever corretamente a regra legal, não é a alternativa a ser assinalada, já que o enunciado pede a afirmativa INCORRETA." },
      { "letra": "B", "texto": "Admite-se o trabalho externo do preso em entidades privadas em regime fechado, desde que haja compatibilidade com a execução da pena." },
      { "letra": "C", "texto": "O requisito para o trabalho externo em regime fechado é o cumprimento mínimo de 1/6 da pena.", "comentario": "Esta alternativa está CORRETA: o requisito de cumprimento mínimo de 1/6 da pena para o trabalho externo em regime fechado é efetivamente previsto na LEP. Por não conter erro, não atende ao comando do enunciado, que exige a identificação da assertiva incorreta." },
      { "letra": "D", "texto": "A autorização para trabalho externo em regime fechado é do diretor do estabelecimento.", "comentario": "Esta alternativa está CORRETA: a autorização para o trabalho externo em regime fechado compete, de fato, ao diretor do estabelecimento penal. Por descrever corretamente a regra legal, não corresponde à alternativa buscada pelo enunciado (que pede a afirmativa incorreta)." }
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
      { "letra": "A", "texto": "Apagar os antecedentes criminais do condenado, tornando-o juridicamente como se nunca houvesse sido condenado.", "comentario": "Incorreto: a reabilitação não apaga os antecedentes nem torna o condenado juridicamente como se nunca tivesse sido condenado — ela apenas assegura o sigilo dos registros sobre o processo e a condenação, mantendo seus efeitos jurídicos, inclusive a reincidência em caso de novo crime dentro do prazo depurador." },
      { "letra": "B", "texto": "Assegurar ao condenado o sigilo dos registros sobre o processo e a condenação, não impede nova condenação por crime posterior." },
      { "letra": "C", "texto": "Extinguir a pena restante, caso o condenado tenha cumprido mais da metade da pena e demonstrado bom comportamento.", "comentario": "Incorreto: a reabilitação não extingue pena restante; esse efeito não corresponde ao instituto, que atua sobre os registros e o sigilo da condenação, e não sobre o cumprimento da pena em si (aproximando-se, equivocadamente, de outros institutos, como o livramento condicional)." },
      { "letra": "D", "texto": "Cancelar automaticamente todos os efeitos secundários da condenação, inclusive a perda de cargo público.", "comentario": "Incorreto: a reabilitação não cancela automaticamente todos os efeitos secundários da condenação, como a perda de cargo público — tais efeitos, quando definitivos, em regra exigem novo provimento (ex.: novo concurso) para reaquisição do cargo, não sendo restabelecidos pela simples reabilitação." }
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
      { "letra": "A", "texto": "Regressão de regime, perda de todos os dias remidos e reinício da contagem para progressão.", "comentario": "Incorreto: a perda de dias remidos em razão de falta grave é limitada a ATÉ 1/3 (art. 127 da LEP), a critério do juiz, e não a perda total de todos os dias remidos como afirma a alternativa." },
      { "letra": "B", "texto": "Regressão de regime e interrupção do prazo para a progressão de regime.", "comentario": "Incorreto: essa alternativa está incompleta — omite a perda de até 1/3 dos dias remidos, que também é consequência da falta grave (art. 127 da LEP), além da regressão de regime e da interrupção do prazo para progressão." },
      { "letra": "C", "texto": "Perda de até 1/3 dos dias remidos e interrupção do prazo para progressão de regime.", "comentario": "Incorreto: essa alternativa está incompleta — omite a regressão de regime, que também é efeito obrigatório da falta grave (art. 118, I, da LEP), além da perda de até 1/3 dos dias remidos e da interrupção do prazo para progressão." },
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
      { "letra": "A", "texto": "O condenado comete falta leve ou descumpre qualquer condição de sua condenação.", "comentario": "Incorreto: a mera prática de falta leve não autoriza a conversão da pena restritiva em privativa de liberdade; a lei exige o descumprimento INJUSTIFICADO da própria restrição imposta, situação mais específica e grave do que o descumprimento de qualquer condição." },
      { "letra": "B", "texto": "O condenado descumpre injustificadamente a restrição imposta ou sobrevém condenação irrecorrível que torne incompatível a pena restritiva." },
      { "letra": "C", "texto": "O condenado pratica novo crime doloso durante o cumprimento da pena restritiva, independentemente de condenação transitada em julgado.", "comentario": "Incorreto: para a conversão por superveniência de outro crime, a LEP exige condenação IRRECORRÍVEL (transitada em julgado) a pena privativa de liberdade cuja execução não seja suspensa — a mera prática de novo crime doloso, sem condenação definitiva, não é suficiente." },
      { "letra": "D", "texto": "O Ministério Público requerer motivadamente a conversão, a qualquer tempo.", "comentario": "Incorreto: o simples requerimento motivado do Ministério Público não converte a pena por si só; a conversão depende de decisão judicial que reconheça a ocorrência de uma das hipóteses do art. 181 da LEP (descumprimento injustificado ou condenação superveniente incompatível)." }
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
      { "letra": "A", "texto": "Regime fechado, obrigatoriamente.", "comentario": "Incorreto: o regime fechado obrigatório é reservado a penas de reclusão SUPERIORES a 8 anos (art. 33, §2º, 'a', do CP); para a faixa entre 4 e 8 anos, o regime inicial é o semiaberto." },
      { "letra": "B", "texto": "Regime semiaberto, podendo o juiz fixar o aberto se as circunstâncias forem favoráveis.", "comentario": "Incorreto: para a pena entre 4 e 8 anos, a lei fixa o semiaberto como regime inicial, não havendo previsão legal de o juiz optar livremente pelo regime aberto nessa faixa apenas por circunstâncias favoráveis — o que existe é a possibilidade de fixação de regime mais GRAVE, motivadamente (art. 59 do CP), e não mais brando." },
      { "letra": "C", "texto": "Regime semiaberto." },
      { "letra": "D", "texto": "Regime aberto, por ser pena de média gravidade.", "comentario": "Incorreto: o regime aberto é destinado a condenados não reincidentes com pena igual ou inferior a 4 anos (art. 33, §2º, 'c', do CP); para penas entre 4 e 8 anos, o regime inicial correto é o semiaberto." }
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
      { "letra": "A", "texto": "Em local afastado do centro urbano, destinada ao preso definitivo em regime fechado.", "comentario": "Incorreto: essa descrição corresponde à penitenciária, destinada a condenados definitivos em regime fechado e instalada em local afastado do centro urbano; a cadeia pública, ao contrário, deve situar-se próxima ao meio social e familiar do preso, na sede do município, e destina-se a presos provisórios." },
      { "letra": "B", "texto": "Na sede do município ou próximo a ela, destinada ao recolhimento dos presos provisórios." },
      { "letra": "C", "texto": "Em qualquer localidade, destinada ao preso em regime semiaberto com trabalho externo.", "comentario": "Incorreto: a cadeia pública não se destina ao preso em regime semiaberto com trabalho externo; a cadeia pública é reservada aos presos PROVISÓRIOS (art. 102 da LEP), e não a qualquer localidade indiscriminadamente." },
      { "letra": "D", "texto": "Próxima ao fórum da comarca, destinada ao preso em regime aberto.", "comentario": "Incorreto: o preso em regime aberto cumpre pena na Casa do Albergado (ou estabelecimento equivalente), e não na cadeia pública, que é destinada exclusivamente ao recolhimento de presos provisórios." }
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
      { "letra": "A", "texto": "Alimentação suficiente e vestuário.", "comentario": "Esta alternativa está CORRETA: a alimentação suficiente e o vestuário são efetivamente direitos do preso previstos no art. 41, incisos I e II, da LEP. Por descrever corretamente um direito assegurado, não atende ao comando do enunciado, que pede o direito atribuído de forma incorreta." },
      { "letra": "B", "texto": "Proporcionalidade na distribuição do tempo para o trabalho, o descanso e a recreação.", "comentario": "Esta alternativa está CORRETA: a proporcionalidade na distribuição do tempo para trabalho, descanso e recreação é direito do preso previsto no art. 41, VI, da LEP. Por estar corretamente descrita, não é a alternativa buscada pelo enunciado." },
      { "letra": "C", "texto": "Visita do cônjuge, da companheira, de parentes e amigos em dias determinados, independentemente de qualquer restrição por parte da administração." },
      { "letra": "D", "texto": "Audiência especial com o diretor do estabelecimento.", "comentario": "Esta alternativa está CORRETA: a audiência especial com o diretor do estabelecimento é direito do preso previsto no art. 41, XI, da LEP. Por estar corretamente descrita, não corresponde ao direito incorretamente atribuído que o enunciado pede." }
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
      { "letra": "A", "texto": "Julgar as infrações disciplinares cometidas pelos condenados nos estabelecimentos penais.", "comentario": "Incorreto: julgar infrações disciplinares não é atribuição do Conselho da Comunidade — compete ao diretor do estabelecimento, respeitado o devido processo administrativo disciplinar, sendo o Conselho um órgão de cunho social e fiscalizador externo." },
      { "letra": "B", "texto": "Visitar os estabelecimentos penais pelo menos uma vez por mês, entrevistar presos, apresentar relatórios ao Juiz da Execução e diligenciar obtenção de recursos materiais e humanos para auxiliar na reinserção social." },
      { "letra": "C", "texto": "Substituir o Conselho Penitenciário nas análises de pedidos de livramento condicional e indulto.", "comentario": "Incorreto: o Conselho da Comunidade e o Conselho Penitenciário são órgãos distintos da execução penal, cada um com atribuições próprias; não há substituição de um pelo outro na análise de livramento condicional ou indulto, que compete ao Conselho Penitenciário." },
      { "letra": "D", "texto": "Fiscalizar o cumprimento das sentenças condenatórias e emitir certidões de pena cumprida.", "comentario": "Incorreto: fiscalizar o cumprimento de sentenças e emitir certidões de pena cumprida não são atribuições do Conselho da Comunidade, que atua na visita aos estabelecimentos, entrevista aos presos e articulação de recursos para reinserção social, e não em atos processuais ou cartorários." }
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
      { "letra": "A", "texto": "É expressamente vedada pela LEP e pelo Pacote Anticrime.", "comentario": "Incorreto: a vedação à progressão por salto não decorre de texto expresso da LEP ou do Pacote Anticrime, mas sim de entendimento consolidado do STJ na Súmula 491, que exige a progressão escalonada entre os regimes." },
      { "letra": "B", "texto": "É admissível em caráter excepcional, quando o condenado já preenche os requisitos para o regime aberto e não houve vagas no regime semiaberto.", "comentario": "Incorreto: mesmo diante da falta de vagas no regime semiaberto e do preenchimento dos requisitos para o regime aberto, o STJ não admite a progressão por salto nessa hipótese — a solução adotada pela jurisprudência é a concessão de prisão domiciliar, e não o salto direto de regime." },
      { "letra": "C", "texto": "É sempre cabível, pois os requisitos de progressão devem ser analisados no momento da solicitação.", "comentario": "Incorreto: a progressão por salto não é sempre cabível — pelo contrário, a Súmula 491 do STJ a considera inadmissível de forma geral, exigindo que o condenado passe necessariamente pelo regime intermediário (semiaberto) antes de alcançar o aberto." },
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
      { "letra": "A", "texto": "A aplicação de sanção por falta grave independe de PAD quando houver confissão do condenado.", "comentario": "Incorreto: a confissão do condenado não dispensa a instauração do PAD; a jurisprudência exige a instauração do processo administrativo disciplinar com defesa técnica por advogado em toda apuração de falta grave, independentemente de confissão." },
      { "letra": "B", "texto": "O condenado tem direito à defesa técnica por advogado no PAD, sendo nula a sanção aplicada sem esse requisito." },
      { "letra": "C", "texto": "O PAD é dispensável quando a falta grave resultar em RDD, pois a gravidade da situação justifica a urgência.", "comentario": "Incorreto: o PAD também é obrigatório nos casos que podem resultar em RDD; a gravidade da situação não dispensa o devido processo administrativo disciplinar com defesa técnica, sob pena de nulidade da sanção." },
      { "letra": "D", "texto": "O condenado pode ser transferido para estabelecimento mais rigoroso antes da conclusão do PAD como medida cautelar, sem nulidade.", "comentario": "Incorreto: a transferência do condenado para estabelecimento mais rigoroso antes da conclusão do PAD, sem o devido processo com defesa técnica, configura procedimento irregular e sujeito a nulidade, e não uma medida válida sem nulidade como afirma a alternativa." }
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
      { "letra": "A", "texto": "Prisão provisória e internação em hospital de custódia, mas não o de internação civil compulsória por dependência química.", "comentario": "Incorreto: a detração penal abrange o tempo de internação em qualquer estabelecimento hospitalar ou de tratamento, o que inclui, em regra, a internação compulsória por dependência química, e não apenas a internação em hospital de custódia." },
      { "letra": "B", "texto": "Prisão provisória, internação em hospital de custódia e internação em qualquer estabelecimento de saúde." },
      { "letra": "C", "texto": "Apenas prisão provisória decretada pelo mesmo juízo.", "comentario": "Incorreto: a detração não se restringe à prisão provisória decretada pelo mesmo juízo; o art. 42 do CP é amplo e computa qualquer prisão provisória, inclusive cumprida no Brasil ou no estrangeiro, independentemente do juízo que a decretou." },
      { "letra": "D", "texto": "Prisão provisória e prisão administrativa, mas não a internação em hospital de custódia.", "comentario": "Incorreto: a internação em hospital de custódia (ou em qualquer estabelecimento hospitalar ou de tratamento) também é computada na detração penal, ao lado da prisão provisória e da prisão administrativa, conforme o art. 42 do CP." }
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
      { "letra": "A", "texto": "O preso com HIV/AIDS deve ser mantido em isolamento total dos demais presos, em ala específica.", "comentario": "Incorreto: a LEP não prevê isolamento compulsório total do preso portador de HIV/AIDS em ala específica — tal medida violaria a dignidade da pessoa humana; a lei prevê apenas que a assistência médica seja prestada em outro local quando o estabelecimento não estiver aparelhado." },
      { "letra": "B", "texto": "Quando o estabelecimento penal não estiver aparelhado para prover a assistência médica necessária, esta será prestada em outro local, mediante autorização da direção." },
      { "letra": "C", "texto": "O tratamento do HIV/AIDS é encargo exclusivo do preso, devendo custear as despesas com recursos próprios.", "comentario": "Incorreto: a assistência à saúde do preso, incluindo o tratamento de HIV/AIDS, é dever do Estado (art. 14 da LEP), não podendo ser transferida como encargo exclusivo do preso, que não deve custear tais despesas com recursos próprios." },
      { "letra": "D", "texto": "O preso que comprove ser portador de doença grave e incurável deve ser automaticamente colocado em prisão domiciliar.", "comentario": "Incorreto: a colocação em prisão domiciliar por doença grave não é automática — depende de decisão judicial fundamentada, nos termos do art. 318, II, do CPP, e não decorre diretamente da comprovação da doença." }
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
      { "letra": "A", "texto": "Julgar os pedidos de progressão de regime em substituição ao Juiz da Execução.", "comentario": "Incorreto: a CTC não tem função jurisdicional; o julgamento de pedidos de progressão de regime é atribuição exclusiva do Juiz da Execução, cabendo à CTC apenas subsidiar tecnicamente essa decisão por meio do exame criminológico." },
      { "letra": "B", "texto": "Proporcionar a individualização da pena mediante exame criminológico e elaboração do programa individualizador da pena." },
      { "letra": "C", "texto": "Deliberar sobre questões administrativas do estabelecimento, como a escala de trabalho dos funcionários.", "comentario": "Incorreto: deliberar sobre a escala de trabalho dos funcionários é matéria de gestão administrativa do estabelecimento penal, e não atribuição da CTC, cuja finalidade é a individualização da execução penal do condenado." },
      { "letra": "D", "texto": "Impor as sanções disciplinares previstas na LEP após processo disciplinar.", "comentario": "Incorreto: a imposição de sanções disciplinares após processo disciplinar é atribuição do diretor do estabelecimento penal, e não da Comissão Técnica de Classificação, que tem função de classificação e individualização da pena." }
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
      { "letra": "A", "texto": "Apenas ao condenado definitivo com pena em regime fechado que tenha praticado falta grave.", "comentario": "Incorreto: o RDD não se limita ao condenado definitivo em regime fechado que praticou falta grave — a lei também o autoriza para o preso PROVISÓRIO, e a hipótese de alto risco ou suspeita de vínculo com organização criminosa é fundamento autônomo, independente de falta grave prévia." },
      { "letra": "B", "texto": "Ao condenado ou ao preso provisório que apresente alto risco para a ordem e a segurança, ou sobre o qual recaiam fundadas suspeitas de envolvimento ou participação em organização criminosa, associação criminosa ou milícia privada." },
      { "letra": "C", "texto": "Exclusivamente ao preso que comandar motins ou rebeliões dentro do estabelecimento penal.", "comentario": "Incorreto: comandar motins ou rebeliões é apenas uma das situações que pode gerar RDD por falta grave, mas a lei prevê hipóteses mais amplas, como o alto risco para a ordem e segurança e a fundada suspeita de envolvimento em organização criminosa, associação criminosa ou milícia privada." },
      { "letra": "D", "texto": "Apenas ao preso que tenha participado de organização criminosa e seja condenado definitivamente por esse crime.", "comentario": "Incorreto: o RDD não exige condenação definitiva por participação em organização criminosa — basta a existência de fundadas suspeitas de envolvimento ou participação em ORCRIM, associação criminosa ou milícia, conforme o art. 52, II, da LEP." }
    ],
    "gabarito": "B",
    "artigo": "Art. 52, I e II da LEP (redação dada pela Lei 13.964/2019)",
    "justificativa": "O art. 52 da LEP, alterado pelo Pacote Anticrime, prevê o RDD para: I — preso que apresente ALTO RISCO para a ordem e segurança do estabelecimento penal ou da sociedade; II — preso sobre o qual recaiam FUNDADAS SUSPEITAS de envolvimento ou participação em ORCRIM, associação criminosa ou milícia. O RDD se aplica tanto ao CONDENADO quanto ao PRESO PROVISÓRIO. Não exige condenação por ORCRIM — bastam fundadas suspeitas. O prazo é de até 2 anos, sem prejuízo de repetição da sanção em caso de nova falta grave de mesma espécie (não se trata de renovação automática, mas de nova sanção diante de novo fato)."
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
      { "letra": "A", "texto": "Apelação, com efeito devolutivo e suspensivo.", "comentario": "Incorreto: o recurso cabível é o agravo em execução, e não a apelação; ademais, o agravo em execução, em regra, NÃO possui efeito suspensivo, ao contrário do que afirma a alternativa." },
      { "letra": "B", "texto": "Recurso em Sentido Estrito, com prazo de 5 dias.", "comentario": "Incorreto: o recurso próprio da execução penal é o AGRAVO EM EXECUÇÃO (art. 197 da LEP), que apenas segue o RITO do recurso em sentido estrito — não se trata do RESE propriamente dito, ainda que o prazo de 5 dias esteja correto." },
      { "letra": "C", "texto": "Agravo em execução, que segue o rito do recurso em sentido estrito, sem efeito suspensivo." },
      { "letra": "D", "texto": "Embargos de declaração, com prazo de 2 dias, quando houver omissão ou contradição.", "comentario": "Incorreto: os embargos de declaração servem para sanar omissão ou contradição em uma decisão, mas não são o recurso ordinário cabível contra as decisões do Juiz da Execução em geral — esse papel é do agravo em execução, previsto no art. 197 da LEP." }
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
      { "letra": "A", "texto": "Exclusivamente para o preso em saída temporária do regime semiaberto.", "comentario": "Incorreto: essa alternativa está incompleta — o art. 146-B da LEP também autoriza a monitoração eletrônica quando o juiz determinar a prisão domiciliar, hipótese não mencionada nesta alternativa." },
      { "letra": "B", "texto": "Para o preso autorizado à saída temporária do regime semiaberto e para o condenado com pena privativa de liberdade de regime aberto." },
      { "letra": "C", "texto": "Para qualquer condenado que manifeste interesse voluntariamente em ser monitorado.", "comentario": "Incorreto: a monitoração eletrônica não é aplicada por mera manifestação voluntária de interesse do condenado — depende de decisão judicial fundamentada nas hipóteses legais específicas do art. 146-B da LEP (saída temporária no semiaberto ou prisão domiciliar)." },
      { "letra": "D", "texto": "Apenas como substitutivo da prisão preventiva, mediante requerimento do réu.", "comentario": "Incorreto: a monitoração eletrônica como substitutivo da prisão preventiva é instituto do processo penal cautelar (CPP), distinto da monitoração prevista na LEP para saída temporária no semiaberto e prisão domiciliar, tratada nesta questão." }
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
      { "letra": "A", "texto": "É expedida pelo diretor do estabelecimento penal ao receber o condenado.", "comentario": "Incorreto: a guia de recolhimento é expedida pela autoridade JUDICIÁRIA (o juiz), e não pelo diretor do estabelecimento penal, que apenas recebe o condenado com base na guia já expedida." },
      { "letra": "B", "texto": "É expedida pela autoridade judiciária após o trânsito em julgado da sentença condenatória e encaminhada à autoridade administrativa." },
      { "letra": "C", "texto": "Pode ser expedida antes do trânsito em julgado, se o condenado tiver antecedentes criminais.", "comentario": "Incorreto: a guia de recolhimento somente pode ser expedida após o trânsito em julgado da sentença condenatória (art. 105 da LEP); não há exceção legal que permita sua expedição antecipada em razão de antecedentes criminais do condenado." },
      { "letra": "D", "texto": "É emitida pelo Ministério Público após aprovação do Conselho Penitenciário.", "comentario": "Incorreto: a guia de recolhimento é expedida pelo Juiz da Execução, e não pelo Ministério Público, tampouco depende de aprovação do Conselho Penitenciário, que não tem essa atribuição." }
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
      { "letra": "A", "texto": "A mulher presa deve ser transferida para hospital público durante o período do parto, retornando ao estabelecimento penal logo após.", "comentario": "Incorreto: a LEP determina que os estabelecimentos penais femininos sejam dotados de seção própria para gestante e parturiente e de berçário, não havendo previsão de que o parto ocorra necessariamente em hospital público externo com retorno imediato ao estabelecimento como regra geral única." },
      { "letra": "B", "texto": "Os estabelecimentos destinados às mulheres serão dotados de berçário, onde as condenadas possam amamentar seus filhos, e de seção para gestante e parturiente." },
      { "letra": "C", "texto": "A mulher gestante tem direito automático à prisão domiciliar, independentemente do tipo de crime.", "comentario": "Incorreto: a prisão domiciliar da mulher gestante não é automática — depende de decisão judicial fundamentada, nos termos do art. 318 do CPP, que pode considerar as circunstâncias do caso, inclusive o tipo de crime." },
      { "letra": "D", "texto": "Os filhos de mulheres presas devem ser encaminhados para adoção em até 90 dias após o nascimento.", "comentario": "Incorreto: não há previsão legal de encaminhamento compulsório dos filhos de mulheres presas para adoção em prazo de 90 dias; ao contrário, a LEP busca assegurar a convivência familiar, prevendo berçário e creche nos estabelecimentos femininos." }
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
      { "letra": "A", "texto": "Condenado não reincidente em crime doloso com pena privativa de liberdade não superior a 2 anos.", "comentario": "Esta alternativa descreve corretamente uma hipótese de concessão do sursis SIMPLES (condenado não reincidente, crime doloso, pena não superior a 2 anos), prevista no art. 77 do CP. Por ser uma hipótese válida de concessão, não corresponde à exceção pedida pelo enunciado." },
      { "letra": "B", "texto": "Condenado idoso (maior de 70 anos) com pena não superior a 4 anos (sursis etário).", "comentario": "Esta alternativa descreve corretamente o sursis ETÁRIO, aplicável ao condenado maior de 70 anos com pena não superior a 4 anos (art. 77, §2º, do CP). Por ser uma hipótese válida de concessão, não é a exceção buscada pelo enunciado." },
      { "letra": "C", "texto": "Condenado por crime hediondo que seja primário e de bons antecedentes, pela excepcionalidade do caso." },
      { "letra": "D", "texto": "Condenado que sofre de doença grave com pena não superior a 4 anos (sursis humanitário).", "comentario": "Esta alternativa descreve corretamente o sursis HUMANITÁRIO, aplicável ao condenado com doença grave e pena não superior a 4 anos (art. 77, §2º, do CP). Por se tratar de hipótese válida de concessão, não corresponde à exceção pedida pelo enunciado." }
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
      { "letra": "A", "texto": "50% da pena.", "comentario": "Incorreto: 50% é o percentual exigido do condenado PRIMÁRIO em crime hediondo ou equiparado com resultado morte (art. 112, VI, 'a'), e não do reincidente específico questionado no enunciado." },
      { "letra": "B", "texto": "60% da pena.", "comentario": "Incorreto: 60% é o percentual aplicável ao condenado REINCIDENTE em crime hediondo ou equiparado, mas SEM a exigência de resultado morte (art. 112, VII); no caso do enunciado, que envolve resultado morte e reincidência específica, o percentual correto é 70%." },
      { "letra": "C", "texto": "66,67% (dois terços) da pena.", "comentario": "Incorreto: o percentual de 66,67% (dois terços) não corresponde a nenhuma das frações previstas no art. 112 da LEP para a progressão de regime, sendo um valor sem correspondência legal nesse contexto." },
      { "letra": "D", "texto": "70% da pena." }
    ],
    "gabarito": "D",
    "artigo": "Art. 112, VIII da LEP (Lei 13.964/2019)",
    "justificativa": "O art. 112 da LEP, com a redação da Lei 13.964/2019, prevê os seguintes percentuais relacionados a crime hediondo ou equiparado com resultado morte: inciso VI, alínea 'a' — condenado PRIMÁRIO: 50%; inciso VIII — condenado REINCIDENTE ESPECÍFICO: 70%. O inciso VII (60%) trata do reincidente em crime hediondo ou equiparado SEM exigência de resultado morte. Portanto, 70% é o percentual mais elevado previsto na LEP, exigido apenas para o reincidente específico em crime hediondo ou equiparado com resultado morte, vedado o livramento condicional."
  },

  {
    "id": "lep_extra_31",
    "disciplina": "lep",
    "topico": "Lei 11.671/2008 - Sistema Penitenciário Federal",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A inclusão de um preso em estabelecimento penal federal de segurança máxima, segundo a Lei nº 11.671/2008, é medida:",
    "alternativas": [
      { "letra": "A", "texto": "Ordinária, aplicável a todo condenado por crime hediondo, independentemente de justificativa específica.", "comentario": "Incorreto: a inclusão em estabelecimento penal federal não é medida ordinária nem se aplica automaticamente a todo condenado por crime hediondo — é medida excepcional, que exige justificativa específica relacionada à segurança pública ou do próprio preso." },
      { "letra": "B", "texto": "Excepcional, cabível quando a medida se justifique no interesse da segurança pública ou do próprio preso, e por prazo determinado." },
      { "letra": "C", "texto": "Definitiva e obrigatória para presos em regime fechado, sem possibilidade de retorno ao estabelecimento de origem.", "comentario": "Incorreto: a inclusão é sempre por PRAZO DETERMINADO, podendo o preso retornar ao estabelecimento de origem ao término do período (ou de eventual renovação), não se tratando de medida definitiva e irreversível." },
      { "letra": "D", "texto": "Decidida exclusivamente pelo diretor do estabelecimento de origem, sem participação do Poder Judiciário.", "comentario": "Incorreto: a inclusão em estabelecimento penal federal depende de decisão JUDICIAL motivada, não podendo ser decidida exclusivamente pelo diretor do estabelecimento de origem, sem participação do Poder Judiciário." }
    ],
    "gabarito": "B",
    "artigo": "Art. 3º da Lei 11.671/2008",
    "justificativa": "A inclusão em estabelecimento penal federal de segurança máxima é medida excepcional, cabível quando justificada no interesse da segurança pública ou do próprio preso, sempre por prazo determinado e mediante decisão judicial motivada."
  },
  {
    "id": "lep_extra_32",
    "disciplina": "lep",
    "topico": "Lei 11.671/2008 - Prazo de Permanência",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Após as alterações promovidas pela Lei nº 13.964/2019 (Pacote Anticrime), o prazo de permanência do preso em estabelecimento penal federal de segurança máxima passou a ser de:",
    "alternativas": [
      { "letra": "A", "texto": "360 dias, prazo original mantido sem alteração.", "comentario": "Incorreto: o prazo original de 360 dias foi ampliado pela Lei 13.964/2019 (Pacote Anticrime) para até 3 anos, renovável por iguais períodos, não permanecendo inalterado." },
      { "letra": "B", "texto": "Até 3 anos, renovável por iguais períodos, mediante pedido motivado do juízo de origem." },
      { "letra": "C", "texto": "1 ano, improrrogável.", "comentario": "Incorreto: o prazo não é de 1 ano improrrogável — a Lei 13.964/2019 fixou o prazo em até 3 anos, admitindo renovação por iguais períodos mediante pedido motivado do juízo de origem." },
      { "letra": "D", "texto": "Prazo indeterminado, sem necessidade de renovação ou revisão periódica.", "comentario": "Incorreto: o prazo de permanência é determinado (até 3 anos), havendo necessidade de comunicação e manifestação do juízo de origem para eventual renovação, e não prazo indeterminado sem revisão periódica." }
    ],
    "gabarito": "B",
    "artigo": "Art. 10 da Lei 11.671/2008 (redação da Lei 13.964/2019)",
    "justificativa": "O Pacote Anticrime ampliou o prazo original de 360 dias para até 3 anos, renovável por iguais períodos quando solicitado com motivação pelo juízo de origem e desde que persistam os motivos que determinaram a transferência."
  },
  {
    "id": "lep_extra_33",
    "disciplina": "lep",
    "topico": "Lei 11.671/2008 - Comunicação de Renovação",
    "peso": 2,
    "dificuldade": "dificil",
    "enunciado": "Segundo a Lei nº 11.671/2008, com quantos dias de antecedência o Departamento Penitenciário Nacional (Depen) deve comunicar o juízo de origem sobre o fim do prazo de permanência do preso em estabelecimento federal, solicitando manifestação sobre a necessidade de renovação?",
    "alternativas": [
      { "letra": "A", "texto": "10 dias.", "comentario": "Incorreto: o prazo de antecedência exigido pelo art. 10, §1º, da Lei 11.671/2008 é de 60 dias, e não de 10 dias, período insuficiente para a manifestação adequada do juízo de origem sobre a renovação." },
      { "letra": "B", "texto": "30 dias.", "comentario": "Incorreto: o prazo correto é de 60 dias, e não de 30 dias, conforme o art. 10, §1º, da Lei 11.671/2008." },
      { "letra": "C", "texto": "60 dias." },
      { "letra": "D", "texto": "120 dias.", "comentario": "Incorreto: o prazo correto é de 60 dias, e não de 120 dias; a lei fixa esse período como suficiente e necessário para a manifestação do juízo de origem, sem estendê-lo a 120 dias." }
    ],
    "gabarito": "C",
    "artigo": "Art. 10, §1º da Lei 11.671/2008",
    "justificativa": "A comunicação deve ocorrer com 60 dias de antecedência ao término do prazo, solicitando ao juízo de origem manifestação sobre a necessidade de renovação da permanência."
  },
  {
    "id": "lep_extra_34",
    "disciplina": "lep",
    "topico": "Resolução CNPCP - Revista Pessoal e Vedação à Revista Vexatória",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "As resoluções do Conselho Nacional de Política Criminal e Penitenciária (CNPCP) sobre revista pessoal em estabelecimentos prisionais determinam que:",
    "alternativas": [
      { "letra": "A", "texto": "A revista deve priorizar equipamentos eletrônicos (detectores de metal, raio-x, scanners corporais), sendo vedada qualquer forma de revista vexatória, desumana ou degradante." },
      { "letra": "B", "texto": "A revista vexatória é obrigatória para todos os visitantes, independentemente de existirem meios eletrônicos disponíveis.", "comentario": "Incorreto: a orientação normativa vai exatamente no sentido oposto — veda a revista vexatória, desumana ou degradante, priorizando o uso de equipamentos eletrônicos sempre que disponíveis, e não tornando a revista vexatória obrigatória." },
      { "letra": "C", "texto": "Apenas visitantes do sexo feminino podem ser submetidas a revista íntima, sem qualquer restrição.", "comentario": "Incorreto: a norma não restringe a revista íntima a visitantes do sexo feminino 'sem qualquer restrição' — pelo contrário, veda expressamente práticas vexatórias e degradantes para qualquer visitante, priorizando meios eletrônicos não invasivos." },
      { "letra": "D", "texto": "A revista pessoal foi totalmente abolida, não podendo ser realizada em nenhuma hipótese.", "comentario": "Incorreto: a revista pessoal não foi abolida — ela continua sendo realizada, preferencialmente por meios eletrônicos; o que se veda é especificamente a forma vexatória, desumana ou degradante de revista, e não a revista em si." }
    ],
    "gabarito": "A",
    "artigo": "Resolução CNPCP (matéria atualmente tratada na Resolução nº 28/2022)",
    "justificativa": "As resoluções do CNPCP sobre o tema recomendam o uso prioritário de equipamentos eletrônicos para a revista, vedando expressamente práticas vexatórias, desumanas ou degradantes — entendimento reforçado pelo STF (Tema 998 de repercussão geral) e seguido por diversos estados que já proibiram a revista vexatória em suas unidades prisionais."
  },
  {
    "id": "lep_extra_35",
    "disciplina": "lep",
    "topico": "Decreto 7.626/2011 - Educação no Sistema Prisional",
    "peso": 1,
    "dificuldade": "medio",
    "enunciado": "O Decreto nº 7.626/2011 institui, no âmbito do sistema prisional brasileiro:",
    "alternativas": [
      { "letra": "A", "texto": "O Plano Estratégico de Educação no Âmbito do Sistema Prisional (PEESP), com o objetivo de ampliar e qualificar a oferta educacional às pessoas em privação de liberdade." },
      { "letra": "B", "texto": "O Sistema Penitenciário Federal de segurança máxima.", "comentario": "Incorreto: o Sistema Penitenciário Federal de segurança máxima é disciplinado pela Lei 11.671/2008, e não pelo Decreto 7.626/2011, que trata especificamente da educação no sistema prisional." },
      { "letra": "C", "texto": "O Regime Disciplinar Diferenciado (RDD).", "comentario": "Incorreto: o Regime Disciplinar Diferenciado é instituto previsto no art. 52 da LEP, e não instituído pelo Decreto 7.626/2011, cujo objeto é o PEESP (educação no sistema prisional)." },
      { "letra": "D", "texto": "O Conselho Nacional de Política Criminal e Penitenciária.", "comentario": "Incorreto: o Conselho Nacional de Política Criminal e Penitenciária é órgão previsto na própria LEP, não sendo criado pelo Decreto 7.626/2011, que trata da política educacional no sistema prisional." }
    ],
    "gabarito": "A",
    "artigo": "Decreto nº 7.626/2011",
    "justificativa": "O Decreto institui o PEESP (Plano Estratégico de Educação no Âmbito do Sistema Prisional), com o objetivo de ampliar e qualificar a oferta de educação às pessoas em privação de liberdade nos estabelecimentos penais do país."
  },
  {
    "id": "lep_extra_36",
    "disciplina": "lep",
    "topico": "Resolução CNPCP nº 9/2009 - Proporção Agente-Preso",
    "peso": 1,
    "dificuldade": "dificil",
    "enunciado": "A Resolução CNPCP nº 9/2009 estabelece diretrizes sobre:",
    "alternativas": [
      { "letra": "A", "texto": "A proporção adequada entre o número de agentes penitenciários e a população carcerária, como parâmetro de segurança e gestão." },
      { "letra": "B", "texto": "A remuneração mínima dos policiais penais em todo o território nacional.", "comentario": "Incorreto: a Resolução CNPCP nº 9/2009 não trata de remuneração de policiais penais — seu objeto é a proporção adequada entre agentes penitenciários e população carcerária, parâmetro de gestão e segurança." },
      { "letra": "C", "texto": "O tempo máximo de estágio probatório dos agentes penitenciários.", "comentario": "Incorreto: o tempo de estágio probatório dos agentes penitenciários não é objeto dessa resolução, que trata da proporção agente-preso como parâmetro de segurança e gestão prisional." },
      { "letra": "D", "texto": "A criação de um órgão nacional para substituir as secretarias estaduais de administração penitenciária.", "comentario": "Incorreto: a resolução não cria nenhum órgão nacional substitutivo das secretarias estaduais — seu conteúdo está restrito a diretrizes sobre a proporção entre agentes penitenciários e população carcerária." }
    ],
    "gabarito": "A",
    "artigo": "Resolução CNPCP nº 9/2009",
    "justificativa": "A resolução estabelece diretrizes sobre a proporção adequada entre agentes penitenciários e população carcerária, parâmetro relevante para a gestão da segurança nos estabelecimentos penais."
  },
  {
    "id": "lep_extra_37",
    "disciplina": "lep",
    "topico": "Resolução CNPCP nº 8/2011 - Assistência Religiosa",
    "peso": 1,
    "dificuldade": "facil",
    "enunciado": "A Resolução CNPCP nº 8/2011, sobre assistência religiosa nos estabelecimentos penais, assegura:",
    "alternativas": [
      { "letra": "A", "texto": "A liberdade de culto e o acesso a diferentes credos religiosos pelas pessoas privadas de liberdade." },
      { "letra": "B", "texto": "A obrigatoriedade de participação em cultos de uma única religião oficial do estabelecimento.", "comentario": "Incorreto: a resolução assegura justamente o oposto — a liberdade de culto e o acesso a diferentes credos religiosos, e não a obrigatoriedade de participação em cultos de uma religião única ou oficial do estabelecimento." },
      { "letra": "C", "texto": "A vedação total de qualquer prática religiosa dentro dos estabelecimentos penais.", "comentario": "Incorreto: a resolução não veda a prática religiosa — pelo contrário, assegura o direito à assistência religiosa e à liberdade de culto dos presos, em harmonia com o art. 24 da LEP e o art. 5º, VI, da Constituição Federal." },
      { "letra": "D", "texto": "A substituição da assistência religiosa por atendimento psicológico obrigatório.", "comentario": "Incorreto: a assistência religiosa e a assistência psicológica são direitos autônomos e distintos previstos na LEP, não havendo substituição de uma pela outra — a resolução trata especificamente da garantia à liberdade de culto." }
    ],
    "gabarito": "A",
    "artigo": "Resolução CNPCP nº 8/2011",
    "justificativa": "A resolução assegura a liberdade de culto e o acesso a diferentes credos, em harmonia com o direito constitucional à liberdade religiosa (art. 5º, VI, CF) e com o art. 24 da LEP, que já prevê a assistência religiosa como direito do preso."
  },
  {
    "id": "lep_extra_38",
    "disciplina": "lep",
    "topico": "Portaria Interministerial nº 210/2014 - Mulheres em Privação de Liberdade",
    "peso": 1,
    "dificuldade": "medio",
    "enunciado": "A Portaria Interministerial MJ/SPM nº 210/2014 institui:",
    "alternativas": [
      { "letra": "A", "texto": "A Política Nacional de Atenção às Mulheres em Situação de Privação de Liberdade, com diretrizes específicas de gênero (saúde, maternidade, convivência familiar)." },
      { "letra": "B", "texto": "A extinção de estabelecimentos penais femininos, unificando-os aos masculinos.", "comentario": "Incorreto: a portaria não extingue nem unifica estabelecimentos penais femininos aos masculinos — ao contrário, reconhece a necessidade de diretrizes específicas de gênero para as mulheres em privação de liberdade, o que pressupõe tratamento diferenciado." },
      { "letra": "C", "texto": "O Regime Disciplinar Diferenciado exclusivo para mulheres.", "comentario": "Incorreto: a portaria não institui nenhum regime disciplinar diferenciado exclusivo para mulheres; seu objeto são diretrizes de gênero relacionadas a saúde, maternidade e convivência familiar." },
      { "letra": "D", "texto": "A vedação à visita de filhos menores de idade a mães encarceradas.", "comentario": "Incorreto: a portaria busca justamente assegurar a convivência familiar das mulheres presas com seus filhos, e não vedar essa visita — indo no sentido oposto ao afirmado pela alternativa." }
    ],
    "gabarito": "A",
    "artigo": "Portaria Interministerial MJ/SPM nº 210/2014",
    "justificativa": "A portaria institui política nacional com diretrizes específicas para as necessidades de gênero das mulheres em privação de liberdade, incluindo saúde, maternidade e convivência familiar."
  },
  {
    "id": "lep_extra_39",
    "disciplina": "lep",
    "topico": "Banco Nacional de Perfis Genéticos",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Após as alterações da Lei nº 13.964/2019 (Pacote Anticrime) na Lei nº 12.037/2009, a identificação do perfil genético, mediante extração de DNA por técnica adequada e indolor, passou a ser:",
    "alternativas": [
      { "letra": "A", "texto": "Facultativa, a critério exclusivo do condenado.", "comentario": "Incorreto: a coleta de perfil genético deixou de ser facultativa para os casos previstos em lei — tornou-se OBRIGATÓRIA para condenados por crime doloso com violência grave contra pessoa ou crime hediondo, não dependendo de critério exclusivo do condenado." },
      { "letra": "B", "texto": "Obrigatória para condenados por crime doloso praticado com violência de natureza grave contra pessoa, ou por crime hediondo, no momento do ingresso no estabelecimento prisional." },
      { "letra": "C", "texto": "Vedada em qualquer hipótese, por violar a dignidade da pessoa humana.", "comentario": "Incorreto: a coleta não é vedada — pelo contrário, passou a ser obrigatória nas hipóteses legais, sendo realizada por técnica adequada e indolor, o que afasta a alegação de violação à dignidade da pessoa humana nesses termos." },
      { "letra": "D", "texto": "Aplicável apenas a estrangeiros em cumprimento de pena no Brasil.", "comentario": "Incorreto: a obrigatoriedade da coleta de perfil genético aplica-se a todos os condenados que se enquadrem nas hipóteses legais (crime doloso com violência grave ou hediondo), independentemente de nacionalidade, não sendo restrita a estrangeiros." }
    ],
    "gabarito": "B",
    "artigo": "Lei 12.037/2009 (redação da Lei 13.964/2019)",
    "justificativa": "A identificação do perfil genético tornou-se obrigatória para condenados por crime doloso com violência grave contra pessoa ou crime hediondo, com a coleta de DNA por técnica adequada e indolor no momento do ingresso no estabelecimento prisional, alimentando o banco nacional de perfis genéticos."
  },
  {
    "id": "lep_extra_40",
    "disciplina": "lep",
    "topico": "Portaria PNAISP - Saúde no Sistema Prisional",
    "peso": 1,
    "dificuldade": "medio",
    "enunciado": "A Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade (PNAISP), instituída por portaria interministerial, tem como principal objetivo:",
    "alternativas": [
      { "letra": "A", "texto": "Garantir o acesso das pessoas privadas de liberdade às ações e serviços de saúde no âmbito do Sistema Único de Saúde (SUS), dentro e a partir dos estabelecimentos penais." },
      { "letra": "B", "texto": "Transferir a responsabilidade pela saúde dos presos exclusivamente para planos de saúde privados contratados pelo próprio preso.", "comentario": "Incorreto: a PNAISP não transfere a responsabilidade pela saúde do preso a planos privados custeados pelo próprio preso — busca justamente garantir o acesso gratuito às ações e serviços do SUS dentro e a partir dos estabelecimentos penais." },
      { "letra": "C", "texto": "Restringir o atendimento de saúde apenas a casos de emergência com risco iminente de morte.", "comentario": "Incorreto: a PNAISP tem por objetivo a atenção INTEGRAL à saúde das pessoas privadas de liberdade, e não restringir o atendimento a casos de emergência com risco iminente de morte." },
      { "letra": "D", "texto": "Substituir integralmente a assistência à saúde por assistência religiosa nos estabelecimentos penais.", "comentario": "Incorreto: a assistência à saúde e a assistência religiosa são direitos autônomos e distintos previstos na legislação, não havendo substituição de uma pela outra; a PNAISP trata especificamente do acesso à saúde via SUS." }
    ],
    "gabarito": "A",
    "artigo": "Portaria Interministerial MS/MJ nº 1/2014 (PNAISP)",
    "justificativa": "A PNAISP busca garantir o acesso das pessoas privadas de liberdade às ações e aos serviços de saúde do SUS, articulando a atenção básica prisional com a rede pública de saúde, em cumprimento ao direito à saúde previsto na LEP e na Constituição."
  }
];
