const LEI_SECA_PREMIUM_8 = {
  decks: [
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
              texto: '📌 RACISMO (Lei 7.716/89):\n- Conduta genérica/coletiva (discriminar grupo racial);\n- Imprescritível e inafiançável (CF/88, art. 5º, XLII);\n- Ação Penal Pública Incondicionada.\n\n📌 INJÚRIA RACIAL (Lei 7.716/89, art. 2º-A, incluído pela Lei 14.532/2023):\n- Conduta específica/individual (ofender a dignidade de alguém por raça, cor, etnia ou procedência nacional);\n- Desde a Lei 14.532/2023, foi EQUIPARADA ao racismo: também é imprescritível e inafiançável;\n- Pena: reclusão de 2 a 5 anos e multa;\n- Também é Ação Penal Pública Incondicionada.',
              destaques: ['racismo = crime genérico e imprescritível', 'injúria racial (Lei 14.532/2023) = agora também imprescritível e inafiançável', 'ambos são ação penal pública incondicionada']
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
