// ============================================================
// LEI_SECA.JS — Conteúdo para Flashcards e Estudo
// Foco: Disciplinas de maior peso (LEP, Leg. Específica, Penal)
// ============================================================

const LEI_SECA = {
  decks: [

    // =============================================
    // LEI DE EXECUÇÃO PENAL (LEP 7.210/84)
    // =============================================
    {
      id: 'lep',
      disciplina: 'lep',
      nome: 'Lei de Execução Penal',
      sigla: 'LEP — Lei 7.210/84',
      icon: '🔒',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '📌 Finalidade e Objetivo da LEP',
          artigos: [
            { id: 'lep_1', artigo: 'Art. 1º', titulo: 'Objetivo da Execução Penal', frente: 'Qual é o objetivo da execução penal segundo o Art. 1º da LEP?', verso: 'Efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado e do internado.', cobrado: 'hot', anos: ['2023', '2022', '2021'] },
            { id: 'lep_2', artigo: 'Art. 2º', titulo: 'Jurisdição da Execução Penal', frente: 'A quem se aplica a LEP?', verso: 'A jurisdição da execução penal será exercida pelo Juiz indicado na lei local de organização judiciária. Aplica-se também ao preso provisório e ao submetido à medida de segurança.', cobrado: 'medium', anos: ['2022'] },
            { id: 'lep_3', artigo: 'Art. 4º', titulo: 'Cooperação da Comunidade', frente: 'Qual o papel da comunidade na execução penal?', verso: 'O Estado deverá recorrer à cooperação da comunidade nas atividades de execução penal.', cobrado: 'medium', anos: ['2021'] }
          ]
        },
        {
          titulo: '🏥 Assistência ao Preso (Art. 10-27) — 🔥 MUITO COBRADO',
          artigos: [
            { id: 'lep_10', artigo: 'Art. 10', titulo: 'Dever do Estado', frente: 'Qual é o dever do Estado quanto à assistência ao preso?', verso: 'A assistência ao preso e ao internado é dever do Estado, objetivando prevenir o crime e orientar o retorno à convivência em sociedade.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021', '2020'] },
            { id: 'lep_11', artigo: 'Art. 11', titulo: 'Tipos de Assistência', frente: 'Quais são os tipos de assistência previstos na LEP?', verso: 'Material, saúde, jurídica, educacional, social e religiosa. (Mnemônico: Ma.Sa.Ju.Ed.So.Re)', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'lep_12', artigo: 'Art. 12-13', titulo: 'Assistência Material', frente: 'O que compreende a assistência material ao preso?', verso: 'Fornecimento de alimentação, vestuário e instalações higiênicas. O estabelecimento disporá de instalações e serviços que atendam aos presos nas suas necessidades pessoais, além de locais destinados à venda de produtos e objetos permitidos e não fornecidos pela Administração.', cobrado: 'hot', anos: ['2023', '2021'] },
            { id: 'lep_14', artigo: 'Art. 14', titulo: 'Assistência à Saúde', frente: 'O que compreende a assistência à saúde do preso?', verso: 'Atendimento médico, farmacêutico e odontológico. Quando o estabelecimento penal não estiver aparelhado para prover a assistência médica necessária, esta será prestada em outro local, mediante autorização da direção do estabelecimento.', cobrado: 'hot', anos: ['2024', '2022', '2020'] },
            { id: 'lep_15', artigo: 'Art. 15-16', titulo: 'Assistência Jurídica', frente: 'Como funciona a assistência jurídica ao preso?', verso: 'Art. 15: A assistência jurídica é destinada aos presos e internados sem recursos financeiros para constituir advogado. Art. 16: As unidades federativas deverão ter serviços de assistência jurídica nos estabelecimentos penais, com a participação da OAB.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'lep_17', artigo: 'Art. 17-21', titulo: 'Assistência Educacional', frente: 'O que prevê a LEP sobre assistência educacional ao preso?', verso: 'Art. 18: O ensino fundamental é obrigatório e integrado ao sistema escolar da unidade federativa. Art. 21: Em atendimento às condições locais, cada estabelecimento terá uma biblioteca, destinada ao lazer cultural e ao aperfeiçoamento de seus conhecimentos.', cobrado: 'hot', anos: ['2022', '2021'] },
            { id: 'lep_22', artigo: 'Art. 22-24', titulo: 'Assistência Social e Religiosa', frente: 'O que compreende a assistência social e religiosa na LEP?', verso: 'Assistência Social (Art. 22): Amparo, preparação para o retorno à liberdade. O serviço social tem por finalidade amparar o preso e o internado. Assistência Religiosa (Art. 24): Exercício da liberdade de crença. Os estabelecimentos destinados às mulheres serão dotados de seção para gestante e parturiente e de creche.', cobrado: 'medium', anos: ['2022', '2021'] },
            { id: 'lep_25', artigo: 'Art. 25-27', titulo: 'Assistência ao Egresso', frente: 'Qual é a duração da assistência ao egresso?', verso: 'A assistência ao egresso consiste em orientação e apoio para reintegrá-lo à vida em liberdade, pelo prazo de 2 (dois) anos a partir da soltura. Egresso: liberado definitivo ou livramento condicional.', cobrado: 'hot', anos: ['2023', '2022', '2020'] }
          ]
        },
        {
          titulo: '⚒️ Trabalho do Preso (Art. 28-37) — 🔥 MUITO COBRADO',
          artigos: [
            { id: 'lep_28', artigo: 'Art. 28', titulo: 'Natureza do Trabalho', frente: 'Qual é a natureza jurídica do trabalho do preso?', verso: 'O trabalho do condenado é um dever social e condição de dignidade humana. Terá finalidade educativa e produtiva. NÃO está sujeito ao regime da CLT.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'lep_29', artigo: 'Art. 29', titulo: 'Remuneração do Trabalho', frente: 'Qual é a remuneração mínima do trabalho do preso?', verso: 'O trabalho do preso será remunerado com não menos de 3/4 (três quartos) do salário mínimo. Destina-se à indenização dos danos causados pelo crime, assistência à família, despesas pessoais, ressarcimento ao Estado e formação de pecúlio (em caso de trabalho externo).', cobrado: 'hot', anos: ['2024', '2023', '2021'] },
            { id: 'lep_31', artigo: 'Art. 31', titulo: 'Obrigatoriedade do Trabalho', frente: 'O trabalho é obrigatório para qual categoria de presos?', verso: 'O condenado à pena privativa de liberdade está obrigado ao trabalho. Para o PRESO PROVISÓRIO: o trabalho não é obrigatório (facultativo).', cobrado: 'hot', anos: ['2023', '2022', '2021'] },
            { id: 'lep_33', artigo: 'Art. 33', titulo: 'Jornada de Trabalho', frente: 'Qual é a jornada de trabalho permitida para o preso?', verso: 'A jornada normal de trabalho não será inferior a 6 (seis) nem superior a 8 (oito) horas, com descanso nos domingos e feriados.', cobrado: 'hot', anos: ['2024', '2022', '2020'] }
          ]
        },
        {
          titulo: '⚠️ Faltas Disciplinares e RDD (Art. 49-60)',
          artigos: [
            { id: 'lep_49', artigo: 'Art. 49', titulo: 'Tipos de Faltas', frente: 'Como são classificadas as faltas disciplinares na LEP?', verso: 'As faltas disciplinares classificam-se em leves, médias e graves. As leves e médias serão definidas pela legislação local. As GRAVES estão previstas na própria LEP.', cobrado: 'hot', anos: ['2023', '2022', '2021'] },
            { id: 'lep_50', artigo: 'Art. 50', titulo: 'Faltas Graves', frente: 'Quais são as principais faltas graves do preso segundo a LEP?', verso: 'Incitar ou participar de movimento para subverter a ordem ou disciplina; fugir; possuir, indevidamente, instrumento capaz de ofender a integridade física de outrem; provocar acidente de trabalho; descumprir, injustificadamente, condição imposta; descumprir proibição específica do art. 52; participar de organização criminosa.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'lep_52', artigo: 'Art. 52', titulo: 'RDD - Regime Disciplinar Diferenciado', frente: 'Quais são as características do RDD?', verso: 'PRAZO: até 2 anos, prorrogável por igual período. RECOLHIMENTO: cela individual. VISITAS: 2 por semana (2 pessoas cada), sem contato físico. BANHO DE SOL: 2 horas por dia. TRABALHO, LAZER E ATIVIDADES EDUCACIONAIS: vedados. Aplica-se ao condenado ou preso provisório que apresentar alto risco.', cobrado: 'hot', anos: ['2024', '2023', '2021'] },
            { id: 'lep_53', artigo: 'Art. 53-54', titulo: 'Sanções Disciplinares', frente: 'Quais são as sanções disciplinares previstas na LEP?', verso: 'Advertência verbal; Repreensão; Suspensão ou restrição de direitos; Isolamento na própria cela ou em local adequado nos estabelecimentos que possuam alojamento coletivo (pelo prazo máximo de 30 dias); Inclusão no RDD.', cobrado: 'medium', anos: ['2022', '2021'] }
          ]
        },
        {
          titulo: '🏢 Estabelecimentos Penais (Art. 82-104)',
          artigos: [
            { id: 'lep_87', artigo: 'Art. 87', titulo: 'Penitenciária', frente: 'Para qual regime destina-se a penitenciária?', verso: 'A penitenciária destina-se ao condenado à pena de reclusão em REGIME FECHADO. O estabelecimento será instalado em local afastado do centro urbano, a distância que não restrinja a visitação.', cobrado: 'hot', anos: ['2023', '2021'] },
            { id: 'lep_93', artigo: 'Art. 93', titulo: 'Colônia Agrícola / Industrial', frente: 'Qual estabelecimento é destinado ao regime semiaberto?', verso: 'A Colônia Agrícola, Industrial ou Similar destina-se ao cumprimento da pena em REGIME SEMIABERTO.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'lep_95', artigo: 'Art. 95', titulo: 'Casa do Albergado', frente: 'A Casa do Albergado destina-se a qual regime?', verso: 'A Casa do Albergado destina-se ao cumprimento de pena privativa de liberdade em REGIME ABERTO e da pena de limitação de fim de semana.', cobrado: 'hot', anos: ['2022', '2021'] },
            { id: 'lep_102', artigo: 'Art. 102', titulo: 'Cadeia Pública', frente: 'A quem se destina a cadeia pública?', verso: 'A cadeia pública destina-se ao recolhimento de presos PROVISÓRIOS (antes do trânsito em julgado da sentença condenatória).', cobrado: 'medium', anos: ['2022'] }
          ]
        },
        {
          titulo: '🚪 Permissão de Saída vs Saída Temporária — 🔥 MAIS COBRADO',
          artigos: [
            { id: 'lep_120', artigo: 'Art. 120-121', titulo: 'Permissão de Saída', frente: 'Quais são os casos de permissão de saída e quem autoriza?', verso: 'AUTORIZA: Diretor do estabelecimento (não é o Juiz!). CASOS: falecimento ou doença grave do cônjuge, companheira, ascendente, descendente ou irmão; e necessidade de tratamento médico. PRAZO: o necessário à finalidade. REGIME: fechado e semiaberto.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'lep_122', artigo: 'Art. 122-125', titulo: 'Saída Temporária', frente: 'Quem autoriza a saída temporária e quais são os requisitos?', verso: 'AUTORIZA: JUIZ da execução (não é o diretor!). REGIME: apenas semiaberto. SEM VIGILÂNCIA DIRETA. REQUISITOS: comportamento adequado; cumprimento de 1/6 da pena (se primário) ou 1/4 (se reincidente); compatibilidade do benefício. PRAZO: 7 dias, podendo ser renovado por mais 4 vezes no mesmo ano (total: 5 saídas/ano = 35 dias). FINALIDADES: visita à família, frequentar curso, participar de atividades que concorram para o retorno ao convívio social.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021', '2020'] }
          ]
        },
        {
          titulo: '⏱️ Remição de Pena (Art. 126-130) — 🔥 MAIS COBRADO',
          artigos: [
            { id: 'lep_126', artigo: 'Art. 126', titulo: 'Remição pelo Trabalho e Estudo', frente: 'Qual é a regra de remição de pena por trabalho e estudo?', verso: 'TRABALHO: a cada 3 dias trabalhados = desconto de 1 dia de pena. ESTUDO: a cada 12 horas de frequência escolar (divididas em no mínimo 3 dias) = desconto de 1 dia de pena. LEITURA: 1 livro por mês = 4 dias de remição (máximo 12 livros por ano = 48 dias). O condenado que cumpre pena em regime aberto ou semiaberto pode remir pelo trabalho e estudo.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021', '2020'] },
            { id: 'lep_127', artigo: 'Art. 127', titulo: 'Perda dos Dias Remidos', frente: 'O que acontece com os dias remidos em caso de falta grave?', verso: 'Em caso de falta grave, o juiz poderá revogar até 1/3 dos dias remidos, observado o disposto no art. 57. A interrupção do período aquisitivo não ocorre automaticamente; é necessária decisão judicial. A revogação não é automática.', cobrado: 'hot', anos: ['2024', '2022', '2021'] },
            { id: 'lep_128', artigo: 'Art. 128', titulo: 'Doença e Remição', frente: 'O que acontece com a remição em caso de doença do preso?', verso: 'O tempo remido será computado como pena cumprida, para todos os efeitos. Em caso de acidente ou doença que impossibilite o trabalho, o período será considerado como de trabalho efetivo para fins de remição.', cobrado: 'medium', anos: ['2021'] }
          ]
        },
        {
          titulo: '📈 Progressão de Regime (Art. 112) — 🔥 MUITO COBRADO',
          artigos: [
            { id: 'lep_112', artigo: 'Art. 112', titulo: 'Progressão de Regime', frente: 'Quais são os percentuais de progressão de regime?', verso: 'REGRA GERAL (primário, crime sem violência): 16% da pena. REINCIDENTE (crime sem violência): 20%. PRIMÁRIO (crime com violência ou ameaça grave): 25%. REINCIDENTE (crime com violência): 30%. CRIME HEDIONDO (primário): 40%. CRIME HEDIONDO (reincidente específico): 60%. NECESSÁRIA: bom comportamento carcerário + requisito temporal.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'lep_118', artigo: 'Art. 118', titulo: 'Regressão de Regime', frente: 'Quais são as causas de regressão de regime?', verso: 'O condenado terá sua pena regredida quando: 1) Praticar fato definido como crime doloso ou falta grave; 2) Sofrer condenação por crime anterior, cuja pena somada, torne incabível o regime atual.', cobrado: 'hot', anos: ['2023', '2021'] }
          ]
        }
      ]
    },

    // =============================================
    // LEI DE CRIMES HEDIONDOS (8.072/90)
    // =============================================
    {
      id: 'hediondos',
      disciplina: 'legislacao',
      nome: 'Lei de Crimes Hediondos',
      sigla: 'Lei 8.072/90',
      icon: '🚨',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '📌 Crimes Hediondos — Rol Taxativo',
          artigos: [
            { id: 'h_1', artigo: 'Art. 1º', titulo: 'Crimes Hediondos', frente: 'Cite os principais crimes hediondos previstos na Lei 8.072/90.', verso: 'Homicídio doloso qualificado; Feminicídio; Latrocínio; Extorsão mediante sequestro; Estupro e estupro de vulnerável; Epidemia com morte; Falsificação de medicamento; Genocídio; Posse/porte de armas de uso restrito; Mutilação genital. EQUIPARADOS: Terrorismo, Tortura, Tráfico de drogas.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'h_2', artigo: 'Art. 2º', titulo: 'Características dos Crimes Hediondos', frente: 'Quais são as características dos crimes hediondos?', verso: 'São INSUSCETÍVEIS de: anistia, graça e indulto; fiança. São INAFIANÇÁVEIS. A pena é cumprida em regime INICIALMENTE FECHADO (salvo condenação a pena diversa de reclusão). Proibição de liberdade provisória com ou sem fiança.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'h_prog', artigo: 'Art. 2º §2º', titulo: 'Progressão de Regime em Crimes Hediondos', frente: 'Quais os percentuais de progressão para crimes hediondos?', verso: 'PRIMÁRIO: 40% da pena. REINCIDENTE ESPECÍFICO (crime hediondo anterior): 60% da pena. PRIMÁRIO COM RESULTADO MORTE: 50%. REINCIDENTE COM RESULTADO MORTE: 70%.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'h_lib_prov', artigo: 'Art. 2º §3º', titulo: 'Livramento Condicional', frente: 'Qual o requisito temporal para livramento condicional em crime hediondo?', verso: 'Em crimes hediondos ou equiparados, o livramento condicional exige o cumprimento de 2/3 (dois terços) da pena e o condenado não pode ser reincidente específico em crimes hediondos ou equiparados.', cobrado: 'hot', anos: ['2024', '2022'] },
            { id: 'h_penas', artigo: 'Art. 1º §1º e §2º', titulo: 'Homicídio — Causas de Aumento', frente: 'Quando o homicídio doloso qualificado é hediondo, o que aumenta a pena?', verso: 'O homicídio doloso qualificado (art. 121, §2º, I, II, III, IV, VI, VII e VIII do CP) é hediondo. As qualificadoras são: motivo torpe, fútil, veneno/fogo/asfixia, traição/emboscada, feminicídio, menor de 14 ou maior de 60 anos/deficiente/gestante. Causas de aumento especial: §7º do art. 121 CP (milícia, grupo extermínio).', cobrado: 'medium', anos: ['2023'] },
            { id: 'h_parag_unico', artigo: 'Art. 1º, Parágrafo Único', titulo: 'Rol Estendido de Crimes Hediondos', frente: 'Quais crimes foram equiparados ou inseridos como hediondos recentemente pela legislação?', verso: 'Furto qualificado pelo emprego de explosivo (Art. 155, § 4º-A CP); Roubo com emprego de arma de fogo ou restrição de liberdade; Organização Criminosa para prática de crime hediondo. ATENÇÃO: O furto de explosivo (roubar o explosivo em si) NÃO é hediondo, apenas o furto COM EMPREGO de explosivo.', cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        }
      ]
    },

    // =============================================
    // LEI DE DROGAS (11.343/06)
    // =============================================
    {
      id: 'drogas',
      disciplina: 'legislacao',
      nome: 'Lei de Drogas',
      sigla: 'Lei 11.343/06',
      icon: '💊',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Uso vs Tráfico — MAIS COBRADO',
          artigos: [
            { id: 'd_28', artigo: 'Art. 28', titulo: 'Usuário de Drogas', frente: 'Qual é a pena para quem porta droga para uso pessoal?', verso: 'NÃO É PRISÃO! As penas são: Advertência sobre os efeitos das drogas; Prestação de serviços à comunidade; Medida educativa de comparecimento a programa. PRAZO: máximo 5 meses (primário) ou 10 meses (reincidente). NÃO há pena privativa de liberdade. A posse para uso pessoal não configura crime, mas a lei não descriminalizou.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'd_33', artigo: 'Art. 33', titulo: 'Tráfico de Drogas', frente: 'Qual é a pena para o crime de tráfico de drogas?', verso: 'Pena: reclusão de 5 a 15 anos, mais multa. Verbos: importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo, ou fornecer drogas.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'd_33_p4', artigo: 'Art. 33 §4º', titulo: 'Tráfico Privilegiado', frente: 'O que é tráfico privilegiado e qual o benefício?', verso: 'Se o agente for primário, de bons antecedentes, não se dedicar às atividades criminosas nem integrar organização criminosa, a pena poderá ser reduzida de 1/6 a 2/3. O STF decidiu (HC 118533) que o tráfico privilegiado NÃO é hediondo.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'd_34', artigo: 'Art. 34', titulo: 'Maquinário para Drogas', frente: 'O que prevê o Art. 34 da Lei de Drogas?', verso: 'Fabricar, adquirir, utilizar, transportar, oferecer, vender, distribuir, entregar a qualquer título, ter em depósito, guardar ou fornecer, mesmo que gratuitamente, maquinário, aparelho, instrumento ou qualquer objeto destinado à fabricação, preparação, produção ou transformação de drogas. Pena: reclusão 3 a 10 anos.', cobrado: 'medium', anos: ['2022'] },
            { id: 'd_35', artigo: 'Art. 35', titulo: 'Associação para o Tráfico', frente: 'O que é o crime de associação para o tráfico (art. 35)?', verso: 'Associar-se DUAS OU MAIS pessoas para a prática reiterada do tráfico (arts. 33 ao 37). Pena: reclusão 3 a 10 anos. DIFERENÇA da organização criminosa (mínimo 4 pessoas).', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'd_44', artigo: 'Art. 44', titulo: 'Inafiançabilidade do Tráfico', frente: 'O crime de tráfico é inafiançável?', verso: 'Sim. Os crimes definidos no art. 33, caput e §1º, e arts. 34 a 37 (tráfico e afins) são INAFIANÇÁVEIS e INSUSCETÍVEIS de sursis, graça, indulto, anistia e liberdade provisória, vedada a conversão de suas penas em restritivas de direito.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'd_40', artigo: 'Art. 40', titulo: 'Causas de Aumento do Tráfico', frente: 'Quais são as principais causas de aumento de pena (1/6 a 2/3) no tráfico de drogas?', verso: 'Transnacionalidade/interestadualidade; Função pública ou emprego em serviço social; Proximidade a escolas, hospitais, teatros ou presídios; Emprego de violência ou arma; Envolvimento ou visando a criança/adolescente.', cobrado: 'hot', anos: ['2024', '2023'] }
          ]
        },
        {
          titulo: '⚠️ Crimes Conexos ao Tráfico',
          artigos: [
            { id: 'd_36', artigo: 'Art. 36', titulo: 'Financiamento ao Tráfico', frente: 'O que é o crime de financiamento ao tráfico?', verso: 'Financiar ou custear a prática de qualquer dos crimes previstos nos arts. 33, caput e §1º, e 34. Pena: reclusão de 8 a 20 anos e pagamento de 1.500 a 4.000 dias-multa.', cobrado: 'hot', anos: ['2023'] },
            { id: 'd_37', artigo: 'Art. 37', titulo: 'Colaborador do Tráfico', frente: 'O que é o crime do art. 37 da Lei de Drogas?', verso: 'Colaborar, como informante, com grupo, organização ou associação destinados à prática de qualquer dos delitos previstos nos arts. 33 ao 37. Pena: reclusão de 2 a 6 anos e pagamento de 300 a 700 dias-multa.', cobrado: 'medium', anos: ['2022'] },
            { id: 'd_45', artigo: 'Art. 45', titulo: 'Excludente em Caso de Dependência', frente: 'O que ocorre quando o traficante é dependente de drogas?', verso: 'Art. 45: O agente dependente de drogas, com perturbação mental, pode ter a pena reduzida ou ser isento de pena, conforme o grau. O juiz ordenará avaliação para atestar a dependência.', cobrado: 'medium', anos: ['2022'] },
            { id: 'd_50', artigo: 'Art. 50, § 1º', titulo: 'Destruição de Drogas Apreendidas', frente: 'Qual o prazo e quem coordena a destruição das drogas apreendidas em flagrante?', verso: 'O delegado de polícia, na presença do Ministério Público e da Vigilância Sanitária, em até 15 dias a contar da lavratura do flagrante (ou em 240 dias se não houver prisão em flagrante, após decisão judicial).', cobrado: 'medium', anos: ['2023', '2022'] }
          ]
        }
      ]
    },

    // =============================================
    // LEI DE TORTURA (9.455/97)
    // =============================================
    {
      id: 'tortura',
      disciplina: 'legislacao',
      nome: 'Lei de Tortura',
      sigla: 'Lei 9.455/97',
      icon: '⛔',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Conceito e Características',
          artigos: [
            { id: 't_1', artigo: 'Art. 1º', titulo: 'Crime de Tortura', frente: 'Quais são os tipos de tortura previstos na Lei 9.455/97?', verso: '1) Constranger alguém com emprego de violência ou grave ameaça causando sofrimento físico ou mental para: obter informação, confissão, aplicar castigo, intimidar, discriminar. Pena: 2 a 8 anos de reclusão. 2) Submeter à intensa sofrimento físico ou mental quem se encontra sob guarda, poder ou autoridade. 3) TORTURA POR OMISSÃO: quem se omite tendo o dever de evitar. Pena: 1 a 4 anos de detenção.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 't_caract', artigo: 'Art. 1º §§3-6', titulo: 'Características da Tortura', frente: 'Quais são as características do crime de tortura?', verso: 'Crime HEDIONDO EQUIPARADO. INAFIANÇÁVEL e INSUSCETÍVEL de graça e anistia. Regime inicialmente FECHADO. Se praticado por agente público: perde o cargo ou função pública após condenação. O condenado terá a condenação COMUNICADA ao órgão a que pertence.', cobrado: 'hot', anos: ['2023', '2022', '2021'] },
            { id: 't_aumento', artigo: 'Art. 1º §4º', titulo: 'Causas de Aumento da Tortura', frente: 'Quais são as causas de aumento de pena na Lei de Tortura?', verso: 'A pena é AUMENTADA de 1/6 a 1/3 se o crime é cometido: por agente público; contra criança, gestante, portador de deficiência, adolescente, idoso; em caso de rapto. Se da tortura resulta LESÃO GRAVE: 4 a 10 anos. Se resulta MORTE: 8 a 16 anos de reclusão.', cobrado: 'hot', anos: ['2024', '2022'] },
            { id: 't_jurisdicao', artigo: 'Art. 1º §5º', titulo: 'Condenação Comunicada', frente: 'Qual o efeito da condenação de agente público por tortura em relação ao cargo?', verso: 'A condenação acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada. ATENÇÃO: Esta perda NÃO é automática — depende de sentença condenatória com esse efeito declarado.', cobrado: 'hot', anos: ['2023', '2022'] }
          ]
        }
      ]
    },

    // =============================================
    // LEI MARIA DA PENHA (11.340/06)
    // =============================================
    {
      id: 'maria_penha',
      disciplina: 'legislacao',
      nome: 'Lei Maria da Penha',
      sigla: 'Lei 11.340/06',
      icon: '👩',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Conceito e Formas de Violência',
          artigos: [
            { id: 'mp_5', artigo: 'Art. 5º', titulo: 'Conceito de Violência Doméstica', frente: 'O que configura violência doméstica e familiar segundo a Lei Maria da Penha?', verso: 'Ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial no âmbito da unidade doméstica; no âmbito da família; em qualquer relação íntima de afeto. INDEPENDE de orientação sexual.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'mp_7', artigo: 'Art. 7º', titulo: 'Formas de Violência', frente: 'Quais são as formas de violência doméstica previstas na LMP?', verso: '1) FÍSICA: ofensa à integridade ou saúde corporal. 2) PSICOLÓGICA: dano emocional, controle, vigilância, humilhação. 3) SEXUAL: conduta que constranja presenciar, manter ou participar de relação sexual. 4) PATRIMONIAL: subtração de bens, valores, recursos. 5) MORAL: calúnia, difamação, injúria.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'mp_41', artigo: 'Art. 41', titulo: 'Não Aplicação da Lei 9.099/95', frente: 'A Lei dos Juizados Especiais (9.099/95) se aplica à violência doméstica?', verso: 'NÃO. Aos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena prevista, NÃO se aplica a Lei nº 9.099/95 (Juizados Especiais). A ação penal é PÚBLICA INCONDICIONADA (Súmula 542 STJ).', cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '🔥 Medidas Protetivas de Urgência — MUITO COBRADO',
          artigos: [
            { id: 'mp_22', artigo: 'Art. 22', titulo: 'Medidas Protetivas ao Agressor', frente: 'Quais medidas protetivas de urgência podem ser impostas ao agressor?', verso: 'Constatada a prática de violência doméstica, o juiz poderá aplicar: suspensão da posse ou restrição do porte de armas; afastamento do lar; proibição de aproximação e contato; restrição ou suspensão de visitas aos dependentes menores; prestação de alimentos provisionais.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'mp_12', artigo: 'Art. 12', titulo: 'Prisão em Flagrante / Ação Policial', frente: 'O que deve fazer a autoridade policial ao registrar caso de violência doméstica?', verso: 'A autoridade policial deverá: garantir proteção à ofendida; colher provas (inclusive o depoimento da vítima e testemunhas); remeter os autos ao juiz em 48 horas; ouvir o agressor; notificar o juiz para as medidas protetivas; acompanhar a mulher ao domicílio para retirada de pertences.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'mp_20', artigo: 'Art. 20', titulo: 'Prisão Preventiva na LMP', frente: 'Cabe prisão preventiva em casos de violência doméstica?', verso: 'Sim. Em qualquer fase do inquérito policial ou da instrução criminal, cabe a prisão preventiva do agressor para garantia da execução das medidas protetivas de urgência. INDEPENDE do quantum de pena cominada ao crime.', cobrado: 'hot', anos: ['2024', '2022'] },
            { id: 'mp_19', artigo: 'Art. 19', titulo: 'Concessão das Medidas Protetivas', frente: 'Quem concede as medidas protetivas e qual o prazo?', verso: 'O juiz concede em 48 horas, ao receber o expediente policial. Pode ser concedida a qualquer hora do dia ou da noite. NÃO depende de audiência das partes nem de manifestação do MP (de forma geral — urgência). O descumprimento das medidas pode ensejar prisão preventiva.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'mp_24a', artigo: 'Art. 24-A', titulo: 'Descumprimento de Medidas Protetivas', frente: 'O que configura o crime do Art. 24-A da Lei Maria da Penha e quais as regras de fiança?', verso: 'Descumprir decisão judicial que defere medidas protetivas de urgência. Pena: detenção de 3 meses a 2 anos. ATENÇÃO: Apenas o JUIZ pode conceder fiança na prisão em flagrante por este crime (o delegado de polícia NÃO tem essa atribuição).', cobrado: 'hot', anos: ['2024', '2023'] }
          ]
        }
      ]
    },

    // =============================================
    // LEI DE ABUSO DE AUTORIDADE (13.869/19)
    // =============================================
    {
      id: 'abuso',
      disciplina: 'legislacao',
      nome: 'Abuso de Autoridade',
      sigla: 'Lei 13.869/19',
      icon: '🚫',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Sujeitos e Elemento Subjetivo',
          artigos: [
            { id: 'ab_1', artigo: 'Art. 1º', titulo: 'Finalidade Específica', frente: 'Qual é o elemento subjetivo especial exigido para o crime de abuso de autoridade?', verso: 'É indispensável a FINALIDADE ESPECÍFICA de: prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou mero capricho/satisfação pessoal. A divergência na interpretação de lei ou avaliação de fatos/provas NÃO configura abuso (crime de hermenêutica).', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'ab_2', artigo: 'Art. 2º', titulo: 'Sujeito Ativo', frente: 'Quem pode cometer crime de abuso de autoridade?', verso: 'Qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional de qualquer dos Poderes, que no exercício de suas funções ou a pretexto de exercê-las, abuse do poder.', cobrado: 'hot', anos: ['2023'] },
            { id: 'ab_3', artigo: 'Art. 3º', titulo: 'Forma de Conduta', frente: 'Como o crime de abuso de autoridade pode ser praticado?', verso: 'O crime pode ser doloso e praticado por AÇÃO ou OMISSÃO. A simples culpa (negligência, imprudência, imperícia) NÃO configura abuso de autoridade — exige dolo e a finalidade especial do art. 1º, §1º.', cobrado: 'medium', anos: ['2023', '2022'] }
          ]
        },
        {
          titulo: '🔥 Penas e Efeitos da Condenação',
          artigos: [
            { id: 'ab_4', artigo: 'Art. 4º', titulo: 'Efeitos da Condenação', frente: 'Quais são os efeitos da condenação por abuso de autoridade?', verso: '1) Indenizar o dano; 2) Inabilitação para exercício de cargo/função (1 a 5 anos); 3) Perda do cargo/função. ATENÇÃO: Os efeitos 2 e 3 NÃO SÃO AUTOMÁTICOS, dependem de motivação no julgamento e de REINCIDÊNCIA em crime de abuso de autoridade.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'ab_5', artigo: 'Art. 5º', titulo: 'Penas Restritivas de Direitos', frente: 'Quais as penas restritivas de direitos substitutivas previstas?', verso: '1) Prestação de serviços à comunidade ou a entidades públicas; 2) Suspensão do exercício do cargo, função ou mandato, pelo prazo de 1 a 6 meses, COM PERDA dos vencimentos e vantagens.', cobrado: 'medium', anos: ['2022', '2021'] },
            { id: 'ab_10', artigo: 'Art. 10', titulo: 'Decretação Ilegal de Prisão', frente: 'Qual é o crime de abuso de autoridade previsto no art. 10?', verso: 'DECRETAR A PRISÃO OU MEDIDA DE PRIVAÇÃO DE LIBERDADE em manifesta desconformidade com a lei. Pena: 1 a 4 anos e multa. Incorre na mesma pena quem ilegalmente PROLONGA a execução de pena privativa de liberdade, medida de segurança ou internação, deixando o preso em situação de apuramento.', cobrado: 'hot', anos: ['2024', '2023'] }
          ]
        }
      ]
    },

    // =============================================
    // ESTATUTO DO DESARMAMENTO (10.826/03)
    // =============================================
    {
      id: 'desarmamento',
      disciplina: 'legislacao',
      nome: 'Estatuto do Desarmamento',
      sigla: 'Lei 10.826/03',
      icon: '🔫',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Posse vs Porte e Crimes',
          artigos: [
            { id: 'des_12', artigo: 'Art. 12 e 14', titulo: 'Posse vs Porte Permitida', frente: 'Qual a diferença entre posse e porte de arma permitida?', verso: 'POSSE (Art. 12): no interior da residência ou local de trabalho (se titular). Pena: Detenção 1 a 3 anos. PORTE (Art. 14): fora de casa/trabalho. Pena: Reclusão 2 a 4 anos.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'des_15', artigo: 'Art. 15', titulo: 'Disparo de Arma de Fogo', frente: 'Quando se configura o crime de disparo de arma de fogo?', verso: 'Disparar arma de fogo em lugar habitado ou via pública, DESDE QUE não tenha finalidade de outro crime (subsidiariedade). Pena: Reclusão 2 a 4 anos.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'des_16', artigo: 'Art. 16', titulo: 'Arma de Uso Restrito', frente: 'Qual o tratamento penal para arma de uso restrito?', verso: 'Posse/porte de uso restrito: Reclusão 3 a 6 anos (CRIME HEDIONDO). Arma com numeração raspada equipara-se a uso restrito.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'des_13', artigo: 'Art. 13', titulo: 'Omissão de Cautela', frente: 'O que é omissão de cautela no Estatuto do Desarmamento?', verso: 'Deixar de observar as cautelas necessárias para impedir que menor de 18 anos ou portador de deficiência mental se apodere de arma de fogo de sua posse. Pena: detenção 1 a 2 anos + multa.', cobrado: 'medium', anos: ['2022'] }
          ]
        }
      ]
    },

    // =============================================
    // LEI ANTICRIME / PROCESSO PENAL
    // =============================================
    {
      id: 'processo_penal',
      disciplina: 'penal',
      nome: 'Processo Penal',
      sigla: 'CPP e Lei Anticrime',
      icon: '📋',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Prisões e Liberdade — MAIS COBRADO',
          artigos: [
            { id: 'pp_302', artigo: 'Art. 302 CPP', titulo: 'Flagrante Delito', frente: 'Quais são as 4 modalidades de flagrante?', verso: '1) PRÓPRIO: está cometendo ou acabou de cometer. 2) IMPRÓPRIO: perseguido logo após. 3) FICTO/PRESUMIDO: encontrado logo depois com instrumentos do crime. 4) PREPARADO/PROVOCADO: induzido pela polícia — é crime impossível, não gera flagrante válido (Súmula 145 STF).', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'pp_306', artigo: 'Art. 306 CPP', titulo: 'Comunicação da Prisão', frente: 'Qual é o prazo e para quem deve ser comunicada a prisão em flagrante?', verso: 'IMEDIATAMENTE ao juiz competente, ao MP e à família do preso (ou pessoa por ele indicada). Em até 24 HORAS: o preso receberá nota da prisão com identificação dos responsáveis, será informado de seus direitos e o auto lavrado será encaminhado ao juiz.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'pp_315', artigo: 'Art. 315 CPP', titulo: 'Motivação da Prisão Preventiva', frente: 'Quais os requisitos para decretação da prisão preventiva?', verso: 'FUMUS BONI IURIS: prova da existência do crime + indício suficiente de autoria. PERICULUM LIBERTATIS: garantia da ordem pública; garantia da ordem econômica; conveniência da instrução criminal; assegurar a aplicação da lei penal. NÃO se admite em crimes com pena máxima igual ou inferior a 4 anos (salvo violência doméstica).', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'pp_321', artigo: 'Art. 321 CPP', titulo: 'Liberdade Provisória', frente: 'Quando o juiz pode conceder liberdade provisória com ou sem fiança?', verso: 'Art. 321: Ausentes os requisitos que autorizam a decretação da prisão preventiva, o juiz DEVERÁ conceder liberdade provisória. Crimes inafiançáveis: racismo, tortura, tráfico, terrorismo, crimes hediondos, ação de grupos armados contra Estado Democrático (art. 5º CF).', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'pp_301', artigo: 'Art. 301 CPP', titulo: 'Quem pode e deve prender', frente: 'Qual a diferença entre flagrante facultativo e flagrante compulsório?', verso: 'Facultativo (qualquer do povo PODE prender) vs Compulsório/Obrigatório (autoridades policiais e seus agentes DEVERÃO prender quem quer que se encontre em flagrante delito).', cobrado: 'hot', anos: ['2024', '2023'] }
          ]
        },
        {
          titulo: '📋 Inquérito Policial — MUITO COBRADO',
          artigos: [
            { id: 'pp_ip1', artigo: 'Art. 4-20 CPP', titulo: 'Inquérito Policial', frente: 'Quais as características do Inquérito Policial?', verso: 'INQUISITÓRIO: não há contraditório pleno. SIGILOSO: não é público (mas o advogado tem acesso — Súmula Vinculante 14). ESCRITO: todos os atos documentados. DISPENSÁVEL: o MP pode oferecer denúncia sem inquérito. INDISPONÍVEL: delegado não pode arquivar (só o juiz, a requerimento do MP).', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'pp_ip2', artigo: 'Art. 10 CPP', titulo: 'Prazo do Inquérito', frente: 'Quais os prazos do inquérito policial?', verso: 'PRESO: 10 dias + 15 dias (prorrogação — Lei de Drogas: 30 dias). SOLTO: 30 dias (prorrogável). Na JUSTIÇA FEDERAL: 15 dias (preso, prorrogável por mais 15) e 30 dias (solto). Findo o prazo, o delegado deverá remeter os autos ao juiz (encerrado ou não).', cobrado: 'hot', anos: ['2023', '2022'] }
          ]
        }
      ]
    },

    // =============================================
    // DIREITO PENAL — MAIS COBRADO
    // =============================================
    {
      id: 'penal',
      disciplina: 'penal',
      nome: 'Direito Penal',
      sigla: 'Código Penal',
      icon: '⚖️',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Excludentes de Ilicitude — MUITO COBRADO',
          artigos: [
            { id: 'cp_23', artigo: 'Art. 23 CP', titulo: 'Excludentes de Ilicitude', frente: 'Quais são as causas excludentes de ilicitude (antijuridicidade)?', verso: 'Não há crime quando o agente pratica o fato: 1) EM ESTADO DE NECESSIDADE; 2) EM LEGÍTIMA DEFESA; 3) EM ESTRITO CUMPRIMENTO DO DEVER LEGAL; 4) NO EXERCÍCIO REGULAR DO DIREITO. O excesso doloso ou culposo é punível.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'cp_24', artigo: 'Art. 24 CP', titulo: 'Estado de Necessidade', frente: 'O que é estado de necessidade?', verso: 'Age em estado de necessidade quem pratica o fato para salvar de perigo atual, que NÃO provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era razoável exigir-se. REQUISITOS: perigo atual, não provocado, inevitável, proporcional.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'cp_25', artigo: 'Art. 25 CP', titulo: 'Legítima Defesa', frente: 'O que é legítima defesa?', verso: 'Age em legítima defesa quem, usando moderadamente dos meios necessários, repele AGRESSÃO INJUSTA, atual ou iminente, a direito seu ou de outrem. REQUISITOS: agressão injusta + atual ou iminente + uso moderado + meios necessários. Cabe legítima defesa contra legítima defesa putativa.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'cp_121', artigo: 'Art. 121, § 2º CP', titulo: 'Homicídio Qualificado', frente: 'Quais circunstâncias qualificam o homicídio (tornando-o hediondo)?', verso: 'Motivo torpe ou fútil; Emprego de veneno, fogo, explosivo, asfixia, tortura; Traição, emboscada; Para assegurar execução/ocultação de outro crime; Feminicídio; Contra autoridade/agente de segurança pública.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'cp_155_4a', artigo: 'Art. 155, § 4º-A CP', titulo: 'Furto Qualificado com Explosivos', frente: 'Qual a qualificadora e a pena do furto praticado com emprego de explosivo?', verso: 'A pena é de reclusão de 4 a 10 anos e multa, se houver emprego de explosivo ou de artefato análogo que cause perigo comum. Esse crime é classificado como HEDIONDO.', cobrado: 'hot', anos: ['2024', '2023'] }
          ]
        },
        {
          titulo: '🔥 Prisão em Flagrante — MAIS COBRADO',
          artigos: [
            { id: 'cpp_302', artigo: 'Art. 302 CPP', titulo: 'Modalidades de Flagrante', frente: 'Quais são as modalidades de flagrante delito?', verso: '1) FLAGRANTE PRÓPRIO (REAL): está cometendo o crime ou acabou de cometê-lo. 2) FLAGRANTE IMPRÓPRIO (QUASE-FLAGRANTE): perseguido logo após o crime por autoridade policial ou qualquer pessoa. 3) FLAGRANTE FICTO (PRESUMIDO): encontrado, logo depois, com instrumentos do crime. 4) FLAGRANTE PREPARADO/PROVOCADO: induzido a praticar o crime (é crime impossível — não permite prisão).', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'cpp_304', artigo: 'Art. 304-306 CPP', titulo: 'Lavratura do Flagrante', frente: 'Qual o prazo para comunicação da prisão em flagrante ao juiz?', verso: 'Art. 306: A prisão de qualquer pessoa e o local onde se encontre serão comunicados IMEDIATAMENTE ao juiz competente, ao Ministério Público e à família do preso ou à pessoa por ele indicada. Em 24 horas o preso será informado de seus direitos e entregue nota da prisão.', cobrado: 'hot', anos: ['2023', '2022'] }
          ]
        },
        {
          titulo: '🔥 Crimes contra a Administração Pública',
          artigos: [
            { id: 'cp_312', artigo: 'Art. 312 CP', titulo: 'Peculato', frente: 'O que caracteriza o crime de peculato?', verso: 'Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo, em proveito próprio ou alheio. Pena: reclusão, 2 a 12 anos. O peculato culposo (quando concorre para crime de outrem) tem pena menor e a reparação do dano até a sentença irrecorrível extingue a punibilidade.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'cp_316', artigo: 'Art. 316 CP', titulo: 'Concussão', frente: 'Como se define o crime de concussão?', verso: 'EXIGIR, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida. Pena: reclusão, 2 a 12 anos e multa.', cobrado: 'hot', anos: ['2023', '2021'] },
            { id: 'cp_317', artigo: 'Art. 317 CP', titulo: 'Corrupção Passiva', frente: 'Qual o verbo principal da corrupção passiva?', verso: 'SOLICITAR ou RECEBER, para si ou para outrem, vantagem indevida, ou ACEITAR promessa de tal vantagem. Pena: reclusão, 2 a 12 anos. Diferença: Concussão exige; Corrupção Passiva solicita, recebe ou aceita promessa.', cobrado: 'hot', anos: ['2024', '2022'] },
            { id: 'cp_330', artigo: 'Art. 330 CP', titulo: 'Desobediência', frente: 'O que caracteriza o crime de desobediência?', verso: 'Desobedecer a ordem legal de funcionário público. Pena: detenção de 15 dias a 6 meses + multa. ATENÇÃO: Se a lei prevê sanção específica para o caso de descumprimento (administrativa ou civil), não se aplica o crime de desobediência (princípio da especialidade).', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'cp_329', artigo: 'Art. 329 CP', titulo: 'Resistência', frente: 'O que é o crime de resistência?', verso: 'Opor-se à execução de ato legal, mediante violência ou ameaça a funcionário competente para executá-lo. Pena: detenção de 2 meses a 2 anos. Se o ato for ilegal, não há crime. Se resultar lesão grave ou morte, as penas se acumulam.', cobrado: 'medium', anos: ['2022', '2021'] }
          ]
        },
        {
          titulo: '⚖️ Extinção da Punibilidade e Prescrição',
          artigos: [
            { id: 'cp_107', artigo: 'Art. 107 CP', titulo: 'Extinção da Punibilidade', frente: 'Quais são as causas de extinção da punibilidade?', verso: 'Morte do agente; Anistia, graça ou indulto; Retroatividade de lei que não mais considera o fato criminoso; Prescrição, decadência ou perempção; Renúncia do direito de queixa ou perdão aceito; Retratação do agente (nos casos permitidos); Perdão judicial.', cobrado: 'hot', anos: ['2023', '2022', '2021'] },
            { id: 'cp_64', artigo: 'Art. 64 CP', titulo: 'Reincidência', frente: 'O que é reincidência e qual o prazo de validade?', verso: 'Reincidência: cometimento de novo crime APÓS trânsito em julgado de sentença condenatória pelo crime anterior. PRAZO: o estado de reincidência dura apenas 5 anos contados a partir do cumprimento ou extinção da pena anterior (período depurador). Após, o agente é tecnicamente primário.', cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        }
      ]
    },

    // =============================================
    // DIREITO CONSTITUCIONAL — SEGURANÇA PÚBLICA
    // =============================================
    {
      id: 'constitucional',
      disciplina: 'constitucional',
      nome: 'Direito Constitucional',
      sigla: 'Constituição Federal/88',
      icon: '📜',
      peso: 1,
      secoes: [
        {
          titulo: '🔥 Art. 144 — Segurança Pública',
          artigos: [
            { id: 'cf_144', artigo: 'Art. 144 CF', titulo: 'Órgãos de Segurança Pública', frente: 'Quais são os órgãos de segurança pública previstos no Art. 144 da CF?', verso: '1) Polícia Federal; 2) Polícia Rodoviária Federal; 3) Polícia Ferroviária Federal; 4) Polícias Civis; 5) Polícias Militares e Corpos de Bombeiros Militares; 6) Polícias Penais Federal, Estaduais e Distrital (incluída pela EC 104/2019); 7) Polícias Militares e Corpos de Bombeiros Militares. Guardas Municipais (art. 144 §8º) não são órgãos de segurança pública em sentido estrito.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'cf_5_xliii', artigo: 'Art. 5º XLIII', titulo: 'Crimes Inafiançáveis', frente: 'Quais crimes são constitucionalmente definidos como inafiançáveis e insuscetíveis de graça?', verso: 'A lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem.', cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '🔥 Art. 5º — Direitos Fundamentais (penalmente relevantes)',
          artigos: [
            { id: 'cf_5_iii', artigo: 'Art. 5º III', titulo: 'Vedação à Tortura', frente: 'O que prevê o Art. 5º, III da CF sobre tortura?', verso: 'Ninguém será submetido a tortura nem a tratamento desumano ou degradante.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'cf_5_xl', artigo: 'Art. 5º XL', titulo: 'Retroatividade da Lei Penal', frente: 'O que estabelece o princípio da retroatividade da lei penal?', verso: 'A lei penal NÃO retroagirá, SALVO para beneficiar o réu. (Lei mais benéfica tem efeito retroativo — lex mitior).', cobrado: 'hot', anos: ['2024', '2022'] },
            { id: 'cf_5_xlvii', artigo: 'Art. 5º XLVII', titulo: 'Penas Vedadas', frente: 'Quais penas são vedadas pela Constituição Federal?', verso: 'NÃO haverá penas: a) de morte, salvo em caso de guerra declarada; b) de caráter perpétuo; c) de trabalhos forçados; d) de banimento; e) cruéis.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'cf_5_lv', artigo: 'Art. 5º LV', titulo: 'Contraditório e Ampla Defesa', frente: 'O que garante o Art. 5º, LV da CF?', verso: 'Aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes. ATENÇÃO: Aplica-se ao processo administrativo disciplinar (PAD).', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'cf_5_xi', artigo: 'Art. 5º XI', titulo: 'Inviolabilidade do Domicílio', frente: 'Quando é permitida a entrada na residência de alguém?', verso: 'A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de: flagrante delito; desastre; para prestar socorro; durante o DIA, por determinação judicial. "Dia" é entendido das 6h às 18h.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'cf_5_lxi', artigo: 'Art. 5º, LXI', titulo: 'Ordem Escrita para Prisão', frente: 'Segundo a CF, em quais condições alguém pode ser preso?', verso: 'Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de transgressão militar ou crime propriamente militar.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'cf_5_lxvii', artigo: 'Art. 5º, LXVII', titulo: 'Prisão Civil por Dívida', frente: 'Quais são as hipóteses constitucionais e o entendimento do STF sobre prisão civil por dívida?', verso: 'Constituição prevê: devedor voluntário/inescusável de alimentos e depositário infiel. Contudo, o STF editou a Súmula Vinculante 25, que proíbe a prisão do depositário infiel. Assim, resta apenas a prisão por alimentos.', cobrado: 'hot', anos: ['2023', '2022'] }
          ]
        },
        {
          titulo: '🔥 Remédios Constitucionais',
          artigos: [
            { id: 'cf_hc', artigo: 'Art. 5º LXVIII', titulo: 'Habeas Corpus', frente: 'Quando cabe Habeas Corpus?', verso: 'Conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer VIOLÊNCIA OU COAÇÃO EM SUA LIBERDADE DE LOCOMOÇÃO, por ilegalidade ou abuso de poder. Cabe PREVENTIVO (salvo-conduto) e REPRESSIVO (liberatório). NÃO cabe para penas de multa (Súmula 693 STF).', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'cf_ms', artigo: 'Art. 5º LXIX', titulo: 'Mandado de Segurança', frente: 'Quando cabe Mandado de Segurança?', verso: 'Para proteger direito líquido e certo não amparado por HC ou HD, quando o responsável pela ilegalidade ou abuso de poder for AUTORIDADE PÚBLICA ou agente de pessoa jurídica no exercício de atribuições do Poder Público. PRAZO: 120 dias para impetrar.', cobrado: 'hot', anos: ['2023', '2022'] }
          ]
        }
      ]
    },

    // =============================================
    // DIREITO ADMINISTRATIVO
    // =============================================
    {
      id: 'administrativo',
      disciplina: 'administrativo',
      nome: 'Direito Administrativo',
      sigla: 'Dir. Administrativo',
      icon: '🏛️',
      peso: 1,
      secoes: [
        {
          titulo: '🔥 Princípios LIMPE — MAIS COBRADO',
          artigos: [
            { id: 'adm_limpe', artigo: 'Art. 37 CF', titulo: 'Princípios da Administração Pública', frente: 'Quais são os princípios constitucionais da administração pública (LIMPE)?', verso: 'LEGALIDADE: Adm. só faz o que a lei autoriza. IMPESSOALIDADE: sem favorecimentos ou perseguições. MORALIDADE: boa-fé, ética e probidade. PUBLICIDADE: divulgação dos atos (transparência). EFICIÊNCIA (EC 19/98): otimização dos recursos.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] },
            { id: 'adm_legalidade', artigo: 'Princípio da Legalidade', titulo: 'Legalidade — Diferença entre Admin. e Particular', frente: 'Qual a diferença da legalidade para o particular e para a Administração Pública?', verso: 'PARTICULAR: pode fazer TUDO que a lei NÃO proíbe. ADMINISTRAÇÃO PÚBLICA: só pode fazer o que a lei PERMITE (expressamente autorizou). Esta é a diferença fundamental do princípio da legalidade administrativa.', cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '🔥 Atos Administrativos — MUITO COBRADO',
          artigos: [
            { id: 'adm_at1', artigo: 'Atributos do Ato Adm.', titulo: 'Atributos dos Atos Administrativos', frente: 'Quais são os atributos (características) dos atos administrativos?', verso: 'PRESUNÇÃO DE LEGITIMIDADE/VERACIDADE: presume-se legal até prova em contrário. IMPERATIVIDADE: impõe-se unilateralmente. AUTOEXECUTORIEDADE: executa-se sem autorização judicial. TIPICIDADE: só os previstos em lei. ATENÇÃO: Nem todos os atos têm todos os atributos (ex: atos enunciativos não têm imperatividade).', cobrado: 'hot', anos: ['2023', '2022', '2021'] },
            { id: 'adm_at2', artigo: 'Elementos do Ato Adm.', titulo: 'Elementos (Requisitos) de Validade', frente: 'Quais são os 5 elementos de validade dos atos administrativos?', verso: 'SUJEITO COMPETENTE + FORMA PRESCRITA OU NÃO DEFESA EM LEI + MOTIVO (causa de fato e de direito) + OBJETO LÍCITO + FINALIDADE PÚBLICA. (Mnemônico: COMOF — COmpetência, Motivo, Objeto, Forma, Finalidade).', cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '🔥 Lei de Improbidade (Lei 8.429/92) — Atualizada',
          artigos: [
            { id: 'imp_1', artigo: 'Art. 1º', titulo: 'Exigência de Dolo', frente: 'Atos de improbidade administrativa admitem a modalidade culposa?', verso: 'NÃO! Após a Lei 14.230/2021, exige-se o DOLO ESPECÍFICO em todos os atos de improbidade. Não existe mais improbidade culposa. Dolo: vontade livre e consciente de alcançar o resultado ilícito, não bastando a voluntariedade.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'imp_9', artigo: 'Art. 9º a 11', titulo: 'Tipos de Atos', frente: 'Quais são os 3 tipos de atos de improbidade previstos?', verso: '1) Enriquecimento ilícito (Art. 9º): auferir vantagem patrimonial (penas mais graves). 2) Lesão ao erário (Art. 10): perda patrimonial, desvio, dilapidação. 3) Atentado contra os princípios (Art. 11): violação de deveres de honestidade, imparcialidade e legalidade (rol taxativo após a reforma).', cobrado: 'hot', anos: ['2023', '2021'] },
            { id: 'imp_sancoes', artigo: 'Art. 12', titulo: 'Sanções por Tipo de Ato', frente: 'Quais as sanções por ato de improbidade?', verso: 'ENRIQUECIMENTO ILÍCITO: perda dos bens, ressarcimento integral, multa de até 3x o valor acrescido, proibição de contratar e receber benefícios por 14 anos, perda da função pública. LESÃO AO ERÁRIO: mesmo + multa 2x o dano. PRINCÍPIOS: multa 24x a remuneração, proibição por 4 anos.', cobrado: 'hot', anos: ['2024', '2023'] }
          ]
        },
        {
          titulo: '🔥 Poderes e Responsabilidade Civil do Estado',
          artigos: [
            { id: 'adm_policia', artigo: 'Poder de Polícia', titulo: 'Atributos e Conceito', frente: 'O que é o Poder de Polícia e quais são seus atributos (DAC)?', verso: 'Atividade da administração de limitar/disciplinar direito, interesse ou liberdade, regulando a prática de ato ou abstenção de fato, em razão de interesse público. Atributos: Discricionariedade, Autoexecutoriedade e Coercibilidade (Mnemônico: DAC).', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'adm_resp_civil', artigo: 'Art. 37, § 6º CF', titulo: 'Responsabilidade Objetiva do Estado', frente: 'Como se caracteriza a responsabilidade civil do Estado?', verso: 'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes causarem a terceiros. A responsabilidade é objetiva (Teoria do Risco Administrativo), cabendo direito de regresso contra o agente em caso de dolo ou culpa.', cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        }
      ]
    },

    // =============================================
    // DIREITOS HUMANOS
    // =============================================
    {
      id: 'dh',
      disciplina: 'dh',
      nome: 'Direitos Humanos',
      sigla: 'Instrumentos Internacionais',
      icon: '🕊️',
      peso: 1,
      secoes: [
        {
          titulo: '🔥 Instrumentos Internacionais — MAIS COBRADO',
          artigos: [
            { id: 'dh_dudh', artigo: 'DUDH/1948', titulo: 'Declaração Universal dos DH', frente: 'Qual é a natureza jurídica da Declaração Universal dos Direitos Humanos (1948)?', verso: 'É uma RESOLUÇÃO da Assembleia Geral da ONU (não é tratado, portanto não é diretamente vinculante). Possui caráter de soft law. Reconhece direitos civis, políticos, econômicos, sociais e culturais. É INDIVISÍVEL, INTERDEPENDENTE e INTER-RELACIONADA.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'dh_mandela', artigo: 'Regras de Mandela (2015)', titulo: 'Regras Mínimas para Tratamento de Presos', frente: 'O que são as Regras de Mandela?', verso: 'São as Regras Mínimas das Nações Unidas para o Tratamento de Reclusos, atualizadas em 2015. Estabelecem padrões mínimos para o tratamento de presos: dignidade, não discriminação, cuidados de saúde, isolamento em cela individual (regra). Proíbem tortura e tratamento degradante.', cobrado: 'hot', anos: ['2023', '2022', '2021'] },
            { id: 'dh_pacto', artigo: 'Pacto de São José (1969)', titulo: 'Convenção Americana de Direitos Humanos', frente: 'O que estabelece o Pacto de São José da Costa Rica sobre pessoas presas?', verso: 'Art. 7: Direito à liberdade pessoal (toda pessoa presa deve ser informada sobre suas acusações; apresentada ao juiz em curto prazo; direito ao habeas corpus). Art. 5: Integridade pessoal (proibição de tortura). A Corte Interamericana de DH julga casos de violação. O Brasil aderiu em 1992.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'dh_mandela_1', artigo: 'Regra 1 de Mandela', titulo: 'Princípio Geral de Tratamento', frente: 'O que estabelece a Regra 1 das Regras de Mandela?', verso: 'Todos os reclusos devem ser tratados com o respeito devido à dignidade e valor inerentes ao ser humano. É proibida a tortura, tratos cruéis, desumanos ou degradantes. A segurança de todos os reclusos deve ser assegurada a todo o tempo.', cobrado: 'hot', anos: ['2024', '2023'] },
            { id: 'dh_pacto_7', artigo: 'Art. 7º Pacto S. José', titulo: 'Direito à Liberdade Pessoal', frente: 'O que prevê o Art. 7º da Convenção Americana sobre direitos de presos?', verso: 'Toda pessoa tem direito à liberdade pessoal. Ninguém pode ser privado de liberdade senão pelas causas e condições fixadas na lei. Qualquer pessoa detida deve ser levada sem demora à presença de um juiz (audiência de custódia).', cobrado: 'hot', anos: ['2024', '2023', '2022'] }
          ]
        },
        {
          titulo: '🔥 Sistemas de Proteção e Características',
          artigos: [
            { id: 'dh_caract', artigo: 'Características dos DH', titulo: 'Características dos Direitos Humanos', frente: 'Quais são as principais características dos direitos humanos?', verso: 'UNIVERSALIDADE: para todos os seres humanos. INDIVISIBILIDADE: não podem ser divididos — civis, políticos, econômicos são igualmente importantes. IMPRESCRITIBILIDADE: não prescrevem. INALIENABILIDADE: não podem ser transferidos. IRRENUNCIABILIDADE: não se pode renunciar. VEDAÇÃO AO RETROCESSO: não podem ser abolidos por tratado.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'dh_sistema', artigo: 'Sistema Interamericano', titulo: 'Corte e Comissão Interamericana', frente: 'Qual a diferença entre a Comissão e a Corte Interamericana de DH?', verso: 'COMISSÃO IDH: recebe petições individuais, faz relatórios e recomendações. Pode encaminhar caso à Corte. CORTE IDH: órgão judicial, julga e emite sentenças vinculantes. O Brasil reconhece a jurisdição obrigatória da Corte IDH (Dec. 4.463/2002). A CORTE emite também OPINIÕES CONSULTIVAS.', cobrado: 'hot', anos: ['2023'] },
            { id: 'dh_trat', artigo: 'Art. 5º §§2º e 3º CF', titulo: 'Hierarquia dos Tratados de DH', frente: 'Qual a hierarquia dos tratados internacionais de direitos humanos?', verso: 'Tratados aprovados com o rito ESPECIAL (3/5 em 2 turnos, em cada casa — art. 5º §3º CF): EQUIVALEM A EMENDA CONSTITUCIONAL. Tratados aprovados pelo rito ORDINÁRIO (maioria simples): têm status SUPRALEGAL (abaixo da CF, acima das leis ordinárias). Ex: Pacto de São José = supralegal.', cobrado: 'hot', anos: ['2024', '2023', '2022', '2021'] }
          ]
        }
      ]
    },

    // =============================================
    // ÉTICA NO SERVIÇO PÚBLICO
    // =============================================
    {
      id: 'etica',
      disciplina: 'etica',
      nome: 'Ética no Serviço Público',
      sigla: 'Dec. 1.171/94',
      icon: '⚖️',
      peso: 1,
      secoes: [
        {
          titulo: '🔥 Código de Ética — MAIS COBRADO',
          artigos: [
            { id: 'e_1', artigo: 'Dec. 1.171/94', titulo: 'Dever do Servidor', frente: 'Quais são os principais deveres éticos do servidor público?', verso: 'Desempenhar suas atribuições com dignidade e decoro; zelar pelo bem-estar dos usuários; manter relações de lealdade com o Poder Público; exercer com eficiência as atribuições do cargo; ser probo e honesto; agir com transparência.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'e_vedacoes', artigo: 'Dec. 1.171/94', titulo: 'Vedações ao Servidor', frente: 'O que é vedado ao servidor público segundo o Código de Ética?', verso: 'É vedado: usar o cargo para obter vantagens pessoais; prejudicar deliberadamente terceiros; dar informações privilegiadas para benefício próprio; tolerar injustiça; intimidar subordinados; servir-se da função para lograr objetivos pessoais; receber vantagem de qualquer natureza.', cobrado: 'hot', anos: ['2022', '2021'] }
          ]
        },
        {
          titulo: '🔥 Comissão de Ética e Processo Disciplinar',
          artigos: [
            { id: 'e_comissao', artigo: 'Dec. 1.171/94 — XIII', titulo: 'Comissão de Ética', frente: 'O que é a Comissão de Ética do servidor público?', verso: 'É o órgão responsável por orientar e aconselhar quanto à ética profissional e apurar transgressões ao Código de Ética. Composta por 3 servidores efetivos. Quando julga procedente a acusação, envia o expediente à autoridade competente para as medidas cabíveis.', cobrado: 'hot', anos: ['2023'] },
            { id: 'e_pad', artigo: 'Lei 8.112/90 — Art. 148', titulo: 'Processo Administrativo Disciplinar (PAD)', frente: 'Qual o rito do PAD na Lei 8.112/90?', verso: '3 fases: 1) INSTAURAÇÃO (portaria da comissão). 2) INQUÉRITO ADMINISTRATIVO (instrução, defesa, relatório). 3) JULGAMENTO (pela autoridade competente). Prazo para conclusão: 60 dias prorrogável por mais 60. O servidor tem direito a advogado e contraditório.', cobrado: 'hot', anos: ['2023', '2022', '2021'] },
            { id: 'e_penas', artigo: 'Lei 8.112/90 — Art. 127', titulo: 'Penalidades Disciplinares', frente: 'Quais são as penalidades disciplinares do servidor público?', verso: '1) Advertência; 2) Suspensão (até 90 dias); 3) Demissão; 4) Cassação de aposentadoria/disponibilidade; 5) Destituição de cargo em comissão; 6) Destituição de função comissionada. A PENA DE ADVERTÊNCIA prescreve em 5 anos; SUSPENSÃO em 2 anos; DEMISSÃO em 5 anos.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'e_comissao_penalidades', artigo: 'Dec. 1.171/94 - Sec. II', titulo: 'Pena de Censura', frente: 'Qual a única penalidade aplicável pela Comissão de Ética do Dec. 1.171/94 e qual o seu registro?', verso: 'A única penalidade aplicável pela Comissão de Ética é a pena de CENSURA. A fundamentação será lavrada em parecer assinado por todos os integrantes, com cópia para a pasta funcional do servidor.', cobrado: 'hot', anos: ['2023', '2022'] }
          ]
        }
      ]
    },
    {
      id: 'org_criminosa',
      disciplina: 'legislacao',
      nome: 'Lei de Organizações Criminosas',
      sigla: 'Lei 12.850/13',
      icon: '🕸️ ',
      destaque: true,
      peso: 2,
      secoes: [
        {
          titulo: '🔥 Conceito e Meios de Prova',
          artigos: [
            { id: 'oc_1', artigo: 'Art. 1º, § 1º', titulo: 'Conceito de Organização Criminosa', frente: 'Qual é o conceito legal de Organização Criminosa?', verso: 'Associação de 4 ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 anos ou que sejam de caráter transnacional.', cobrado: 'hot', anos: ['2024', '2023', '2022'] },
            { id: 'oc_2', artigo: 'Art. 2º', titulo: 'Crime e Majorantes', frente: 'Qual o crime e as principais majorantes de promover ou integrar organização criminosa?', verso: 'Promover, constituir, financiar ou integrar organização criminosa. Pena: reclusao de 3 a 8 anos. A pena é aumentada se houver emprego de arma de fogo ou participação de criança ou adolescente.', cobrado: 'hot', anos: ['2023', '2022'] },
            { id: 'oc_3', artigo: 'Art. 3º', titulo: 'Meios de Obtenção de Prova', frente: 'Quais meios especiais de prova são permitidos pela Lei 12.850/13?', verso: 'Colaboração premiada; Captação ambiental de sinais; Ação controlada; Acesso a dados cadastrais; Infiltração de agentes.', cobrado: 'hot', anos: ['2024', '2023'] }
          ]
        }
      ]
    }

  ],

  getDeck(id) {
    return this.decks.find(d => d.id === id);
  },

  getAllArticles() {
    const articles = [];
    this.decks.forEach(deck => {
      deck.secoes.forEach(sec => {
        sec.artigos.forEach(art => {
          articles.push({ ...art, deckId: deck.id, deckNome: deck.nome, disciplina: deck.disciplina });
        });
      });
    });
    return articles;
  }
};
