// lei_seca_premium_18.js - Lei Seca Premium Parte 18 (Licitações e Crime Organizado)
const LEI_SECA_PREMIUM_18 = {
  decks: [
    {
      id: 'lei_licitações',
      disciplina: 'legislacao',
      nome: 'Licitações - Lei 8.666/93',
      sigla: 'Lei 8.666/93',
      icon: '📑',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Princípios e Modalidades',
          artigos: [
            {
              id: 'art_1_licitações',
              numero: 'Art. 3º – Princípios',
              texto: 'São princípios básicos da licitação: legalidade, impessoalidade, moralidade, igualdade, publicidade, probidade administrativa, vinculação ao julgamento, julgamento objetivo, entre outros.\n⚠️ NOTA: O princípio da isonomia garante tratamento igualitário a todos os licitantes.',
              destaques: ['legalidade', 'impessoalidade', 'isonomia', 'publicidade']
            },
            {
              id: 'art_2_licitações',
              numero: 'Art. 7º – Modalidades',
              texto: 'As modalidades de licitação são: concorrência, tomada de preços, convite, concurso e leilão. Cada uma tem requisitos e limites de valor específicos.\n⚠️ NOTA: A escolha da modalidade depende do valor estimado da contratação.',
              destaques: ['concorrência', 'tomada de preços', 'convite', 'valor estimado']
            }
          ]
        }
      ]
    },
    {
      id: 'lei_organizacao_criminosa',
      disciplina: 'legislacao',
      nome: 'Organização Criminosa - Lei 9.815/99',
      sigla: 'Lei 9.815/99',
      icon: '🚨',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Definição e Sanções',
          artigos: [
            {
              id: 'art_1_org_crim',
              numero: 'Art. 1º – Conceito',
              texto: 'Organização criminosa é a associação de duas ou mais pessoas com objetivo de delinquência.\n⚠️ NOTA: A pena pode ser aumentada se houver emprego de arma ou se a organização for internacional.',
              destaques: ['associação', 'delinquência', 'aumento de pena']
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
