// ============================================================
// QUESTIONS_RLM — Raciocínio Lógico-Matemático, disciplina do bloco
// P1 (Conhecimentos Gerais) do edital da Polícia Penal de PE (PPPE),
// banca Cebraspe. Conteúdo genérico de lógica proposicional,
// sequências, conjuntos e matemática básica — não depende de
// legislação, aplicável a qualquer concurso que cobre a disciplina.
// ============================================================

const QUESTIONS_RLM = [
  {
    id: 'rlm_1',
    disciplina: 'rlm',
    topico: 'Negação de Proposições Universais',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A negação lógica da proposição "Todos os agentes penitenciários são pontuais" é:',
    alternativas: [
      { letra: 'A', texto: 'Nenhum agente penitenciário é pontual.' },
      { letra: 'B', texto: 'Todos os agentes penitenciários não são pontuais.' },
      { letra: 'C', texto: 'Existe pelo menos um agente penitenciário que não é pontual.' },
      { letra: 'D', texto: 'A maioria dos agentes penitenciários é pontual.' }
    ],
    gabarito: 'C',
    justificativa: 'A negação de uma proposição universal afirmativa ("Todo A é B") é uma existencial negativa: "Existe pelo menos um A que não é B". As opções A e B trocam indevidamente o quantificador universal por outro universal, o que não é a negação lógica correta.'
  },
  {
    id: 'rlm_2',
    disciplina: 'rlm',
    topico: 'Negação do Condicional',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'A negação da proposição "Se chove, então não saio de casa" é:',
    alternativas: [
      { letra: 'A', texto: 'Se não chove, então saio de casa.' },
      { letra: 'B', texto: 'Chove e eu saio de casa.' },
      { letra: 'C', texto: 'Não chove e eu não saio de casa.' },
      { letra: 'D', texto: 'Se não saio de casa, então chove.' }
    ],
    gabarito: 'B',
    justificativa: 'A negação de "Se P, então Q" (P → Q) é sempre "P e não Q". Aqui, P = "chove" e Q = "não saio de casa"; logo, a negação é "chove e (não) não saio de casa" = "chove e eu saio de casa".'
  },
  {
    id: 'rlm_3',
    disciplina: 'rlm',
    topico: 'Valor Lógico do Condicional',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Uma proposição condicional "Se P, então Q" é FALSA unicamente quando:',
    alternativas: [
      { letra: 'A', texto: 'P é falsa e Q é falsa.' },
      { letra: 'B', texto: 'P é verdadeira e Q é verdadeira.' },
      { letra: 'C', texto: 'P é verdadeira e Q é falsa.' },
      { letra: 'D', texto: 'P é falsa e Q é verdadeira.' }
    ],
    gabarito: 'C',
    justificativa: 'Pela tabela-verdade do condicional, P → Q só é falso quando o antecedente (P) é verdadeiro e o consequente (Q) é falso. Em qualquer outro caso, o condicional é verdadeiro.'
  },
  {
    id: 'rlm_4',
    disciplina: 'rlm',
    topico: 'Contrapositiva (Equivalência Lógica)',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Considere a proposição: "Se um servidor é assíduo, então não é advertido." A proposição logicamente EQUIVALENTE a essa é:',
    alternativas: [
      { letra: 'A', texto: 'Se um servidor não é assíduo, então é advertido.' },
      { letra: 'B', texto: 'Se um servidor é advertido, então não é assíduo.' },
      { letra: 'C', texto: 'Se um servidor não é advertido, então é assíduo.' },
      { letra: 'D', texto: 'Um servidor é assíduo e é advertido.' }
    ],
    gabarito: 'B',
    justificativa: 'A contrapositiva de "P → Q" é "não Q → não P", e é sempre logicamente equivalente ao condicional original. Aqui, P = "é assíduo" e Q = "não é advertido"; a contrapositiva é "se é advertido (não não-Q), então não é assíduo (não P)", correspondendo à alternativa B. As alternativas A e C trazem, respectivamente, a inversa e a recíproca, que NÃO são equivalentes ao condicional original.'
  },
  {
    id: 'rlm_5',
    disciplina: 'rlm',
    topico: 'Conectivo "Ou" Inclusivo',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A proposição composta "Márcio é policial penal ou é concursado" (conectivo "ou" inclusivo) é FALSA somente quando:',
    alternativas: [
      { letra: 'A', texto: 'Márcio é policial penal e também é concursado.' },
      { letra: 'B', texto: 'Márcio é policial penal, mas não é concursado.' },
      { letra: 'C', texto: 'Márcio não é policial penal, mas é concursado.' },
      { letra: 'D', texto: 'Márcio não é policial penal e não é concursado.' }
    ],
    gabarito: 'D',
    justificativa: 'A disjunção inclusiva (P ou Q) só é falsa quando ambas as proposições simples são falsas. Em todos os outros casos — incluindo quando as duas são verdadeiras — a disjunção inclusiva é verdadeira.'
  },
  {
    id: 'rlm_6',
    disciplina: 'rlm',
    topico: 'Sequências Numéricas',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Observe a sequência: 2, 6, 12, 20, 30, ... O próximo termo dessa sequência é:',
    alternativas: [
      { letra: 'A', texto: '36' },
      { letra: 'B', texto: '38' },
      { letra: 'C', texto: '40' },
      { letra: 'D', texto: '42' }
    ],
    gabarito: 'D',
    justificativa: 'Cada termo é o produto de dois números naturais consecutivos: 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30. O próximo termo é 6×7=42.'
  },
  {
    id: 'rlm_7',
    disciplina: 'rlm',
    topico: 'Sequências Numéricas',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Na sequência 3, 7, 15, 31, 63, ..., o próximo número é:',
    alternativas: [
      { letra: 'A', texto: '95' },
      { letra: 'B', texto: '111' },
      { letra: 'C', texto: '127' },
      { letra: 'D', texto: '129' }
    ],
    gabarito: 'C',
    justificativa: 'A regra é: multiplique o termo anterior por 2 e some 1 (3×2+1=7; 7×2+1=15; 15×2+1=31; 31×2+1=63). Aplicando ao último termo: 63×2+1=127.'
  },
  {
    id: 'rlm_8',
    disciplina: 'rlm',
    topico: 'Sequências de Letras',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Considerando o alfabeto na ordem usual (A=1, B=2, C=3...), qual letra completa a sequência A, C, F, J, O, ...?',
    alternativas: [
      { letra: 'A', texto: 'T' },
      { letra: 'B', texto: 'U' },
      { letra: 'C', texto: 'V' },
      { letra: 'D', texto: 'S' }
    ],
    gabarito: 'B',
    justificativa: 'O intervalo entre as letras aumenta em 1 a cada passo: A(1) +2→ C(3) +3→ F(6) +4→ J(10) +5→ O(15) +6→ posição 21, que corresponde à letra U.'
  },
  {
    id: 'rlm_9',
    disciplina: 'rlm',
    topico: 'Argumentos Válidos - Modus Ponens',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Considere o argumento: "Se Pedro é policial penal, então usa farda. Pedro é policial penal. Logo, Pedro usa farda." Esse argumento é:',
    alternativas: [
      { letra: 'A', texto: 'Válido, por se tratar da estrutura modus ponens.' },
      { letra: 'B', texto: 'Inválido, pois a conclusão não decorre logicamente das premissas.' },
      { letra: 'C', texto: 'Válido apenas se Pedro realmente usar farda na prática.' },
      { letra: 'D', texto: 'Inválido, por se tratar de uma falácia de afirmação do consequente.' }
    ],
    gabarito: 'A',
    justificativa: 'A estrutura "Se P então Q; P; logo Q" é o modus ponens, uma forma de argumento dedutivo válida — a validade lógica independe do conteúdo factual das premissas, decorre apenas da estrutura.'
  },
  {
    id: 'rlm_10',
    disciplina: 'rlm',
    topico: 'Argumentos Válidos - Modus Tollens',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Considere o argumento: "Se o preso está no regime fechado, então não tem direito à saída temporária. João tem direito à saída temporária. Logo, João não está no regime fechado." Esse argumento é:',
    alternativas: [
      { letra: 'A', texto: 'Inválido, pois inverte indevidamente o condicional.' },
      { letra: 'B', texto: 'Válido, por se tratar da estrutura modus tollens.' },
      { letra: 'C', texto: 'Inválido, por se tratar de falácia de negação do antecedente.' },
      { letra: 'D', texto: 'Válido apenas se todas as premissas forem verdadeiras no mundo real.' }
    ],
    gabarito: 'B',
    justificativa: 'A estrutura "Se P então Q; não Q; logo não P" é o modus tollens, forma de argumento dedutivo válida. Aqui, negar o consequente ("tem direito à saída temporária", ou seja, não-Q) permite concluir validamente a negação do antecedente (não estar no regime fechado).'
  },
  {
    id: 'rlm_11',
    disciplina: 'rlm',
    topico: 'Falácia - Afirmação do Consequente',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Considere o argumento: "Se Ana estuda, então é aprovada. Ana foi aprovada. Logo, Ana estudou." Do ponto de vista da lógica formal, esse argumento é:',
    alternativas: [
      { letra: 'A', texto: 'Válido, por ser um modus ponens.' },
      { letra: 'B', texto: 'Válido, por ser um modus tollens.' },
      { letra: 'C', texto: 'Inválido, por incorrer na falácia de afirmação do consequente.' },
      { letra: 'D', texto: 'Inválido, por incorrer na falácia de negação do antecedente.' }
    ],
    gabarito: 'C',
    justificativa: 'Afirmar o consequente (Q) não permite concluir validamente o antecedente (P), pois pode haver outras causas para Q ser verdadeiro. Essa é a falácia de afirmação do consequente — um erro lógico comum, mesmo que a conclusão pareça razoável.'
  },
  {
    id: 'rlm_12',
    disciplina: 'rlm',
    topico: 'Teoria dos Conjuntos',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Em uma turma de 40 candidatos, 25 estudam Direito Penal, 20 estudam Direito Constitucional e 10 estudam ambas as disciplinas. O número de candidatos que NÃO estuda nenhuma das duas disciplinas é:',
    alternativas: [
      { letra: 'A', texto: '3' },
      { letra: 'B', texto: '5' },
      { letra: 'C', texto: '8' },
      { letra: 'D', texto: '10' }
    ],
    gabarito: 'B',
    justificativa: '|Penal ∪ Constitucional| = 25 + 20 − 10 = 35. Como a turma tem 40 candidatos, os que não estudam nenhuma das duas são 40 − 35 = 5.'
  },
  {
    id: 'rlm_13',
    disciplina: 'rlm',
    topico: 'Probabilidade Básica',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Ao lançar um dado de seis faces, não viciado, a probabilidade de o resultado ser um número par é:',
    alternativas: [
      { letra: 'A', texto: '1/6' },
      { letra: 'B', texto: '1/3' },
      { letra: 'C', texto: '1/2' },
      { letra: 'D', texto: '2/3' }
    ],
    gabarito: 'C',
    justificativa: 'Dos 6 resultados possíveis (1 a 6), 3 são pares (2, 4, 6). A probabilidade é, portanto, 3/6 = 1/2.'
  },
  {
    id: 'rlm_14',
    disciplina: 'rlm',
    topico: 'Análise Combinatória',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'De quantas maneiras distintas é possível formar uma comissão de 2 pessoas, escolhidas entre 5 candidatos, sem que a ordem de escolha importe?',
    alternativas: [
      { letra: 'A', texto: '5' },
      { letra: 'B', texto: '10' },
      { letra: 'C', texto: '20' },
      { letra: 'D', texto: '25' }
    ],
    gabarito: 'B',
    justificativa: 'Como a ordem não importa, trata-se de uma combinação: C(5,2) = 5!/(2!×3!) = (5×4)/2 = 10.'
  },
  {
    id: 'rlm_15',
    disciplina: 'rlm',
    topico: 'Negação de Proposições com "Nem Todos"',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A proposição "Nem todos os policiais penais usam farda em serviço interno" é logicamente equivalente a:',
    alternativas: [
      { letra: 'A', texto: 'Nenhum policial penal usa farda em serviço interno.' },
      { letra: 'B', texto: 'Todos os policiais penais usam farda em serviço interno.' },
      { letra: 'C', texto: 'Existe pelo menos um policial penal que não usa farda em serviço interno.' },
      { letra: 'D', texto: 'Todos os policiais penais não usam farda em serviço interno.' }
    ],
    gabarito: 'C',
    justificativa: '"Nem todos" é a negação do quantificador universal, equivalendo a "existe pelo menos um que não" — uma proposição existencial negativa, e não a negação total representada por "nenhum".'
  },
  {
    id: 'rlm_16',
    disciplina: 'rlm',
    topico: 'Silogismo Categórico',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Considere as premissas: "Todo policial penal é servidor público" e "Todo servidor público deve prestar concurso". A conclusão logicamente válida é:',
    alternativas: [
      { letra: 'A', texto: 'Todo policial penal deve prestar concurso.' },
      { letra: 'B', texto: 'Todo servidor público é policial penal.' },
      { letra: 'C', texto: 'Quem presta concurso é policial penal.' },
      { letra: 'D', texto: 'Nenhum policial penal deve prestar concurso.' }
    ],
    gabarito: 'A',
    justificativa: 'Trata-se de um silogismo válido por transitividade: se todo A é B, e todo B é C, então todo A é C. Aqui, A = policial penal, B = servidor público, C = deve prestar concurso.'
  },
  {
    id: 'rlm_17',
    disciplina: 'rlm',
    topico: 'Silogismo com Contrapositiva',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Considere: "Todo aprovado no concurso é formado no curso de formação profissional" e "Carlos não é formado no curso de formação profissional". Pode-se concluir validamente que:',
    alternativas: [
      { letra: 'A', texto: 'Carlos não foi aprovado no concurso.' },
      { letra: 'B', texto: 'Carlos foi aprovado no concurso.' },
      { letra: 'C', texto: 'Não é possível concluir nada sobre a aprovação de Carlos.' },
      { letra: 'D', texto: 'Todos que não são formados foram aprovados.' }
    ],
    gabarito: 'A',
    justificativa: 'Da premissa "todo aprovado é formado" (P → Q), sabendo que Carlos não é formado (não-Q), conclui-se pela contrapositiva que Carlos não foi aprovado (não-P) — modus tollens aplicado a um silogismo categórico.'
  },
  {
    id: 'rlm_18',
    disciplina: 'rlm',
    topico: 'Problemas de Idade',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A idade de Marta é o dobro da idade de Júlia. Daqui a 5 anos, a soma das idades das duas será 40 anos. Qual é a idade atual de Júlia?',
    alternativas: [
      { letra: 'A', texto: '8 anos' },
      { letra: 'B', texto: '10 anos' },
      { letra: 'C', texto: '12 anos' },
      { letra: 'D', texto: '15 anos' }
    ],
    gabarito: 'B',
    justificativa: 'Sendo J a idade de Júlia e M = 2J a de Marta: (M+5) + (J+5) = 40 → M + J = 30 → 2J + J = 30 → 3J = 30 → J = 10 anos.'
  },
  {
    id: 'rlm_19',
    disciplina: 'rlm',
    topico: 'Porcentagem',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Um equipamento custava R$ 80,00 e sofreu um reajuste de 25%. Qual é o novo preço do equipamento?',
    alternativas: [
      { letra: 'A', texto: 'R$ 90,00' },
      { letra: 'B', texto: 'R$ 95,00' },
      { letra: 'C', texto: 'R$ 100,00' },
      { letra: 'D', texto: 'R$ 105,00' }
    ],
    gabarito: 'C',
    justificativa: 'Um reajuste de 25% equivale a multiplicar o valor original por 1,25: 80 × 1,25 = 100,00.'
  },
  {
    id: 'rlm_20',
    disciplina: 'rlm',
    topico: 'Razão e Proporção',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: '3 máquinas idênticas produzem 60 peças em 2 horas, trabalhando na mesma taxa constante. Mantida essa taxa, quantas peças serão produzidas por 5 dessas máquinas em 3 horas?',
    alternativas: [
      { letra: 'A', texto: '100' },
      { letra: 'B', texto: '120' },
      { letra: 'C', texto: '140' },
      { letra: 'D', texto: '150' }
    ],
    gabarito: 'D',
    justificativa: 'A taxa por máquina-hora é 60 ÷ (3 máquinas × 2 horas) = 10 peças por máquina-hora. Com 5 máquinas por 3 horas: 5 × 3 × 10 = 150 peças.'
  },

  // ============================================================
  // Reforço adicional alinhado ao conteúdo programático oficial do
  // edital SERES-PE/Cebraspe: Leis de De Morgan, diagramas lógicos,
  // lógica de primeira ordem (quantificadores), analogias e
  // problemas matriciais/geométricos — tópicos explicitamente
  // listados no edital e que ainda não tinham questão própria.
  // ============================================================
  {
    id: 'rlm_21',
    disciplina: 'rlm',
    topico: 'Lei de De Morgan - Negação da Conjunção',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Pela Lei de De Morgan, a negação da proposição composta "Marcelo é aprovado E toma posse" é:',
    alternativas: [
      { letra: 'A', texto: 'Marcelo não é aprovado E não toma posse.' },
      { letra: 'B', texto: 'Marcelo não é aprovado OU não toma posse.' },
      { letra: 'C', texto: 'Marcelo é aprovado OU toma posse.' },
      { letra: 'D', texto: 'Se Marcelo é aprovado, então toma posse.' }
    ],
    gabarito: 'B',
    justificativa: 'Pela primeira Lei de De Morgan, ¬(P∧Q) ≡ ¬P∨¬Q: a negação de uma conjunção é a disjunção das negações, não a conjunção das negações (erro comum representado na alternativa A).'
  },
  {
    id: 'rlm_22',
    disciplina: 'rlm',
    topico: 'Lei de De Morgan - Negação da Disjunção',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'A negação da proposição "Chove OU faz frio" é, pela segunda Lei de De Morgan:',
    alternativas: [
      { letra: 'A', texto: 'Não chove E não faz frio.' },
      { letra: 'B', texto: 'Não chove OU não faz frio.' },
      { letra: 'C', texto: 'Chove E faz frio.' },
      { letra: 'D', texto: 'Se chove, então faz frio.' }
    ],
    gabarito: 'A',
    justificativa: 'Pela segunda Lei de De Morgan, ¬(P∨Q) ≡ ¬P∧¬Q: a negação de uma disjunção é a conjunção das negações.'
  },
  {
    id: 'rlm_23',
    disciplina: 'rlm',
    topico: 'Diagramas Lógicos (Venn) - Interseção',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Em um diagrama de Venn com dois conjuntos, A (candidatos que estudam Direito Penal) e B (candidatos que estudam Direito Constitucional), a região correspondente à interseção A ∩ B representa:',
    alternativas: [
      { letra: 'A', texto: 'Candidatos que estudam somente Direito Penal.' },
      { letra: 'B', texto: 'Candidatos que estudam somente Direito Constitucional.' },
      { letra: 'C', texto: 'Candidatos que estudam as duas disciplinas simultaneamente.' },
      { letra: 'D', texto: 'Candidatos que não estudam nenhuma das duas disciplinas.' }
    ],
    gabarito: 'C',
    justificativa: 'A interseção (A∩B) em um diagrama lógico representa exatamente os elementos comuns aos dois conjuntos — nesse caso, quem estuda ambas as disciplinas.'
  },
  {
    id: 'rlm_24',
    disciplina: 'rlm',
    topico: 'Lógica de Primeira Ordem - Negação de Quantificador Existencial',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'A negação lógica da proposição "Existe um servidor que não cumpre suas obrigações" é:',
    alternativas: [
      { letra: 'A', texto: 'Nenhum servidor cumpre suas obrigações.' },
      { letra: 'B', texto: 'Todo servidor cumpre suas obrigações.' },
      { letra: 'C', texto: 'Existe um servidor que cumpre suas obrigações.' },
      { letra: 'D', texto: 'Não existe nenhum servidor.' }
    ],
    gabarito: 'B',
    justificativa: 'A negação de um quantificador existencial negativo ("existe x tal que não P(x)") é o quantificador universal afirmativo ("para todo x, P(x)") — ou seja, "todo servidor cumpre suas obrigações". As demais alternativas alteram indevidamente o quantificador ou a proposição.'
  },
  {
    id: 'rlm_25',
    disciplina: 'rlm',
    topico: 'Analogias',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Assinale a alternativa que mantém a mesma relação lógica de "Delegado está para Polícia Civil, assim como Diretor de Presídio está para":',
    alternativas: [
      { letra: 'A', texto: 'Sistema Penitenciário.' },
      { letra: 'B', texto: 'Ministério Público.' },
      { letra: 'C', texto: 'Poder Judiciário.' },
      { letra: 'D', texto: 'Defensoria Pública.' }
    ],
    gabarito: 'A',
    justificativa: 'A analogia busca a instituição correspondente à autoridade citada: assim como o Delegado dirige uma unidade da Polícia Civil, o Diretor de Presídio dirige uma unidade do Sistema Penitenciário, mantendo o paralelismo cargo-instituição.'
  },
  {
    id: 'rlm_26',
    disciplina: 'rlm',
    topico: 'Raciocínio Matricial',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Observe a matriz numérica organizada em linhas, em que cada linha segue o padrão (n, 2n, 4n), sendo "n" o número da linha: Linha 1: 1, 2, 4. Linha 2: 2, 4, 8. Linha 3: 3, 6, 12. Seguindo o mesmo padrão, qual é o valor da célula central da Linha 4?',
    alternativas: [
      { letra: 'A', texto: '6' },
      { letra: 'B', texto: '8' },
      { letra: 'C', texto: '12' },
      { letra: 'D', texto: '16' }
    ],
    gabarito: 'B',
    justificativa: 'Na linha 4 (n=4), o padrão (n, 2n, 4n) resulta em 4, 8, 16. A célula central corresponde a 2n = 2×4 = 8.'
  },
  {
    id: 'rlm_27',
    disciplina: 'rlm',
    topico: 'Raciocínio Geométrico - Perímetro',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Um terreno retangular usado como base de treinamento tem 12 metros de comprimento e 8 metros de largura. Qual é o seu perímetro?',
    alternativas: [
      { letra: 'A', texto: '20 m' },
      { letra: 'B', texto: '40 m' },
      { letra: 'C', texto: '48 m' },
      { letra: 'D', texto: '96 m' }
    ],
    gabarito: 'B',
    justificativa: 'O perímetro de um retângulo é 2×(comprimento + largura) = 2×(12+8) = 40 m.'
  },
  {
    id: 'rlm_28',
    disciplina: 'rlm',
    topico: 'Disjunção Exclusiva (XOR)',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Na lógica proposicional, a disjunção exclusiva ("ou... ou", também chamada XOR) entre P e Q é verdadeira quando:',
    alternativas: [
      { letra: 'A', texto: 'P e Q são ambas verdadeiras.' },
      { letra: 'B', texto: 'P e Q são ambas falsas.' },
      { letra: 'C', texto: 'Exatamente uma das proposições, P ou Q, é verdadeira, mas não ambas.' },
      { letra: 'D', texto: 'Pelo menos uma das proposições é verdadeira, incluindo quando ambas o são.' }
    ],
    gabarito: 'C',
    justificativa: 'A disjunção exclusiva (XOR) é verdadeira apenas quando exatamente uma das proposições é verdadeira — diferindo do "ou" inclusivo, que também é verdadeiro quando ambas são verdadeiras (alternativa D).'
  },
  {
    id: 'rlm_29',
    disciplina: 'rlm',
    topico: 'Bicondicional (P se e somente se Q)',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'A proposição bicondicional "P se e somente se Q" (P ↔ Q) é VERDADEIRA quando:',
    alternativas: [
      { letra: 'A', texto: 'P e Q têm o mesmo valor lógico (ambas verdadeiras ou ambas falsas).' },
      { letra: 'B', texto: 'Apenas P é verdadeira, independentemente do valor de Q.' },
      { letra: 'C', texto: 'P e Q têm valores lógicos diferentes.' },
      { letra: 'D', texto: 'Pelo menos uma das duas proposições é falsa.' }
    ],
    gabarito: 'A',
    justificativa: 'O bicondicional (P ↔ Q) equivale à conjunção de "P → Q" e "Q → P": é verdadeiro exatamente quando ambas as proposições compartilham o mesmo valor lógico (V-V ou F-F), e falso quando os valores divergem (V-F ou F-V).'
  },
  {
    id: 'rlm_30',
    disciplina: 'rlm',
    topico: 'Condicional com "Somente Se"',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'A proposição "Pedro será promovido somente se for aprovado na avaliação de desempenho" equivale, em termos lógicos, a:',
    alternativas: [
      { letra: 'A', texto: 'Se Pedro for aprovado na avaliação, então será promovido.' },
      { letra: 'B', texto: 'Se Pedro for promovido, então foi aprovado na avaliação de desempenho.' },
      { letra: 'C', texto: 'Pedro será promovido e será aprovado na avaliação, simultaneamente.' },
      { letra: 'D', texto: 'Se Pedro não for promovido, então foi aprovado na avaliação.' }
    ],
    gabarito: 'B',
    justificativa: '"P somente se Q" equivale a "Se P, então Q" (P → Q) — a condição necessária vem depois de "somente se". Aqui, P = "será promovido" e Q = "foi aprovado", logo: "se foi promovido, então foi aprovado". É um erro comum inverter essa relação, tratando "somente se" como se fosse "se" (alternativa A).'
  }
];
