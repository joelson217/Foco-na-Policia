const QUESTIONS_PORTUGUES = [
  {
    "id": "port_1",
    "disciplina": "portugues",
    "topico": "Concordância Verbal e Nominal",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale a alternativa em que a concordância verbal está INCORRETA, de acordo com a norma-padrão:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Havia muitos policiais no pátio da penitenciária.",
        "comentario": "Esta alternativa está CORRETA quanto à concordância: o verbo \"haver\" no sentido de existir é impessoal e permanece invariável mesmo com sujeito no plural; por isso não é a alternativa buscada pela questão."
      },
      {
        "letra": "B",
        "texto": "Faziam três anos que ele não visitava a família."
      },
      {
        "letra": "C",
        "texto": "Devem existir várias soluções para este problema de segurança.",
        "comentario": "Esta alternativa está CORRETA quanto à concordância: o verbo \"existir\" (pessoal) concorda normalmente com o sujeito \"várias soluções\" (plural); por isso não é a alternativa buscada pela questão."
      },
      {
        "letra": "D",
        "texto": "Fui eu quem assumiu a responsabilidade pelo plantão.",
        "comentario": "Esta alternativa está CORRETA quanto à concordância: com o pronome relativo \"quem\", o verbo pode ficar na 3ª pessoa do singular; por isso não é a alternativa buscada pela questão."
      }
    ],
    "gabarito": "B",
    "artigo": "Regras de concordância com verbo Fazer",
    "justificativa": "O verbo \"fazer\" indicando tempo decorrido é impessoal, portanto fica sempre na 3ª pessoa do singular. O correto é: \"Fazia três anos...\""
  },
  {
    "id": "port_2",
    "disciplina": "portugues",
    "topico": "Crase",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale a opção que preenche corretamente a lacuna: \"O diretor dirigiu-se ___ sala de reuniões para falar com os agentes\".",
    "alternativas": [
      {
        "letra": "A",
        "texto": "a",
        "comentario": "Incorreta. Falta o acento indicativo de crase, pois há fusão da preposição \"a\" (exigida por \"dirigir-se a\") com o artigo feminino \"a\" que antecede \"sala\"."
      },
      {
        "letra": "B",
        "texto": "à"
      },
      {
        "letra": "C",
        "texto": "á",
        "comentario": "Incorreta. O acento agudo isolado não representa a crase; a grafia correta da fusão preposição + artigo é \"à\" (acento grave)."
      },
      {
        "letra": "D",
        "texto": "ha",
        "comentario": "Incorreta. \"Ha\" não é uma forma válida da língua portuguesa nesse contexto; não representa nem a preposição exigida nem a crase necessária."
      }
    ],
    "gabarito": "B",
    "artigo": "Regras de Crase",
    "justificativa": "O verbo dirigir-se exige preposição \"a\". A palavra \"sala\" é feminina e admite artigo \"a\". A junção resulta na crase \"à\"."
  },
  {
    "id": "port_3",
    "disciplina": "portugues",
    "topico": "Pontuação - Vírgula",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Assinale a alternativa em que o uso da vírgula está totalmente CORRETO:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O policial, efetuou a prisão em flagrante do suspeito.",
        "comentario": "Incorreta. A vírgula separa indevidamente o sujeito (\"O policial\") do verbo (\"efetuou\")."
      },
      {
        "letra": "B",
        "texto": "Naquela noite escura e fria, os agentes realizaram a revista nas celas."
      },
      {
        "letra": "C",
        "texto": "Eles precisavam de, mais tempo para finalizar o inquérito.",
        "comentario": "Incorreta. A vírgula separa indevidamente o verbo (\"precisavam de\") do seu complemento (\"mais tempo\")."
      },
      {
        "letra": "D",
        "texto": "A fuga foi contida mas, os presos quebraram a estrutura.",
        "comentario": "Incorreta. A vírgula está mal posicionada; o correto seria colocá-la antes da conjunção adversativa (\"contida, mas os presos...\")."
      }
    ],
    "gabarito": "B",
    "artigo": "Regras de Pontuação",
    "justificativa": "Na letra B, a vírgula foi usada corretamente para isolar o adjunto adverbial de tempo/modo deslocado para o início da frase. Nas outras alternativas, a vírgula separa indevidamente sujeito de predicado (A), verbo de complemento (C) e foi mal posicionada na conjunção (D, deveria ser \"contida, mas\")."
  },
  {
    "id": "port_4",
    "disciplina": "portugues",
    "topico": "Acentuação Gráfica",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Assinale a alternativa que contém palavras acentuadas pela MESMA regra:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Polícia – Penitenciária – Indivíduo"
      },
      {
        "letra": "B",
        "texto": "Três – Lápis – Útil",
        "comentario": "Incorreta. Essas palavras seguem regras diferentes entre si (monossílabo tônico terminado em \"s\", paroxítona terminada em \"is\", paroxítona terminada em \"l\"), e não a mesma regra."
      },
      {
        "letra": "C",
        "texto": "Saúde – Herói – Papéis",
        "comentario": "Incorreta. Essas palavras seguem regras diferentes entre si (hiato tônico, ditongo aberto tônico e ditongo em terminação \"eis\"), e não a mesma regra dos ditongos em paroxítonas."
      },
      {
        "letra": "D",
        "texto": "Fácil – História – Até",
        "comentario": "Incorreta. Essas palavras seguem regras diferentes entre si (paroxítona terminada em \"l\", proparoxítona, oxítona terminada em \"e\"), e não a mesma regra."
      }
    ],
    "gabarito": "A",
    "artigo": "Regras de Acentuação",
    "justificativa": "As três palavras de A (Po-lí-cia, Pe-ni-ten-ciá-ria, In-di-ví-duo) são paroxítonas terminadas em ditongo."
  },
  {
    "id": "port_5",
    "disciplina": "portugues",
    "topico": "Uso dos Porquês",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A frase que apresenta erro quanto ao uso dos porquês é:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Por que o sistema caiu?",
        "comentario": "Está CORRETA quanto ao uso do porquê (interrogativa direta, separado e sem acento); por isso não é a alternativa com erro buscada pela questão."
      },
      {
        "letra": "B",
        "texto": "O diretor faltou, por que estava doente."
      },
      {
        "letra": "C",
        "texto": "Vocês estão rindo de quê? E por quê?",
        "comentario": "Está CORRETA quanto ao uso do porquê (final de frase, separado e com acento); por isso não é a alternativa com erro buscada pela questão."
      },
      {
        "letra": "D",
        "texto": "A razão por que luto é minha família.",
        "comentario": "Está CORRETA quanto ao uso do porquê (equivale a \"pela qual\", separado e sem acento); por isso não é a alternativa com erro buscada pela questão."
      }
    ],
    "gabarito": "B",
    "artigo": "Ortografia",
    "justificativa": "O correto é \"porque\" (conjunção explicativa/causal), junto e sem acento: \"O diretor faltou porque estava doente\"."
  },
  {
    "id": "port_6",
    "disciplina": "portugues",
    "topico": "Regência Verbal",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Em qual das sentenças a regência do verbo ASSISTIR está incorreta segundo a norma culta?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Os policiais assistiram o jogo pela TV no intervalo."
      },
      {
        "letra": "B",
        "texto": "O médico assistiu o detento ferido.",
        "comentario": "Está CORRETA: no sentido de \"prestar socorro/cuidar\", assistir é transitivo direto, sem preposição; por isso não é a alternativa com erro buscada."
      },
      {
        "letra": "C",
        "texto": "Assistimos a uma ótima palestra de capacitação.",
        "comentario": "Está CORRETA: no sentido de \"ver/presenciar\", assistir exige a preposição \"a\", corretamente empregada aqui; por isso não é a alternativa com erro buscada."
      },
      {
        "letra": "D",
        "texto": "Tal direito assiste ao apenado.",
        "comentario": "Está CORRETA: no sentido de \"caber/pertencer (direito)\", assistir é transitivo indireto regido por \"a\"; por isso não é a alternativa com erro buscada."
      }
    ],
    "gabarito": "A",
    "artigo": "Regência Verbal",
    "justificativa": "No sentido de \"ver/presenciar\", o verbo assistir é Transitivo Indireto (exige a preposição A). Correto seria: \"Assistiram AO jogo\"."
  },
  {
    "id": "port_7",
    "disciplina": "portugues",
    "topico": "Uso dos Porquês",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Preencha as lacunas: Não fomos ao presídio ______ estava chovendo muito. Vocês não foram ______?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "porque / porquê",
        "comentario": "Incorreta. A segunda lacuna está errada: no final de frase interrogativa, usa-se \"por quê\" (separado e com acento), e não \"porquê\" (substantivo, precedido de artigo)."
      },
      {
        "letra": "B",
        "texto": "por que / por que",
        "comentario": "Incorreta. Ambas as lacunas estão erradas: a primeira pede \"porque\" (conjunção explicativa, junto e sem acento) e a segunda pede \"por quê\" (final de frase interrogativa, com acento)."
      },
      {
        "letra": "C",
        "texto": "porque / por quê"
      },
      {
        "letra": "D",
        "texto": "porquê / porque",
        "comentario": "Incorreta. As lacunas estão invertidas: a primeira pede \"porque\" (junto, sem acento) e a segunda pede \"por quê\" (separado, com acento)."
      },
      {
        "letra": "E",
        "texto": "por que / por quê",
        "comentario": "Incorreta. A primeira lacuna está errada: nesse contexto de causa/explicação dentro da frase (não interrogativa), usa-se \"porque\" (junto e sem acento), e não \"por que\"."
      }
    ],
    "correta": "C",
    "comentario": "1º lacuna: \"porque\" (junto e sem acento, indica causa/explicação). 2º lacuna: \"por quê\" (separado e com acento, usado no final de frase interrogativa)."
  },
  {
    "id": "port_8",
    "disciplina": "portugues",
    "topico": "Crase",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Em qual das sentenças o uso da crase está INCORRETO?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Chegamos à meia-noite.",
        "comentario": "Está CORRETA quanto ao uso da crase (fusão da preposição \"a\" com o \"a\" de \"meia-noite\", palavra feminina); por isso não é a alternativa incorreta buscada."
      },
      {
        "letra": "B",
        "texto": "Fomos à Bahia e voltamos felizes.",
        "comentario": "Está CORRETA quanto ao uso da crase, admitida com nomes de lugares femininos que aceitam artigo, especialmente diante da ideia de retorno (\"e voltamos\"); por isso não é a alternativa incorreta buscada."
      },
      {
        "letra": "C",
        "texto": "Entregou o ofício àquela secretaria.",
        "comentario": "Está CORRETA quanto ao uso da crase (fusão com o pronome demonstrativo \"aquela\"); por isso não é a alternativa incorreta buscada."
      },
      {
        "letra": "D",
        "texto": "Os policiais andavam à pé pelas ruas."
      },
      {
        "letra": "E",
        "texto": "Assistimos à cerimônia de formatura.",
        "comentario": "Está CORRETA quanto ao uso da crase (\"assistir a\" + artigo feminino \"a\" de \"cerimônia\"); por isso não é a alternativa incorreta buscada."
      }
    ],
    "correta": "D",
    "comentario": "Não se usa crase antes de palavras masculinas, como \"pé\"."
  },
  {
    "id": "port_9",
    "disciplina": "portugues",
    "topico": "Regência Verbal",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O verbo \"Aspirar\" possui duas regências. Marque a alternativa correta em relação à norma padrão:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Ele aspira o cargo de diretor.",
        "comentario": "Incorreta quanto à norma padrão: no sentido de almejar/desejar, \"aspirar\" é transitivo indireto e exige a preposição \"a\" (\"aspira ao cargo\"), não devendo ser usado sem ela."
      },
      {
        "letra": "B",
        "texto": "Nós aspiramos ao ar puro das montanhas.",
        "comentario": "Incorreta quanto à norma padrão: no sentido de sorver/respirar, \"aspirar\" é transitivo direto e não deveria vir com a preposição \"a\" (o correto seria \"aspiramos o ar puro\")."
      },
      {
        "letra": "C",
        "texto": "O policial aspirava a uma promoção rápida."
      },
      {
        "letra": "D",
        "texto": "Aspirei ao gás tóxico acidentalmente.",
        "comentario": "Incorreta quanto à norma padrão: no sentido de inalar/respirar, \"aspirar\" é transitivo direto, sem preposição (o correto seria \"aspirei o gás tóxico\")."
      },
      {
        "letra": "E",
        "texto": "Eles aspiravam a fragrância nova.",
        "comentario": "Esta frase está correta se entendida no sentido de sorver/perceber o cheiro (verbo transitivo direto, sem crase). O gabarito desta questão busca, porém, o exemplo de regência no sentido de \"almejar\" (verbo transitivo indireto, regido por \"a\"), que corresponde à alternativa C."
      }
    ],
    "correta": "C",
    "comentario": "Aspirar no sentido de ALMEJAR (desejar) exige preposição \"a\" (VTI). No sentido de SORVER (respirar), não tem preposição (VTD). A correta é a C (\"almejava uma promoção\")."
  },
  {
    "id": "port_10",
    "disciplina": "portugues",
    "topico": "Pontuação",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale a frase em que o uso da vírgula está totalmente CORRETO:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O agente, prendeu o suspeito rapidamente.",
        "comentario": "Incorreta. A vírgula separa indevidamente o sujeito (\"O agente\") do verbo (\"prendeu\")."
      },
      {
        "letra": "B",
        "texto": "Durante a madrugada, a equipe realizou a revista."
      },
      {
        "letra": "C",
        "texto": "Os presos, que estavam amotinados exigiam a presença, do juiz.",
        "comentario": "Incorreta. Falta a vírgula de fechamento da oração intercalada (\"amotinados,\") e há vírgula indevida separando o complemento (\"presença,\" do juiz)."
      },
      {
        "letra": "D",
        "texto": "Foi deferido, pelo juiz o pedido de progressão.",
        "comentario": "Incorreta. A vírgula separa indevidamente o verbo do seu agente da passiva (\"pelo juiz\"), quebrando a coesão da oração."
      },
      {
        "letra": "E",
        "texto": "João, e Maria viajaram para Natal.",
        "comentario": "Incorreta. Não se usa vírgula antes da conjunção aditiva \"e\" quando ela liga elementos de mesma função sintática (sujeito composto), como é o caso aqui."
      }
    ],
    "correta": "B",
    "comentario": "Em B, a vírgula separa o adjunto adverbial deslocado (\"Durante a madrugada\"). Nas demais, separa indevidamente sujeito/verbo/complemento."
  },
  {
    "id": "port_11",
    "disciplina": "portugues",
    "topico": "Acentuação",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "As palavras \"Pólvora\", \"Tático\" e \"Análise\" recebem acento pela mesma regra. Assinale a regra correta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "São oxítonas terminadas em A, E, O.",
        "comentario": "Incorreta. Pólvora, Tático e Análise não são oxítonas; são proparoxítonas."
      },
      {
        "letra": "B",
        "texto": "São paroxítonas terminadas em ditongo.",
        "comentario": "Incorreta. Nenhuma das três palavras é paroxítona terminada em ditongo; todas são proparoxítonas."
      },
      {
        "letra": "C",
        "texto": "São todas proparoxítonas."
      },
      {
        "letra": "D",
        "texto": "Recebem acento pelo hiato tônico.",
        "comentario": "Incorreta. A regra do hiato tônico não se aplica a essas palavras, que são acentuadas por serem proparoxítonas."
      },
      {
        "letra": "E",
        "texto": "Acento diferencial de intensidade.",
        "comentario": "Incorreta. Não se trata de acento diferencial; as três palavras são acentuadas pela regra das proparoxítonas."
      }
    ],
    "correta": "C",
    "comentario": "Todas as palavras proparoxítonas são acentuadas."
  },
  {
    "id": "port_12",
    "disciplina": "portugues",
    "topico": "Classes de Palavras",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Na frase \"Os policiais valentes protegeram muito a sociedade\", a palavra \"muito\" atua como:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Adjetivo.",
        "comentario": "Incorreta. \"Muito\" não modifica um substantivo nesta frase, portanto não funciona como adjetivo."
      },
      {
        "letra": "B",
        "texto": "Pronome indefinido.",
        "comentario": "Incorreta. Como pronome indefinido, \"muito\" acompanharia ou substituiria um substantivo indicando quantidade imprecisa; aqui ele modifica o verbo, funcionando como advérbio."
      },
      {
        "letra": "C",
        "texto": "Advérbio de intensidade."
      },
      {
        "letra": "D",
        "texto": "Substantivo.",
        "comentario": "Incorreta. \"Muito\" não exerce função de núcleo substantivo na frase; modifica o verbo \"protegeram\"."
      },
      {
        "letra": "E",
        "texto": "Preposição.",
        "comentario": "Incorreta. \"Muito\" não estabelece relação de regência entre termos, como fazem as preposições; modifica o verbo, sendo advérbio."
      }
    ],
    "correta": "C",
    "comentario": "\"Muito\" modifica o verbo \"protegeram\", indicando intensidade. Logo, é um advérbio, sendo uma palavra invariável neste contexto."
  },
  {
    "id": "port_13",
    "disciplina": "portugues",
    "topico": "Sintaxe",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale a alternativa onde o \"SE\" exerce a função de partícula apassivadora:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Precisa-se de novos agentes penitenciários.",
        "comentario": "Incorreta. Como o verbo \"precisar\" é transitivo indireto (rege \"de\"), o \"se\" aqui é índice de indeterminação do sujeito, não partícula apassivadora."
      },
      {
        "letra": "B",
        "texto": "Vive-se bem nesta cidade.",
        "comentario": "Incorreta. Com verbo intransitivo (\"viver\"), o \"se\" é índice de indeterminação do sujeito, não partícula apassivadora."
      },
      {
        "letra": "C",
        "texto": "Alugaram-se três viaturas."
      },
      {
        "letra": "D",
        "texto": "Ele se cortou com a faca.",
        "comentario": "Incorreta. Aqui o \"se\" indica voz reflexiva (o sujeito pratica e sofre a ação), não voz passiva."
      },
      {
        "letra": "E",
        "texto": "A moça se foi chorando.",
        "comentario": "Incorreta. Nesse caso, \"se\" integra a locução verbal pronominal \"ir-se\" (partir), sem valor de partícula apassivadora."
      }
    ],
    "correta": "C",
    "comentario": "Em \"Alugaram-se três viaturas\", temos voz passiva sintética (Três viaturas foram alugadas). O verbo transitivo direto concorda com o sujeito paciente (viaturas). Em A e B temos Índice de Indeterminação do Sujeito."
  },
  {
    "id": "port_14",
    "disciplina": "portugues",
    "topico": "Concordância Verbal",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale a alternativa que atende à norma-padrão de concordância verbal:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Fui eu que levou os relatórios ao diretor da prisão.",
        "comentario": "Incorreta. Com o pronome relativo \"que\" retomando \"eu\", o verbo deveria concordar na 1ª pessoa: \"Fui eu que levei\"."
      },
      {
        "letra": "B",
        "texto": "Fomos nós que organizou a escala de plantão dos agentes.",
        "comentario": "Incorreta. Com o pronome relativo \"que\" retomando \"nós\", o verbo deveria concordar na 1ª pessoa do plural: \"Fomos nós que organizamos\"."
      },
      {
        "letra": "C",
        "texto": "Grande parte dos candidatos foram aprovados na prova objetiva."
      },
      {
        "letra": "D",
        "texto": "Mais de um policial se abraçaram após o resgate.",
        "comentario": "Incorreta. A expressão \"mais de um\" normalmente exige o verbo no singular, salvo quando há ideia clara de reciprocidade; a forma mais adequada segundo a norma-padrão seria \"Mais de um policial se abraçou\"."
      }
    ],
    "gabarito": "C",
    "artigo": "Regras de Concordância",
    "justificativa": "Com expressões partitivas ('grande parte de', 'a maioria de') seguidas de substantivo no plural, o verbo pode concordar com a expressão (singular) ou com o substantivo (plural). Logo, 'foram aprovados' está correto. As outras contêm erros: 'Fui eu que levei' (A), 'Fomos nós que organizamos' (B) e 'Mais de um policial se abraçou' (D - só vai ao plural se indicar reciprocidade clara ou repetição)."
  },
  {
    "id": "port_15",
    "disciplina": "portugues",
    "topico": "Crase",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale a frase em que o uso do acento indicativo de crase é OBRIGATÓRIO:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O diretor fez referência àquela candidata que se destacou no TAF."
      },
      {
        "letra": "B",
        "texto": "O policial dirigiu-se à sua mesa para digitar a ocorrência.",
        "comentario": "Incorreta como resposta a esta questão: o uso da crase antes de pronome possessivo feminino singular é facultativo, não obrigatório, diferentemente da alternativa A."
      },
      {
        "letra": "C",
        "texto": "Ele começou à gritar quando os agentes chegaram à cela.",
        "comentario": "Incorreta. Não se usa crase antes de verbo no infinitivo; o correto seria \"começou a gritar\" (sem acento)."
      },
      {
        "letra": "D",
        "texto": "Os inspetores compareceram à reuniões importantes.",
        "comentario": "Incorreta. A preposição \"a\" está no singular, mas \"reuniões\" está no plural, o que impede a crase nessa forma; o correto seria \"a reuniões\" (sem acento) ou \"às reuniões\" (se especificadas)."
      }
    ],
    "gabarito": "A",
    "artigo": "Regras de Crase",
    "justificativa": "Quem faz referência faz referência 'a' (preposição). O pronome demonstrativo 'àquela' inicia-se com a vogal 'a'. A fusão gera crase obrigatória. Em B, é facultativa (antes de pronome possessivo feminino singular). Em C, é proibida (antes de verbo). Em D, é incorreta (preposição no singular e palavra no plural)."
  },
  {
    "id": "port_16",
    "disciplina": "portugues",
    "topico": "Pontuação - Vírgula",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Assinale a alternativa em que a vírgula foi inserida de forma INCORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Os novos policiais penais, que concluíram o curso de formação, assumiram o plantão.",
        "comentario": "Está CORRETA: a oração explicativa intercalada está corretamente isolada por vírgulas dos dois lados; por isso não é a alternativa buscada."
      },
      {
        "letra": "B",
        "texto": "Ontem pela manhã, realizou-se uma grande operação de vistoria no pavilhão B.",
        "comentario": "Está CORRETA: a vírgula isola o adjunto adverbial deslocado para o início da frase; por isso não é a alternativa buscada."
      },
      {
        "letra": "C",
        "texto": "O coordenador geral de segurança, determinou a imediata suspensão das visitas."
      },
      {
        "letra": "D",
        "texto": "Embora fizesse muito frio, os detentos tomaram o banho de sol regular.",
        "comentario": "Está CORRETA: a vírgula isola a oração subordinada adverbial concessiva anteposta; por isso não é a alternativa buscada."
      }
    ],
    "gabarito": "C",
    "artigo": "Regras de Vírgula",
    "justificativa": "A alternativa C apresenta erro gravíssimo: separa-se o sujeito ('O coordenador geral de segurança') do seu verbo ('determinou') por meio de vírgula simples."
  },
  {
    "id": "port_17",
    "disciplina": "portugues",
    "topico": "Regência Verbal",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "De acordo com a regência padrão dos verbos, assinale a opção correta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Os agentes aspiravam ao cargo de chefia na unidade."
      },
      {
        "letra": "B",
        "texto": "Todos assistiram o jogo da seleção no refeitório.",
        "comentario": "Incorreta. No sentido de \"ver/presenciar\", \"assistir\" exige a preposição \"a\" (\"assistiram ao jogo\")."
      },
      {
        "letra": "C",
        "texto": "O detento preferia o trabalho do que o estudo.",
        "comentario": "Incorreta. A estrutura correta de \"preferir\" é \"preferir A a B\", sem o \"do\" (\"preferia o trabalho ao estudo\")."
      },
      {
        "letra": "D",
        "texto": "Esqueci-me o nome do secretário de administração.",
        "comentario": "Incorreta. O verbo pronominal \"esquecer-se\" exige a preposição \"de\" (\"esqueci-me DO nome\")."
      }
    ],
    "gabarito": "A",
    "artigo": "Regência Verbal",
    "justificativa": "O verbo 'aspirar' no sentido de pretender/desejar exige preposição 'a' (aspirar ao cargo). O verbo 'assistir' no sentido de ver exige a preposição 'a' (assistiram ao jogo). O verbo 'preferir' exige a estrutura 'preferir A a B' (preferia o trabalho ao estudo). O verbo pronominal 'esquecer-se' exige preposição 'de' (esqueci-me do nome)."
  },
  {
    "id": "port_18",
    "disciplina": "portugues",
    "topico": "Colocação Pronominal",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale o período que apresenta erro quanto à colocação do pronome átono:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Nunca se deve divulgar informações restritas da instituição.",
        "comentario": "Está CORRETA: \"nunca\" é palavra atrativa, exigindo próclise, corretamente empregada; por isso não é a alternativa com erro buscada."
      },
      {
        "letra": "B",
        "texto": "O diretor chamou-o para uma conversa de emergência.",
        "comentario": "Está CORRETA: em início de oração, sem palavra atrativa antes do verbo, a ênclise é adequada; por isso não é a alternativa com erro buscada."
      },
      {
        "letra": "C",
        "texto": "Quem informou-nos sobre a data do curso de tiro?"
      },
      {
        "letra": "D",
        "texto": "Deus o guarde em sua caminhada profissional.",
        "comentario": "Está CORRETA: trata-se de próclise em construção de cunho optativo, uso tradicionalmente aceito; por isso não é a alternativa com erro buscada."
      }
    ],
    "gabarito": "C",
    "artigo": "Colocação Pronominal",
    "justificativa": "O pronome interrogativo 'Quem' é palavra atrativa, exigindo a ocorrência de próclise. O correto é: 'Quem nos informou...'"
  },
  {
    "id": "port_19",
    "disciplina": "portugues",
    "topico": "Concordância Nominal",
    "peso": 1,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Assinale a frase correta quanto à concordância nominal:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Seguem anexo os comprovantes de presença do preso.",
        "comentario": "Incorreta. Como \"anexo\" funciona aqui como adjetivo referindo-se a \"comprovantes\" (substantivo plural), a concordância correta seria \"Seguem anexos os comprovantes\"."
      },
      {
        "letra": "B",
        "texto": "A candidata disse: muito obrigada pela oportunidade no concurso."
      },
      {
        "letra": "C",
        "texto": "Elas mesma assinaram a ata de abertura dos portões.",
        "comentario": "Incorreta. \"Mesma\" deve concordar em número com \"elas\": o correto é \"Elas mesmas assinaram\"."
      },
      {
        "letra": "D",
        "texto": "É proibida entrada de pessoas estranhas sem autorização escrita.",
        "comentario": "Incorreta. Como \"entrada\" não vem precedida de artigo nessa construção, a concordância correta é com a forma invariável: \"É proibido entrada de pessoas estranhas...\"."
      }
    ],
    "gabarito": "B",
    "artigo": "Concordância Nominal",
    "justificativa": "A palavra 'obrigada' concorda em gênero com o emissor (feminino). Em A, deveria ser 'anexos' (concordando com comprovantes). Em C, 'mesmas'. Em D, como 'entrada' não tem artigo, a concordância correta é 'É proibido entrada'."
  },
  {
    "id": "port_20",
    "disciplina": "portugues",
    "topico": "Significação das Palavras",
    "peso": 1,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Complete a lacuna: 'A ____ de terras públicas para a construção do presídio foi assinada hoje'.",
    "alternativas": [
      {
        "letra": "A",
        "texto": "cessão"
      },
      {
        "letra": "B",
        "texto": "seção",
        "comentario": "Incorreta. \"Seção\" significa parte, divisão ou repartição, não se referindo a \"ceder/transferir terras\"."
      },
      {
        "letra": "C",
        "texto": "sessão",
        "comentario": "Incorreta. \"Sessão\" refere-se a um espaço de tempo (reunião, sessão de cinema/julgamento), não à transferência de terras."
      },
      {
        "letra": "D",
        "texto": "secção",
        "comentario": "Incorreta. \"Secção\" é variante gráfica de \"seção\" (parte, divisão), não se referindo à transferência de terras."
      }
    ],
    "gabarito": "A",
    "artigo": "Parônimos e Homônimos",
    "justificativa": "Cessão significa ato de ceder/transferir. Sessão refere-se a espaço de tempo (sessão de cinema/julgamento). Seção ou secção significa parte, repartição ou divisão."
  },
  {
    "disciplina": "portugues",
    "topico": "Interpretação de Texto",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Leia o trecho: \"O policial, ao abordar o suspeito, agiu com serenidade e profissionalismo, preservando os direitos do cidadão sem abrir mão da eficácia da operação.\" O vocábulo \"preservando\" expressa uma ideia de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Concessão — o agente preservou os direitos apesar das circunstâncias.",
        "comentario": "Incorreta. O gerúndio \"preservando\" não indica uma dificuldade superada (concessão), mas uma ação simultânea à ação principal."
      },
      {
        "letra": "B",
        "texto": "Simultaneidade — a preservação dos direitos ocorreu ao mesmo tempo em que a operação era conduzida."
      },
      {
        "letra": "C",
        "texto": "Consequência — a eficácia da operação resultou na preservação dos direitos.",
        "comentario": "Incorreta. O texto não indica que a eficácia da operação causou a preservação dos direitos; o gerúndio expressa simultaneidade, não relação de causa e efeito."
      },
      {
        "letra": "D",
        "texto": "Condição — apenas se preservar os direitos a operação será eficaz.",
        "comentario": "Incorreta. O texto não estabelece uma condição hipotética para a eficácia da operação; o gerúndio \"preservando\" expressa uma ação concomitante."
      }
    ],
    "gabarito": "B",
    "artigo": "Interpretação Textual — Valor Semântico do Gerúndio",
    "justificativa": "O gerúndio \"preservando\" indica uma ação simultânea à ação principal (agiu com serenidade). Expressa uma ideia de concomitância/simultaneidade: o policial agiu com serenidade e, ao mesmo tempo, preservou os direitos do cidadão.",
    "id": "port_21"
  },
  {
    "disciplina": "portugues",
    "topico": "Ortografia e Acentuação",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Assinale a alternativa em que todas as palavras estão corretamente grafadas conforme o novo Acordo Ortográfico:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "idéia, heróico, saudável, bônus",
        "comentario": "Incorreta. \"Idéia\" e \"heróico\" mantêm acentos que foram eliminados pelo Acordo Ortográfico de 2009 (o correto é \"ideia\" e \"heroico\")."
      },
      {
        "letra": "B",
        "texto": "ideia, heroico, saudável, bônus"
      },
      {
        "letra": "C",
        "texto": "ideia, heróico, saudavel, bonus",
        "comentario": "Incorreta. \"Heróico\" deveria perder o acento (\"heroico\"), e \"saudável\" e \"bônus\" deveriam manter seus acentos, grafados aqui incorretamente sem eles (\"saudavel\", \"bonus\")."
      },
      {
        "letra": "D",
        "texto": "idéia, heroico, saudável, bonus",
        "comentario": "Incorreta. \"Idéia\" mantém acento que foi eliminado pelo Acordo (correto é \"ideia\"), e \"bônus\" deveria manter o acento circunflexo (correto é \"bônus\", não \"bonus\")."
      }
    ],
    "gabarito": "B",
    "artigo": "Acordo Ortográfico de 2009",
    "justificativa": "Após o Acordo Ortográfico (em vigor no Brasil desde 2009): \"ideia\" perdeu o acento (ditongo aberto não é mais acentuado em palavras paroxítonas); \"heroico\" também perdeu o acento por mesma regra; \"saudável\" mantém o acento (paroxítona terminada em \"l\"); \"bônus\" mantém o circunflexo (paroxítona terminada em \"us\" com vogal fechada).",
    "id": "port_22"
  },
  {
    "disciplina": "portugues",
    "topico": "Sintaxe — Sujeito e Predicado",
    "peso": 1,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Em \"Correu muito naquela tarde\", a oração apresenta sujeito:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Simples — o sujeito é \"muito\".",
        "comentario": "Incorreta. \"Muito\" é advérbio de intensidade nessa frase, não podendo exercer função de sujeito."
      },
      {
        "letra": "B",
        "texto": "Composto — formado por \"muito\" e \"naquela tarde\".",
        "comentario": "Incorreta. Nem \"muito\" nem \"naquela tarde\" são núcleos de sujeito; ambos são advérbios/adjuntos adverbiais, e a oração não apresenta sujeito expresso."
      },
      {
        "letra": "C",
        "texto": "Indeterminado — não é possível identificar quem praticou a ação."
      },
      {
        "letra": "D",
        "texto": "Inexistente — a oração tem predicado nominal.",
        "comentario": "Incorreta. A oração tem predicado verbal (o verbo \"correu\" indica ação), e não predicado nominal; o sujeito é indeterminado, não inexistente."
      }
    ],
    "gabarito": "C",
    "artigo": "Sintaxe — Sujeito Indeterminado",
    "justificativa": "O sujeito indeterminado ocorre quando não é possível identificar o agente da ação. Nesse caso, \"Correu muito naquela tarde\" tem o verbo na 3ª pessoa do singular sem sujeito identificado no contexto. É uma das formas de indeterminar o sujeito (verbo na 3ª pessoa do singular sem sujeito expresso).",
    "id": "port_23"
  },
  {
    "disciplina": "portugues",
    "topico": "Semântica — Figuras de Linguagem",
    "peso": 1,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Identifique a figura de linguagem presente em: \"A lei é cega, mas seus agentes devem enxergar a realidade social.\"",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Hipérbole — exagero para dar ênfase à imparcialidade da lei.",
        "comentario": "Incorreta. Não há exagero implausível na frase; o termo \"cega\" é empregado em sentido figurado para indicar imparcialidade, caracterizando metáfora, não hipérbole."
      },
      {
        "letra": "B",
        "texto": "Antítese — oposição entre \"cega\" (imparcial) e \"enxergar\" (perceber a realidade).",
        "comentario": "Incorreta como figura predominante: embora haja uma oposição de ideias entre \"cega\" e \"enxergar\", a figura que caracteriza a expressão \"a lei é cega\" em si é a metáfora."
      },
      {
        "letra": "C",
        "texto": "Metáfora — \"cega\" é empregada no sentido figurado para dizer que a lei é imparcial."
      },
      {
        "letra": "D",
        "texto": "Metonímia — \"lei\" representa o sistema judiciário como um todo.",
        "comentario": "Incorreta. Não há substituição de um termo por outro com o qual mantém relação de contiguidade (como parte pelo todo); o que ocorre é o emprego figurado de \"cega\", caracterizando metáfora."
      }
    ],
    "gabarito": "C",
    "artigo": "Figuras de Linguagem — Metáfora",
    "justificativa": "A figura principal é a metáfora: \"a lei é cega\" = a lei é imparcial (cegueira como símbolo de imparcialidade). O contexto de \"enxergar\" reforça a metáfora visual. Há também antítese entre \"cega\" e \"enxergar\", mas a figura dominante (que caracteriza melhor a expressão \"a lei é cega\") é a metáfora.",
    "id": "port_24"
  },
  {
    "disciplina": "portugues",
    "topico": "Morfologia — Classes de Palavras",
    "peso": 1,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Em \"O suspeito foi preso ontem pela tarde\", a expressão \"pela tarde\" é formada por:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Preposição + artigo definido + substantivo."
      },
      {
        "letra": "B",
        "texto": "Pronome + adjetivo + substantivo.",
        "comentario": "Incorreta. \"Pela\" não é pronome, e \"tarde\" não é precedida de adjetivo nessa construção."
      },
      {
        "letra": "C",
        "texto": "Conjunção + artigo + substantivo.",
        "comentario": "Incorreta. \"Pela\" é contração de preposição + artigo, e não conjunção."
      },
      {
        "letra": "D",
        "texto": "Preposição + artigo indefinido + substantivo.",
        "comentario": "Incorreta. O artigo contraído em \"pela\" é definido (\"a\"), não indefinido."
      }
    ],
    "gabarito": "A",
    "artigo": "Morfologia — Classes Gramaticais",
    "justificativa": "\"pela\" é uma contração da preposição \"por\" + artigo definido \"a\" = \"pela\". \"tarde\" é substantivo (refere-se a um período do dia, precedido de artigo). Logo, \"pela tarde\" = preposição (por) + artigo definido (a) + substantivo (tarde).",
    "id": "port_25"
  },
  {
    "disciplina": "portugues",
    "topico": "Reescrita de Frases - Equivalência de Conectivos",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale a alternativa que reescreve corretamente o período \"Embora estivesse cansado, o agente concluiu a ronda\", mantendo o sentido original e a correção gramatical:",
    "alternativas": [
      { "letra": "A", "texto": "Ainda que estivesse cansado, o agente concluiu a ronda." },
      { "letra": "B", "texto": "Porque estivesse cansado, o agente concluiu a ronda.", "comentario": "Incorreta. \"Porque\" estabelece relação causal, alterando o sentido concessivo original de \"embora\"." },
      { "letra": "C", "texto": "Se estivesse cansado, o agente concluiu a ronda.", "comentario": "Incorreta. \"Se\" estabelece relação condicional, alterando o sentido concessivo original de \"embora\"." },
      { "letra": "D", "texto": "Enquanto estivesse cansado, o agente concluiu a ronda.", "comentario": "Incorreta. \"Enquanto\" estabelece relação temporal, alterando o sentido concessivo original de \"embora\"." }
    ],
    "gabarito": "A",
    "artigo": "Coesão Textual - Conectivos Concessivos",
    "justificativa": "\"Ainda que\" é sinônimo de \"embora\", mantendo a relação concessiva (uma dificuldade que não impede a ação). As demais opções trocam a relação de sentido: \"porque\" (causal), \"se\" (condicional) e \"enquanto\" (temporal) alteram o sentido original.",
    "id": "port_26"
  },
  {
    "disciplina": "portugues",
    "topico": "Reescrita de Frases - Voz Passiva",
    "peso": 1,
    "dificuldade": "facil",
    "enunciado": "A frase \"O diretor assinou o documento\" pode ser reescrita na voz passiva analítica, mantendo o mesmo sentido, como:",
    "alternativas": [
      { "letra": "A", "texto": "O documento foi assinado pelo diretor." },
      { "letra": "B", "texto": "O documento assinou o diretor.", "comentario": "Incorreta. Essa construção inverte indevidamente sujeito e objeto sem os elementos próprios da voz passiva analítica (verbo auxiliar + particípio + agente da passiva)." },
      { "letra": "C", "texto": "O diretor foi assinado pelo documento.", "comentario": "Incorreta. Essa frase inverte o sentido original: sugere que o diretor sofreu a ação de ser assinado, quando na verdade ele é quem pratica a ação de assinar." },
      { "letra": "D", "texto": "Assinar o documento é o diretor.", "comentario": "Incorreta. Essa construção não corresponde a uma voz passiva analítica; é uma estrutura gramaticalmente inadequada para expressar o sentido original." }
    ],
    "gabarito": "A",
    "artigo": "Vozes Verbais - Ativa e Passiva",
    "justificativa": "Na conversão para a voz passiva analítica, o objeto direto da voz ativa (\"o documento\") torna-se sujeito paciente, e o sujeito da voz ativa (\"o diretor\") torna-se agente da passiva, introduzido pela preposição \"por\": \"O documento foi assinado pelo diretor\".",
    "id": "port_27"
  },
  {
    "disciplina": "portugues",
    "topico": "Reescrita de Frases - Substituição de Palavras (Sinonímia)",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale a alternativa que substitui a palavra sublinhada mantendo o sentido original da frase \"O servidor cumpriu RIGOROSAMENTE as normas disciplinares\":",
    "alternativas": [
      { "letra": "A", "texto": "O servidor cumpriu ESTRITAMENTE as normas disciplinares." },
      { "letra": "B", "texto": "O servidor cumpriu RARAMENTE as normas disciplinares.", "comentario": "Incorreta. \"Raramente\" indica baixa frequência, sentido oposto ao de \"rigorosamente\" (cumprimento estrito)." },
      { "letra": "C", "texto": "O servidor cumpriu DISPLICENTEMENTE as normas disciplinares.", "comentario": "Incorreta. \"Displicentemente\" indica descuido/desleixo, sentido oposto ao de \"rigorosamente\"." },
      { "letra": "D", "texto": "O servidor cumpriu EVENTUALMENTE as normas disciplinares.", "comentario": "Incorreta. \"Eventualmente\" indica algo ocasional, sentido oposto ao de \"rigorosamente\" (cumprimento constante e estrito)." }
    ],
    "gabarito": "A",
    "artigo": "Significação das Palavras - Sinonímia",
    "justificativa": "\"Estritamente\" é sinônimo de \"rigorosamente\", preservando o sentido de cumprimento fiel e integral das normas. As demais opções (\"raramente\", \"displicentemente\", \"eventualmente\") invertem o sentido, sugerindo descumprimento ou irregularidade.",
    "id": "port_28"
  },
  {
    "disciplina": "portugues",
    "topico": "Reescrita de Frases - Reorganização de Período",
    "peso": 1,
    "dificuldade": "dificil",
    "enunciado": "Assinale a alternativa que reorganiza o período \"Como chovia muito, a ronda externa foi suspensa\", mantendo a mesma relação de sentido entre as orações:",
    "alternativas": [
      { "letra": "A", "texto": "A ronda externa foi suspensa, pois chovia muito." },
      { "letra": "B", "texto": "A ronda externa foi suspensa, embora chovesse muito.", "comentario": "Incorreta. \"Embora\" introduz relação concessiva, alterando a relação de causa e consequência do período original." },
      { "letra": "C", "texto": "A ronda externa foi suspensa, para que chovesse muito.", "comentario": "Incorreta. \"Para que\" introduz relação de finalidade, alterando o sentido causal original e invertendo a lógica da frase." },
      { "letra": "D", "texto": "A ronda externa foi suspensa, chovendo muito depois.", "comentario": "Incorreta. Essa reorganização quebra a relação de causa e consequência original e ainda introduz uma incoerência temporal (\"depois\")." }
    ],
    "gabarito": "A",
    "artigo": "Coesão Textual - Relações Lógico-Semânticas (Causa)",
    "justificativa": "\"Como\", no início do período original, introduz oração causal. \"Pois\", pospositivo, mantém a mesma relação de causa e consequência. \"Embora\" (concessiva) e \"para que\" (finalidade) alteram a relação lógica original.",
    "id": "port_29"
  },
  {
    "disciplina": "portugues",
    "topico": "Crase",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale a alternativa em que o uso do acento indicativo de crase está CORRETO:",
    "alternativas": [
      { "letra": "A", "texto": "O agente penitenciário entregou o relatório à diretora do estabelecimento." },
      { "letra": "B", "texto": "O preso foi conduzido à pé até a cela de isolamento.", "comentario": "Incorreta. Não se usa crase antes de palavra masculina, como \"pé\"; o correto é \"a pé\"." },
      { "letra": "C", "texto": "A audiência ocorrerá à partir das 14 horas.", "comentario": "Incorreta. Não se usa crase antes da locução prepositiva \"a partir de\"; o correto é \"a partir das 14 horas\"." },
      { "letra": "D", "texto": "Ele se referiu à ela de forma respeitosa.", "comentario": "Incorreta. Não se usa crase antes de pronome pessoal do caso reto, como \"ela\"; o correto é \"a ela\"." }
    ],
    "gabarito": "A",
    "artigo": "Regência Nominal e Crase",
    "justificativa": "Em \"à diretora\", há crase pela fusão da preposição \"a\" (exigida pelo verbo \"entregar algo A alguém\") com o artigo feminino \"a\" que antecede \"diretora\". Não há crase antes de palavras masculinas (\"a pé\"), antes de verbo (\"a partir\") ou antes de pronome pessoal (\"a ela\")."
  },
  {
    "disciplina": "portugues",
    "topico": "Pontuação - Vírgula com Aposto e Vocativo",
    "peso": 1,
    "dificuldade": "medio",
    "enunciado": "Assinale a alternativa em que a pontuação está CORRETA quanto ao uso de vírgulas para isolar aposto e vocativo:",
    "alternativas": [
      { "letra": "A", "texto": "João, o novo agente penitenciário, apresentou-se ao diretor esta manhã." },
      { "letra": "B", "texto": "João o novo agente penitenciário, apresentou-se ao diretor esta manhã.", "comentario": "Incorreta. Falta a vírgula de abertura do aposto explicativo, que deveria ser isolado dos dois lados: \"João, o novo agente penitenciário,\"." },
      { "letra": "C", "texto": "João, o novo agente penitenciário apresentou-se ao diretor esta manhã.", "comentario": "Incorreta. Falta a vírgula de fechamento do aposto explicativo, que deveria ser isolado dos dois lados." },
      { "letra": "D", "texto": "João o novo agente penitenciário apresentou-se, ao diretor esta manhã.", "comentario": "Incorreta. Falta a pontuação do aposto explicativo, e há ainda uma vírgula indevida separando o verbo do seu complemento (\"apresentou-se,\" ao diretor)." }
    ],
    "gabarito": "A",
    "artigo": "Pontuação - Uso da Vírgula",
    "justificativa": "O aposto explicativo (\"o novo agente penitenciário\"), que explica quem é João, deve ser isolado por vírgulas em AMBOS os lados. As demais alternativas isolam apenas um dos lados ou pontuam incorretamente outro trecho da frase, rompendo a coesão."
  },
  {
    "disciplina": "portugues",
    "topico": "Ortografia - Parônimos e Homófonos",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Assinale a alternativa em que o par de palavras destacadas está empregado CORRETAMENTE, quanto à distinção entre parônimos/homófonos:",
    "alternativas": [
      { "letra": "A", "texto": "\"Se não\" cumprir as normas, será punido; ele agiu mal durante o plantão." },
      { "letra": "B", "texto": "\"Senão\" cumprir as normas, será punido; ele agiu mau durante o plantão.", "comentario": "Incorreta. A primeira parte usa \"senão\" indevidamente no lugar de \"se não\" (condicional + negação), e a segunda usa \"mau\" (adjetivo) no lugar de \"mal\" (advérbio que modifica \"agiu\")." },
      { "letra": "C", "texto": "\"Se não\" cumprir as normas, será punido; ele agiu mau durante o plantão.", "comentario": "Incorreta. A segunda parte usa \"mau\" (adjetivo) no lugar de \"mal\" (advérbio que modifica o verbo \"agiu\")." },
      { "letra": "D", "texto": "\"Senão\" cumprir as normas, será punido; ele agiu mal durante o plantão.", "comentario": "Incorreta. A primeira parte usa \"senão\" indevidamente no lugar de \"se não\" (condicional + negação) antes de uma condição." }
    ],
    "gabarito": "A",
    "artigo": "Ortografia - Parônimos (mal/mau) e Homófonos (se não/senão)",
    "justificativa": "\"Se não\" (condicional + negação, substituível por \"caso não\") é o correto antes de uma condição, diferente de \"senão\" (equivalente a \"caso contrário\", usado em outro contexto). \"Mal\" é advérbio (antônimo de \"bem\", modifica o verbo \"agiu\"), diferente de \"mau\" (adjetivo, antônimo de \"bom\", modifica substantivo)."
  },
  {
    "disciplina": "portugues",
    "topico": "Tipologia Textual",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Um texto que apresenta uma sequência de instruções, como um manual de procedimentos operacionais para abordagem policial, caracteriza-se predominantemente como do tipo:",
    "alternativas": [
      { "letra": "A", "texto": "Narrativo, pois relata uma sucessão de fatos ocorridos no passado.", "comentario": "Incorreta. Um manual de instruções não relata uma sucessão de fatos passados; ele se organiza em torno de comandos para orientar a realização de uma ação." },
      { "letra": "B", "texto": "Injuntivo (ou instrucional), pois orienta a realização de uma ação por meio de comandos ou instruções." },
      { "letra": "C", "texto": "Descritivo, pois se limita a caracterizar objetos ou pessoas.", "comentario": "Incorreta. O texto não se limita a caracterizar objetos ou pessoas; ele orienta a execução de uma ação por meio de instruções." },
      { "letra": "D", "texto": "Dissertativo-argumentativo, pois defende um ponto de vista sobre um tema controverso.", "comentario": "Incorreta. O texto não defende um ponto de vista sobre tema controverso; apresenta instruções objetivas de procedimento." }
    ],
    "gabarito": "B",
    "artigo": "Tipologia Textual",
    "justificativa": "O tipo injuntivo (ou instrucional) organiza-se em torno de comandos, instruções ou orientações para a realização de uma ação — típico de manuais, receitas e procedimentos operacionais, diferente da narração (sucessão de fatos), descrição (caracterização) e dissertação (defesa de ponto de vista)."
  },
  {
    "disciplina": "portugues",
    "topico": "Regência Nominal",
    "peso": 1,
    "dificuldade": "medio",
    "enunciado": "Assinale a alternativa em que a regência nominal (uso da preposição exigida pelo nome) está CORRETA:",
    "alternativas": [
      { "letra": "A", "texto": "O servidor demonstrou aptidão para o exercício da função." },
      { "letra": "B", "texto": "O servidor demonstrou aptidão do exercício da função.", "comentario": "Incorreta. \"Aptidão\" rege a preposição \"para\" (\"aptidão PARA o exercício\"), não \"de\"." },
      { "letra": "C", "texto": "O agente é obediente com as normas internas.", "comentario": "Incorreta. \"Obediente\" rege a preposição \"a\" (\"obediente ÀS normas\"), não \"com\"." },
      { "letra": "D", "texto": "O agente é obediente sobre as normas internas.", "comentario": "Incorreta. \"Obediente\" rege a preposição \"a\" (\"obediente ÀS normas\"), não \"sobre\"." }
    ],
    "gabarito": "A",
    "artigo": "Regência Nominal",
    "justificativa": "\"Aptidão\" rege a preposição \"para\" (aptidão PARA algo). \"Obediente\", por sua vez, rege a preposição \"a\" (obediente ÀS normas), não \"com\" nem \"sobre\" — nenhuma das opções com \"obediente\" está correta nesta questão, restando a alternativa A como a única regência nominal correta apresentada."
  },
  {
    "disciplina": "portugues",
    "topico": "Coesão Referencial - Pronomes",
    "peso": 1,
    "dificuldade": "dificil",
    "enunciado": "Em \"O diretor conversou com o novo agente e lhe entregou o crachá\", o termo \"lhe\" retoma, por coesão referencial, o seguinte elemento do texto:",
    "alternativas": [
      { "letra": "A", "texto": "\"o novo agente\", funcionando como objeto indireto do verbo \"entregar\"." },
      { "letra": "B", "texto": "\"o diretor\", funcionando como sujeito da oração.", "comentario": "Incorreta. \"O diretor\" já é o sujeito da oração, praticando a ação; \"lhe\" retoma o destinatário da ação, e não o próprio sujeito." },
      { "letra": "C", "texto": "\"o crachá\", funcionando como objeto direto do verbo \"entregar\".", "comentario": "Incorreta. \"O crachá\" é o próprio objeto direto do verbo \"entregar\" na frase, sendo o elemento entregue, e não aquele a quem se entrega (função do pronome \"lhe\")." },
      { "letra": "D", "texto": "Nenhum elemento anterior, tratando-se de um pronome sem referente no texto.", "comentario": "Incorreta. O pronome \"lhe\" tem referente claro no texto: \"o novo agente\", a quem o crachá foi entregue." }
    ],
    "gabarito": "A",
    "artigo": "Coesão Referencial - Pronomes Oblíquos",
    "justificativa": "O pronome oblíquo \"lhe\" retoma \"o novo agente\" (a quem o crachá foi entregue), funcionando como objeto indireto (\"entregou o crachá A ELE\") — o objeto direto da oração é \"o crachá\"."
  }
];
