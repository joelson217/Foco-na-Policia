// ============================================================
// QUESTIONS_PESO2_REFORCO4.JS — 30 questões inéditas fechando lacunas
// identificadas em nova auditoria de cobertura do edital (peso 2):
//
// 1) Legislação Penitenciária do RN (12 questões) — tópico citado
//    explicitamente no edital ("Legislação Penitenciária do RN") mas
//    que tinha apenas 1 questão em todo o banco. Baseado na Lei
//    Complementar nº 566/2016 (Estatuto da Carreira, então "Agente
//    Penitenciário") e na Lei Complementar nº 664/2020 (renomeou o
//    cargo para "Policial Penal" e reestruturou a carreira), ambas do
//    Rio Grande do Norte — conteúdo verificado diretamente no texto
//    oficial das leis (Assembleia Legislativa do RN).
// 2) Lei 9.099/95 - Juizado Especial Criminal (6 questões) — tópico
//    ausente do banco, mas de cobrança clássica, inclusive por sua
//    interação com a Lei Maria da Penha (Súmula 536/STJ) e com crimes
//    hediondos/equiparados.
// 3) Prisão em Flagrante/Preventiva/Audiência de Custódia (6 questões)
//    — reforço no tema de maior frequência histórica em Penal/Proc.
//    Penal (95%), com pontos mais avançados (audiência de custódia,
//    contemporaneidade, prisão domiciliar).
// 4) Estatuto do Desarmamento (6 questões) — tópico citado no edital
//    com poucas questões sobre penas específicas pós-Pacote Anticrime
//    e distinção posse x porte.
// ============================================================

