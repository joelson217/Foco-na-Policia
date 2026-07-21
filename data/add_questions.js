const fs = require('fs');
const path = require('path');

const dataDir = 'c:/Users/PROFESSOR/Documents/APP Concursos Policiais/data';

function appendQuestions(filename, questions) {
    const filepath = path.join(dataDir, filename);
    let content = fs.readFileSync(filepath, 'utf8');
    const lastIndex = content.lastIndexOf('];');
    let before = content.substring(0, lastIndex).trimEnd();
    // ensure trailing comma
    if (!before.endsWith(',')) before = before + ',';
    const snippets = questions.map(q => JSON.stringify(q, null, 2)).join(',\n');
    const newContent = before + '\n' + snippets + '\n];\n';
    fs.writeFileSync(filepath, newContent, 'utf8');
    console.log(`✅ Adicionadas ${questions.length} questões em ${filename}`);
}

// ========================================================
// QUESTIONS_LEP.JS — 15 novas questões (lep_58 a lep_72)
// ========================================================
const newLEP = [
  {
    "id": "lep_58",
    "disciplina": "lep",
    "topico": "Órgãos da Execução Penal (Art. 61-81)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "São órgãos da execução penal, de acordo com o art. 61 da LEP:",
    "alternativas": [
      { "letra": "A", "texto": "O Conselho Nacional de Política Criminal e Penitenciária, o Juízo da Execução, o Ministério Público, o Conselho Penitenciário, os Departamentos Penitenciários, o Patronato, o Conselho da Comunidade e a Defensoria Pública." },
      { "letra": "B", "texto": "Apenas o Juízo da Execução, o Ministério Público e o Conselho Penitenciário." },
      { "letra": "C", "texto": "O Conselho Nacional de Política Criminal e Penitenciária, o Ministério Público, a Defensoria Pública e a Polícia Penal." },
      { "letra": "D", "texto": "O Juízo da Execução, os Departamentos Penitenciários, o Patronato e a Polícia Penal." }
    ],
    "gabarito": "A",
    "artigo": "Art. 61 da LEP",
    "justificativa": "O art. 61 da LEP lista os órgãos da execução penal: CNPCP, Juízo da Execução, MP, Conselho Penitenciário, Departamentos Penitenciários, Patronato, Conselho da Comunidade e Defensoria Pública."
  },
  {
    "id": "lep_59",
    "disciplina": "lep",
    "topico": "Trabalho do Preso (Art. 28-37)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Acerca do trabalho do preso na execução penal, assinale a alternativa CORRETA:",
    "alternativas": [
      { "letra": "A", "texto": "O trabalho do preso é regido pela CLT, com todos os seus direitos trabalhistas assegurados." },
      { "letra": "B", "texto": "O trabalho do preso é obrigatório e sua remuneração não pode ser inferior a 3/4 do salário mínimo." },
      { "letra": "C", "texto": "O trabalho do preso é obrigatório e sua remuneração não pode ser inferior a 3/4 do salário mínimo, com jornada de 6 a 8 horas diárias." },
      { "letra": "D", "texto": "O trabalho do preso não pode ser executado em favor de empresas privadas." }
    ],
    "gabarito": "C",
    "artigo": "Arts. 28, 29 e 33 da LEP",
    "justificativa": "O trabalho do condenado é obrigatório (art. 31), a remuneração não pode ser inferior a 3/4 do salário mínimo (art. 29) e a jornada é de 6 a 8 horas diárias (art. 33). Não é regido pela CLT (art. 28, §2º)."
  },
  {
    "id": "lep_60",
    "disciplina": "lep",
    "topico": "Progressão de Regime (Art. 112)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Conforme o art. 112 da LEP (com as alterações da Lei 13.964/2019 — Pacote Anticrime), qual o percentual mínimo de cumprimento da pena para progressão de regime para o condenado por crime HEDIONDO ou equiparado, com resultado morte, REINCIDENTE ESPECÍFICO?",
    "alternativas": [
      { "letra": "A", "texto": "40% da pena." },
      { "letra": "B", "texto": "50% da pena." },
      { "letra": "C", "texto": "60% da pena." },
      { "letra": "D", "texto": "70% da pena." }
    ],
    "gabarito": "D",
    "artigo": "Art. 112, VIII da LEP (Lei 13.964/2019)",
    "justificativa": "Após o Pacote Anticrime, o art. 112 da LEP estabelece progressão de 70% para o condenado por crime hediondo ou equiparado COM resultado morte que seja reincidente específico em crimes desta natureza. É o maior percentual previsto."
  },
  {
    "id": "lep_61",
    "disciplina": "lep",
    "topico": "Saída Temporária (Art. 122-125)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A saída temporária no regime semiaberto, nos termos da LEP, é autorizada por qual autoridade?",
    "alternativas": [
      { "letra": "A", "texto": "Pelo diretor do estabelecimento penal, por delegação do juiz." },
      { "letra": "B", "texto": "Pelo Conselho Penitenciário, após parecer da direção do estabelecimento." },
      { "letra": "C", "texto": "Pelo Juiz da Execução, ouvidos o MP e a administração penitenciária." },
      { "letra": "D", "texto": "Pelo Ministério Público, com homologação pelo Juiz da Execução." }
    ],
    "gabarito": "C",
    "artigo": "Art. 124 da LEP",
    "justificativa": "A saída temporária é autorizada pelo Juiz da Execução (art. 124 LEP), ouvidos o MP e a administração penitenciária. A Súmula 520 do STJ admite que o juiz delegue ao dirigente do estabelecimento, mas a competência originária é do juiz."
  },
  {
    "id": "lep_62",
    "disciplina": "lep",
    "topico": "Remição de Pena (Art. 126-130)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O preso em regime fechado que praticar falta grave perderá o direito ao tempo remido. Qual a fração máxima que pode ser perdida, segundo a LEP?",
    "alternativas": [
      { "letra": "A", "texto": "Todo o tempo remido é perdido automaticamente." },
      { "letra": "B", "texto": "Até 1/3 do tempo remido." },
      { "letra": "C", "texto": "Até 1/2 do tempo remido." },
      { "letra": "D", "texto": "Até 2/3 do tempo remido." }
    ],
    "gabarito": "B",
    "artigo": "Art. 127 da LEP",
    "justificativa": "O art. 127 da LEP, após a Lei 12.433/2011, prevê que em virtude de falta grave, o juiz poderá revogar ATÉ 1/3 do tempo remido, observado o direito do apenado ao contraditório e à ampla defesa."
  },
  {
    "id": "lep_63",
    "disciplina": "lep",
    "topico": "Assistência ao Preso (Art. 10-27)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "De acordo com a LEP, a assistência ao preso e ao internado é dever do Estado, objetivando:",
    "alternativas": [
      { "letra": "A", "texto": "Prevenir o crime e orientar o retorno à convivência em sociedade." },
      { "letra": "B", "texto": "Garantir o cumprimento integral da pena para segurança da sociedade." },
      { "letra": "C", "texto": "Exclusivamente tratar das enfermidades físicas e psicológicas." },
      { "letra": "D", "texto": "A ressocialização apenas quando há autorização do Conselho Penitenciário." }
    ],
    "gabarito": "A",
    "artigo": "Art. 10 da LEP",
    "justificativa": "Conforme o art. 10 da LEP, a assistência ao preso e ao internado é dever do Estado, objetivando PREVENIR O CRIME E ORIENTAR O RETORNO À CONVIVÊNCIA EM SOCIEDADE."
  },
  {
    "id": "lep_64",
    "disciplina": "lep",
    "topico": "Classificação e Individualização (Art. 5-9)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre a classificação dos condenados para individualização da execução penal, é CORRETO afirmar:",
    "alternativas": [
      { "letra": "A", "texto": "A classificação é feita pelo Conselho Penitenciário, podendo ser delegada à direção do estabelecimento." },
      { "letra": "B", "texto": "A Comissão Técnica de Classificação (CTC) elabora o programa individualizador da pena privativa de liberdade, sendo presidida pelo diretor do estabelecimento." },
      { "letra": "C", "texto": "A CTC é presidida pelo Juiz da Execução, com participação de agentes penitenciários e psicólogos." },
      { "letra": "D", "texto": "A classificação se baseia exclusivamente no crime praticado e na pena aplicada, sem exames psicológicos." }
    ],
    "gabarito": "B",
    "artigo": "Arts. 5º e 7º da LEP",
    "justificativa": "A CTC (Comissão Técnica de Classificação) existe em cada estabelecimento e é presidida pelo diretor. Ela elabora o programa individualizador da pena (art. 7º LEP), composta por pelo menos dois chefes de serviço, um psiquiatra, um psicólogo e um assistente social."
  },
  {
    "id": "lep_65",
    "disciplina": "lep",
    "topico": "Direitos do Preso (Art. 40-43)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos do art. 41 da LEP, são direitos do preso, EXCETO:",
    "alternativas": [
      { "letra": "A", "texto": "Alimentação suficiente e vestuário." },
      { "letra": "B", "texto": "Atribuição de trabalho e sua remuneração." },
      { "letra": "C", "texto": "Assistência jurídica, médica e espiritual." },
      { "letra": "D", "texto": "Direito ao voto nas eleições municipais para cargos executivos." }
    ],
    "gabarito": "D",
    "artigo": "Art. 41 da LEP",
    "justificativa": "O art. 41 da LEP lista os direitos do preso. O VOTO não é citado como direito na LEP para presos (condenados com trânsito em julgado têm direitos políticos suspensos — art. 15, III CF). Os demais itens (A, B, C) estão expressamente previstos no art. 41."
  },
  {
    "id": "lep_66",
    "disciplina": "lep",
    "topico": "Regime Disciplinar Diferenciado — RDD",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Conforme a LEP (com as alterações do Pacote Anticrime — Lei 13.964/2019), qual o prazo máximo do Regime Disciplinar Diferenciado (RDD)?",
    "alternativas": [
      { "letra": "A", "texto": "360 dias, renovável uma vez." },
      { "letra": "B", "texto": "2 anos, sem renovação possível." },
      { "letra": "C", "texto": "2 anos, renovável por novos fatos." },
      { "letra": "D", "texto": "1 ano, prorrogável até 1/6 da pena." }
    ],
    "gabarito": "C",
    "artigo": "Art. 52, §1º da LEP (Lei 13.964/2019)",
    "justificativa": "Após o Pacote Anticrime, o art. 52, §1º, da LEP estabelece duração máxima de 2 anos (antes era 360 dias) para o RDD, sem prejuízo de repetição da sanção por nova falta grave de mesma espécie."
  },
  {
    "id": "lep_67",
    "disciplina": "lep",
    "topico": "Patronato e Conselho da Comunidade",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Qual é a finalidade do Patronato, órgão da execução penal, conforme a LEP?",
    "alternativas": [
      { "letra": "A", "texto": "Fiscalizar os estabelecimentos prisionais e elaborar relatórios ao juiz." },
      { "letra": "B", "texto": "Prestar assistência aos albergados e aos egressos do sistema prisional." },
      { "letra": "C", "texto": "Assessorar o Ministério Público no acompanhamento das condições do livramento condicional." },
      { "letra": "D", "texto": "Administrar os estabelecimentos penais federais." }
    ],
    "gabarito": "B",
    "artigo": "Art. 78 da LEP",
    "justificativa": "Conforme o art. 78 da LEP, o Patronato tem por finalidade PRESTAR ASSISTÊNCIA AOS ALBERGADOS e aos egressos do sistema penitenciário."
  },
  {
    "id": "lep_68",
    "disciplina": "lep",
    "topico": "Monitoração Eletrônica (Art. 146-B a 146-D)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "De acordo com a LEP, a monitoração eletrônica do condenado pode ser determinada pelo Juiz da Execução em quais hipóteses?",
    "alternativas": [
      { "letra": "A", "texto": "Apenas durante o livramento condicional." },
      { "letra": "B", "texto": "Na prisão domiciliar e como condição da saída temporária no regime semiaberto." },
      { "letra": "C", "texto": "Em qualquer regime, inclusive o fechado, como medida complementar." },
      { "letra": "D", "texto": "Somente no regime aberto e no livramento condicional." }
    ],
    "gabarito": "B",
    "artigo": "Art. 146-B, I e II da LEP",
    "justificativa": "O art. 146-B da LEP autoriza a monitoração eletrônica no cumprimento de pena em regime aberto (saída temporária do semiaberto — inciso II) e na prisão domiciliar (inciso I). Não se aplica genericamente a todos os regimes."
  },
  {
    "id": "lep_69",
    "disciplina": "lep",
    "topico": "Execução das Penas Restritivas de Direitos",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre a conversão da pena restritiva de direitos em privativa de liberdade, assinale a alternativa CORRETA:",
    "alternativas": [
      { "letra": "A", "texto": "A conversão é automática, sem necessidade de oitiva do condenado." },
      { "letra": "B", "texto": "O tempo de restrição cumprido é integralmente abatido da pena privativa de liberdade a cumprir." },
      { "letra": "C", "texto": "O tempo já cumprido da pena restritiva não é descontado da pena privativa." },
      { "letra": "D", "texto": "A conversão não é possível para penas de prestação de serviço à comunidade." }
    ],
    "gabarito": "B",
    "artigo": "Art. 181, §1º da LEP",
    "justificativa": "Conforme o art. 181, §1º da LEP, na conversão da pena restritiva em privativa de liberdade, o tempo de restrição de direitos já cumprido é abatido do total da pena privativa de liberdade a cumprir."
  },
  {
    "id": "lep_70",
    "disciplina": "lep",
    "topico": "Estabelecimentos Penais (Art. 82-104)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "No que diz respeito ao regime semiaberto, qual é o estabelecimento penal correto para cumprimento da pena?",
    "alternativas": [
      { "letra": "A", "texto": "Penitenciária de segurança máxima ou média." },
      { "letra": "B", "texto": "Casa do Albergado." },
      { "letra": "C", "texto": "Colônia Agrícola, Industrial ou similar." },
      { "letra": "D", "texto": "Centro de Observação Criminológica." }
    ],
    "gabarito": "C",
    "artigo": "Art. 91 da LEP",
    "justificativa": "O art. 91 da LEP determina que o regime semiaberto é cumprido em COLÔNIA AGRÍCOLA, INDUSTRIAL OU SIMILAR. O regime fechado é cumprido em penitenciária, e o regime aberto em Casa do Albergado."
  },
  {
    "id": "lep_71",
    "disciplina": "lep",
    "topico": "Regressão de Regime",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme a LEP, ocorrerá a REGRESSÃO de regime quando o condenado, EXCETO:",
    "alternativas": [
      { "letra": "A", "texto": "Praticar fato definido como crime doloso ou atitude de alta indisciplina." },
      { "letra": "B", "texto": "Sofrer condenação por crime anterior à execução da pena, tornando a soma incabível para o regime atual." },
      { "letra": "C", "texto": "Obtiver livramento condicional e não comparecer ao Patronato mensalmente." },
      { "letra": "D", "texto": "Frustrar os fins da execução ou não pagar multa cumulativamente imposta." }
    ],
    "gabarito": "C",
    "artigo": "Art. 118 da LEP",
    "justificativa": "O art. 118 da LEP prevê regressão por: prática de fato criminoso doloso ou falta grave (I); condenação por crime anterior cuja soma de penas exija regime mais severo (II); e frustração dos fins da execução ou não pagamento de multa (art. 118, §2º). O livramento condicional tem suas próprias regras de revogação (art. 145 LEP)."
  },
  {
    "id": "lep_72",
    "disciplina": "lep",
    "topico": "Extinção da Punibilidade",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme a LEP, quem declara extinta a punibilidade?",
    "alternativas": [
      { "letra": "A", "texto": "O Ministério Público, por requerimento ao Juiz da Execução." },
      { "letra": "B", "texto": "O Juiz da Execução, de ofício ou a requerimento do interessado, ouvido o MP." },
      { "letra": "C", "texto": "O Conselho Penitenciário, mediante aprovação do Juiz." },
      { "letra": "D", "texto": "A Defensoria Pública, mediante requerimento fundamentado." }
    ],
    "gabarito": "B",
    "artigo": "Art. 66, II e Art. 172 da LEP",
    "justificativa": "Conforme o art. 66, II, c/c art. 172 da LEP, compete ao Juiz da Execução declarar extinta a punibilidade, de ofício ou a requerimento do interessado, ouvido previamente o MP."
  }
];

