// ============================================================
// LEI_SECA_REFORCO.JS — Flashcards de reforço em legislação federal
// e constitucional pouco ou nada cobertos até então: Pacote
// Anticrime (Lei 13.964/2019), Lei de Abuso de Autoridade (Lei
// 13.869/2019), normas específicas da execução penal federal (Lei
// 11.671/2008, Resolução CNPCP sobre revista pessoal), Funções
// Essenciais à Justiça (Advocacia Pública, Defensoria Pública) e
// Processo Legislativo (art. 59 CF) e crimes contra a administração
// pública (CP, arts. 312-333). Conteúdo federal — vale para
// qualquer curso (PPRN e PPPE).
// ============================================================

const LEI_SECA_REFORCO = {
  decks: [

    // =============================================
    // PACOTE ANTICRIME (LEI 13.964/2019)
    // =============================================
    {
      id: 'pacote_anticrime',
      disciplina: 'legislacao',
      nome: 'Pacote Anticrime',
      sigla: 'Lei 13.964/2019',
      icon: '🚔',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '⚖️ Estrutura Acusatória',
          artigos: [
            { id: 'reforco_pac_1', artigo: 'Lei 13.964/2019', titulo: 'Juiz das Garantias', frente: 'O que é o juiz das garantias, instituído pelo Pacote Anticrime?', verso: 'Magistrado responsável por acompanhar a fase de investigação criminal, controlando a legalidade dos atos e a proteção dos direitos fundamentais do investigado, distinto do juiz que julgará o processo.', cobrado: 'hot', anos: [] },
            { id: 'reforco_pac_2', artigo: 'Art. 311 do CPP (redação da Lei 13.964/2019)', titulo: 'Vedação à Prisão Preventiva de Ofício', frente: 'O Pacote Anticrime alterou o art. 311 do CPP em relação à prisão preventiva. O que mudou?', verso: 'Suprimiu a expressão "de ofício": o juiz não pode mais decretar prisão preventiva por iniciativa própria, apenas mediante requerimento do MP, do querelante, do assistente ou representação da autoridade policial.', cobrado: 'hot', anos: [] },
            { id: 'reforco_pac_3', artigo: 'Lei 13.964/2019', titulo: 'Acordo de Não Persecução Penal (ANPP)', frente: 'O que é o Acordo de Não Persecução Penal (ANPP), instituído pelo Pacote Anticrime?', verso: 'Instrumento que permite ao Ministério Público, em vez de oferecer denúncia, propor ao investigado (não reincidente, sem indícios de conduta criminal habitual) o cumprimento de condições, evitando o processo penal — aplicável a infrações sem violência ou grave ameaça e com pena mínima inferior a 4 anos.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '🔬 Identificação Criminal e Penas',
          artigos: [
            { id: 'reforco_pac_4', artigo: 'Lei 12.037/2009 (alterada pela Lei 13.964/2019)', titulo: 'Banco de Perfis Genéticos', frente: 'O que o Pacote Anticrime tornou obrigatório para condenados por crimes dolosos com violência ou por crimes hediondos?', verso: 'A identificação do perfil genético, mediante extração de DNA por técnica adequada e indolor, no momento do ingresso no estabelecimento prisional, alimentando o banco nacional de perfis genéticos.', cobrado: 'hot', anos: [] },
            { id: 'reforco_pac_5', artigo: 'Art. 75 do CP (redação da Lei 13.964/2019)', titulo: 'Limite de Cumprimento de Pena', frente: 'Qual o novo limite máximo de cumprimento de pena privativa de liberdade, após o Pacote Anticrime?', verso: '40 anos (antes eram 30 anos).', cobrado: 'hot', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // LEI DE ABUSO DE AUTORIDADE (LEI 13.869/2019)
    // =============================================
    {
      id: 'abuso_autoridade',
      disciplina: 'legislacao',
      nome: 'Lei de Abuso de Autoridade',
      sigla: 'Lei 13.869/2019',
      icon: '🛑',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '📋 Elementos do Crime',
          artigos: [
            { id: 'reforco_abuso_1', artigo: 'Lei 13.869/2019', titulo: 'Requisitos Cumulativos', frente: 'Quais os 3 requisitos cumulativos para a configuração do crime de abuso de autoridade?', verso: '(1) Sujeito ativo agente público, em sentido amplo; (2) conduta tipificada em dispositivo específico da lei; (3) dolo específico (finalidade de prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal).', cobrado: 'hot', anos: [] },
            { id: 'reforco_abuso_2', artigo: 'Lei 13.869/2019', titulo: 'Sujeito Ativo', frente: 'Quem pode ser sujeito ativo do crime de abuso de autoridade?', verso: 'Qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, Estados, DF, Municípios e Territórios — crime próprio.', cobrado: 'medium', anos: [] },
            { id: 'reforco_abuso_3', artigo: 'Lei 13.869/2019', titulo: 'Pena Genérica', frente: 'Qual a faixa de pena típica prevista para os crimes de abuso de autoridade?', verso: 'Detenção de 6 meses a 4 anos, e multa (variando conforme o tipo específico), além de perda do cargo e inabilitação para função pública em casos de reiteração.', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // EXECUÇÃO PENAL FEDERAL E RESOLUÇÕES DO CNPCP
    // =============================================
    {
      id: 'execucao_penal_federal',
      disciplina: 'lep',
      nome: 'Sistema Penitenciário Federal e Resoluções CNPCP',
      sigla: 'Lei 11.671/2008 + Resoluções CNPCP',
      icon: '🏢',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔒 Presídios Federais (Lei 11.671/2008)',
          artigos: [
            { id: 'reforco_fed_1', artigo: 'Art. 3º da Lei 11.671/2008', titulo: 'Caráter Excepcional', frente: 'Como é caracterizada a inclusão de um preso em estabelecimento penal federal de segurança máxima?', verso: 'Medida excepcional, cabível quando a medida se justifique no interesse da segurança pública ou do próprio preso, e por prazo determinado.', cobrado: 'hot', anos: [] },
            { id: 'reforco_fed_2', artigo: 'Art. 10 da Lei 11.671/2008 (redação da Lei 13.964/2019)', titulo: 'Prazo de Permanência', frente: 'Qual é hoje o prazo de permanência no estabelecimento penal federal, após o Pacote Anticrime?', verso: 'Até 3 anos, renovável por iguais períodos, mediante pedido motivado do juízo de origem, desde que persistam os motivos que determinaram a transferência (antes da reforma de 2019, o prazo era de 360 dias).', cobrado: 'hot', anos: [] },
            { id: 'reforco_fed_3', artigo: 'Art. 10, §1º da Lei 11.671/2008', titulo: 'Comunicação de Renovação', frente: 'Com quantos dias de antecedência o Depen deve comunicar o juízo de origem sobre o fim do prazo, solicitando manifestação sobre renovação?', verso: '60 (sessenta) dias antes do término do período do preso no estabelecimento federal.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '🚫 Revista Pessoal (Resoluções CNPCP)',
          artigos: [
            { id: 'reforco_res_1', artigo: 'Resolução CNPCP nº 5/2014 (matéria hoje na Resolução nº 28/2022)', titulo: 'Vedação à Revista Vexatória', frente: 'O que as resoluções do CNPCP sobre revista pessoal determinam em relação a práticas vexatórias?', verso: 'Vedam qualquer forma de revista vexatória, desumana ou degradante, recomendando o uso de equipamentos eletrônicos (detectores de metal, aparelhos de raio-x, scanners corporais) para identificar armas, explosivos, drogas ou outros objetos ilícitos.', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '📚 Educação, Saúde e Assistência Religiosa',
          artigos: [
            { id: 'reforco_res_2', artigo: 'Decreto nº 7.626/2011', titulo: 'PEESP', frente: 'O que institui o Decreto nº 7.626/2011?', verso: 'O Plano Estratégico de Educação no Âmbito do Sistema Prisional (PEESP), com o objetivo de ampliar e qualificar a oferta educacional às pessoas em privação de liberdade.', cobrado: 'medium', anos: [] },
            { id: 'reforco_res_3', artigo: 'Resolução CNPCP nº 9/2009', titulo: 'Proporção Agente-Preso', frente: 'Sobre o que trata a Resolução CNPCP nº 9/2009?', verso: 'Estabelece diretrizes sobre a proporção adequada entre o número de agentes penitenciários e a população carcerária, como parâmetro de segurança e gestão dos estabelecimentos.', cobrado: 'medium', anos: [] },
            { id: 'reforco_res_4', artigo: 'Resolução CNPCP nº 8/2011', titulo: 'Assistência Religiosa', frente: 'O que garante a Resolução CNPCP nº 8/2011 aos presos?', verso: 'Diretrizes para a assistência religiosa nos estabelecimentos penais, assegurando a liberdade de culto e o acesso a diferentes credos, em harmonia com o direito constitucional à liberdade religiosa.', cobrado: 'medium', anos: [] },
            { id: 'reforco_res_5', artigo: 'Portaria Interministerial MJ/SPM nº 210/2014', titulo: 'Mulheres em Privação de Liberdade', frente: 'O que institui a Portaria Interministerial nº 210/2014?', verso: 'A Política Nacional de Atenção às Mulheres em Situação de Privação de Liberdade, com diretrizes específicas para as necessidades de gênero (saúde, maternidade, convivência familiar).', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // FUNÇÕES ESSENCIAIS À JUSTIÇA E PROCESSO LEGISLATIVO
    // =============================================
    {
      id: 'funcoes_essenciais_processo_legislativo',
      disciplina: 'constitucional',
      nome: 'Funções Essenciais à Justiça e Processo Legislativo',
      sigla: 'CF arts. 59, 103-B, 127-134',
      icon: '🏛️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '⚖️ Funções Essenciais à Justiça',
          artigos: [
            { id: 'reforco_func_1', artigo: 'Art. 127 da CF', titulo: 'Ministério Público', frente: 'Qual a missão institucional do Ministério Público, segundo o art. 127 da CF?', verso: 'Instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe a defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis.', cobrado: 'hot', anos: [] },
            { id: 'reforco_func_2', artigo: 'Arts. 131-132 da CF', titulo: 'Advocacia Pública', frente: 'Qual o papel da Advocacia-Geral da União (art. 131 CF)?', verso: 'Representar a União judicial e extrajudicialmente, além de exercer atividades de consultoria e assessoramento jurídico do Poder Executivo. Os procuradores dos Estados e do DF, tratados no art. 132, exercem função equivalente no âmbito estadual.', cobrado: 'medium', anos: [] },
            { id: 'reforco_func_3', artigo: 'Art. 134 da CF', titulo: 'Defensoria Pública', frente: 'Qual a missão institucional da Defensoria Pública, segundo o art. 134 da CF?', verso: 'Instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe a orientação jurídica, a promoção dos direitos humanos e a defesa, em todos os graus, dos direitos individuais e coletivos, de forma integral e gratuita, aos necessitados.', cobrado: 'hot', anos: [] },
            { id: 'reforco_func_4', artigo: 'Art. 134, §1º da CF', titulo: 'Garantias da Defensoria', frente: 'Quais garantias a CF assegura aos membros da Defensoria Pública?', verso: 'Ingresso em cargos de carreira mediante concurso público de provas e títulos, inamovibilidade, e vedação ao exercício da advocacia fora das atribuições institucionais.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '📜 Processo Legislativo',
          artigos: [
            { id: 'reforco_leg_1', artigo: 'Art. 59 da CF', titulo: 'Espécies Normativas', frente: 'Quais são as 7 espécies normativas previstas no art. 59 da CF?', verso: 'Emendas à Constituição, leis complementares, leis ordinárias, leis delegadas, medidas provisórias, decretos legislativos e resoluções.', cobrado: 'hot', anos: [] },
            { id: 'reforco_leg_2', artigo: 'Art. 59 da CF', titulo: 'Hierarquia das Espécies Normativas', frente: 'Existe hierarquia entre as espécies normativas do art. 59 da CF?', verso: 'Não. Cada espécie atua dentro da sua área de competência constitucionalmente reservada (critério de competência, não de hierarquia) — a exceção prática é a emenda constitucional, que se sobrepõe às demais por alterar o próprio texto da Constituição.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '👨‍⚖️ Conselho Nacional de Justiça',
          artigos: [
            { id: 'reforco_cnj_1', artigo: 'Art. 103-B da CF', titulo: 'Função do CNJ', frente: 'Qual a principal função do Conselho Nacional de Justiça (CNJ)?', verso: 'Controle da atuação administrativa e financeira do Poder Judiciário e do cumprimento dos deveres funcionais dos juízes, zelando pela autonomia do Judiciário e pela observância do Estatuto da Magistratura.', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // LEI 9.784/1999 — PROCESSO ADMINISTRATIVO FEDERAL
    // =============================================
    {
      id: 'processo_administrativo_federal',
      disciplina: 'administrativo',
      nome: 'Processo Administrativo Federal',
      sigla: 'Lei 9.784/1999',
      icon: '📄',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '📋 Princípios e Prazos',
          artigos: [
            { id: 'reforco_pad_1', artigo: 'Art. 2º da Lei 9.784/1999', titulo: 'Princípios Expressos', frente: 'Quais princípios expressos regem o processo administrativo federal, segundo o art. 2º?', verso: 'Legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica e interesse público, entre outros.', cobrado: 'hot', anos: [] },
            { id: 'reforco_pad_2', artigo: 'Art. 59 da Lei 9.784/1999', titulo: 'Prazo do Recurso Administrativo', frente: 'Qual o prazo, salvo disposição específica, para interpor recurso administrativo?', verso: '10 (dez) dias, contados da ciência ou divulgação oficial da decisão recorrida.', cobrado: 'hot', anos: [] },
            { id: 'reforco_pad_3', artigo: 'Art. 59, §1º da Lei 9.784/1999', titulo: 'Prazo de Decisão do Recurso', frente: 'Qual o prazo máximo para decidir o recurso administrativo, salvo disposição diversa?', verso: '30 (trinta) dias, a partir do recebimento dos autos pelo órgão competente, podendo ser prorrogado por igual período mediante justificativa.', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA (CP, ARTS. 312-333)
    // =============================================
    {
      id: 'crimes_administracao_publica',
      disciplina: 'penal',
      nome: 'Crimes contra a Administração Pública',
      sigla: 'CP, arts. 312-333',
      icon: '💰',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '⚖️ Praticados por Funcionário Público',
          artigos: [
            { id: 'reforco_adm_1', artigo: 'Art. 312 do CP', titulo: 'Peculato', frente: 'Em que consiste o peculato (art. 312 do CP)?', verso: 'Apropriar-se ou desviar, em proveito próprio ou alheio, dinheiro, valor ou qualquer bem móvel, público ou particular, de que o funcionário público tem posse em razão do cargo.', cobrado: 'hot', anos: [] },
            { id: 'reforco_adm_2', artigo: 'Art. 316 do CP', titulo: 'Concussão', frente: 'Em que consiste a concussão (art. 316 do CP)?', verso: 'Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida. Diferencia-se da corrupção passiva por envolver EXIGÊNCIA (imposição), não mera solicitação.', cobrado: 'hot', anos: [] },
            { id: 'reforco_adm_3', artigo: 'Art. 317 do CP', titulo: 'Corrupção Passiva', frente: 'Em que consiste a corrupção passiva (art. 317 do CP)?', verso: 'Solicitar ou receber, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, ou aceitar promessa de tal vantagem. Diferencia-se da concussão por envolver SOLICITAÇÃO/aceitação (sem imposição coercitiva).', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '⚖️ Praticados por Particular',
          artigos: [
            { id: 'reforco_adm_4', artigo: 'Art. 333 do CP', titulo: 'Corrupção Ativa', frente: 'Em que consiste a corrupção ativa (art. 333 do CP)?', verso: 'Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício. É crime formal, consumado com a simples oferta/promessa, independentemente de aceitação.', cobrado: 'hot', anos: [] }
          ]
        }
      ]
    }
  ]
};
