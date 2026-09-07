// ============================================================
// QUESTIONS_PROCESSUAL_PENAL_PCPE — Reforço de Processual Penal
// exclusivo da PCPE (Polícia Civil de PE): cadeia de custódia da
// prova pericial (Arts. 158-A a 158-F do CPP, introduzidos pela Lei
// nº 13.964/2019 - Pacote Anticrime), tema de alta incidência em
// concursos de polícia judiciária por tratar diretamente da rotina
// de investigação (coleta e preservação de vestígios). Não é
// carregado para PPRN/PPPE (arquivo exclusivo da PCPE), então não
// altera o banco dessas carreiras. Conteúdo verificado em fontes
// oficiais/comentadas do texto do CPP (Planalto/artigos comentados).
// disciplina: 'penal', para agrupar junto de Direito Penal e
// Processual Penal no edital da PCPE.
// ============================================================

const QUESTIONS_PROCESSUAL_PENAL_PCPE = [
  {
    id: 'pcpe_proc_1',
    disciplina: 'penal',
    topico: 'Cadeia de Custódia - Conceito (Art. 158-A, caput, CPP)',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Nos termos do art. 158-A, caput, do Código de Processo Penal (introduzido pela Lei nº 13.964/2019 - Pacote Anticrime), cadeia de custódia é:',
    alternativas: [
      { letra: 'A', texto: 'O conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado, permitindo rastrear sua posse e manuseio desde o reconhecimento até o descarte.' },
      { letra: 'B', texto: 'Apenas o registro fotográfico do local do crime realizado pela autoridade policial.', comentario: 'Incorreta. A cadeia de custódia abrange todo o conjunto de procedimentos de rastreamento do vestígio, e não apenas o registro fotográfico, que é só uma das etapas (fixação).' },
      { letra: 'C', texto: 'O conjunto de provas testemunhais colhidas durante o inquérito policial.', comentario: 'Incorreta. A cadeia de custódia trata do vestígio material da infração penal, e não de prova testemunhal.' },
      { letra: 'D', texto: 'O prazo legal para conclusão do inquérito policial em crimes com vestígios materiais.', comentario: 'Incorreta. Cadeia de custódia não se refere a prazo processual, mas ao rastreamento e preservação do vestígio.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 158-A, caput, do CPP (Lei 13.964/2019)',
    justificativa: 'A lei define cadeia de custódia como o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado em locais ou em vítimas de crimes, a fim de rastrear sua posse e manuseio a partir do reconhecimento até o descarte.'
  },
  {
    id: 'pcpe_proc_2',
    disciplina: 'penal',
    topico: 'Cadeia de Custódia - Início (Art. 158-A, §1º, CPP)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'De acordo com o art. 158-A, §1º, do CPP, o início da cadeia de custódia se dá:',
    alternativas: [
      { letra: 'A', texto: 'Com a preservação do local de crime ou com procedimentos policiais ou periciais nos quais seja detectada a existência de vestígio.' },
      { letra: 'B', texto: 'Somente a partir da chegada do perito oficial ao local do crime.', comentario: 'Incorreta. A cadeia de custódia já se inicia com a preservação do local pelos agentes que primeiro ali chegarem, independentemente da chegada do perito.' },
      { letra: 'C', texto: 'Com a instauração formal do inquérito policial pela autoridade competente.', comentario: 'Incorreta. O início não depende de ato formal de instauração de inquérito, mas do momento em que se detecta a existência de vestígio.' },
      { letra: 'D', texto: 'Com a remessa dos autos do inquérito ao Ministério Público.', comentario: 'Incorreta. Esse é um momento processual posterior, sem relação com o início da cadeia de custódia do vestígio.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 158-A, §1º, do CPP',
    justificativa: 'O início da cadeia de custódia dá-se com a preservação do local de crime ou com procedimentos policiais ou periciais nos quais seja detectada a existência de vestígio.'
  },
  {
    id: 'pcpe_proc_3',
    disciplina: 'penal',
    topico: 'Cadeia de Custódia - Conceito de Vestígio (Art. 158-A, §3º, CPP)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Para os fins da cadeia de custódia, nos termos do art. 158-A, §3º, do CPP, vestígio é conceituado como:',
    alternativas: [
      { letra: 'A', texto: 'Todo objeto ou material bruto, visível ou latente, constatado ou recolhido, que se relacione à infração penal.' },
      { letra: 'B', texto: 'Apenas o laudo pericial produzido após a análise técnica do material apreendido.', comentario: 'Incorreta. O laudo é o documento que resulta da análise pericial, não se confundindo com o vestígio, que é o objeto ou material relacionado à infração.' },
      { letra: 'C', texto: 'Exclusivamente as impressões digitais e o material genético (DNA) encontrados no local do crime.', comentario: 'Incorreta. O conceito legal é amplo, abrangendo qualquer objeto ou material bruto relacionado à infração, e não apenas digitais e material genético.' },
      { letra: 'D', texto: 'O depoimento prestado pelas testemunhas presenciais do fato.', comentario: 'Incorreta. Depoimento é prova testemunhal, distinta do vestígio material tratado pela cadeia de custódia.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 158-A, §3º, do CPP',
    justificativa: 'Vestígio é todo objeto ou material bruto, visível ou latente, constatado ou recolhido, que se relacione à infração penal.'
  },
  {
    id: 'pcpe_proc_4',
    disciplina: 'penal',
    topico: 'Cadeia de Custódia - Etapas (Art. 158-B, CPP)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O art. 158-B do CPP elenca as etapas de rastreamento do vestígio na cadeia de custódia. Assinale a alternativa que reproduz a ordem prevista em lei:',
    alternativas: [
      { letra: 'A', texto: 'Reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte.' },
      { letra: 'B', texto: 'Coleta, reconhecimento, transporte, isolamento, descarte, acondicionamento, fixação, processamento, armazenamento e recebimento.', comentario: 'Incorreta. A ordem legal começa pelo reconhecimento e pelo isolamento, e não pela coleta, além de inverter outras etapas da sequência correta.' },
      { letra: 'C', texto: 'Isolamento, coleta, reconhecimento, descarte, transporte, acondicionamento, armazenamento, processamento, fixação e recebimento.', comentario: 'Incorreta. A sequência legal inicia pelo reconhecimento (não pelo isolamento) e não coloca o descarte no meio da cadeia, já que ele é a última etapa.' },
      { letra: 'D', texto: 'Fixação, reconhecimento, isolamento, transporte, coleta, recebimento, acondicionamento, descarte, processamento e armazenamento.', comentario: 'Incorreta. A fixação vem depois do reconhecimento e do isolamento, e o descarte é sempre a última etapa, não uma etapa intermediária.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 158-B do CPP',
    justificativa: 'A cadeia de custódia compreende, nesta ordem: I - reconhecimento; II - isolamento; III - fixação; IV - coleta; V - acondicionamento; VI - transporte; VII - recebimento; VIII - processamento; IX - armazenamento; X - descarte.'
  },
  {
    id: 'pcpe_proc_5',
    disciplina: 'penal',
    topico: 'Cadeia de Custódia - Coleta pelo Perito Oficial (Art. 158-C, CPP)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 158-C do CPP, a coleta dos vestígios deverá ser realizada, preferencialmente, por:',
    alternativas: [
      { letra: 'A', texto: 'Perito oficial, que dará o encaminhamento necessário para a central de custódia, mesmo quando for necessária a realização de exames complementares.' },
      { letra: 'B', texto: 'Qualquer agente policial presente no local, independentemente de formação técnica pericial.', comentario: 'Incorreta. A lei privilegia a atuação do perito oficial na coleta, justamente pela necessidade de técnica adequada de preservação do vestígio.' },
      { letra: 'C', texto: 'O delegado de polícia responsável pela investigação, com exclusividade.', comentario: 'Incorreta. A atribuição preferencial de coleta é do perito oficial, e não do delegado, que preside a investigação mas não substitui a função pericial.' },
      { letra: 'D', texto: 'O escrivão de polícia lotado na unidade de registro da ocorrência.', comentario: 'Incorreta. O escrivão não é o responsável técnico pela coleta de vestígios; essa atribuição é preferencialmente do perito oficial.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 158-C, caput, do CPP',
    justificativa: 'A coleta dos vestígios deve ser realizada preferencialmente por perito oficial, que dará o encaminhamento necessário à central de custódia, inclusive quando forem necessários exames complementares.'
  },
  {
    id: 'pcpe_proc_6',
    disciplina: 'penal',
    topico: 'Cadeia de Custódia - Acondicionamento (Art. 158-D, CPP)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Nos termos do art. 158-D do CPP, o acondicionamento do vestígio coletado deve observar, entre outras exigências:',
    alternativas: [
      { letra: 'A', texto: 'Recipientes selados com lacres de numeração individualizada, de forma a garantir a inviolabilidade e a idoneidade do vestígio.' },
      { letra: 'B', texto: 'Dispensa de qualquer lacre, bastando anotação em livro de ocorrências da unidade policial.', comentario: 'Incorreta. A lei exige recipientes selados com lacre numerado individualmente, e não mera anotação administrativa.' },
      { letra: 'C', texto: 'Uso de embalagens padronizadas, sem necessidade de numeração ou identificação individual do lacre.', comentario: 'Incorreta. A individualização da numeração do lacre é exigência expressa, justamente para garantir a rastreabilidade do vestígio.' },
      { letra: 'D', texto: 'Guarda informal do vestígio pelo próprio agente que o coletou, sem necessidade de lacre.', comentario: 'Incorreta. A guarda informal, sem lacre, compromete a idoneidade do vestígio e contraria a exigência legal de acondicionamento selado.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 158-D do CPP',
    justificativa: 'O acondicionamento deve ser feito em recipientes selados com lacres de numeração individualizada, garantindo a inviolabilidade e a idoneidade do vestígio.'
  },
  {
    id: 'pcpe_proc_7',
    disciplina: 'penal',
    topico: 'Cadeia de Custódia - Central de Custódia (Art. 158-E, CPP)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'De acordo com o art. 158-E do CPP, a central de custódia destinada à guarda dos vestígios deve ser criada:',
    alternativas: [
      { letra: 'A', texto: 'Nos Institutos de Criminalística.' },
      { letra: 'B', texto: 'Exclusivamente nas delegacias de polícia civil.', comentario: 'Incorreta. A central de custódia é vinculada aos Institutos de Criminalística, órgãos de perícia oficial, e não às delegacias.' },
      { letra: 'C', texto: 'No Ministério Público, como órgão fiscalizador externo da prova pericial.', comentario: 'Incorreta. O Ministério Público não é o órgão responsável pela central de custódia; essa atribuição é dos Institutos de Criminalística.' },
      { letra: 'D', texto: 'No Poder Judiciário, junto às varas criminais.', comentario: 'Incorreta. A central de custódia integra a estrutura da perícia oficial (Institutos de Criminalística), não o Poder Judiciário.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 158-E do CPP',
    justificativa: 'A central de custódia deve ser criada nos Institutos de Criminalística, unidade responsável pela guarda e controle dos vestígios encaminhados após a coleta.'
  },
  {
    id: 'pcpe_proc_8',
    disciplina: 'penal',
    topico: 'Cadeia de Custódia - Devolução do Material (Art. 158-F, CPP)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo o art. 158-F do CPP, após a realização da perícia, o material coletado deve ser:',
    alternativas: [
      { letra: 'A', texto: 'Devolvido à central de custódia, onde deve permanecer, ressalvada a possibilidade de depósito em local diverso mediante requerimento do diretor do órgão central de perícia oficial, quando faltar espaço ou condições adequadas.' },
      { letra: 'B', texto: 'Destruído imediatamente após a perícia, para evitar acúmulo de material na unidade.', comentario: 'Incorreta. A regra é a devolução à central de custódia para permanência, e não a destruição imediata do material.' },
      { letra: 'C', texto: 'Devolvido diretamente à vítima ou a seus familiares, independentemente de decisão da autoridade competente.', comentario: 'Incorreta. O material permanece sob controle da central de custódia, não sendo entregue diretamente a particulares sem decisão da autoridade competente.' },
      { letra: 'D', texto: 'Mantido indefinidamente em poder do perito que realizou o exame, sem vínculo com a central de custódia.', comentario: 'Incorreta. O material deve retornar à central de custódia após a perícia, e não permanecer com o perito individualmente.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 158-F do CPP',
    justificativa: 'Após a perícia, o material deve ser devolvido à central de custódia, onde deve permanecer; caso não haja espaço ou condições, a autoridade policial ou judiciária pode determinar depósito em local diverso, mediante requerimento do diretor do órgão central de perícia oficial.'
  },
  {
    id: 'pcpe_proc_9',
    disciplina: 'penal',
    topico: 'Cadeia de Custódia - Quebra e Consequências (Jurisprudência do STJ)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo entendimento consolidado do Superior Tribunal de Justiça sobre a quebra da cadeia de custódia da prova pericial, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'A quebra da cadeia de custódia pode comprometer a fidedignidade do vestígio (princípio da mesmidade), cabendo ao magistrado sopesar, no caso concreto, as consequências da falha sobre a validade da prova.' },
      { letra: 'B', texto: 'Qualquer falha na cadeia de custódia gera, automaticamente, a nulidade de todo o processo penal, independentemente de análise do caso concreto.', comentario: 'Incorreta. O STJ não adota nulidade automática; exige-se exame casuístico da repercussão da falha sobre a fidedignidade da prova.' },
      { letra: 'C', texto: 'A cadeia de custódia é mera formalidade administrativa interna da polícia, sem qualquer repercussão sobre a validade da prova pericial.', comentario: 'Incorreta. A cadeia de custódia tem relevância jurídica direta sobre a idoneidade e a validade da prova pericial, não sendo mera formalidade administrativa.' },
      { letra: 'D', texto: 'A observância da cadeia de custódia somente é exigida nos crimes de maior potencial ofensivo, não se aplicando às demais infrações penais.', comentario: 'Incorreta. As regras de cadeia de custódia do CPP não se limitam a crimes de maior potencial ofensivo, aplicando-se sempre que houver vestígio a ser periciado.' }
    ],
    gabarito: 'A',
    artigo: 'Arts. 158-A a 158-F do CPP c/c jurisprudência do STJ (ex.: HC 653.515/RJ)',
    justificativa: 'O STJ entende que a quebra da cadeia de custódia pode comprometer a fidedignidade do vestígio, à luz do princípio da mesmidade (o vestígio examinado deve ser o mesmo coletado na cena do crime), cabendo ao julgador avaliar, no caso concreto, a repercussão da falha sobre a validade da prova produzida.'
  },
  {
    id: 'pcpe_proc_10',
    disciplina: 'penal',
    topico: 'Lei 12.830/2013 - Natureza das Funções de Polícia Judiciária (Art. 2º, caput)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Nos termos do art. 2º, caput, da Lei nº 12.830/2013, as funções de polícia judiciária e a apuração das infrações penais exercidas pelo delegado de polícia são de natureza:',
    alternativas: [
      { letra: 'A', texto: 'Jurídica, essencial e exclusiva de Estado.' },
      { letra: 'B', texto: 'Meramente administrativa, dispensável em determinadas hipóteses.', comentario: 'Incorreta. A lei atribui às funções de polícia judiciária natureza jurídica, essencial e exclusiva de Estado, e não simples natureza administrativa dispensável.' },
      { letra: 'C', texto: 'Delegável a particulares mediante convênio ou contrato administrativo.', comentario: 'Incorreta. Por serem função exclusiva de Estado, não podem ser delegadas a particulares.' },
      { letra: 'D', texto: 'Subsidiária às atividades do Ministério Público, atuando apenas em caráter complementar.', comentario: 'Incorreta. A lei não trata a função policial como subsidiária ao Ministério Público, mas como função estatal própria.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 2º, caput, da Lei 12.830/2013',
    justificativa: 'As funções de polícia judiciária e a apuração das infrações penais exercidas pelo delegado de polícia são de natureza jurídica, essencial e exclusiva de Estado.'
  },
  {
    id: 'pcpe_proc_11',
    disciplina: 'penal',
    topico: 'Lei 12.830/2013 - Condução da Investigação Criminal (Art. 2º, §1º)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 2º, §1º, da Lei nº 12.830/2013, cabe ao delegado de polícia, na condição de autoridade policial, conduzir a investigação criminal por meio de inquérito policial ou de outro procedimento previsto em lei, que tem como objetivo:',
    alternativas: [
      { letra: 'A', texto: 'Apurar as circunstâncias, a materialidade e a autoria das infrações penais.' },
      { letra: 'B', texto: 'Substituir a atuação do Ministério Público na propositura da ação penal pública.', comentario: 'Incorreta. A investigação conduzida pelo delegado é fase pré-processual informativa; a propositura da ação penal pública é atribuição privativa do Ministério Público.' },
      { letra: 'C', texto: 'Fixar diretamente a pena aplicável ao investigado.', comentario: 'Incorreta. A fixação de pena é atividade jurisdicional, não integrando os objetivos da investigação criminal conduzida pelo delegado.' },
      { letra: 'D', texto: 'Autorizar, de forma definitiva e sem controle judicial, a aplicação de medidas cautelares.', comentario: 'Incorreta. Medidas cautelares que restringem direitos fundamentais dependem, em regra, de decisão judicial, e não de ato definitivo da autoridade policial.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 2º, §1º, da Lei 12.830/2013',
    justificativa: 'Ao delegado de polícia, na qualidade de autoridade policial, cabe a condução da investigação criminal por meio de inquérito policial ou de outro procedimento previsto em lei, que tem por objetivo apurar as circunstâncias, a materialidade e a autoria das infrações penais.'
  },
  {
    id: 'pcpe_proc_12',
    disciplina: 'penal',
    topico: 'Lei 12.830/2013 - Indiciamento como Ato Privativo (Art. 2º, §6º)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'De acordo com o art. 2º, §6º, da Lei nº 12.830/2013, e com a jurisprudência do STJ a respeito, é correto afirmar sobre o indiciamento que:',
    alternativas: [
      { letra: 'A', texto: 'É ato privativo do delegado de polícia, mediante análise técnico-jurídica fundamentada, não cabendo ao juiz determinar ou impedir sua realização.' },
      { letra: 'B', texto: 'Pode ser determinado diretamente pelo juiz, a pedido do Ministério Público, quando entender presentes indícios de autoria.', comentario: 'Incorreta. A jurisprudência veda a determinação judicial de indiciamento, por se tratar de ato privativo da autoridade policial.' },
      { letra: 'C', texto: 'Independe de fundamentação, bastando a simples instauração do inquérito policial.', comentario: 'Incorreta. A lei exige ato fundamentado, com análise técnico-jurídica do fato, indicando autoria, materialidade e circunstâncias.' },
      { letra: 'D', texto: 'É ato do Ministério Público, formalizado no momento do oferecimento da denúncia.', comentario: 'Incorreta. O indiciamento é ato da fase investigatória, privativo do delegado de polícia, e não do Ministério Público.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 2º, §6º, da Lei 12.830/2013',
    justificativa: 'O indiciamento é ato privativo do delegado de polícia, dar-se-á por ato fundamentado mediante análise técnico-jurídica do fato, indicando autoria, materialidade e suas circunstâncias, não cabendo ao juiz determiná-lo ou impedi-lo.'
  },
  {
    id: 'pcpe_proc_13',
    disciplina: 'penal',
    topico: 'Investigação Criminal - Não Exclusividade (STF, ADI 5.043)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O Supremo Tribunal Federal, ao julgar a ADI 5.043, declarou a inconstitucionalidade parcial, sem redução de texto, de dispositivo da Lei nº 12.830/2013, para afastar interpretação segundo a qual:',
    alternativas: [
      { letra: 'A', texto: 'A condução de qualquer procedimento investigativo de natureza criminal seria atribuição exclusiva do delegado de polícia, já que a Constituição também confere poderes investigatórios a outros órgãos, como o Ministério Público e as comissões parlamentares de inquérito.' },
      { letra: 'B', texto: 'O delegado de polícia teria competência para arquivar o inquérito policial sem participação do Ministério Público.', comentario: 'Incorreta. Essa não foi a interpretação afastada pelo STF na ADI 5.043, que tratou da exclusividade da condução da investigação criminal, e não do arquivamento do inquérito.' },
      { letra: 'C', texto: 'As funções de polícia judiciária deixariam de ser exercidas por órgão de natureza estatal.', comentario: 'Incorreta. A decisão não afasta a natureza estatal da função policial, mas apenas a interpretação de exclusividade absoluta na condução de investigações criminais.' },
      { letra: 'D', texto: 'O inquérito policial deixaria de ser peça meramente informativa e passaria a vincular obrigatoriamente a denúncia do Ministério Público.', comentario: 'Incorreta. O caráter informativo e não vinculante do inquérito policial não foi objeto da decisão na ADI 5.043.' }
    ],
    gabarito: 'A',
    artigo: 'STF, ADI 5.043 (declara inconstitucionalidade parcial, sem redução de texto, do art. 2º, §1º, da Lei 12.830/2013)',
    justificativa: 'O STF afastou interpretação que atribuísse ao delegado de polícia exclusividade na condução de qualquer procedimento investigativo criminal, reafirmando que a Constituição também confere poderes investigatórios a outros órgãos, como o Ministério Público e as CPIs, sem prejuízo da natureza própria da função de polícia judiciária.'
  },
  {
    id: 'pcpe_proc_14',
    disciplina: 'penal',
    topico: 'Prisão Temporária - Hipóteses (Art. 1º da Lei 7.960/1989)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 1º da Lei nº 7.960/1989, caberá prisão temporária, entre outras hipóteses legais, quando:',
    alternativas: [
      { letra: 'A', texto: 'For imprescindível para as investigações do inquérito policial.' },
      { letra: 'B', texto: 'O investigado se recusar a prestar depoimento em juízo, ainda que não haja risco à investigação.', comentario: 'Incorreta. A simples recusa a depor em juízo, sem repercussão sobre a investigação, não é hipótese legal de prisão temporária.' },
      { letra: 'C', texto: 'For necessária para garantir a aplicação da lei penal ao final do processo.', comentario: 'Incorreta. Essa é hipótese própria da prisão preventiva (art. 312 do CPP), e não da prisão temporária, cujas hipóteses estão no art. 1º da Lei 7.960/89.' },
      { letra: 'D', texto: 'O réu já tiver sido condenado em primeira instância, aguardando o trânsito em julgado.', comentario: 'Incorreta. Essa situação não é hipótese de prisão temporária, que é medida cautelar decretada durante a investigação, e não após condenação.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 1º, I, da Lei 7.960/1989',
    justificativa: 'A prisão temporária cabe, entre outras hipóteses do art. 1º, quando imprescindível para as investigações do inquérito policial.'
  },
  {
    id: 'pcpe_proc_15',
    disciplina: 'penal',
    topico: 'Prisão Temporária - Prazo (Art. 2º da Lei 7.960/1989)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Nos termos do art. 2º da Lei nº 7.960/1989, a prisão temporária, decretada pelo juiz em face de representação da autoridade policial ou de requerimento do Ministério Público, terá, em regra, o prazo de:',
    alternativas: [
      { letra: 'A', texto: '5 (cinco) dias, prorrogável por igual período em caso de extrema e comprovada necessidade.' },
      { letra: 'B', texto: '10 (dez) dias, improrrogável.', comentario: 'Incorreta. O prazo regra da Lei 7.960/89 é de 5 dias, prorrogável por igual período, e não de 10 dias improrrogáveis.' },
      { letra: 'C', texto: '30 (trinta) dias, prorrogável por mais 30 dias, aplicável a qualquer crime.', comentario: 'Incorreta. O prazo de 30 dias prorrogável por mais 30 é o previsto para os crimes hediondos e equiparados (Lei 8.072/90), e não a regra geral da Lei 7.960/89.' },
      { letra: 'D', texto: '24 (vinte e quatro) horas, sem possibilidade de prorrogação.', comentario: 'Incorreta. 24 horas é o prazo para a decisão fundamentada do juiz sobre a representação, e não a duração da prisão temporária.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 2º, caput, da Lei 7.960/1989',
    justificativa: 'A prisão temporária será decretada pelo juiz, em face da representação da autoridade policial ou de requerimento do Ministério Público, e terá o prazo de 5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade.'
  },
  {
    id: 'pcpe_proc_16',
    disciplina: 'penal',
    topico: 'Reconhecimento de Pessoas - Formalidades (Art. 226 do CPP)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Sobre o procedimento de reconhecimento de pessoas previsto no art. 226 do CPP, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Exige, entre outras formalidades, a descrição prévia das características físicas pela pessoa que fará o reconhecimento e a lavratura de auto pormenorizado assinado pela autoridade, pela pessoa chamada a reconhecer e por duas testemunhas presenciais, sob pena de nulidade do reconhecimento.' },
      { letra: 'B', texto: 'É mera recomendação doutrinária, sem caráter vinculante para a autoridade policial ou judicial.', comentario: 'Incorreta. O STJ consolidou entendimento de que as formalidades do art. 226 do CPP são de observância obrigatória, sob pena de nulidade do reconhecimento.' },
      { letra: 'C', texto: 'Dispensa qualquer formalização quando a vítima já conhecia o suspeito antes do fato investigado.', comentario: 'Incorreta. A lei não prevê essa dispensa; as formalidades do art. 226 aplicam-se ao procedimento de reconhecimento formal, independentemente de conhecimento prévio alegado.' },
      { letra: 'D', texto: 'Aplica-se exclusivamente ao reconhecimento realizado em juízo, não alcançando a fase de investigação policial.', comentario: 'Incorreta. As formalidades do art. 226 são exigidas tanto na fase investigativa quanto em juízo, sob pena de invalidade da prova.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 226 do CPP',
    justificativa: 'O reconhecimento de pessoas exige, entre outras formalidades, a descrição prévia das características físicas do reconhecendo, a reunião de pessoas com características semelhantes (ou fotografias, no reconhecimento fotográfico) e a lavratura de auto pormenorizado assinado pela autoridade, pela pessoa chamada a reconhecer e por duas testemunhas presenciais, cujo descumprimento gera, conforme jurisprudência do STJ, a nulidade do reconhecimento.'
  }
];
