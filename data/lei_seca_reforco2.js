// ============================================================
// LEI_SECA_REFORCO2.JS — Segunda leva de flashcards de reforço,
// cobrindo temas do edital ainda pouco/nada abordados: Serviços
// Públicos (Lei 8.987/95), Poder Executivo (art. 84 CF), TCU (art.
// 71 CF), Partidos Políticos (art. 17 CF), Direitos Políticos (art.
// 14 CF), Lei 8.112/1990 (ritos do PAD), liberdade provisória/fiança
// e peritos/intérpretes (CPP), Patronato (LEP), Regras de Mandela
// (contato com o mundo exterior), crimes contra a fé pública e
// contra a administração praticados por particular (CP). Conteúdo
// federal — vale para qualquer curso (PPRN e PPPE).
// ============================================================

const LEI_SECA_REFORCO2 = {
  decks: [

    // =============================================
    // LEI 8.987/1995 — SERVIÇOS PÚBLICOS
    // =============================================
    {
      id: 'servicos_publicos_lei8987',
      disciplina: 'administrativo',
      nome: 'Serviços Públicos - Concessão e Permissão',
      sigla: 'Lei 8.987/1995',
      icon: '🚦',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: '📋 Conceitos e Extinção',
          artigos: [
            { id: 'reforco2_serv_1', artigo: 'Art. 2º, II da Lei 8.987/1995', titulo: 'Concessão de Serviço Público', frente: 'O que é a concessão de serviço público?', verso: 'Delegação de sua prestação, mediante licitação na modalidade concorrência, à pessoa jurídica ou consórcio de empresas, que presta o serviço por sua conta e risco, por prazo determinado.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_serv_2', artigo: 'Art. 2º, IV da Lei 8.987/1995', titulo: 'Permissão de Serviço Público', frente: 'Como se diferencia a permissão da concessão?', verso: 'A permissão é formalizada por contrato de adesão, com natureza precária (revogável unilateralmente), podendo ser outorgada a pessoa física OU jurídica — a concessão é restrita a pessoa jurídica/consórcio de empresas.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_serv_3', artigo: 'Art. 35 da Lei 8.987/1995', titulo: 'Extinção da Concessão', frente: 'Quais são as formas de extinção da concessão?', verso: 'Advento do termo contratual, encampação, caducidade, rescisão, anulação, e falência/extinção da concessionária.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_serv_4', artigo: 'Art. 37 da Lei 8.987/1995', titulo: 'Encampação', frente: 'O que é encampação?', verso: 'Retomada do serviço pelo poder concedente durante o prazo da concessão, por interesse público, mediante lei autorizativa específica e prévia indenização — não pressupõe culpa da concessionária.', cobrado: 'medium', anos: [] },
            { id: 'reforco2_serv_5', artigo: 'Art. 38 da Lei 8.987/1995', titulo: 'Caducidade', frente: 'O que é caducidade da concessão?', verso: 'Extinção decorrente da inexecução total ou parcial do contrato pela concessionária (serviço inadequado, descumprimento de cláusulas, paralisação) — ao contrário da encampação, decorre de culpa da concessionária.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_serv_6', artigo: 'Princípio da Continuidade', titulo: 'Continuidade do Serviço Público', frente: 'O que veda o princípio da continuidade do serviço público?', verso: 'A interrupção do serviço, salvo situação de emergência ou após aviso prévio, por razões técnicas/segurança das instalações, ou por inadimplemento do usuário (Lei 8.987/95, art. 6º, §3º).', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // PODER EXECUTIVO, TCU, PARTIDOS E DIREITOS POLÍTICOS
    // =============================================
    {
      id: 'executivo_tcu_politicos',
      disciplina: 'constitucional',
      nome: 'Poder Executivo, TCU e Direitos Políticos',
      sigla: 'CF, arts. 14, 17, 71, 84',
      icon: '🗳️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '👤 Poder Executivo (Art. 84)',
          artigos: [
            { id: 'reforco2_exec_1', artigo: 'Art. 84, I e XIV da CF', titulo: 'Nomeações Presidenciais', frente: 'O Presidente nomeia livremente os Ministros de Estado. E os Ministros do STF?', verso: 'A nomeação de Ministros do STF/Tribunais Superiores, do PGR e de Governadores de Territórios exige prévia aprovação do Senado Federal.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_exec_2', artigo: 'Art. 84, IV e V da CF', titulo: 'Sanção, Veto e Decretos', frente: 'Quais atribuições o Presidente exerce sobre o processo legislativo?', verso: 'Sancionar, promulgar e publicar leis, expedir decretos e regulamentos para sua fiel execução, e vetar projetos de lei total ou parcialmente.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_exec_3', artigo: 'Art. 84, IX da CF', titulo: 'Estado de Defesa e Estado de Sítio', frente: 'O Presidente pode decretar estado de defesa/sítio livremente?', verso: 'Não — ambos dependem de controle político do Congresso Nacional (autorização prévia para o sítio, aprovação posterior para o estado de defesa).', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '📊 Tribunal de Contas da União (Art. 71)',
          artigos: [
            { id: 'reforco2_tcu_1', artigo: 'Art. 71 da CF', titulo: 'Natureza do TCU', frente: 'O TCU é subordinado ao Congresso Nacional?', verso: 'Não. Possui competências constitucionais PRÓPRIAS (não decorrem de delegação do Legislativo), embora auxilie o Congresso no controle externo.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_tcu_2', artigo: 'Art. 71, I da CF', titulo: 'Contas do Presidente', frente: 'O TCU julga as contas do Presidente da República?', verso: 'Não. Emite apenas parecer prévio (em 60 dias) sobre as contas do Presidente — o julgamento final e definitivo cabe ao Congresso Nacional. Para os demais administradores, o TCU JULGA diretamente.', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '🗳️ Partidos e Direitos Políticos (Arts. 14 e 17)',
          artigos: [
            { id: 'reforco2_pol_1', artigo: 'Art. 17 da CF', titulo: 'Autonomia Partidária', frente: 'Os partidos políticos têm autonomia para se organizar?', verso: 'Sim, mas resguardados a soberania nacional, o regime democrático, o pluripartidarismo e os direitos fundamentais — os estatutos devem prever normas de disciplina e fidelidade partidária.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_pol_2', artigo: 'Art. 14, §3º da CF', titulo: 'Condições de Elegibilidade', frente: 'Quais as idades mínimas para elegibilidade?', verso: '35 anos (Presidente/Vice/Senador), 30 anos (Governador/Vice), 21 anos (Deputado Federal/Estadual, Prefeito/Vice, juiz de paz), 18 anos (Vereador).', cobrado: 'hot', anos: [] },
            { id: 'reforco2_pol_3', artigo: 'Art. 14, §4º da CF', titulo: 'Inelegibilidade', frente: 'Quem é inelegível, segundo o §4º do art. 14?', verso: 'Os inalistáveis (estrangeiros, conscritos) e os analfabetos — estes podem votar, mas não podem ser votados.', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // LEI 8.112/1990 — RITOS DO PAD
    // =============================================
    {
      id: 'pad_lei8112',
      disciplina: 'etica',
      nome: 'Processo Disciplinar - Ritos (Lei 8.112/1990)',
      sigla: 'Lei 8.112/1990',
      icon: '⚖️',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: '📋 Ritos Ordinário e Sumário',
          artigos: [
            { id: 'reforco2_pad_1', artigo: 'Arts. 133 e 140 da Lei 8.112/1990', titulo: 'Rito Sumário - Hipóteses', frente: 'Quando é obrigatório o rito sumário no PAD?', verso: 'Na apuração de acumulação ilegal de cargos, abandono de cargo e inassiduidade habitual.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_pad_2', artigo: 'Art. 133, I da Lei 8.112/1990', titulo: 'Comissão do Rito Sumário', frente: 'Quantos servidores compõem a comissão do rito sumário?', verso: '2 servidores estáveis (no rito ordinário, são 3 servidores estáveis).', cobrado: 'medium', anos: [] },
            { id: 'reforco2_pad_3', artigo: 'Art. 133 da Lei 8.112/1990', titulo: 'Fases do Rito Sumário', frente: 'Quais as fases do PAD de rito sumário?', verso: 'Instauração (indicação simultânea de autoria e materialidade), instrução sumária (indiciação, defesa, relatório) e julgamento — prazo de até 30 dias, prorrogável por 15.', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // PROCESSUAL PENAL — LIBERDADE PROVISÓRIA E AUXILIARES DA JUSTIÇA
    // =============================================
    {
      id: 'liberdade_provisoria_auxiliares',
      disciplina: 'penal',
      nome: 'Liberdade Provisória, Fiança e Auxiliares da Justiça',
      sigla: 'CPP, arts. 279, 281, 310, 323',
      icon: '🔓',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔓 Liberdade Provisória e Fiança',
          artigos: [
            { id: 'reforco2_lib_1', artigo: 'Art. 310, §1º do CPP', titulo: 'Liberdade Provisória sem Fiança', frente: 'Quando cabe liberdade provisória SEM fiança?', verso: 'Quando o juiz verifica, no auto de prisão em flagrante, que o agente agiu amparado por excludente de ilicitude (legítima defesa, estado de necessidade etc.).', cobrado: 'hot', anos: [] },
            { id: 'reforco2_lib_2', artigo: 'Art. 323 do CPP', titulo: 'Vedação à Fiança', frente: 'Em quais crimes não se concede fiança?', verso: 'Racismo, tortura, tráfico de drogas, terrorismo, crimes hediondos, e os praticados por grupos armados contra a ordem constitucional — mas a vedação à fiança não impede, por si só, a liberdade provisória sem fiança.', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '👨‍🔬 Peritos e Intérpretes',
          artigos: [
            { id: 'reforco2_aux_1', artigo: 'Art. 279 do CPP', titulo: 'Impedimentos para ser Perito', frente: 'Quem não pode ser perito?', verso: 'Quem já testemunhou ou opinou sobre o objeto da perícia no processo, analfabetos, menores de 21 anos, e sujeitos a certas interdições de direitos do CP.', cobrado: 'medium', anos: [] },
            { id: 'reforco2_aux_2', artigo: 'Art. 281 do CPP', titulo: 'Intérprete Equiparado a Perito', frente: 'Como o CPP trata o intérprete?', verso: 'Equipara-o, para todos os efeitos, ao perito — sujeitando-se às mesmas causas de impedimento e à disciplina judiciária.', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // LEP — PATRONATO E REGRAS DE MANDELA (CONTATO FAMILIAR)
    // =============================================
    {
      id: 'patronato_mandela_familia',
      disciplina: 'lep',
      nome: 'Patronato e Contato Familiar do Preso',
      sigla: 'LEP arts. 78-79 + Regras de Mandela 58-59',
      icon: '👨‍👩‍👧',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🏢 Patronato (Arts. 78-79 LEP)',
          artigos: [
            { id: 'reforco2_patr_1', artigo: 'Art. 78 da LEP', titulo: 'Destinatários do Patronato', frente: 'A quem o Patronato presta assistência?', verso: 'Aos albergados (regime aberto) e aos egressos do sistema prisional, com foco na reintegração social.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_patr_2', artigo: 'Art. 79 da LEP', titulo: 'Atribuições do Patronato', frente: 'O que faz o Patronato?', verso: 'Orienta condenados a penas restritivas de direitos, fiscaliza prestação de serviços à comunidade e limitação de fim de semana, e colabora na fiscalização das condições do sursis e do livramento condicional.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '👨‍👩‍👧 Regras de Mandela - Vínculo Familiar',
          artigos: [
            { id: 'reforco2_mand_1', artigo: 'Regra 58 das Regras de Mandela', titulo: 'Contato com o Mundo Exterior', frente: 'O que a Regra 58 assegura ao preso?', verso: 'Comunicação periódica com familiares e amigos (correspondência, telecomunicações, visitas), incluindo visita conjugal em igualdade de condições entre homens e mulheres, onde permitida.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_mand_2', artigo: 'Regra 59 das Regras de Mandela', titulo: 'Proximidade da Unidade Prisional', frente: 'Onde os presos devem ser alocados, segundo a Regra 59?', verso: 'Na medida do possível, em unidades próximas às suas casas ou ao local de reabilitação social, para preservar vínculos familiares e comunitários.', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // CRIMES CONTRA A FÉ PÚBLICA E ADMINISTRAÇÃO (PARTICULAR)
    // =============================================
    {
      id: 'fe_publica_particular',
      disciplina: 'penal',
      nome: 'Crimes contra a Fé Pública e Praticados por Particular',
      sigla: 'CP, arts. 289-332',
      icon: '📜',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '📜 Fé Pública',
          artigos: [
            { id: 'reforco2_fe_1', artigo: 'Art. 289 do CP', titulo: 'Moeda Falsa', frente: 'O que é o crime de moeda falsa?', verso: 'Falsificar, fabricando ou alterando, moeda metálica ou papel-moeda de curso legal no país ou no estrangeiro — protege a fé pública na circulação monetária.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_fe_2', artigo: 'Art. 304 do CP', titulo: 'Uso de Documento Falso', frente: 'O art. 304 pune quem faz o quê?', verso: 'Usa documento já falsificado ou alterado por outrem (ou por si), recebendo a mesma pena da falsificação — distinto de quem apenas fabrica o documento (arts. 297-299).', cobrado: 'medium', anos: [] },
            { id: 'reforco2_fe_3', artigo: 'Art. 307 do CP', titulo: 'Falsa Identidade', frente: 'A falsa identidade tem caráter subsidiário?', verso: 'Sim — só se aplica "se o fato não constitui elemento de crime mais grave"; não exige falsificação documental (pode ser verbal) nem dano patrimonial efetivo.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '👤 Praticados por Particular',
          artigos: [
            { id: 'reforco2_part_1', artigo: 'Art. 331 do CP', titulo: 'Desacato', frente: 'O desacato ainda é crime no Brasil?', verso: 'Sim — o STF reafirmou sua constitucionalidade e vigência, apesar de recomendações internacionais pela descriminalização.', cobrado: 'hot', anos: [] },
            { id: 'reforco2_part_2', artigo: 'Art. 330 do CP', titulo: 'Desobediência', frente: 'Quando NÃO se configura desobediência?', verso: 'Quando a lei já prevê sanção administrativa/civil específica para o descumprimento, sem ressalva expressa de cumulação com sanção penal (evita bis in idem).', cobrado: 'medium', anos: [] },
            { id: 'reforco2_part_3', artigo: 'Art. 329, §1º do CP', titulo: 'Resistência - Causa de Aumento', frente: 'Quando a pena da resistência é aumentada?', verso: 'Quando o ato, em razão da resistência, não se executa (§1º).', cobrado: 'medium', anos: [] },
            { id: 'reforco2_part_4', artigo: 'Art. 332 do CP', titulo: 'Tráfico de Influência', frente: 'O tráfico de influência exige que a influência seja real?', verso: 'Não — é irrelevante se a influência é real ou apenas alegada, bastando solicitar/exigir/obter vantagem a pretexto de influir em ato de funcionário público.', cobrado: 'hot', anos: [] }
          ]
        }
      ]
    }
  ]
};
