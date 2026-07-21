const LEI_SECA_PREMIUM_13 = {
  decks: [
    {
      id: 'cf_org_estado',
      disciplina: 'constitucional',
      nome: 'CF/88 - Org. do Estado e Adm. Pública',
      sigla: 'CF/88 - Arts. 18 e 37',
      icon: '🏛️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Organização do Estado (Art. 18-19)',
          artigos: [
            {
              numero: 'Art. 18 (Estrutura)',
              texto: 'A organização político-administrativa da República Federativa do Brasil compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos, nos termos desta Constituição.\n⚠️ O DF e os Municípios SÃO Entes Federativos e possuem autonomia.',
              destaques: ['União, Estados, DF e Municípios', 'todos autônomos']
            },
            {
              numero: 'Art. 19 (Vedações aos Entes)',
              texto: 'É vedado à União, aos Estados, ao DF e aos Municípios:\nI - estabelecer cultos religiosos ou igrejas (Estado Laico).\nII - recusar fé aos documentos públicos.\nIII - criar distinções entre brasileiros ou preferências entre si.',
              destaques: ['vedado estabelecer cultos', 'recusar fé a documentos públicos', 'criar distinções entre brasileiros']
            }
          ]
        },
        {
          titulo: 'Administração Pública (Art. 37)',
          artigos: [
            {
              numero: 'Art. 37, Caput (Princípios)',
              texto: 'A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do DF e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE).',
              destaques: ['Legalidade', 'Impessoalidade', 'Moralidade', 'Publicidade', 'Eficiência']
            },
            {
              numero: 'Art. 37, II e IX (Concurso e Contratação)',
              texto: 'II - a investidura em cargo ou emprego público depende de aprovação prévia em concurso público (provas ou provas e títulos), ressalvadas as nomeações para cargo em comissão (livre nomeação e exoneração).\nIX - a lei estabelecerá os casos de contratação por tempo determinado para atender a necessidade temporária de excepcional interesse público.',
              destaques: ['Concurso de provas ou provas e títulos', 'cargo em comissão = livre nomeação', 'excepcional interesse público']
            }
          ]
        }
      ]
    },
    {
      id: 'adm_poderes',
      disciplina: 'administrativo',
      nome: 'Administrativo - Poderes',
      sigla: 'Poderes Administrativos',
      icon: '⚡',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Poder de Polícia e Disciplinar',
          artigos: [
            {
              numero: 'Poder de Polícia',
              texto: 'É a faculdade de a Administração condicionar e restringir o uso e gozo de bens, atividades e direitos individuais, em benefício da coletividade ou do próprio Estado.\nAtributos (DAC): Discricionariedade, Autoexecutoriedade, Coercibilidade.',
              destaques: ['restringir direitos individuais', 'benefício da coletividade', 'Discricionariedade, Autoexecutoriedade, Coercibilidade']
            },
            {
              numero: 'Poder Disciplinar',
              texto: 'É o poder de apurar infrações e aplicar penalidades aos servidores públicos e demais pessoas sujeitas à disciplina dos órgãos (ex: alunos de escolas públicas, concessionárias).\n⚠️ Não se confunde com o Poder de Polícia (que atinge particulares em geral).',
              destaques: ['aplicar penalidades aos servidores', 'pessoas sujeitas à disciplina', 'Não se confunde com Poder de Polícia']
            }
          ]
        },
        {
          titulo: 'Poder Hierárquico e Regulamentar',
          artigos: [
            {
              numero: 'Poder Hierárquico',
              texto: 'É o poder que o Executivo tem para distribuir e escalonar as funções de seus órgãos, ordenar e rever a atuação de seus agentes.\nPermite: dar ordens, delegar competências, avocar atribuições, fiscalizar e punir (o poder disciplinar deriva do hierárquico na punição de servidores).',
              destaques: ['distribuir e escalonar funções', 'delegar competências', 'avocar atribuições']
            },
            {
              numero: 'Poder Regulamentar (Normativo)',
              texto: 'Poder conferido ao Chefe do Executivo para editar decretos e regulamentos para a fiel execução da lei.\n⚠️ O decreto regulamentar NÃO pode inovar no ordenamento jurídico (não cria direitos nem obrigações novos).',
              destaques: ['fiel execução da lei', 'NÃO pode inovar no ordenamento', 'não cria direitos novos']
            }
          ]
        }
      ]
    },
    {
      id: 'cp_vida',
      disciplina: 'penal',
      nome: 'CP - Crimes contra a Vida',
      sigla: 'CP - Homicídio e afins',
      icon: '🩸',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Homicídio e Qualificadoras',
          artigos: [
            {
              numero: 'Art. 121, §2º (Feminicídio)',
              texto: 'Homicídio qualificado: contra a mulher por razões da condição de sexo feminino.\nConsidera-se razões de sexo feminino: I - violência doméstica e familiar; II - menosprezo ou discriminação à condição de mulher.\nPena - reclusão, de 12 a 30 anos.',
              destaques: ['condição de sexo feminino', 'violência doméstica', 'menosprezo ou discriminação']
            },
            {
              numero: 'Art. 121, §2º (Homicídio Funcional)',
              texto: 'Homicídio qualificado se praticado contra autoridade ou agente de segurança pública (art. 142 e 144 CF), integrantes do sistema prisional e da Força Nacional, no exercício da função ou em decorrência dela, ou contra seu cônjuge/companheiro/parente consanguíneo até 3º grau.',
              destaques: ['agente de segurança pública', 'exercício da função ou decorrência', 'parente até 3º grau']
            }
          ]
        },
        {
          titulo: 'Infanticídio e Induzimento ao Suicídio',
          artigos: [
            {
              numero: 'Art. 122 (Induzimento, Instigação ou Auxílio a Suicídio/Automutilação)',
              texto: 'Induzir ou instigar alguém a suicidar-se ou a praticar automutilação, ou prestar-lhe auxílio.\n⚠️ Se o crime é praticado pela internet (rede social), a pena é duplicada.',
              destaques: ['Induzir, instigar ou auxiliar', 'Suicídio ou Automutilação', 'pena duplicada na internet']
            },
            {
              numero: 'Art. 123 (Infanticídio)',
              texto: 'Matar, sob a influência do ESTADO PUERPERAL, o próprio filho, durante o parto ou logo após.\nPena: detenção, de 2 a 6 anos.\n⚠️ Exige estado puerperal (condição fisiológica e psicológica pós-parto). É crime próprio da mãe.',
              destaques: ['estado puerperal', 'próprio filho', 'durante ou logo após o parto']
            }
          ]
        }
      ]
    },
    {
      id: 'cpp_flagrante',
      disciplina: 'penal', // using penal for CPP to keep colors matched
      nome: 'CPP - Prisão em Flagrante',
      sigla: 'CPP - Flagrante',
      icon: '🚨',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Sujeitos e Tipos de Flagrante',
          artigos: [
            {
              numero: 'Art. 301 (Sujeitos do Flagrante)',
              texto: 'Qualquer do povo PODERÁ (flagrante facultativo) e as autoridades policiais e seus agentes DEVERÃO (flagrante obrigatório) prender quem quer que seja encontrado em flagrante delito.',
              destaques: ['Qualquer do povo PODERÁ', 'autoridades policiais DEVERÃO', 'facultativo x obrigatório']
            },
            {
              numero: 'Art. 302 (Tipos de Flagrante)',
              texto: 'Considera-se em flagrante delito quem:\nI - está cometendo a infração penal (Flagrante Próprio);\nII - acaba de cometê-la (Flagrante Próprio);\nIII - é perseguido, logo após, em situação que faça presumir ser o autor (Flagrante Impróprio/Quase Flagrante);\nIV - é encontrado, logo depois, com instrumentos, armas ou objetos que façam presumir ser ele o autor (Flagrante Presumido/Ficto).',
              destaques: ['cometendo ou acaba de cometer', 'perseguido logo após = Impróprio', 'encontrado logo depois com objetos = Presumido']
            }
          ]
        },
        {
          titulo: 'Procedimento da Prisão',
          artigos: [
            {
              numero: 'Art. 306 (Comunicações Obrigatórias)',
              texto: 'A prisão de qualquer pessoa e o local onde se encontre serão comunicados IMEDIATAMENTE ao juiz competente, ao Ministério Público e à família do preso ou à pessoa por ele indicada.',
              destaques: ['IMEDIATAMENTE', 'ao juiz, ao MP e à família']
            },
            {
              numero: 'Art. 306, §1º (Nota de Culpa)',
              texto: 'Em até 24 HORAS após a prisão, será encaminhado ao juiz o auto de prisão em flagrante e, no mesmo prazo, será entregue ao preso a NOTA DE CULPA, assinada pela autoridade, com o motivo da prisão, nome do condutor e testemunhas.',
              destaques: ['Em até 24 HORAS', 'Nota de Culpa', 'motivo, condutor e testemunhas']
            }
          ]
        }
      ]
    },
    {
      id: 'legis_idoso_mp',
      disciplina: 'legislacao',
      nome: 'Estatuto do Idoso / Maria da Penha',
      sigla: 'Leis 10.741 e 11.340',
      icon: '👵',
      destaque: false,
      peso: 1,
      secoes: [
        {
          titulo: 'Estatuto do Idoso (Crimes)',
          artigos: [
            {
              numero: 'Art. 96 (Discriminação)',
              texto: 'Discriminar pessoa idosa, impedindo ou dificultando seu acesso a operações bancárias, aos meios de transporte, ao direito de contratar ou por qualquer outro meio.\nPena: reclusão de 6 meses a 1 ano e multa.\n⚠️ A pena aumenta de 1/3 se a vítima se encontrar sob os cuidados do agente.',
              destaques: ['Discriminar pessoa idosa', 'impedir acesso', 'aumenta 1/3 sob cuidados do agente']
            },
            {
              numero: 'Art. 99 (Maus-tratos)',
              texto: 'Expor a perigo a integridade e a saúde, física ou psíquica, do idoso, submetendo-o a condições desumanas ou degradantes ou privando-o de alimentos e cuidados.\nPena: detenção de 2 meses a 1 ano e multa.',
              destaques: ['Expor a perigo', 'condições desumanas', 'privando alimentos e cuidados']
            }
          ]
        },
        {
          titulo: 'Maria da Penha',
          artigos: [
            {
              numero: 'Art. 5º (Conceito)',
              texto: 'Para os efeitos desta Lei, configura violência doméstica e familiar contra a mulher QUALQUER ação ou omissão baseada no gênero que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial, ocorrida no âmbito da unidade doméstica, da família ou em qualquer relação íntima de afeto.',
              destaques: ['baseada no gênero', 'unidade doméstica', 'família', 'relação íntima de afeto']
            },
            {
              numero: 'Art. 24-A (Descumprimento de Medida)',
              texto: 'Descumprir decisão judicial que defere medidas protetivas de urgência previstas nesta Lei:\nPena - detenção, de 3 meses a 2 anos.\n⚠️ A fiança, neste caso, só poderá ser concedida pelo JUIZ (e não pelo delegado).',
              destaques: ['Descumprir medida protetiva', 'detenção 3 meses a 2 anos', 'fiança só pelo JUIZ']
            }
          ]
        }
      ]
    }
  ]
};
