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
  },

  // ============================================================
  // Constituição do Estado de Pernambuco (arts. 101-104, redação
  // dada pela Emenda Constitucional Estadual nº 53/2020) e Lei nº
  // 6.123/1968 (Estatuto dos Funcionários Públicos Civis do Estado
  // de Pernambuco) — fontes: legis.alepe.pe.gov.br (texto original
  // da Lei 6.123/1968) e camarascc.com.br (texto consolidado dos
  // arts. 101-105 da CE/PE).
  // ============================================================
  {
    id: 'pe_leg_19',
    disciplina: 'legislacao_pe',
    topico: 'Constituição de PE - Órgãos de Segurança Pública',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Após a Emenda Constitucional Estadual nº 53/2020, o art. 101 da Constituição do Estado de Pernambuco passou a elencar, como órgão permanente de segurança pública, além da Polícia Civil, da Polícia Militar e do Corpo de Bombeiros Militar:',
    alternativas: [
      { letra: 'A', texto: 'A Guarda Municipal, subordinada a cada Prefeitura.' },
      { letra: 'B', texto: 'A Polícia Penal, vinculada ao órgão administrador do sistema penal do Estado.' },
      { letra: 'C', texto: 'A Polícia Federal, por força de convênio com a União.' },
      { letra: 'D', texto: 'O Corpo de Peritos Criminalísticos, como órgão autônomo.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 101 da CE/PE (redação dada pela EC nº 53/2020)',
    justificativa: 'A EC Estadual nº 53/2020 incluiu a Polícia Penal, vinculada ao órgão administrador do sistema penal (SERES), como quarto órgão permanente de segurança pública, em harmonia com a EC Federal nº 104/2019.'
  },
  {
    id: 'pe_leg_20',
    disciplina: 'legislacao_pe',
    topico: 'Constituição de PE - Estatutos Próprios e Carreira',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 102 da Constituição do Estado de Pernambuco, a Polícia Civil, a Polícia Militar, o Corpo de Bombeiros Militar e a Polícia Penal:',
    alternativas: [
      { letra: 'A', texto: 'São regidos por um único estatuto comum, com carreira unificada entre as quatro instituições.' },
      { letra: 'B', texto: 'São regidos por estatutos próprios, organizando-se em carreira, com hierarquia e disciplina como princípios.' },
      { letra: 'C', texto: 'Não possuem carreira estruturada, sendo os cargos de livre nomeação e exoneração.' },
      { letra: 'D', texto: 'Subordinam-se hierarquicamente entre si, cabendo à Polícia Militar o comando das demais.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 102 da CE/PE',
    justificativa: 'Cada instituição de segurança pública é regida por estatuto próprio, organizando-se em carreira, tendo a hierarquia e a disciplina como princípios estruturantes.'
  },
  {
    id: 'pe_leg_21',
    disciplina: 'legislacao_pe',
    topico: 'Constituição de PE - Regulamentação da Polícia Penal',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'De acordo com o art. 104 da Constituição do Estado de Pernambuco, as atividades de manutenção da ordem, segurança interna, organização e funcionamento da Polícia Penal serão definidas:',
    alternativas: [
      { letra: 'A', texto: 'Exclusivamente por decreto do Governador, sem necessidade de lei.' },
      { letra: 'B', texto: 'Em lei.' },
      { letra: 'C', texto: 'Por resolução da Assembleia Legislativa, dispensada a sanção do Governador.' },
      { letra: 'D', texto: 'Por ato normativo interno da SERES, sem controle legislativo.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 104 da CE/PE',
    justificativa: 'O art. 104 remete à lei (em sentido formal) a definição das atividades de ordem, segurança interna, organização e funcionamento da Polícia Penal — papel cumprido, no plano estadual, pela Lei nº 15.755/2016 e pela LC nº 422/2019.'
  },
  {
    id: 'pe_leg_22',
    disciplina: 'legislacao_pe',
    topico: 'Lei 6.123/1968 - Penas Disciplinares',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'São penas disciplinares previstas no Estatuto dos Funcionários Públicos Civis do Estado de Pernambuco (Lei nº 6.123/1968), EXCETO:',
    alternativas: [
      { letra: 'A', texto: 'Repreensão.' },
      { letra: 'B', texto: 'Suspensão.' },
      { letra: 'C', texto: 'Cassação de aposentadoria ou disponibilidade.' },
      { letra: 'D', texto: 'Prisão administrativa.' }
    ],
    gabarito: 'D',
    artigo: 'Art. 199 da Lei 6.123/1968',
    justificativa: 'O art. 199 prevê rol taxativo de seis penas: repreensão, multa, suspensão, destituição de função, demissão e cassação de aposentadoria ou disponibilidade. "Prisão administrativa" não é pena disciplinar prevista no estatuto.'
  },
  {
    id: 'pe_leg_23',
    disciplina: 'legislacao_pe',
    topico: 'Lei 6.123/1968 - Suspensão',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'A pena disciplinar de suspensão, prevista na Lei nº 6.123/1968, não poderá exceder o prazo de:',
    alternativas: [
      { letra: 'A', texto: '15 dias.' },
      { letra: 'B', texto: '30 dias.' },
      { letra: 'C', texto: '60 dias.' },
      { letra: 'D', texto: '90 dias.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 202 da Lei 6.123/1968',
    justificativa: 'O art. 202 fixa em 30 dias o prazo máximo da suspensão, aplicável em casos de falta grave ou reincidência.'
  },
  {
    id: 'pe_leg_24',
    disciplina: 'legislacao_pe',
    topico: 'Lei 6.123/1968 - Causas de Demissão',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Constitui hipótese de aplicação da pena de demissão, segundo a Lei nº 6.123/1968, EXCETO:',
    alternativas: [
      { letra: 'A', texto: 'Abandono de cargo.' },
      { letra: 'B', texto: 'Insubordinação grave em serviço.' },
      { letra: 'C', texto: 'Revelação de segredo de que tenha ciência em razão do cargo.' },
      { letra: 'D', texto: 'Atraso injustificado de 10 minutos em um único dia de trabalho.' }
    ],
    gabarito: 'D',
    artigo: 'Art. 204 da Lei 6.123/1968',
    justificativa: 'O art. 204 relaciona causas graves de demissão (crimes contra a administração, abandono de cargo, insubordinação grave, revelação de segredo funcional, corrupção passiva, 60 dias de falta injustificada em 12 meses, entre outras). Um atraso isolado de 10 minutos não se enquadra em nenhuma dessas hipóteses.'
  },
  {
    id: 'pe_leg_25',
    disciplina: 'legislacao_pe',
    topico: 'Lei 6.123/1968 - Prescrição Escalonada',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Segundo o art. 209 da Lei nº 6.123/1968, prescreve em 4 (quatro) anos a pretensão de apurar falta disciplinar sujeita à pena de:',
    alternativas: [
      { letra: 'A', texto: 'Repreensão.' },
      { letra: 'B', texto: 'Suspensão.' },
      { letra: 'C', texto: 'Demissão.' },
      { letra: 'D', texto: 'Multa.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 209 da Lei 6.123/1968',
    justificativa: 'O art. 209 escalona a prescrição conforme a gravidade: 1 ano para falta sujeita à repreensão, 2 anos para suspensão, e 4 anos para destituição de função, demissão e cassação de aposentadoria/disponibilidade.'
  },
  {
    id: 'pe_leg_26',
    disciplina: 'legislacao_pe',
    topico: 'Lei 6.123/1968 - Deveres do Funcionário',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 193 da Lei nº 6.123/1968, é dever do funcionário público civil de Pernambuco obedecer às ordens superiores:',
    alternativas: [
      { letra: 'A', texto: 'Em qualquer hipótese, mesmo quando manifestamente ilegais, sob pena de insubordinação.' },
      { letra: 'B', texto: 'Exceto quando manifestamente ilegais.' },
      { letra: 'C', texto: 'Apenas quando emanadas por escrito e assinadas pela autoridade máxima do órgão.' },
      { letra: 'D', texto: 'Somente nos dias úteis, sendo facultativo o cumprimento em regime de plantão.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 193 da Lei 6.123/1968',
    justificativa: 'Entre os deveres do art. 193 (assiduidade, pontualidade, discrição, urbanidade, lealdade às instituições constitucionais), está o de obedecer às ordens superiores, ressalvada a exceção de ordens manifestamente ilegais, que não devem ser cumpridas.'
  },
  {
    id: 'pe_leg_27',
    disciplina: 'legislacao_pe',
    topico: 'Lei 6.123/1968 - Proibições',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Entre as proibições previstas no art. 194 da Lei nº 6.123/1968 ao funcionário público estadual, inclui-se:',
    alternativas: [
      { letra: 'A', texto: 'Receber, direta ou indiretamente, remuneração de empresas que prestem serviços à repartição em que está lotado.' },
      { letra: 'B', texto: 'Gozar de férias anuais.' },
      { letra: 'C', texto: 'Perceber vencimento correspondente ao cargo exercido.' },
      { letra: 'D', texto: 'Exercer o direito de petição perante a Administração.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 194 da Lei 6.123/1968',
    justificativa: 'O art. 194 lista dezesseis proibições, entre elas receber remuneração de empresas que prestem serviço à repartição onde o servidor está lotado — conflito de interesses. As demais alternativas descrevem direitos do servidor, não proibições.'
  },
  {
    id: 'pe_leg_28',
    disciplina: 'legislacao_pe',
    topico: 'Lei 6.123/1968 - Férias',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Segundo o art. 103 da Lei nº 6.123/1968, o funcionário público civil de Pernambuco gozará de férias anuais de:',
    alternativas: [
      { letra: 'A', texto: '20 dias corridos.' },
      { letra: 'B', texto: '25 dias corridos.' },
      { letra: 'C', texto: '30 dias consecutivos.' },
      { letra: 'D', texto: '45 dias consecutivos.' }
    ],
    gabarito: 'C',
    artigo: 'Art. 103 da Lei 6.123/1968',
    justificativa: 'O art. 103 assegura 30 dias consecutivos de férias por ano, conforme escala organizada pela autoridade competente.'
  },
  {
    id: 'pe_leg_29',
    disciplina: 'legislacao_pe',
    topico: 'LC 106/2007 - Antecedente Disciplinar',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'A Lei Complementar nº 106/2007, do Estado de Pernambuco, é relevante para a carreira do Policial Penal porque:',
    alternativas: [
      { letra: 'A', texto: 'Criou originalmente o cargo de Agente de Segurança Penitenciária, sendo a primeira lei da carreira.' },
      { letra: 'B', texto: 'Estabeleceu normas disciplinares para os Agentes de Segurança Penitenciária (atuais Policiais Penais), precedendo a consolidação promovida pelo Código Penitenciário de 2016 (Lei nº 15.755/2016).' },
      { letra: 'C', texto: 'Extinguiu o regime disciplinar próprio da categoria, submetendo-a ao regime da Polícia Militar.' },
      { letra: 'D', texto: 'É a lei que criou a Polícia Penal como órgão de segurança pública, substituindo a Emenda Constitucional nº 104/2019.' }
    ],
    gabarito: 'B',
    artigo: 'LC 106/2007',
    justificativa: 'A LC 106/2007 estabeleceu normas disciplinares específicas para os Agentes de Segurança Penitenciária de PE, sendo anterior e posteriormente sistematizada pelo Código Penitenciário de 2016, que hoje concentra o regramento disciplinar detalhado da categoria.'
  },

  // ============================================================
  // Ética específica de PE — Decreto Estadual nº 46.852/2018
  // (Código de Ética dos Agentes Públicos da Administração Direta
  // e Indireta do Poder Executivo Estadual de PE). Disciplina
  // marcada como 'etica' (não 'legislacao_pe') para contar na cota
  // de Ética do edital, mas mantida neste arquivo por ser conteúdo
  // exclusivo da PPPE (não se aplica ao PPRN). Fonte: Boletim
  // SCGE-PE nº 019/2019 (scge.pe.gov.br).
  // ============================================================
  {
    id: 'pe_etica_1',
    disciplina: 'etica',
    topico: 'Decreto 46.852/2018 - Princípios Éticos',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O Código de Ética dos Agentes Públicos da Administração Direta e Indireta do Poder Executivo de Pernambuco (Decreto Estadual nº 46.852/2018) estabelece, entre seus princípios fundamentais:',
    alternativas: [
      { letra: 'A', texto: 'Interesse público, integridade, imparcialidade, transparência, honestidade, responsabilidade, respeito e habilidade técnica.' },
      { letra: 'B', texto: 'Apenas legalidade e eficiência, dispensados os demais princípios da Administração Pública.' },
      { letra: 'C', texto: 'Sigilo absoluto sobre toda e qualquer informação, mesmo não sigilosa por natureza.' },
      { letra: 'D', texto: 'Prevalência do interesse pessoal do agente sobre o interesse público, em caso de conflito.' }
    ],
    gabarito: 'A',
    artigo: 'Decreto Estadual nº 46.852/2018',
    justificativa: 'O Decreto elenca oito princípios: interesse público, integridade, imparcialidade, transparência, honestidade, responsabilidade, respeito e habilidade técnica, orientando a conduta dos agentes públicos estaduais de PE.'
  },
  {
    id: 'pe_etica_2',
    disciplina: 'etica',
    topico: 'Decreto 46.852/2018 - Conflito de Interesses',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Segundo o art. 6º do Decreto Estadual nº 46.852/2018, quando um agente público de Pernambuco identifica um interesse privado relacionado às suas funções públicas (envolvendo a si, parentes até 2º grau ou organizações vinculadas), ele deve:',
    alternativas: [
      { letra: 'A', texto: 'Declarar o conflito de interesse à comissão de ética competente.' },
      { letra: 'B', texto: 'Manter sigilo absoluto sobre o conflito, sem qualquer comunicação.' },
      { letra: 'C', texto: 'Resolver o conflito por conta própria, sem necessidade de comunicação formal.' },
      { letra: 'D', texto: 'Aguardar que um terceiro identifique e denuncie a situação.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 6º, §2º do Decreto Estadual nº 46.852/2018',
    justificativa: 'O agente deve declarar formalmente à comissão de ética competente qualquer interesse privado relacionado às suas funções públicas, envolvendo ganhos para si, parentes até o segundo grau, terceiros associados ou organizações vinculadas.'
  },
  {
    id: 'pe_etica_3',
    disciplina: 'etica',
    topico: 'Decreto 46.852/2018 - Penalidades',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A transgressão ao Código de Ética dos Agentes Públicos de Pernambuco (Decreto nº 46.852/2018), segundo seu art. 12, resulta em:',
    alternativas: [
      { letra: 'A', texto: 'Advertência ou censura, conforme a natureza do ato e as circunstâncias do caso, com registro funcional.' },
      { letra: 'B', texto: 'Demissão automática, sem análise das circunstâncias do caso concreto.' },
      { letra: 'C', texto: 'Prisão administrativa de até 30 dias.' },
      { letra: 'D', texto: 'Nenhuma sanção, pois o Código tem caráter meramente orientativo, sem força cogente.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 12 do Decreto Estadual nº 46.852/2018',
    justificativa: 'As transgressões éticas resultam em advertência ou censura, conforme a natureza do ato e as circunstâncias de cada caso, com registro funcional que pode ter implicações em promoções — sanções mais graves (como demissão) dependem de processo disciplinar próprio, com base em outra legislação.'
  },
  {
    id: 'pe_etica_4',
    disciplina: 'etica',
    topico: 'Decreto 46.852/2018 - Denúncias e Sigilo',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'As denúncias de violação ao Código de Ética dos Agentes Públicos de Pernambuco, encaminhadas à comissão de ética do órgão ou ao Conselho Superior de Ética Pública, tramitam:',
    alternativas: [
      { letra: 'A', texto: 'Em sigilo até seu término, com acesso restrito às partes e autoridades competentes.' },
      { letra: 'B', texto: 'Com publicidade ampla e irrestrita, desde o seu recebimento.' },
      { letra: 'C', texto: 'Apenas verbalmente, sendo vedado o registro escrito.' },
      { letra: 'D', texto: 'Exclusivamente perante o Poder Judiciário, sendo vedada a análise administrativa.' }
    ],
    gabarito: 'A',
    artigo: 'Decreto Estadual nº 46.852/2018',
    justificativa: 'As denúncias tramitam em sigilo até seu término, com acesso restrito às partes envolvidas e às autoridades competentes, resguardando tanto o denunciante quanto o denunciado durante a apuração.'
  },
  {
    id: 'pe_leg_30',
    disciplina: 'legislacao_pe',
    topico: 'LC 106/2007 - Corregedoria Geral da SDS',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'A Lei Complementar nº 106/2007, de Pernambuco, ao dispor sobre a competência e as atribuições da Corregedoria Geral da Secretaria de Defesa Social (SDS), estabelece que esse órgão atua como:',
    alternativas: [
      { letra: 'A', texto: 'Órgão superior de controle disciplinar interno dos demais órgãos e agentes vinculados à SDS, incluindo, à época, os Agentes de Segurança Penitenciária.' },
      { letra: 'B', texto: 'Instância recursal exclusiva do Poder Judiciário para crimes praticados por policiais penais.' },
      { letra: 'C', texto: 'Órgão com competência apenas consultiva, sem qualquer poder de instauração de procedimento disciplinar.' },
      { letra: 'D', texto: 'Substituto do Conselho Penitenciário Estadual, absorvendo integralmente suas atribuições.' }
    ],
    gabarito: 'A',
    artigo: 'LC 106/2007 (alterando a Lei nº 11.929/2001)',
    justificativa: 'A LC 106/2007 modificou a Lei nº 11.929/2001, estabelecendo a Corregedoria Geral da SDS como órgão superior de controle disciplinar interno dos órgãos e agentes a ela vinculados — à época de sua edição, isso incluía os Agentes de Segurança Penitenciária (hoje Policiais Penais), então ligados à Secretaria de Desenvolvimento Social e Direitos Humanos.'
  },
  {
    id: 'pe_leg_31',
    disciplina: 'legislacao_pe',
    topico: 'Lei 6.123/1968 - Acumulação de Cargos',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Em relação à acumulação de cargos públicos pelo servidor estadual de Pernambuco, a Lei nº 6.123/1968, em harmonia com o art. 37, XVI da Constituição Federal, estabelece que:',
    alternativas: [
      { letra: 'A', texto: 'É vedada, em regra, a acumulação remunerada de cargos públicos, ressalvadas as exceções constitucionais expressas (ex.: dois cargos de professor, ou um cargo de professor com outro técnico/científico, ou dois cargos privativos de profissionais de saúde, sempre havendo compatibilidade de horários).' },
      { letra: 'B', texto: 'É permitida a acumulação irrestrita de quantos cargos públicos o servidor desejar, sem qualquer limitação.' },
      { letra: 'C', texto: 'É vedada em qualquer hipótese, mesmo para professores, sem qualquer exceção constitucional.' },
      { letra: 'D', texto: 'Depende exclusivamente de autorização do Governador do Estado, caso a caso, sem critério legal objetivo.' }
    ],
    gabarito: 'A',
    artigo: 'Lei 6.123/1968 c/c Art. 37, XVI da CF/88',
    justificativa: 'A vedação à acumulação remunerada de cargos públicos é regra geral, com exceções taxativas previstas na própria Constituição (art. 37, XVI): dois cargos de professor; um cargo de professor com outro técnico ou científico; ou dois cargos privativos de profissionais de saúde — sempre exigida a compatibilidade de horários.'
  },
  {
    id: 'pe_leg_32',
    disciplina: 'legislacao_pe',
    topico: 'LC 150/2009 - Regulamentação por Decreto',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'A regulamentação detalhada da LC nº 150/2009 (Plano de Cargos do GOSPEPE), incluindo descrições sumárias de atribuições e quantitativo de vagas por classe, foi promovida por qual instrumento normativo?',
    alternativas: [
      { letra: 'A', texto: 'Decreto Estadual nº 42.065/2015.' },
      { letra: 'B', texto: 'Emenda Constitucional Estadual nº 53/2020.' },
      { letra: 'C', texto: 'Lei Complementar nº 106/2007.' },
      { letra: 'D', texto: 'Resolução do Conselho Nacional de Política Criminal e Penitenciária.' }
    ],
    gabarito: 'A',
    artigo: 'Decreto Estadual nº 42.065/2015 (regulamenta o Art. 7º da LC 150/2009)',
    justificativa: 'O Decreto nº 42.065/2015 regulamenta o art. 7º da LC 150/2009, detalhando descrições sumárias de atribuições, prerrogativas e quantitativos de vagas do GOSPEPE — a EC 53/2020 tratou da criação constitucional da Polícia Penal, e a LC 106/2007 tratou de normas disciplinares anteriores ao Código Penitenciário de 2016, temas distintos.'
  }
];