const QUESTIONS_PESO2_REFORCO4 = [

  // ---------- LEGISLAÇÃO PENITENCIÁRIA DO RN (12 questões) ----------
  {
    id: 'p2r4_rn_1',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'A Lei Complementar Estadual nº 664/2020 do Rio Grande do Norte promoveu qual alteração fundamental na carreira antes disciplinada pela Lei Complementar nº 566/2016?',
    alternativas: [
      { letra: 'A', texto: 'Renomeou o cargo de "Agente Penitenciário" para "Policial Penal" e reestruturou a carreira.' },
      { letra: 'B', texto: 'Extinguiu a carreira de Agente Penitenciário, transferindo os servidores para a Polícia Civil.', comentario: 'A LC 664/2020 não extinguiu a carreira nem transferiu servidores para a Polícia Civil — apenas renomeou o cargo e reestruturou a mesma carreira, mantendo os servidores nela.' },
      { letra: 'C', texto: 'Apenas reajustou os vencimentos, sem alterar a nomenclatura do cargo.', comentario: 'A alteração central foi exatamente a nomenclatura (para "Policial Penal") e a reestruturação da carreira, não um mero reajuste de vencimentos.' },
      { letra: 'D', texto: 'Transformou o cargo em função comissionada, sem vínculo efetivo.', comentario: 'O cargo continua sendo de carreira efetiva, provido por concurso público, e não uma função comissionada de livre nomeação/exoneração.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 1º, Lei Complementar nº 664/2020 (RN)',
    justificativa: 'A LC 664/2020 alterou a LC 566/2016, substituindo a nomenclatura "Agente Penitenciário" por "Policial Penal" em todo o texto e reestruturando a carreira em níveis — mudança que acompanhou a criação da carreira de Polícia Penal em nível nacional pela EC 104/2019.'
  },
  {
    id: 'p2r4_rn_2',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Segundo a Lei Complementar nº 566/2016 (RN), são requisitos para ingresso na carreira, entre outros:',
    alternativas: [
      { letra: 'A', texto: 'Ser brasileiro, ter entre 18 e 45 anos, conduta social ilibada, aptidão física e psicológica, CNH e diploma de ensino superior.' },
      { letra: 'B', texto: 'Ter no mínimo ensino médio completo e idade entre 21 e 40 anos.', comentario: 'A lei exige diploma de nível SUPERIOR (não apenas ensino médio) e faixa etária de 18 a 45 anos, não de 21 a 40.' },
      { letra: 'C', texto: 'Não há exigência de escolaridade mínima, apenas aprovação em concurso.', comentario: 'Há exigência expressa de diploma de nível superior no art. 16, além da aprovação em concurso.' },
      { letra: 'D', texto: 'Ser exclusivamente brasileiro nato, vedada a nacionalidade naturalizada.', comentario: 'A lei exige apenas nacionalidade brasileira, sem distinguir entre nato e naturalizado.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 16, Lei Complementar nº 566/2016 (RN)',
    justificativa: 'O art. 16 exige, entre outros requisitos: nacionalidade brasileira, idade mínima de 18 e máxima de 45 anos, quitação com obrigações eleitorais e militares, ausência de condenação penal transitada em julgado, conduta social ilibada, aptidão física e psicológica, Carteira Nacional de Habilitação e diploma de nível superior.'
  },
  {
    id: 'p2r4_rn_3',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'De acordo com a Lei Complementar nº 566/2016 (RN), o concurso público para ingresso na carreira é composto pelas seguintes fases:',
    alternativas: [
      { letra: 'A', texto: 'Somente prova objetiva e curso de formação.', comentario: 'Faltam nesta alternativa o teste de aptidão física, a avaliação psicológica e a investigação social, todos previstos expressamente no art. 9º.' },
      { letra: 'B', texto: 'Prova objetiva, teste de aptidão física, avaliação psicológica, investigação social e curso de formação.' },
      { letra: 'C', texto: 'Prova objetiva, prova discursiva e entrevista, sem exame psicológico.', comentario: 'A avaliação psicológica é fase obrigatória prevista em lei; "prova discursiva" e "entrevista" não constam do rol legal das cinco fases.' },
      { letra: 'D', texto: 'Apenas análise curricular e prova de títulos.', comentario: 'O concurso exige prova objetiva e as demais fases eliminatórias previstas no art. 9º, não se resume a análise curricular ou títulos.' }
    ],
    gabarito: 'B',
    artigo: 'Art. 9º, Lei Complementar nº 566/2016 (RN)',
    justificativa: 'O art. 9º prevê expressamente cinco fases: prova objetiva, teste de aptidão física, avaliação psicológica, investigação social e curso de formação profissional.'
  },
  {
    id: 'p2r4_rn_4',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Constitui DEVER do Policial Penal do RN, nos termos do Art. 56 da Lei Complementar nº 566/2016:',
    alternativas: [
      { letra: 'A', texto: 'Desempenhar as atribuições legais e regulamentares do cargo com zelo, dedicação, eficiência e probidade.' },
      { letra: 'B', texto: 'Emitir opinião pública sobre processos em andamento envolvendo presos.', comentario: 'Emitir opinião pública sobre processos em andamento compromete o sigilo e a imparcialidade funcional — é conduta vedada, não um dever.' },
      { letra: 'C', texto: 'Recusar-se a registrar ocorrências consideradas de baixa relevância.', comentario: 'Registrar ocorrências é dever funcional; o servidor não pode deixar de fazê-lo por juízo pessoal de relevância.' },
      { letra: 'D', texto: 'Delegar a terceiros, sem autorização, a guarda de armas e valores.', comentario: 'Delegar a guarda de armas e valores sem autorização é conduta vedada; o dever é zelar pessoalmente por essa guarda.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 56, Lei Complementar nº 566/2016 (RN)',
    justificativa: 'Entre os deveres do art. 56 estão desempenhar as atribuições com zelo, dedicação, eficiência e probidade; manter conduta pública e privada compatível com a dignidade da função; comunicar irregularidades; respeitar a hierarquia; e comparecer pontualmente ao serviço — o oposto do descrito nas demais alternativas.'
  },
  {
    id: 'p2r4_rn_5',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'É VEDADO ao Policial Penal do RN, nos termos do Art. 57 da Lei Complementar nº 566/2016:',
    alternativas: [
      { letra: 'A', texto: 'Indicar ou insinuar nome de advogado para assistir pessoa presa.' },
      { letra: 'B', texto: 'Comunicar ao superior hierárquico fatos que comprometam a disciplina.', comentario: 'Comunicar irregularidades ao superior hierárquico é conduta exigida (dever) do servidor, não uma vedação.' },
      { letra: 'C', texto: 'Recusar-se a cumprir ordem manifestamente ilegal.', comentario: 'Recusar cumprir ordem manifestamente ilegal é direito/dever do servidor, protegido pelo ordenamento, e não uma proibição.' },
      { letra: 'D', texto: 'Solicitar afastamento por motivo de saúde devidamente comprovado.', comentario: 'Solicitar afastamento por saúde comprovada é direito do servidor, não conduta vedada pelo art. 57.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 57, Lei Complementar nº 566/2016 (RN)',
    justificativa: 'O art. 57 veda, entre outras condutas: indicar/insinuar advogado para preso, negligenciar a guarda de armas/bens, cobrar carceragem ou qualquer emolumento do preso/família, receber propina ou presente, e ausentar-se do serviço sem autorização. As demais alternativas descrevem condutas lícitas ou até exigidas do servidor.'
  },
  {
    id: 'p2r4_rn_6',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'São penalidades disciplinares aplicáveis ao Policial Penal do RN, segundo o Art. 58 da Lei Complementar nº 566/2016:',
    alternativas: [
      { letra: 'A', texto: 'Advertência, suspensão, demissão e cassação de aposentadoria ou disponibilidade.' },
      { letra: 'B', texto: 'Repreensão verbal, multa pecuniária e prisão administrativa.', comentario: 'Não existem as figuras de "repreensão verbal", "multa pecuniária" ou "prisão administrativa" no rol legal de penalidades disciplinares.' },
      { letra: 'C', texto: 'Apenas advertência e demissão, sem previsão de suspensão.', comentario: 'A suspensão também está prevista no art. 58 como penalidade disciplinar, entre advertência e demissão.' },
      { letra: 'D', texto: 'Exoneração a bem do serviço público e perda da nacionalidade.', comentario: 'Exoneração não é penalidade disciplinar (é ato distinto da demissão) e perda de nacionalidade não consta do rol de penalidades da lei.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 58, Lei Complementar nº 566/2016 (RN)',
    justificativa: 'O rol do art. 58 é o mesmo padrão adotado por estatutos de servidores públicos em geral (compare com a Lei 8.112/90): advertência, suspensão, demissão e cassação de aposentadoria/disponibilidade. Não existem as figuras de "repreensão verbal", "multa pecuniária" ou "prisão administrativa" como penalidades funcionais.'
  },
  {
    id: 'p2r4_rn_7',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Segundo o Art. 60 da Lei Complementar nº 566/2016 (RN), a penalidade de suspensão:',
    alternativas: [
      { letra: 'A', texto: 'Não pode exceder 90 (noventa) dias, sendo aplicada, entre outros casos, em razão de reincidência de faltas anteriormente punidas com advertência.' },
      { letra: 'B', texto: 'Tem duração fixa de 30 dias, improrrogáveis, para qualquer infração.', comentario: 'O limite legal é de até 90 dias, com duração variável conforme a gravidade da falta, não uma duração fixa de 30 dias.' },
      { letra: 'C', texto: 'Só pode ser aplicada após o trânsito em julgado de sentença criminal.', comentario: 'A suspensão é penalidade administrativa/disciplinar, aplicada independentemente de sentença criminal transitada em julgado.' },
      { letra: 'D', texto: 'É sempre convertida automaticamente em demissão após o terceiro registro.', comentario: 'A lei não prevê essa conversão automática em demissão após um número determinado de suspensões.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 60, Lei Complementar nº 566/2016 (RN)',
    justificativa: 'A lei estabelece expressamente que a suspensão não pode exceder 90 dias, cabível nos casos de reincidência de faltas antes punidas com advertência e de violação das demais proibições que não configurem falta mais grave.'
  },
  {
    id: 'p2r4_rn_8',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Quanto à prescrição das infrações disciplinares do Policial Penal do RN (Art. 69, LC 566/2016), os prazos são:',
    alternativas: [
      { letra: 'A', texto: '180 dias para advertência, 2 anos para suspensão e 5 anos para demissão/cassação — prazos interrompidos pela abertura de sindicância ou instauração de processo disciplinar.' },
      { letra: 'B', texto: '30 dias para qualquer infração disciplinar, sem possibilidade de interrupção.', comentario: 'Os prazos variam conforme a gravidade da penalidade (180 dias a 5 anos) e podem sim ser interrompidos pela sindicância ou PAD.' },
      { letra: 'C', texto: '1 ano para todas as infrações, contado da data do fato, correndo mesmo durante o processo disciplinar.', comentario: 'Os prazos são diferenciados conforme a penalidade e são interrompidos pela abertura de sindicância/processo disciplinar, não correm livremente durante ele.' },
      { letra: 'D', texto: 'Não há prazo prescricional para infrações disciplinares no serviço penitenciário.', comentario: 'A lei prevê prazos prescricionais expressos (180 dias, 2 anos e 5 anos), afastando a ideia de imprescritibilidade.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 69, Lei Complementar nº 566/2016 (RN)',
    justificativa: 'Os prazos seguem o mesmo padrão do regime geral dos servidores públicos: 180 dias (advertência), 2 anos (suspensão) e 5 anos (demissão/cassação de aposentadoria), sendo interrompidos pela abertura de sindicância ou instauração de processo administrativo disciplinar.'
  },
  {
    id: 'p2r4_rn_9',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'De acordo com o Art. 61 da Lei Complementar nº 566/2016 (RN), a demissão do Policial Penal é aplicável, entre outros casos, quando o servidor:',
    alternativas: [
      { letra: 'A', texto: 'Promove ou facilita a fuga de pessoa presa, ou exige vantagem financeira no exercício da função.' },
      { letra: 'B', texto: 'Chega atrasado ao serviço uma única vez, sem justificativa prévia.', comentario: 'Um único atraso configura, no máximo, falta leve sujeita a advertência ou suspensão, não demissão.' },
      { letra: 'C', texto: 'Deixa de participar de um curso de aprimoramento facultativo.', comentario: 'O não cumprimento de um curso facultativo não configura ilícito funcional grave e não está entre as hipóteses de demissão do art. 61.' },
      { letra: 'D', texto: 'Solicita transferência de unidade prisional por motivo pessoal.', comentario: 'Solicitar transferência é direito do servidor, não falta disciplinar, e muito menos hipótese de demissão.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 61, Lei Complementar nº 566/2016 (RN)',
    justificativa: 'O art. 61 prevê a demissão para faltas graves como promover fuga de preso, exigir vantagem financeira, aplicar irregularmente dinheiro público, abandonar o cargo por mais de 30 dias, cobrar carceragem, praticar ato incompatível com a moralidade da função, facilitar tráfico de drogas ou praticar improbidade administrativa. As demais alternativas descrevem, no máximo, faltas leves.'
  },
  {
    id: 'p2r4_rn_10',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'dificil',
    enunciado: 'Sobre a estrutura da carreira de Policial Penal do RN após a Lei Complementar nº 664/2020, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'A carreira é composta por 13 níveis (PP-01 a PP-10, seguidos das classes Especial I, II e III), com progressão anual por letra e promoção bienal por nível mediante critérios de mérito e antiguidade.' },
      { letra: 'B', texto: 'A carreira possui um único nível, sem qualquer possibilidade de progressão ou promoção.', comentario: 'A carreira tem 13 níveis (PP-01 a PP-10 + Especial I/II/III), com progressão e promoção expressamente previstas.' },
      { letra: 'C', texto: 'A promoção ocorre automaticamente a cada ano, independentemente de avaliação de desempenho ou cursos.', comentario: 'A promoção é bienal (a cada 2 anos) e exige avaliação de desempenho e participação mínima em cursos, não é automática nem anual.' },
      { letra: 'D', texto: 'Não há distinção entre progressão e promoção; os dois termos são sinônimos na lei.', comentario: 'A lei distingue expressamente progressão (mudança de letra, anual) de promoção (mudança de nível, bienal, com critérios próprios).' }
    ],
    gabarito: 'A',
    artigo: 'Arts. 27, 28 e 30, Lei Complementar nº 664/2020 (RN)',
    justificativa: 'A carreira tem 13 níveis (PP-01 a PP-10 + Especial I/II/III). A LC 664/2020 distingue progressão (mudança de letra, a cada 1 ano) de promoção (mudança de nível, a cada 2 anos, exigindo avaliação de desempenho e participação mínima em cursos de aprimoramento funcional).'
  },
  {
    id: 'p2r4_rn_11',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'Segundo o Art. 55 da Lei Complementar nº 664/2020 (RN), a jornada de trabalho do Policial Penal:',
    alternativas: [
      { letra: 'A', texto: 'É cumprida em regime de plantão, não podendo exceder 160 horas mensais, normalmente em escala de 24 horas de trabalho por 72 horas de folga.' },
      { letra: 'B', texto: 'É de 8 horas diárias fixas, de segunda a sexta-feira, sem regime de plantão.', comentario: 'A jornada é cumprida em regime de plantão (tipicamente 24x72), não em horário fixo de segunda a sexta.' },
      { letra: 'C', texto: 'É de 44 horas semanais, idêntica à jornada padrão da iniciativa privada, sem limite mensal.', comentario: 'O limite legal é de 160 horas mensais em escala de plantão, e não uma jornada semanal padrão nos moldes da CLT.' },
      { letra: 'D', texto: 'Pode ser livremente definida pelo próprio servidor, sem regulamentação legal.', comentario: 'A jornada é fixada expressamente em lei (art. 55), não fica a critério do próprio servidor.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 55, Lei Complementar nº 664/2020 (RN)',
    justificativa: 'A lei fixa jornada em regime de plantão, limitada a 160 horas mensais, tipicamente em escala de 24 horas de trabalho por 72 horas de folga — regime compatível com a natureza ininterrupta da atividade de custódia e vigilância prisional.'
  },
  {
    id: 'p2r4_rn_12',
    disciplina: 'legislacao',
    topico: 'Legislação Penitenciária do RN',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'facil',
    enunciado: 'De acordo com o Art. 9º da Lei Complementar nº 664/2020 (RN), o ingresso na carreira de Policial Penal do RN se dá:',
    alternativas: [
      { letra: 'A', texto: 'No Nível I, codificado como PP-01, após aprovação em concurso público de provas ou de provas e títulos.' },
      { letra: 'B', texto: 'Em qualquer nível da carreira, a critério da autoridade nomeante.', comentario: 'O ingresso se dá sempre no nível inicial (PP-01), não em qualquer nível a critério da autoridade nomeante.' },
      { letra: 'C', texto: 'Exclusivamente por meio de ascensão funcional de outro cargo do Estado.', comentario: 'O ingresso se dá por concurso público, e não por ascensão funcional — forma de provimento vedada pela CF/88 (art. 37, II).' },
      { letra: 'D', texto: 'No nível Especial III, com posterior rebaixamento gradual conforme desempenho.', comentario: 'O ingresso ocorre no nível inicial da carreira, e a progressão/promoção é sempre ascendente, não havendo previsão de rebaixamento.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 9º, Lei Complementar nº 664/2020 (RN)',
    justificativa: 'O ingresso se dá sempre no nível inicial da carreira (Nível I, código PP-01), mediante aprovação em concurso público de provas ou de provas e títulos, seguindo a regra geral do Art. 37, II da CF/88.'
  },

  // ---------- LEI 9.099/95 — JUIZADO ESPECIAL CRIMINAL (6 questões) ----------
  {
    id: 'p2r4_jecrim_1',
    disciplina: 'penal',
    topico: 'Lei 9.099/95 - Juizado Especial Criminal',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Para os efeitos da Lei 9.099/95, consideram-se infrações de menor potencial ofensivo:',
    alternativas: [
      { letra: 'A', texto: 'As contravenções penais e os crimes a que a lei comine pena máxima não superior a 2 (dois) anos, cumulada ou não com multa.' },
      { letra: 'B', texto: 'Apenas as contravenções penais, excluído qualquer crime.', comentario: 'O conceito abrange também crimes com pena máxima de até 2 anos, e não apenas as contravenções penais.' },
      { letra: 'C', texto: 'Crimes com pena mínima não superior a 2 anos, independentemente da pena máxima.', comentario: 'O critério legal considera a pena MÁXIMA cominada, não a pena mínima.' },
      { letra: 'D', texto: 'Todos os crimes culposos, independentemente da pena cominada.', comentario: 'A natureza culposa do crime não é o critério legal; o critério é objetivo, baseado exclusivamente na pena máxima cominada.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 61, Lei 9.099/95 (redação da Lei 11.313/06)',
    justificativa: 'O critério legal é objetivo e considera a PENA MÁXIMA abstratamente cominada: até 2 anos (cumulada ou não com multa), somado às contravenções penais, independentemente do rito ou da complexidade do caso.'
  },
  {
    id: 'p2r4_jecrim_2',
    disciplina: 'penal',
    topico: 'Lei 9.099/95 - Juizado Especial Criminal',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Sobre a transação penal (Art. 76 da Lei 9.099/95), é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'É proposta pelo Ministério Público antes do oferecimento da denúncia, aplicando pena restritiva de direitos ou multa, sem gerar reincidência ou maus antecedentes.' },
      { letra: 'B', texto: 'Constitui confissão de culpa e gera antecedentes criminais, com efeitos idênticos aos de uma condenação.', comentario: 'A jurisprudência pacificou que a homologação da transação penal não gera reincidência nem maus antecedentes, por não haver reconhecimento de culpa.' },
      { letra: 'C', texto: 'Só pode ser proposta pelo juiz, de ofício, após o recebimento da denúncia.', comentario: 'A transação é proposta pelo Ministério Público, antes do oferecimento da denúncia, e não pelo juiz de ofício.' },
      { letra: 'D', texto: 'É cabível para qualquer crime, inclusive hediondos, desde que o réu seja primário.', comentario: 'É incompatível com crimes hediondos e equiparados, dada a incompatibilidade objetiva das penas e a vedação legal a esses institutos despenalizadores.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 76, Lei 9.099/95',
    justificativa: 'A transação penal é proposta pelo MP (não pelo juiz de ofício) antes da denúncia, aplicando de imediato pena restritiva de direitos ou multa. O STF/STJ pacificaram que a homologação da transação não gera reincidência nem maus antecedentes, por não haver reconhecimento de culpa.'
  },
  {
    id: 'p2r4_jecrim_3',
    disciplina: 'penal',
    topico: 'Lei 9.099/95 - Juizado Especial Criminal',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A suspensão condicional do processo, prevista no Art. 89 da Lei 9.099/95, é cabível quando:',
    alternativas: [
      { letra: 'A', texto: 'A pena mínima cominada ao crime for igual ou inferior a 1 (um) ano, com suspensão do processo pelo período de 2 a 4 anos.' },
      { letra: 'B', texto: 'A pena máxima cominada ao crime for igual ou inferior a 1 (um) ano.', comentario: 'O critério legal considera a pena MÍNIMA cominada, não a pena máxima.' },
      { letra: 'C', texto: 'O réu já tiver sido condenado anteriormente por qualquer crime, independentemente da pena.', comentario: 'Condenação anterior por crime é justamente uma das causas que AFASTAM o benefício, e não que o autorizam.' },
      { letra: 'D', texto: 'O crime for de ação penal exclusivamente privada, com exclusão de crimes de ação pública.', comentario: 'O instituto se aplica a qualquer espécie de ação penal, desde que atendido o requisito da pena mínima, sem essa restrição.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 89, Lei 9.099/95',
    justificativa: 'O critério legal considera a PENA MÍNIMA (não a máxima): igual ou inferior a 1 ano, abrangendo crimes fora da competência do Juizado (desde que cumprido esse requisito). O período de prova é de 2 a 4 anos, mediante condições legais e judiciais.'
  },
  {
    id: 'p2r4_jecrim_4',
    disciplina: 'legislacao',
    topico: 'Lei 11.340/06 - Lei Maria da Penha',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Sobre a aplicação da Lei 9.099/95 aos crimes praticados com violência doméstica e familiar contra a mulher, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'É expressamente vedada pelo Art. 41 da Lei Maria da Penha, não se aplicando transação penal, composição civil dos danos nem suspensão condicional do processo, ainda que a pena do crime seja compatível com o Juizado Especial.' },
      { letra: 'B', texto: 'Aplica-se normalmente sempre que a pena máxima do crime não superar 2 anos.', comentario: 'O Art. 41 da Lei Maria da Penha afasta a Lei 9.099/95 independentemente da pena cominada ao crime, não havendo aplicação automática pelo simples enquadramento na pena.' },
      { letra: 'C', texto: 'A vedação se limita à transação penal, sendo cabíveis a suspensão condicional do processo e a composição civil.', comentario: 'A Súmula 536/STJ afasta tanto a transação penal quanto a suspensão condicional do processo nos crimes sujeitos à Lei Maria da Penha, não apenas a transação.' },
      { letra: 'D', texto: 'A vedação depende de requerimento expresso da vítima em cada caso concreto.', comentario: 'A vedação é automática e objetiva, decorrente diretamente da lei, não dependendo de requerimento da vítima.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 41, Lei 11.340/06; Súmula 536 do STJ',
    justificativa: 'O Art. 41 da Lei Maria da Penha afasta a aplicação da Lei 9.099/95 aos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena cominada. A Súmula 536/STJ confirma: "a suspensão condicional do processo e a transação penal não se aplicam na hipótese de delitos sujeitos ao rito da Lei Maria da Penha".'
  },
  {
    id: 'p2r4_jecrim_5',
    disciplina: 'penal',
    topico: 'Lei 9.099/95 - Juizado Especial Criminal',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'dificil',
    enunciado: 'Nos crimes de ação penal pública condicionada à representação ou de ação penal privada, a composição dos danos civis (Art. 74, parágrafo único, da Lei 9.099/95), quando reduzida a termo e homologada:',
    alternativas: [
      { letra: 'A', texto: 'Acarreta a renúncia ao direito de queixa ou representação.' },
      { letra: 'B', texto: 'Não produz qualquer efeito sobre a ação penal, servindo apenas de título executivo cível.', comentario: 'Além de servir como título executivo, a composição acarreta a renúncia ao direito de queixa/representação, extinguindo a punibilidade quanto a esses crimes.' },
      { letra: 'C', texto: 'Obriga automaticamente a vítima a oferecer representação em até 5 dias.', comentario: 'O efeito legal é justamente o oposto: a composição homologada gera renúncia ao direito de representação ou queixa, não obrigação de exercê-lo.' },
      { letra: 'D', texto: 'Só é válida se homologada por sentença transitada em julgado no juízo cível.', comentario: 'A homologação ocorre no próprio Juizado Especial Criminal, bastando sentença irrecorrível ali proferida, sem necessidade de trânsito em julgado em juízo cível.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 74, parágrafo único, Lei 9.099/95',
    justificativa: 'A composição dos danos civis, homologada por sentença irrecorrível, tem eficácia de título executivo e, nos crimes de ação pública condicionada ou privada, acarreta a renúncia ao direito de queixa ou representação — extinguindo a punibilidade quanto a esses crimes.'
  },
  {
    id: 'p2r4_jecrim_6',
    disciplina: 'legislacao',
    topico: 'Lei 8.072/90 - Crimes Hediondos',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'Os institutos despenalizadores da Lei 9.099/95 (transação penal e suspensão condicional do processo) são aplicáveis aos crimes hediondos e equiparados (tráfico, tortura, terrorismo)?',
    alternativas: [
      { letra: 'A', texto: 'Não, pois esses crimes têm penas mínimas e máximas incompatíveis com os critérios objetivos dos Arts. 76 e 89 da Lei 9.099/95, além de sofrerem tratamento constitucional mais rigoroso.' },
      { letra: 'B', texto: 'Sim, sempre que o agente for primário, independentemente da pena cominada.', comentario: 'A primariedade do agente não supre a incompatibilidade objetiva de pena exigida pelos arts. 76 e 89 da Lei 9.099/95.' },
      { letra: 'C', texto: 'Sim, mas apenas a suspensão condicional do processo, nunca a transação penal.', comentario: 'Nenhum dos dois institutos costuma ser cabível nesses crimes, dada a incompatibilidade das penas mínima e máxima previstas para eles.' },
      { letra: 'D', texto: 'Depende exclusivamente da vontade do Ministério Público, sem critério legal objetivo.', comentario: 'O critério é objetivo — compatibilidade das penas cominadas —, e não uma questão de discricionariedade do Ministério Público.' }
    ],
    gabarito: 'A',
    artigo: 'Arts. 76 e 89, Lei 9.099/95; Art. 2º, Lei 8.072/90',
    justificativa: 'A incompatibilidade decorre, na prática, das penas elevadas desses crimes (superiores aos limites de 2 anos para transação e 1 ano de pena mínima para suspensão condicional), e não de uma vedação textual específica análoga ao Art. 41 da Lei Maria da Penha — mas o resultado prático é o mesmo: nenhum dos institutos costuma ser cabível.'
  },

  // ---------- PRISÃO EM FLAGRANTE / PREVENTIVA / AUDIÊNCIA DE CUSTÓDIA (6 questões) ----------
  {
    id: 'p2r4_prisao_1',
    disciplina: 'penal',
    topico: 'Prisão em Flagrante (Art. 302-310 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Sobre a audiência de custódia, prevista no Art. 310 do CPP e regulamentada pela Resolução nº 213/2015 do CNJ, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Toda pessoa presa em flagrante deve ser apresentada, em até 24 horas, à autoridade judicial competente, que decidirá por relaxar a prisão, converter em preventiva ou conceder liberdade provisória.' },
      { letra: 'B', texto: 'É facultativa e só ocorre a pedido expresso da defesa técnica.', comentario: 'A audiência de custódia é obrigatória, ocorrendo independentemente de requerimento da defesa.' },
      { letra: 'C', texto: 'Deve ocorrer no prazo de até 10 dias, prazo idêntico ao do inquérito policial.', comentario: 'O prazo legal é de até 24 horas, não se confundindo com o prazo do inquérito policial.' },
      { letra: 'D', texto: 'Aplica-se somente aos crimes de menor potencial ofensivo.', comentario: 'A audiência de custódia aplica-se a toda prisão em flagrante, independentemente da gravidade ou natureza do crime.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 310, CPP; Resolução CNJ nº 213/2015',
    justificativa: 'A audiência de custódia é obrigatória e deve ocorrer em até 24 horas da prisão, permitindo ao juiz avaliar a legalidade da prisão e as condições do preso, decidindo por relaxamento (prisão ilegal), conversão em preventiva ou concessão de liberdade (com ou sem medidas cautelares).'
  },
  {
    id: 'p2r4_prisao_2',
    disciplina: 'penal',
    topico: 'Prisão Preventiva (Art. 311-316 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'A jurisprudência dos tribunais superiores exige, para a decretação da prisão preventiva com fundamento na garantia da ordem pública, além dos requisitos legais do Art. 312 do CPP:',
    alternativas: [
      { letra: 'A', texto: 'Contemporaneidade entre os fatos que fundamentam a prisão e a decisão que a decreta, não bastando fatos antigos e isolados no tempo.' },
      { letra: 'B', texto: 'Confissão expressa do investigado, sob pena de nulidade da prisão.', comentario: 'A confissão não é requisito da prisão preventiva; o requisito adicional exigido pela jurisprudência é a contemporaneidade dos fatos.' },
      { letra: 'C', texto: 'Trânsito em julgado de condenação anterior por crime da mesma natureza.', comentario: 'A preventiva é medida cautelar anterior à sentença; não exige condenação transitada em julgado do próprio fato nem de outro.' },
      { letra: 'D', texto: 'Requerimento exclusivo da vítima, sendo vedada a iniciativa do Ministério Público.', comentario: 'O Ministério Público tem legitimidade para requerer a preventiva; a exigência jurisprudencial adicional é a contemporaneidade dos fatos, não a origem do requerimento.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 312, CPP; jurisprudência do STF/STJ',
    justificativa: 'Os tribunais superiores exigem contemporaneidade: a prisão preventiva para garantia da ordem pública não pode se fundamentar apenas em fatos antigos, sem relação com o momento da decretação, sob pena de configurar antecipação de pena sem lastro fático atual.'
  },
  {
    id: 'p2r4_prisao_3',
    disciplina: 'penal',
    topico: 'CPP - Prisão Temporária',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'São hipóteses que autorizam a decretação da prisão temporária, segundo o Art. 1º da Lei 7.960/89:',
    alternativas: [
      { letra: 'A', texto: 'Quando imprescindível para as investigações do inquérito policial, quando o indiciado não tiver residência fixa ou não fornecer elementos para esclarecer sua identidade, ou quando houver fundadas razões de autoria/participação em crimes do rol taxativo da lei.' },
      { letra: 'B', texto: 'Sempre que o Ministério Público entender conveniente, sem necessidade de fundamentação específica.', comentario: 'A decretação exige fundamentação e enquadramento em uma das hipóteses legais, não bastando mera conveniência do Ministério Público.' },
      { letra: 'C', texto: 'Apenas quando já existir ação penal em curso, sendo incabível na fase de inquérito.', comentario: 'A prisão temporária é medida típica da fase de investigação (inquérito policial), justamente o oposto do afirmado.' },
      { letra: 'D', texto: 'Exclusivamente para crimes culposos, para viabilizar perícia técnica.', comentario: 'A prisão temporária aplica-se ao rol taxativo de crimes dolosos graves do inciso III do art. 1º, não a crimes culposos.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 1º, Lei 7.960/89',
    justificativa: 'A prisão temporária pressupõe fase de investigação (inquérito), exigindo um dos requisitos do inciso I ou II, cumulado com o rol taxativo de crimes do inciso III (homicídio doloso, sequestro, roubo, extorsão, estupro, tráfico de drogas, entre outros), sempre mediante requerimento do MP ou representação da autoridade policial — nunca de ofício.'
  },
  {
    id: 'p2r4_prisao_4',
    disciplina: 'penal',
    topico: 'Prisão em Flagrante (Art. 302-310 CPP)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Após a lavratura do auto de prisão em flagrante, a comunicação dessa prisão, nos termos do Art. 306 do CPP, deve ser feita:',
    alternativas: [
      { letra: 'A', texto: 'Imediatamente ao juiz competente e ao Ministério Público, e, em até 24 horas, à família do preso ou pessoa por ele indicada, além da entrega da nota de culpa ao próprio preso no mesmo prazo.' },
      { letra: 'B', texto: 'Somente ao juiz, sendo dispensada a comunicação ao Ministério Público.', comentario: 'A comunicação imediata deve ser feita tanto ao juiz competente quanto ao Ministério Público, não sendo dispensada em relação a este.' },
      { letra: 'C', texto: 'No prazo de 5 dias, contado da lavratura do auto de prisão em flagrante.', comentario: 'A comunicação ao juiz e ao MP é imediata, e as demais providências (família, nota de culpa) ocorrem em até 24 horas, não em 5 dias.' },
      { letra: 'D', texto: 'Apenas verbalmente, sem necessidade de registro formal ou nota de culpa.', comentario: 'A lei exige registro formal do auto de prisão e a entrega por escrito da nota de culpa ao preso, não bastando comunicação verbal.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 306, CPP',
    justificativa: 'A prisão em flagrante deve ser comunicada imediatamente ao juiz e ao MP; em até 24 horas, deve ser entregue cópia do auto à defensoria (se o preso não tiver advogado) e comunicada a prisão à família ou pessoa indicada, além da entrega da nota de culpa ao preso, também em até 24 horas.'
  },
  {
    id: 'p2r4_prisao_5',
    disciplina: 'penal',
    topico: 'Prisão Preventiva (Art. 311-316 CPP)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'A prisão domiciliar, como substitutiva da prisão preventiva (Art. 318 do CPP), pode ser concedida ao agente que seja, entre outras hipóteses:',
    alternativas: [
      { letra: 'A', texto: 'Maior de 80 anos, extremamente debilitado por doença grave, imprescindível aos cuidados especiais de pessoa menor de 6 anos ou com deficiência, ou gestante.' },
      { letra: 'B', texto: 'Réu primário, independentemente de idade, doença ou condição familiar.', comentario: 'A mera primariedade não é hipótese legal; exige-se uma das condições específicas de vulnerabilidade previstas no art. 318.' },
      { letra: 'C', texto: 'Qualquer pessoa que resida em imóvel próprio, ainda que sem outra condição especial.', comentario: 'A posse de imóvel próprio não é requisito legal nem substitui as hipóteses de vulnerabilidade exigidas pelo art. 318.' },
      { letra: 'D', texto: 'Vedada em qualquer hipótese quando o crime for cometido com violência ou grave ameaça.', comentario: 'A lei não estabelece essa vedação absoluta; a concessão depende das condições pessoais do art. 318, analisadas caso a caso.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 318, CPP',
    justificativa: 'O Art. 318 do CPP prevê a substituição da preventiva por domiciliar para maiores de 80 anos, pessoas extremamente debilitadas por doença grave, imprescindíveis aos cuidados de pessoa menor de 6 anos ou com deficiência, e gestantes — hipóteses de vulnerabilidade específicas, não bastando a primariedade isolada.'
  },
  {
    id: 'p2r4_prisao_6',
    disciplina: 'penal',
    topico: 'Prisão em Flagrante (Art. 302-310 CPP)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'Verificada a ilegalidade da prisão em flagrante na audiência de custódia (por exemplo, ausência de assinatura de testemunha exigida ou excesso de prazo), a autoridade judicial deve:',
    alternativas: [
      { letra: 'A', texto: 'Relaxar a prisão em flagrante, o que não impede, se presentes os requisitos, a decretação de prisão preventiva por decisão fundamentada autônoma.' },
      { letra: 'B', texto: 'Manter a prisão em flagrante, pois a ilegalidade formal não gera qualquer consequência processual.', comentario: 'A ilegalidade do flagrante impõe justamente o relaxamento da prisão, com efeitos processuais diretos, e não sua manutenção.' },
      { letra: 'C', texto: 'Determinar automaticamente a soltura definitiva, sem possibilidade de nova prisão pelos mesmos fatos.', comentario: 'O relaxamento não impede a decretação de prisão preventiva autônoma, se presentes os requisitos do art. 312, não havendo soltura definitiva automática.' },
      { letra: 'D', texto: 'Converter a prisão em flagrante ilegal diretamente em prisão temporária, independentemente de requerimento.', comentario: 'Não existe essa conversão automática em prisão temporária; a medida cabível é a prisão preventiva, sempre mediante requerimento do MP ou representação da autoridade policial.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 310, I, CPP',
    justificativa: 'A ilegalidade do flagrante impõe o relaxamento, mas isso não impede que, havendo os requisitos do Art. 312 do CPP, seja decretada prisão preventiva mediante decisão fundamentada e autônoma (mediante requerimento do MP, do querelante ou representação da autoridade policial, nunca de ofício) — são institutos distintos e independentes.'
  },

  // ---------- ESTATUTO DO DESARMAMENTO (6 questões) ----------
  {
    id: 'p2r4_arma_1',
    disciplina: 'legislacao',
    topico: 'Estatuto do Desarmamento (Lei 10.826/03)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A diferença essencial entre os crimes de posse irregular (Art. 12) e porte ilegal (Art. 14) de arma de fogo de uso permitido, no Estatuto do Desarmamento, está:',
    alternativas: [
      { letra: 'A', texto: 'No local: a posse ocorre dentro de residência ou local de trabalho, enquanto o porte pressupõe a arma fora desses locais, em circulação.' },
      { letra: 'B', texto: 'No tipo de arma: posse refere-se a armas de uso restrito, porte a armas de uso permitido.', comentario: 'Ambos os artigos (12 e 14) tratam de armas de uso PERMITIDO; a distinção não está no tipo de arma, mas no local em que ela se encontra.' },
      { letra: 'C', texto: 'Na nacionalidade do agente: posse é crime praticado por estrangeiro, porte por brasileiro.', comentario: 'A nacionalidade do agente não é elemento típico de nenhum dos dois crimes.' },
      { letra: 'D', texto: 'Não há diferença; os dois artigos tipificam exatamente a mesma conduta.', comentario: 'Há diferença clara de local (dentro ou fora de casa/trabalho) e de pena (detenção de 1-3 anos versus reclusão de 2-4 anos) entre os dois tipos.' }
    ],
    gabarito: 'A',
    artigo: 'Arts. 12 e 14, Lei 10.826/03',
    justificativa: 'Posse (Art. 12, pena de detenção de 1 a 3 anos) pressupõe a arma dentro de casa ou local de trabalho; porte (Art. 14, pena de reclusão de 2 a 4 anos) pressupõe a arma fora desses locais, em circulação — daí a pena mais grave do porte.'
  },
  {
    id: 'p2r4_arma_2',
    disciplina: 'legislacao',
    topico: 'Estatuto do Desarmamento (Lei 10.826/03)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Sobre a inafiançabilidade prevista originalmente no parágrafo único do Art. 14 do Estatuto do Desarmamento (porte ilegal de arma de uso permitido), é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'O STF declarou inconstitucional a vedação à liberdade provisória mediante fiança para esse crime, por violar a individualização da pena e a presunção de inocência.' },
      { letra: 'B', texto: 'A vedação permanece plenamente válida e aplicada em todos os casos, sem qualquer controle de constitucionalidade.', comentario: 'O STF declarou essa vedação inconstitucional; ela não permanece válida e aplicada em todos os casos.' },
      { letra: 'C', texto: 'A inafiançabilidade se aplica apenas a estrangeiros em situação irregular no país.', comentario: 'A norma declarada inconstitucional não fazia distinção por nacionalidade do agente; a decisão do STF foi geral, não restrita a estrangeiros.' },
      { letra: 'D', texto: 'A fiança é sempre obrigatória nesse crime, sendo vedada a liberdade provisória sem fiança.', comentario: 'A liberdade provisória sem fiança é possível, cabendo análise caso a caso conforme os requisitos do art. 312 do CPP, não havendo obrigatoriedade de fiança.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 14, parágrafo único, Lei 10.826/03',
    justificativa: 'Assim como fez com dispositivos análogos da Lei de Drogas e da Lei de Hediondos, o STF declarou inconstitucional a vedação absoluta à fiança/liberdade provisória do Art. 14, por violar a individualização da pena e a presunção de inocência — a análise deve ser feita caso a caso, conforme os requisitos do Art. 312 do CPP.'
  },
  {
    id: 'p2r4_arma_3',
    disciplina: 'legislacao',
    topico: 'Estatuto do Desarmamento (Lei 10.826/03)',
    peso: 2,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Após as alterações da Lei 13.964/2019 (Pacote Anticrime), passaram a integrar o rol de crimes hediondos (Art. 1º da Lei 8.072/90), na forma tentada ou consumada:',
    alternativas: [
      { letra: 'A', texto: 'A posse/porte ilegal de arma de fogo de uso restrito ou proibido (Art. 16), o comércio ilegal de arma de fogo (Art. 17) e o tráfico internacional de arma de fogo (Art. 18), todos do Estatuto do Desarmamento.' },
      { letra: 'B', texto: 'A posse irregular (Art. 12) e o porte ilegal (Art. 14) de arma de fogo de uso permitido, ambos do Estatuto do Desarmamento.', comentario: 'Os crimes de arma de uso PERMITIDO (arts. 12 e 14) não foram equiparados a hediondos; a inclusão recaiu sobre os crimes de uso restrito/proibido e sobre comércio/tráfico (arts. 16, 17 e 18).' },
      { letra: 'C', texto: 'Apenas o disparo de arma de fogo (Art. 15), com exclusão de qualquer outro crime da lei.', comentario: 'O art. 15 (disparo de arma de fogo) não foi incluído no rol de hediondos; os artigos incluídos foram o 16, 17 e 18.' },
      { letra: 'D', texto: 'Nenhum crime do Estatuto do Desarmamento é equiparado a hediondo.', comentario: 'Os arts. 16, 17 e 18 do Estatuto do Desarmamento foram expressamente incluídos no rol de hediondos pela Lei 13.964/2019.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 1º, VIII e IX, Lei 8.072/90 (redação da Lei 13.964/2019)',
    justificativa: 'O Pacote Anticrime incluiu no rol de crimes hediondos os arts. 16, 17 e 18 do Estatuto do Desarmamento — armas de uso RESTRITO OU PROIBIDO, comércio ilegal e tráfico internacional. As armas de uso PERMITIDO (arts. 12 e 14) NÃO são equiparadas a hediondas.'
  },
  {
    id: 'p2r4_arma_4',
    disciplina: 'legislacao',
    topico: 'Estatuto do Desarmamento (Lei 10.826/03)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'dificil',
    enunciado: 'Sobre as penas do comércio ilegal de arma de fogo (Art. 17) e do tráfico internacional de arma de fogo (Art. 18), após o Pacote Anticrime (Lei 13.964/2019), é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Ambas foram aumentadas: o comércio ilegal passou de 4-8 para 6-12 anos de reclusão, e o tráfico internacional, de 4-8 para 8-16 anos de reclusão.' },
      { letra: 'B', texto: 'Ambas as penas foram reduzidas, para desafogar o sistema penitenciário.', comentario: 'O Pacote Anticrime aumentou (não reduziu) as penas desses crimes, coerente com sua inclusão no rol de hediondos.' },
      { letra: 'C', texto: 'As penas permaneceram inalteradas desde a redação original de 2003.', comentario: 'Houve aumento expresso das penas de ambos os crimes pela Lei 13.964/2019, não permanecendo inalteradas.' },
      { letra: 'D', texto: 'Somente a pena do tráfico internacional foi alterada; o comércio ilegal manteve a pena original.', comentario: 'Ambas as penas — comércio ilegal e tráfico internacional — foram aumentadas pelo Pacote Anticrime, não apenas a do tráfico internacional.' }
    ],
    gabarito: 'A',
    artigo: 'Arts. 17 e 18, Lei 10.826/03 (redação da Lei 13.964/2019)',
    justificativa: 'O Pacote Anticrime endureceu as penas: comércio ilegal de arma de fogo passou de 4-8 anos para 6-12 anos de reclusão; tráfico internacional de arma, de 4-8 anos para 8-16 anos de reclusão — coerente com a inclusão de ambos no rol de crimes hediondos.'
  },
  {
    id: 'p2r4_arma_5',
    disciplina: 'legislacao',
    topico: 'Estatuto do Desarmamento (Lei 10.826/03)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'medio',
    enunciado: 'O crime de disparo de arma de fogo (Art. 15 do Estatuto do Desarmamento), em relação a outros crimes eventualmente praticados com o mesmo disparo, deve ser entendido como:',
    alternativas: [
      { letra: 'A', texto: 'Crime autônomo, que é absorvido quando o disparo constitui meio de execução de crime mais grave (como homicídio ou tentativa de homicídio), pelo princípio da consunção.' },
      { letra: 'B', texto: 'Sempre aplicado em concurso material obrigatório com qualquer outro crime, sem possibilidade de absorção.', comentario: 'O princípio da consunção admite justamente a absorção do disparo pelo crime-fim mais grave, afastando o concurso material obrigatório.' },
      { letra: 'C', texto: 'Crime que exclui automaticamente a tipificação de outros delitos praticados com arma de fogo.', comentario: 'O disparo não exclui outros crimes; ao contrário, é ele que pode ser absorvido por um crime-fim mais grave, quando lhe serve de meio de execução.' },
      { letra: 'D', texto: 'Contravenção penal, e não crime, segundo a redação atual da lei.', comentario: 'O disparo de arma de fogo é crime, com pena de reclusão de 2 a 4 anos, e não contravenção penal.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 15, Lei 10.826/03',
    justificativa: 'O disparo de arma de fogo é crime autônomo (reclusão de 2 a 4 anos), mas, pelo princípio da consunção, é absorvido quando constitui apenas o meio de execução de um crime-fim mais grave (ex.: disparo para matar, que se absorve no homicídio ou na tentativa).'
  },
  {
    id: 'p2r4_arma_6',
    disciplina: 'legislacao',
    topico: 'Estatuto do Desarmamento (Lei 10.826/03)',
    peso: 2,
    mostCobrado: false,
    dificuldade: 'facil',
    enunciado: 'Quanto ao porte de arma de fogo por integrantes das Forças Armadas e de órgãos de segurança pública (Art. 6º do Estatuto do Desarmamento), é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'É assegurado, para o desempenho de suas atividades funcionais, o porte de arma em todo o território nacional, dispensada a autorização específica prevista para o cidadão comum.' },
      { letra: 'B', texto: 'É vedado o porte funcional fora do horário de expediente, em qualquer hipótese.', comentario: 'O porte é assegurado para o exercício da atividade funcional, sem essa restrição temporal absoluta prevista em lei.' },
      { letra: 'C', texto: 'Depende de autorização específica da Polícia Federal, renovável anualmente, tal como para o cidadão comum.', comentario: 'A lei dispensa expressamente essa autorização específica para os integrantes das Forças Armadas e órgãos de segurança pública elencados no art. 6º.' },
      { letra: 'D', texto: 'É restrito ao território do estado em que o agente exerce suas funções.', comentario: 'O porte é assegurado em todo o território nacional, e não apenas no estado em que o agente está lotado.' }
    ],
    gabarito: 'A',
    artigo: 'Art. 6º, Lei 10.826/03',
    justificativa: 'O Art. 6º assegura o porte de arma de fogo, para o exercício da atividade, aos integrantes das Forças Armadas, das polícias (incluindo a Polícia Penal) e demais órgãos de segurança pública elencados na lei, em todo o território nacional, dispensada a autorização específica exigida do cidadão comum (Art. 10).'
  }
];
