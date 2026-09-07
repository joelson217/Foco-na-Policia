// ============================================================
// VISUAIS_HTML_PCPE — Flashcards visuais exclusivos da PCPE
// (Polícia Civil de PE), renderizados como cartões HTML/CSS (não
// imagens PNG) diretamente por VISUAL_FLASHCARDS em js/app.js.
// Conteúdo já verificado nos bancos de questões/lei seca da PCPE
// (data/questions_processual_penal_pcpe.js e data/lei_seca_pcpe.js).
// ============================================================

const VISUAIS_HTML_PCPE = [
  {
    id: 'pcpe_vis_1',
    titulo: 'Cadeia de Custódia da Prova',
    icon: '🔬',
    cor: '#a855f7',
    fonte: 'Arts. 158-A a 158-F do CPP (Pacote Anticrime, Lei 13.964/2019)',
    secoes: [
      {
        subtitulo: 'As 10 Etapas (Art. 158-B)',
        itens: ['1. Reconhecimento', '2. Isolamento', '3. Fixação', '4. Coleta', '5. Acondicionamento', '6. Transporte', '7. Recebimento', '8. Processamento', '9. Armazenamento', '10. Descarte']
      },
      {
        subtitulo: 'Quem Coleta (Art. 158-C)',
        itens: ['Perito oficial, preferencialmente', 'Encaminha à central de custódia']
      },
      {
        subtitulo: 'Central de Custódia (Art. 158-E)',
        itens: ['Criada nos Institutos de Criminalística']
      },
      {
        subtitulo: 'Quebra da Cadeia (STJ)',
        itens: ['Pode comprometer a fidedignidade do vestígio', 'Princípio da mesmidade — análise caso a caso, sem nulidade automática']
      }
    ]
  },
  {
    id: 'pcpe_vis_2',
    titulo: 'Investigação Criminal — Lei 12.830/2013',
    icon: '🕵️',
    cor: '#a855f7',
    fonte: 'Art. 2º da Lei 12.830/2013 e STF, ADI 5.043',
    secoes: [
      {
        subtitulo: 'Natureza (Art. 2º, caput)',
        itens: ['Função jurídica, essencial e exclusiva de Estado']
      },
      {
        subtitulo: 'Condução (Art. 2º, §1º)',
        itens: ['Delegado conduz por inquérito ou outro procedimento legal', 'Objetivo: apurar autoria, materialidade e circunstâncias']
      },
      {
        subtitulo: 'Indiciamento (Art. 2º, §6º)',
        itens: ['Ato PRIVATIVO do delegado', 'Fundamentado, com análise técnico-jurídica', 'Juiz não pode determinar nem impedir']
      },
      {
        subtitulo: '⚠️ Atenção — STF, ADI 5.043',
        itens: ['NÃO exclusividade na CONDUÇÃO da investigação', 'MP, CPIs e outros órgãos também investigam']
      }
    ]
  },
  {
    id: 'pcpe_vis_3',
    titulo: 'Prisão Temporária x Preventiva',
    icon: '⛓️',
    cor: '#ef4444',
    fonte: 'Lei 7.960/1989 e Art. 311-316 do CPP',
    secoes: [
      {
        subtitulo: 'Prisão Temporária (Lei 7.960/89)',
        itens: ['Cabível só na fase de INQUÉRITO', 'Prazo: 5 dias, prorrogável por + 5', 'Hediondos/equiparados: 30 + 30 dias']
      },
      {
        subtitulo: 'Prisão Preventiva (Art. 311-316 CPP)',
        itens: ['Cabível a qualquer momento da investigação/processo', 'Sem prazo fixo — dura enquanto persistir a necessidade', 'Ausentes os requisitos → liberdade provisória (Art. 321)']
      }
    ]
  },
  {
    id: 'pcpe_vis_4',
    titulo: 'Busca e Apreensão Domiciliar',
    icon: '🚪',
    cor: '#0891b2',
    fonte: 'Arts. 240-245 do CPP e Art. 5º, XI, da CF',
    secoes: [
      {
        subtitulo: 'Regra Constitucional (Art. 5º, XI)',
        itens: ['Casa é asilo inviolável', 'Exceções: flagrante, desastre, socorro, ou de dia por ordem judicial']
      },
      {
        subtitulo: 'Mandado (Arts. 241 e 243)',
        itens: ['Exigido quando a autoridade não executa pessoalmente', 'Deve indicar local, morador, motivo e fins da diligência']
      },
      {
        subtitulo: 'Horário (Art. 245)',
        itens: ['De dia, salvo consentimento do morador para à noite']
      }
    ]
  },
  {
    id: 'pcpe_vis_5',
    titulo: 'Medidas Cautelares Diversas da Prisão',
    icon: '📋',
    cor: '#14b8a6',
    fonte: 'Art. 319 do CPP',
    secoes: [
      {
        subtitulo: '9 Medidas do Art. 319',
        itens: ['Comparecimento periódico em juízo', 'Proibição de acesso a certos locais', 'Proibição de contato com pessoas', 'Proibição de ausentar-se da comarca', 'Recolhimento domiciliar noturno', 'Suspensão de função pública/atividade', 'Internação provisória (inimputável)', 'Fiança', 'Monitoração eletrônica']
      },
      {
        subtitulo: 'Critérios (Art. 282)',
        itens: ['Necessidade + Adequação', 'Podem ser aplicadas isolada ou cumulativamente']
      }
    ]
  },
  {
    id: 'pcpe_vis_6',
    titulo: 'Estatuto do Policial Civil de PE',
    icon: '🏛️',
    cor: '#059669',
    fonte: 'Lei 6.425/1972',
    secoes: [
      {
        subtitulo: 'Fundamento (Art. 4º)',
        itens: ['Hierarquia e disciplina', 'Compatibilidade LIMITADA com outras atividades']
      },
      {
        subtitulo: 'Penas Disciplinares (Art. 34) — ordem crescente',
        itens: ['1. Repreensão', '2. Multa', '3. Suspensão', '4. Detenção disciplinar', '5. Destituição de função', '6. Demissão', '7. Cassação de aposentadoria/disponibilidade']
      },
      {
        subtitulo: 'Pensão Especial (Art. 83)',
        itens: ['Morte do servidor em razão da função policial']
      }
    ]
  },
  {
    id: 'pcpe_vis_7',
    titulo: 'LONPC — Lei Orgânica das Polícias Civis',
    icon: '🇧🇷',
    cor: '#f97316',
    fonte: 'Lei 14.735/2023',
    secoes: [
      {
        subtitulo: 'Natureza',
        itens: ['Instituição permanente', 'Função exclusiva e típica de Estado']
      },
      {
        subtitulo: 'Estrutura (Art. 7º)',
        itens: ['Delegacia-Geral', 'Conselho Superior de Polícia Civil (Art. 9º)', 'Corregedoria-Geral (Art. 10º)', 'Escola Superior de Polícia Civil (Art. 11º)']
      },
      {
        subtitulo: 'Delegado-Geral (Art. 8º)',
        itens: ['Nomeado pelo Governador', 'Escolhido entre delegados da classe mais elevada']
      },
      {
        subtitulo: 'Garantias (Art. 30)',
        itens: ['Porte de arma em todo o território nacional, mesmo aposentado', 'Prisão especial em unidade da própria instituição']
      }
    ]
  }
];
