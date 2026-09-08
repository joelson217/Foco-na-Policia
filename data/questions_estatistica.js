// ============================================================
// QUESTIONS_ESTATISTICA — Disciplina do bloco de Conhecimentos
// Específicos da PCPE (Polícia Civil de PE), banca Cebraspe, comum
// aos cargos de Agente e Escrivão. Conteúdo genérico de estatística
// descritiva (amostragem, medidas de tendência central e dispersão,
// distribuição de frequência, correlação) — não depende de
// legislação específica.
// ============================================================

const QUESTIONS_ESTATISTICA = [
  {
    id: 'estat_1',
    disciplina: 'estatistica',
    topico: 'Conceitos Básicos - População e Amostra',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Em Estatística, denomina-se "amostra":',
    alternativas: [
      { letra: 'A', texto: 'Um subconjunto representativo extraído da população, utilizado para inferir características do todo.' },
      { letra: 'B', texto: 'O conjunto de todos os elementos que possuem a característica estudada.', comentario: 'Incorreta. Essa é a definição de POPULAÇÃO (ou universo), e não de amostra, que é apenas um subconjunto dela.' },
      { letra: 'C', texto: 'O valor médio calculado sobre toda a população.', comentario: 'Incorreta. O valor médio é uma medida de tendência central (parâmetro ou estatística), e não a definição de amostra.' },
      { letra: 'D', texto: 'Um erro sistemático de medição presente em qualquer coleta de dados.', comentario: 'Incorreta. Erro sistemático (viés) é um conceito distinto, relacionado à qualidade da coleta, e não à definição de amostra.' }
    ],
    gabarito: 'A',
    justificativa: 'Amostra é um subconjunto representativo da população, selecionado para permitir inferências sobre as características do todo sem a necessidade de examinar cada elemento da população.'
  },
  {
    id: 'estat_2',
    disciplina: 'estatistica',
    topico: 'Tipos de Amostragem - Aleatória Simples',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A amostragem em que cada elemento da população tem a mesma probabilidade de ser selecionado, por meio de sorteio, denomina-se:',
    alternativas: [
      { letra: 'A', texto: 'Amostragem aleatória simples.' },
      { letra: 'B', texto: 'Amostragem por conglomerados.', comentario: 'Incorreta. Na amostragem por conglomerados, sorteiam-se grupos (conglomerados) inteiros de elementos, e não elementos individuais com igual probabilidade.' },
      { letra: 'C', texto: 'Amostragem por cotas.', comentario: 'Incorreta. A amostragem por cotas é um método não probabilístico, em que o pesquisador seleciona elementos até preencher cotas predefinidas por categoria.' },
      { letra: 'D', texto: 'Amostragem intencional (por julgamento).', comentario: 'Incorreta. Na amostragem intencional, os elementos são escolhidos deliberadamente pelo pesquisador, sem sorteio nem igual probabilidade de seleção.' }
    ],
    gabarito: 'A',
    justificativa: 'Na amostragem aleatória simples, cada elemento da população tem igual probabilidade de ser sorteado para compor a amostra, geralmente por meio de sorteio ou tabela de números aleatórios.'
  },
  {
    id: 'estat_3',
    disciplina: 'estatistica',
    topico: 'Tipos de Amostragem - Estratificada',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Quando a população é dividida em subgrupos (estratos) homogêneos internamente, e a amostra é composta por elementos selecionados aleatoriamente dentro de cada estrato, tem-se a amostragem:',
    alternativas: [
      { letra: 'A', texto: 'Estratificada.' },
      { letra: 'B', texto: 'Sistemática.', comentario: 'Incorreta. A amostragem sistemática seleciona elementos em intervalos regulares a partir de uma lista ordenada, sem necessariamente dividir a população em estratos.' },
      { letra: 'C', texto: 'Por conglomerados.', comentario: 'Incorreta. Na amostragem por conglomerados, sorteiam-se grupos (conglomerados) inteiros, heterogêneos internamente, e não estratos homogêneos com sorteio interno.' },
      { letra: 'D', texto: 'Não probabilística.', comentario: 'Incorreta. A amostragem estratificada com sorteio dentro dos estratos é um método PROBABILÍSTICO, e não não probabilístico.' }
    ],
    gabarito: 'A',
    justificativa: 'Na amostragem estratificada, a população é dividida em estratos (subgrupos homogêneos internamente), e a amostra é formada por elementos sorteados aleatoriamente dentro de cada estrato, proporcionalmente ao seu tamanho.'
  },
  {
    id: 'estat_4',
    disciplina: 'estatistica',
    topico: 'Tipos de Amostragem - Sistemática',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Uma pesquisa seleciona a cada 10º nome de uma lista telefônica ordenada, a partir de um ponto de partida aleatório. Esse procedimento caracteriza a amostragem:',
    alternativas: [
      { letra: 'A', texto: 'Sistemática.' },
      { letra: 'B', texto: 'Por conglomerados.', comentario: 'Incorreta. A amostragem por conglomerados sorteia grupos inteiros de elementos, e não elementos individuais em intervalos regulares de uma lista.' },
      { letra: 'C', texto: 'Por cotas.', comentario: 'Incorreta. A amostragem por cotas define quantidades por categoria a serem preenchidas pelo pesquisador, sem relação com intervalos regulares numa lista ordenada.' },
      { letra: 'D', texto: 'Aleatória simples.', comentario: 'Incorreta. Na amostragem aleatória simples, cada elemento é sorteado individualmente com igual probabilidade, sem o padrão de intervalos fixos característico da amostragem sistemática.' }
    ],
    gabarito: 'A',
    justificativa: 'A amostragem sistemática seleciona elementos em intervalos regulares e fixos (a cada k-ésimo elemento) a partir de uma lista ordenada, com ponto de partida aleatório.'
  },
  {
    id: 'estat_5',
    disciplina: 'estatistica',
    topico: 'Classificação de Variáveis',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A variável "estado civil" (solteiro, casado, divorciado, viúvo) classifica-se, quanto à sua natureza, como:',
    alternativas: [
      { letra: 'A', texto: 'Qualitativa nominal.' },
      { letra: 'B', texto: 'Quantitativa discreta.', comentario: 'Incorreta. Variáveis quantitativas discretas assumem valores numéricos contáveis (ex.: número de filhos); estado civil é uma categoria, não um número.' },
      { letra: 'C', texto: 'Quantitativa contínua.', comentario: 'Incorreta. Variáveis quantitativas contínuas assumem valores numéricos em uma escala contínua (ex.: altura, peso); estado civil não é numérico.' },
      { letra: 'D', texto: 'Qualitativa ordinal.', comentario: 'Incorreta. As categorias de estado civil não possuem uma ordem natural entre si (diferente de escolaridade, por exemplo), caracterizando variável qualitativa NOMINAL, e não ordinal.' }
    ],
    gabarito: 'A',
    justificativa: 'Variáveis qualitativas nominais representam categorias sem ordem natural entre si, como o estado civil. Já as qualitativas ordinais possuem uma ordem implícita (ex.: escolaridade), e as quantitativas expressam valores numéricos (discretas ou contínuas).'
  },
  {
    id: 'estat_6',
    disciplina: 'estatistica',
    topico: 'Medidas de Dispersão - Variância',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Em Estatística, a variância de um conjunto de dados mede:',
    alternativas: [
      { letra: 'A', texto: 'O grau de dispersão dos valores em torno da média, calculado pela média dos quadrados dos desvios.' },
      { letra: 'B', texto: 'O valor que mais se repete no conjunto de dados.', comentario: 'Incorreta. O valor que mais se repete é a MODA, e não a variância, que é uma medida de dispersão.' },
      { letra: 'C', texto: 'O valor central de uma sequência ordenada de dados.', comentario: 'Incorreta. O valor central de uma sequência ordenada é a MEDIANA, e não a variância.' },
      { letra: 'D', texto: 'A soma total de todos os valores do conjunto de dados.', comentario: 'Incorreta. A soma total dos valores não é a variância; a variância envolve os desvios de cada valor em relação à média, elevados ao quadrado.' }
    ],
    gabarito: 'A',
    justificativa: 'A variância mede a dispersão dos dados em relação à média, sendo calculada pela média aritmética dos quadrados dos desvios de cada valor em relação à média do conjunto.'
  },
  {
    id: 'estat_7',
    disciplina: 'estatistica',
    topico: 'Medidas de Dispersão - Desvio Padrão',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O desvio padrão de um conjunto de dados é calculado como:',
    alternativas: [
      { letra: 'A', texto: 'A raiz quadrada da variância.' },
      { letra: 'B', texto: 'O quadrado da variância.', comentario: 'Incorreta. A relação é inversa: o desvio padrão é a RAIZ QUADRADA da variância, e não o quadrado dela.' },
      { letra: 'C', texto: 'A média aritmética simples dos valores do conjunto.', comentario: 'Incorreta. A média aritmética simples é uma medida de tendência central, distinta do desvio padrão, que é medida de dispersão.' },
      { letra: 'D', texto: 'A diferença entre o maior e o menor valor do conjunto (amplitude).', comentario: 'Incorreta. Essa é a definição de AMPLITUDE (ou amplitude total), uma medida de dispersão diferente do desvio padrão.' }
    ],
    gabarito: 'A',
    justificativa: 'O desvio padrão é definido como a raiz quadrada da variância, expresso na mesma unidade de medida dos dados originais, o que facilita sua interpretação em comparação com a variância.'
  },
  {
    id: 'estat_8',
    disciplina: 'estatistica',
    topico: 'Medidas de Dispersão - Coeficiente de Variação',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'O coeficiente de variação é uma medida de dispersão relativa, útil para comparar a variabilidade de conjuntos de dados com médias diferentes, sendo calculado como:',
    alternativas: [
      { letra: 'A', texto: 'A razão entre o desvio padrão e a média, geralmente expressa em percentual.' },
      { letra: 'B', texto: 'A soma do desvio padrão com a média.', comentario: 'Incorreta. O coeficiente de variação é uma razão (divisão) entre desvio padrão e média, e não uma soma entre eles.' },
      { letra: 'C', texto: 'A diferença entre a média e a mediana.', comentario: 'Incorreta. A diferença entre média e mediana é usada, por exemplo, para avaliar assimetria da distribuição, e não corresponde ao coeficiente de variação.' },
      { letra: 'D', texto: 'O produto entre a variância e o tamanho da amostra.', comentario: 'Incorreta. Esse cálculo não corresponde à definição do coeficiente de variação, que é a razão entre desvio padrão e média.' }
    ],
    gabarito: 'A',
    justificativa: 'O coeficiente de variação (CV) é calculado pela razão entre o desvio padrão e a média (CV = desvio padrão / média), geralmente expresso em percentual, permitindo comparar a dispersão relativa de conjuntos de dados com médias distintas.'
  },
  {
    id: 'estat_9',
    disciplina: 'estatistica',
    topico: 'Distribuição de Frequência',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Em uma tabela de distribuição de frequência, a "frequência relativa" de uma classe representa:',
    alternativas: [
      { letra: 'A', texto: 'A proporção (ou percentual) de observações daquela classe em relação ao total de observações.' },
      { letra: 'B', texto: 'O número absoluto de observações que pertencem à classe.', comentario: 'Incorreta. O número absoluto de observações corresponde à FREQUÊNCIA ABSOLUTA, e não à frequência relativa.' },
      { letra: 'C', texto: 'A soma acumulada das frequências até aquela classe.', comentario: 'Incorreta. A soma acumulada corresponde à FREQUÊNCIA ACUMULADA, conceito distinto da frequência relativa.' },
      { letra: 'D', texto: 'O ponto médio do intervalo de classe.', comentario: 'Incorreta. O ponto médio do intervalo é usado em cálculos como a média de dados agrupados, mas não é a definição de frequência relativa.' }
    ],
    gabarito: 'A',
    justificativa: 'A frequência relativa expressa a proporção (ou percentual) de observações de uma classe em relação ao total, sendo calculada pela divisão da frequência absoluta da classe pelo número total de observações.'
  },
  {
    id: 'estat_10',
    disciplina: 'estatistica',
    topico: 'Correlação',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'O coeficiente de correlação linear entre duas variáveis, quando próximo de +1, indica que:',
    alternativas: [
      { letra: 'A', texto: 'As variáveis apresentam forte associação linear positiva (quando uma aumenta, a outra tende a aumentar).' },
      { letra: 'B', texto: 'Não existe qualquer relação entre as variáveis.', comentario: 'Incorreta. A ausência de relação linear é indicada por um coeficiente próximo de ZERO, e não próximo de +1.' },
      { letra: 'C', texto: 'As variáveis apresentam forte associação linear negativa.', comentario: 'Incorreta. A forte associação linear negativa é indicada por um coeficiente próximo de -1, e não de +1.' },
      { letra: 'D', texto: 'Uma das variáveis necessariamente causa a outra.', comentario: 'Incorreta. Correlação não implica causalidade: mesmo uma correlação forte não permite concluir, por si só, que uma variável causa a outra.' }
    ],
    gabarito: 'A',
    justificativa: 'O coeficiente de correlação linear varia de -1 a +1. Valores próximos de +1 indicam forte associação linear positiva; valores próximos de -1 indicam forte associação linear negativa; valores próximos de 0 indicam ausência de associação linear. Correlação não implica necessariamente relação de causalidade.'
  },
  {
    id: 'estat_11',
    disciplina: 'estatistica',
    topico: 'Medidas de Tendência Central - Moda',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Em um conjunto de dados no qual nenhum valor se repete, pode-se afirmar que esse conjunto:',
    alternativas: [
      { letra: 'A', texto: 'É amodal, ou seja, não possui moda.' },
      { letra: 'B', texto: 'Possui necessariamente duas modas (é bimodal).', comentario: 'Incorreta. A ausência de repetição de valores não gera bimodalidade; ao contrário, torna o conjunto amodal, sem nenhuma moda.' },
      { letra: 'C', texto: 'Tem moda igual à média aritmética.', comentario: 'Incorreta. Sem repetição de valores, não há moda definida; a média aritmética é uma medida distinta que não substitui a ausência de moda.' },
      { letra: 'D', texto: 'Tem moda igual ao maior valor do conjunto.', comentario: 'Incorreta. A moda é o valor de maior frequência; sem repetições, não existe valor de maior frequência, tornando o conjunto amodal.' }
    ],
    gabarito: 'A',
    justificativa: 'Quando nenhum valor se repete em um conjunto de dados, diz-se que o conjunto é amodal, pois não há valor de maior frequência que caracterize uma moda.'
  },
  {
    id: 'estat_12',
    disciplina: 'estatistica',
    topico: 'Representação Gráfica - Histograma',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O histograma é um tipo de gráfico estatístico utilizado principalmente para representar:',
    alternativas: [
      { letra: 'A', texto: 'A distribuição de frequências de uma variável quantitativa contínua, agrupada em classes ou intervalos.' },
      { letra: 'B', texto: 'A evolução de uma variável ao longo do tempo, em sequência cronológica.', comentario: 'Incorreta. A evolução temporal de uma variável é tipicamente representada por um gráfico de linhas (série temporal), e não por um histograma.' },
      { letra: 'C', texto: 'A participação percentual de categorias em relação ao total, em formato circular.', comentario: 'Incorreta. A participação percentual de categorias em formato circular é representada pelo gráfico de setores (gráfico de pizza), e não pelo histograma.' },
      { letra: 'D', texto: 'A comparação de duas variáveis qualitativas por meio de barras sobrepostas coloridas apenas.', comentario: 'Incorreta. Essa descrição não corresponde à finalidade principal do histograma, que representa a distribuição de frequências de uma variável quantitativa contínua.' }
    ],
    gabarito: 'A',
    justificativa: 'O histograma representa graficamente a distribuição de frequências de uma variável quantitativa contínua, organizada em classes (intervalos), por meio de barras contíguas cuja área é proporcional à frequência de cada classe.'
  },
  {
    id: 'estat_13',
    disciplina: 'estatistica',
    topico: 'Medidas de Tendência Central - Média Aritmética',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Um servidor registrou o número de ocorrências atendidas em 5 dias: 8, 10, 12, 6, 14. A média aritmética simples dessas observações é:',
    alternativas: [
      { letra: 'A', texto: '10.' },
      { letra: 'B', texto: '12.', comentario: 'Incorreta. A soma dos valores é 50, e dividindo por 5 observações obtém-se 10, e não 12.' },
      { letra: 'C', texto: '8.', comentario: 'Incorreta. 8 é apenas o menor valor da série (mínimo), não a média aritmética do conjunto.' },
      { letra: 'D', texto: '14.', comentario: 'Incorreta. 14 é o maior valor da série (máximo), não a média aritmética do conjunto.' }
    ],
    gabarito: 'A',
    justificativa: 'A média aritmética simples é a soma dos valores dividida pela quantidade de observações: (8+10+12+6+14)/5 = 50/5 = 10.'
  },
  {
    id: 'estat_14',
    disciplina: 'estatistica',
    topico: 'Medidas de Tendência Central - Mediana',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Considere o conjunto de dados, já ordenado: 3, 5, 7, 9, 20. A mediana desse conjunto é:',
    alternativas: [
      { letra: 'A', texto: '7, pois é o valor central da série ordenada com número ímpar de observações.' },
      { letra: 'B', texto: '8,8, calculado pela média aritmética de todos os valores.', comentario: 'Incorreta. 8,8 é a média aritmética do conjunto, e não a mediana — a mediana é o valor central da série ordenada, não uma média de todos os valores.' },
      { letra: 'C', texto: '20, o maior valor da série.', comentario: 'Incorreta. A mediana é o valor CENTRAL da série ordenada (posição do meio), e não o maior valor.' },
      { letra: 'D', texto: '3, o menor valor da série.', comentario: 'Incorreta. A mediana é o valor central da série ordenada, e não o menor valor.' }
    ],
    gabarito: 'A',
    justificativa: 'Com número ímpar de observações (5), a mediana é o valor que ocupa a posição central da série já ordenada: 3, 5, [7], 9, 20 — portanto, 7. Diferente da média, a mediana não é sensível a valores extremos (outliers), como o 20 desta série.'
  },
  {
    id: 'estat_15',
    disciplina: 'estatistica',
    topico: 'Medidas de Tendência Central - Mediana com Número Par de Elementos',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Em um conjunto de dados ordenado com número PAR de observações, a mediana é calculada:',
    alternativas: [
      { letra: 'A', texto: 'Pela média aritmética dos dois valores centrais da série ordenada.' },
      { letra: 'B', texto: 'Pelo valor que se repete com maior frequência na série.', comentario: 'Incorreta. Essa é a definição de MODA, e não de mediana.' },
      { letra: 'C', texto: 'Sempre pelo primeiro valor da série ordenada, independentemente da quantidade de elementos.', comentario: 'Incorreta. A mediana depende da posição central da série, não do primeiro valor, seja a quantidade de elementos par ou ímpar.' },
      { letra: 'D', texto: 'Pela soma de todos os valores da série dividida pelo maior valor observado.', comentario: 'Incorreta. Essa operação não corresponde a nenhuma medida estatística padrão; a mediana com número par de elementos é a média dos dois valores centrais.' }
    ],
    gabarito: 'A',
    justificativa: 'Quando o número de observações é par, não existe um único valor central — a mediana é definida como a média aritmética dos dois valores que ocupam as posições centrais da série ordenada. Ex.: em 2, 4, 6, 8, os dois centrais são 4 e 6, e a mediana é (4+6)/2 = 5.'
  },
  {
    id: 'estat_16',
    disciplina: 'estatistica',
    topico: 'Medidas Separatrizes - Quartis',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Sobre os quartis de uma distribuição de dados, é correto afirmar que:',
    alternativas: [
      { letra: 'A', texto: 'Dividem a série ordenada em 4 partes com aproximadamente igual número de observações, sendo o segundo quartil (Q2) equivalente à mediana.' },
      { letra: 'B', texto: 'Dividem a série em 100 partes iguais, sendo cada uma chamada de quartil.', comentario: 'Incorreta. Dividir a série em 100 partes iguais é a definição de PERCENTIS, e não de quartis, que dividem a série em apenas 4 partes.' },
      { letra: 'C', texto: 'São aplicáveis exclusivamente a variáveis qualitativas nominais.', comentario: 'Incorreta. Quartis (e demais separatrizes) são aplicados a variáveis quantitativas ordenáveis, e não a variáveis qualitativas nominais.' },
      { letra: 'D', texto: 'O primeiro quartil (Q1) é sempre igual à média aritmética da série.', comentario: 'Incorreta. Q1 corresponde ao valor abaixo do qual estão 25% das observações, não sendo, em regra, igual à média aritmética da série.' }
    ],
    gabarito: 'A',
    justificativa: 'Os quartis dividem a série de dados ordenada em 4 partes de aproximadamente igual número de observações: Q1 (25% dos dados abaixo), Q2 (50% dos dados abaixo — coincide com a mediana) e Q3 (75% dos dados abaixo). A diferença Q3-Q1 é chamada de amplitude interquartil, usada para identificar outliers.'
  },
  {
    id: 'estat_17',
    disciplina: 'estatistica',
    topico: 'Probabilidade Básica - Conceito e Regra da Adição',
    peso: 2,
    dificuldade: 'medio',
    enunciado: 'Em um sorteio com eventos mutuamente exclusivos A e B, a probabilidade de ocorrer A OU B é dada por:',
    alternativas: [
      { letra: 'A', texto: 'P(A ou B) = P(A) + P(B), pois eventos mutuamente exclusivos não podem ocorrer simultaneamente.' },
      { letra: 'B', texto: 'P(A ou B) = P(A) × P(B), independentemente de os eventos serem mutuamente exclusivos.', comentario: 'Incorreta. A multiplicação de probabilidades (regra do "E") aplica-se a eventos independentes ocorrendo simultaneamente, não à ocorrência de "A ou B" entre eventos mutuamente exclusivos.' },
      { letra: 'C', texto: 'P(A ou B) = P(A) + P(B) + P(A e B), mesmo quando A e B são mutuamente exclusivos.', comentario: 'Incorreta. A soma do termo de interseção P(A e B) só é necessária quando os eventos NÃO são mutuamente exclusivos; para eventos mutuamente exclusivos, P(A e B) = 0, então a fórmula geral se reduz a P(A) + P(B).' },
      { letra: 'D', texto: 'P(A ou B) = 1, sempre que A e B forem mutuamente exclusivos.', comentario: 'Incorreta. A probabilidade de "A ou B" não é necessariamente 1; é igual à soma das probabilidades individuais de A e B, que pode ser qualquer valor entre 0 e 1.' }
    ],
    gabarito: 'A',
    justificativa: 'Para eventos mutuamente exclusivos (que não podem ocorrer ao mesmo tempo, ou seja, a interseção é vazia), a probabilidade da união é a soma das probabilidades individuais: P(A ou B) = P(A) + P(B). A fórmula geral P(A ou B) = P(A) + P(B) - P(A e B) se reduz a essa forma porque P(A e B) = 0 nesse caso.'
  },
  {
    id: 'estat_18',
    disciplina: 'estatistica',
    topico: 'Probabilidade Básica - Eventos Independentes e Regra da Multiplicação',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Uma moeda honesta é lançada duas vezes, de forma independente. A probabilidade de sair "cara" nos dois lançamentos é:',
    alternativas: [
      { letra: 'A', texto: '1/4, pois P(cara e cara) = P(cara) × P(cara) = 1/2 × 1/2.' },
      { letra: 'B', texto: '1/2, pois basta somar a probabilidade de cada lançamento individual.', comentario: 'Incorreta. A soma das probabilidades (1/2 + 1/2 = 1) se aplica à regra do "ou" para eventos mutuamente exclusivos, não à ocorrência simultânea ("e") de eventos independentes, que exige multiplicação.' },
      { letra: 'C', texto: '1, pois a moeda é honesta e os lançamentos são independentes.', comentario: 'Incorreta. Independência não garante certeza (probabilidade 1); a probabilidade conjunta de dois eventos independentes é o produto das probabilidades individuais, não necessariamente 1.' },
      { letra: 'D', texto: '1/2 × 2 = 1, pois há dois lançamentos.', comentario: 'Incorreta. Não se multiplica a probabilidade por número de lançamentos dessa forma; a regra correta para eventos independentes ocorrendo simultaneamente é multiplicar as probabilidades individuais: 1/2 × 1/2 = 1/4.' }
    ],
    gabarito: 'A',
    justificativa: 'Para eventos independentes, a probabilidade de ambos ocorrerem é o produto das probabilidades individuais: P(cara no 1º) × P(cara no 2º) = 1/2 × 1/2 = 1/4.'
  },
  {
    id: 'estat_19',
    disciplina: 'estatistica',
    topico: 'Tipos de Amostragem - Por Conglomerados (Clusters)',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Na amostragem por conglomerados (clusters), o procedimento consiste em:',
    alternativas: [
      { letra: 'A', texto: 'Dividir a população em grupos heterogêneos internamente (conglomerados), sortear alguns desses grupos e pesquisar todos (ou parte) dos elementos dos grupos sorteados.' },
      { letra: 'B', texto: 'Dividir a população em estratos homogêneos internamente e sortear elementos proporcionalmente dentro de cada estrato.', comentario: 'Incorreta. Essa é a definição de amostragem ESTRATIFICADA, e não por conglomerados — na estratificada, os grupos (estratos) são homogêneos internamente; na por conglomerados, os grupos tendem a ser heterogêneos internamente.' },
      { letra: 'C', texto: 'Selecionar um elemento inicial aleatório e, a partir dele, escolher os demais em intervalos regulares fixos.', comentario: 'Incorreta. Essa é a definição de amostragem SISTEMÁTICA, e não por conglomerados.' },
      { letra: 'D', texto: 'Atribuir a cada elemento da população a mesma probabilidade de seleção individual, sorteando diretamente pessoas sem formar grupos.', comentario: 'Incorreta. Essa é a definição de amostragem ALEATÓRIA SIMPLES; na amostragem por conglomerados, sorteiam-se GRUPOS (conglomerados) inteiros, não indivíduos isoladamente.' }
    ],
    gabarito: 'A',
    justificativa: 'Na amostragem por conglomerados, a população é dividida em grupos (conglomerados) que são, idealmente, heterogêneos internamente e semelhantes entre si — como bairros ou delegacias. Sorteiam-se alguns desses conglomerados, e todos (ou uma amostra) dos elementos dentro deles são pesquisados. É útil quando não há uma lista completa de todos os elementos da população, mas há uma lista dos grupos.'
  },
  {
    id: 'estat_20',
    disciplina: 'estatistica',
    topico: 'Assimetria de Distribuições',
    peso: 2,
    dificuldade: 'dificil',
    enunciado: 'Em uma distribuição de frequências com assimetria positiva (à direita), a relação usual entre média, mediana e moda é:',
    alternativas: [
      { letra: 'A', texto: 'Média > Mediana > Moda.' },
      { letra: 'B', texto: 'Moda > Mediana > Média.', comentario: 'Incorreta. Essa ordem corresponde à assimetria NEGATIVA (à esquerda), e não à assimetria positiva.' },
      { letra: 'C', texto: 'Média = Mediana = Moda, independentemente do tipo de assimetria.', comentario: 'Incorreta. A igualdade entre as três medidas ocorre em distribuições SIMÉTRICAS (como a normal), e não em distribuições assimétricas.' },
      { letra: 'D', texto: 'Mediana > Média > Moda.', comentario: 'Incorreta. Essa ordem não corresponde ao padrão usual de nenhum dos dois tipos clássicos de assimetria (positiva ou negativa).' }
    ],
    gabarito: 'A',
    justificativa: 'Em distribuições com assimetria positiva (cauda mais longa à direita), a média é "puxada" pelos valores extremos maiores, ficando com o maior valor das três medidas, seguida da mediana e, por último, a moda: Média > Mediana > Moda. Na assimetria negativa, a relação se inverte.'
  }
];
