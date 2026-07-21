const LEI_SECA_PREMIUM_8 = {
  decks: [
    {
      id: 'desarmamento',
      disciplina: 'legislacao',
      nome: 'Estatuto do Desarmamento',
      sigla: 'Lei 10.826/2003',
      icon: '🔫',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Crimes e Penas',
          artigos: [
            {
              numero: 'Art. 12 (Posse Ilegal)',
              texto: 'Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, ou, ainda no seu local de trabalho, desde que seja o titular ou o responsável legal do estabelecimento ou empresa:\nPena: detenção de 1 a 3 anos e multa.\n\n⚠️ Posse = arma DENTRO de casa ou trabalho (próprio).',
              destaques: ['posse = dentro de casa/trabalho', 'arma de uso permitido', 'detenção 1 a 3 anos']
            },
            {
              numero: 'Art. 14 (Porte Ilegal)',
              texto: 'Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, ceder, ainda que gratuitamente, emprestar, remeter, empregar, manter sob guarda ou ocultar arma de fogo, acessório ou munição, de uso permitido, sem autorização e em desacordo com determinação legal ou regulamentar:\nPena: reclusão de 2 a 4 anos e multa.\n\n⚠️ Porte = arma FORA de casa (em via pública etc.).',
              destaques: ['porte = fora de casa', 'arma de uso permitido', 'reclusão 2 a 4 anos', 'crime permanente']
            },
            {
              numero: 'Art. 16 (Arma de Uso Restrito/Proibido)',
              texto: 'Possuir, deter, portar, adquirir, fornecer, receber, ter em depósito, transportar, ceder, emprestar, remeter, empregar, manter sob guarda ou ocultar arma de fogo, acessório ou munição de USO PROIBIDO ou RESTRITO:\nPena: reclusão de 3 a 6 anos e multa.\n\n⚠️ Exemplos de uso restrito: fuzil, submetralhadora, pistola de alto calibre.',
              destaques: ['arma de uso PROIBIDO ou RESTRITO', 'reclusão 3 a 6 anos', 'pena maior que porte permitido']
            },
            {
              numero: 'Art. 17 (Comércio Ilegal)',
              texto: 'Adquirir, alugar, receber, transportar, conduzir, ocultar, ter em depósito, desmontar, montar, remontar, adulterar, modificar ou fabricar arma de fogo, acessório ou munição, DE USO PERMITIDO, sem autorização e em desacordo com norma legal:\nPena: reclusão de 4 a 8 anos e multa.',
              destaques: ['comércio ilegal de arma de uso permitido', 'reclusão 4 a 8 anos']
            },
            {
              numero: 'Art. 18 (Tráfico Internacional)',
              texto: 'Importar, exportar, favorecer a entrada ou saída do território nacional, a qualquer título, de arma de fogo, acessório ou munição, SEM AUTORIZAÇÃO da autoridade competente:\nPena: reclusão de 4 a 8 anos e multa.',
              destaques: ['importar/exportar arma', 'sem autorização', 'reclusão 4 a 8 anos']
            }
          ]
        }
      ]
    },
    {
      id: 'racismo',
      disciplina: 'legislacao',
      nome: 'Lei de Racismo',
      sigla: 'Lei 7.716/89',
      icon: '✊',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Definição e Crimes',
          artigos: [
            {
              numero: 'Art. 1º (Definição)',
              texto: 'Serão punidos, na forma desta Lei, os crimes resultantes de discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional.\n\n⚠️ ATENÇÃO: A Lei 7.716/89 NÃO abrange discriminação por orientação sexual (que é crime de injúria racial pelo CP).',
              destaques: ['raça', 'cor', 'etnia', 'religião', 'procedência nacional', 'NÃO inclui orientação sexual']
            },
            {
              numero: 'Art. 20 (Praticar, Induzir ou Incitar)',
              texto: 'Praticar, induzir ou incitar a discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional:\nPena: reclusão de 2 a 5 anos e multa.\n§ 2º - Se qualquer dos crimes for cometido por intermédio dos meios de comunicação social ou publicação de qualquer natureza:\nPena: reclusão de 2 a 5 anos e proibição de veicular a mensagem.',
              destaques: ['praticar, induzir ou incitar', 'reclusão 2 a 5 anos', 'crime agravado por meios de comunicação']
            }
          ]
        },
        {
          titulo: 'Diferença: Racismo x Injúria Racial',
          artigos: [
            {
              numero: 'Racismo vs Injúria Racial',
              texto: '📌 RACISMO (Lei 7.716/89):\n- Conduta genérica/coletiva (discriminar grupo racial);\n- Imprescritível e inafiançável (CF/88, art. 5º, XLII);\n- Ação Penal Pública Incondicionada.\n\n📌 INJÚRIA RACIAL (CP, art. 140, §3º):\n- Conduta específica/individual (ofender alguém por raça);\n- Prescritível e afiançável;\n- Também é Ação Penal Pública Incondicionada (desde 2023).',
              destaques: ['racismo = crime genérico e imprescritível', 'injúria racial = crime individual e prescritível', 'ambos são ação penal pública incondicionada']
            }
          ]
        }
      ]
    },
    {
      id: 'cf88_art5',
      disciplina: 'constitucional',
      nome: 'CF/88 - Direitos Fundamentais (Art. 5º)',
      sigla: 'CF/88 - Art. 5º',
      icon: '📜',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: 'Incisos Mais Cobrados',
          artigos: [
            {
              numero: 'Art. 5º, incisos XI e XII (Inviolabilidades)',
              texto: 'XI - a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de FLAGRANTE DELITO ou DESASTRE, ou para prestar SOCORRO, ou, durante o DIA, por determinação judicial;\n\nXII - é inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e das comunicações telefônicas, SALVO, no último caso, por ordem judicial, nas hipóteses e na forma que a lei estabelecer para fins de investigação criminal ou instrução processual penal.',
              destaques: ['casa inviolável', 'salvo flagrante, desastre ou socorro (dia ou noite)', 'ou durante o DIA por ordem judicial', 'sigilo telefônico quebrado só por ordem judicial']
            },
            {
              numero: 'Art. 5º, incisos XLII a XLIV (Crimes)',
              texto: 'XLII - a prática do RACISMO constitui crime inafiançável e imprescritível;\n\nXLIII - a prática de TORTURA, o tráfico ilícito de entorpecentes, o TERRORISMO e os definidos como crimes HEDIONDOS por eles respondem os mandantes, executores e quem omitir quando podendo evitar. São inafiançáveis e insuscetíveis de graça ou anistia;\n\nXLIV - constitui crime inafiançável e imprescritível a ação de GRUPOS ARMADOS, civis ou militares, contra a ordem constitucional e o Estado Democrático.',
              destaques: ['racismo = inafiançável e imprescritível', 'tortura, tráfico, terrorismo, hediondos = inafiançáveis (mas prescritíveis!)', 'grupos armados = inafiançável e imprescritível']
            },
            {
              numero: 'Art. 5º, LXI a LXVI (Prisão)',
              texto: 'LXI - ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente;\n\nLXII - a prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada;\n\nLXV - a prisão ilegal será imediatamente relaxada pela autoridade judiciária;\n\nLXVI - ninguém será levado à prisão ou nela mantido quando a lei admitir a liberdade provisória, com ou sem fiança.',
              destaques: ['só preso em flagrante ou por ordem judicial', 'comunicar ao juiz e família imediatamente', 'prisão ilegal = relaxamento imediato', 'liberdade provisória com ou sem fiança']
            }
          ]
        }
      ]
    }
  ]
};
