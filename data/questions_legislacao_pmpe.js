// ============================================================
// QUESTIONS_LEGISLACAO_PMPE — Legislação Estadual exclusiva do
// curso PMPE (Polícia Militar de PE): Lei nº 6.783/1974 (Estatuto
// dos Policiais-Militares do Estado de Pernambuco), parte do bloco
// "Direitos Humanos e Legislação Extravagante" do edital real
// (Instituto AOCP).
//
// 2026-09: artigos corrigidos após re-verificação do texto oficial
// (Alepe Legis, id=1032) — a citação de artigo original estava
// incorreta em várias questões (ex.: hierarquia/disciplina não é
// Art. 10-11, e sim Art. 12 §1º/§2º/§3º; círculos hierárquicos é
// Art. 13-14, não Art. 20; deveres é Art. 30, não Art. 28; direitos
// é Art. 49, não Art. 37; crime x transgressão é Art. 40, não Art.
// 32; Conselho de Justificação é Art. 47 e Conselho de Disciplina é
// Art. 48, não "Arts. 35-36"). O conteúdo (pmpe_leg_5) também foi
// ajustado: Aspirante-a-Oficial PM frequenta o Círculo de Oficiais
// (não especificamente "Oficiais Subalternos").
// ============================================================

const QUESTIONS_LEGISLACAO_PMPE = [
  {
    id: 'pmpe_leg_1',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Conceito de Hierarquia (Art. 12, §1º)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Nos termos do art. 12, §1º, da Lei nº 6.783/1974 (Estatuto dos Policiais-Militares de Pernambuco), hierarquia policial-militar é conceituada como:',
    alternativas: [
      { letra: 'A', texto: 'A ordenação da autoridade, em níveis diferentes, dentro da estrutura da Polícia Militar.' },
      { letra: 'B', texto: 'A rigorosa observância e o acatamento integral das leis e regulamentos que fundamentam a instituição.', comentario: 'Incorreta. Essa é a definição de DISCIPLINA (art. 11), e não de hierarquia, que trata da ordenação da autoridade em níveis.' },
      { letra: 'C', texto: 'O conjunto de punições aplicáveis aos policiais-militares que cometem transgressões disciplinares.', comentario: 'Incorreta. O conjunto de punições disciplinares é matéria distinta, tratada em dispositivos próprios sobre transgressões, e não o conceito de hierarquia.' },
      { letra: 'D', texto: 'A relação de igualdade absoluta de autoridade entre todos os postos e graduações da corporação.', comentario: 'Incorreta. A hierarquia pressupõe justamente níveis DIFERENTES de autoridade, e não uma relação de igualdade absoluta entre postos e graduações.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 12, §1º, da Lei 6.783/1974',
    justificativa: 'O Estatuto define hierarquia policial-militar como a ordenação da autoridade em níveis diferentes dentro da estrutura da Polícia Militar, feita por postos ou graduações e, dentro de um mesmo posto ou graduação, pela antiguidade.'
  },
  {
    id: 'pmpe_leg_2',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Conceito de Disciplina (Art. 12, §2º)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 12, §2º, da Lei nº 6.783/1974, disciplina policial-militar é:',
    alternativas: [
      { letra: 'A', texto: 'A rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam a instituição policial-militar, traduzindo-se pelo perfeito cumprimento do dever.' },
      { letra: 'B', texto: 'A ordenação da autoridade em níveis diferentes, por postos e graduações.', comentario: 'Incorreta. Essa é a definição de HIERARQUIA (art. 10), e não de disciplina, que trata da observância das normas institucionais.' },
      { letra: 'C', texto: 'Um benefício facultativo, que o policial-militar pode optar por observar ou não, conforme sua conveniência pessoal.', comentario: 'Incorreta. A disciplina é exigência obrigatória e rigorosa da vida policial-militar, e não uma faculdade opcional do servidor.' },
      { letra: 'D', texto: 'Restrição aplicável apenas aos policiais-militares da reserva remunerada e aos reformados.', comentario: 'Incorreta. A disciplina e o respeito à hierarquia devem ser observados em todas as circunstâncias, tanto pelos policiais-militares da ativa quanto pelos da reserva remunerada e reformados.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 12, §2º, da Lei 6.783/1974',
    justificativa: 'Disciplina é a rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam o organismo policial-militar e coordenam seu funcionamento regular e harmônico, traduzindo-se pelo perfeito cumprimento do dever.'
  },
  {
    id: 'pmpe_leg_3',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Abrangência da Disciplina e Hierarquia (Art. 12, §3º)',
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
    artigo: 'Art. 12, §3º, da Lei 6.783/1974',
    justificativa: 'A disciplina e o respeito à hierarquia devem ser mantidos em todas as circunstâncias da vida, entre os policiais-militares da ativa, da reserva remunerada e os reformados, conforme estabelece o Estatuto.'
  },
  {
    id: 'pmpe_leg_4',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Círculos Hierárquicos (Art. 13-14)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo os arts. 13 e 14 da Lei nº 6.783/1974, os círculos hierárquicos da Polícia Militar de Pernambuco são constituídos, entre outros, pelos seguintes grupos:',
    alternativas: [
      { letra: 'A', texto: 'Círculo de Oficiais (Superiores, Intermediários e Subalternos) e Círculo de Praças (Subtenentes e Sargentos, e Cabos e Soldados).' },
      { letra: 'B', texto: 'Apenas dois círculos: "Oficiais" e "Praças", sem qualquer subdivisão interna.', comentario: 'Incorreta. O Círculo de Oficiais se subdivide em Superiores, Intermediários e Subalternos, e o Círculo de Praças em Subtenentes e Sargentos, e Cabos e Soldados — não são categorias únicas sem subdivisão.' },
      { letra: 'C', texto: 'Círculos definidos exclusivamente pelo tempo de serviço, sem relação com postos ou graduações.', comentario: 'Incorreta. Os círculos hierárquicos são definidos por postos e graduações (Oficiais Superiores, Subalternos, Sargentos, Soldados etc.), não apenas pelo tempo de serviço isoladamente.' },
      { letra: 'D', texto: 'Círculos aplicáveis exclusivamente aos policiais-militares da reserva remunerada.', comentario: 'Incorreta. Os círculos hierárquicos organizam a convivência de todos os policiais-militares na estrutura da corporação, e não apenas dos que estão na reserva remunerada.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 13 e 14 da Lei 6.783/1974',
    justificativa: 'Os arts. 13 e 14 estabelecem os círculos hierárquicos de convivência da Polícia Militar: o Círculo de Oficiais (subdividido em Superiores, Intermediários e Subalternos) e o Círculo de Praças (Subtenentes e Sargentos, e Cabos e Soldados), com a finalidade de desenvolver o espírito de camaradagem entre policiais-militares da mesma categoria.'
  },
  {
    id: 'pmpe_leg_5',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Círculo dos Aspirantes a Oficial (Art. 14)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'De acordo com o quadro de círculos hierárquicos do Estatuto dos Policiais-Militares de Pernambuco (art. 14), o Aspirante-a-Oficial PM frequenta, para fins de convivência hierárquica:',
    alternativas: [
      { letra: 'A', texto: 'O Círculo de Oficiais, ainda que seja uma praça especial (junto com o Aluno-Oficial PM, este apenas excepcionalmente ou em reuniões sociais).' },
      { letra: 'B', texto: 'O círculo dos Oficiais Superiores, mesmo grupo dos Coronéis e Tenentes-Coronéis.', comentario: 'Incorreta. O Aspirante frequenta o Círculo de Oficiais de forma geral, e não especificamente o de Oficiais Superiores, reservado a postos mais elevados.' },
      { letra: 'C', texto: 'O círculo dos Subtenentes e Sargentos, junto às praças mais graduadas.', comentario: 'Incorreta. Subtenentes e Sargentos formam círculo próprio de praças; o Aspirante-a-Oficial PM, mesmo sendo praça especial, frequenta o Círculo de Oficiais.' },
      { letra: 'D', texto: 'O círculo dos Cabos e Soldados, por serem os mais recentes na corporação.', comentario: 'Incorreta. Cabos e Soldados formam círculo próprio de praças; o Aspirante-a-Oficial PM frequenta o Círculo de Oficiais.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 14 da Lei 6.783/1974',
    justificativa: 'Pelo quadro do art. 14, o Aspirante-a-Oficial PM (praça especial) frequenta o Círculo de Oficiais. Já o Aluno-Oficial PM tem acesso a esse círculo apenas excepcionalmente ou em reuniões sociais.'
  },
  {
    id: 'pmpe_leg_6',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Deveres Policiais-Militares (Art. 30)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 30 da Lei nº 6.783/1974, os deveres policiais-militares emanam de vínculos racionais e morais que ligam o policial-militar à comunidade estadual e à sua segurança, compreendendo, essencialmente:',
    alternativas: [
      { letra: 'A', texto: 'A dedicação integral ao serviço e a fidelidade à instituição, o culto aos símbolos nacionais, a probidade e lealdade em todas as circunstâncias, a disciplina e o respeito à hierarquia, o rigoroso cumprimento das obrigações e ordens, e o dever de tratar o subordinado dignamente.' },
      { letra: 'B', texto: 'A faculdade de descumprir ordens de superiores hierárquicos sempre que o policial-militar julgar conveniente.', comentario: 'Incorreta. O rigoroso cumprimento das obrigações e ordens é dever expresso (inciso V do art. 30), e não uma faculdade de descumprimento a critério pessoal.' },
      { letra: 'C', texto: 'A dispensa de qualquer vínculo do policial-militar com a comunidade estadual e sua segurança.', comentario: 'Incorreta. O caput do art. 30 estabelece justamente o oposto: os deveres emanam de vínculos que ligam o policial-militar à comunidade estadual e à sua segurança.' },
      { letra: 'D', texto: 'A prerrogativa de tratar o subordinado sem urbanidade, quando em serviço.', comentario: 'Incorreta. O inciso VI do art. 30 exige o oposto: a obrigação de tratar o subordinado dignamente e com urbanidade.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 30 da Lei 6.783/1974',
    justificativa: 'O art. 30 elenca como deveres policiais-militares: a dedicação integral e fidelidade à instituição (I), o culto aos símbolos nacionais (II), a probidade e lealdade em todas as circunstâncias (III), a disciplina e o respeito à hierarquia (IV), o rigoroso cumprimento das obrigações e ordens (V), e o dever de tratar o subordinado dignamente e com urbanidade (VI).'
  },
  {
    id: 'pmpe_leg_7',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Direitos do Policial-Militar (Art. 49)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Entre os direitos assegurados ao policial-militar de Pernambuco pelo Estatuto (art. 49 da Lei nº 6.783/1974), incluem-se:',
    alternativas: [
      { letra: 'A', texto: 'A garantia de patente, a estabilidade (com 10 anos de efetivo serviço, se praça), o uso das designações hierárquicas correspondentes ao posto ou graduação, a remuneração, a promoção e o porte de arma.' },
      { letra: 'B', texto: 'A dispensa integral e permanente do dever de obediência à hierarquia policial-militar, uma vez atingida a estabilidade.', comentario: 'Incorreta. A estabilidade é direito assegurado, mas não dispensa o policial-militar do dever de obediência à hierarquia, que se mantém em toda a carreira.' },
      { letra: 'C', texto: 'A vedação absoluta a qualquer forma de remuneração, sendo o cargo exercido em caráter honorífico e não remunerado.', comentario: 'Incorreta. A remuneração é expressamente assegurada como direito do policial-militar (art. 49, IV, "d"), e não vedada; o cargo não é meramente honorífico.' },
      { letra: 'D', texto: 'A proibição de uso de designações hierárquicas fora do horário de serviço.', comentario: 'Incorreta. O uso das designações hierárquicas correspondentes ao posto ou graduação é assegurado como direito do policial-militar (art. 49, IV, "b"), sem a restrição indicada.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 49 da Lei 6.783/1974',
    justificativa: 'O art. 49 assegura ao policial-militar, entre outros direitos, a garantia de patente (I), a estabilidade quando praça com 10 anos de efetivo serviço, o uso das designações hierárquicas, a ocupação de cargo correspondente ao posto/graduação, a remuneração, a pensão policial-militar, a promoção e o porte de arma (oficiais em atividade ou inatividade, e praças com as restrições do Comando-Geral) — todos previstos no inciso IV e suas alíneas.'
  },
  {
    id: 'pmpe_leg_8',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Crime Militar x Transgressão Disciplinar (Art. 40)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo o art. 40 da Lei nº 6.783/1974, a violação das obrigações ou dos deveres policiais-militares:',
    alternativas: [
      { letra: 'A', texto: 'Constituirá crime ou transgressão disciplinar, conforme dispuserem a legislação ou a regulamentação peculiares (na prática, crime militar segue o Código Penal Militar, e transgressão disciplinar as normas regulamentares próprias).' },
      { letra: 'B', texto: 'Configurará sempre e exclusivamente crime militar, jamais mera transgressão disciplinar.', comentario: 'Incorreta. O art. 40 prevê expressamente as duas possibilidades — crime ou transgressão disciplinar —, e não apenas uma categoria única e exclusiva.' },
      { letra: 'C', texto: 'Será irrelevante para fins de responsabilização do policial-militar, salvo decisão judicial em contrário.', comentario: 'Incorreta. O art. 40 estabelece expressamente que a violação de obrigações ou deveres constitui crime ou transgressão disciplinar, gerando responsabilização, e não é irrelevante.' },
      { letra: 'D', texto: 'Só poderá ser apurada mediante prévia autorização do Tribunal de Justiça do Estado, em qualquer hipótese.', comentario: 'Incorreta. A competência do Tribunal de Justiça está prevista para os processos de Conselho de Justificação (art. 47, §2º), não como condição geral para apurar toda violação de obrigação ou dever.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 40 da Lei 6.783/1974',
    justificativa: 'O art. 40 dispõe que a violação das obrigações ou dos deveres policiais-militares constituirá crime ou transgressão disciplinar, conforme dispuserem a legislação ou a regulamentação peculiares — na prática, o crime militar é apurado conforme o Código Penal Militar, e a transgressão disciplinar segundo as normas regulamentares disciplinares próprias da corporação.'
  },
  {
    id: 'pmpe_leg_9',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Conselho de Disciplina (Art. 48)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O Conselho de Disciplina, previsto no art. 48 da Lei nº 6.783/1974, aplica-se a quem e tem por finalidade:',
    alternativas: [
      { letra: 'A', texto: 'Ao Aspirante-a-Oficial PM e às praças com estabilidade assegurada, presumivelmente incapazes de permanecerem como policiais-militares da ativa, competindo ao Comandante-Geral julgar, em última instância, os processos dele oriundos.' },
      { letra: 'B', texto: 'Exclusivamente aos oficiais, competindo o julgamento ao Tribunal de Justiça do Estado.', comentario: 'Incorreta. Isso descreve o Conselho de Justificação (art. 47), aplicável a oficiais e julgado pelo Tribunal de Justiça — o Conselho de Disciplina (art. 48) aplica-se a Aspirantes e praças estáveis, com julgamento pelo Comandante-Geral.' },
      { letra: 'C', texto: 'Conceder exclusivamente promoções por antiguidade aos policiais-militares mais graduados.', comentario: 'Incorreta. Promoções não são a finalidade do Conselho de Disciplina, que trata da apuração de incapacidade do Aspirante-a-Oficial PM ou da praça estável para permanência na corporação.' },
      { letra: 'D', texto: 'Definir unicamente o valor da remuneração e dos benefícios previdenciários dos policiais-militares.', comentario: 'Incorreta. Matéria remuneratória e previdenciária não é objeto do Conselho de Disciplina, cuja finalidade é apurar a incapacidade presumida de permanência na corporação.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 48 da Lei 6.783/1974',
    justificativa: 'O art. 48 prevê que o Aspirante-a-Oficial PM e as praças com estabilidade assegurada, presumivelmente incapazes de permanecerem como policiais-militares da ativa, são submetidos a Conselho de Disciplina; pelo §2º, compete ao Comandante-Geral da Polícia Militar julgar, em última instância, os processos dele oriundos.'
  },
  {
    id: 'pmpe_leg_10',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Conselho de Justificação (Art. 47)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O Conselho de Justificação, previsto no art. 47 da Lei nº 6.783/1974, aplica-se a quem e é julgado, em última instância, por qual órgão?',
    alternativas: [
      { letra: 'A', texto: 'Aplica-se ao oficial presumivelmente incapaz de permanecer como policial-militar da ativa, competindo ao Tribunal de Justiça do Estado de Pernambuco julgar os processos dele oriundos.' },
      { letra: 'B', texto: 'Aplica-se ao Aspirante-a-Oficial PM e às praças estáveis, com julgamento pelo Comandante-Geral da Polícia Militar.', comentario: 'Incorreta. Essa é a descrição do Conselho de Disciplina (art. 48), aplicável a Aspirantes e praças com estabilidade, julgado pelo Comandante-Geral — não do Conselho de Justificação, destinado a oficiais e julgado pelo Tribunal de Justiça.' },
      { letra: 'C', texto: 'Deliberar exclusivamente sobre pedidos de transferência de município dos policiais-militares.', comentario: 'Incorreta. Matéria de transferência de lotação não é a finalidade do Conselho de Justificação, voltado à apuração da incapacidade presumida do oficial para permanecer na ativa.' },
      { letra: 'D', texto: 'Substituir o Conselho de Disciplina em todas as hipóteses, tornando este último instituto inaplicável.', comentario: 'Incorreta. Conselho de Justificação (oficiais) e Conselho de Disciplina (Aspirantes e praças estáveis) são institutos distintos, cada um com destinatários próprios, coexistindo no Estatuto.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 47 da Lei 6.783/1974',
    justificativa: 'O art. 47 prevê que o oficial presumivelmente incapaz de permanecer como policial-militar da ativa é submetido a Conselho de Justificação; pelo §2º, compete ao Tribunal de Justiça do Estado de Pernambuco julgar os processos dele oriundos (diferentemente do Conselho de Disciplina, julgado pelo Comandante-Geral).'
  },
  {
    id: 'pmpe_leg_11',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Fundamento Institucional (Art. 12, caput)',
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
    artigo: 'Art. 12, caput, da Lei 6.783/1974',
    justificativa: 'A hierarquia e a disciplina são a base institucional da Polícia Militar, conforme estabelece o Estatuto dos Policiais-Militares de Pernambuco, aplicando-se a todos os integrantes da corporação.'
  },
  {
    id: 'pmpe_leg_12',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Ordenação por Antiguidade dentro do Posto (Art. 12, §1º)',
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
    artigo: 'Art. 12, §1º, da Lei 6.783/1974',
    justificativa: 'Dentro de um mesmo posto ou de uma mesma graduação, a ordenação da autoridade hierárquica se faz pela antiguidade no posto ou na graduação, conforme dispõe o Estatuto.'
  },
  {
    id: 'pmpe_leg_13',
    disciplina: 'legislacao_pmpe',
    topico: 'Lei 6.783/1974 - Objeto do Estatuto (Art. 1º)',
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
    artigo: 'Art. 1º da Lei 6.783/1974',
    justificativa: 'O Estatuto regula a situação, as obrigações, os deveres, os direitos e as prerrogativas dos policiais-militares do Estado de Pernambuco, constituindo o principal diploma normativo sobre o regime funcional dessa carreira.'
  }
];
