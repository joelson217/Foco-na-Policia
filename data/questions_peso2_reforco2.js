// ============================================================
// QUESTIONS_PESO2_REFORCO2.JS — 18 questões inéditas cobrindo pontos
// de peso 2 que ficaram pouco abordados mesmo após o primeiro reforço:
// LEP (Detração, Sursis, Guia de Recolhimento, Monitoração Eletrônica),
// Penal (Penas, dosimetria) e Legislação (ECA, Racismo, Lei do RN).
// ============================================================

const QUESTIONS_PESO2_REFORCO2 = [
  // ---------------- LEP (8 questões) ----------------
  {
    id: 'p2r2_lep_1',
    disciplina: 'lep',
    topico: 'Livramento Condicional (Art. 131-146)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'A detração penal, aplicável também na execução, consiste em:',
    alternativas: [
      { letra: 'A', texto: 'Descontar da pena o tempo de prisão provisória, prisão administrativa ou internação já cumprido pelo agente.' },
      { letra: 'B', texto: 'Aumentar a pena em razão de reincidência.', comentario: 'Detração não aumenta pena por reincidência — trata do desconto de tempo já cumprido em prisão provisória/administrativa/internação.' },
      { letra: 'C', texto: 'Extinguir a punibilidade pelo decurso do prazo prescricional.', comentario: 'Detração não extingue a punibilidade pela prescrição — é instituto de desconto de tempo de prisão anterior na pena definitiva.' },
      { letra: 'D', texto: 'Substituir a pena privativa de liberdade por restritiva de direitos.', comentario: 'Detração não é substituição de pena — é o desconto de tempo já cumprido, mantendo a mesma espécie de pena.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 42, CP c/c LEP',
    justificativa: 'A detração computa, na pena definitiva, o tempo de prisão provisória (no Brasil ou no estrangeiro), de prisão administrativa e de internação em hospital de custódia, evitando que o condenado cumpra pena além do devido.'
  },
  {
    id: 'p2r2_lep_2',
    disciplina: 'lep',
    topico: 'Livramento Condicional (Art. 131-146)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'A suspensão condicional da pena (sursis), instituto tratado tanto no CP quanto na LEP, tem como característica:',
    alternativas: [
      { letra: 'A', texto: 'Aplicar-se apenas a penas privativas de liberdade superiores a 8 anos.', comentario: 'O sursis aplica-se a penas privativas de liberdade NÃO SUPERIORES a 2 anos (ou 4 em casos excepcionais), e não a penas superiores a 8 anos.' },
      { letra: 'B', texto: 'Suspender a execução da pena privativa de liberdade não superior a 2 anos, mediante condições fixadas pelo juiz, por período de prova.' },
      { letra: 'C', texto: 'Extinguir definitivamente a pena desde a sua concessão, sem período de prova.', comentario: 'O sursis não extingue definitivamente a pena desde a concessão — exige cumprimento das condições durante o período de prova; só após esse período a pena é extinta.' },
      { letra: 'D', texto: 'Ser incompatível com a suspensão condicional do processo.', comentario: 'O sursis não é incompatível com a suspensão condicional do processo — são institutos distintos aplicáveis em momentos processuais diferentes.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 77, CP e Art. 156-163, LEP',
    justificativa: 'O sursis suspende a execução da pena privativa de liberdade não superior a 2 anos (podendo ser 4 anos para maiores de 70 anos ou por razão de saúde), mediante condições impostas pelo juiz durante o período de prova.'
  },
  {
    id: 'p2r2_lep_3',
    disciplina: 'lep',
    topico: 'Órgãos de Execução Penal (Art. 61-82)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'A guia de recolhimento, documento expedido pelo juízo da execução para o cumprimento da pena privativa de liberdade, deve conter, entre outros elementos:',
    alternativas: [
      { letra: 'A', texto: 'Apenas o nome do condenado, sem outras informações.', comentario: 'A guia de recolhimento deve conter diversas informações além do nome do condenado (infração, tempo de pena, antecedentes etc.) — não se limita apenas ao nome.' },
      { letra: 'B', texto: 'O nome do condenado, a infração penal, o tempo de duração da pena e a data do término, além da informação sobre antecedentes e grau de instrução.' },
      { letra: 'C', texto: 'Somente o número do processo, cabendo à autoridade prisional buscar os demais dados.', comentario: 'A guia não se resume ao número do processo — a própria LEP exige que ela já contenha os dados necessários, não cabendo à autoridade prisional buscá-los.' },
      { letra: 'D', texto: 'A opinião do juiz sobre a possibilidade de ressocialização do condenado.', comentario: 'A guia de recolhimento não inclui opinião do juiz sobre ressocialização — é documento objetivo com dados formais da execução.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 106, LEP',
    justificativa: 'A guia de recolhimento deve conter, entre outros dados, a qualificação do condenado, o inteiro teor da denúncia e da sentença, a informação sobre seus antecedentes e grau de instrução, a data do término da pena e outras peças necessárias à correta execução.'
  },
  {
    id: 'p2r2_lep_4',
    disciplina: 'lep',
    topico: 'Progressão e Regressão de Regime (Art. 112-118)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A monitoração eletrônica de presos, prevista na LEP, pode ser determinada:',
    alternativas: [
      { letra: 'A', texto: 'Nas hipóteses de saída temporária no regime semiaberto e para os que cumprem pena em regime aberto ou prisão domiciliar.' },
      { letra: 'B', texto: 'Exclusivamente para presos em regime fechado, como substituto do RDD.', comentario: 'A monitoração eletrônica não é exclusiva do regime fechado nem substitui o RDD — aplica-se justamente em saídas temporárias do semiaberto e no regime aberto/prisão domiciliar.' },
      { letra: 'C', texto: 'Apenas mediante requerimento do próprio preso, nunca de ofício.', comentario: 'A monitoração pode ser determinada pelo juiz de ofício, não depende exclusivamente de requerimento do preso.' },
      { letra: 'D', texto: 'Somente após decisão do Conselho Nacional de Justiça, caso a caso.', comentario: 'A decisão sobre monitoração eletrônica cabe ao juiz da execução, não ao CNJ caso a caso.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 146-B, LEP',
    justificativa: 'A monitoração eletrônica pode ser aplicada, entre outros casos, nas saídas temporárias do regime semiaberto e para condenados em prisão domiciliar ou regime aberto, servindo como reforço de fiscalização.'
  },
  {
    id: 'p2r2_lep_5',
    disciplina: 'lep',
    topico: 'Deveres e Direitos do Preso (Art. 38-47)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'São deveres do condenado, previstos no Art. 39 da LEP:',
    alternativas: [
      { letra: 'A', texto: 'Comportamento disciplinado e cumprimento fiel da sentença; obediência ao servidor e respeito a qualquer pessoa com quem deva relacionar-se.' },
      { letra: 'B', texto: 'Trabalho voluntário, sem qualquer obrigatoriedade legal.', comentario: 'O trabalho do condenado é obrigatório (dentro de suas aptidões), não voluntário e sem obrigatoriedade legal.' },
      { letra: 'C', texto: 'Manifestação livre de opinião política dentro do estabelecimento, sem restrições.', comentario: 'A manifestação de opinião política dentro do estabelecimento não é direito irrestrito — está sujeita às normas de disciplina do estabelecimento penal.' },
      { letra: 'D', texto: 'Escolha do estabelecimento penal onde cumprirá a pena.', comentario: 'A escolha do estabelecimento penal não é dever nem direito do condenado — cabe à Administração definir a alocação.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 39, LEP',
    justificativa: 'O rol de deveres do condenado (Art. 39) inclui comportamento disciplinado e cumprimento fiel da sentença, obediência ao servidor e respeito a qualquer pessoa com quem deva relacionar-se, urbanidade, conduta oposta aos movimentos de fuga ou subversão, entre outros.'
  },
  {
    id: 'p2r2_lep_6',
    disciplina: 'lep',
    topico: 'Estabelecimentos Penais (Art. 82-104)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'Segundo a LEP, o Centro de Observação Criminológica destina-se a:',
    alternativas: [
      { letra: 'A', texto: 'Custodiar presos provisórios apenas.', comentario: 'O Centro de Observação não se destina exclusivamente a presos provisórios — realiza exames de classificação para condenados em geral.' },
      { letra: 'B', texto: 'Realizar os exames gerais e o criminológico, cujos resultados subsidiam a individualização da execução penal.' },
      { letra: 'C', texto: 'Abrigar exclusivamente presos do regime aberto.', comentario: 'O Centro de Observação não abriga exclusivamente presos do regime aberto — atende à função de exame criminológico geral.' },
      { letra: 'D', texto: 'Substituir a penitenciária nos Estados de pequeno porte.', comentario: 'O Centro de Observação não substitui a penitenciária — tem função de exame e classificação, distinta da custódia em regime fechado.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 96-98, LEP',
    justificativa: 'O Centro de Observação Criminológica realiza os exames gerais e o criminológico, cujos resultados serão encaminhados à Comissão Técnica de Classificação, subsidiando o programa individualizador da execução.'
  },
  {
    id: 'p2r2_lep_7',
    disciplina: 'lep',
    topico: 'Faltas Disciplinares e Sanções (Art. 49-60)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Antes da aplicação de sanção disciplinar por falta grave, a LEP exige:',
    alternativas: [
      { letra: 'A', texto: 'Procedimento disciplinar em que seja assegurado o direito de defesa, ouvido previamente o condenado.' },
      { letra: 'B', texto: 'Nenhuma formalidade, podendo o diretor aplicar a sanção de imediato.', comentario: 'A LEP exige, sim, formalidade — procedimento disciplinar com direito de defesa, não podendo a sanção ser aplicada de imediato sem esse processo.' },
      { letra: 'C', texto: 'Autorização exclusiva do Ministério Público, sem participação da direção do presídio.', comentario: 'A aplicação da sanção disciplinar não depende de autorização exclusiva do MP — é conduzida pela própria administração penitenciária, respeitado o direito de defesa.' },
      { letra: 'D', texto: 'Sentença judicial transitada em julgado em novo processo criminal.', comentario: 'A sanção disciplinar por falta grave não exige sentença judicial transitada em julgado em novo processo criminal — é apurada em procedimento administrativo disciplinar próprio.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 59, LEP',
    justificativa: 'Praticada a falta disciplinar, deverá ser instaurado o procedimento para sua apuração, conforme regulamento, assegurado o direito de defesa — entendimento consolidado inclusive pela Súmula Vinculante 5 (que trata da dispensa de advogado, mas não da ampla defesa em si) e pela jurisprudência do STJ.'
  },
  {
    id: 'p2r2_lep_8',
    disciplina: 'lep',
    topico: 'Trabalho do Preso (Art. 28-37)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'É correto afirmar sobre o trabalho externo do preso em regime fechado:',
    alternativas: [
      { letra: 'A', texto: 'É vedado em qualquer hipótese, sendo exclusivo do regime semiaberto.', comentario: 'O trabalho externo não é vedado ao regime fechado em qualquer hipótese — é admissível em serviços/obras públicas, com as cautelas legais.' },
      { letra: 'B', texto: 'É admissível em serviços ou obras públicas, com limite de até 10% do número de vagas, tomadas as cautelas contra fuga e em favor da disciplina.' },
      { letra: 'C', texto: 'Dispensa qualquer autorização da direção do estabelecimento.', comentario: 'O trabalho externo não dispensa autorização da direção do estabelecimento — depende de avaliação e controle da administração penitenciária.' },
      { letra: 'D', texto: 'É obrigatório para todos os presos do regime fechado, sem exceção.', comentario: 'O trabalho externo não é obrigatório para todos os presos do regime fechado — é modalidade excepcional, limitada a até 10% das vagas, sujeita a critérios específicos.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 36, LEP',
    justificativa: 'O trabalho externo é admissível para os presos em regime fechado apenas em serviço ou obras públicas realizadas por órgãos da administração direta ou indireta, ou entidades privadas, desde que tomadas as cautelas contra a fuga e em favor da disciplina, limitado a 10% do total de vagas.'
  },

  // ---------------- PENAL (5 questões) ----------------
  {
    id: 'p2r2_pen_1',
    disciplina: 'penal',
    topico: 'Penas (Art. 32-76 CP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O sistema trifásico de aplicação da pena privativa de liberdade (Art. 68 do CP) segue a seguinte ordem:',
    alternativas: [
      { letra: 'A', texto: 'Pena máxima, causas de aumento, causas de diminuição.', comentario: 'A ordem correta não começa pela "pena máxima" — inicia-se pela pena-base, fixada conforme as circunstâncias judiciais do art. 59.' },
      { letra: 'B', texto: 'Pena-base (circunstâncias judiciais), circunstâncias agravantes e atenuantes, causas de aumento e diminuição de pena.' },
      { letra: 'C', texto: 'Circunstâncias agravantes, pena-base, prescrição.', comentario: 'A prescrição não integra o sistema trifásico de dosimetria — é causa extintiva da punibilidade, analisada em momento distinto.' },
      { letra: 'D', texto: 'Qualificadoras, pena mínima, regime de cumprimento.', comentario: 'Qualificadoras não são uma das 3 fases da dosimetria (alteram os limites da pena antes da 1ª fase); o regime de cumprimento é decidido depois de fixada a pena, não é uma das 3 fases.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 68, CP',
    justificativa: 'O juiz fixa a pena-base observando as circunstâncias judiciais do Art. 59; em seguida, considera as agravantes e atenuantes; por fim, aplica as causas de diminuição e de aumento de pena.'
  },
  {
    id: 'p2r2_pen_2',
    disciplina: 'penal',
    topico: 'Penas (Art. 32-76 CP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'São circunstâncias judiciais consideradas na fixação da pena-base, segundo o Art. 59 do CP:',
    alternativas: [
      { letra: 'A', texto: 'Culpabilidade, antecedentes, conduta social, personalidade do agente, motivos, circunstâncias e consequências do crime, comportamento da vítima.' },
      { letra: 'B', texto: 'Apenas os antecedentes criminais do réu.', comentario: 'O art. 59 não se limita aos antecedentes criminais — considera um conjunto mais amplo de circunstâncias judiciais (culpabilidade, conduta social, personalidade etc.).' },
      { letra: 'C', texto: 'Exclusivamente a gravidade abstrata do tipo penal.', comentario: 'A fixação da pena-base não se baseia exclusivamente na gravidade abstrata do tipo — analisa circunstâncias concretas e subjetivas do caso e do agente.' },
      { letra: 'D', texto: 'Somente a reincidência específica.', comentario: 'A reincidência é circunstância AGRAVANTE (analisada na segunda fase), não uma das circunstâncias judiciais do art. 59 (primeira fase).' }
    ],
    gabarito: 'A',
    artigo: 'Art. 59, CP',
    justificativa: 'O juiz, ao fixar a pena-base, deve considerar culpabilidade, antecedentes, conduta social, personalidade do agente, motivos, circunstâncias e consequências do crime, bem como o comportamento da vítima.'
  },
  {
    id: 'p2r2_pen_3',
    disciplina: 'penal',
    topico: 'Penas (Art. 32-76 CP)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'São espécies de pena previstas no Código Penal brasileiro:',
    alternativas: [
      { letra: 'A', texto: 'Privativas de liberdade, restritivas de direitos e multa.' },
      { letra: 'B', texto: 'Privativas de liberdade e pena de morte, em casos excepcionais.', comentario: 'O ordenamento brasileiro veda pena de morte, salvo em caso de guerra declarada (art. 5º, XLVII, CF) — não é hipótese comum prevista no Código Penal.' },
      { letra: 'C', texto: 'Somente privativas de liberdade, sendo as demais medidas administrativas.', comentario: 'O Código Penal prevê também penas restritivas de direitos e multa, além da privativa de liberdade — não se limita a esta.' },
      { letra: 'D', texto: 'Restritivas de direitos e prisão perpétua.', comentario: 'Prisão perpétua é expressamente vedada pela Constituição (art. 5º, XLVII) — não é espécie de pena prevista no ordenamento brasileiro.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 32, CP',
    justificativa: 'As penas previstas são: privativas de liberdade (reclusão e detenção), restritivas de direitos e multa. O ordenamento brasileiro veda penas de morte (salvo guerra declarada), perpétuas, de trabalhos forçados, de banimento e cruéis (Art. 5º, XLVII, CF).'
  },
  {
    id: 'p2r2_pen_4',
    disciplina: 'penal',
    topico: 'Crimes em Espécie (mais cobrados)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'A concussão (Art. 316 do CP) caracteriza-se por:',
    alternativas: [
      { letra: 'A', texto: 'Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida.' },
      { letra: 'B', texto: 'Receber vantagem indevida oferecida espontaneamente por terceiro, sem qualquer exigência.', comentario: 'Receber vantagem oferecida espontaneamente, sem exigência, caracteriza corrupção passiva (art. 317), não concussão, que exige a conduta de EXIGIR.' },
      { letra: 'C', texto: 'Apropriar-se de bem móvel de que tem a posse em razão do cargo.', comentario: 'Apropriar-se de bem que já tem a posse em razão do cargo caracteriza peculato-apropriação (art. 312), não concussão.' },
      { letra: 'D', texto: 'Facilitar, mediante omissão, a prática de crime por terceiro.', comentario: 'Facilitar por omissão a prática de crime de terceiro caracteriza outra modalidade (como peculato-facilitação culposa, art. 312, §2º), não concussão.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 316, CP',
    justificativa: 'A concussão exige (ordena, impõe) vantagem indevida, diferentemente da corrupção passiva (Art. 317), em que o funcionário apenas solicita ou recebe (sem exigir) vantagem — a exigência é o elemento que diferencia os dois crimes.'
  },
  {
    id: 'p2r2_pen_5',
    disciplina: 'penal',
    topico: 'Teoria do Crime (Fato Típico, Ilicitude, Culpabilidade)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'São elementos da culpabilidade, na teoria finalista adotada pelo Código Penal brasileiro:',
    alternativas: [
      { letra: 'A', texto: 'Conduta, resultado, nexo causal e tipicidade.', comentario: 'Conduta, resultado, nexo causal e tipicidade são elementos do FATO TÍPICO, não da culpabilidade.' },
      { letra: 'B', texto: 'Imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa.' },
      { letra: 'C', texto: 'Dolo e culpa, deslocados para dentro da culpabilidade.', comentario: 'Na teoria finalista, dolo e culpa migraram para o FATO TÍPICO, e não permaneceram dentro da culpabilidade.' },
      { letra: 'D', texto: 'Antijuridicidade formal e material, apenas.', comentario: 'Antijuridicidade formal e material são conceitos relacionados à ILICITUDE, não à culpabilidade.' }
    ],
    gabarito: 'B',
    artigo: 'Doutrina — Teoria Finalista',
    justificativa: 'Na teoria finalista, dolo e culpa migraram para o fato típico (elemento subjetivo da conduta). A culpabilidade passou a ser composta por: imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa — é juízo de reprovação sobre o autor, não sobre o fato.'
  },

  // ---------------- LEGISLAÇÃO ESPECÍFICA (5 questões) ----------------
  {
    id: 'p2r2_leg_1',
    disciplina: 'legislacao',
    topico: 'ECA - Lei 8.069/90 (partes cobradas)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A medida socioeducativa de internação, segundo o ECA, deve observar o princípio da:',
    alternativas: [
      { letra: 'A', texto: 'Indeterminação absoluta, podendo se estender até os 21 anos sem qualquer reavaliação.', comentario: 'A internação não é de indeterminação absoluta — está sujeita a reavaliação periódica obrigatória (no máximo a cada 6 meses) e a limite de até 3 anos.' },
      { letra: 'B', texto: 'Brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento.' },
      { letra: 'C', texto: 'Regra geral aplicável a qualquer ato infracional, independente da gravidade.', comentario: 'A internação não é regra geral para qualquer ato infracional — é medida excepcional, cabível apenas em hipóteses restritas previstas no ECA (grave ameaça/violência, reiteração, descumprimento).' },
      { letra: 'D', texto: 'Equiparação total ao regime fechado do sistema penitenciário comum.', comentario: 'A internação não se equipara totalmente ao regime fechado do sistema penitenciário comum — tem regramento próprio, com foco pedagógico e socioeducativo.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 121, ECA',
    justificativa: 'A internação constitui medida privativa de liberdade sujeita aos princípios de brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento, sendo aplicada apenas quando as demais medidas se mostrarem inadequadas.'
  },
  {
    id: 'p2r2_leg_2',
    disciplina: 'legislacao',
    topico: 'ECA - Lei 8.069/90 (partes cobradas)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O prazo máximo de internação do adolescente, antes da sentença, para realização de avaliação (internação provisória), é de:',
    alternativas: [
      { letra: 'A', texto: '15 dias, improrrogáveis.', comentario: 'O prazo correto é de 45 dias, não 15 dias.' },
      { letra: 'B', texto: '30 dias, improrrogáveis.', comentario: 'O prazo correto é de 45 dias, não 30 dias.' },
      { letra: 'C', texto: '45 dias, improrrogáveis.' },
      { letra: 'D', texto: '60 dias, prorrogáveis a critério do juiz.', comentario: 'O prazo é de 45 dias, IMPRORROGÁVEL — não 60 dias prorrogáveis a critério do juiz.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 108, ECA',
    justificativa: 'A internação, antes da sentença, pode ser determinada pelo prazo máximo de 45 dias, prazo improrrogável (não podendo ser dilatado sob qualquer justificativa, segundo a jurisprudência dominante), sendo medida excepcional que exige indícios suficientes de autoria e materialidade, demonstrada a necessidade imperiosa da medida.'
  },
  {
    id: 'p2r2_leg_3',
    disciplina: 'legislacao',
    topico: 'Lei 7.716/89 - Crimes de Preconceito',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'Recusar ou impedir acesso a estabelecimento comercial, em razão de discriminação racial, é conduta tipificada na Lei 7.716/89 com pena de:',
    alternativas: [
      { letra: 'A', texto: 'Reclusão de 1 a 3 anos.' },
      { letra: 'B', texto: 'Detenção de 1 mês a 6 meses.', comentario: 'A pena correta é de reclusão de 1 a 3 anos, não detenção de 1 mês a 6 meses.' },
      { letra: 'C', texto: 'Apenas multa administrativa.', comentario: 'A conduta tem, sim, repercussão penal (reclusão), não se limitando a multa administrativa.' },
      { letra: 'D', texto: 'Reclusão de 6 a 12 anos.', comentario: 'A pena de 6 a 12 anos não corresponde à prevista para essa conduta específica na Lei 7.716/89.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 5º, Lei 7.716/89',
    justificativa: 'Recusar ou impedir acesso em estabelecimento comercial em razão de discriminação de raça, cor, etnia, religião ou procedência nacional é punido com reclusão de 1 a 3 anos.'
  },
  {
    id: 'p2r2_leg_4',
    disciplina: 'legislacao',
    topico: 'Lei 7.716/89 - Crimes de Preconceito',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'facil',
    enunciado: 'Segundo a Constituição Federal (Art. 5º, XLII), a prática do racismo constitui crime:',
    alternativas: [
      { letra: 'A', texto: 'Afiançável e prescritível, como regra geral do direito penal.', comentario: 'O racismo não é crime afiançável nem prescritível — é justamente o oposto do que a Constituição estabelece para esse crime.' },
      { letra: 'B', texto: 'Inafiançável e imprescritível, sujeito à pena de reclusão.' },
      { letra: 'C', texto: 'De menor potencial ofensivo, processado nos Juizados Especiais.', comentario: 'O racismo não é infração de menor potencial ofensivo nem processado nos Juizados Especiais — é crime inafiançável e imprescritível, com pena de reclusão.' },
      { letra: 'D', texto: 'Sujeito apenas a sanções administrativas e civis.', comentario: 'O racismo não se sujeita apenas a sanções administrativas e civis — é crime sujeito a pena de reclusão, conforme a própria Constituição determina.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 5º, XLII, CF',
    justificativa: 'A prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei — é um dos poucos crimes com essa dupla vedação constitucional expressa, junto com a ação de grupos armados contra a ordem constitucional.'
  },
  {
    id: 'p2r2_leg_5',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'No Rio Grande do Norte, o órgão da estrutura do Poder Executivo estadual responsável pela gestão do sistema penitenciário e pela atuação da Polícia Penal é:',
    alternativas: [
      { letra: 'A', texto: 'A Secretaria de Estado da Segurança Pública e da Defesa Social (SESED), da qual a administração penitenciária faz parte.' },
      { letra: 'B', texto: 'O Tribunal de Justiça do RN, diretamente.', comentario: 'O Tribunal de Justiça não administra diretamente o sistema penitenciário — sua função é jurisdicional, não de gestão administrativa do sistema prisional.' },
      { letra: 'C', texto: 'A Defensoria Pública do Estado, com exclusividade.', comentario: 'A Defensoria Pública não tem essa função administrativa — atua na defesa dos direitos dos presos, mas não gerencia o sistema penitenciário.' },
      { letra: 'D', texto: 'Um órgão federal, vinculado ao Ministério da Justiça.', comentario: 'A gestão do sistema penitenciário do RN é estadual, vinculada à SESED, não a um órgão federal do Ministério da Justiça.' }
    ],
    gabarito: 'A',
    artigo: 'Legislação organizacional do RN',
    justificativa: 'No RN, a gestão do sistema penitenciário integra a estrutura da Secretaria de Estado da Segurança Pública e da Defesa Social (SESED), da qual a Polícia Penal do RN faz parte como carreira específica, criada pela EC 104/2019 em nível constitucional federal e regulamentada por legislação estadual própria.'
  }
];
