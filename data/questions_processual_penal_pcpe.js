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
  }
];
