const LEI_SECA_PREMIUM_9 = {
  decks: [
    {
      id: 'cpp_prisoes',
      disciplina: 'penal',
      nome: 'CPP - Prisões Cautelares',
      sigla: 'CPP - Arts. 301-316',
      icon: '⛓️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Prisão em Flagrante',
          artigos: [
            {
              numero: 'Art. 302 (Flagrante Delito)',
              texto: 'Considera-se em flagrante delito quem:\nI - está cometendo a infração penal (flagrante PRÓPRIO ou PERFEITO);\nII - acaba de cometê-la (flagrante PRÓPRIO);\nIII - é perseguido logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser o autor da infração (flagrante IMPRÓPRIO ou IRREAL);\nIV - é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser o autor da infração (flagrante PRESUMIDO ou FICTO).',
              destaques: ['I e II = flagrante próprio (perfeito)', 'III = flagrante impróprio (perseguição logo após)', 'IV = flagrante presumido (encontrado logo depois com objetos)']
            },
            {
              numero: 'Art. 304 (Auto de Prisão em Flagrante)',
              texto: 'Apresentado o preso à autoridade competente, ouvirá esta o condutor e colherá, se possível, a assinatura, entregando a este cópia do termo e recibo de entrega do preso.\n\nPrazo para comunicar ao juiz: IMEDIATAMENTE (CF/88, art. 5º, LXII).\nPrazo para relaxar prisão ilegal pelo juiz: também IMEDIATAMENTE.\n\nPrazo para o delegado apresentar nota de culpa ao preso: em 24 HORAS.',
              destaques: ['comunicar ao juiz imediatamente', 'nota de culpa ao preso em 24 horas', 'relaxamento da prisão ilegal é imediato']
            }
          ]
        },
        {
          titulo: 'Prisão Preventiva',
          artigos: [
            {
              numero: 'Art. 312 (Fundamentos da Preventiva)',
              texto: 'A prisão preventiva poderá ser decretada como garantia da:\n- Ordem PÚBLICA;\n- Ordem ECONÔMICA;\n- Por CONVENIÊNCIA DA INSTRUÇÃO CRIMINAL;\n- Para assegurar a APLICAÇÃO DA LEI PENAL.\n\nTambém pode ser decretada em caso de descumprimento de qualquer das obrigações impostas por força de outras medidas cautelares (art. 282, §4º).',
              destaques: ['ordem pública', 'ordem econômica', 'conveniência da instrução', 'aplicação da lei penal', 'descumprimento de cautelar']
            },
            {
              numero: 'Art. 313 (Admissibilidade da Preventiva)',
              texto: 'Nos termos do art. 312, a prisão preventiva será admitida:\nI - nos crimes dolosos punidos com pena privativa de liberdade máxima superior a 4 anos;\nII - se tiver sido condenado por outro crime doloso, em sentença transitada em julgado;\nIII - se o crime envolver violência doméstica e familiar contra a mulher, criança, adolescente, idoso, enfermo ou pessoa com deficiência, para garantir a execução das medidas protetivas de urgência.',
              destaques: ['pena máxima superior a 4 anos', 'reincidente em crime doloso', 'violência doméstica para garantir medidas protetivas']
            }
          ]
        },
        {
          titulo: 'Prisão Temporária',
          artigos: [
            {
              numero: 'Lei 7.960/89 (Prisão Temporária)',
              texto: 'A prisão temporária é cabível quando:\nI - imprescindível para as investigações do inquérito policial;\nII - o indicado não tiver residência fixa ou não fornecer elementos para sua identificação;\nIII - houver fundadas razões de autoria em determinados crimes (rol taxativo: homicídio doloso, sequestro, roubo, extorsão, estupro, tráfico, terrorismo, crimes hediondos, etc.).\n\nPrazo: 5 dias, prorrogável por mais 5 (CRIMES COMUNS).\nPrazo: 30 dias, prorrogável por mais 30 (CRIMES HEDIONDOS).',
              destaques: ['preso para investigação do IP', 'só na fase do inquérito', '5+5 dias (comum)', '30+30 dias (hediondo)', 'rol de crimes taxativo']
            }
          ]
        }
      ]
    },
    {
      id: 'cp_crimes_pessoa',
      disciplina: 'penal',
      nome: 'CP - Crimes contra a Pessoa',
      sigla: 'CP - Arts. 121-154',
      icon: '👊',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Homicídio',
          artigos: [
            {
              numero: 'Art. 121 (Homicídio)',
              texto: 'Simples: reclusão de 6 a 20 anos.\n\nPrivilegiado (§1º): diminuição de 1/6 a 1/3 se: relevante valor moral ou social, domínio de violenta emoção logo em seguida a injusta provocação da vítima.\n\nQualificado (§2º): reclusão de 12 a 30 anos. Qualificadoras: motivo torpe, fútil, meio cruel/insidioso, recurso de emboscada, conexão com outro crime.\n\nDoloso contra a vida: competência do Tribunal do Júri.',
              destaques: ['simples: 6-20 anos', 'qualificado: 12-30 anos', 'privilegiado: redução 1/6 a 1/3', 'Tribunal do Júri']
            },
            {
              numero: 'Art. 121, §2º-A (Feminicídio)',
              texto: 'Homicídio QUALIFICADO quando praticado contra mulher por razões de condição de sexo feminino. Considera-se razões de condição de sexo feminino:\nI - violência doméstica e familiar;\nII - menosprezo ou discriminação à condição de mulher.\n\nPena: reclusão 12 a 30 anos.\nAumento de 1/3 até a metade se: vítima gestante, menor de 14 anos, maior de 60, com deficiência, ou na presença de descendente ou ascendente.',
              destaques: ['violência doméstica', 'menosprezo à condição de mulher', 'reclusão 12-30 anos', 'aumento 1/3 se gestante, menor, idoso, deficiente']
            }
          ]
        },
        {
          titulo: 'Lesão Corporal',
          artigos: [
            {
              numero: 'Art. 129 (Lesão Corporal)',
              texto: 'LEVE: detenção 3 meses a 1 ano (ação penal pública condicionada à representação, SALVO nos casos de violência doméstica).\n\nGRAVE (§1º): reclusão 1 a 5 anos → incapacidade por mais de 30 dias, perigo de vida, debilidade permanente, aceleração do parto.\n\nGRAVÍSSIMA (§2º): reclusão 2 a 8 anos → incapacidade permanente, enfermidade incurável, perda/inutilização de membro, sentido ou função, deformidade permanente, aborto.\n\nSEGUIDO DE MORTE (§3º): reclusão 4 a 12 anos (culposo quanto ao resultado morte).',
              destaques: ['leve: 3 meses a 1 ano (condicionada)', 'grave: 1-5 anos (+ 30 dias, perigo de vida)', 'gravíssima: 2-8 anos (permanente, deformidade)', 'seguida de morte: 4-12 anos']
            }
          ]
        }
      ]
    },
    {
      id: 'estatuto_idoso',
      disciplina: 'legislacao',
      nome: 'Estatuto do Idoso',
      sigla: 'Lei 10.741/2003',
      icon: '👴',
      destaque: false,
      peso: 1,
      secoes: [
        {
          titulo: 'Conceito e Direitos Fundamentais',
          artigos: [
            {
              numero: 'Art. 1º (Idoso)',
              texto: 'É instituído o Estatuto do Idoso, destinado a regular os direitos assegurados às pessoas com IDADE IGUAL OU SUPERIOR A 60 (sessenta) anos.',
              destaques: ['60 anos ou mais']
            },
            {
              numero: 'Art. 10, §3º (Filas e Assentos)',
              texto: 'É assegurada prioridade no atendimento ao idoso em qualquer órgão público ou privado.\nÉ obrigatória a reserva de 10% dos assentos para idosos em transportes coletivos.\nÉ obrigatória a reserva de vagas próximas aos elevadores nos estacionamentos.',
              destaques: ['prioridade no atendimento', '10% dos assentos no transporte coletivo', 'vagas próximas aos elevadores']
            },
            {
              numero: 'Art. 96 (Crime - Discriminação)',
              texto: 'Discriminar pessoa idosa, impedindo ou dificultando seu acesso a operações bancárias, aos meios de transporte, ao direito de contratar ou por qualquer outro meio ou instrumento necessário ao exercício da cidadania, por motivo de idade:\nPena: reclusão de 6 meses a 1 ano e multa.',
              destaques: ['discriminar idoso em banco ou transporte', 'reclusão 6 meses a 1 ano']
            }
          ]
        }
      ]
    }
  ]
};
