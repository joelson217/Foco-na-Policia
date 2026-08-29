// ============================================================
// QUESTIONS_LEGISLACAO_PE — Legislação estadual específica da Polícia
// Penal de Pernambuco (curso PPPE), baseada na Lei nº 15.755/2016
// (Código Penitenciário do Estado de Pernambuco) e na LC 150/2009
// (Plano de Cargos, Carreiras e Vencimentos - GOSPEPE). Fontes
// consultadas: Alepe Legis (legis.alepe.pe.gov.br), texto atualizado.
// ============================================================

const QUESTIONS_LEGISLACAO_PE = [
  {
    id: 'pe_leg_1',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Objetivo e Finalidade',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'O Código Penitenciário do Estado de Pernambuco (Lei nº 15.755/2016) tem por objetivo regulamentar o sistema penitenciário estadual visando a cumprir efetivamente os preceitos contidos em qual lei federal, além da Constituição da República?',
    alternativas: [
      { letra: 'A', texto: 'Lei nº 7.210/1984 (Lei de Execução Penal).' },
      { letra: 'B', texto: 'Lei nº 8.069/1990 (Estatuto da Criança e do Adolescente).' },
      { letra: 'C', texto: 'Lei nº 9.099/1995 (Lei dos Juizados Especiais).' },
      { letra: 'D', texto: 'Lei nº 13.869/2019 (Lei de Abuso de Autoridade).' }
    ],
    gabarito: 'A',
    artigo: 'Art. 1º da Lei 15.755/2016',
    justificativa: 'O art. 1º estabelece que o Código Penitenciário regulamenta o sistema penitenciário de PE visando a cumprir efetivamente a Lei Federal nº 7.210/84 (LEP) e a Constituição Federal.'
  },
  {
    id: 'pe_leg_2',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Estabelecimentos Penais',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'De acordo com o art. 23 da Lei nº 15.755/2016, são estabelecimentos penais do sistema prisional de Pernambuco, EXCETO:',
    alternativas: [
      { letra: 'A', texto: 'Penitenciária.' },
      { letra: 'B', texto: 'Colônia Agrícola ou Industrial.' },
      { letra: 'C', texto: 'Centro de Classificação.' },
      { letra: 'D', texto: 'Delegacia Especializada de Investigação.' }
    ],
    gabarito: 'D',
    artigo: 'Art. 23 da Lei 15.755/2016',
    justificativa: 'O art. 23 lista sete tipos de estabelecimentos: Penitenciária, Cadeia Pública, Colônia Agrícola ou Industrial, Casa do Albergado, Centro de Classificação, Presídio e Centro de Saúde Penitenciário. Delegacia de investigação não integra essa lista, sendo órgão da Polícia Civil.'
  },
  {
    id: 'pe_leg_3',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Padrão das Celas',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o Código Penitenciário de Pernambuco, a cela destinada ao preso deve observar, no mínimo, além de condições adequadas de salubridade, ventilação e iluminação, a seguinte área mínima:',
    alternativas: [
      { letra: 'A', texto: '4m².' },
      { letra: 'B', texto: '6m².' },
      { letra: 'C', texto: '9m².' },
      { letra: 'D', texto: '12m².' }
    ],
    gabarito: 'B',
    artigo: 'Art. 26 da Lei 15.755/2016',
    justificativa: 'O art. 26 exige área mínima de 6m² por cela, com condições adequadas de salubridade do ambiente (aeração, insolação e condicionamento térmico) e higiene.'
  },
  {
    id: 'pe_leg_4',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Órgãos de Execução Estadual',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A direção da política penitenciária do Estado de Pernambuco, nos termos da Lei nº 15.755/2016, é atribuição de qual órgão?',
    alternativas: [
      { letra: 'A', texto: 'Secretaria Executiva de Ressocialização (SERES).' },
      { letra: 'B', texto: 'Secretaria de Defesa Social (SDS).' },
      { letra: 'C', texto: 'Conselho Penitenciário Estadual, exclusivamente.' },
      { letra: 'D', texto: 'Tribunal de Justiça de Pernambuco, por meio da Vara de Execuções Penais.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 11 da Lei 15.755/2016',
    justificativa: 'O art. 11 atribui à Secretaria Executiva de Ressocialização (SERES), subordinada à Secretaria de Justiça e Direitos Humanos, a direção da política penitenciária estadual.'
  },
  {
    id: 'pe_leg_5',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Deveres do Preso',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Constitui dever do preso, segundo o Código Penitenciário de Pernambuco:',
    alternativas: [
      { letra: 'A', texto: 'Recusar-se a participar de atividades de trabalho, por se tratar de faculdade absoluta.' },
      { letra: 'B', texto: 'Submeter-se às normas de execução da pena e comportar-se disciplinadamente, respeitando as autoridades.' },
      { letra: 'C', texto: 'Exigir cela individual independentemente da capacidade do estabelecimento.' },
      { letra: 'D', texto: 'Recusar identificação pelo sistema de classificação, quando desejar.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 110 da Lei 15.755/2016',
    justificativa: 'O art. 110 impõe ao preso o dever de acatar as autoridades, cumprir os regulamentos, manter conduta disciplinada e submeter-se à execução da pena e às atividades laborais previstas.'
  },
  {
    id: 'pe_leg_6',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Direitos do Preso',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Entre os direitos assegurados ao preso pelo Código Penitenciário de Pernambuco, inclui-se o de ser chamado por seu nome, incluindo o reconhecimento de:',
    alternativas: [
      { letra: 'A', texto: 'Apelido atribuído por outros internos.' },
      { letra: 'B', texto: 'Nome social.' },
      { letra: 'C', texto: 'Codinome utilizado em inquérito policial.' },
      { letra: 'D', texto: 'Numeração de matrícula prisional, em substituição ao nome civil.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 112, XII, da Lei 15.755/2016',
    justificativa: 'O art. 112, inciso XII, garante ao preso o direito de ser chamado por seu nome, contemplando expressamente o reconhecimento do nome social.'
  },
  {
    id: 'pe_leg_7',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Vedações (Art. 118)',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'É vedado pelo Código Penitenciário de Pernambuco, EXCETO:',
    alternativas: [
      { letra: 'A', texto: 'A aplicação de castigo corporal.' },
      { letra: 'B', texto: 'O recolhimento em cela escura.' },
      { letra: 'C', texto: 'A sanção disciplinar de caráter coletivo.' },
      { letra: 'D', texto: 'A suspensão de visitas como sanção disciplinar de falta leve, por prazo determinado em lei.' }
    ],
    gabarito: 'D',
    artigo: 'Arts. 118 e 137 da Lei 15.755/2016',
    justificativa: 'O art. 118 veda castigo corporal, cela escura, sanções coletivas e penas cruéis ou degradantes. A suspensão de visitas por prazo limitado, prevista no art. 137 como sanção para falta leve, é sanção disciplinar expressamente autorizada em lei, não uma vedação.'
  },
  {
    id: 'pe_leg_8',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Regime Disciplinar Diferenciado',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Segundo a Lei nº 15.755/2016, a prática de fato previsto como crime doloso constitui falta grave e, no âmbito estadual, pode ensejar a inclusão do preso no Regime Disciplinar Diferenciado (RDD) pelo prazo máximo de:',
    alternativas: [
      { letra: 'A', texto: '30 dias, renovável uma única vez.' },
      { letra: 'B', texto: '180 dias, sem possibilidade de renovação.' },
      { letra: 'C', texto: '360 dias, podendo ser repetida a sanção por nova falta grave da mesma espécie, até o limite de 1/6 da pena aplicada.' },
      { letra: 'D', texto: 'Tempo indeterminado, a critério do diretor do estabelecimento.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 129 da Lei 15.755/2016 (em harmonia com a LEP)',
    justificativa: 'O regramento estadual segue a lógica da LEP: o RDD pode chegar a até 360 dias, admitindo repetição em caso de nova falta grave de mesma espécie, respeitado o limite de um sexto da pena aplicada.'
  },
  {
    id: 'pe_leg_9',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Faltas Disciplinares',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Classifica-se como falta disciplinar de natureza GRAVE, segundo o Código Penitenciário de Pernambuco:',
    alternativas: [
      { letra: 'A', texto: 'Descuidar da higiene pessoal.' },
      { letra: 'B', texto: 'Praticar fato previsto como crime doloso.' },
      { letra: 'C', texto: 'Desrespeitar servidor no exercício da função, verbalmente.' },
      { letra: 'D', texto: 'Recusar-se, sem justificativa, a realizar atividade de trabalho de baixa complexidade.' }
    ],
    gabarito: 'B',
    artigo: 'Arts. 130-133 da Lei 15.755/2016',
    justificativa: 'Faltas graves envolvem participação em motim, fuga, posse de arma, aparelho de comunicação e a prática de fato definido como crime doloso. Faltas leves e médias abrangem condutas de menor gravidade, como desrespeito verbal ou negligência com a higiene.'
  },
  {
    id: 'pe_leg_10',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Classificação de Conduta',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'A conduta do preso, para fins de progressão de regime e demais benefícios, é classificada pelo Código Penitenciário de Pernambuco como boa, regular ou má. A ausência de qualquer infração disciplinar no período avaliado enseja a classificação como:',
    alternativas: [
      { letra: 'A', texto: 'Boa.' },
      { letra: 'B', texto: 'Regular.' },
      { letra: 'C', texto: 'Má.' },
      { letra: 'D', texto: 'Neutra, sem efeitos para benefícios.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 135 da Lei 15.755/2016',
    justificativa: 'O art. 135 classifica a conduta como boa (ausência de infrações), regular (faltas leves ou médias) e má (faltas graves).'
  },
  {
    id: 'pe_leg_11',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Sanções Disciplinares',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A suspensão ou restrição de direitos, o isolamento na própria cela ou em local adequado e a suspensão do direito a visitas por prazo maior são sanções aplicáveis, segundo o Código Penitenciário de PE, especialmente às faltas de natureza:',
    alternativas: [
      { letra: 'A', texto: 'Leve.' },
      { letra: 'B', texto: 'Média.' },
      { letra: 'C', texto: 'Grave.' },
      { letra: 'D', texto: 'Nenhuma das anteriores, pois essas sanções foram abolidas pela lei estadual.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 137 da Lei 15.755/2016',
    justificativa: 'O art. 137 prevê uma gradação de sanções conforme a gravidade da falta; isolamento e suspensão de visitas por prazo mais longo (20 a 30 dias) são reservados às faltas graves.'
  },
  {
    id: 'pe_leg_12',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Procedimento Disciplinar',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'No procedimento para apuração de falta disciplinar previsto na Lei nº 15.755/2016, é assegurado ao preso:',
    alternativas: [
      { letra: 'A', texto: 'O direito de defesa, inclusive com acompanhamento de advogado, sendo vedado o julgamento sem oitiva do acusado.' },
      { letra: 'B', texto: 'A aplicação imediata da sanção, dispensada qualquer notificação prévia.' },
      { letra: 'C', texto: 'O julgamento por comissão composta exclusivamente por outros internos.' },
      { letra: 'D', texto: 'A impossibilidade de recorrer da decisão em qualquer hipótese.' }
    ],
    gabarito: 'A',
    artigo: 'Arts. 127 e 143-146 da Lei 15.755/2016',
    justificativa: 'O art. 127 assegura ao preso o direito de defesa, com acompanhamento de advogado, dentro de um procedimento com prazos definidos para notificação, apuração e defesa antes do julgamento.'
  },
  {
    id: 'pe_leg_13',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Prescrição de Faltas',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'De acordo com a Lei nº 15.755/2016, prescreve em 1 (um) ano a pretensão de apurar falta disciplinar de natureza:',
    alternativas: [
      { letra: 'A', texto: 'Leve.' },
      { letra: 'B', texto: 'Média.' },
      { letra: 'C', texto: 'Grave.' },
      { letra: 'D', texto: 'Gravíssima.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 150 da Lei 15.755/2016',
    justificativa: 'O art. 150 estabelece prazos prescricionais diferentes por gravidade: 6 meses para falta leve, 1 ano para falta média e 3 anos para falta grave.'
  },
  {
    id: 'pe_leg_14',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Seleção de Pessoal',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'A seleção de pessoal para o exercício de função penitenciária em Pernambuco, segundo o Código Penitenciário, exige:',
    alternativas: [
      { letra: 'A', texto: 'Apenas aprovação em exame médico, dispensada qualquer formação específica.' },
      { letra: 'B', texto: 'Aptidão física e mental comprovada mediante procedimento adequado, além de formação específica prévia ao exercício da função.' },
      { letra: 'C', texto: 'Somente experiência prévia em atividade de segurança privada.' },
      { letra: 'D', texto: 'Formação em nível superior em Direito, como requisito único.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 35 da Lei 15.755/2016',
    justificativa: 'O art. 35 exige que a seleção do pessoal penitenciário considere a aptidão física e mental do candidato e sua formação profissional específica, obtida em curso de formação antes do exercício da função.'
  },
  {
    id: 'pe_leg_15',
    disciplina: 'legislacao_pe',
    topico: 'LC 150/2009 - Plano de Cargos (GOSPEPE)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A Lei Complementar nº 150/2009 institui, no âmbito do Estado de Pernambuco, o Plano de Cargos, Carreiras e Vencimentos do Grupo Ocupacional Segurança Penitenciária (GOSPEPE), estruturando a carreira do cargo de Agente de Segurança Penitenciária em quantas classes hierarquicamente escalonadas?',
    alternativas: [
      { letra: 'A', texto: 'Duas classes.' },
      { letra: 'B', texto: 'Três classes.' },
      { letra: 'C', texto: 'Quatro classes.' },
      { letra: 'D', texto: 'Seis classes.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 2º da LC 150/2009',
    justificativa: 'A carreira do GOSPEPE é organizada em quatro classes (I a IV), hierarquicamente escalonadas, cada uma com sete padrões de vencimento (letras "a" a "g").'
  },
  {
    id: 'pe_leg_16',
    disciplina: 'legislacao_pe',
    topico: 'LC 150/2009 - Inspetor Policial Penal Especial',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Segundo a LC nº 150/2009, o servidor que atinge a Classe IV da carreira de Agente de Segurança Penitenciária passa a ostentar qual denominação especial, com atribuições definidas em lei complementar própria?',
    alternativas: [
      { letra: 'A', texto: 'Delegado Penitenciário.' },
      { letra: 'B', texto: 'Inspetor Policial Penal Especial.' },
      { letra: 'C', texto: 'Comandante-Geral do Sistema Prisional.' },
      { letra: 'D', texto: 'Superintendente de Ressocialização.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 2º, §3º, da LC 150/2009',
    justificativa: 'Ao alcançar a Classe IV, o servidor passa a ser designado Inspetor Policial Penal Especial, com atribuições e prerrogativas próprias definidas em lei complementar específica (LC 422/2019).'
  },
  {
    id: 'pe_leg_17',
    disciplina: 'legislacao_pe',
    topico: 'LC 422/2019 - Atribuições do Cargo',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A Lei Complementar nº 422/2019, de Pernambuco, dispõe sobre a síntese de atribuições e prerrogativas institucionais de qual cargo público, regulamentando dispositivo da LC nº 150/2009?',
    alternativas: [
      { letra: 'A', texto: 'Delegado de Polícia Civil.' },
      { letra: 'B', texto: 'Agente de Segurança Penitenciária (Policial Penal).' },
      { letra: 'C', texto: 'Soldado da Polícia Militar.' },
      { letra: 'D', texto: 'Perito Criminal.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 1º da LC 422/2019',
    justificativa: 'A LC 422/2019 disciplina a síntese de atribuições e prerrogativas institucionais das funções do cargo de Agente de Segurança Penitenciária (ASP), vinculado à Secretaria Executiva de Ressocialização (SERES).'
  },
  {
    id: 'pe_leg_18',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Finalidade da Execução',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Segundo o art. 3º da Lei nº 15.755/2016, a execução penal no Estado de Pernambuco tem por finalidade proporcionar condições para a reparação social e a reintegração do condenado, observando-se:',
    alternativas: [
      { letra: 'A', texto: 'A supressão de todos os direitos do preso, exceto o direito à vida.' },
      { letra: 'B', texto: 'A manutenção dos direitos fundamentais não atingidos pela sentença condenatória ou pela lei.' },
      { letra: 'C', texto: 'A prevalência exclusiva do caráter punitivo sobre o ressocializador.' },
      { letra: 'D', texto: 'A vedação de qualquer contato do preso com a família durante o cumprimento da pena.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 3º da Lei 15.755/2016',
    justificativa: 'A execução penal, mesmo restringindo a liberdade, preserva os direitos fundamentais do condenado que não foram atingidos pela sentença ou pela lei, em harmonia com o princípio da dignidade da pessoa humana.'
  }
];
