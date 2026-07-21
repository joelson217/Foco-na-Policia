const LEI_SECA_PREMIUM_10 = {
  decks: [
    {
      id: 'cf88_seguranca_publica',
      disciplina: 'constitucional',
      nome: 'CF/88 - Segurança Pública',
      sigla: 'CF/88 - Art. 144',
      icon: '🚓',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Órgãos de Segurança Pública',
          artigos: [
            {
              numero: 'Art. 144, caput',
              texto: 'A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, através dos seguintes órgãos:\nI - polícia federal;\nII - polícia rodoviária federal;\nIII - polícia ferroviária federal;\nIV - polícias civis;\nV - polícias militares e corpos de bombeiros militares;\nVI - polícias penais federal, estaduais e distrital.',
              destaques: ['dever do Estado', 'direito e responsabilidade de todos', 'Polícias Penais incluídas (EC 104/2019)']
            },
            {
              numero: 'Art. 144, §1º (Polícia Federal)',
              texto: 'A polícia federal, instituída por lei como órgão permanente, estruturado em carreira, destina-se a:\nI - apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União;\nII - prevenir e reprimir o tráfico ilícito de entorpecentes e drogas afins, o contrabando e o descaminho;\nIII - exercer as funções de polícia marítima, aeroportuária e de fronteiras;\nIV - exercer, COM EXCLUSIVIDADE, as funções de polícia judiciária da União.',
              destaques: ['órgão permanente estruturado em carreira', 'polícia marítima, aeroportuária e de fronteiras', 'com EXCLUSIVIDADE polícia judiciária da União']
            },
            {
              numero: 'Art. 144, §4º e §5º (Polícia Civil e PM)',
              texto: '§ 4º Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, RESSALVADA a competência da União, as funções de polícia judiciária e a apuração de infrações penais, EXCETO as militares.\n\n§ 5º Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil.',
              destaques: ['PC = polícia judiciária (exceto militares e União)', 'PM = polícia ostensiva e ordem pública', 'Bombeiros = defesa civil']
            },
            {
              numero: 'Art. 144, §8º (Guardas Municipais)',
              texto: 'Os Municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações, conforme dispuser a lei.\n⚠️ O STF reconheceu que as Guardas Municipais INTEGRAM o Sistema Único de Segurança Pública (SUSP), embora não estejam nos incisos do caput do art. 144.',
              destaques: ['Municípios PODERÃO constituir', 'proteção de bens, serviços e instalações', 'integram o SUSP (decisão STF)']
            }
          ]
        }
      ]
    },
    {
      id: 'adm_poderes',
      disciplina: 'administrativo',
      nome: 'Direito Administrativo - Poderes',
      sigla: 'Poderes da Adm.',
      icon: '⚖️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Poderes da Administração',
          artigos: [
            {
              numero: 'Poder de Polícia',
              texto: 'É a faculdade de que dispõe a Administração Pública para CONDICIONAR e RESTRINGIR o uso e gozo de bens, atividades e direitos individuais, em benefício da coletividade ou do próprio Estado.\n\nAtributos do Poder de Polícia (DAC):\n- Discricionariedade (na maioria dos casos);\n- Autoexecutoriedade (executar sem ordem judicial);\n- Coercibilidade (imposição, uso de força se necessário).',
              destaques: ['condicionar e restringir direitos individuais', 'benefício da coletividade', 'Discricionariedade, Autoexecutoriedade, Coercibilidade']
            },
            {
              numero: 'Poder Hierárquico',
              texto: 'É o de que dispõe o Executivo para organizar e distribuir as funções de seus órgãos, estabelecendo a relação de subordinação entre os servidores do seu quadro de pessoal.\nPermite: dar ordens, fiscalizar, delegar e avocar competências.\n⚠️ Não existe subordinação/hierarquia entre a Administração Direta e Indireta (apenas vinculação).',
              destaques: ['organizar e distribuir funções', 'dar ordens e fiscalizar', 'delegar e avocar competências', 'não há hierarquia entre direta e indireta']
            },
            {
              numero: 'Poder Disciplinar',
              texto: 'É a faculdade de punir as infrações funcionais dos servidores e demais pessoas sujeitas à disciplina dos órgãos e serviços da Administração.\n⚠️ Exige vínculo específico com a Administração (ex: servidor público ou empresa contratada). Punir um particular por infração de trânsito é Poder de POLÍCIA, não Disciplinar.',
              destaques: ['punir infrações funcionais', 'exige vínculo com a Administração']
            }
          ]
        }
      ]
    },
    {
      id: 'cp_excludentes',
      disciplina: 'penal',
      nome: 'CP - Excludentes de Ilicitude',
      sigla: 'CP - Arts. 23-25',
      icon: '🛡️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Ilicitude e Excludentes',
          artigos: [
            {
              numero: 'Art. 23 (Exclusão de Ilicitude)',
              texto: 'Não há crime quando o agente pratica o fato:\nI - em estado de necessidade;\nII - em legítima defesa;\nIII - em estrito cumprimento de dever legal ou no exercício regular de direito.\n\nExcesso punível (Parágrafo único): O agente, em qualquer das hipóteses deste artigo, responderá pelo excesso doloso ou culposo.',
              destaques: ['não há crime', 'estado de necessidade', 'legítima defesa', 'estrito cumprimento', 'exercício regular', 'responde pelo excesso doloso ou culposo']
            },
            {
              numero: 'Art. 24 (Estado de Necessidade)',
              texto: 'Considera-se em estado de necessidade quem pratica o fato para salvar de PERIGO ATUAL, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era razoável exigir-se.\n⚠️ Não pode alegar estado de necessidade quem tem o DEVER LEGAL de enfrentar o perigo (ex: bombeiro, policial).',
              destaques: ['salvar de PERIGO ATUAL', 'não provocou por sua vontade', 'dever legal de enfrentar o perigo NÃO pode alegar']
            },
            {
              numero: 'Art. 25 (Legítima Defesa)',
              texto: 'Entende-se em legítima defesa quem, usando MODERADAMENTE dos meios necessários, repele INJUSTA AGRESSÃO, atual ou iminente, a direito seu ou de outrem.\n\n§ 1º (Pacote Anticrime): Observados os requisitos do caput, considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.',
              destaques: ['usando moderadamente', 'meios necessários', 'injusta agressão (atual ou iminente)', 'agente de segurança repelindo agressão a refém']
            }
          ]
        }
      ]
    }
  ]
};
