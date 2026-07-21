const LEI_SECA_PREMIUM_6 = {
  decks: [
    {
      id: 'lep_rdd',
      disciplina: 'lep',
      nome: 'LEP - Faltas Disciplinares e RDD',
      sigla: 'LEP - RDD',
      icon: '🔒',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Faltas Graves e RDD',
          artigos: [
            {
              numero: 'Art. 50 (Faltas Graves)',
              texto: 'Comete falta grave o condenado à pena privativa de liberdade que:\nI - incitar ou participar de movimento para subverter a ordem ou a disciplina;\nII - fugir;\nIII - possuir, indevidamente, instrumento capaz de ofender a integridade física de outrem;\nIV - provocar acidente de trabalho;\nV - descumprir as condições (no regime aberto);\nVI - inobservar os deveres (ex: obediência, respeito);\nVII - tiver em sua posse aparelho telefônico ou de comunicação que permita contato externo.',
              destaques: ['incitar movimento', 'fugir', 'possuir instrumento (arma/faca)', 'aparelho telefônico (celular)']
            },
            {
              numero: 'Art. 52 (RDD)',
              texto: 'A prática de fato previsto como crime doloso constitui falta grave e, quando ocasionar subversão da ordem ou disciplina interna, sujeitará o preso ao regime disciplinar diferenciado (RDD), com as seguintes características:\nI - duração máxima de até 2 anos, sem prejuízo de repetição por nova falta;\nII - recolhimento em cela individual;\nIII - visitas quinzenais, de 2 pessoas (sem contar crianças), por 2 horas;\nIV - saída da cela por 2 horas diárias para banho de sol.',
              destaques: ['crime doloso que ocasiona subversão', 'duração de até 2 anos', 'cela individual', 'visitas quinzenais', 'banho de sol 2 horas diárias']
            }
          ]
        }
      ]
    },
    {
      id: 'orcrim_delacao',
      disciplina: 'legislacao',
      nome: 'Organização Criminosa',
      sigla: 'Lei 12.850/13',
      icon: '👥',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Conceito e Colaboração Premiada',
          artigos: [
            {
              numero: 'Art. 1º, § 1º (Conceito de Orcrim)',
              texto: 'Considera-se organização criminosa a associação de 4 (quatro) ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter, direta ou indiretamente, vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 (quatro) anos, ou que sejam de caráter transnacional.',
              destaques: ['4 (quatro) ou mais pessoas', 'estruturalmente ordenada', 'divisão de tarefas', 'penas máximas SUPERIORES a 4 anos']
            },
            {
              numero: 'Art. 4º (Colaboração Premiada)',
              texto: 'O juiz poderá conceder o perdão judicial, reduzir em até 2/3 a pena privativa de liberdade ou substituí-la por restritiva de direitos se o colaborador trazer um dos seguintes resultados:\nI - a identificação dos demais coautores e partícipes;\nII - a revelação da estrutura hierárquica e da divisão de tarefas;\nIII - a prevenção de infrações;\nIV - a recuperação do produto/proveito do crime;\nV - a localização da vítima.',
              destaques: ['perdão judicial', 'reduzir até 2/3', 'substituir por restritiva', 'identificação dos demais', 'recuperação do produto', 'localização da vítima']
            }
          ]
        }
      ]
    },
    {
      id: 'eca_infracional',
      disciplina: 'legislacao',
      nome: 'ECA - Medidas Socioeducativas',
      sigla: 'Lei 8.069/90',
      icon: '👦',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Medidas Socioeducativas',
          artigos: [
            {
              numero: 'Art. 112',
              texto: 'Verificada a prática de ato infracional, a autoridade competente poderá aplicar ao adolescente as seguintes medidas:\nI - advertência;\nII - obrigação de reparar o dano;\nIII - prestação de serviços à comunidade;\nIV - liberdade assistida;\nV - inserção em regime de semiliberdade;\nVI - internação em estabelecimento educacional.',
              destaques: ['aplicar ao adolescente', 'advertência', 'reparar o dano', 'prestação de serviços', 'liberdade assistida', 'internação']
            },
            {
              numero: 'Art. 121 (Internação)',
              texto: 'A internação constitui medida privativa da liberdade, sujeita aos princípios de brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento.\n§ 2º - A medida não comporta prazo determinado, devendo sua manutenção ser reavaliada, no máximo, a cada 6 (seis) meses.\n§ 3º - Em nenhuma hipótese o período máximo de internação excederá a 3 (três) anos.',
              destaques: ['brevidade e excepcionalidade', 'não comporta prazo determinado', 'reavaliada no máximo a cada 6 meses', 'NUNCA excederá 3 anos']
            }
          ]
        }
      ]
    }
  ]
};
