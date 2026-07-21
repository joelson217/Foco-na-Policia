const LEI_SECA_PREMIUM_5 = {
  decks: [
    {
      id: 'const_adm_publica',
      disciplina: 'constitucional',
      nome: 'Constituição - Administração Pública (Art. 37)',
      sigla: 'CF/88 - Art. 37',
      icon: '🏛️',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: 'Princípios e Regras Gerais',
          artigos: [
            {
              numero: 'Art. 37, caput (Princípios)',
              texto: 'A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE).',
              destaques: ['administração pública direta e indireta', 'legalidade, impessoalidade, moralidade, publicidade e eficiência']
            },
            {
              numero: 'Art. 37, I e II (Acesso a Cargos)',
              texto: 'I - os cargos, empregos e funções públicas são acessíveis aos brasileiros que preencham os requisitos estabelecidos em lei, assim como aos estrangeiros, na forma da lei;\nII - a investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração;',
              destaques: ['brasileiros e estrangeiros na forma da lei', 'concurso público de provas ou de provas e títulos', 'cargo em comissão (livre nomeação)']
            },
            {
              numero: 'Art. 37, § 6º (Responsabilidade Civil)',
              texto: 'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.',
              destaques: ['pessoas jurídicas de direito público e privado prestadoras de serviços', 'responderão pelos danos', 'direito de regresso (dolo ou culpa)']
            }
          ]
        }
      ]
    },
    {
      id: 'lep_progressao_remicao',
      disciplina: 'lep',
      nome: 'LEP - Progressão e Remição',
      sigla: 'LEP - Regimes',
      icon: '🔒',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Progressão de Regime (Art. 112)',
          artigos: [
            {
              numero: 'Art. 112 (Pacote Anticrime)',
              texto: 'A pena privativa de liberdade será executada em forma progressiva com a transferência para regime menos rigoroso, a ser determinada pelo juiz, quando o preso tiver cumprido ao menos:\n- 16% (primário, sem violência);\n- 20% (reincidente, sem violência);\n- 25% (primário, com violência);\n- 30% (reincidente, com violência);\n- 40% (hediondo, primário);\n- 50% (hediondo, com morte, primário; ou comando de org. criminosa);\n- 60% (hediondo, reincidente específico);\n- 70% (hediondo, com morte, reincidente específico).',
              destaques: ['16% primário sem violência', '40% hediondo primário', '60% hediondo reincidente', '70% hediondo com morte reincidente']
            }
          ]
        },
        {
          titulo: 'Remição de Pena (Art. 126)',
          artigos: [
            {
              numero: 'Art. 126, § 1º',
              texto: 'A contagem de tempo para o fim da remição será feita em razão de:\nI - 1 (um) dia de pena a cada 12 (doze) horas de frequência escolar - atividade de ensino fundamental, médio, inclusive profissionalizante, ou superior, ou ainda de requalificação profissional - divididas, no mínimo, em 3 (três) dias;\nII - 1 (um) dia de pena a cada 3 (três) dias de trabalho.',
              destaques: ['1 dia a cada 12 horas de estudo (em 3 dias)', '1 dia a cada 3 dias de trabalho']
            }
          ]
        }
      ]
    },
    {
      id: 'dh_pacto_sao_jose',
      disciplina: 'dh',
      nome: 'Direitos Humanos - Pacto S. José',
      sigla: 'CADH',
      icon: '⚖️',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: 'Convenção Americana (Pacto de S. José da Costa Rica)',
          artigos: [
            {
              numero: 'Art. 7º (Direito à Liberdade)',
              texto: 'Ninguém deve ser detido por dívidas. Este princípio não limita os mandados de autoridade judiciária competente expedidos em virtude de inadimplemento de obrigação alimentar.',
              destaques: ['Ninguém deve ser detido por dívidas', 'EXCEÇÃO: inadimplemento de obrigação alimentar']
            },
            {
              numero: 'Art. 4º (Direito à Vida)',
              texto: 'Toda pessoa tem o direito de que se respeite sua vida. Esse direito deve ser protegido pela lei e, em geral, desde o momento da concepção. Não se pode restabelecer a pena de morte nos Estados que a aboliram.',
              destaques: ['desde o momento da concepção', 'Não se pode restabelecer a pena de morte']
            }
          ]
        }
      ]
    }
  ]
};
