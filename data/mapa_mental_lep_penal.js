// ============================================================
// MAPA_MENTAL_LEP_PENAL.JS — Mapas mentais consolidados de LEP e
// Direito Penal/Processual Penal, no mesmo formato caprichado do
// mapa_mental_legislacao.js — fecha o trio de disciplinas peso 2
// (LEP + Legislação Específica + Penal = 62% da nota) com revisão
// visual rápida, focada nos temas mais cobrados do edital.
// ============================================================

const MAPA_MENTAL_LEP_PENAL = {
  decks: [
    {
      id: 'mapa_lep',
      disciplina: 'lep',
      nome: '🧠 Mapa Mental — LEP (visão geral)',
      sigla: 'Lei 7.210/84 — resumo por ramos',
      icon: '🧠',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🚪 Permissão de Saída x Saída Temporária — 🔥 MAIS COBRADO',
          artigos: [
            { id: 'mm_lep_saidas', artigo: 'Mapa Mental', titulo: 'Compare os dois institutos', frente: 'Monte o comparativo Permissão de Saída x Saída Temporária', verso:
              '🎯 PERMISSÃO DE SAÍDA (Art. 120-121)\n' +
              '├─ Autoridade: DIRETOR do estabelecimento\n' +
              '├─ Regime: fechado E semiaberto\n' +
              '├─ Vigilância: COM escolta\n' +
              '├─ Motivo: falecimento/doença grave de família OU tratamento médico\n' +
              '└─ Prazo: o necessário à finalidade\n\n' +
              '🎯 SAÍDA TEMPORÁRIA (Art. 122-125)\n' +
              '├─ Autoridade: JUIZ da execução\n' +
              '├─ Regime: SOMENTE semiaberto\n' +
              '├─ Vigilância: SEM vigilância direta\n' +
              '├─ Requisitos: comportamento adequado + 1/6 da pena (primário) ou 1/4 (reincidente)\n' +
              '├─ Finalidade: visita à família, curso, atividades de ressocialização\n' +
              '└─ Prazo: até 7 dias, renovável 4x/ano (máx. 35 dias/ano)\n\n' +
              '💡 Truque de prova: "quem escolta, é diretor; quem libera sem vigiar, é juiz."',
              cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] }
          ]
        },
        {
          titulo: '⏱️ Remição de Pena — 🔥 MAIS COBRADO',
          artigos: [
            { id: 'mm_lep_remicao', artigo: 'Mapa Mental', titulo: 'Todas as formas de remição', frente: 'Monte o mapa mental completo da remição de pena', verso:
              '🎯 CENTRO: Remição (Art. 126-130)\n' +
              '├─ TRABALHO: 3 dias trabalhados = 1 dia remido (jornada 6-8h/dia)\n' +
              '├─ TRABALHO EXTERNO: reduz até 1/4 da pena\n' +
              '├─ ESTUDO: 12h de frequência escolar (mín. 3 dias) = 1 dia remido\n' +
              '├─ ESTUDO + TRABALHO: podem ser cumulados no mesmo dia (mas com jornadas compatíveis)\n' +
              '├─ CONCLUSÃO DE ENSINO: acréscimo de 1/3 do tempo remido por estudo se concluir fundamental/médio/superior no cumprimento da pena\n' +
              '├─ LEITURA: 1 livro/mês avaliado = 4 dias remidos (máx. 12 livros/ano = 48 dias)\n' +
              '├─ QUEM PODE REMIR: condenado em regime fechado, semiaberto (trabalho e estudo) e ABERTO/livramento condicional (só estudo)\n' +
              '├─ PERDA POR FALTA GRAVE: juiz pode revogar ATÉ 1/3 dos dias remidos (nunca a totalidade) — não é automática\n' +
              '└─ EFEITO: tempo remido conta como pena cumprida "para todos os efeitos"',
              cobrado: 'hot', anos: ['2024', '2023', '2022', '2021', '2020'] }
          ]
        },
        {
          titulo: '📈 Progressão e Regressão de Regime — 🔥 MUITO COBRADO',
          artigos: [
            { id: 'mm_lep_progressao', artigo: 'Mapa Mental', titulo: 'Percentuais do Pacote Anticrime', frente: 'Monte o mapa dos percentuais de progressão (Art. 112, Lei 13.964/19)', verso:
              '🎯 CENTRO: Progressão de Regime (Art. 112 LEP, após Pacote Anticrime)\n' +
              '├─ 16%: primário, crime comum, sem violência/grave ameaça\n' +
              '├─ 20%: reincidente, crime comum, sem violência/grave ameaça\n' +
              '├─ 25%: primário, crime com violência/grave ameaça\n' +
              '├─ 30%: reincidente, crime com violência/grave ameaça\n' +
              '├─ 40%: primário, crime hediondo/equiparado\n' +
              '├─ 50%: comandante de organização criminosa OU crime hediondo com resultado morte (vedado livramento condicional)\n' +
              '├─ 60%: reincidente em crime hediondo/equiparado\n' +
              '├─ 70%: reincidente em crime hediondo/equiparado com resultado morte\n' +
              '├─ REQUISITO OBJETIVO + SUBJETIVO: cumprir o percentual da pena + bom comportamento carcerário (atestado pelo diretor)\n' +
              '└─ REGRESSÃO (Art. 118): cometer fato definido como crime doloso, falta grave, ou sofrer condenação por crime anterior que somado torne incabível o regime atual',
              cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '🏥 Assistência ao Preso — 🔥 MUITO COBRADO',
          artigos: [
            { id: 'mm_lep_assistencia', artigo: 'Mapa Mental', titulo: 'As 6 formas de assistência', frente: 'Monte o mapa das 6 formas de assistência ao preso (Art. 10-27)', verso:
              '🎯 CENTRO: Assistência ao Preso — dever do Estado (Art. 10)\n' +
              '├─ MATERIAL (Art. 12-13): alimentação, vestuário, instalações higiênicas\n' +
              '├─ SAÚDE (Art. 14): médica, farmacêutica, odontológica — caráter preventivo e curativo\n' +
              '├─ JURÍDICA (Art. 15-16): para quem não tem recursos; unidades federativas devem ter núcleos, com participação da OAB\n' +
              '├─ EDUCACIONAL (Art. 17-21): ensino fundamental obrigatório; biblioteca obrigatória em cada estabelecimento\n' +
              '├─ SOCIAL (Art. 22-23): amparo ao preso e preparação para o retorno à liberdade\n' +
              '├─ RELIGIOSA (Art. 24): liberdade de culto, capelas ou locais para culto\n' +
              '└─ AO EGRESSO (Art. 25-27): orientação e apoio por 2 anos após a soltura (liberado definitivo ou condicional)\n\n' +
              '💡 Mnemônico: MA-SA-JU-ED-SO-RE',
              cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] }
          ]
        },
        {
          titulo: '⚠️ Faltas Disciplinares e RDD — 🔥 MUITO COBRADO',
          artigos: [
            { id: 'mm_lep_faltas', artigo: 'Mapa Mental', titulo: 'Faltas graves e RDD', frente: 'Monte o mapa das faltas disciplinares e do RDD', verso:
              '🎯 CENTRO: Disciplina (Art. 44-60)\n' +
              '├─ CLASSIFICAÇÃO: leves e médias (legislação local) / GRAVES (previstas na própria LEP, Art. 50-52)\n' +
              '├─ PRINCIPAIS FALTAS GRAVES: fuga, posse de instrumento para ofender integridade física, posse de celular, incitar subversão da ordem, participar de organização criminosa, praticar fato previsto como crime doloso\n' +
              '├─ SANÇÕES (Art. 53): advertência verbal, repreensão, suspensão/restrição de direitos, isolamento (máx. 30 dias), inclusão no RDD\n' +
              '├─ RDD — PRAZO: até 2 anos, renovável por nova falta grave de mesma espécie\n' +
              '├─ RDD — CONDIÇÕES: cela individual, visitas semanais de 2 pessoas (sem contato físico), banho de sol de 2h/dia, sem trabalho/lazer/atividades educacionais coletivas\n' +
              '├─ RDD — QUEM PODE SER INCLUÍDO: preso provisório ou condenado, nacional ou estrangeiro, que apresente alto risco ou fundada suspeita de envolvimento com organização criminosa\n' +
              '└─ EFEITO DA FALTA GRAVE: interrompe prazo para progressão (não zera, reinicia a contagem) e pode gerar regressão + perda de até 1/3 dos dias remidos',
              cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '⚒️ Trabalho do Preso — remuneração',
          artigos: [
            { id: 'mm_lep_trabalho', artigo: 'Mapa Mental', titulo: 'Trabalho e remuneração', frente: 'Monte o mapa do trabalho do preso (Art. 28-37)', verso:
              '🎯 CENTRO: Trabalho do Preso\n' +
              '├─ NATUREZA: dever social + condição de dignidade humana; finalidade educativa e produtiva\n' +
              '├─ REGIME CLT: NÃO se aplica\n' +
              '├─ OBRIGATORIEDADE: condenado é OBRIGADO; preso PROVISÓRIO é facultativo\n' +
              '├─ REMUNERAÇÃO MÍNIMA: 3/4 do salário mínimo\n' +
              '├─ DESTINAÇÃO DO VALOR: indenização de danos, assistência à família, despesas pessoais, ressarcimento ao Estado, formação de pecúlio\n' +
              '├─ JORNADA: 6 a 8 horas diárias, com descanso aos domingos e feriados\n' +
              '└─ TRABALHO EXTERNO: admissível em obras/serviços públicos (regime fechado, com cautelas) e no semiaberto',
              cobrado: 'hot', anos: ['2024', '2023', '2021'] }
          ]
        }
      ]
    },
    {
      id: 'mapa_penal_processual',
      disciplina: 'penal',
      nome: '🧠 Mapa Mental — Penal e Processual Penal (visão geral)',
      sigla: 'CP e CPP — resumo por ramos',
      icon: '🧠',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🚨 Prisão em Flagrante — 🔥 MAIS COBRADO',
          artigos: [
            { id: 'mm_penal_flagrante', artigo: 'Mapa Mental', titulo: 'As 4 modalidades de flagrante', frente: 'Monte o mapa das modalidades de prisão em flagrante (Art. 302 CPP)', verso:
              '🎯 CENTRO: Prisão em Flagrante (Art. 301-310 CPP)\n' +
              '├─ PRÓPRIO/PERFEITO (Art. 302, I e II): está cometendo OU acaba de cometer\n' +
              '├─ IMPRÓPRIO/QUASE-FLAGRANTE (Art. 302, III): perseguido logo após, situação que faça presumir autoria\n' +
              '├─ PRESUMIDO/FICTO (Art. 302, IV): encontrado logo depois com instrumentos/objetos que façam presumir autoria\n' +
              '├─ QUEM PODE PRENDER: qualquer do povo (facultativo) / autoridades policiais (obrigatório) — Art. 301\n' +
              '├─ PRAZO PARA COMUNICAR AO JUIZ: imediatamente (até 24h), com remessa do auto de prisão\n' +
              '├─ AUDIÊNCIA DE CUSTÓDIA: apresentação do preso ao juiz em até 24h\n' +
              '├─ DESTINO DO FLAGRANTE: juiz pode relaxar (ilegal), converter em preventiva, ou conceder liberdade provisória (com ou sem fiança/medidas cautelares)\n' +
              '└─ FLAGRANTE FORJADO/PREPARADO (Súmula 145 STF): crime impossível se a polícia provoca e impede a consumação — NÃO gera prisão válida',
              cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '⛓️ Prisão Preventiva — 🔥 MUITO COBRADO',
          artigos: [
            { id: 'mm_penal_preventiva', artigo: 'Mapa Mental', titulo: 'Fundamentos e requisitos', frente: 'Monte o mapa dos fundamentos da prisão preventiva (Art. 311-316 CPP)', verso:
              '🎯 CENTRO: Prisão Preventiva\n' +
              '├─ FUNDAMENTOS (Art. 312): garantia da ordem pública, garantia da ordem econômica, conveniência da instrução criminal, assegurar aplicação da lei penal\n' +
              '├─ REQUISITOS: prova da existência do crime (fumus commissi delicti) + indício suficiente de autoria\n' +
              '├─ QUEM DECRETA: SOMENTE o juiz, mediante representação da autoridade policial, MP, querelante, assistente, ou de ofício durante o processo (NUNCA de ofício na fase de investigação, desde o Pacote Anticrime)\n' +
              '├─ CABIMENTO: crimes dolosos com pena máxima > 4 anos, reincidência em doloso, violência doméstica (para garantir medidas protetivas), dúvida sobre identidade\n' +
              '├─ SUBSIDIARIEDADE (Art. 282, §6º): só cabe se outras medidas cautelares (Art. 319) forem insuficientes\n' +
              '├─ REVISÃO OBRIGATÓRIA: a cada 90 dias o juiz deve reavaliar a necessidade de manutenção (Art. 316, § único)\n' +
              '└─ PEGADINHA CLÁSSICA: preventiva NÃO tem prazo fixo em lei, mas exige fundamentação concreta — não pode ser só a gravidade abstrata do crime (Súmula 231-parecida do STJ e jurisprudência do STF)',
              cobrado: 'hot', anos: ['2024', '2023', '2021'] }
          ]
        },
        {
          titulo: '🛡️ Excludentes de Ilicitude — 🔥 MUITO COBRADO',
          artigos: [
            { id: 'mm_penal_excludentes', artigo: 'Mapa Mental', titulo: 'As 4 excludentes (Art. 23-25 CP)', frente: 'Monte o mapa das excludentes de ilicitude', verso:
              '🎯 CENTRO: Excludentes de Ilicitude (Art. 23 CP)\n' +
              '├─ ESTADO DE NECESSIDADE (Art. 24): sacrificar bem alheio para salvar de perigo atual, não causado voluntariamente, que não podia evitar de outro modo — não age quem tinha dever legal de enfrentar o perigo\n' +
              '├─ LEGÍTIMA DEFESA (Art. 25): repelir injusta agressão, atual ou iminente, a direito próprio ou alheio, usando moderadamente os meios necessários\n' +
              '├─ ESTRITO CUMPRIMENTO DO DEVER LEGAL: age quem cumpre obrigação imposta por lei (ex: policial que usa força proporcional em ação legítima)\n' +
              '├─ EXERCÍCIO REGULAR DE DIREITO: exercer uma faculdade prevista em lei, dentro dos limites (ex: prisão em flagrante por particular)\n' +
              '├─ EXCESSO (Art. 23, § único): pune-se o excesso doloso ou culposo, mesmo nas excludentes\n' +
              '└─ DIFERENÇA-CHAVE: legítima defesa reage a AGRESSÃO HUMANA; estado de necessidade reage a PERIGO (pode ser de qualquer origem, inclusive natural)',
              cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '📋 Inquérito Policial — 🔥 MUITO COBRADO',
          artigos: [
            { id: 'mm_penal_ip', artigo: 'Mapa Mental', titulo: 'Características do inquérito', frente: 'Monte o mapa das características do Inquérito Policial (Art. 4-23 CPP)', verso:
              '🎯 CENTRO: Inquérito Policial\n' +
              '├─ NATUREZA: procedimento administrativo, inquisitivo, escrito, sigiloso (sigilo relativo — Súmula Vinculante 14 permite acesso do advogado a provas já documentadas)\n' +
              '├─ CARACTERÍSTICAS: dispensável (MP pode oferecer denúncia sem IP se tiver elementos), discricionário, oficial, oficioso\n' +
              '├─ QUEM INSTAURA: autoridade policial (de ofício ou por requisição do MP/juiz, ou a requerimento do ofendido)\n' +
              '├─ PRAZO PARA CONCLUSÃO: 10 dias se o indiciado está preso / 30 dias se solto (prazos podem variar em leis especiais, ex: Lei de Drogas: 30 preso / 90 solto)\n' +
              '├─ NÃO PRECISA OBSERVAR: ampla defesa e contraditório (não é processo, é apenas investigação preliminar)\n' +
              '├─ ARQUIVAMENTO: hoje é feito diretamente pelo MP (Art. 28 CPP, redação do Pacote Anticrime), com comunicação ao juiz e possibilidade de revisão pela instância superior do MP\n' +
              '└─ VALOR PROBATÓRIO: elementos do IP não fundamentam condenação sozinhos — só se confirmados por prova produzida em contraditório judicial (Art. 155 CPP)',
              cobrado: 'hot', anos: ['2024', '2022', '2021'] }
          ]
        },
        {
          titulo: '⚖️ Extinção da Punibilidade e Medidas Cautelares Alternativas',
          artigos: [
            { id: 'mm_penal_extincao', artigo: 'Mapa Mental', titulo: 'Hipóteses do Art. 107 CP', frente: 'Monte o mapa das causas de extinção da punibilidade', verso:
              '🎯 CENTRO: Extinção da Punibilidade (Art. 107 CP)\n' +
              '├─ MORTE DO AGENTE (certidão de óbito — se falsa, retoma-se a punibilidade)\n' +
              '├─ ANISTIA, GRAÇA E INDULTO\n' +
              '├─ ABOLITIO CRIMINIS (retroatividade da lei que deixa de considerar o fato crime)\n' +
              '├─ PRESCRIÇÃO, DECADÊNCIA E PEREMPÇÃO\n' +
              '├─ RENÚNCIA/PERDÃO DO OFENDIDO (ação penal privada)\n' +
              '├─ RETRATAÇÃO DO AGENTE (nos casos em que a lei admite)\n' +
              '├─ PERDÃO JUDICIAL (nos casos previstos em lei)\n' +
              '└─ 🎯 MEDIDAS CAUTELARES ALTERNATIVAS (Art. 319 CPP): comparecimento periódico em juízo, proibição de acesso/frequência a lugares, proibição de contato com pessoa determinada, proibição de ausentar-se da comarca, recolhimento domiciliar noturno, suspensão do exercício de função pública, internação provisória, monitoração eletrônica, fiança',
              cobrado: 'medium', anos: ['2023', '2022'] }
          ]
        }
      ]
    }
  ]
};
