// ============================================================
// LEI_SECA_PCPE.JS — Flashcards de Lei Seca exclusivos do curso
// PCPE (Polícia Civil de Pernambuco, Agente e Escrivão). Baseado na
// Lei nº 6.425/1972 (Estatuto dos Policiais Civis de PE) e na Lei
// nº 14.735/2023 (Lei Orgânica Nacional das Polícias Civis - LONPC)
// — mesmas fontes já verificadas em data/questions_legislacao_pcpe.js
// (Alepe Legis e texto oficial da LONPC via meuvademecumonline.com.br).
// ============================================================

const LEI_SECA_PCPE = {
  decks: [
    {
      id: 'estatuto_pc_pe',
      disciplina: 'legislacao_pcpe',
      nome: 'Estatuto dos Policiais Civis de PE',
      sigla: 'Lei 6.425/1972',
      icon: '🏛️',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: '⚖️ Fundamento e Provimento',
          artigos: [
            { id: 'pcpe_ls_1', artigo: 'Art. 4º da Lei 6.425/1972', titulo: 'Fundamento da Função Policial', frente: 'Em que se fundamenta a função policial, segundo o art. 4º da Lei nº 6.425/1972?', verso: 'Na HIERARQUIA e na DISCIPLINA, admitindo apenas compatibilidade LIMITADA com o exercício de outras atividades, dada a natureza da função policial civil.', cobrado: 'hot', anos: [] },
            { id: 'pcpe_ls_2', artigo: 'Título II, Cap. I, da Lei 6.425/1972', titulo: 'Formas de Provimento', frente: 'Quais são as formas de provimento nos cargos do Quadro de Pessoal Policial de PE?', verso: 'Nomeação, acesso, promoção, reintegração, aproveitamento, reversão e transferência.', cobrado: 'hot', anos: [] },
            { id: 'pcpe_ls_3', artigo: 'Título II, Cap. II, da Lei 6.425/1972', titulo: 'Sistema Misto de Provimento Inicial', frente: 'Como se dá o provimento dos cargos INICIAIS da carreira policial civil de PE?', verso: 'Por SISTEMA MISTO: parte das vagas por nomeação externa (concurso público) e parte por acesso interno dos já integrantes da carreira.', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '📋 Deveres, Transgressões e Penas Disciplinares',
          artigos: [
            { id: 'pcpe_ls_4', artigo: 'Art. 30 da Lei 6.425/1972', titulo: 'Deveres do Policial Civil', frente: 'Os deveres do policial civil de PE se somam a quais outros deveres?', verso: 'Somam-se aos deveres já inerentes aos DEMAIS FUNCIONÁRIOS PÚBLICOS CIVIS do Estado, além das obrigações específicas da função policial.', cobrado: 'hot', anos: [] },
            { id: 'pcpe_ls_5', artigo: 'Art. 31 da Lei 6.425/1972', titulo: 'Transgressões Disciplinares', frente: 'Onde estão previstas as transgressões disciplinares do policial civil de PE?', verso: 'No art. 31, que enumera um rol de 48 infrações (incisos I a XLVIII), como acúmulo ilícito de cargos e divulgação indevida de informações funcionais.', cobrado: 'hot', anos: [] },
            { id: 'pcpe_ls_6', artigo: 'Art. 34 da Lei 6.425/1972', titulo: 'Penas Disciplinares (ordem crescente)', frente: 'Quais são as 7 penas disciplinares do art. 34, em ordem crescente de gravidade?', verso: 'I - Repreensão; II - Multa; III - Suspensão; IV - Detenção disciplinar; V - Destituição de função; VI - Demissão; VII - Cassação de aposentadoria ou disponibilidade.', cobrado: 'hot', anos: [] },
            { id: 'pcpe_ls_7', artigo: 'Título IV da Lei 6.425/1972', titulo: 'Processo Disciplinar', frente: 'Por quais instrumentos se apuram as infrações disciplinares?', verso: 'Por SINDICÂNCIA e INQUÉRITO DISCIPLINAR, conduzidos, entre outros órgãos, pelas Comissões Permanentes de Disciplina.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '🎖️ Honrarias, Conselho Superior e Pensão',
          artigos: [
            { id: 'pcpe_ls_8', artigo: 'Título V da Lei 6.425/1972', titulo: 'Medalha do Mérito Policial', frente: 'Em quantas classes é concedida a Medalha do Mérito Policial?', verso: 'Em diferentes classes: OURO, PRATA e BRONZE, conforme os critérios de mérito estabelecidos em lei. Não se restringe a delegados — outras categorias do Quadro de Pessoal Policial também podem recebê-la.', cobrado: 'medium', anos: [] },
            { id: 'pcpe_ls_9', artigo: 'Título VI da Lei 6.425/1972', titulo: 'Conselho Superior de Polícia', frente: 'Qual a natureza das atribuições do Conselho Superior de Polícia?', verso: 'Natureza CONSULTIVA e NORMATIVA, no âmbito da organização policial civil do Estado — não é órgão jurisdicional nem executivo (essas funções cabem ao Judiciário e ao Delegado-Geral, respectivamente).', cobrado: 'medium', anos: [] },
            { id: 'pcpe_ls_10', artigo: 'Art. 83 da Lei 6.425/1972', titulo: 'Pensão Especial', frente: 'Quando é devida a pensão especial aos beneficiários do policial civil?', verso: 'Em caso de MORTE do servidor EM RAZÃO DO EXERCÍCIO DA FUNÇÃO POLICIAL — reconhecendo o risco inerente à atividade. Não se aplica a aposentadoria voluntária comum ou exoneração a pedido.', cobrado: 'hot', anos: [] }
          ]
        }
      ]
    },
    {
      id: 'lonpc',
      disciplina: 'legislacao_pcpe',
      nome: 'Lei Orgânica Nacional das Polícias Civis (LONPC)',
      sigla: 'Lei 14.735/2023',
      icon: '🇧🇷',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Natureza Institucional e Funções Exclusivas',
          artigos: [
            { id: 'pcpe_ls_11', artigo: 'Lei 14.735/2023', titulo: 'Natureza das Polícias Civis', frente: 'Qual a natureza institucional das polícias civis, segundo a LONPC?', verso: 'Instituições PERMANENTES, com funções EXCLUSIVAS e TÍPICAS DE ESTADO, essenciais à justiça criminal e imprescindíveis à segurança pública, integrando o Sistema Único de Segurança Pública (Susp).', cobrado: 'hot', anos: ['2023'] },
            { id: 'pcpe_ls_12', artigo: 'Art. 6º da Lei 14.735/2023', titulo: 'Funções Exclusivas', frente: 'Cite duas funções exclusivas da polícia civil previstas no art. 6º da LONPC.', verso: 'Cumprir mandados de prisão e de busca e apreensão, e assegurar a CADEIA DE CUSTÓDIA DA PROVA — funções restritas aos policiais civis DA ATIVA (§1º).', cobrado: 'hot', anos: ['2023'] }
          ]
        },
        {
          titulo: '🏢 Estrutura e Comando',
          artigos: [
            { id: 'pcpe_ls_13', artigo: 'Art. 7º da Lei 14.735/2023', titulo: 'Estrutura Organizacional Básica', frente: 'Cite dois órgãos que integram a estrutura organizacional básica das polícias civis (art. 7º).', verso: 'Delegacia-Geral, Conselho Superior de Polícia Civil, Corregedoria-Geral e Escola Superior de Polícia Civil, além de unidades de execução, inteligência, técnico-científicas, apoio administrativo, saúde e tecnologia.', cobrado: 'medium', anos: ['2023'] },
            { id: 'pcpe_ls_14', artigo: 'Art. 8º da Lei 14.735/2023', titulo: 'Delegado-Geral', frente: 'Quem nomeia o Delegado-Geral de Polícia Civil, e entre quem é escolhido?', verso: 'É NOMEADO PELO GOVERNADOR do Estado, escolhido entre delegados de polícia EM ATIVIDADE, da CLASSE MAIS ELEVADA da carreira.', cobrado: 'hot', anos: ['2023'] },
            { id: 'pcpe_ls_17', artigo: 'Art. 9º da Lei 14.735/2023', titulo: 'Conselho Superior de Polícia Civil', frente: 'Por quem é presidido o Conselho Superior de Polícia Civil, e como é composto?', verso: 'Presidido pelo DELEGADO-GERAL, composto por representantes de TODOS OS CARGOS EFETIVOS da corporação, com possibilidade de eleição de membros e participação paritária, respeitada a lei do respectivo ente federativo.', cobrado: 'hot', anos: ['2023'] },
            { id: 'pcpe_ls_18', artigo: 'Art. 10, caput, da Lei 14.735/2023', titulo: 'Corregedoria-Geral - Finalidade', frente: 'Qual a finalidade da Corregedoria-Geral de Polícia Civil, dotada de autonomia em suas atividades?', verso: 'Praticar atos de CONTROLE INTERNO, CORREIÇÃO, ORIENTAÇÃO e zelo pela qualidade e avaliação do serviço policial, com atuação PREVENTIVA e REPRESSIVA em infrações disciplinares e penais de seus servidores no exercício da função.', cobrado: 'hot', anos: ['2023'] },
            { id: 'pcpe_ls_19', artigo: 'Art. 10, §1º e §3º, da Lei 14.735/2023', titulo: 'Corregedor-Geral e Dupla Instância', frente: 'Por quem é designado o Corregedor-Geral? E o que garante o §3º em julgamentos disciplinares com pena de demissão?', verso: 'O Corregedor-Geral é DESIGNADO PELO DELEGADO-GERAL, dentre delegados da classe mais elevada. O §3º garante DUPLA INSTÂNCIA de revisão nesses casos: recurso ao Conselho Superior de Polícia Civil e, em última instância, ao Chefe do Poder Executivo.', cobrado: 'medium', anos: ['2023'] },
            { id: 'pcpe_ls_20', artigo: 'Art. 11 da Lei 14.735/2023', titulo: 'Escola Superior de Polícia Civil', frente: 'Qual a função da Escola Superior de Polícia Civil, e quem pode integrar seu corpo docente?', verso: 'Órgão de FORMAÇÃO, CAPACITAÇÃO, PESQUISA e EXTENSÃO, liderado por delegado experiente — pode ofertar cursos de graduação/pós-graduação com equivalência a universidades públicas. O corpo docente pode incluir policiais civis com notório saber, habilitação técnica ou formação pedagógica comprovadas, selecionados por edital.', cobrado: 'medium', anos: ['2023'] }
          ]
        },
        {
          titulo: '🛡️ Garantias Funcionais (Art. 30)',
          artigos: [
            { id: 'pcpe_ls_15', artigo: 'Art. 30 da Lei 14.735/2023', titulo: 'Porte de Arma', frente: 'Em que âmbito territorial vale o porte de arma de fogo garantido ao policial civil, e ele se mantém após a aposentadoria?', verso: 'Válido em TODO O TERRITÓRIO NACIONAL, e a garantia se MANTÉM mesmo após a aposentadoria do policial civil.', cobrado: 'hot', anos: ['2023'] },
            { id: 'pcpe_ls_16', artigo: 'Art. 30 da Lei 14.735/2023', titulo: 'Prisão Especial e Livre Trânsito', frente: 'Em caso de prisão, onde o policial civil deve ser recolhido? E qual outra garantia de deslocamento ele possui?', verso: 'Recolhimento em UNIDADE PRISIONAL DA PRÓPRIA INSTITUIÇÃO (prisão especial), além do livre acesso e trânsito em razão da função, respeitadas as garantias constitucionais. Não há imunidade penal absoluta nem dispensa de processo disciplinar.', cobrado: 'medium', anos: ['2023'] }
          ]
        }
      ]
    }
  ]
};
