// ============================================================
// QUESTIONS_LEGISLACAO_PCPE — Legislação Especial/Estadual exclusiva
// do bloco "Noções de Direito" da PCPE (Polícia Civil de PE), banca
// Cebraspe, comum aos cargos de Agente e Escrivão. Cobre a Lei
// 6.425/1972 (Estatuto dos Policiais Civis de PE) e a Lei 14.735/2023
// (Lei Orgânica Nacional das Polícias Civis - LONPC), ambas
// pesquisadas em fontes oficiais (Alepe Legis e Planalto/Câmara).
// ============================================================

const QUESTIONS_LEGISLACAO_PCPE = [
  {
    id: 'pcpe_leg_1',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 6.425/1972 - Fundamento da Função Policial',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Nos termos do art. 4º da Lei nº 6.425/1972 (Estatuto dos Policiais Civis de Pernambuco), a função policial fundamenta-se em:',
    alternativas: [
      { letra: 'A', texto: 'Hierarquia e disciplina, com compatibilidade limitada de outras atividades.' },
      { letra: 'B', texto: 'Autonomia plena, sem qualquer vínculo hierárquico entre os cargos.', comentario: 'Incorreta. O art. 4º estabelece justamente a hierarquia (e a disciplina) como fundamento da função policial, e não autonomia sem vínculo hierárquico.' },
      { letra: 'C', texto: 'Delegação direta do Poder Judiciário, dispensando vínculo com o Poder Executivo estadual.', comentario: 'Incorreta. A polícia civil integra a estrutura do Poder Executivo estadual, não sendo delegação do Poder Judiciário.' },
      { letra: 'D', texto: 'Livre exercício de qualquer outra atividade remunerada, sem restrições.', comentario: 'Incorreta. A lei admite apenas compatibilidade LIMITADA com outras atividades, e não livre exercício sem restrições, dada a natureza da função policial.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 4º da Lei 6.425/1972',
    justificativa: 'O art. 4º estabelece que a função policial se fundamenta na hierarquia e na disciplina, admitindo apenas compatibilidade limitada com outras atividades, dada a natureza da função policial civil.'
  },
  {
    id: 'pcpe_leg_2',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 6.425/1972 - Formas de Provimento',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Sobre as formas de provimento nos cargos do Quadro de Pessoal Policial de Pernambuco, previstas na Lei nº 6.425/1972, é correto afirmar que incluem:',
    alternativas: [
      { letra: 'A', texto: 'Nomeação, acesso, promoção, reintegração, aproveitamento, reversão e transferência.' },
      { letra: 'B', texto: 'Apenas nomeação, sendo vedadas outras formas de provimento.', comentario: 'Incorreta. A lei prevê diversas formas de provimento além da nomeação, como acesso, promoção, reintegração, aproveitamento, reversão e transferência.' },
      { letra: 'C', texto: 'Exclusivamente promoção por antiguidade, sem concurso público.', comentario: 'Incorreta. O concurso público (nomeação) é uma das formas de provimento previstas, ao lado de outras, não se restringindo à promoção por antiguidade.' },
      { letra: 'D', texto: 'Somente transferência entre órgãos da administração direta.', comentario: 'Incorreta. A transferência é apenas uma das formas de provimento previstas, ao lado de nomeação, acesso, promoção, reintegração, aproveitamento e reversão.' }
    ],
    gabarito: 'A',
    artigo: 'Título II, Capítulo I, da Lei 6.425/1972',
    justificativa: 'O Capítulo I do Título II da lei prevê como formas de provimento a nomeação, o acesso, a promoção, a reintegração, o aproveitamento, a reversão e a transferência.'
  },
  {
    id: 'pcpe_leg_3',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 6.425/1972 - Sistema de Provimento Inicial',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Segundo a Lei nº 6.425/1972, o provimento dos cargos iniciais da carreira policial civil de Pernambuco observa, em regra:',
    alternativas: [
      { letra: 'A', texto: 'Sistema misto, com parte das vagas providas por nomeação externa (concurso) e parte por acesso interno.' },
      { letra: 'B', texto: 'Provimento exclusivamente por acesso interno, vedado concurso público externo.', comentario: 'Incorreta. A lei prevê sistema misto, reservando também percentual para nomeação externa via concurso público, e não apenas acesso interno.' },
      { letra: 'C', texto: 'Provimento exclusivamente por concurso externo, sem qualquer reserva para acesso interno.', comentario: 'Incorreta. Há também reserva de percentual para acesso interno dos já integrantes da carreira, não sendo o provimento exclusivamente por concurso externo.' },
      { letra: 'D', texto: 'Sistema de livre nomeação pelo Governador, sem concurso público.', comentario: 'Incorreta. O ingresso nos cargos iniciais da carreira depende de concurso público, e não de livre nomeação política.' }
    ],
    gabarito: 'A',
    artigo: 'Título II, Capítulo II, da Lei 6.425/1972',
    justificativa: 'A lei prevê sistema misto de provimento nos cargos iniciais da carreira, reservando percentual para nomeação externa (concurso público) e percentual para acesso interno dos já integrantes da carreira.'
  },
  {
    id: 'pcpe_leg_4',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 6.425/1972 - Deveres do Funcionário Policial',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Nos termos do art. 30 da Lei nº 6.425/1972, os deveres do funcionário policial civil de Pernambuco somam-se:',
    alternativas: [
      { letra: 'A', texto: 'Aos deveres já inerentes aos demais funcionários públicos civis do Estado.' },
      { letra: 'B', texto: 'Aos deveres exclusivos dos militares estaduais, aplicados por analogia.', comentario: 'Incorreta. O art. 30 remete aos deveres dos funcionários públicos CIVIS, e não aos deveres militares aplicados por analogia.' },
      { letra: 'C', texto: 'A nenhum outro dever, sendo regime totalmente autônomo em relação aos demais servidores.', comentario: 'Incorreta. O próprio art. 30 estabelece que os deveres do policial civil se somam aos dos demais funcionários públicos civis, não havendo autonomia total.' },
      { letra: 'D', texto: 'Apenas aos deveres previstos em normas internas de cada delegacia, sem previsão legal específica.', comentario: 'Incorreta. Os deveres estão previstos em lei (art. 30 da Lei 6.425/1972), e não apenas em normas internas de cada unidade.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 30 da Lei 6.425/1972',
    justificativa: 'O art. 30 estabelece que são deveres do funcionário policial, ALÉM daqueles inerentes aos demais funcionários públicos civis, obrigações específicas decorrentes da natureza da função policial.'
  },
  {
    id: 'pcpe_leg_5',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 6.425/1972 - Transgressões Disciplinares',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'As transgressões disciplinares do policial civil de Pernambuco estão previstas, na Lei nº 6.425/1972, no:',
    alternativas: [
      { letra: 'A', texto: 'Art. 31, que enumera um rol de infrações (incisos I a XLVIII).' },
      { letra: 'B', texto: 'Art. 4º, que trata apenas do fundamento hierárquico da função.', comentario: 'Incorreta. O art. 4º trata do fundamento da função policial na hierarquia e disciplina, e não do rol de transgressões disciplinares.' },
      { letra: 'C', texto: 'Art. 82, que trata da promoção por invalidez em serviço.', comentario: 'Incorreta. O art. 82 trata de disposição final sobre promoção por invalidez em serviço, e não do rol de transgressões disciplinares.' },
      { letra: 'D', texto: 'Art. 83, que trata de pensão especial aos beneficiários.', comentario: 'Incorreta. O art. 83 trata da pensão especial aos beneficiários do policial falecido em serviço, e não do rol de transgressões disciplinares.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 31 da Lei 6.425/1972',
    justificativa: 'O art. 31 enumera as transgressões disciplinares dos policiais civis, em rol de 48 incisos (I a XLVIII), incluindo condutas como acúmulo ilícito de cargos e divulgação indevida de informações funcionais.'
  },
  {
    id: 'pcpe_leg_6',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 6.425/1972 - Penas Disciplinares',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Assinale a alternativa que apresenta, na ordem crescente de gravidade prevista no art. 34 da Lei nº 6.425/1972, as penas disciplinares aplicáveis ao policial civil de Pernambuco:',
    alternativas: [
      { letra: 'A', texto: 'Repreensão, multa, suspensão, detenção disciplinar, destituição de função, demissão e cassação de aposentadoria ou disponibilidade.' },
      { letra: 'B', texto: 'Demissão, suspensão, repreensão, multa, destituição, cassação e detenção disciplinar.', comentario: 'Incorreta. A ordem está fora da sequência de gravidade crescente prevista no art. 34, que começa pela repreensão (mais branda) e termina na cassação de aposentadoria ou disponibilidade (mais grave).' },
      { letra: 'C', texto: 'Apenas repreensão e demissão, sem outras modalidades intermediárias.', comentario: 'Incorreta. O art. 34 prevê sete modalidades de penas disciplinares, não apenas repreensão e demissão.' },
      { letra: 'D', texto: 'Suspensão, repreensão, cassação, multa, demissão, destituição e detenção disciplinar.', comentario: 'Incorreta. A ordem apresentada não corresponde à sequência de gravidade crescente estabelecida no art. 34.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 34 da Lei 6.425/1972',
    justificativa: 'O art. 34 lista, em ordem crescente de gravidade, as sete penas disciplinares: I - repreensão; II - multa; III - suspensão; IV - detenção disciplinar; V - destituição de função; VI - demissão; VII - cassação de aposentadoria ou disponibilidade.'
  },
  {
    id: 'pcpe_leg_7',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 6.425/1972 - Processo Disciplinar',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'No âmbito do processo disciplinar da Lei nº 6.425/1972, a apuração de infrações disciplinares pode se dar por meio de:',
    alternativas: [
      { letra: 'A', texto: 'Sindicância e inquérito disciplinar, conduzidos, entre outros órgãos, pelas Comissões Permanentes de Disciplina.' },
      { letra: 'B', texto: 'Exclusivamente decisão verbal e imediata do superior hierárquico, sem qualquer procedimento formal.', comentario: 'Incorreta. A lei exige procedimento formal (sindicância ou inquérito disciplinar), e não mera decisão verbal e imediata sem processo.' },
      { letra: 'C', texto: 'Apenas decisão do Conselho Superior de Polícia, vedada qualquer sindicância prévia.', comentario: 'Incorreta. A sindicância e o inquérito disciplinar são os instrumentos previstos para apuração, e não decisão isolada do Conselho Superior de Polícia.' },
      { letra: 'D', texto: 'Exclusivamente via judicial, sendo vedada a apuração administrativa.', comentario: 'Incorreta. A apuração disciplinar é administrativa, conduzida pela própria instituição (sindicância/inquérito disciplinar), sem prejuízo de eventual esfera judicial autônoma.' }
    ],
    gabarito: 'A',
    artigo: 'Título IV da Lei 6.425/1972',
    justificativa: 'O Título IV disciplina o processo disciplinar, prevendo a sindicância e o inquérito disciplinar como instrumentos de apuração, com participação das Comissões Permanentes de Disciplina.'
  },
  {
    id: 'pcpe_leg_8',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 6.425/1972 - Medalha do Mérito Policial',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'A Medalha do Mérito Policial, prevista na Lei nº 6.425/1972, é concedida:',
    alternativas: [
      { letra: 'A', texto: 'Em diferentes classes, como ouro, prata e bronze, conforme os critérios estabelecidos em lei.' },
      { letra: 'B', texto: 'Em uma única classe, sem distinção de níveis de mérito.', comentario: 'Incorreta. A lei prevê classes distintas para a Medalha do Mérito Policial (ouro, prata e bronze), e não uma única classe.' },
      { letra: 'C', texto: 'Apenas a delegados de polícia, sendo vedada a outras categorias do Quadro de Pessoal Policial.', comentario: 'Incorreta. A Medalha do Mérito Policial não se restringe a delegados, podendo ser concedida a outras categorias do Quadro de Pessoal Policial que preencham os critérios legais.' },
      { letra: 'D', texto: 'Exclusivamente por tempo de serviço, sem qualquer outro critério de mérito.', comentario: 'Incorreta. A concessão da medalha considera critérios de mérito estabelecidos em lei, e não apenas o tempo de serviço.' }
    ],
    gabarito: 'A',
    artigo: 'Título V da Lei 6.425/1972',
    justificativa: 'O Título V institui a Medalha do Mérito Policial, distribuída em classes (ouro, prata e bronze), reconhecendo o mérito do servidor conforme os critérios legais.'
  },
  {
    id: 'pcpe_leg_9',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 6.425/1972 - Conselho Superior de Polícia',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O Conselho Superior de Polícia, previsto na Lei nº 6.425/1972, exerce atribuições de natureza:',
    alternativas: [
      { letra: 'A', texto: 'Consultiva e normativa, no âmbito da organização policial civil do Estado.' },
      { letra: 'B', texto: 'Exclusivamente jurisdicional, com competência para julgar crimes praticados por policiais civis.', comentario: 'Incorreta. O julgamento de crimes é função do Poder Judiciário; o Conselho Superior de Polícia exerce atribuições consultivas e normativas administrativas, não jurisdicionais.' },
      { letra: 'C', texto: 'Meramente cerimonial, sem qualquer atribuição normativa ou consultiva.', comentario: 'Incorreta. O Conselho Superior de Polícia possui atribuições concretas de natureza consultiva e normativa, não sendo órgão meramente cerimonial.' },
      { letra: 'D', texto: 'Executiva, substituindo as funções do Delegado-Geral da Polícia Civil.', comentario: 'Incorreta. As funções executivas de direção da instituição cabem ao Delegado-Geral, e não ao Conselho Superior de Polícia, de natureza consultiva/normativa.' }
    ],
    gabarito: 'A',
    artigo: 'Título VI da Lei 6.425/1972',
    justificativa: 'O Conselho Superior de Polícia tem atribuições consultivas e normativas relacionadas à organização e ao funcionamento da polícia civil do Estado.'
  },
  {
    id: 'pcpe_leg_10',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 6.425/1972 - Pensão Especial',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Nos termos do art. 83 da Lei nº 6.425/1972, a pensão especial aos beneficiários do policial civil está prevista para os casos de:',
    alternativas: [
      { letra: 'A', texto: 'Morte do servidor em razão do exercício da função policial.' },
      { letra: 'B', texto: 'Aposentadoria voluntária por tempo de contribuição, sem relação com risco da função.', comentario: 'Incorreta. A pensão especial do art. 83 está vinculada à morte do servidor em decorrência do exercício da função, e não à aposentadoria voluntária comum.' },
      { letra: 'C', texto: 'Exoneração a pedido do próprio servidor.', comentario: 'Incorreta. A exoneração a pedido não gera a pensão especial prevista no art. 83, vinculada à morte em serviço.' },
      { letra: 'D', texto: 'Mudança de lotação para outro município do Estado.', comentario: 'Incorreta. A simples mudança de lotação não guarda relação com a pensão especial, vinculada à morte do servidor em razão da função.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 83 da Lei 6.425/1972',
    justificativa: 'O art. 83 prevê pensão especial aos beneficiários do policial civil falecido em decorrência do exercício da função, reconhecendo o risco inerente à atividade policial.'
  },
  {
    id: 'pcpe_leg_11',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 14.735/2023 (LONPC) - Natureza Institucional',
    peso: 2,
    dificuldade: 'medio',
    enunciado: 'De acordo com a Lei nº 14.735/2023 (Lei Orgânica Nacional das Polícias Civis), as polícias civis são instituições:',
    alternativas: [
      { letra: 'A', texto: 'Permanentes, com funções exclusivas e típicas de Estado, essenciais à justiça criminal e imprescindíveis à segurança pública.' },
      { letra: 'B', texto: 'Transitórias, subordinadas hierarquicamente às polícias militares estaduais.', comentario: 'Incorreta. As polícias civis são instituições permanentes e não são subordinadas hierarquicamente às polícias militares; cada corporação tem estrutura e comando próprios.' },
      { letra: 'C', texto: 'De natureza privada, prestando serviço mediante convênio com o Estado.', comentario: 'Incorreta. As polícias civis são instituições públicas permanentes, integrantes da estrutura do Poder Executivo estadual, e não entidades privadas conveniadas.' },
      { letra: 'D', texto: 'Auxiliares do Poder Legislativo estadual, sem vínculo com a segurança pública.', comentario: 'Incorreta. As polícias civis são essenciais à justiça criminal e imprescindíveis à segurança pública, sem relação de auxiliaridade ao Poder Legislativo.' }
    ],
    gabarito: 'A',
    artigo: 'Lei 14.735/2023',
    justificativa: 'A Lei Orgânica Nacional das Polícias Civis (LONPC) estabelece que as polícias civis são instituições permanentes, com funções exclusivas e típicas de Estado, essenciais à justiça criminal e imprescindíveis à segurança pública e à garantia dos direitos fundamentais no âmbito da investigação criminal, integrando o Sistema Único de Segurança Pública (Susp).'
  },
  {
    id: 'pcpe_leg_12',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 14.735/2023 (LONPC) - Funções Exclusivas',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Nos termos do art. 6º da Lei nº 14.735/2023, constitui função exclusiva da polícia civil, entre outras:',
    alternativas: [
      { letra: 'A', texto: 'Cumprir mandados de prisão e de busca e apreensão, além de assegurar a cadeia de custódia da prova.' },
      { letra: 'B', texto: 'Julgar processos criminais em primeira instância.', comentario: 'Incorreta. Julgar processos criminais é função jurisdicional, exercida pelo Poder Judiciário, e não pela polícia civil.' },
      { letra: 'C', texto: 'Definir o orçamento anual do Poder Judiciário estadual.', comentario: 'Incorreta. A definição orçamentária do Judiciário não é função da polícia civil, que atua na investigação criminal e apuração de infrações penais.' },
      { letra: 'D', texto: 'Editar normas gerais de processo civil aplicáveis a todo o território nacional.', comentario: 'Incorreta. A edição de normas gerais de processo civil é matéria de competência legislativa da União (art. 22, I, CF), sem relação com as funções exclusivas da polícia civil.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 6º da Lei 14.735/2023',
    justificativa: 'O art. 6º estabelece as funções exclusivas da polícia civil relacionadas à investigação criminal e à apuração de infrações penais, incluindo o cumprimento de mandados de prisão e de busca e apreensão e a garantia da cadeia de custódia da prova, restritas aos policiais civis da ativa (§1º).'
  },
  {
    id: 'pcpe_leg_13',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 14.735/2023 (LONPC) - Estrutura Organizacional',
    peso: 2,
    dificuldade: 'medio',
    enunciado: 'Segundo o art. 7º da Lei nº 14.735/2023, integra a estrutura organizacional básica das polícias civis, entre outros órgãos:',
    alternativas: [
      { letra: 'A', texto: 'A Corregedoria-Geral de Polícia Civil e a Escola Superior de Polícia Civil.' },
      { letra: 'B', texto: 'O Tribunal de Justiça do Estado, incorporado à estrutura da polícia civil.', comentario: 'Incorreta. O Tribunal de Justiça integra o Poder Judiciário, órgão distinto e independente da estrutura organizacional da polícia civil.' },
      { letra: 'C', texto: 'A Assembleia Legislativa estadual, como órgão de controle externo direto.', comentario: 'Incorreta. A Assembleia Legislativa é órgão do Poder Legislativo, não integrando a estrutura organizacional básica da polícia civil.' },
      { letra: 'D', texto: 'O Ministério Público estadual, como órgão interno da polícia civil.', comentario: 'Incorreta. O Ministério Público é instituição autônoma e independente, não sendo órgão interno da estrutura da polícia civil.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 7º da Lei 14.735/2023',
    justificativa: 'O art. 7º prevê a estrutura organizacional básica das polícias civis, composta por Delegacia-Geral, Conselho Superior de Polícia Civil, Corregedoria-Geral, Escola Superior de Polícia Civil, unidades de execução, de inteligência, técnico-científicas, de apoio administrativo e estratégico, de saúde e de tecnologia.'
  },
  {
    id: 'pcpe_leg_14',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 14.735/2023 (LONPC) - Delegado-Geral',
    peso: 2,
    dificuldade: 'medio',
    enunciado: 'O Delegado-Geral de Polícia Civil, segundo o art. 8º da Lei nº 14.735/2023, é:',
    alternativas: [
      { letra: 'A', texto: 'Nomeado pelo governador do Estado, escolhido entre delegados de polícia em atividade da classe mais elevada.' },
      { letra: 'B', texto: 'Eleito diretamente pelos delegados de polícia do Estado, por votação da categoria.', comentario: 'Incorreta. O art. 8º prevê nomeação pelo governador do Estado, e não eleição direta pela categoria.' },
      { letra: 'C', texto: 'Nomeado pelo Presidente da República, independentemente de indicação estadual.', comentario: 'Incorreta. A nomeação do Delegado-Geral, cargo de dirigente estadual, cabe ao governador do Estado, e não ao Presidente da República.' },
      { letra: 'D', texto: 'Cargo rotativo, ocupado automaticamente pelo delegado mais antigo, sem ato de nomeação.', comentario: 'Incorreta. O cargo depende de ato formal de nomeação pelo governador, e não de rodízio automático por antiguidade.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 8º da Lei 14.735/2023',
    justificativa: 'O art. 8º estabelece que o Delegado-Geral de Polícia Civil é nomeado pelo governador do Estado, escolhido entre delegados de polícia em atividade, da classe mais elevada da carreira.'
  },
  {
    id: 'pcpe_leg_15',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 14.735/2023 (LONPC) - Garantia do Porte de Arma',
    peso: 2,
    dificuldade: 'medio',
    enunciado: 'Entre as garantias asseguradas ao policial civil pelo art. 30 da Lei nº 14.735/2023, está o porte de arma de fogo:',
    alternativas: [
      { letra: 'A', texto: 'Válido em todo o território nacional, inclusive após a aposentadoria.' },
      { letra: 'B', texto: 'Restrito ao território do Estado em que o policial estiver lotado, mesmo durante a atividade.', comentario: 'Incorreta. A garantia legal é de porte de arma válido em TODO o território nacional, e não restrito ao Estado de lotação.' },
      { letra: 'C', texto: 'Vedado durante o período de férias ou licença.', comentario: 'Incorreta. A lei não veda o porte de arma durante férias ou licença; a garantia é ampla, sem essa restrição temporal.' },
      { letra: 'D', texto: 'Extinto automaticamente com a aposentadoria do servidor.', comentario: 'Incorreta. A lei assegura expressamente a manutenção do porte de arma mesmo após a aposentadoria do policial civil.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 30 da Lei 14.735/2023',
    justificativa: 'Entre as garantias do art. 30 está o porte de arma de fogo válido em todo o território nacional, direito que se mantém mesmo após a aposentadoria do policial civil.'
  },
  {
    id: 'pcpe_leg_16',
    disciplina: 'legislacao_pcpe',
    topico: 'Lei 14.735/2023 (LONPC) - Prisão Especial e Livre Trânsito',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Ainda segundo o art. 30 da Lei nº 14.735/2023, constituem garantias do policial civil:',
    alternativas: [
      { letra: 'A', texto: 'O recolhimento em unidade prisional da própria instituição, em caso de prisão, e o livre acesso e trânsito em razão da função, respeitadas as garantias constitucionais.' },
      { letra: 'B', texto: 'A imunidade penal absoluta por atos praticados no exercício da função, mesmo fora da legalidade.', comentario: 'Incorreta. Não há imunidade penal absoluta; o policial civil responde penalmente por atos ilícitos, ainda que praticados no exercício da função.' },
      { letra: 'C', texto: 'A dispensa de qualquer processo disciplinar, ainda que pratique infração funcional grave.', comentario: 'Incorreta. O policial civil está sujeito a processo disciplinar em caso de infração funcional, não havendo dispensa por força dessa garantia.' },
      { letra: 'D', texto: 'A vedação de comparecimento como testemunha em processos judiciais.', comentario: 'Incorreta. Não há vedação legal ao comparecimento do policial civil como testemunha em processos judiciais; essa não é uma das garantias do art. 30.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 30 da Lei 14.735/2023',
    justificativa: 'O art. 30 assegura, entre outras garantias, a prisão especial (recolhimento em unidade prisional da própria instituição), o livre acesso e trânsito em qualquer recinto público ou privado em razão da função (respeitadas as garantias constitucionais e legais), e a prioridade em serviços de transporte e comunicação em missão emergencial.'
  }
];
