const LEI_SECA_PREMIUM_11 = {
  decks: [
    {
      id: 'adm_atos',
      disciplina: 'administrativo',
      nome: 'Direito Administrativo - Atos',
      sigla: 'Atos Administrativos',
      icon: '📝',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Atos Administrativos - Requisitos e Atributos',
          artigos: [
            {
              numero: 'Requisitos (Elementos) do Ato Administrativo',
              texto: 'São 5 (COM FI FOR M OB):\n- COMpetência: sujeito com poder legal para praticar o ato.\n- FInalidade: interesse público (se ferir, ocorre desvio de finalidade).\n- FORma: o modo de exteriorização (regra escrita).\n- Motivo: situação de fato e de direito que determina o ato.\n- OBjeto: o conteúdo do ato, seu efeito jurídico.',
              destaques: ['Competência', 'Finalidade', 'Forma', 'Motivo', 'Objeto', 'COM-FI-FOR-M-OB']
            },
            {
              numero: 'Atributos do Ato Administrativo',
              texto: 'São características (PATI):\n- Presunção de Legitimidade e Veracidade: presume-se que estão de acordo com a lei e os fatos são verdadeiros.\n- Autoexecutoriedade: podem ser executados pela própria Administração, sem ordem judicial.\n- Tipicidade: devem corresponder a figuras previamente definidas em lei.\n- Imperatividade: impõem-se a terceiros, independente de concordância.',
              destaques: ['Presunção de Legitimidade', 'Autoexecutoriedade', 'Tipicidade', 'Imperatividade', 'PATI']
            }
          ]
        }
      ]
    },
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
            }
          ]
        }
      ]
    }
  ]
};
