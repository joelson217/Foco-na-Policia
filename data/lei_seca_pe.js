// ============================================================
// LEI_SECA_PE.JS — Flashcards de Lei Seca específicos do curso PPPE
// (Polícia Penal de Pernambuco). Baseado na Lei nº 15.755/2016
// (Código Penitenciário de PE), LC 150/2009 (GOSPEPE) e LC 422/2019
// (atribuições do cargo) — fontes: Alepe Legis (legis.alepe.pe.gov.br).
// ============================================================

const LEI_SECA_PE = {
  decks: [

    // =============================================
    // POLÍCIA PENAL — BASE CONSTITUCIONAL E CARREIRA (PE)
    // =============================================
    {
      id: 'pol_penal_pe',
      disciplina: 'legislacao_pe',
      nome: 'Polícia Penal — Base Constitucional e Carreira (PE)',
      sigla: 'EC 104/2019 + LC 150/2009 + LC 422/2019',
      icon: '🛡️',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: '🔥 EC 104/2019 — Criação da Polícia Penal',
          artigos: [
            { id: 'pe_ec104_1', artigo: 'EC 104/2019 — Art. 144', titulo: 'Criação da Polícia Penal', frente: 'O que a EC 104/2019 inseriu no art. 144 da Constituição Federal?', verso: 'Incluiu a POLÍCIA PENAL entre os órgãos de segurança pública do art. 144 CF (§5º-A e §6º). A Polícia Penal ESTADUAL de Pernambuco vincula-se ao órgão administrador do sistema penal do Estado (a SERES — Secretaria Executiva de Ressocialização), nos termos da legislação estadual.', cobrado: 'hot', anos: ['2022'] },
            { id: 'pe_ec104_2', artigo: 'Art. 144, §5°-A CF', titulo: 'Atribuições da Polícia Penal', frente: 'Quais são as atribuições constitucionais da Polícia Penal?', verso: 'A segurança dos estabelecimentos penais e a garantia da ordem no seu âmbito, cabendo-lhe a custódia dos presos.', cobrado: 'hot', anos: ['2022'] },
            { id: 'pe_ec104_3', artigo: 'Art. 144, §6º CF', titulo: 'Vinculação das Polícias Penais Estaduais', frente: 'A quem se vinculam as Polícias Penais estaduais?', verso: 'Vinculam-se ao órgão administrador do sistema penal da unidade federativa a que pertencem — em Pernambuco, a Secretaria Executiva de Ressocialização (SERES), subordinada à Secretaria de Justiça e Direitos Humanos (SJDH). Não se subordinam à Polícia Civil nem à Militar; são carreira própria.', cobrado: 'hot', anos: ['2022'] }
          ]
        },
        {
          titulo: '📋 Carreira — GOSPEPE (LC 150/2009)',
          artigos: [
            { id: 'pe_lc150_1', artigo: 'Art. 1º-2º da LC 150/2009', titulo: 'Plano de Cargos e Carreiras', frente: 'O que institui a LC nº 150/2009 e como é estruturada a carreira?', verso: 'Institui o Plano de Cargos, Carreiras e Vencimentos do Grupo Ocupacional Segurança Penitenciária (GOSPEPE), regendo o cargo de Agente de Segurança Penitenciária. A carreira é organizada em 4 classes (I a IV), hierarquicamente escalonadas, cada uma com 7 padrões de vencimento (letras "a" a "g").', cobrado: 'hot', anos: ['2022'] },
            { id: 'pe_lc150_2', artigo: 'Art. 2º, §3º, da LC 150/2009', titulo: 'Inspetor Policial Penal Especial', frente: 'O que ocorre quando o servidor atinge a Classe IV da carreira?', verso: 'O servidor passa a ostentar a denominação de Inspetor Policial Penal Especial, com atribuições e prerrogativas próprias definidas em lei complementar específica (LC 422/2019).', cobrado: 'medium', anos: [] },
            { id: 'pe_lc150_3', artigo: 'Art. 7º da LC 150/2009', titulo: 'Regulamentação por Decreto', frente: 'Como são definidas as descrições sumárias de atribuições, prerrogativas e quantitativos de vagas?', verso: 'São definidas por decreto do Poder Executivo, regulamentando a lei complementar (Decreto nº 42.065/2015).', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '⚖️ Atribuições do Cargo (LC 422/2019)',
          artigos: [
            { id: 'pe_lc422_1', artigo: 'Art. 1º da LC 422/2019', titulo: 'Objeto da Lei', frente: 'Sobre o que dispõe a Lei Complementar nº 422/2019?', verso: 'Dispõe sobre a síntese de atribuições e prerrogativas institucionais do cargo de Agente de Segurança Penitenciária (ASP), regulamentando o art. 7º da LC 150/2009, no âmbito da SERES/SJDH.', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // CÓDIGO PENITENCIÁRIO DE PERNAMBUCO (LEI 15.755/2016)
    // =============================================
    {
      id: 'codigo_penitenciario_pe',
      disciplina: 'legislacao_pe',
      nome: 'Código Penitenciário de Pernambuco',
      sigla: 'Lei 15.755/2016',
      icon: '🏛️',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: '📌 Objetivo e Finalidade',
          artigos: [
            { id: 'pe_cod_1', artigo: 'Art. 1º', titulo: 'Objetivo do Código', frente: 'Qual é o objetivo do Código Penitenciário de Pernambuco?', verso: 'Regulamentar o sistema penitenciário do Estado, visando a cumprir efetivamente os preceitos da Lei Federal nº 7.210/84 (LEP) e da Constituição Federal.', cobrado: 'hot', anos: [] },
            { id: 'pe_cod_3', artigo: 'Art. 3º', titulo: 'Finalidade da Execução', frente: 'Qual a finalidade da execução penal, segundo o art. 3º?', verso: 'Proporcionar condições para a reparação social e a reintegração do condenado, preservando os direitos fundamentais não atingidos pela sentença ou pela lei.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '🏢 Estabelecimentos Penais',
          artigos: [
            { id: 'pe_cod_23', artigo: 'Art. 23', titulo: 'Tipos de Estabelecimentos', frente: 'Quais são os tipos de estabelecimentos penais previstos no Código?', verso: 'Penitenciária, Cadeia Pública, Colônia Agrícola ou Industrial, Casa do Albergado, Centro de Classificação, Presídio e Centro de Saúde Penitenciário.', cobrado: 'hot', anos: [] },
            { id: 'pe_cod_26', artigo: 'Art. 26', titulo: 'Padrão de Celas', frente: 'Qual é a área mínima exigida para uma cela?', verso: '6m² (seis metros quadrados), com condições adequadas de salubridade, ventilação e iluminação.', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '⚖️ Direitos e Deveres do Preso',
          artigos: [
            { id: 'pe_cod_110', artigo: 'Art. 110', titulo: 'Deveres do Preso', frente: 'Quais são os principais deveres do preso?', verso: 'Acatar as autoridades, cumprir os regulamentos, manter conduta disciplinada e submeter-se à execução da pena e às atividades laborais.', cobrado: 'medium', anos: [] },
            { id: 'pe_cod_112', artigo: 'Art. 112, XII', titulo: 'Direito ao Nome Social', frente: 'O direito do preso de ser chamado por seu nome inclui o quê?', verso: 'O reconhecimento do nome social, além do nome civil.', cobrado: 'medium', anos: [] },
            { id: 'pe_cod_118', artigo: 'Art. 118', titulo: 'Vedações', frente: 'O que é vedado pelo Código Penitenciário em relação ao tratamento do preso?', verso: 'Castigo corporal, cela escura, sanção disciplinar coletiva e penas cruéis ou degradantes.', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '⚠️ Faltas Disciplinares, RDD e Sanções',
          artigos: [
            { id: 'pe_cod_130', artigo: 'Arts. 130-133', titulo: 'Classificação das Faltas', frente: 'Como se classificam as faltas disciplinares?', verso: 'Leve, média e grave. Faltas graves incluem participação em motim, fuga, posse de arma/aparelho de comunicação e prática de fato definido como crime doloso.', cobrado: 'hot', anos: [] },
            { id: 'pe_cod_129', artigo: 'Art. 129', titulo: 'RDD Estadual', frente: 'Qual o prazo máximo do Regime Disciplinar Diferenciado (RDD) previsto na lei estadual?', verso: 'Até 360 dias, podendo ser repetida a sanção em caso de nova falta grave de mesma espécie, respeitado o limite de um sexto da pena aplicada.', cobrado: 'hot', anos: [] },
            { id: 'pe_cod_135', artigo: 'Art. 135', titulo: 'Classificação de Conduta', frente: 'Como é classificada a conduta do preso para fins de progressão de regime?', verso: 'Boa (sem infrações), regular (faltas leves ou médias) ou má (faltas graves).', cobrado: 'medium', anos: [] },
            { id: 'pe_cod_137', artigo: 'Art. 137', titulo: 'Sanções Disciplinares', frente: 'Quais sanções podem ser aplicadas conforme a gravidade da falta?', verso: 'Advertência verbal, suspensão de visitas (prazo cresce com a gravidade), suspensão/restrição de direitos, e isolamento em cela adequada nas faltas graves.', cobrado: 'medium', anos: [] },
            { id: 'pe_cod_150', artigo: 'Art. 150', titulo: 'Prescrição das Faltas', frente: 'Em quanto tempo prescreve a apuração de cada tipo de falta disciplinar?', verso: '6 meses para falta leve, 1 ano para falta média e 3 anos para falta grave.', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '🏛️ Órgãos e Pessoal',
          artigos: [
            { id: 'pe_cod_11', artigo: 'Art. 11', titulo: 'Órgão de Direção', frente: 'Qual órgão dirige a política penitenciária de Pernambuco?', verso: 'A Secretaria Executiva de Ressocialização (SERES), subordinada à Secretaria de Justiça e Direitos Humanos (SJDH).', cobrado: 'medium', anos: [] },
            { id: 'pe_cod_35', artigo: 'Art. 35', titulo: 'Seleção de Pessoal', frente: 'O que exige a seleção de pessoal para função penitenciária?', verso: 'Aptidão física e mental comprovada em procedimento adequado, além de formação profissional específica prévia ao exercício da função.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '💼 Trabalho, Saúde e Visitas do Preso',
          artigos: [
            { id: 'pe_cod_90', artigo: 'Art. 90', titulo: 'Dever de Trabalhar', frente: 'O trabalho é obrigatório para o preso provisório?', verso: 'Não. É dever do CONDENADO trabalhar (na medida de suas aptidões e capacidade); para o preso provisório, o trabalho não é obrigatório.', cobrado: 'hot', anos: [] },
            { id: 'pe_cod_94', artigo: 'Art. 94', titulo: 'Destinação da Remuneração', frente: 'Como é destinada a remuneração do trabalho do preso?', verso: 'Uso pessoal, prestação de alimentos, indenização ao lesado, assistência à família, e pecúlio de 25% em caderneta de poupança.', cobrado: 'hot', anos: [] },
            { id: 'pe_cod_48', artigo: 'Art. 48', titulo: 'Centro de Saúde Penitenciário', frente: 'A quem se destina o Centro de Saúde Penitenciário?', verso: 'A presos sob tratamento médico ou de saúde mental, com alas exclusivas para medida de segurança e para saúde mental feminina.', cobrado: 'medium', anos: [] },
            { id: 'pe_cod_65', artigo: 'Arts. 65-71', titulo: 'Assistência à Saúde', frente: 'Como deve ser prestada a assistência à saúde do preso?', verso: 'De forma integral, seguindo o modelo do SUS: medicamentos, atendimento médico, odontológico, farmacêutico e nutricional.', cobrado: 'medium', anos: [] },
            { id: 'pe_cod_105', artigo: 'Art. 105', titulo: 'Visita Íntima', verso: 'Manter o vínculo familiar e colaborar com a ressocialização, com duração de 2 a 4 horas semanais.', frente: 'Qual a finalidade e a duração da visita íntima?', cobrado: 'medium', anos: [] },
            { id: 'pe_cod_114', artigo: 'Art. 114', titulo: 'Vedação à Divulgação de Imagens', frente: 'O que o art. 114 veda em relação às imagens do preso?', verso: 'Constranger o preso a permitir a divulgação de suas imagens, sem seu consentimento expresso.', cobrado: 'baixo', anos: [] },
            { id: 'pe_cod_revista_intima', artigo: 'Lei 15.755/2016 (alteração, Decreto Estadual nº 59.896/2025)', titulo: 'Vedação à Revista Íntima de Visitantes', frente: 'O que a alteração recente à lei estabeleceu sobre a revista de visitantes?', verso: 'Proíbe a revista íntima, exigindo revista pessoal por meios manuais ou eletrônicos que preservem a dignidade do visitante.', cobrado: 'hot', anos: [] },
            { id: 'pe_cod_parlatorio', artigo: 'Lei 15.755/2016 (alteração, Decreto Estadual nº 59.896/2025)', titulo: 'Procedimento no Parlatório', frente: 'O que ocorre se a suspeita persistir após a revista pessoal, ou o visitante recusar a revista manual?', verso: 'A visita pode ser realizada no parlatório ou local assemelhado, sem contato físico com a pessoa presa.', cobrado: 'medium', anos: [] }
          ]
        }
      ]
    },

    // =============================================
    // CONSTITUIÇÃO DE PE E ESTATUTO DOS SERVIDORES (LEI 6.123/1968)
    // =============================================
    {
      id: 'constituicao_estatuto_pe',
      disciplina: 'legislacao_pe',
      nome: 'Constituição de PE e Estatuto dos Servidores',
      sigla: 'CE/PE (arts. 101-104) + Lei 6.123/1968',
      icon: '📘',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: '📜 Constituição do Estado de PE — Segurança Pública',
          artigos: [
            { id: 'pe_ce_101', artigo: 'Art. 101 CE/PE (EC 53/2020)', titulo: 'Órgãos Permanentes de Segurança Pública', frente: 'Quais são os órgãos permanentes de segurança pública em PE, após a EC Estadual nº 53/2020?', verso: 'Polícia Civil, Polícia Militar, Corpo de Bombeiros Militar e Polícia Penal (vinculada ao órgão administrador do sistema penal, a SERES).', cobrado: 'hot', anos: [] },
            { id: 'pe_ce_102', artigo: 'Art. 102 CE/PE', titulo: 'Estatutos Próprios e Carreira', frente: 'Como se organizam essas instituições, segundo o art. 102?', verso: 'Por estatutos próprios, estruturadas em carreira, tendo a hierarquia e a disciplina como princípios.', cobrado: 'medium', anos: [] },
            { id: 'pe_ce_104', artigo: 'Art. 104 CE/PE', titulo: 'Regulamentação da Polícia Penal', frente: 'Como são definidas as atividades de ordem, segurança interna, organização e funcionamento da Polícia Penal?', verso: 'Serão definidas em lei — papel cumprido, no plano estadual, pela Lei nº 15.755/2016 e pela LC nº 422/2019.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '📋 Lei 6.123/1968 — Deveres, Proibições e Direitos',
          artigos: [
            { id: 'pe_est_193', artigo: 'Art. 193', titulo: 'Deveres do Funcionário', frente: 'Quais são alguns deveres do funcionário público civil de PE?', verso: 'Assiduidade, pontualidade, discrição, urbanidade, lealdade às instituições constitucionais, e obediência às ordens superiores, exceto quando manifestamente ilegais.', cobrado: 'hot', anos: [] },
            { id: 'pe_est_194', artigo: 'Art. 194', titulo: 'Proibições', frente: 'Cite uma proibição do funcionário público estadual.', verso: 'Receber, direta ou indiretamente, remuneração de empresas que prestem serviços à repartição em que está lotado (uma entre dezesseis proibições previstas).', cobrado: 'medium', anos: [] },
            { id: 'pe_est_103', artigo: 'Art. 103', titulo: 'Férias', frente: 'Quantos dias de férias tem o funcionário público estadual por ano?', verso: '30 dias consecutivos, conforme escala organizada pela autoridade competente.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '⚠️ Lei 6.123/1968 — Penalidades e Prescrição',
          artigos: [
            { id: 'pe_est_199', artigo: 'Art. 199', titulo: 'Rol de Penas Disciplinares', frente: 'Quais são as 6 penas disciplinares previstas?', verso: 'Repreensão, multa, suspensão, destituição de função, demissão e cassação de aposentadoria ou disponibilidade.', cobrado: 'hot', anos: [] },
            { id: 'pe_est_202', artigo: 'Art. 202', titulo: 'Suspensão', frente: 'Qual o prazo máximo da suspensão disciplinar?', verso: '30 dias.', cobrado: 'hot', anos: [] },
            { id: 'pe_est_204', artigo: 'Art. 204', titulo: 'Causas de Demissão', frente: 'Cite algumas causas de demissão.', verso: 'Crimes contra a administração pública, abandono de cargo, insubordinação grave, revelação de segredo funcional, corrupção passiva, 60 dias de falta injustificada em 12 meses, entre outras.', cobrado: 'medium', anos: [] },
            { id: 'pe_est_209', artigo: 'Art. 209', titulo: 'Prescrição Escalonada', frente: 'Em quanto tempo prescreve cada tipo de falta disciplinar?', verso: '1 ano (repreensão), 2 anos (suspensão), e 4 anos (destituição de função, demissão e cassação de aposentadoria/disponibilidade).', cobrado: 'hot', anos: [] }
          ]
        }
      ]
    }
  ]
};
