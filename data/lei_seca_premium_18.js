// lei_seca_premium_18.js - Lei Seca Premium Parte 18 (Licitações e Crime Organizado)
const LEI_SECA_PREMIUM_18 = {
  decks: [
    {
      id: 'lei_licitações',
      disciplina: 'legislacao',
      nome: 'Licitações - Lei 14.133/2021',
      sigla: 'Lei 14.133/21',
      icon: '📑',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Princípios e Modalidades',
          artigos: [
            {
              id: 'art_1_licitações',
              numero: 'Art. 5º – Princípios',
              texto: 'São princípios básicos da licitação: legalidade, impessoalidade, moralidade, igualdade, publicidade, probidade administrativa, vinculação ao edital, julgamento objetivo, entre outros.\n⚠️ NOTA: O princípio da isonomia garante tratamento igualitário a todos os licitantes.',
              destaques: ['legalidade', 'impessoalidade', 'isonomia', 'publicidade']
            },
            {
              id: 'art_2_licitações',
              numero: 'Art. 28 – Modalidades',
              texto: '⚠️ ATENÇÃO: A Lei 8.666/93 foi REVOGADA pela Lei 14.133/2021. As modalidades de licitação atuais são: pregão, concorrência, concurso, leilão e diálogo competitivo. Não existem mais "tomada de preços" e "convite".\n⚠️ A escolha da modalidade depende da natureza do objeto e das características da contratação.',
              destaques: ['pregão', 'concorrência', 'concurso', 'leilão', 'diálogo competitivo', 'Lei 8.666/93 revogada']
            }
          ]
        }
      ]
    },
    {
      id: 'lei_organizacao_criminosa',
      disciplina: 'legislacao',
      nome: 'Organização Criminosa - Lei 12.850/2013',
      sigla: 'Lei 12.850/13',
      icon: '🚨',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Definição e Sanções',
          artigos: [
            {
              id: 'art_1_org_crim',
              numero: 'Art. 1º, §1º – Conceito',
              texto: 'Organização criminosa é a associação de 4 (quatro) ou mais pessoas, estruturalmente ordenada e caracterizada pela divisão de tarefas, com objetivo de obter vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 anos, ou que sejam de caráter transnacional.\n⚠️ NOTA: A pena pode ser aumentada se houver emprego de arma ou se a organização for internacional.',
              destaques: ['4 (quatro) ou mais pessoas', 'divisão de tarefas', 'aumento de pena']
            },
            {
              id: 'art_2_org_crim',
              numero: 'Art. 2º – Sanções',
              texto: 'A pena varia de 3 a 8 anos de reclusão e multa, podendo ser aumentada em casos especiais.\n⚠️ NOTA: A pessoa que colabora com a investigação pode receber redução de pena.',
              destaques: ['3 a 8 anos', 'possibilidade de redução']
            }
          ]
        }
      ]
    }
  ]
};