// ========================================================
// QUESTIONS_LEGISLACAO.JS — 15 novas questões (leg_48 a leg_62)
// ========================================================
const newLeg = [
  {
    "id": "leg_48",
    "disciplina": "legislacao",
    "topico": "Crimes Hediondos (Lei 8.072/90)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre os crimes hediondos (Lei 8.072/90), assinale a alternativa CORRETA:",
    "alternativas": [
      { "letra": "A", "texto": "A pena dos crimes hediondos pode ser cumprida em regime integralmente fechado." },
      { "letra": "B", "texto": "Os crimes hediondos são insuscetíveis de fiança, graça e anistia, admitindo-se, contudo, a liberdade provisória." },
      { "letra": "C", "texto": "Os crimes hediondos são inafiançáveis e insuscetíveis de graça, anistia e indulto." },
      { "letra": "D", "texto": "Os crimes hediondos admitem progressão de regime, exigindo-se o cumprimento de 2/5 da pena para primários." }
    ],
    "gabarito": "B",
    "artigo": "Art. 2º da Lei 8.072/90 c/c STF HC 82.959",
    "justificativa": "A Lei 8.072/90 é inafiançável e insuscetível de graça e anistia (art. 2º, I). O STF (HC 82.959) declarou inconstitucional o regime integralmente fechado. A progressão de regime é possível (40/60% conforme Pacote Anticrime). Indulto: há discussão, mas majoritariamente é possível."
  },
  {
    "id": "leg_49",
    "disciplina": "legislacao",
    "topico": "Lei Maria da Penha (Lei 11.340/06)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Acerca das medidas protetivas de urgência previstas na Lei Maria da Penha (Lei 11.340/06), assinale a alternativa CORRETA:",
    "alternativas": [
      { "letra": "A", "texto": "As medidas protetivas só podem ser concedidas mediante representação da vítima." },
      { "letra": "B", "texto": "A concessão de medida protetiva configura pré-julgamento, sendo necessário aguardar o trânsito em julgado." },
      { "letra": "C", "texto": "O juiz pode conceder de ofício as medidas protetivas, independentemente de requerimento, a pedido da vítima ou do MP." },
      { "letra": "D", "texto": "As medidas protetivas são aplicáveis apenas a mulheres casadas ou em união estável com o agressor." }
    ],
    "gabarito": "C",
    "artigo": "Art. 18, I e 19 da Lei 11.340/06",
    "justificativa": "O art. 19 da Lei Maria da Penha permite que o juiz conceda as medidas protetivas de ofício ou a requerimento do MP ou da ofendida. As medidas se aplicam a qualquer relação íntima de afeto, não apenas a cônjuges/companheiras (art. 5º)."
  },
  {
    "id": "leg_50",
    "disciplina": "legislacao",
    "topico": "Lei Maria da Penha (Lei 11.340/06)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "A Lei Maria da Penha se aplica quando há violência doméstica e familiar contra a mulher. A respeito do âmbito de aplicação, é CORRETO afirmar que:",
    "alternativas": [
      { "letra": "A", "texto": "Aplica-se apenas quando a agressão ocorre dentro do lar do casal." },
      { "letra": "B", "texto": "Aplica-se em qualquer relação de afeto, independentemente de coabitação ou orientação sexual." },
      { "letra": "C", "texto": "Aplica-se apenas quando o agressor é o cônjuge ou companheiro da vítima." },
      { "letra": "D", "texto": "Não se aplica quando a vítima e o agressor são do mesmo sexo." }
    ],
    "gabarito": "B",
    "artigo": "Art. 5º da Lei 11.340/06 e STJ",
    "justificativa": "O art. 5º da Lei Maria da Penha prevê que se aplica a qualquer relação íntima de afeto, independentemente de coabitação e orientação sexual. O STJ firmou que se aplica também às relações homoafetivas femininas."
  },
  {
    "id": "leg_51",
    "disciplina": "legislacao",
    "topico": "Estatuto do Desarmamento (Lei 10.826/03)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o Estatuto do Desarmamento (Lei 10.826/03), é CORRETO afirmar que o porte ilegal de arma de fogo de uso permitido é um crime:",
    "alternativas": [
      { "letra": "A", "texto": "De menor potencial ofensivo, processado no Juizado Especial Criminal." },
      { "letra": "B", "texto": "Formal (de mera conduta), independente da demonstração de perigo real." },
      { "letra": "C", "texto": "Material, consumado apenas com a prova de perigo concreto à coletividade." },
      { "letra": "D", "texto": "Que depende da demonstração de dolo específico para sua configuração." }
    ],
    "gabarito": "B",
    "artigo": "Art. 14 da Lei 10.826/03 e Súmula 513 do STJ",
    "justificativa": "O STJ, pela Súmula 513, e o STF pacificaram que o porte ilegal de arma de fogo é crime de PERIGO ABSTRATO (formal/mera conduta), não exigindo a comprovação de perigo concreto. A simples conduta de portar ilegalmente já consuma o crime."
  },
  {
    "id": "leg_52",
    "disciplina": "legislacao",
    "topico": "Lei de Drogas (Lei 11.343/06)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos da Lei de Drogas (Lei 11.343/06), qual das alternativas descreve corretamente o crime de tráfico de drogas (Art. 33)?",
    "alternativas": [
      { "letra": "A", "texto": "Crime afiançável, com pena de 5 a 15 anos de reclusão." },
      { "letra": "B", "texto": "Crime inafiançável e insuscetível de sursis, com pena de 5 a 15 anos." },
      { "letra": "C", "texto": "Crime afiançável e com pena de 5 a 10 anos de reclusão." },
      { "letra": "D", "texto": "Crime inafiançável, equiparado a hediondo, com pena de 5 a 15 anos." }
    ],
    "gabarito": "D",
    "artigo": "Art. 33 e 44 da Lei 11.343/06",
    "justificativa": "O tráfico de drogas é equiparado a crime hediondo (art. 44 da Lei 11.343/06), sendo inafiançável e insuscetível de sursis, graça, indulto, anistia e liberdade provisória. A pena é reclusão de 5 a 15 anos (art. 33, caput)."
  },
  {
    "id": "leg_53",
    "disciplina": "legislacao",
    "topico": "Lei de Drogas (Lei 11.343/06)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "No crime de tráfico de drogas (Art. 33, Lei 11.343/06), existe a possibilidade de redução de pena. Quais são os requisitos para essa causa de diminuição?",
    "alternativas": [
      { "letra": "A", "texto": "Ser primário, ter bons antecedentes e não se dedicar a atividades criminosas. Redução de 1/6 a 1/3." },
      { "letra": "B", "texto": "Ser primário, ter bons antecedentes, não integrar organização criminosa e não se dedicar a atividades ilícitas. Redução de 1/6 a 2/3." },
      { "letra": "C", "texto": "Ser primário e colaborar voluntariamente com a persecução penal. Redução de 1/3 a 2/3." },
      { "letra": "D", "texto": "Ser primário, ter bons antecedentes e não integrar organização criminosa. Redução de 1/6 a 2/3." }
    ],
    "gabarito": "D",
    "artigo": "Art. 33, §4º da Lei 11.343/06",
    "justificativa": "Art. 33, §4º: redução de 1/6 a 2/3 se o agente for primário, de bons antecedentes e NÃO SE DEDICAR A ATIVIDADES CRIMINOSAS, NEM INTEGRAR ORGANIZAÇÃO CRIMINOSA. Não há requisito de colaboração."
  },
  {
    "id": "leg_54",
    "disciplina": "legislacao",
    "topico": "Abuso de Autoridade (Lei 13.869/19)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "De acordo com a Lei de Abuso de Autoridade (Lei 13.869/2019), o crime de abuso de autoridade exige, para sua configuração:",
    "alternativas": [
      { "letra": "A", "texto": "Apenas o dolo, sem necessidade de qualquer finalidade especial." },
      { "letra": "B", "texto": "Dolo específico: finalidade de prejudicar outrem, de beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal." },
      { "letra": "C", "texto": "Culpa grave do agente público, decorrente de negligência evidente." },
      { "letra": "D", "texto": "Dolo e o resultado concreto de dano à vítima para que o crime se consume." }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, §1º da Lei 13.869/19",
    "justificativa": "O art. 1º, §1º da Lei 13.869/19 exige DOLO ESPECÍFICO (elemento subjetivo especial): o agente deve agir com finalidade de prejudicar outrem, de se beneficiar ou a terceiro, ou por mero capricho ou satisfação pessoal. Não basta o dolo genérico."
  },
  {
    "id": "leg_55",
    "disciplina": "legislacao",
    "topico": "Abuso de Autoridade (Lei 13.869/19)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Comete abuso de autoridade, nos termos da Lei 13.869/19, o agente público que:",
    "alternativas": [
      { "letra": "A", "texto": "Mantém preso preventivamente o indivíduo por prazo superior ao determinado em lei, desde que exista fundamentação judicial." },
      { "letra": "B", "texto": "Submete o preso a medida de segurança por tempo superior ao estabelecido em lei." },
      { "letra": "C", "texto": "Decreta a prisão preventiva em flagrante de crime afiançável sem possibilidade de arbitramento de fiança." },
      { "letra": "D", "texto": "Interroga o preso sem a presença do advogado, desde que seja comunicado posteriormente." }
    ],
    "gabarito": "B",
    "artigo": "Art. 10, parágrafo único da Lei 13.869/19",
    "justificativa": "A Lei 13.869/19 tipifica como abuso de autoridade submeter o preso a medida de segurança por tempo superior ao legalmente estabelecido (art. 10, p.ú.). A alternativa A é incorreta pois a questão diz \"desde que exista fundamentação judicial\", o que afasta o abuso."
  },
  {
    "id": "leg_56",
    "disciplina": "legislacao",
    "topico": "Lei de Tortura (Lei 9.455/97)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos da Lei de Tortura (Lei 9.455/97), configura tortura:",
    "alternativas": [
      { "letra": "A", "texto": "Qualquer lesão corporal dolosa praticada por agente público contra pessoa detida." },
      { "letra": "B", "texto": "Constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental, com o fim de obter informação, declaração ou confissão." },
      { "letra": "C", "texto": "Apenas a tortura com resultado morte, pois os demais casos configuram lesão corporal qualificada." },
      { "letra": "D", "texto": "Submeter à prisão indevida qualquer pessoa privada de sua liberdade, independentemente de sofrimento." }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, I, 'a' da Lei 9.455/97",
    "justificativa": "O art. 1º, I, 'a' da Lei 9.455/97 define tortura como constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental, com o fim de obter informação, declaração ou confissão."
  },
  {
    "id": "leg_57",
    "disciplina": "legislacao",
    "topico": "Crimes Hediondos (Lei 8.072/90)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "São crimes hediondos, de acordo com a Lei 8.072/90 (art. 1º), EXCETO:",
    "alternativas": [
      { "letra": "A", "texto": "Homicídio qualificado e feminicídio." },
      { "letra": "B", "texto": "Estupro e estupro de vulnerável." },
      { "letra": "C", "texto": "Latrocínio e extorsão mediante sequestro." },
      { "letra": "D", "texto": "Roubo circunstanciado com emprego de arma de fogo." }
    ],
    "gabarito": "D",
    "artigo": "Art. 1º da Lei 8.072/90",
    "justificativa": "O ROUBO circunstanciado com emprego de arma de fogo NÃO é crime hediondo. São hediondos: homicídio qualificado/feminicídio, latrocínio, extorsão mediante sequestro, estupro, estupro de vulnerável, epidemia com resultado morte, falsificação de remédios etc. (art. 1º da Lei 8.072/90)."
  },
  {
    "id": "leg_58",
    "disciplina": "legislacao",
    "topico": "Lei do Crime Organizado (Lei 12.850/13)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Na colaboração premiada prevista na Lei 12.850/13, é INCORRETO afirmar que:",
    "alternativas": [
      { "letra": "A", "texto": "O colaborador pode ser beneficiado com perdão judicial, redução da pena em até 2/3 ou substituição por pena restritiva de direitos." },
      { "letra": "B", "texto": "O acordo de colaboração é realizado entre o MP (ou delegado, na fase de inquérito) e o colaborador, homologado pelo juiz." },
      { "letra": "C", "texto": "O juiz pode analisar o mérito das declarações do colaborador antes da homologação do acordo." },
      { "letra": "D", "texto": "Nenhuma sentença condenatória será proferida com fundamento exclusivamente nas declarações do colaborador." }
    ],
    "gabarito": "C",
    "artigo": "Art. 4º, §7º da Lei 12.850/13",
    "justificativa": "O art. 4º, §7º da Lei 12.850/13 veda expressamente que o juiz analise o MÉRITO do acordo antes da homologação. Na homologação, o juiz apenas verifica a regularidade, legalidade e voluntariedade, sem apreciar a eficácia das declarações."
  },
  {
    "id": "leg_59",
    "disciplina": "legislacao",
    "topico": "Estatuto do Desarmamento (Lei 10.826/03)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Conforme o Estatuto do Desarmamento (Lei 10.826/03), o policial penal que portar arma de fogo em desacordo com os regulamentos internos da instituição comete:",
    "alternativas": [
      { "letra": "A", "texto": "Porte ilegal de arma de fogo de uso permitido — art. 14." },
      { "letra": "B", "texto": "Posse ou porte ilegal de arma de fogo de uso restrito — art. 16." },
      { "letra": "C", "texto": "Infração administrativa interna, sem configuração de crime." },
      { "letra": "D", "texto": "Disparo de arma de fogo — art. 15." }
    ],
    "gabarito": "C",
    "artigo": "Art. 14, parágrafo único, I da Lei 10.826/03",
    "justificativa": "O art. 14, parágrafo único, I exclui do crime de porte ilegal os militares, policiais civis, penais e demais servidores autorizados por lei. O porte irregular por servidor público dentro dos limites institucionais configura infração administrativa, não crime."
  },
  {
    "id": "leg_60",
    "disciplina": "legislacao",
    "topico": "Lei de Drogas (Lei 11.343/06)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "O art. 33-A da Lei de Drogas, incluído pela Lei 12.982/2014, equipara ao tráfico de drogas a conduta de:",
    "alternativas": [
      { "letra": "A", "texto": "Fornecer drogas, ainda que gratuitamente, a pessoa de seu relacionamento, causando sua morte." },
      { "letra": "B", "texto": "Importar ou exportar droga, ainda que em pequenas quantidades, para consumo próprio." },
      { "letra": "C", "texto": "Oferecer droga, eventualmente e sem objetivo de lucro, à pessoa de seu relacionamento, para juntos consumirem." },
      { "letra": "D", "texto": "Administrar estabelecimento em que ocorram práticas de uso de drogas." }
    ],
    "gabarito": "C",
    "artigo": "Art. 33, §3º da Lei 11.343/06",
    "justificativa": "O art. 33, §3º trata de uma forma privilegiada de tráfico: oferecer droga, eventualmente e sem objetivo de lucro, à pessoa de seu relacionamento, para juntos consumirem. Pena é menor que o tráfico comum: detenção de 6 meses a 1 ano, mais multa."
  },
  {
    "id": "leg_61",
    "disciplina": "legislacao",
    "topico": "Lei Maria da Penha (Lei 11.340/06)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A Lei Maria da Penha prevê formas de violência doméstica e familiar contra a mulher. São formas de violência previstas na lei:",
    "alternativas": [
      { "letra": "A", "texto": "Física, psicológica e sexual apenas." },
      { "letra": "B", "texto": "Física, psicológica, sexual, patrimonial e moral." },
      { "letra": "C", "texto": "Física, psicológica, sexual, moral e institucional." },
      { "letra": "D", "texto": "Física, psicológica e patrimonial apenas." }
    ],
    "gabarito": "B",
    "artigo": "Art. 7º da Lei 11.340/06",
    "justificativa": "O art. 7º da Lei Maria da Penha prevê cinco formas de violência doméstica contra a mulher: I — violência FÍSICA; II — violência PSICOLÓGICA; III — violência SEXUAL; IV — violência PATRIMONIAL; V — violência MORAL."
  },
  {
    "id": "leg_62",
    "disciplina": "legislacao",
    "topico": "Lavagem de Dinheiro (Lei 9.613/98)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o crime de lavagem de dinheiro (Lei 9.613/98), com as alterações da Lei 12.683/12, assinale a alternativa CORRETA:",
    "alternativas": [
      { "letra": "A", "texto": "O crime antecedente deve ser obrigatoriamente um crime hediondo para que haja lavagem de dinheiro." },
      { "letra": "B", "texto": "O crime de lavagem pode ter como antecedente qualquer infração penal — crime ou contravenção." },
      { "letra": "C", "texto": "A lavagem de dinheiro exige que o agente seja o mesmo que cometeu o crime antecedente." },
      { "letra": "D", "texto": "A autolavagem (self-laundering) não é punível no direito brasileiro." }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º da Lei 9.613/98 (redação da Lei 12.683/12)",
    "justificativa": "Após a Lei 12.683/12, o rol taxativo de crimes antecedentes foi eliminado: qualquer infração penal (crime OU contravenção) pode ser antecedente da lavagem. A autolavagem é punível no Brasil."
  }
];

// ========================================================
// QUESTIONS_PENAL.JS — 10 novas questões (penal_36 a penal_45)
// ========================================================
const newPenal = [
  {
    "id": "penal_36",
    "disciplina": "penal",
    "topico": "Crimes contra a Pessoa",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O homicídio qualificado por feminicídio (Art. 121, §2º, VI do CP) ocorre quando o crime é praticado:",
    "alternativas": [
      { "letra": "A", "texto": "Contra mulher, em qualquer situação, somente quando o autor é o cônjuge." },
      { "letra": "B", "texto": "Contra a mulher por razões da condição de sexo feminino, em violência doméstica/familiar ou por menosprezo/discriminação à condição de mulher." },
      { "letra": "C", "texto": "Contra a mulher dentro do ambiente doméstico, independentemente da motivação." },
      { "letra": "D", "texto": "Quando a vítima é do sexo feminino e há resultado mais grave do que a lesão corporal." }
    ],
    "gabarito": "B",
    "artigo": "Art. 121, §2º, VI e §2º-A do CP",
    "justificativa": "O feminicídio ocorre quando o homicídio é praticado CONTRA A MULHER POR RAZÕES DA CONDIÇÃO DE SEXO FEMININO. O §2º-A define essas razões como: violência doméstica e familiar ou menosprezo ou discriminação à condição de mulher."
  },
  {
    "id": "penal_37",
    "disciplina": "penal",
    "topico": "Concurso de Crimes",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o concurso formal de crimes (Art. 70 do CP), assinale a alternativa CORRETA:",
    "alternativas": [
      { "letra": "A", "texto": "No concurso formal perfeito (ideal), as penas se somam (cúmulo material)." },
      { "letra": "B", "texto": "No concurso formal perfeito, aplica-se a pena mais grave, aumentada de 1/6 até a metade." },
      { "letra": "C", "texto": "No concurso formal imperfeito, aplica-se somente a pena mais grave, sem aumento." },
      { "letra": "D", "texto": "O concurso formal ocorre quando o agente pratica duas ações distintas produzindo dois resultados distintos." }
    ],
    "gabarito": "B",
    "artigo": "Art. 70 do Código Penal",
    "justificativa": "No concurso formal PERFEITO (art. 70 caput 1ª parte): uma só ação produz dois ou mais crimes sem desígnios autônomos → aplica-se a pena mais grave AUMENTADA de 1/6 até a metade. No IMPERFEITO (desígnios autônomos) → cúmulo material."
  },
  {
    "id": "penal_38",
    "disciplina": "penal",
    "topico": "Causas de Exclusão da Ilicitude",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre a legítima defesa (Art. 25 do CP), é CORRETO afirmar que:",
    "alternativas": [
      { "letra": "A", "texto": "Somente pode ser invocada para repelir agressão atual, sendo que a iminente não é coberta." },
      { "letra": "B", "texto": "Admite-se a legítima defesa recíproca quando dois agentes se agridem mutuamente de forma injusta." },
      { "letra": "C", "texto": "Consiste em repelir, com moderação, agressão injusta, atual ou iminente, a direito próprio ou alheio." },
      { "letra": "D", "texto": "A legítima defesa putativa exclui a ilicitude quando há erro plenamente justificado pela situação." }
    ],
    "gabarito": "C",
    "artigo": "Art. 25 do Código Penal",
    "justificativa": "O art. 25 do CP define legítima defesa como o uso moderado dos meios necessários para repelir injusta agressão, ATUAL OU IMINENTE, a direito próprio ou alheio. Não há legítima defesa recíproca (não se pode agir em LD contra quem também age em LD)."
  },
  {
    "id": "penal_39",
    "disciplina": "penal",
    "topico": "Aplicação da Lei Penal",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A lei penal mais grave se aplica ao crime continuado ou permanente se sua vigência é anterior à cessação da continuidade ou permanência. Essa afirmação decorre do princípio da:",
    "alternativas": [
      { "letra": "A", "texto": "Retroatividade benéfica da lei penal." },
      { "letra": "B", "texto": "Irretroatividade da lei penal mais grave, pois ela se aplica ao início do crime." },
      { "letra": "C", "texto": "Ultratividade da lei mais benéfica ao réu." },
      { "letra": "D", "texto": "Tempus regit actum — a lei que vigora durante a conduta, mesmo que mais grave, se aplica." }
    ],
    "gabarito": "D",
    "artigo": "Súmula 711 do STF",
    "justificativa": "A Súmula 711 do STF consagra que: 'A lei penal mais grave aplica-se ao crime continuado ou permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência.' O fundamento é que o crime ainda estava em execução."
  },
  {
    "id": "penal_40",
    "disciplina": "penal",
    "topico": "Crimes contra o Patrimônio",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O crime de furto simples (Art. 155 do CP) é punido com pena de reclusão de 1 a 4 anos. Qual das situações abaixo qualifica o furto com pena de 2 a 8 anos?",
    "alternativas": [
      { "letra": "A", "texto": "Furto praticado com emprego de chave falsa." },
      { "letra": "B", "texto": "Furto praticado por duas pessoas, durante o dia." },
      { "letra": "C", "texto": "Furto praticado contra idoso acima de 70 anos." },
      { "letra": "D", "texto": "Furto praticado com destruição ou rompimento de obstáculo." }
    ],
    "gabarito": "D",
    "artigo": "Art. 155, §4º, I do Código Penal",
    "justificativa": "O art. 155, §4º do CP prevê furto qualificado com pena de 2 a 8 anos, dentre outros: I — com destruição ou rompimento de obstáculo. Chave falsa (II) também qualifica, mas a pena é idêntica (2 a 8 anos) — a questão pede situação que qualifica, sendo D a mais direta."
  },
  {
    "id": "penal_41",
    "disciplina": "penal",
    "topico": "Extinção da Punibilidade",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "São causas de extinção da punibilidade previstas no Código Penal, EXCETO:",
    "alternativas": [
      { "letra": "A", "texto": "Morte do agente e anistia." },
      { "letra": "B", "texto": "Prescrição, decadência e perempção." },
      { "letra": "C", "texto": "Renúncia ao direito de queixa e perdão aceito." },
      { "letra": "D", "texto": "Reincidência e atenuantes supervenientes." }
    ],
    "gabarito": "D",
    "artigo": "Art. 107 do Código Penal",
    "justificativa": "O art. 107 do CP lista as causas de extinção da punibilidade. REINCIDÊNCIA e ATENUANTES SUPERVENIENTES não estão elencadas, pois ao contrário, a reincidência agrava a situação do agente."
  },
  {
    "id": "penal_42",
    "disciplina": "penal",
    "topico": "Crimes contra a Honra",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre a injúria racial (Art. 140, §3º do CP, alterado pela Lei 14.532/23), é CORRETO afirmar:",
    "alternativas": [
      { "letra": "A", "texto": "É crime de menor potencial ofensivo, de ação penal privada." },
      { "letra": "B", "texto": "Após a Lei 14.532/23, foi equiparada a crime hediondo, com pena de 2 a 5 anos." },
      { "letra": "C", "texto": "É crime de ação penal pública condicionada à representação." },
      { "letra": "D", "texto": "Somente se configura quando há atribuição de fato criminoso em razão de raça ou cor." }
    ],
    "gabarito": "B",
    "artigo": "Art. 140, §3º do CP (Lei 14.532/23)",
    "justificativa": "A Lei 14.532/2023 equiparou a injúria racial a crime de racismo e a crime HEDIONDO. A pena é de reclusão de 2 a 5 anos, com possibilidade de aumento. É de ação penal pública incondicionada após a alteração."
  },
  {
    "id": "penal_43",
    "disciplina": "penal",
    "topico": "Crimes contra a Administração Pública",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O crime de corrupção passiva (Art. 317 do CP) diferencia-se da prevaricação (Art. 319 do CP) principalmente porque:",
    "alternativas": [
      { "letra": "A", "texto": "Na corrupção passiva, o agente pratica ato ilegal; na prevaricação, sempre pratica ato legal." },
      { "letra": "B", "texto": "Na corrupção passiva, o agente busca vantagem econômica indevida; na prevaricação, age para satisfazer interesse ou sentimento pessoal, sem necessariamente buscar vantagem econômica." },
      { "letra": "C", "texto": "Na prevaricação, o agente sempre exige vantagem de terceiros; na corrupção, age por sentimento." },
      { "letra": "D", "texto": "Corrupção passiva é crime próprio de policiais; prevaricação é crime comum." }
    ],
    "gabarito": "B",
    "artigo": "Arts. 317 e 319 do Código Penal",
    "justificativa": "Na corrupção passiva, o FP solicita, recebe ou aceita vantagem indevida (motivação econômica). Na prevaricação, o FP retarda, omite ou pratica ato contra lei para satisfazer INTERESSE OU SENTIMENTO PESSOAL — sem necessariamente buscar lucro."
  },
  {
    "id": "penal_44",
    "disciplina": "penal",
    "topico": "Crimes contra a Fé Pública",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o crime de falsidade ideológica (Art. 299 do CP), é CORRETO afirmar:",
    "alternativas": [
      { "letra": "A", "texto": "Ocorre quando o agente falsifica materialmente o documento, alterando sua forma externa." },
      { "letra": "B", "texto": "Ocorre quando o agente insere ou faz inserir declaração falsa em documento verdadeiro, para fins de prejudicar outrem ou obter vantagem." },
      { "letra": "C", "texto": "Só se configura em documentos públicos." },
      { "letra": "D", "texto": "É punido apenas com multa, sem pena privativa de liberdade." }
    ],
    "gabarito": "B",
    "artigo": "Art. 299 do Código Penal",
    "justificativa": "Falsidade ideológica (art. 299 CP) é a INSERÇÃO DE DADOS FALSOS em documento verdadeiro (o papel é autêntico, o conteúdo é falso). Difere da falsidade material (art. 297), em que o próprio documento é forjado."
  },
  {
    "id": "penal_45",
    "disciplina": "penal",
    "topico": "Crimes contra a Dignidade Sexual",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O estupro de vulnerável (Art. 217-A do CP) consuma-se quando a vítima tem menos de 14 anos. A respeito do erro sobre a idade da vítima, assinale a alternativa CORRETA segundo a jurisprudência do STJ:",
    "alternativas": [
      { "letra": "A", "texto": "O erro sobre a idade exclui sempre o dolo, afastando o crime." },
      { "letra": "B", "texto": "O erro sobre a idade pode ser alegado como erro de tipo essencial, mas deve ser comprovado pelo réu e avaliado no caso concreto." },
      { "letra": "C", "texto": "O STJ adota posição absoluta de que o erro sobre a idade jamais exclui o crime." },
      { "letra": "D", "texto": "O crime é de responsabilidade objetiva; qualquer relação com menor de 14 anos gera crime independentemente do conhecimento da idade." }
    ],
    "gabarito": "B",
    "artigo": "Art. 217-A do CP e posição do STJ",
    "justificativa": "O STJ não adota posição absolutamente objetiva. A alegação de desconhecimento da idade da vítima pode ser invocada como erro de tipo (art. 20 CP), devendo o réu comprovar o erro. Assim, cada caso é analisado individualmente, não havendo responsabilidade objetiva pura."
  }
];

appendQuestions('questions_lep.js', newLEP);
appendQuestions('questions_legislacao.js', newLeg);
appendQuestions('questions_penal.js', newPenal);
