const LEI_SECA_PREMIUM_12 = {
  decks: [
    {
      id: 'cp_patrimonio',
      disciplina: 'penal',
      nome: 'CP - Crimes contra o Patrimônio',
      sigla: 'CP - Arts. 155-157',
      icon: '💰',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Furto e Roubo',
          artigos: [
            {
              numero: 'Art. 155 (Furto)',
              texto: 'Subtrair, para si ou para outrem, coisa alheia móvel.\nPena: reclusão, 1 a 4 anos, e multa.\n\n§ 1º (Furto Noturno): A pena aumenta-se de 1/3 se o crime é praticado durante o repouso noturno.\n§ 2º (Furto Privilegiado): Se o criminoso é primário, e é de pequeno valor a coisa furtada, o juiz pode substituir a reclusão por detenção, diminuí-la de 1/3 a 2/3, ou aplicar somente multa.',
              destaques: ['Subtrair coisa alheia', 'aumenta 1/3 repouso noturno', 'privilegiado: primário + pequeno valor (até 1 salário mínimo)']
            },
            {
              numero: 'Art. 155, §4º (Furto Qualificado)',
              texto: 'A pena é de reclusão de 2 a 8 anos se cometido:\nI - com destruição ou rompimento de obstáculo à subtração;\nII - com abuso de confiança, fraude, escalada ou destreza;\nIII - com emprego de chave falsa;\nIV - mediante concurso de 2 ou mais pessoas.',
              destaques: ['reclusão 2 a 8 anos', 'rompimento obstáculo', 'abuso de confiança, fraude', 'concurso de pessoas']
            },
            {
              numero: 'Art. 157 (Roubo)',
              texto: 'Subtrair coisa alheia móvel, mediante VIOLÊNCIA ou GRAVE AMEAÇA a pessoa, ou depois de havê-la reduzido à impossibilidade de resistência.\nPena: reclusão, 4 a 10 anos, e multa.\n\n§ 1º (Roubo Impróprio): Mesma pena para quem, logo DEPOIS de subtraída a coisa, emprega violência/ameaça a fim de assegurar a impunidade do crime ou a detenção da coisa.',
              destaques: ['mediante VIOLÊNCIA ou GRAVE AMEAÇA', 'Roubo Impróprio: violência ocorre LOGO DEPOIS']
            }
          ]
        }
      ]
    },
    {
      id: 'cf_nacionalidade',
      disciplina: 'constitucional',
      nome: 'CF/88 - Nacionalidade',
      sigla: 'CF/88 - Art. 12',
      icon: '🇧🇷',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Brasileiros Natos e Naturalizados',
          artigos: [
            {
              numero: 'Art. 12, I (Natos)',
              texto: 'São brasileiros natos:\na) Os nascidos no Brasil (jus soli), AINDA QUE de pais estrangeiros, DESDE QUE estes não estejam a serviço de seu país.\nb) Os nascidos no estrangeiro, de pai ou mãe brasileira, desde que um deles esteja a serviço do Brasil.\nc) Os nascidos no estrangeiro, de pai ou mãe brasileira, se registrados em repartição brasileira competente ou venham a residir no Brasil e optem, após a maioridade, pela nacionalidade.',
              destaques: ['Nascidos no Brasil, salvo se pais estrangeiros a serviço de seu país', 'pais a serviço do Brasil = nato']
            },
            {
              numero: 'Art. 12, §3º (Cargos Privativos de Nato)',
              texto: 'São privativos de brasileiro NATO os cargos:\n1. Presidente e Vice-Presidente da República;\n2. Presidente da Câmara dos Deputados;\n3. Presidente do Senado Federal;\n4. Ministro do Supremo Tribunal Federal (STF);\n5. Carreira diplomática;\n6. Oficial das Forças Armadas;\n7. Ministro de Estado da Defesa.\n(Mnemônico: MP3.COM)',
              destaques: ['Presidente/Vice', 'Pres. Câmara e Senado', 'Ministros do STF', 'Oficial Forças Armadas', 'MP3.COM']
            }
          ]
        }
      ]
    },
    {
      id: 'crimes_licitacao',
      disciplina: 'legislacao',
      nome: 'Crimes em Licitações e Contratos',
      sigla: 'Lei 14.133/21',
      icon: '📄',
      destaque: false,
      peso: 1,
      secoes: [
        {
          titulo: 'Crimes inseridos no Código Penal',
          artigos: [
            {
              numero: 'Art. 337-F (Frustração do Caráter Competitivo)',
              texto: 'Frustrar ou fraudar, com o intuito de obter para si ou para outrem vantagem decorrente da adjudicação do objeto da licitação, o caráter competitivo do processo licitatório.\nPena: Reclusão, de 4 a 8 anos, e multa.',
              destaques: ['Frustrar caráter competitivo', 'obter vantagem da adjudicação', 'reclusão de 4 a 8 anos']
            },
            {
              numero: 'Art. 337-I (Impedimento/Perturbação na Licitação)',
              texto: 'Impedir, perturbar ou fraudar a realização de qualquer ato de processo licitatório.\nPena: Detenção, de 6 meses a 3 anos, e multa.\n⚠️ Crime de menor potencial ofensivo / menor gravidade.',
              destaques: ['Impedir, perturbar ou fraudar a realização do ato', 'Detenção de 6 meses a 3 anos']
            }
          ]
        }
      ]
    }
  ]
};
