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
  }
];
