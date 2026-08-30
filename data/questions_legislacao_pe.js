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
      { letra: 'B', texto: 'Lei nº 8.069/1990 (Estatuto da Criança e do Adolescente).', comentario: 'O ECA disciplina os direitos de crianças e adolescentes, não o sistema penitenciário de adultos regulado pelo Código Penitenciário estadual.' },
      { letra: 'C', texto: 'Lei nº 9.099/1995 (Lei dos Juizados Especiais).', comentario: 'A Lei dos Juizados Especiais trata de infrações de menor potencial ofensivo e procedimentos cíveis/criminais sumários, não é a lei federal referida pelo art. 1º.' },
      { letra: 'D', texto: 'Lei nº 13.869/2019 (Lei de Abuso de Autoridade).', comentario: 'A Lei de Abuso de Autoridade tipifica condutas de agentes públicos, mas não é a lei federal que o art. 1º menciona como parâmetro do sistema penitenciário estadual.' }
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
      { letra: 'A', texto: 'Penitenciária.', comentario: 'A Penitenciária está expressamente listada entre os estabelecimentos penais do art. 23, por isso não serve como resposta à exceção pedida.' },
      { letra: 'B', texto: 'Colônia Agrícola ou Industrial.', comentario: 'A Colônia Agrícola ou Industrial integra o rol do art. 23, não sendo a exceção procurada.' },
      { letra: 'C', texto: 'Centro de Classificação.', comentario: 'O Centro de Classificação também consta do rol do art. 23, não sendo a exceção procurada.' },
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
      { letra: 'A', texto: '4m².', comentario: 'O art. 26 fixa a área mínima em 6m², não em 4m².' },
      { letra: 'B', texto: '6m².' },
      { letra: 'C', texto: '9m².', comentario: 'A lei exige, no mínimo, 6m² por cela, e não 9m².' },
      { letra: 'D', texto: '12m².', comentario: 'O valor mínimo estabelecido pelo art. 26 é de 6m², não de 12m².' }
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
      { letra: 'B', texto: 'Secretaria de Defesa Social (SDS).', comentario: 'A SDS é responsável pelas polícias Civil e Militar e pelo Corpo de Bombeiros, mas o art. 11 atribui a direção da política penitenciária à SERES, e não à SDS.' },
      { letra: 'C', texto: 'Conselho Penitenciário Estadual, exclusivamente.', comentario: 'O Conselho Penitenciário exerce funções consultivas e fiscalizadoras na execução penal, mas não é o órgão a quem o art. 11 atribui a direção da política penitenciária.' },
      { letra: 'D', texto: 'Tribunal de Justiça de Pernambuco, por meio da Vara de Execuções Penais.', comentario: 'O Judiciário atua na execução penal em suas funções jurisdicionais, mas a direção administrativa da política penitenciária cabe à SERES, conforme o art. 11, não ao Tribunal de Justiça.' }
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
      { letra: 'A', texto: 'Recusar-se a participar de atividades de trabalho, por se tratar de faculdade absoluta.', comentario: 'O art. 110 impõe ao condenado o dever de submeter-se às atividades laborais previstas, não sendo o trabalho uma faculdade absoluta a ser recusada livremente.' },
      { letra: 'B', texto: 'Submeter-se às normas de execução da pena e comportar-se disciplinadamente, respeitando as autoridades.' },
      { letra: 'C', texto: 'Exigir cela individual independentemente da capacidade do estabelecimento.', comentario: 'Essa exigência não figura entre os deveres do art. 110 e desconsidera as limitações reais de capacidade do estabelecimento, não sendo compatível com o texto legal.' },
      { letra: 'D', texto: 'Recusar identificação pelo sistema de classificação, quando desejar.', comentario: 'A recusa à identificação contraria o dever de submissão às normas de execução e aos procedimentos de classificação previstos no art. 110.' }
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
      { letra: 'A', texto: 'Apelido atribuído por outros internos.', comentario: 'O direito assegurado pelo art. 112, XII, é o de ser chamado pelo nome (incluindo o nome social), não por apelidos atribuídos por terceiros.' },
      { letra: 'B', texto: 'Nome social.' },
      { letra: 'C', texto: 'Codinome utilizado em inquérito policial.', comentario: 'Codinome de inquérito policial é um dado de investigação, sem relação com o direito de identificação pelo nome garantido no art. 112, XII.' },
      { letra: 'D', texto: 'Numeração de matrícula prisional, em substituição ao nome civil.', comentario: 'O art. 112, XII, garante justamente o direito de ser chamado pelo nome, o que é incompatível com a substituição do nome civil por mera numeração.' }
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
      { letra: 'A', texto: 'A aplicação de castigo corporal.', comentario: 'O castigo corporal está expressamente vedado pelo art. 118, não sendo a exceção procurada pela questão.' },
      { letra: 'B', texto: 'O recolhimento em cela escura.', comentario: 'O recolhimento em cela escura também é vedado pelo art. 118, não sendo a exceção pedida.' },
      { letra: 'C', texto: 'A sanção disciplinar de caráter coletivo.', comentario: 'A sanção de caráter coletivo é igualmente vedada pelo art. 118, não configurando a exceção buscada.' },
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
      { letra: 'A', texto: '30 dias, renovável uma única vez.', comentario: 'O prazo máximo previsto para o RDD, em harmonia com a LEP, é de 360 dias, e não de 30 dias.' },
      { letra: 'B', texto: '180 dias, sem possibilidade de renovação.', comentario: 'O prazo correto é de até 360 dias, admitida a repetição em caso de nova falta grave de mesma espécie, o que afasta os 180 dias sem renovação.' },
      { letra: 'C', texto: '360 dias, podendo ser repetida a sanção por nova falta grave da mesma espécie, até o limite de 1/6 da pena aplicada.' },
      { letra: 'D', texto: 'Tempo indeterminado, a critério do diretor do estabelecimento.', comentario: 'O regramento estabelece prazo máximo definido (até 360 dias, com limite de 1/6 da pena), incompatível com prazo indeterminado a critério do diretor.' }
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
      { letra: 'A', texto: 'Descuidar da higiene pessoal.', comentario: 'Descuidar da higiene pessoal é exemplo de conduta de menor gravidade (falta leve), não se enquadrando como falta grave.' },
      { letra: 'B', texto: 'Praticar fato previsto como crime doloso.' },
      { letra: 'C', texto: 'Desrespeitar servidor no exercício da função, verbalmente.', comentario: 'O desrespeito verbal a servidor é conduta de gravidade intermediária, não se equiparando à falta grave prevista para a prática de fato definido como crime doloso.' },
      { letra: 'D', texto: 'Recusar-se, sem justificativa, a realizar atividade de trabalho de baixa complexidade.', comentario: 'A recusa injustificada a trabalho de baixa complexidade caracteriza falta de menor gravidade, e não falta grave.' }
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
      { letra: 'B', texto: 'Regular.', comentario: 'A classificação regular corresponde à existência de faltas leves ou médias, não à ausência total de infrações.' },
      { letra: 'C', texto: 'Má.', comentario: 'A conduta má está associada à prática de faltas graves, situação distinta da ausência de qualquer infração disciplinar.' },
      { letra: 'D', texto: 'Neutra, sem efeitos para benefícios.', comentario: 'O art. 135 não prevê categoria "neutra"; a classificação legal se dá em boa, regular ou má, sempre com efeitos sobre os benefícios.' }
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
      { letra: 'A', texto: 'Leve.', comentario: 'As faltas leves recebem sanções mais brandas; o isolamento e a suspensão de visitas por prazo maior (20 a 30 dias) são reservados às faltas graves.' },
      { letra: 'B', texto: 'Média.', comentario: 'As faltas médias comportam sanções intermediárias; as medidas mais severas descritas na questão são aplicáveis especialmente às faltas graves.' },
      { letra: 'C', texto: 'Grave.' },
      { letra: 'D', texto: 'Nenhuma das anteriores, pois essas sanções foram abolidas pela lei estadual.', comentario: 'Essas sanções continuam previstas no art. 137 da lei estadual, não tendo sido abolidas.' }
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
      { letra: 'B', texto: 'A aplicação imediata da sanção, dispensada qualquer notificação prévia.', comentario: 'O procedimento previsto nos arts. 127 e 143-146 exige notificação prévia e apuração regular, não permitindo a aplicação imediata de sanção sem esses passos.' },
      { letra: 'C', texto: 'O julgamento por comissão composta exclusivamente por outros internos.', comentario: 'A lei não atribui o julgamento disciplinar a uma comissão formada exclusivamente por internos; o procedimento é conduzido pela autoridade e órgãos competentes do estabelecimento.' },
      { letra: 'D', texto: 'A impossibilidade de recorrer da decisão em qualquer hipótese.', comentario: 'O direito de defesa assegurado pelo art. 127 é incompatível com a vedação absoluta a qualquer recurso da decisão.' }
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
      { letra: 'A', texto: 'Leve.', comentario: 'O art. 150 fixa 6 meses de prescrição para falta leve, não 1 ano.' },
      { letra: 'B', texto: 'Média.' },
      { letra: 'C', texto: 'Grave.', comentario: 'A falta grave prescreve em 3 anos segundo o art. 150, e não em 1 ano.' },
      { letra: 'D', texto: 'Gravíssima.', comentario: 'O art. 150 não prevê a categoria "falta gravíssima"; a lei classifica as faltas apenas em leve, média e grave.' }
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
      { letra: 'A', texto: 'Apenas aprovação em exame médico, dispensada qualquer formação específica.', comentario: 'O art. 35 exige também formação profissional específica prévia ao exercício da função, o que afasta a dispensa de qualquer formação.' },
      { letra: 'B', texto: 'Aptidão física e mental comprovada mediante procedimento adequado, além de formação específica prévia ao exercício da função.' },
      { letra: 'C', texto: 'Somente experiência prévia em atividade de segurança privada.', comentario: 'O art. 35 não estabelece experiência em segurança privada como requisito da seleção, exigindo aptidão física/mental e formação específica.' },
      { letra: 'D', texto: 'Formação em nível superior em Direito, como requisito único.', comentario: 'A exigência legal não se resume a formação superior em Direito; o art. 35 exige aptidão física e mental além de formação específica para a função.' }
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
      { letra: 'A', texto: 'Duas classes.', comentario: 'O art. 2º organiza a carreira em quatro classes, e não em duas.' },
      { letra: 'B', texto: 'Três classes.', comentario: 'A carreira é estruturada em quatro classes (I a IV), não em três.' },
      { letra: 'C', texto: 'Quatro classes.' },
      { letra: 'D', texto: 'Seis classes.', comentario: 'O número correto de classes hierarquicamente escalonadas é quatro, não seis.' }
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
      { letra: 'A', texto: 'Delegado Penitenciário.', comentario: '"Delegado Penitenciário" não é a denominação prevista pela LC 150/2009 para quem atinge a Classe IV; o art. 2º, §3º, usa a designação Inspetor Policial Penal Especial.' },
      { letra: 'B', texto: 'Inspetor Policial Penal Especial.' },
      { letra: 'C', texto: 'Comandante-Geral do Sistema Prisional.', comentario: 'Essa denominação não consta da LC 150/2009; o servidor da Classe IV é designado Inspetor Policial Penal Especial.' },
      { letra: 'D', texto: 'Superintendente de Ressocialização.', comentario: 'Essa não é a designação legal prevista no art. 2º, §3º, da LC 150/2009 para o servidor que atinge a Classe IV.' }
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
      { letra: 'A', texto: 'Delegado de Polícia Civil.', comentario: 'O cargo de Delegado de Polícia Civil não é o objeto da LC 422/2019, que trata das atribuições do Agente de Segurança Penitenciária.' },
      { letra: 'B', texto: 'Agente de Segurança Penitenciária (Policial Penal).' },
      { letra: 'C', texto: 'Soldado da Polícia Militar.', comentario: 'A LC 422/2019 não disciplina o cargo de Soldado da Polícia Militar, e sim o de Agente de Segurança Penitenciária.' },
      { letra: 'D', texto: 'Perito Criminal.', comentario: 'O cargo de Perito Criminal não é tratado pela LC 422/2019, que se refere ao Agente de Segurança Penitenciária.' }
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
      { letra: 'A', texto: 'A supressão de todos os direitos do preso, exceto o direito à vida.', comentario: 'O art. 3º preserva os direitos fundamentais não atingidos pela sentença ou pela lei, o que é incompatível com a supressão de todos os direitos do preso.' },
      { letra: 'B', texto: 'A manutenção dos direitos fundamentais não atingidos pela sentença condenatória ou pela lei.' },
      { letra: 'C', texto: 'A prevalência exclusiva do caráter punitivo sobre o ressocializador.', comentario: 'O art. 3º volta-se à reparação social e reintegração do condenado, não estabelecendo prevalência exclusiva do caráter punitivo.' },
      { letra: 'D', texto: 'A vedação de qualquer contato do preso com a família durante o cumprimento da pena.', comentario: 'A manutenção de direitos fundamentais e a finalidade ressocializadora do art. 3º são incompatíveis com a vedação absoluta de contato familiar.' }
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
      { letra: 'A', texto: 'A Guarda Municipal, subordinada a cada Prefeitura.', comentario: 'A Guarda Municipal é órgão de segurança municipal, não sendo o órgão estadual incluído pela EC nº 53/2020 no art. 101 da CE/PE.' },
      { letra: 'B', texto: 'A Polícia Penal, vinculada ao órgão administrador do sistema penal do Estado.' },
      { letra: 'C', texto: 'A Polícia Federal, por força de convênio com a União.', comentario: 'A Polícia Federal é órgão da União e não foi incluída pela EC nº 53/2020 no rol de órgãos permanentes de segurança pública do Estado.' },
      { letra: 'D', texto: 'O Corpo de Peritos Criminalísticos, como órgão autônomo.', comentario: 'O órgão incluído pela EC nº 53/2020 foi a Polícia Penal, e não o Corpo de Peritos Criminalísticos como órgão autônomo.' }
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
      { letra: 'A', texto: 'São regidos por um único estatuto comum, com carreira unificada entre as quatro instituições.', comentario: 'O art. 102 prevê estatutos próprios para cada instituição, e não um estatuto único com carreira unificada entre elas.' },
      { letra: 'B', texto: 'São regidos por estatutos próprios, organizando-se em carreira, com hierarquia e disciplina como princípios.' },
      { letra: 'C', texto: 'Não possuem carreira estruturada, sendo os cargos de livre nomeação e exoneração.', comentario: 'O art. 102 estabelece expressamente a organização em carreira, o que contradiz a ideia de cargos de livre nomeação e exoneração.' },
      { letra: 'D', texto: 'Subordinam-se hierarquicamente entre si, cabendo à Polícia Militar o comando das demais.', comentario: 'As instituições são autônomas entre si, cada uma com estatuto próprio; não há subordinação hierárquica de uma sobre as outras.' }
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
      { letra: 'A', texto: 'Exclusivamente por decreto do Governador, sem necessidade de lei.', comentario: 'O art. 104 remete a definição dessas atividades à lei em sentido formal, não bastando decreto do Governador dispensando lei.' },
      { letra: 'B', texto: 'Em lei.' },
      { letra: 'C', texto: 'Por resolução da Assembleia Legislativa, dispensada a sanção do Governador.', comentario: 'O art. 104 exige lei, que pressupõe o processo legislativo com sanção, não se satisfazendo com resolução sem sanção do Governador.' },
      { letra: 'D', texto: 'Por ato normativo interno da SERES, sem controle legislativo.', comentario: 'Um ato interno da SERES sem controle legislativo não atende à exigência de definição em lei estabelecida pelo art. 104.' }
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
      { letra: 'A', texto: 'Repreensão.', comentario: 'A repreensão consta expressamente do rol do art. 199, não sendo a exceção procurada.' },
      { letra: 'B', texto: 'Suspensão.', comentario: 'A suspensão também integra o rol taxativo do art. 199, não sendo a exceção pedida.' },
      { letra: 'C', texto: 'Cassação de aposentadoria ou disponibilidade.', comentario: 'A cassação de aposentadoria ou disponibilidade está prevista no art. 199, não sendo a exceção buscada.' },
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
      { letra: 'A', texto: '15 dias.', comentario: 'O art. 202 fixa o prazo máximo em 30 dias, não em 15 dias.' },
      { letra: 'B', texto: '30 dias.' },
      { letra: 'C', texto: '60 dias.', comentario: 'O prazo máximo previsto pelo art. 202 é de 30 dias, não de 60 dias.' },
      { letra: 'D', texto: '90 dias.', comentario: 'O art. 202 estabelece 30 dias como prazo máximo, não 90 dias.' }
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
      { letra: 'A', texto: 'Abandono de cargo.', comentario: 'O abandono de cargo está listado no art. 204 como causa de demissão, não sendo a exceção procurada.' },
      { letra: 'B', texto: 'Insubordinação grave em serviço.', comentario: 'A insubordinação grave também consta do art. 204 como causa de demissão, não sendo a exceção pedida.' },
      { letra: 'C', texto: 'Revelação de segredo de que tenha ciência em razão do cargo.', comentario: 'A revelação de segredo funcional está prevista no art. 204 como causa de demissão, não sendo a exceção buscada.' },
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
      { letra: 'A', texto: 'Repreensão.', comentario: 'A falta sujeita à repreensão prescreve em 1 ano, segundo o art. 209, não em 4 anos.' },
      { letra: 'B', texto: 'Suspensão.', comentario: 'A falta sujeita à suspensão prescreve em 2 anos, conforme o art. 209, não em 4 anos.' },
      { letra: 'C', texto: 'Demissão.' },
      { letra: 'D', texto: 'Multa.', comentario: 'O prazo de 4 anos previsto no art. 209 está associado à destituição de função, demissão e cassação de aposentadoria/disponibilidade, não à pena de multa.' }
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
      { letra: 'A', texto: 'Em qualquer hipótese, mesmo quando manifestamente ilegais, sob pena de insubordinação.', comentario: 'O art. 193 ressalva justamente as ordens manifestamente ilegais, que não devem ser cumpridas, afastando a obediência incondicional.' },
      { letra: 'B', texto: 'Exceto quando manifestamente ilegais.' },
      { letra: 'C', texto: 'Apenas quando emanadas por escrito e assinadas pela autoridade máxima do órgão.', comentario: 'O art. 193 não condiciona o dever de obediência à forma escrita ou à assinatura da autoridade máxima do órgão; a ressalva legal é quanto à ilegalidade manifesta da ordem.' },
      { letra: 'D', texto: 'Somente nos dias úteis, sendo facultativo o cumprimento em regime de plantão.', comentario: 'O art. 193 não restringe o dever de obediência a dias úteis nem torna facultativo o cumprimento em regime de plantão; a única ressalva é a ilegalidade manifesta da ordem.' }
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
      { letra: 'B', texto: 'Gozar de férias anuais.', comentario: 'Gozar de férias anuais é direito do servidor previsto no art. 103, não uma proibição do art. 194.' },
      { letra: 'C', texto: 'Perceber vencimento correspondente ao cargo exercido.', comentario: 'Perceber o vencimento do cargo é direito básico do servidor, não figurando entre as proibições do art. 194.' },
      { letra: 'D', texto: 'Exercer o direito de petição perante a Administração.', comentario: 'O direito de petição é garantia do servidor perante a Administração, e não uma das proibições listadas no art. 194.' }
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
      { letra: 'A', texto: '20 dias corridos.', comentario: 'O art. 103 assegura 30 dias consecutivos de férias, e não 20 dias.' },
      { letra: 'B', texto: '25 dias corridos.', comentario: 'O prazo correto fixado pelo art. 103 é de 30 dias consecutivos, não de 25 dias.' },
      { letra: 'C', texto: '30 dias consecutivos.' },
      { letra: 'D', texto: '45 dias consecutivos.', comentario: 'O art. 103 estabelece 30 dias consecutivos de férias, e não 45 dias.' }
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
      { letra: 'A', texto: 'Criou originalmente o cargo de Agente de Segurança Penitenciária, sendo a primeira lei da carreira.', comentario: 'A LC 106/2007 tratou de normas disciplinares para a categoria, mas não foi a lei que originalmente criou o cargo de Agente de Segurança Penitenciária.' },
      { letra: 'B', texto: 'Estabeleceu normas disciplinares para os Agentes de Segurança Penitenciária (atuais Policiais Penais), precedendo a consolidação promovida pelo Código Penitenciário de 2016 (Lei nº 15.755/2016).' },
      { letra: 'C', texto: 'Extinguiu o regime disciplinar próprio da categoria, submetendo-a ao regime da Polícia Militar.', comentario: 'A LC 106/2007 estabeleceu normas disciplinares próprias para a categoria, não a submetendo ao regime disciplinar da Polícia Militar.' },
      { letra: 'D', texto: 'É a lei que criou a Polícia Penal como órgão de segurança pública, substituindo a Emenda Constitucional nº 104/2019.', comentario: 'A criação da Polícia Penal como órgão de segurança pública decorreu da Emenda Constitucional Federal nº 104/2019 (e da EC estadual nº 53/2020), não da LC 106/2007, que trata de normas disciplinares.' }
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
      { letra: 'B', texto: 'Apenas legalidade e eficiência, dispensados os demais princípios da Administração Pública.', comentario: 'O Decreto elenca oito princípios (interesse público, integridade, imparcialidade, transparência, honestidade, responsabilidade, respeito e habilidade técnica), não se limitando à legalidade e eficiência.' },
      { letra: 'C', texto: 'Sigilo absoluto sobre toda e qualquer informação, mesmo não sigilosa por natureza.', comentario: 'O sigilo absoluto contraria o princípio da transparência, que é um dos princípios expressamente listados pelo Decreto.' },
      { letra: 'D', texto: 'Prevalência do interesse pessoal do agente sobre o interesse público, em caso de conflito.', comentario: 'Essa alternativa contraria diretamente o princípio do interesse público, que é o primeiro dos princípios elencados pelo Decreto.' }
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
      { letra: 'B', texto: 'Manter sigilo absoluto sobre o conflito, sem qualquer comunicação.', comentario: 'O art. 6º, §2º, impõe o dever de declarar o conflito à comissão de ética, o que é incompatível com manter sigilo absoluto e nada comunicar.' },
      { letra: 'C', texto: 'Resolver o conflito por conta própria, sem necessidade de comunicação formal.', comentario: 'A norma exige declaração formal à comissão de ética competente, não bastando que o agente resolva a situação por conta própria.' },
      { letra: 'D', texto: 'Aguardar que um terceiro identifique e denuncie a situação.', comentario: 'O dever de declarar o conflito é do próprio agente que o identifica, e não de terceiros que eventualmente venham a denunciá-lo.' }
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
      { letra: 'B', texto: 'Demissão automática, sem análise das circunstâncias do caso concreto.', comentario: 'O art. 12 prevê advertência ou censura conforme a natureza do ato e as circunstâncias do caso, e não demissão automática sem essa análise.' },
      { letra: 'C', texto: 'Prisão administrativa de até 30 dias.', comentario: '"Prisão administrativa" não é sanção prevista pelo art. 12, que estabelece advertência ou censura para as transgressões éticas.' },
      { letra: 'D', texto: 'Nenhuma sanção, pois o Código tem caráter meramente orientativo, sem força cogente.', comentario: 'O art. 12 prevê sanções concretas (advertência ou censura), o que afasta a ideia de que o Código teria caráter meramente orientativo.' }
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
      { letra: 'B', texto: 'Com publicidade ampla e irrestrita, desde o seu recebimento.', comentario: 'As denúncias tramitam em sigilo até seu término, com acesso restrito, e não com publicidade ampla e irrestrita.' },
      { letra: 'C', texto: 'Apenas verbalmente, sendo vedado o registro escrito.', comentario: 'A tramitação sigilosa das denúncias não implica vedação a registro escrito; a norma trata do sigilo de acesso, não da forma verbal exclusiva.' },
      { letra: 'D', texto: 'Exclusivamente perante o Poder Judiciário, sendo vedada a análise administrativa.', comentario: 'As denúncias são encaminhadas à comissão de ética do órgão ou ao Conselho Superior de Ética Pública, órgãos administrativos, e não exclusivamente ao Poder Judiciário.' }
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
      { letra: 'B', texto: 'Instância recursal exclusiva do Poder Judiciário para crimes praticados por policiais penais.', comentario: 'A Corregedoria Geral da SDS é órgão administrativo de controle disciplinar interno, não uma instância do Poder Judiciário.' },
      { letra: 'C', texto: 'Órgão com competência apenas consultiva, sem qualquer poder de instauração de procedimento disciplinar.', comentario: 'A LC 106/2007 confere à Corregedoria a condição de órgão superior de controle disciplinar, o que inclui poder de instauração de procedimentos, e não apenas função consultiva.' },
      { letra: 'D', texto: 'Substituto do Conselho Penitenciário Estadual, absorvendo integralmente suas atribuições.', comentario: 'A Corregedoria Geral da SDS e o Conselho Penitenciário Estadual são órgãos distintos, com atribuições próprias; a LC 106/2007 não promove essa substituição.' }
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
      { letra: 'B', texto: 'É permitida a acumulação irrestrita de quantos cargos públicos o servidor desejar, sem qualquer limitação.', comentario: 'A regra geral é a vedação à acumulação remunerada de cargos, com exceções taxativas do art. 37, XVI, da CF/88, o que afasta a ideia de acumulação irrestrita e sem limites.' },
      { letra: 'C', texto: 'É vedada em qualquer hipótese, mesmo para professores, sem qualquer exceção constitucional.', comentario: 'O art. 37, XVI, da CF/88 prevê exceções expressas, como a acumulação de dois cargos de professor, o que contraria a vedação absoluta sem exceções.' },
      { letra: 'D', texto: 'Depende exclusivamente de autorização do Governador do Estado, caso a caso, sem critério legal objetivo.', comentario: 'A matéria é regida por critério constitucional objetivo (art. 37, XVI, da CF/88), e não por autorização discricionária do Governador caso a caso.' }
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
      { letra: 'B', texto: 'Emenda Constitucional Estadual nº 53/2020.', comentario: 'A EC 53/2020 tratou da criação constitucional da Polícia Penal, não da regulamentação detalhada do Plano de Cargos da LC 150/2009, que coube ao Decreto nº 42.065/2015.' },
      { letra: 'C', texto: 'Lei Complementar nº 106/2007.', comentario: 'A LC 106/2007 tratou de normas disciplinares anteriores ao Código Penitenciário de 2016, e não da regulamentação do Plano de Cargos da LC 150/2009.' },
      { letra: 'D', texto: 'Resolução do Conselho Nacional de Política Criminal e Penitenciária.', comentario: 'A regulamentação detalhada da LC 150/2009 foi feita por decreto estadual (Decreto nº 42.065/2015), não por resolução do CNPCP, órgão federal.' }
    ],
    gabarito: 'A',
    artigo: 'Decreto Estadual nº 42.065/2015 (regulamenta o Art. 7º da LC 150/2009)',
    justificativa: 'O Decreto nº 42.065/2015 regulamenta o art. 7º da LC 150/2009, detalhando descrições sumárias de atribuições, prerrogativas e quantitativos de vagas do GOSPEPE — a EC 53/2020 tratou da criação constitucional da Polícia Penal, e a LC 106/2007 tratou de normas disciplinares anteriores ao Código Penitenciário de 2016, temas distintos.'
  },

  // ============================================================
  // Reforço adicional em Lei 15.755/2016 — dispositivos ainda não
  // cobertos: trabalho do preso (Art. 90 e 94), assistência à saúde
  // e Centro de Saúde Penitenciário (Arts. 48 e 65-71), visita
  // íntima (Art. 105) e vedação à divulgação de imagens (Art. 114),
  // além da recente vedação à revista íntima de visitantes. Fonte:
  // legis.alepe.pe.gov.br, texto atualizado.
  // ============================================================
  {
    id: 'pe_leg_33',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Dever de Trabalhar',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 90 da Lei nº 15.755/2016, é dever do condenado trabalhar durante o dia, na medida de suas aptidões e capacidade. Em relação ao preso provisório, o trabalho é:',
    alternativas: [
      { letra: 'A', texto: 'Obrigatório, nos mesmos termos exigidos do condenado definitivo.', comentario: 'O art. 90 impõe o dever de trabalhar ao condenado, mas para o preso provisório o trabalho não é obrigatório, sendo apenas facultativo, em razão da presunção de inocência.' },
      { letra: 'B', texto: 'Não obrigatório, podendo ser exercido facultativamente dentro do estabelecimento.' },
      { letra: 'C', texto: 'Vedado em qualquer hipótese, mesmo que o preso provisório manifeste interesse.', comentario: 'O trabalho do preso provisório é facultativo, podendo ser exercido se houver interesse e disponibilidade, e não vedado em qualquer hipótese.' },
      { letra: 'D', texto: 'Condicionado à autorização do Ministério Público, sem a qual é sempre proibido.', comentario: 'O art. 90 não condiciona o trabalho facultativo do preso provisório à autorização do Ministério Público.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 90 da Lei 15.755/2016',
    justificativa: 'O art. 90 impõe o dever de trabalhar ao condenado, mas para o preso provisório o trabalho não é obrigatório — pode exercê-lo facultativamente, se houver interesse e disponibilidade no estabelecimento, em harmonia com a presunção de inocência.'
  },
  {
    id: 'pe_leg_34',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Destinação da Remuneração do Trabalho',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Segundo o art. 94 da Lei nº 15.755/2016, a remuneração pelo trabalho do preso deve ser destinada, entre outras finalidades, a:',
    alternativas: [
      { letra: 'A', texto: 'Uso pessoal do preso, prestação de alimentos, indenização ao lesado, assistência à família, e formação de pecúlio de 25% em caderneta de poupança.' },
      { letra: 'B', texto: 'Integralmente ao Fundo Penitenciário do Estado, sem qualquer destinação ao preso ou sua família.', comentario: 'O art. 94 distribui a remuneração entre uso pessoal do preso, indenização, assistência à família e pecúlio, não havendo destinação integral ao Fundo Penitenciário.' },
      { letra: 'C', texto: 'Pagamento de honorários advocatícios, com exclusividade, sendo vedada qualquer outra destinação.', comentario: 'O art. 94 prevê múltiplas destinações (uso pessoal, alimentos, indenização, assistência à família e pecúlio), não se restringindo ao pagamento de honorários advocatícios.' },
      { letra: 'D', texto: 'Compra de bens de consumo eletrônico, exclusivamente, para uso na cela.', comentario: 'Essa destinação exclusiva não corresponde às finalidades previstas no art. 94, que trata de uso pessoal, alimentos, indenização, assistência à família e pecúlio.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 94 da Lei 15.755/2016',
    justificativa: 'O art. 94 distribui a remuneração do trabalho em: uso pessoal do preso, prestação de alimentos, indenização ao lesado, assistência à família, e pecúlio prisional de 25% da remuneração, depositado em caderneta de poupança — seguindo a lógica do art. 29 da LEP federal, mas com o detalhamento próprio do percentual do pecúlio.'
  },
  {
    id: 'pe_leg_35',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Centro de Saúde Penitenciário',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 48 da Lei nº 15.755/2016, o Centro de Saúde Penitenciário destina-se à pessoa privada de liberdade sob tratamento médico ou de saúde mental, devendo possuir:',
    alternativas: [
      { letra: 'A', texto: 'Alas exclusivas para pacientes submetidos a medida de segurança e para assistência à saúde mental feminina.' },
      { letra: 'B', texto: 'Estrutura idêntica às penitenciárias comuns, sem qualquer diferenciação para tratamento de saúde.', comentario: 'O art. 48 prevê estrutura própria com alas exclusivas para tratamento médico e de saúde mental, o que afasta a ideia de estrutura idêntica às penitenciárias comuns.' },
      { letra: 'C', texto: 'Vedação a qualquer atendimento de saúde mental, sendo restrito a tratamentos clínicos gerais.', comentario: 'O art. 48 prevê expressamente ala exclusiva para pacientes com medida de segurança e assistência à saúde mental, contrariando a ideia de vedação a esse atendimento.' },
      { letra: 'D', texto: 'Acesso exclusivo para presos do sexo masculino, sendo vedada qualquer assistência a mulheres.', comentario: 'O art. 48 prevê ala exclusiva para assistência à saúde mental feminina, o que contraria a ideia de acesso exclusivo a homens.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 48 da Lei 15.755/2016',
    justificativa: 'O Centro de Saúde Penitenciário destina-se a presos sob tratamento médico ou de saúde mental, prevendo alas exclusivas para pacientes com medida de segurança e para assistência à saúde mental feminina — um dos sete tipos de estabelecimentos penais listados no art. 23 da mesma lei.'
  },
  {
    id: 'pe_leg_36',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Assistência à Saúde',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Segundo os arts. 65-71 da Lei nº 15.755/2016, a assistência à saúde do preso deve ser prestada de forma integral, seguindo o modelo do:',
    alternativas: [
      { letra: 'A', texto: 'Sistema Único de Saúde (SUS), com fornecimento de medicamentos e atendimento médico, odontológico, farmacêutico e nutricional.' },
      { letra: 'B', texto: 'Plano de saúde privado, custeado obrigatoriamente pelo próprio preso ou sua família.', comentario: 'Os arts. 65-71 seguem o modelo do SUS, sendo incompatíveis com a exigência de custeio obrigatório por plano de saúde privado do preso ou de sua família.' },
      { letra: 'C', texto: 'Atendimento exclusivamente emergencial, vedado qualquer acompanhamento continuado.', comentario: 'A assistência prevista é integral, incluindo atendimento médico, odontológico, farmacêutico e nutricional, e não apenas emergencial.' },
      { letra: 'D', texto: 'Convênio com hospitais militares, com exclusividade, vedado o acesso à rede SUS.', comentario: 'O modelo adotado é justamente o do SUS, o que é incompatível com a exclusividade de convênio com hospitais militares e vedação ao SUS.' }
    ],
    gabarito: 'A',
    artigo: 'Arts. 65-71 da Lei 15.755/2016',
    justificativa: 'A assistência à saúde do preso segue o modelo do SUS, de forma integral, incluindo fornecimento de medicamentos e atendimento médico, odontológico, farmacêutico e nutricional — em harmonia com o direito constitucional à saúde e com a PNAISP (Portaria Interministerial MS/MJ nº 1/2014).'
  },
  {
    id: 'pe_leg_37',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Visita Íntima',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Segundo o art. 105 da Lei nº 15.755/2016, a visita íntima tem por finalidade manter o vínculo familiar e colaborar com a ressocialização do preso, sendo assegurada com duração de:',
    alternativas: [
      { letra: 'A', texto: '2 a 4 horas semanais.' },
      { letra: 'B', texto: '30 minutos mensais.', comentario: 'O art. 105 assegura duração de 2 a 4 horas semanais, período muito superior a 30 minutos mensais.' },
      { letra: 'C', texto: '24 horas contínuas, uma vez por mês.', comentario: 'A visita íntima é assegurada semanalmente, com duração de 2 a 4 horas, e não em um único período de 24 horas mensais.' },
      { letra: 'D', texto: 'Tempo indeterminado, a critério exclusivo do diretor do estabelecimento.', comentario: 'O art. 105 fixa duração definida (2 a 4 horas semanais), o que é incompatível com tempo indeterminado a critério exclusivo do diretor.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 105 da Lei 15.755/2016',
    justificativa: 'A visita íntima é assegurada com duração de 2 a 4 horas semanais, com a finalidade de manter o vínculo familiar e colaborar com a ressocialização do preso.'
  },
  {
    id: 'pe_leg_38',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Vedação à Divulgação de Imagens',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 114 da Lei nº 15.755/2016, é vedado:',
    alternativas: [
      { letra: 'A', texto: 'Constranger o preso a permitir a divulgação de suas imagens, sem seu consentimento expresso.' },
      { letra: 'B', texto: 'Qualquer forma de registro fotográfico do preso, mesmo para fins de identificação oficial.', comentario: 'O art. 114 veda o constrangimento à divulgação sem consentimento, mas não impede o registro para fins de identificação oficial, como no processo de classificação.' },
      { letra: 'C', texto: 'A divulgação de imagens do preso, mesmo mediante consentimento expresso e por determinação judicial.', comentario: 'A vedação do art. 114 recai sobre o constrangimento à divulgação sem consentimento, não alcançando a divulgação feita com consentimento expresso ou por determinação judicial legítima.' },
      { letra: 'D', texto: 'O uso de imagens do preso em processos administrativos disciplinares, mesmo com autorização.', comentario: 'O art. 114 não veda o uso de imagens em processos administrativos disciplinares quando há autorização; a vedação é ao constrangimento sem consentimento.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 114 da Lei 15.755/2016',
    justificativa: 'O art. 114 veda o constrangimento do preso a permitir a divulgação de suas imagens sem consentimento expresso — protegendo sua imagem e dignidade, sem impedir o registro para fins de identificação oficial (como no processo de classificação) ou por determinação judicial legítima.'
  },
  {
    id: 'pe_leg_39',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Vedação à Revista Íntima de Visitantes',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Uma alteração recente à Lei nº 15.755/2016, regulamentada pelo Decreto Estadual nº 59.896/2025, disciplinou a revista de visitantes em unidades prisionais de Pernambuco, estabelecendo que:',
    alternativas: [
      { letra: 'A', texto: 'É proibida a revista íntima de visitantes, devendo a revista pessoal ser realizada por meios manuais ou eletrônicos que preservem a dignidade do visitante.' },
      { letra: 'B', texto: 'A revista íntima passou a ser obrigatória para todos os visitantes, sem exceção.', comentario: 'A alteração legislativa proíbe a revista íntima de visitantes, sendo o oposto de torná-la obrigatória.' },
      { letra: 'C', texto: 'A revista de visitantes foi totalmente abolida, não podendo ser realizada em nenhuma hipótese.', comentario: 'A norma veda apenas a revista íntima, mantendo a revista pessoal por meios manuais ou eletrônicos que preservem a dignidade do visitante, e não abolindo toda forma de revista.' },
      { letra: 'D', texto: 'Apenas visitantes do sexo masculino podem ser submetidos a qualquer forma de revista.', comentario: 'A norma não estabelece distinção de gênero quanto à possibilidade de revista pessoal não íntima; a vedação à revista íntima aplica-se a todos os visitantes.' }
    ],
    gabarito: 'A',
    artigo: 'Lei 15.755/2016 (alteração regulamentada pelo Decreto Estadual nº 59.896/2025)',
    justificativa: 'A alteração legislativa proíbe a revista íntima de visitantes, alinhando-se à Resolução CNPCP nº 5/2014 e à jurisprudência do STF sobre vedação a práticas vexatórias — a revista pessoal deve ser feita por meios manuais ou eletrônicos que preservem a dignidade do visitante.'
  },
  {
    id: 'pe_leg_40',
    disciplina: 'legislacao_pe',
    topico: 'Lei 15.755/2016 - Procedimento no Parlatório',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Segundo a alteração recente à Lei nº 15.755/2016 sobre revista de visitantes, se a suspeita de porte de objeto, produto ou substância proibida persistir após a revista pessoal, ou se o visitante não quiser se submeter à revista manual, a visita:',
    alternativas: [
      { letra: 'A', texto: 'Poderá ser realizada no parlatório ou em local assemelhado, desde que não haja contato físico com a pessoa presa.' },
      { letra: 'B', texto: 'Será automaticamente cancelada, sendo vedado qualquer contato, inclusive por parlatório.', comentario: 'A norma permite a realização da visita no parlatório ou local assemelhado sem contato físico, não determinando o cancelamento automático e a vedação de qualquer contato.' },
      { letra: 'C', texto: 'Deverá ser autorizada normalmente, com contato físico irrestrito, independentemente da suspeita.', comentario: 'Persistindo a suspeita ou a recusa à revista manual, a visita passa a ocorrer sem contato físico, no parlatório ou local assemelhado, e não com contato físico irrestrito.' },
      { letra: 'D', texto: 'Será substituída por videochamada obrigatória, sendo vedada qualquer visita presencial futura.', comentario: 'A solução prevista é a realização da visita no parlatório ou local assemelhado, sem contato físico, e não a substituição por videochamada com vedação de visitas presenciais futuras.' }
    ],
    gabarito: 'A',
    artigo: 'Lei 15.755/2016 (alteração regulamentada pelo Decreto Estadual nº 59.896/2025)',
    justificativa: 'Persistindo a suspeita (ou recusa do visitante à revista manual), a visita pode ocorrer no parlatório ou local assemelhado, sem contato físico com o preso — solução que concilia segurança institucional com o direito à visita e a vedação a práticas vexatórias.'
  }
];
