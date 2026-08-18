// ============================================================
// LEI_SECA_LICITACOES_14133.JS — Lei 14.133/2021 (Nova Lei de Licitações)
// Revogou integralmente a Lei 8.666/93 (revogação plena em 30/12/2023).
// É a lei em vigor e a que efetivamente cai em provas de 2025/2026 —
// antes só havia uma menção solta de 1 linha a essa lei no app.
// ============================================================

const LEI_SECA_LICITACOES_14133 = {
  decks: [
    {
      id: 'lei_licitacoes_14133',
      disciplina: 'administrativo',
      nome: 'Lei 14.133/21 - Nova Lei de Licitações',
      sigla: 'Lei 14.133/2021',
      icon: '📋',
      destaque: true,
      peso: 1,
      secoes: [
        {
          titulo: '🎯 Modalidades de Licitação — 🔥 MUITO COBRADO',
          artigos: [
            { id: 'll_modalidades', artigo: 'Art. 28', titulo: 'As 5 modalidades atuais', frente: 'Quais são as modalidades de licitação na Lei 14.133/21?', verso:
              'PREGÃO — bens e serviços comuns, critério menor preço ou maior desconto.\n' +
              'CONCORRÊNCIA — obras, serviços especiais e compras em geral (substituiu concorrência+tomada de preços+convite da lei antiga).\n' +
              'CONCURSO — escolha de trabalho técnico, científico ou artístico, com prêmio ao vencedor.\n' +
              'LEILÃO — venda de bens públicos inservíveis ou apreendidos.\n' +
              'DIÁLOGO COMPETITIVO — modalidade NOVA, para contratações complexas em que a Administração dialoga com licitantes pré-selecionados para desenvolver soluções.\n\n' +
              '⚠️ NÃO EXISTEM MAIS: convite e tomada de preços (extintas pela nova lei).',
              cobrado: 'hot', anos: ['2024', '2023'] }
          ]
        },
        {
          titulo: '⚖️ Critérios de Julgamento',
          artigos: [
            { id: 'll_julgamento', artigo: 'Art. 33', titulo: 'Critérios de julgamento das propostas', frente: 'Quais são os critérios de julgamento previstos na Lei 14.133/21?', verso: 'Menor preço; maior desconto; melhor técnica ou conteúdo artístico; técnica e preço; maior lance (leilão); e maior retorno econômico (para contratos de eficiência).', cobrado: 'medium', anos: ['2023'] }
          ]
        },
        {
          titulo: '🚫 Contratação Direta: Dispensa e Inexigibilidade',
          artigos: [
            { id: 'll_dispensa', artigo: 'Art. 75', titulo: 'Dispensa de Licitação', frente: 'O que caracteriza a dispensa de licitação?', verso: 'Há viabilidade de competição, mas a lei dispensa o procedimento por razões de valor (contratações de pequeno valor), emergência, guerra, ou outras hipóteses taxativas do Art. 75 — a licitação SERIA possível, mas o legislador optou por dispensá-la.', cobrado: 'hot', anos: ['2024', '2022'] },
            { id: 'll_inexigibilidade', artigo: 'Art. 74', titulo: 'Inexigibilidade de Licitação', frente: 'O que caracteriza a inexigibilidade de licitação?', verso: 'Há INVIABILIDADE de competição — não existe possibilidade de disputa. Ex: fornecedor exclusivo, contratação de profissional de notória especialização, serviços artísticos com artista consagrado. Rol EXEMPLIFICATIVO (diferente da dispensa, que é taxativa).', cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '📐 Princípios da Nova Lei (Art. 5º)',
          artigos: [
            { id: 'll_principios', artigo: 'Art. 5º', titulo: 'Princípios expressos', frente: 'Quais princípios a Lei 14.133/21 acrescentou em relação à Lei 8.666/93?', verso: 'Além dos clássicos (legalidade, impessoalidade, moralidade, publicidade, eficiência), o Art. 5º acrescentou expressamente: interesse público, probidade administrativa, planejamento, transparência, eficácia, segregação de funções, motivação, segurança jurídica, razoabilidade, competitividade, proporcionalidade, celeridade, economicidade e desenvolvimento nacional sustentável.', cobrado: 'medium', anos: ['2023'] }
          ]
        },
        {
          titulo: '📝 Contratos Administrativos',
          artigos: [
            { id: 'll_prazo', artigo: 'Art. 105-106', titulo: 'Duração dos Contratos', frente: 'Qual a regra geral de duração dos contratos administrativos na nova lei?', verso: 'Regra geral: até 5 anos. Contratos de serviços e fornecimentos contínuos podem ter vigência de até 10 anos, mediante demonstração de vantagem econômica.', cobrado: 'medium', anos: ['2022'] },
            { id: 'll_pcasso', artigo: 'Art. 6º, XL', titulo: 'PCA - Plano de Contratações Anual', frente: 'O que é o PCA?', verso: 'Documento que consolida as contratações que o órgão pretende realizar ou prorrogar no exercício subsequente, dando previsibilidade e permitindo o planejamento centralizado das compras públicas.', cobrado: 'baixo', anos: [] }
          ]
        }
      ]
    }
  ]
};
