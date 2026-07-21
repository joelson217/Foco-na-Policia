const LEI_SECA_PREMIUM_7 = {
  decks: [
    {
      id: 'lei_drogas_crimes',
      disciplina: 'legislacao',
      nome: 'Lei de Drogas - Crimes e Penas',
      sigla: 'Lei 11.343/06',
      icon: '💊',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Crimes e Distinções',
          artigos: [
            {
              numero: 'Art. 28 (Usuário)',
              texto: 'Quem adquirir, guardar, tiver em depósito, transportar ou trouxer consigo, para consumo pessoal, drogas sem autorização: NÃO há pena de prisão.\nPenas aplicadas:\nI - advertência;\nII - prestação de serviços à comunidade;\nIII - medida educativa de comparecimento a programa.\nPrazo máximo: 5 (cinco) meses para usuário; 10 (dez) meses para reincidente.',
              destaques: ['usuário NÃO vai preso', 'advertência', 'prestação de serviços', 'medida educativa', '5 meses ou 10 meses para reincidente']
            },
            {
              numero: 'Art. 33 (Traficante)',
              texto: 'Importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer drogas, ainda que gratuitamente, sem autorização ou em desacordo com determinação legal ou regulamentar.\nPena: reclusão de 5 (cinco) a 15 (quinze) anos, e pagamento de 500 a 1.500 dias-multa.',
              destaques: ['mesmo que gratuitamente', 'reclusão de 5 a 15 anos', '500 a 1.500 dias-multa', 'crime equiparado a hediondo']
            },
            {
              numero: 'Art. 33, § 4º (Tráfico Privilegiado)',
              texto: 'Nos delitos do caput, as penas poderão ser reduzidas de 1/6 (um sexto) a 2/3 (dois terços) se o agente for primário, de bons antecedentes, não se dedique às atividades criminosas nem integre organização criminosa.',
              destaques: ['primário', 'bons antecedentes', 'não se dedica ao crime', 'não integra organização criminosa', 'redução de 1/6 a 2/3']
            }
          ]
        }
      ]
    },
    {
      id: 'abuso_autoridade_crimes',
      disciplina: 'legislacao',
      nome: 'Abuso de Autoridade - Crimes',
      sigla: 'Lei 13.869/19',
      icon: '🚔',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Crimes Típicos',
          artigos: [
            {
              numero: 'Art. 9º (Prisão Ilegal)',
              texto: 'Decretar medida de privação da liberdade em manifesta desconformidade com as hipóteses legais:\nPena: detenção de 1 a 4 anos, e multa.',
              destaques: ['privação da liberdade ilegal', 'detenção de 1 a 4 anos']
            },
            {
              numero: 'Art. 10 (Condução Coercitiva Ilegal)',
              texto: 'Implementar medida privativa de liberdade sem as formalidades legais ou com abuso de poder:\nPena: detenção de 1 a 4 anos, e multa.',
              destaques: ['sem formalidades legais', 'abuso de poder', 'detenção de 1 a 4 anos']
            },
            {
              numero: 'Art. 22 (Violação de Domicílio)',
              texto: 'Invadir ou adentrar, clandestina ou astuciosamente, ou à revelia da vontade do ocupante, imóvel alheio ou suas dependências, ou lá permanecer, sem determinação judicial ou fora das condições estabelecidas em lei:\nPena: detenção de 1 a 4 anos, e multa.',
              destaques: ['invadir imóvel clandestinamente', 'sem determinação judicial', 'detenção de 1 a 4 anos']
            },
            {
              numero: 'Art. 1º, § 1º (Elemento Subjetivo)',
              texto: 'As condutas descritas nesta Lei são DOLOSAS (não há crime de abuso de autoridade culposo). Além disso, exige-se finalidade específica: prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal.',
              destaques: ['DOLOSAS (não existe abuso culposo)', 'prejudicar outrem', 'beneficiar a si mesmo', 'por capricho ou satisfação pessoal']
            }
          ]
        }
      ]
    },
    {
      id: 'cp_crimes_funcionarios',
      disciplina: 'penal',
      nome: 'CP - Crimes contra a Administração',
      sigla: 'CP - Arts. 312-326',
      icon: '⚖️',
      destaque: false,
      peso: 1,
      secoes: [
        {
          titulo: 'Peculato e Corrupção',
          artigos: [
            {
              numero: 'Art. 312 (Peculato)',
              texto: 'Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo em proveito próprio ou alheio:\nPena: reclusão de 2 a 12 anos, e multa.\n§ 1º - Peculato culposo: pena é de detenção de 3 meses a 1 ano.',
              destaques: ['apropriar-se', 'posse em razão do cargo', 'desviá-lo', 'reclusão 2 a 12 anos', 'peculato culposo: detenção 3 meses a 1 ano']
            },
            {
              numero: 'Art. 317 (Corrupção Passiva)',
              texto: 'Solicitar ou receber, para si ou para outrem, direta ou indiretamente, ainda que fora da função, vantagem indevida, ou aceitar promessa de tal vantagem:\nPena: reclusão de 2 a 12 anos, e multa.',
              destaques: ['solicitar OU receber', 'vantagem indevida', 'aceitar PROMESSA', 'reclusão 2 a 12 anos']
            },
            {
              numero: 'Art. 333 (Corrupção Ativa)',
              texto: 'Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício:\nPena: reclusão de 2 a 12 anos, e multa.\n(Praticada pelo particular que corrompe o funcionário)',
              destaques: ['oferecer OU prometer', 'praticada pelo particular', 'vantagem indevida', 'reclusão 2 a 12 anos']
            }
          ]
        }
      ]
    }
  ]
};
