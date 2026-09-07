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
  },
  {
    id: 'contab_13',
    disciplina: 'contabilidade',
    topico: 'Fatos Contábeis Permutativos',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A compra de um veículo à vista, com pagamento integral em dinheiro, é exemplo de fato contábil classificado como:',
    alternativas: [
      { letra: 'A', texto: 'Permutativo, pois altera a composição do Ativo (troca de Caixa por Veículo), sem afetar o valor total do patrimônio líquido.' },
      { letra: 'B', texto: 'Modificativo aumentativo, pois aumenta o Patrimônio Líquido da entidade.', comentario: 'Incorreta. A compra à vista apenas troca um elemento do Ativo (Caixa) por outro (Veículo), sem qualquer efeito sobre o Patrimônio Líquido, não configurando fato modificativo.' },
      { letra: 'C', texto: 'Modificativo diminutivo, pois reduz o Patrimônio Líquido da entidade.', comentario: 'Incorreta. Não há redução do Patrimônio Líquido nessa operação, apenas substituição de um bem do Ativo (dinheiro) por outro (veículo), de mesmo valor.' },
      { letra: 'D', texto: 'Misto, pois envolve simultaneamente o Ativo e o Patrimônio Líquido.', comentario: 'Incorreta. O fato é puramente permutativo, envolvendo apenas contas do Ativo, sem qualquer repercussão sobre o Patrimônio Líquido.' }
    ],
    gabarito: 'A',
    justificativa: 'Fatos permutativos são aqueles que alteram apenas a composição qualitativa do patrimônio (troca de elementos entre si), sem alterar o valor do Patrimônio Líquido; a compra de veículo à vista troca Caixa por Veículo, ambos no Ativo, em valores iguais.'
  },
  {
    id: 'contab_14',
    disciplina: 'contabilidade',
    topico: 'Fatos Contábeis Modificativos',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O recebimento de uma receita de prestação de serviços, em dinheiro, é exemplo de fato contábil:',
    alternativas: [
      { letra: 'A', texto: 'Modificativo aumentativo, pois aumenta simultaneamente o Ativo (Caixa) e o Patrimônio Líquido (via receita).' },
      { letra: 'B', texto: 'Permutativo, pois apenas troca um elemento do Ativo por outro, de mesmo valor.', comentario: 'Incorreta. O recebimento de receita não é mera troca dentro do Ativo; ele aumenta o Ativo e, ao mesmo tempo, o Patrimônio Líquido, caracterizando fato modificativo aumentativo.' },
      { letra: 'C', texto: 'Modificativo diminutivo, pois reduz o Patrimônio Líquido da entidade.', comentario: 'Incorreta. A receita AUMENTA o Patrimônio Líquido, e não o reduz; fatos modificativos diminutivos estão associados a despesas.' },
      { letra: 'D', texto: 'Misto, pois envolve simultaneamente contas do Ativo, do Passivo e do Patrimônio Líquido.', comentario: 'Incorreta. O recebimento simples de receita em dinheiro envolve apenas Ativo e Patrimônio Líquido, sem afetar o Passivo, não sendo, portanto, fato misto.' }
    ],
    gabarito: 'A',
    justificativa: 'Fatos modificativos aumentativos são os que aumentam o Patrimônio Líquido, geralmente decorrentes de receitas; o recebimento de receita de serviços em dinheiro aumenta o Ativo (Caixa) e, simultaneamente, o Patrimônio Líquido.'
  },
  {
    id: 'contab_15',
    disciplina: 'contabilidade',
    topico: 'Livro Diário',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'O Livro Diário, na escrituração contábil, caracteriza-se por:',
    alternativas: [
      { letra: 'A', texto: 'Registrar, em ordem cronológica, com individuação e clareza, todos os fatos que modificam ou podem modificar o patrimônio da entidade.' },
      { letra: 'B', texto: 'Agrupar os lançamentos por conta contábil, apurando o saldo de cada uma delas.', comentario: 'Incorreta. Essa é a característica do Livro Razão, que organiza os lançamentos por conta, e não do Livro Diário, que registra os fatos em ordem cronológica.' },
      { letra: 'C', texto: 'Ser de escrituração facultativa para todas as sociedades empresárias, independentemente do porte.', comentario: 'Incorreta. O Livro Diário é, em regra, de escrituração obrigatória para o empresário e a sociedade empresária, e não meramente facultativo.' },
      { letra: 'D', texto: 'Substituir integralmente a necessidade de elaboração do Balanço Patrimonial.', comentario: 'Incorreta. O Livro Diário é instrumento de escrituração dos fatos contábeis; não substitui as demonstrações contábeis, como o Balanço Patrimonial, que resultam da escrituração.' }
    ],
    gabarito: 'A',
    justificativa: 'O Livro Diário é o livro de escrituração cronológica, no qual são lançados, dia a dia e com individuação e clareza, todos os fatos que modificam ou podem modificar a situação patrimonial da entidade.'
  },
  {
    id: 'contab_16',
    disciplina: 'contabilidade',
    topico: 'Livro Razão',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'O Livro Razão, na escrituração contábil, tem por função principal:',
    alternativas: [
      { letra: 'A', texto: 'Agrupar, conta por conta, os lançamentos originados no Livro Diário, permitindo apurar o saldo de cada conta a qualquer momento.' },
      { letra: 'B', texto: 'Registrar os fatos contábeis exclusivamente em ordem cronológica, sem qualquer agrupamento por conta.', comentario: 'Incorreta. Essa é a característica do Livro Diário; o Livro Razão organiza os lançamentos por conta, e não apenas em ordem cronológica.' },
      { letra: 'C', texto: 'Substituir o plano de contas da entidade.', comentario: 'Incorreta. O Livro Razão utiliza o plano de contas como referência para organizar os lançamentos, mas não o substitui.' },
      { letra: 'D', texto: 'Ser exigido apenas de entidades do terceiro setor, sendo dispensado para sociedades empresárias.', comentario: 'Incorreta. O Livro Razão (ou sistema equivalente) é utilizado de forma geral na escrituração contábil, não sendo exclusivo de entidades do terceiro setor.' }
    ],
    gabarito: 'A',
    justificativa: 'O Livro Razão agrupa os lançamentos contábeis por conta, a partir dos registros cronológicos do Livro Diário, permitindo apurar o saldo de cada conta contábil a qualquer momento, servindo de base, por exemplo, para a elaboração do balancete.'
  },
  {
    id: 'contab_17',
    disciplina: 'contabilidade',
    topico: 'Balancete de Verificação',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O balancete de verificação é o demonstrativo contábil que tem por finalidade principal:',
    alternativas: [
      { letra: 'A', texto: 'Relacionar todas as contas utilizadas e seus respectivos saldos, permitindo verificar se os débitos totais conferem com os créditos totais.' },
      { letra: 'B', texto: 'Substituir definitivamente o Balanço Patrimonial ao final do exercício social.', comentario: 'Incorreta. O balancete é um demonstrativo intermediário de controle e conferência, elaborado periodicamente, e não substitui o Balanço Patrimonial, que é a demonstração formal de encerramento do exercício.' },
      { letra: 'C', texto: 'Apurar exclusivamente o valor devido de tributos sobre o lucro.', comentario: 'Incorreta. O balancete verifica a exatidão dos registros contábeis (igualdade entre débitos e créditos), não sendo sua finalidade apurar tributos sobre o lucro.' },
      { letra: 'D', texto: 'Listar unicamente as contas do Ativo, excluindo Passivo e Patrimônio Líquido.', comentario: 'Incorreta. O balancete de verificação relaciona todas as contas em uso, sejam do Ativo, do Passivo, do Patrimônio Líquido, de Receitas ou de Despesas.' }
    ],
    gabarito: 'A',
    justificativa: 'O balancete de verificação relaciona todas as contas utilizadas pela entidade, com seus respectivos saldos devedores e credores, permitindo verificar se o total de débitos é igual ao total de créditos, conferindo a exatidão dos registros contábeis realizados.'
  },
  {
    id: 'contab_18',
    disciplina: 'contabilidade',
    topico: 'Apuração do Resultado do Exercício (ARE)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A conta "Apuração do Resultado do Exercício" (ARE), em Contabilidade, caracteriza-se por ser uma conta:',
    alternativas: [
      { letra: 'A', texto: 'Transitória, utilizada para agrupar as contas de receitas e despesas do período, apurando o resultado (lucro ou prejuízo), que é então transferido para o Patrimônio Líquido.' },
      { letra: 'B', texto: 'Permanente do Ativo, que integra o Balanço Patrimonial de todos os exercícios subsequentes.', comentario: 'Incorreta. A ARE é conta de natureza transitória (de resultado), encerrada ao final do exercício, e não uma conta permanente do Ativo.' },
      { letra: 'C', texto: 'Do Passivo Circulante, representando uma obrigação a pagar aos sócios.', comentario: 'Incorreta. A ARE não é conta de Passivo; é conta transitória que apura o resultado, cujo saldo final é transferido para o Patrimônio Líquido (Lucros ou Prejuízos Acumulados).' },
      { letra: 'D', texto: 'Retificadora do Ativo Imobilizado, relacionada à depreciação acumulada.', comentario: 'Incorreta. A conta retificadora do Ativo Imobilizado relacionada à depreciação é a Depreciação Acumulada, distinta da ARE, que apura o resultado do período.' }
    ],
    gabarito: 'A',
    justificativa: 'A conta de Apuração do Resultado do Exercício é conta transitória (de resultado), que recebe, ao final do período, os saldos das contas de receitas e despesas, apurando o lucro ou prejuízo do exercício, transferido em seguida para o Patrimônio Líquido.'
  },
  {
    id: 'contab_19',
    disciplina: 'contabilidade',
    topico: 'Estoques - Método PEPS (FIFO)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'No método de avaliação de estoques PEPS (Primeiro a Entrar, Primeiro a Sair — FIFO), o critério para a baixa dos itens vendidos ou consumidos é:',
    alternativas: [
      { letra: 'A', texto: 'Dar saída, primeiro, aos itens que entraram há mais tempo no estoque, permanecendo os itens mais recentes.' },
      { letra: 'B', texto: 'Dar saída, primeiro, aos itens que entraram por último no estoque, permanecendo os itens mais antigos.', comentario: 'Incorreta. Essa lógica corresponde ao método UEPS (Último a Entrar, Primeiro a Sair), e não ao PEPS.' },
      { letra: 'C', texto: 'Atribuir a todos os itens do estoque o mesmo custo médio ponderado, recalculado a cada nova entrada.', comentario: 'Incorreta. Essa é a lógica do método da Média Ponderada Móvel, distinto do PEPS, que baixa os itens na ordem cronológica de entrada.' },
      { letra: 'D', texto: 'Avaliar o estoque sempre pelo valor de reposição no mercado, independentemente da ordem de entrada dos itens.', comentario: 'Incorreta. O critério de avaliação pelo valor de reposição não é o fundamento do método PEPS, que se baseia na ordem cronológica de entrada e saída dos itens.' }
    ],
    gabarito: 'A',
    justificativa: 'No método PEPS (Primeiro a Entrar, Primeiro a Sair), presume-se que os itens que entraram primeiro no estoque são os primeiros a sair, permanecendo em estoque os itens de aquisição mais recente, avaliados pelos custos mais atuais.'
  },
  {
    id: 'contab_20',
    disciplina: 'contabilidade',
    topico: 'Estoques - Método da Média Ponderada Móvel',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'No método da Média Ponderada Móvel para avaliação de estoques, o custo unitário utilizado para as baixas (vendas ou consumo) é:',
    alternativas: [
      { letra: 'A', texto: 'Recalculado a cada nova entrada de mercadorias, dividindo-se o valor total do estoque pela quantidade total de itens disponíveis.' },
      { letra: 'B', texto: 'Sempre o custo da última compra realizada, independentemente das entradas anteriores.', comentario: 'Incorreta. Utilizar sempre o custo da última compra é característica associada à lógica do UEPS, e não da Média Ponderada Móvel, que recalcula a média a cada entrada.' },
      { letra: 'C', texto: 'Sempre o custo da primeira compra registrada no período, mantido fixo até o final do exercício.', comentario: 'Incorreta. Manter fixo o custo da primeira compra não corresponde à Média Ponderada Móvel, que recalcula o custo médio a cada nova entrada de mercadorias.' },
      { letra: 'D', texto: 'Definido exclusivamente pelo valor de mercado na data da venda, independentemente do custo de aquisição.', comentario: 'Incorreta. O método considera o custo de aquisição médio ponderado, e não o valor de mercado na data da venda.' }
    ],
    gabarito: 'A',
    justificativa: 'No método da Média Ponderada Móvel, o custo unitário médio dos itens em estoque é recalculado a cada nova entrada de mercadorias, dividindo-se o valor total do estoque (após a entrada) pela quantidade total de itens disponíveis, sendo esse custo médio utilizado nas baixas até a entrada seguinte.'
  },
  {
    id: 'contab_21',
    disciplina: 'contabilidade',
    topico: 'Perdas Estimadas em Créditos de Liquidação Duvidosa (PECLD)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A conta de Perdas Estimadas em Créditos de Liquidação Duvidosa (antiga Provisão para Devedores Duvidosos) tem por finalidade:',
    alternativas: [
      { letra: 'A', texto: 'Reconhecer, antecipadamente, uma estimativa de perdas relacionadas a créditos (contas a receber) que provavelmente não serão recebidos, em observância ao princípio da prudência.' },
      { letra: 'B', texto: 'Registrar o valor total de vendas realizadas a prazo no período, independentemente do risco de inadimplência.', comentario: 'Incorreta. O registro do total de vendas a prazo é feito nas contas de Receita e Duplicatas a Receber; a PECLD trata especificamente da estimativa de perda por inadimplência.' },
      { letra: 'C', texto: 'Substituir a necessidade de emissão de notas fiscais nas vendas a prazo.', comentario: 'Incorreta. A PECLD não tem relação com a emissão de documentos fiscais; trata-se de ajuste contábil relacionado ao risco de recebimento dos créditos.' },
      { letra: 'D', texto: 'Aumentar o valor do Ativo Circulante, elevando artificialmente o saldo de Contas a Receber.', comentario: 'Incorreta. A PECLD é conta retificadora do Ativo, funcionando para REDUZIR o saldo de Contas a Receber ao valor provável de realização, e não para aumentá-lo.' }
    ],
    gabarito: 'A',
    justificativa: 'A conta de Perdas Estimadas em Créditos de Liquidação Duvidosa é uma conta retificadora do Ativo que reconhece, de forma antecipada e estimada, as perdas prováveis com créditos (contas a receber) que podem não ser recebidos, em atendimento ao princípio da prudência.'
  },
  {
    id: 'contab_22',
    disciplina: 'contabilidade',
    topico: 'Passivo Circulante x Passivo Não Circulante',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'As obrigações da entidade cujo vencimento ocorrerá após o término do exercício social seguinte são classificadas, no Balanço Patrimonial, como:',
    alternativas: [
      { letra: 'A', texto: 'Passivo Não Circulante.' },
      { letra: 'B', texto: 'Passivo Circulante.', comentario: 'Incorreta. O Passivo Circulante reúne as obrigações com vencimento até o final do exercício social seguinte, e não as de prazo mais longo.' },
      { letra: 'C', texto: 'Ativo Não Circulante.', comentario: 'Incorreta. Ativo é o grupo de bens e direitos da entidade; obrigações a pagar (dívidas) pertencem ao Passivo, e não ao Ativo.' },
      { letra: 'D', texto: 'Patrimônio Líquido.', comentario: 'Incorreta. O Patrimônio Líquido representa os recursos próprios da entidade, e não obrigações perante terceiros, que compõem o Passivo.' }
    ],
    gabarito: 'A',
    justificativa: 'O Passivo Circulante reúne as obrigações com vencimento até o final do exercício seguinte; as obrigações com vencimento posterior a esse prazo são classificadas no Passivo Não Circulante.'
  },
  {
    id: 'contab_23',
    disciplina: 'contabilidade',
    topico: 'Reservas de Capital x Reservas de Lucros',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'No Patrimônio Líquido, a distinção entre Reservas de Capital e Reservas de Lucros está, principalmente, no fato de que:',
    alternativas: [
      { letra: 'A', texto: 'As Reservas de Capital originam-se de valores recebidos pela entidade não decorrentes de suas atividades operacionais (como ágio na emissão de ações), enquanto as Reservas de Lucros são constituídas pela retenção de parte do lucro líquido apurado.' },
      { letra: 'B', texto: 'As Reservas de Capital e as Reservas de Lucros têm exatamente a mesma origem, sendo termos sinônimos utilizados indistintamente pela legislação societária.', comentario: 'Incorreta. As duas categorias têm origens distintas: a Reserva de Capital não decorre de resultado (lucro), enquanto a Reserva de Lucros é formada justamente pela retenção de parte do lucro apurado no exercício.' },
      { letra: 'C', texto: 'As Reservas de Lucros são registradas no Ativo, enquanto as Reservas de Capital são registradas no Passivo Circulante.', comentario: 'Incorreta. Ambas as reservas — de capital e de lucros — integram o Patrimônio Líquido, e não o Ativo nem o Passivo Circulante.' },
      { letra: 'D', texto: 'As Reservas de Capital somente podem existir em sociedades limitadas, sendo vedadas às sociedades anônimas.', comentario: 'Incorreta. As Reservas de Capital são expressamente previstas na legislação das sociedades por ações (S.A.), não sendo vedadas a esse tipo societário.' }
    ],
    gabarito: 'A',
    justificativa: 'As Reservas de Capital resultam de valores recebidos pela entidade que não transitam pelo resultado (como o ágio na emissão de ações), enquanto as Reservas de Lucros resultam da retenção de parcela do lucro líquido apurado no exercício, ambas integrando o Patrimônio Líquido.'
  },
  {
    id: 'contab_24',
    disciplina: 'contabilidade',
    topico: 'Princípio da Entidade',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O princípio contábil da Entidade estabelece que:',
    alternativas: [
      { letra: 'A', texto: 'O patrimônio da entidade não se confunde com o patrimônio de seus sócios ou proprietários, ainda que estes respondam, em certos casos, por obrigações daquela.' },
      { letra: 'B', texto: 'A entidade deve, sempre que possível, registrar seu patrimônio somado ao patrimônio pessoal de seus sócios em uma única contabilidade.', comentario: 'Incorreta. O princípio da Entidade exige justamente a autonomia patrimonial, vedando a confusão entre o patrimônio da entidade e o de seus sócios.' },
      { letra: 'C', texto: 'Somente empresas de grande porte estão sujeitas a esse princípio, sendo dispensadas as microempresas.', comentario: 'Incorreta. O princípio da Entidade se aplica a toda e qualquer entidade contábil, independentemente do porte.' },
      { letra: 'D', texto: 'A contabilidade deve ser elaborada sob a ótica exclusiva do interesse pessoal dos sócios majoritários.', comentario: 'Incorreta. O princípio da Entidade trata da autonomia patrimonial entre a entidade e seus sócios, e não de privilegiar o interesse pessoal de sócios majoritários na elaboração contábil.' }
    ],
    gabarito: 'A',
    justificativa: 'O princípio da Entidade reconhece o patrimônio como objeto da Contabilidade, afirmando sua autonomia em relação ao patrimônio dos sócios ou proprietários, que com aquele não se confunde.'
  },
  {
    id: 'contab_25',
    disciplina: 'contabilidade',
    topico: 'Princípio da Continuidade',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O princípio contábil da Continuidade pressupõe que, para fins de avaliação do patrimônio, a entidade:',
    alternativas: [
      { letra: 'A', texto: 'Continuará em operação em um futuro previsível, salvo evidência em contrário, o que influencia os critérios de mensuração dos seus ativos e passivos.' },
      { letra: 'B', texto: 'Será obrigatoriamente encerrada ao final de cada exercício social, com liquidação total de seus bens.', comentario: 'Incorreta. É exatamente o contrário: o princípio da Continuidade pressupõe que a entidade seguirá em operação, e não que será encerrada ao fim de cada exercício.' },
      { letra: 'C', texto: 'Deve avaliar todos os seus bens sempre pelo valor de liquidação forçada, como se estivesse em processo de falência.', comentario: 'Incorreta. A avaliação pelo valor de liquidação forçada é típica de entidades em descontinuidade, situação oposta à pressuposta pelo princípio da Continuidade.' },
      { letra: 'D', texto: 'Não pode, em nenhuma hipótese, ser objeto de avaliação de ativos pelo custo histórico.', comentario: 'Incorreta. O princípio da Continuidade é compatível com a avaliação pelo custo histórico, sendo, inclusive, um dos fundamentos que sustenta esse critério de mensuração em condições normais de operação.' }
    ],
    gabarito: 'A',
    justificativa: 'O princípio da Continuidade pressupõe que a entidade continuará em operação em um futuro previsível, o que orienta a forma de avaliação e classificação de seus ativos e passivos; a descontinuidade das operações, quando evidenciada, exige critérios de mensuração distintos.'
  },
  {
    id: 'contab_26',
    disciplina: 'contabilidade',
    topico: 'Princípio da Oportunidade',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O princípio contábil da Oportunidade refere-se:',
    alternativas: [
      { letra: 'A', texto: 'À necessidade de reconhecimento integral e tempestivo das variações patrimoniais, em decorrência da gestão da entidade, com integridade e fidedignidade dos dados.' },
      { letra: 'B', texto: 'À possibilidade de a entidade escolher livremente, a qualquer tempo, quais fatos contábeis deseja ou não registrar.', comentario: 'Incorreta. O princípio da Oportunidade exige o registro tempestivo e integral das variações patrimoniais, e não uma escolha discricionária sobre registrar ou não determinados fatos.' },
      { letra: 'C', texto: 'À obrigatoriedade de aguardar o encerramento do exercício social para registrar qualquer fato contábil ocorrido durante o período.', comentario: 'Incorreta. Isso contraria a própria ideia de tempestividade do princípio da Oportunidade, que exige o registro no momento em que o fato ocorre, e não apenas ao final do exercício.' },
      { letra: 'D', texto: 'À avaliação de ativos exclusivamente pelo maior valor de mercado disponível, independentemente do custo de aquisição.', comentario: 'Incorreta. Esse critério de avaliação não é o conteúdo do princípio da Oportunidade, que trata da tempestividade e integridade do registro dos fatos contábeis.' }
    ],
    gabarito: 'A',
    justificativa: 'O princípio da Oportunidade refere-se ao reconhecimento tempestivo e com integridade das transações que afetam o patrimônio da entidade, garantindo a produção de informação íntegra e fidedigna sobre a gestão patrimonial.'
  },
  {
    id: 'contab_27',
    disciplina: 'contabilidade',
    topico: 'Princípio da Prudência',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Diante de duas alternativas igualmente válidas para avaliação de um ativo ou de um passivo, o princípio da Prudência determina que a entidade deve optar:',
    alternativas: [
      { letra: 'A', texto: 'Pelo valor menor para os componentes do Ativo e pelo valor maior para os do Passivo, evitando a superavaliação do patrimônio ou do resultado.' },
      { letra: 'B', texto: 'Sempre pelo maior valor possível para o Ativo, independentemente do grau de certeza envolvido.', comentario: 'Incorreta. O princípio da Prudência orienta exatamente o oposto: evitar a superavaliação do Ativo diante de incerteza, optando pelo valor mais conservador.' },
      { letra: 'C', texto: 'Sempre pelo menor valor possível para o Passivo, ainda que isso subestime as obrigações da entidade.', comentario: 'Incorreta. A Prudência recomenda o MAIOR valor para o Passivo diante de incerteza (para não subestimar obrigações), e não o menor.' },
      { letra: 'D', texto: 'Por critérios de avaliação definidos exclusivamente pela administração, sem qualquer parâmetro técnico contábil.', comentario: 'Incorreta. O princípio da Prudência estabelece parâmetro técnico específico (menor valor para Ativo, maior para Passivo em caso de dúvida), e não deixa a critério exclusivo e discricionário da administração.' }
    ],
    gabarito: 'A',
    justificativa: 'O princípio da Prudência determina a adoção do menor valor para os componentes do Ativo e do maior valor para os do Passivo, sempre que se apresentem alternativas igualmente válidas diante de incerteza, para evitar a transferência de riscos e incertezas não conhecidos para exercícios futuros.'
  },
  {
    id: 'contab_28',
    disciplina: 'contabilidade',
    topico: 'Demonstração dos Fluxos de Caixa (DFC)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A Demonstração dos Fluxos de Caixa (DFC) classifica os fluxos financeiros da entidade nas seguintes atividades:',
    alternativas: [
      { letra: 'A', texto: 'Operacionais, de investimento e de financiamento.' },
      { letra: 'B', texto: 'Correntes, intermediárias e permanentes, na mesma lógica da Teoria das Três Idades.', comentario: 'Incorreta. Essa classificação é própria da Arquivologia (idades documentais), e não da Demonstração dos Fluxos de Caixa em Contabilidade.' },
      { letra: 'C', texto: 'Circulantes e não circulantes, seguindo exatamente os mesmos critérios do Balanço Patrimonial.', comentario: 'Incorreta. A DFC não utiliza a classificação circulante/não circulante do Balanço Patrimonial, mas sim as categorias operacional, investimento e financiamento.' },
      { letra: 'D', texto: 'De receita, de despesa e de resultado, espelhando exatamente a estrutura da DRE.', comentario: 'Incorreta. A estrutura da DFC é distinta da DRE; a DFC evidencia entradas e saídas efetivas de caixa, classificadas em atividades operacionais, de investimento e de financiamento.' }
    ],
    gabarito: 'A',
    justificativa: 'A Demonstração dos Fluxos de Caixa evidencia as alterações ocorridas no saldo de caixa e equivalentes de caixa, classificando os fluxos financeiros em atividades operacionais, de investimento e de financiamento.'
  },
  {
    id: 'contab_29',
    disciplina: 'contabilidade',
    topico: 'Análise de Balanços - Índice de Liquidez Corrente',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O Índice de Liquidez Corrente, utilizado na análise das demonstrações contábeis, é calculado pela fórmula:',
    alternativas: [
      { letra: 'A', texto: 'Ativo Circulante dividido pelo Passivo Circulante.' },
      { letra: 'B', texto: 'Ativo Não Circulante dividido pelo Passivo Não Circulante.', comentario: 'Incorreta. Essa combinação de contas de longo prazo não corresponde à fórmula do Índice de Liquidez Corrente, que relaciona Ativo Circulante e Passivo Circulante.' },
      { letra: 'C', texto: 'Patrimônio Líquido dividido pelo Ativo Total.', comentario: 'Incorreta. Essa fórmula corresponde a um índice de estrutura de capital, e não ao Índice de Liquidez Corrente.' },
      { letra: 'D', texto: 'Passivo Circulante dividido pelo Ativo Circulante.', comentario: 'Incorreta. Essa é a fórmula invertida; o Índice de Liquidez Corrente divide o Ativo Circulante pelo Passivo Circulante, e não o contrário.' }
    ],
    gabarito: 'A',
    justificativa: 'O Índice de Liquidez Corrente é obtido pela divisão do Ativo Circulante pelo Passivo Circulante, indicando a capacidade da entidade de honrar suas obrigações de curto prazo com os bens e direitos também realizáveis no curto prazo.'
  },
  {
    id: 'contab_30',
    disciplina: 'contabilidade',
    topico: 'Ativo Intangível',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Marcas, patentes e softwares adquiridos para uso na entidade, por não possuírem existência física, são classificados no Balanço Patrimonial como:',
    alternativas: [
      { letra: 'A', texto: 'Ativo Intangível.' },
      { letra: 'B', texto: 'Ativo Circulante.', comentario: 'Incorreta. O Ativo Circulante reúne bens e direitos de realização em curto prazo, categoria distinta do Ativo Intangível, que reúne ativos não monetários sem existência física, de uso mais duradouro.' },
      { letra: 'C', texto: 'Passivo Não Circulante.', comentario: 'Incorreta. Marcas, patentes e softwares são bens (Ativo) da entidade, e não obrigações (Passivo).' },
      { letra: 'D', texto: 'Despesas do exercício, integralmente reconhecidas no momento da aquisição.', comentario: 'Incorreta. Ativos intangíveis com vida útil definida ou indefinida não são reconhecidos integralmente como despesa no momento da aquisição, mas registrados no Ativo, sujeitos a amortização quando aplicável.' }
    ],
    gabarito: 'A',
    justificativa: 'O Ativo Intangível reúne os ativos não monetários identificáveis sem substância física, como marcas, patentes e softwares, controlados pela entidade e capazes de gerar benefícios econômicos futuros.'
  },
  {
    id: 'contab_31',
    disciplina: 'contabilidade',
    topico: 'Investimentos - Método de Equivalência Patrimonial',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O Método de Equivalência Patrimonial, aplicável a investimentos relevantes em coligadas e controladas, consiste em:',
    alternativas: [
      { letra: 'A', texto: 'Ajustar o valor contábil do investimento com base na variação do patrimônio líquido da investida, refletindo a participação proporcional do investidor nos resultados desta.' },
      { letra: 'B', texto: 'Manter o investimento sempre registrado pelo valor histórico de aquisição, sem qualquer ajuste posterior.', comentario: 'Incorreta. Manter o investimento pelo custo histórico, sem ajustes, é característica do método de custo, distinto do Método de Equivalência Patrimonial, que ajusta o valor conforme os resultados da investida.' },
      { letra: 'C', texto: 'Registrar o investimento apenas quando a investida distribuir dividendos, ignorando os resultados apurados por ela.', comentario: 'Incorreta. No Método de Equivalência Patrimonial, o investidor reconhece sua participação nos resultados da investida à medida que estes são apurados, e não apenas quando há distribuição de dividendos.' },
      { letra: 'D', texto: 'Substituir a elaboração de demonstrações contábeis consolidadas em todo e qualquer grupo econômico.', comentario: 'Incorreta. O Método de Equivalência Patrimonial e a consolidação de demonstrações contábeis são procedimentos distintos, não sendo um substituto do outro.' }
    ],
    gabarito: 'A',
    justificativa: 'Pelo Método de Equivalência Patrimonial, o valor contábil do investimento em coligadas ou controladas é ajustado com base na variação do patrimônio líquido da investida, de modo que o investidor reconheça sua participação proporcional nos resultados (lucros ou prejuízos) apurados por ela.'
  },
  {
    id: 'contab_32',
    disciplina: 'contabilidade',
    topico: 'Características Qualitativas Fundamentais da Informação Contábil (CPC 00)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo a Estrutura Conceitual da Contabilidade (CPC 00), são características qualitativas FUNDAMENTAIS da informação contábil-financeira útil:',
    alternativas: [
      { letra: 'A', texto: 'Relevância e representação fidedigna.' },
      { letra: 'B', texto: 'Comparabilidade e verificabilidade, exclusivamente.', comentario: 'Incorreta. Comparabilidade e verificabilidade são características qualitativas de MELHORIA, e não as características fundamentais, que são relevância e representação fidedigna.' },
      { letra: 'C', texto: 'Tempestividade e compreensibilidade, exclusivamente.', comentario: 'Incorreta. Tempestividade e compreensibilidade também são características de melhoria, e não as duas características fundamentais previstas na Estrutura Conceitual.' },
      { letra: 'D', texto: 'Prudência e conservadorismo, exclusivamente.', comentario: 'Incorreta. Prudência é tratada, na estrutura atual, como elemento associado à neutralidade dentro da representação fidedigna, mas não é ela própria uma das duas características qualitativas fundamentais nomeadas pelo CPC 00.' }
    ],
    gabarito: 'A',
    justificativa: 'A Estrutura Conceitual (CPC 00) estabelece que as características qualitativas fundamentais da informação contábil-financeira útil são a relevância e a representação fidedigna, sendo pré-requisitos indispensáveis; comparabilidade, verificabilidade, tempestividade e compreensibilidade são características de melhoria, que aumentam a utilidade da informação, mas não substituem as fundamentais.'
  }
];
