// ============================================================
// LEI_SECA_EXTRA.JS — Flashcards Adicionais
// Decks expandidos para o concurso PPRN — Banca Avalia
// ============================================================

const LEI_SECA_EXTRA = {
  decks: [

    // =============================================
    // CÓDIGO PENAL — PARTE GERAL (APROFUNDADO)
    // =============================================
    {
      id: 'penal_pg',
      disciplina: 'penal',
      nome: 'Direito Penal — Parte Geral',
      sigla: 'CP — Parte Geral',
      icon: '📖',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Teoria do Crime — MAIS COBRADO',
          artigos: [
            { id: 'pg_1', artigo: 'Art. 13 CP', titulo: 'Relação de Causalidade', frente: 'O que é a teoria adotada pelo CP sobre nexo causal e qual a exceção?', verso: 'O CP adotou a Teoria da EQUIVALÊNCIA DOS ANTECEDENTES (conditio sine qua non): causa é todo fato sem o qual o resultado não teria ocorrido. EXCEÇÃO: Teoria da IMPUTAÇÃO OBJETIVA em casos de causas supervenientes relativamente independentes (art. 13, §1º) que por si sós produzem o resultado.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'pg_2', artigo: 'Art. 14 CP', titulo: 'Crime Consumado e Tentativa', frente: 'Quando o crime é consumado e quando é tentado?', verso: 'CONSUMADO (art. 14, I): quando nele se reúnem todos os elementos de sua definição legal. TENTATIVA (art. 14, II): quando iniciada a execução o crime não se consuma por circunstâncias alheias à vontade do agente. Pena da tentativa: reduzida de 1/3 a 2/3.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'pg_3', artigo: 'Art. 15 CP', titulo: 'Desistência Voluntária e Arrependimento Eficaz', frente: 'O que é desistência voluntária e arrependimento eficaz?', verso: 'DESISTÊNCIA VOLUNTÁRIA: o agente desiste de prosseguir na execução do crime (crime "não aconteceu"). O agente responde apenas pelos atos já praticados. ARREPENDIMENTO EFICAZ: o agente que já esgotou os atos de execução evita que o resultado ocorra. Aplica-se a "ponte de ouro" — nenhum responde pela tentativa do crime.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'pg_4', artigo: 'Art. 20 CP', titulo: 'Erro de Tipo', frente: 'O que é erro de tipo e quais seus efeitos?', verso: 'Erro sobre elementos constitutivos do tipo legal: o agente desconhece uma elementar do tipo. INEVITÁVEL (escusável): exclui dolo E culpa → atipicidade. EVITÁVEL (inescusável): exclui dolo, mas subsiste a culpa (se previsto). ERRO DE TIPO PERMISSIVO (descriminante putativa): agente erra sobre os pressupostos fáticos de uma excludente.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'pg_5', artigo: 'Art. 21 CP', titulo: 'Erro de Proibição', frente: 'O que é erro de proibição e quais seus efeitos?', verso: 'O agente ignora que o fato é ilícito (não sabe que é crime). INEVITÁVEL: isenta de pena. EVITÁVEL: reduz a pena de 1/6 a 1/3. ATENÇÃO: Difere do erro de tipo — no erro de tipo o agente desconhece elemento do fato; no erro de proibição, ele sabe o que faz, mas ignora ser ilícito.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'pg_6', artigo: 'Art. 26 CP', titulo: 'Inimputabilidade', frente: 'Quais são as causas de inimputabilidade no Código Penal?', verso: 'INIMPUTÁVEIS (art. 26): doença mental ou desenvolvimento mental incompleto/retardado ao tempo do crime — ISENÇÃO de pena, sujeitos à medida de segurança. SEMI-IMPUTÁVEIS (art. 26, parágrafo único): perturbação sem total privação — redução de 1/3 a 2/3 OU medida de segurança. MENORES DE 18 ANOS: inimputáveis pelo critério biológico puro.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'pg_7', artigo: 'Art. 28 CP', titulo: 'Emoção, Paixão e Embriaguez', frente: 'A emoção, a paixão e a embriaguez voluntária excluem a imputabilidade?', verso: 'NÃO excluem imputabilidade: emoção, paixão, nem embriaguez voluntária ou culposa. Excluem: embriaguez COMPLETA, ACIDENTAL (caso fortuito ou força maior). Embriaguez preordenada (o agente bebe para cometer o crime) é AGRAVANTE.', cobrado: 'hot', anos: ['2023', '2022', '2021'] },
            { id: 'pg_8', artigo: 'Art. 29 CP', titulo: 'Concurso de Pessoas', frente: 'O que exige o concurso de pessoas e quem é partícipe?', verso: 'REQUISITOS: pluralidade de agentes; relevância causal de cada conduta; liame subjetivo (vontade convergente); identidade de infração. PARTÍCIPE: não pratica o núcleo do tipo, mas contribui de qualquer modo. Pena idêntica à do autor (salvo participação de menor importância: redução de 1/6 a 1/3 — art. 29, §1º).', cobrado: 'hot', anos: ['2024', '2023'] },
          ]
        },
        {
          titulo: '🔥 Aplicação da Pena — Dosimetria',
          artigos: [
            { id: 'pg_9', artigo: 'Art. 59 CP', titulo: 'Circunstâncias Judiciais', frente: 'O que o juiz analisa na primeira fase da dosimetria (art. 59)?', verso: 'Na 1ª fase, o juiz fixa a PENA-BASE analisando: Culpabilidade; Antecedentes; Conduta social; Personalidade; Motivos; Circunstâncias; Consequências; Comportamento da vítima. (Mnemônico: CACP MC CB).', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'pg_10', artigo: 'Art. 61 CP', titulo: 'Agravantes', frente: 'Quais são as principais circunstâncias agravantes?', verso: 'Reincidência; Crime por motivo torpe/fútil; Crime para facilitar/assegurar outro crime; Crime mediante traição, emboscada, disfarce; Crime por veneno, incêndio, inundação; Crime contra ascendente/descendente, cônjuge; Crime contra idoso/criança/gestante; Crime com abuso de poder/dever funcional.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'pg_11', artigo: 'Art. 65 CP', titulo: 'Atenuantes', frente: 'Quais são as principais circunstâncias atenuantes?', verso: 'Ser menor de 21 anos na época do crime ou maior de 70 na condenação; desconhecido da lei; ter cometido por motivo de valor social/moral; arrependimento posterior eficiente; influência de multidão; confissão espontânea; crime sob coação resistível. ATENÇÃO: A confissão espontânea é aplicada mesmo que o agente negue em seguida (Súmula 545 STJ).', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'pg_12', artigo: 'Art. 71 CP', titulo: 'Crime Continuado', frente: 'O que é crime continuado e qual o benefício?', verso: 'Quando o agente, mediante mais de uma ação ou omissão, pratica dois ou mais crimes da mesma espécie, em condições de tempo, lugar, maneira de execução semelhantes, são os subsequentes tidos como continuação do primeiro. Benefício: aplica-se a pena do mais grave AUMENTADA de 1/6 a 2/3.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
          ]
        }
      ]
    },

    // =============================================
    // ESTATUTO DO SERVIDOR — LEI 8.112/90
    // =============================================
    {
      id: 'servidor',
      disciplina: 'administrativo',
      nome: 'Estatuto do Servidor — Lei 8.112/90',
      sigla: 'Lei 8.112/90',
      icon: '👔',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: '🔥 Acesso e Provimento de Cargo',
          artigos: [
            { id: 'serv_1', artigo: 'Art. 5º', titulo: 'Requisitos para Posse', frente: 'Quais são os requisitos básicos para investidura em cargo público segundo a Lei 8.112/90?', verso: 'Nacionalidade brasileira; gozo dos direitos políticos; quitação das obrigações militares e eleitorais; nível de escolaridade exigido; idade mínima de 18 anos; aptidão física e mental. Vedada a investidura de estrangeiro (salvo cargos de professor, pesquisador e médico em condições especiais).', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'serv_2', artigo: 'Art. 13-15', titulo: 'Posse e Exercício', frente: 'Quais são os prazos de posse e de entrada em exercício?', verso: 'POSSE: até 30 dias após a publicação do ato de provimento. EXERCÍCIO: até 15 dias após a posse. A posse em cargo público importa na aceitação plena dos termos do edital. O ato de posse é feito mediante a assinatura do respectivo termo.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'serv_3', artigo: 'Art. 20', titulo: 'Estágio Probatório', frente: 'Qual é o prazo do estágio probatório e o que é avaliado?', verso: 'PRAZO: 3 anos (36 meses). FATORES AVALIADOS: assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade. Durante o estágio probatório o servidor pode ser EXONERADO por insuficiência de desempenho. O servidor somente adquire ESTABILIDADE após 3 anos de efetivo exercício.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
          ]
        },
        {
          titulo: '🔥 Direitos e Vantagens do Servidor',
          artigos: [
            { id: 'serv_4', artigo: 'Art. 41-43', titulo: 'Férias', frente: 'Como funcionam as férias do servidor público federal (Lei 8.112/90)?', verso: 'Férias: 30 dias corridos por ano de serviço. Podem ser parceladas em até 3 etapas, desde que assim requerido pelo servidor, no interesse da administração. Terço constitucional (1/3 adicional) pago no início do gozo. Acumulação permitida por até 2 anos (por necessidade do serviço).', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'serv_5', artigo: 'Art. 76-78', titulo: 'Licenças', frente: 'Quais são as licenças remuneradas previstas na Lei 8.112/90?', verso: 'Licença para tratamento de saúde; licença à gestante/paternidade; licença por acidente em serviço; licença para capacitação (após 5 anos de exercício, pode gozar por até 3 meses). ATENÇÃO: Licença para trato de interesses particulares (SEM REMUNERAÇÃO, até 3 anos, prorrogáveis por mais 2).', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'serv_6', artigo: 'Art. 102', titulo: 'Afastamentos que Contam como Tempo de Serviço', frente: 'Quais afastamentos são considerados como efetivo exercício para todos os fins?', verso: 'Férias; exercício de cargo em comissão; exercício de mandato eletivo federal/estadual; licença gestante/paternidade; licença por acidente em serviço; convocação para serviço militar; participação em sessão de órgão de deliberação coletiva de que seja membro.', cobrado: 'hot', anos: ['2022', '2021'] },
          ]
        },
        {
          titulo: '🔥 Responsabilidade e Penalidades',
          artigos: [
            { id: 'serv_7', artigo: 'Art. 116', titulo: 'Deveres do Servidor', frente: 'Quais são os principais deveres do servidor público?', verso: 'Exercer com zelo e dedicação as atribuições do cargo; ser leal às instituições; observar as normas legais e regulamentares; cumprir as ordens superiores (exceto manifestamente ilegais); manter conduta compatível com a moralidade; levar ao conhecimento da autoridade superior irregularidades que tiver ciência.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'serv_8', artigo: 'Art. 117', titulo: 'Proibições ao Servidor', frente: 'Quais são as principais proibições ao servidor público?', verso: 'Ausentar-se do serviço sem autorização; retirar documentos sem formalidades; recusar fé a documentos públicos; fazer apostas; fumar nas dependências da repartição; praticar usura; exercer quaisquer atividades que sejam incompatíveis com o exercício do cargo; receber propinas ou presentes.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'serv_9', artigo: 'Art. 132', titulo: 'Infrações que geram Demissão', frente: 'Quais são as infrações que geram demissão do servidor?', verso: 'Crime contra a administração pública; abandono de cargo (faltar +30 dias); inassiduidade habitual (+60 faltas no ano); improbidade administrativa; incontinência pública e conduta escandalosa; corrupção; desídia habitual; embriaguez; lesão aos cofres públicos; aplicação irregular de dinheiros públicos; revelação de sigilo.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'serv_10', artigo: 'Art. 140', titulo: 'Prescrição das Infrações Disciplinares', frente: 'Quais são os prazos prescricionais das infrações disciplinares?', verso: 'ADVERTÊNCIA: 5 anos. SUSPENSÃO: 2 anos. DEMISSÃO, CASSAÇÃO e DESTITUIÇÃO: 5 anos. A prescrição começa a correr na data em que o fato se tornou conhecido. A abertura do PAD interrompe a prescrição até a decisão final.', cobrado: 'hot', anos: ['2024', '2023'] },
          ]
        }
      ]
    },

    // =============================================
    // LEP — APROFUNDADO (PARTE 2)
    // =============================================
    {
      id: 'lep_avancado',
      disciplina: 'lep',
      nome: 'LEP — Tópicos Avançados',
      sigla: 'LEP — Parte Especial',
      icon: '🔐',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Juiz da Execução — Competência (Art. 66)',
          artigos: [
            { id: 'lep_adv_1', artigo: 'Art. 66', titulo: 'Competência do Juiz da Execução', frente: 'Quais são as principais competências do Juiz da Execução Penal?', verso: 'Aplicar penas; Emitir guia de recolhimento; Classificar o condenado; Homologar a remição; Decidir sobre saída temporária; Decidir sobre progressão/regressão de regime; Autorizar trabalho externo; Decretar extinção de punibilidade; Decidir sobre incidentes. ATENÇÃO: quem CONCEDE saída temporária é o JUIZ (não o diretor).', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'lep_adv_2', artigo: 'Art. 68-70', titulo: 'Ministério Público na Execução', frente: 'Qual o papel do Ministério Público na execução penal?', verso: 'O MP fiscaliza a execução da pena; visita estabelecimentos penais; solicita guias de recolhimento; requerer ao Juiz da Execução medidas; interpor recursos. O MP é o FISCAL DA LEI na execução penal. ATENÇÃO: O MP PODE requerer livramento condicional e progressão de regime (não é exclusividade do condenado).', cobrado: 'hot', anos: ['2023', '2022'] },
          ]
        },
        {
          titulo: '🔥 Medidas de Segurança (Art. 96-99)',
          artigos: [
            { id: 'lep_adv_3', artigo: 'Art. 97', titulo: 'Internação vs Tratamento Ambulatorial', frente: 'Quando cabe internação e quando cabe tratamento ambulatorial como medida de segurança?', verso: 'INTERNAÇÃO: pena de reclusão seria aplicada (crimes mais graves). TRATAMENTO AMBULATORIAL: pena de detenção seria aplicada. O prazo MÍNIMO é de 1 a 3 anos (arbitrado pelo juiz), sem prazo máximo legal (STF: prazo máximo = maior pena abstrata do crime — HC 97.621).', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'lep_adv_4', artigo: 'Art. 96', titulo: 'Tipos de Medidas de Segurança', frente: 'Quais são as espécies de medidas de segurança?', verso: 'DETENTIVAS: internação em hospital de custódia e tratamento psiquiátrico. RESTRITIVAS: sujeição a tratamento ambulatorial. REQUISITOS para medida de segurança: prática de fato típico e ilícito + inimputabilidade ou semi-imputabilidade + periculosidade. STF: semi-imputável pode receber pena OU medida (sistema vicariante — não cumulável).', cobrado: 'hot', anos: ['2023', '2022'] },
          ]
        },
        {
          titulo: '🔥 Livramento Condicional (Art. 131-146)',
          artigos: [
            { id: 'lep_adv_5', artigo: 'Art. 131-132', titulo: 'Requisitos do Livramento Condicional', frente: 'Quais são os requisitos para concessão do livramento condicional?', verso: 'OBJETIVO: cumprimento de 1/3 da pena (primário, crime sem violência/ameaça) ou 1/2 (reincidente). Crime hediondo ou equiparado: 2/3 (vedado ao reincidente específico). SUBJETIVO: comportamento satisfatório durante execução; bom desempenho no trabalho; aptidão para prover subsistência; no crimes com violência: laudo pericial de cessação de periculosidade.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'lep_adv_6', artigo: 'Art. 145-146', titulo: 'Revogação do Livramento Condicional', frente: 'Quais as hipóteses de revogação obrigatória e facultativa do livramento condicional?', verso: 'OBRIGATÓRIA: condenação irrecorrível por crime doloso (crime na vigência do LC) OU crime anterior; frustração de crime anterior que causou descumprimento. FACULTATIVA: crime culposo durante o LC; descumprimento das condições.  Na revogação obrigatória: não computa o tempo de LC. Na facultativa: computa.', cobrado: 'hot', anos: ['2024', '2023'] },
          ]
        },
        {
          titulo: '🔥 Separação de Presos e Estabelecimentos',
          artigos: [
            { id: 'lep_adv_7', artigo: 'Art. 82-86', titulo: 'Critérios de Separação dos Presos', frente: 'Quais os critérios de separação dos presos nos estabelecimentos penais?', verso: 'Separação por: tipo de regime (fechado/semiaberto/aberto); situação processual (preso provisório x condenado); natureza do crime; sexo (estabelecimentos distintos para homens e mulheres); periculosidade. Primários ficam separados dos reincidentes. Os sujeitos à medida de segurança ficam separados dos demais.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'lep_adv_8', artigo: 'Art. 88', titulo: 'Cela Individual — Requisitos', frente: 'Quais são os requisitos mínimos da cela individual na penitenciária?', verso: 'A cela individual deve ter: área mínima de 6m²; salubridade do ambiente pela circulação de ar, insolação, condicionamento térmico; aeração, boa ventilação. ATENÇÃO: Os requisitos se aplicam à penitenciária (regime fechado). Cadeia pública pode ter alojamento coletivo.', cobrado: 'hot', anos: ['2023', '2022'] },
          ]
        }
      ]
    },

    // =============================================
    // CRIMES CONTRA A PESSOA — CP
    // =============================================
    {
      id: 'crimes_pessoa',
      disciplina: 'penal',
      nome: 'Crimes contra a Pessoa',
      sigla: 'CP — Arts. 121-154-B',
      icon: '🩸',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Homicídio (Art. 121)',
          artigos: [
            { id: 'cp_hom1', artigo: 'Art. 121, §1º', titulo: 'Homicídio Privilegiado', frente: 'O que é homicídio privilegiado e qual o benefício?', verso: 'Quando o agente comete o crime impelido por motivo de relevante valor social ou moral, ou sob o domínio de violenta emoção logo em seguida a injusta provocação da vítima. Benefício: REDUÇÃO de 1/6 a 1/3 da pena. Pode ser reconhecido junto com qualificadora de ordem objetiva (ex: emboscada + domínio de emoção — homicídio qualificado-privilegiado).', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'cp_hom2', artigo: 'Art. 121, §2º', titulo: 'Feminicídio', frente: 'O que caracteriza o feminicídio e qual o tratamento penal?', verso: 'Homicídio qualificado pelo feminicídio (art. 121, §2º, VI CP): morte contra mulher por razões de condição de sexo feminino (violência doméstica/familiar OU discriminação/menosprezo à condição de mulher). É CRIME HEDIONDO. Pena aumentada de 1/3 até a metade se: durante gestação, menor de 14 anos, idosa, deficiente ou presença de filhos.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'cp_hom3', artigo: 'Art. 121, §3º', titulo: 'Homicídio Culposo', frente: 'O que é homicídio culposo e quais os aumentos específicos?', verso: 'Homicídio praticado sem intenção, mas com negligência, imprudência ou imperícia. Pena: detenção 1 a 3 anos. AUMENTO de 1/3 se causado por inobservância de regra técnica de profissão/arte/ofício, ou se o agente deixa de prestar socorro imediato à vítima.', cobrado: 'hot', anos: ['2023', '2022'] },
          ]
        },
        {
          titulo: '🔥 Lesão Corporal e Crimes de Menor Potencial',
          artigos: [
            { id: 'cp_les1', artigo: 'Art. 129 CP', titulo: 'Lesão Corporal — Qualificadoras', frente: 'Quais são as qualificadoras da lesão corporal e suas penas?', verso: 'GRAVE (§1º): incapacidade por +30 dias; perigo de vida; debilidade permanente; aceleração de parto. Pena: 1 a 5 anos. GRAVÍSSIMA (§2º): incapacidade permanente; enfermidade incurável; perda de membro/sentido/função; deformidade permanente; aborto. Pena: 2 a 8 anos. SEGUIDA DE MORTE (§3º): pena de 4 a 12 anos.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'cp_les2', artigo: 'Art. 129 §9º', titulo: 'Lesão Corporal em Contexto de Violência Doméstica', frente: 'Qual o tratamento da lesão corporal praticada em contexto de violência doméstica?', verso: 'Pena de detenção de 3 meses a 3 anos (§9º). É ação penal pública INCONDICIONADA — independe da vontade da vítima. NÃO se aplica a Lei 9.099/95. A lesão leve + violência doméstica passa de 6 meses para 3 meses a 3 anos de detenção.', cobrado: 'hot', anos: ['2024', '2023'] },
          ]
        },
        {
          titulo: '🔥 Crimes contra a Honra',
          artigos: [
            { id: 'cp_hon1', artigo: 'Arts. 138-140', titulo: 'Calúnia, Difamação e Injúria', frente: 'Qual a diferença entre calúnia, difamação e injúria?', verso: 'CALÚNIA (138): imputar FATO CRIMINOSO FALSO. Admite a exceção da verdade (salvo ao Presidente, etc.). DIFAMAÇÃO (139): imputar FATO OFENSIVO À REPUTAÇÃO (verdadeiro ou falso). INJÚRIA (140): ofender a DIGNIDADE OU DECORO (não imputa fato, apenas xinga). Injúria racial: pena de 2 a 5 anos (≠ da calúnia racial).', cobrado: 'hot', anos: ['2023', '2022'] },
          ]
        }
      ]
    },

    // =============================================
    // PROCESSO PENAL — APROFUNDADO
    // =============================================
    {
      id: 'cpp_avancado',
      disciplina: 'penal',
      nome: 'Processo Penal — Aprofundado',
      sigla: 'CPP e Legislação Especial',
      icon: '⚖️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Nulidades no Processo Penal',
          artigos: [
            { id: 'cpp_nul1', artigo: 'Art. 564 CPP', titulo: 'Nulidades Absolutas e Relativas', frente: 'Qual a diferença entre nulidade absoluta e relativa no processo penal?', verso: 'ABSOLUTA: viola garantia constitucional ou norma cogente; pode ser alegada a qualquer tempo; não precisa demonstrar prejuízo; o juiz pode declarar de ofício. RELATIVA: violação de norma infraconstitucional; deve ser alegada no momento oportuno (preclui); há presunção de prejuízo para a acusação e exige demonstração para a defesa.', cobrado: 'hot', anos: ['2023', '2022'] },
          ]
        },
        {
          titulo: '🔥 Recursos no Processo Penal',
          artigos: [
            { id: 'cpp_rec1', artigo: 'Art. 593 CPP', titulo: 'Apelação Criminal', frente: 'Quando cabe apelação no processo penal (art. 593)?', verso: 'Das sentenças definitivas de condenação ou absolvição; das decisões definitivas ou com força de definitivas não abrangidas pelo recurso em sentido estrito; das decisões do Tribunal do Júri (quando a decisão dos jurados for manifestamente contrária à prova dos autos, nulidade posterior à pronúncia, erro ou injustiça na aplicação da pena, falta de homologação).', cobrado: 'hot', anos: ['2023'] },
            { id: 'cpp_rec2', artigo: 'Art. 581 CPP', titulo: 'Recurso em Sentido Estrito (RESE)', frente: 'Quais as principais decisões que admitem RESE?', verso: 'Da pronúncia/impronúncia; da não recebimento de denúncia/queixa; da concessão/negativa de habeas corpus; da decretação de extinção de punibilidade; do deferimento de liberdade provisória ou relaxamento de prisão; da decisão que concede fiança. O prazo é de 5 dias para interposição.', cobrado: 'hot', anos: ['2023', '2022'] },
          ]
        },
        {
          titulo: '🔥 Provas — Princípios e Vedações',
          artigos: [
            { id: 'cpp_prov1', artigo: 'Art. 157 CPP', titulo: 'Provas Ilícitas', frente: 'O que são provas ilícitas e qual o tratamento no CPP?', verso: 'São inadmissíveis as provas obtidas por meios ilícitos (art. 5º, LVI CF). Provas ilícitas por derivação (fruits of the poisonous tree) também são inadmissíveis, SALVO quando não há nexo de causalidade com a ilicitude originária, ou quando o resultado seria de qualquer modo obtido por fonte independente. A prova deve ser desentranhada dos autos.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'cpp_prov2', artigo: 'Art. 155 CPP', titulo: 'Livre Convencimento Motivado', frente: 'O que é o sistema do livre convencimento motivado no CPP?', verso: 'O juiz formará sua convicção pela livre apreciação da prova produzida em contraditório judicial. NÃO pode ser baseado exclusivamente em elementos informativos do inquérito policial. Exceção: prova cautelar, não repetível e antecipada. O juiz deve FUNDAMENTAR sua decisão.', cobrado: 'hot', anos: ['2023', '2022'] },
          ]
        }
      ]
    },

    // =============================================
    // PORTUGUÊS E REDAÇÃO PARA PPRN
    // =============================================
    {
      id: 'portugues_concurso',
      disciplina: 'portugues',
      nome: 'Língua Portuguesa — Concurso',
      sigla: 'Língua Portuguesa',
      icon: '📝',
      peso: 1,
      secoes: [
        {
          titulo: '🔥 Pontuação e Sintaxe — MAIS COBRADO',
          artigos: [
            { id: 'port_1', artigo: 'Uso da Vírgula', titulo: 'Uso Obrigatório da Vírgula', frente: 'Quando o uso da vírgula é OBRIGATÓRIO?', verso: '1) Isolar o VOCATIVO. 2) Isolar o APOSTO. 3) Separar elementos de uma ENUMERAÇÃO. 4) Isolar ADJUNTO ADVERBIAL deslocado. 5) Isolar ORAÇÃO SUBORDINADA ADVERBIAL anteposta. 6) Separar ORAÇÕES COORDENADAS ASSINDÉTICAS. 7) Isolar ORAÇÕES ADJETIVAS EXPLICATIVAS.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'port_2', artigo: 'Crase', titulo: 'Uso Obrigatório da Crase', frente: 'Quando o uso da crase é obrigatório?', verso: 'Antes de palavras FEMININAS: a + a(s). Antes de HORAS DETERMINADAS: às 14h. Antes de PRONOMES DEMONSTRATIVOS femininos: àquela, àquelas, àquilo. Antes de LOCUÇÕES FEMININAS: à moda de, à medida que. NUNCA: antes de masculinos, verbos, pronomes pessoais, "que", pronomes de tratamento (exceto "senhora, senhorita").', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'port_3', artigo: 'Concordância Verbal', titulo: 'Casos Especiais de Concordância Verbal', frente: 'Quais os principais casos especiais de concordância verbal?', verso: '1) PRONOME RELATIVO "QUE": verbo concorda com o antecedente. 2) PRONOME "SE": com sujeito simples, concorda com o sujeito. 3) EXPRESSÕES PARTITIVAS (maioria de, parte de): pode ir ao singular ou plural. 4) COLETIVO + ESPECIFICADOR: verbo no singular (multidão de pessoas correu). 5) SUJEITO COMPOSTO posposto: pode ir ao singular se os sujeitos forem sinônimos.', cobrado: 'hot', anos: ['2023', '2022'] },
          ]
        },
        {
          titulo: '🔥 Semântica e Coesão Textual',
          artigos: [
            { id: 'port_4', artigo: 'Coesão Referencial', titulo: 'Mecanismos de Coesão', frente: 'O que é coesão textual e quais os principais mecanismos?', verso: 'Coesão é a conexão entre os elementos do texto. Mecanismos: REFERENCIAL (pronomes, artigos, demonstrativos que retomam elementos); SEQUENCIAL (conectivos: porém, entretanto, portanto, visto que); LEXICAL (sinônimos, hiperônimos, antônimos, repetição). Texto coeso ≠ coerente — coerência é semântica.', cobrado: 'hot', anos: ['2023', '2022'] },
          ]
        }
      ]
    },

    // =============================================
    // LEI ORGÂNICA POLÍCIA PENAL / RN
    // =============================================
    {
      id: 'pol_penal',
      disciplina: 'legislacao',
      nome: 'Polícia Penal — Legislação Específica',
      sigla: 'EC 104/2019 + Lei Estadual PPRN',
      icon: '🛡️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 EC 104/2019 — Criação da Polícia Penal',
          artigos: [
            { id: 'pp_ec104_1', artigo: 'EC 104/2019 — Art. 144', titulo: 'Criação da Polícia Penal', frente: 'O que a EC 104/2019 inseriu no art. 144 da CF?', verso: 'A EC 104/2019 incluiu a POLÍCIA PENAL nos órgãos de segurança pública do art. 144 CF (§5º-A e §6º). A Polícia Penal FEDERAL vincula-se ao órgão administrador do sistema penal federal; as ESTADUAIS e a DISTRITAL vinculam-se ao órgão administrador do sistema penal da unidade federativa. Incumbe às polícias penais a segurança dos estabelecimentos penais.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'pp_ec104_2', artigo: 'Art. 144, §5°-A CF', titulo: 'Atribuições da Polícia Penal', frente: 'Quais são as atribuições constitucionais da Polícia Penal?', verso: 'Incumbe às Polícias Penais, vinculadas ao órgão administrador do sistema penal da unidade federativa a que pertencem, nos termos da legislação estadual: a segurança dos estabelecimentos penais; a escolta e custódia dos presos; atividades de inteligência; apoio a órgãos de segurança pública; reinserção social dos apenados.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'pp_ec104_3', artigo: 'Art. 144, §6º CF', titulo: 'Vinculação das Polícias Penais', frente: 'A quem se vinculam as Polícias Penais estaduais e a quem se subordinam?', verso: 'As Polícias Penais ESTADUAIS vinculam-se ao órgão administrador do sistema penal estadual (geralmente Secretaria de Estado de Administração Penitenciária ou equivalente). NÃO se subordinam à Polícia Civil ou Militar. São carreira independente. No RN, a Polícia Penal vincula-se à Secretaria de Estado de Administração Penitenciária (SEAP).', cobrado: 'hot', anos: ['2024', '2023'] },
          ]
        },
        {
          titulo: '🔥 Direitos e Vedações do Policial Penal',
          artigos: [
            { id: 'pp_dir1', artigo: 'Lei Estadual RN', titulo: 'Prerrogativas do Policial Penal', frente: 'Quais as principais prerrogativas do Policial Penal do RN?', verso: 'Porte de arma de fogo em serviço; utilização de algemas; uso de força moderada para manutenção da ordem; acesso aos prontuários dos internos; representação perante o Corregedor. No exercício da função: deve usar uniforme e identificação. Fora do serviço: porte de arma facultativo conforme legislação estadual.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'pp_dir2', artigo: 'Legislação Penitenciária', titulo: 'Uso de Algemas — Súmula Vinculante 11', frente: 'Quando é permitido o uso de algemas pelo Policial Penal?', verso: 'Súmula Vinculante 11 do STF: Uso de algemas é lícito apenas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia. A excepcionalidade deve ser justificada. O uso indevido de algemas configura abuso de autoridade. ATENÇÃO: algemas devem ser registradas no prontuário.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
          ]
    },
    // =============================================
    // LEI DE ORGANIZAÇÕES CRIMINOSAS (LEI 12.850/13)
    // =============================================
    {
      id: 'org_crim',
      disciplina: 'legislacao',
      nome: 'Organizações Criminosas',
      sigla: 'Lei 12.850/13',
      icon: '👥',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Conceito e Elementos de Org. Criminosa',
          artigos: [
            { id: 'oc_1', artigo: 'Art. 1º, §1º', titulo: 'Conceito Legal', frente: 'O que é considerado Organização Criminosa segundo o Art. 1º da Lei 12.850/13?', verso: 'Associação de 4 (quatro) ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter vantagem, mediante infrações cuja pena máxima seja superior a 4 anos ou de caráter transnacional.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'oc_2', artigo: 'Art. 2º', titulo: 'Crime e Integração', frente: 'Qual a pena para quem promove, constitui, financia ou integra organização criminosa?', verso: 'Reclusão de 3 a 8 anos e multa, sem prejuízo das penas correspondentes às demais infrações praticadas.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'oc_3', artigo: 'Art. 2º, §2º', titulo: 'Causa de Aumento (Arma)', frente: 'Qual a causa de aumento de pena pelo emprego de arma de fogo na organização?', verso: 'A pena é aumentada de até a METADE se houver emprego de arma de fogo na atuação ou estrutura da organização criminosa.', cobrado: 'hot', anos: ['2024', '2022'] }
          ]
        },
        {
          titulo: '🔥 Colaboração Premiada e Meios de Obtenção de Prova',
          artigos: [
            { id: 'oc_4', artigo: 'Art. 4º', titulo: 'Benefícios da Colaboração', frente: 'Quais os benefícios possíveis concedidos pelo juiz ao colaborador premiado?', verso: 'Conceder o perdão judicial; reduzir a pena privativa de liberdade em até 2/3; ou substituir a pena por restritiva de direitos.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'oc_5', artigo: 'Art. 4º, §4º', titulo: 'Prazo do Inquérito no Acordo', frente: 'O que ocorre com os prazos de investigação durante as tratativas do acordo de colaboração?', verso: 'O juiz poderá suspender o prazo para oferecimento da denúncia ou o processo por até 6 meses, prorrogáveis por igual período, mediante pedido do delegado ou do MP.', cobrado: 'medium', anos: ['2022'] }
          ]
        }
      ]
    },
    // =============================================
    // CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA
    // =============================================
    {
      id: 'crimes_adm_pub',
      disciplina: 'penal',
      nome: 'Crimes contra a Administração Pública',
      sigla: 'CP — Arts. 312 a 327 e 333',
      icon: '🏛️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Crimes Cometidos por Funcionário Público',
          artigos: [
            { id: 'cap_1', artigo: 'Art. 312 CP', titulo: 'Peculato', frente: 'O que configura o crime de Peculato (Art. 312 do CP)?', verso: 'Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo em proveito próprio ou alheio. Pena: reclusão de 2 a 12 anos. Admite modalidade culposa (§2º).', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'cap_2', artigo: 'Art. 316 CP', titulo: 'Concussão', frente: 'O que caracteriza o crime de Concussão (Art. 316 do CP)?', verso: 'Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida. Pena: reclusão de 2 a 12 anos. Núcleo principal: EXIGIR.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'cap_3', artigo: 'Art. 317 CP', titulo: 'Corrupção Passiva', frente: 'O que caracteriza o crime de Corrupção Passiva (Art. 317 do CP)?', verso: 'Solicitar ou receber, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, ou aceitar promessa de tal vantagem. Pena: reclusão de 2 a 12 anos.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'cap_4', artigo: 'Art. 319 CP', titulo: 'Prevaricação', frente: 'O que configura o crime de Prevaricação (Art. 319 do CP)?', verso: 'Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal. Pena: detenção de 3 meses a 1 ano.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'cap_5', artigo: 'Art. 320 CP', titulo: 'Condescendência Criminosa', frente: 'O que é o crime de Condescendência Criminosa (Art. 320 do CP)?', verso: 'Deixar o funcionário, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo ou, quando lhe falte competência, não levar o fato ao conhecimento da autoridade competente. Pena: detenção de 15 dias a 1 mês ou multa.', cobrado: 'hot', anos: ['2023', '2021'] }
          ]
        },
        {
          titulo: '🔥 Crimes Cometidos por Particular',
          artigos: [
            { id: 'cap_6', artigo: 'Art. 333 CP', titulo: 'Corrupção Ativa', frente: 'O que é o crime de Corrupção Ativa (Art. 333 do CP)?', verso: 'Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, retardar ou omitir ato de ofício. Pena: reclusão de 2 a 12 anos. O crime se consuma com a mera oferta/promessa.', cobrado: 'hot', anos: ['2024', '2023'] }
          ]
        }
      ]
    }
  ],

  getDeck(id) {
    return this.decks.find(d => d.id === id);
  },

  getAllArticles() {
    const articles = [];
    this.decks.forEach(deck => {
      deck.secoes.forEach(sec => {
        sec.artigos.forEach(art => {
          articles.push({ ...art, deckId: deck.id, deckNome: deck.nome, disciplina: deck.disciplina });
        });
      });
    });
    return articles;
  }
};
