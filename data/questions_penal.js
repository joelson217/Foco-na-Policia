const QUESTIONS_PENAL = [
  {
    "id": "penal_1",
    "disciplina": "penal",
    "topico": "Prisão em Flagrante (Art. 302-310 CPP)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Segundo o Código de Processo Penal, a prisão em flagrante possui diferentes modalidades. Se o indivíduo é perseguido, logo após a prática do crime, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração, configura-se o:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Flagrante próprio ou real.",
        "comentario": "O flagrante próprio (art. 302, I e II) ocorre quando o agente está cometendo a infração ou acaba de cometê-la, hipótese distinta da perseguição narrada no enunciado, que caracteriza o flagrante impróprio (inciso III)."
      },
      {
        "letra": "B",
        "texto": "Flagrante impróprio ou quase-flagrante."
      },
      {
        "letra": "C",
        "texto": "Flagrante ficto ou presumido.",
        "comentario": "O flagrante ficto (art. 302, IV) exige que o agente seja encontrado, logo depois, com instrumentos, armas ou objetos que façam presumir ser ele o autor, e não a perseguição descrita, que configura o inciso III (impróprio)."
      },
      {
        "letra": "D",
        "texto": "Flagrante provocado.",
        "comentario": "O flagrante provocado (preparado) ocorre quando um agente provocador induz a prática do crime para prender o autor em flagrante, gerando crime impossível (Súmula 145 do STF) — situação diversa da perseguição descrita no enunciado."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 302, III do CPP",
    "justificativa": "O inciso III do art. 302 do CPP define o flagrante impróprio: quando o agente é perseguido, logo após, em situação que faça presumir ser ele o autor da infração."
  },
  {
    "id": "penal_2",
    "disciplina": "penal",
    "topico": "Excludentes de Ilicitude (Art. 23-25 CP)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "A respeito das causas excludentes de ilicitude no Código Penal Brasileiro, entende-se em legítima defesa quem:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Pratica o fato para salvar de perigo atual, que não provocou por sua vontade, direito próprio.",
        "comentario": "Essa descrição corresponde ao estado de necessidade (Art. 24 do CP), excludente diversa da legítima defesa, que pressupõe repelir agressão injusta e não apenas um perigo atual."
      },
      {
        "letra": "B",
        "texto": "Atua cumprindo uma ordem não manifestamente ilegal de superior hierárquico.",
        "comentario": "Isso descreve a obediência hierárquica (Art. 22 do CP), causa excludente de culpabilidade, e não a legítima defesa, que é excludente de ilicitude."
      },
      {
        "letra": "C",
        "texto": "Usando moderadamente dos meios necessários, repele agressão injusta, atual ou iminente, a direito seu ou de outrem."
      },
      {
        "letra": "D",
        "texto": "Comete um crime para garantir sua sobrevivência (furto famélico).",
        "comentario": "O furto famélico é hipótese associada ao estado de necessidade (Art. 24 do CP), e não à legítima defesa, pois não há agressão injusta a ser repelida."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 25 do CP",
    "justificativa": "Literalidade do Art. 25 do CP que define o instituto da Legítima Defesa: repelir agressão injusta, atual ou iminente."
  },
  {
    "id": "penal_3",
    "disciplina": "penal",
    "topico": "Inquérito Policial",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o Inquérito Policial, assinale a alternativa incorreta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "É um procedimento administrativo de caráter inquisitivo.",
        "comentario": "Esta afirmação está correta: o IP é procedimento administrativo presidido pelo Delegado, de caráter inquisitivo, sem contraditório pleno. Por ser verdadeira, não atende ao comando da questão (que pede a incorreta) — o erro está na alternativa B."
      },
      {
        "letra": "B",
        "texto": "A autoridade policial poderá mandar arquivar os autos do inquérito se não encontrar indícios de autoria."
      },
      {
        "letra": "C",
        "texto": "O ofendido, ou seu representante legal, e o indiciado poderão requerer qualquer diligência, que será realizada, ou não, a juízo da autoridade.",
        "comentario": "Esta afirmação está correta e reproduz o art. 14 do CPP: cabe à autoridade policial decidir, a seu juízo, se realiza a diligência requerida. Por ser verdadeira, não é a alternativa incorreta pedida pela questão."
      },
      {
        "letra": "D",
        "texto": "Nos crimes de ação pública, o inquérito policial será iniciado de ofício ou mediante requisição da autoridade judiciária ou do MP.",
        "comentario": "Esta afirmação está correta, nos termos do art. 5º, I, do CPP. Por ser verdadeira, não é a alternativa incorreta que a questão pede — o erro está na alternativa B."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 17 do CPP",
    "justificativa": "A autoridade policial NÃO poderá mandar arquivar autos de inquérito, conforme expressa previsão do art. 17 do CPP. O arquivamento é ato complexo que envolve o MP e o Juiz."
  },
  {
    "id": "penal_4",
    "disciplina": "penal",
    "topico": "Teoria do Crime - Culpabilidade",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "dificil",
    "enunciado": "A coação moral irresistível e a obediência hierárquica a ordem não manifestamente ilegal excluem a:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Tipicidade da conduta.",
        "comentario": "A conduta permanece típica; a coação moral irresistível e a obediência hierárquica não afetam a tipicidade, mas sim a exigibilidade de conduta diversa, elemento da culpabilidade (Art. 22 do CP)."
      },
      {
        "letra": "B",
        "texto": "Ilicitude (antijuridicidade).",
        "comentario": "O fato continua ilícito; as excludentes de ilicitude estão previstas nos Arts. 23-25 do CP (legítima defesa, estado de necessidade etc.), hipóteses diversas da coação moral e da obediência hierárquica, que atingem a culpabilidade."
      },
      {
        "letra": "C",
        "texto": "Culpabilidade (exigibilidade de conduta diversa)."
      },
      {
        "letra": "D",
        "texto": "Punibilidade do agente.",
        "comentario": "Não se trata de causa de extinção da punibilidade (rol do Art. 107 do CP), mas de excludente de culpabilidade por inexigibilidade de conduta diversa, prevista no Art. 22 do CP."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 22 do CP",
    "justificativa": "A coação MORAL irresistível e a obediência hierárquica a ordem não manifestamente ilegal são causas excludentes de culpabilidade (exigibilidade de conduta diversa)."
  },
  {
    "id": "penal_5",
    "disciplina": "penal",
    "topico": "Crimes Contra o Patrimônio",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O crime de roubo, tipificado no artigo 157 do Código Penal, difere do furto pela:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Obtenção da vantagem ilícita por meio de fraude ou ardil.",
        "comentario": "Fraude ou ardil para obter vantagem ilícita caracteriza o estelionato (Art. 171 do CP), não o roubo, que exige violência ou grave ameaça à pessoa."
      },
      {
        "letra": "B",
        "texto": "Subtração de coisa alheia móvel mediante grave ameaça ou violência a pessoa."
      },
      {
        "letra": "C",
        "texto": "Apropriação de bem móvel de que tem a posse em razão do cargo.",
        "comentario": "Essa conduta descreve o peculato-apropriação (Art. 312 do CP), crime próprio de funcionário público, e não o roubo."
      },
      {
        "letra": "D",
        "texto": "Exigência de vantagem indevida em razão da função.",
        "comentario": "Exigir vantagem indevida em razão da função caracteriza a concussão (Art. 316 do CP), crime contra a Administração Pública, distinto do roubo."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 157 do CP",
    "justificativa": "O roubo exige a subtração mediante violência ou grave ameaça (Art. 157), enquanto o furto é a subtração sem violência ou grave ameaça à pessoa (Art. 155)."
  },
  {
    "id": "penal_6",
    "disciplina": "penal",
    "topico": "Inquérito Policial",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "O Inquérito Policial, via de regra, tem a característica do sigilo. Entretanto, tal sigilo não se estende:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "À imprensa.",
        "comentario": "O sigilo do inquérito se estende à imprensa, que não tem direito de acesso aos autos; a única exceção reconhecida pela Súmula Vinculante 14 do STF é o advogado, quanto às provas já documentadas."
      },
      {
        "letra": "B",
        "texto": "Aos familiares do indiciado.",
        "comentario": "Os familiares do indiciado não têm acesso automático aos autos sigilosos; o direito de acesso é do advogado constituído, quanto às provas já documentadas (Súmula Vinculante 14 do STF)."
      },
      {
        "letra": "C",
        "texto": "Ao advogado do indiciado, em relação às provas já documentadas nos autos."
      },
      {
        "letra": "D",
        "texto": "Ao cidadão comum que queira tomar ciência dos fatos.",
        "comentario": "O cidadão comum não tem direito de acesso aos autos sigilosos do inquérito; apenas o advogado do indiciado possui esse direito, quanto aos elementos já documentados."
      }
    ],
    "gabarito": "C",
    "artigo": "Súmula Vinculante 14 STF",
    "justificativa": "É direito do defensor acessar os elementos de prova que já documentados digam respeito ao direito de defesa."
  },
  {
    "id": "penal_7",
    "disciplina": "penal",
    "topico": "Prisão Preventiva",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A prisão preventiva poderá ser decretada como garantia da ordem pública, da ordem econômica, por conveniência da instrução criminal ou para assegurar a aplicação da lei penal. Sobre a prisão preventiva, é CORRETO afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Pode ser decretada de ofício pelo juiz na fase do inquérito policial.",
        "comentario": "Desde o Pacote Anticrime (Lei 13.964/2019), o juiz não pode mais decretar a prisão preventiva de ofício na fase de inquérito policial, dependendo de requerimento do MP, do querelante, do assistente ou de representação da autoridade policial."
      },
      {
        "letra": "B",
        "texto": "É admitida nos crimes culposos.",
        "comentario": "A prisão preventiva, nos termos do Art. 313, I, do CPP, somente é admitida nos crimes DOLOSOS, e não nos culposos."
      },
      {
        "letra": "C",
        "texto": "Admite-se em crimes dolosos punidos com pena privativa de liberdade máxima superior a 4 anos."
      },
      {
        "letra": "D",
        "texto": "Possui prazo máximo de 180 dias fixado em lei.",
        "comentario": "A lei não fixa um prazo máximo absoluto de 180 dias; o que existe é o dever de revisão da necessidade da prisão a cada 90 dias (Art. 316, parágrafo único, do CPP)."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 313, I do CPP",
    "justificativa": "Art. 313: A preventiva cabe em crimes dolosos com pena máxima > 4 anos. O Juiz NÃO pode decretar de ofício no inquérito (Pacote Anticrime)."
  },
  {
    "id": "penal_8",
    "disciplina": "penal",
    "topico": "Aplicação da Lei Penal",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "O princípio pelo qual a lei penal não retroagirá, salvo para beneficiar o réu, está intimamente ligado à:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Extraterritorialidade incondicionada.",
        "comentario": "Extraterritorialidade incondicionada trata da aplicação da lei penal brasileira a crimes cometidos no exterior (Art. 7º, I, do CP), tema sem relação com a irretroatividade da lei penal mais gravosa."
      },
      {
        "letra": "B",
        "texto": "Retroatividade benéfica (Lex mitior)."
      },
      {
        "letra": "C",
        "texto": "Tipicidade conglobante.",
        "comentario": "Tipicidade conglobante é conceito da teoria do delito (Zaffaroni) relativo à antinormatividade da conduta, sem relação com a irretroatividade da lei penal mais gravosa tratada no enunciado."
      },
      {
        "letra": "D",
        "texto": "Abolitio criminis.",
        "comentario": "Abolitio criminis é a supressão total da figura criminosa por lei posterior (Art. 2º, caput, do CP), instituto distinto do princípio geral da retroatividade benéfica, que abrange qualquer novatio legis in mellius, não apenas a abolição do crime."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 5º, XL da CF e Art. 2º do CP",
    "justificativa": "É o princípio da retroatividade da lei penal mais benéfica."
  },
  {
    "id": "penal_9",
    "disciplina": "penal",
    "topico": "Crimes Contra a Adm. Pública",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O funcionário público que exige, para si ou para outrem, direta ou indiretamente, em razão da função, vantagem indevida, comete o crime de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Corrupção passiva.",
        "comentario": "A corrupção passiva (Art. 317 do CP) tem como verbos solicitar, receber ou aceitar promessa de vantagem, e não exigir, verbo que caracteriza a concussão."
      },
      {
        "letra": "B",
        "texto": "Concussão."
      },
      {
        "letra": "C",
        "texto": "Peculato.",
        "comentario": "O peculato (Art. 312 do CP) exige apropriação ou desvio de bem de que o agente já tem a posse em razão do cargo, e não a exigência de vantagem indevida descrita no enunciado."
      },
      {
        "letra": "D",
        "texto": "Prevaricação.",
        "comentario": "A prevaricação (Art. 319 do CP) consiste em retardar, deixar de praticar ou praticar ato contra a lei para satisfazer interesse ou sentimento pessoal, sem exigência de vantagem indevida, o que a diferencia da concussão."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 316 do CP",
    "justificativa": "O verbo núcleo \"EXIGIR\" caracteriza a concussão. O verbo \"SOLICITAR ou RECEBER\" caracteriza a corrupção passiva."
  },
  {
    "id": "penal_10",
    "disciplina": "penal",
    "topico": "Crimes Contra a Vida",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Caracteriza Homicídio Qualificado, tornando-o crime hediondo, o homicídio cometido:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Sob o domínio de violenta emoção.",
        "comentario": "O domínio de violenta emoção, logo em seguida a injusta provocação da vítima, é causa de diminuição de pena (homicídio privilegiado, Art. 121, §1º), e não qualificadora."
      },
      {
        "letra": "B",
        "texto": "Por motivo fútil."
      },
      {
        "letra": "C",
        "texto": "Para atender a relevante valor moral.",
        "comentario": "O relevante valor moral também é causa de diminuição de pena (homicídio privilegiado, Art. 121, §1º), e não qualificadora, ao contrário do motivo fútil ou torpe."
      },
      {
        "letra": "D",
        "texto": "Culposamente na direção de veículo automotor.",
        "comentario": "O homicídio culposo na direção de veículo automotor é tipo autônomo previsto no Código de Trânsito Brasileiro (Art. 302 do CTB), não se tratando de homicídio doloso qualificado do Art. 121, §2º do CP."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 121, § 2º, II do CP",
    "justificativa": "Motivo fútil, fútil, traição, asfixia etc, são qualificadoras (hediondo). Violenta emoção e valor moral são privilégios."
  },
  {
    "id": "penal_11",
    "disciplina": "penal",
    "topico": "Crimes Contra a Administração Pública",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O funcionário público que exige, para si ou para outrem, direta ou indiretamente, vantagem indevida, em razão da função, comete o crime de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Corrupção passiva.",
        "comentario": "A corrupção passiva (Art. 317) tem como verbos solicitar, receber ou aceitar promessa de vantagem, e não exigir, verbo que caracteriza a concussão."
      },
      {
        "letra": "B",
        "texto": "Concussão."
      },
      {
        "letra": "C",
        "texto": "Prevaricação.",
        "comentario": "A prevaricação (Art. 319) consiste em retardar, omitir ou praticar ato contra a lei para satisfazer interesse ou sentimento pessoal, sem exigência de vantagem indevida, elemento que diferencia a concussão."
      },
      {
        "letra": "D",
        "texto": "Peculato.",
        "comentario": "O peculato (Art. 312) exige a apropriação ou desvio de bem de que o funcionário já tem a posse em razão do cargo, e não a exigência de vantagem indevida narrada no enunciado."
      },
      {
        "letra": "E",
        "texto": "Corrupção ativa.",
        "comentario": "A corrupção ativa (Art. 333) é praticada por particular que oferece ou promete vantagem a funcionário público, sendo o inverso da conduta do funcionário público que exige vantagem, descrita no enunciado."
      }
    ],
    "correta": "B",
    "comentario": "Art. 316, CP: Exigir (verbo núcleo) caracteriza Concussão. A corrupção passiva (Art. 317) tem como verbos solicitar, receber ou aceitar promessa."
  },
  {
    "id": "penal_12",
    "disciplina": "penal",
    "topico": "Aplicação da Lei Penal",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado. Trata-se da adoção da teoria:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Da ubiquidade.",
        "comentario": "A teoria da ubiquidade é adotada pelo CP para o LUGAR do crime (Art. 6º), considerando tanto o local da conduta quanto o do resultado, e não para o tempo do crime, tratado no enunciado."
      },
      {
        "letra": "B",
        "texto": "Do resultado.",
        "comentario": "A teoria do resultado consideraria apenas o momento em que o resultado ocorre, mas o Art. 4º do CP adota a teoria da atividade, considerando o momento da ação ou omissão, ainda que o resultado seja outro."
      },
      {
        "letra": "C",
        "texto": "Da Atividade."
      },
      {
        "letra": "D",
        "texto": "Mista.",
        "comentario": "Não há teoria \"mista\" adotada pelo Art. 4º do CP para o tempo do crime; o Código adotou de forma pura a teoria da atividade."
      },
      {
        "letra": "E",
        "texto": "Da equivalência dos antecedentes.",
        "comentario": "A teoria da equivalência dos antecedentes (conditio sine qua non) refere-se ao nexo causal (Art. 13 do CP), tema distinto do tempo do crime tratado no enunciado."
      }
    ],
    "correta": "C",
    "comentario": "Art. 4º, CP (Tempo do crime): Teoria da Atividade (LUTA: Lugar = Ubiquidade; Tempo = Atividade)."
  },
  {
    "id": "penal_13",
    "disciplina": "penal",
    "topico": "Inquérito Policial",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Segundo o Código de Processo Penal, o inquérito policial nos crimes de ação penal pública:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Poderá ser arquivado pelo Delegado de Polícia, se não houver provas.",
        "comentario": "A autoridade policial NÃO pode mandar arquivar os autos de inquérito (Art. 17 do CPP); o arquivamento é ato complexo que depende de manifestação do Ministério Público e decisão do juiz."
      },
      {
        "letra": "B",
        "texto": "É inquisitivo, logo não comporta a garantia do contraditório e da ampla defesa."
      },
      {
        "letra": "C",
        "texto": "Não pode ser iniciado de ofício pelo Delegado.",
        "comentario": "Nos crimes de ação penal pública incondicionada, o inquérito pode ser iniciado de ofício pela autoridade policial (Art. 5º, I, do CPP), sem necessidade de provocação."
      },
      {
        "letra": "D",
        "texto": "Poderá ser trancado a qualquer tempo pelo Ministério Público, independentemente de juiz.",
        "comentario": "O trancamento do inquérito por ausência de justa causa é medida jurisdicional, normalmente obtida via habeas corpus, e não ato que o Ministério Público possa determinar sozinho, sem intervenção do Judiciário."
      },
      {
        "letra": "E",
        "texto": "É peça indispensável para o oferecimento da denúncia.",
        "comentario": "O inquérito policial é peça meramente informativa e DISPENSÁVEL; o titular da ação penal pode oferecer denúncia com base em outros elementos de informação, sem necessidade de inquérito formal."
      }
    ],
    "correta": "B",
    "comentario": "O IP é inquisitivo, sem ampla defesa e contraditório na sua fase investigatória, servindo de base para a futura ação. A autoridade policial não pode mandar arquivar os autos (Art. 17). O IP é dispensável."
  },
  {
    "id": "penal_14",
    "disciplina": "penal",
    "topico": "Prisão Preventiva",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Com o Pacote Anticrime, o órgão emissor da decisão que decretar a prisão preventiva deverá revisar sua necessidade a cada:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "30 dias.",
        "comentario": "O prazo de revisão fixado pelo Art. 316, parágrafo único, do CPP é de 90 dias, não de 30 dias."
      },
      {
        "letra": "B",
        "texto": "60 dias.",
        "comentario": "O prazo de revisão fixado pelo Art. 316, parágrafo único, do CPP é de 90 dias, não de 60 dias."
      },
      {
        "letra": "C",
        "texto": "90 dias."
      },
      {
        "letra": "D",
        "texto": "120 dias.",
        "comentario": "O prazo de revisão fixado pelo Art. 316, parágrafo único, do CPP é de 90 dias, não de 120 dias."
      },
      {
        "letra": "E",
        "texto": "180 dias.",
        "comentario": "O prazo de revisão fixado pelo Art. 316, parágrafo único, do CPP é de 90 dias, não de 180 dias."
      }
    ],
    "correta": "C",
    "comentario": "Art. 316, § único, CPP: Deverá revisar a necessidade da manutenção da prisão a cada 90 dias, mediante decisão fundamentada."
  },
  {
    "id": "penal_15",
    "disciplina": "penal",
    "topico": "Legítima Defesa",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "O agente que repela agressão injusta, atual ou iminente, a direito seu ou de outrem, usando moderadamente dos meios necessários, atua amparado pela:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Estado de Necessidade.",
        "comentario": "O estado de necessidade (Art. 24 do CP) consiste em sacrificar um bem jurídico para salvar de perigo atual direito próprio ou alheio, situação diversa de repelir uma agressão injusta, que caracteriza a legítima defesa."
      },
      {
        "letra": "B",
        "texto": "Estrito cumprimento do dever legal.",
        "comentario": "O estrito cumprimento do dever legal ampara o agente que atua no exercício de função pública imposta por lei, hipótese distinta de repelir agressão injusta a direito próprio ou de outrem, própria da legítima defesa."
      },
      {
        "letra": "C",
        "texto": "Legítima Defesa."
      },
      {
        "letra": "D",
        "texto": "Exercício regular de direito.",
        "comentario": "O exercício regular de direito ampara condutas autorizadas pelo ordenamento jurídico em geral, e não especificamente a repulsa a agressão injusta, atual ou iminente, que é o núcleo conceitual da legítima defesa."
      },
      {
        "letra": "E",
        "texto": "Causas excludentes de culpabilidade.",
        "comentario": "A legítima defesa é causa excludente de ilicitude (Art. 23 do CP), e não de culpabilidade; esta última abrange institutos como a coação moral irresistível e a inimputabilidade."
      }
    ],
    "correta": "C",
    "comentario": "Art. 25 do CP: Trata-se do conceito exato de Legítima Defesa."
  },
  {
    "id": "penal_16",
    "disciplina": "penal",
    "topico": "Homicídio",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Qual das alternativas abaixo NÃO constitui qualificadora do crime de homicídio (Art. 121, § 2º)?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Motivo fútil.",
        "comentario": "O motivo fútil é, de fato, qualificadora do homicídio (Art. 121, §2º, II, do CP). Como é efetivamente qualificadora, esta alternativa não atende ao comando da questão, que pede a que NÃO qualifica."
      },
      {
        "letra": "B",
        "texto": "Violenta emoção, logo em seguida a injusta provocação da vítima."
      },
      {
        "letra": "C",
        "texto": "Emprego de fogo, asfixia ou veneno.",
        "comentario": "O emprego de fogo, asfixia ou veneno é, de fato, qualificadora do homicídio por meio cruel ou de difícil defesa (Art. 121, §2º, III, do CP), não sendo a alternativa buscada pela questão."
      },
      {
        "letra": "D",
        "texto": "Para assegurar a ocultação de outro crime.",
        "comentario": "Assegurar a ocultação de outro crime é, de fato, qualificadora do homicídio (Art. 121, §2º, V, do CP), não sendo a alternativa buscada pela questão."
      },
      {
        "letra": "E",
        "texto": "Mediante paga ou promessa de recompensa (motivo torpe).",
        "comentario": "A paga ou promessa de recompensa (motivo torpe) é, de fato, qualificadora do homicídio (Art. 121, §2º, I, do CP), não sendo a alternativa buscada pela questão."
      }
    ],
    "correta": "B",
    "comentario": "A alternativa B traz uma hipótese de Homicídio PRIVILEGIADO (causa de diminuição de pena, Art. 121, § 1º) e não de Homicídio Qualificado. Observação: o feminicídio deixou de ser qualificadora do Art. 121, § 2º (revogado o inciso VI) desde a Lei 14.994/2024, passando a ser crime autônomo do Art. 121-A do CP — por isso não consta mais entre as alternativas desta questão."
  },
  {
    "id": "penal_17",
    "disciplina": "penal",
    "topico": "Prisão em Flagrante",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Considera-se em flagrante delito aquele que, EXCETO:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Está cometendo a infração penal.",
        "comentario": "Esta é, de fato, hipótese de flagrante próprio (Art. 302, I, do CPP), não sendo a exceção buscada pela questão."
      },
      {
        "letra": "B",
        "texto": "Acaba de cometê-la.",
        "comentario": "Esta é, de fato, hipótese de flagrante próprio (Art. 302, II, do CPP), não sendo a exceção buscada pela questão."
      },
      {
        "letra": "C",
        "texto": "É perseguido, logo após, pela autoridade ou por qualquer pessoa, em situação que faça presumir ser autor da infração.",
        "comentario": "Esta é, de fato, hipótese de flagrante impróprio (Art. 302, III, do CPP), não sendo a exceção buscada pela questão."
      },
      {
        "letra": "D",
        "texto": "É encontrado, logo depois, com instrumentos que façam presumir ser ele o autor da infração.",
        "comentario": "Esta é, de fato, hipótese de flagrante ficto/presumido (Art. 302, IV, do CPP), não sendo a exceção buscada pela questão."
      },
      {
        "letra": "E",
        "texto": "Se apresenta voluntariamente à autoridade policial três dias após o crime."
      }
    ],
    "correta": "E",
    "comentario": "Art. 302 do CPP. A apresentação espontânea não caracteriza flagrante delito, impedindo a prisão em flagrante neste momento (mas cabendo a preventiva, se presentes os requisitos)."
  },
  {
    "id": "penal_18",
    "disciplina": "penal",
    "topico": "Ação Penal",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O crime de lesão corporal leve, praticado no âmbito da violência doméstica e familiar contra a mulher (Lei Maria da Penha), enseja Ação Penal:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Pública incondicionada."
      },
      {
        "letra": "B",
        "texto": "Pública condicionada à representação.",
        "comentario": "A Súmula 542 do STJ afastou a exigência de representação: a ação penal por lesão corporal, mesmo leve, decorrente de violência doméstica contra a mulher, é pública INCONDICIONADA."
      },
      {
        "letra": "C",
        "texto": "Privada subsidiária da pública.",
        "comentario": "Não se trata de ação privada subsidiária (cabível apenas em caso de inércia do MP em ação pública); a Súmula 542 do STJ define a ação como pública incondicionada, de titularidade do Ministério Público desde o início."
      },
      {
        "letra": "D",
        "texto": "Privada.",
        "comentario": "A ação não é privada (de iniciativa da vítima); conforme a Súmula 542 do STJ, é pública incondicionada, de titularidade do Ministério Público."
      },
      {
        "letra": "E",
        "texto": "Pública condicionada à requisição do Ministro da Justiça.",
        "comentario": "A condição de requisição do Ministro da Justiça aplica-se a hipóteses específicas do CP (como crimes contra chefe de governo estrangeiro), não ao caso de lesão corporal em violência doméstica, que é pública incondicionada (Súmula 542 do STJ)."
      }
    ],
    "correta": "A",
    "comentario": "Súmula 542 do STJ: A ação penal relativa ao crime de lesão corporal resultante de violência doméstica contra a mulher é pública incondicionada."
  },
  {
    "id": "penal_19",
    "disciplina": "penal",
    "topico": "Peculato",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O funcionário público que se apropria de dinheiro público de que tem a posse em razão do cargo, comete o crime de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Peculato-furto.",
        "comentario": "O peculato-furto (Art. 312, §1º, do CP) ocorre quando o funcionário subtrai o bem valendo-se da facilidade que a função proporciona, mas SEM ter a posse anterior dele — diferente da apropriação de bem que já está em sua posse, descrita no enunciado."
      },
      {
        "letra": "B",
        "texto": "Corrupção passiva.",
        "comentario": "A corrupção passiva (Art. 317 do CP) envolve solicitar, receber ou aceitar promessa de vantagem indevida, conduta distinta de apropriar-se de dinheiro público que já está sob a posse do funcionário em razão do cargo."
      },
      {
        "letra": "D",
        "texto": "Emprego irregular de verbas.",
        "comentario": "O emprego irregular de verbas públicas (Art. 315 do CP) consiste em dar às verbas ou rendas públicas aplicação diversa da estabelecida em lei, sem apropriação em proveito próprio, diferente da conduta descrita."
      },
      {
        "letra": "E",
        "texto": "Prevaricação.",
        "comentario": "A prevaricação (Art. 319 do CP) consiste em retardar, omitir ou praticar ato contra a lei por interesse ou sentimento pessoal, sem envolver apropriação de dinheiro ou bem público."
      }
    ],
    "correta": "C",
    "comentario": "Art. 312, CP: \"Apropriar-se o funcionário público de dinheiro... de que tem a posse em razão do cargo\". Configura Peculato-apropriação."
  },
  {
    "id": "penal_20",
    "disciplina": "penal",
    "topico": "Princípios do Direito Penal",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Não há crime sem lei anterior que o defina. Não há pena sem prévia cominação legal. Este enunciado refere-se ao princípio da:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Insignificância.",
        "comentario": "O princípio da insignificância (bagatela) exclui a tipicidade material de condutas de lesão irrelevante ao bem jurídico, tema distinto da exigência de lei anterior definindo o crime e a pena, tratada no enunciado."
      },
      {
        "letra": "B",
        "texto": "Intervenção Mínima.",
        "comentario": "O princípio da intervenção mínima estabelece que o Direito Penal deve ser a ultima ratio, reservado às condutas mais graves, tema diverso da exigência de lei anterior (legalidade) descrita no enunciado."
      },
      {
        "letra": "C",
        "texto": "Legalidade (e Anterioridade)."
      },
      {
        "letra": "D",
        "texto": "Proporcionalidade.",
        "comentario": "O princípio da proporcionalidade exige adequação entre a gravidade da conduta e a pena cominada, tema distinto da exigência de lei anterior definindo o crime, descrita no enunciado."
      },
      {
        "letra": "E",
        "texto": "Irretroatividade absoluta da lei penal.",
        "comentario": "Não existe irretroatividade absoluta no Direito Penal brasileiro, pois a lei penal mais benéfica retroage (Art. 5º, XL, da CF); além disso, o enunciado descreve o princípio da legalidade, e não o da irretroatividade."
      }
    ],
    "correta": "C",
    "comentario": "Art. 1º do CP e Art. 5º, XXXIX da CF. Consagra o Princípio da Legalidade (reserva legal) e Anterioridade."
  },
  {
    "id": "penal_21",
    "disciplina": "penal",
    "topico": "Crimes contra a Administração Pública",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "No crime de peculato culposo, a reparação do dano que ocorre antes de proferida a sentença irrecorrível tem qual efeito na punibilidade do agente?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Reduz a pena aplicada de metade.",
        "comentario": "A redução da pena pela metade (Art. 312, §3º, do CP) ocorre quando a reparação do dano é POSTERIOR à sentença irrecorrível; se anterior, como no enunciado, a consequência é a extinção da punibilidade."
      },
      {
        "letra": "B",
        "texto": "Não altera a punibilidade, constituindo mera atenuante genérica.",
        "comentario": "A reparação do dano antes da sentença irrecorrível não é mera atenuante genérica: ela EXTINGUE a punibilidade do agente, por expressa previsão do Art. 312, §3º, do CP."
      },
      {
        "letra": "C",
        "texto": "Extingue a punibilidade."
      },
      {
        "letra": "D",
        "texto": "Substitui a pena privativa de liberdade por restritiva de direitos.",
        "comentario": "O Art. 312, §3º, do CP não prevê substituição de pena; a reparação do dano antes da sentença irrecorrível extingue diretamente a punibilidade do agente."
      }
    ],
    "gabarito": "C",
    "artigo": "Artigo 312, § 3º do CP",
    "justificativa": "Nos termos do art. 312, § 3º do CP, no peculato culposo, a reparação do dano anterior à sentença irrecorrível extingue a punibilidade. Se for posterior, reduz a pena imposta de metade."
  },
  {
    "id": "penal_22",
    "disciplina": "penal",
    "topico": "Crimes contra a Administração Pública",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O agente público que exige de um cidadão vantagem indevida para agilizar a emissão de certidão, no exercício de suas funções, comete o crime de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Peculato-desvio.",
        "comentario": "O peculato-desvio (Art. 312 do CP) consiste em dar destinação diversa, em proveito próprio ou alheio, a bem de que já tem a posse em razão do cargo, e não em exigir vantagem indevida de terceiro."
      },
      {
        "letra": "B",
        "texto": "Corrupção passiva.",
        "comentario": "A corrupção passiva (Art. 317 do CP) tem como verbos solicitar, receber ou aceitar promessa de vantagem, e não exigir, verbo que caracteriza a concussão."
      },
      {
        "letra": "C",
        "texto": "Concussão."
      },
      {
        "letra": "D",
        "texto": "Prevaricação.",
        "comentario": "A prevaricação (Art. 319 do CP) consiste em retardar, omitir ou praticar ato contra a lei para satisfazer interesse pessoal, sem exigência de vantagem indevida, elemento que diferencia a concussão."
      }
    ],
    "gabarito": "C",
    "artigo": "Artigo 316 do CP",
    "justificativa": "O verbo nuclear EXIGIR configura o crime de concussão (Art. 316 do CP). Se o verbo fosse solicitar ou receber, seria corrupção passiva (Art. 317)."
  },
  {
    "id": "penal_23",
    "disciplina": "penal",
    "topico": "Aplicação da Lei Penal",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Em relação ao tempo e ao lugar do crime, o Código Penal adotou, respectivamente, as seguintes teorias:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Atividade e Atividade.",
        "comentario": "Para o LUGAR do crime o CP adota a teoria da ubiquidade (Art. 6º), e não a da atividade; a teoria da atividade aplica-se apenas ao tempo do crime (Art. 4º)."
      },
      {
        "letra": "B",
        "texto": "Ubiquidade e Atividade.",
        "comentario": "Esta alternativa inverte as teorias: o CP adota a atividade para o TEMPO (Art. 4º) e a ubiquidade para o LUGAR (Art. 6º), e não o contrário."
      },
      {
        "letra": "C",
        "texto": "Atividade e Ubiquidade."
      },
      {
        "letra": "D",
        "texto": "Resultado e Ubiquidade.",
        "comentario": "Para o TEMPO do crime o CP adota a teoria da atividade (Art. 4º) — momento da conduta —, e não a teoria do resultado; a ubiquidade está correta apenas para o lugar do crime."
      }
    ],
    "gabarito": "C",
    "artigo": "Artigos 4º e 6º do CP",
    "justificativa": "O Código Penal adota a Teoria da Atividade para o Tempo do Crime (Art. 4º - momento da conduta) e a Teoria da Ubiquidade para o Lugar do Crime (Art. 6º - conduta ou resultado). Mnemônico: LUTA (Lugar = Ubiquidade; Tempo = Atividade)."
  },
  {
    "id": "penal_24",
    "disciplina": "penal",
    "topico": "Excludentes de Culpabilidade",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "A coação moral irresistível e a estrita obediência a ordem não manifestamente ilegal de superior hierárquico são causas que excluem a:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Ilicitude.",
        "comentario": "O fato praticado sob coação moral irresistível ou obediência hierárquica continua ilícito; o que se exclui é a culpabilidade do coagido/subordinado, por inexigibilidade de conduta diversa (Art. 22 do CP)."
      },
      {
        "letra": "B",
        "texto": "Tipicidade.",
        "comentario": "A conduta permanece típica; a coação moral irresistível e a obediência hierárquica afetam a culpabilidade (exigibilidade de conduta diversa), não a tipicidade do fato."
      },
      {
        "letra": "C",
        "texto": "Culpabilidade, punindo-se apenas o autor da coação ou da ordem."
      },
      {
        "letra": "D",
        "texto": "Punibilidade pela renúncia estatal.",
        "comentario": "Não se trata de causa de extinção da punibilidade (rol do Art. 107 do CP) nem de renúncia estatal ao jus puniendi, mas de excludente de culpabilidade prevista no Art. 22 do CP."
      }
    ],
    "gabarito": "C",
    "artigo": "Artigo 22 do CP",
    "justificativa": "Tanto a coação moral irresistível quanto a obediência hierárquica a ordem não ilegal de superior são causas excludentes de culpabilidade (por inexigibilidade de conduta diversa). Apenas o coator ou quem deu a ordem respondem pelo crime."
  },
  {
    "id": "penal_25",
    "disciplina": "penal",
    "topico": "Abuso de Autoridade",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "A Lei nº 13.869/19 tipifica os crimes de abuso de autoridade. Para que a conduta do agente público configure crime de abuso, exige-se dolo específico, caracterizado pelo:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Dolo eventual de aceitar o risco do resultado prejudicial.",
        "comentario": "A Lei 13.869/19 exige dolo específico (finalidade especial de agir), e não dolo eventual; a mera aceitação do risco de um resultado prejudicial não caracteriza o abuso de autoridade."
      },
      {
        "letra": "B",
        "texto": "Erro na interpretação de lei ou na avaliação de fatos e provas.",
        "comentario": "O Art. 1º, §2º, da Lei 13.869/19 exclui expressamente o crime quando há mera divergência na interpretação de lei ou na avaliação de fatos e provas, o que é o oposto do dolo específico exigido para configurar o abuso."
      },
      {
        "letra": "C",
        "texto": "Fim específico de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal."
      },
      {
        "letra": "D",
        "texto": "Exclusivo interesse financeiro pecuniário.",
        "comentario": "O dolo específico da Lei 13.869/19 não se limita a interesse financeiro; abrange também o mero capricho ou satisfação pessoal, sem qualquer vantagem econômica envolvida."
      }
    ],
    "gabarito": "C",
    "artigo": "Artigo 1º, § 1º da Lei 13.869/19",
    "justificativa": "O abuso exige dolo específico e a finalidade especial de agir (prejudicar, beneficiar, capricho ou satisfação pessoal), afastando a mera interpretação divergente ou dolo genérico simples."
  },
  {
    "disciplina": "penal",
    "topico": "Crimes Dolosos e Culposos",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o crime culposo no Direito Penal brasileiro, assinale a alternativa CORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Todo crime admite modalidade culposa, sendo a culpa a regra no Código Penal.",
        "comentario": "É o inverso: o Art. 18, parágrafo único, do CP estabelece que o DOLO é a regra, e a culpa é exceção, punível apenas quando há previsão legal expressa. Nem todo crime admite modalidade culposa."
      },
      {
        "letra": "B",
        "texto": "O crime culposo somente é punível quando houver previsão legal expressa nesse sentido."
      },
      {
        "letra": "C",
        "texto": "O agente que age com culpa consciente não responde criminalmente.",
        "comentario": "A culpa consciente (em que o agente prevê o resultado mas acredita poder evitá-lo) é modalidade de culpa plenamente punível, desde que haja previsão legal do tipo culposo; não há isenção de responsabilidade."
      },
      {
        "letra": "D",
        "texto": "A negligência, imprudência e imperícia são formas de dolo eventual.",
        "comentario": "Negligência, imprudência e imperícia são modalidades de CULPA (Art. 18, II, do CP), e não de dolo eventual, que pressupõe o agente prever e aceitar o risco de produzir o resultado."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 18, parágrafo único do CP",
    "justificativa": "O Art. 18, parágrafo único do CP estabelece que \"salvo os casos expressos em lei, ninguém pode ser punido por fato previsto como crime, senão quando o pratica dolosamente\". A culpa, portanto, é exceção e exige previsão legal expressa.",
    "id": "penal_26"
  },
  {
    "disciplina": "penal",
    "topico": "Concurso de Crimes (Art. 69-71)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre o crime continuado (Art. 71 do CP), é CORRETO afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "No crime continuado simples, aplica-se a pena de qualquer um dos crimes, aumentada de 1/6 a 2/3.",
        "comentario": "A generalização é imprecisa: o Art. 71, caput, do CP determina que, sendo diversas as penas dos crimes, aplica-se a pena do crime MAIS GRAVE (e não de 'qualquer um' deles), aumentada de 1/6 a 2/3; a escolha livre só ocorre quando as penas são idênticas."
      },
      {
        "letra": "B",
        "texto": "No crime continuado específico (§único), a pena pode ser aumentada até o triplo quando as vítimas forem diferentes e o agente, com violência ou grave ameaça.",
        "comentario": "Esta descrição refere-se à hipótese do crime continuado ESPECÍFICO (parágrafo único do Art. 71), mas não define o instituto do crime continuado em si, cujo requisito essencial — crimes da mesma espécie, nas mesmas condições de tempo, lugar e modo de execução — está na alternativa D."
      },
      {
        "letra": "C",
        "texto": "O crime continuado é uma ficção jurídica, mas o réu responde por todos os crimes, com as penas somadas.",
        "comentario": "A soma das penas de todos os crimes descreve o CONCURSO MATERIAL (Art. 69 do CP). No crime continuado, por ficção jurídica, aplica-se a pena de um só dos crimes, aumentada, evitando-se justamente o cúmulo material."
      },
      {
        "letra": "D",
        "texto": "O crime continuado exige que os crimes sejam da mesma espécie, praticados nas mesmas condições de tempo, lugar e modo de execução."
      }
    ],
    "gabarito": "D",
    "artigo": "Art. 71 do CP",
    "justificativa": "O Art. 71 do CP exige para o crime continuado que os crimes sejam da mesma espécie, praticados nas mesmas condições de tempo, lugar e modo de execução. A pena de um dos crimes (a mais grave) é aumentada de 1/6 a 2/3 (crime continuado simples). O §único prevê que no crime continuado específico pode ser aumentado até o triplo.",
    "id": "penal_27"
  },
  {
    "disciplina": "penal",
    "topico": "Extinção da Punibilidade (Art. 107)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos do Código Penal, a prescrição é uma causa de extinção da punibilidade. Sobre a prescrição retroativa, assinale a alternativa CORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A prescrição retroativa é calculada com base na pena in abstrato cominada ao crime.",
        "comentario": "A prescrição retroativa é calculada com base na pena CONCRETAMENTE aplicada na sentença (in concreto), e não na pena abstratamente cominada ao tipo penal, conforme o Art. 110, §1º, do CP."
      },
      {
        "letra": "B",
        "texto": "Após o trânsito em julgado para a acusação, a prescrição regula-se pela pena concretamente aplicada na sentença."
      },
      {
        "letra": "C",
        "texto": "A prescrição retroativa começa a correr sempre da data do fato criminoso.",
        "comentario": "A prescrição retroativa pode ser reconhecida entre a data do fato e a data do recebimento da denúncia, ou entre marcos processuais posteriores, não sendo correto afirmar que corre sempre a partir da data do fato."
      },
      {
        "letra": "D",
        "texto": "A prescrição retroativa não se aplica quando a pena concreta for superior a 4 anos.",
        "comentario": "Não existe essa limitação de 4 anos para a prescrição retroativa; o que a lei veda (Art. 110, §1º) é o reconhecimento da prescrição retroativa em período anterior à denúncia com base em pena hipotética, mas o instituto aplica-se independentemente da quantidade de pena concreta."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 110, §1º do CP",
    "justificativa": "O Art. 110, §1º do CP dispõe que, após o trânsito em julgado para a acusação (ou improvimento do recurso da acusação), a prescrição regulará pela pena concreta aplicada na sentença, podendo ser reconhecida entre a data do fato e a data do recebimento da denúncia (prescrição retroativa).",
    "id": "penal_28"
  },
  {
    "disciplina": "penal",
    "topico": "Causas Excludentes de Ilicitude (Art. 23-25)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o estado de necessidade previsto no Art. 24 do Código Penal, é correto afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O estado de necessidade exclui a culpabilidade do agente.",
        "comentario": "O estado de necessidade (Art. 24 do CP) é causa excludente de ILICITUDE, e não de culpabilidade — o fato deixa de ser antijurídico quando presentes seus requisitos."
      },
      {
        "letra": "B",
        "texto": "O estado de necessidade exclui a ilicitude quando o agente sacrifica bem de menor valor para preservar bem de maior valor."
      },
      {
        "letra": "C",
        "texto": "O estado de necessidade pode ser alegado por quem tinha o dever legal de enfrentar o perigo.",
        "comentario": "O Art. 24, §1º, do CP veda expressamente a alegação de estado de necessidade a quem tinha o dever legal de enfrentar o perigo (como bombeiros e policiais no exercício de suas funções típicas)."
      },
      {
        "letra": "D",
        "texto": "O estado de necessidade agressivo é aquele em que o agente se defende de agressão injusta e atual.",
        "comentario": "Defender-se de agressão injusta e atual é a definição de legítima defesa (Art. 25 do CP), e não de estado de necessidade agressivo, que consiste em sacrificar bem jurídico de terceiro inocente (não causador do perigo) para salvar direito próprio ou alheio."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 24 do CP",
    "justificativa": "O Art. 24 do CP estabelece o estado de necessidade como excludente de ilicitude (não de culpabilidade). Ele ocorre quando o agente sacrifica um bem para salvar direito próprio ou alheio de perigo atual e inevitável. O §2º prevê redução de pena se o sacrifício era razoável mas desproporcional. Quem tem dever legal de enfrentar o perigo não pode alegar estado de necessidade (§1º).",
    "id": "penal_29"
  },
  {
    "disciplina": "penal",
    "topico": "Crimes contra o Patrimônio",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre o crime de roubo (Art. 157 do CP), assinale a alternativa CORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O roubo circunstanciado ocorre quando a subtração é de coisa de valor elevado.",
        "comentario": "O valor elevado da coisa não é causa de aumento prevista para o roubo; as majorantes do Art. 157, §2º e §2º-A, envolvem circunstâncias como concurso de pessoas, uso de arma de fogo, restrição da liberdade da vítima, entre outras."
      },
      {
        "letra": "B",
        "texto": "O emprego de arma de fogo, nas circunstâncias do Art. 157, §2º, resulta em aumento de pena de 2/3."
      },
      {
        "letra": "C",
        "texto": "O roubo com resultado morte (latrocínio) é crime contra o patrimônio, de competência do Tribunal do Júri.",
        "comentario": "Embora o latrocínio seja crime contra o patrimônio, a Súmula 603 do STF fixa que sua competência é do JUÍZO SINGULAR, e não do Tribunal do Júri, que julga apenas os crimes dolosos contra a vida."
      },
      {
        "letra": "D",
        "texto": "O crime de extorsão (Art. 158) é espécie de furto qualificado pelo uso de violência ou grave ameaça.",
        "comentario": "A extorsão (Art. 158 do CP) é crime autônomo, distinto do furto e do roubo, caracterizado por constranger a vítima a fazer, tolerar que se faça ou deixar de fazer algo, mediante violência ou grave ameaça, e não uma espécie de furto qualificado."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 157, §2º-A, I do CP",
    "justificativa": "O Art. 157, §2º-A, I do CP (incluído pela Lei 13.654/2018) prevê o aumento de pena de 2/3 nos casos de emprego de arma de fogo. O latrocínio (C) é crime contra o patrimônio, mas NÃO é julgado pelo Júri (Súmula 603 do STF). A extorsão (D) é crime autônomo, não espécie de furto.",
    "id": "penal_30"
  },
  {
    "disciplina": "penal",
    "topico": "Crimes contra a Administração Pública",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o crime de peculato (Art. 312 do CP), é INCORRETO afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O peculato doloso próprio exige que o agente seja funcionário público e se aproprie de dinheiro, valor ou bem móvel que administra.",
        "comentario": "Esta afirmação está correta e descreve fielmente o peculato-apropriação do Art. 312, caput, do CP; por ser verdadeira, não é a alternativa incorreta pedida pela questão — o erro está na alternativa C."
      },
      {
        "letra": "B",
        "texto": "O peculato culposo (Art. 312, §2º) é punido com detenção de 3 meses a 1 ano.",
        "comentario": "Esta afirmação está correta quanto à pena do peculato culposo prevista no Art. 312, §2º, do CP. Por ser verdadeira, não é a alternativa incorreta buscada pela questão."
      },
      {
        "letra": "C",
        "texto": "No peculato culposo, se o funcionário ressarcir o dano antes do trânsito em julgado, a pena é reduzida à metade; após o trânsito, a punibilidade é extinta."
      },
      {
        "letra": "D",
        "texto": "O particular que concorre para o crime de peculato responde pela mesma pena do funcionário público.",
        "comentario": "Esta afirmação está correta, por força da regra de comunicabilidade das elementares do crime próprio (Art. 30 do CP): o particular que concorre para o peculato responde pela mesma pena do funcionário público. Por ser verdadeira, não é a alternativa incorreta buscada."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 312, §3º do CP",
    "justificativa": "A alternativa C inverte as consequências previstas no Art. 312, §3º do CP. O correto é: se o dano é reparado ANTES do trânsito em julgado, a punibilidade é EXTINTA; se for reparado APÓS o trânsito em julgado, a pena é REDUZIDA À METADE.",
    "id": "penal_31"
  },
  {
    "disciplina": "penal",
    "topico": "Crimes contra a Dignidade Sexual",
    "peso": 1,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Conforme o Código Penal (após a Lei 12.015/2009), sobre o crime de estupro (Art. 213), é CORRETO afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O crime de estupro pode ser praticado apenas por homem contra mulher.",
        "comentario": "Após a unificação promovida pela Lei 12.015/2009, o estupro (Art. 213 do CP) pode ser praticado por qualquer pessoa contra qualquer pessoa, sendo crime comum quanto ao sujeito ativo e passivo, e não restrito a homem contra mulher."
      },
      {
        "letra": "B",
        "texto": "O crime de estupro é de ação pública condicionada à representação em todos os casos.",
        "comentario": "Desde a Lei 13.718/2018, os crimes contra a dignidade sexual, incluindo o estupro, são de ação penal pública INCONDICIONADA, não sendo mais condicionados à representação da vítima."
      },
      {
        "letra": "C",
        "texto": "O crime de estupro unifica condutas antes separadas nos crimes de estupro e atentado violento ao pudor."
      },
      {
        "letra": "D",
        "texto": "O estupro com lesão corporal de natureza grave é crime qualificado com pena de reclusão de 10 a 20 anos.",
        "comentario": "A pena correta para o estupro qualificado pela lesão corporal grave (Art. 213, §1º) é de reclusão de 8 a 12 anos, e não de 10 a 20 anos — esta última faixa aproxima-se da hipótese de resultado morte (§2º), que é de 12 a 30 anos."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 213 do CP",
    "justificativa": "A Lei 12.015/2009 unificou no Art. 213 do CP as condutas antes previstas separadamente como estupro (coito vaginal) e atentado violento ao pudor (outros atos libidinosos), tornando-as um único tipo penal. Hoje qualquer pessoa pode ser sujeito ativo ou passivo do crime.",
    "id": "penal_32"
  },
  {
    "disciplina": "penal",
    "topico": "Aplicação da Pena (Art. 59-76)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre o sistema trifásico de fixação da pena privativa de liberdade (Art. 68 do CP), assinale a alternativa CORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Na 1ª fase, analisam-se as circunstâncias agravantes e atenuantes.",
        "comentario": "As agravantes e atenuantes são analisadas na 2ª FASE do sistema trifásico; a 1ª fase é dedicada à fixação da pena-base com base nas circunstâncias judiciais do Art. 59 do CP."
      },
      {
        "letra": "B",
        "texto": "Na 2ª fase, analisam-se as circunstâncias judiciais do Art. 59.",
        "comentario": "As circunstâncias judiciais do Art. 59 são analisadas na 1ª FASE, para fixação da pena-base; a 2ª fase é destinada às agravantes e atenuantes."
      },
      {
        "letra": "C",
        "texto": "Na 3ª fase, aplicam-se as causas de aumento e diminuição de pena, resultando na pena definitiva."
      },
      {
        "letra": "D",
        "texto": "A pena-base não pode ser fixada abaixo do mínimo legal mesmo havendo circunstâncias judiciais favoráveis.",
        "comentario": "Esta afirmação está correta como regra geral sobre os limites da pena-base, mas não descreve o sistema trifásico em si (foco da questão) — a definição correta da 3ª fase do sistema, com as causas de aumento e diminuição, está na alternativa C."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 68 do CP",
    "justificativa": "No sistema trifásico (Nelson Hungria): 1ª fase: o juiz fixa a pena-base com base nas circunstâncias judiciais do Art. 59 do CP; 2ª fase: aplica as agravantes e atenuantes; 3ª fase: aplica as causas de aumento e diminuição de pena, chegando à pena definitiva.",
    "id": "penal_33"
  },
  {
    "id": "penal_34",
    "disciplina": "penal",
    "topico": "Teoria do Crime",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O agente que, voluntariamente, desiste de prosseguir na execução de um crime, impedindo que o resultado se consume por sua própria vontade, configura o instituto da:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Tentativa abandonada ou desistência voluntária, respondendo apenas pelos atos já praticados."
      },
      {
        "letra": "B",
        "texto": "Arrependimento eficaz, respondendo por crime tentado com redução de pena.",
        "comentario": "O arrependimento eficaz (Art. 15 do CP) pressupõe que o agente já esgotou os atos de execução, atuando depois para impedir o resultado — diferente da hipótese do enunciado, em que o agente desiste de PROSSEGUIR na execução. Além disso, em ambos os institutos o agente responde apenas pelos atos já praticados, e não por crime tentado com redução de pena."
      },
      {
        "letra": "C",
        "texto": "Arrependimento posterior, com extinção de punibilidade.",
        "comentario": "O arrependimento posterior (Art. 16 do CP) ocorre após a consumação do crime, mediante reparação do dano ou restituição da coisa antes do recebimento da denúncia/queixa, sendo causa de DIMINUIÇÃO de pena (1/3 a 2/3), e não de extinção da punibilidade; também não se confunde com a desistência de prosseguir na execução, descrita no enunciado."
      },
      {
        "letra": "D",
        "texto": "Desistência voluntária, ficando isento de qualquer responsabilidade penal.",
        "comentario": "O agente não fica isento de qualquer responsabilidade: pela regra da desistência voluntária (Art. 15 do CP), ele responde pelos atos já praticados, caso estes constituam, por si só, crime autônomo (ex.: lesão corporal já causada antes de desistir de prosseguir)."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 15 do Código Penal",
    "justificativa": "Na desistência voluntária (Art. 15 do CP), o agente inicia a execução, mas decide voluntariamente parar. A consequência é que ele só responde pelos atos já praticados (se constituírem crimes autônomos)."
  },
  {
    "id": "penal_35",
    "disciplina": "penal",
    "topico": "Crimes contra a Administration Pública",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O crime de concussão (Art. 316 do CP) difere do crime de corrupção passiva (Art. 317 do CP) essencialmente pela conduta do agente público. Assinale a conduta que caracteriza a concussão:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Solicitar vantagem indevida, em razão da função pública.",
        "comentario": "Solicitar é verbo próprio da corrupção passiva (Art. 317 do CP), e não da concussão, que exige o verbo EXIGIR (imposição, coerção implícita)."
      },
      {
        "letra": "B",
        "texto": "Receber vantagem indevida ou aceitar promessa de tal vantagem.",
        "comentario": "Receber ou aceitar promessa de vantagem também caracteriza a corrupção passiva (Art. 317 do CP), e não a concussão, cujo verbo núcleo é EXIGIR."
      },
      {
        "letra": "C",
        "texto": "Exigir vantagem indevida, direta ou indiretamente, em razão da função."
      },
      {
        "letra": "D",
        "texto": "Facilitar a prática de contrabando ou descaminho infringindo dever funcional.",
        "comentario": "Essa conduta descreve a facilitação de contrabando ou descaminho (Art. 318 do CP), crime autônomo distinto tanto da concussão quanto da corrupção passiva."
      }
    ],
    "gabarito": "C",
    "artigo": "Artigos 316 e 317 do Código Penal",
    "justificativa": "Concussão (Art. 316): o verbo núcleo é EXIGIR. Corrupção Passiva (Art. 317): os verbos são SOLICITAR, RECEBER ou ACEITAR promessa de vantagem."
  },
{
  "id": "penal_36",
  "disciplina": "penal",
  "topico": "Crimes contra a Pessoa",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "O feminicídio, crime autônomo previsto no Art. 121-A do CP desde a Lei 14.994/2024 (antes tratado como qualificadora do homicídio), ocorre quando o crime é praticado:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Contra mulher, em qualquer situação, somente quando o autor é o cônjuge.",
      "comentario": "O feminicídio não se restringe ao cônjuge como autor; qualquer pessoa pode praticá-lo, desde que o homicídio seja motivado por razões da condição de sexo feminino (violência doméstica/familiar ou menosprezo/discriminação à mulher), conforme o Art. 121-A, §1º."
    },
    {
      "letra": "B",
      "texto": "Contra a mulher por razões da condição de sexo feminino, em violência doméstica/familiar ou por menosprezo/discriminação à condição de mulher."
    },
    {
      "letra": "C",
      "texto": "Contra a mulher dentro do ambiente doméstico, independentemente da motivação.",
      "comentario": "Não basta o ambiente doméstico: o feminicídio exige o motivo específico de gênero (razões da condição de sexo feminino), previsto no §1º do Art. 121-A, e não qualquer motivação dentro do lar."
    },
    {
      "letra": "D",
      "texto": "Quando a vítima é do sexo feminino e há resultado mais grave do que a lesão corporal.",
      "comentario": "O feminicídio não se define pela gravidade do resultado sobre uma vítima mulher, mas pelo motivo específico do crime — razões da condição de sexo feminino —, conforme exige o §1º do Art. 121-A do CP."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 121-A do CP (Lei 14.994/2024)",
  "justificativa": "O feminicídio ocorre quando o homicídio é praticado CONTRA A MULHER POR RAZÕES DA CONDIÇÃO DE SEXO FEMININO. O §1º do Art. 121-A define essas razões como: violência doméstica e familiar ou menosprezo ou discriminação à condição de mulher. ATENÇÃO: desde a Lei 14.994/2024 o feminicídio é CRIME AUTÔNOMO (não mais qualificadora do art. 121, §2º, VI, que foi revogado), com pena própria de reclusão de 20 a 40 anos, permanecendo hediondo."
},
{
  "id": "penal_37",
  "disciplina": "penal",
  "topico": "Concurso de Crimes",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Sobre o concurso formal de crimes (Art. 70 do CP), assinale a alternativa CORRETA:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "No concurso formal perfeito (ideal), as penas se somam (cúmulo material).",
      "comentario": "A soma das penas (cúmulo material) é consequência do concurso formal IMPERFEITO (desígnios autônomos) ou do concurso material (Art. 69); no concurso formal PERFEITO, aplica-se a pena mais grave, aumentada de 1/6 até a metade."
    },
    {
      "letra": "B",
      "texto": "No concurso formal perfeito, aplica-se a pena mais grave, aumentada de 1/6 até a metade."
    },
    {
      "letra": "C",
      "texto": "No concurso formal imperfeito, aplica-se somente a pena mais grave, sem aumento.",
      "comentario": "No concurso formal IMPERFEITO (quando há desígnios autônomos), as penas são somadas (cúmulo material), e não aplicada apenas a pena mais grave sem aumento — este último tratamento é do concurso formal perfeito."
    },
    {
      "letra": "D",
      "texto": "O concurso formal ocorre quando o agente pratica duas ações distintas produzindo dois resultados distintos.",
      "comentario": "O concurso formal (Art. 70, caput) exige UMA SÓ AÇÃO ou omissão produzindo dois ou mais resultados; a prática de duas ações distintas, cada uma gerando um resultado, caracteriza concurso MATERIAL (Art. 69 do CP)."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 70 do Código Penal",
  "justificativa": "No concurso formal PERFEITO (art. 70 caput 1ª parte): uma só ação produz dois ou mais crimes sem desígnios autônomos → aplica-se a pena mais grave AUMENTADA de 1/6 até a metade. No IMPERFEITO (desígnios autônomos) → cúmulo material."
},
{
  "id": "penal_38",
  "disciplina": "penal",
  "topico": "Causas de Exclusão da Ilicitude",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Sobre a legítima defesa (Art. 25 do CP), é CORRETO afirmar que:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Somente pode ser invocada para repelir agressão atual, sendo que a iminente não é coberta.",
      "comentario": "O Art. 25 do CP cobre expressamente tanto a agressão ATUAL quanto a IMINENTE, e não somente a atual."
    },
    {
      "letra": "B",
      "texto": "Admite-se a legítima defesa recíproca quando dois agentes se agridem mutuamente de forma injusta.",
      "comentario": "Não se admite legítima defesa recíproca: como a legítima defesa pressupõe repelir agressão INJUSTA, quem também age em legítima defesa não pratica agressão injusta, tornando logicamente impossível a legítima defesa contra legítima defesa."
    },
    {
      "letra": "C",
      "texto": "Consiste em repelir, com moderação, agressão injusta, atual ou iminente, a direito próprio ou alheio."
    },
    {
      "letra": "D",
      "texto": "A legítima defesa putativa exclui a ilicitude quando há erro plenamente justificado pela situação.",
      "comentario": "A legítima defesa putativa decorre de erro sobre a situação fática (descriminante putativa), afetando o dolo ou a culpabilidade do agente conforme a natureza do erro — mas não exclui a ilicitude do fato, já que, objetivamente, não havia agressão injusta real a ser repelida."
    }
  ],
  "gabarito": "C",
  "artigo": "Art. 25 do Código Penal",
  "justificativa": "O art. 25 do CP define legítima defesa como o uso moderado dos meios necessários para repelir injusta agressão, ATUAL OU IMINENTE, a direito próprio ou alheio. Não há legítima defesa recíproca (não se pode agir em LD contra quem também age em LD)."
},
{
  "id": "penal_39",
  "disciplina": "penal",
  "topico": "Aplicação da Lei Penal",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "A lei penal mais grave se aplica ao crime continuado ou permanente se sua vigência é anterior à cessação da continuidade ou permanência. Essa afirmação decorre do princípio da:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Retroatividade benéfica da lei penal.",
      "comentario": "A retroatividade benéfica aplica-se a leis mais BRANDAS, retroagindo em favor do réu; a Súmula 711 trata do oposto — a aplicação de lei mais GRAVE a crime ainda em curso, sem qualquer retroatividade em benefício do agente."
    },
    {
      "letra": "B",
      "texto": "Irretroatividade da lei penal mais grave, pois ela se aplica ao início do crime.",
      "comentario": "A Súmula 711 estabelece exatamente o contrário: a lei mais grave se aplica ao crime continuado ou permanente PRECISAMENTE porque este ainda está em curso (não encerrado) quando ela entra em vigor, e não porque retroage ao início do crime."
    },
    {
      "letra": "C",
      "texto": "Ultratividade da lei mais benéfica ao réu.",
      "comentario": "A ultratividade refere-se à aplicação de uma lei já revogada, mas mais benéfica, a fatos ocorridos durante sua vigência; a Súmula 711 trata da aplicação de lei nova e mais GRAVE a crime ainda em curso, situação distinta."
    },
    {
      "letra": "D",
      "texto": "Tempus regit actum — a lei que vigora durante a conduta, mesmo que mais grave, se aplica."
    }
  ],
  "gabarito": "D",
  "artigo": "Súmula 711 do STF",
  "justificativa": "A Súmula 711 do STF consagra que: 'A lei penal mais grave aplica-se ao crime continuado ou permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência.' O fundamento é que o crime ainda estava em execução."
},
{
  "id": "penal_40",
  "disciplina": "penal",
  "topico": "Crimes contra o Patrimônio",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "O crime de furto simples (Art. 155 do CP) é punido com pena de reclusão de 1 a 4 anos. Qual das situações abaixo qualifica o furto com pena de 2 a 8 anos?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Furto praticado com emprego de chave falsa.",
      "comentario": "O emprego de chave falsa também é qualificadora do furto (Art. 155, §4º, III), com a mesma pena de 2 a 8 anos; a alternativa D, porém, descreve de modo mais direto a hipótese clássica do inciso I, sendo a resposta pretendida pela questão."
    },
    {
      "letra": "B",
      "texto": "Furto praticado por duas pessoas, durante o dia.",
      "comentario": "O concurso de duas ou mais pessoas também é qualificadora do furto (Art. 155, §4º, IV); o detalhe 'durante o dia' é irrelevante para a qualificação (o CP não distingue dia/noite no furto), mas a alternativa D descreve de modo mais direto a hipótese pretendida como resposta pela questão."
    },
    {
      "letra": "C",
      "texto": "Furto praticado contra idoso acima de 70 anos.",
      "comentario": "A idade da vítima não é qualificadora prevista no Art. 155, §4º, do CP; o Estatuto do Idoso prevê apenas causa de AUMENTO de pena para vítimas maiores de 60 anos, não uma qualificadora que altere a pena para 2 a 8 anos."
    },
    {
      "letra": "D",
      "texto": "Furto praticado com destruição ou rompimento de obstáculo."
    }
  ],
  "gabarito": "D",
  "artigo": "Art. 155, §4º, I do Código Penal",
  "justificativa": "O art. 155, §4º do CP prevê furto qualificado com pena de 2 a 8 anos, dentre outros: I — com destruição ou rompimento de obstáculo. Chave falsa (II) também qualifica, mas a pena é idêntica (2 a 8 anos) — a questão pede situação que qualifica, sendo D a mais direta."
},
{
  "id": "penal_41",
  "disciplina": "penal",
  "topico": "Extinção da Punibilidade",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "São causas de extinção da punibilidade previstas no Código Penal, EXCETO:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Morte do agente e anistia.",
      "comentario": "Morte do agente e anistia são, de fato, causas de extinção da punibilidade previstas no Art. 107, I, do CP; por serem verdadeiras, não constituem a exceção pedida pela questão."
    },
    {
      "letra": "B",
      "texto": "Prescrição, decadência e perempção.",
      "comentario": "Prescrição, decadência e perempção são, de fato, causas de extinção da punibilidade previstas no Art. 107, IV, do CP; por serem verdadeiras, não constituem a exceção pedida pela questão."
    },
    {
      "letra": "C",
      "texto": "Renúncia ao direito de queixa e perdão aceito.",
      "comentario": "Renúncia ao direito de queixa e perdão aceito são, de fato, causas de extinção da punibilidade previstas no Art. 107, V, do CP; por serem verdadeiras, não constituem a exceção pedida pela questão."
    },
    {
      "letra": "D",
      "texto": "Reincidência e atenuantes supervenientes."
    }
  ],
  "gabarito": "D",
  "artigo": "Art. 107 do Código Penal",
  "justificativa": "O art. 107 do CP lista as causas de extinção da punibilidade. REINCIDÊNCIA e ATENUANTES SUPERVENIENTES não estão elencadas, pois ao contrário, a reincidência agrava a situação do agente."
},
{
  "id": "penal_42",
  "disciplina": "penal",
  "topico": "Crimes contra a Honra",
  "peso": 1,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Sobre a injúria racial (Art. 140, §3º do CP, alterado pela Lei 14.532/23), é CORRETO afirmar:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "É crime de menor potencial ofensivo, de ação penal privada.",
      "comentario": "Com a pena de reclusão de 2 a 5 anos fixada pela Lei 14.532/23, a injúria racial deixou de ser crime de menor potencial ofensivo; além disso, passou a ser de ação penal pública INCONDICIONADA, e não privada."
    },
    {
      "letra": "B",
      "texto": "Após a Lei 14.532/23, foi equiparada a crime de racismo, tornando-se inafiançável e imprescritível, com pena de 2 a 5 anos."
    },
    {
      "letra": "C",
      "texto": "É crime de ação penal pública condicionada à representação.",
      "comentario": "Após a Lei 14.532/23, a injúria racial passou a ser de ação penal pública INCONDICIONADA, não dependendo de representação da vítima."
    },
    {
      "letra": "D",
      "texto": "Somente se configura quando há atribuição de fato criminoso em razão de raça ou cor.",
      "comentario": "Atribuir falsamente um fato criminoso a alguém caracteriza calúnia (Art. 138 do CP); a injúria racial (Art. 140, §3º) configura-se pela ofensa à dignidade ou decoro da vítima mediante elementos referentes a raça, cor, etnia, religião, origem ou condição de idoso/deficiente, sem exigir atribuição de fato criminoso."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 140, §3º do CP (Lei 14.532/23)",
  "justificativa": "A Lei 14.532/2023 equiparou a injúria racial ao crime de RACISMO (Lei 7.716/89), tornando-a INAFIANÇÁVEL E IMPRESCRITÍVEL (art. 5º, XLII, CF) — categoria distinta de \"crime hediondo\" (Lei 8.072/90), na qual o racismo não está listado. A pena é de reclusão de 2 a 5 anos, com possibilidade de aumento. É de ação penal pública incondicionada após a alteração."
},
{
  "id": "penal_43",
  "disciplina": "penal",
  "topico": "Crimes contra a Administração Pública",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "O crime de corrupção passiva (Art. 317 do CP) diferencia-se da prevaricação (Art. 319 do CP) principalmente porque:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Na corrupção passiva, o agente pratica ato ilegal; na prevaricação, sempre pratica ato legal.",
      "comentario": "A prevaricação (Art. 319 do CP) pode envolver justamente a prática de ato CONTRA disposição expressa de lei (ato ilegal), além de retardar ou omitir ato de ofício; não se trata, portanto, de sempre praticar ato legal."
    },
    {
      "letra": "B",
      "texto": "Na corrupção passiva, o agente busca vantagem econômica indevida; na prevaricação, age para satisfazer interesse ou sentimento pessoal, sem necessariamente buscar vantagem econômica."
    },
    {
      "letra": "C",
      "texto": "Na prevaricação, o agente sempre exige vantagem de terceiros; na corrupção, age por sentimento.",
      "comentario": "A prevaricação não envolve exigência de vantagem de terceiros (isso caracterizaria concussão, Art. 316); ela é motivada por interesse ou sentimento pessoal do próprio agente, e é justamente a corrupção passiva que se relaciona à vantagem indevida, e não o inverso."
    },
    {
      "letra": "D",
      "texto": "Corrupção passiva é crime próprio de policiais; prevaricação é crime comum.",
      "comentario": "Ambos os crimes são próprios de FUNCIONÁRIO PÚBLICO em geral (Arts. 317 e 319 do CP), não restritos a policiais nem classificados como crime comum."
    }
  ],
  "gabarito": "B",
  "artigo": "Arts. 317 e 319 do Código Penal",
  "justificativa": "Na corrupção passiva, o FP solicita, recebe ou aceita vantagem indevida (motivação econômica). Na prevaricação, o FP retarda, omite ou pratica ato contra lei para satisfazer INTERESSE OU SENTIMENTO PESSOAL — sem necessariamente buscar lucro."
},
{
  "id": "penal_44",
  "disciplina": "penal",
  "topico": "Crimes contra a Fé Pública",
  "peso": 1,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Sobre o crime de falsidade ideológica (Art. 299 do CP), é CORRETO afirmar:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Ocorre quando o agente falsifica materialmente o documento, alterando sua forma externa.",
      "comentario": "Alterar a forma externa do documento (forjá-lo ou modificá-lo fisicamente) caracteriza a falsidade MATERIAL (Art. 297 do CP), e não a falsidade ideológica, que mantém o documento autêntico em sua forma, mas com conteúdo falso."
    },
    {
      "letra": "B",
      "texto": "Ocorre quando o agente insere ou faz inserir declaração falsa em documento verdadeiro, para fins de prejudicar outrem ou obter vantagem."
    },
    {
      "letra": "C",
      "texto": "Só se configura em documentos públicos.",
      "comentario": "O Art. 299 do CP abrange tanto documentos PÚBLICOS quanto PARTICULARES, não se restringindo aos públicos (a pena, inclusive, é diferenciada conforme a natureza do documento)."
    },
    {
      "letra": "D",
      "texto": "É punido apenas com multa, sem pena privativa de liberdade.",
      "comentario": "A falsidade ideológica é punida com reclusão (1 a 5 anos) e multa, se o documento é público, ou reclusão (1 a 3 anos) e multa, se particular — havendo pena privativa de liberdade, e não apenas multa."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 299 do Código Penal",
  "justificativa": "Falsidade ideológica (art. 299 CP) é a INSERÇÃO DE DADOS FALSOS em documento verdadeiro (o papel é autêntico, o conteúdo é falso). Difere da falsidade material (art. 297), em que o próprio documento é forjado."
},
{
  "id": "penal_45",
  "disciplina": "penal",
  "topico": "Crimes contra a Dignidade Sexual",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "O estupro de vulnerável (Art. 217-A do CP) consuma-se quando a vítima tem menos de 14 anos. A respeito do erro sobre a idade da vítima, assinale a alternativa CORRETA segundo a jurisprudência do STJ:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "O erro sobre a idade exclui sempre o dolo, afastando o crime.",
      "comentario": "O STJ não reconhece exclusão automática do dolo em toda alegação de desconhecimento da idade; o erro deve ser comprovado pelo réu e avaliado caso a caso, não havendo uma regra absoluta de exclusão do crime."
    },
    {
      "letra": "B",
      "texto": "O erro sobre a idade pode ser alegado como erro de tipo essencial, mas deve ser comprovado pelo réu e avaliado no caso concreto."
    },
    {
      "letra": "C",
      "texto": "O STJ adota posição absoluta de que o erro sobre a idade jamais exclui o crime.",
      "comentario": "O STJ não adota posição absolutamente objetiva no sentido oposto: o desconhecimento da idade pode, sim, ser alegado como erro de tipo (Art. 20 do CP), desde que comprovado no caso concreto, não sendo correto afirmar que jamais exclui o crime."
    },
    {
      "letra": "D",
      "texto": "O crime é de responsabilidade objetiva; qualquer relação com menor de 14 anos gera crime independentemente do conhecimento da idade.",
      "comentario": "O crime não é de responsabilidade objetiva pura: o STJ admite a análise do conhecimento do agente sobre a idade da vítima, podendo o desconhecimento comprovado configurar erro de tipo, o que afasta a responsabilização automática e objetiva."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 217-A do CP e posição do STJ",
  "justificativa": "O STJ não adota posição absolutamente objetiva. A alegação de desconhecimento da idade da vítima pode ser invocada como erro de tipo (art. 20 CP), devendo o réu comprovar o erro. Assim, cada caso é analisado individualmente, não havendo responsabilidade objetiva pura."
},
{
  "id": "penal_46",
  "disciplina": "penal",
  "topico": "Lei 9.296/1996 - Interceptação Telefônica",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Segundo a Lei nº 9.296/1996, a interceptação de comunicações telefônicas, para fins de investigação criminal ou instrução processual penal, depende de:",
  "alternativas": [
    { "letra": "A", "texto": "Ordem do juiz competente, de ofício ou a requerimento, quando não houver outro meio de prova disponível e o fato investigado constituir infração penal punida com reclusão." },
    { "letra": "B", "texto": "Simples requisição da autoridade policial, sem necessidade de autorização judicial.", "comentario": "A interceptação telefônica depende de ORDEM JUDICIAL, não bastando simples requisição da autoridade policial, ainda que fundamentada na investigação criminal." },
    { "letra": "C", "texto": "Autorização do Ministério Público, dispensada qualquer participação do Poder Judiciário.", "comentario": "A autorização do MP não substitui a exigência de ordem judicial (Art. 1º da Lei 9.296/1996); a participação do Poder Judiciário é indispensável para a interceptação telefônica." },
    { "letra": "D", "texto": "Consentimento prévio do investigado, sob pena de nulidade da prova.", "comentario": "A interceptação telefônica é medida sigilosa por natureza, incompatível com o consentimento prévio do investigado; sua validade depende de ordem judicial fundamentada, não do consentimento do próprio investigado." }
  ],
  "gabarito": "A",
  "artigo": "Art. 1º e 2º da Lei 9.296/1996",
  "justificativa": "A interceptação telefônica depende de ordem judicial, cabível quando há indícios razoáveis de autoria/participação em infração penal punida com reclusão, a prova não puder ser obtida por outros meios e o fato investigado constituir infração penal (não cabe em investigação de contravenção penal isolada)."
},
{
  "id": "penal_47",
  "disciplina": "penal",
  "topico": "Lei 9.296/1996 - Prazo da Interceptação",
  "peso": 2,
  "dificuldade": "dificil",
  "enunciado": "Segundo o art. 5º da Lei nº 9.296/1996, o prazo da interceptação telefônica não poderá exceder:",
  "alternativas": [
    { "letra": "A", "texto": "5 dias, sem possibilidade de renovação.", "comentario": "O prazo legal fixado pelo Art. 5º da Lei 9.296/1996 é de 15 dias, e não de 5 dias, sendo ainda admitida a renovação, ao contrário do que afirma esta alternativa." },
    { "letra": "B", "texto": "15 dias, renovável por igual período, uma única vez, comprovada a indispensabilidade do meio de prova.", "comentario": "O STJ e o STF já admitiram sucessivas renovações do prazo de 15 dias, enquanto persistir a necessidade da medida, não havendo limitação legal a uma única renovação." },
    { "letra": "C", "texto": "15 dias, renovável por igual período, quantas vezes forem necessárias, comprovada a indispensabilidade do meio de prova." },
    { "letra": "D", "texto": "90 dias corridos, improrrogáveis.", "comentario": "A lei não fixa prazo de 90 dias corridos e improrrogáveis; o prazo legal é de 15 dias, renovável por igual período, quantas vezes forem necessárias e devidamente justificadas." }
  ],
  "gabarito": "C",
  "artigo": "Art. 5º da Lei 9.296/1996",
  "justificativa": "O prazo legal é de 15 dias, renovável por igual período, desde que comprovada a indispensabilidade do meio de prova. O STJ e o STF já admitiram sucessivas renovações, enquanto persistir a necessidade da medida e o prazo total for devidamente justificado, não havendo limite máximo absoluto de renovações previsto na lei."
},
{
  "id": "penal_48",
  "disciplina": "penal",
  "topico": "Lei 9.296/1996 - Crime de Quebra de Sigilo",
  "peso": 2,
  "dificuldade": "dificil",
  "enunciado": "Constitui crime, segundo o art. 10 da Lei nº 9.296/1996, realizar interceptação de comunicações telefônicas:",
  "alternativas": [
    { "letra": "A", "texto": "Sem autorização judicial ou com objetivos não autorizados em lei, sujeitando o responsável à pena de reclusão de 2 a 4 anos e multa." },
    { "letra": "B", "texto": "Mesmo com autorização judicial válida, sendo sempre crime independentemente da formalidade cumprida.", "comentario": "A interceptação realizada com autorização judicial válida e dentro dos objetivos legais é conduta LÍCITA; o crime do Art. 10 pressupõe justamente a ausência de autorização judicial ou o desvio de finalidade legal." },
    { "letra": "C", "texto": "Apenas se o conteúdo interceptado for divulgado publicamente; a simples escuta não configura crime.", "comentario": "O crime do Art. 10 se consuma com a própria realização da interceptação sem autorização judicial ou com objetivos não autorizados, independentemente de divulgação posterior do conteúdo." },
    { "letra": "D", "texto": "Somente quando praticada por particular, excluída a responsabilidade de agente público que aja sem autorização.", "comentario": "O crime do Art. 10 aplica-se tanto a particulares quanto a agentes públicos que realizem a interceptação sem autorização judicial ou com objetivos não autorizados, não havendo exclusão para agentes públicos." }
  ],
  "gabarito": "A",
  "artigo": "Art. 10 da Lei 9.296/1996",
  "justificativa": "O art. 10 tipifica como crime realizar interceptação de comunicações telefônicas sem autorização judicial ou com objetivos não autorizados em lei, com pena de reclusão de 2 a 4 anos e multa — aplicável tanto a agentes públicos quanto a particulares que pratiquem a conduta irregular."
},
{
  "id": "penal_49",
  "disciplina": "penal",
  "topico": "Habeas Corpus - Cabimento",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Segundo o art. 647 do Código de Processo Penal, dar-se-á habeas corpus:",
  "alternativas": [
    { "letra": "A", "texto": "Sempre que alguém sofrer ou se achar na iminência de sofrer violência ou coação ilegal na sua liberdade de ir e vir, salvo nos casos de punição disciplinar." },
    { "letra": "B", "texto": "Apenas após o trânsito em julgado de sentença condenatória.", "comentario": "O habeas corpus cabe a qualquer tempo, inclusive de forma preventiva (antes de consumada a coação), e não somente após o trânsito em julgado de sentença condenatória." },
    { "letra": "C", "texto": "Exclusivamente para impugnar decisões do Supremo Tribunal Federal.", "comentario": "O habeas corpus pode ser impetrado contra ato de qualquer autoridade, inclusive policial ou de juízes de primeiro grau, e não exclusivamente contra decisões do STF." },
    { "letra": "D", "texto": "Somente quando requerido pelo Ministério Público, sendo vedada a impetração por advogado ou pelo próprio paciente.", "comentario": "O habeas corpus pode ser impetrado por qualquer pessoa, em seu favor ou de terceiro, inclusive sem capacidade postulatória, não sendo privativo do Ministério Público nem vedado ao advogado ou ao próprio paciente." }
  ],
  "gabarito": "A",
  "artigo": "Art. 647 do CPP",
  "justificativa": "O habeas corpus cabe sempre que alguém sofrer ou se achar na iminência de sofrer violência ou coação ilegal na liberdade de locomoção, ressalvados os casos de punição disciplinar. Pode ser impetrado por qualquer pessoa, em favor de si ou de terceiro, inclusive sem capacidade postulatória."
},
{
  "id": "penal_50",
  "disciplina": "penal",
  "topico": "Habeas Corpus - Hipóteses de Coação Ilegal",
  "peso": 2,
  "dificuldade": "dificil",
  "enunciado": "Segundo o art. 648 do CPP, considera-se ilegal a coação quando, EXCETO:",
  "alternativas": [
    { "letra": "A", "texto": "Não houver justa causa.", "comentario": "A ausência de justa causa é, de fato, hipótese de coação ilegal prevista no Art. 648, I, do CPP; por ser verdadeira, não constitui a exceção pedida pela questão." },
    { "letra": "B", "texto": "Alguém estiver preso por mais tempo do que determina a lei.", "comentario": "O excesso de prazo da prisão é, de fato, hipótese de coação ilegal prevista no Art. 648, II, do CPP; por ser verdadeira, não constitui a exceção pedida pela questão." },
    { "letra": "C", "texto": "Quem ordenar a coação não tiver competência para fazê-lo.", "comentario": "A incompetência da autoridade coatora é, de fato, hipótese de coação ilegal prevista no Art. 648, III, do CPP; por ser verdadeira, não constitui a exceção pedida pela questão." },
    { "letra": "D", "texto": "A prisão for decretada por autoridade judiciária competente, mediante decisão fundamentada e nos limites da lei." }
  ],
  "gabarito": "D",
  "artigo": "Art. 648 do CPP",
  "justificativa": "O art. 648 lista hipóteses de ilegalidade da coação: ausência de justa causa, excesso de prazo, incompetência da autoridade coatora, cessação do motivo, entre outras. Uma prisão decretada por autoridade competente, fundamentada e dentro dos limites legais é, ao contrário, hipótese de coação LEGAL, não ensejando habeas corpus."
},
{
  "id": "penal_51",
  "disciplina": "penal",
  "topico": "Habeas Corpus - Espécies",
  "peso": 2,
  "dificuldade": "medio",
  "enunciado": "Em relação às espécies de habeas corpus, o \"habeas corpus preventivo\" (também chamado de salvo-conduto) é aquele:",
  "alternativas": [
    { "letra": "A", "texto": "Impetrado para evitar que a coação ilegal à liberdade de locomoção venha a ocorrer, quando ainda não se consumou." },
    { "letra": "B", "texto": "Impetrado somente após a prisão já ter ocorrido, visando à imediata soltura do paciente.", "comentario": "Essa descrição corresponde ao habeas corpus REPRESSIVO (liberatório), e não ao preventivo (salvo-conduto), que é impetrado antes de a coação se consumar, para evitá-la." },
    { "letra": "C", "texto": "Cabível apenas em crimes de menor potencial ofensivo.", "comentario": "O habeas corpus preventivo não se restringe a crimes de menor potencial ofensivo, sendo cabível em qualquer situação de iminente coação ilegal à liberdade de locomoção, independentemente da gravidade do crime." },
    { "letra": "D", "texto": "Uma modalidade extinta pelo ordenamento jurídico brasileiro atual.", "comentario": "O habeas corpus preventivo (salvo-conduto) permanece plenamente vigente no ordenamento jurídico brasileiro, sendo instrumento processual amplamente utilizado na prática forense." }
  ],
  "gabarito": "A",
  "artigo": "Doutrina processual penal sobre o CPP",
  "justificativa": "O habeas corpus preventivo (salvo-conduto) é impetrado para evitar a consumação de uma coação ilegal iminente à liberdade de locomoção. O habeas corpus REPRESSIVO (ou liberatório), diferente, é impetrado quando a prisão ilegal já ocorreu, visando à soltura do paciente."
},
{
  "id": "penal_52",
  "disciplina": "penal",
  "topico": "Competência Processual Penal - Regra Geral",
  "peso": 2,
  "dificuldade": "medio",
  "enunciado": "Segundo o art. 70 do Código de Processo Penal, a competência para o julgamento de uma infração penal será, em regra, determinada:",
  "alternativas": [
    { "letra": "A", "texto": "Pelo lugar em que se consumar a infração, ou, no caso de tentativa, pelo lugar em que for praticado o último ato de execução." },
    { "letra": "B", "texto": "Sempre pelo domicílio do réu, independentemente do local do crime.", "comentario": "O domicílio do réu (Art. 72 do CPP) é critério SUBSIDIÁRIO, aplicável apenas quando desconhecido o local da infração, e não a regra geral, que é o local da consumação do crime (Art. 70)."},
    { "letra": "C", "texto": "Sempre pelo domicílio da vítima, independentemente do local do crime.", "comentario": "O domicílio da vítima não é o critério de competência de regra geral do CPP; a regra é o local da consumação da infração (Art. 70), sendo o domicílio do réu apenas critério subsidiário."},
    { "letra": "D", "texto": "Pela livre escolha do Ministério Público, sem qualquer critério legal predefinido.", "comentario": "A competência é fixada por critérios legais objetivos (Arts. 69 a 91 do CPP), como o local da infração, e não por livre escolha do Ministério Público."}
  ],
  "gabarito": "A",
  "artigo": "Art. 70 do CPP",
  "justificativa": "A regra geral de competência (ratione loci) é o local da consumação do crime; em caso de tentativa, o local do último ato de execução. O domicílio do réu (art. 72) é critério subsidiário, aplicável apenas quando o local da infração for desconhecido."
},
{
  "id": "penal_53",
  "disciplina": "penal",
  "topico": "Crimes contra a Administração Pública - Peculato",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "O peculato, previsto no art. 312 do Código Penal, consiste em:",
  "alternativas": [
    { "letra": "A", "texto": "Apropriar-se o funcionário público de dinheiro, valor ou qualquer bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo, em proveito próprio ou alheio." },
    { "letra": "B", "texto": "Exigir o funcionário público, para si ou para outrem, vantagem indevida, em razão da função.", "comentario": "Essa conduta descreve a CONCUSSÃO (Art. 316 do CP), e não o peculato, que envolve apropriação ou desvio de bem já na posse do agente, sem exigência de vantagem."},
    { "letra": "C", "texto": "Oferecer o particular vantagem indevida a funcionário público, para determiná-lo a praticar ato de ofício.", "comentario": "Essa conduta descreve a CORRUPÇÃO ATIVA (Art. 333 do CP), praticada por particular contra a Administração, e não o peculato, que é crime próprio de funcionário público."},
    { "letra": "D", "texto": "Retardar o funcionário público, por interesse pessoal, ato de ofício, sem qualquer apropriação de bem ou valor.", "comentario": "Essa conduta descreve a PREVARICAÇÃO (Art. 319 do CP), que não envolve apropriação de bem ou valor, ao contrário do peculato."}
  ],
  "gabarito": "A",
  "artigo": "Art. 312 do CP",
  "justificativa": "O peculato é a apropriação ou desvio, pelo funcionário público, de bem de que tem posse em razão do cargo, em proveito próprio ou alheio. As demais condutas descrevem, respectivamente, concussão (B), corrupção ativa (C) e prevaricação (D)."
},
{
  "id": "penal_54",
  "disciplina": "penal",
  "topico": "Crimes contra a Administração Pública - Concussão x Corrupção Passiva",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "A principal diferença entre a concussão (art. 316 do CP) e a corrupção passiva (art. 317 do CP) reside em:",
  "alternativas": [
    { "letra": "A", "texto": "Na concussão, o funcionário público EXIGE a vantagem indevida (imposição, coerção); na corrupção passiva, o funcionário SOLICITA ou RECEBE a vantagem, ou aceita a promessa dela, sem exigência coercitiva." },
    { "letra": "B", "texto": "A concussão só pode ser praticada por particular, enquanto a corrupção passiva só pode ser praticada por funcionário público.", "comentario": "Ambos os crimes são PRÓPRIOS de funcionário público (Arts. 316 e 317 do CP); a concussão não pode ser praticada por particular, invertendo o que afirma esta alternativa."},
    { "letra": "C", "texto": "Não há qualquer diferença prática entre os dois tipos penais, sendo sinônimos.", "comentario": "Há diferença relevante entre os tipos: a concussão envolve exigência (coerção implícita) da vantagem, enquanto a corrupção passiva envolve solicitação, recebimento ou aceitação de promessa, sem essa coerção."},
    { "letra": "D", "texto": "A concussão exige, necessariamente, resultado morte da vítima.", "comentario": "A concussão não exige qualquer resultado morte; consuma-se com a simples exigência da vantagem indevida pelo funcionário público, independentemente de qualquer resultado sobre a vítima."}
  ],
  "gabarito": "A",
  "artigo": "Arts. 316 e 317 do CP",
  "justificativa": "A concussão envolve EXIGÊNCIA (verbo de imposição, coerção implícita) da vantagem indevida pelo funcionário público; a corrupção passiva envolve SOLICITAÇÃO ou RECEBIMENTO (ou aceitação de promessa), sem a coerção característica da concussão. Ambos os crimes são próprios de funcionário público."
},
{
  "id": "penal_55",
  "disciplina": "penal",
  "topico": "Crimes contra a Administração Pública - Corrupção Ativa",
  "peso": 2,
  "dificuldade": "medio",
  "enunciado": "A corrupção ativa, prevista no art. 333 do Código Penal, é crime que se consuma:",
  "alternativas": [
    { "letra": "A", "texto": "Com a simples oferta ou promessa de vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício, independentemente de aceitação pelo funcionário." },
    { "letra": "B", "texto": "Apenas quando o funcionário público efetivamente aceita e pratica o ato solicitado.", "comentario": "A corrupção ativa é crime formal, que se consuma com a mera oferta ou promessa, independentemente de aceitação ou prática do ato pelo funcionário." },
    { "letra": "C", "texto": "Apenas quando o valor da vantagem oferecida ultrapassa determinado montante fixado em lei.", "comentario": "Não há valor mínimo fixado em lei para a configuração do crime; qualquer vantagem indevida, de qualquer montante, é suficiente." },
    { "letra": "D", "texto": "Somente quando praticada por funcionário público contra outro funcionário público.", "comentario": "A corrupção ativa é tipicamente praticada por particular (ou por funcionário agindo como particular) contra a Administração Pública, não exigindo que o autor seja funcionário." }
  ],
  "gabarito": "A",
  "artigo": "Art. 333 do CP",
  "justificativa": "A corrupção ativa é crime formal, que se consuma com a simples oferta ou promessa de vantagem indevida, independentemente de sua aceitação ou da efetiva prática do ato pelo funcionário público — é praticada por particular (ou funcionário público agindo como particular) contra a Administração Pública."
},
{
  "id": "penal_56",
  "disciplina": "penal",
  "topico": "Crimes contra a Administração Pública - Prevaricação",
  "peso": 2,
  "dificuldade": "dificil",
  "enunciado": "A prevaricação, prevista no art. 319 do Código Penal, consiste em o funcionário público retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para:",
  "alternativas": [
    { "letra": "A", "texto": "Satisfazer interesse ou sentimento pessoal." },
    { "letra": "B", "texto": "Obter, necessariamente, vantagem econômica direta.", "comentario": "O elemento subjetivo é satisfazer interesse ou sentimento pessoal, que pode não ter natureza econômica (amizade, capricho, vingança, etc.), diferindo de crimes como o peculato." },
    { "letra": "C", "texto": "Cumprir ordem superior manifestamente legal.", "comentario": "Cumprir ordem legal não configura prevaricação; o crime pressupõe retardamento ou ato contrário à lei, motivado por interesse pessoal, não o cumprimento de ordem legítima." },
    { "letra": "D", "texto": "Beneficiar exclusivamente terceiros estranhos à Administração Pública, nunca a si mesmo.", "comentario": "O próprio interesse pessoal do agente (não apenas de terceiros) também configura o elemento subjetivo do crime." }
  ],
  "gabarito": "A",
  "artigo": "Art. 319 do CP",
  "justificativa": "A prevaricação exige elemento subjetivo específico: satisfazer interesse ou sentimento pessoal (não necessariamente vantagem econômica, podendo ser mera animosidade, amizade ou capricho) — diferindo do peculato e da corrupção, que envolvem vantagem patrimonial indevida."
},
{
  "id": "penal_57",
  "disciplina": "penal",
  "topico": "Crimes contra a Fé Pública - Moeda Falsa",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "O crime de moeda falsa, previsto no art. 289 do Código Penal, consiste em:",
  "alternativas": [
    { "letra": "A", "texto": "Falsificar, fabricando-a ou alterando-a, moeda metálica ou papel-moeda de curso legal no país ou no estrangeiro." },
    { "letra": "B", "texto": "Apenas utilizar, de boa-fé, moeda falsa recebida de terceiro sem qualquer intenção fraudulenta.", "comentario": "A mera utilização de boa-fé, sem dolo, não configura o crime do art. 289, que exige a conduta de falsificar (fabricar ou alterar) a moeda." },
    { "letra": "C", "texto": "Colecionar cédulas antigas fora de circulação para fins numismáticos.", "comentario": "O colecionismo lícito de cédulas fora de circulação, para fins numismáticos, não configura o crime, que exige a falsificação de moeda de curso legal." },
    { "letra": "D", "texto": "Emitir títulos de crédito de empresa privada sem lastro financeiro.", "comentario": "Essa conduta pode configurar outro ilícito (como estelionato), mas não o crime de moeda falsa, que protege especificamente a moeda metálica ou papel-moeda de curso legal." }
  ],
  "gabarito": "A",
  "artigo": "Art. 289 do CP",
  "justificativa": "O crime de moeda falsa protege a fé pública relacionada à confiança na circulação monetária, abrangendo a fabricação ou alteração de moeda metálica ou papel-moeda, de curso legal no país ou no estrangeiro — é crime contra a fé pública, não contra o patrimônio."
},
{
  "id": "penal_58",
  "disciplina": "penal",
  "topico": "Crimes contra a Fé Pública - Uso de Documento Falso",
  "peso": 2,
  "dificuldade": "medio",
  "enunciado": "O crime de uso de documento falso, previsto no art. 304 do Código Penal, pune quem:",
  "alternativas": [
    { "letra": "A", "texto": "Fizer uso de qualquer dos papéis falsificados ou alterados a que se referem os artigos relativos à falsificação de documentos (públicos, particulares ou outros)." },
    { "letra": "B", "texto": "Apenas fabrica o documento falso, sem chegar a utilizá-lo.", "comentario": "Fabricar sem usar configura o crime de falsificação (arts. 297-299), e não o de USO do art. 304, que exige a efetiva utilização do documento já falsificado." },
    { "letra": "C", "texto": "Perde um documento verdadeiro por descuido, sem qualquer intenção fraudulenta.", "comentario": "A perda acidental de documento verdadeiro, sem dolo, não configura nenhum ilícito penal, muito menos o uso de documento falso." },
    { "letra": "D", "texto": "Solicita a segunda via de documento extraviado junto ao órgão competente.", "comentario": "Essa é uma conduta lícita e regular perante o órgão competente, não configurando qualquer crime." }
  ],
  "gabarito": "A",
  "artigo": "Art. 304 do CP",
  "justificativa": "O uso de documento falso (art. 304) pune quem utiliza documento já falsificado ou alterado por outrem (ou por si mesmo), recebendo a mesma pena cominada à falsificação. Não se confunde com a própria falsificação (arts. 297-299), que pune o ato de forjar ou alterar o documento."
},
{
  "id": "penal_59",
  "disciplina": "penal",
  "topico": "Crimes contra a Fé Pública - Falsa Identidade",
  "peso": 2,
  "dificuldade": "dificil",
  "enunciado": "O crime de falsa identidade, previsto no art. 307 do Código Penal, consiste em atribuir-se ou atribuir a terceiro falsa identidade para obter vantagem, em proveito próprio ou alheio, ou para causar dano a outrem, sendo correto afirmar que:",
  "alternativas": [
    { "letra": "A", "texto": "A pena é aplicada apenas se o fato não constituir elemento de crime mais grave, tendo, portanto, caráter subsidiário expresso." },
    { "letra": "B", "texto": "É crime que exige, necessariamente, a falsificação material de um documento físico.", "comentario": "A falsa identidade pode ser praticada verbalmente, sem qualquer falsificação documental, bastando a atribuição de identidade falsa a si ou a terceiro." },
    { "letra": "C", "texto": "Somente pode ser praticado contra autoridade policial, nunca contra particulares.", "comentario": "O crime pode ser praticado contra qualquer pessoa, não estando restrito a autoridades policiais." },
    { "letra": "D", "texto": "Exige dano patrimonial efetivo e comprovado à vítima para sua consumação.", "comentario": "O crime se consuma com a mera obtenção de vantagem ou intenção de causar dano, independentemente de dano patrimonial efetivo e comprovado." }
  ],
  "gabarito": "A",
  "artigo": "Art. 307 do CP",
  "justificativa": "O art. 307 tem cláusula de subsidiariedade expressa (\"se o fato não constitui elemento de crime mais grave\"): a falsa identidade não exige falsificação documental (pode ser verbal), pode ser praticada contra qualquer pessoa, e não exige dano patrimonial efetivo — basta a intenção de obter vantagem ou causar dano."
},
{
  "id": "penal_60",
  "disciplina": "penal",
  "topico": "Crimes contra a Administração Pública (Particular) - Desacato",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "O crime de desacato, previsto no art. 331 do Código Penal, consiste em desacatar funcionário público no exercício da função ou em razão dela. Sobre esse crime, é correto afirmar que:",
  "alternativas": [
    { "letra": "A", "texto": "O STF já decidiu pela sua constitucionalidade e vigência no ordenamento jurídico brasileiro, afastando o entendimento de órgãos internacionais que recomendavam sua descriminalização." },
    { "letra": "B", "texto": "Foi expressamente revogado pela Lei 13.869/2019 (Lei de Abuso de Autoridade).", "comentario": "O crime de desacato não foi revogado; o STF, na ADPF 496 e julgados correlatos, reafirmou sua constitucionalidade e vigência no ordenamento brasileiro." },
    { "letra": "C", "texto": "Só pode ser praticado por outro agente público contra o funcionário desacatado.", "comentario": "O desacato é crime comum, podendo ser praticado por qualquer pessoa, não exclusivamente por outro agente público." },
    { "letra": "D", "texto": "Exige, necessariamente, agressão física ao funcionário público.", "comentario": "O crime se consuma com ofensa verbal ou gestual ao funcionário no exercício da função, não exigindo agressão física." }
  ],
  "gabarito": "A",
  "artigo": "Art. 331 do CP",
  "justificativa": "O STF (ADPF 496 e HC julgados correlatos) reafirmou a constitucionalidade e a vigência do crime de desacato no Brasil, apesar de recomendações de órgãos internacionais (como a Comissão Interamericana de Direitos Humanos) pela sua descriminalização. O crime pune ofensa verbal/gestual, não exigindo agressão física."
},
{
  "id": "penal_61",
  "disciplina": "penal",
  "topico": "Crimes contra a Administração Pública (Particular) - Desobediência",
  "peso": 2,
  "dificuldade": "medio",
  "enunciado": "O crime de desobediência, previsto no art. 330 do Código Penal, consiste em desobedecer a ordem legal de funcionário público. É correto afirmar que:",
  "alternativas": [
    { "letra": "A", "texto": "Não se configura o crime quando a lei já prevê sanção administrativa ou civil específica para o descumprimento, sem ressalva expressa quanto à cumulação com a sanção penal." },
    { "letra": "B", "texto": "Configura-se em qualquer hipótese de descumprimento de ordem de funcionário público, mesmo quando há sanção administrativa específica prevista, sem qualquer distinção.", "comentario": "Havendo sanção administrativa ou civil específica para o descumprimento, sem ressalva expressa de cumulação com a penal, a jurisprudência majoritária afasta o crime, para evitar bis in idem." },
    { "letra": "C", "texto": "Exige que a ordem desobedecida seja necessariamente ilegal.", "comentario": "É o oposto: a ordem desobedecida deve ser LEGAL para configurar o crime de desobediência." },
    { "letra": "D", "texto": "Só pode ser praticado por funcionário público contra outro funcionário público.", "comentario": "O crime é próprio de particular (ou de funcionário fora do exercício da função) contra a Administração, não exigindo que o autor seja funcionário público." }
  ],
  "gabarito": "A",
  "artigo": "Art. 330 do CP",
  "justificativa": "A jurisprudência majoritária entende que, havendo sanção administrativa ou civil específica para o descumprimento da ordem, sem ressalva expressa de cumulação com sanção penal, não se configura o crime de desobediência — evitando bis in idem. A ordem desobedecida deve ser LEGAL, e o crime é próprio de particular (ou funcionário fora da função) contra a Administração."
},
{
  "id": "penal_62",
  "disciplina": "penal",
  "topico": "Crimes contra a Administração Pública (Particular) - Resistência",
  "peso": 2,
  "dificuldade": "dificil",
  "enunciado": "O crime de resistência, previsto no art. 329 do Código Penal, consiste em opor-se à execução de ato legal, mediante violência ou ameaça a funcionário competente para executá-lo. A pena é aumentada:",
  "alternativas": [
    { "letra": "A", "texto": "Se o ato, em razão da resistência, não se executa." },
    { "letra": "B", "texto": "Se a resistência for praticada sem violência, apenas com palavras ofensivas.", "comentario": "A resistência exige justamente violência ou grave ameaça; sem esses elementos pode configurar desacato, e não há essa causa de aumento vinculada à ausência de violência." },
    { "letra": "C", "texto": "Sempre que houver mais de um funcionário público presente no local.", "comentario": "A mera presença de mais de um funcionário público não é causa de aumento prevista em lei." },
    { "letra": "D", "texto": "Apenas quando a resistência ocorrer em via pública.", "comentario": "O local da ocorrência (via pública) não é a causa de aumento prevista no §1º do art. 329; o aumento decorre da não execução do ato em razão da resistência." }
  ],
  "gabarito": "A",
  "artigo": "Art. 329, §1º do CP",
  "justificativa": "O §1º do art. 329 prevê causa de aumento de pena quando o ato, em razão da resistência, não se executa. A resistência exige violência ou grave ameaça (diferente do desacato, que não exige violência) contra ato LEGAL sendo executado."
},
{
  "id": "penal_63",
  "disciplina": "penal",
  "topico": "Crimes contra a Administração Pública (Particular) - Tráfico de Influência",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "O crime de tráfico de influência, previsto no art. 332 do Código Penal, consiste em:",
  "alternativas": [
    { "letra": "A", "texto": "Solicitar, exigir, cobrar ou obter vantagem ou promessa de vantagem, a pretexto de influir em ato praticado por funcionário público no exercício da função." },
    { "letra": "B", "texto": "Exercer, licitamente, atividade de lobby regulamentado perante órgãos públicos.", "comentario": "O lobby lícito e regulamentado é atividade legal, distinta da conduta criminosa de solicitar, exigir, cobrar ou obter vantagem a pretexto de influir em ato de funcionário público." },
    { "letra": "C", "texto": "Ser praticado exclusivamente por funcionário público contra outro funcionário público.", "comentario": "O tráfico de influência é tipicamente praticado por particular que alega (ou efetivamente tem) influência sobre funcionário público, não exigindo que o autor seja também funcionário." },
    { "letra": "D", "texto": "Exigir prova de que o funcionário público efetivamente praticou o ato influenciado, sob pena de atipicidade.", "comentario": "O crime independe de o funcionário influenciado ter efetivamente praticado o ato; basta a solicitação/obtenção da vantagem a pretexto de influência, real ou alegada." }
  ],
  "gabarito": "A",
  "artigo": "Art. 332 do CP",
  "justificativa": "O tráfico de influência é praticado, em regra, por particular que se vale (ou alega se valer) de influência sobre funcionário público para obter vantagem, sendo irrelevante se a influência é real ou apenas alegada, e independentemente de o funcionário influenciado ter efetivamente praticado o ato — a pena é aumentada de metade se o agente alega que a vantagem também se destina ao funcionário."
},
{
  "id": "penal_64",
  "disciplina": "penal",
  "topico": "Processual Penal - Liberdade Provisória",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Segundo o art. 310 do CPP, o juiz, ao receber o auto de prisão em flagrante, poderá relaxar a prisão ilegal, converter a prisão em flagrante em preventiva, ou conceder liberdade provisória, com ou sem fiança. A concessão de liberdade provisória SEM fiança é cabível, entre outras hipóteses, quando:",
  "alternativas": [
    { "letra": "A", "texto": "O juiz verificar que o agente praticou o fato em situação de exclusão de ilicitude (legítima defesa, estado de necessidade, estrito cumprimento do dever legal ou exercício regular de direito)." },
    { "letra": "B", "texto": "O crime for de tráfico de drogas, hipótese em que a liberdade provisória é sempre concedida automaticamente.", "comentario": "Não há concessão automática no tráfico de drogas; a análise depende dos requisitos do art. 312 do CPP, avaliados caso a caso." },
    { "letra": "C", "texto": "O réu for reincidente específico em crime hediondo.", "comentario": "Essa condição, ao contrário, dificulta ou pode impedir a concessão de liberdade provisória, não é hipótese que a autoriza." },
    { "letra": "D", "texto": "Não há previsão de liberdade provisória sem fiança no ordenamento processual penal brasileiro.", "comentario": "Existe previsão expressa no art. 310, §1º, do CPP, para concessão de liberdade provisória sem fiança." }
  ],
  "gabarito": "A",
  "artigo": "Art. 310, §1º do CPP",
  "justificativa": "Quando o juiz verifica, pelo auto de prisão em flagrante, que o agente agiu amparado por excludente de ilicitude, deve conceder liberdade provisória (podendo, inclusive, deixar de fixar fiança), sem prejuízo do eventual arbitramento de medidas cautelares diversas da prisão."
},
{
  "id": "penal_65",
  "disciplina": "penal",
  "topico": "Processual Penal - Vedação à Fiança",
  "peso": 2,
  "dificuldade": "dificil",
  "enunciado": "Segundo o art. 323 do CPP, não será concedida fiança nos crimes de:",
  "alternativas": [
    { "letra": "A", "texto": "Racismo, tortura, tráfico ilícito de entorpecentes, terrorismo e crimes hediondos, além dos praticados por grupos armados contra a ordem constitucional e o Estado Democrático." },
    { "letra": "B", "texto": "Furto simples, em qualquer hipótese, independentemente do valor da coisa subtraída.", "comentario": "O furto simples não consta do rol taxativo do art. 323 do CPP como crime inafiançável." },
    { "letra": "C", "texto": "Todos os crimes culposos, sem exceção.", "comentario": "Os crimes culposos, em regra, admitem fiança; não estão incluídos no rol de vedação do art. 323." },
    { "letra": "D", "texto": "Contravenções penais em geral.", "comentario": "As contravenções penais, em regra, admitem fiança; não constam do rol taxativo do art. 323." }
  ],
  "gabarito": "A",
  "artigo": "Art. 323 do CPP",
  "justificativa": "O art. 323 veda a fiança nos crimes de racismo, tortura, tráfico ilícito de entorpecentes e drogas afins, terrorismo, crimes hediondos, e nos praticados por grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático. Importante: a vedação à fiança não impede, por si só, a liberdade provisória SEM fiança."
},
{
  "id": "penal_66",
  "disciplina": "penal",
  "topico": "Processual Penal - Peritos (Auxiliares da Justiça)",
  "peso": 1,
  "dificuldade": "dificil",
  "enunciado": "Segundo o art. 279 do CPP, NÃO podem ser peritos:",
  "alternativas": [
    { "letra": "A", "texto": "Os que já tiverem servido como testemunhas no processo, ou opinado anteriormente sobre o objeto da perícia, além de analfabetos e menores de 21 anos." },
    { "letra": "B", "texto": "Qualquer profissional com curso superior completo, independentemente de outras circunstâncias.", "comentario": "Ter curso superior não é, por si só, causa de impedimento; o impedimento decorre das situações específicas do art. 279 (ter testemunhado, opinado antes, ser analfabeto ou menor de 21 anos)." },
    { "letra": "C", "texto": "Servidores públicos, em qualquer hipótese.", "comentario": "A condição de servidor público não é, por si só, causa de impedimento para atuar como perito." },
    { "letra": "D", "texto": "Pessoas maiores de 60 anos, por presunção de incapacidade técnica.", "comentario": "Não há essa vedação por idade avançada; o impedimento etário previsto na lei recai sobre os MENORES de 21 anos, não sobre maiores de 60." }
  ],
  "gabarito": "A",
  "artigo": "Art. 279 do CPP",
  "justificativa": "O art. 279 impede que sejam peritos aqueles sujeitos a certas interdições de direitos do CP, os que já testemunharam ou opinaram sobre o objeto da perícia no mesmo processo, os analfabetos e os menores de 21 anos — o perito, mesmo não oficial, sujeita-se à disciplina judiciária (art. 275)."
},
{
  "id": "penal_67",
  "disciplina": "penal",
  "topico": "Processual Penal - Intérprete como Auxiliar da Justiça",
  "peso": 1,
  "dificuldade": "medio",
  "enunciado": "Segundo o art. 281 do CPP, o intérprete, no processo penal, é:",
  "alternativas": [
    { "letra": "A", "texto": "Equiparado, para todos os efeitos, aos peritos, sujeitando-se às mesmas regras de impedimento e disciplina judiciária." },
    { "letra": "B", "texto": "Uma figura distinta, sem qualquer equiparação normativa aos demais auxiliares da justiça.", "comentario": "O art. 281 equipara expressamente o intérprete aos peritos, para todos os efeitos, não havendo tratamento normativo isolado." },
    { "letra": "C", "texto": "Dispensável em qualquer hipótese, mesmo quando o interrogado não domina o idioma português.", "comentario": "O intérprete é indispensável quando o interrogado não domina o idioma português, sob pena de nulidade do ato processual." },
    { "letra": "D", "texto": "Nomeado exclusivamente pelo Ministério Público, nunca pelo juiz.", "comentario": "A nomeação do intérprete, assim como a dos peritos, compete à autoridade judicial, e não ao Ministério Público." }
  ],
  "gabarito": "A",
  "artigo": "Art. 281 do CPP",
  "justificativa": "O art. 281 equipara o intérprete, para todos os efeitos, aos peritos — sujeitando-se, portanto, às mesmas causas de impedimento (art. 279) e à disciplina judiciária (art. 275), como auxiliar da justiça."
}
];
