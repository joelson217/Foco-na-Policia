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
      { "letra": "A", "texto": "2 a 4 anos de reclusão e multa" },
      { "letra": "B", "texto": "4 a 6 anos de reclusão e multa" },
      { "letra": "C", "texto": "6 a 8 anos de reclusão e multa" },
      { "letra": "D", "texto": "8 a 12 anos de reclusão e multa" }
    ],
    "gabarito": "A",
    "artigo": "Art. 121, caput",
    "justificativa": "O homicídio simples tem pena de reclusão de 2 a 4 anos, além de multa, conforme art. 121, caput, do Código Penal."
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
      { "letra": "A", "texto": "Liberdade de expressão" },
      { "letra": "B", "texto": "Direito à vida" },
      { "letra": "C", "texto": "Liberdade de locomoção" },
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
      { "letra": "B", "texto": "excessão" },
      { "letra": "C", "texto": "exceçâo" },
      { "letra": "D", "texto": "excessão" }
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
