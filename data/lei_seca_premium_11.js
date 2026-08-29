const LEI_SECA_PREMIUM_11 = {
  decks: [
    {
      id: 'cpp_inquerito',
      disciplina: 'penal',
      nome: 'CPP - Inquérito Policial',
      sigla: 'CPP - IP',
      icon: '🔍',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Características e Prazos',
          artigos: [
            {
              numero: 'Art. 4º e ss (Características do IP)',
              texto: 'O Inquérito Policial tem natureza administrativa, pré-processual, inquisitiva. É:\n- DISPENSÁVEL (se o MP já tiver provas, não precisa do IP).\n- SIGILOSO (salvo para o advogado, conf. Súmula Vinculante 14).\n- ESCRITO.\n- INDISPONÍVEL para o Delegado (art. 17: o delegado não pode mandar arquivar autos do IP).',
              destaques: ['natureza administrativa e pré-processual', 'Dispensável', 'Sigiloso', 'Indisponível (Delegado não pode arquivar)']
            },
            {
              numero: 'Art. 10 (Prazos do IP - Justiça Estadual)',
              texto: 'Regra Geral do CPP:\n- Preso: 10 dias.\n- Solto: 30 dias.\n(Obs: Na Polícia Federal os prazos são 15 dias preso e 30 dias solto).',
              destaques: ['Preso: 10 dias', 'Solto: 30 dias']
            }
          ]
        }
      ]
    },
    {
      id: 'lei_tortura',
      disciplina: 'legislacao',
      nome: 'Lei de Tortura',
      sigla: 'Lei 9.455/97',
      icon: '⛓️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Crimes de Tortura',
          artigos: [
            {
              numero: 'Art. 1º (Crime de Tortura)',
              texto: 'Constitui crime de tortura:\nI - constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental:\na) para obter informação, declaração ou confissão;\nb) para provocar ação ou omissão de natureza criminosa;\nc) em razão de discriminação racial ou religiosa.\n\nII - submeter alguém, sob sua guarda, poder ou autoridade, com emprego de violência ou grave ameaça, a intenso sofrimento físico ou mental, como forma de aplicar castigo pessoal ou medida de caráter preventivo.\nPena: Reclusão, de 2 a 8 anos.',
              destaques: ['obter confissão', 'discriminação racial ou religiosa', 'castigo pessoal', 'reclusão de 2 a 8 anos']
            },
            {
              numero: 'Art. 1º, §2º (Tortura-Omissão)',
              texto: 'Aquele que se omite em face dessas condutas, quando tinha o dever de evitá-las ou apurá-las, incorre na pena de DETENÇÃO de 1 a 4 anos.\n⚠️ Único caso de tortura com pena de detenção e único caso de tortura que NÃO é crime hediondo.',
              destaques: ['detenção 1 a 4 anos', 'NÃO é hediondo']
            },
            {
              numero: 'Art. 1º, §5º (Efeitos da Condenação)',
              texto: 'A condenação acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo DOBRO do prazo da pena aplicada.\n⚠️ Trata-se de efeito AUTOMÁTICO (não precisa ser motivado na sentença).',
              destaques: ['perda do cargo', 'interdição pelo dobro do prazo', 'efeito AUTOMÁTICO']
            },
            {
              id: 'art_1_tort_preconceito',
              numero: 'Art. 1º, I, c (Tortura Discriminatória)',
              texto: 'Constranger alguém causando sofrimento físico ou mental em razão de discriminação racial ou religiosa.\n⚠️ A Lei de Tortura não fala em discriminação por orientação sexual, embora a jurisprudência equipare esses casos ao racismo.',
              destaques: ['discriminação racial ou religiosa']
            },
            {
              id: 'art_1_tort_aumentos',
              numero: 'Art. 1º, §4º (Causas de Aumento de Pena)',
              texto: 'A pena é aumentada de 1/6 a 1/3 se:\nI - o crime é cometido por agente público;\nII - contra criança, gestante, portador de deficiência, adolescente ou maior de 60 anos;\nIII - mediante sequestro.',
              destaques: ['aumento de 1/6 a 1/3', 'cometido por agente público', 'criança, gestante, deficiente, idoso']
            }
          ]
        }
      ]
    }
  ]
};
