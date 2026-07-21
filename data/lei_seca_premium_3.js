const LEI_SECA_PREMIUM_3 = {
  decks: [
    {
      id: 'const_seguranca',
      disciplina: 'constitucional',
      nome: 'Constituição - Segurança Pública (Art. 144)',
      sigla: 'CF/88 - Segurança',
      icon: '🛡️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Órgãos de Segurança Pública',
          artigos: [
            {
              numero: 'Art. 144, caput',
              texto: 'A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, através dos seguintes órgãos:\nI - polícia federal;\nII - polícia rodoviária federal;\nIII - polícia ferroviária federal;\nIV - polícias civis;\nV - polícias militares e corpos de bombeiros militares;\nVI - polícias penais federal, estaduais e distrital.',
              destaques: ['dever do Estado, direito e responsabilidade de todos', 'preservação da ordem pública', 'polícias penais federal, estaduais e distrital']
            },
            {
              numero: 'Art. 144, § 4º (Polícia Civil)',
              texto: 'Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares.',
              destaques: ['dirigidas por delegados de carreira', 'polícia judiciária', 'exceto as militares']
            },
            {
              numero: 'Art. 144, § 5º (Polícia Militar)',
              texto: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil.',
              destaques: ['polícia ostensiva', 'preservação da ordem pública', 'defesa civil (bombeiros)']
            },
            {
              numero: 'Art. 144, § 5º-A (Polícia Penal)',
              texto: 'Às polícias penais, vinculadas ao órgão administrador do sistema penal da unidade federativa a que pertencem, cabe a segurança dos estabelecimentos penais.',
              destaques: ['vinculadas ao órgão administrador do sistema penal', 'segurança dos estabelecimentos penais']
            }
          ]
        }
      ]
    },
    {
      id: 'penal_excludentes',
      disciplina: 'penal',
      nome: 'Direito Penal - Excludentes de Ilicitude',
      sigla: 'CP - Excludentes',
      icon: '⚖️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Exclusão de Ilicitude',
          artigos: [
            {
              numero: 'Art. 23',
              texto: 'Não há crime quando o agente pratica o fato:\nI - em estado de necessidade;\nII - em legítima defesa;\nIII - em estrito cumprimento de dever legal ou no exercício regular de direito.\nParágrafo único - O agente, em qualquer das hipóteses deste artigo, responderá pelo excesso doloso ou culposo.',
              destaques: ['Não há crime', 'estado de necessidade', 'legítima defesa', 'estrito cumprimento de dever legal', 'exercício regular de direito', 'responderá pelo excesso']
            },
            {
              numero: 'Art. 24 (Estado de Necessidade)',
              texto: 'Considera-se em estado de necessidade quem pratica o fato para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era razoável exigir-se.\n§ 1º - Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo.',
              destaques: ['perigo atual', 'não provocou por sua vontade', 'direito próprio ou alheio', 'quem tinha dever legal NÃO PODE alegar']
            },
            {
              numero: 'Art. 25 (Legítima Defesa)',
              texto: 'Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.\nParágrafo único. Observados os requisitos, considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.',
              destaques: ['usando moderadamente', 'injusta agressão', 'atual ou iminente', 'agente que repele agressão a refém']
            }
          ]
        }
      ]
    },
    {
      id: 'processo_flagrante',
      disciplina: 'penal',
      nome: 'Processo Penal - Prisão em Flagrante',
      sigla: 'CPP - Flagrante',
      icon: '🚨',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Da Prisão em Flagrante',
          artigos: [
            {
              numero: 'Art. 301',
              texto: 'Qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito.',
              destaques: ['Qualquer do povo poderá (facultativo)', 'autoridades e agentes deverão (obrigatório)']
            },
            {
              numero: 'Art. 302',
              texto: 'Considera-se em flagrante delito quem:\nI - está cometendo a infração penal (flagrante próprio);\nII - acaba de cometê-la (flagrante próprio);\nIII - é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração (flagrante impróprio);\nIV - é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor da infração (flagrante presumido).',
              destaques: ['está cometendo', 'acaba de cometer', 'é perseguido logo após (impróprio)', 'é encontrado logo depois (presumido)']
            }
          ]
        }
      ]
    },
    {
      id: 'adm_atos',
      disciplina: 'administrativo',
      nome: 'Direito Administrativo - Atos',
      sigla: 'Dir. Adm - Atos',
      icon: '📝',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Requisitos e Atributos do Ato',
          artigos: [
            {
              numero: 'Doutrina (Requisitos/Elementos)',
              texto: 'São requisitos (ou elementos) essenciais de validade do ato administrativo (Mnemônico: COM FI FOR M OB):\n- COMpetência: sujeito que tem poder legal para o ato.\n- FInalidade: interesse público.\n- FORma: modo de exteriorização do ato (regra escrita).\n- Motivo: pressupostos de fato e de direito (o porquê).\n- OBjeto: o conteúdo do ato, o que ele decide.',
              destaques: ['Competência', 'Finalidade', 'Forma', 'Motivo', 'Objeto']
            },
            {
              numero: 'Doutrina (Atributos)',
              texto: 'São atributos do ato administrativo (Mnemônico: PATI):\n- Presunção de Legitimidade e Veracidade.\n- Autoexecutoriedade: a administração executa suas decisões sem precisar de ordem judicial.\n- Tipicidade: o ato deve estar previsto em lei.\n- Imperatividade: imposição de obrigações a terceiros, independente de concordância.',
              destaques: ['Presunção de Legitimidade', 'Autoexecutoriedade', 'Tipicidade', 'Imperatividade']
            }
          ]
        }
      ]
    }
  ]
};
