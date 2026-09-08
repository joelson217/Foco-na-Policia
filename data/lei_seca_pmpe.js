// ============================================================
// LEI_SECA_PMPE.JS — Flashcards de Lei Seca exclusivos do curso
// PMPE (Polícia Militar de Pernambuco). Baseado na Lei nº 6.783/1974
// (Estatuto dos Policiais-Militares do Estado de Pernambuco).
// Conteúdo verificado em 2026-09 direto no texto oficial (Alepe
// Legis, id=1032) — mesma fonte usada para corrigir e escrever
// data/questions_legislacao_pmpe.js.
// ============================================================

const LEI_SECA_PMPE = {
  decks: [
    {
      id: 'estatuto_pm_pe',
      disciplina: 'legislacao_pmpe',
      nome: 'Estatuto dos Policiais-Militares de PE',
      sigla: 'Lei 6.783/1974',
      icon: '🎖️',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: '⚖️ Objeto, Hierarquia e Disciplina',
          artigos: [
            { id: 'pmpe_ls_1', artigo: 'Art. 1º da Lei 6.783/1974', titulo: 'Objeto do Estatuto', frente: 'O que o Estatuto dos Policiais-Militares de PE regula, segundo o art. 1º?', verso: 'A SITUAÇÃO, as OBRIGAÇÕES, os DEVERES, os DIREITOS e as PRERROGATIVAS dos policiais-militares do Estado de Pernambuco.', cobrado: 'hot', anos: [] },
            { id: 'pmpe_ls_2', artigo: 'Art. 12, caput e §1º, da Lei 6.783/1974', titulo: 'Hierarquia', frente: 'O que é hierarquia policial-militar, segundo o art. 12, §1º?', verso: 'A ordenação de autoridade em NÍVEIS DIFERENTES, dentro da estrutura da PM. Faz-se por POSTOS OU GRADUAÇÕES e, dentro de um mesmo posto/graduação, pela ANTIGUIDADE. Hierarquia e disciplina são a base institucional da PM (caput).', cobrado: 'hot', anos: [] },
            { id: 'pmpe_ls_3', artigo: 'Art. 12, §2º, da Lei 6.783/1974', titulo: 'Disciplina', frente: 'O que é disciplina policial-militar, segundo o art. 12, §2º?', verso: 'A rigorosa observância e o acatamento INTEGRAL das leis, regulamentos, normas e disposições que fundamentam o organismo policial-militar, traduzindo-se pelo PERFEITO CUMPRIMENTO DO DEVER por todos e cada um dos componentes.', cobrado: 'hot', anos: [] },
            { id: 'pmpe_ls_4', artigo: 'Art. 12, §3º, da Lei 6.783/1974', titulo: 'Abrangência', frente: 'A quem se aplica a exigência de disciplina e respeito à hierarquia (art. 12, §3º)?', verso: 'A TODOS os policiais-militares, em TODAS as circunstâncias da vida: da ATIVA, da RESERVA REMUNERADA e os REFORMADOS.', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '🎖️ Círculos Hierárquicos',
          artigos: [
            { id: 'pmpe_ls_5', artigo: 'Art. 13 da Lei 6.783/1974', titulo: 'Finalidade dos Círculos', frente: 'Qual a finalidade dos círculos hierárquicos, segundo o art. 13?', verso: 'Desenvolver o ESPÍRITO DE CAMARADAGEM em ambiente de estima e confiança entre policiais-militares da MESMA CATEGORIA, sem prejuízo do respeito mútuo.', cobrado: 'medium', anos: [] },
            { id: 'pmpe_ls_6', artigo: 'Art. 14 da Lei 6.783/1974', titulo: 'Composição dos Círculos', frente: 'Quais são os dois grandes círculos hierárquicos e suas subdivisões (art. 14)?', verso: 'CÍRCULO DE OFICIAIS (Superiores: Cel/Ten-Cel/Maj; Intermediários: Cap; Subalternos: 1º e 2º Ten) e CÍRCULO DE PRAÇAS (Subtenentes e Sargentos; Cabos e Soldados).', cobrado: 'hot', anos: [] },
            { id: 'pmpe_ls_7', artigo: 'Art. 14 da Lei 6.783/1974 (quadro)', titulo: 'Aspirante-a-Oficial e Aluno-Oficial', frente: 'O Aspirante-a-Oficial PM frequenta qual círculo? E o Aluno-Oficial PM?', verso: 'O ASPIRANTE-A-OFICIAL PM frequenta o CÍRCULO DE OFICIAIS normalmente. Já o ALUNO-OFICIAL PM só tem acesso a esse círculo EXCEPCIONALMENTE ou em reuniões sociais.', cobrado: 'hot', anos: [] },
            { id: 'pmpe_ls_8', artigo: 'Art. 14, §3º, da Lei 6.783/1974', titulo: 'Praças Especiais', frente: 'Quem são as "praças especiais", segundo o Estatuto?', verso: 'Os ASPIRANTES-A-OFICIAL PM e os ALUNOS-OFICIAIS PM são denominados PRAÇAS ESPECIAIS.', cobrado: 'medium', anos: [] }
          ]
        },
        {
          titulo: '📋 Deveres, Direitos e Compromisso',
          artigos: [
            { id: 'pmpe_ls_9', artigo: 'Art. 30 da Lei 6.783/1974', titulo: 'Deveres Policiais-Militares', frente: 'Cite ao menos 3 dos deveres policiais-militares listados no art. 30.', verso: 'Dedicação integral e fidelidade à instituição; culto aos símbolos nacionais; probidade e lealdade em todas as circunstâncias; disciplina e respeito à hierarquia; cumprimento rigoroso de obrigações e ordens; tratar o subordinado dignamente e com urbanidade.', cobrado: 'hot', anos: [] },
            { id: 'pmpe_ls_10', artigo: 'Art. 31 da Lei 6.783/1974', titulo: 'Compromisso Policial-Militar', frente: 'O que todo cidadão presta ao ingressar na PM, segundo o art. 31?', verso: 'Um COMPROMISSO DE HONRA, afirmando aceitação consciente das obrigações e deveres policiais-militares e a firme disposição de bem cumpri-los.', cobrado: 'medium', anos: [] },
            { id: 'pmpe_ls_11', artigo: 'Art. 49 da Lei 6.783/1974', titulo: 'Direitos Policiais-Militares', frente: 'Cite ao menos 4 direitos dos policiais-militares previstos no art. 49.', verso: 'Garantia de patente; estabilidade (praça com 10 anos de serviço); uso das designações hierárquicas; ocupação de cargo correspondente ao posto/graduação; remuneração; pensão policial-militar; promoção; porte de arma.', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '⚠️ Responsabilização: Crime, Transgressão e Conselhos',
          artigos: [
            { id: 'pmpe_ls_12', artigo: 'Art. 40 da Lei 6.783/1974', titulo: 'Crime Militar x Transgressão Disciplinar', frente: 'O que ocorre quando há violação das obrigações ou deveres policiais-militares (art. 40)?', verso: 'Constitui CRIME ou TRANSGRESSÃO DISCIPLINAR, conforme dispuserem a legislação ou regulamentação PECULIARES (na prática: crime militar → Código Penal Militar; transgressão → normas regulamentares disciplinares).', cobrado: 'hot', anos: [] },
            { id: 'pmpe_ls_13', artigo: 'Art. 47 da Lei 6.783/1974', titulo: 'Conselho de Justificação', frente: 'A quem se aplica o Conselho de Justificação, e quem julga seus processos?', verso: 'Aplica-se ao OFICIAL presumivelmente incapaz de permanecer na ativa (também a oficiais reformados/reserva remunerada, §3º). Julga, em última instância, o TRIBUNAL DE JUSTIÇA DO ESTADO (§2º).', cobrado: 'hot', anos: [] },
            { id: 'pmpe_ls_14', artigo: 'Art. 48 da Lei 6.783/1974', titulo: 'Conselho de Disciplina', frente: 'A quem se aplica o Conselho de Disciplina, e quem julga seus processos?', verso: 'Aplica-se ao ASPIRANTE-A-OFICIAL PM e às PRAÇAS COM ESTABILIDADE assegurada, presumivelmente incapazes de permanecerem na ativa. Julga, em última instância, o COMANDANTE-GERAL da PM (§2º).', cobrado: 'hot', anos: [] }
          ]
        },
        {
          titulo: '📌 Prerrogativas, Situações Especiais e Desligamento',
          artigos: [
            { id: 'pmpe_ls_15', artigo: 'Art. 68 da Lei 6.783/1974', titulo: 'Prerrogativas', frente: 'O que são as prerrogativas do policial-militar, segundo o art. 68? Cite um exemplo.', verso: 'HONRAS, DIGNIDADES e DISTINÇÕES devidas ao grau hierárquico e cargo. Exemplo: uso de títulos, UNIFORMES, distintivos, insígnias e emblemas correspondentes ao posto/graduação.', cobrado: 'medium', anos: [] },
            { id: 'pmpe_ls_16', artigo: 'Art. 75 da Lei 6.783/1974', titulo: 'Agregação', frente: 'O que é a agregação, e ela abre vaga para promoção?', verso: 'Situação em que o policial-militar da ativa fica SEM NÚMERO na escala hierárquica. NÃO abre vaga, nem mesmo para efeito de PROMOÇÃO.', cobrado: 'hot', anos: [] },
            { id: 'pmpe_ls_17', artigo: 'Art. 81 da Lei 6.783/1974', titulo: 'Ausência', frente: 'Quando o policial-militar é considerado "ausente" (art. 81)?', verso: 'Quando deixa de comparecer à sua Organização Policial-Militar (sem comunicar motivo) OU se ausenta sem licença, por mais de 24 HORAS consecutivas.', cobrado: 'medium', anos: [] },
            { id: 'pmpe_ls_18', artigo: 'Arts. 83-84 da Lei 6.783/1974', titulo: 'Desaparecimento e Extravio', frente: 'Quantos dias definem "desaparecido" e quantos definem "extraviado"?', verso: 'DESAPARECIDO: paradeiro ignorado em serviço por mais de 8 DIAS. EXTRAVIADO: se o desaparecimento persistir por mais de 30 DIAS.', cobrado: 'medium', anos: [] },
            { id: 'pmpe_ls_19', artigo: 'Art. 85 da Lei 6.783/1974', titulo: 'Desligamento do Serviço Ativo', frente: 'Cite ao menos 5 das 9 causas de desligamento/exclusão do serviço ativo (art. 85).', verso: 'Reserva remunerada, reforma, demissão, perda de posto e patente, licenciamento, exclusão a bem da disciplina, deserção, falecimento, extravio.', cobrado: 'hot', anos: [] }
          ]
        }
      ]
    }
  ]
};
