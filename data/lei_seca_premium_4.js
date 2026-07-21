const LEI_SECA_PREMIUM_4 = {
  decks: [
    {
      id: 'const_remedios',
      disciplina: 'constitucional',
      nome: 'Constituição - Remédios Constitucionais',
      sigla: 'CF/88 - Art. 5º',
      icon: '📜',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: 'Remédios Constitucionais (Art. 5º)',
          artigos: [
            {
              numero: 'Inciso LXVIII (Habeas Corpus)',
              texto: 'Conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder;',
              destaques: ['liberdade de locomoção', 'ilegalidade ou abuso de poder']
            },
            {
              numero: 'Inciso LXIX (Mandado de Segurança)',
              texto: 'Conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público;',
              destaques: ['proteger direito líquido e certo', 'não amparado por habeas corpus ou habeas data']
            },
            {
              numero: 'Inciso LXXI (Mandado de Injunção)',
              texto: 'Conceder-se-á mandado de injunção sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania;',
              destaques: ['falta de norma regulamentadora', 'torne inviável o exercício dos direitos']
            },
            {
              numero: 'Inciso LXXII (Habeas Data)',
              texto: 'Conceder-se-á habeas data:\na) para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público;\nb) para a retificação de dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo;',
              destaques: ['conhecimento de informações relativas à pessoa do impetrante', 'retificação de dados']
            }
          ]
        }
      ]
    },
    {
      id: 'penal_patrimonio',
      disciplina: 'penal',
      nome: 'Direito Penal - Crimes Contra o Patrimônio',
      sigla: 'CP - Furto e Roubo',
      icon: '💰',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Furto e Roubo (Art. 155 e 157)',
          artigos: [
            {
              numero: 'Art. 155 (Furto)',
              texto: 'Subtrair, para si ou para outrem, coisa alheia móvel:\nPena - reclusão, de um a quatro anos, e multa.\n§ 1º - A pena aumenta-se de um terço, se o crime é praticado durante o repouso noturno.\n§ 4º - Qualifica o furto (reclusão de 2 a 8 anos):\nI - com destruição ou rompimento de obstáculo à subtração da coisa;\nII - com abuso de confiança, ou mediante fraude, escalada ou destreza;\nIII - com emprego de chave falsa;\nIV - mediante concurso de duas ou mais pessoas.',
              destaques: ['repouso noturno (aumento de 1/3)', 'rompimento de obstáculo', 'abuso de confiança', 'concurso de pessoas']
            },
            {
              numero: 'Art. 157 (Roubo)',
              texto: 'Subtrair coisa móvel alheia, para si ou para outrem, mediante grave ameaça ou violência a pessoa, ou depois de havê-la, por qualquer meio, reduzido à impossibilidade de resistência:\nPena - reclusão, de quatro a dez anos, e multa.',
              destaques: ['mediante grave ameaça ou violência', 'impossibilidade de resistência']
            },
            {
              numero: 'Art. 157, § 2º e § 2º-A (Causas de Aumento do Roubo)',
              texto: 'A pena aumenta-se de 1/3 até metade se há concurso de duas ou mais pessoas ou se a vítima está em serviço de transporte de valores.\nA pena aumenta-se de 2/3 se a violência ou ameaça é exercida com emprego de arma de fogo.\nA pena aplica-se em dobro se a violência ou ameaça é exercida com emprego de arma de fogo de uso restrito ou proibido.',
              destaques: ['arma de fogo (aumenta 2/3)', 'arma de fogo restrito/proibido (aplica em dobro)']
            }
          ]
        }
      ]
    },
    {
      id: 'dh_dudh',
      disciplina: 'dh',
      nome: 'Direitos Humanos - DUDH',
      sigla: 'DUDH (1948)',
      icon: '🕊️',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: 'Declaração Universal dos Direitos Humanos',
          artigos: [
            {
              numero: 'Artigo 5',
              texto: 'Ninguém será submetido à tortura, nem a tratamento ou castigo cruel, desumano ou degradante.',
              destaques: ['Ninguém', 'tortura', 'cruel, desumano ou degradante']
            },
            {
              numero: 'Artigo 9',
              texto: 'Ninguém será arbitrariamente preso, detido ou exilado.',
              destaques: ['arbitrariamente', 'preso, detido ou exilado']
            },
            {
              numero: 'Artigo 11',
              texto: 'Toda pessoa acusada de um ato delituoso tem o direito de ser presumida inocente até que a sua culpabilidade tenha sido provada de acordo com a lei, em julgamento público no qual lhe tenham sido asseguradas todas as garantias necessárias à sua defesa.',
              destaques: ['presumida inocente', 'julgamento público', 'garantias necessárias à defesa']
            }
          ]
        }
      ]
    }
  ]
};
