// ============================================================
// QUESTIONS_HISTORIA_PE — Disciplina "História de Pernambuco",
// exclusiva do curso PMPE (Polícia Militar de PE), banca AOCP.
// Disciplina 100% nova no banco do app (não confundir com
// QUESTIONS_HISTORIA, que trata da história do Rio Grande do Norte,
// usada pelo PPRN). Conteúdo verificado antes da escrita: Duarte
// Coelho e fundação de Olinda, invasão holandesa e governo de
// Nassau, Insurreição Pernambucana, Guerra dos Mascates, Revolução
// Pernambucana de 1817, Confederação do Equador, Guerra dos
// Cabanos (Cabanada), Revolução Praieira, e cultura popular
// (frevo, maracatu).
// ============================================================

const QUESTIONS_HISTORIA_PE = [
  {
    id: 'hist_pe_1',
    disciplina: 'historia_pe',
    topico: 'Capitania de Pernambuco - Duarte Coelho',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Duarte Coelho Pereira, donatário da Capitania de Pernambuco, chegou ao Brasil em 1535 e é reconhecido, principalmente, por:',
    alternativas: [
      { letra: 'A', texto: 'Fundar a vila de Olinda, que se tornou o principal núcleo administrativo e econômico da capitania.' },
      { letra: 'B', texto: 'Expulsar definitivamente os holandeses de Pernambuco no século XVI.', comentario: 'Incorreta. A expulsão dos holandeses ocorreu apenas no século XVII (1654), mais de cem anos após a chegada de Duarte Coelho, e não foi obra sua.' },
      { letra: 'C', texto: 'Proclamar a independência de Pernambuco em relação a Portugal.', comentario: 'Incorreta. Duarte Coelho foi donatário a serviço da Coroa portuguesa; movimentos de cunho emancipacionista em Pernambuco só surgiriam séculos depois (como a Revolução Pernambucana de 1817).' },
      { letra: 'D', texto: 'Introduzir o cultivo do café como principal atividade econômica da capitania.', comentario: 'Incorreta. A economia da Capitania de Pernambuco se estruturou, desde o período de Duarte Coelho, em torno da cana-de-açúcar, e não do café.' }
    ],
    gabarito: 'A',
    justificativa: 'Duarte Coelho Pereira, primeiro donatário da Capitania de Pernambuco, chegou ao Brasil em 1535 e fundou a vila de Olinda, que se tornaria o principal centro administrativo e econômico da capitania, baseada na produção açucareira.'
  },
  {
    id: 'hist_pe_2',
    disciplina: 'historia_pe',
    topico: 'Invasão Holandesa - Início e Motivação',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A invasão holandesa a Pernambuco, iniciada em 1630 sob o comando da Companhia das Índias Ocidentais, teve como principal motivação:',
    alternativas: [
      { letra: 'A', texto: 'O interesse em dominar o lucrativo comércio açucareiro produzido na capitania e comercializá-lo diretamente nos principais mercados europeus.' },
      { letra: 'B', texto: 'A busca por jazidas de ouro e pedras preciosas na região da Zona da Mata pernambucana.', comentario: 'Incorreta. Não havia exploração relevante de ouro ou pedras preciosas em Pernambuco; o interesse holandês estava centrado no comércio do açúcar.' },
      { letra: 'C', texto: 'Um pedido formal de auxílio militar feito pelos senhores de engenho de Olinda contra a Coroa portuguesa.', comentario: 'Incorreta. A invasão foi uma ação militar da Companhia das Índias Ocidentais Holandesa, e não um auxílio solicitado pelos senhores de engenho locais.' },
      { letra: 'D', texto: 'A expansão religiosa protestante como objetivo prioritário da ocupação.', comentario: 'Incorreta. Embora houvesse componente religioso no contexto europeu da época, o motivo central e determinante da invasão foi o interesse econômico no comércio açucareiro.' }
    ],
    gabarito: 'A',
    justificativa: 'A invasão holandesa, iniciada em 1630, foi promovida pela Companhia das Índias Ocidentais com o objetivo principal de dominar a produção e o comércio do açúcar de Pernambuco, então o produto colonial mais valorizado nos mercados europeus.'
  },
  {
    id: 'hist_pe_3',
    disciplina: 'historia_pe',
    topico: 'Governo de Maurício de Nassau',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'O período do governo de Maurício de Nassau em Pernambuco (1637-1643), no contexto da ocupação holandesa, caracterizou-se por:',
    alternativas: [
      { letra: 'A', texto: 'Investimentos em obras urbanísticas, científicas e artísticas no Recife, buscando maior tolerância religiosa e estabilidade administrativa na colônia.' },
      { letra: 'B', texto: 'Total abandono da administração colonial, sem qualquer investimento em infraestrutura ou cultura na região ocupada.', comentario: 'Incorreta. O governo de Nassau é justamente reconhecido, na historiografia, pelos investimentos em urbanismo, ciência e artes, e não pelo abandono administrativo.' },
      { letra: 'C', texto: 'A expulsão imediata de toda a população portuguesa remanescente logo no início de seu governo.', comentario: 'Incorreta. Nassau adotou postura de maior tolerância e convivência com a população local, buscando estabilidade, e não uma expulsão imediata e generalizada.' },
      { letra: 'D', texto: 'A proibição total do comércio açucareiro durante toda a ocupação holandesa.', comentario: 'Incorreta. O comércio açucareiro era justamente o principal interesse da ocupação holandesa, sendo incentivado, e não proibido, durante o período.' }
    ],
    gabarito: 'A',
    justificativa: 'Maurício de Nassau governou a colônia holandesa em Pernambuco entre 1637 e 1643, período marcado por importantes investimentos urbanísticos, científicos e artísticos no Recife, além de uma política de maior tolerância religiosa, visando estabilizar a administração da colônia.'
  },
  {
    id: 'hist_pe_4',
    disciplina: 'historia_pe',
    topico: 'Insurreição Pernambucana - Expulsão dos Holandeses',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A Insurreição Pernambucana, movimento luso-brasileiro de resistência à ocupação holandesa, culminou, em 1654, com:',
    alternativas: [
      { letra: 'A', texto: 'A expulsão definitiva dos holandeses de Pernambuco, encerrando o período de dominação neerlandesa no Nordeste açucareiro.' },
      { letra: 'B', texto: 'A anexação definitiva de Pernambuco aos Países Baixos, com reconhecimento formal da Coroa portuguesa.', comentario: 'Incorreta. O desfecho da Insurreição Pernambucana foi exatamente o oposto: a retomada da região pelos luso-brasileiros e a expulsão dos holandeses.' },
      { letra: 'C', texto: 'A assinatura de um tratado que dividia Pernambuco em duas administrações permanentes, uma holandesa e outra portuguesa.', comentario: 'Incorreta. Não houve divisão administrativa permanente; os holandeses foram expulsos e a capitania voltou ao domínio português.' },
      { letra: 'D', texto: 'A transferência da capital da capitania de Olinda para Salvador.', comentario: 'Incorreta. A questão da transferência de capital dentro de Pernambuco (de Olinda para Recife) ocorreria mais tarde, no contexto da Guerra dos Mascates, sem relação com Salvador nem com o desfecho da Insurreição.' }
    ],
    gabarito: 'A',
    justificativa: 'A Insurreição Pernambucana, iniciada em 1645, culminou em 1654 com a expulsão definitiva dos holandeses de Pernambuco, encerrando o período de dominação neerlandesa no Nordeste açucareiro brasileiro.'
  },
  {
    id: 'hist_pe_5',
    disciplina: 'historia_pe',
    topico: 'Guerra dos Mascates - Contexto e Grupos Envolvidos',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A Guerra dos Mascates (1710-1711), movimento de caráter nativista, opôs, em Pernambuco:',
    alternativas: [
      { letra: 'A', texto: 'Os senhores de engenho de Olinda, de tradição aristocrática, aos comerciantes portugueses (mascates) estabelecidos em Recife, então em ascensão econômica.' },
      { letra: 'B', texto: 'Tropas holandesas remanescentes da invasão do século XVII às autoridades portuguesas recém-chegadas.', comentario: 'Incorreta. A Guerra dos Mascates ocorreu décadas após a expulsão holandesa (1654) e envolveu grupos internos da própria sociedade pernambucana, e não remanescentes holandeses.' },
      { letra: 'C', texto: 'Escravizados revoltosos do Recife às tropas do governo colonial.', comentario: 'Incorreta. A Guerra dos Mascates foi um conflito entre grupos da elite local (senhores de engenho olindenses e comerciantes recifenses), não uma revolta de escravizados.' },
      { letra: 'D', texto: 'A Igreja Católica ao governo da capitania, em disputa por terras.', comentario: 'Incorreta. O conflito central da Guerra dos Mascates se deu entre senhores de engenho de Olinda e comerciantes (mascates) de Recife, e não entre Igreja e governo.' }
    ],
    gabarito: 'A',
    justificativa: 'A Guerra dos Mascates (1710-1711) foi um conflito nativista entre os senhores de engenho de Olinda, tradicionalmente dominantes na política da capitania, e os comerciantes portugueses (pejorativamente chamados de "mascates") estabelecidos em Recife, cujo crescimento econômico ameaçava a hegemonia olindense.'
  },
  {
    id: 'hist_pe_6',
    disciplina: 'historia_pe',
    topico: 'Guerra dos Mascates - Elevação de Recife a Vila',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Um dos estopins da Guerra dos Mascates foi a elevação de Recife à categoria de vila, medida que:',
    alternativas: [
      { letra: 'A', texto: 'Tornava Recife administrativamente independente de Olinda, retirando desta o controle político sobre o crescente povoado comercial recifense.' },
      { letra: 'B', texto: 'Subordinava definitivamente Recife à administração de Olinda, ampliando o poder político dos senhores de engenho.', comentario: 'Incorreta. A elevação de Recife a vila foi justamente o contrário: retirou a subordinação de Recife a Olinda, gerando forte reação dos senhores de engenho olindenses.' },
      { letra: 'C', texto: 'Transferia a sede da capitania de Pernambuco para a Bahia.', comentario: 'Incorreta. A medida dizia respeito à relação interna entre Olinda e Recife, dentro da própria capitania de Pernambuco, sem qualquer transferência para a Bahia.' },
      { letra: 'D', texto: 'Concedia aos mascates o monopólio da produção açucareira da região.', comentario: 'Incorreta. A elevação a vila era uma medida administrativa (autonomia política de Recife), e não uma concessão de monopólio sobre a produção de açúcar.' }
    ],
    gabarito: 'A',
    justificativa: 'A elevação de Recife à categoria de vila, tornando-a administrativamente independente de Olinda, foi um dos fatores que desencadearam a Guerra dos Mascates, ao retirar dos senhores de engenho olindenses o controle político sobre o povoado comercial recifense, então em ascensão econômica.'
  },
  {
    id: 'hist_pe_7',
    disciplina: 'historia_pe',
    topico: 'Revolução Pernambucana de 1817 - Caráter do Movimento',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A Revolução Pernambucana de 1817, também conhecida como Revolução dos Padres, caracterizou-se, principalmente, por ser um movimento de cunho:',
    alternativas: [
      { letra: 'A', texto: 'Emancipacionista e republicano, influenciado por ideais iluministas e pela Revolução Francesa, contrário à monarquia portuguesa.' },
      { letra: 'B', texto: 'Estritamente religioso, sem qualquer conteúdo político ou pretensão de mudança na forma de governo.', comentario: 'Incorreta. Apesar da forte participação de padres (daí o nome "Revolução dos Padres"), o movimento teve nítido conteúdo político emancipacionista e republicano, e não caráter estritamente religioso.' },
      { letra: 'C', texto: 'Monarquista, com o objetivo de fortalecer o poder de D. João VI sobre a capitania.', comentario: 'Incorreta. O movimento tinha justamente caráter emancipacionista e republicano, contrário à manutenção da monarquia portuguesa sobre a região.' },
      { letra: 'D', texto: 'Estritamente militar, sem qualquer participação de civis ou do clero.', comentario: 'Incorreta. O movimento teve ampla participação de civis e, sobretudo, de padres — daí a alcunha "Revolução dos Padres" —, além de militares.' }
    ],
    gabarito: 'A',
    justificativa: 'A Revolução Pernambucana de 1817 foi um movimento emancipacionista e republicano, influenciado pelos ideais iluministas e pela Revolução Francesa, que pretendia romper os laços com a monarquia portuguesa, tendo recebido o apelido de "Revolução dos Padres" pela forte participação do clero em sua liderança.'
  },
  {
    id: 'hist_pe_8',
    disciplina: 'historia_pe',
    topico: 'Confederação do Equador (1824)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A Confederação do Equador, proclamada em 1824 por Manuel de Carvalho Paes de Andrade, teve como um dos principais fatores desencadeantes:',
    alternativas: [
      { letra: 'A', texto: 'A insatisfação com a outorga da Constituição de 1824 por D. Pedro I, após a dissolução da Assembleia Constituinte de 1823.' },
      { letra: 'B', texto: 'A comemoração da independência do Brasil, sem qualquer conflito com o governo de D. Pedro I.', comentario: 'Incorreta. A Confederação do Equador foi um movimento de reação e conflito com o governo de D. Pedro I, e não uma simples comemoração da independência.' },
      { letra: 'C', texto: 'Um pedido do próprio Imperador para a criação de uma nova província no Nordeste.', comentario: 'Incorreta. O movimento surgiu como reação contrária à centralização política de D. Pedro I, e não por iniciativa ou pedido do próprio Imperador.' },
      { letra: 'D', texto: 'A adesão voluntária e pacífica de Pernambuco ao Império, sem qualquer tensão política.', comentario: 'Incorreta. A Confederação do Equador representou justamente uma ruptura política e um confronto armado com o governo imperial, e não uma adesão pacífica.' }
    ],
    gabarito: 'A',
    justificativa: 'A Confederação do Equador foi proclamada em 1824 em reação à outorga da Constituição de 1824 por D. Pedro I, após a dissolução da Assembleia Constituinte de 1823, reunindo províncias do Nordeste em torno de um projeto de cunho republicano liderado por Paes de Andrade.'
  },
  {
    id: 'hist_pe_9',
    disciplina: 'historia_pe',
    topico: 'Guerra dos Cabanos (Cabanada) - Objetivo do Movimento',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A Guerra dos Cabanos (ou Cabanada), revolta popular ocorrida entre 1832 e 1835 em Pernambuco e Alagoas, teve como principal objetivo:',
    alternativas: [
      { letra: 'A', texto: 'A restauração ao trono de D. Pedro I, que havia abdicado em 1831, sendo o movimento contrário ao governo regencial então instalado.' },
      { letra: 'B', texto: 'A proclamação imediata da república em Pernambuco, rompendo definitivamente com a Coroa.', comentario: 'Incorreta. A Cabanada tinha caráter restaurador (a favor do retorno de D. Pedro I ao trono), e não republicano.' },
      { letra: 'C', texto: 'A anexação de Pernambuco e Alagoas ao território de Portugal.', comentario: 'Incorreta. O movimento não pretendia anexar as províncias a Portugal, mas restaurar D. Pedro I no trono do Brasil.' },
      { letra: 'D', texto: 'A expulsão dos holandeses, ainda presentes na região no início do século XIX.', comentario: 'Incorreta. Os holandeses já haviam sido expulsos de Pernambuco em 1654, quase dois séculos antes da Cabanada, sem qualquer relação com esse movimento.' }
    ],
    gabarito: 'A',
    justificativa: 'A Guerra dos Cabanos (Cabanada), ocorrida entre 1832 e 1835 em Pernambuco e Alagoas, teve caráter restaurador, buscando a volta ao trono de D. Pedro I, que havia abdicado em 1831, em oposição ao governo regencial então estabelecido.'
  },
  {
    id: 'hist_pe_10',
    disciplina: 'historia_pe',
    topico: 'Revolução Praieira - Caráter e Período',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A Revolução Praieira, ocorrida em Pernambuco entre 1848 e 1850, é caracterizada, na historiografia, como um movimento de caráter predominantemente:',
    alternativas: [
      { letra: 'A', texto: 'Liberal e federalista, insurgindo-se contra práticas políticas e econômicas consideradas centralizadoras e favoráveis a interesses específicos na província.' },
      { letra: 'B', texto: 'Monarquista absolutista, em defesa do fortalecimento pleno dos poderes do Imperador.', comentario: 'Incorreta. A Revolução Praieira teve caráter liberal e federalista, contrário a práticas centralizadoras, e não um movimento de defesa do absolutismo monárquico.' },
      { letra: 'C', texto: 'Separatista religioso, com o objetivo de romper vínculos com a Igreja Católica.', comentario: 'Incorreta. O movimento não teve motivação religiosa; seu caráter foi político e econômico, de orientação liberal e federalista.' },
      { letra: 'D', texto: 'Exclusivamente militar, sem qualquer participação de setores civis ou imprensa.', comentario: 'Incorreta. A Revolução Praieira envolveu participação civil relevante, inclusive por meio da imprensa (o nome "Praieira" remete ao jornal "Diário Novo", impresso na Rua da Praia, no Recife).' }
    ],
    gabarito: 'A',
    justificativa: 'A Revolução Praieira (1848-1850) foi um movimento de caráter liberal e federalista, que se insurgiu contra práticas políticas e econômicas consideradas centralizadoras na província de Pernambuco, sendo um dos últimos grandes movimentos revoltosos do período imperial brasileiro.'
  },
  {
    id: 'hist_pe_11',
    disciplina: 'historia_pe',
    topico: 'Economia Colonial de Pernambuco - Cana-de-Açúcar',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'A base da economia da Capitania de Pernambuco durante o período colonial, sustentando seu papel de destaque entre as capitanias brasileiras, foi:',
    alternativas: [
      { letra: 'A', texto: 'A produção açucareira, desenvolvida em engenhos com uso de mão de obra escravizada.' },
      { letra: 'B', texto: 'A extração de minérios preciosos, especialmente ouro e diamantes.', comentario: 'Incorreta. A exploração de ouro e diamantes concentrou-se em outras regiões do Brasil colonial (como Minas Gerais), e não em Pernambuco, cuja economia se baseava na cana-de-açúcar.' },
      { letra: 'C', texto: 'A produção de café em larga escala para exportação.', comentario: 'Incorreta. O café tornou-se produto de destaque em outras regiões do Brasil (como o Vale do Paraíba e São Paulo) a partir do século XIX, e não na economia colonial pernambucana, baseada no açúcar.' },
      { letra: 'D', texto: 'A pecuária extensiva voltada exclusivamente para exportação de carne.', comentario: 'Incorreta. A pecuária existiu como atividade complementar (sobretudo no sertão), mas não foi a base da economia colonial de Pernambuco, sustentada pela produção açucareira.' }
    ],
    gabarito: 'A',
    justificativa: 'A economia da Capitania de Pernambuco no período colonial baseou-se na produção açucareira, desenvolvida em engenhos que empregavam mão de obra escravizada, o que garantiu à capitania grande relevância econômica entre as possessões portuguesas na América.'
  },
  {
    id: 'hist_pe_12',
    disciplina: 'historia_pe',
    topico: 'Divisão Regional de Pernambuco',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O território do estado de Pernambuco é tradicionalmente dividido, do litoral para o interior, nas seguintes mesorregiões:',
    alternativas: [
      { letra: 'A', texto: 'Zona da Mata, Agreste e Sertão.' },
      { letra: 'B', texto: 'Cerrado, Pantanal e Caatinga, na mesma sequência litoral-interior.', comentario: 'Incorreta. Cerrado e Pantanal não são mesorregiões associadas a Pernambuco; a divisão tradicional do estado é Zona da Mata, Agreste e Sertão.' },
      { letra: 'C', texto: 'Norte, Sul e Central, sem relação com critérios de vegetação ou clima.', comentario: 'Incorreta. A divisão regional tradicional de Pernambuco não segue a nomenclatura Norte/Sul/Central, mas sim Zona da Mata, Agreste e Sertão.' },
      { letra: 'D', texto: 'Litoral, Planalto e Amazônia.', comentario: 'Incorreta. Pernambuco não possui região de Amazônia; sua divisão tradicional, do litoral ao interior, é Zona da Mata, Agreste e Sertão.' }
    ],
    gabarito: 'A',
    justificativa: 'Pernambuco é tradicionalmente dividido, do litoral em direção ao interior, em três grandes áreas: a Zona da Mata (litoral, historicamente ligada à produção açucareira), o Agreste (região de transição) e o Sertão (interior semiárido).'
  },
  {
    id: 'hist_pe_13',
    disciplina: 'historia_pe',
    topico: 'Cultura Popular - Frevo',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'O frevo, manifestação cultural associada ao Carnaval de Recife e Olinda, foi reconhecido pela UNESCO, em 2012, como:',
    alternativas: [
      { letra: 'A', texto: 'Patrimônio Cultural Imaterial da Humanidade.' },
      { letra: 'B', texto: 'Patrimônio Natural da Humanidade, na categoria de paisagem cultural.', comentario: 'Incorreta. O frevo foi reconhecido como Patrimônio Cultural IMATERIAL da Humanidade, categoria distinta de "Patrimônio Natural", que se refere a bens naturais, e não a manifestações culturais.' },
      { letra: 'C', texto: 'Patente registrada exclusivamente em nome do estado de Pernambuco.', comentario: 'Incorreta. O reconhecimento da UNESCO não se dá por meio de "patente", instituto de propriedade industrial, mas por inscrição em lista de patrimônio cultural imaterial.' },
      { letra: 'D', texto: 'Marca registrada de uma escola de samba específica do Recife.', comentario: 'Incorreta. O frevo é uma manifestação cultural coletiva do Carnaval pernambucano, e não uma marca registrada de uma agremiação específica.' }
    ],
    gabarito: 'A',
    justificativa: 'O frevo, gênero musical e dança típicos do Carnaval de Recife e Olinda, foi reconhecido pela UNESCO em 2012 como Patrimônio Cultural Imaterial da Humanidade.'
  },
  {
    id: 'hist_pe_14',
    disciplina: 'historia_pe',
    topico: 'Cultura Popular - Maracatu',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O Maracatu Nação (ou Maracatu de Baque Virado), manifestação cultural afro-brasileira típica de Pernambuco, é reconhecido, desde 2014, como:',
    alternativas: [
      { letra: 'A', texto: 'Patrimônio Cultural Imaterial do Brasil, por registro do IPHAN.' },
      { letra: 'B', texto: 'Patrimônio Cultural Imaterial da Humanidade pela UNESCO, com registro definitivo desde então.', comentario: 'Incorreta. Até o momento, o Maracatu Nação tem candidatura em avaliação junto à UNESCO, mas o reconhecimento já consolidado desde 2014 é o registro como Patrimônio Cultural Imaterial do Brasil, pelo IPHAN.' },
      { letra: 'C', texto: 'Símbolo oficial exclusivo do município de Olinda, sem relevância no restante do estado.', comentario: 'Incorreta. O Maracatu Nação é manifestação cultural de expressão estadual, associada especialmente ao Recife, e não um símbolo restrito a Olinda.' },
      { letra: 'D', texto: 'Patrimônio histórico material, na categoria de bem tombado como edificação.', comentario: 'Incorreta. O Maracatu é manifestação cultural (patrimônio imaterial), e não um bem material/edificação passível de tombamento nessa categoria.' }
    ],
    gabarito: 'A',
    justificativa: 'O Maracatu Nação (Maracatu de Baque Virado), manifestação cultural afro-brasileira de Pernambuco associada especialmente ao Recife, é registrado pelo IPHAN como Patrimônio Cultural Imaterial do Brasil desde 2014, havendo, mais recentemente, candidatura em avaliação para reconhecimento também pela UNESCO.'
  },
  {
    id: 'hist_pe_15',
    disciplina: 'historia_pe',
    topico: 'Pernambuco e o Processo de Independência do Brasil',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Sobre o papel de Pernambuco no processo de independência do Brasil, é correto afirmar que a província:',
    alternativas: [
      { letra: 'A', texto: 'Protagonizou movimentos emancipacionistas anteriores à própria Independência (como a Revolução Pernambucana de 1817) e, já no período seguinte à Independência, movimentos de contestação ao governo central (como a Confederação do Equador, em 1824).' },
      { letra: 'B', texto: 'Manteve-se completamente alheia a qualquer movimento político relacionado à Independência, sem qualquer revolta relevante no período.', comentario: 'Incorreta. Pernambuco foi palco de importantes movimentos políticos ligados ao processo de independência, como a Revolução Pernambucana de 1817 e a Confederação do Equador de 1824.' },
      { letra: 'C', texto: 'Foi a última província brasileira a reconhecer a independência proclamada por D. Pedro I, apenas décadas depois.', comentario: 'Incorreta. Não há esse registro histórico; ao contrário, Pernambuco teve participação política ativa e precoce em movimentos ligados ao ideário emancipacionista.' },
      { letra: 'D', texto: 'Permaneceu sob domínio holandês durante todo o processo de independência do Brasil.', comentario: 'Incorreta. A dominação holandesa em Pernambuco havia terminado em 1654, quase dois séculos antes da Independência do Brasil (1822), não havendo qualquer relação entre os dois eventos.' }
    ],
    gabarito: 'A',
    justificativa: 'Pernambuco teve papel de destaque no processo político que envolveu a independência do Brasil, tendo protagonizado a Revolução Pernambucana de 1817 (movimento emancipacionista anterior à Independência) e, já no período seguinte, a Confederação do Equador (1824), movimento de contestação ao governo centralizador de D. Pedro I.'
  },
  {
    id: 'hist_pe_16',
    disciplina: 'historia_pe',
    topico: 'Recife x Olinda - Disputa Histórica de Primazia',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A rivalidade histórica entre Olinda e Recife, que teve na Guerra dos Mascates seu episódio mais marcante, relacionava-se, principalmente, à disputa por:',
    alternativas: [
      { letra: 'A', texto: 'Primazia política e econômica entre o núcleo tradicional da aristocracia açucareira (Olinda) e o povoado comercial e portuário em ascensão (Recife).' },
      { letra: 'B', texto: 'Controle religioso entre duas ordens católicas distintas, sem qualquer motivação política ou econômica.', comentario: 'Incorreta. A disputa entre Olinda e Recife tinha fundo político e econômico, relacionado à hegemonia da aristocracia açucareira frente ao crescimento comercial recifense, e não uma disputa entre ordens religiosas.' },
      { letra: 'C', texto: 'A definição de qual cidade seria capital do Brasil colonial.', comentario: 'Incorreta. A disputa dizia respeito à primazia dentro da própria capitania de Pernambuco, e não à definição da capital de todo o Brasil colonial.' },
      { letra: 'D', texto: 'A escolha de qual cidade sediaria a resistência contra a invasão holandesa, ainda em curso.', comentario: 'Incorreta. A Guerra dos Mascates ocorreu (1710-1711) décadas após o fim da dominação holandesa (1654), sem relação com a resistência à invasão holandesa.' }
    ],
    gabarito: 'A',
    justificativa: 'A rivalidade entre Olinda (núcleo tradicional da aristocracia açucareira) e Recife (povoado comercial e portuário em crescente ascensão econômica) tinha fundo político e econômico, relacionado à primazia entre os dois núcleos urbanos da capitania, tendo na Guerra dos Mascates (1710-1711) seu episódio mais emblemático.'
  }
];
