// ============================================================
// QUESTIONS_CONTABILIDADE — Disciplina "Contabilidade Geral", exclusiva
// do bloco de Conhecimentos Específicos do cargo de AGENTE na PCPE
// (Polícia Civil de PE), banca Cebraspe. Conteúdo genérico de
// contabilidade básica (patrimônio, balanço, DRE, partidas dobradas).
// ============================================================

const QUESTIONS_CONTABILIDADE = [
  {
    id: 'contab_1',
    disciplina: 'contabilidade',
    topico: 'Conceito de Patrimônio',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Em Contabilidade, o patrimônio de uma entidade é constituído pelo conjunto de:',
    alternativas: [
      { letra: 'A', texto: 'Bens, direitos e obrigações, pertencentes ou devidos pela entidade, avaliáveis em moeda.' },
      { letra: 'B', texto: 'Apenas os bens físicos (imóveis, veículos, equipamentos) de propriedade da entidade.', comentario: 'Incorreta. O patrimônio abrange também direitos (como contas a receber) e obrigações (passivo), não se limitando aos bens físicos.' },
      { letra: 'C', texto: 'Somente as obrigações (dívidas) da entidade perante terceiros.', comentario: 'Incorreta. As obrigações formam apenas o Passivo; o patrimônio também compreende os bens e direitos (Ativo) da entidade.' },
      { letra: 'D', texto: 'Exclusivamente o capital social investido pelos sócios.', comentario: 'Incorreta. O capital social é apenas um componente do Patrimônio Líquido; o patrimônio total inclui também o Ativo e o Passivo.' }
    ],
    gabarito: 'A',
    justificativa: 'O patrimônio é formado pelo conjunto de bens, direitos (que constituem o ativo) e obrigações (que constituem o passivo) de uma entidade, todos avaliáveis em moeda.'
  },
  {
    id: 'contab_2',
    disciplina: 'contabilidade',
    topico: 'Equação Fundamental do Patrimônio',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A equação fundamental da Contabilidade estabelece que:',
    alternativas: [
      { letra: 'A', texto: 'Ativo = Passivo + Patrimônio Líquido.' },
      { letra: 'B', texto: 'Ativo = Passivo - Patrimônio Líquido.', comentario: 'Incorreta. A relação correta soma o Passivo e o Patrimônio Líquido para obter o Ativo, e não os subtrai.' },
      { letra: 'C', texto: 'Passivo = Ativo + Patrimônio Líquido.', comentario: 'Incorreta. Isso inverteria a equação fundamental; o correto é Ativo = Passivo + Patrimônio Líquido.' },
      { letra: 'D', texto: 'Patrimônio Líquido = Ativo + Passivo.', comentario: 'Incorreta. O Patrimônio Líquido é a DIFERENÇA entre Ativo e Passivo (PL = Ativo - Passivo), e não a soma dos dois.' }
    ],
    gabarito: 'A',
    justificativa: 'A equação fundamental do patrimônio (ou equação contábil básica) estabelece que o Ativo é igual à soma do Passivo (obrigações com terceiros) e do Patrimônio Líquido (obrigações com os sócios/capital próprio): Ativo = Passivo + PL.'
  },
  {
    id: 'contab_3',
    disciplina: 'contabilidade',
    topico: 'Classificação de Contas - Ativo',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Contas como "Caixa", "Estoques" e "Contas a Receber" são classificadas, no Balanço Patrimonial, como:',
    alternativas: [
      { letra: 'A', texto: 'Ativo.' },
      { letra: 'B', texto: 'Passivo.', comentario: 'Incorreta. O Passivo reúne as obrigações da entidade perante terceiros, e não os bens e direitos como caixa, estoques e contas a receber.' },
      { letra: 'C', texto: 'Patrimônio Líquido.', comentario: 'Incorreta. O Patrimônio Líquido representa os recursos próprios da entidade (diferença entre Ativo e Passivo), e não contas como caixa ou estoques.' },
      { letra: 'D', texto: 'Despesas do exercício.', comentario: 'Incorreta. Despesas são contas de resultado, que reduzem o patrimônio no período; caixa, estoques e contas a receber são bens e direitos, classificados no Ativo.' }
    ],
    gabarito: 'A',
    justificativa: 'Caixa, Estoques e Contas a Receber são bens e direitos da entidade, classificados no grupo do Ativo do Balanço Patrimonial.'
  },
  {
    id: 'contab_4',
    disciplina: 'contabilidade',
    topico: 'Método das Partidas Dobradas',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O método das partidas dobradas, base do registro contábil, estabelece que:',
    alternativas: [
      { letra: 'A', texto: 'Todo lançamento contábil envolve, no mínimo, uma conta debitada e uma conta creditada, de igual valor.' },
      { letra: 'B', texto: 'Todo lançamento contábil deve ser registrado apenas a débito, nunca a crédito.', comentario: 'Incorreta. O método das partidas dobradas exige registro simultâneo a débito E a crédito, nunca apenas em um dos lados.' },
      { letra: 'C', texto: 'Débitos e créditos são registrados em livros contábeis totalmente independentes, sem qualquer relação entre si.', comentario: 'Incorreta. Débitos e créditos de um mesmo lançamento estão diretamente relacionados e devem ser registrados de forma vinculada, com valores iguais.' },
      { letra: 'D', texto: 'O total de débitos pode ser diferente do total de créditos, desde que ambos sejam positivos.', comentario: 'Incorreta. Pelo método das partidas dobradas, o total de débitos deve ser sempre igual ao total de créditos, mantendo o equilíbrio contábil.' }
    ],
    gabarito: 'A',
    justificativa: 'Pelo método das partidas dobradas, todo fato contábil é registrado a débito em uma ou mais contas e a crédito em uma ou mais contas, sempre com valores totais iguais, mantendo o equilíbrio da equação patrimonial.'
  },
  {
    id: 'contab_5',
    disciplina: 'contabilidade',
    topico: 'Regime de Competência x Regime de Caixa',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Pelo regime de competência, adotado como regra geral na Contabilidade, as receitas e despesas devem ser reconhecidas:',
    alternativas: [
      { letra: 'A', texto: 'No período em que ocorrerem, independentemente do efetivo recebimento ou pagamento em dinheiro.' },
      { letra: 'B', texto: 'Somente no momento em que houver o efetivo recebimento ou pagamento em dinheiro.', comentario: 'Incorreta. Essa é a lógica do regime de CAIXA, e não do regime de competência, que reconhece receitas e despesas pelo fato gerador, independentemente do fluxo financeiro.' },
      { letra: 'C', texto: 'No exercício seguinte ao da sua ocorrência, para fins de simplificação contábil.', comentario: 'Incorreta. Não há postergação para o exercício seguinte; o regime de competência exige o reconhecimento no próprio período em que o fato ocorreu.' },
      { letra: 'D', texto: 'De forma discricionária, a critério exclusivo do contador responsável.', comentario: 'Incorreta. O reconhecimento de receitas e despesas segue critérios técnicos definidos (regime de competência), e não discricionariedade pessoal do contador.' }
    ],
    gabarito: 'A',
    justificativa: 'O regime de competência determina que receitas e despesas sejam reconhecidas no período em que efetivamente ocorrerem (fato gerador), independentemente do recebimento ou pagamento em dinheiro — diferente do regime de caixa, que considera apenas a movimentação financeira efetiva.'
  },
  {
    id: 'contab_6',
    disciplina: 'contabilidade',
    topico: 'Demonstração do Resultado do Exercício (DRE)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A Demonstração do Resultado do Exercício (DRE) tem por finalidade evidenciar:',
    alternativas: [
      { letra: 'A', texto: 'O resultado (lucro ou prejuízo) apurado pela entidade em determinado período, confrontando receitas e despesas.' },
      { letra: 'B', texto: 'A posição patrimonial (bens, direitos e obrigações) da entidade em uma data específica.', comentario: 'Incorreta. Essa é a finalidade do Balanço Patrimonial, e não da DRE, que evidencia o resultado do período.' },
      { letra: 'C', texto: 'Exclusivamente o saldo de caixa disponível ao final do exercício.', comentario: 'Incorreta. O saldo de caixa é evidenciado pela Demonstração dos Fluxos de Caixa (ou pelo próprio Balanço), e não pela DRE, que trata do resultado (lucro ou prejuízo).' },
      { letra: 'D', texto: 'A relação de bens do ativo imobilizado da entidade.', comentario: 'Incorreta. A relação de bens do ativo imobilizado consta de controles patrimoniais e do Balanço Patrimonial, não sendo a finalidade da DRE.' }
    ],
    gabarito: 'A',
    justificativa: 'A DRE evidencia o resultado do exercício (lucro ou prejuízo), confrontando as receitas, os custos e as despesas do período — diferente do Balanço Patrimonial, que retrata a posição patrimonial (ativo, passivo e PL) em uma data específica.'
  },
  {
    id: 'contab_7',
    disciplina: 'contabilidade',
    topico: 'Balanço Patrimonial',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O Balanço Patrimonial é a demonstração contábil que evidencia, em determinada data:',
    alternativas: [
      { letra: 'A', texto: 'A posição patrimonial da entidade, composta pelo Ativo, Passivo e Patrimônio Líquido.' },
      { letra: 'B', texto: 'O fluxo de entradas e saídas de caixa ao longo de todo o exercício.', comentario: 'Incorreta. O fluxo de entradas e saídas de caixa é evidenciado pela Demonstração dos Fluxos de Caixa, e não pelo Balanço Patrimonial, que retrata uma posição estática em uma data específica.' },
      { letra: 'C', texto: 'Exclusivamente o resultado (lucro ou prejuízo) do último trimestre.', comentario: 'Incorreta. O resultado do período é evidenciado pela Demonstração do Resultado do Exercício (DRE), e não pelo Balanço Patrimonial.' },
      { letra: 'D', texto: 'A evolução do patrimônio líquido ao longo de vários exercícios sociais.', comentario: 'Incorreta. Essa é a finalidade da Demonstração das Mutações do Patrimônio Líquido, e não do Balanço Patrimonial, que retrata uma posição em data específica.' }
    ],
    gabarito: 'A',
    justificativa: 'O Balanço Patrimonial evidencia a posição patrimonial e financeira da entidade em determinada data, apresentando o Ativo (bens e direitos), o Passivo (obrigações) e o Patrimônio Líquido (diferença entre Ativo e Passivo).'
  },
  {
    id: 'contab_8',
    disciplina: 'contabilidade',
    topico: 'Depreciação',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A depreciação, em Contabilidade, refere-se ao reconhecimento contábil:',
    alternativas: [
      { letra: 'A', texto: 'Da perda de valor de um bem do ativo imobilizado em decorrência do desgaste, uso ou obsolescência ao longo do tempo.' },
      { letra: 'B', texto: 'Do aumento do valor de mercado de um imóvel ao longo dos anos.', comentario: 'Incorreta. O aumento de valor de um bem é tratado por reavaliação ou valorização, conceito oposto à depreciação, que registra perda de valor.' },
      { letra: 'C', texto: 'Da entrada de novos recursos financeiros por meio de empréstimo bancário.', comentario: 'Incorreta. A entrada de recursos por empréstimo é um fato distinto, relacionado ao passivo (exigível), sem relação com a depreciação de bens do ativo imobilizado.' },
      { letra: 'D', texto: 'Do pagamento integral e imediato de um bem adquirido à vista.', comentario: 'Incorreta. O pagamento à vista é um fato financeiro distinto; a depreciação trata da perda de valor do bem ao longo de sua vida útil, independentemente da forma de pagamento.' }
    ],
    gabarito: 'A',
    justificativa: 'A depreciação reconhece contabilmente a perda de valor de bens do ativo imobilizado (máquinas, veículos, equipamentos) decorrente do desgaste pelo uso, ação da natureza ou obsolescência, distribuindo esse custo ao longo da vida útil estimada do bem.'
  },
  {
    id: 'contab_9',
    disciplina: 'contabilidade',
    topico: 'Plano de Contas',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'O plano de contas, em Contabilidade, consiste em:',
    alternativas: [
      { letra: 'A', texto: 'Uma estrutura organizada e codificada de todas as contas utilizadas pela entidade para registrar seus fatos contábeis.' },
      { letra: 'B', texto: 'O relatório final de auditoria externa independente.', comentario: 'Incorreta. O relatório de auditoria é documento distinto, emitido por auditores independentes; o plano de contas é a estrutura de contas usada nos registros contábeis.' },
      { letra: 'C', texto: 'A lista de fornecedores cadastrados no sistema financeiro da entidade.', comentario: 'Incorreta. O cadastro de fornecedores é um controle auxiliar distinto, sem relação direta com a estrutura codificada de contas contábeis.' },
      { letra: 'D', texto: 'O cronograma de pagamento de tributos federais, estaduais e municipais.', comentario: 'Incorreta. O cronograma tributário é um controle fiscal específico, distinto do plano de contas, que organiza as contas contábeis da entidade.' }
    ],
    gabarito: 'A',
    justificativa: 'O plano de contas é a estrutura organizada e codificada de todas as contas contábeis (do Ativo, Passivo, Patrimônio Líquido, Receitas e Despesas) utilizadas por uma entidade para classificar e registrar seus fatos contábeis de forma padronizada.'
  },
  {
    id: 'contab_10',
    disciplina: 'contabilidade',
    topico: 'Receita x Despesa',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'O pagamento do salário de um funcionário, sob a ótica contábil, é classificado como:',
    alternativas: [
      { letra: 'A', texto: 'Despesa.' },
      { letra: 'B', texto: 'Receita.', comentario: 'Incorreta. Receita representa um ingresso de recursos decorrente das atividades da entidade, e não um gasto como o pagamento de salários.' },
      { letra: 'C', texto: 'Ativo permanente.', comentario: 'Incorreta. O pagamento de salários não representa aquisição de um bem duradouro (ativo imobilizado); é um gasto que reduz o resultado do período.' },
      { letra: 'D', texto: 'Patrimônio Líquido.', comentario: 'Incorreta. O Patrimônio Líquido representa os recursos próprios da entidade; o pagamento de salários é uma despesa que afeta o resultado, refletindo-se indiretamente no PL.' }
    ],
    gabarito: 'A',
    justificativa: 'O pagamento de salários representa um gasto necessário à manutenção das atividades da entidade, sendo classificado como despesa, reduzindo o resultado (lucro) do período.'
  },
  {
    id: 'contab_11',
    disciplina: 'contabilidade',
    topico: 'Ativo Circulante x Não Circulante',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Os bens e direitos que se espera realizar (converter em dinheiro) dentro do exercício social seguinte são classificados, no Balanço Patrimonial, como:',
    alternativas: [
      { letra: 'A', texto: 'Ativo Circulante.' },
      { letra: 'B', texto: 'Ativo Não Circulante.', comentario: 'Incorreta. O Ativo Não Circulante reúne bens e direitos de realização em prazo mais longo (superior ao exercício seguinte), e não os de realização mais imediata.' },
      { letra: 'C', texto: 'Passivo Circulante.', comentario: 'Incorreta. O Passivo Circulante reúne obrigações a pagar em curto prazo, e não bens e direitos a receber ou realizar.' },
      { letra: 'D', texto: 'Patrimônio Líquido.', comentario: 'Incorreta. O Patrimônio Líquido representa recursos próprios da entidade, sem relação com o prazo de realização de bens e direitos específicos.' }
    ],
    gabarito: 'A',
    justificativa: 'O Ativo Circulante reúne os bens e direitos que se espera realizar (converter em dinheiro, vender ou consumir) no curso do exercício social seguinte à data do balanço; os demais são classificados no Ativo Não Circulante.'
  },
  {
    id: 'contab_12',
    disciplina: 'contabilidade',
    topico: 'Patrimônio Líquido',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O Patrimônio Líquido de uma entidade corresponde:',
    alternativas: [
      { letra: 'A', texto: 'À diferença entre o total do Ativo e o total do Passivo, representando os recursos próprios da entidade.' },
      { letra: 'B', texto: 'À soma do Ativo com o Passivo.', comentario: 'Incorreta. O Patrimônio Líquido é obtido pela DIFERENÇA entre Ativo e Passivo, e não pela soma dos dois.' },
      { letra: 'C', texto: 'Exclusivamente ao valor do capital social integralizado pelos sócios, sem considerar lucros acumulados.', comentario: 'Incorreta. O Patrimônio Líquido também inclui reservas e lucros ou prejuízos acumulados, além do capital social.' },
      { letra: 'D', texto: 'Ao total de dívidas de curto prazo da entidade.', comentario: 'Incorreta. O total de dívidas de curto prazo corresponde ao Passivo Circulante, e não ao Patrimônio Líquido.' }
    ],
    gabarito: 'A',
    justificativa: 'O Patrimônio Líquido é a diferença entre o Ativo total e o Passivo total (PL = Ativo - Passivo), representando os recursos próprios da entidade, incluindo capital social, reservas e lucros ou prejuízos acumulados.'
  }
];
