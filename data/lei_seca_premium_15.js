const LEI_SECA_PREMIUM_15 = {
  decks: [
    {
      id: 'lei_drogas',
      disciplina: 'legislacao',
      nome: 'Lei de Drogas - Lei 11.343/06',
      sigla: 'Lei 11.343/06',
      icon: '💊',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Posse e Tráfico de Drogas',
          artigos: [
            {
              id: 'art_28_drogas_posse',
              numero: 'Art. 28 (Posse para Consumo Pessoal)',
              texto: 'Quem adquirir, guardar, tiver em depósito, transportar ou trouxer consigo, para consumo pessoal, drogas sem autorização:\nI - advertência sobre os efeitos das drogas;\nII - prestação de serviços à comunidade;\nIII - medida educativa de comparecimento a programa ou curso.\n⚠️ NOTA: NÃO há pena privativa de liberdade (despenalização). O prazo máximo das penas II e III é de 5 meses (10 meses se reincidente).',
              destaques: ['NÃO há pena de prisão', 'advertência, serviços e curso', 'prazo máx: 5 meses (10 se reincidente)']
            },
            {
              id: 'art_33_drogas_trafico',
              numero: 'Art. 33 (Tráfico Ilícito de Drogas)',
              texto: 'Importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer drogas, ainda que gratuitamente.\nPena: reclusão de 5 a 15 anos e pagamento de 500 a 1.500 dias-multa.',
              destaques: ['crime de perigo abstrato e ação múltipla', 'reclusão de 5 a 15 anos', 'gratuito ou oneroso']
            },
            {
              id: 'art_33_p4_trafico_privilegiado',
              numero: 'Art. 33, §4º (Tráfico Privilegiado)',
              texto: 'Nos delitos de tráfico, as penas poderão ser reduzidas de 1/6 a 2/3, desde que o agente seja:\n1) primário;\n2) de bons antecedentes;\n3) não se dedique às atividades criminosas;\n4) não integre organização criminosa.\n⚠️ NOTA: O tráfico privilegiado NÃO é crime hediondo!',
              destaques: ['redução de 1/6 a 2/3', 'agente primário + bons antecedentes', 'NÃO é hediondo']
            },
            {
              id: 'art_35_associacao_trafico',
              numero: 'Art. 35 (Associação para o Tráfico)',
              texto: 'Associarem-se duas ou mais pessoas para o fim de praticar, reiteradamente ou não, qualquer dos crimes previstos nos arts. 33, caput, e 34.\nPena: reclusão de 3 a 10 anos.\n⚠️ NOTA: Exige estabilidade e permanência, e NÃO é crime hediondo/equiparado.',
              destaques: ['associação de 2 ou mais pessoas', 'exige vínculo estável e permanente', 'NÃO é hediondo']
            },
            {
              id: 'art_40_drogas_aumento',
              numero: 'Art. 40 (Causas de Aumento de Pena)',
              texto: 'As penas dos crimes de tráfico e associação aumentam-se de 1/6 a 2/3 se:\n- Caráter transnacional do delito;\n- Praticado com violência, grave ameaça ou emprego de arma de fogo;\n- Nas imediações de estabelecimentos prisionais, de ensino, hospitais, etc.;\n- Tráfico interestadual.',
              destaques: ['aumento de 1/6 a 2/3', 'transnacional ou interestadual', 'imediações de prisões/escolas']
            },
            {
              id: 'art_44_drogas_vedacoes',
              numero: 'Art. 44 (Inafiançabilidade e Liberdade)',
              texto: 'Os crimes de tráfico de drogas (art. 33) são inafiançáveis e insuscetíveis de graça, anistia, indulto e fiança.\n⚠️ NOTA: O STF considerou inconstitucional a proibição abstrata de liberdade provisória para o tráfico. Cabe liberdade provisória sem fiança.',
              destaques: ['inafiançáveis', 'insuscetíveis de graça/anistia/indulto', 'cabe liberdade provisória sem fiança']
            },
            {
              id: 'art_33_p3_oferecimento_consumo',
              numero: 'Art. 33, §3º (Uso Compartilhado)',
              texto: 'Oferecer droga, eventualmente e sem objetivo de lucro, a pessoa de seu relacionamento, para juntos a consumirem.\nPena: detenção de 6 meses a 1 ano, e multa.\n⚠️ NOTA: É infração de menor potencial ofensivo, sujeita à Lei 9.099/95.',
              destaques: ['eventualmente e sem fins lucrativos', 'pessoa de seu relacionamento', 'detenção de 6 meses a 1 ano']
            }
          ]
        }
      ]
    },
    {
      id: 'cpp_prisoes',
      disciplina: 'penal',
      nome: 'Processo Penal - Prisões',
      sigla: 'CPP - Arts. 301-316',
      icon: '🚓',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Prisão em Flagrante e Preventiva',
          artigos: [
            {
              id: 'art_302_flagrante_proprio',
              numero: 'Flagrante Próprio (Art. 302, I e II)',
              texto: 'Considera-se em flagrante delito quem:\nI - está cometendo a infração penal;\nII - acaba de cometê-la.',
              destaques: ['está cometendo', 'acaba de cometer']
            },
            {
              id: 'art_302_flagrante_improprio',
              numero: 'Flagrante Impróprio/Imperfeito (Art. 302, III)',
              texto: 'Considera-se em flagrante delito quem:\nIII - é perseguido, logo após, pela autoridade, pela vítima ou por qualquer pessoa, em situação que faça presumir ser autor da infração.',
              destaques: ['perseguido logo após', 'situação que faça presumir ser autor']
            },
            {
              id: 'art_302_flagrante_presumido',
              numero: 'Flagrante Presumido/Ficto (Art. 302, IV)',
              texto: 'Considera-se em flagrante delito quem:\nIV - é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor da infração.\n⚠️ NOTA: Aqui NÃO há perseguição, o agente é apenas encontrado com os objetos.',
              destaques: ['encontrado logo depois', 'com objetos/armas do crime', 'NÃO exige perseguição']
            },
            {
              id: 'art_306_audiencia_custodia',
              numero: 'Comunicação e Prazo (Art. 306)',
              texto: 'A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente, ao Ministério Público e à família do preso ou à pessoa por ele indicada.\nO auto de prisão em flagrante (APF) será encaminhado ao juiz em até 24 HORAS, prazo em que também deve ser entregue a Nota de Culpa ao preso.',
              destaques: ['comunicação imediata', 'APF enviado em até 24 horas', 'Nota de Culpa entregue em até 24 horas']
            },
            {
              id: 'art_310_juiz_custodia',
              numero: 'Decisão do Juiz na Custódia (Art. 310)',
              texto: 'Ao receber o auto de prisão em flagrante, o juiz deverá fundamentadamente:\nI - relaxar a prisão ilegal;\nII - converter a prisão em flagrante em preventiva (se presentes os requisitos);\nIII - conceder liberdade provisória, com ou sem fiança.\n⚠️ NOTA: Juiz NÃO pode decretar preventiva de ofício.',
              destaques: ['relaxar prisão ilegal', 'converter em preventiva', 'conceder liberdade provisória', 'NÃO cabe preventiva de ofício']
            },
            {
              id: 'art_312_preventiva_requisitos',
              numero: 'Prisão Preventiva: Requisitos (Art. 312)',
              texto: 'A prisão preventiva poderá ser decretada como garantia da ordem pública, da ordem econômica, por conveniência da instrução criminal ou para assegurar a aplicação da lei penal, quando houver prova da existência do crime e indício suficiente de autoria.',
              destaques: ['garantia da ordem pública', 'conveniência da instrução criminal', 'assegurar aplicação da lei penal', 'prova da materialidade + indícios de autoria']
            },
            {
              id: 'art_313_preventiva_admissibilidade',
              numero: 'Preventiva: Admissibilidade (Art. 313)',
              texto: 'Será admitida a decretação da prisão preventiva:\nI - nos crimes dolosos punidos com pena privativa de liberdade máxima superior a 4 anos;\nII - se tiver sido condenado por outro crime doloso, em sentença transitada em julgado (reincidente em crime doloso);\nIII - se o crime envolver violência doméstica contra mulher, criança, idoso, etc.',
              destaques: ['crimes dolosos com pena máxima superior a 4 anos', 'reincidente em crime doloso', 'violência doméstica e familiar']
            }
          ]
        }
      ]
    },
    {
      id: 'lep_remicao_saidas',
      disciplina: 'lep',
      nome: 'LEP - Remição e Saídas',
      sigla: 'LEP - Arts. 120-130',
      icon: '🔒',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Remição de Pena e Saídas do Estabelecimento',
          artigos: [
            {
              id: 'art_126_lep_remicao',
              numero: 'Remição de Pena (Art. 126)',
              texto: 'O condenado que cumpre a pena em regime fechado ou semiaberto poderá remir, por trabalho ou por estudo, parte do tempo de execução da pena:\n- Por trabalho: 1 dia de pena a cada 3 dias de trabalho.\n- Por estudo: 1 dia de pena a cada 12 horas de frequência escolar (divididas em no mínimo 3 dias).',
              destaques: ['apenas nos regimes fechado e semiaberto', 'trabalho: 1 dia para cada 3 dias', 'estudo: 1 dia para cada 12 horas']
            },
            {
              id: 'art_127_lep_perda_remicao',
              numero: 'Perda dos Dias Remidos (Art. 127)',
              texto: 'Em caso de falta grave, o juiz da execução poderá revogar até 1/3 (um terço) do tempo remido, recomeçando o contagem a partir da data da infração disciplinar.',
              destaques: ['limite máximo de perda de 1/3', 'decisão do juiz da execução', 'falta disciplinar grave']
            },
            {
              id: 'art_120_lep_permissao_saida',
              numero: 'Permissão de Saída (Art. 120)',
              texto: 'Os condenados que cumprem pena em regime fechado ou semiaberto, e os presos provisórios, obterão permissão de saída do estabelecimento, mediante escolta, em razão de:\nI - falecimento ou doença grave do cônjuge, companheiro, ascendente, descendente ou irmão;\nII - necessidade de tratamento médico.',
              destaques: ['regime fechado, semiaberto e provisórios', 'mediante ESCOLTA', 'falecimento/doença de parentes ou tratamento médico']
            },
            {
              id: 'art_122_lep_saida_temporaria',
              numero: 'Saída Temporária (Art. 122)',
              texto: 'Os condenados que cumprem pena em regime semiaberto poderão obter autorização para saída temporária do estabelecimento, sem vigilância direta (sem escolta), nos casos de:\nI - visita à família;\nII - frequência a curso;\nIII - participação em atividades que concorram para o retorno ao convívio social.',
              destaques: ['apenas regime SEMIABERTO', 'SEM vigilância direta (sem escolta)', 'visita à família, cursos e retorno social']
            },
            {
              id: 'art_123_lep_saida_requisitos',
              numero: 'Saída Temporária: Requisitos (Art. 123)',
              texto: 'A autorização será concedida por ato do Juiz da Execução, ouvidos o MP e a administração penitenciária, preenchidos os requisitos:\nI - comportamento adequado;\nII - cumprimento mínimo de 1/6 da pena (se primário) ou 1/4 (se reincidente);\nIII - compatibilidade do benefício.',
              destaques: ['concedida pelo JUIZ', 'cumprimento de 1/6 (primário) ou 1/4 (reincidente)', 'comportamento adequado']
            },
            {
              id: 'art_120_122_lep_diferencas',
              numero: 'Resumo: Permissão vs Saída Temporária',
              texto: '1) Permissão de Saída: concedida pelo Diretor do estabelecimento; exige escolta; cabe a fechado/semiaberto/provisório; motivos são saúde/luto.\n2) Saída Temporária: concedida pelo Juiz; não tem escolta (mas pode monitoramento eletrônico); cabe apenas a semiaberto; motivos são família/estudo.',
              destaques: ['Diretor vs Juiz', 'com escolta vs sem escolta', 'fechado/semiaberto/provisório vs apenas semiaberto']
            }
          ]
        }
      ]
    }
  ]
};
