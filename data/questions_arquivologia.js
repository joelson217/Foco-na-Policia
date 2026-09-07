// ============================================================
// QUESTIONS_ARQUIVOLOGIA — Disciplina "Arquivologia", exclusiva do
// bloco de Conhecimentos Específicos do cargo de ESCRIVÃO na PCPE
// (Polícia Civil de PE), banca Cebraspe. Conteúdo genérico de
// arquivologia (teoria das três idades, princípios arquivísticos,
// gestão de documentos, protocolo), fundamentado na Lei 8.159/1991
// (Lei de Arquivos).
// ============================================================

const QUESTIONS_ARQUIVOLOGIA = [
  {
    id: 'arq_1',
    disciplina: 'arquivologia',
    topico: 'Conceito de Arquivo',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Em Arquivologia, o termo "arquivo" designa:',
    alternativas: [
      { letra: 'A', texto: 'O conjunto de documentos produzidos ou recebidos por uma entidade, pública ou privada, em decorrência do exercício de suas atividades, conservados para fins de prova ou informação.' },
      { letra: 'B', texto: 'Exclusivamente o local físico (sala ou depósito) onde os documentos são guardados.', comentario: 'Incorreta. O conceito arquivístico central refere-se ao conjunto de documentos com relação orgânica entre si, e não apenas ao espaço físico de guarda.' },
      { letra: 'C', texto: 'Um conjunto de documentos avulsos, sem qualquer relação orgânica entre si.', comentario: 'Incorreta. É justamente a existência de uma relação orgânica entre os documentos (decorrente das atividades da entidade produtora) que caracteriza o arquivo, e não documentos avulsos e desconexos.' },
      { letra: 'D', texto: 'Apenas os documentos históricos com mais de 50 anos de existência.', comentario: 'Incorreta. O conceito de arquivo abrange documentos em todas as idades (corrente, intermediária e permanente), não se restringindo a documentos históricos antigos.' }
    ],
    gabarito: 'A',
    justificativa: 'Arquivo é o conjunto de documentos produzidos e/ou recebidos por uma pessoa física ou jurídica, pública ou privada, em decorrência do exercício de suas atividades, conservados para fins de prova ou informação, mantendo entre si uma relação orgânica.'
  },
  {
    id: 'arq_2',
    disciplina: 'arquivologia',
    topico: 'Teoria das Três Idades - Arquivo Corrente',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Segundo a Teoria das Três Idades, o arquivo corrente é aquele constituído por documentos:',
    alternativas: [
      { letra: 'A', texto: 'Em curso ou consultados frequentemente, vinculados aos objetivos imediatos para os quais foram produzidos, mantidos junto aos setores de origem.' },
      { letra: 'B', texto: 'Que já cumpriram sua finalidade administrativa imediata, mas ainda podem ser utilizados pelo órgão que os produziu, aguardando eliminação ou recolhimento.', comentario: 'Incorreta. Essa descrição corresponde ao arquivo INTERMEDIÁRIO, e não ao corrente, que reúne documentos ainda em uso frequente.' },
      { letra: 'C', texto: 'De valor histórico permanente, recolhidos definitivamente para guarda e pesquisa.', comentario: 'Incorreta. Essa descrição corresponde ao arquivo PERMANENTE, e não ao corrente.' },
      { letra: 'D', texto: 'Digitalizados e disponibilizados exclusivamente na internet.', comentario: 'Incorreta. A digitalização e disponibilização online é uma característica de suporte/acesso, não sendo o critério que define o arquivo corrente na Teoria das Três Idades.' }
    ],
    gabarito: 'A',
    justificativa: 'O arquivo corrente (ou de primeira idade) reúne documentos em curso ou frequentemente consultados, ainda vinculados aos objetivos que motivaram sua produção, geralmente mantidos junto aos próprios setores que os produziram ou receberam.'
  },
  {
    id: 'arq_3',
    disciplina: 'arquivologia',
    topico: 'Teoria das Três Idades - Arquivo Intermediário',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Os documentos que já não são de uso corrente nos órgãos produtores, mas que aguardam, em depósito de armazenamento temporário, sua destinação final (eliminação ou recolhimento), constituem o arquivo:',
    alternativas: [
      { letra: 'A', texto: 'Intermediário.' },
      { letra: 'B', texto: 'Corrente.', comentario: 'Incorreta. O arquivo corrente reúne documentos ainda em uso frequente pelo setor de origem, e não documentos que aguardam destinação final em depósito temporário.' },
      { letra: 'C', texto: 'Permanente.', comentario: 'Incorreta. O arquivo permanente reúne documentos que já tiveram sua destinação final definida como guarda definitiva, e não documentos ainda aguardando essa definição.' },
      { letra: 'D', texto: 'Especial.', comentario: 'Incorreta. "Arquivo especial" não é uma das três idades da Teoria das Três Idades (corrente, intermediária, permanente).' }
    ],
    gabarito: 'A',
    justificativa: 'O arquivo intermediário (ou de segunda idade) reúne documentos que deixaram de ser de uso corrente, mas que ainda podem ser utilizados pelo órgão de origem, aguardando em depósito de armazenamento temporário até que seja definida sua destinação final: eliminação ou recolhimento ao arquivo permanente.'
  },
  {
    id: 'arq_4',
    disciplina: 'arquivologia',
    topico: 'Teoria das Três Idades - Arquivo Permanente',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O arquivo permanente (ou de terceira idade) é constituído por documentos que:',
    alternativas: [
      { letra: 'A', texto: 'Perderam todo valor de natureza administrativa, mas são conservados em razão de seu valor histórico, probatório ou informativo.' },
      { letra: 'B', texto: 'Ainda estão em tramitação ativa nos setores administrativos que os produziram.', comentario: 'Incorreta. Documentos em tramitação ativa caracterizam o arquivo CORRENTE, e não o permanente.' },
      { letra: 'C', texto: 'Serão obrigatoriamente eliminados após o transcurso do prazo de guarda.', comentario: 'Incorreta. O arquivo permanente é justamente aquele destinado à guarda DEFINITIVA, e não à eliminação após prazo de guarda.' },
      { letra: 'D', texto: 'Só podem ser criados por órgãos privados, sendo vedado a órgãos públicos.', comentario: 'Incorreta. Órgãos públicos também constituem e mantêm arquivos permanentes, de grande importância histórica e para a memória institucional do Estado.' }
    ],
    gabarito: 'A',
    justificativa: 'O arquivo permanente reúne documentos que perderam o valor administrativo imediato, mas que devem ser definitivamente preservados em razão de seu valor histórico, probatório ou informativo, servindo à pesquisa e à memória institucional.'
  },
  {
    id: 'arq_5',
    disciplina: 'arquivologia',
    topico: 'Princípio da Proveniência',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'O princípio arquivístico da proveniência (ou princípio do respeito aos fundos) estabelece que:',
    alternativas: [
      { letra: 'A', texto: 'Os documentos de uma mesma origem (produzidos ou acumulados por uma entidade) devem ser mantidos agrupados, sem mistura com os de outras proveniências.' },
      { letra: 'B', texto: 'Os documentos devem ser organizados exclusivamente por ordem cronológica de produção, independentemente da origem.', comentario: 'Incorreta. A ordem cronológica pode ser um critério interno de organização, mas o princípio da proveniência trata da preservação da origem/fundo, e não apenas da cronologia.' },
      { letra: 'C', texto: 'Todo documento deve ser digitalizado antes de ser arquivado fisicamente.', comentario: 'Incorreta. A digitalização é uma questão de suporte e tecnologia, sem relação com o princípio da proveniência, que trata da preservação da origem dos documentos.' },
      { letra: 'D', texto: 'Documentos de diferentes órgãos podem ser livremente reunidos em um único fundo, para facilitar a consulta.', comentario: 'Incorreta. Isso contraria diretamente o princípio da proveniência, que exige a NÃO mistura de documentos de origens (fundos) diferentes.' }
    ],
    gabarito: 'A',
    justificativa: 'O princípio da proveniência determina que os documentos produzidos ou acumulados por uma entidade (pessoa física ou jurídica) devem ser mantidos agrupados, preservando sua origem, sem mesclá-los com documentos de outras proveniências.'
  },
  {
    id: 'arq_6',
    disciplina: 'arquivologia',
    topico: 'Princípio da Organicidade',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'O princípio da organicidade, na Arquivologia, refere-se ao fato de que:',
    alternativas: [
      { letra: 'A', texto: 'Os arquivos refletem a estrutura, as funções e as atividades da entidade que os produziu, mantendo uma relação orgânica entre os documentos.' },
      { letra: 'B', texto: 'Todo documento deve ser organizado exclusivamente por ordem alfabética de assunto.', comentario: 'Incorreta. A ordenação alfabética é apenas um método de organização, sem relação com o conceito de organicidade, que trata da relação orgânica entre os documentos e a estrutura da entidade produtora.' },
      { letra: 'C', texto: 'Documentos de valor histórico devem ser eliminados após digitalização.', comentario: 'Incorreta. Documentos de valor histórico permanente não devem ser eliminados; essa afirmação não guarda relação com o princípio da organicidade.' },
      { letra: 'D', texto: 'A organicidade se aplica apenas a arquivos privados, não a órgãos públicos.', comentario: 'Incorreta. O princípio da organicidade se aplica a arquivos de qualquer entidade, pública ou privada, refletindo a estrutura e as funções de cada uma.' }
    ],
    gabarito: 'A',
    justificativa: 'O princípio da organicidade reconhece que os arquivos espelham a estrutura, as funções e as atividades da entidade produtora, existindo uma relação orgânica entre os documentos, que não devem ser tratados como peças isoladas.'
  },
  {
    id: 'arq_7',
    disciplina: 'arquivologia',
    topico: 'Gestão de Documentos (Lei 8.159/1991)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A gestão de documentos, segundo a Lei nº 8.159/1991 (Lei de Arquivos), compreende o conjunto de procedimentos e operações técnicas referentes:',
    alternativas: [
      { letra: 'A', texto: 'À produção, tramitação, uso, avaliação e arquivamento de documentos em fase corrente e intermediária, visando sua eliminação ou recolhimento para guarda permanente.' },
      { letra: 'B', texto: 'Exclusivamente à digitalização de documentos históricos já custodiados em arquivos permanentes.', comentario: 'Incorreta. A gestão de documentos abrange todo o ciclo documental nas fases corrente e intermediária, e não apenas a digitalização de documentos já em arquivo permanente.' },
      { letra: 'C', texto: 'À produção de documentos apenas, sem qualquer relação com sua tramitação ou destinação.', comentario: 'Incorreta. A gestão de documentos abrange também a tramitação, o uso, a avaliação e o arquivamento, e não apenas a produção.' },
      { letra: 'D', texto: 'À venda de documentos públicos de valor histórico para colecionadores particulares.', comentario: 'Incorreta. Documentos públicos de valor histórico não podem ser vendidos a particulares; essa prática, inclusive, é vedada pela legislação arquivística.' }
    ],
    gabarito: 'A',
    justificativa: 'Conforme a Lei nº 8.159/1991, a gestão de documentos é o conjunto de procedimentos e operações técnicas referentes à produção, tramitação, uso, avaliação e arquivamento de documentos em fase corrente e intermediária, visando sua eliminação ou recolhimento para guarda permanente.'
  },
  {
    id: 'arq_8',
    disciplina: 'arquivologia',
    topico: 'Tabela de Temporalidade Documental',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A tabela de temporalidade documental é o instrumento arquivístico que tem por finalidade:',
    alternativas: [
      { letra: 'A', texto: 'Definir os prazos de guarda e a destinação final (eliminação ou guarda permanente) dos documentos de um órgão, com base em critérios de avaliação.' },
      { letra: 'B', texto: 'Listar cronologicamente todos os funcionários que assinaram determinado documento.', comentario: 'Incorreta. Isso não é a finalidade da tabela de temporalidade, que trata de prazos de guarda e destinação de documentos, e não de listagem de signatários.' },
      { letra: 'C', texto: 'Registrar exclusivamente o número de páginas de cada processo administrativo.', comentario: 'Incorreta. A tabela de temporalidade não se destina a registrar características físicas como número de páginas, mas sim prazos de guarda e destinação final.' },
      { letra: 'D', texto: 'Substituir integralmente o plano de classificação de documentos.', comentario: 'Incorreta. A tabela de temporalidade é um instrumento complementar ao plano de classificação, e não um substituto dele — ambos trabalham de forma integrada na gestão documental.' }
    ],
    gabarito: 'A',
    justificativa: 'A tabela de temporalidade documental é o instrumento resultante da avaliação documental que define os prazos de guarda dos documentos nas fases corrente e intermediária, bem como sua destinação final: eliminação ou recolhimento para guarda permanente.'
  },
  {
    id: 'arq_9',
    disciplina: 'arquivologia',
    topico: 'Avaliação de Documentos',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'A avaliação de documentos, no âmbito da gestão documental, é a etapa que tem por objetivo:',
    alternativas: [
      { letra: 'A', texto: 'Analisar e indicar os valores (administrativo, legal, fiscal, histórico) dos documentos, definindo prazos de guarda e destinação final.' },
      { letra: 'B', texto: 'Digitalizar todos os documentos de um arquivo, sem qualquer análise de conteúdo.', comentario: 'Incorreta. A digitalização é uma atividade de reprodução/preservação, distinta da avaliação, que envolve análise dos valores do documento.' },
      { letra: 'C', texto: 'Eliminar automaticamente todo documento com mais de um ano de produção.', comentario: 'Incorreta. Não há eliminação automática por idade; a eliminação depende da avaliação criteriosa dos valores do documento, conforme a tabela de temporalidade.' },
      { letra: 'D', texto: 'Determinar exclusivamente o valor financeiro de mercado de documentos históricos.', comentario: 'Incorreta. A avaliação arquivística não trata de valor de mercado/comercial, mas dos valores administrativo, legal, fiscal e histórico/probatório/informativo do documento.' }
    ],
    gabarito: 'A',
    justificativa: 'A avaliação de documentos analisa e determina os valores primários (administrativo, legal, fiscal) e secundários (histórico, probatório, informativo) dos documentos, definindo seus prazos de guarda e a destinação final adequada.'
  },
  {
    id: 'arq_10',
    disciplina: 'arquivologia',
    topico: 'Protocolo - Finalidade',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'No âmbito do protocolo, as atividades de recebimento, classificação, registro, distribuição, tramitação, expedição e arquivamento de documentos têm por finalidade principal:',
    alternativas: [
      { letra: 'A', texto: 'Controlar o trâmite dos documentos, garantindo o acompanhamento de sua movimentação dentro e fora da instituição.' },
      { letra: 'B', texto: 'Eliminar definitivamente documentos considerados de valor histórico.', comentario: 'Incorreta. A eliminação de documentos é decorrência da avaliação documental e da tabela de temporalidade, e não uma finalidade das atividades de protocolo.' },
      { letra: 'C', texto: 'Substituir o arquivo permanente por um sistema de protocolo digital exclusivo.', comentario: 'Incorreta. O protocolo não substitui o arquivo permanente; são funções complementares dentro da gestão documental.' },
      { letra: 'D', texto: 'Restringir-se a documentos de natureza sigilosa, excluindo os ostensivos.', comentario: 'Incorreta. As atividades de protocolo se aplicam a documentos de modo geral, ostensivos ou sigilosos, e não apenas aos sigilosos.' }
    ],
    gabarito: 'A',
    justificativa: 'As atividades de protocolo (recebimento, classificação, registro, distribuição, tramitação, expedição e arquivamento) têm por finalidade controlar o trâmite dos documentos, permitindo o acompanhamento de sua movimentação dentro e fora da instituição.'
  },
  {
    id: 'arq_11',
    disciplina: 'arquivologia',
    topico: 'Arquivos Públicos (Lei 8.159/1991)',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Consideram-se arquivos públicos, nos termos da Lei nº 8.159/1991, os conjuntos de documentos:',
    alternativas: [
      { letra: 'A', texto: 'Produzidos e recebidos por órgãos públicos, de qualquer esfera do Poder (federal, estadual, municipal), em decorrência de suas funções administrativas, legislativas e judiciárias.' },
      { letra: 'B', texto: 'Produzidos exclusivamente por empresas privadas prestadoras de serviço público, independentemente de convênio.', comentario: 'Incorreta. Documentos de entidades privadas encarregadas de serviços públicos só se equiparam a arquivos públicos quando vinculados à prestação desse serviço, geralmente mediante concessão/convênio, e não de forma automática e irrestrita.' },
      { letra: 'C', texto: 'Produzidos apenas pelo Poder Executivo federal, excluindo Estados e Municípios.', comentario: 'Incorreta. A definição de arquivos públicos abrange órgãos de qualquer esfera do Poder (federal, estadual e municipal), e não apenas o Executivo federal.' },
      { letra: 'D', texto: 'Formados unicamente por documentos digitais, excluindo o suporte papel.', comentario: 'Incorreta. Os arquivos públicos abrangem documentos em qualquer suporte (papel, digital, entre outros), não se restringindo a documentos digitais.' }
    ],
    gabarito: 'A',
    justificativa: 'Consideram-se arquivos públicos os conjuntos de documentos produzidos e recebidos por órgãos públicos de qualquer esfera do Poder (federal, estadual e municipal), em decorrência de suas funções administrativas, legislativas e judiciárias, além de documentos de instituições privadas encarregadas de serviços públicos.'
  },
  {
    id: 'arq_12',
    disciplina: 'arquivologia',
    topico: 'Classificação de Documentos quanto ao Gênero',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Quanto ao gênero, os documentos podem ser classificados, entre outras categorias, em textuais, iconográficos (fotografias, gravuras), cartográficos (mapas, plantas), sonoros e audiovisuais, conforme:',
    alternativas: [
      { letra: 'A', texto: 'O aspecto de sua apresentação e a natureza da informação registrada.' },
      { letra: 'B', texto: 'Exclusivamente o suporte material em que estão registrados (papel, filme, disco).', comentario: 'Incorreta. Essa seria a classificação por SUPORTE, categoria distinta da classificação por gênero, que considera a natureza da informação e sua forma de expressão.' },
      { letra: 'C', texto: 'O grau de sigilo atribuído ao documento (ostensivo, reservado, secreto).', comentario: 'Incorreta. O grau de sigilo é critério de classificação quanto ao ACESSO, e não quanto ao gênero do documento.' },
      { letra: 'D', texto: 'O valor probatório do documento perante o Poder Judiciário.', comentario: 'Incorreta. O valor probatório está relacionado à avaliação documental (valor secundário), e não à classificação por gênero.' }
    ],
    gabarito: 'A',
    justificativa: 'A classificação dos documentos quanto ao gênero considera o aspecto de sua apresentação e a natureza da informação registrada — como textuais, iconográficos, cartográficos, sonoros, audiovisuais e micrográficos — distinta da classificação por suporte (material físico que contém a informação, como papel, filme ou disco).'
  },
  {
    id: 'arq_13',
    disciplina: 'arquivologia',
    topico: 'Princípio da Unicidade',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O princípio arquivístico da unicidade estabelece que:',
    alternativas: [
      { letra: 'A', texto: 'Cada documento, independentemente da forma ou do gênero, guarda uma individualidade própria dentro do conjunto documental, em razão do contexto específico de sua produção.' },
      { letra: 'B', texto: 'Todos os documentos de um mesmo arquivo devem ser idênticos entre si quanto ao conteúdo.', comentario: 'Incorreta. A unicidade não trata da identidade de conteúdo entre documentos, mas da individualidade de cada documento em razão do contexto de sua produção.' },
      { letra: 'C', texto: 'Um arquivo só pode ter um único responsável legal ao longo de toda a sua existência.', comentario: 'Incorreta. O princípio da unicidade não trata da responsabilidade legal pelo arquivo, mas da individualidade de cada documento dentro do conjunto documental.' },
      { letra: 'D', texto: 'Documentos duplicados devem ser imediatamente eliminados, independentemente de avaliação.', comentario: 'Incorreta. A eliminação de documentos depende de avaliação e da tabela de temporalidade, e não decorre automaticamente do princípio da unicidade.' }
    ],
    gabarito: 'A',
    justificativa: 'O princípio da unicidade estabelece que, não obstante a forma, o gênero ou o tipo, cada documento de arquivo é único em razão do contexto em que foi produzido, ainda que existam cópias.'
  },
  {
    id: 'arq_14',
    disciplina: 'arquivologia',
    topico: 'Princípio da Indivisibilidade (Integridade dos Fundos)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O princípio da indivisibilidade (ou integridade dos fundos), aplicável aos arquivos, determina que:',
    alternativas: [
      { letra: 'A', texto: 'Um fundo de arquivo não pode ser disperso, mutilado, alienado ou acrescido de forma a comprometer sua constituição orgânica original.' },
      { letra: 'B', texto: 'Todo fundo documental deve ser dividido em partes iguais entre os diferentes setores de uma instituição.', comentario: 'Incorreta. O princípio protege justamente contra a dispersão e a divisão do fundo, e não determina sua fragmentação entre setores.' },
      { letra: 'C', texto: 'Documentos de um mesmo fundo podem ser livremente vendidos a instituições privadas, desde que devidamente registrados.', comentario: 'Incorreta. A alienação do fundo compromete sua integridade, contrariando diretamente o princípio da indivisibilidade.' },
      { letra: 'D', texto: 'Aplica-se exclusivamente a arquivos digitais, não alcançando documentos em suporte papel.', comentario: 'Incorreta. O princípio da indivisibilidade se aplica aos fundos de arquivo de forma geral, independentemente do suporte dos documentos que os compõem.' }
    ],
    gabarito: 'A',
    justificativa: 'O princípio da indivisibilidade (ou integridade dos fundos) protege os fundos de arquivo contra dispersão, mutilação, alienação, destruição não autorizada ou acréscimos indevidos, preservando sua constituição orgânica original.'
  },
  {
    id: 'arq_15',
    disciplina: 'arquivologia',
    topico: 'Princípio da Cumulatividade',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O princípio da cumulatividade, na Arquivologia, indica que o arquivo se forma:',
    alternativas: [
      { letra: 'A', texto: 'De maneira progressiva, natural e contínua, como decorrência direta e necessária das atividades desenvolvidas pela entidade produtora.' },
      { letra: 'B', texto: 'De forma artificial, mediante seleção deliberada e intencional de peças isoladas, reunidas por colecionadores conforme critério temático.', comentario: 'Incorreta. Essa descrição corresponde à formação de uma coleção, e não à cumulatividade natural que caracteriza a formação orgânica do arquivo.' },
      { letra: 'C', texto: 'Exclusivamente por doação de terceiros, sem qualquer relação com as atividades da entidade.', comentario: 'Incorreta. A formação cumulativa do arquivo decorre das próprias atividades da entidade produtora, e não apenas de doações externas desvinculadas dessas atividades.' },
      { letra: 'D', texto: 'De uma só vez, em bloco, no momento da extinção da entidade produtora.', comentario: 'Incorreta. A cumulatividade é um processo contínuo e progressivo ao longo da existência da entidade, e não um evento único ocorrido apenas em sua extinção.' }
    ],
    gabarito: 'A',
    justificativa: 'O princípio da cumulatividade reconhece que o arquivo se forma de modo progressivo, natural e contínuo, como resultado direto do desenvolvimento das atividades da entidade produtora, distinguindo-se da formação artificial e seletiva de uma coleção.'
  },
  {
    id: 'arq_16',
    disciplina: 'arquivologia',
    topico: 'Fundo x Coleção',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Sobre a distinção entre "fundo" e "coleção" em Arquivologia, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'O fundo é formado organicamente pelos documentos de uma mesma entidade produtora, decorrentes de suas atividades, enquanto a coleção resulta de reunião artificial de documentos de diversas proveniências, agrupados por critério temático ou de interesse do organizador.' },
      { letra: 'B', texto: 'Fundo e coleção são termos sinônimos, empregados indistintamente para designar qualquer conjunto de documentos.', comentario: 'Incorreta. Os dois conceitos são tecnicamente distintos: o fundo tem formação orgânica (mesma proveniência), enquanto a coleção é reunida artificialmente, por critério alheio à origem dos documentos.' },
      { letra: 'C', texto: 'A coleção sempre tem valor jurídico superior ao do fundo, para fins de prova em juízo.', comentario: 'Incorreta. Não há hierarquia de valor probatório predefinida entre fundo e coleção; a distinção entre eles é conceitual, relativa à forma de constituição do conjunto documental.' },
      { letra: 'D', texto: 'Somente os órgãos públicos produzem fundos; entidades privadas produzem exclusivamente coleções.', comentario: 'Incorreta. Tanto entidades públicas quanto privadas podem produzir fundos de arquivo, decorrentes de suas próprias atividades.' }
    ],
    gabarito: 'A',
    justificativa: 'O fundo de arquivo é constituído organicamente pelos documentos produzidos e acumulados por uma mesma entidade, em decorrência de suas atividades (respeitando o princípio da proveniência); já a coleção é formada artificialmente, reunindo documentos de diferentes proveniências segundo um critério temático, cronológico ou de interesse do colecionador.'
  },
  {
    id: 'arq_17',
    disciplina: 'arquivologia',
    topico: 'Métodos de Arquivamento - Alfabético',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'O método de arquivamento alfabético caracteriza-se por:',
    alternativas: [
      { letra: 'A', texto: 'Ordenar os documentos com base no nome do titular (pessoa física ou jurídica), seguindo a sequência das letras do alfabeto.' },
      { letra: 'B', texto: 'Ordenar os documentos exclusivamente por números sequenciais atribuídos no momento do recebimento.', comentario: 'Incorreta. A ordenação por números sequenciais é característica do método numérico, e não do alfabético, que se baseia no nome do titular.' },
      { letra: 'C', texto: 'Ordenar os documentos com base na localização geográfica (município, estado ou país) do titular.', comentario: 'Incorreta. Essa é a lógica do método geográfico, distinto do método alfabético, que ordena pelo nome do titular.' },
      { letra: 'D', texto: 'Ordenar os documentos com base no assunto tratado, agrupando-os por tema.', comentario: 'Incorreta. A ordenação por assunto corresponde ao método ideográfico, e não ao alfabético.' }
    ],
    gabarito: 'A',
    justificativa: 'O método alfabético é um método direto de arquivamento, no qual os documentos são ordenados segundo o nome do titular (pessoa física ou jurídica), seguindo a sequência das letras do alfabeto.'
  },
  {
    id: 'arq_18',
    disciplina: 'arquivologia',
    topico: 'Métodos de Arquivamento - Numérico',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Nos métodos de arquivamento numéricos, a localização de um documento no arquivo, diferentemente do método alfabético, exige:',
    alternativas: [
      { letra: 'A', texto: 'A consulta prévia a um índice (auxiliar ou remissivo), já que a ordenação é feita por números, e não diretamente pelo nome do titular.' },
      { letra: 'B', texto: 'A leitura de todo o acervo, documento por documento, sem qualquer instrumento auxiliar de busca.', comentario: 'Incorreta. Os métodos numéricos utilizam índices auxiliares justamente para evitar a necessidade de percorrer todo o acervo em busca do documento desejado.' },
      { letra: 'C', texto: 'A eliminação obrigatória do documento após um ano de arquivamento.', comentario: 'Incorreta. A eliminação de documentos depende de avaliação e tabela de temporalidade, sem qualquer relação com o método numérico de arquivamento em si.' },
      { letra: 'D', texto: 'A digitalização prévia de todo o acervo, como pré-requisito indispensável do método.', comentario: 'Incorreta. Os métodos numéricos de arquivamento são anteriores e independentes da digitalização, podendo ser aplicados normalmente a acervos em suporte papel.' }
    ],
    gabarito: 'A',
    justificativa: 'Por serem métodos indiretos, os sistemas numéricos de arquivamento (simples, cronológico, dígito-terminal, entre outros) exigem a consulta prévia a um índice alfabético (ou outro instrumento auxiliar/remissivo) para se descobrir o número sob o qual o documento foi arquivado.'
  },
  {
    id: 'arq_19',
    disciplina: 'arquivologia',
    topico: 'Métodos de Arquivamento - Geográfico',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O método de arquivamento geográfico organiza os documentos tomando por base:',
    alternativas: [
      { letra: 'A', texto: 'A procedência ou o local (município, estado, país) relacionado ao titular ou ao assunto do documento.' },
      { letra: 'B', texto: 'A ordem cronológica exclusiva de recebimento, independentemente de qualquer critério geográfico.', comentario: 'Incorreta. Essa é uma variante do método numérico (cronológico), e não do método geográfico, que se baseia em critério de localidade.' },
      { letra: 'C', texto: 'O grau de sigilo do documento (ostensivo, reservado ou secreto).', comentario: 'Incorreta. O grau de sigilo se relaciona à classificação quanto ao acesso, e não ao método geográfico de arquivamento.' },
      { letra: 'D', texto: 'O gênero documental (textual, iconográfico, sonoro etc.), sem qualquer relação com localidade.', comentario: 'Incorreta. A classificação por gênero é distinta do método geográfico, que organiza os documentos com base em critérios de localidade.' }
    ],
    gabarito: 'A',
    justificativa: 'O método geográfico é um método direto de arquivamento no qual a ordenação dos documentos considera a procedência ou o local (cidade, estado, país) a que se referem, sendo bastante utilizado quando a localidade é o elemento mais consultado.'
  },
  {
    id: 'arq_20',
    disciplina: 'arquivologia',
    topico: 'Plano de Classificação de Documentos',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O plano de classificação de documentos, instrumento de gestão documental, tem por finalidade:',
    alternativas: [
      { letra: 'A', texto: 'Organizar os documentos de acordo com um esquema hierárquico e lógico de funções, subfunções e atividades da entidade, refletindo sua estrutura orgânico-funcional.' },
      { letra: 'B', texto: 'Definir exclusivamente os prazos de guarda e a destinação final dos documentos, sem qualquer relação com a organização funcional do acervo.', comentario: 'Incorreta. Definir prazos de guarda e destinação final é a finalidade da tabela de temporalidade, e não do plano de classificação, que organiza os documentos segundo funções e atividades.' },
      { letra: 'C', texto: 'Substituir integralmente a tabela de temporalidade documental, tornando-a desnecessária.', comentario: 'Incorreta. Plano de classificação e tabela de temporalidade são instrumentos complementares, elaborados a partir do mesmo estudo das funções e atividades da entidade, e não substitutos um do outro.' },
      { letra: 'D', texto: 'Listar exclusivamente os documentos de valor histórico já recolhidos ao arquivo permanente.', comentario: 'Incorreta. O plano de classificação se aplica principalmente aos documentos correntes e intermediários, organizando-os segundo funções e atividades, não se restringindo aos documentos já recolhidos ao arquivo permanente.' }
    ],
    gabarito: 'A',
    justificativa: 'O plano de classificação organiza os documentos de acordo com as funções, subfunções e atividades desempenhadas pela entidade, refletindo sua estrutura orgânico-funcional, servindo de base, inclusive, para a elaboração da tabela de temporalidade.'
  },
  {
    id: 'arq_21',
    disciplina: 'arquivologia',
    topico: 'Protocolo - Número de Protocolo',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'No âmbito das atividades de protocolo, o registro de um documento, com a atribuição de número de protocolo, tem por objetivo principal:',
    alternativas: [
      { letra: 'A', texto: 'Individualizar o documento e possibilitar seu controle e localização ao longo de toda a sua tramitação na instituição.' },
      { letra: 'B', texto: 'Determinar, de forma definitiva, o valor histórico do documento para fins de guarda permanente.', comentario: 'Incorreta. A determinação do valor histórico do documento é objeto da avaliação documental, e não da simples atribuição de número de protocolo no recebimento.' },
      { letra: 'C', texto: 'Substituir a necessidade de assinatura da autoridade competente no documento.', comentario: 'Incorreta. O número de protocolo não substitui formalidades como a assinatura da autoridade competente; trata-se de instrumento de controle e localização do documento.' },
      { letra: 'D', texto: 'Autorizar automaticamente a eliminação do documento após o prazo de um ano.', comentario: 'Incorreta. O registro de protocolo não autoriza eliminação de documentos, que depende de avaliação e da tabela de temporalidade.' }
    ],
    gabarito: 'A',
    justificativa: 'O registro e a atribuição de número de protocolo permitem individualizar o documento, possibilitando seu controle e rastreamento ao longo de toda a sua tramitação dentro e fora da instituição.'
  },
  {
    id: 'arq_22',
    disciplina: 'arquivologia',
    topico: 'Microfilmagem de Documentos (Lei 5.433/1968)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Nos termos da Lei nº 5.433/1968, que regula a microfilmagem de documentos oficiais, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Os microfilmes, bem como as certidões, os traslados e as cópias fotográficas obtidas diretamente dos filmes, produzem os mesmos efeitos legais dos documentos originais, em juízo ou fora dele.' },
      { letra: 'B', texto: 'A microfilmagem retira completamente o valor probatório do documento original, que passa a ser considerado inválido para todos os fins.', comentario: 'Incorreta. A lei confere aos microfilmes e às cópias obtidas diretamente deles os MESMOS efeitos legais dos documentos originais, e não a invalidação do valor probatório.' },
      { letra: 'C', texto: 'É vedada a eliminação de documentos originais depois de microfilmados, devendo ser mantidos indefinidamente em suporte papel.', comentario: 'Incorreta. A lei autoriza, a critério da autoridade competente, a eliminação dos documentos já microfilmados, ressalvados os de valor histórico, que não devem ser eliminados.' },
      { letra: 'D', texto: 'Aplica-se exclusivamente a documentos produzidos por particulares, excluindo órgãos federais, estaduais e municipais.', comentario: 'Incorreta. A lei autoriza a microfilmagem de documentos arquivados provenientes tanto de particulares quanto de órgãos federais, estaduais e municipais.' }
    ],
    gabarito: 'A',
    justificativa: 'A Lei nº 5.433/1968 estabelece que os microfilmes, assim como as certidões, os traslados e as cópias fotográficas obtidas diretamente dos filmes, produzem os mesmos efeitos legais dos documentos originais, em juízo ou fora dele, autorizando, ressalvados os documentos de valor histórico, a eliminação dos originais já microfilmados.'
  },
  {
    id: 'arq_23',
    disciplina: 'arquivologia',
    topico: 'Lei de Acesso à Informação (Lei 12.527/2011) - Prazos de Sigilo',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo a Lei nº 12.527/2011 (Lei de Acesso à Informação), as informações classificadas em grau de sigilo terão os seguintes prazos máximos de restrição de acesso, contados da data de sua produção:',
    alternativas: [
      { letra: 'A', texto: '25 anos para as ultrassecretas, 15 anos para as secretas e 5 anos para as reservadas.' },
      { letra: 'B', texto: '5 anos para as ultrassecretas, 15 anos para as secretas e 25 anos para as reservadas.', comentario: 'Incorreta. A ordem está invertida: o prazo mais longo (25 anos) é o das informações ultrassecretas, e o mais curto (5 anos) é o das reservadas.' },
      { letra: 'C', texto: '100 anos para todas as classificações, sem distinção de grau de sigilo.', comentario: 'Incorreta. A lei prevê prazos distintos e mais curtos conforme o grau de sigilo (25, 15 e 5 anos), e não um prazo único de 100 anos para todas as classificações.' },
      { letra: 'D', texto: 'Prazo indeterminado para todas as informações classificadas como sigilosas, sem possibilidade de desclassificação.', comentario: 'Incorreta. A lei estabelece prazos máximos determinados, e prevê expressamente a possibilidade de reclassificação e desclassificação da informação.' }
    ],
    gabarito: 'A',
    justificativa: 'A Lei de Acesso à Informação estabelece prazos máximos de restrição de acesso conforme o grau de sigilo: 25 anos para informações ultrassecretas, 15 anos para secretas e 5 anos para reservadas, contados da data de sua produção.'
  },
  {
    id: 'arq_24',
    disciplina: 'arquivologia',
    topico: 'Classificação de Documentos quanto à Natureza do Assunto',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Quanto à natureza do assunto, os documentos podem ser classificados em ostensivos e sigilosos, sendo correto afirmar que os documentos sigilosos são aqueles que:',
    alternativas: [
      { letra: 'A', texto: 'Exigem medidas especiais de restrição e controle de acesso, em razão do conteúdo sensível de que tratam.' },
      { letra: 'B', texto: 'Podem ser livremente divulgados e consultados por qualquer pessoa, sem qualquer restrição de acesso.', comentario: 'Incorreta. Essa característica é própria dos documentos OSTENSIVOS, e não dos sigilosos, que exigem restrição e controle de acesso.' },
      { letra: 'C', texto: 'São, obrigatoriamente, os únicos documentos objeto de avaliação e tabela de temporalidade.', comentario: 'Incorreta. Tanto documentos ostensivos quanto sigilosos estão sujeitos à avaliação e à tabela de temporalidade, não sendo essa uma exclusividade dos sigilosos.' },
      { letra: 'D', texto: 'Correspondem, na classificação por gênero, aos documentos cartográficos.', comentario: 'Incorreta. Sigiloso é classificação quanto ao ACESSO/natureza do assunto, distinta da classificação por gênero (textual, cartográfico, iconográfico etc.).' }
    ],
    gabarito: 'A',
    justificativa: 'Documentos sigilosos são aqueles que, em razão do conteúdo, exigem medidas especiais de restrição e controle de acesso, em contraposição aos documentos ostensivos, cujo acesso não é restrito.'
  },
  {
    id: 'arq_25',
    disciplina: 'arquivologia',
    topico: 'Classificação de Documentos quanto ao Estágio de Evolução',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Quanto ao estágio de evolução (ou grau de elaboração), um documento é classificado como "original" quando:',
    alternativas: [
      { letra: 'A', texto: 'É a primeira versão do documento, com valor pleno e distinto de simples cópia ou reprodução.' },
      { letra: 'B', texto: 'É produzido exclusivamente em meio digital, excluindo qualquer suporte físico.', comentario: 'Incorreta. A classificação de "original" não depende do suporte (digital ou físico), mas de o documento representar a primeira versão, com valor próprio, e não uma cópia.' },
      { letra: 'C', texto: 'É uma reprodução fiel de outro documento, obtida por fotocópia ou digitalização.', comentario: 'Incorreta. Essa descrição corresponde a uma cópia, e não a um documento original, que é a primeira versão do documento.' },
      { letra: 'D', texto: 'Corresponde sempre ao rascunho (minuta) que antecede a versão final do documento.', comentario: 'Incorreta. A minuta é uma versão preliminar, distinta do documento original definitivo, ainda que ambos possam integrar o processo de elaboração de um documento.' }
    ],
    gabarito: 'A',
    justificativa: 'Quanto ao estágio de evolução, o documento original é a primeira versão do documento, com valor próprio, distinguindo-se de minutas (versões preliminares) e de cópias (reproduções obtidas a partir do original).'
  },
  {
    id: 'arq_26',
    disciplina: 'arquivologia',
    topico: 'Arranjo Documental',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Na Arquivologia, o "arranjo" corresponde à atividade de:',
    alternativas: [
      { letra: 'A', texto: 'Organizar física e/ou intelectualmente os documentos de um arquivo permanente, agrupando-os em unidades que obedeçam a relações naturalmente existentes entre eles, decorrentes da estrutura e das atividades da entidade produtora.' },
      { letra: 'B', texto: 'Eliminar documentos que já ultrapassaram o prazo de guarda previsto na tabela de temporalidade.', comentario: 'Incorreta. A eliminação de documentos, embora relacionada à gestão documental, não é a atividade denominada "arranjo", que trata da organização física e intelectual do acervo.' },
      { letra: 'C', texto: 'Elaborar exclusivamente o índice remissivo de um determinado documento.', comentario: 'Incorreta. A elaboração de índices é atividade de descrição/instrumento de pesquisa, distinta do arranjo, que trata da organização do acervo em si.' },
      { letra: 'D', texto: 'Definir o grau de sigilo a ser atribuído a cada documento do arquivo.', comentario: 'Incorreta. A definição do grau de sigilo se relaciona à classificação quanto ao acesso, e não ao arranjo, que trata da organização física e intelectual dos documentos.' }
    ],
    gabarito: 'A',
    justificativa: 'O arranjo é a atividade, geralmente aplicada em arquivos permanentes, de organizar física e/ou intelectualmente os documentos de um fundo, agrupando-os em unidades (como séries) que respeitem as relações orgânicas naturalmente existentes entre eles, decorrentes da estrutura e do funcionamento da entidade produtora.'
  },
  {
    id: 'arq_27',
    disciplina: 'arquivologia',
    topico: 'Descrição Documental e Instrumentos de Pesquisa',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A descrição documental, atividade típica de arquivos permanentes, tem por finalidade:',
    alternativas: [
      { letra: 'A', texto: 'Elaborar instrumentos de pesquisa (como guias, inventários e catálogos) que permitam o conhecimento e a localização dos documentos custodiados pelo arquivo.' },
      { letra: 'B', texto: 'Definir os prazos de guarda dos documentos ainda na fase corrente, antes de sua avaliação.', comentario: 'Incorreta. Definir prazos de guarda é atribuição da avaliação documental e da tabela de temporalidade, e não da descrição, que é atividade típica da fase permanente.' },
      { letra: 'C', texto: 'Eliminar fisicamente os documentos que não possuam mais valor administrativo.', comentario: 'Incorreta. A descrição não trata de eliminação de documentos; sua finalidade é produzir instrumentos que facilitem a pesquisa e o acesso ao acervo permanente.' },
      { letra: 'D', texto: 'Substituir integralmente a necessidade de arranjo dos documentos no arquivo permanente.', comentario: 'Incorreta. Descrição e arranjo são atividades complementares (arranjo organiza fisicamente/intelectualmente, descrição produz instrumentos de pesquisa), e não uma substitui a outra.' }
    ],
    gabarito: 'A',
    justificativa: 'A descrição documental consiste na elaboração de instrumentos de pesquisa (guias, inventários, catálogos, entre outros) que permitem identificar, localizar e conhecer o conteúdo dos documentos custodiados por um arquivo, facilitando seu acesso por pesquisadores e usuários.'
  },
  {
    id: 'arq_28',
    disciplina: 'arquivologia',
    topico: 'Diplomática - Elementos do Documento',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A Diplomática, disciplina auxiliar da Arquivologia voltada à análise da estrutura formal dos documentos, estuda principalmente:',
    alternativas: [
      { letra: 'A', texto: 'Os elementos internos e externos que compõem a forma dos documentos (como fórmulas, protocolo inicial e final, e assinatura), buscando aferir sua autenticidade e gênese.' },
      { letra: 'B', texto: 'Exclusivamente o suporte material em que o documento está registrado, sem análise de sua estrutura textual.', comentario: 'Incorreta. A Diplomática se dedica à análise da estrutura formal (elementos internos e externos) do documento, e não apenas do suporte material.' },
      { letra: 'C', texto: 'Os prazos de guarda e a destinação final dos documentos de arquivo.', comentario: 'Incorreta. Prazos de guarda e destinação final são objeto da avaliação documental e da tabela de temporalidade, e não da Diplomática, voltada à análise formal do documento.' },
      { letra: 'D', texto: 'A definição de qual entidade deve custodiar determinado fundo documental.', comentario: 'Incorreta. A definição de custódia é questão relacionada à gestão e à titularidade do arquivo, distinta do objeto de estudo da Diplomática, centrado na estrutura formal do documento.' }
    ],
    gabarito: 'A',
    justificativa: 'A Diplomática é a disciplina que estuda a estrutura formal dos documentos — seus elementos internos e externos, como fórmulas, protocolo inicial e final, datação e assinatura —, contribuindo para aferir a autenticidade, a gênese e a tradição documental.'
  },
  {
    id: 'arq_29',
    disciplina: 'arquivologia',
    topico: 'Arquivologia Digital - Autenticidade de Documentos',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'No contexto da gestão de documentos digitais/eletrônicos, a autenticidade de um documento está associada, principalmente:',
    alternativas: [
      { letra: 'A', texto: 'À garantia de que o documento é exatamente o que afirma ser, tendo sido produzido ou expedido pela pessoa ou entidade que dele consta como autora, sem alterações não autorizadas.' },
      { letra: 'B', texto: 'Exclusivamente ao tamanho do arquivo digital em bytes.', comentario: 'Incorreta. O tamanho do arquivo em bytes é uma característica técnica de armazenamento, sem relação com a garantia de autenticidade do documento.' },
      { letra: 'C', texto: 'À cor de fundo utilizada na interface do sistema de gestão documental.', comentario: 'Incorreta. Elementos de interface do sistema não guardam relação com a autenticidade do documento digital.' },
      { letra: 'D', texto: 'Ao número de vezes que o documento foi acessado por usuários do sistema.', comentario: 'Incorreta. O número de acessos é métrica de uso do sistema, sem relação direta com a garantia de que o documento é autêntico e não foi alterado indevidamente.' }
    ],
    gabarito: 'A',
    justificativa: 'A autenticidade de um documento (digital ou não) está relacionada à garantia de que ele é exatamente o que afirma ser, produzido ou expedido pela pessoa ou entidade que dele consta como autora, sem ter sofrido alteração, corrupção ou adulteração não autorizada.'
  },
  {
    id: 'arq_30',
    disciplina: 'arquivologia',
    topico: 'Classificação de Documentos quanto ao Suporte',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A classificação de documentos quanto ao suporte considera:',
    alternativas: [
      { letra: 'A', texto: 'O material físico sobre o qual as informações são registradas, como papel, filme, disco magnético ou disco óptico.' },
      { letra: 'B', texto: 'A natureza da informação e a forma de expressão do documento, como textual, iconográfico ou sonoro.', comentario: 'Incorreta. Essa é a classificação por GÊNERO, e não por suporte, que trata do material físico de registro da informação.' },
      { letra: 'C', texto: 'O grau de sigilo atribuído ao documento no momento de sua produção.', comentario: 'Incorreta. O grau de sigilo se relaciona à classificação quanto ao acesso (natureza do assunto), e não ao suporte físico do documento.' },
      { letra: 'D', texto: 'Exclusivamente o valor histórico ou probatório atribuído ao documento após avaliação.', comentario: 'Incorreta. O valor histórico/probatório decorre da avaliação documental, sem relação com a classificação por suporte, que trata do material físico de registro.' }
    ],
    gabarito: 'A',
    justificativa: 'A classificação por suporte considera o material físico em que as informações do documento estão registradas — como papel, filme, disco magnético, disco óptico —, distinguindo-se da classificação por gênero, que considera a natureza e a forma de expressão da informação.'
  },
  {
    id: 'arq_31',
    disciplina: 'arquivologia',
    topico: 'Teoria das Três Idades - Critério de Transferência entre Fases',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A passagem de documentos da fase corrente para a fase intermediária, e desta para a fase permanente, é orientada, principalmente, pelo critério:',
    alternativas: [
      { letra: 'A', texto: 'Da frequência de uso e do valor (primário e secundário) do documento, apurados por meio da avaliação documental, e não simplesmente pela idade cronológica do documento.' },
      { letra: 'B', texto: 'Exclusivamente da idade cronológica do documento, contada a partir da data de sua produção, independentemente de seu valor ou frequência de uso.', comentario: 'Incorreta. Embora a idade seja um fator considerado, a transferência entre as idades documentais é orientada, sobretudo, pela frequência de uso e pelo valor do documento apurado na avaliação, e não apenas por critério cronológico isolado.' },
      { letra: 'C', texto: 'Do tamanho físico do documento (número de páginas ou volume ocupado).', comentario: 'Incorreta. O tamanho físico do documento não é o critério que orienta sua transferência entre as idades documentais.' },
      { letra: 'D', texto: 'Da ordem alfabética do nome do titular do documento.', comentario: 'Incorreta. A ordem alfabética é um método de arquivamento, sem relação com o critério de transferência entre as fases da Teoria das Três Idades.' }
    ],
    gabarito: 'A',
    justificativa: 'A transição de um documento entre as fases corrente, intermediária e permanente é orientada, principalmente, pela frequência de uso administrativo e pelo valor (primário: administrativo, legal, fiscal; e secundário: histórico, probatório, informativo) apurado na avaliação documental, e não apenas pela idade cronológica isolada do documento.'
  },
  {
    id: 'arq_32',
    disciplina: 'arquivologia',
    topico: 'Arquivos Privados de Interesse Público e Social (Lei 8.159/1991)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo a Lei nº 8.159/1991, os arquivos privados podem ser identificados pelo Poder Público como de interesse público e social quando:',
    alternativas: [
      { letra: 'A', texto: 'Forem considerados de valor relevante para a história, a cultura e o desenvolvimento nacional, independentemente de serem de propriedade de pessoa física ou jurídica de direito privado.' },
      { letra: 'B', texto: 'Pertencerem, exclusivamente, a partidos políticos com representação no Congresso Nacional.', comentario: 'Incorreta. A lei não restringe a identificação de interesse público e social apenas a arquivos de partidos políticos; o critério é o valor relevante para a história, a cultura e o desenvolvimento nacional.' },
      { letra: 'C', texto: 'Forem automaticamente desapropriados pelo Estado, independentemente de qualquer procedimento específico.', comentario: 'Incorreta. A identificação de interesse público e social não implica desapropriação automática; trata-se de reconhecimento que impõe restrições, como a necessidade de autorização para saída do país de documentos originais.' },
      { letra: 'D', texto: 'Estiverem digitalizados e disponibilizados publicamente na internet.', comentario: 'Incorreta. A digitalização e a disponibilização online não são o critério legal de identificação de interesse público e social, que se baseia no valor histórico, cultural e de desenvolvimento nacional do acervo.' }
    ],
    gabarito: 'A',
    justificativa: 'A Lei nº 8.159/1991 prevê que os arquivos privados podem ser identificados pelo Poder Público como de interesse público e social quando considerados de valor relevante para a história, a cultura e o desenvolvimento nacional, gerando restrições como a necessidade de autorização para a saída de documentos originais do país.'
  }
];
