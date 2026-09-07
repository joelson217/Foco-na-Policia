// ============================================================
// QUESTIONS_LEGISLACAO_PMPE — Legislação Estadual exclusiva do
// curso PMPE (Polícia Militar de PE): Lei nº 6.783/1974 (Estatuto
// dos Policiais-Militares do Estado de Pernambuco), parte do bloco
// "Direitos Humanos e Legislação Extravagante" do edital real
// (Instituto AOCP). Conteúdo verificado via Alepe Legis antes da
// escrita: hierarquia e disciplina (Art. 10-11), círculos
// hierárquicos (Art. 20), deveres policiais-militares (Art. 28),
// direitos (Art. 37), e distinção entre crime militar e
// transgressão disciplinar (Art. 32).
// ============================================================

const QUESTIONS_LEGISLACAO_PMPE = [
  {
    id: 'pmpe_leg_1',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Conceito de Hierarquia (Art. 10)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Nos termos do art. 10 da Lei nº 6.783/1974 (Estatuto dos Policiais-Militares de Pernambuco), hierarquia policial-militar é conceituada como:',
    alternativas: [
      { letra: 'A', texto: 'A ordenação da autoridade, em níveis diferentes, dentro da estrutura da Polícia Militar.' },
      { letra: 'B', texto: 'A rigorosa observância e o acatamento integral das leis e regulamentos que fundamentam a instituição.', comentario: 'Incorreta. Essa é a definição de DISCIPLINA (art. 11), e não de hierarquia, que trata da ordenação da autoridade em níveis.' },
      { letra: 'C', texto: 'O conjunto de punições aplicáveis aos policiais-militares que cometem transgressões disciplinares.', comentario: 'Incorreta. O conjunto de punições disciplinares é matéria distinta, tratada em dispositivos próprios sobre transgressões, e não o conceito de hierarquia.' },
      { letra: 'D', texto: 'A relação de igualdade absoluta de autoridade entre todos os postos e graduações da corporação.', comentario: 'Incorreta. A hierarquia pressupõe justamente níveis DIFERENTES de autoridade, e não uma relação de igualdade absoluta entre postos e graduações.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 10 da Lei 6.783/1974',
    justificativa: 'O Estatuto define hierarquia policial-militar como a ordenação da autoridade em níveis diferentes dentro da estrutura da Polícia Militar, feita por postos ou graduações e, dentro de um mesmo posto ou graduação, pela antiguidade.'
  },
  {
    id: 'pmpe_leg_2',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Conceito de Disciplina (Art. 11)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 11 da Lei nº 6.783/1974, disciplina policial-militar é:',
    alternativas: [
      { letra: 'A', texto: 'A rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam a instituição policial-militar, traduzindo-se pelo perfeito cumprimento do dever.' },
      { letra: 'B', texto: 'A ordenação da autoridade em níveis diferentes, por postos e graduações.', comentario: 'Incorreta. Essa é a definição de HIERARQUIA (art. 10), e não de disciplina, que trata da observância das normas institucionais.' },
      { letra: 'C', texto: 'Um benefício facultativo, que o policial-militar pode optar por observar ou não, conforme sua conveniência pessoal.', comentario: 'Incorreta. A disciplina é exigência obrigatória e rigorosa da vida policial-militar, e não uma faculdade opcional do servidor.' },
      { letra: 'D', texto: 'Restrição aplicável apenas aos policiais-militares da reserva remunerada e aos reformados.', comentario: 'Incorreta. A disciplina e o respeito à hierarquia devem ser observados em todas as circunstâncias, tanto pelos policiais-militares da ativa quanto pelos da reserva remunerada e reformados.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 11 da Lei 6.783/1974',
    justificativa: 'Disciplina é a rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam o organismo policial-militar e coordenam seu funcionamento regular e harmônico, traduzindo-se pelo perfeito cumprimento do dever.'
  },
  {
    id: 'pmpe_leg_3',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Abrangência do Estatuto',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A observância da disciplina e do respeito à hierarquia, nos termos do Estatuto dos Policiais-Militares de Pernambuco, deve ser mantida:',
    alternativas: [
      { letra: 'A', texto: 'Em todas as circunstâncias da vida, alcançando os policiais-militares da ativa, da reserva remunerada e os reformados.' },
      { letra: 'B', texto: 'Apenas durante o horário de expediente e exclusivamente dentro das unidades policiais-militares.', comentario: 'Incorreta. O Estatuto exige a observância da disciplina e da hierarquia em todas as circunstâncias da vida, e não apenas durante o expediente ou dentro das unidades.' },
      { letra: 'C', texto: 'Somente pelos policiais-militares da ativa, não se estendendo aos da reserva remunerada ou aos reformados.', comentario: 'Incorreta. O Estatuto estende expressamente essa exigência também aos policiais-militares da reserva remunerada e aos reformados, e não apenas aos da ativa.' },
      { letra: 'D', texto: 'Exclusivamente pelos oficiais, sendo facultativa para as praças.', comentario: 'Incorreta. A disciplina e o respeito à hierarquia são exigidos de todos os policiais-militares, independentemente do círculo hierárquico a que pertençam (oficiais ou praças).' }
    ],
    gabarito: 'A',
    justificativa: 'A disciplina e o respeito à hierarquia devem ser mantidos em todas as circunstâncias da vida, entre os policiais-militares da ativa, da reserva remunerada e os reformados, conforme estabelece o Estatuto.'
  },
  {
    id: 'pmpe_leg_4',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Círculos Hierárquicos (Art. 20)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo o art. 20 da Lei nº 6.783/1974, os círculos hierárquicos da Polícia Militar de Pernambuco são constituídos, entre outros, pelos seguintes grupos:',
    alternativas: [
      { letra: 'A', texto: 'Oficiais Superiores, Intermediários e Subalternos, Alunos Oficiais, Subtenentes e Sargentos, e Cabos e Soldados.' },
      { letra: 'B', texto: 'Apenas dois círculos: "Oficiais" e "Praças", sem qualquer subdivisão interna.', comentario: 'Incorreta. O Estatuto detalha múltiplos círculos hierárquicos (Oficiais Superiores, Intermediários, Subalternos, Alunos Oficiais, Subtenentes e Sargentos, Cabos e Soldados), e não apenas duas categorias genéricas.' },
      { letra: 'C', texto: 'Círculos definidos exclusivamente pelo tempo de serviço, sem relação com postos ou graduações.', comentario: 'Incorreta. Os círculos hierárquicos são definidos por postos e graduações (Oficiais Superiores, Subalternos, Sargentos, Soldados etc.), não apenas pelo tempo de serviço isoladamente.' },
      { letra: 'D', texto: 'Círculos aplicáveis exclusivamente aos policiais-militares da reserva remunerada.', comentario: 'Incorreta. Os círculos hierárquicos organizam a convivência de todos os policiais-militares na estrutura da corporação, e não apenas dos que estão na reserva remunerada.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 20 da Lei 6.783/1974',
    justificativa: 'O art. 20 estabelece os círculos hierárquicos de convivência da Polícia Militar: Oficiais Superiores, Intermediários e Subalternos, Alunos Oficiais, Subtenentes e Sargentos, e Cabos e Soldados, servindo de base para as relações de hierarquia e camaradagem na corporação.'
  },
  {
    id: 'pmpe_leg_5',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Círculo dos Aspirantes a Oficial',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'De acordo com o Estatuto dos Policiais-Militares de Pernambuco, os Aspirantes a Oficial frequentam, para fins de convivência hierárquica:',
    alternativas: [
      { letra: 'A', texto: 'O círculo dos Oficiais Subalternos.' },
      { letra: 'B', texto: 'O círculo dos Oficiais Superiores, mesmo grupo dos Coronéis e Tenentes-Coronéis.', comentario: 'Incorreta. Os Aspirantes frequentam o círculo dos Oficiais Subalternos, e não o dos Oficiais Superiores, reservado a postos mais elevados.' },
      { letra: 'C', texto: 'O círculo dos Subtenentes e Sargentos, junto às praças mais graduadas.', comentario: 'Incorreta. Os Aspirantes a Oficial, por sua condição, frequentam o círculo dos Oficiais Subalternos, e não o círculo das praças (Subtenentes e Sargentos).' },
      { letra: 'D', texto: 'O círculo dos Cabos e Soldados, por serem os mais recentes na corporação.', comentario: 'Incorreta. Cabos e Soldados formam círculo próprio de praças; os Aspirantes a Oficial se enquadram no círculo dos Oficiais Subalternos.' }
    ],
    gabarito: 'A',
    justificativa: 'Os Aspirantes a Oficial frequentam o círculo hierárquico dos Oficiais Subalternos, conforme disposto no Estatuto dos Policiais-Militares de Pernambuco.'
  },
  {
    id: 'pmpe_leg_6',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Deveres Policiais-Militares (Art. 28)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Entre os deveres do policial-militar previstos no Estatuto dos Policiais-Militares de Pernambuco, encontram-se, entre outros:',
    alternativas: [
      { letra: 'A', texto: 'Ser leal em todas as circunstâncias, obedecer aos superiores hierárquicos, respeitar a dignidade da pessoa humana e zelar pela honra e reputação de sua classe.' },
      { letra: 'B', texto: 'A faculdade de descumprir ordens de superiores hierárquicos sempre que o policial-militar julgar conveniente.', comentario: 'Incorreta. A obediência aos superiores hierárquicos é dever expresso do policial-militar, e não uma faculdade de descumprimento a critério pessoal.' },
      { letra: 'C', texto: 'A dispensa de qualquer preocupação com a reputação da corporação perante a sociedade.', comentario: 'Incorreta. O Estatuto exige, ao contrário, que o policial-militar zele pela honra e reputação de sua classe, e não que seja indiferente a isso.' },
      { letra: 'D', texto: 'A prerrogativa de tratar com desrespeito a dignidade humana de pessoas sob sua autoridade, quando em serviço.', comentario: 'Incorreta. O respeito à dignidade da pessoa humana é dever expresso do policial-militar, incompatível com qualquer prerrogativa de desrespeito no exercício da função.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 28 da Lei 6.783/1974',
    justificativa: 'Entre os deveres policiais-militares elencados no Estatuto, destacam-se a lealdade em todas as circunstâncias, a obediência aos superiores hierárquicos, o respeito à dignidade da pessoa humana e o zelo pela honra e reputação da classe policial-militar.'
  },
  {
    id: 'pmpe_leg_7',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Direitos do Policial-Militar (Art. 37)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Entre os direitos assegurados ao policial-militar de Pernambuco pelo Estatuto (Lei nº 6.783/1974), incluem-se:',
    alternativas: [
      { letra: 'A', texto: 'A garantia de patente, a estabilidade, o uso das designações hierárquicas correspondentes ao posto ou graduação, a remuneração, a promoção, o porte de arma e a assistência médico-hospitalar.' },
      { letra: 'B', texto: 'A dispensa integral e permanente do dever de obediência à hierarquia policial-militar, uma vez atingida a estabilidade.', comentario: 'Incorreta. A estabilidade é direito assegurado, mas não dispensa o policial-militar do dever de obediência à hierarquia, que se mantém em toda a carreira.' },
      { letra: 'C', texto: 'A vedação absoluta a qualquer forma de remuneração, sendo o cargo exercido em caráter honorífico e não remunerado.', comentario: 'Incorreta. A remuneração é expressamente assegurada como direito do policial-militar, e não vedada; o cargo não é meramente honorífico.' },
      { letra: 'D', texto: 'A proibição de uso de designações hierárquicas fora do horário de serviço.', comentario: 'Incorreta. O uso das designações hierárquicas correspondentes ao posto ou graduação é assegurado como direito do policial-militar, sem a restrição indicada.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 37 da Lei 6.783/1974',
    justificativa: 'O Estatuto assegura ao policial-militar, entre outros direitos, a garantia de patente, a estabilidade, o uso das designações hierárquicas correspondentes ao seu posto ou graduação, a remuneração, a promoção, o porte de arma e a assistência médico-hospitalar.'
  },
  {
    id: 'pmpe_leg_8',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Crime Militar x Transgressão Disciplinar (Art. 32)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O Estatuto dos Policiais-Militares de Pernambuco, ao tratar da apuração de responsabilidade do policial-militar, distingue:',
    alternativas: [
      { letra: 'A', texto: 'Os crimes militares, apurados conforme o Código Penal Militar, das transgressões disciplinares, apuradas segundo as normas regulamentares próprias da disciplina militar.' },
      { letra: 'B', texto: 'Apenas uma única categoria de infração, sem qualquer distinção entre crime militar e transgressão disciplinar.', comentario: 'Incorreta. O Estatuto distingue expressamente as duas categorias — crime militar e transgressão disciplinar —, cada uma com regramento e consequências próprias.' },
      { letra: 'C', texto: 'A transgressão disciplinar como categoria mais grave que o crime militar, sujeitando o infrator a processo criminal obrigatório.', comentario: 'Incorreta. A relação de gravidade é inversa ao que a alternativa propõe: o crime militar é apurado conforme o Código Penal Militar, enquanto a transgressão disciplinar segue rito administrativo disciplinar próprio.' },
      { letra: 'D', texto: 'A impossibilidade de qualquer sanção disciplinar ao policial-militar, restando apenas a via criminal para apuração de responsabilidade.', comentario: 'Incorreta. O Estatuto prevê expressamente a apuração de transgressões disciplinares, por via própria, além da apuração criminal quando configurado crime militar.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 32 da Lei 6.783/1974',
    justificativa: 'O Estatuto distingue os crimes militares, apurados conforme o Código Penal Militar, das transgressões disciplinares, apuradas segundo as normas regulamentares disciplinares próprias da corporação.'
  },
  {
    id: 'pmpe_leg_9',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Conselho de Disciplina',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O Conselho de Disciplina, previsto no Estatuto dos Policiais-Militares de Pernambuco, tem por finalidade:',
    alternativas: [
      { letra: 'A', texto: 'Apurar a incapacidade do policial-militar (praça) para permanecer na corporação, em razão de fatos que afetem sua conduta ou aptidão, assegurado o devido processo.' },
      { letra: 'B', texto: 'Substituir integralmente o processo criminal perante a Justiça Militar em qualquer hipótese de crime.', comentario: 'Incorreta. O Conselho de Disciplina não substitui o processo criminal cabível perante a Justiça Militar; trata-se de instância própria para apuração no âmbito disciplinar/administrativo.' },
      { letra: 'C', texto: 'Conceder exclusivamente promoções por antiguidade aos policiais-militares mais graduados.', comentario: 'Incorreta. Promoções não são a finalidade do Conselho de Disciplina, que trata da apuração de responsabilidade e aptidão do policial-militar para permanência na corporação.' },
      { letra: 'D', texto: 'Definir unicamente o valor da remuneração e dos benefícios previdenciários dos policiais-militares.', comentario: 'Incorreta. Matéria remuneratória e previdenciária não é objeto do Conselho de Disciplina, cuja finalidade é apurar responsabilidade/aptidão do policial-militar para a corporação.' }
    ],
    gabarito: 'A',
    artigo: 'Arts. 35-36 da Lei 6.783/1974',
    justificativa: 'O Conselho de Disciplina destina-se a apurar a incapacidade do policial-militar (praça) para permanecer na corporação, em razão de fatos que comprometam sua conduta ou aptidão, assegurado o devido processo, distinguindo-se do processo criminal perante a Justiça Militar.'
  },
  {
    id: 'pmpe_leg_10',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Conselho de Justificação',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O Conselho de Justificação, previsto no Estatuto dos Policiais-Militares de Pernambuco, destina-se, especialmente, a:',
    alternativas: [
      { letra: 'A', texto: 'Assegurar ao oficial acusado de prática de ato que afete seu decoro pessoal ou seu conceito na corporação o direito de se justificar antes de eventual medida mais severa, como a perda do posto.' },
      { letra: 'B', texto: 'Aplicar automaticamente a exclusão do policial-militar, sem qualquer direito de manifestação ou defesa.', comentario: 'Incorreta. O Conselho de Justificação existe justamente para assegurar ao acusado o direito de se justificar, e não para promover exclusão automática sem manifestação.' },
      { letra: 'C', texto: 'Deliberar exclusivamente sobre pedidos de transferência de município dos policiais-militares.', comentario: 'Incorreta. Matéria de transferência de lotação não é a finalidade do Conselho de Justificação, voltado à apuração de fatos que afetem o decoro ou o conceito do oficial.' },
      { letra: 'D', texto: 'Substituir o Conselho de Disciplina em todas as hipóteses, tornando este último instituto inaplicável.', comentario: 'Incorreta. Conselho de Justificação e Conselho de Disciplina são institutos distintos, cada um com hipóteses e destinatários próprios, coexistindo no Estatuto.' }
    ],
    gabarito: 'A',
    artigo: 'Arts. 35-36 da Lei 6.783/1974',
    justificativa: 'O Conselho de Justificação assegura ao oficial acusado de fato que afete seu decoro pessoal ou seu conceito na corporação o direito de se justificar perante um colegiado, antes da eventual aplicação de medida mais severa, como a perda do posto e da patente.'
  },
  {
    id: 'pmpe_leg_11',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Fundamento Institucional',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'De acordo com o Estatuto dos Policiais-Militares de Pernambuco, a hierarquia e a disciplina constituem:',
    alternativas: [
      { letra: 'A', texto: 'A base institucional da Polícia Militar.' },
      { letra: 'B', texto: 'Diretrizes meramente recomendatórias, sem caráter vinculante para os policiais-militares.', comentario: 'Incorreta. A hierarquia e a disciplina não são meras recomendações; constituem a própria base institucional da corporação, de observância obrigatória.' },
      { letra: 'C', texto: 'Institutos aplicáveis exclusivamente às Forças Armadas, e não à Polícia Militar estadual.', comentario: 'Incorreta. O Estatuto da Polícia Militar de Pernambuco estabelece expressamente que hierarquia e disciplina são a base institucional da própria Polícia Militar estadual.' },
      { letra: 'D', texto: 'Conceitos aplicáveis apenas aos oficiais, sem qualquer relação com as praças da corporação.', comentario: 'Incorreta. Hierarquia e disciplina se aplicam a todos os integrantes da corporação, tanto oficiais quanto praças, e não apenas a um desses grupos.' }
    ],
    gabarito: 'A',
    justificativa: 'A hierarquia e a disciplina são a base institucional da Polícia Militar, conforme estabelece o Estatuto dos Policiais-Militares de Pernambuco, aplicando-se a todos os integrantes da corporação.'
  },
  {
    id: 'pmpe_leg_12',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Ordenação por Antiguidade dentro do Posto',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo o Estatuto dos Policiais-Militares de Pernambuco, dentro de um mesmo posto ou de uma mesma graduação, a ordenação hierárquica se faz, em regra, por:',
    alternativas: [
      { letra: 'A', texto: 'Antiguidade no posto ou na graduação.' },
      { letra: 'B', texto: 'Sorteio realizado anualmente entre os policiais-militares do mesmo posto.', comentario: 'Incorreta. Não há previsão de sorteio para ordenação hierárquica; o critério, dentro de um mesmo posto ou graduação, é a antiguidade.' },
      { letra: 'C', texto: 'Exclusivamente o grau de escolaridade do policial-militar, independentemente do tempo de serviço.', comentario: 'Incorreta. O critério de ordenação dentro de um mesmo posto ou graduação é a antiguidade, e não o grau de escolaridade isoladamente.' },
      { letra: 'D', texto: 'A votação entre os pares do mesmo círculo hierárquico.', comentario: 'Incorreta. A ordenação hierárquica dentro de um mesmo posto ou graduação não é definida por votação entre pares, mas pelo critério objetivo de antiguidade.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 10 da Lei 6.783/1974',
    justificativa: 'Dentro de um mesmo posto ou de uma mesma graduação, a ordenação da autoridade hierárquica se faz pela antiguidade no posto ou na graduação, conforme dispõe o Estatuto.'
  },
  {
    id: 'pmpe_leg_13',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Objeto do Estatuto',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'O Estatuto dos Policiais-Militares do Estado de Pernambuco (Lei nº 6.783/1974) tem por objeto regular:',
    alternativas: [
      { letra: 'A', texto: 'A situação, as obrigações, os deveres, os direitos e as prerrogativas dos policiais-militares do Estado de Pernambuco.' },
      { letra: 'B', texto: 'Exclusivamente o regime de aposentadoria dos servidores civis da Secretaria de Defesa Social.', comentario: 'Incorreta. O objeto do Estatuto é bem mais amplo, regulando a situação, obrigações, deveres, direitos e prerrogativas dos policiais-militares, e não apenas aposentadoria de servidores civis.' },
      { letra: 'C', texto: 'Somente o regime de compras e licitações da Polícia Militar de Pernambuco.', comentario: 'Incorreta. Licitações e compras públicas são disciplinadas por legislação própria (como a lei geral de licitações), e não pelo Estatuto dos Policiais-Militares, voltado ao regime funcional destes.' },
      { letra: 'D', texto: 'Exclusivamente a estrutura organizacional interna dos batalhões e companhias da corporação.', comentario: 'Incorreta. O Estatuto trata do regime funcional do policial-militar (deveres, direitos, hierarquia, disciplina), e não apenas da estrutura organizacional de unidades.' }
    ],
    gabarito: 'A',
    justificativa: 'O Estatuto regula a situação, as obrigações, os deveres, os direitos e as prerrogativas dos policiais-militares do Estado de Pernambuco, constituindo o principal diploma normativo sobre o regime funcional dessa carreira.'
  }
];
