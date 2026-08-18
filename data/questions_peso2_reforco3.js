// ============================================================
// QUESTIONS_PESO2_REFORCO3.JS — 15 questões inéditas fechando os
// últimos pontos finos de peso 2 identificados em auditoria de
// frequência: Maria da Penha (90% de frequência no edital mas com
// menos questões que leis de frequência menor), Medidas Cautelares
// Alternativas do Art. 319 CPP (só havia 1 questão), Ação Penal
// (só 3 questões) e ECA (só 7 questões).
// ============================================================

const QUESTIONS_PESO2_REFORCO3 = [
  // ---------------- MARIA DA PENHA (5 questões) ----------------
  {
    id: 'p2r3_mp_1',
    disciplina: 'legislacao',
    topico: 'Lei 11.340/06 - Lei Maria da Penha',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'São formas de violência doméstica e familiar contra a mulher previstas no Art. 7º da Lei Maria da Penha:',
    alternativas: [
      { letra: 'A', texto: 'Apenas violência física e psicológica.' },
      { letra: 'B', texto: 'Física, psicológica, sexual, patrimonial e moral.' },
      { letra: 'C', texto: 'Somente as previstas no Código Penal como crimes.' },
      { letra: 'D', texto: 'Física, patrimonial e institucional.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 7º, Lei 11.340/06',
    justificativa: 'O Art. 7º lista taxativamente cinco formas: violência física, psicológica, sexual, patrimonial e moral — cada uma com definição própria no próprio artigo.'
  },
  {
    id: 'p2r3_mp_2',
    disciplina: 'legislacao',
    topico: 'Lei 11.340/06 - Lei Maria da Penha',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Sobre a competência para processar e julgar os crimes praticados com violência doméstica e familiar contra a mulher:',
    alternativas: [
      { letra: 'A', texto: 'É sempre dos Juizados Especiais Criminais, por serem infrações de menor potencial ofensivo.' },
      { letra: 'B', texto: 'É dos Juizados de Violência Doméstica e Familiar contra a Mulher, com competência cível e criminal, sendo expressamente vedada a aplicação da Lei 9.099/95.' },
      { letra: 'C', texto: 'É exclusiva da Justiça Federal.' },
      { letra: 'D', texto: 'Depende de escolha da vítima entre o juizado comum e o especializado.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 14 e Art. 41, Lei 11.340/06',
    justificativa: 'Os Juizados de Violência Doméstica e Familiar contra a Mulher têm competência cível e criminal híbrida, e o Art. 41 veda expressamente a aplicação da Lei 9.099/95 (Juizados Especiais) aos crimes praticados com violência doméstica, ainda que de menor potencial ofensivo.'
  },
  {
    id: 'p2r3_mp_3',
    disciplina: 'legislacao',
    topico: 'Lei 11.340/06 - Lei Maria da Penha',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A ação penal no crime de lesão corporal leve praticado no contexto de violência doméstica (Art. 129, §9º, CP) é:',
    alternativas: [
      { letra: 'A', texto: 'Privada, dependendo de queixa-crime da vítima.' },
      { letra: 'B', texto: 'Pública incondicionada, conforme entendimento do STF (ADI 4.424).' },
      { letra: 'C', texto: 'Pública condicionada à representação, podendo a vítima retratar-se livremente a qualquer tempo.' },
      { letra: 'D', texto: 'Condicionada à autorização do Conselho Tutelar.' }
    ],
    gabarito: 'B',
    artigo: 'STF, ADI 4.424',
    justificativa: 'O STF, no julgamento da ADI 4.424, definiu que a ação penal para lesão corporal leve em violência doméstica é pública incondicionada, dispensando representação da vítima, para garantir proteção estatal efetiva.'
  },
  {
    id: 'p2r3_mp_4',
    disciplina: 'legislacao',
    topico: 'Lei 11.340/06 - Lei Maria da Penha',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'São medidas protetivas de urgência que obrigam o agressor, previstas no Art. 22 da Lei Maria da Penha:',
    alternativas: [
      { letra: 'A', texto: 'Suspensão da posse ou restrição do porte de armas; afastamento do lar; proibição de aproximação e contato com a ofendida.' },
      { letra: 'B', texto: 'Prisão perpétua em caso de reincidência.' },
      { letra: 'C', texto: 'Obrigatoriedade de pagamento de cesta básica à vítima.' },
      { letra: 'D', texto: 'Transferência automática de guarda dos filhos ao agressor.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 22, Lei 11.340/06',
    justificativa: 'O Art. 22 prevê, entre outras medidas que obrigam o agressor: suspensão de posse/restrição de porte de armas, afastamento do lar, proibição de aproximação e contato, restrição de visitas aos dependentes, e prestação de alimentos provisórios.'
  },
  {
    id: 'p2r3_mp_5',
    disciplina: 'legislacao',
    topico: 'Lei 11.340/06 - Lei Maria da Penha',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'Para a caracterização da violência doméstica e familiar, segundo o Art. 5º da Lei Maria da Penha, é necessário que a vítima seja mulher e que a violência ocorra:',
    alternativas: [
      { letra: 'A', texto: 'Exclusivamente dentro da residência do casal.' },
      { letra: 'B', texto: 'No âmbito da unidade doméstica, da família, ou em qualquer relação íntima de afeto, sendo irrelevante a orientação sexual do agressor.' },
      { letra: 'C', texto: 'Apenas entre cônjuges casados civilmente.' },
      { letra: 'D', texto: 'Somente quando praticada por homem contra mulher, excluindo violência entre mulheres.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 5º, Lei 11.340/06',
    justificativa: 'A jurisprudência do STJ pacificou que a Lei Maria da Penha se aplica também a relações homoafetivas femininas, bastando a relação de afeto ou convívio e a condição de vulnerabilidade da mulher, independentemente da orientação sexual do agressor (que pode inclusive ser mulher).'
  },

  // ---------------- MEDIDAS CAUTELARES ALTERNATIVAS (4 questões) ----------------
  {
    id: 'p2r3_pen_1',
    disciplina: 'penal',
    topico: 'Medidas Cautelares Alternativas (Art. 319 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O comparecimento periódico em juízo, medida cautelar diversa da prisão, tem como finalidade:',
    alternativas: [
      { letra: 'A', texto: 'Informar e justificar atividades do investigado ou acusado, no prazo e nas condições fixadas pelo juiz.' },
      { letra: 'B', texto: 'Substituir definitivamente a pena privativa de liberdade após condenação.' },
      { letra: 'C', texto: 'Aplicar-se apenas a crimes culposos.' },
      { letra: 'D', texto: 'Ser cumulada obrigatoriamente com prisão domiciliar.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 319, I, CPP',
    justificativa: 'O comparecimento periódico em juízo, no prazo e nas condições fixadas pelo juiz, para informar e justificar atividades, é a primeira e mais branda das medidas cautelares diversas da prisão do Art. 319.'
  },
  {
    id: 'p2r3_pen_2',
    disciplina: 'penal',
    topico: 'Medidas Cautelares Alternativas (Art. 319 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A internação provisória, prevista como medida cautelar diversa da prisão no Art. 319, VII, do CPP, aplica-se:',
    alternativas: [
      { letra: 'A', texto: 'A qualquer investigado, independentemente de condição de saúde mental.' },
      { letra: 'B', texto: 'Ao inimputável ou semi-imputável, quando houver risco de reiteração de crimes praticados com violência ou grave ameaça.' },
      { letra: 'C', texto: 'Exclusivamente a condenados com trânsito em julgado.' },
      { letra: 'D', texto: 'A menores de 18 anos, em substituição à internação do ECA.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 319, VII, CPP',
    justificativa: 'A internação provisória se aplica ao acusado inimputável ou semi-imputável, quando houver elementos indicativos de periculosidade e risco de reiteração em crimes cometidos com violência ou grave ameaça, e for a única medida cautelar adequada.'
  },
  {
    id: 'p2r3_pen_3',
    disciplina: 'penal',
    topico: 'Medidas Cautelares Alternativas (Art. 319 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Sobre a fiança, medida cautelar diversa da prisão prevista no Art. 319, VIII, do CPP, é correto afirmar:',
    alternativas: [
      { letra: 'A', texto: 'Pode ser concedida pela autoridade policial ou pelo juiz, conforme o caso, nos crimes afiançáveis.' },
      { letra: 'B', texto: 'É cabível em qualquer crime, inclusive nos hediondos e equiparados.' },
      { letra: 'C', texto: 'Substitui integralmente a necessidade de outras medidas cautelares.' },
      { letra: 'D', texto: 'Só pode ser requerida após o trânsito em julgado da sentença.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 322 e 324, CPP',
    justificativa: 'A autoridade policial pode conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 anos; nos demais casos afiançáveis, a fiança é concedida pelo juiz. É vedada, entre outros, nos crimes hediondos e equiparados.'
  },
  {
    id: 'p2r3_pen_4',
    disciplina: 'penal',
    topico: 'Medidas Cautelares Alternativas (Art. 319 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'Segundo o Art. 282 do CPP, as medidas cautelares diversas da prisão devem observar, entre outros critérios:',
    alternativas: [
      { letra: 'A', texto: 'Necessidade e adequação, considerando a gravidade do crime, as circunstâncias do fato e as condições pessoais do indiciado ou acusado.' },
      { letra: 'B', texto: 'Aplicação automática e cumulativa de todas as medidas do Art. 319, sem análise de proporcionalidade.' },
      { letra: 'C', texto: 'Vigência indeterminada, sem possibilidade de revisão pelo juiz.' },
      { letra: 'D', texto: 'Exclusão de qualquer controle judicial posterior à decretação.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 282, CPP',
    justificativa: 'As medidas cautelares devem observar a necessidade para aplicação da lei penal, para a investigação ou instrução criminal, e para evitar a prática de infrações penais; e a adequação da medida à gravidade do crime, às circunstâncias do fato e às condições pessoais do indiciado ou acusado.'
  },

  // ---------------- AÇÃO PENAL (3 questões) ----------------
  {
    id: 'p2r3_pen_5',
    disciplina: 'penal',
    topico: 'Ação Penal (tipos e condições)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A regra geral da ação penal no direito brasileiro, salvo disposição legal em contrário, é a ação penal:',
    alternativas: [
      { letra: 'A', texto: 'Privada, de titularidade exclusiva do ofendido.' },
      { letra: 'B', texto: 'Pública incondicionada, de titularidade do Ministério Público, regida pelos princípios da obrigatoriedade, indisponibilidade e oficialidade.' },
      { letra: 'C', texto: 'Pública condicionada, dependendo sempre de representação.' },
      { letra: 'D', texto: 'Popular, podendo ser proposta por qualquer cidadão.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 100, CP',
    justificativa: 'Salvo disposição em contrário, a ação penal é pública, de titularidade privativa do Ministério Público (Art. 129, I, CF), regida pelos princípios da obrigatoriedade (o MP deve agir havendo justa causa), indisponibilidade (não pode desistir da ação) e oficialidade.'
  },
  {
    id: 'p2r3_pen_6',
    disciplina: 'penal',
    topico: 'Ação Penal (tipos e condições)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Na ação penal privada, o não oferecimento da queixa-crime no prazo legal pelo ofendido, ou seu silêncio, pode gerar:',
    alternativas: [
      { letra: 'A', texto: 'Decadência do direito de queixa, extinguindo a punibilidade.' },
      { letra: 'B', texto: 'Conversão automática em ação penal pública incondicionada.' },
      { letra: 'C', texto: 'Assunção obrigatória do polo ativo pelo Ministério Público, independente do prazo.' },
      { letra: 'D', texto: 'Nenhum efeito, podendo a queixa ser oferecida a qualquer tempo.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 38, CPP e Art. 107, IV, CP',
    justificativa: 'O direito de queixa deve ser exercido no prazo decadencial de 6 meses, contados do conhecimento da autoria; o decurso do prazo sem oferecimento gera decadência, causa de extinção da punibilidade (Art. 107, IV, CP).'
  },
  {
    id: 'p2r3_pen_7',
    disciplina: 'penal',
    topico: 'Ação Penal (tipos e condições)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'dificil',
    enunciado: 'A ação penal privada subsidiária da pública, prevista no Art. 5º, LIX, da CF, é cabível quando:',
    alternativas: [
      { letra: 'A', texto: 'O Ministério Público não oferece denúncia no prazo legal, permitindo ao ofendido oferecer queixa-crime substitutiva.' },
      { letra: 'B', texto: 'O réu é absolvido em primeira instância.' },
      { letra: 'C', texto: 'A vítima simplesmente discorda do teor da denúncia oferecida pelo MP.' },
      { letra: 'D', texto: 'O crime é de menor potencial ofensivo, dispensando qualquer manifestação do MP.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 5º, LIX, CF e Art. 29, CPP',
    justificativa: 'Diante da inércia do MP (não oferecimento de denúncia no prazo legal), o ofendido pode oferecer ação penal privada subsidiária da pública — mas o MP pode retomar a ação como parte principal a qualquer momento, repudiar a queixa e oferecer denúncia substitutiva, ou aditar a queixa oferecida.'
  },

  // ---------------- ECA (3 questões) ----------------
  {
    id: 'p2r3_eca_1',
    disciplina: 'legislacao',
    topico: 'ECA - Lei 8.069/90 (partes cobradas)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Ato infracional, segundo o ECA, é definido como:',
    alternativas: [
      { letra: 'A', texto: 'Qualquer comportamento inadequado do adolescente, ainda que não previsto como crime ou contravenção.' },
      { letra: 'B', texto: 'A conduta descrita como crime ou contravenção penal, praticada por criança ou adolescente.' },
      { letra: 'C', texto: 'Somente os crimes de natureza grave, com pena mínima superior a 4 anos.' },
      { letra: 'D', texto: 'Exclusivamente as infrações cometidas dentro de unidades de internação.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 103, ECA',
    justificativa: 'Considera-se ato infracional a conduta descrita como crime ou contravenção penal — o termo "ato infracional" substitui, tecnicamente, o termo "crime" quando praticado por criança ou adolescente, dada sua inimputabilidade penal (Art. 228, CF).'
  },
  {
    id: 'p2r3_eca_2',
    disciplina: 'legislacao',
    topico: 'ECA - Lei 8.069/90 (partes cobradas)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Em caso de apreensão de adolescente em flagrante de ato infracional, a autoridade policial deve:',
    alternativas: [
      { letra: 'A', texto: 'Encaminhá-lo imediatamente à autoridade judiciária, ou, na impossibilidade, à entidade de atendimento, com comunicação imediata ao juiz e à família.' },
      { letra: 'B', texto: 'Mantê-lo detido pelo mesmo prazo aplicável a adultos, sem comunicação especial.' },
      { letra: 'C', texto: 'Liberá-lo automaticamente, sem qualquer procedimento.' },
      { letra: 'D', texto: 'Aplicar diretamente medida socioeducativa de internação, sem intervenção judicial.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 172-174, ECA',
    justificativa: 'Apreendido o adolescente, deve ser desde logo encaminhado à autoridade policial competente, que, verificada a natureza da infração, lavrará auto de apreensão e encaminhará o adolescente à autoridade judiciária ou entidade de atendimento, comunicando de imediato a família ou pessoa indicada.'
  },
  {
    id: 'p2r3_eca_3',
    disciplina: 'legislacao',
    topico: 'ECA - Lei 8.069/90 (partes cobradas)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'A remissão, instituto previsto no ECA, pode ser concedida:',
    alternativas: [
      { letra: 'A', texto: 'Apenas pelo juiz, como forma de exclusão do processo, nunca como suspensão ou extinção.' },
      { letra: 'B', texto: 'Pelo Ministério Público, antes de iniciado o procedimento judicial, como forma de exclusão do processo; ou pela autoridade judiciária, como suspensão ou extinção do processo.' },
      { letra: 'C', texto: 'Exclusivamente pelo Conselho Tutelar.' },
      { letra: 'D', texto: 'Somente após o cumprimento integral de medida socioeducativa.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 126-127, ECA',
    justificativa: 'Antes de iniciado o procedimento judicial para apuração de ato infracional, o MP pode conceder a remissão como forma de exclusão do processo; iniciado o procedimento, a concessão da remissão pela autoridade judiciária importará na suspensão ou extinção do processo — em ambos os casos pode ser cumulada com medidas socioeducativas, exceto internação e semiliberdade.'
  }
];
