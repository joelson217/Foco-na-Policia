// ============================================================
// QUESTIONS_PESO2_REFORCO.JS — 40 questões inéditas focadas nas 3
// disciplinas de peso 2 (LEP, Legislação Específica, Penal/Processual),
// que juntas valem 62% da nota do edital PPRN-RN.
// Prioridade: Lei 13.260/16 (Antiterrorismo), que não tinha NENHUMA
// questão no banco, + reforço dos temas "mostCobrado" do edital.js.
// ============================================================

const QUESTIONS_PESO2_REFORCO = [
  // ---------------- LEP (12 questões) ----------------
  {
    id: 'p2r_lep_1',
    disciplina: 'lep',
    topico: 'Remição de Pena (Art. 126-130)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O condenado que cumpre pena em regime aberto pode remir pena por meio de:',
    alternativas: [
      { letra: 'A', texto: 'Trabalho e estudo, nas mesmas condições do regime fechado.', comentario: 'No regime aberto, apenas o estudo permite remição (art. 126, §6º) — o trabalho não gera remição nesse regime, ao contrário do que a alternativa afirma.' },
      { letra: 'B', texto: 'Apenas estudo, já que o trabalho não é fiscalizado nesse regime.' },
      { letra: 'C', texto: 'Nenhuma forma de remição, pois já está em regime mais brando.', comentario: 'A remição pelo estudo é, sim, possível no regime aberto — não é correto dizer que nenhuma forma de remição se aplica.' },
      { letra: 'D', texto: 'Apenas trabalho, sendo o estudo reservado ao regime fechado.', comentario: 'É o oposto: no regime aberto é o ESTUDO que gera remição, não o trabalho.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 126, §6º, LEP',
    justificativa: 'O condenado em regime aberto ou semiaberto e o que cumpre pena em livramento condicional podem remir, pelo estudo, parte do tempo de execução da pena ou do período de prova, desde que o estudo não seja incompatível com a execução da pena.'
  },
  {
    id: 'p2r_lep_2',
    disciplina: 'lep',
    topico: 'Saída Temporária (Art. 122-125)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'É requisito para a concessão de saída temporária ao condenado em regime semiaberto, além do comportamento adequado:',
    alternativas: [
      { letra: 'A', texto: 'Cumprimento de 1/6 da pena, se o condenado for primário.' },
      { letra: 'B', texto: 'Cumprimento de 1/3 da pena, independentemente de reincidência.', comentario: 'O percentual correto é 1/6 para o condenado primário (1/4 se reincidente), não 1/3 independentemente de reincidência.' },
      { letra: 'C', texto: 'Autorização prévia do Conselho Penitenciário, dispensando o juiz.', comentario: 'A saída temporária é concedida pelo JUIZ da execução, não pelo Conselho Penitenciário.' },
      { letra: 'D', texto: 'Parecer favorável do Ministério Público, com efeito vinculante.', comentario: 'O parecer do MP não tem efeito vinculante sobre a decisão do juiz nesse procedimento.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 123, LEP',
    justificativa: 'A saída temporária exige: comportamento adequado, cumprimento mínimo de 1/6 da pena se o condenado for primário (1/4 se reincidente) e compatibilidade do benefício com os objetivos da pena.'
  },
  {
    id: 'p2r_lep_3',
    disciplina: 'lep',
    topico: 'Progressão e Regressão de Regime (Art. 112-118)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Após as alterações da Lei 13.964/2019 (Pacote Anticrime) no Art. 112 da LEP, o condenado primário por crime hediondo com resultado morte progride de regime após cumprir:',
    alternativas: [
      { letra: 'A', texto: '40% da pena.', comentario: '40% é o percentual para o condenado primário por crime hediondo SEM resultado morte, não com resultado morte.' },
      { letra: 'B', texto: '50% da pena.' },
      { letra: 'C', texto: '60% da pena.', comentario: '60% é o percentual para o reincidente específico em crime hediondo, não para o primário com resultado morte.' },
      { letra: 'D', texto: '70% da pena.', comentario: '70% não corresponde a nenhuma das frações previstas no art. 112 da LEP para essa hipótese.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 112, VI, "a", LEP',
    justificativa: 'Exige-se 50% da pena para o condenado por exercer o comando de organização criminosa OU para o condenado por crime hediondo ou equiparado do qual resultou morte, vedado o livramento condicional.'
  },
  {
    id: 'p2r_lep_4',
    disciplina: 'lep',
    topico: 'Faltas Disciplinares e Sanções (Art. 49-60)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A posse de aparelho telefônico, de rádio ou similar por preso, sem autorização, é classificada pela LEP como:',
    alternativas: [
      { letra: 'A', texto: 'Falta leve, sujeita apenas a advertência verbal.', comentario: 'A posse de aparelho de comunicação é falta GRAVE, prevista expressamente na LEP, não mera falta leve com advertência verbal.' },
      { letra: 'B', texto: 'Falta média, definida pela legislação estadual.', comentario: 'A falta é classificada diretamente pela própria LEP como grave (art. 50, VII) — não é deixada à definição da legislação estadual, como ocorre com as faltas leves e médias.' },
      { letra: 'C', texto: 'Falta grave, prevista expressamente no Art. 50.' },
      { letra: 'D', texto: 'Conduta atípica, pois a lei não trata do tema.', comentario: 'A conduta é expressamente tipificada como falta grave pelo art. 50, VII da LEP — não é atípica.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 50, VII, LEP',
    justificativa: 'Constitui falta grave do condenado à pena privativa de liberdade ter em sua posse, utilizar ou fornecer aparelho telefônico, de rádio ou similar, que permita a comunicação com outros presos ou com o ambiente externo.'
  },
  {
    id: 'p2r_lep_5',
    disciplina: 'lep',
    topico: 'RDD - Regime Disciplinar Diferenciado (Art. 52)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Segundo a LEP, pode ser incluído no Regime Disciplinar Diferenciado (RDD), independentemente da prática de falta grave:',
    alternativas: [
      { letra: 'A', texto: 'O preso provisório com fundadas suspeitas de envolvimento com organização criminosa.' },
      { letra: 'B', texto: 'Somente o condenado definitivo que já cumpriu 1/3 da pena.', comentario: 'O RDD pode ser aplicado também a preso provisório, e não exige o cumprimento prévio de 1/3 da pena.' },
      { letra: 'C', texto: 'Apenas o preso reincidente em crime hediondo com trânsito em julgado.', comentario: 'O RDD não se limita ao reincidente em crime hediondo com trânsito em julgado — alcança qualquer preso (inclusive provisório) com fundadas suspeitas de envolvimento em organização criminosa.' },
      { letra: 'D', texto: 'Qualquer preso, a critério exclusivo do diretor do estabelecimento.', comentario: 'A inclusão no RDD depende de decisão fundamentada do juiz competente, não é ato discricionário exclusivo do diretor do estabelecimento.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 52, §1º e §2º, LEP',
    justificativa: 'O RDD também é aplicável ao preso provisório ou condenado, nacional ou estrangeiro, que apresente alto risco para a ordem e a segurança do estabelecimento penal ou da sociedade, ou sob o qual recaiam fundadas suspeitas de envolvimento ou participação, a qualquer título, em organização criminosa, associação criminosa ou milícia privada — independentemente da prática de falta grave.'
  },
  {
    id: 'p2r_lep_6',
    disciplina: 'lep',
    topico: 'Livramento Condicional (Art. 131-146)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'É vedada a concessão de livramento condicional ao condenado:',
    alternativas: [
      { letra: 'A', texto: 'Primário, por crime comum, que cumpriu mais de 1/3 da pena.', comentario: 'O condenado primário por crime comum não está entre as vedações ao livramento condicional — cumprido o requisito temporal, pode obtê-lo normalmente.' },
      { letra: 'B', texto: 'Reincidente específico em crime hediondo ou equiparado.' },
      { letra: 'C', texto: 'Que comprovou bom comportamento carcerário durante a execução.', comentario: 'O bom comportamento carcerário é justamente um REQUISITO para a concessão do livramento condicional, não uma causa de vedação.' },
      { letra: 'D', texto: 'Que reparou o dano causado pelo crime, salvo impossibilidade.', comentario: 'A reparação do dano (quando possível) é requisito para a concessão do livramento condicional, não uma causa de vedação.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 83, V, CP c/c LEP',
    justificativa: 'O livramento condicional é vedado ao condenado reincidente específico em crimes hediondos ou equiparados (tortura, tráfico e terrorismo).'
  },
  {
    id: 'p2r_lep_7',
    disciplina: 'lep',
    topico: 'Assistência ao Preso (Art. 10-27)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'A assistência ao egresso, prevista na LEP, consiste em orientação e apoio para reintegrá-lo à vida em liberdade, e é prestada pelo prazo de:',
    alternativas: [
      { letra: 'A', texto: '6 meses a partir da soltura.', comentario: 'O prazo correto é de 2 anos, não 6 meses.' },
      { letra: 'B', texto: '1 ano a partir da soltura.', comentario: 'O prazo correto é de 2 anos, não 1 ano.' },
      { letra: 'C', texto: '2 anos a partir da soltura.' },
      { letra: 'D', texto: 'Prazo indeterminado, enquanto o egresso necessitar.', comentario: 'A LEP fixa expressamente o prazo de 2 anos — não é indeterminado.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 25, LEP',
    justificativa: 'A assistência ao egresso consiste em orientação e apoio para reintegrá-lo à vida em liberdade, e será concedida pelo prazo de 2 (dois) anos a contar da saída do estabelecimento.'
  },
  {
    id: 'p2r_lep_8',
    disciplina: 'lep',
    topico: 'Trabalho do Preso (Art. 28-37)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Sobre o trabalho do preso, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Está sujeito ao regime da Consolidação das Leis do Trabalho (CLT).', comentario: 'O trabalho do preso NÃO está sujeito ao regime da CLT — tem natureza jurídica própria, conforme a LEP.' },
      { letra: 'B', texto: 'É facultativo tanto para o condenado quanto para o preso provisório.', comentario: 'O trabalho não é facultativo para o condenado — é obrigatório para ele; a facultatividade se aplica apenas ao preso provisório.' },
      { letra: 'C', texto: 'É obrigatório para o condenado, dentro de suas aptidões e capacidade.' },
      { letra: 'D', texto: 'Deve ser remunerado com, no mínimo, o valor integral do salário mínimo.', comentario: 'A remuneração mínima é de 3/4 do salário mínimo, não o valor integral.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 31, LEP',
    justificativa: 'O condenado à pena privativa de liberdade está obrigado ao trabalho, na medida de suas aptidões e capacidade, sendo o trabalho do preso provisório facultativo.'
  },
  {
    id: 'p2r_lep_9',
    disciplina: 'lep',
    topico: 'Estabelecimentos Penais (Art. 82-104)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'A Colônia Agrícola, Industrial ou Similar, prevista na LEP, destina-se ao cumprimento de pena em qual regime?',
    alternativas: [
      { letra: 'A', texto: 'Fechado.', comentario: 'O regime fechado é cumprido na Penitenciária, não na Colônia Agrícola/Industrial.' },
      { letra: 'B', texto: 'Semiaberto.' },
      { letra: 'C', texto: 'Aberto.', comentario: 'O regime aberto é cumprido na Casa do Albergado, não na Colônia Agrícola/Industrial.' },
      { letra: 'D', texto: 'Provisório, antes do trânsito em julgado.', comentario: 'Presos provisórios ficam na Cadeia Pública, não na Colônia Agrícola/Industrial.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 91, LEP',
    justificativa: 'A Colônia Agrícola, Industrial ou Similar destina-se ao cumprimento da pena em regime semiaberto.'
  },
  {
    id: 'p2r_lep_10',
    disciplina: 'lep',
    topico: 'Progressão e Regressão de Regime (Art. 112-118)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A regressão de regime prisional pode ocorrer quando o condenado:',
    alternativas: [
      { letra: 'A', texto: 'Solicita, por vontade própria, retorno a regime mais rigoroso.', comentario: 'A regressão de regime não depende da vontade do próprio condenado — decorre de causas objetivas previstas em lei, como a prática de falta grave.' },
      { letra: 'B', texto: 'Pratica fato definido como crime doloso ou falta grave.' },
      { letra: 'C', texto: 'Conclui curso técnico durante o cumprimento da pena.', comentario: 'Concluir curso técnico é fator positivo (pode até gerar remição por estudo), e não causa de regressão de regime.' },
      { letra: 'D', texto: 'Atinge o percentual mínimo exigido para o regime atual.', comentario: 'Atingir o percentual mínimo exigido é requisito para PROGRESSÃO de regime, não causa de regressão.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 118, I, LEP',
    justificativa: 'A execução da pena fica sujeita a forma regressiva quando o condenado praticar fato definido como crime doloso ou falta grave, ou sofrer condenação, por crime anterior, cuja pena somada torne incabível o regime atual.'
  },
  {
    id: 'p2r_lep_11',
    disciplina: 'lep',
    topico: 'Órgãos de Execução Penal (Art. 61-82)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'São órgãos da execução penal, segundo a LEP:',
    alternativas: [
      { letra: 'A', texto: 'Apenas o Juízo da Execução e o Ministério Público.', comentario: 'O rol de órgãos da execução penal é bem mais amplo do que apenas Juízo da Execução e Ministério Público.' },
      { letra: 'B', texto: 'Conselho Nacional de Política Criminal e Penitenciária, Juízo da Execução, Ministério Público, Conselho Penitenciário, Departamentos Penitenciários, Patronato, Conselho da Comunidade e Defensoria Pública.' },
      { letra: 'C', texto: 'Somente órgãos policiais responsáveis pela custódia dos presos.', comentario: 'Órgãos policiais de custódia não são o único órgão da execução penal listado na LEP — o rol inclui diversos outros órgãos (CNPCP, Conselho Penitenciário, Patronato etc.).' },
      { letra: 'D', texto: 'Apenas o Departamento Penitenciário Nacional, por ser federal.', comentario: 'O Departamento Penitenciário Nacional é apenas um dos vários órgãos da execução penal, não o único.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 61, LEP',
    justificativa: 'O rol de órgãos da execução penal é amplo e inclui, entre outros, o Conselho Nacional de Política Criminal e Penitenciária, o Juízo da Execução, o Ministério Público, o Conselho Penitenciário, os Departamentos Penitenciários, o Patronato, o Conselho da Comunidade e a Defensoria Pública.'
  },
  {
    id: 'p2r_lep_12',
    disciplina: 'lep',
    topico: 'Deveres e Direitos do Preso (Art. 38-47)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'Constitui direito do preso, expressamente previsto no Art. 41 da LEP:',
    alternativas: [
      { letra: 'A', texto: 'Isenção total do trabalho, mesmo estando apto.', comentario: 'A isenção total do trabalho não é direito do preso apto — o trabalho é dever/obrigação do condenado, dentro de suas aptidões.' },
      { letra: 'B', texto: 'Proporcionalidade na distribuição do tempo para trabalho, descanso e recreação.' },
      { letra: 'C', texto: 'Escolha unilateral do estabelecimento penal em que cumprirá pena.', comentario: 'A escolha do estabelecimento penal não é direito do preso de forma unilateral — cabe à Administração definir a alocação, observados os critérios legais.' },
      { letra: 'D', texto: 'Visita íntima sem qualquer regulamentação pelo estabelecimento.', comentario: 'A visita íntima é, sim, sujeita a regulamentação pelo estabelecimento penal, não uma prerrogativa sem qualquer controle.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 41, VI, LEP',
    justificativa: 'É direito do preso a proporcionalidade na distribuição do tempo para o trabalho, o descanso e a recreação, entre outros direitos listados no rol do Art. 41.'
  },

  // ---------------- LEGISLAÇÃO ESPECÍFICA (16 questões) ----------------
  {
    id: 'p2r_leg_1',
    disciplina: 'legislacao',
    topico: 'Lei 13.260/16 - Antiterrorismo',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Segundo a Lei 13.260/2016, o crime de terrorismo se caracteriza pela prática de atos por razões de xenofobia, discriminação ou preconceito de raça, cor, etnia e religião, quando tiverem por finalidade:',
    alternativas: [
      { letra: 'A', texto: 'Provocar terror social ou generalizado, expondo a perigo pessoa, patrimônio, a paz pública ou a incolumidade pública.' },
      { letra: 'B', texto: 'Obter vantagem econômica para financiar campanhas eleitorais.', comentario: 'Obter vantagem econômica para financiar campanhas eleitorais não é a finalidade que caracteriza o crime de terrorismo na Lei 13.260/16.' },
      { letra: 'C', texto: 'Promover manifestação social pacífica em defesa de direitos constitucionais.', comentario: 'A lei exclui expressamente manifestações sociais pacíficas em defesa de direitos constitucionais do conceito de terrorismo.' },
      { letra: 'D', texto: 'Divulgar opinião política contrária ao governo em redes sociais.', comentario: 'Divulgar opinião política contrária ao governo, por si só, não configura terrorismo — a lei exige finalidade de provocar terror expondo a perigo pessoas, patrimônio ou a paz pública.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 2º, Lei 13.260/16',
    justificativa: 'O conceito legal exige a finalidade de provocar terror social ou generalizado, expondo a perigo pessoa, patrimônio, a paz pública ou a incolumidade pública.'
  },
  {
    id: 'p2r_leg_2',
    disciplina: 'legislacao',
    topico: 'Lei 13.260/16 - Antiterrorismo',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Conforme o Art. 2º, §2º, da Lei Antiterrorismo, NÃO se enquadram no conceito de terrorismo:',
    alternativas: [
      { letra: 'A', texto: 'Manifestações políticas, movimentos sociais, sindicais, religiosos ou de classe direcionados a defender direitos e garantias constitucionais.' },
      { letra: 'B', texto: 'Ataques a sistemas de transporte público com uso de explosivos.', comentario: 'Ataques a sistemas de transporte público com explosivos SE enquadram no conceito de terrorismo — não são excluídos pela lei.' },
      { letra: 'C', texto: 'Sabotagem de sistemas informáticos de instalações de energia.', comentario: 'Sabotagem de sistemas de energia SE enquadra no conceito de terrorismo, sendo conduta típica prevista na lei.' },
      { letra: 'D', texto: 'Uso de arma química contra a população civil.', comentario: 'Uso de arma química contra população civil SE enquadra no conceito de terrorismo, sendo conduta expressamente prevista na lei.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 2º, §2º, Lei 13.260/16',
    justificativa: 'A lei exclui expressamente do conceito de terrorismo as manifestações políticas, movimentos sociais, sindicais, religiosos, de classe ou de categoria profissional, direcionados por propósitos sociais ou reivindicatórios, visando a defender direitos, garantias e liberdades constitucionais.'
  },
  {
    id: 'p2r_leg_3',
    disciplina: 'legislacao',
    topico: 'Lei 13.260/16 - Antiterrorismo',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Qual a pena prevista para o ato de terrorismo do Art. 2º, §1º, da Lei 13.260/2016, quando resultar morte?',
    alternativas: [
      { letra: 'A', texto: 'Reclusão de 12 a 30 anos.', comentario: '12 a 30 anos é a pena-base do caput (sem resultado morte); com resultado morte, a pena aumenta da metade, chegando a 18-45 anos.' },
      { letra: 'B', texto: 'Reclusão de 15 a 25 anos.', comentario: '15 a 25 anos não corresponde à pena calculada pelo aumento de metade sobre a pena-base de 12-30 anos.' },
      { letra: 'C', texto: 'Reclusão de 18 a 45 anos (pena-base aumentada da metade).' },
      { letra: 'D', texto: 'Reclusão de 20 anos, fixa, sem gradação.', comentario: 'A lei não fixa pena única e fixa de 20 anos — prevê faixa de reclusão com o aumento de metade sobre a pena-base.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 7º, Lei 13.260/16',
    justificativa: 'O Art. 7º da Lei 13.260/16 prevê que, se do fato resulta morte, a pena é aumentada da metade (e não em dobro). Aplicando-se sobre a pena-base do caput do art. 2º (reclusão de 12 a 30 anos), o resultado é reclusão de 18 a 45 anos.'
  },
  {
    id: 'p2r_leg_4',
    disciplina: 'legislacao',
    topico: 'Lei 13.260/16 - Antiterrorismo',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O crime de promover, constituir, integrar ou prestar auxílio, pessoalmente ou por interposta pessoa, a organização terrorista, segundo a Lei 13.260/16, tem pena de:',
    alternativas: [
      { letra: 'A', texto: 'Reclusão de 5 a 8 anos.' },
      { letra: 'B', texto: 'Detenção de 2 a 4 anos.', comentario: 'A pena de detenção de 2 a 4 anos não corresponde à pena efetivamente prevista para esse crime, que é de reclusão de 5 a 8 anos.' },
      { letra: 'C', texto: 'Reclusão de 12 a 30 anos.', comentario: 'A pena de reclusão de 12 a 30 anos corresponde ao crime de terrorismo em si (art. 2º), não ao crime de integrar/promover organização terrorista (art. 3º).' },
      { letra: 'D', texto: 'Multa, sem pena privativa de liberdade.', comentario: 'O crime prevê pena privativa de liberdade (reclusão de 5 a 8 anos), não apenas multa.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 3º, Lei 13.260/16',
    justificativa: 'Promover, constituir, integrar ou prestar auxílio a organização terrorista é punido com reclusão de 5 a 8 anos.'
  },
  {
    id: 'p2r_leg_5',
    disciplina: 'legislacao',
    topico: 'Lei 13.260/16 - Antiterrorismo',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Sobre o financiamento do terrorismo, a Lei 13.260/2016 estabelece que:',
    alternativas: [
      { letra: 'A', texto: 'Não há tipificação específica, aplicando-se apenas a Lei de Lavagem de Dinheiro.', comentario: 'Há, sim, tipificação específica do financiamento do terrorismo na própria Lei 13.260/16 (art. 6º), não se aplicando apenas a Lei de Lavagem de Dinheiro.' },
      { letra: 'B', texto: 'Receber, prover ou distribuir recursos para financiar o terrorismo é punido com reclusão de 15 a 30 anos.' },
      { letra: 'C', texto: 'É punido apenas administrativamente, com multa.', comentario: 'O financiamento do terrorismo é punido com reclusão de 15 a 30 anos, não apenas administrativamente com multa.' },
      { letra: 'D', texto: 'Exige-se que o recurso tenha efetivamente financiado um atentado consumado.', comentario: 'Não se exige que o recurso tenha efetivamente financiado um atentado consumado — o crime se consuma com a conduta de prover/receber/guardar recursos com essa finalidade, independentemente do resultado.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 6º, Lei 13.260/16',
    justificativa: 'O Art. 6º pune com reclusão de 15 a 30 anos quem receber, prover, oferecer, obter, guardar, mantiver em depósito, solicitar ou investir, de qualquer modo, recursos com a finalidade de financiar o terrorismo.'
  },
  {
    id: 'p2r_leg_6',
    disciplina: 'legislacao',
    topico: 'Lei 11.343/06 - Lei de Drogas',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'O denominado "tráfico privilegiado" (Art. 33, §4º, da Lei de Drogas) exige, cumulativamente, que o agente seja:',
    alternativas: [
      { letra: 'A', texto: 'Primário, de bons antecedentes, não se dedique a atividades criminosas nem integre organização criminosa.' },
      { letra: 'B', texto: 'Reincidente, mas colaborador com a investigação policial.', comentario: 'O tráfico privilegiado não exige colaboração com a investigação policial nem se aplica a reincidentes — exige primariedade.' },
      { letra: 'C', texto: 'Menor de 21 anos à época do fato, independentemente de antecedentes.', comentario: 'O benefício não está condicionado à idade do agente, mas sim aos requisitos de primariedade, bons antecedentes e não dedicação a atividades criminosas.' },
      { letra: 'D', texto: 'Usuário eventual que também pratica pequenos furtos.', comentario: 'A prática de furtos não guarda relação com os requisitos do tráfico privilegiado, que exige primariedade, bons antecedentes e ausência de vínculo com organização criminosa.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 33, §4º, Lei 11.343/06',
    justificativa: 'A causa de diminuição de pena (1/6 a 2/3) exige que o agente seja primário, de bons antecedentes, não se dedique às atividades criminosas nem integre organização criminosa.'
  },
  {
    id: 'p2r_leg_7',
    disciplina: 'legislacao',
    topico: 'Lei 11.343/06 - Lei de Drogas',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O crime de associação para o tráfico (Art. 35 da Lei de Drogas) exige, para sua caracterização:',
    alternativas: [
      { letra: 'A', texto: 'Associação de 4 ou mais pessoas, de forma estruturada e hierarquizada.', comentario: 'Não se exige 4 ou mais pessoas nem estrutura hierarquizada — bastam 2 ou mais pessoas associadas de forma estável.' },
      { letra: 'B', texto: 'Associação de 2 ou mais pessoas, de forma reiterada ou não, para o tráfico eventual.', comentario: 'A associação exige estabilidade e permanência do vínculo, e não se caracteriza por tráfico meramente eventual.' },
      { letra: 'C', texto: 'Associação de 2 ou mais pessoas, de forma reiterada e estável, para a prática dos crimes dos Art. 33, caput e §1º, ou Art. 34.' },
      { letra: 'D', texto: 'Qualquer reunião de pessoas, ainda que ocasional, para consumo coletivo de drogas.', comentario: 'A simples reunião ocasional para consumo coletivo não configura associação para o tráfico, que exige finalidade de praticar os crimes dos arts. 33/34 de forma estável.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 35, Lei 11.343/06',
    justificativa: 'Associarem-se duas ou mais pessoas para o fim de praticar, reiteradamente ou não, qualquer dos crimes dos Art. 33, caput e §1º, e 34 desta lei — exige estabilidade e permanência do vínculo associativo (diferente do concurso eventual de pessoas).'
  },
  {
    id: 'p2r_leg_8',
    disciplina: 'legislacao',
    topico: 'Lei 11.340/06 - Lei Maria da Penha',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Sobre as medidas protetivas de urgência da Lei Maria da Penha, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Somente podem ser concedidas após o oferecimento da denúncia pelo Ministério Público.', comentario: 'As medidas protetivas podem ser concedidas antes mesmo do oferecimento da denúncia — não dependem dessa fase processual.' },
      { letra: 'B', texto: 'O juiz deve decidir sobre o pedido em até 48 horas.' },
      { letra: 'C', texto: 'Dependem de audiência prévia do agressor para serem deferidas.', comentario: 'As medidas protetivas não exigem audiência prévia do agressor — podem ser deferidas de forma célere, justamente pela urgência da proteção à vítima.' },
      { letra: 'D', texto: 'Só podem ser aplicadas cumulativamente com prisão preventiva.', comentario: 'As medidas protetivas não dependem de prisão preventiva cumulativa — são instrumentos autônomos de proteção à vítima.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 18, I, Lei 11.340/06',
    justificativa: 'Recebido o expediente com o pedido da ofendida, caberá ao juiz, no prazo de 48 (quarenta e oito) horas, conhecer do expediente e do pedido e decidir sobre as medidas protetivas de urgência.'
  },
  {
    id: 'p2r_leg_9',
    disciplina: 'legislacao',
    topico: 'Lei 11.340/06 - Lei Maria da Penha',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'Segundo a Lei Maria da Penha, a retratação da vítima em relação à representação:',
    alternativas: [
      { letra: 'A', texto: 'Pode ocorrer a qualquer momento, por simples petição escrita.', comentario: 'A retratação não pode ocorrer por simples petição escrita a qualquer momento — exige audiência específica perante o juiz, antes do recebimento da denúncia.' },
      { letra: 'B', texto: 'Só é admitida perante o juiz, em audiência especialmente designada, antes do recebimento da denúncia e ouvido o Ministério Público.' },
      { letra: 'C', texto: 'É vedada em qualquer hipótese, por se tratar de ação penal pública incondicionada.', comentario: 'A retratação é admitida nas ações condicionadas à representação (não na incondicionada), respeitado o procedimento formal específico.' },
      { letra: 'D', texto: 'Deve ser homologada exclusivamente pela autoridade policial.', comentario: 'A retratação deve ser homologada pelo juiz em audiência específica, ouvido o MP — não pela autoridade policial.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 16, Lei 11.340/06',
    justificativa: 'Nas ações penais públicas condicionadas à representação da ofendida, só será admitida a renúncia à representação perante o juiz, em audiência especialmente designada para esse fim, antes do recebimento da denúncia e ouvido o Ministério Público.'
  },
  {
    id: 'p2r_leg_10',
    disciplina: 'legislacao',
    topico: 'Lei 12.850/13 - Organiz. Criminosas',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A colaboração premiada, meio de obtenção de prova previsto na Lei 12.850/2013, pode resultar, entre outros benefícios ao colaborador:',
    alternativas: [
      { letra: 'A', texto: 'Perdão judicial, redução da pena até 2/3 ou substituição por restritiva de direitos.' },
      { letra: 'B', texto: 'Extinção automática da punibilidade, independentemente de sentença.', comentario: 'A extinção da punibilidade não é automática — depende de decisão judicial fundamentada, avaliando a efetividade da colaboração.' },
      { letra: 'C', texto: 'Imunidade penal absoluta, ainda que não cumpridos os termos do acordo.', comentario: 'Não há imunidade penal absoluta — os benefícios dependem do efetivo cumprimento dos termos do acordo homologado.' },
      { letra: 'D', texto: 'Anistia, concedida diretamente pelo delegado de polícia.', comentario: 'A anistia é ato de competência do Congresso Nacional, e não do delegado de polícia; os benefícios da colaboração premiada são concedidos pelo juiz.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 4º, Lei 12.850/13',
    justificativa: 'O juiz poderá, a requerimento das partes, conceder o perdão judicial, reduzir em até 2/3 a pena privativa de liberdade ou substituí-la por restritiva de direitos, quando a colaboração for efetiva e voluntária.'
  },
  {
    id: 'p2r_leg_11',
    disciplina: 'legislacao',
    topico: 'Lei 9.455/97 - Lei de Tortura',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Sobre o crime de tortura praticado por omissão (Art. 1º, §2º, da Lei 9.455/97), é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Pune quem se omite em face de tortura que tinha o dever de evitar ou apurar, com pena de detenção de 1 a 4 anos.' },
      { letra: 'B', texto: 'Não é punível, pois a tortura exige sempre conduta comissiva.', comentario: 'A tortura por omissão é, sim, punível — é expressamente tipificada no art. 1º, §2º da Lei 9.455/97.' },
      { letra: 'C', texto: 'Tem a mesma pena da tortura comissiva (reclusão de 2 a 8 anos).', comentario: 'A pena da tortura por omissão (detenção de 1 a 4 anos) é bem inferior à da tortura comissiva (reclusão de 2 a 8 anos), não idêntica.' },
      { letra: 'D', texto: 'Só se aplica a agentes penitenciários, com exclusão de outros agentes públicos.', comentario: 'A tortura por omissão não se limita a agentes penitenciários — alcança qualquer pessoa que tinha o dever de evitar ou apurar a tortura.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 1º, §2º, Lei 9.455/97',
    justificativa: 'Aquele que se omite em face dessas condutas, quando tinha o dever de evitá-las ou apurá-las, incorre na pena de detenção de um a quatro anos — pena bem inferior à da tortura comissiva.'
  },
  {
    id: 'p2r_leg_12',
    disciplina: 'legislacao',
    topico: 'Lei 8.072/90 - Crimes Hediondos',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Após a Lei 13.964/2019 (Pacote Anticrime), passou a integrar o rol de crimes hediondos:',
    alternativas: [
      { letra: 'A', texto: 'O furto simples, em qualquer circunstância.', comentario: 'O furto simples não passou a integrar o rol de crimes hediondos — apenas o furto QUALIFICADO pelo emprego de explosivo.' },
      { letra: 'B', texto: 'O furto qualificado pelo emprego de explosivo ou artefato análogo que cause perigo comum.' },
      { letra: 'C', texto: 'A receptação culposa.', comentario: 'A receptação culposa não foi incluída no rol de crimes hediondos pelo Pacote Anticrime.' },
      { letra: 'D', texto: 'O estelionato praticado contra idoso.', comentario: 'O estelionato contra idoso não foi incluído no rol de crimes hediondos pelo Pacote Anticrime.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 1º, IX, Lei 8.072/90',
    justificativa: 'A Lei 13.964/2019 incluiu no rol de crimes hediondos o furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum (Art. 155, §4º-A, CP).'
  },
  {
    id: 'p2r_leg_13',
    disciplina: 'legislacao',
    topico: 'Lei 13.869/19 - Abuso de Autoridade',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Constitui infração disciplinar independentemente de constituir também crime de abuso de autoridade, segundo a Lei 13.869/2019, a conduta de:',
    alternativas: [
      { letra: 'A', texto: 'Manter presos de ambos os sexos na mesma cela.', comentario: 'Manter presos de sexos diferentes na mesma cela não é a conduta especificamente descrita no art. 15 da lei como essa infração.' },
      { letra: 'B', texto: 'Deixar de identificar-se ou identificar-se falsamente ao preso por ocasião de sua captura ou quando deva fazê-lo, sendo então legalmente exigível.' },
      { letra: 'C', texto: 'Submeter o preso a interrogatório fora dos horários de expediente.', comentario: 'Interrogar fora do horário de expediente não é a conduta tipificada nesse dispositivo específico da lei.' },
      { letra: 'D', texto: 'Exigir do preso a assinatura de termos padronizados.', comentario: 'Exigir assinatura de termos padronizados não corresponde à conduta vedada pelo art. 15 da lei.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 15, Lei 13.869/19',
    justificativa: 'A lei tipifica a conduta de deixar de identificar-se, ou identificar-se falsamente, ao preso por ocasião de sua captura ou quando deva fazê-lo, sendo legalmente exigível.'
  },
  {
    id: 'p2r_leg_14',
    disciplina: 'legislacao',
    topico: 'Lei 10.826/03 - Estatuto do Desarmamento',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Manter sob guarda arma de fogo de uso permitido, com numeração, marca ou sinal de identificação raspado, suprimido ou adulterado, configura:',
    alternativas: [
      { letra: 'A', texto: 'O crime do Art. 12 (posse irregular), sem qualquer agravante.', comentario: 'A supressão de numeração desloca a conduta para o tipo mais grave do art. 16, e não para o art. 12 (posse irregular simples).' },
      { letra: 'B', texto: 'Crime do Art. 16, com pena mais grave (reclusão de 3 a 6 anos), independentemente do uso ser permitido.' },
      { letra: 'C', texto: 'Mera infração administrativa, sem repercussão penal.', comentario: 'A conduta tem, sim, repercussão penal — é crime expressamente tipificado no art. 16 da Lei 10.826/03, não mera infração administrativa.' },
      { letra: 'D', texto: 'Contravenção penal, punida com multa.', comentario: 'A conduta é crime (reclusão de 3 a 6 anos), não contravenção penal punida apenas com multa.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 16, §único, IV, Lei 10.826/03',
    justificativa: 'A supressão ou adulteração de sinal identificador de arma de fogo é causa que desloca a conduta para o tipo mais grave do Art. 16, ainda que a arma seja originalmente de uso permitido.'
  },
  {
    id: 'p2r_leg_15',
    disciplina: 'legislacao',
    topico: 'ECA - Lei 8.069/90 (partes cobradas)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'São medidas socioeducativas aplicáveis ao adolescente autor de ato infracional, segundo o ECA:',
    alternativas: [
      { letra: 'A', texto: 'Advertência, obrigação de reparar o dano, prestação de serviços à comunidade, liberdade assistida, semiliberdade e internação.' },
      { letra: 'B', texto: 'Somente internação, para garantir a proteção da sociedade.', comentario: 'O ECA prevê um rol amplo de medidas socioeducativas, não apenas a internação.' },
      { letra: 'C', texto: 'Prisão simples, detenção e reclusão, como no sistema penal comum.', comentario: 'O sistema socioeducativo do ECA não usa as penas do sistema penal comum — usa medidas próprias como advertência, liberdade assistida, semiliberdade e internação.' },
      { letra: 'D', texto: 'Apenas medidas de proteção, nunca de caráter socioeducativo restritivo.', comentario: 'O ECA prevê, sim, medidas socioeducativas de caráter restritivo (como semiliberdade e internação), além das medidas de proteção.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 112, ECA',
    justificativa: 'O Art. 112 do ECA lista as medidas socioeducativas: advertência, obrigação de reparar o dano, prestação de serviços à comunidade, liberdade assistida, inserção em regime de semiliberdade e internação em estabelecimento educacional.'
  },
  {
    id: 'p2r_leg_16',
    disciplina: 'legislacao',
    topico: 'Lei 7.716/89 - Crimes de Preconceito',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'Praticar, induzir ou incitar discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional, segundo a Lei 7.716/89, é punido com:',
    alternativas: [
      { letra: 'A', texto: 'Detenção de 6 meses a 1 ano.', comentario: 'A pena correta é de reclusão de 1 a 3 anos, não detenção de 6 meses a 1 ano.' },
      { letra: 'B', texto: 'Reclusão de 1 a 3 anos, na modalidade geral do Art. 20.' },
      { letra: 'C', texto: 'Apenas multa, tratando-se de infração de menor potencial ofensivo.', comentario: 'A conduta não é apenas multa nem infração de menor potencial ofensivo — é crime com pena de reclusão.' },
      { letra: 'D', texto: 'Advertência administrativa, sem repercussão penal.', comentario: 'A conduta tem, sim, repercussão penal (reclusão de 1 a 3 anos), não se limitando a advertência administrativa.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 20, Lei 7.716/89',
    justificativa: 'A conduta genérica de praticar, induzir ou incitar a discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional é punida com reclusão de 1 a 3 anos e multa.'
  },

  // ---------------- PENAL E PROCESSUAL PENAL (12 questões) ----------------
  {
    id: 'p2r_pen_1',
    disciplina: 'penal',
    topico: 'Prisão em Flagrante (Art. 302-310 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Considera-se em flagrante delito quem é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração. Trata-se do flagrante:',
    alternativas: [
      { letra: 'A', texto: 'Próprio.', comentario: 'O flagrante próprio ocorre quando o agente está cometendo ou acaba de cometer a infração, sem exigir perseguição posterior.' },
      { letra: 'B', texto: 'Impróprio.' },
      { letra: 'C', texto: 'Presumido.', comentario: 'O flagrante presumido/ficto ocorre quando o agente é encontrado, logo depois, com instrumentos do crime — não exige perseguição, diferente do descrito no enunciado.' },
      { letra: 'D', texto: 'Preparado.', comentario: 'O flagrante preparado/provocado envolve indução à prática do crime por terceiro (geralmente configurando crime impossível), não perseguição logo após o fato.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 302, III, CPP',
    justificativa: 'Trata-se do flagrante impróprio ou quase-flagrante, previsto no inciso III do Art. 302, que exige perseguição logo após o fato.'
  },
  {
    id: 'p2r_pen_2',
    disciplina: 'penal',
    topico: 'Prisão Preventiva (Art. 311-316 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Desde as alterações trazidas pela Lei 13.964/2019 (Pacote Anticrime), a prisão preventiva:',
    alternativas: [
      { letra: 'A', texto: 'Pode ser decretada de ofício pelo juiz durante o inquérito policial.', comentario: 'Após o Pacote Anticrime, o juiz NÃO pode mais decretar prisão preventiva de ofício durante o inquérito policial — depende de representação da autoridade policial ou requerimento do MP.' },
      { letra: 'B', texto: 'Não pode mais ser decretada de ofício pelo juiz na fase de investigação, dependendo de representação da autoridade policial ou requerimento do MP.' },
      { letra: 'C', texto: 'Só pode ser requerida pela vítima do crime.', comentario: 'A prisão preventiva não pode ser requerida apenas pela vítima — pode ser requerida pelo MP, querelante, assistente, ou representada pela autoridade policial na fase de investigação.' },
      { letra: 'D', texto: 'Tornou-se automática em qualquer crime hediondo, sem necessidade de fundamentação.', comentario: 'A prisão preventiva não se tornou automática para crimes hediondos — continua exigindo fundamentação e presença dos requisitos legais (fumus + periculum).' }
    ],
    gabarito: 'B',
    artigo: 'Art. 311, CPP',
    justificativa: 'Após o Pacote Anticrime, a decretação de ofício pelo juiz ficou restrita à fase processual (não mais na investigação), exigindo representação da autoridade policial ou requerimento do MP, do querelante ou do assistente durante o inquérito.'
  },
  {
    id: 'p2r_pen_3',
    disciplina: 'penal',
    topico: 'Excludentes de Ilicitude (Art. 23-25 CP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Age em estado de necessidade quem pratica o fato para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era razoável exigir-se. NÃO pode alegar estado de necessidade:',
    alternativas: [
      { letra: 'A', texto: 'Quem tinha o dever legal de enfrentar o perigo.' },
      { letra: 'B', texto: 'Quem agiu para proteger direito de terceiro.', comentario: 'Agir para proteger direito de terceiro é justamente uma das hipóteses ADMITIDAS de estado de necessidade (direito próprio ou alheio), não uma causa de vedação.' },
      { letra: 'C', texto: 'Quem não provocou a situação de perigo.', comentario: 'Não ter provocado a situação de perigo é justamente um REQUISITO para poder alegar estado de necessidade, não uma causa de vedação.' },
      { letra: 'D', texto: 'Quem agiu de forma moderada diante do perigo.', comentario: 'Agir de forma moderada é elemento característico de excludentes de ilicitude em geral (como legítima defesa), não uma causa que impede alegar estado de necessidade.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 24, §1º, CP',
    justificativa: 'Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo (ex: bombeiro, policial em determinadas situações de sua função).'
  },
  {
    id: 'p2r_pen_4',
    disciplina: 'penal',
    topico: 'Inquérito Policial (Art. 4-23 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Sobre o arquivamento do inquérito policial após o Pacote Anticrime (Lei 13.964/2019), é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Depende sempre de homologação judicial, como na sistemática anterior.', comentario: 'A nova redação do art. 28 do CPP retirou justamente a exigência de homologação judicial para o arquivamento.' },
      { letra: 'B', texto: 'É determinado diretamente pelo Ministério Público, com comunicação ao juiz e possibilidade de reexame pela instância revisora do próprio MP.' },
      { letra: 'C', texto: 'Só pode ser feito pela autoridade policial, sem manifestação do MP.', comentario: 'O arquivamento não é feito exclusivamente pela autoridade policial — é ato do Ministério Público, com possibilidade de revisão interna.' },
      { letra: 'D', texto: 'É irrecorrível em qualquer hipótese, inclusive pela vítima.', comentario: 'O arquivamento não é irrecorrível — admite revisão pela instância competente do próprio MP, inclusive por provocação da vítima.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 28, CPP (redação da Lei 13.964/19)',
    justificativa: 'A nova redação retirou a homologação judicial: o próprio membro do MP determina o arquivamento, comunicando à vítima, ao investigado e à autoridade policial, e submete o arquivamento à revisão da instância competente do próprio Ministério Público (Art. 28, §1º).'
  },
  {
    id: 'p2r_pen_5',
    disciplina: 'penal',
    topico: 'Medidas Cautelares Alternativas (Art. 319 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'São medidas cautelares diversas da prisão, previstas no Art. 319 do CPP, EXCETO:',
    alternativas: [
      { letra: 'A', texto: 'Comparecimento periódico em juízo.', comentario: 'Comparecimento periódico em juízo É medida cautelar prevista no art. 319 do CPP — por isso não serve de resposta para a exceção pedida.' },
      { letra: 'B', texto: 'Monitoração eletrônica.', comentario: 'Monitoração eletrônica É medida cautelar prevista no art. 319 do CPP.' },
      { letra: 'C', texto: 'Recolhimento domiciliar noturno.', comentario: 'Recolhimento domiciliar noturno É medida cautelar prevista no art. 319 do CPP.' },
      { letra: 'D', texto: 'Interceptação telefônica.' }
    ],
    gabarito: 'D',
    artigo: 'Art. 319, CPP',
    justificativa: 'A interceptação telefônica é meio de obtenção de prova (regulado pela Lei 9.296/96), e não uma medida cautelar pessoal do rol do Art. 319 do CPP.'
  },
  {
    id: 'p2r_pen_6',
    disciplina: 'penal',
    topico: 'Ação Penal (tipos e condições)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A ação penal pública condicionada à representação:',
    alternativas: [
      { letra: 'A', texto: 'É proposta exclusivamente pelo ofendido ou seu representante legal.', comentario: 'A ação penal pública condicionada continua sendo proposta pelo Ministério Público — a vítima apenas fornece a representação, não propõe a ação diretamente.' },
      { letra: 'B', texto: 'Depende de manifestação de vontade da vítima ou seu representante legal para que o MP possa oferecer denúncia.' },
      { letra: 'C', texto: 'Não admite retratação da representação em nenhuma hipótese.', comentario: 'A retratação da representação é admitida, respeitado o prazo até o oferecimento da denúncia (art. 25 do CPP).' },
      { letra: 'D', texto: 'É a regra geral no Código Penal, sendo exceção a ação pública incondicionada.', comentario: 'A regra geral no Código Penal é a ação penal pública INCONDICIONADA — a condicionada é que é exceção.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 24, CPP',
    justificativa: 'Na ação penal pública condicionada, o MP só pode agir mediante representação do ofendido ou de quem tenha qualidade para representá-lo, sendo a regra geral, no entanto, a ação penal pública incondicionada.'
  },
  {
    id: 'p2r_pen_7',
    disciplina: 'penal',
    topico: 'Extinção da Punibilidade (Art. 107 CP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Comprovada posteriormente a falsidade da certidão de óbito que ensejou a extinção da punibilidade pela morte do agente:',
    alternativas: [
      { letra: 'A', texto: 'Nada pode ser feito, pois a extinção da punibilidade é definitiva e irretratável.', comentario: 'A extinção da punibilidade baseada em certidão de óbito falsa não é definitiva e irretratável — pode ser desconstituída quando comprovada a fraude.' },
      { letra: 'B', texto: 'A decisão que extinguiu a punibilidade pode ser desconstituída, retomando-se a persecução penal.' },
      { letra: 'C', texto: 'O agente responde apenas por falsidade ideológica, mantendo-se extinta a punibilidade do crime anterior.', comentario: 'O agente responde tanto pela fraude documental quanto tem retomada a persecução penal pelo crime original — não fica mantida a extinção da punibilidade do crime anterior.' },
      { letra: 'D', texto: 'Aplica-se a prescrição em dobro, como sanção pela fraude.', comentario: 'Não se aplica "prescrição em dobro" como sanção — o que ocorre é a desconstituição da decisão extintiva e retomada do processo original.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 107, I, CP c/c entendimento do STF/STJ',
    justificativa: 'A jurisprudência do STF e do STJ admite a desconstituição da decisão extintiva da punibilidade quando comprovada a falsidade da certidão de óbito, retomando-se o curso do processo.'
  },
  {
    id: 'p2r_pen_8',
    disciplina: 'penal',
    topico: 'Crimes em Espécie (mais cobrados)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O crime de peculato-furto (Art. 312, §1º, CP) caracteriza-se quando o funcionário público:',
    alternativas: [
      { letra: 'A', texto: 'Apropria-se de bem que já tinha a posse em razão do cargo.', comentario: 'Apropriar-se de bem que já tinha a posse em razão do cargo caracteriza o peculato-apropriação (caput do art. 312), não o peculato-furto (§1º).' },
      { letra: 'B', texto: 'Subtrai, ou concorre para que seja subtraído, bem móvel de que não tem a posse, mas que está em poder da Administração em razão do cargo, valendo-se dessa facilidade.' },
      { letra: 'C', texto: 'Deixa de recolher tributo devido pela repartição.', comentario: 'Deixar de recolher tributo devido pela repartição não corresponde à conduta do peculato-furto, que envolve subtração de bem sem a posse prévia.' },
      { letra: 'D', texto: 'Recebe vantagem indevida para praticar ato de ofício.', comentario: 'Receber vantagem indevida para praticar ato de ofício caracteriza corrupção passiva (art. 317), não peculato-furto.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 312, §1º, CP',
    justificativa: 'No peculato-furto, o agente não tem a posse do bem, mas se vale da facilidade que o cargo lhe proporciona para subtraí-lo ou concorrer para a subtração — diferente do peculato-apropriação (caput), em que já detinha a posse.'
  },
  {
    id: 'p2r_pen_9',
    disciplina: 'penal',
    topico: 'Aplicação da Lei Penal (Art. 1-12 CP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Sobre o tempo do crime, adotou o Código Penal brasileiro, como regra geral, a teoria:',
    alternativas: [
      { letra: 'A', texto: 'Do resultado, considerando praticado o crime no momento em que ocorre o resultado.', comentario: 'A teoria do resultado não é a adotada como regra geral pelo Código Penal para o tempo do crime — o CP adota a teoria da atividade.' },
      { letra: 'B', texto: 'Da atividade, considerando praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado.' },
      { letra: 'C', texto: 'Mista, aplicada apenas nos crimes permanentes.', comentario: 'Não existe teoria "mista" aplicada apenas a crimes permanentes no tratamento do tempo do crime pelo CP — a regra geral é a teoria da atividade.' },
      { letra: 'D', texto: 'Da ubiquidade, idêntica à adotada para o lugar do crime.', comentario: 'A teoria da ubiquidade é a adotada para o LUGAR do crime (art. 6º), não para o tempo do crime, que segue a teoria da atividade (art. 4º).' }
    ],
    gabarito: 'B',
    artigo: 'Art. 4º, CP',
    justificativa: 'Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado (teoria da atividade) — diferente do lugar do crime, em que se adota a teoria da ubiquidade (Art. 6º).'
  },
  {
    id: 'p2r_pen_10',
    disciplina: 'penal',
    topico: 'Teoria do Crime (Fato Típico, Ilicitude, Culpabilidade)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'O erro sobre elemento constitutivo do tipo penal, que exclui o dolo, mas permite a punição por crime culposo se previsto em lei, é denominado:',
    alternativas: [
      { letra: 'A', texto: 'Erro de proibição.', comentario: 'O erro de proibição incide sobre a ilicitude da conduta (o agente acredita estar agindo licitamente), não sobre elementos do tipo penal.' },
      { letra: 'B', texto: 'Erro de tipo.' },
      { letra: 'C', texto: 'Erro de execução (aberratio ictus).', comentario: 'Erro de execução ocorre quando o agente, por erro na execução, atinge pessoa diversa da pretendida — não se relaciona com exclusão do dolo por erro sobre elemento do tipo.' },
      { letra: 'D', texto: 'Erro sobre a pessoa.', comentario: 'Erro sobre a pessoa ocorre quando o agente confunde a identidade da vítima, mas responde como se tivesse atingido a pessoa realmente pretendida — não é o instituto que exclui o dolo mantendo a punição por culpa.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 20, CP',
    justificativa: 'O erro sobre elemento constitutivo do tipo legal do crime exclui o dolo, mas permite a punição por crime culposo, se previsto em lei — diferente do erro de proibição, que incide sobre a ilicitude da conduta (Art. 21).'
  },
  {
    id: 'p2r_pen_11',
    disciplina: 'penal',
    topico: 'Penas (Art. 32-76 CP)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'São requisitos objetivos para a substituição da pena privativa de liberdade por restritiva de direitos, entre outros:',
    alternativas: [
      { letra: 'A', texto: 'Pena privativa de liberdade não superior a 4 anos, em crime cometido sem violência ou grave ameaça, ou, qualquer que seja a pena, se o crime for culposo.' },
      { letra: 'B', texto: 'Pena privativa de liberdade não superior a 8 anos, independentemente da forma de execução do crime.', comentario: 'O limite de pena para substituição é de 4 anos (em crimes sem violência/grave ameaça), não 8 anos independente da forma de execução.' },
      { letra: 'C', texto: 'Reincidência específica em crime doloso.', comentario: 'A reincidência específica em crime doloso é, na verdade, um requisito NEGATIVO — em regra impede a substituição, salvo exceções.' },
      { letra: 'D', texto: 'Condenação exclusivamente por contravenção penal.', comentario: 'A substituição não se limita a condenações por contravenção penal — aplica-se a crimes que atendam aos requisitos objetivos e subjetivos do art. 44.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 44, I, CP',
    justificativa: 'A substituição exige, entre os requisitos objetivos, pena aplicada não superior a 4 anos em crime cometido sem violência ou grave ameaça à pessoa, ou qualquer que seja a pena aplicada, se o crime for culposo.'
  },
  {
    id: 'p2r_pen_12',
    disciplina: 'penal',
    topico: 'Princípios do Direito Penal',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'O princípio penal segundo o qual não há crime nem pena sem lei anterior que os defina é conhecido como princípio da:',
    alternativas: [
      { letra: 'A', texto: 'Insignificância.', comentario: 'Insignificância trata da irrelevância penal da lesão ao bem jurídico, não da exigência de lei prévia para definir crimes e penas.' },
      { letra: 'B', texto: 'Legalidade (reserva legal).' },
      { letra: 'C', texto: 'Proporcionalidade.', comentario: 'Proporcionalidade trata da adequação entre a gravidade da conduta e a sanção aplicada, não da exigência de lei prévia.' },
      { letra: 'D', texto: 'Adequação social.', comentario: 'Adequação social trata de condutas socialmente toleradas que não devem ser consideradas criminosas, não da exigência de lei prévia para definição de crimes.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 1º, CP e Art. 5º, XXXIX, CF',
    justificativa: 'O princípio da legalidade (ou reserva legal) estabelece que não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.'
  }
];
