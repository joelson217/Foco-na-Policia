const LEI_SECA_PREMIUM_16 = {
  decks: [
    {
      id: 'lei_abuso',
      disciplina: 'legislacao',
      nome: 'Abuso de Autoridade - Lei 13.869/19',
      sigla: 'Lei 13.869/19',
      icon: '👔',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Sujeito Ativo, Dolo e Efeitos',
          artigos: [
            {
              id: 'art_1_abuso_dolo',
              numero: 'Dolo Específico (Art. 1º, §1º)',
              texto: 'Os crimes desta Lei exigem dolo específico, caracterizado pela finalidade de:\n1) prejudicar outrem;\n2) beneficiar a si mesmo ou a terceiro;\n3) por mero capricho ou satisfação pessoal.\n⚠️ NOTA: A divergência na interpretação de lei ou na avaliação de fatos e provas NÃO configura abuso de autoridade (hermenêutica).',
              destaques: ['exige dolo específico', 'prejudicar outrem ou beneficiar si/terceiro', 'mero capricho ou satisfação pessoal', 'divergência de interpretação NÃO é abuso']
            },
            {
              id: 'art_2_abuso_sujeito',
              numero: 'Sujeito Ativo (Art. 2º)',
              texto: 'Qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, dos Estados, do DF e dos Municípios, incluindo:\n- Militares ou pessoas a eles equiparadas;\n- Membros do Poder Judiciário e do Ministério Público;\n- Membros dos Poderes Legislativo e Executivo.',
              destaques: ['Qualquer agente público (servidor ou não)', 'todos os Poderes da União, Estados, DF e Municípios', 'Judiciário, MP e Legislativo inclusos']
            },
            {
              id: 'art_4_abuso_efeitos',
              numero: 'Efeitos da Condenação (Art. 4º)',
              texto: 'São efeitos da condenação:\nI - tornar certa a obrigação de indenizar o dano;\nII - a inabilitação para o exercício de cargo pelo período de 1 a 5 anos;\nIII - a perda do cargo, mandato ou função pública.\n⚠️ NOTA: Os efeitos II e III são CONDICIONADOS à reincidência em crime de abuso de autoridade e NÃO são automáticos (devem ser declarados motivadamente na sentença).',
              destaques: ['indenizar o dano', 'inabilitação de 1 a 5 anos', 'perda do cargo', 'NÃO são automáticos (exige reincidência e fundamentação)']
            },
            {
              id: 'art_5_abuso_penas_restritivas',
              numero: 'Penas Restritivas de Direitos (Art. 5º)',
              texto: 'As penas restritivas de direitos substitutivas das privativas de liberdade são:\nI - prestação de serviços à comunidade ou a entidades públicas;\nII - suspensão do exercício do cargo, da função ou do mandato, pelo prazo de 1 a 6 meses, com a perda de vencimentos e vantagens.',
              destaques: ['serviços à comunidade', 'suspensão do cargo de 1 a 6 meses', 'perda de vencimentos durante a suspensão']
            },
            {
              id: 'art_9_abuso_decretar_prisao',
              numero: 'Decretar Prisão sem Requisitos (Art. 9º)',
              texto: 'Decretar medida de privação da liberdade em manifesta desconformidade com as hipóteses legais.\nPena: detenção de 1 a 4 anos e multa.\nIncorre na mesma pena a autoridade judiciária que, dentro do prazo legal, deixa de relaxar prisão manifestamente ilegal, de substituir a preventiva por medida menos gravosa ou de conceder liberdade provisória.',
              destaques: ['decretar prisão ilegalmente', 'deixar de relaxar prisão ilegal', 'detenção de 1 a 4 anos']
            },
            {
              id: 'art_22_abuso_domicilio',
              numero: 'Invasão de Domicílio (Art. 22)',
              texto: 'Coagir alguém a admitir a entrada em imóvel ou suas dependências, ou neles penetrar ou permanecer, sem consentimento do ocupante, fora das condições legais.\nPena: detenção de 1 a 4 anos e multa.\n⚠️ NOTA: Incorre na mesma pena quem cumpre mandado de busca e apreensão domiciliar após as 21h ou antes das 5h.',
              destaques: ['entrar ou permanecer sem consentimento', 'cumprir mandado entre 21h e 5h é crime', 'detenção de 1 a 4 anos']
            },
            {
              id: 'art_15_abuso_constrangimento',
              numero: 'Constranger Preso a Se Expor (Art. 15)',
              texto: 'Constranger a vítima ou testemunha, com ameaça de violência ou grave sofrimento, a abrir mão de direitos, ou constranger o preso/detento a: I - exibir-se ou ter seu corpo exibido à curiosidade pública; II - submeter-se a situação vexatória ou a constrangimento não autorizado por lei.',
              destaques: ['exibir preso à curiosidade pública', 'situação vexatória', 'detenção de 1 a 4 anos']
            }
          ]
        }
      ]
    },
    {
      id: 'lei_desarmamento',
      disciplina: 'legislacao',
      nome: 'Estatuto do Desarmamento - Lei 10.826/03',
      sigla: 'Lei 10.826/03',
      icon: '🔫',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Posse, Porte e Disparo de Arma de Fogo',
          artigos: [
            {
              id: 'art_12_des_posse_permitido',
              numero: 'Art. 12 (Posse Irregular de Uso Permitido)',
              texto: 'Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, no interior de sua residência ou dependência desta, ou, ainda no seu local de trabalho, desde que seja o titular ou o responsável legal pelo estabelecimento.\nPena: detenção de 1 a 3 anos e multa.\n⚠️ NOTA: Posse = DENTRO de casa ou do trabalho (se dono). Uso permitido.',
              destaques: ['interior de residência ou trabalho (se dono)', 'uso permitido', 'pena de detenção de 1 a 3 anos']
            },
            {
              id: 'art_14_des_porte_permitido',
              numero: 'Art. 14 (Porte Ilegal de Uso Permitido)',
              texto: 'Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, trazer consigo, ocultar ou manter sob guarda arma de fogo, acessório ou munição, de uso permitido, sem autorização e em desacordo com determinação legal.\nPena: reclusão de 2 a 4 anos e multa.\n⚠️ NOTA: Porte = FORA de casa/trabalho, ou sem ser o dono do local.',
              destaques: ['trazer consigo fora de casa/trabalho', 'uso permitido', 'pena de reclusão de 2 a 4 anos']
            },
            {
              id: 'art_15_des_disparo',
              numero: 'Art. 15 (Disparo de Arma de Fogo)',
              texto: 'Disparar arma de fogo ou acionar munição em lugar habitado ou em suas adjacências, em via pública ou em direção a ela, desde que o fato não constitua crime mais grave (subsidiariedade).\nPena: reclusão de 2 a 4 anos e multa.\n⚠️ NOTA: O crime é inafiançável (na fase policial), mas admite liberdade.',
              destaques: ['lugar habitado ou via pública', 'crime de perigo abstrato', 'caráter subsidiário (se não visar homicídio)']
            },
            {
              id: 'art_16_des_posse_porte_restrito',
              numero: 'Art. 16 (Posse ou Porte de Uso Restrito)',
              texto: 'Possuir, deter, portar, adquirir, fornecer, receber, ter em depósito, transportar, trazer consigo, ocultar, manter sob guarda, de uso RESTRITO, sem autorização.\nPena: reclusão de 3 a 6 anos e multa.\n⚠️ NOTA: É crime hediondo apenas se a arma for de uso PROIBIDO (a de uso restrito deixou de ser hedionda com o Pacote Anticrime).',
              destaques: ['uso restrito', 'reclusão de 3 a 6 anos', '⚠️ apenas uso proibido é HEDIONDO']
            },
            {
              id: 'art_16_p1_des_armas_raspadas',
              numero: 'Art. 16, §1º (Condutas Equiparadas)',
              texto: 'Nas mesmas penas (reclusão de 3 a 6 anos) incorre quem:\n- Suprime ou altera marca, numeração ou sinal de identificação de arma de fogo (arma raspada);\n- Modifica as características de arma de fogo para fins de portabilidade ou eficácia;\n- Porta munição ou acessório sem a arma.',
              destaques: ['arma com numeração raspada ou suprimida', 'modificar características', 'porta munição isoladamente']
            },
            {
              id: 'art_16_p2_des_arma_proibida',
              numero: 'Art. 16, §2º (Uso Proibido)',
              texto: 'Se a arma de fogo, acessório ou munição forem de uso PROIBIDO, a pena é de reclusão de 4 a 12 anos.\n⚠️ NOTA: O porte ou posse de arma de uso proibido (como metralhadoras ou lança-granadas) É CRIME HEDIONDO.',
              destaques: ['arma de uso proibido', 'reclusão de 4 a 12 anos', 'crime HEDIONDO']
            },
            {
              id: 'art_20_des_aumentos',
              numero: 'Causas de Aumento de Pena (Art. 20)',
              texto: 'As penas dos crimes de posse, porte, disparo, comércio e tráfico aumentam-se da METADE se:\n- Forem praticados por integrantes de forças de segurança (art. 144 CF, guardas municipais, policiais penais, etc.);\n- O agente possuir condenação anterior por crime contra a pessoa ou patrimônio.',
              destaques: ['aumento de METADE', 'praticado por forças de segurança', 'antecedentes em crimes contra pessoa/patrimônio']
            }
          ]
        }
      ]
    },
    {
      id: 'lep_faltas_disciplinares',
      disciplina: 'lep',
      nome: 'LEP - Faltas Disciplinares e RDD',
      sigla: 'LEP - Arts. 49-60',
      icon: '🔒',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Faltas Graves e RDD',
          artigos: [
            {
              id: 'art_50_lep_faltas_graves',
              numero: 'Faltas Graves (Art. 50)',
              texto: 'Comete falta grave o condenado à pena privativa de liberdade que:\nI - incitar ou participar de movimento para subverter a ordem ou a disciplina;\nII - fugir;\nIII - possuir, indevidamente, instrumento capaz de ofender a integridade física;\nV - descumprir as condições impostas no regime aberto;\nVII - tiver em sua posse telefone celular ou aparelho que permita comunicação com o exterior.',
              destaques: ['fugir é falta grave', 'subverter a ordem', 'celular ou rádio de comunicação', 'instrumento ofensivo']
            },
            {
              id: 'art_52_lep_rdd_conceito',
              numero: 'RDD: Regime Disciplinar Diferenciado (Art. 52)',
              texto: 'A prática de fato previsto como crime doloso constitui falta grave e, quando cause subversão da ordem ou disciplina internas, sujeita o preso provisório ou condenado ao RDD, com as seguintes características:\n- Duração máxima de até 2 anos (renovável);\n- Recolhimento em cela individual;\n- Visitas quinzenais de 2 pessoas (sem contato físico, em parlatório);\n- Banho de sol de 2 horas diárias (máx 4 presos).',
              destaques: ['falta grave + subversão da ordem', 'duração máxima de até 2 anos', 'cela individual', 'visitas quinzenais sem contato físico']
            },
            {
              id: 'art_52_lep_rdd_lideres',
              numero: 'RDD para Líderes de Facção (Art. 52, §1º e §2º)',
              texto: 'O RDD também se aplica aos presos provisórios ou condenados:\nI - sobre os quais recaiam fundadas suspeitas de envolvimento ou integração em organização criminosa, associação criminosa ou milícia privada;\nII - que apresentem alto risco para a ordem e a segurança do estabelecimento penal ou da sociedade.',
              destaques: ['integração em organização criminosa/milícia', 'alto risco para a ordem e segurança']
            },
            {
              id: 'art_53_lep_sancoes',
              numero: 'Sanções Disciplinares (Art. 53)',
              texto: 'Constituem sanções disciplinares:\nI - advertência verbal;\nII - repreensão;\nIII - suspensão ou restrição de direitos;\nIV - isolamento na própria cela, ou em local adequado, pelo prazo máximo de 30 dias (salvo RDD);\nV - inclusão no regime disciplinar diferenciado (RDD).\n⚠️ NOTA: O Diretor aplica I a IV. O RDD (V) só pode ser aplicado pelo JUIZ.',
              destaques: ['isolamento em cela por no máximo 30 dias', 'Diretor aplica advertência, repreensão e isolamento', 'Juiz aplica o RDD']
            },
            {
              id: 'art_57_lep_proibicao_sancoes',
              numero: 'Garantias no Processo Disciplinar (Art. 57-58)',
              texto: 'Na aplicação das sanções disciplinares, levar-se-á em conta a natureza, as circunstâncias, as consequências do fato, bem como a pessoa do faltoso e seu tempo de prisão.\n⚠️ NOTA: É VEDADA a sanção coletiva. O isolamento celular exige cela com condições adequadas de higiene e aeração.',
              destaques: ['VEDADA sanção coletiva', 'processo administrativo disciplinar (PAD) obrigatório']
            },
            {
              id: 'art_54_lep_juiz_rdd',
              numero: 'Inclusão no RDD: Procedimento (Art. 54)',
              texto: 'A inclusão no RDD dependerá de despacho fundado do JUIZ da execução penal, precedido de representação do Diretor do presídio ou de outra autoridade administrativa. O juiz decidirá no prazo máximo de 15 dias, devendo ouvir previamente o Ministério Público e a Defesa.',
              destaques: ['decisão do JUIZ', 'representação do Diretor', 'ouvida prévia do MP e da Defesa']
            }
          ]
        }
      ]
    }
  ]
};
