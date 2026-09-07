// ============================================================
// QUESTIONS_LEGISLACAO_ESPECIAL_PCPE — Reforço de Legislação Penal
// Especial exclusivo da PCPE: cobre 3 leis confirmadas como parte
// do conteúdo real de "Direito Penal" da PC-PE (fonte: resumo do
// conteúdo programático verticalizado do edital PC-PE 2023) que
// estavam ausentes de QUESTIONS_LEGISLACAO/QUESTIONS_EXTRA_LEGISLACAO
// (bancos já usados por PPRN/PPPE, que não cobrem estas 3 leis):
//   - Lei 9.503/1997 (CTB) - Crimes de Trânsito (Arts. 302-308)
//   - Lei 14.344/2022 (Lei Henry Borel) - Violência Doméstica e
//     Familiar contra Criança e Adolescente
//   - Lei 9.605/1998 - Crimes Ambientais (responsabilidade penal)
// disciplina: 'legislacao', para agrupar em Legislação Penal
// Especial no edital da PCPE. Não é carregado para PPRN/PPPE
// (arquivo exclusivo da PCPE). Conteúdo verificado em fontes
// especializadas do texto legal antes da escrita.
// ============================================================

const QUESTIONS_LEGISLACAO_ESPECIAL_PCPE = [
  {
    id: 'pcpe_leg_esp_1',
    disciplina: 'legislacao',
    topico: 'CTB - Homicídio Culposo na Direção de Veículo (Art. 302)',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Nos termos do art. 302 da Lei nº 9.503/1997 (Código de Trânsito Brasileiro), praticar homicídio culposo na direção de veículo automotor sujeita o condutor, além da pena privativa de liberdade, a:',
    alternativas: [
      { letra: 'A', texto: 'Suspensão ou proibição de se obter a permissão ou a habilitação para dirigir veículo automotor.' },
      { letra: 'B', texto: 'Perda automática e definitiva da propriedade do veículo envolvido, independentemente de processo judicial específico.', comentario: 'Incorreta. O art. 302 não prevê perda automática da propriedade do veículo; a penalidade adicional prevista é a suspensão ou proibição de obter habilitação.' },
      { letra: 'C', texto: 'Prisão civil por dívida decorrente da indenização à vítima.', comentario: 'Incorreta. Não há previsão de prisão civil por dívida associada ao crime do art. 302 do CTB, instituto estranho à matéria penal de trânsito.' },
      { letra: 'D', texto: 'Cassação definitiva da Carteira Nacional de Habilitação de qualquer familiar do condutor.', comentario: 'Incorreta. A penalidade recai sobre o próprio condutor responsável pelo homicídio culposo, e não sobre familiares.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 302, caput e parágrafo único, da Lei 9.503/1997 (CTB)',
    justificativa: 'O homicídio culposo na direção de veículo automotor é punido com detenção, sujeitando ainda o condutor à suspensão ou proibição de se obter a permissão ou a habilitação para dirigir veículo automotor.'
  },
  {
    id: 'pcpe_leg_esp_2',
    disciplina: 'legislacao',
    topico: 'CTB - Omissão de Socorro x Fuga do Local (Arts. 304 e 305)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Sobre a distinção entre os crimes dos arts. 304 e 305 do CTB, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'O art. 304 pune o condutor que deixa de prestar ou de solicitar socorro imediato à vítima do acidente, enquanto o art. 305 pune o afastamento do local do acidente para fugir à responsabilidade penal ou civil, podendo os dois crimes ser cumulados conforme o caso concreto.' },
      { letra: 'B', texto: 'Os dois artigos descrevem exatamente a mesma conduta, sendo aplicáveis em concurso aparente de normas, com prevalência sempre do art. 304.', comentario: 'Incorreta. As condutas são distintas: uma pune a omissão de socorro e a outra a fuga do local para se eximir de responsabilidade; ambas podem ser cumuladas, e não se trata de mera hipótese de concurso aparente com prevalência automática de um artigo.' },
      { letra: 'C', texto: 'O art. 305 exige, para sua configuração, que a vítima tenha sofrido apenas ferimentos leves, não se aplicando em caso de morte.', comentario: 'Incorreta. O art. 305 pune a fuga do local do acidente para fugir à responsabilidade, independentemente da gravidade das lesões sofridas pela vítima.' },
      { letra: 'D', texto: 'A omissão do condutor, prevista no art. 304, deixa de configurar crime quando o socorro é prestado por terceiros presentes no local.', comentario: 'Incorreta. A lei prevê expressamente que o condutor incide nas penas do art. 304 ainda que sua omissão seja suprida por terceiros.' }
    ],
    gabarito: 'A',
    artigo: 'Arts. 304 e 305 da Lei 9.503/1997 (CTB)',
    justificativa: 'O art. 304 pune deixar de prestar ou de solicitar socorro imediato à vítima do acidente, incidindo o condutor nas penas ainda que a omissão seja suprida por terceiros; o art. 305 pune o afastamento do local do acidente para fugir à responsabilidade penal ou civil que lhe possa ser atribuída, podendo os crimes ser cumulados conforme o caso concreto.'
  },
  {
    id: 'pcpe_leg_esp_3',
    disciplina: 'legislacao',
    topico: 'CTB - Embriaguez ao Volante (Art. 306)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo entendimento consolidado do STJ sobre o crime de embriaguez ao volante (art. 306 do CTB), é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Trata-se de crime de perigo abstrato, sendo suficiente a condução de veículo com concentração de álcool igual ou superior ao limite legal, não se exigindo a comprovação de perigo concreto de dano.' },
      { letra: 'B', texto: 'Exige-se a comprovação de perigo concreto, mediante demonstração de que a condução colocou em risco efetivo outras pessoas.', comentario: 'Incorreta. O entendimento consolidado é de crime de perigo abstrato, dispensando a comprovação de perigo concreto de dano.' },
      { letra: 'C', texto: 'A lavratura de auto de infração administrativa de trânsito é condição de procedibilidade indispensável para a ação penal.', comentario: 'Incorreta. A lavratura do auto de infração administrativa não constitui condição de procedibilidade nem requisito indispensável para a ação penal, podendo a materialidade ser comprovada por outros meios de prova.' },
      { letra: 'D', texto: 'Somente se configura o crime quando o condutor se envolve em acidente de trânsito com vítima.', comentario: 'Incorreta. O crime de embriaguez ao volante se consuma pela simples condução nas condições previstas em lei, independentemente da ocorrência de acidente ou de vítima.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 306 da Lei 9.503/1997 (CTB) c/c jurisprudência do STJ',
    justificativa: 'O STJ firmou entendimento de que o delito de embriaguez ao volante é crime de perigo abstrato, sendo suficiente a condução de veículo com concentração de álcool igual ou superior ao limite legal para a consumação do delito, independentemente de perigo concreto de dano.'
  },
  {
    id: 'pcpe_leg_esp_4',
    disciplina: 'legislacao',
    topico: 'CTB - Participação em Competição não Autorizada / Racha (Art. 308)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Sobre o crime de participação em competição não autorizada (racha), previsto no art. 308 do CTB, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Desde a Lei nº 11.705/2008, deixou de se enquadrar como infração de menor potencial ofensivo, não sendo mais aplicáveis os institutos despenalizadores da Lei 9.099/95.' },
      { letra: 'B', texto: 'Continua sendo, sem exceção, infração de menor potencial ofensivo, sujeita obrigatoriamente à Lei 9.099/95.', comentario: 'Incorreta. Desde a Lei 11.705/2008, o racha não mais se enquadra como infração de menor potencial ofensivo.' },
      { letra: 'C', texto: 'Somente é punível quando resultar em lesão corporal ou morte de terceiros.', comentario: 'Incorreta. O crime do art. 308 pune a própria conduta de participar de corrida ou competição não autorizada em via pública, independentemente de resultado lesivo a terceiros.' },
      { letra: 'D', texto: 'É crime exclusivamente culposo, incompatível com a modalidade dolosa.', comentario: 'Incorreta. A participação em competição não autorizada é conduta dolosa (o agente quer ou assume o risco de participar da disputa), distinta dos crimes culposos de trânsito, como o do art. 302.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 308 da Lei 9.503/1997 (CTB), com a redação da Lei 11.705/2008',
    justificativa: 'Com a Lei nº 11.705/2008, o crime de participação em competição não autorizada (racha) deixou de ser tratado como infração de menor potencial ofensivo, afastando a aplicação dos institutos despenalizadores da Lei 9.099/95.'
  },
  {
    id: 'pcpe_leg_esp_5',
    disciplina: 'legislacao',
    topico: 'Lei 14.344/2022 (Lei Henry Borel) - Conceito de Violência Doméstica',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A Lei nº 14.344/2022 (Lei Henry Borel), que cria mecanismos para prevenção e enfrentamento da violência doméstica e familiar contra a criança e o adolescente, define violência doméstica e familiar, de forma similar à Lei Maria da Penha, como:',
    alternativas: [
      { letra: 'A', texto: 'Qualquer ação ou omissão que cause à criança ou ao adolescente morte, lesão, sofrimento físico, sexual, psicológico ou dano patrimonial, praticada no âmbito doméstico ou familiar.' },
      { letra: 'B', texto: 'Apenas a violência física comprovada por laudo de exame de corpo de delito, excluídas as demais modalidades de violência.', comentario: 'Incorreta. O conceito legal é amplo, abrangendo violência física, sexual, psicológica e dano patrimonial, e não apenas a violência física comprovada por laudo pericial.' },
      { letra: 'C', texto: 'Exclusivamente a violência praticada por desconhecidos, fora do ambiente familiar da criança ou do adolescente.', comentario: 'Incorreta. A lei trata justamente da violência praticada no âmbito doméstico e familiar, e não da violência praticada por estranhos fora desse contexto.' },
      { letra: 'D', texto: 'Somente as condutas que resultem em morte da criança ou do adolescente.', comentario: 'Incorreta. O conceito abrange também lesão, sofrimento físico, sexual, psicológico e dano patrimonial, e não apenas condutas com resultado morte.' }
    ],
    gabarito: 'A',
    artigo: 'Lei 14.344/2022, conceito de violência doméstica e familiar contra a criança e o adolescente',
    justificativa: 'A Lei Henry Borel adota conceito de violência doméstica e familiar similar ao da Lei Maria da Penha, definindo-a como qualquer ação ou omissão que cause à criança ou ao adolescente morte, lesão, sofrimento físico, sexual, psicológico ou dano patrimonial.'
  },
  {
    id: 'pcpe_leg_esp_6',
    disciplina: 'legislacao',
    topico: 'Lei 14.344/2022 (Lei Henry Borel) - Medidas Protetivas de Urgência',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Sobre as medidas protetivas de urgência previstas na Lei nº 14.344/2022 (Lei Henry Borel), é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'São aplicáveis independentemente do sexo da vítima, e, havendo risco iminente à vida ou à integridade da criança ou do adolescente, o agressor deverá ser imediatamente afastado do lar ou local de convivência.' },
      { letra: 'B', texto: 'Aplicam-se exclusivamente a vítimas do sexo feminino, seguindo à risca o mesmo critério de gênero da Lei Maria da Penha.', comentario: 'Incorreta. As medidas protetivas da Lei Henry Borel se aplicam independentemente do sexo da criança ou do adolescente vítima.' },
      { letra: 'C', texto: 'Dependem de trânsito em julgado de sentença condenatória contra o agressor para serem decretadas.', comentario: 'Incorreta. Medidas protetivas de urgência, por sua própria natureza cautelar, não dependem de trânsito em julgado de condenação, podendo ser decretadas diante do risco iminente.' },
      { letra: 'D', texto: 'Somente podem ser aplicadas depois de esgotadas todas as tentativas de mediação familiar entre agressor e vítima.', comentario: 'Incorreta. Não há exigência de esgotamento de mediação familiar prévia; havendo risco iminente, o afastamento do agressor deve ser imediato.' }
    ],
    gabarito: 'A',
    artigo: 'Lei 14.344/2022 - Medidas Protetivas de Urgência',
    justificativa: 'A Lei Henry Borel prevê medidas protetivas de urgência às crianças e adolescentes vítimas de violência doméstica e familiar, aplicáveis independentemente do sexo da vítima, determinando o afastamento imediato do agressor do lar ou local de convivência quando houver risco iminente à vida ou à integridade da vítima.'
  },
  {
    id: 'pcpe_leg_esp_7',
    disciplina: 'legislacao',
    topico: 'Lei 14.344/2022 (Lei Henry Borel) - Alterações Legislativas',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'A Lei nº 14.344/2022 (Lei Henry Borel) promoveu alterações em diversos diplomas legais relacionados à proteção da criança e do adolescente. Entre essas alterações, é correto afirmar que a lei:',
    alternativas: [
      { letra: 'A', texto: 'Alterou a Lei de Crimes Hediondos para considerar hediondo o homicídio praticado contra menor de 14 anos, além de promover mudanças no Código Penal, na Lei de Execução Penal e no Estatuto da Criança e do Adolescente.' },
      { letra: 'B', texto: 'Revogou integralmente o Estatuto da Criança e do Adolescente, substituindo-o por um novo estatuto próprio.', comentario: 'Incorreta. A Lei Henry Borel promoveu alterações pontuais no ECA e em outros diplomas, sem revogar integralmente o Estatuto da Criança e do Adolescente.' },
      { letra: 'C', texto: 'Extinguiu a competência dos Juizados da Infância e Juventude para julgar casos de violência doméstica contra criança e adolescente.', comentario: 'Incorreta. A lei não trata de extinção de competência dos Juizados da Infância e Juventude; seu foco é criar mecanismos de prevenção e enfrentamento à violência doméstica contra criança e adolescente.' },
      { letra: 'D', texto: 'Aplica-se exclusivamente na esfera cível, sem qualquer repercussão na legislação penal.', comentario: 'Incorreta. A lei tem repercussão direta na esfera penal, inclusive alterando a Lei de Crimes Hediondos e o Código Penal.' }
    ],
    gabarito: 'A',
    artigo: 'Lei 14.344/2022 - Alterações na Lei 8.072/90, no CP, na LEP e no ECA',
    justificativa: 'A Lei Henry Borel alterou a Lei de Crimes Hediondos para considerar hediondo o homicídio contra menor de 14 anos, além de promover alterações no Código Penal, na Lei de Execução Penal e no Estatuto da Criança e do Adolescente, no contexto da prevenção e do enfrentamento à violência doméstica e familiar contra crianças e adolescentes.'
  },
  {
    id: 'pcpe_leg_esp_8',
    disciplina: 'legislacao',
    topico: 'Lei 9.605/1998 - Concorrência para o Crime Ambiental (Art. 2º)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Nos termos do art. 2º da Lei nº 9.605/1998 (Lei de Crimes Ambientais), quem, de qualquer forma, concorre para a prática dos crimes nela previstos incorre nas penas a estes cominados, na medida da sua culpabilidade, bem como:',
    alternativas: [
      { letra: 'A', texto: 'O diretor, administrador, membro de conselho e de órgão técnico, auditor, gerente, preposto ou mandatário de pessoa jurídica que, sabendo da conduta criminosa de outrem, deixar de impedir a sua prática, quando podia agir para evitá-la.' },
      { letra: 'B', texto: 'Somente o autor material direto do dano ambiental, excluída qualquer responsabilidade de dirigentes de pessoa jurídica.', comentario: 'Incorreta. O art. 2º estende expressamente a responsabilidade a dirigentes e representantes de pessoa jurídica que, podendo agir para impedir a conduta criminosa de que tinham conhecimento, deixam de fazê-lo.' },
      { letra: 'C', texto: 'Exclusivamente o proprietário do imóvel onde ocorreu o dano ambiental, independentemente de qualquer participação na conduta.', comentario: 'Incorreta. A responsabilidade do art. 2º não se restringe à propriedade do imóvel, alcançando quem concorre para a prática do crime e dirigentes que deixam de impedir conduta criminosa de que tinham ciência.' },
      { letra: 'D', texto: 'Nenhuma outra pessoa além do agente que praticou diretamente a conduta descrita no tipo penal.', comentario: 'Incorreta. A lei expressamente estende a responsabilidade a quem concorre de qualquer forma para o crime e a dirigentes/representantes de pessoa jurídica nas condições do art. 2º.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 2º da Lei 9.605/1998',
    justificativa: 'Além de quem concorre de qualquer forma para o crime, incorre nas mesmas penas o diretor, administrador, membro de conselho e de órgão técnico, auditor, gerente, preposto ou mandatário de pessoa jurídica que, sabendo da conduta criminosa de outrem, deixar de impedir a sua prática, quando podia agir para evitá-la.'
  },
  {
    id: 'pcpe_leg_esp_9',
    disciplina: 'legislacao',
    topico: 'Lei 9.605/1998 - Responsabilidade Penal da Pessoa Jurídica (Art. 3º)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Segundo o art. 3º, caput, da Lei nº 9.605/1998, as pessoas jurídicas serão responsabilizadas administrativa, civil e penalmente, nos casos em que a infração seja cometida:',
    alternativas: [
      { letra: 'A', texto: 'Por decisão de seu representante legal ou contratual, ou de seu órgão colegiado, no interesse ou benefício da sua entidade.' },
      { letra: 'B', texto: 'Por qualquer empregado da pessoa jurídica, ainda que sem qualquer vínculo com decisão institucional e sem interesse ou benefício para a entidade.', comentario: 'Incorreta. A lei exige que a infração decorra de decisão do representante legal/contratual ou de órgão colegiado, no interesse ou benefício da entidade, e não de qualquer ato isolado de empregado sem esse vínculo.' },
      { letra: 'C', texto: 'Somente quando a pessoa jurídica for de direito público, excluídas as pessoas jurídicas de direito privado.', comentario: 'Incorreta. A responsabilização penal de pessoa jurídica prevista na lei não se restringe a entes de direito público, aplicando-se nos termos do art. 3º às pessoas jurídicas que praticarem a infração nas condições ali descritas.' },
      { letra: 'D', texto: 'Independentemente de qualquer vínculo entre a conduta e o interesse ou benefício da pessoa jurídica.', comentario: 'Incorreta. A lei exige expressamente que a infração seja cometida no interesse ou benefício da entidade, não bastando qualquer conduta desvinculada desse elemento.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 3º, caput, da Lei 9.605/1998',
    justificativa: 'As pessoas jurídicas serão responsabilizadas administrativa, civil e penalmente, nos casos em que a infração seja cometida por decisão de seu representante legal ou contratual, ou de seu órgão colegiado, no interesse ou benefício da sua entidade.'
  },
  {
    id: 'pcpe_leg_esp_10',
    disciplina: 'legislacao',
    topico: 'Lei 9.605/1998 - Não Exclusão da Responsabilidade da Pessoa Física (Art. 3º, Parágrafo Único)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Nos termos do parágrafo único do art. 3º da Lei nº 9.605/1998, a responsabilidade penal da pessoa jurídica:',
    alternativas: [
      { letra: 'A', texto: 'Não exclui a das pessoas físicas, autoras, coautoras ou partícipes do mesmo fato.' },
      { letra: 'B', texto: 'Substitui integralmente a responsabilidade das pessoas físicas envolvidas, que ficam isentas de qualquer sanção penal.', comentario: 'Incorreta. A lei estabelece expressamente que a responsabilidade da pessoa jurídica não exclui a das pessoas físicas autoras, coautoras ou partícipes do mesmo fato.' },
      { letra: 'C', texto: 'Somente pode ser reconhecida após o trânsito em julgado da condenação de todas as pessoas físicas envolvidas.', comentario: 'Incorreta. A lei não condiciona a responsabilização da pessoa jurídica ao prévio trânsito em julgado da condenação das pessoas físicas envolvidas.' },
      { letra: 'D', texto: 'Aplica-se apenas nos casos em que nenhuma pessoa física possa ser identificada como autora do fato.', comentario: 'Incorreta. A responsabilização da pessoa jurídica não é subsidiária à impossibilidade de identificação de pessoa física, podendo coexistir com a responsabilização desta.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 3º, parágrafo único, da Lei 9.605/1998',
    justificativa: 'A responsabilização da pessoa jurídica não exclui a das pessoas físicas, autoras, coautoras ou partícipes do mesmo fato, podendo ambas as responsabilizações coexistir.'
  }
];
