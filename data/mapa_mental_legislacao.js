// ============================================================
// MAPA_MENTAL_LEGISLACAO.JS — Mapas mentais (visão consolidada) das leis
// de "Legislação Específica" — a disciplina de MAIOR peso do edital
// (20 questões, 40 pontos, peso 2) e que não tinha nenhum mapa mental
// visual (a pasta FlashCards/ só cobre Direito Penal e LEP).
//
// Cada card resume 1 lei inteira em estrutura de ramos (like a mind map):
// conceito central -> sujeitos -> penas -> pontos que mais caem em prova.
// Usa o mesmo formato de deck do lei_seca.js para plugar no app sem
// mudanças na lógica de renderização.
// ============================================================

const MAPA_MENTAL_LEGISLACAO = {
  decks: [
    {
      id: 'mapa_legislacao_especifica',
      disciplina: 'legislacao',
      nome: '🧠 Mapa Mental — Legislação Específica (visão geral)',
      sigla: 'Resumo das 8 leis mais cobradas',
      icon: '🧠',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '💀 Lei 8.072/90 — Crimes Hediondos',
          artigos: [
            { id: 'mm_hed', artigo: 'Mapa Mental', titulo: 'Estrutura da Lei', frente: 'Monte o mapa mental da Lei de Crimes Hediondos', verso:
              '🎯 CENTRO: Lei 8.072/90\n' +
              '├─ ROL TAXATIVO: homicídio qualificado (sempre), feminicídio (Art. 121-A, crime autônomo desde a Lei 14.994/2024), homicídio simples em grupo de extermínio, lesão gravíssima/morte contra agente de segurança, latrocínio, extorsão qualificada por morte, extorsão mediante sequestro, estupro e estupro de vulnerável, epidemia com morte, falsificação de remédios, favorecimento da prostituição de vulnerável, genocídio, mutilação genital, furto qualificado pelo emprego de explosivo (Art. 155, §4º-A CP), posse/porte de arma de fogo de uso restrito ou proibido (Lei 13.497/2017)\n' +
              '├─ REGIME INICIAL: fechado (não é mais obrigatório integralmente após a Lei 13.964/19, mas é regra para a maioria)\n' +
              '├─ PROGRESSÃO DE REGIME: 40% se primário / 60% se reincidente (Art. 112, LEP — combinar sempre com LEP!)\n' +
              '├─ LIVRAMENTO CONDICIONAL: exige 2/3 da pena, VEDADO a reincidente específico\n' +
              '├─ FIANÇA/GRAÇA/ANISTIA/INDULTO: INSUSCETÍVEIS (proibidos)\n' +
              '└─ PEGADINHA CLÁSSICA: tráfico, tortura e terrorismo são "equiparados a hediondo" mas NÃO estão dentro da Lei 8.072 — são leis próprias!',
              cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '💊 Lei 11.343/06 — Lei de Drogas',
          artigos: [
            { id: 'mm_drogas', artigo: 'Mapa Mental', titulo: 'Estrutura da Lei', frente: 'Monte o mapa mental da Lei de Drogas', verso:
              '🎯 CENTRO: Lei 11.343/06\n' +
              '├─ ART. 28 (USUÁRIO): porte para consumo pessoal — SEM prisão. Penas: advertência, prestação de serviços à comunidade, medida educativa\n' +
              '├─ ART. 33 (TRÁFICO): reclusão de 5 a 15 anos + multa. Critérios p/ diferenciar de usuário: natureza/quantidade, local, circunstâncias, conduta e antecedentes\n' +
              '├─ ART. 33, §4º (TRÁFICO PRIVILEGIADO): réu primário, bons antecedentes, não integra organização criminosa, não se dedica a atividades criminosas → causa de DIMINUIÇÃO de 1/6 a 2/3\n' +
              '├─ ART. 33, §2º (TRÁFICO INTERNACIONAL/TRANSNACIONAL): pena de 10 a 20 anos\n' +
              '├─ ART. 35 (ASSOCIAÇÃO): 2 ou + pessoas de forma reiterada/estável, pena de 3 a 10 anos\n' +
              '├─ ART. 40 (CAUSAS DE AUMENTO): 1/6 a 2/3 — ex: transnacionalidade, envolvimento de criança/adolescente, nas proximidades de escolas/quartéis/hospitais\n' +
              '└─ PEGADINHA CLÁSSICA: tráfico é crime EQUIPARADO a hediondo, mas insuscetível de liberdade provisória com fiança (a proibição de liberdade provisória SEM fiança foi declarada inconstitucional pelo STF)',
              cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] }
          ]
        },
        {
          titulo: '⛓️ Lei 9.455/97 — Lei de Tortura',
          artigos: [
            { id: 'mm_tortura', artigo: 'Mapa Mental', titulo: 'Estrutura da Lei', frente: 'Monte o mapa mental da Lei de Tortura', verso:
              '🎯 CENTRO: Lei 9.455/97\n' +
              '├─ ART. 1º, I: constranger com violência/grave ameaça para obter informação/confissão, provocar ação/omissão criminosa, ou por discriminação racial/religiosa\n' +
              '├─ ART. 1º, II: submeter alguém sob guarda/poder/autoridade a sofrimento físico/mental como forma de aplicar castigo pessoal ou medida preventiva\n' +
              '├─ SUJEITO ATIVO: crime comum (QUALQUER pessoa pode cometer, não só agente público — diferente do que muita gente acha!)\n' +
              '├─ SUJEITO ATIVO AGENTE PÚBLICO: causa de AUMENTO de 1/6 a 1/3 (não é elementar do tipo)\n' +
              '├─ PENA BASE: reclusão de 2 a 8 anos\n' +
              '├─ EQUIPARADO A HEDIONDO: sim — mesmas restrições (fiança/graça/anistia/indulto vedados)\n' +
              '├─ REGIME: inicial fechado; PERDA do cargo/função/emprego público é EFEITO AUTOMÁTICO da condenação (Art. 1º, §5º)\n' +
              '└─ PEGADINHA CLÁSSICA: se resultar lesão grave, pena de 4 a 10 anos; se resultar morte, 8 a 16 anos (são qualificadoras, não causas de aumento)',
              cobrado: 'hot', anos: ['2024', '2023'] }
          ]
        },
        {
          titulo: '👊 Lei 11.340/06 — Lei Maria da Penha',
          artigos: [
            { id: 'mm_mp', artigo: 'Mapa Mental', titulo: 'Estrutura da Lei', frente: 'Monte o mapa mental da Lei Maria da Penha', verso:
              '🎯 CENTRO: Lei 11.340/06\n' +
              '├─ ÂMBITOS DE VIOLÊNCIA (Art. 5º): unidade doméstica, família, qualquer relação íntima de afeto (INDEPENDE de coabitação!)\n' +
              '├─ 5 FORMAS DE VIOLÊNCIA (Art. 7º): física, psicológica, sexual, patrimonial, moral\n' +
              '├─ MEDIDAS PROTETIVAS DE URGÊNCIA (Art. 22-24): afastamento do lar, proibição de aproximação/contato, suspensão de posse de arma — juiz decide em 48h\n' +
              '├─ PRAZO PARA MEDIDAS: autoridade policial remete expediente em 48h ao juiz; juiz decide em até 48h\n' +
              '├─ ATUALIZAÇÃO (Lei 13.827/2019, Art. 12-C): em caráter excepcional e provisório, quando houver risco atual/iminente, o afastamento do agressor do lar pode ser decretado pelo DELEGADO (onde não houver comarca) ou por POLICIAL (na ausência de delegado), com comunicação ao juiz em 24h — não é mais atribuição exclusiva do juiz\n' +
              '├─ NÃO cabe: aplicação de penas de cesta básica ou outras de prestação pecuniária, nem substituição de pena por multa isolada (Art. 17)\n' +
              '├─ NÃO se aplica Lei 9.099/95 (Juizados Especiais) aos crimes da Lei Maria da Penha (Art. 41)\n' +
              '└─ PEGADINHA CLÁSSICA: retratação da vítima só é aceita em audiência especial perante o juiz, antes do recebimento da denúncia, ouvido o MP (Art. 16)',
              cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '🔫 Lei 10.826/03 — Estatuto do Desarmamento',
          artigos: [
            { id: 'mm_ed', artigo: 'Mapa Mental', titulo: 'Estrutura da Lei', frente: 'Monte o mapa mental do Estatuto do Desarmamento', verso:
              '🎯 CENTRO: Lei 10.826/03\n' +
              '├─ ART. 12: posse irregular de arma de fogo de uso permitido (dentro de casa/local de trabalho) — detenção 1 a 3 anos\n' +
              '├─ ART. 14: porte ilegal de arma de fogo de uso permitido (fora de casa) — reclusão 2 a 4 anos\n' +
              '├─ ART. 16: posse OU porte de arma de uso restrito/proibido — reclusão 3 a 6 anos (pena maior!)\n' +
              '├─ ART. 16, §único: causas de aumento — arma com numeração raspada, adquirida de forma criminosa, arma de uso restrito adaptada\n' +
              '├─ ATENÇÃO: NEM TODOS os crimes desta lei têm o mesmo tratamento — apenas os Arts. 16, 17 e 18 (uso restrito, comércio ilegal e tráfico internacional de arma) são insuscetíveis de liberdade provisória (Art. 21); os Arts. 12 e 14 (posse/porte de uso permitido) NÃO têm essa restrição. E o Art. 16 (posse/porte de arma de uso restrito ou proibido) É EQUIPARADO A HEDIONDO desde a Lei 13.497/2017 — pegadinha clássica\n' +
              '└─ PEGADINHA CLÁSSICA: posse (dentro de casa/trabalho) x porte (fora) mudam completamente o artigo e a pena — cai muito em prova',
              cobrado: 'hot', anos: ['2023', '2022'] }
          ]
        },
        {
          titulo: '🕸️ Lei 12.850/13 — Organizações Criminosas',
          artigos: [
            { id: 'mm_orgcrim', artigo: 'Mapa Mental', titulo: 'Estrutura da Lei', frente: 'Monte o mapa mental da Lei de Organizações Criminosas', verso:
              '🎯 CENTRO: Lei 12.850/13\n' +
              '├─ CONCEITO (Art. 1º, §1º): associação de 4 ou + pessoas, estruturalmente ordenada, com divisão de tarefas, para obter vantagem mediante infrações com pena máxima > 4 anos ou de caráter transnacional\n' +
              '├─ PENA (Art. 2º): reclusão de 3 a 8 anos + multa, sem prejuízo das penas dos crimes praticados\n' +
              '├─ CAUSAS DE AUMENTO: uso de arma de fogo, participação de criança/adolescente, concurso com funcionário público, produto do crime destinado ao exterior\n' +
              '├─ MEIOS DE OBTENÇÃO DE PROVA (Art. 3º): colaboração premiada, captação ambiental, ação controlada, infiltração de agentes, acesso a dados/registros\n' +
              '├─ INFILTRAÇÃO DE AGENTES: autorizada pelo juiz, prazo de até 6 meses (renovável, sem prazo máximo definido na lei)\n' +
              '└─ PEGADINHA CLÁSSICA: a lei exige 4 OU MAIS pessoas — associação com 2 ou 3 pessoas pode configurar outro crime (ex: associação para o tráfico, art. 35 da Lei de Drogas), não organização criminosa',
              cobrado: 'hot', anos: ['2024', '2022'] }
          ]
        },
        {
          titulo: '👮 Lei 13.869/19 — Abuso de Autoridade',
          artigos: [
            { id: 'mm_abuso', artigo: 'Mapa Mental', titulo: 'Estrutura da Lei', frente: 'Monte o mapa mental da Lei de Abuso de Autoridade', verso:
              '🎯 CENTRO: Lei 13.869/19\n' +
              '├─ SUJEITO ATIVO: agente público (servidor ou não) que exerce função pública, ainda que transitoriamente ou sem remuneração\n' +
              '├─ ELEMENTO SUBJETIVO ESPECIAL (Art. 1º, §1º): exige DOLO ESPECÍFICO — capricho, satisfação pessoal ou finalidade sectária/discriminatória. Divergência de interpretação da lei ou erro não configura abuso\n' +
              '├─ AÇÃO PENAL: pública incondicionada\n' +
              '├─ PRINCIPAIS CONDUTAS: prisão em desacordo com a lei, execução de mandado após revogação, constrangimento à autoincriminação, divulgação de imagem de preso sem autorização\n' +
              '├─ EFEITOS DA CONDENAÇÃO: perda do cargo/mandato/função e inabilitação para exercício de função pública por 1 a 5 anos (não são automáticos, exigem fundamentação e motivação específica na sentença)\n' +
              '└─ PEGADINHA CLÁSSICA: a lei substitui a antiga Lei 4.898/65 e é bem mais restritiva — simples excesso ou erro sem dolo específico NÃO é crime',
              cobrado: 'hot', anos: ['2024', '2023', '2021'] }
          ]
        },
        {
          titulo: '💣 Lei 13.260/16 — Antiterrorismo',
          artigos: [
            { id: 'mm_terror', artigo: 'Mapa Mental', titulo: 'Estrutura da Lei', frente: 'Monte o mapa mental da Lei Antiterrorismo', verso:
              '🎯 CENTRO: Lei 13.260/16\n' +
              '├─ CONCEITO (Art. 2º): atos por xenofobia/discriminação/preconceito de raça, cor, etnia, religião ou procedência nacional, com finalidade de provocar terror, expondo a perigo pessoa/patrimônio/paz pública\n' +
              '├─ PENA BASE: reclusão de 12 a 30 anos\n' +
              '├─ SE RESULTA MORTE: reclusão de 24 a 30 anos\n' +
              '├─ ORGANIZAÇÃO TERRORISTA (Art. 3º): reclusão de 5 a 8 anos\n' +
              '├─ FINANCIAMENTO (Art. 9º): reclusão de 15 a 30 anos\n' +
              '├─ EXCLUSÃO EXPRESSA (Art. 2º, §2º): manifestações políticas, movimentos sociais/sindicais/religiosos/de classe defendendo direitos constitucionais NÃO são terrorismo\n' +
              '└─ PEGADINHA CLÁSSICA: a lei é MUITO específica sobre não criminalizar protesto social — é o ponto mais cobrado dessa lei em prova',
              cobrado: 'hot', anos: ['2024'] }
          ]
        },
        {
          titulo: '📊 Quadro-Resumo — Penas Mínimas (decoreba rápida)',
          artigos: [
            { id: 'mm_quadro', artigo: 'Revisão Relâmpago', titulo: 'Compare as penas mínimas', frente: 'Ordene da menor para a maior pena mínima de reclusão entre as leis específicas', verso:
              'Organização Criminosa (Art. 2º, L. 12.850): 3 anos\n' +
              'Estatuto do Desarmamento posse arma restrita (Art. 16): 3 anos\n' +
              'Tortura simples (Art. 1º, L. 9.455): 2 anos\n' +
              'Tráfico de Drogas (Art. 33, L. 11.343): 5 anos\n' +
              'Tráfico Internacional (Art. 33, §2º): 10 anos\n' +
              'Terrorismo (Art. 2º, §1º, L. 13.260): 12 anos\n' +
              'Financiamento ao Terrorismo (Art. 9º): 15 anos\n' +
              '💡 Truque: quanto mais a conduta ameaça a coletividade (terrorismo > tráfico internacional > tráfico > organização criminosa), maior a pena mínima.',
              cobrado: 'medium', anos: ['2023'] }
          ]
        }
      ]
    }
  ]
};
