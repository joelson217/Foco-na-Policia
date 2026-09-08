// ============================================================
// VISUAIS_HTML_PMPE — Flashcards visuais exclusivos da PMPE
// (Polícia Militar de PE), renderizados como cartões HTML/CSS (não
// imagens PNG) diretamente por VISUAL_FLASHCARDS em js/app.js.
// Conteúdo já verificado direto no texto oficial da Lei 6.783/1974
// (Alepe Legis, id=1032) — mesma fonte usada em
// data/questions_legislacao_pmpe.js e data/lei_seca_pmpe.js.
// ============================================================

const VISUAIS_HTML_PMPE = [
  {
    id: 'pmpe_vis_1',
    titulo: 'Hierarquia e Disciplina',
    icon: '⚖️',
    cor: '#3b82f6',
    fonte: 'Art. 12 da Lei 6.783/1974 (Estatuto dos PMs de PE)',
    secoes: [
      {
        subtitulo: 'Base Institucional (caput)',
        itens: ['Hierarquia e disciplina são a base institucional da PM', 'Autoridade e responsabilidade crescem com o grau hierárquico']
      },
      {
        subtitulo: 'Hierarquia (§1º)',
        itens: ['Ordenação de autoridade em níveis diferentes', 'Por postos ou graduações', 'Dentro do mesmo posto/graduação: por antiguidade']
      },
      {
        subtitulo: 'Disciplina (§2º)',
        itens: ['Rigorosa observância e acatamento integral das normas', 'Perfeito cumprimento do dever por todos']
      },
      {
        subtitulo: 'Abrangência (§3º)',
        itens: ['Vale para ativa, reserva remunerada e reformados', 'Em todas as circunstâncias da vida']
      }
    ]
  },
  {
    id: 'pmpe_vis_2',
    titulo: 'Círculos Hierárquicos',
    icon: '🎖️',
    cor: '#3b82f6',
    fonte: 'Arts. 13-14 da Lei 6.783/1974',
    secoes: [
      {
        subtitulo: 'Finalidade (Art. 13)',
        itens: ['Espírito de camaradagem entre a mesma categoria', 'Sem prejuízo do respeito mútuo']
      },
      {
        subtitulo: 'Círculo de Oficiais (Art. 14)',
        itens: ['Superiores: Coronel, Tenente-Coronel, Major', 'Intermediários: Capitão', 'Subalternos: 1º e 2º Tenente']
      },
      {
        subtitulo: 'Círculo de Praças (Art. 14)',
        itens: ['Subtenentes e Sargentos', 'Cabos e Soldados']
      },
      {
        subtitulo: 'Praças Especiais',
        itens: ['Aspirante-a-Oficial PM: frequenta o Círculo de Oficiais', 'Aluno-Oficial PM: acesso só excepcional/social']
      }
    ]
  },
  {
    id: 'pmpe_vis_3',
    titulo: 'Deveres e Direitos',
    icon: '📋',
    cor: '#3b82f6',
    fonte: 'Arts. 30 e 49 da Lei 6.783/1974',
    secoes: [
      {
        subtitulo: 'Deveres (Art. 30)',
        itens: ['Dedicação integral e fidelidade à instituição', 'Culto aos símbolos nacionais', 'Probidade e lealdade em todas as circunstâncias', 'Disciplina e respeito à hierarquia', 'Cumprimento rigoroso de obrigações e ordens', 'Tratar o subordinado dignamente e com urbanidade']
      },
      {
        subtitulo: 'Direitos (Art. 49)',
        itens: ['Garantia de patente', 'Estabilidade (praça com 10 anos de serviço)', 'Uso das designações hierárquicas', 'Remuneração e pensão policial-militar', 'Promoção', 'Porte de arma']
      }
    ]
  },
  {
    id: 'pmpe_vis_4',
    titulo: 'Crime x Transgressão e Conselhos',
    icon: '⚠️',
    cor: '#3b82f6',
    fonte: 'Arts. 40, 47 e 48 da Lei 6.783/1974',
    secoes: [
      {
        subtitulo: 'Crime Militar x Transgressão (Art. 40)',
        itens: ['Violação de dever/obrigação = crime ou transgressão', 'Conforme legislação/regulamentação peculiares', 'Crime militar → Código Penal Militar', 'Transgressão → normas regulamentares disciplinares']
      },
      {
        subtitulo: 'Conselho de Justificação (Art. 47)',
        itens: ['Aplica-se ao OFICIAL presumivelmente incapaz', 'Julgamento final: Tribunal de Justiça do Estado']
      },
      {
        subtitulo: 'Conselho de Disciplina (Art. 48)',
        itens: ['Aplica-se ao Aspirante-a-Oficial e praças estáveis', 'Julgamento final: Comandante-Geral da PM']
      }
    ]
  },
  {
    id: 'pmpe_vis_5',
    titulo: 'Prerrogativas, Agregação e Desligamento',
    icon: '📌',
    cor: '#3b82f6',
    fonte: 'Arts. 68, 75 e 81-85 da Lei 6.783/1974',
    secoes: [
      {
        subtitulo: 'Prerrogativas (Art. 68)',
        itens: ['Honras, dignidades e distinções do posto/graduação', 'Uso de títulos, uniformes, distintivos, insígnias e emblemas']
      },
      {
        subtitulo: 'Agregação (Art. 75)',
        itens: ['PM da ativa fica sem número na escala hierárquica', 'Não abre vaga, nem para promoção']
      },
      {
        subtitulo: 'Ausência, Desaparecimento, Extravio (Arts. 81, 83-84)',
        itens: ['Ausente: +24h sem comparecer ou sem licença', 'Desaparecido: +8 dias com paradeiro ignorado', 'Extraviado: desaparecimento por +30 dias']
      },
      {
        subtitulo: 'Desligamento do Serviço Ativo (Art. 85)',
        itens: ['Reserva remunerada, reforma, demissão', 'Perda de posto e patente, licenciamento', 'Exclusão a bem da disciplina, deserção, falecimento, extravio']
      }
    ]
  }
];
