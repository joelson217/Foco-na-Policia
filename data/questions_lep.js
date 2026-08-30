const QUESTIONS_LEP = [
  {
    "id": "lep_1",
    "disciplina": "lep",
    "topico": "Assistência ao Preso (Art. 10-27)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Segundo a Lei de Execução Penal (Lei nº 7.210/1984), a assistência ao preso e ao internado é dever do Estado. Sobre a assistência educacional, é correto afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O ensino de 1º grau (fundamental) é obrigatório, integrando-se ao sistema escolar da unidade federativa."
      },
      {
        "letra": "B",
        "texto": "A assistência educacional compreende apenas a instrução escolar básica, não prevendo a formação profissional.",
        "comentario": "A assistência educacional abrange também a formação profissional, conforme os arts. 18 a 21 da LEP, não se limitando à instrução escolar básica."
      },
      {
        "letra": "C",
        "texto": "A implantação de bibliotecas nos estabelecimentos penais é uma faculdade do diretor, a depender de verbas específicas.",
        "comentario": "A implantação de bibliotecas é obrigatória, e não uma faculdade do diretor: o Art. 21 da LEP determina que cada estabelecimento penal terá uma biblioteca."
      },
      {
        "letra": "D",
        "texto": "O ensino médio regular é obrigatório para todos os presos definitivos que não o tenham concluído antes da condenação.",
        "comentario": "A obrigatoriedade prevista no Art. 18 da LEP recai sobre o ensino de 1º grau (fundamental), e não sobre o ensino médio, que é incentivado mas não imposto da mesma forma."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 18 da LEP",
    "justificativa": "Conforme o Art. 18 da LEP, \"O ensino de 1º grau será obrigatório, integrando-se no sistema escolar da Unidade Federativa\"."
  },
  {
    "id": "lep_2",
    "disciplina": "lep",
    "topico": "Remição de Pena (Art. 126-130)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre o instituto da remição de pena previsto na Lei de Execução Penal, assinale a alternativa incorreta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A contagem de tempo para o fim de remição por trabalho será feita à razão de 1 dia de pena a cada 3 dias de trabalho.",
        "comentario": "Esta afirmação está correta e por isso não é a alternativa buscada: a remição pelo trabalho é mesmo de 1 dia de pena a cada 3 dias trabalhados (Art. 126, §1º, II, da LEP)."
      },
      {
        "letra": "B",
        "texto": "A contagem para remição por estudo será de 1 dia de pena a cada 12 horas de frequência escolar, divididas em, no mínimo, 3 dias.",
        "comentario": "Esta afirmação está correta: a remição pelo estudo corresponde mesmo a 1 dia de pena a cada 12 horas de frequência escolar, divididas em no mínimo 3 dias (Art. 126, §1º, I), por isso não é a alternativa incorreta buscada."
      },
      {
        "letra": "C",
        "texto": "O tempo remido será computado como pena cumprida, para todos os efeitos legais.",
        "comentario": "Esta afirmação está correta: o tempo remido é computado como pena cumprida para todos os efeitos legais (Art. 128 da LEP), não sendo, portanto, a alternativa incorreta."
      },
      {
        "letra": "D",
        "texto": "A prática de falta grave implica a revogação automática e obrigatória de todos os dias já remidos pelo apenado."
      }
    ],
    "gabarito": "D",
    "artigo": "Art. 127 da LEP",
    "justificativa": "Em caso de falta grave, o juiz poderá revogar ATÉ 1/3 do tempo remido (e não a totalidade), recomeçando a contagem a partir da data da infração."
  },
  {
    "id": "lep_3",
    "disciplina": "lep",
    "topico": "Permissão de Saída (Art. 120-121)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "De acordo com a Lei de Execução Penal, a permissão de saída difere da saída temporária. Quem é a autoridade competente para conceder a permissão de saída e sob qual condição de vigilância ela ocorre?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O Juiz da Execução, sem vigilância direta.",
        "comentario": "A permissão de saída é concedida pelo Diretor do estabelecimento, e não pelo Juiz, e ocorre mediante escolta (com vigilância direta), não sem vigilância — esta alternativa inverte tanto a autoridade quanto a forma de vigilância."
      },
      {
        "letra": "B",
        "texto": "O Diretor do estabelecimento, mediante escolta."
      },
      {
        "letra": "C",
        "texto": "O Ministério Público, com monitoramento eletrônico.",
        "comentario": "O Ministério Público não concede a permissão de saída; além disso, o benefício não é condicionado a monitoramento eletrônico, mas sim à escolta pelo Diretor do estabelecimento."
      },
      {
        "letra": "D",
        "texto": "O Juiz da Execução, mediante escolta obrigatória.",
        "comentario": "A autoridade está errada: quem concede a permissão de saída é o Diretor do estabelecimento (Art. 120 da LEP), e não o Juiz da Execução."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 120 da LEP",
    "justificativa": "A permissão de saída é concedida pelo Diretor do estabelecimento penal e a saída do estabelecimento ocorrerá mediante escolta (com vigilância direta)."
  },
  {
    "id": "lep_4",
    "disciplina": "lep",
    "topico": "Regime Disciplinar Diferenciado (Art. 52)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O Regime Disciplinar Diferenciado (RDD) é uma sanção disciplinar prevista na LEP. Qual o prazo máximo de duração do RDD?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Até 360 dias, sem limite de prorrogações sucessivas.",
        "comentario": "Essa era a regra anterior ao Pacote Anticrime (Lei 13.964/2019); atualmente o prazo máximo do RDD passou a ser de até 2 anos."
      },
      {
        "letra": "B",
        "texto": "Até 1 ano, prorrogável uma única vez por igual período.",
        "comentario": "Não corresponde a nenhuma das redações da LEP (nem a antiga de 360 dias, nem a atual de 2 anos), confundindo o RDD com prazos de outros institutos."
      },
      {
        "letra": "C",
        "texto": "Até 2 anos, sem prejuízo de repetição da sanção por nova falta grave de mesma espécie."
      },
      {
        "letra": "D",
        "texto": "Até 5 anos ininterruptos, prorrogáveis pelo Juiz.",
        "comentario": "Excede em muito o limite legal de 2 anos previsto no Art. 52, I, da LEP."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 52, I da LEP",
    "justificativa": "A duração máxima do RDD é de até 2 anos, sem prejuízo de repetição da sanção por nova falta grave de mesma espécie."
  },
  {
    "id": "lep_5",
    "disciplina": "lep",
    "topico": "Trabalho do Preso (Art. 28-37)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Sobre o trabalho do preso, julgue a alternativa correta conforme a LEP:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O trabalho do preso está sujeito ao regime da Consolidação das Leis do Trabalho (CLT).",
        "comentario": "O Art. 28, §2º da LEP exclui expressamente a aplicação da CLT ao trabalho do preso."
      },
      {
        "letra": "B",
        "texto": "A remuneração do trabalho do preso não poderá ser inferior a 3/4 do salário mínimo."
      },
      {
        "letra": "C",
        "texto": "O trabalho é facultativo para o preso condenado e obrigatório para o preso provisório.",
        "comentario": "É o inverso do previsto na LEP: o trabalho é obrigatório para o condenado (Art. 31) e facultativo para o preso provisório."
      },
      {
        "letra": "D",
        "texto": "A jornada de trabalho do preso deve ser de, no máximo, 4 horas diárias.",
        "comentario": "A jornada correta é de, no mínimo, 6 horas e, no máximo, 8 horas diárias (Art. 33), e não de 4 horas."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 29 da LEP",
    "justificativa": "A remuneração não será inferior a três quartos do salário mínimo. O trabalho NÃO está sujeito à CLT (Art. 28, §2º) e é obrigatório para o condenado (Art. 31)."
  },
  {
    "id": "lep_6",
    "disciplina": "lep",
    "topico": "Órgãos da Execução Penal (Art. 61-82)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "Dentre os órgãos da execução penal listados abaixo, qual NÃO integra o rol do Art. 61 da LEP?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O Conselho Nacional de Política Criminal e Penitenciária.",
        "comentario": "O CNPCP integra sim o rol do Art. 61, I, da LEP, por isso não é a resposta buscada (a questão pede o órgão que NÃO consta na lista)."
      },
      {
        "letra": "B",
        "texto": "O Juízo da Execução.",
        "comentario": "O Juízo da Execução é órgão da execução penal previsto no Art. 61, II, da LEP, portanto não é a alternativa correta para esta questão."
      },
      {
        "letra": "C",
        "texto": "A Polícia Civil e a Polícia Militar."
      },
      {
        "letra": "D",
        "texto": "O Conselho da Comunidade e o Patronato.",
        "comentario": "Ambos constam expressamente no rol do Art. 61 (incisos VI e VII), não sendo a resposta correta."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 61 da LEP",
    "justificativa": "As Polícias Civil e Militar não constam no rol de órgãos da Execução Penal da LEP, que abrange CNPCP, Juízo da Execução, MP, Conselho Penitenciário, Departamentos, Patronato, Conselho da Comunidade e Defensoria."
  },
  {
    "id": "lep_7",
    "disciplina": "lep",
    "topico": "Faltas Disciplinares (Art. 49-60)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Constitui falta grave o preso que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Deixar de cumprir com seus deveres de limpeza da cela.",
        "comentario": "Não consta no rol do Art. 50 da LEP como falta grave; é, no máximo, falta de natureza leve ou média prevista em norma regulamentar local."
      },
      {
        "letra": "B",
        "texto": "Fugir."
      },
      {
        "letra": "C",
        "texto": "Apresentar conduta de desleixo em sua higiene pessoal.",
        "comentario": "Não é falta grave listada no Art. 50 da LEP; comportamento dessa natureza é tratado, no máximo, como falta leve ou média sujeita a normas locais."
      },
      {
        "letra": "D",
        "texto": "Comunicar-se com os familiares sem aviso prévio.",
        "comentario": "Não configura falta grave, pois não está entre as condutas do Art. 50; o contato com familiares é, inclusive, direito do preso previsto no Art. 41 da LEP."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 50, II da LEP",
    "justificativa": "A fuga é expressamente classificada como falta grave pelo Art. 50, inciso II da LEP."
  },
  {
    "id": "lep_8",
    "disciplina": "lep",
    "topico": "Estabelecimentos Penais",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "A Casa do Albergado destina-se ao cumprimento de pena privativa de liberdade em regime:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Fechado.",
        "comentario": "O regime fechado é cumprido na Penitenciária (Art. 87 da LEP), e não na Casa do Albergado."
      },
      {
        "letra": "B",
        "texto": "Semiaberto.",
        "comentario": "O regime semiaberto é cumprido em Colônia Agrícola, Industrial ou similar (Art. 91 da LEP), e não na Casa do Albergado."
      },
      {
        "letra": "C",
        "texto": "Aberto, e à pena de limitação de fim de semana."
      },
      {
        "letra": "D",
        "texto": "Exclusivamente para presos provisórios.",
        "comentario": "Presos provisórios ficam em Cadeia Pública (Art. 102 da LEP); a Casa do Albergado destina-se a condenados em regime aberto e à pena de limitação de fim de semana."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 93 da LEP",
    "justificativa": "A Casa do Albergado destina-se ao cumprimento de pena privativa de liberdade em regime aberto e da pena de limitação de fim de semana (Art. 93)."
  },
  {
    "id": "lep_9",
    "disciplina": "lep",
    "topico": "Progressão de Regime (Art. 112)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre a progressão de regime, a exigência percentual de cumprimento de pena para o condenado reincidente específico em crime hediondo com resultado morte, após o Pacote Anticrime, é de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "40%.",
        "comentario": "Percentual muito inferior ao exigido; não corresponde a nenhuma hipótese de crime hediondo com resultado morte."
      },
      {
        "letra": "B",
        "texto": "50%.",
        "comentario": "Esse é o percentual exigido do condenado PRIMÁRIO em crime hediondo com resultado morte (Art. 112, VI, \"a\"), e não do reincidente específico."
      },
      {
        "letra": "C",
        "texto": "60%.",
        "comentario": "Esse percentual aplica-se ao reincidente em crime hediondo ou equiparado SEM resultado morte (Art. 112, VII), hipótese distinta da descrita."
      },
      {
        "letra": "D",
        "texto": "70%."
      }
    ],
    "gabarito": "D",
    "artigo": "Art. 112, VIII da LEP",
    "justificativa": "Exige-se 70% da pena, se o apenado for reincidente em crime hediondo ou equiparado com resultado morte."
  },
  {
    "id": "lep_10",
    "disciplina": "lep",
    "topico": "Faltas Disciplinares (Art. 49-60)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos da LEP, o cometimento de falta grave durante a execução da pena privativa de liberdade acarreta as seguintes consequências, EXCETO:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A interrupção do prazo para obtenção do livramento condicional."
      },
      {
        "letra": "B",
        "texto": "A regressão de regime de cumprimento de pena.",
        "comentario": "Essa consequência de fato ocorre: a falta grave pode acarretar a regressão de regime (Art. 118 da LEP), não sendo, portanto, a exceção buscada."
      },
      {
        "letra": "C",
        "texto": "A revogação de até 1/3 do tempo remido.",
        "comentario": "Essa consequência de fato ocorre: o juiz pode revogar até 1/3 do tempo remido em razão de falta grave (Art. 127 da LEP), não sendo a exceção procurada."
      },
      {
        "letra": "D",
        "texto": "A interrupção do prazo para progressão de regime.",
        "comentario": "Essa consequência de fato ocorre: segundo a Súmula 534 do STJ, a falta grave interrompe o prazo para progressão de regime, não sendo a exceção buscada."
      }
    ],
    "gabarito": "A",
    "artigo": "Súmula 441 do STJ",
    "justificativa": "A falta grave NÃO interrompe o prazo para o livramento condicional (Súmula 441/STJ). Interrompe para progressão (Súmula 534/STJ)."
  },
  {
    "id": "lep_11",
    "disciplina": "lep",
    "topico": "Saída Temporária (Art. 122-125)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "A autorização para a saída temporária será concedida por ato motivado do Juiz da Execução. Qual dos perfis abaixo possui direito ao benefício?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Preso em regime fechado, com bom comportamento.",
        "comentario": "A saída temporária é benefício exclusivo do regime semiaberto (Art. 122 da LEP), não se estendendo ao regime fechado."
      },
      {
        "letra": "B",
        "texto": "Preso em regime semiaberto, para visita à família."
      },
      {
        "letra": "C",
        "texto": "Preso provisório, para frequência a curso profissionalizante.",
        "comentario": "Presos provisórios não têm direito à saída temporária, benefício reservado aos condenados que cumprem pena em regime semiaberto."
      },
      {
        "letra": "D",
        "texto": "Preso em regime aberto, dispensado de recolhimento noturno.",
        "comentario": "O regime aberto já concede maior liberdade de circulação por sua própria natureza; a saída temporária, com essas condições, é benefício típico do regime semiaberto."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 122 da LEP",
    "justificativa": "A saída temporária é benefício exclusivo dos condenados que cumprem pena em regime semiaberto."
  },
  {
    "id": "lep_12",
    "disciplina": "lep",
    "topico": "Trabalho Externo (Art. 36-37)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "A respeito do trabalho externo para presos em regime fechado, assinale a correta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "É absolutamente vedado.",
        "comentario": "O trabalho externo é admitido para o regime fechado, respeitadas as condições legais (Art. 36 da LEP), não sendo absolutamente vedado."
      },
      {
        "letra": "B",
        "texto": "É admissível apenas para trabalho em serviços ou obras públicas, com limite de 10% do total de empregados."
      },
      {
        "letra": "C",
        "texto": "É admissível em empresas privadas, sem restrição de quantidade de presos.",
        "comentario": "Para o regime fechado, o trabalho externo só é admitido em serviços ou obras públicas, com limite de 10% do total de empregados (Art. 36, §1º), e não em empresas privadas sem restrição."
      },
      {
        "letra": "D",
        "texto": "Depende de autorização exclusiva do Ministério Público.",
        "comentario": "A autorização para o trabalho externo compete à direção do estabelecimento (Art. 37 da LEP), e não ao Ministério Público."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 36 da LEP",
    "justificativa": "O trabalho externo para regime fechado só é admitido em serviço ou obras públicas e o número de presos não pode exceder 10% do total de empregados."
  },
  {
    "id": "lep_13",
    "disciplina": "lep",
    "topico": "Assistência ao Egresso (Art. 25-27)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "A assistência ao egresso consiste na concessão, se necessário, de alojamento e alimentação, pelo prazo de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "1 mês.",
        "comentario": "O prazo correto é de 2 meses, conforme o Art. 25, parágrafo único, da LEP, e não de 1 mês."
      },
      {
        "letra": "B",
        "texto": "2 meses, prorrogável uma única vez."
      },
      {
        "letra": "C",
        "texto": "6 meses.",
        "comentario": "Excede o prazo legal, que é de 2 meses, prorrogável uma única vez, e não de 6 meses."
      },
      {
        "letra": "D",
        "texto": "1 ano, prorrogável mediante atestado de pobreza.",
        "comentario": "Não corresponde ao texto legal; o prazo é de 2 meses, prorrogável uma única vez mediante comprovação de empenho na obtenção de emprego, e não mediante atestado de pobreza por 1 ano."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 25, parágrafo único da LEP",
    "justificativa": "O prazo do alojamento/alimentação é de 2 meses, podendo ser prorrogado uma única vez se comprovado empenho na obtenção de emprego."
  },
  {
    "id": "lep_14",
    "disciplina": "lep",
    "topico": "Deveres, Direitos e Disciplina",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Segundo a LEP, constitui direito do preso:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Acesso a bebidas alcoólicas em datas festivas.",
        "comentario": "Não há previsão legal de tal direito; a LEP não contempla o acesso a bebidas alcoólicas entre as assistências ou direitos do preso."
      },
      {
        "letra": "B",
        "texto": "Visita íntima garantida a todos, independentemente de sanção disciplinar.",
        "comentario": "A visita íntima não é direito absoluto e incondicional listado no rol do Art. 41; pode ser restringida por ato motivado do diretor, inclusive em razão de sanções disciplinares."
      },
      {
        "letra": "C",
        "texto": "Assistência material, à saúde, jurídica, educacional, social e religiosa."
      },
      {
        "letra": "D",
        "texto": "Uso de telefone celular institucional para contato com o advogado.",
        "comentario": "A posse ou uso de aparelho de telefonia móvel é vedada ao preso, sendo inclusive tipificada como falta grave (Art. 50, VII); o contato com o advogado se dá por outros meios, como entrevista pessoal."
      },
      {
        "letra": "E",
        "texto": "Remuneração pelo trabalho prisional equivalente ao salário mínimo vigente.",
        "comentario": "A remuneração mínima garantida é de 3/4 do salário mínimo (Art. 29 da LEP), e não o valor integral do salário mínimo."
      }
    ],
    "correta": "C",
    "comentario": "Art. 11 da LEP: A assistência será: material, à saúde, jurídica, educacional, social e religiosa. A remuneração do trabalho (art. 29) não pode ser inferior a 3/4 do salário mínimo (não garante que seja igual)."
  },
  {
    "id": "lep_15",
    "disciplina": "lep",
    "topico": "RDC - Regime Disciplinar Diferenciado",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "De acordo com as recentes alterações do Pacote Anticrime (Lei 13.964/2019) na LEP, o prazo máximo de duração do Regime Disciplinar Diferenciado (RDD) é de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Até 360 dias, sem possibilidade de renovação.",
        "comentario": "Essa era a regra anterior ao Pacote Anticrime; atualmente o prazo máximo do RDD é de até 2 anos."
      },
      {
        "letra": "B",
        "texto": "Até 1 ano, renovável por mais 1 ano.",
        "comentario": "Não corresponde à redação atual do Art. 52, I, que fixa o prazo máximo em até 2 anos, sem esse esquema de renovação de 1 ano por 1 ano."
      },
      {
        "letra": "C",
        "texto": "Até 2 anos, sem limite de prorrogações (renovações sucessivas de 1 ano)."
      },
      {
        "letra": "D",
        "texto": "Até 2 anos, renovável apenas 1 vez por igual período.",
        "comentario": "O Art. 52, I, não estabelece limite de uma única renovação; permite repetição da sanção sempre que houver nova falta grave de mesma espécie."
      },
      {
        "letra": "E",
        "texto": "Até 3 anos, não prorrogável.",
        "comentario": "O prazo máximo legal é de 2 anos, e não 3 anos."
      }
    ],
    "correta": "C",
    "comentario": "Art. 52, I, da LEP: duração máxima de até 2 (dois) anos, sem prejuízo de repetição da sanção por nova falta grave da mesma espécie."
  },
  {
    "id": "lep_16",
    "disciplina": "lep",
    "topico": "Permissões de Saída",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A Permissão de Saída é concedida pelo diretor do estabelecimento, mediante escolta, nos casos de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Frequência a curso supletivo profissionalizante.",
        "comentario": "Essa hipótese refere-se à saída temporária (concedida pelo Juiz, sem escolta), e não à permissão de saída com escolta do diretor."
      },
      {
        "letra": "B",
        "texto": "Visita à família em datas comemorativas.",
        "comentario": "Essa é hipótese de saída temporária, e não de permissão de saída, que se limita a doença grave/falecimento de parente próximo ou tratamento médico."
      },
      {
        "letra": "C",
        "texto": "Falecimento ou doença grave de irmão."
      },
      {
        "letra": "D",
        "texto": "Participação em atividades desportivas na comunidade.",
        "comentario": "Não é hipótese prevista para a permissão de saída, que se restringe a motivos de saúde/falecimento e tratamento médico."
      },
      {
        "letra": "E",
        "texto": "Necessidade de resolver problemas bancários.",
        "comentario": "Motivo não previsto em lei para a permissão de saída, que exige doença grave, falecimento de parente próximo ou tratamento médico."
      }
    ],
    "correta": "C",
    "comentario": "Art. 120, LEP: A permissão de saída é dada a presos em regime FECHADO ou SEMIABERTO ou PROVISÓRIOS, com escolta, por doença grave ou falecimento de cônjuge/companheiro, ascendente, descendente ou irmão, e tratamento médico."
  },
  {
    "id": "lep_17",
    "disciplina": "lep",
    "topico": "Trabalho do Preso",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Sobre o trabalho do preso, é correto afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Está sujeito ao regime da Consolidação das Leis do Trabalho (CLT).",
        "comentario": "O trabalho do preso não se sujeita ao regime da CLT (Art. 28, §2º, da LEP)."
      },
      {
        "letra": "B",
        "texto": "É facultativo para o preso provisório."
      },
      {
        "letra": "C",
        "texto": "O preso político é obrigado ao trabalho interno.",
        "comentario": "Ao preso político não é imposto o dever de trabalhar; a LEP assegura a ele tratamento específico (Art. 200), sem trabalho obrigatório."
      },
      {
        "letra": "D",
        "texto": "A jornada não pode ser inferior a 8 nem superior a 10 horas.",
        "comentario": "A jornada correta é de, no mínimo, 6 horas e, no máximo, 8 horas diárias (Art. 33), e não de 8 a 10 horas."
      },
      {
        "letra": "E",
        "texto": "A remuneração do preso é impenhorável e não serve para indenizar o Estado.",
        "comentario": "O produto da remuneração destina-se, entre outros fins, ao ressarcimento do Estado pelas despesas com o preso (Art. 29, §1º, \"d\"), contrariando esta afirmativa."
      }
    ],
    "correta": "B",
    "comentario": "Art. 31, LEP: O preso provisório não está obrigado ao trabalho. A jornada é não inferior a 6 e não superior a 8 horas. Não se sujeita à CLT."
  },
  {
    "id": "lep_18",
    "disciplina": "lep",
    "topico": "Remição",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A remição de pena pelo trabalho e pelo estudo corresponde, respectivamente, a:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "1 dia de pena a cada 3 dias de trabalho; 1 dia de pena a cada 12 horas de frequência escolar."
      },
      {
        "letra": "B",
        "texto": "1 dia de pena a cada 2 dias de trabalho; 1 dia de pena a cada 10 horas de frequência escolar.",
        "comentario": "As proporções corretas são 1 dia a cada 3 dias de trabalho e 1 dia a cada 12 horas de estudo, e não 1 a cada 2 dias nem 1 a cada 10 horas."
      },
      {
        "letra": "C",
        "texto": "1 dia de pena a cada 1 dia de trabalho; 1 dia de pena a cada 8 horas de frequência escolar.",
        "comentario": "Não correspondem às proporções legais (1 dia a cada 3 dias de trabalho; 1 dia a cada 12 horas de estudo)."
      },
      {
        "letra": "D",
        "texto": "1 dia de pena a cada 3 dias de trabalho; 1 dia de pena a cada 8 horas de frequência escolar.",
        "comentario": "A proporção do trabalho está correta, mas a do estudo está errada: são necessárias 12 horas de frequência escolar, e não 8, para cada dia remido."
      },
      {
        "letra": "E",
        "texto": "2 dias de pena a cada 3 dias de trabalho; 2 dias de pena a cada 12 horas de estudo.",
        "comentario": "As proporções corretas são de 1 dia (não 2) a cada 3 dias de trabalho, e 1 dia (não 2) a cada 12 horas de estudo."
      }
    ],
    "correta": "A",
    "comentario": "Art. 126, LEP: A remição pelo trabalho é de 1 dia a cada 3 dias de trabalho. Pelo estudo, 1 dia a cada 12 horas (distribuídas em, no mínimo, 3 dias)."
  },
  {
    "id": "lep_19",
    "disciplina": "lep",
    "topico": "Faltas Disciplinares",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos da LEP, NÃO se caracteriza como falta disciplinar de natureza GRAVE:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Tentar a fuga.",
        "comentario": "A tentativa de fuga é expressamente prevista como falta grave pelo Art. 50, II, da LEP, não sendo, portanto, a alternativa buscada."
      },
      {
        "letra": "B",
        "texto": "Possuir aparelho telefônico de comunicação com outros presos ou o meio externo.",
        "comentario": "A posse de aparelho telefônico é falta grave expressamente tipificada no Art. 50, VII, da LEP, não sendo a resposta correta."
      },
      {
        "letra": "C",
        "texto": "Insubordinar-se ou desrespeitar qualquer funcionário ou autoridade.",
        "comentario": "Essa conduta configura falta grave nos termos do Art. 50, VI, da LEP, não sendo a alternativa procurada."
      },
      {
        "letra": "D",
        "texto": "Receber visita sem prévia autorização da direção, dentro da própria cela."
      },
      {
        "letra": "E",
        "texto": "Recusar-se a executar o trabalho, tarefa ou ordem recebida (fuga do dever).",
        "comentario": "A recusa a executar o trabalho, tarefa ou ordem recebida é falta grave prevista no Art. 50, VI, da LEP, não sendo a resposta correta."
      }
    ],
    "correta": "D",
    "comentario": "As opções A, B, C e E são textualmente faltas graves previstas no Art. 50 da LEP. O recebimento de visita irregular depende de norma local e não está no rol taxativo do art. 50 como falta grave genérica."
  },
  {
    "id": "lep_20",
    "disciplina": "lep",
    "topico": "Progressão de Regime",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Em regra, de acordo com o Pacote Anticrime (Lei 13.964/19), a progressão de regime para reincidente em crime hediondo ou equiparado, com resultado morte, exige o cumprimento de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "40% da pena.",
        "comentario": "O percentual de 40% não corresponde a nenhuma hipótese de crime hediondo com resultado morte; aplica-se a situações menos gravosas, como o condenado primário em crime comum."
      },
      {
        "letra": "B",
        "texto": "50% da pena.",
        "comentario": "50% é o percentual exigido para o condenado PRIMÁRIO em crime hediondo com resultado morte (Art. 112, VI, \"a\"), e não para o reincidente específico."
      },
      {
        "letra": "C",
        "texto": "60% da pena.",
        "comentario": "60% é o percentual do reincidente em crime hediondo ou equiparado SEM resultado morte (Art. 112, VII), hipótese distinta da descrita no enunciado."
      },
      {
        "letra": "D",
        "texto": "70% da pena."
      },
      {
        "letra": "E",
        "texto": "Vedada a progressão nesses casos.",
        "comentario": "A LEP não veda a progressão nesses casos; apenas exige o cumprimento de percentual mais elevado da pena (70%), conforme Art. 112, VIII."
      }
    ],
    "correta": "D",
    "comentario": "Conforme o art. 112, VIII, da LEP (redação dada pela Lei 13.964/2019 — Pacote Anticrime), a progressão de regime para o reincidente em crime hediondo ou equiparado com resultado morte exige o cumprimento de 70% da pena, vedado o livramento condicional."
  },
  {
    "id": "lep_21",
    "disciplina": "lep",
    "topico": "Órgãos da Execução",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "São órgãos da execução penal, EXCETO:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Conselho Nacional de Política Criminal e Penitenciária.",
        "comentario": "O CNPCP é órgão da execução penal expressamente previsto no Art. 61, I, da LEP, não sendo a alternativa procurada."
      },
      {
        "letra": "B",
        "texto": "Juízo da Execução.",
        "comentario": "O Juízo da Execução consta do Art. 61, II, da LEP como órgão da execução penal, não sendo a resposta correta."
      },
      {
        "letra": "C",
        "texto": "Ministério Público.",
        "comentario": "O Ministério Público é órgão da execução penal previsto no Art. 61, III, da LEP, não sendo a alternativa buscada."
      },
      {
        "letra": "D",
        "texto": "Defensoria Pública.",
        "comentario": "A Defensoria Pública foi incluída como órgão da execução penal pelo Art. 61, VIII, da LEP (Lei 12.313/2010), não sendo a resposta correta."
      },
      {
        "letra": "E",
        "texto": "Polícia Militar do Estado."
      }
    ],
    "correta": "E",
    "comentario": "Art. 61 da LEP não lista a Polícia Militar como órgão da execução penal. Os órgãos são: CNPCP, Juízo da Execução, MP, Conselho Penitenciário, Departamentos Penitenciários, Patronato, Conselho da Comunidade e Defensoria Pública."
  },
  {
    "id": "lep_22",
    "disciplina": "lep",
    "topico": "Faltas Disciplinares",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O isolamento, na própria cela, ou em local adequado, não poderá exceder a:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "10 dias.",
        "comentario": "Inferior ao prazo máximo de 30 dias fixado no Art. 58 da LEP."
      },
      {
        "letra": "B",
        "texto": "15 dias.",
        "comentario": "Esse é o intervalo entre visitas no RDD, e não o limite do isolamento disciplinar comum, que é de 30 dias."
      },
      {
        "letra": "C",
        "texto": "20 dias.",
        "comentario": "Não corresponde ao prazo legal de 30 dias previsto no Art. 58 da LEP."
      },
      {
        "letra": "D",
        "texto": "30 dias."
      },
      {
        "letra": "E",
        "texto": "60 dias.",
        "comentario": "Excede o limite legal de 30 dias fixado no Art. 58 da LEP."
      }
    ],
    "correta": "D",
    "comentario": "Art. 58 da LEP: O isolamento, na própria cela, ou em local adequado, não poderá exceder a 30 (trinta) dias."
  },
  {
    "id": "lep_23",
    "disciplina": "lep",
    "topico": "Assistência ao Egresso",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Considera-se egresso para fins da LEP:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O liberado definitivo, pelo prazo de 2 anos a contar da saída.",
        "comentario": "O prazo correto para o liberado definitivo é de 1 ano, e não 2 anos (Art. 26, I, da LEP)."
      },
      {
        "letra": "B",
        "texto": "O liberado condicional, durante o período de prova."
      },
      {
        "letra": "C",
        "texto": "O preso provisório após a impronúncia, por 1 ano.",
        "comentario": "Não é hipótese de egresso prevista no Art. 26, que trata apenas do liberado definitivo e do liberado condicional."
      },
      {
        "letra": "D",
        "texto": "Somente o condenado que cumpre pena no regime aberto.",
        "comentario": "O conceito de egresso não se limita ao regime aberto; refere-se ao liberado definitivo ou condicional, independentemente do regime anterior."
      },
      {
        "letra": "E",
        "texto": "O foragido recapturado após 1 ano.",
        "comentario": "Não é hipótese de egresso prevista em lei; o foragido recapturado permanece sujeito à execução normal da pena."
      }
    ],
    "correta": "B",
    "comentario": "Art. 26, LEP: Considera-se egresso: I - o liberado definitivo, pelo prazo de 1 (um) ano a contar da saída; II - o liberado condicional, durante o período de prova."
  },
  {
    "id": "lep_24",
    "disciplina": "lep",
    "topico": "Livramento Condicional",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Segundo a LEP, o livramento condicional poderá ser concedido pelo Juiz da execução, desde que preenchidos os requisitos. O cometimento de falta grave durante a execução da pena:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Interrompe o prazo para a obtenção do livramento condicional.",
        "comentario": "Contraria a Súmula 441/STJ, segundo a qual a falta grave NÃO interrompe o prazo para o livramento condicional."
      },
      {
        "letra": "B",
        "texto": "Não interrompe o prazo para a obtenção do livramento condicional."
      },
      {
        "letra": "C",
        "texto": "Revoga imediatamente o livramento condicional, sem necessidade de oitiva prévia.",
        "comentario": "A revogação do livramento condicional exige prévia oitiva do liberado, em respeito ao contraditório e à ampla defesa, não podendo ser automática."
      },
      {
        "letra": "D",
        "texto": "Aumenta em 1/3 a pena restante a ser cumprida.",
        "comentario": "Não há essa consequência prevista na LEP para a falta grave em relação ao livramento condicional."
      },
      {
        "letra": "E",
        "texto": "Impede definitivamente a concessão do benefício pelo resto da pena.",
        "comentario": "Não há vedação definitiva; a falta grave pode, no máximo, ensejar a revogação do benefício já concedido mediante devido processo, sem impedir eternamente nova concessão."
      }
    ],
    "correta": "B",
    "comentario": "Súmula 441 do STJ: A falta grave não interrompe o prazo para obtenção de livramento condicional."
  },
  {
    "id": "lep_25",
    "disciplina": "lep",
    "topico": "Comutaçao e Indulto",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A concessão de indulto e de comutação de penas é competência privativa:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Do Juiz da Execução.",
        "comentario": "O Juiz não tem competência para conceder indulto ou comutação; apenas aplica os requisitos fixados no decreto presidencial aos casos concretos."
      },
      {
        "letra": "B",
        "texto": "Do Conselho Nacional de Política Criminal e Penitenciária.",
        "comentario": "O CNPCP apenas elabora propostas e pareceres sobre política criminal, não possuindo competência decisória para conceder indulto ou comutação."
      },
      {
        "letra": "C",
        "texto": "Do Presidente da República."
      },
      {
        "letra": "D",
        "texto": "Do Ministro da Justiça.",
        "comentario": "O Ministro pode atuar apenas por delegação do Presidente da República, não sendo o titular originário dessa competência."
      },
      {
        "letra": "E",
        "texto": "Do Diretor do Estabelecimento Penal.",
        "comentario": "Não possui qualquer competência para conceder indulto ou comutação de penas."
      }
    ],
    "correta": "C",
    "comentario": "Art. 84, XII, da CF e Art. 187 da LEP. Indulto e comutação são decretados pelo Presidente da República, podendo ser delegados aos Ministros, AGU ou PGR."
  },
  {
    "id": "lep_26",
    "disciplina": "lep",
    "topico": "Remição",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Caso o preso sofra acidente de trabalho durante a execução da pena e fique impossibilitado de continuar trabalhando, ele:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Perderá o direito à remição dos dias em que ficar inativo.",
        "comentario": "Contraria o Art. 126, §4º, da LEP, que garante a continuidade do benefício ao preso impossibilitado por acidente."
      },
      {
        "letra": "B",
        "texto": "Continuará beneficiando-se da remição."
      },
      {
        "letra": "C",
        "texto": "Terá o tempo de remição contado pela metade.",
        "comentario": "Não há essa redução; o preso continua a se beneficiar integralmente da remição durante a impossibilidade decorrente de acidente."
      },
      {
        "letra": "D",
        "texto": "Será transferido para o regime semiaberto.",
        "comentario": "Não há essa consequência automática prevista na LEP para o acidente de trabalho."
      },
      {
        "letra": "E",
        "texto": "Receberá apenas a indenização pecuniária civil.",
        "comentario": "A LEP garante a continuidade da remição, e não apenas indenização civil, embora esta também possa ser devida em paralelo conforme legislação acidentária."
      }
    ],
    "correta": "B",
    "comentario": "Art. 126, § 4º, da LEP: O preso impossibilitado, por acidente, de prosseguir no trabalho ou nos estudos continuará a beneficiar-se com a remição."
  },
  {
    "id": "lep_27",
    "disciplina": "lep",
    "topico": "Defensoria Pública",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "No processo de execução penal, a assistência jurídica aos presos e aos internados sem recursos financeiros para constituir advogado será prestada:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Exclusivamente por advogados dativos.",
        "comentario": "A assistência jurídica integral é atribuição da Defensoria Pública (Art. 15 da LEP), não exclusivamente de advogados dativos."
      },
      {
        "letra": "B",
        "texto": "Pelo Ministério Público.",
        "comentario": "O MP fiscaliza a execução penal, mas não presta assistência jurídica ao preso; essa função é da Defensoria Pública."
      },
      {
        "letra": "C",
        "texto": "Pela Defensoria Pública."
      },
      {
        "letra": "D",
        "texto": "Pelo Conselho da Comunidade.",
        "comentario": "O Conselho da Comunidade tem atribuições de fiscalização e apoio social, não de assistência jurídica."
      },
      {
        "letra": "E",
        "texto": "Pelo Patronato.",
        "comentario": "O Patronato destina-se a assistir albergados e egressos, sem atribuição de assistência jurídica."
      }
    ],
    "correta": "C",
    "comentario": "Art. 15 da LEP: A assistência jurídica é destinada aos presos sem recursos financeiros e será prestada, integralmente, pela Defensoria Pública."
  },
  {
    "id": "lep_28",
    "disciplina": "lep",
    "topico": "Regime Disciplinar Diferenciado",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "O RDD (Regime Disciplinar Diferenciado) assegura ao preso o direito a banho de sol de, no mínimo:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "1 hora diária.",
        "comentario": "Inferior ao mínimo legal de 2 horas diárias previsto no Art. 52, IV, da LEP."
      },
      {
        "letra": "B",
        "texto": "2 horas diárias."
      },
      {
        "letra": "C",
        "texto": "3 horas diárias.",
        "comentario": "Superior ao previsto em lei, que fixa o mínimo em 2 horas diárias."
      },
      {
        "letra": "D",
        "texto": "4 horas diárias.",
        "comentario": "Não corresponde ao previsto no Art. 52, IV, da LEP, que estabelece 2 horas diárias."
      },
      {
        "letra": "E",
        "texto": "Banho de sol suspenso enquanto durar a sanção.",
        "comentario": "O direito ao banho de sol de 2 horas diárias é assegurado mesmo durante o RDD, não podendo ser suspenso."
      }
    ],
    "correta": "B",
    "comentario": "Art. 52, IV, da LEP: Direito a banho de sol de 2 (duas) horas diárias, em grupos de até 4 presos."
  },
  {
    "id": "lep_29",
    "disciplina": "lep",
    "topico": "Saída Temporária (Art. 122-125)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre a saída temporária prevista na Lei de Execução Penal (LEP), assinale a alternativa INCORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A saída temporária é concedida pelo juiz da execução, sem vigilância direta.",
        "comentario": "Esta afirmação está correta: a saída temporária é concedida pelo Juiz da Execução, sem escolta (sem vigilância direta), o que a diferencia da permissão de saída; por isso não é a alternativa incorreta buscada."
      },
      {
        "letra": "B",
        "texto": "O benefício aplica-se somente aos condenados em regime semiaberto.",
        "comentario": "Esta afirmação está correta: a saída temporária aplica-se apenas aos condenados que cumprem pena em regime semiaberto (Art. 122 da LEP), não sendo a alternativa incorreta."
      },
      {
        "letra": "C",
        "texto": "A saída temporária pode durar até 7 dias, renovada por mais 4 vezes no mesmo ano.",
        "comentario": "Esta afirmação está correta: a saída temporária pode durar até 7 dias, renovável por mais 4 vezes durante o ano (Art. 124, §1º), não sendo a alternativa incorreta."
      },
      {
        "letra": "D",
        "texto": "O diretor do estabelecimento pode conceder a saída temporária independentemente de autorização judicial, em casos urgentes."
      }
    ],
    "gabarito": "D",
    "artigo": "Art. 123 da LEP",
    "justificativa": "A saída temporária é concedida exclusivamente pelo JUIZ da execução (art. 123). O diretor do estabelecimento só concede a PERMISSÃO DE SAÍDA (art. 120-121), que é modalidade diferente. A saída temporária é sem vigilância direta, apenas para o semiaberto."
  },
  {
    "id": "lep_30",
    "disciplina": "lep",
    "topico": "Assistência ao Preso (Art. 10-27)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme a LEP, a assistência ao egresso consiste em orientação e apoio para reintegrá-lo à vida em liberdade. O prazo de duração dessa assistência é de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "6 meses a partir da soltura.",
        "comentario": "Inferior ao prazo correto de 1 ano previsto no Art. 26, I, da LEP para o egresso liberado definitivo."
      },
      {
        "letra": "B",
        "texto": "1 ano a partir da soltura."
      },
      {
        "letra": "C",
        "texto": "2 anos a partir da soltura.",
        "comentario": "Superior ao prazo legal de 1 ano fixado no Art. 26, I, da LEP."
      },
      {
        "letra": "D",
        "texto": "5 anos a partir da soltura.",
        "comentario": "Não corresponde a nenhum prazo previsto na LEP para a condição de egresso, que é de 1 ano para o liberado definitivo."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 26, I da LEP",
    "justificativa": "O liberado definitivo é considerado egresso, para os efeitos da LEP, pelo prazo de 1 (um) ano a contar da saída do estabelecimento (art. 26, I, da LEP). Já o liberado condicional é considerado egresso durante todo o período de prova (art. 26, II). O prazo de 2 (dois) meses do art. 25, II, refere-se, à parte, à concessão de alojamento e alimentação ao egresso, prorrogável uma única vez."
  },
  {
    "id": "lep_31",
    "disciplina": "lep",
    "topico": "Progressão de Regime (Art. 112)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Condenado primário por crime hediondo com resultado morte, quantos por cento da pena deve cumprir para progredir de regime?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "40% da pena.",
        "comentario": "Percentual inferior ao exigido (50%) para o condenado primário em crime hediondo com resultado morte."
      },
      {
        "letra": "B",
        "texto": "50% da pena."
      },
      {
        "letra": "C",
        "texto": "60% da pena.",
        "comentario": "Esse percentual refere-se ao reincidente em crime hediondo ou equiparado sem resultado morte, situação distinta da do enunciado (condenado primário com resultado morte)."
      },
      {
        "letra": "D",
        "texto": "70% da pena.",
        "comentario": "Esse percentual é exigido do reincidente específico em crime hediondo com resultado morte, e não do condenado primário."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 112, VI, \"a\" da LEP (Lei 13.964/2019)",
    "justificativa": "Conforme o art. 112, VI, \"a\", da LEP: o primário em crime hediondo com resultado morte deve cumprir 50% da pena para progredir. Para reincidente específico com resultado morte (hediondo): 70% (art. 112, VIII)."
  },
  {
    "id": "lep_32",
    "disciplina": "lep",
    "topico": "Remição de Pena (Art. 126-130)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A LEP admite a remição de pena pelo estudo. Sobre esse instituto, é correto afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Para cada 3 dias de frequência escolar, desconta-se 1 dia de pena.",
        "comentario": "Confunde a métrica: a remição pelo estudo é medida em HORAS de frequência escolar (12h), e não em dias, ao contrário da remição pelo trabalho."
      },
      {
        "letra": "B",
        "texto": "Para cada 12 horas de frequência escolar, em no mínimo 3 dias, desconta-se 1 dia de pena."
      },
      {
        "letra": "C",
        "texto": "A remição pelo estudo é exclusiva dos condenados em regime fechado.",
        "comentario": "A remição pelo estudo aplica-se a todos os regimes (fechado, semiaberto e aberto) e até ao livramento condicional, não sendo exclusiva do regime fechado."
      },
      {
        "letra": "D",
        "texto": "A remição pelo estudo não pode ser cumulada com a remição pelo trabalho.",
        "comentario": "A LEP admite expressamente a cumulação entre remição por trabalho e por estudo, desde que as horas de estudo sejam proporcionalmente divididas (Art. 126, §3º)."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 126, §1º, I da LEP",
    "justificativa": "A contagem de remição pelo estudo é: 1 dia de pena a cada 12 horas de frequência escolar, divididas em no mínimo 3 dias (§1º, I). O condenado nos regimes aberto e semiaberto também pode remir. A cumulação com trabalho é permitida."
  },
  {
    "id": "lep_33",
    "disciplina": "lep",
    "topico": "Faltas Disciplinares (Art. 49-60)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "De acordo com a LEP, o cometimento de falta grave pelo condenado NÃO provoca:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A possibilidade de regressão de regime.",
        "comentario": "A possibilidade de regressão de regime é sim consequência da falta grave (Art. 118, I, da LEP), não sendo a alternativa buscada."
      },
      {
        "letra": "B",
        "texto": "A interrupção do prazo para progressão de regime.",
        "comentario": "A interrupção do prazo para progressão de regime decorre da falta grave, conforme a Súmula 534 do STJ, não sendo a resposta procurada."
      },
      {
        "letra": "C",
        "texto": "A perda automática de todos os dias remidos."
      },
      {
        "letra": "D",
        "texto": "A possibilidade de revogação de até 1/3 dos dias remidos.",
        "comentario": "A possibilidade de revogação de até 1/3 dos dias remidos é consequência prevista no Art. 127 da LEP, não sendo a alternativa correta."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 127 da LEP",
    "justificativa": "O art. 127 prevê que o juiz PODERÁ revogar até 1/3 dos dias remidos — não é perda automática e não é revogação total. Já a regressão (art. 118) e a interrupção do prazo para progressão são consequências reconhecidas pela jurisprudência (STJ Súmula 534)."
  },
  {
    "id": "lep_34",
    "disciplina": "lep",
    "topico": "Regime Disciplinar Diferenciado (Art. 52)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "No que diz respeito ao Regime Disciplinar Diferenciado (RDD), assinale a alternativa correta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O RDD pode ser determinado pelo Diretor do estabelecimento, sem necessidade de intervenção judicial.",
        "comentario": "A inclusão no RDD depende de decisão do JUIZ competente, mediante requerimento fundamentado (Arts. 54 e 60 da LEP), não podendo ser determinada isoladamente pelo diretor."
      },
      {
        "letra": "B",
        "texto": "No RDD, o preso tem direito a visitas de 2 pessoas por semana, com duração máxima de 2 horas, sem contato físico.",
        "comentario": "As visitas no RDD são QUINZENAIS (a cada 15 dias), e não semanais, embora corretamente sejam sem contato físico."
      },
      {
        "letra": "C",
        "texto": "O RDD pode ser aplicado ao preso provisório (antes do trânsito em julgado) que apresentar alto risco para a ordem e segurança do estabelecimento."
      },
      {
        "letra": "D",
        "texto": "A duração máxima do RDD é de 1 ano, prorrogável por igual período.",
        "comentario": "A duração máxima atual (pós Pacote Anticrime) é de até 2 anos, e não de 1 ano prorrogável por igual período."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 52, §1º da LEP",
    "justificativa": "O RDD aplica-se tanto ao condenado quanto ao PRESO PROVISÓRIO (art. 52, §1º). A decisão é do JUIZ competente. As visitas são QUINZENAIS (a cada 15 dias, não semanais) de 2 pessoas, SEM contato físico. A duração máxima é de 2 anos, sem prejuízo de nova sanção por falta grave de mesma espécie."
  },
  {
    "id": "lep_35",
    "disciplina": "lep",
    "topico": "Trabalho do Preso (Art. 28-37)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Quanto à remuneração e à natureza do trabalho do preso, é correto afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O trabalho do preso está sujeito ao regime da CLT e é remunerado com no mínimo 1 salário mínimo.",
        "comentario": "O trabalho não se sujeita à CLT (Art. 28, §2º) e a remuneração mínima é de 3/4 do salário mínimo, não o salário mínimo integral."
      },
      {
        "letra": "B",
        "texto": "O trabalho do preso é dever social, não está sujeito à CLT e é remunerado com não menos de 3/4 do salário mínimo."
      },
      {
        "letra": "C",
        "texto": "O trabalho do preso em regime aberto pode ser voluntário, pois a CLT se aplica subsidiariamente.",
        "comentario": "A CLT não se aplica, nem mesmo subsidiariamente, ao trabalho do preso, seja qual for o regime de cumprimento da pena."
      },
      {
        "letra": "D",
        "texto": "A remuneração do trabalho do preso é de no mínimo 1/2 do salário mínimo, revertida exclusivamente ao Estado.",
        "comentario": "A remuneração mínima é de 3/4 do salário mínimo, e sua destinação não é exclusiva ao Estado, abrangendo também indenização de danos, assistência à família, despesas pessoais e pecúlio."
      }
    ],
    "gabarito": "B",
    "artigo": "Arts. 28 e 29 da LEP",
    "justificativa": "Literalidade da LEP: o trabalho é dever social e condição de dignidade (art. 28); NÃO está sujeito à CLT (art. 28, §2º); a remuneração mínima é de 3/4 do salário mínimo (art. 29). O produto do trabalho destina-se: indenização de danos, assistência à família, despesas pessoais, ressarcimento ao Estado e pecúlio."
  },
  {
    "id": "lep_36",
    "disciplina": "lep",
    "topico": "Estabelecimentos Penais",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Para qual regime destina-se a Penitenciária, segundo a LEP?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Regime aberto.",
        "comentario": "O regime aberto é cumprido na Casa do Albergado (Art. 93 da LEP), e não na Penitenciária."
      },
      {
        "letra": "B",
        "texto": "Regime semiaberto.",
        "comentario": "O regime semiaberto é cumprido em Colônia Agrícola, Industrial ou similar (Art. 91 da LEP), e não na Penitenciária."
      },
      {
        "letra": "C",
        "texto": "Regime fechado."
      },
      {
        "letra": "D",
        "texto": "Para presos provisórios antes do julgamento.",
        "comentario": "Presos provisórios ficam, em regra, na Cadeia Pública (Art. 102 da LEP), e não na Penitenciária."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 87 da LEP",
    "justificativa": "A Penitenciária destina-se ao condenado à pena de reclusão em REGIME FECHADO (art. 87). A Colônia Agrícola é para o semiaberto. A Casa do Albergado é para o aberto. A Cadeia Pública é para presos provisórios."
  },
  {
    "id": "lep_37",
    "disciplina": "lep",
    "topico": "Assistência ao Preso (Art. 10-27)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre a assistência religiosa ao preso, prevista na LEP, é correto afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O preso é obrigado a participar de cultos e práticas religiosas organizados pelo estabelecimento.",
        "comentario": "A participação em atividades religiosas é facultativa, e não obrigatória (Art. 24, §2º, da LEP)."
      },
      {
        "letra": "B",
        "texto": "O estabelecimento penal deverá possuir local adequado para cultos religiosos, sendo vedado o ingresso de ministros de qualquer culto religioso.",
        "comentario": "Ao contrário, a LEP franqueia a colaboração e o ingresso de ministros religiosos nos estabelecimentos penais (Art. 24, §1º)."
      },
      {
        "letra": "C",
        "texto": "O preso pode exercer sua crença religiosa, sendo vedado apenas o proselitismo.",
        "comentario": "Não é essa a formulação central do Art. 24 da LEP, que assegura a assistência e a liberdade de culto religioso, sem tratar de vedação a proselitismo como regra principal."
      },
      {
        "letra": "D",
        "texto": "Os estabelecimentos destinados a mulheres serão dotados de seção para gestante e parturiente e de creche."
      }
    ],
    "gabarito": "D",
    "artigo": "Art. 89 da LEP",
    "justificativa": "O art. 89 da LEP determina que estabelecimentos destinados a mulheres tenham seção para gestante e parturiente e creche. A participação em cultos religiosos é livre e facultativa, e o ingresso de ministros religiosos é permitido."
  },
  {
    "id": "lep_38",
    "disciplina": "lep",
    "topico": "Órgãos da Execução Penal",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "O Conselho da Comunidade, órgão da execução penal previsto na LEP, tem como atribuição:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Julgar os recursos interpostos pelos presos contra sanções disciplinares.",
        "comentario": "Essa atribuição não é do Conselho da Comunidade; recursos contra sanções disciplinares são dirigidos ao Juiz da Execução."
      },
      {
        "letra": "B",
        "texto": "Visitar os estabelecimentos penais mensalmente, entrevistar presos, apresentar relatórios ao Juiz da Execução e obter recursos materiais e humanos para assistência aos presos."
      },
      {
        "letra": "C",
        "texto": "Substituir a função do MP na fiscalização da execução penal.",
        "comentario": "O Conselho da Comunidade tem atuação de apoio e fiscalização social complementar, mas não substitui o Ministério Público, que possui atribuição própria e autônoma de fiscalização."
      },
      {
        "letra": "D",
        "texto": "Conceder livramento condicional nos casos em que o Juiz estiver impossibilitado.",
        "comentario": "A concessão de livramento condicional é atribuição exclusiva e indelegável do Juiz da Execução (Art. 66, III, da LEP)."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 81-A da LEP",
    "justificativa": "O Conselho da Comunidade (art. 81-A) tem como incumbência: visitar os estabelecimentos mensalmente, entrevistar presos, apresentar relatório ao Juiz da Execução e diligenciar para obtenção de recursos materiais e humanos para assistência aos presos."
  },
  {
    "id": "lep_39",
    "disciplina": "lep",
    "topico": "Remição de Pena",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Em relação à remição de pena pelo estudo, o cálculo de desconto estabelecido pela LEP e pela jurisprudência é de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "1 dia de pena a cada 3 dias trabalhados.",
        "comentario": "Essa é a métrica da remição pelo TRABALHO, e não pelo ESTUDO, que é o objeto da pergunta e segue proporção diferente (12 horas por dia remido)."
      },
      {
        "letra": "B",
        "texto": "1 dia de pena a cada 12 horas de frequência escolar divididas em, no mínimo, 3 dias."
      },
      {
        "letra": "C",
        "texto": "1 dia de pena a cada livro lido, sem limites.",
        "comentario": "Não há previsão legal de remição direta e ilimitada por leitura de livros na LEP; a remição pelo estudo é medida em horas de frequência escolar."
      },
      {
        "letra": "D",
        "texto": "2 dias de pena por semestre letivo concluído.",
        "comentario": "Não corresponde à métrica legal, que conta horas de frequência escolar (12h = 1 dia), e não semestres concluídos."
      }
    ],
    "gabarito": "B",
    "artigo": "Artigo 126, § 1º, I da LEP",
    "justificativa": "A remição pelo estudo exige 12 horas de frequência escolar (ensino fundamental, médio, superior ou técnico) divididas em no mínimo 3 dias, abatendo 1 dia de pena. O trabalho abate 1 dia para cada 3 dias trabalhados."
  },
  {
    "id": "lep_40",
    "disciplina": "lep",
    "topico": "Regime Disciplinar Diferenciado",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Após as modificações trazidas pelo Pacote Anticrime (Lei nº 13.964/19), o RDD passou a ter as seguintes características, EXCETO:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Duração máxima de até 2 anos, sem prejuízo de novas repetições por faltas graves novas.",
        "comentario": "Essa é, de fato, característica do RDD após o Pacote Anticrime: duração máxima de até 2 anos, sem prejuízo de repetição por novas faltas graves (Art. 52, I), não sendo a exceção buscada."
      },
      {
        "letra": "B",
        "texto": "Visitas semanais de duas pessoas, com contato físico assegurado no parlatório."
      },
      {
        "letra": "C",
        "texto": "Banho de sol de 2 horas diárias, em grupos de até 4 presos.",
        "comentario": "O banho de sol de 2 horas diárias em grupos de até 4 presos é, de fato, característica do RDD (Art. 52, IV), não sendo a exceção procurada."
      },
      {
        "letra": "D",
        "texto": "Entrevistas monitoradas, salvo com seu defensor constituído.",
        "comentario": "As entrevistas monitoradas, ressalvadas as mantidas com o defensor, são de fato característica do RDD, não sendo a exceção buscada."
      }
    ],
    "gabarito": "B",
    "artigo": "Artigo 52 da LEP",
    "justificativa": "As visitas no RDD ocorrem quinzenalmente (e não semanalmente) e são sem contato físico, através de parlatório ou barreira física (vidro) com interfone."
  },
  {
    "id": "lep_41",
    "disciplina": "lep",
    "topico": "Trabalho do Preso",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O trabalho do condenado é dever social e condição de dignidade humana. Sobre a obrigatoriedade e regência trabalhista do preso, é correto afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O trabalho é obrigatório tanto para o preso condenado definitivo quanto para o preso provisório.",
        "comentario": "O trabalho é obrigatório apenas para o condenado definitivo; para o preso provisório é facultativo (Art. 31, parágrafo único, da LEP)."
      },
      {
        "letra": "B",
        "texto": "O trabalho do preso está sujeito integralmente às normas da CLT.",
        "comentario": "O Art. 28, §2º, da LEP exclui expressamente a aplicação da CLT ao trabalho do preso."
      },
      {
        "letra": "C",
        "texto": "O trabalho é obrigatório para o condenado à pena privativa de liberdade, mas é facultativo para o preso provisório."
      },
      {
        "letra": "D",
        "texto": "A remuneração do preso pode ser inferior a 3/4 do salário mínimo se for trabalho interno.",
        "comentario": "Não há essa exceção; a remuneração mínima de 3/4 do salário mínimo (Art. 29) aplica-se independentemente de o trabalho ser interno ou externo."
      }
    ],
    "gabarito": "C",
    "artigo": "Artigos 28 e 31 da LEP",
    "justificativa": "O trabalho é dever do condenado definitivo. Contudo, para o preso provisório, o trabalho é facultativo e só pode ser realizado no âmbito interno da unidade. O trabalho do preso não segue CLT (Art. 28) e a remuneração não pode ser inferior a 3/4 do mínimo (Art. 29)."
  },
  {
    "id": "lep_42",
    "disciplina": "lep",
    "topico": "Permissão de Saída vs Saída Temporária",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O benefício que permite a saída do preso para frequentar curso profissionalizante ou visitar familiares é denominado saída temporária. Quem é a autoridade competente para concedê-la e qual o regime exigido?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Diretor do estabelecimento, para presos do regime fechado e semiaberto.",
        "comentario": "A saída temporária é concedida pelo Juiz da Execução, e não pelo diretor, e destina-se exclusivamente ao regime semiaberto."
      },
      {
        "letra": "B",
        "texto": "Juiz da Execução, para presos do regime semiaberto apenas."
      },
      {
        "letra": "C",
        "texto": "Juiz da Execução, para presos do regime semiaberto e fechado.",
        "comentario": "A autoridade está correta (Juiz da Execução), mas o benefício não se estende ao regime fechado, sendo exclusivo do semiaberto."
      },
      {
        "letra": "D",
        "texto": "Conselho Penitenciário, para presos do regime semiaberto e aberto.",
        "comentario": "O Conselho Penitenciário não tem competência para conceder saída temporária, atribuição exclusiva do Juiz da Execução."
      }
    ],
    "gabarito": "B",
    "artigo": "Artigos 122 e 123 da LEP",
    "justificativa": "A saída temporária é autorizada exclusivamente pelo JUIZ da execução para presos do regime semiaberto. A permissão de saída (saúde ou falecimento) é concedida pelo DIRETOR e aplica-se aos regimes fechado e semiaberto."
  },
  {
    "id": "lep_43",
    "disciplina": "lep",
    "topico": "Órgãos da Execução Penal",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Assinale a opção que indica um órgão consultivo e fiscalizador da execução penal incumbido de inspecionar os estabelecimentos, emitir parecer sobre indulto e comutação de penas, composto por membros nomeados pelo Governador do Estado:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Conselho Penitenciário."
      },
      {
        "letra": "B",
        "texto": "Conselho da Comunidade.",
        "comentario": "O Conselho da Comunidade tem função de fiscalização social e assistencial (visitas, relatórios), mas não é composto por membros nomeados pelo Governador nem emite parecer sobre indulto/comutação, atribuição do Conselho Penitenciário."
      },
      {
        "letra": "C",
        "texto": "Ministério Público.",
        "comentario": "O MP fiscaliza a execução penal como parte, mas não é órgão consultivo com composição nomeada pelo Governador, nem tem a atribuição específica de emitir parecer sobre indulto e comutação."
      },
      {
        "letra": "D",
        "texto": "Defensoria Pública.",
        "comentario": "A Defensoria atua na assistência jurídica ao preso, sem a função consultiva e fiscalizadora, nem a composição nomeada pelo Governador, descrita no enunciado."
      }
    ],
    "gabarito": "A",
    "artigo": "Artigos 69 e 70 da LEP",
    "justificativa": "O Conselho Penitenciário é órgão consultivo e fiscalizador encarregado de inspecionar presídios, apresentar relatórios e emitir pareceres sobre indultos e comutação (excluindo a iniciativa que cabe à Defensoria ou ao MP)."
  },
  {
    "id": "lep_44",
    "disciplina": "lep",
    "topico": "Faltas Disciplinares",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Constitui falta grave do preso condenado à pena privativa de liberdade, nos termos da LEP:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Recusar-se a participar de atividades religiosas.",
        "comentario": "Não é falta grave; a participação em atividades religiosas é facultativa (Art. 24, §2º, da LEP), não podendo sua recusa ser punida."
      },
      {
        "letra": "B",
        "texto": "Possuir, indevidamente, instrumento capaz de ofender a integridade física de outrem."
      },
      {
        "letra": "C",
        "texto": "Apresentar higiene pessoal inadequada.",
        "comentario": "Não consta no rol taxativo de faltas graves do Art. 50 da LEP."
      },
      {
        "letra": "D",
        "texto": "Trabalhar com rendimento abaixo do esperado por imperícia temporária.",
        "comentario": "Não se caracteriza falta grave quando decorrente de imperícia ou circunstância não dolosa do preso; a LEP pune condutas dolosas de descumprimento, não a mera baixa produtividade justificada."
      }
    ],
    "gabarito": "B",
    "artigo": "Artigo 50, III da LEP",
    "justificativa": "Possuir arma ou instrumento capaz de ofender a integridade corporal de outrem é classificado expressamente como FALTA GRAVE pelo art. 50, III da LEP."
  },
  {
    "id": "lep_45",
    "disciplina": "lep",
    "topico": "Direitos do Preso",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Constitui direito do preso expressamente previsto no Artigo 41 da Lei de Execução Penal:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Receber visitas íntimas diárias sem controle da direção.",
        "comentario": "Não há esse direito absoluto previsto no Art. 41 da LEP; a visita íntima é regulamentada e pode ser restringida por ato motivado do diretor."
      },
      {
        "letra": "B",
        "texto": "Contato com o mundo exterior por meio de correspondência escrita, leitura e outros meios de informação que não comprometam a moral e os bons costumes."
      },
      {
        "letra": "C",
        "texto": "Exercer o direito de greve trabalhista e partidária.",
        "comentario": "Não há previsão desse direito na LEP; o trabalho do preso, inclusive, é dever, não havendo espaço para greve."
      },
      {
        "letra": "D",
        "texto": "Realizar ligações telefônicas particulares irrestritas a qualquer momento do dia.",
        "comentario": "Não há esse direito irrestrito previsto no Art. 41 da LEP; o uso indevido de aparelho de telefonia, aliás, é falta grave (Art. 50, VII)."
      }
    ],
    "gabarito": "B",
    "artigo": "Artigo 41, XV da LEP",
    "justificativa": "O preso tem direito à correspondência escrita e meios de informação controlados. Não há direito de greve ou ligações telefônicas irrestritas na LEP."
  },
  {
    "disciplina": "lep",
    "topico": "Estabelecimentos Penais (Art. 82-104)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Segundo a LEP, a Penitenciária é destinada ao recolhimento de condenados à pena privativa de liberdade em regime fechado. Quanto à sua estrutura, é correto afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O condenado será alojado em cela individual com área mínima de 6 m², contendo dormitório, aparelho sanitário e lavatório."
      },
      {
        "letra": "B",
        "texto": "A cela individual tem área mínima de 4 m², podendo ser compartilhada com até 2 presos.",
        "comentario": "A área mínima correta é de 6 m² (não 4 m²), e a cela deve ser individual, sem essa previsão de compartilhamento do Art. 88 da LEP."
      },
      {
        "letra": "C",
        "texto": "A LEP não estabelece área mínima para as celas, ficando a cargo do Estado.",
        "comentario": "Ao contrário, o Art. 88 da LEP estabelece expressamente a área mínima de 6 m² para a cela individual."
      },
      {
        "letra": "D",
        "texto": "O preso em regime fechado pode ser alojado em dormitório coletivo sem restrição de número de detentos.",
        "comentario": "O Art. 88 exige cela individual no regime fechado; o eventual alojamento coletivo (Art. 92) exige requisitos de seleção adequada dos presos e vigilância, não sendo 'sem restrição de número'."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 88 da LEP",
    "justificativa": "O Art. 88 da LEP determina que o condenado seja alojado em cela individual com área mínima de 6 m², contendo dormitório, aparelho sanitário e lavatório.",
    "id": "lep_46"
  },
  {
    "disciplina": "lep",
    "topico": "Saída Temporária (Art. 122-125)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos da LEP, os condenados que cumprem pena em regime semiaberto poderão obter autorização para saída temporária. Sobre as condições para concessão, é correto afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A saída temporária será concedida pelo Juízo da Execução, ouvido o Ministério Público, com ou sem monitoração eletrônica."
      },
      {
        "letra": "B",
        "texto": "O prazo da saída temporária não poderá exceder 7 dias, renovável por mais 4 vezes durante o ano.",
        "comentario": "Embora esse prazo esteja de fato previsto no Art. 124, §1º, I, da LEP, o enunciado busca a alternativa que descreve corretamente a autoridade e o procedimento de concessão (Art. 124, caput), aspecto que a alternativa A traz de forma completa e correta."
      },
      {
        "letra": "C",
        "texto": "Exige-se o cumprimento mínimo de 1/3 da pena para os primários e 1/2 para os reincidentes.",
        "comentario": "Não há esse requisito de fração mínima de pena cumprida entre as condições legais da saída temporária; os requisitos são de comportamento adequado e compatibilidade do benefício com os objetivos da pena (Art. 123)."
      },
      {
        "letra": "D",
        "texto": "A saída temporária automática pode ser concedida pelo diretor do estabelecimento penal sem autorização judicial.",
        "comentario": "Contraria o Art. 124, que exige decisão do Juízo da Execução; não existe modalidade 'automática' concedida pelo diretor."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 124 da LEP",
    "justificativa": "O Art. 124 da LEP determina que a autorização para saída temporária será concedida pelo Juízo da Execução, ouvido o Ministério Público e a administração penitenciária, com ou sem monitoração eletrônica.",
    "id": "lep_47"
  },
  {
    "disciplina": "lep",
    "topico": "Livramento Condicional (Art. 131-146)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre o livramento condicional previsto na LEP, assinale a alternativa CORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O réu condenado por crime hediondo com resultado morte não poderá ser beneficiado com livramento condicional.",
        "comentario": "Não há vedação absoluta ao livramento condicional para hediondos com resultado morte; a vedação constitucional (Art. 5º, XLIII, da CF) refere-se à graça e à anistia, e a LEP apenas prevê requisitos mais rigorosos para esses casos, sem vedar o benefício."
      },
      {
        "letra": "B",
        "texto": "A concessão do livramento condicional exige o cumprimento de mais de 2/3 da pena para condenados por crime hediondo sem violência.",
        "comentario": "A fração de mais de 2/3 aplica-se ao condenado por crime hediondo COM violência ou grave ameaça e não reincidente específico (Art. 83, V); o crime hediondo sem violência ou grave ameaça segue a regra geral do inciso I (mais de 1/3, se primário, ou mais de 1/2, se reincidente)."
      },
      {
        "letra": "C",
        "texto": "O condenado a pena não superior a 2 anos poderá obter livramento condicional após cumprir metade da pena, se primário.",
        "comentario": "Não há essa regra específica de 'metade da pena para pena de até 2 anos' no livramento condicional; a fração de mais de 1/3 aplica-se ao condenado primário de bons antecedentes, independentemente da duração da pena aplicada."
      },
      {
        "letra": "D",
        "texto": "O preso primário condenado por crime não hediondo deve ter cumprido mais de 1/3 da pena para obter o livramento."
      }
    ],
    "gabarito": "D",
    "artigo": "Art. 83, I da LEP",
    "justificativa": "Conforme o Art. 83, I da LEP, o livramento condicional poderá ser concedido ao primário quando cumprida mais de 1/3 da pena, desde que comprovados o comportamento satisfatório, bom desempenho no trabalho e aptidão para prover a própria subsistência.",
    "id": "lep_48"
  },
  {
    "disciplina": "lep",
    "topico": "Conselho Nacional de Política Criminal (Art. 62-66)",
    "peso": 1,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "De acordo com a LEP, o Conselho da Comunidade, em cada comarca onde houver estabelecimento penal, é composto por representantes. Assinale a composição correta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Um representante de associação comercial ou industrial, advogado indicado pela OAB e assistente social indicado pelo conselho da área."
      },
      {
        "letra": "B",
        "texto": "Apenas representantes do governo estadual e federal.",
        "comentario": "Contraria o Art. 80, que exige representantes da sociedade civil (associação comercial/industrial, OAB, assistente social), e não apenas agentes governamentais."
      },
      {
        "letra": "C",
        "texto": "Apenas juízes, promotores e defensores públicos.",
        "comentario": "Esses integrantes fazem parte de outros órgãos da execução (Juízo, MP, Defensoria), e não compõem o Conselho da Comunidade, cuja composição é de representantes da sociedade civil."
      },
      {
        "letra": "D",
        "texto": "Representantes da Câmara Municipal e da Assembleia Legislativa.",
        "comentario": "Não é essa a composição prevista no Art. 80 da LEP, que exige representante de associação comercial/industrial, advogado indicado pela OAB e assistente social."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 80 da LEP",
    "justificativa": "O Art. 80 da LEP determina que o Conselho da Comunidade será integrado por, no mínimo: 1 representante de associação comercial ou industrial, 1 advogado indicado pela OAB e 1 assistente social indicado pelo respectivo conselho profissional.",
    "id": "lep_49"
  },
  {
    "disciplina": "lep",
    "topico": "Disciplina (Art. 44-60)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre as sanções disciplinares previstas na LEP, é CORRETO afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O isolamento em cela, a suspensão ou restrição de direitos e a repreensão são sanções disciplinares previstas pela LEP."
      },
      {
        "letra": "B",
        "texto": "O isolamento na cela pode ser decretado por até 60 dias sem necessidade de autorização judicial.",
        "comentario": "O prazo máximo do isolamento é de 30 dias (Art. 58 da LEP), e não 60 dias."
      },
      {
        "letra": "C",
        "texto": "A falta grave é apurada por sindicância, prescindindo de oitiva do condenado.",
        "comentario": "A apuração da falta grave exige processo administrativo disciplinar com garantia do contraditório e da ampla defesa, inclusive oitiva do condenado, não podendo prescindir dessa oitiva."
      },
      {
        "letra": "D",
        "texto": "A reincidência em falta grave suspende automaticamente a remição de toda a pena acumulada.",
        "comentario": "A consequência prevista é a possibilidade de revogação de até 1/3 (não a totalidade) dos dias remidos, mediante decisão fundamentada do juiz (Art. 127), e não suspensão automática de toda a pena acumulada."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 53 da LEP",
    "justificativa": "O Art. 53 da LEP elenca as sanções disciplinares: I – advertência verbal; II – repreensão; III – suspensão ou restrição de direitos; IV – isolamento na própria cela ou em local adequado nos estabelecimentos que possuam alojamento coletivo; V – inclusão no regime disciplinar diferenciado.",
    "id": "lep_50"
  },
  {
    "disciplina": "lep",
    "topico": "Remição de Pena (Art. 126-130)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Conforme a LEP e jurisprudência do STJ, sobre a remição pelo estudo, é correto afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A cada 12 horas de frequência escolar divididas em no mínimo 3 dias, remirá 1 dia de pena."
      },
      {
        "letra": "B",
        "texto": "O preso que conclui o ensino fundamental, médio ou superior terá a pena remida em 1/3 adicional.",
        "comentario": "Não há previsão de bônus de 1/3 por conclusão de etapa de ensino na LEP; a remição segue estritamente a proporção de horas de frequência escolar."
      },
      {
        "letra": "C",
        "texto": "A leitura de livros também autoriza a remição, na proporção de 1 dia de pena para cada 4 livros lidos.",
        "comentario": "Não há essa proporção fixa de '4 livros' estabelecida em lei; a regra geral de remição pelo estudo é medida em horas de frequência escolar, e não por quantidade de livros lidos."
      },
      {
        "letra": "D",
        "texto": "A remição pelo estudo é vedada ao preso em regime fechado, sendo exclusiva do regime semiaberto.",
        "comentario": "A remição pelo estudo é permitida em qualquer regime (fechado, semiaberto e aberto), inclusive ao preso em livramento condicional, não sendo exclusiva do semiaberto."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 126, §1º, I da LEP",
    "justificativa": "O Art. 126, §1º, I da LEP estabelece que a contagem de tempo para a remição pelo estudo será feita à razão de 1 dia de pena a cada 12 horas de frequência escolar — atividade de ensino fundamental, médio, inclusive profissionalizante, superior ou requalificação profissional —, divididas em no mínimo 3 dias.",
    "id": "lep_51"
  },
  {
    "disciplina": "lep",
    "topico": "Direitos do Preso (Art. 40-43)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "A LEP assegura ao preso o exercício de direitos não atingidos pela sentença ou pela lei. Dentre os direitos elencados no Art. 41 da LEP, NÃO está previsto:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Alimentação suficiente e vestuário.",
        "comentario": "Alimentação suficiente e vestuário são direitos expressamente previstos no Art. 41, I, da LEP, não sendo a alternativa buscada."
      },
      {
        "letra": "B",
        "texto": "Atribuição de trabalho e sua remuneração.",
        "comentario": "A atribuição de trabalho remunerado é direito previsto no Art. 41, II, da LEP, não sendo a resposta correta."
      },
      {
        "letra": "C",
        "texto": "Direito de votar e ser votado durante o cumprimento da pena."
      },
      {
        "letra": "D",
        "texto": "Contato com o mundo exterior por meio de correspondência escrita, da leitura e de outros meios de informação.",
        "comentario": "O contato com o mundo exterior por correspondência e outros meios de informação é direito previsto no Art. 41, XV, da LEP, não sendo a alternativa procurada."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 41 da LEP c/c Art. 15 da CF",
    "justificativa": "O Art. 15, III da CF determina a suspensão dos direitos políticos durante o cumprimento da pena criminal transitada em julgado, enquanto durarem seus efeitos. Portanto, o preso não pode votar nem ser votado. As demais alternativas estão expressamente previstas no Art. 41 da LEP.",
    "id": "lep_52"
  },
  {
    "disciplina": "lep",
    "topico": "Regime Disciplinar Diferenciado (Art. 52)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre o Regime Disciplinar Diferenciado (RDD), previsto no Art. 52 da LEP, assinale a alternativa INCORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A duração máxima do RDD é de até 2 anos, sem prejuízo de repetição da sanção por nova falta grave da mesma espécie.",
        "comentario": "Esta afirmação está correta: a duração máxima do RDD é de até 2 anos, sem prejuízo de repetição por nova falta grave de mesma espécie (Art. 52, I), não sendo a alternativa incorreta buscada."
      },
      {
        "letra": "B",
        "texto": "O preso em RDD terá direito a visita SEMANAL de 2 pessoas, sem contar as crianças, com duração de 2 horas."
      },
      {
        "letra": "C",
        "texto": "O RDD pode ser aplicado ao preso provisório ou ao condenado por crime doloso, quando apresentar alto risco para a ordem e segurança.",
        "comentario": "Esta afirmação está correta: o RDD pode ser aplicado ao preso provisório ou ao condenado, nacional ou estrangeiro, que apresente alto risco para a ordem e segurança (Art. 52, §1º), não sendo a alternativa incorreta."
      },
      {
        "letra": "D",
        "texto": "No RDD, o preso fica recolhido em cela individual, com saída para banho de sol por no mínimo 2 horas diárias.",
        "comentario": "Esta afirmação está correta: no RDD o preso fica em cela individual, com direito a banho de sol de no mínimo 2 horas diárias (Art. 52, III e IV), não sendo a alternativa incorreta."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 52, §1º da LEP",
    "justificativa": "O Art. 52, §1º, III da LEP (redação da Lei 13.964/2019, Pacote Anticrime) prevê visitas QUINZENAIS (a cada 15 dias), e não semanais, de 2 pessoas por vez, com duração de 2 horas. A troca de 'quinzenal' por 'semanal' é a pegadinha clássica dessa questão — as demais alternativas (A, C e D) estão corretas conforme o Art. 52.",
    "id": "lep_53"
  },
  {
    "disciplina": "lep",
    "topico": "Trabalho do Preso (Art. 28-37)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme a LEP, sobre o trabalho do condenado, é correto afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O trabalho do preso é de caráter obrigatório e não pode ser remunerado por ser parte da pena.",
        "comentario": "O trabalho é obrigatório, mas é sim remunerado, não podendo a remuneração ser inferior a 3/4 do salário mínimo (Art. 29)."
      },
      {
        "letra": "B",
        "texto": "A jornada de trabalho não será inferior a 6 nem superior a 8 horas diárias, com descanso nos domingos e feriados.",
        "comentario": "Esta descrição da jornada está correta em si (Art. 33), mas a alternativa mais completa, que reúne corretamente obrigatoriedade e remuneração mínima do trabalho, é a alternativa D."
      },
      {
        "letra": "C",
        "texto": "A remuneração do trabalho não pode ser inferior a 1 salário mínimo, nos termos da CLT.",
        "comentario": "A remuneração mínima é de 3/4 do salário mínimo (não o mínimo integral) e o trabalho do preso não se submete à CLT (Art. 28, §2º)."
      },
      {
        "letra": "D",
        "texto": "O trabalho do preso é obrigatório e será remunerado mediante prévia tabela, não podendo ser inferior a 3/4 do salário mínimo."
      }
    ],
    "gabarito": "D",
    "artigo": "Art. 28 e 29 da LEP",
    "justificativa": "O Art. 28 da LEP diz que o trabalho do condenado é obrigatório (dever social e condição de dignidade). O Art. 29 determina que a remuneração será fixada mediante prévia tabela, não podendo ser inferior a 3/4 do salário mínimo.",
    "id": "lep_54"
  },
  {
    "disciplina": "lep",
    "topico": "Progressão de Regime (Art. 112)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Após a Lei 13.964/2019 (Pacote Anticrime), sobre os requisitos para progressão de regime na LEP, o condenado por crime HEDIONDO com resultado morte, primário, precisa cumprir:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "40% da pena para progressão ao regime semiaberto.",
        "comentario": "Inferior ao percentual exigido (50%) para o condenado primário em crime hediondo com resultado morte."
      },
      {
        "letra": "B",
        "texto": "50% da pena para progressão ao regime semiaberto."
      },
      {
        "letra": "C",
        "texto": "60% da pena para progressão ao regime semiaberto.",
        "comentario": "Esse percentual refere-se ao reincidente em crime hediondo ou equiparado sem resultado morte (Art. 112, VII), hipótese diversa da do primário com resultado morte."
      },
      {
        "letra": "D",
        "texto": "2/3 da pena para progressão ao regime semiaberto.",
        "comentario": "Não corresponde a nenhuma fração prevista no Art. 112 para essa hipótese; o percentual correto é de 50%, e não de 2/3."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 112, VI, \"a\" da LEP",
    "justificativa": "O Art. 112, VI, \"a\", da LEP (com redação dada pela Lei 13.964/2019) exige o cumprimento de 50% da pena para o condenado por crime hediondo ou equiparado com resultado morte, se for primário. O percentual de 60% (art. 112, VII) refere-se ao reincidente em crime hediondo ou equiparado, sem exigência de resultado morte.",
    "id": "lep_55"
  },
  {
    "id": "lep_56",
    "disciplina": "lep",
    "topico": "Faltas Disciplinares (Art. 49-60)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos da LEP, o cometimento de falta grave pelo apenado interrompe o prazo para a aquisição de qual benefício?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Apenas para o livramento condicional.",
        "comentario": "Ao contrário, a Súmula 441/STJ estabelece que a falta grave NÃO interrompe o prazo para o livramento condicional."
      },
      {
        "letra": "B",
        "texto": "Apenas para a progressão de regime de cumprimento de pena."
      },
      {
        "letra": "C",
        "texto": "Para a progressão de regime e para o livramento condicional.",
        "comentario": "A falta grave interrompe apenas o prazo para progressão (Súmula 534/STJ); não interrompe o prazo para livramento condicional (Súmula 441/STJ)."
      },
      {
        "letra": "D",
        "texto": "Para a progressão de regime, indulto e saída temporária.",
        "comentario": "A falta grave interrompe apenas a progressão de regime; a Súmula 535/STJ afasta o efeito sobre o indulto, e não há previsão de interrupção quanto à saída temporária como benefício autônomo."
      }
    ],
    "gabarito": "B",
    "artigo": "Súmulas 441 e 534 do STJ",
    "justificativa": "A falta grave interrompe apenas o prazo para progressão de regime de pena (Súmula 534/STJ). Não interrompe para livramento condicional (Súmula 441/STJ) nem para indulto (Súmula 535/STJ)."
  },
  {
    "id": "lep_57",
    "disciplina": "lep",
    "topico": "Remição de Pena (Art. 126-130)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Considere que um detento em regime fechado trabalhe por 9 dias e realize 24 horas de estudos teóricos. Conforme as regras da remição da pena na LEP, o detento terá direito a remir quantos dias de sua pena?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "3 dias pelo trabalho e 2 dias pelo estudo, totalizando 5 dias."
      },
      {
        "letra": "B",
        "texto": "3 dias pelo trabalho e 1 dia pelo estudo, totalizando 4 dias.",
        "comentario": "O cálculo do estudo está incorreto: 24 horas de frequência escolar equivalem a 2 dias remidos (24/12), e não a 1 dia."
      },
      {
        "letra": "C",
        "texto": "2 dias pelo trabalho e 2 dias pelo estudo, totalizando 4 dias.",
        "comentario": "O cálculo do trabalho está incorreto: 9 dias de trabalho equivalem a 3 dias remidos (9/3), e não a 2 dias."
      },
      {
        "letra": "D",
        "texto": "3 dias pelo trabalho e 3 dias pelo estudo, totalizando 6 dias.",
        "comentario": "O cálculo do estudo está incorreto: 24 horas de frequência escolar correspondem a 2 dias remidos (24/12), e não a 3 dias."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 126, § 1º, I e II da LEP",
    "justificativa": "Trabalho: 1 dia remido a cada 3 dias de trabalho (9 / 3 = 3 dias). Estudo: 1 dia remido a cada 12 horas de frequência escolar (24 / 12 = 2 dias). Total remido = 3 + 2 = 5 dias."
  },
{
  "id": "lep_58",
  "disciplina": "lep",
  "topico": "Órgãos da Execução Penal (Art. 61-81)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "São órgãos da execução penal, de acordo com o art. 61 da LEP:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "O Conselho Nacional de Política Criminal e Penitenciária, o Juízo da Execução, o Ministério Público, o Conselho Penitenciário, os Departamentos Penitenciários, o Patronato, o Conselho da Comunidade e a Defensoria Pública."
    },
    {
      "letra": "B",
      "texto": "Apenas o Juízo da Execução, o Ministério Público e o Conselho Penitenciário.",
      "comentario": "A lista é incompleta; o Art. 61 da LEP inclui também o CNPCP, os Departamentos Penitenciários, o Patronato, o Conselho da Comunidade e a Defensoria Pública."
    },
    {
      "letra": "C",
      "texto": "O Conselho Nacional de Política Criminal e Penitenciária, o Ministério Público, a Defensoria Pública e a Polícia Penal.",
      "comentario": "A Polícia Penal não consta no rol taxativo do Art. 61 da LEP como órgão da execução penal."
    },
    {
      "letra": "D",
      "texto": "O Juízo da Execução, os Departamentos Penitenciários, o Patronato e a Polícia Penal.",
      "comentario": "A Polícia Penal não integra o rol do Art. 61 da LEP; além disso, a lista omite outros órgãos como o CNPCP, o Ministério Público e a Defensoria Pública."
    }
  ],
  "gabarito": "A",
  "artigo": "Art. 61 da LEP",
  "justificativa": "O art. 61 da LEP lista os órgãos da execução penal: CNPCP, Juízo da Execução, MP, Conselho Penitenciário, Departamentos Penitenciários, Patronato, Conselho da Comunidade e Defensoria Pública."
},
{
  "id": "lep_59",
  "disciplina": "lep",
  "topico": "Trabalho do Preso (Art. 28-37)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Acerca do trabalho do preso na execução penal, assinale a alternativa CORRETA:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "O trabalho do preso é regido pela CLT, com todos os seus direitos trabalhistas assegurados.",
      "comentario": "O Art. 28, §2º, da LEP exclui expressamente a aplicação da CLT ao trabalho do preso."
    },
    {
      "letra": "B",
      "texto": "O trabalho do preso é obrigatório e sua remuneração não pode ser inferior a 3/4 do salário mínimo.",
      "comentario": "Esta afirmação está correta, mas incompleta: falta o requisito da jornada de 6 a 8 horas diárias (Art. 33), presente de forma completa na alternativa C."
    },
    {
      "letra": "C",
      "texto": "O trabalho do preso é obrigatório e sua remuneração não pode ser inferior a 3/4 do salário mínimo, com jornada de 6 a 8 horas diárias."
    },
    {
      "letra": "D",
      "texto": "O trabalho do preso não pode ser executado em favor de empresas privadas.",
      "comentario": "A LEP admite o trabalho externo do preso, inclusive em parceria com entidades públicas ou privadas mediante convênio (Art. 34, §1º), não havendo essa vedação."
    }
  ],
  "gabarito": "C",
  "artigo": "Arts. 28, 29 e 33 da LEP",
  "justificativa": "O trabalho do condenado é obrigatório (art. 31), a remuneração não pode ser inferior a 3/4 do salário mínimo (art. 29) e a jornada é de 6 a 8 horas diárias (art. 33). Não é regido pela CLT (art. 28, §2º)."
},
{
  "id": "lep_60",
  "disciplina": "lep",
  "topico": "Progressão de Regime (Art. 112)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "Conforme o art. 112 da LEP (com as alterações da Lei 13.964/2019 — Pacote Anticrime), qual o percentual mínimo de cumprimento da pena para progressão de regime para o condenado por crime HEDIONDO ou equiparado, com resultado morte, REINCIDENTE ESPECÍFICO?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "40% da pena.",
      "comentario": "Percentual muito inferior ao exigido do reincidente específico em crime hediondo com resultado morte (70%)."
    },
    {
      "letra": "B",
      "texto": "50% da pena.",
      "comentario": "Esse percentual é o exigido para o condenado PRIMÁRIO com resultado morte, não para o reincidente específico."
    },
    {
      "letra": "C",
      "texto": "60% da pena.",
      "comentario": "Esse percentual refere-se ao reincidente em crime hediondo/equiparado SEM resultado morte, hipótese diferente da descrita."
    },
    {
      "letra": "D",
      "texto": "70% da pena."
    }
  ],
  "gabarito": "D",
  "artigo": "Art. 112, VIII da LEP (Lei 13.964/2019)",
  "justificativa": "Após o Pacote Anticrime, o art. 112 da LEP estabelece progressão de 70% para o condenado por crime hediondo ou equiparado COM resultado morte que seja reincidente específico em crimes desta natureza. É o maior percentual previsto."
},
{
  "id": "lep_61",
  "disciplina": "lep",
  "topico": "Saída Temporária (Art. 122-125)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "A saída temporária no regime semiaberto, nos termos da LEP, é autorizada por qual autoridade?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Pelo diretor do estabelecimento penal, por delegação do juiz.",
      "comentario": "A concessão da saída temporária não pode ser delegada ao diretor; é ato jurisdicional exclusivo do juiz (Súmula 520 do STJ)."
    },
    {
      "letra": "B",
      "texto": "Pelo Conselho Penitenciário, após parecer da direção do estabelecimento.",
      "comentario": "O Conselho Penitenciário não tem competência para autorizar saída temporária, atribuição exclusiva do Juiz da Execução."
    },
    {
      "letra": "C",
      "texto": "Pelo Juiz da Execução, ouvidos o MP e a administração penitenciária."
    },
    {
      "letra": "D",
      "texto": "Pelo Ministério Público, com homologação pelo Juiz da Execução.",
      "comentario": "O MP apenas é ouvido no processo (Art. 124), não sendo ele quem concede a saída temporária, e não há esse esquema de homologação judicial de decisão do MP."
    }
  ],
  "gabarito": "C",
  "artigo": "Art. 124 da LEP",
  "justificativa": "A saída temporária é autorizada pelo Juiz da Execução (art. 124 LEP), ouvidos o MP e a administração penitenciária. A Súmula 520 do STJ estabelece que 'o benefício de saída temporária no âmbito da execução penal é ato jurisdicional insuscetível de delegação à autoridade administrativa do estabelecimento prisional' — ou seja, a competência para autorizar é exclusiva do JUIZ, não podendo ser delegada ao diretor do estabelecimento."
},
{
  "id": "lep_62",
  "disciplina": "lep",
  "topico": "Remição de Pena (Art. 126-130)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "O preso em regime fechado que praticar falta grave perderá o direito ao tempo remido. Qual a fração máxima que pode ser perdida, segundo a LEP?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Todo o tempo remido é perdido automaticamente.",
      "comentario": "Não há perda automática da totalidade; o juiz pode revogar, no máximo, até 1/3 do tempo remido, mediante decisão fundamentada (Art. 127)."
    },
    {
      "letra": "B",
      "texto": "Até 1/3 do tempo remido."
    },
    {
      "letra": "C",
      "texto": "Até 1/2 do tempo remido.",
      "comentario": "Excede a fração máxima legal, que é de até 1/3 do tempo remido."
    },
    {
      "letra": "D",
      "texto": "Até 2/3 do tempo remido.",
      "comentario": "Excede em muito a fração máxima legal, que é de até 1/3 do tempo remido."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 127 da LEP",
  "justificativa": "O art. 127 da LEP, após a Lei 12.433/2011, prevê que em virtude de falta grave, o juiz poderá revogar ATÉ 1/3 do tempo remido, observado o direito do apenado ao contraditório e à ampla defesa."
},
{
  "id": "lep_63",
  "disciplina": "lep",
  "topico": "Assistência ao Preso (Art. 10-27)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "facil",
  "enunciado": "De acordo com a LEP, a assistência ao preso e ao internado é dever do Estado, objetivando:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Prevenir o crime e orientar o retorno à convivência em sociedade."
    },
    {
      "letra": "B",
      "texto": "Garantir o cumprimento integral da pena para segurança da sociedade.",
      "comentario": "Não é essa a finalidade da assistência prevista no Art. 10; a assistência visa prevenir o crime e orientar o retorno à convivência social, e não simplesmente garantir o cumprimento da pena."
    },
    {
      "letra": "C",
      "texto": "Exclusivamente tratar das enfermidades físicas e psicológicas.",
      "comentario": "A assistência é mais ampla, abrangendo também as modalidades material, jurídica, educacional, social e religiosa (Art. 11), não se restringindo à saúde."
    },
    {
      "letra": "D",
      "texto": "A ressocialização apenas quando há autorização do Conselho Penitenciário.",
      "comentario": "A assistência é dever do Estado, prestada independentemente de autorização do Conselho Penitenciário, que não possui essa função condicionante."
    }
  ],
  "gabarito": "A",
  "artigo": "Art. 10 da LEP",
  "justificativa": "Conforme o art. 10 da LEP, a assistência ao preso e ao internado é dever do Estado, objetivando PREVENIR O CRIME E ORIENTAR O RETORNO À CONVIVÊNCIA EM SOCIEDADE."
},
{
  "id": "lep_64",
  "disciplina": "lep",
  "topico": "Classificação e Individualização (Art. 5-9)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Sobre a classificação dos condenados para individualização da execução penal, é CORRETO afirmar:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "A classificação é feita pelo Conselho Penitenciário, podendo ser delegada à direção do estabelecimento.",
      "comentario": "A classificação é atribuição da Comissão Técnica de Classificação (CTC), e não do Conselho Penitenciário."
    },
    {
      "letra": "B",
      "texto": "A Comissão Técnica de Classificação (CTC) elabora o programa individualizador da pena privativa de liberdade, sendo presidida pelo diretor do estabelecimento."
    },
    {
      "letra": "C",
      "texto": "A CTC é presidida pelo Juiz da Execução, com participação de agentes penitenciários e psicólogos.",
      "comentario": "A CTC é presidida pelo diretor do estabelecimento, e não pelo Juiz da Execução."
    },
    {
      "letra": "D",
      "texto": "A classificação se baseia exclusivamente no crime praticado e na pena aplicada, sem exames psicológicos.",
      "comentario": "A classificação envolve exame criminológico e a atuação de equipe técnica (psiquiatra, psicólogo, assistente social), não se limitando a critérios objetivos do crime e da pena."
    }
  ],
  "gabarito": "B",
  "artigo": "Arts. 5º e 7º da LEP",
  "justificativa": "A CTC (Comissão Técnica de Classificação) existe em cada estabelecimento e é presidida pelo diretor. Ela elabora o programa individualizador da pena (art. 7º LEP), composta por pelo menos dois chefes de serviço, um psiquiatra, um psicólogo e um assistente social."
},
{
  "id": "lep_65",
  "disciplina": "lep",
  "topico": "Direitos do Preso (Art. 40-43)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Nos termos do art. 41 da LEP, são direitos do preso, EXCETO:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Alimentação suficiente e vestuário.",
      "comentario": "Alimentação suficiente e vestuário estão previstos no Art. 41, I, da LEP, não sendo a alternativa buscada."
    },
    {
      "letra": "B",
      "texto": "Atribuição de trabalho e sua remuneração.",
      "comentario": "A atribuição de trabalho e sua remuneração constam do Art. 41, II, da LEP como direito do preso, não sendo a resposta correta."
    },
    {
      "letra": "C",
      "texto": "Assistência jurídica, médica e espiritual.",
      "comentario": "A assistência jurídica, médica e espiritual está prevista no Art. 41 c/c Arts. 10 e 11 da LEP, não sendo a alternativa procurada."
    },
    {
      "letra": "D",
      "texto": "Direito ao voto nas eleições municipais para cargos executivos."
    }
  ],
  "gabarito": "D",
  "artigo": "Art. 41 da LEP",
  "justificativa": "O art. 41 da LEP lista os direitos do preso. O VOTO não é citado como direito na LEP para presos (condenados com trânsito em julgado têm direitos políticos suspensos — art. 15, III CF). Os demais itens (A, B, C) estão expressamente previstos no art. 41."
},
{
  "id": "lep_66",
  "disciplina": "lep",
  "topico": "Regime Disciplinar Diferenciado — RDD",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "Conforme a LEP (com as alterações do Pacote Anticrime — Lei 13.964/2019), qual o prazo máximo do Regime Disciplinar Diferenciado (RDD)?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "360 dias, renovável uma vez.",
      "comentario": "Essa era a regra anterior ao Pacote Anticrime; hoje o prazo máximo do RDD é de 2 anos."
    },
    {
      "letra": "B",
      "texto": "2 anos, sem renovação possível.",
      "comentario": "A LEP admite repetição da sanção em caso de nova falta grave de mesma espécie, não havendo vedação absoluta à renovação."
    },
    {
      "letra": "C",
      "texto": "2 anos, renovável por novos fatos."
    },
    {
      "letra": "D",
      "texto": "1 ano, prorrogável até 1/6 da pena.",
      "comentario": "Não corresponde à regra legal, que fixa prazo máximo de 2 anos, sem relação com fração da pena total."
    }
  ],
  "gabarito": "C",
  "artigo": "Art. 52, §1º da LEP (Lei 13.964/2019)",
  "justificativa": "Após o Pacote Anticrime, o art. 52, §1º, da LEP estabelece duração máxima de 2 anos (antes era 360 dias) para o RDD, sem prejuízo de repetição da sanção por nova falta grave de mesma espécie."
},
{
  "id": "lep_67",
  "disciplina": "lep",
  "topico": "Patronato e Conselho da Comunidade",
  "peso": 1,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Qual é a finalidade do Patronato, órgão da execução penal, conforme a LEP?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Fiscalizar os estabelecimentos prisionais e elaborar relatórios ao juiz.",
      "comentario": "Essa é atribuição do Conselho da Comunidade (Art. 81-A), e não do Patronato."
    },
    {
      "letra": "B",
      "texto": "Prestar assistência aos albergados e aos egressos do sistema prisional."
    },
    {
      "letra": "C",
      "texto": "Assessorar o Ministério Público no acompanhamento das condições do livramento condicional.",
      "comentario": "O acompanhamento das condições do livramento condicional é atribuição própria do Patronato (Art. 79), e não uma assessoria ao MP; sua finalidade central (Art. 78) é assistir albergados e egressos."
    },
    {
      "letra": "D",
      "texto": "Administrar os estabelecimentos penais federais.",
      "comentario": "Não é função do Patronato administrar unidades prisionais, sejam estaduais ou federais."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 78 da LEP",
  "justificativa": "Conforme o art. 78 da LEP, o Patronato tem por finalidade PRESTAR ASSISTÊNCIA AOS ALBERGADOS e aos egressos do sistema penitenciário."
},
{
  "id": "lep_68",
  "disciplina": "lep",
  "topico": "Monitoração Eletrônica (Art. 146-B a 146-D)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "De acordo com a LEP, a monitoração eletrônica do condenado pode ser determinada pelo Juiz da Execução em quais hipóteses?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Apenas durante o livramento condicional.",
      "comentario": "A lei também autoriza a monitoração na prisão domiciliar e na saída temporária do regime semiaberto, não apenas no livramento condicional."
    },
    {
      "letra": "B",
      "texto": "Na prisão domiciliar e como condição da saída temporária no regime semiaberto."
    },
    {
      "letra": "C",
      "texto": "Em qualquer regime, inclusive o fechado, como medida complementar.",
      "comentario": "A monitoração eletrônica não se aplica genericamente a todos os regimes, sobretudo não ao fechado; está restrita às hipóteses taxativas do art. 146-B."
    },
    {
      "letra": "D",
      "texto": "Somente no regime aberto e no livramento condicional.",
      "comentario": "As hipóteses legais envolvem a prisão domiciliar e a saída temporária do regime SEMIABERTO, não o regime aberto de forma genérica nem o livramento condicional isoladamente."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 146-B, I e II da LEP",
  "justificativa": "O art. 146-B da LEP autoriza a monitoração eletrônica no cumprimento de pena em regime aberto (saída temporária do semiaberto — inciso II) e na prisão domiciliar (inciso I). Não se aplica genericamente a todos os regimes."
},
{
  "id": "lep_69",
  "disciplina": "lep",
  "topico": "Execução das Penas Restritivas de Direitos",
  "peso": 1,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Sobre a conversão da pena restritiva de direitos em privativa de liberdade, assinale a alternativa CORRETA:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "A conversão é automática, sem necessidade de oitiva do condenado.",
      "comentario": "A conversão exige prévia oitiva do condenado, não sendo automática nem dispensando o contraditório."
    },
    {
      "letra": "B",
      "texto": "O tempo de restrição cumprido é integralmente abatido da pena privativa de liberdade a cumprir."
    },
    {
      "letra": "C",
      "texto": "O tempo já cumprido da pena restritiva não é descontado da pena privativa.",
      "comentario": "É o contrário: o art. 181, §1º determina expressamente que o tempo de restrição de direitos já cumprido seja abatido do total da pena privativa a cumprir."
    },
    {
      "letra": "D",
      "texto": "A conversão não é possível para penas de prestação de serviço à comunidade.",
      "comentario": "A conversão é sim cabível para a prestação de serviços à comunidade, em caso de descumprimento injustificado da pena restritiva."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 181, §1º da LEP",
  "justificativa": "Conforme o art. 181, §1º da LEP, na conversão da pena restritiva em privativa de liberdade, o tempo de restrição de direitos já cumprido é abatido do total da pena privativa de liberdade a cumprir."
},
{
  "id": "lep_70",
  "disciplina": "lep",
  "topico": "Estabelecimentos Penais (Art. 82-104)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "No que diz respeito ao regime semiaberto, qual é o estabelecimento penal correto para cumprimento da pena?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Penitenciária de segurança máxima ou média.",
      "comentario": "A penitenciária é o estabelecimento próprio do regime FECHADO, e não do semiaberto."
    },
    {
      "letra": "B",
      "texto": "Casa do Albergado.",
      "comentario": "A Casa do Albergado destina-se ao cumprimento do regime ABERTO, e não do semiaberto."
    },
    {
      "letra": "C",
      "texto": "Colônia Agrícola, Industrial ou similar."
    },
    {
      "letra": "D",
      "texto": "Centro de Observação Criminológica.",
      "comentario": "O Centro de Observação Criminológica destina-se à realização de exames criminológicos, não ao cumprimento de pena em regime semiaberto."
    }
  ],
  "gabarito": "C",
  "artigo": "Art. 91 da LEP",
  "justificativa": "O art. 91 da LEP determina que o regime semiaberto é cumprido em COLÔNIA AGRÍCOLA, INDUSTRIAL OU SIMILAR. O regime fechado é cumprido em penitenciária, e o regime aberto em Casa do Albergado."
},
{
  "id": "lep_71",
  "disciplina": "lep",
  "topico": "Regressão de Regime",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Conforme a LEP, ocorrerá a REGRESSÃO de regime quando o condenado, EXCETO:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Praticar fato definido como crime doloso ou atitude de alta indisciplina.",
      "comentario": "Esta é uma causa legítima de regressão prevista no art. 118, I, da LEP — sendo uma hipótese real de regressão, não é a exceção buscada pela questão."
    },
    {
      "letra": "B",
      "texto": "Sofrer condenação por crime anterior à execução da pena, tornando a soma incabível para o regime atual.",
      "comentario": "Esta também é causa legítima de regressão prevista no art. 118, II, da LEP — sendo uma hipótese real de regressão, não é a exceção buscada pela questão."
    },
    {
      "letra": "C",
      "texto": "Obtiver livramento condicional e não comparecer ao Patronato mensalmente."
    },
    {
      "letra": "D",
      "texto": "Frustrar os fins da execução ou não pagar multa cumulativamente imposta.",
      "comentario": "Esta também é causa legítima de regressão, prevista no art. 118, §2º, da LEP — sendo uma hipótese real de regressão, não é a exceção buscada pela questão."
    }
  ],
  "gabarito": "C",
  "artigo": "Art. 118 da LEP",
  "justificativa": "O art. 118 da LEP prevê regressão por: prática de fato criminoso doloso ou falta grave (I); condenação por crime anterior cuja soma de penas exija regime mais severo (II); e frustração dos fins da execução ou não pagamento de multa (art. 118, §2º). O livramento condicional tem suas próprias regras de revogação (art. 145 LEP)."
},
{
  "id": "lep_72",
  "disciplina": "lep",
  "topico": "Extinção da Punibilidade",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Conforme a LEP, quem declara extinta a punibilidade?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "O Ministério Público, por requerimento ao Juiz da Execução.",
      "comentario": "O MP pode requerer, mas quem DECLARA extinta a punibilidade é o Juiz da Execução, e não o próprio Ministério Público."
    },
    {
      "letra": "B",
      "texto": "O Juiz da Execução, de ofício ou a requerimento do interessado, ouvido o MP."
    },
    {
      "letra": "C",
      "texto": "O Conselho Penitenciário, mediante aprovação do Juiz.",
      "comentario": "O Conselho Penitenciário não tem essa atribuição; compete exclusivamente ao Juiz da Execução declarar extinta a punibilidade."
    },
    {
      "letra": "D",
      "texto": "A Defensoria Pública, mediante requerimento fundamentado.",
      "comentario": "A Defensoria pode requerer em nome do interessado, mas quem declara extinta a punibilidade é sempre o Juiz da Execução, não a Defensoria."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 66, II e Art. 172 da LEP",
  "justificativa": "Conforme o art. 66, II, c/c art. 172 da LEP, compete ao Juiz da Execução declarar extinta a punibilidade, de ofício ou a requerimento do interessado, ouvido previamente o MP."
},
{
  "id": "lep_73",
  "disciplina": "lep",
  "topico": "Patronato (Art. 78 da LEP)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "O Patronato, órgão da execução penal previsto no art. 78 da LEP, destina-se a prestar assistência a quais categorias de pessoas?",
  "alternativas": [
    { "letra": "A", "texto": "Aos albergados (regime aberto) e aos egressos do sistema prisional." },
    { "letra": "B", "texto": "Exclusivamente aos presos em regime fechado.", "comentario": "O Patronato atende aos albergados (regime aberto) e egressos, e não aos presos em regime fechado." },
    { "letra": "C", "texto": "Somente aos familiares de servidores do sistema penitenciário.", "comentario": "Essa não é a finalidade do Patronato, que assiste albergados e egressos do sistema prisional, não familiares de servidores." },
    { "letra": "D", "texto": "Apenas às vítimas de crimes, nunca aos condenados ou egressos.", "comentario": "É o oposto: o Patronato existe justamente para assistir condenados em regime aberto (albergados) e egressos, não vítimas de crimes." }
  ],
  "gabarito": "A",
  "artigo": "Art. 78 da LEP",
  "justificativa": "O Patronato, público ou particular, destina-se a prestar assistência aos albergados (condenados em regime aberto) e aos egressos (liberados definitivamente, até um ano após a saída do sistema, ou liberados condicionais durante o período de prova), com foco na reintegração social."
},
{
  "id": "lep_74",
  "disciplina": "lep",
  "topico": "Patronato - Atribuições (Art. 79 da LEP)",
  "peso": 2,
  "dificuldade": "dificil",
  "enunciado": "Segundo o art. 79 da LEP, incumbe ao Patronato:",
  "alternativas": [
    { "letra": "A", "texto": "Orientar os condenados à pena restritiva de direitos, fiscalizar o cumprimento das penas de prestação de serviços à comunidade e de limitação de fim de semana, e colaborar na fiscalização do cumprimento das condições da suspensão condicional da pena (sursis) e do livramento condicional." },
    { "letra": "B", "texto": "Substituir o Juiz da Execução na concessão de livramento condicional.", "comentario": "O Patronato não tem poder decisório sobre benefícios; apenas colabora na fiscalização das condições — a concessão do livramento condicional é atribuição exclusiva do Juiz da Execução." },
    { "letra": "C", "texto": "Administrar diretamente os estabelecimentos penais de regime fechado.", "comentario": "Essa não é função do Patronato, cuja atuação está voltada a condenados em regime aberto e penas restritivas de direitos, não à administração de unidades de regime fechado." },
    { "letra": "D", "texto": "Aplicar sanções disciplinares aos presos em regime fechado, com força vinculante.", "comentario": "O Patronato não possui função disciplinar sobre presos em regime fechado; sua atuação é de orientação e fiscalização de penas alternativas e condições de benefícios." }
  ],
  "gabarito": "A",
  "artigo": "Art. 79 da LEP",
  "justificativa": "O Patronato orienta condenados a penas restritivas de direitos, fiscaliza a prestação de serviços à comunidade e a limitação de fim de semana, e colabora na fiscalização das condições do sursis e do livramento condicional — não tem poder decisório sobre benefícios (atribuição do Juiz da Execução) nem função de administrar unidades prisionais fechadas."
}
];
