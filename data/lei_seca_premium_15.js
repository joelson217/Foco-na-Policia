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
