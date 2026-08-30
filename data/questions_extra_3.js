// data/questions_extra_3.js
// Added 3 extra questions as requested by the user.

const QUESTIONS_EXTRA_3 = [
  {
    "id": "extra_1",
    "disciplina": "penal",
    "topico": "Homicídio Simples",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Qual a pena prevista para homicídio simples conforme o Código Penal brasileiro?",
    "alternativas": [
      { "letra": "A", "texto": "2 a 4 anos de reclusão", "comentario": "Incorreta. Essa faixa é muito inferior à pena efetivamente cominada ao homicídio simples pelo Código Penal." },
      { "letra": "B", "texto": "4 a 6 anos de reclusão", "comentario": "Incorreta. Essa faixa é inferior à pena efetivamente cominada ao homicídio simples pelo Código Penal." },
      { "letra": "C", "texto": "6 a 20 anos de reclusão" },
      { "letra": "D", "texto": "8 a 12 anos de reclusão e multa", "comentario": "Incorreta. O intervalo de pena não corresponde ao previsto no art. 121, caput, e o homicídio simples não comina pena de multa." }
    ],
    "gabarito": "C",
    "artigo": "Art. 121, caput",
    "justificativa": "O homicídio simples tem pena de reclusão de 6 (seis) a 20 (vinte) anos, conforme art. 121, caput, do Código Penal (não há cominação de pena de multa nessa modalidade)."
  },
  {
    "id": "extra_2",
    "disciplina": "constitucional",
    "topico": "Direitos Fundamentais",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Qual direito fundamental garante o livre exercício de qualquer trabalho, ofício ou profissão?",
    "alternativas": [
      { "letra": "A", "texto": "Liberdade de expressão", "comentario": "Incorreta. A liberdade de expressão (art. 5º, IV e IX) protege a manifestação do pensamento, não o exercício de trabalho ou profissão." },
      { "letra": "B", "texto": "Direito à vida", "comentario": "Incorreta. O direito à vida (art. 5º, caput) é distinto da garantia de livre exercício profissional." },
      { "letra": "C", "texto": "Liberdade de locomoção", "comentario": "Incorreta. A liberdade de locomoção (art. 5º, XV) trata do direito de ir e vir, não do exercício profissional." },
      { "letra": "D", "texto": "Liberdade de exercício profissional" }
    ],
    "gabarito": "D",
    "artigo": "Art. 5º, caput",
    "justificativa": "O inciso XIII do art. 5º da Constituição Federal assegura a livre iniciativa e o livre exercício profissional."
  },
  {
    "id": "extra_3",
    "disciplina": "portugues",
    "topico": "Ortografia",
    "peso": 1,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Qual a forma correta: 'exceção' ou 'excessão'?",
    "alternativas": [
      { "letra": "A", "texto": "exceção" },
      { "letra": "B", "texto": "excessão", "comentario": "Incorreta. A grafia com dois \"s\" não existe na norma culta; o correto é \"exceção\", com ç." },
      { "letra": "C", "texto": "exceçâo", "comentario": "Incorreta. O acento correto sobre o \"a\" final é o til (ã), e não o circunflexo (â): a forma correta é \"exceção\"." },
      { "letra": "D", "texto": "excessão", "comentario": "Incorreta. A grafia com dois \"s\" não existe na norma culta; o correto é \"exceção\", com ç." }
    ],
    "gabarito": "A",
    "artigo": "Gramática normativa",
    "justificativa": "A forma correta, de acordo com a ortografia atual, é 'exceção'."
  }
];

// Expose globally if needed
if (typeof window !== "undefined") {
  window.QUESTIONS_EXTRA_3 = QUESTIONS_EXTRA_3;
}
