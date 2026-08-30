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
      { letra: 'A', texto: 'Nenhum agente penitenciário é pontual.', comentario: 'Incorreta. Trocar "todos" por "nenhum" não é a negação lógica correta — é apenas outra proposição universal (agora negativa), diferente da existencial negativa exigida.' },
      { letra: 'B', texto: 'Todos os agentes penitenciários não são pontuais.', comentario: 'Incorreta. Essa frase também é uma proposição universal (afirma que nenhum é pontual), e não a existencial negativa que representa a verdadeira negação de "todos são".' },
      { letra: 'C', texto: 'Existe pelo menos um agente penitenciário que não é pontual.' },
      { letra: 'D', texto: 'A maioria dos agentes penitenciários é pontual.', comentario: 'Incorreta. Falar em "a maioria" introduz um quantificador que não é o oposto lógico de "todos"; a negação correta exige apenas um único contraexemplo, não a maioria.' }
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
      { letra: 'A', texto: 'Se não chove, então saio de casa.', comentario: 'Incorreta. Essa alternativa apresenta outro condicional (com antecedente e consequente trocados/negados), e não a conjunção "P e não Q" que define a negação de um condicional.' },
      { letra: 'B', texto: 'Chove e eu saio de casa.' },
      { letra: 'C', texto: 'Não chove e eu não saio de casa.', comentario: 'Incorreta. Aqui nega-se o antecedente (não chove) e mantém-se o consequente original (não saio), quando a negação correta exige manter o antecedente (chove) e negar o consequente (saio).' },
      { letra: 'D', texto: 'Se não saio de casa, então chove.', comentario: 'Incorreta. Trata-se de mais um condicional, apenas com antecedente e consequente invertidos; a negação de "Se P, então Q" nunca é outro condicional, e sim a conjunção "P e não Q".' }
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
      { letra: 'A', texto: 'P é falsa e Q é falsa.', comentario: 'Incorreta. Quando P é falsa, o condicional é sempre verdadeiro (verdade vacuosa), independentemente do valor de Q; logo, esse caso não torna o condicional falso.' },
      { letra: 'B', texto: 'P é verdadeira e Q é verdadeira.', comentario: 'Incorreta. Quando P e Q são ambas verdadeiras, o condicional é verdadeiro, e não falso.' },
      { letra: 'C', texto: 'P é verdadeira e Q é falsa.' },
      { letra: 'D', texto: 'P é falsa e Q é verdadeira.', comentario: 'Incorreta. Com P falsa, o condicional é verdadeiro por vacuidade, mesmo que Q seja verdadeira; esse caso não produz um condicional falso.' }
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
      { letra: 'A', texto: 'Se um servidor não é assíduo, então é advertido.', comentario: 'Incorreta. Essa é a inversa do condicional original (nega o antecedente e o consequente sem trocar sua ordem), que não é logicamente equivalente ao condicional de partida.' },
      { letra: 'B', texto: 'Se um servidor é advertido, então não é assíduo.' },
      { letra: 'C', texto: 'Se um servidor não é advertido, então é assíduo.', comentario: 'Incorreta. Essa é a recíproca do condicional original (apenas troca a ordem de antecedente e consequente, sem negá-los), que também não é equivalente ao condicional original.' },
      { letra: 'D', texto: 'Um servidor é assíduo e é advertido.', comentario: 'Incorreta. Uma conjunção afirmando as duas partes ao mesmo tempo contraria o condicional original, que estabelece que ser assíduo implica não ser advertido.' }
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
      { letra: 'A', texto: 'Márcio é policial penal e também é concursado.', comentario: 'Incorreta. Quando as duas proposições são verdadeiras, a disjunção inclusiva também é verdadeira, não falsa.' },
      { letra: 'B', texto: 'Márcio é policial penal, mas não é concursado.', comentario: 'Incorreta. Havendo pelo menos uma das proposições verdadeira (ser policial penal), a disjunção inclusiva já é verdadeira, independentemente do valor da outra.' },
      { letra: 'C', texto: 'Márcio não é policial penal, mas é concursado.', comentario: 'Incorreta. Com uma das proposições verdadeira (ser concursado), a disjunção inclusiva permanece verdadeira.' },
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
      { letra: 'A', texto: '36', comentario: 'Incorreta. Esse valor corresponde a 6² (6×6=36), confundindo o padrão n×(n+1) com um simples quadrado de n.' },
      { letra: 'B', texto: '38', comentario: 'Incorreta. Esse valor não resulta da regra n×(n+1); poderia surgir de somar um incremento incorreto (+8) em vez do incremento correto (+12) exigido para o sexto termo.' },
      { letra: 'C', texto: '40', comentario: 'Incorreta. Esse valor equivale a somar 30+10, repetindo o último incremento da sequência (+10) em vez de aumentá-lo para +12, como exige o padrão real de produtos consecutivos.' },
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
      { letra: 'A', texto: '95', comentario: 'Incorreta. Esse valor equivale a repetir o último incremento da sequência (63+32=95) em vez de dobrá-lo para +64, como exige a regra "dobrar e somar 1".' },
      { letra: 'B', texto: '111', comentario: 'Incorreta. Esse valor não corresponde à aplicação correta da regra "multiplicar por 2 e somar 1" sobre o termo 63; não decorre do cálculo apresentado na justificativa.' },
      { letra: 'C', texto: '127' },
      { letra: 'D', texto: '129', comentario: 'Incorreta. Esse valor não resulta de 63×2+1; não corresponde ao resultado do cálculo correto indicado na justificativa.' }
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
      { letra: 'A', texto: 'T', comentario: 'Incorreta. T corresponde à posição 20, resultado de somar apenas +5 (repetindo o incremento anterior) em vez do incremento correto +6 exigido nesta etapa da sequência.' },
      { letra: 'B', texto: 'U' },
      { letra: 'C', texto: 'V', comentario: 'Incorreta. V corresponde à posição 22, como se o incremento fosse +7 em vez do +6 correto, adiantando demais o padrão crescente de intervalos.' },
      { letra: 'D', texto: 'S', comentario: 'Incorreta. S corresponde à posição 19, valor aquém do esperado, como se o incremento aplicado tivesse sido +4 em vez do +6 correto para essa etapa.' }
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
      { letra: 'B', texto: 'Inválido, pois a conclusão não decorre logicamente das premissas.', comentario: 'Incorreta. A estrutura do argumento é exatamente o modus ponens, uma forma válida por si só — não há erro em que a conclusão não decorra das premissas.' },
      { letra: 'C', texto: 'Válido apenas se Pedro realmente usar farda na prática.', comentario: 'Incorreta. A validade lógica de um argumento depende apenas de sua estrutura (forma), não de verificação factual posterior sobre o que Pedro realmente faz.' },
      { letra: 'D', texto: 'Inválido, por se tratar de uma falácia de afirmação do consequente.', comentario: 'Incorreta. Não há afirmação do consequente aqui — o argumento afirma o antecedente (Pedro é policial penal) e conclui o consequente, o que é justamente o modus ponens válido.' }
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
      { letra: 'A', texto: 'Inválido, pois inverte indevidamente o condicional.', comentario: 'Incorreta. Não há inversão do condicional; a estrutura aplicada é modus tollens, forma de argumento dedutivo válida.' },
      { letra: 'B', texto: 'Válido, por se tratar da estrutura modus tollens.' },
      { letra: 'C', texto: 'Inválido, por se tratar de falácia de negação do antecedente.', comentario: 'Incorreta. Não se trata de negar o antecedente, e sim de negar o consequente (não ter direito à saída) para concluir a negação do antecedente — isso é modus tollens, não uma falácia.' },
      { letra: 'D', texto: 'Válido apenas se todas as premissas forem verdadeiras no mundo real.', comentario: 'Incorreta. A validade lógica de modus tollens decorre apenas da forma do argumento, independentemente de confirmação sobre a veracidade das premissas no mundo real.' }
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
      { letra: 'A', texto: 'Válido, por ser um modus ponens.', comentario: 'Incorreta. Não é modus ponens, pois o argumento parte da afirmação do consequente (Ana foi aprovada), e não do antecedente (Ana estuda).' },
      { letra: 'B', texto: 'Válido, por ser um modus tollens.', comentario: 'Incorreta. Não é modus tollens, pois o argumento não nega o consequente; ao contrário, afirma-o para tentar concluir o antecedente, caracterizando outra estrutura.' },
      { letra: 'C', texto: 'Inválido, por incorrer na falácia de afirmação do consequente.' },
      { letra: 'D', texto: 'Inválido, por incorrer na falácia de negação do antecedente.', comentario: 'Incorreta. Não há negação do antecedente nesse argumento; o erro é justamente afirmar o consequente (Q) para concluir o antecedente (P), uma falácia diferente.' }
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
      { letra: 'A', texto: '3', comentario: 'Incorreta. Esse valor não corresponde ao resultado de 40−35; é inferior ao número correto de candidatos que não estudam nenhuma das disciplinas, conforme a fórmula da união de conjuntos.' },
      { letra: 'B', texto: '5' },
      { letra: 'C', texto: '8', comentario: 'Incorreta. Esse valor não corresponde ao resultado de |A∪B|=25+20−10=35 subtraído de 40; não decorre do cálculo correto apresentado na justificativa.' },
      { letra: 'D', texto: '10', comentario: 'Incorreta. Esse valor é exatamente o número de candidatos que estudam as duas disciplinas ao mesmo tempo (a interseção dada no enunciado), e não o número dos que não estudam nenhuma.' }
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
      { letra: 'A', texto: '1/6', comentario: 'Incorreta. 1/6 é a probabilidade de sair um número específico entre os seis (por exemplo, apenas o 2), não a de sair um número par entre os três possíveis (2, 4 ou 6).' },
      { letra: 'B', texto: '1/3', comentario: 'Incorreta. 1/3 corresponderia a 2 resultados favoráveis em 6, mas há 3 números pares (2, 4, 6) entre as 6 faces, o que dá 3/6, não 2/6.' },
      { letra: 'C', texto: '1/2' },
      { letra: 'D', texto: '2/3', comentario: 'Incorreta. 2/3 corresponderia a 4 resultados favoráveis em 6, mas apenas 3 das 6 faces são pares.' }
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
      { letra: 'A', texto: '5', comentario: 'Incorreta. Esse é o número de candidatos disponíveis, não o número de comissões possíveis; confunde o total de elementos com o resultado da combinação.' },
      { letra: 'B', texto: '10' },
      { letra: 'C', texto: '20', comentario: 'Incorreta. Esse valor equivale a 5×4 sem dividir pelo número de repetições de ordem (2!), tratando a escolha como se a ordem importasse (arranjo), quando na verdade não importa.' },
      { letra: 'D', texto: '25', comentario: 'Incorreta. Esse valor equivale a 5×5, como se a escolha permitisse repetir a mesma pessoa nos dois lugares da comissão, o que não é o caso.' }
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
      { letra: 'A', texto: 'Nenhum policial penal usa farda em serviço interno.', comentario: 'Incorreta. "Nenhum" representa a negação total (todos não usam), mais forte do que "nem todos", que exige apenas a existência de um contraexemplo.' },
      { letra: 'B', texto: 'Todos os policiais penais usam farda em serviço interno.', comentario: 'Incorreta. Essa alternativa afirma o oposto do que o enunciado assume, que já parte do princípio de que nem todos usam a farda.' },
      { letra: 'C', texto: 'Existe pelo menos um policial penal que não usa farda em serviço interno.' },
      { letra: 'D', texto: 'Todos os policiais penais não usam farda em serviço interno.', comentario: 'Incorreta. Essa é uma proposição universal negativa (todos não usam), diferente da existencial negativa correta (existe pelo menos um que não usa).' }
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
      { letra: 'B', texto: 'Todo servidor público é policial penal.', comentario: 'Incorreta. Trata-se de uma inversão indevida do silogismo; as premissas não garantem que todo servidor público seja policial penal, apenas o contrário.' },
      { letra: 'C', texto: 'Quem presta concurso é policial penal.', comentario: 'Incorreta. As premissas não permitem concluir que todo aquele que presta concurso é policial penal, pois outros servidores públicos também prestam concurso sem ser policiais penais.' },
      { letra: 'D', texto: 'Nenhum policial penal deve prestar concurso.', comentario: 'Incorreta. Essa conclusão contradiz diretamente as premissas, que afirmam justamente que todo servidor público (logo, todo policial penal) deve prestar concurso.' }
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
      { letra: 'B', texto: 'Carlos foi aprovado no concurso.', comentario: 'Incorreta. Concluir que Carlos foi aprovado contradiz diretamente a premissa de que todo aprovado é formado, já que Carlos não é formado.' },
      { letra: 'C', texto: 'Não é possível concluir nada sobre a aprovação de Carlos.', comentario: 'Incorreta. É sim possível concluir algo: a contrapositiva da primeira premissa, aplicada ao fato de Carlos não ser formado, permite inferir validamente que ele não foi aprovado.' },
      { letra: 'D', texto: 'Todos que não são formados foram aprovados.', comentario: 'Incorreta. As premissas não autorizam essa generalização; elas garantem apenas que Carlos, especificamente, não foi aprovado, não que todos os não formados tenham sido aprovados.' }
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
      { letra: 'A', texto: '8 anos', comentario: 'Incorreta. Se Júlia tivesse 8 anos hoje, Marta teria 16; daqui a 5 anos a soma seria 13+21=34, não 40 — não satisfaz a equação do problema.' },
      { letra: 'B', texto: '10 anos' },
      { letra: 'C', texto: '12 anos', comentario: 'Incorreta. Se Júlia tivesse 12 anos, Marta teria 24; daqui a 5 anos a soma seria 17+29=46, valor que ultrapassa os 40 anos exigidos pelo enunciado.' },
      { letra: 'D', texto: '15 anos', comentario: 'Incorreta. Esse valor confunde a idade de Júlia com a de Marta (que seria o dobro, 30), não correspondendo ao resultado correto de J=10 obtido pela equação 3J=30.' }
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
      { letra: 'A', texto: 'R$ 90,00', comentario: 'Incorreta. Esse valor equivale a somar apenas R$ 10,00 ao preço original, o que corresponderia a um reajuste de 12,5%, não aos 25% do enunciado.' },
      { letra: 'B', texto: 'R$ 95,00', comentario: 'Incorreta. Esse valor equivale a somar R$ 15,00 ao preço original, o que corresponderia a um reajuste de aproximadamente 18,75%, não aos 25% do enunciado.' },
      { letra: 'C', texto: 'R$ 100,00' },
      { letra: 'D', texto: 'R$ 105,00', comentario: 'Incorreta. Esse valor equivale a somar R$ 25,00 fixos ao preço, um possível erro de confundir "25%" com "R$ 25,00", em vez de calcular 25% sobre R$ 80,00 (que resulta em R$ 20,00 de aumento).' }
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
      { letra: 'A', texto: '100', comentario: 'Incorreta. Esse valor resultaria de aplicar a taxa por máquina-hora (10) a apenas 2 horas em vez das 3 horas do novo cenário (5×2×10=100), ignorando o aumento no tempo de trabalho.' },
      { letra: 'B', texto: '120', comentario: 'Incorreta. Esse valor equivaleria a manter apenas 4 máquinas em vez das 5 do novo cenário (4×3×10=120), sem considerar o aumento no número de máquinas.' },
      { letra: 'C', texto: '140', comentario: 'Incorreta. Esse valor não corresponde ao produto correto de máquinas, horas e taxa (5×3×10=150); não decorre do cálculo apresentado na justificativa.' },
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
      { letra: 'A', texto: 'Marcelo não é aprovado E não toma posse.', comentario: 'Incorreta. É o erro clássico de negar uma conjunção mantendo o conectivo "E"; pela Lei de De Morgan, a negação de uma conjunção deve trocar o conectivo para "OU".' },
      { letra: 'B', texto: 'Marcelo não é aprovado OU não toma posse.' },
      { letra: 'C', texto: 'Marcelo é aprovado OU toma posse.', comentario: 'Incorreta. Essa alternativa apenas repete a proposição original de forma afirmativa, sem negar nenhuma das partes.' },
      { letra: 'D', texto: 'Se Marcelo é aprovado, então toma posse.', comentario: 'Incorreta. Um condicional não é a negação de uma conjunção; a negação correta de "P E Q" é "não P OU não Q", não uma relação de implicação.' }
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
      { letra: 'B', texto: 'Não chove OU não faz frio.', comentario: 'Incorreta. Pela Lei de De Morgan, a negação de uma disjunção deve trocar o conectivo para "E", não mantê-lo como "OU".' },
      { letra: 'C', texto: 'Chove E faz frio.', comentario: 'Incorreta. Essa alternativa apenas afirma as duas proposições originais, sem negar nenhuma delas.' },
      { letra: 'D', texto: 'Se chove, então faz frio.', comentario: 'Incorreta. Um condicional não representa a negação de uma disjunção; a negação correta de "P OU Q" é "não P E não Q".' }
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
      { letra: 'A', texto: 'Candidatos que estudam somente Direito Penal.', comentario: 'Incorreta. Candidatos que estudam somente Direito Penal ficam na região exclusiva do conjunto A, fora da interseção com B.' },
      { letra: 'B', texto: 'Candidatos que estudam somente Direito Constitucional.', comentario: 'Incorreta. Candidatos que estudam somente Direito Constitucional ficam na região exclusiva do conjunto B, fora da interseção com A.' },
      { letra: 'C', texto: 'Candidatos que estudam as duas disciplinas simultaneamente.' },
      { letra: 'D', texto: 'Candidatos que não estudam nenhuma das duas disciplinas.', comentario: 'Incorreta. Candidatos que não estudam nenhuma das disciplinas ficam fora dos dois conjuntos, na região externa a A e B, e não na interseção.' }
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
      { letra: 'A', texto: 'Nenhum servidor cumpre suas obrigações.', comentario: 'Incorreta. "Nenhum servidor cumpre" é uma negação universal mais forte do que a correta, que apenas exige que todos cumpram (quantificador universal afirmativo).' },
      { letra: 'B', texto: 'Todo servidor cumpre suas obrigações.' },
      { letra: 'C', texto: 'Existe um servidor que cumpre suas obrigações.', comentario: 'Incorreta. Essa alternativa apenas reafirma de forma equivalente parte da proposição original (a existência de exceções), sem ser sua negação lógica.' },
      { letra: 'D', texto: 'Não existe nenhum servidor.', comentario: 'Incorreta. Negar a existência de servidores é uma proposição totalmente diferente, sobre a existência de indivíduos no domínio, não sobre o cumprimento de obrigações.' }
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
      { letra: 'B', texto: 'Ministério Público.', comentario: 'Incorreta. O Ministério Público não é a instituição dirigida por um Diretor de Presídio; ele exerce função de controle externo, não de direção da unidade prisional.' },
      { letra: 'C', texto: 'Poder Judiciário.', comentario: 'Incorreta. O Poder Judiciário é o órgão que julga e sentencia, e não a instituição administrada pelo Diretor de Presídio.' },
      { letra: 'D', texto: 'Defensoria Pública.', comentario: 'Incorreta. A Defensoria Pública presta assistência jurídica; não corresponde à instituição dirigida pelo Diretor de Presídio, quebrando o paralelismo cargo-instituição da analogia.' }
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
      { letra: 'A', texto: '6', comentario: 'Incorreta. Esse valor corresponde à célula central da Linha 3 (3, 6, 12), e não da Linha 4, que segue o padrão (n, 2n, 4n) para n=4.' },
      { letra: 'B', texto: '8' },
      { letra: 'C', texto: '12', comentario: 'Incorreta. Esse valor é a célula final (4n) da Linha 3; para a Linha 4, o padrão correto da célula central é 2n=2×4=8.' },
      { letra: 'D', texto: '16', comentario: 'Incorreta. Esse valor corresponde à célula final da Linha 4 (4n=4×4=16), e não à célula central, que é 2n=8.' }
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
      { letra: 'A', texto: '20 m', comentario: 'Incorreta. Esse valor é apenas a soma do comprimento com a largura (12+8=20), sem multiplicar por 2, como exige a fórmula do perímetro.' },
      { letra: 'B', texto: '40 m' },
      { letra: 'C', texto: '48 m', comentario: 'Incorreta. Esse valor equivale a tratar o terreno como um quadrado de lado igual ao comprimento (4×12=48), ignorando que a largura (8 m) é diferente do comprimento.' },
      { letra: 'D', texto: '96 m', comentario: 'Incorreta. Esse valor corresponde à área do retângulo (12×8=96), e não ao seu perímetro.' }
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
      { letra: 'A', texto: 'P e Q são ambas verdadeiras.', comentario: 'Incorreta. Quando P e Q são ambas verdadeiras, o XOR é falso, e não verdadeiro — essa é justamente a diferença em relação ao "ou" inclusivo.' },
      { letra: 'B', texto: 'P e Q são ambas falsas.', comentario: 'Incorreta. Quando P e Q são ambas falsas, não há nenhuma proposição verdadeira, logo o XOR também é falso nesse caso.' },
      { letra: 'C', texto: 'Exatamente uma das proposições, P ou Q, é verdadeira, mas não ambas.' },
      { letra: 'D', texto: 'Pelo menos uma das proposições é verdadeira, incluindo quando ambas o são.', comentario: 'Incorreta. Essa descrição corresponde à disjunção inclusiva (que inclui o caso de ambas verdadeiras), e não à disjunção exclusiva, que exige exatamente uma verdadeira.' }
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
      { letra: 'B', texto: 'Apenas P é verdadeira, independentemente do valor de Q.', comentario: 'Incorreta. O bicondicional depende do valor de ambas as proposições; não é verdadeiro apenas por P ser verdadeira, independentemente de Q.' },
      { letra: 'C', texto: 'P e Q têm valores lógicos diferentes.', comentario: 'Incorreta. Quando P e Q têm valores diferentes, o bicondicional é falso, e não verdadeiro — é exatamente o oposto da condição correta.' },
      { letra: 'D', texto: 'Pelo menos uma das duas proposições é falsa.', comentario: 'Incorreta. Se apenas uma delas for falsa (valores diferentes), o bicondicional é falso; ele só é verdadeiro quando os valores coincidem, inclusive quando ambas são falsas.' }
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
      { letra: 'A', texto: 'Se Pedro for aprovado na avaliação, então será promovido.', comentario: 'Incorreta. Essa alternativa inverte a relação de "somente se", tratando-a como se fosse "se" — um erro comum, mas "P somente se Q" equivale a P→Q, e não a Q→P.' },
      { letra: 'B', texto: 'Se Pedro for promovido, então foi aprovado na avaliação de desempenho.' },
      { letra: 'C', texto: 'Pedro será promovido e será aprovado na avaliação, simultaneamente.', comentario: 'Incorreta. "Somente se" expressa uma condição necessária, e não uma ocorrência simultânea obrigatória de ambos os eventos.' },
      { letra: 'D', texto: 'Se Pedro não for promovido, então foi aprovado na avaliação.', comentario: 'Incorreta. Essa alternativa nega o antecedente para concluir o consequente original, uma relação diferente da condicional correta (P→Q) que representa "somente se".' }
    ],
    gabarito: 'B',
    justificativa: '"P somente se Q" equivale a "Se P, então Q" (P → Q) — a condição necessária vem depois de "somente se". Aqui, P = "será promovido" e Q = "foi aprovado", logo: "se foi promovido, então foi aprovado". É um erro comum inverter essa relação, tratando "somente se" como se fosse "se" (alternativa A).'
  },
  {
    id: 'rlm_31',
    disciplina: 'rlm',
    topico: 'Silogismo Categórico Particular',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Considere as premissas: "Algum policial penal é instrutor de tiro" e "Todo instrutor de tiro trabalha aos sábados". A conclusão logicamente válida é:',
    alternativas: [
      { letra: 'A', texto: 'Algum policial penal trabalha aos sábados.' },
      { letra: 'B', texto: 'Todo policial penal trabalha aos sábados.', comentario: 'Incorreta. De uma premissa particular ("algum") não se pode extrair validamente uma conclusão universal ("todo"); isso seria uma generalização indevida.' },
      { letra: 'C', texto: 'Nenhum policial penal trabalha aos sábados.', comentario: 'Incorreta. Essa conclusão contradiz diretamente as premissas, que garantem que pelo menos alguns policiais penais (os que são instrutores) trabalham aos sábados.' },
      { letra: 'D', texto: 'Todo instrutor de tiro é policial penal.', comentario: 'Incorreta. As premissas não autorizam essa inferência; nada garante que todo instrutor de tiro seja necessariamente um policial penal.' }
    ],
    gabarito: 'A',
    justificativa: 'De uma premissa particular ("Algum P é M") combinada com uma premissa universal ("Todo M é N"), só se pode concluir validamente uma proposição particular ("Algum P é N") — nunca uma universal. Generalizar para "todo" (alternativa B) é uma extrapolação lógica inválida a partir de premissa particular.'
  },
  {
    id: 'rlm_32',
    disciplina: 'rlm',
    topico: 'Raciocínio Geométrico - Área do Círculo',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Uma área circular de treinamento tem 7 metros de raio. Utilizando π ≈ 22/7, qual é, aproximadamente, a área dessa região?',
    alternativas: [
      { letra: 'A', texto: '44 m²', comentario: 'Incorreta. Esse valor corresponde ao perímetro (circunferência) do círculo, calculado como 2×(22/7)×7=44, e não à sua área.' },
      { letra: 'B', texto: '77 m²', comentario: 'Incorreta. Esse valor equivale à área de um semicírculo (154÷2=77), como se apenas metade da região circular tivesse sido considerada.' },
      { letra: 'C', texto: '154 m²' },
      { letra: 'D', texto: '308 m²', comentario: 'Incorreta. Esse valor é o dobro da área correta (154×2=308); não corresponde ao cálculo correto de π×r² apresentado na justificativa.' }
    ],
    gabarito: 'C',
    justificativa: 'A área do círculo é π×r² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 m².'
  },
  {
    id: 'rlm_33',
    disciplina: 'rlm',
    topico: 'Sequências - Número de Lados de Polígonos',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Observe a sequência de figuras geométricas, considerando o número de lados de cada uma: triângulo (3 lados), quadrado (4 lados), pentágono (5 lados), hexágono (6 lados), ... Qual é a próxima figura da sequência?',
    alternativas: [
      { letra: 'A', texto: 'Octógono (8 lados).', comentario: 'Incorreta. O octógono tem 8 lados, pulando o heptágono (7 lados), que é o próximo elemento imediato na sequência crescente de 1 em 1.' },
      { letra: 'B', texto: 'Heptágono (7 lados).' },
      { letra: 'C', texto: 'Círculo (0 lados).', comentario: 'Incorreta. Um círculo não tem lados retos e não segue o padrão de acréscimo de um lado por figura estabelecido pela sequência.' },
      { letra: 'D', texto: 'Triângulo (3 lados), reiniciando o ciclo.', comentario: 'Incorreta. Não há indicação de que a sequência reinicie; ela segue crescendo de forma constante, um lado a mais a cada figura.' }
    ],
    gabarito: 'B',
    justificativa: 'A sequência segue o padrão de aumentar 1 lado a cada figura (3, 4, 5, 6, ...). A próxima figura, com 7 lados, é o heptágono.'
  },
  {
    id: 'rlm_34',
    disciplina: 'rlm',
    topico: 'Argumento com Múltiplas Premissas (Sorites)',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Considere as premissas: "Todo policial penal é servidor público", "Todo servidor público deve observar o estatuto da carreira" e "Todo aquele que observa o estatuto está sujeito a processo disciplinar em caso de falta". A conclusão logicamente válida, por transitividade, é:',
    alternativas: [
      { letra: 'A', texto: 'Todo policial penal está sujeito a processo disciplinar em caso de falta.' },
      { letra: 'B', texto: 'Nenhum policial penal está sujeito a processo disciplinar.', comentario: 'Incorreta. Essa conclusão contradiz diretamente o encadeamento das três premissas, que leva exatamente à conclusão oposta.' },
      { letra: 'C', texto: 'Apenas alguns servidores públicos são policiais penais.', comentario: 'Incorreta. A primeira premissa já estabelece que TODO policial penal é servidor público, não apenas alguns, logo essa restrição não decorre das premissas.' },
      { letra: 'D', texto: 'Todo servidor público é policial penal.', comentario: 'Incorreta. As premissas não autorizam essa inversão; elas afirmam que todo policial penal é servidor público, não o contrário.' }
    ],
    gabarito: 'A',
    justificativa: 'Encadeando as três premissas universais por transitividade (A→B→C→D, logo A→D): todo policial penal (A) é servidor público (B), todo servidor público observa o estatuto (C), e todo que observa o estatuto está sujeito a processo disciplinar (D). Logo, todo policial penal está sujeito a processo disciplinar em caso de falta — um sorites válido.'
  },
  {
    id: 'rlm_35',
    disciplina: 'rlm',
    topico: 'Análise Combinatória - Permutação Simples',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'De quantas maneiras distintas 4 policiais penais podem ser dispostos, lado a lado, em uma fila para uma formatura?',
    alternativas: [
      { letra: 'A', texto: '4', comentario: 'Incorreta. Esse valor é apenas o número de policiais na fila, não o número de disposições possíveis, que exige calcular o fatorial (4!).' },
      { letra: 'B', texto: '16', comentario: 'Incorreta. Esse valor equivale a 4² (4×4), como se cada posição pudesse repetir a mesma pessoa, o que não é permitido em uma fila sem repetições.' },
      { letra: 'C', texto: '24' },
      { letra: 'D', texto: '256', comentario: 'Incorreta. Esse valor equivale a 4⁴ (4×4×4×4), tratando o problema como se houvesse repetição livre em cada uma das 4 posições, quando na verdade cada policial ocupa uma posição única.' }
    ],
    gabarito: 'C',
    justificativa: 'Como a ordem importa e todos os 4 elementos são utilizados, trata-se de uma permutação simples: P(4) = 4! = 4×3×2×1 = 24.'
  },
  {
    id: 'rlm_36',
    disciplina: 'rlm',
    topico: 'Análise Combinatória - Arranjo',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'De um grupo de 6 candidatos a uma comissão, de quantas formas distintas é possível escolher um presidente e um vice-presidente (cargos distintos, sem que a mesma pessoa ocupe os dois)?',
    alternativas: [
      { letra: 'A', texto: '12', comentario: 'Incorreta. Esse valor equivale a 6×2=12, uma simples multiplicação do número de candidatos pelo número de cargos, que não reflete o cálculo correto do arranjo A(6,2)=30.' },
      { letra: 'B', texto: '15', comentario: 'Incorreta. Esse valor corresponde à combinação C(6,2)=15, que ignora a ordem dos cargos; como presidente e vice são posições distintas, deve-se usar o arranjo A(6,2)=30, não a combinação.' },
      { letra: 'C', texto: '30' },
      { letra: 'D', texto: '36', comentario: 'Incorreta. Esse valor equivale a 6×6=36, como se a mesma pessoa pudesse ocupar os dois cargos simultaneamente, o que o enunciado exclui.' }
    ],
    gabarito: 'C',
    justificativa: 'Como a ordem importa (cargos distintos), trata-se de um arranjo: A(6,2) = 6!/(6-2)! = 6×5 = 30.'
  },
  {
    id: 'rlm_37',
    disciplina: 'rlm',
    topico: 'Probabilidade Composta - Eventos Independentes',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Uma moeda honesta é lançada duas vezes, de forma independente. Qual é a probabilidade de o resultado ser "cara" nos dois lançamentos?',
    alternativas: [
      { letra: 'A', texto: '1/2', comentario: 'Incorreta. 1/2 é a probabilidade de sair cara em um único lançamento; para dois lançamentos independentes, deve-se multiplicar as probabilidades (1/2×1/2), não usar o valor de apenas um lançamento.' },
      { letra: 'B', texto: '1/3', comentario: 'Incorreta. Esse valor não decorre da multiplicação de probabilidades independentes (1/2×1/2=1/4); não corresponde a nenhum cálculo correto para esse experimento com moeda honesta.' },
      { letra: 'C', texto: '1/4' },
      { letra: 'D', texto: '1/8', comentario: 'Incorreta. 1/8 seria o resultado de multiplicar três probabilidades de 1/2 (como em três lançamentos), e não apenas os dois lançamentos do enunciado.' }
    ],
    gabarito: 'C',
    justificativa: 'Para eventos independentes, a probabilidade da ocorrência conjunta (E) é o produto das probabilidades individuais: P(cara) × P(cara) = 1/2 × 1/2 = 1/4.'
  },
  {
    id: 'rlm_38',
    disciplina: 'rlm',
    topico: 'Probabilidade - Sem Reposição',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Uma urna contém 5 bolas vermelhas e 3 bolas azuis. Retirando-se duas bolas, sucessivamente e sem reposição, qual é a probabilidade de que as duas sejam vermelhas?',
    alternativas: [
      { letra: 'A', texto: '5/14' },
      { letra: 'B', texto: '5/8', comentario: 'Incorreta. 5/8 é apenas a probabilidade da primeira bola ser vermelha; falta multiplicar pela probabilidade da segunda bola também ser vermelha, considerando a retirada sem reposição (4/7).' },
      { letra: 'C', texto: '25/64', comentario: 'Incorreta. Esse valor equivale a multiplicar 5/8×5/8, como se houvesse reposição da primeira bola antes da segunda retirada, o que contraria o enunciado.' },
      { letra: 'D', texto: '1/2', comentario: 'Incorreta. Esse valor não corresponde ao cálculo de probabilidade sem reposição para duas bolas vermelhas; não decorre da multiplicação correta 5/8×4/7=5/14.' }
    ],
    gabarito: 'A',
    justificativa: 'P(1ª vermelha) = 5/8. Sem reposição, restam 4 vermelhas em 7 bolas: P(2ª vermelha) = 4/7. P(ambas vermelhas) = 5/8 × 4/7 = 20/56 = 5/14.'
  },
  {
    id: 'rlm_39',
    disciplina: 'rlm',
    topico: 'Problema de Calendário',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Sabendo que o dia 15 de março de determinado ano caiu em uma quarta-feira, e que o mês de março desse ano tem 31 dias, em que dia da semana caiu o dia 15 de abril do mesmo ano?',
    alternativas: [
      { letra: 'A', texto: 'Quinta-feira', comentario: 'Incorreta. Esse dia corresponde a avançar apenas 1 dia da quarta-feira, quando o cálculo correto exige avançar 3 dias (resto da divisão de 31 por 7).' },
      { letra: 'B', texto: 'Sexta-feira', comentario: 'Incorreta. Esse dia corresponde a avançar apenas 2 dias da quarta-feira, um dia a menos do que os 3 dias de resto exigidos pelo cálculo.' },
      { letra: 'C', texto: 'Sábado' },
      { letra: 'D', texto: 'Domingo', comentario: 'Incorreta. Esse dia corresponde a avançar 4 dias da quarta-feira, um dia a mais do que os 3 dias de resto corretos (31 dividido por 7 dá resto 3, não 4).' }
    ],
    gabarito: 'C',
    justificativa: 'De 15/03 a 15/04 são exatamente 31 dias. Dividindo 31 por 7, obtém-se 4 semanas completas e resto 3. Avançando 3 dias da quarta-feira: quinta, sexta, sábado. Logo, 15 de abril cai num sábado.'
  },
  {
    id: 'rlm_40',
    disciplina: 'rlm',
    topico: 'Regra de Três Composta',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Trabalhando 8 horas por dia, 4 operários constroem um muro de 20 metros em 6 dias. Mantida a mesma produtividade individual e a jornada de 8 horas diárias, quantos dias 6 operários levarão para construir um muro de 30 metros?',
    alternativas: [
      { letra: 'A', texto: '4 dias', comentario: 'Incorreta. Esse valor resulta de considerar apenas o aumento do número de operários (6×4/6=4), sem ajustar para o maior comprimento do muro exigido (30 m em vez de 20 m).' },
      { letra: 'B', texto: '6 dias' },
      { letra: 'C', texto: '8 dias', comentario: 'Incorreta. Esse valor superestima o tempo necessário; não aplica corretamente a proporcionalidade inversa entre operários e dias, que reduz o tempo ao aumentar a mão de obra de 4 para 6 operários.' },
      { letra: 'D', texto: '9 dias', comentario: 'Incorreta. Esse valor considera apenas o aumento proporcional dos metros (6×30/20=9), sem levar em conta a redução de dias trazida pelo aumento do número de operários.' }
    ],
    gabarito: 'B',
    justificativa: 'Operários e dias são inversamente proporcionais (mais operários, menos dias); metros e dias são diretamente proporcionais (mais metros, mais dias). dias₂ = 6 × (4/6) × (30/20) = 6 × 0,667 × 1,5 = 6 dias.'
  },
  {
    id: 'rlm_41',
    disciplina: 'rlm',
    topico: 'Diagramas Lógicos - Três Conjuntos',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Em uma pesquisa com 90 servidores de uma unidade prisional: 50 leem o jornal A, 40 leem o jornal B, 30 leem o jornal C, 20 leem A e B, 15 leem B e C, 10 leem A e C, e 5 leem os três jornais. Quantos servidores NÃO leem nenhum dos três jornais?',
    alternativas: [
      { letra: 'A', texto: '5', comentario: 'Incorreta. Esse valor é exatamente o número de servidores que leem os três jornais simultaneamente, e não o número dos que não leem nenhum.' },
      { letra: 'B', texto: '10' },
      { letra: 'C', texto: '15', comentario: 'Incorreta. Esse valor coincide com o número de servidores que leem B e C, e não com o resultado da fórmula de inclusão-exclusão aplicada ao total de 90.' },
      { letra: 'D', texto: '20', comentario: 'Incorreta. Esse valor coincide com o número de servidores que leem A e B, e não com o número dos que não leem nenhum jornal, obtido por 90 menos a união dos três conjuntos.' }
    ],
    gabarito: 'B',
    justificativa: 'Pelo princípio da inclusão-exclusão: |A∪B∪C| = 50+40+30-20-15-10+5 = 80. Como há 90 servidores no total, os que não leem nenhum jornal são 90-80 = 10.'
  },
  {
    id: 'rlm_42',
    disciplina: 'rlm',
    topico: 'Progressão Aritmética - Termo Geral',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Em uma progressão aritmética (PA), o primeiro termo é 5 e a razão é 4. Qual é o valor do 10º termo dessa progressão?',
    alternativas: [
      { letra: 'A', texto: '36', comentario: 'Incorreta. Esse valor é apenas o incremento total (9×4=36), sem somar o primeiro termo (5); a fórmula exige aₙ=a₁+(n-1)×r, não apenas (n-1)×r.' },
      { letra: 'B', texto: '39', comentario: 'Incorreta. Esse valor não corresponde à fórmula do termo geral aₙ=a₁+(n-1)×r aplicada corretamente a n=10; não decorre do cálculo apresentado na justificativa.' },
      { letra: 'C', texto: '41' },
      { letra: 'D', texto: '45', comentario: 'Incorreta. Esse valor resulta de usar n em vez de (n-1) na fórmula (5+10×4=45), um erro comum de esquecer de subtrair 1 do índice do termo.' }
    ],
    gabarito: 'C',
    justificativa: 'O termo geral da PA é aₙ = a₁ + (n-1)×r. Para n=10: a₁₀ = 5 + (10-1)×4 = 5 + 36 = 41.'
  },
  {
    id: 'rlm_43',
    disciplina: 'rlm',
    topico: 'Problema de Relógio - Ângulo entre Ponteiros',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Qual é o ângulo formado entre os ponteiros das horas e dos minutos de um relógio analógico às 4h30?',
    alternativas: [
      { letra: 'A', texto: '15°', comentario: 'Incorreta. Esse valor é apenas o deslocamento do ponteiro das horas entre as 4h00 e as 4h30 (15°), e não a diferença final entre os dois ponteiros nesse horário.' },
      { letra: 'B', texto: '30°', comentario: 'Incorreta. Esse valor corresponde ao ângulo entre duas marcações consecutivas de hora no mostrador (30°), não ao ângulo real entre os ponteiros às 4h30, que depende também do deslocamento progressivo do ponteiro das horas.' },
      { letra: 'C', texto: '45°' },
      { letra: 'D', texto: '60°', comentario: 'Incorreta. Esse valor resultaria de considerar o ponteiro das horas parado exatamente sobre o número 4 (120°) às 4h30, ignorando que ele se desloca 15° adicionais, o que daria 180°-120°=60° em vez dos 45° corretos.' }
    ],
    gabarito: 'C',
    justificativa: 'Às 4h00, o ponteiro das horas está em 120° (4×30°). Em 30 minutos, ele avança 15° (0,5°/min × 30), chegando a 135°. O ponteiro dos minutos, aos 30 min, está em 180° (30×6°). A diferença é 180°-135° = 45°.'
  },
  {
    id: 'rlm_44',
    disciplina: 'rlm',
    topico: 'Negação de Universal Afirmativa e Modus Tollens',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Considere as premissas: "Nenhum servidor faltoso é promovido" e "Carlos foi promovido". A conclusão logicamente válida é:',
    alternativas: [
      { letra: 'A', texto: 'Carlos não é faltoso.' },
      { letra: 'B', texto: 'Carlos é faltoso.', comentario: 'Incorreta. Essa conclusão contraria diretamente a contrapositiva da premissa ("todo promovido é não-faltoso"), que exige justamente que Carlos não seja faltoso.' },
      { letra: 'C', texto: 'Não é possível concluir nada sobre Carlos.', comentario: 'Incorreta. É sim possível concluir algo: a contrapositiva de "nenhum faltoso é promovido" aplicada ao fato de Carlos ter sido promovido permite inferir validamente que ele não é faltoso.' },
      { letra: 'D', texto: 'Todos os promovidos são faltosos.', comentario: 'Incorreta. As premissas não autorizam essa generalização; elas garantem apenas que Carlos, especificamente, não é faltoso, e essa conclusão aliás contradiz a premissa de que nenhum faltoso é promovido.' }
    ],
    gabarito: 'A',
    justificativa: '"Nenhum servidor faltoso é promovido" equivale a "todo faltoso é não-promovido", cuja contrapositiva é "todo promovido é não-faltoso". Como Carlos foi promovido, conclui-se validamente que Carlos não é faltoso.'
  },
  {
    id: 'rlm_45',
    disciplina: 'rlm',
    topico: 'Análise Combinatória - Anagramas',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Quantos anagramas distintos podem ser formados com as letras da palavra "PENAL" (5 letras distintas)?',
    alternativas: [
      { letra: 'A', texto: '20', comentario: 'Incorreta. Esse valor é muito inferior a 5!=120; corresponde apenas a 5×4, como um cálculo parcial que não multiplica por todos os fatores do fatorial.' },
      { letra: 'B', texto: '60', comentario: 'Incorreta. Esse valor equivale à metade de 5! (120÷2=60), como se houvesse alguma repetição de letras a descontar — mas todas as 5 letras de "PENAL" são distintas, não havendo divisão a fazer.' },
      { letra: 'C', texto: '100', comentario: 'Incorreta. Esse valor não corresponde a 5!=120; não decorre de nenhum cálculo correto de permutação para 5 elementos distintos.' },
      { letra: 'D', texto: '120' }
    ],
    gabarito: 'D',
    justificativa: 'Como as 5 letras da palavra "PENAL" são todas distintas, o número de anagramas é dado pela permutação simples: 5! = 5×4×3×2×1 = 120.'
  }
];
