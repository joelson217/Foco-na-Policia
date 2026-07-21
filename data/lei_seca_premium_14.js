const LEI_SECA_PREMIUM_14 = {
  decks: [
    {
      id: 'lei_hediondos',
      disciplina: 'legislacao',
      nome: 'Lei 8.072/90 - Crimes Hediondos',
      sigla: 'Lei 8.072/90',
      icon: '💀',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Rol de Crimes Hediondos',
          artigos: [
            {
              id: 'art_1_hed_homicidio',
              numero: 'Homicídio Hediondo (Art. 1º, I)',
              texto: 'O homicídio simples é hediondo apenas quando praticado em atividade típica de grupo de extermínio, ainda que por um só agente. O homicídio qualificado é SEMPRE hediondo (incluindo feminicídio, homicídio contra policiais, etc.).',
              destaques: ['simples em grupo de extermínio', 'qualificado é SEMPRE hediondo']
            },
            {
              id: 'art_1_hed_lesao',
              numero: 'Lesão Corporal Hedionda (Art. 1º, I-A)',
              texto: 'Lesão corporal de natureza gravíssima ou seguida de morte, quando praticada contra agentes de segurança pública (art. 144 da CF) no exercício da função ou em decorrência dela, ou contra seus parentes consanguíneos até 3º grau.',
              destaques: ['natureza gravíssima ou seguida de morte', 'contra agentes de segurança ou parentes até 3º grau']
            },
            {
              id: 'art_1_hed_roubo',
              numero: 'Roubos Hediondos (Art. 1º, II)',
              texto: 'São hediondos apenas os seguintes roubos: a) circunstanciado pela restrição de liberdade da vítima; b) circunstanciado pelo emprego de arma de fogo ou arma de fogo de uso proibido/restrito; c) qualificado por lesão corporal grave ou morte (latrocínio).',
              destaques: ['restrição de liberdade', 'emprego de arma de fogo', 'lesão corporal grave ou morte']
            },
            {
              id: 'art_1_hed_outros',
              numero: 'Extorsão e Estupro (Art. 1º, III e V)',
              texto: 'Extorsão qualificada pela restrição de liberdade (sequestro relâmpago) ou qualificada por lesão grave ou morte. E o Estupro (art. 213) e Estupro de vulnerável (art. 217-A) são hediondos em todas as suas formas (simples, qualificados ou com morte).',
              destaques: ['extorsão com restrição de liberdade', 'estupro em todas as formas']
            },
            {
              id: 'art_1_hed_novos',
              numero: 'Furto Hediondo e Epidemia (Art. 1º, IX e VII)',
              texto: 'Furto qualificado pelo emprego de explosivo ou de artefato análogo (⚠️ Nota: furto COM explosivo é hediondo, mas roubo COM explosivo não é expressamente listado como hediondo, apenas roubo com arma de fogo!). E Epidemia com resultado morte.',
              destaques: ['furto qualificado por explosivo é hediondo', 'epidemia com morte']
            },
            {
              id: 'art_2_hed_equiparados',
              numero: 'Crimes Equiparados a Hediondos (Art. 2º)',
              texto: 'O Tráfico de entorpecentes, a Tortura e o Terrorismo (3T) são equiparados a hediondos. Eles recebem o mesmo tratamento constitucional de inafiançabilidade e insuscetibilidade de graça ou anistia.',
              destaques: ['Tráfico, Tortura e Terrorismo (3T)', 'inafiançáveis', 'insuscetíveis de graça ou anistia']
            },
            {
              id: 'art_2_hed_indulto',
              numero: 'Vedações e Indulto (Art. 2º, I)',
              texto: 'Os crimes hediondos e equiparados são insuscetíveis de anistia, graça e indulto. ⚠️ O indulto (perdão coletivo concedido pelo Presidente) é expressamente proibido pela lei e pela CF para crimes hediondos.',
              destaques: ['insuscetíveis de anistia, graça e indulto']
            }
          ]
        }
      ]
    },
    {
      id: 'lei_tortura',
      disciplina: 'legislacao',
      nome: 'Lei 9.455/97 - Lei de Tortura',
      sigla: 'Lei 9.455/97',
      icon: '🧠',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Modalidades de Tortura',
          artigos: [
            {
              id: 'art_1_tort_prova',
              numero: 'Tortura-Prova e Tortura-Crime (Art. 1º, I)',
              texto: 'Constranger alguém com emprego de violência ou grave ameaça, causando sofrimento físico ou mental:\na) com o fim de obter informação, declaração ou confissão (Tortura-Prova);\nb) para provocar ação/omissão de natureza criminosa (Tortura-Crime).',
              destaques: ['sofrimento físico ou mental', 'obter confissão', 'provocar ação criminosa']
            },
            {
              id: 'art_1_tort_preconceito',
              numero: 'Tortura Discriminatória (Art. 1º, I, c)',
              texto: 'Constranger alguém causando sofrimento físico ou mental em razão de discriminação racial ou religiosa. ⚠️ A lei de tortura não fala em discriminação por orientação sexual, embora a jurisprudência equipare o racismo.',
              destaques: ['discriminação racial ou religiosa']
            },
            {
              id: 'art_1_tort_castigo',
              numero: 'Tortura-Castigo (Art. 1º, II)',
              texto: 'Submeter alguém sob seu poder, autoridade ou guarda, com emprego de violência ou grave ameaça, a intenso sofrimento físico ou mental, como forma de aplicar castigo pessoal ou medida de caráter preventivo. Pena: reclusão, 2 a 8 anos.',
              destaques: ['sob poder, autoridade ou guarda', 'intenso sofrimento', 'castigo pessoal']
            },
            {
              id: 'art_1_tort_omissao',
              numero: 'Tortura pela Omissão (Art. 1º, §2º)',
              texto: 'Aquele que se omite em face dessas condutas, quando tinha o dever de evitá-las ou apurá-las, incorre na pena de detenção de 1 a 4 anos. ⚠️ Tortura por omissão é o único caso de detenção e tem pena reduzida!',
              destaques: ['dever de evitar ou apurar', 'pena de detenção de 1 a 4 anos', 'crime próprio omissivo']
            },
            {
              id: 'art_1_tort_aumentos',
              numero: 'Causas de Aumento de Pena (Art. 1º, §4º)',
              texto: 'A pena é aumentada de 1/6 a 1/3 se:\nI - o crime é cometido por agente público;\nII - contra criança, gestante, portador de deficiência, adolescente ou maior de 60 anos;\nIII - mediante sequestro.',
              destaques: ['aumento de 1/6 a 1/3', 'cometido por agente público', 'criança, gestante, deficiente, idoso']
            },
            {
              id: 'art_1_tort_efeitos',
              numero: 'Efeitos da Condenação (Art. 1º, §5º)',
              texto: 'A condenação acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo DOBRO do prazo da pena aplicada. ⚠️ Esse efeito é AUTOMÁTICO e independe de motivação na sentença.',
              destaques: ['perda do cargo', 'interdição pelo DOBRO do prazo', 'efeito AUTOMÁTICO']
            }
          ]
        }
      ]
    },
    {
      id: 'cf_art5',
      disciplina: 'constitucional',
      nome: 'CF/88 - Direitos Fundamentais',
      sigla: 'CF/88 - Art. 5º',
      icon: '🛡️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Remédios Constitucionais e Regras Penais',
          artigos: [
            {
              id: 'art_5_hc_hd',
              numero: 'Habeas Corpus e Habeas Data (Art. 5º, LXVIII e LXXII)',
              texto: 'Habeas Corpus (HC): protege a liberdade de locomoção contra ilegalidade ou abuso de poder. É gratuito e não exige advogado.\nHabeas Data (HD): para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros oficiais. É gratuito.',
              destaques: ['HC: liberdade de locomoção, gratuito', 'HD: informações pessoais, gratuito']
            },
            {
              id: 'art_5_ms',
              numero: 'Mandado de Segurança (Art. 5º, LXIX)',
              texto: 'Conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública. ⚠️ O MS NÃO é gratuito.',
              destaques: ['proteger direito líquido e certo', 'caráter residual (não amparado por HC/HD)', 'NÃO é gratuito']
            },
            {
              id: 'art_5_casa',
              numero: 'Inviolabilidade do Domicílio (Art. 5º, XI)',
              texto: 'A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:\n- A qualquer hora: em caso de flagrante delito, desastre, ou para prestar socorro;\n- Somente durante o dia: por determinação judicial.',
              destaques: ['inviolabilidade domiciliar', 'flagrante, desastre ou socorro (qualquer hora)', 'determinação judicial (somente durante o dia)']
            },
            {
              id: 'art_5_racismo',
              numero: 'Crimes Inafiançáveis e Imprescritíveis',
              texto: 'A prática do racismo e a ação de grupos armados (civis ou militares) contra a ordem constitucional e o Estado Democrático constituem crimes inafiançáveis e imprescritíveis.',
              destaques: ['Racismo e Grupos Armados', 'inafiançáveis', 'imprescritíveis']
            },
            {
              id: 'art_5_hediondos_penal',
              numero: 'Crimes Inafiançáveis e Insuportáveis de Graça',
              texto: 'A lei considerará inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos (3T + Hediondos). ⚠️ São imprescritíveis? NÃO! Apenas inafiançáveis e insuscetíveis de perdão.',
              destaques: ['Tortura, Tráfico, Terrorismo e Hediondos', 'inafiançáveis e insuscetíveis de graça/anistia', 'NÃO são imprescritíveis']
            },
            {
              id: 'art_5_tribunal_juri',
              numero: 'Tribunal do Júri (Art. 5º, XXXVIII)',
              texto: 'É reconhecida a instituição do júri, com a organização que lhe der a lei, assegurados:\na) a plenitude de defesa;\nb) o sigilo das votações;\nc) a soberania dos veredictos;\nd) a competência para o julgamento dos crimes dolosos contra a vida (consumados ou tentados).',
              destaques: ['plenitude de defesa', 'sigilo das votações', 'soberania dos veredictos', 'crimes dolosos contra a vida']
            },
            {
              id: 'art_5_pena_morte',
              numero: 'Proibição de Penas (Art. 5º, XLVII)',
              texto: 'Não haverá penas:\na) de morte, salvo em caso de guerra declarada;\nb) de caráter perpétuo;\nc) de trabalhos forçados;\nd) de banimento;\ne) cruéis.',
              destaques: ['morte (salvo guerra declarada)', 'caráter perpétuo proibido', 'trabalhos forçados proibidos']
            }
          ]
        }
      ]
    }
  ]
};
