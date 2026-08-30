// QUESTIONS_PREMIUM_20 – 20 questões de placeholder para o PPRN Study App
const QUESTIONS_PREMIUM_20 = [
  {
    id: "premium20_001",
    disciplina: "penal",
    topico: "Parte Geral",
    peso: 1,
    mostCobrado: true,
    dificuldade: "media",
    enunciado: "Qual é o menor prazo prescricional da pretensão punitiva previsto na tabela do Código Penal (aplicável quando a pena máxima cominada não exceder 1 ano)?",
    alternativas: [
      { letra: "A", texto: "2 anos", comentario: "Incorreta. O menor prazo da tabela do art. 109 do CP é de 3 anos; não há previsão de prazo prescricional de 2 anos nessa tabela." },
      { letra: "B", texto: "3 anos" },
      { letra: "C", texto: "4 anos", comentario: "Incorreta. 4 anos é o prazo aplicável quando a pena máxima cominada é superior a 1 ano e não excede 2 anos (art. 109, V) — não é o menor prazo da tabela." },
      { letra: "D", texto: "5 anos", comentario: "Incorreta. 5 anos é o prazo aplicável a penas máximas superiores a 2 anos e não excedentes a 4 (art. 109, IV) — não é o menor prazo da tabela." }
    ],
    gabarito: "B",
    artigo: "Art. 109, VI, Código Penal",
    justificativa: "A tabela de prescrição da pretensão punitiva está no art. 109 do CP (e não no art. 107, que trata das causas de extinção da punibilidade em geral). O menor prazo previsto é de 3 anos, aplicável quando o máximo da pena cominada não exceder 1 ano (art. 109, VI)."
  },
  {
    id: "premium20_002",
    disciplina: "penal",
    topico: "Parte Geral",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual é a pena mínima para o crime de furto simples?",
    alternativas: [
      { letra: "A", texto: "Reclusão de 1 a 4 anos e multa" },
      { letra: "B", texto: "Reclusão de 2 a 4 anos", comentario: "Incorreta. O piso da pena de reclusão do furto simples é de 1 ano, e não 2, conforme o art. 155, caput, do CP." },
      { letra: "C", texto: "Multa", comentario: "Incorreta. A multa é cominada cumulativamente com a reclusão, mas não é a única pena prevista para o furto simples." },
      { letra: "D", texto: "Nenhuma", comentario: "Incorreta. O furto simples tem pena expressamente cominada em lei (reclusão de 1 a 4 anos e multa)." }
    ],
    gabarito: "A",
    artigo: "Art. 155, Código Penal",
    justificativa: "Furto simples tem pena de RECLUSÃO (e não detenção) de 1 a 4 anos, e multa, conforme o art. 155, caput, do CP."
  },
  {
    id: "premium20_003",
    disciplina: "penal",
    topico: "Parte Especial",
    peso: 2,
    mostCobrado: true,
    dificuldade: "dificil",
    enunciado: "Qual a causa de aumento de pena prevista no art. 121, §2º, do Código Penal?",
    alternativas: [
      { letra: "A", texto: "Motivo torpe", comentario: "Correta em si, mas incompleta: o §2º do art. 121 também prevê o uso de veneno e o emprego de fogo, entre outras qualificadoras, por isso a resposta mais completa reúne todas as opções." },
      { letra: "B", texto: "Uso de veneno", comentario: "Correta em si, mas incompleta: o §2º do art. 121 também prevê o motivo torpe e o emprego de fogo, entre outras qualificadoras, por isso a resposta mais completa reúne todas as opções." },
      { letra: "C", texto: "Fogo crepitante", comentario: "Correta em si, mas incompleta: o §2º do art. 121 também prevê o motivo torpe e o uso de veneno, entre outras qualificadoras, por isso a resposta mais completa reúne todas as opções." },
      { letra: "D", texto: "Qualquer das anteriores" }
    ],
    gabarito: "D",
    artigo: "Art. 121, §2º, Código Penal",
    justificativa: "Todas as hipóteses citadas são causas de aumento previstas no §2º."
  },
  {
    id: "premium20_004",
    disciplina: "constitucional",
    topico: "Direitos Fundamentais",
    peso: 1,
    mostCobrado: true,
    dificuldade: "media",
    enunciado: "Qual o fundamento constitucional específico para a tutela (proteção) dos dados pessoais?",
    alternativas: [
      { letra: "A", texto: "Art. 5º, inciso X", comentario: "Incorreta. O inciso X trata da inviolabilidade da intimidade, vida privada, honra e imagem — tema relacionado, mas não é o fundamento específico introduzido para a proteção de dados pessoais, que é o inciso LXXIX." },
      { letra: "B", texto: "Art. 5º, inciso XII", comentario: "Incorreta. O inciso XII trata da inviolabilidade do sigilo de correspondência e de dados/comunicações — tema relacionado, mas não é o fundamento específico introduzido para a proteção de dados pessoais, que é o inciso LXXIX." },
      { letra: "C", texto: "Art. 5º, inciso XIII", comentario: "Incorreta. O inciso XIII trata da liberdade de exercício de trabalho, ofício ou profissão, sem relação com proteção de dados pessoais." },
      { letra: "D", texto: "Art. 5º, inciso LXXIX" }
    ],
    gabarito: "D",
    artigo: "Art. 5º, inc. LXXIX da CF",
    justificativa: "A Emenda Constitucional nº 115/2022 incluiu o inciso LXXIX ao art. 5º da CF, assegurando expressamente, nos termos da lei, o direito à proteção dos dados pessoais, inclusive nos meios digitais. O inciso XIII trata da liberdade de exercício de trabalho, ofício ou profissão (não tem relação com dados pessoais); o inciso X trata de intimidade/vida privada e o XII trata da inviolabilidade do sigilo de dados e comunicações — ambos relacionados ao tema, mas o fundamento específico e mais direto é o LXXIX."
  },
  {
    id: "premium20_005",
    disciplina: "constitucional",
    topico: "Organização do Estado",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual o número de membros do Conselho Nacional de Justiça?",
    alternativas: [
      { letra: "A", texto: "7", comentario: "Incorreta. O número de membros do CNJ previsto no art. 103-B da CF é 15, não 7." },
      { letra: "B", texto: "9", comentario: "Incorreta. O número de membros do CNJ previsto no art. 103-B da CF é 15, não 9." },
      { letra: "C", texto: "11", comentario: "Incorreta. O número de membros do CNJ previsto no art. 103-B da CF é 15, não 11 (11 é o número de ministros do STF)." },
      { letra: "D", texto: "15" }
    ],
    gabarito: "D",
    artigo: "Art. 103-B, CF",
    justificativa: "O CNJ é composto por 15 membros, com mandato de 2 anos, admitida uma recondução, conforme o art. 103-B da CF/88 (incluído pela EC 45/2004)."
  },
  {
    id: "premium20_006",
    disciplina: "administrativo",
    topico: "Lei 14.133/2021",
    peso: 2,
    mostCobrado: true,
    dificuldade: "media",
    enunciado: "Em qual hipótese a licitação pode ser dispensada segundo a Lei 14.133/2021 (Nova Lei de Licitações)?",
    alternativas: [
      { letra: "A", texto: "Valor estimado acima de 10% do orçamento", comentario: "Incorreta. Não existe essa hipótese de dispensa na Lei 14.133/2021; a dispensa por valor tem por base limites monetários fixos, não percentual do orçamento." },
      { letra: "B", texto: "Aquisição de bens de uso pessoal", comentario: "Incorreta. Essa hipótese não consta do rol de dispensa do art. 75 da Lei 14.133/2021." },
      { letra: "C", texto: "Emergência ou calamidade pública" },
      { letra: "D", texto: "Quando houver apenas um fornecedor no mercado", comentario: "Incorreta. Fornecedor exclusivo é hipótese de inexigibilidade de licitação (art. 74, I), por inviabilidade de competição, e não de dispensa." }
    ],
    gabarito: "C",
    artigo: "Art. 75, VIII da Lei 14.133/2021",
    justificativa: "A Lei 14.133/2021 (que revogou integralmente a Lei 8.666/93) permite a dispensa de licitação em casos de emergência ou calamidade pública, quando caracterizada urgência de atendimento de situação que possa ocasionar prejuízo ou comprometer a segurança de pessoas, obras, serviços ou bens (art. 75, VIII)."
  },
  {
    id: "premium20_007",
    disciplina: "administrativo",
    topico: "Licitações",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual a modalidade de licitação, prevista na Lei 14.133/2021, destinada à aquisição de bens e serviços comuns e que utiliza o critério de julgamento por menor preço ou maior desconto?",
    alternativas: [
      { letra: "A", texto: "Concorrência", comentario: "Incorreta. A concorrência é destinada a contratações de maior vulto/complexidade e não é a modalidade específica de bens e serviços comuns com julgamento sempre por menor preço ou maior desconto — essa é característica do pregão." },
      { letra: "B", texto: "Diálogo Competitivo", comentario: "Incorreta. O diálogo competitivo destina-se a contratações complexas em que a Administração dialoga com licitantes pré-selecionados, e não à aquisição simples de bens e serviços comuns." },
      { letra: "C", texto: "Pregão" },
      { letra: "D", texto: "Concurso", comentario: "Incorreta. O concurso destina-se à escolha de trabalho técnico, científico ou artístico mediante prêmio, sem relação com aquisição de bens e serviços comuns." }
    ],
    gabarito: "C",
    artigo: "Art. 6º, XLI e Art. 29, Lei 14.133/2021",
    justificativa: "O Pregão é a modalidade destinada à aquisição de bens e serviços comuns, sendo o critério de julgamento sempre o de menor preço ou maior desconto (art. 6º, XLI, Lei 14.133/2021). Nota: a Lei 14.133/2021 revogou a Lei 8.666/93 e extinguiu as antigas modalidades 'tomada de preços' e 'convite', criando o 'diálogo competitivo'."
  },
  {
    id: "premium20_008",
    disciplina: "etica",
    topico: "Código de Ética",
    peso: 1,
    mostCobrado: false,
    dificuldade: "media",
    enunciado: "Qual princípio ética impede o agente de receber presentes de investigados?",
    alternativas: [
      { letra: "A", texto: "Imparcialidade", comentario: "Incorreta. A imparcialidade veda tratamento diferenciado indevido entre as partes, mas o princípio específico que veda o recebimento de vantagens/benefícios de investigados é a probidade." },
      { letra: "B", texto: "Probidade" },
      { letra: "C", texto: "Legalidade", comentario: "Incorreta. A legalidade exige atuação conforme a lei, mas não é o princípio específico voltado à vedação de recebimento de presentes/vantagens indevidas." },
      { letra: "D", texto: "Objetividade", comentario: "Incorreta. A objetividade relaciona-se à condução técnica e imparcial do trabalho investigativo, não sendo o princípio específico que veda receber presentes de investigados." }
    ],
    gabarito: "B",
    artigo: "Art. 5º, Código de Ética da Polícia",
    justificativa: "A probidade impede aceitar benefícios de investigados."
  },
  {
    id: "premium20_009",
    disciplina: "etica",
    topico: "Conduta",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "É permitido ao policial usar redes sociais para divulgar investigação em curso?",
    alternativas: [
      { letra: "A", texto: "Sim, se for relevante", comentario: "Incorreta. A relevância do caso não autoriza a quebra do sigilo investigativo; a divulgação em redes sociais compromete a preservação do sigilo independentemente da relevância do fato." },
      { letra: "B", texto: "Não, por violar sigilo" },
      { letra: "C", texto: "Só com autorização judicial", comentario: "Incorreta. A regra geral é a vedação à divulgação por preservação do sigilo investigativo, e não uma permissão condicionada a autorização judicial específica para uso de redes sociais." },
      { letra: "D", texto: "Depende da gravidade", comentario: "Incorreta. A gravidade do caso não é o critério que autoriza a divulgação; o que se preserva é o sigilo da investigação em curso, independentemente da gravidade do fato apurado." }
    ],
    gabarito: "B",
    artigo: "Art. 12, Código de Ética",
    justificativa: "Divulgação impede a preservação do sigilo da investigação."
  },
  {
    id: "premium20_010",
    disciplina: "penal",
    topico: "Procedimento Penal",
    peso: 2,
    mostCobrado: true,
    dificuldade: "dificil",
    enunciado: "Qual o prazo legal para o oferecimento de denúncia quando o réu estiver solto ou afiançado?",
    alternativas: [
      { letra: "A", texto: "15 dias" },
      { letra: "B", texto: "30 dias", comentario: "Incorreta. Não há previsão desse prazo no art. 46 do CPP; o prazo correto para réu solto ou afiançado é de 15 dias." },
      { letra: "C", texto: "60 dias", comentario: "Incorreta. Não há previsão desse prazo no art. 46 do CPP; o prazo correto para réu solto ou afiançado é de 15 dias." },
      { letra: "D", texto: "90 dias", comentario: "Incorreta. Não há previsão desse prazo no art. 46 do CPP; o prazo correto para réu solto ou afiançado é de 15 dias." }
    ],
    gabarito: "A",
    artigo: "Art. 46, Código de Processo Penal",
    justificativa: "Conforme o art. 46 do CPP, o prazo para oferecimento da denúncia é de 5 dias, contados do recebimento dos autos, se o réu estiver preso, e de 15 dias se estiver solto ou afiançado. Não há previsão legal de prazo de 30 ou 60 dias no CPP para essa hipótese."
  },
  {
    id: "premium20_011",
    disciplina: "penal",
    topico: "Recursos",
    peso: 1,
    mostCobrado: false,
    dificuldade: "media",
    enunciado: "Qual recurso cabe contra sentença condenatória no CPP?",
    alternativas: [
      { letra: "A", texto: "Apelação" },
      { letra: "B", texto: "Recurso Ordinário", comentario: "Incorreta. O recurso ordinário constitucional destina-se a hipóteses específicas (ex.: habeas corpus denegado em única instância pelos tribunais superiores), e não é o recurso cabível, em regra, contra sentença condenatória de primeiro grau." },
      { letra: "C", texto: "Revisão Criminal", comentario: "Incorreta. A revisão criminal é ação autônoma cabível após o trânsito em julgado da condenação, e não recurso contra a sentença condenatória." },
      { letra: "D", texto: "Habeas Corpus", comentario: "Incorreta. O habeas corpus é ação constitucional voltada à tutela da liberdade de locomoção, e não o recurso próprio contra sentença condenatória." }
    ],
    gabarito: "A",
    artigo: "Art. 593, CPP",
    justificativa: "Contra sentença condenatória, cabe a apelação."
  },
  {
    id: "premium20_012",
    disciplina: "penal",
    topico: "Instrução Criminal",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual a finalidade principal da audiência de instrução e julgamento?",
    alternativas: [
      { letra: "A", texto: "Produzir prova oral" },
      { letra: "B", texto: "Aplicar pena", comentario: "Incorreta. A aplicação da pena ocorre na sentença, proferida após a instrução, e não é a finalidade da própria audiência." },
      { letra: "C", texto: "Negociar acordo", comentario: "Incorreta. Eventual negociação (ex.: acordo de não persecução penal) ocorre em momento processual distinto, não sendo a finalidade da audiência de instrução e julgamento." },
      { letra: "D", texto: "Encerrar o processo", comentario: "Incorreta. A audiência não encerra o processo por si só; após ela ainda há a fase de alegações finais e sentença." }
    ],
    gabarito: "A",
    artigo: "Art. 400, CPP",
    justificativa: "A audiência visa a produção de prova oral."
  },
  {
    id: "premium20_013",
    disciplina: "penal",
    topico: "Crimes contra a Administração",
    peso: 2,
    mostCobrado: true,
    dificuldade: "dificil",
    enunciado: "Qual a pena mínima para crime de peculato?",
    alternativas: [
      { letra: "A", texto: "Reclusão de 2 a 4 anos" },
      { letra: "B", texto: "Reclusão de 4 a 6 anos", comentario: "Incorreta. O piso da pena de reclusão do peculato (art. 312, caput, CP) é de 2 anos, e não 4." },
      { letra: "C", texto: "Detenção de 1 a 3 anos", comentario: "Incorreta. O peculato é punido com RECLUSÃO, e não detenção, e o piso da pena é de 2 anos." },
      { letra: "D", texto: "Multa", comentario: "Incorreta. A multa é cominada cumulativamente com a reclusão, mas não é a única pena prevista para o peculato." }
    ],
    gabarito: "A",
    artigo: "Art. 312, CP",
    justificativa: "Peculato tem pena de reclusão de 2 a 4 anos."
  },
  {
    id: "premium20_014",
    disciplina: "penal",
    topico: "Responsabilidade Penal",
    peso: 1,
    mostCobrado: false,
    dificuldade: "media",
    enunciado: "Qual é a diferença entre dolo direto e dolo eventual?",
    alternativas: [
      { letra: "A", texto: "Direto: intenção clara; Eventual: risco aceito" },
      { letra: "B", texto: "Direto: risco aceito; Eventual: intenção clara", comentario: "Incorreta. A relação está invertida: o dolo direto é que corresponde à intenção clara de produzir o resultado, e o dolo eventual é que corresponde à aceitação do risco de produzi-lo." },
      { letra: "C", texto: "Não há diferença", comentario: "Incorreta. Dolo direto e dolo eventual são espécies distintas de dolo, com elementos volitivos diferentes (intenção direta x assunção do risco)." },
      { letra: "D", texto: "Ambos são culpa", comentario: "Incorreta. Dolo direto e dolo eventual são espécies de dolo (art. 18, I, CP), e não de culpa (art. 18, II, CP)." }
    ],
    gabarito: "A",
    artigo: "Art. 18, CP",
    justificativa: "Dolo direto é intenção clara, dolo eventual aceita o risco."
  },
  {
    id: "premium20_015",
    disciplina: "constitucional",
    topico: "Controle de Constitucionalidade",
    peso: 1,
    mostCobrado: true,
    dificuldade: "media",
    enunciado: "Qual a diferença entre ADI e ADPF?",
    alternativas: [
      { letra: "A", texto: "ADI julga lei; ADPF trata de atos do poder público", comentario: "Incorreta. A ADI também pode ter por objeto lei ou ato normativo, mas essa descrição simplifica demais a distinção; a ADPF é cabível quando não há outro meio eficaz para sanar a lesividade, tratando de preceito fundamental, e não apenas de \"atos do poder público\" em geral." },
      { letra: "B", texto: "ADI julga constitucionalidade; ADPF trata de outros fundamentos" },
      { letra: "C", texto: "Não há diferença", comentario: "Incorreta. ADI e ADPF são ações de controle concentrado de constitucionalidade distintas, com objetos e hipóteses de cabimento próprios." },
      { letra: "D", texto: "Ambas tratam de processos eleitorais", comentario: "Incorreta. Nem ADI nem ADPF são instrumentos de contencioso eleitoral; ambas são ações do controle concentrado de constitucionalidade." }
    ],
    gabarito: "B",
    artigo: "Art. 102, CF",
    justificativa: "ADI discute lei ou ato normativo; ADPF trata de outros casos relevantes à Constituição."
  },
  {
    id: "premium20_016",
    disciplina: "etica",
    topico: "Abuso de Autoridade",
    peso: 2,
    mostCobrado: true,
    dificuldade: "dificil",
    enunciado: "Qual o crime previsto no art. 332 do CP?",
    alternativas: [
      { letra: "A", texto: "Corrupção passiva", comentario: "Incorreta. A corrupção passiva está tipificada no art. 317 do CP, e não no art. 332." },
      { letra: "B", texto: "Tráfico de influência" },
      { letra: "C", texto: "Coação", comentario: "Incorreta. A coação no curso do processo está tipificada no art. 344 do CP, e não no art. 332." },
      { letra: "D", texto: "Concussão", comentario: "Incorreta. A concussão está tipificada no art. 316 do CP, e não no art. 332." }
    ],
    gabarito: "B",
    artigo: "Art. 332, CP",
    justificativa: "O art. 332 do CP tipifica o crime de Tráfico de Influência (solicitar, exigir, cobrar ou obter vantagem a pretexto de influir em ato de funcionário público no exercício da função). O abuso de autoridade não está previsto no Código Penal, mas sim na Lei nº 13.869/2019."
  },
  {
    id: "premium20_017",
    disciplina: "administrativo",
    topico: "Processo Administrativo",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual o princípio que garante o contraditório no processo administrativo?",
    alternativas: [
      { letra: "A", texto: "Legalidade", comentario: "Incorreta. A legalidade exige que a Administração atue nos limites da lei, mas o princípio específico que assegura o contraditório é o da ampla defesa (art. 5º, LV, CF)." },
      { letra: "B", texto: "Impessoalidade", comentario: "Incorreta. A impessoalidade veda tratamento diferenciado indevido, mas não é o princípio que assegura especificamente o contraditório." },
      { letra: "C", texto: "Ampla defesa" },
      { letra: "D", texto: "Publicidade", comentario: "Incorreta. A publicidade garante a transparência dos atos administrativos, mas não é o princípio que assegura especificamente o contraditório." }
    ],
    gabarito: "C",
    artigo: "Art. 5º, LV da CF",
    justificativa: "Ampla defesa e o contraditório são garantidos pelo LV."
  },
  {
    id: "premium20_018",
    disciplina: "penal",
    topico: "Crimes contra a Vida",
    peso: 1,
    mostCobrado: true,
    dificuldade: "media",
    enunciado: "Qual a diferença entre homicídio doloso e culposo?",
    alternativas: [
      { letra: "A", texto: "Doloso tem intenção; Culposo não" },
      { letra: "B", texto: "Culposo tem intenção; Doloso não", comentario: "Incorreta. A relação está invertida: é o homicídio doloso que envolve a intenção de matar (ou a assunção do risco), enquanto o culposo decorre de imprudência, negligência ou imperícia, sem intenção." },
      { letra: "C", texto: "Ambos são sem intenção", comentario: "Incorreta. O homicídio doloso pressupõe intenção (ou aceitação do risco) de matar; apenas o culposo é praticado sem intenção." },
      { letra: "D", texto: "Não há diferença", comentario: "Incorreta. Doloso e culposo são modalidades distintas do homicídio, com penas e elementos subjetivos diferentes (art. 121, caput, e §3º, CP)." }
    ],
    gabarito: "A",
    artigo: "Art. 121, CP",
    justificativa: "Doloso implica intenção, culposo implica imprudência ou negligência."
  },
  {
    id: "premium20_019",
    disciplina: "penal",
    topico: "Prisão Preventiva",
    peso: 2,
    mostCobrado: true,
    dificuldade: "dificil",
    enunciado: "Em que situação a prisão preventiva pode ser decretada segundo o CPP?",
    alternativas: [
      { letra: "A", texto: "Quando houver prova da culpa", comentario: "Correta em si (segundo o critério adotado nesta questão), mas incompleta: o CPP também prevê o risco de fuga e a gravidade do crime como fundamentos, por isso a resposta mais completa reúne todas as opções." },
      { letra: "B", texto: "Quando houver risco de fuga", comentario: "Correta em si, mas incompleta: o CPP também prevê a gravidade do crime e outros fundamentos, por isso a resposta mais completa reúne todas as opções." },
      { letra: "C", texto: "Quando o crime for hediondo", comentario: "Correta em si, mas incompleta: o CPP também prevê o risco de fuga e outros fundamentos, por isso a resposta mais completa reúne todas as opções." },
      { letra: "D", texto: "Todas as anteriores" }
    ],
    gabarito: "D",
    artigo: "Art. 312, CPP",
    justificativa: "A prisão preventiva pode ser decretada nas hipóteses de prova da culpa, risco de fuga, ou a gravidade do crime."
  },
  {
    id: "premium20_020",
    disciplina: "constitucional",
    topico: "Direitos Sociais",
    peso: 1,
    mostCobrado: false,
    dificuldade: "facil",
    enunciado: "Qual direito está previsto no art. 6º da Constituição?",
    alternativas: [
      { letra: "A", texto: "Educação", comentario: "Correta em si, mas incompleta: o art. 6º também prevê saúde, trabalho e outros direitos sociais, por isso a resposta mais completa reúne todas as opções." },
      { letra: "B", texto: "Saúde", comentario: "Correta em si, mas incompleta: o art. 6º também prevê educação, trabalho e outros direitos sociais, por isso a resposta mais completa reúne todas as opções." },
      { letra: "C", texto: "Trabalho", comentario: "Correta em si, mas incompleta: o art. 6º também prevê educação, saúde e outros direitos sociais, por isso a resposta mais completa reúne todas as opções." },
      { letra: "D", texto: "Todos os anteriores" }
    ],
    gabarito: "D",
    artigo: "Art. 6º, CF",
    justificativa: "O art. 6º reúne educação, saúde, trabalho e outros direitos sociais."
  }
];
