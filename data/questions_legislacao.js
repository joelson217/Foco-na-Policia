const QUESTIONS_LEGISLACAO = [
  {
    "id": "leg_1",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 - Lei de Drogas",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos da Lei nº 11.343/06, que institui o Sistema Nacional de Políticas Públicas sobre Drogas (Sisnad), assinale a opção correta em relação ao crime de porte de drogas para consumo pessoal (art. 28).",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Trata-se de crime apenado com detenção de até seis meses.",
        "comentario": "O art. 28 não comina pena privativa de liberdade nem de detenção; as únicas penas previstas são advertência, prestação de serviços à comunidade e medida educativa."
      },
      {
        "letra": "B",
        "texto": "Para determinar se a droga destinava-se a consumo pessoal, o juiz não pode levar em conta a conduta e os antecedentes do agente.",
        "comentario": "É o contrário: o art. 28, §2º determina expressamente que o juiz atenderá à natureza e quantidade da substância, ao local e condições, bem como à conduta e aos antecedentes do agente."
      },
      {
        "letra": "C",
        "texto": "As penas previstas incluem advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa."
      },
      {
        "letra": "D",
        "texto": "A reincidência do agente gera a conversão da prestação de serviços em pena privativa de liberdade.",
        "comentario": "A lei não prevê essa conversão; como o art. 28 não comina pena privativa de liberdade, mesmo o descumprimento reiterado das medidas não pode resultar em prisão."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 28 da Lei 11.343/06",
    "justificativa": "O art. 28 prevê como penas: advertência, prestação de serviços à comunidade e medida educativa. Não há previsão de pena privativa de liberdade."
  },
  {
    "id": "leg_2",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 - Lei de Tortura",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "No que se refere ao crime de tortura (Lei nº 9.455/97), um agente penitenciário presencia um colega agredindo fisicamente um detento para obter confissão, mas nada faz para impedir. Nesse caso, o agente omisso:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Responderá pelo mesmo crime que o autor, com pena reduzida.",
        "comentario": "O omisso não responde pela tortura comissiva (reclusão de 2 a 8 anos), mas por tipo autônomo de tortura-omissão, com pena mais branda de detenção de 1 a 4 anos."
      },
      {
        "letra": "B",
        "texto": "Responderá pelo crime de tortura-omissão, com pena de detenção de 1 a 4 anos."
      },
      {
        "letra": "C",
        "texto": "Não comete crime algum, apenas responde por tortura quem atua comissivamente.",
        "comentario": "O art. 1º, §2º pune expressamente quem se omite quando tinha o dever de evitar ou apurar a tortura, de modo que o agente omisso também comete crime."
      },
      {
        "letra": "D",
        "texto": "Responderá pelo crime de prevaricação, previsto no Código Penal.",
        "comentario": "A Lei 9.455/97 tem tipo específico para a omissão (tortura-omissão, art. 1º, §2º), que afasta a aplicação subsidiária do crime de prevaricação do Código Penal."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, § 2º da Lei 9.455/97",
    "justificativa": "Aquele que se omite em face da conduta de tortura, quando tinha o dever de evitá-la ou apurá-la, incorre na pena de detenção de 1 a 4 anos (tortura-omissão)."
  },
  {
    "id": "leg_3",
    "disciplina": "legislacao",
    "topico": "Estatuto do Desarmamento",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "De acordo com o Estatuto do Desarmamento (Lei nº 10.826/2003), o crime de omissão de cautela:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Consiste em deixar de observar as cautelas necessárias para impedir que menor de 18 anos ou portador de deficiência mental se apodere de arma de fogo."
      },
      {
        "letra": "B",
        "texto": "Aplica-se apenas aos proprietários de armas de fogo de uso restrito das Forças Armadas.",
        "comentario": "O crime de omissão de cautela (art. 13) aplica-se a qualquer arma de fogo sob guarda do agente, sem se restringir a armas de uso restrito das Forças Armadas."
      },
      {
        "letra": "C",
        "texto": "Tem como pena reclusão de 2 a 4 anos e multa.",
        "comentario": "A pena do art. 13 é detenção de 1 a 2 anos e multa; reclusão de 2 a 4 anos é a pena do crime de porte ilegal de arma de fogo (art. 14)."
      },
      {
        "letra": "D",
        "texto": "Configura-se quando a arma for roubada e não for comunicado à Polícia Civil em 24h.",
        "comentario": "O parágrafo único do art. 13 exige a comunicação do extravio, furto ou roubo ao Sinarm (não à Polícia Civil) em 24 horas, e essa hipótese se aplica especificamente ao responsável por empresa de segurança e transporte de valores."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 13 da Lei 10.826/03",
    "justificativa": "Art. 13: Deixar de observar as cautelas necessárias para impedir que menor de 18 anos ou portador de deficiência mental se apodere de arma de fogo. Pena: detenção de 1 a 2 anos e multa."
  },
  {
    "id": "leg_4",
    "disciplina": "legislacao",
    "topico": "Lei de Crimes Hediondos (Lei 8.072/90)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "São considerados crimes hediondos, EXCETO:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Homicídio qualificado.",
        "comentario": "O homicídio qualificado está expressamente listado como crime hediondo no art. 1º da Lei 8.072/90, não servindo como exceção pedida no enunciado."
      },
      {
        "letra": "B",
        "texto": "Latrocínio (roubo com resultado morte).",
        "comentario": "O latrocínio (art. 157, §3º, II, do CP) também consta do rol do art. 1º da Lei 8.072/90 como crime hediondo."
      },
      {
        "letra": "C",
        "texto": "Estupro.",
        "comentario": "O estupro (art. 213 do CP) está expressamente previsto como crime hediondo no art. 1º da Lei 8.072/90."
      },
      {
        "letra": "D",
        "texto": "Tráfico ilícito de entorpecentes (crime equiparado, mas não catalogado como hediondo)."
      }
    ],
    "gabarito": "D",
    "artigo": "Art. 2º da Lei 8.072/90",
    "justificativa": "O tráfico de drogas, a tortura e o terrorismo são crimes EQUIPARADOS a hediondos, não sendo crimes hediondos em sentido estrito (embora sofram consequências semelhantes)."
  },
  {
    "id": "leg_5",
    "disciplina": "legislacao",
    "topico": "Lei Maria da Penha (Lei 11.340/06)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Segundo a Lei Maria da Penha, configura violência doméstica e familiar contra a mulher qualquer ação ou omissão baseada no gênero que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial, no âmbito:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Apenas da unidade doméstica e da família.",
        "comentario": "A definição é incompleta: a lei também abrange qualquer relação íntima de afeto, não se limitando à unidade doméstica e à família."
      },
      {
        "letra": "B",
        "texto": "Da unidade doméstica, da família ou em qualquer relação íntima de afeto."
      },
      {
        "letra": "C",
        "texto": "Apenas entre pessoas unidas por laços de consanguinidade.",
        "comentario": "A lei não exige vínculo de consanguinidade; abrange também relações afetivas sem qualquer parentesco sanguíneo."
      },
      {
        "letra": "D",
        "texto": "Somente entre cônjuges ou ex-cônjuges.",
        "comentario": "A lei se aplica a qualquer relação íntima de afeto, mesmo sem casamento ou união estável, atual ou pretérita, e não apenas a cônjuges/ex-cônjuges."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 5º da Lei 11.340/06",
    "justificativa": "A lei abrange a unidade doméstica, a família e qualquer relação íntima de afeto, na qual o agressor conviva ou tenha convivido com a ofendida, independentemente de coabitação."
  },
  {
    "id": "leg_6",
    "disciplina": "legislacao",
    "topico": "Lei de Abuso de Autoridade (13.869)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A Lei nº 13.869/2019 (Abuso de Autoridade) exige, para a configuração dos crimes nela previstos, um elemento subjetivo específico. Qual é?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O dolo eventual de assumir o risco de lesionar o administrado.",
        "comentario": "A lei exige dolo específico (finalidade especial); o dolo eventual, de mera assunção do risco, não é suficiente para configurar o crime."
      },
      {
        "letra": "B",
        "texto": "A culpa consciente na inobservância das normas de procedimento.",
        "comentario": "Os crimes de abuso de autoridade não admitem modalidade culposa; exigem dolo específico, e não culpa consciente."
      },
      {
        "letra": "C",
        "texto": "A finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal."
      },
      {
        "letra": "D",
        "texto": "O dolo genérico consistente na mera vontade de praticar o ato ilegal.",
        "comentario": "Não basta o dolo genérico (vontade de praticar o ato); é necessária a finalidade especial de prejudicar, beneficiar ou o mero capricho/satisfação pessoal."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 1º, §1º da Lei 13.869",
    "justificativa": "Os crimes de abuso de autoridade exigem dolo ESPECÍFICO (prejudicar, beneficiar, mero capricho ou satisfação pessoal)."
  },
  {
    "id": "leg_7",
    "disciplina": "legislacao",
    "topico": "Organizações Criminosas (Lei 12.850)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Para a configuração de \"organização criminosa\" (Lei nº 12.850/13), exige-se a associação de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Duas ou mais pessoas.",
        "comentario": "O mínimo exigido para organização criminosa é de 4 pessoas, e não 2 (esse é o requisito da associação criminosa/associação para o tráfico, prevista em outros tipos penais)."
      },
      {
        "letra": "B",
        "texto": "Três ou mais pessoas.",
        "comentario": "A lei exige a associação de ao menos 4 pessoas, e não apenas 3."
      },
      {
        "letra": "C",
        "texto": "Quatro ou mais pessoas."
      },
      {
        "letra": "D",
        "texto": "Cinco ou mais pessoas.",
        "comentario": "O número mínimo exigido pela lei é 4 pessoas, e não 5."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 1º, §1º da Lei 12.850",
    "justificativa": "Organização criminosa exige a associação de 4 (QUATRO) ou mais pessoas, estruturalmente ordenada."
  },
  {
    "id": "leg_8",
    "disciplina": "legislacao",
    "topico": "Estatuto do Desarmamento",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "No Estatuto do Desarmamento, há distinção clara entre \"posse\" e \"porte\". Consiste no crime de posse irregular de arma de fogo de uso permitido (Art. 12):",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Manter arma de fogo sob sua guarda, de uso permitido, no interior de sua residência ou no seu local de trabalho, desde que seja o titular ou o responsável legal."
      },
      {
        "letra": "B",
        "texto": "Transitar com a arma de fogo de uso permitido nas vias públicas.",
        "comentario": "Transitar com a arma em via pública configura PORTE (art. 14), e não posse irregular (art. 12), que pressupõe a arma dentro da residência ou local de trabalho."
      },
      {
        "letra": "C",
        "texto": "Transportar a arma de fogo no porta-luvas do carro.",
        "comentario": "Transportar a arma fora da residência ou do local de trabalho também configura porte (art. 14), e não a posse irregular tratada no art. 12."
      },
      {
        "letra": "D",
        "texto": "Vender arma de fogo de uso restrito a terceiros.",
        "comentario": "A venda de arma de uso restrito a terceiros configura outro delito (comércio ilegal de arma de fogo, arts. 17/18), não o crime de posse irregular do art. 12."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 12 da Lei 10.826",
    "justificativa": "POSSE é ter a arma na própria residência ou local de trabalho. Se o agente sai do imóvel com a arma, configura PORTE."
  },
  {
    "id": "leg_9",
    "disciplina": "legislacao",
    "topico": "Lei de Crimes Hediondos",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Os crimes hediondos são insuscetíveis de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Graça, indulto, anistia e fiança."
      },
      {
        "letra": "B",
        "texto": "Liberdade provisória sem fiança.",
        "comentario": "A liberdade provisória SEM fiança é admitida nos crimes hediondos; o que a lei veda é apenas a concessão de fiança em si."
      },
      {
        "letra": "C",
        "texto": "Apelação em liberdade.",
        "comentario": "A Lei 8.072/90 não veda a apelação em liberdade; a vedação recai sobre graça, indulto, anistia e fiança."
      },
      {
        "letra": "D",
        "texto": "Livramento condicional.",
        "comentario": "O livramento condicional é admitido nos crimes hediondos, exigindo-se apenas o cumprimento de mais de 2/3 da pena e a não reincidência específica."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 2º da Lei 8.072",
    "justificativa": "Crimes hediondos não admitem anistia, graça, indulto ou fiança. Admitem livramento condicional e liberdade provisória (sem fiança)."
  },
  {
    "id": "leg_10",
    "disciplina": "legislacao",
    "topico": "Estatuto da Criança e do Adolescente",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Segundo o ECA (Lei 8.069/90), considera-se adolescente a pessoa entre:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Doze e dezesseis anos de idade.",
        "comentario": "O limite superior correto da adolescência é 18 anos, e não 16."
      },
      {
        "letra": "B",
        "texto": "Doze e dezoito anos de idade."
      },
      {
        "letra": "C",
        "texto": "Quatorze e dezoito anos de idade.",
        "comentario": "O ECA fixa o início da adolescência aos 12 anos, e não aos 14."
      },
      {
        "letra": "D",
        "texto": "Dez e dezoito anos de idade.",
        "comentario": "Criança é a pessoa até 12 anos incompletos, e a adolescência começa aos 12 anos, não aos 10."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 2º do ECA",
    "justificativa": "Criança: até 12 anos incompletos. Adolescente: entre 12 e 18 anos de idade."
  },
  {
    "id": "leg_11",
    "disciplina": "legislacao",
    "topico": "Lei de Tortura",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Na Lei de Tortura (Lei 9.455/97), o crime de tortura é:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Inafiançável, mas suscetível de graça ou anistia.",
        "comentario": "Além de inafiançável, o crime de tortura também é insuscetível de graça e anistia, e não apenas de fiança."
      },
      {
        "letra": "B",
        "texto": "Fiançável e suscetível de indulto.",
        "comentario": "O crime de tortura é inafiançável, e não fiançável, além de insuscetível de graça ou anistia."
      },
      {
        "letra": "C",
        "texto": "Inafiançável e insuscetível de graça ou anistia."
      },
      {
        "letra": "D",
        "texto": "Suscetível apenas de fiança estipulada pelo juiz.",
        "comentario": "O crime de tortura é inafiançável; não há hipótese de fiança judicial para esse delito."
      },
      {
        "letra": "E",
        "texto": "Inafiançável, mas extingue a punibilidade no prazo máximo de 5 anos.",
        "comentario": "Não há previsão legal de extinção de punibilidade em prazo fixo de 5 anos para o crime de tortura; essa hipótese não consta da Lei 9.455/97."
      }
    ],
    "correta": "C",
    "comentario": "Art. 1º, § 6º da Lei 9.455/97 (e amparado pela CF/88): O crime de tortura é inafiançável e insuscetível de graça ou anistia."
  },
  {
    "id": "leg_12",
    "disciplina": "legislacao",
    "topico": "Estatuto do Desarmamento",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A respeito do porte de arma, o crime de porte ilegal de arma de fogo de uso permitido é:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Inafiançável em qualquer hipótese.",
        "comentario": "O porte de arma de uso permitido (art. 14) não é tratado como inafiançável em qualquer hipótese; essa inafiançabilidade mais rígida está associada ao porte de arma de uso restrito (art. 16), que é hediondo."
      },
      {
        "letra": "B",
        "texto": "Crime hediondo.",
        "comentario": "Apenas o porte/posse de arma de uso restrito (art. 16) é crime hediondo; o porte de arma de uso permitido (art. 14) não é."
      },
      {
        "letra": "C",
        "texto": "Punido com reclusão de 2 a 4 anos, e multa."
      },
      {
        "letra": "D",
        "texto": "Atípico se a arma estiver desmuniciada (teoria admitida no STJ).",
        "comentario": "O STF e o STJ entendem que é crime de perigo abstrato, de modo que a ausência de munição não afasta a tipicidade da conduta."
      },
      {
        "letra": "E",
        "texto": "Permitido a qualquer cidadão que possua registro de Colecionador (CAC) nas ruas em qualquer momento.",
        "comentario": "O registro de Colecionador (CAC) autoriza a posse/aquisição sob condições específicas, não um porte irrestrito da arma nas ruas a qualquer momento."
      }
    ],
    "correta": "C",
    "comentario": "Art. 14 da Lei 10.826/03: Reclusão de 2 a 4 anos, e multa. Arma desmuniciada configura crime, pois é crime de perigo abstrato."
  },
  {
    "id": "leg_13",
    "disciplina": "legislacao",
    "topico": "Nova Lei de Abuso de Autoridade",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "A perda do cargo como efeito da condenação na nova Lei de Abuso de Autoridade (Lei 13.869/19):",
    "alternativas": [
      {
        "letra": "A",
        "texto": "É efeito automático da condenação a pena privativa de liberdade.",
        "comentario": "A perda do cargo não é automática; depende de motivação expressa na sentença e da ocorrência de reincidência em crime de abuso de autoridade."
      },
      {
        "letra": "B",
        "texto": "Condiciona-se à ocorrência de reincidência em crime de abuso de autoridade."
      },
      {
        "letra": "C",
        "texto": "Ocorre sempre que a pena aplicada for superior a 4 anos.",
        "comentario": "O critério legal não é o quantum da pena aplicada, mas sim a reincidência específica em crime de abuso de autoridade."
      },
      {
        "letra": "D",
        "texto": "Pode ser aplicada pelo superior hierárquico independentemente de trânsito em julgado.",
        "comentario": "A perda do cargo é efeito de condenação judicial motivada, não uma decisão administrativa do superior hierárquico."
      },
      {
        "letra": "E",
        "texto": "Somente se aplica a magistrados e membros do MP.",
        "comentario": "O efeito se aplica a qualquer agente público sujeito à lei, não se restringindo a magistrados e membros do Ministério Público."
      }
    ],
    "correta": "B",
    "comentario": "Art. 4º, § 1º, Lei 13.869/19: A perda do cargo ou a inabilitação não são automáticas, devendo ser motivadas na sentença, e condicionam-se à reincidência ESPECÍFICA em crime de abuso de autoridade."
  },
  {
    "id": "leg_14",
    "disciplina": "legislacao",
    "topico": "Organização Criminosa",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "A Lei nº 12.850/13 define Organização Criminosa a associação de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "3 ou mais pessoas, para a prática de crimes com pena máxima superior a 4 anos.",
        "comentario": "O número mínimo exigido é 4 pessoas, e não 3."
      },
      {
        "letra": "B",
        "texto": "4 ou mais pessoas, para a prática de infrações penais cujas penas máximas sejam superiores a 4 anos, ou de caráter transnacional."
      },
      {
        "letra": "C",
        "texto": "4 ou mais pessoas, para a prática de crimes hediondos.",
        "comentario": "A lei não exige que os crimes praticados sejam hediondos; basta que tenham pena máxima superior a 4 anos ou caráter transnacional."
      },
      {
        "letra": "D",
        "texto": "Qualquer grupo de pessoas estruturalmente ordenado.",
        "comentario": "Falta o requisito numérico mínimo de 4 pessoas e a finalidade de praticar infrações com pena máxima superior a 4 anos ou de caráter transnacional."
      },
      {
        "letra": "E",
        "texto": "3 ou mais pessoas, com divisão de tarefas informal para crimes contra o patrimônio.",
        "comentario": "O número mínimo exigido é 4 pessoas (não 3), e a lei não restringe a finalidade a crimes contra o patrimônio."
      }
    ],
    "correta": "B",
    "comentario": "Art. 1º, § 1º da Lei 12.850/13: Considera-se organização criminosa a associação de 4 (quatro) ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, para obter vantagem, mediante a prática de infrações cujas penas máximas sejam superiores a 4 (quatro) anos, ou de caráter transnacional."
  },
  {
    "id": "leg_15",
    "disciplina": "legislacao",
    "topico": "ECA",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Nos termos do Estatuto da Criança e do Adolescente (ECA), considera-se adolescente a pessoa entre:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "0 e 12 anos incompletos.",
        "comentario": "Essa é a definição legal de CRIANÇA (art. 2º), e não de adolescente, que é a faixa etária perguntada."
      },
      {
        "letra": "B",
        "texto": "12 e 18 anos incompletos.",
        "comentario": "O texto legal fixa o limite superior em 'dezoito anos de idade', sem o qualificativo 'incompletos' usado nesta alternativa, que não reproduz com fidelidade a redação do art. 2º do ECA."
      },
      {
        "letra": "C",
        "texto": "12 e 18 anos (incompletos ou não, sem distinção).",
        "comentario": "O art. 2º do ECA é preciso ao distinguir 'doze anos de idade incompletos' para a criança e 'entre doze e dezoito anos de idade' para o adolescente, não havendo a imprecisão sugerida nesta alternativa."
      },
      {
        "letra": "D",
        "texto": "Entre doze e dezoito anos de idade."
      },
      {
        "letra": "E",
        "texto": "14 a 18 anos de idade.",
        "comentario": "O marco inicial da adolescência, segundo o ECA, é aos 12 anos, e não aos 14."
      }
    ],
    "correta": "D",
    "comentario": "Art. 2º do ECA: Considera-se criança, para os efeitos desta Lei, a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade."
  },
  {
    "id": "leg_16",
    "disciplina": "legislacao",
    "topico": "Maria da Penha",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Na Lei Maria da Penha (Lei 11.340/2006), caso haja prisão em flagrante por descumprimento de medida protetiva de urgência, a fiança poderá ser concedida:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Pelo Delegado de Polícia, se o crime for de menor potencial ofensivo.",
        "comentario": "O descumprimento de medida protetiva não é crime de menor potencial ofensivo, e a fiança nessa hipótese compete exclusivamente à autoridade judicial."
      },
      {
        "letra": "B",
        "texto": "Somente pelo Ministério Público.",
        "comentario": "O Ministério Público não tem competência para conceder fiança; isso cabe exclusivamente à autoridade judicial."
      },
      {
        "letra": "C",
        "texto": "Somente pela autoridade judicial (o Juiz)."
      },
      {
        "letra": "D",
        "texto": "Apenas após o trânsito em julgado.",
        "comentario": "A fiança pode e deve ser apreciada logo após a prisão em flagrante, não sendo necessário aguardar o trânsito em julgado."
      },
      {
        "letra": "E",
        "texto": "Por nenhuma autoridade, pois é crime inafiançável.",
        "comentario": "O crime admite fiança, desde que concedida pelo juiz; não se trata de crime inafiançável."
      }
    ],
    "correta": "C",
    "comentario": "Art. 24-A, § 2º da Lei 11.340: Na hipótese de prisão em flagrante, apenas a autoridade judicial poderá conceder fiança."
  },
  {
    "id": "leg_17",
    "disciplina": "legislacao",
    "topico": "Crimes Hediondos",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Segundo a Lei 8.072/90, é considerado crime hediondo:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O homicídio simples, em qualquer situação.",
        "comentario": "Apenas o homicídio QUALIFICADO (e o simples cometido em atividade típica de grupo de extermínio) é hediondo; o homicídio simples em qualquer situação não é."
      },
      {
        "letra": "B",
        "texto": "O furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum."
      },
      {
        "letra": "C",
        "texto": "A associação criminosa para o tráfico de drogas.",
        "comentario": "Trata-se de crime EQUIPARADO a hediondo, e não hediondo propriamente dito, tal qual o próprio tráfico de drogas."
      },
      {
        "letra": "D",
        "texto": "A receptação qualificada.",
        "comentario": "A receptação qualificada não consta do rol de crimes hediondos da Lei 8.072/90."
      },
      {
        "letra": "E",
        "texto": "A tortura e o terrorismo.",
        "comentario": "Tortura e terrorismo são crimes EQUIPARADOS a hediondos (art. 5º, XLIII, da CF/88), e não hediondos em sentido estrito."
      }
    ],
    "correta": "B",
    "comentario": "O Pacote Anticrime (Lei 13.964) incluiu o furto qualificado por explosivo (Art. 155, § 4º-A) no rol dos crimes hediondos. Atenção: tortura, terrorismo e tráfico não SÃO hediondos, mas EQUIPARADOS."
  },
  {
    "id": "leg_18",
    "disciplina": "legislacao",
    "topico": "Estatuto do Idoso",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Considera-se idoso para os efeitos do Estatuto do Idoso (Lei 10.741/03) a pessoa com idade:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Igual ou superior a 50 anos.",
        "comentario": "O Estatuto do Idoso fixa o critério em 60 anos, e não em 50."
      },
      {
        "letra": "B",
        "texto": "Igual ou superior a 60 anos."
      },
      {
        "letra": "C",
        "texto": "Superior a 65 anos.",
        "comentario": "O critério legal é 'igual ou superior a 60 anos'; usar 'superior a 65' erra tanto o valor quanto excluiria indevidamente quem tem exatamente 60."
      },
      {
        "letra": "D",
        "texto": "Igual ou superior a 70 anos.",
        "comentario": "O critério correto fixado pela lei é 60 anos, e não 70."
      },
      {
        "letra": "E",
        "texto": "Mais de 60 anos completos, com prioridade especial aos maiores de 75.",
        "comentario": "O critério legal é 'igual ou superior a 60' (não 'mais de 60'), e a prioridade especial é conferida aos maiores de 80 anos, não aos maiores de 75."
      }
    ],
    "correta": "B",
    "comentario": "Art. 1º: É instituído o Estatuto da Pessoa Idosa, destinado a regular os direitos assegurados às pessoas com idade igual ou superior a 60 (sessenta) anos. Prioridade especial é dada aos maiores de 80."
  },
  {
    "id": "leg_19",
    "disciplina": "legislacao",
    "topico": "Lei 11.340/06 - Lei Maria da Penha",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre as medidas protetivas de urgência previstas na Lei Maria da Penha (Lei nº 11.340/06), assinale a alternativa correta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "As medidas protetivas somente podem ser concedidas após audiência com o agressor.",
        "comentario": "As medidas protetivas podem ser concedidas de imediato, inclusive de ofício, sem necessidade de prévia audiência com o agressor."
      },
      {
        "letra": "B",
        "texto": "O juiz deve apreciar o pedido de medida protetiva no prazo de 48 horas após receber o expediente policial."
      },
      {
        "letra": "C",
        "texto": "A Lei nº 9.099/95 (Juizados Especiais) aplica-se subsidiariamente aos crimes de violência doméstica.",
        "comentario": "O art. 41 da Lei Maria da Penha veda expressamente a aplicação da Lei 9.099/95 aos crimes de violência doméstica."
      },
      {
        "letra": "D",
        "texto": "A ação penal nos crimes de violência doméstica é condicionada à representação da vítima.",
        "comentario": "Conforme a Súmula 542 do STJ, a ação penal nos crimes de lesão corporal decorrentes de violência doméstica é pública incondicionada."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 19 da Lei 11.340/06",
    "justificativa": "Art. 19: As medidas protetivas serão concedidas pelo juiz a requerimento do MP ou da ofendida, em 48 horas. O art. 41 veda expressamente a aplicação da Lei 9.099/95. A ação é pública incondicionada (Súmula 542 STJ)."
  },
  {
    "id": "leg_20",
    "disciplina": "legislacao",
    "topico": "Lei 11.340/06 - Lei Maria da Penha",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Segundo a Lei Maria da Penha, a violência psicológica contra a mulher compreende:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Exclusivamente xingamentos e ofensas verbais proferidas na presença de testemunhas.",
        "comentario": "O conceito é muito mais amplo, abrangendo qualquer conduta que cause dano emocional, controle ou diminuição da autoestima, independentemente da presença de testemunhas."
      },
      {
        "letra": "B",
        "texto": "Qualquer conduta que cause dano emocional e diminuição da autoestima ou que lhe prejudique e perturbe o pleno desenvolvimento ou que vise degradar ou controlar suas ações, comportamentos, crenças e decisões."
      },
      {
        "letra": "C",
        "texto": "Apenas as condutas que resultem em diagnóstico médico de transtorno psicológico.",
        "comentario": "Não se exige laudo ou diagnóstico médico para caracterizar a violência psicológica prevista na lei."
      },
      {
        "letra": "D",
        "texto": "Somente as condutas praticadas na residência da vítima.",
        "comentario": "A violência psicológica pode ocorrer em qualquer lugar, não se restringindo à residência da vítima."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 7º, II da Lei 11.340/06",
    "justificativa": "A violência psicológica abrange qualquer conduta que cause dano emocional, diminuição da autoestima, controle de comportamentos, ameaça, constrangimento, humilhação, manipulação, isolamento, vigilância constante, perseguição, etc."
  },
  {
    "id": "leg_21",
    "disciplina": "legislacao",
    "topico": "Lei 13.869/19 - Abuso de Autoridade",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre o crime de abuso de autoridade (Lei nº 13.869/19), é correto afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O crime de abuso de autoridade pode ser praticado por culpa (negligência ou imprudência).",
        "comentario": "A lei exige dolo específico, não admitindo modalidade culposa (negligência ou imprudência)."
      },
      {
        "letra": "B",
        "texto": "A divergência na interpretação da lei ou na avaliação de fatos e provas não configura o crime de abuso de autoridade."
      },
      {
        "letra": "C",
        "texto": "O crime de abuso de autoridade somente é praticado por servidores públicos efetivos.",
        "comentario": "A lei abrange qualquer agente público, inclusive comissionados, temporários e sem vínculo efetivo, não se restringindo a servidores efetivos."
      },
      {
        "letra": "D",
        "texto": "Para a configuração do crime, basta que o agente queira praticar a conduta, independente de qualquer finalidade especial.",
        "comentario": "Exige-se finalidade específica (prejudicar, beneficiar ou capricho/satisfação pessoal); o dolo genérico, isolado, não basta."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, §2º da Lei 13.869/19",
    "justificativa": "A Lei 13.869/19 exige que o agente atue com finalidade específica (prejudicar, beneficiar ou capricho). A divergência na interpretação da lei não constitui abuso — é o denominado \"crime de hermenêutica\", expressamente excluído."
  },
  {
    "id": "leg_22",
    "disciplina": "legislacao",
    "topico": "Lei 13.869/19 - Abuso de Autoridade",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Nos termos da Lei nº 13.869/19 (Abuso de Autoridade), os efeitos específicos da condenação (inabilitação e perda do cargo):",
    "alternativas": [
      {
        "letra": "A",
        "texto": "São efeitos automáticos de qualquer condenação por abuso de autoridade.",
        "comentario": "Não são automáticos; dependem de motivação expressa na sentença e da ocorrência de reincidência em crime de abuso de autoridade."
      },
      {
        "letra": "B",
        "texto": "Só ocorrem nos casos de crime praticado com violência ou grave ameaça.",
        "comentario": "A condição legal é a reincidência em crime de abuso de autoridade, e não o emprego de violência ou grave ameaça."
      },
      {
        "letra": "C",
        "texto": "Não são automáticos, dependem de motivação na sentença e só se aplicam em caso de reincidência em crime de abuso de autoridade."
      },
      {
        "letra": "D",
        "texto": "São aplicados apenas a agentes públicos de nível federal.",
        "comentario": "Os efeitos se aplicam a agentes públicos de qualquer esfera federativa (federal, estadual, distrital ou municipal), não apenas de nível federal."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 4º da Lei 13.869/19",
    "justificativa": "Os efeitos específicos de inabilitação (1 a 5 anos) e perda do cargo NÃO são automáticos — devem ser declarados motivadamente na sentença e exigem reincidência em crime de abuso de autoridade."
  },
  {
    "id": "leg_23",
    "disciplina": "legislacao",
    "topico": "Lei 8.072/90 - Crimes Hediondos",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Em relação aos crimes hediondos, previstos na Lei nº 8.072/90, é correto afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O tráfico de drogas é expressamente definido como crime hediondo pela Lei 8.072/90.",
        "comentario": "O tráfico de drogas é crime EQUIPARADO a hediondo, e não hediondo propriamente dito nos termos da Lei 8.072/90."
      },
      {
        "letra": "B",
        "texto": "O livramento condicional exige cumprimento de 2/3 da pena e o condenado não pode ser reincidente específico em crimes hediondos."
      },
      {
        "letra": "C",
        "texto": "O crime de latrocínio não está inserido no rol de crimes hediondos.",
        "comentario": "O latrocínio está expressamente previsto no rol de crimes hediondos do art. 1º da Lei 8.072/90."
      },
      {
        "letra": "D",
        "texto": "A progressão de regime para primário em crime hediondo sem resultado morte exige cumprimento de 50% da pena.",
        "comentario": "O percentual correto, conforme o art. 112 da LEP, é de 40% para o condenado primário em crime hediondo sem resultado morte, e não 50%."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 5º da Lei 8.072/90",
    "justificativa": "O livramento condicional em crimes hediondos exige 2/3 da pena (art. 5º). O tráfico de drogas é equiparado (não hediondo próprio). O latrocínio é hediondo. A progressão para primário sem morte em crime hediondo é de 40%."
  },
  {
    "id": "leg_24",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 - Lei de Drogas",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre o \"tráfico privilegiado\" previsto no art. 33, §4º da Lei de Drogas, assinale a correta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Trata-se de crime hediondo, pois é modalidade de tráfico de drogas.",
        "comentario": "O STF fixou no HC 118.533/MS que o tráfico privilegiado NÃO é hediondo, ao contrário do tráfico comum equiparado a hediondo."
      },
      {
        "letra": "B",
        "texto": "Permite redução da pena de 1/6 a 2/3, desde que o agente seja primário, de bons antecedentes, não integre organização criminosa e não se dedique a atividades criminosas."
      },
      {
        "letra": "C",
        "texto": "A redução da pena aplica-se apenas quando o agente possuir pequena quantidade de droga.",
        "comentario": "A quantidade de droga não é requisito do §4º; os requisitos são primariedade, bons antecedentes, não integrar organização criminosa e não se dedicar a atividades criminosas."
      },
      {
        "letra": "D",
        "texto": "A pena pode ser convertida em restritiva de direitos, por ser equiparado a crime de menor potencial ofensivo.",
        "comentario": "O tráfico, mesmo privilegiado, não é crime de menor potencial ofensivo; eventual conversão em restritiva de direitos depende dos requisitos próprios do art. 44 do CP, não decorrendo automaticamente do §4º."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 33, §4º da Lei 11.343/06",
    "justificativa": "O STF definiu no HC 118.533/MS que o tráfico privilegiado NÃO é hediondo. O benefício exige 4 requisitos cumulativos: primariedade, bons antecedentes, não integrar organização criminosa e não se dedicar a atividades criminosas. Redução de 1/6 a 2/3."
  },
  {
    "id": "leg_25",
    "disciplina": "legislacao",
    "topico": "Estatuto do Desarmamento",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "De acordo com o Estatuto do Desarmamento (Lei nº 10.826/2003), o porte ilegal de arma de fogo de uso RESTRITO:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "É crime com pena de detenção de 1 a 3 anos.",
        "comentario": "O porte de arma de uso restrito é punido com reclusão de 3 a 6 anos (art. 16), e não com detenção de 1 a 3 anos."
      },
      {
        "letra": "B",
        "texto": "É crime com pena de reclusão de 2 a 4 anos.",
        "comentario": "Essa é a pena do porte de arma de uso PERMITIDO (art. 14); o porte de uso restrito (art. 16) tem pena de reclusão de 3 a 6 anos."
      },
      {
        "letra": "C",
        "texto": "É crime hediondo, com pena de reclusão de 3 a 6 anos."
      },
      {
        "letra": "D",
        "texto": "É contravenção penal, com pena de multa.",
        "comentario": "Trata-se de crime (não contravenção penal), com pena de reclusão de 3 a 6 anos, e não apenas de multa."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 16 da Lei 10.826/03",
    "justificativa": "O porte/posse de arma de fogo de uso restrito é crime hediondo pela Lei 13.964/2019 (Pacote Anticrime), com pena de reclusão de 3 a 6 anos. Equipara-se à arma com numeração raspada."
  },
  {
    "id": "leg_26",
    "disciplina": "legislacao",
    "topico": "Lei 9.455/97 - Lei de Tortura",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre o crime de tortura praticado por agente público (art. 1º, §4º, I da Lei 9.455/97), é correto afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A pena básica é reduzida à metade em razão do agente público estar no exercício de função.",
        "comentario": "É o contrário: a condição de agente público é causa de AUMENTO de pena (1/6 a 1/3), e não de redução."
      },
      {
        "letra": "B",
        "texto": "A pena é aumentada de 1/6 a 1/3 quando praticada por agente público."
      },
      {
        "letra": "C",
        "texto": "A condição de agente público não influi na pena, mas gera perda automática do cargo.",
        "comentario": "A condição de agente público é causa de aumento de pena, e a perda do cargo NÃO é automática, dependendo de declaração motivada na sentença."
      },
      {
        "letra": "D",
        "texto": "O agente público responde pelo crime de tortura em concurso obrigatório com abuso de autoridade.",
        "comentario": "Não há previsão legal de concurso obrigatório entre os dois crimes; a condição de agente público é apenas majorante do próprio crime de tortura."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, §4º, I da Lei 9.455/97",
    "justificativa": "A condição de agente público é causa de aumento de pena (majorante) de 1/6 a 1/3. A perda do cargo NÃO é automática — depende de declaração na sentença condenatória. Não há concurso obrigatório com abuso de autoridade."
  },
  {
    "id": "leg_27",
    "disciplina": "legislacao",
    "topico": "Lei 11.343/06 - Lei de Drogas",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Nos termos da Lei nº 11.343/06, o crime de associação para o tráfico de drogas (art. 35) diferencia-se da organização criminosa (Lei nº 12.850/13) porque:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A associação para o tráfico exige no mínimo 4 pessoas, enquanto a organização criminosa exige apenas 2.",
        "comentario": "Está invertido: a associação para o tráfico exige apenas 2 pessoas, e a organização criminosa exige pelo menos 4."
      },
      {
        "letra": "B",
        "texto": "A associação para o tráfico exige no mínimo 2 pessoas e visa à prática reiterada de crimes de tráfico; a organização criminosa exige pelo menos 4 pessoas."
      },
      {
        "letra": "C",
        "texto": "A associação para o tráfico exige estrutura hierárquica, ao contrário da organização criminosa.",
        "comentario": "É o oposto: é a organização criminosa que exige estrutura ordenada e divisão de tarefas; a associação para o tráfico não exige tal estrutura."
      },
      {
        "letra": "D",
        "texto": "Não há distinção — ambas exigem os mesmos requisitos e possuem as mesmas penas.",
        "comentario": "Há distinção clara quanto ao número mínimo de integrantes, à estrutura exigida e às penas cominadas em cada um dos crimes."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 35 da Lei 11.343/06 e Art. 1º da Lei 12.850/13",
    "justificativa": "A associação para o tráfico (art. 35) requer apenas 2 ou mais pessoas para prática reiterada de crimes de tráfico. A organização criminosa (Lei 12.850/13) exige pelo menos 4 pessoas com estrutura ordenada e divisão de tarefas."
  },
  {
    "id": "leg_28",
    "disciplina": "legislacao",
    "topico": "Lei Maria da Penha",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "De acordo com a Lei Maria da Penha, a violência doméstica pode ser praticada:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Apenas entre cônjuges com casamento civil registrado.",
        "comentario": "A lei não exige casamento civil, abrangendo também união estável e qualquer relação íntima de afeto."
      },
      {
        "letra": "B",
        "texto": "Apenas dentro da residência da vítima.",
        "comentario": "A violência doméstica pode ocorrer em qualquer lugar, não se restringindo à residência da vítima."
      },
      {
        "letra": "C",
        "texto": "No âmbito da unidade doméstica, da família ou em qualquer relação íntima de afeto, independente de orientação sexual."
      },
      {
        "letra": "D",
        "texto": "Somente quando praticada por homem contra mulher, excluindo-se relações homoafetivas.",
        "comentario": "A lei se aplica também às relações homoafetivas, independentemente da orientação sexual, conforme entendimento consolidado no STJ."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 5º da Lei 11.340/06",
    "justificativa": "O art. 5º da LMP define que a violência doméstica pode ocorrer no âmbito da unidade doméstica, da família ou de qualquer relação íntima de afeto, INDEPENDENTEMENTE de orientação sexual. Não exige coabitação."
  },
  {
    "id": "leg_29",
    "disciplina": "legislacao",
    "topico": "Lei de Tortura (9.455)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Aquele que se omite em face das condutas de tortura, quando tinha o dever de evitá-las ou apurá-las, incorre na pena de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Reclusão de 2 a 8 anos (mesma pena da tortura ativa).",
        "comentario": "A tortura por omissão tem pena mais branda (detenção de 1 a 4 anos), diferente da tortura ativa/comissiva, que é punida com reclusão de 2 a 8 anos."
      },
      {
        "letra": "B",
        "texto": "Detenção de 1 a 4 anos."
      },
      {
        "letra": "C",
        "texto": "Advertência escrita disciplinar apenas.",
        "comentario": "Trata-se de crime, com pena de detenção, e não de mera sanção administrativa disciplinar."
      },
      {
        "letra": "D",
        "texto": "Perda imediata do cargo, sem processo.",
        "comentario": "Não há perda automática e imediata do cargo sem o devido processo; a perda depende de declaração motivada na sentença condenatória."
      }
    ],
    "gabarito": "B",
    "artigo": "Artigo 1º, § 2º da Lei 9.455/97",
    "justificativa": "A tortura por omissão ('tortura imprópria') é punida com detenção de 1 a 4 anos (sanção menos gravosa que a tortura ativa, que é de reclusão de 2 a 8 anos)."
  },
  {
    "id": "leg_30",
    "disciplina": "legislacao",
    "topico": "Lei de Drogas (11.343)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O benefício do 'tráfico privilegiado' (Art. 33, § 4º da Lei de Drogas) consiste em causa de diminuição de pena para o agente primário, de bons antecedentes, que não se dedique a atividades criminosas nem integre organização criminosa. Esse privilégio tem qual impacto na classificação do crime?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Mantém a natureza de crime hediondo, mas reduz a pena.",
        "comentario": "O STF fixou que o tráfico privilegiado AFASTA a hediondez, e não apenas reduz a pena mantendo a natureza hedionda."
      },
      {
        "letra": "B",
        "texto": "Afasta a hediondez do crime (o crime deixa de ser considerado hediondo)."
      },
      {
        "letra": "C",
        "texto": "Substitui obrigatoriamente a pena de reclusão por prestação de serviços.",
        "comentario": "Não há substituição obrigatória por prestação de serviços; o §4º é apenas causa de diminuição da pena privativa de liberdade."
      },
      {
        "letra": "D",
        "texto": "Extingue a multa associada.",
        "comentario": "A multa continua sendo aplicada normalmente; o privilégio afeta a hediondez e o quantum da pena privativa de liberdade, não extinguindo a multa."
      }
    ],
    "gabarito": "B",
    "artigo": "STF, HC 118.533/MS (2016) c/c Art. 112 da LEP",
    "justificativa": "O STF, no HC 118.533/MS (Plenário, 2016), consolidou o entendimento de que o tráfico privilegiado (Art. 33, §4º) NÃO tem natureza hedionda, entendimento posteriormente refletido nos próprios percentuais de progressão do Art. 112 da LEP (Pacote Anticrime), que trata o tráfico privilegiado como crime comum, não hediondo."
  },
  {
    "id": "leg_31",
    "disciplina": "legislacao",
    "topico": "Organizações Criminosas (12.850)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "facil",
    "enunciado": "Para configurar organização criminosa, a associação estável de pessoas exige um número mínimo de membros de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Duas pessoas.",
        "comentario": "O mínimo exigido é de 4 pessoas para organização criminosa, e não 2."
      },
      {
        "letra": "B",
        "texto": "Três pessoas.",
        "comentario": "O mínimo exigido é de 4 pessoas, e não 3."
      },
      {
        "letra": "C",
        "texto": "Quatro pessoas."
      },
      {
        "letra": "D",
        "texto": "Cinco pessoas.",
        "comentario": "O número exigido pela lei é 4, e não 5."
      }
    ],
    "gabarito": "C",
    "artigo": "Artigo 1º, § 1º da Lei 12.850/13",
    "justificativa": "O conceito legal exige a associação de 4 (quatro) ou mais pessoas estruturalmente organizada e caracterizada pela divisão de tarefas."
  },
  {
    "id": "leg_32",
    "disciplina": "legislacao",
    "topico": "Lei Maria da Penha (11.340)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "O descumprimento de medidas protetivas de urgência deferidas judicialmente constitui crime previsto no Artigo 24-A da Lei nº 11.340/06. Em caso de prisão em flagrante por esse crime, é correto afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O delegado de polícia pode arbitrar fiança.",
        "comentario": "O art. 24-A, §2º determina que apenas a autoridade judicial pode conceder fiança nesse caso, não o delegado de polícia."
      },
      {
        "letra": "B",
        "texto": "Apenas a autoridade judicial (juiz) pode conceder fiança."
      },
      {
        "letra": "C",
        "texto": "O crime é insuscetível de liberdade provisória sob qualquer hipótese.",
        "comentario": "O crime admite liberdade provisória; a restrição legal recai apenas sobre a competência para conceder fiança."
      },
      {
        "letra": "D",
        "texto": "Por ter pena baixa, é cabível transação penal imediata.",
        "comentario": "O descumprimento de medida protetiva não admite os institutos da Lei 9.099/95, por vedação expressa do art. 41 da Lei Maria da Penha."
      }
    ],
    "gabarito": "B",
    "artigo": "Artigo 24-A, § 2º da Lei 11.340/06",
    "justificativa": "O parágrafo 2º do Artigo 24-A determina que apenas a AUTORIDADE JUDICIAL pode conceder fiança na prisão em flagrante por este delito de descumprimento."
  },
  {
    "id": "leg_33",
    "disciplina": "legislacao",
    "topico": "Lei de Abuso de Autoridade (13.869)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "A perda do cargo, função ou emprego público por condenação em abuso de autoridade (Art. 4º da Lei nº 13.869/19) é um efeito que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Ocorre de forma automática com o trânsito em julgado.",
        "comentario": "Não é automática; depende de motivação expressa na sentença e da ocorrência de reincidência."
      },
      {
        "letra": "B",
        "texto": "Depende de motivação da sentença e da ocorrência de reincidência em crime de abuso de autoridade."
      },
      {
        "letra": "C",
        "texto": "Aplica-se apenas a agentes eleitos.",
        "comentario": "Aplica-se a qualquer agente público sujeito à lei, e não apenas a agentes eleitos."
      },
      {
        "letra": "D",
        "texto": "Substitui obrigatoriamente a pena de prisão.",
        "comentario": "É efeito acessório que se soma à eventual pena privativa de liberdade, e não a substitui."
      }
    ],
    "gabarito": "B",
    "artigo": "Artigo 4º, parágrafo único da Lei 13.869/19",
    "justificativa": "Os efeitos de perda de cargo e inabilitação para o serviço público não são automáticos e exigem a reincidência específica em crime de abuso de autoridade, além de fundamentação na sentença."
  },
  {
    "id": "leg_34",
    "disciplina": "legislacao",
    "topico": "Estatuto do Desarmamento (10.826)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Manter sob sua guarda arma de fogo de uso permitido, com registro vencido, no interior de sua residência configura:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Crime de porte ilegal de arma de fogo.",
        "comentario": "O porte pressupõe a arma fora da residência ou local de trabalho; manter a arma em casa com registro apenas vencido não configura porte."
      },
      {
        "letra": "B",
        "texto": "Mera infração administrativa, segundo jurisprudência dos Tribunais Superiores."
      },
      {
        "letra": "C",
        "texto": "Crime de posse irregular de arma de fogo de uso permitido.",
        "comentario": "Segundo a jurisprudência do STJ, o mero vencimento do registro de arma de uso permitido mantida na residência configura infração administrativa, não crime."
      },
      {
        "letra": "D",
        "texto": "Crime hediondo de comércio ilegal.",
        "comentario": "Não há conduta de comércio nem arma de uso restrito na situação descrita; o registro apenas vencido não configura crime hediondo."
      }
    ],
    "gabarito": "B",
    "artigo": "Jurisprudência do STJ (APn 696 / HC 294.078)",
    "justificativa": "A posse de arma de fogo de uso permitido com registro vencido no interior da residência configura mera infração administrativa (irregularidade), não tipificando o crime do Artigo 12 do Estatuto."
  },
  {
    "id": "leg_35",
    "disciplina": "legislacao",
    "topico": "Lei de Crimes Hediondos (8.072)",
    "peso": 2,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Assinale a alternativa que traz um crime classificado expressamente como HEDIONDO na Lei nº 8.072/90:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Associação para o tráfico de drogas.",
        "comentario": "É crime EQUIPARADO a hediondo, não constando do rol do art. 1º da Lei 8.072/90 como hediondo em sentido estrito."
      },
      {
        "letra": "B",
        "texto": "Falsificação, corrupção, adulteração ou alteração de produto destinado a fins terapêuticos ou medicinais."
      },
      {
        "letra": "C",
        "texto": "Furto simples de semovente domesticável.",
        "comentario": "Apenas o furto QUALIFICADO de semovente domesticável (com abate ou desfiguração) é hediondo; o furto simples não é."
      },
      {
        "letra": "D",
        "texto": "Lesão corporal culposa de trânsito.",
        "comentario": "Não há previsão de lesão corporal culposa de trânsito no rol de crimes hediondos da Lei 8.072/90."
      }
    ],
    "gabarito": "B",
    "artigo": "Artigo 1º, VII-B da Lei 8.072/90",
    "justificativa": "A falsificação/adulteração de saneantes ou produtos medicinais é hedionda (inserido em 1998). Associação para o tráfico e furtos simples não constam no rol de hediondos."
  },
  {
    "disciplina": "legislacao",
    "topico": "Lei Maria da Penha (Lei 11.340/06)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos da Lei Maria da Penha (Lei 11.340/2006), sobre as medidas protetivas de urgência, é correto afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "As medidas protetivas de urgência devem ser aplicadas somente pelo juiz, após manifestação do Ministério Público.",
        "comentario": "O juiz pode conceder as medidas de ofício, sem necessidade de prévia manifestação do Ministério Público."
      },
      {
        "letra": "B",
        "texto": "A autoridade policial poderá registrar o boletim de ocorrência e encaminhar a ofendida ao hospital, mas não pode requerer medidas protetivas.",
        "comentario": "A autoridade policial pode e deve encaminhar ao juiz o pedido de medidas protetivas formulado pela ofendida (art. 12, III)."
      },
      {
        "letra": "C",
        "texto": "O juiz poderá conceder medidas protetivas de urgência de ofício, a requerimento do MP ou a requerimento da ofendida."
      },
      {
        "letra": "D",
        "texto": "As medidas protetivas só podem ser concedidas durante o processo penal, não antes de seu início.",
        "comentario": "As medidas podem ser concedidas em qualquer fase, inclusive durante o inquérito policial, antes mesmo do início do processo."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 19 da Lei 11.340/06",
    "justificativa": "O Art. 19 da Lei Maria da Penha determina que as medidas protetivas de urgência poderão ser concedidas pelo juiz de ofício, a requerimento do Ministério Público ou a requerimento da ofendida, em qualquer fase do inquérito policial ou da instrução criminal.",
    "id": "leg_36"
  },
  {
    "disciplina": "legislacao",
    "topico": "Lei de Drogas (Lei 11.343/06)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Sobre o crime de tráfico de drogas previsto no Art. 33 da Lei 11.343/2006, assinale a alternativa INCORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A pena pode ser reduzida de 1/6 a 2/3 se o agente for primário, de bons antecedentes e não se dedicar a atividades criminosas.",
        "comentario": "Esta afirmação está correta (não é a alternativa buscada nesta questão que pede a INCORRETA): o art. 33, §4º realmente prevê essa redução de pena para o tráfico privilegiado."
      },
      {
        "letra": "B",
        "texto": "O crime de tráfico de drogas é inafiançável e insuscetível de graça ou anistia.",
        "comentario": "Esta afirmação está correta: o tráfico de drogas é, de fato, inafiançável e insuscetível de graça, anistia e indulto, por ser equiparado a hediondo (art. 44 da Lei 11.343/06), não sendo a alternativa incorreta buscada."
      },
      {
        "letra": "C",
        "texto": "O tráfico de drogas é um crime de ação múltipla ou conteúdo variado, pois o tipo penal prevê 18 verbos.",
        "comentario": "Esta afirmação está correta: o art. 33 realmente descreve um tipo penal de ação múltipla/conteúdo variado, com diversos núcleos verbais, não sendo a alternativa incorreta procurada."
      },
      {
        "letra": "D",
        "texto": "A posse de droga para uso próprio e o tráfico de drogas são tratados com as mesmas penas pelo legislador, diferindo apenas na quantidade."
      }
    ],
    "gabarito": "D",
    "artigo": "Art. 28 e 33 da Lei 11.343/06",
    "justificativa": "A alternativa D está incorreta. O Art. 28 (uso próprio) não prevê pena privativa de liberdade, enquanto o Art. 33 (tráfico) prevê reclusão de 5 a 15 anos e multa. São delitos com tratamentos penais completamente distintos.",
    "id": "leg_37"
  },
  {
    "disciplina": "legislacao",
    "topico": "Estatuto do Desarmamento (Lei 10.826/03)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Nos termos do Estatuto do Desarmamento (Lei 10.826/2003), sobre o porte ilegal de arma de fogo, é correto afirmar:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O crime de porte ilegal de arma de fogo de uso permitido admite fiança e é considerado crime de menor potencial ofensivo.",
        "comentario": "Não é crime de menor potencial ofensivo, pois a pena máxima (4 anos) supera o limite de 2 anos exigido para essa classificação."
      },
      {
        "letra": "B",
        "texto": "O porte ilegal de arma de fogo de uso permitido é inafiançável e insuscetível de liberdade provisória.",
        "comentario": "A inafiançabilidade absoluta e a vedação à liberdade provisória correspondem ao tratamento do porte de arma de uso RESTRITO (art. 16, crime hediondo), e não ao porte de uso permitido do art. 14."
      },
      {
        "letra": "C",
        "texto": "Porte ilegal de arma de fogo de uso permitido é crime punido com reclusão de 2 a 4 anos, e multa."
      },
      {
        "letra": "D",
        "texto": "O agente surpreendido portando arma de fogo sem registro pode obter sursis processual se primário.",
        "comentario": "O sursis processual (Lei 9.099/95, art. 89) é cabível para crimes com pena mínima igual ou inferior a 1 ano; a pena mínima do art. 14 é de 2 anos, o que inviabiliza o instituto."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 14 da Lei 10.826/03",
    "justificativa": "O Art. 14 da Lei 10.826/2003 tipifica o porte ilegal de arma de fogo de uso permitido com pena de reclusão de 2 a 4 anos e multa. Não é crime de menor potencial ofensivo. A inafiançabilidade se aplica aos crimes de uso restrito (Art. 16).",
    "id": "leg_38"
  },
  {
    "disciplina": "legislacao",
    "topico": "Lei de Abuso de Autoridade (Lei 13.869/19)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "De acordo com a Lei de Abuso de Autoridade (Lei 13.869/2019), para que a conduta do agente público configure crime de abuso de autoridade, é necessário que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "O agente aja com dolo genérico, bastando que a conduta ilegal seja voluntária.",
        "comentario": "A lei exige dolo específico; o dolo genérico, isolado, não é suficiente para configurar o crime."
      },
      {
        "letra": "B",
        "texto": "O agente aja com dolo específico de prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal."
      },
      {
        "letra": "C",
        "texto": "O resultado lesivo seja de natureza econômica para a vítima.",
        "comentario": "A lei não exige resultado econômico; a finalidade especial pode ser de qualquer natureza (prejudicar, beneficiar, capricho ou satisfação pessoal)."
      },
      {
        "letra": "D",
        "texto": "A conduta seja praticada em serviço ativo, não se aplicando a agentes que praticam atos fora do horário de trabalho.",
        "comentario": "A lei também se aplica quando o agente atua 'a pretexto de exercer' a função pública, ainda que fora do estrito serviço ou horário formal."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, §1º da Lei 13.869/19",
    "justificativa": "O Art. 1º, §1º da Lei 13.869/2019 estabelece expressamente que as condutas descritas na lei constituem crime somente quando praticadas dolosamente com finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
    "id": "leg_39"
  },
  {
    "disciplina": "legislacao",
    "topico": "Lei de Crimes Hediondos (Lei 8.072/90)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Sobre os crimes hediondos e equiparados, nos termos da Lei 8.072/1990 e da CF/88, é CORRETO afirmar que:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Os crimes hediondos são insuscetíveis de fiança, graça, indulto e anistia."
      },
      {
        "letra": "B",
        "texto": "Os crimes hediondos são insuscetíveis de fiança e graça, mas admitem anistia e indulto.",
        "comentario": "Os crimes hediondos também são insuscetíveis de anistia e indulto, e não apenas de fiança e graça."
      },
      {
        "letra": "C",
        "texto": "Os crimes hediondos são insuscetíveis de fiança, mas admitem graça, indulto e anistia.",
        "comentario": "Os crimes hediondos são insuscetíveis também de graça, indulto e anistia, e não apenas de fiança."
      },
      {
        "letra": "D",
        "texto": "Os crimes hediondos são insuscetíveis de fiança, graça e anistia, mas admitem indulto.",
        "comentario": "O indulto também é vedado aos crimes hediondos e equiparados, e não apenas fiança, graça e anistia."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 5º, XLIII da CF e Art. 2º, I da Lei 8.072/90",
    "justificativa": "O Art. 5º, XLIII da CF/88 e o Art. 2º, I da Lei 8.072/90 determinam que os crimes hediondos e equiparados são insuscetíveis de fiança, graça, indulto e anistia.",
    "id": "leg_40"
  },
  {
    "disciplina": "legislacao",
    "topico": "Lei de Tortura (Lei 9.455/97)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Nos termos da Lei 9.455/1997, que tipifica o crime de tortura, assinale a alternativa CORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A tortura pode ser praticada apenas por agentes públicos no exercício de suas funções.",
        "comentario": "A tortura pode ser praticada por qualquer pessoa, inclusive particular; a condição de agente público é apenas causa de AUMENTO de pena, não elemento do tipo básico."
      },
      {
        "letra": "B",
        "texto": "O crime de tortura admite modalidade culposa quando praticada por negligência do agente.",
        "comentario": "A tortura é crime exclusivamente doloso; não há previsão de modalidade culposa na Lei 9.455/97."
      },
      {
        "letra": "C",
        "texto": "A pena é aumentada de 1/6 a 1/3 se o crime é cometido por agente público, em razão da dignidade da função, ou contra criança ou gestante."
      },
      {
        "letra": "D",
        "texto": "O condenado por tortura iniciará o cumprimento da pena obrigatoriamente em regime fechado, e a progressão exige o cumprimento de 2/3 da pena.",
        "comentario": "Não há mais regime integralmente fechado obrigatório (declarado inconstitucional pelo STF); a progressão segue os percentuais do art. 112 da LEP, não um patamar fixo de 2/3."
      }
    ],
    "gabarito": "C",
    "artigo": "Art. 1º, §4º da Lei 9.455/97",
    "justificativa": "O Art. 1º, §4º da Lei 9.455/97 prevê causas de aumento de pena de 1/6 a 1/3 quando a tortura é: cometida por agente público; contra criança, gestante, portador de deficiência, adolescente ou maior de 60 anos; ou se o crime é praticado mediante sequestro.",
    "id": "leg_41"
  },
  {
    "disciplina": "legislacao",
    "topico": "Organizações Criminosas (Lei 12.850/13)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "dificil",
    "enunciado": "Segundo a Lei 12.850/2013, o conceito de organização criminosa exige, entre outros requisitos, a associação de:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "2 ou mais pessoas estruturalmente ordenadas para a prática de infrações penais cujas penas máximas sejam superiores a 4 anos.",
        "comentario": "O mínimo exigido é de 4 pessoas, e não 2 (esse número corresponde à associação criminosa/associação para o tráfico, prevista em outros tipos)."
      },
      {
        "letra": "B",
        "texto": "4 ou mais pessoas estruturalmente ordenadas para a prática de infrações penais cujas penas máximas sejam superiores a 4 anos."
      },
      {
        "letra": "C",
        "texto": "3 ou mais pessoas estruturalmente ordenadas para a prática de crimes com pena de reclusão superior a 6 anos.",
        "comentario": "O mínimo é 4 pessoas (não 3), e o critério legal é pena MÁXIMA superior a 4 anos, e não reclusão superior a 6."
      },
      {
        "letra": "D",
        "texto": "5 ou mais pessoas estruturalmente ordenadas para a prática de crimes com pena mínima superior a 2 anos.",
        "comentario": "O número exigido é 4 (não 5), e o critério legal é pena MÁXIMA superior a 4 anos, e não pena mínima superior a 2."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, §1º da Lei 12.850/13",
    "justificativa": "O Art. 1º, §1º da Lei 12.850/2013 define organização criminosa como a associação de 4 ou mais pessoas estruturalmente ordenadas e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter, direta ou indiretamente, vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 anos, ou que sejam de caráter transnacional.",
    "id": "leg_42"
  },
  {
    "disciplina": "legislacao",
    "topico": "Código de Processo Penal — Prisão (Art. 301-316)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "Conforme o Código de Processo Penal, sobre a prisão em flagrante, assinale a alternativa CORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Qualquer pessoa pode e as autoridades policiais devem efetuar a prisão em flagrante delito."
      },
      {
        "letra": "B",
        "texto": "Apenas as autoridades policiais podem efetuar prisão em flagrante, pois é ato de poder de polícia.",
        "comentario": "Qualquer pessoa do povo PODE (faculdade) efetuar a prisão em flagrante; apenas para a autoridade policial é que a prisão é um dever (obrigatoriedade)."
      },
      {
        "letra": "C",
        "texto": "A prisão em flagrante só pode ocorrer durante o cometimento do crime, não após sua consumação.",
        "comentario": "O CPP admite outras modalidades de flagrante (impróprio/quase-flagrante e presumido/ficto) que ocorrem logo após a prática do crime, não apenas durante sua execução."
      },
      {
        "letra": "D",
        "texto": "O flagrante preparado (provocado pela polícia) é válido e gera prisão legal.",
        "comentario": "O flagrante preparado (provocado) é ilegal, conforme a Súmula 145 do STF, por se tratar de crime impossível."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 301 do CPP",
    "justificativa": "O Art. 301 do CPP determina que qualquer do povo PODERÁ (facultativo) e as autoridades policiais e seus agentes DEVERÃO (obrigatório) prender quem quer que seja encontrado em flagrante delito. O flagrante preparado é ilegal (Súmula 145 do STF).",
    "id": "leg_43"
  },
  {
    "disciplina": "legislacao",
    "topico": "Lei de Proteção de Dados (LGPD — Lei 13.709/18)",
    "peso": 1,
    "mostCobrado": false,
    "dificuldade": "medio",
    "enunciado": "Sobre a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/2018), assinale a alternativa CORRETA:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A LGPD se aplica a qualquer operação de tratamento de dados pessoais realizada por pessoa natural ou jurídica, de direito público ou privado.",
        "comentario": "A LGPD prevê exceções expressas, entre elas o tratamento por pessoa natural para fins exclusivamente particulares e não econômicos, não se aplicando a 'qualquer' operação sem ressalvas."
      },
      {
        "letra": "B",
        "texto": "A LGPD não se aplica ao tratamento de dados realizado por pessoa natural para fins exclusivamente particulares e não econômicos."
      },
      {
        "letra": "C",
        "texto": "A LGPD se aplica apenas ao tratamento de dados digitais, não abrangendo dados em meio físico.",
        "comentario": "A LGPD aplica-se também a dados tratados em meio físico, não se restringindo ao meio digital."
      },
      {
        "letra": "D",
        "texto": "Somente a alternativa A está correta.",
        "comentario": "A alternativa A está incorreta por não considerar as exceções legais expressas da LGPD, de modo que esta afirmação também é falsa."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 4º, I da Lei 13.709/18",
    "justificativa": "O Art. 4º, I da LGPD determina que a lei não se aplica ao tratamento de dados pessoais realizado por pessoa natural para fins exclusivamente particulares e não econômicos. A alternativa A está incorreta porque a LGPD tem exceções expressas, e a alternativa C está errada porque a lei se aplica também a dados em meio físico.",
    "id": "leg_44"
  },
  {
    "disciplina": "legislacao",
    "topico": "Estatuto da Criança e do Adolescente (ECA — Lei 8.069/90)",
    "peso": 1,
    "mostCobrado": false,
    "dificuldade": "facil",
    "enunciado": "Nos termos do ECA (Lei 8.069/1990), considera-se criança a pessoa com até:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "12 anos incompletos."
      },
      {
        "letra": "B",
        "texto": "12 anos completos.",
        "comentario": "O correto é 'até 12 anos incompletos' — ou seja, antes de completar 12 anos — e não '12 anos completos'."
      },
      {
        "letra": "C",
        "texto": "14 anos incompletos.",
        "comentario": "O limite etário da criança no ECA é 12 anos incompletos, e não 14."
      },
      {
        "letra": "D",
        "texto": "18 anos.",
        "comentario": "Essa é a idade limite da adolescência (art. 2º), e não da infância, que é o que a questão pergunta."
      }
    ],
    "gabarito": "A",
    "artigo": "Art. 2º do ECA",
    "justificativa": "O Art. 2º do ECA define: criança é a pessoa com até 12 anos de idade incompletos. Adolescente é a pessoa entre 12 e 18 anos de idade. A distinção é importante porque crianças são encaminhadas ao Conselho Tutelar, enquanto adolescentes respondem por ato infracional.",
    "id": "leg_45"
  },
  {
    "id": "leg_46",
    "disciplina": "legislacao",
    "topico": "Organizações Criminosas (Lei 12.850)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "De acordo com a Lei de Organizações Criminosas (Lei nº 12.850/13), para que se configure uma organização criminosa exige-se a associação de no mínimo:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "3 pessoas, com estrutura ordenada e divisão de tarefas.",
        "comentario": "O número mínimo exigido é 4 pessoas, e não 3."
      },
      {
        "letra": "B",
        "texto": "4 pessoas, estruturalmente ordenada e com divisão de tarefas."
      },
      {
        "letra": "C",
        "texto": "5 pessoas, com caráter estável e permanente.",
        "comentario": "O número exigido é 4 (não 5), embora o caráter de estabilidade e permanência também seja característico da organização criminosa."
      },
      {
        "letra": "D",
        "texto": "2 pessoas, para a prática reiterada de crimes com pena superior a 4 anos.",
        "comentario": "Esse é o requisito da associação criminosa/associação para o tráfico (2 pessoas), e não da organização criminosa, que exige no mínimo 4."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, § 1º da Lei 12.850/13",
    "justificativa": "Organização criminosa exige a associação de 4 (quatro) ou mais pessoas, estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente."
  },
  {
    "id": "leg_47",
    "disciplina": "legislacao",
    "topico": "Lei de Tortura (9.455)",
    "peso": 2,
    "mostCobrado": true,
    "dificuldade": "medio",
    "enunciado": "No crime de tortura (Lei nº 9.455/97), caso a conduta seja praticada por agente público no exercício de suas funções, qual será a consequência em relação à sua pena e ao seu cargo público?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "A pena será aumentada de metade e haverá suspensão preventiva do cargo por 180 dias.",
        "comentario": "O aumento correto é de 1/6 a 1/3, e não de metade, e não há previsão de suspensão preventiva por prazo fixo de 180 dias."
      },
      {
        "letra": "B",
        "texto": "A pena será aumentada de 1/6 a 1/3 e ocorrerá a perda automática do cargo, com interdição pelo dobro do prazo da pena."
      },
      {
        "letra": "C",
        "texto": "A pena será aumentada de 1/3 a 2/3 e o cargo será mantido até o trânsito em julgado, sem perda automática.",
        "comentario": "O aumento correto é de 1/6 a 1/3 (não 1/3 a 2/3), e a perda do cargo é efeito automático da própria sentença (§5º), e não uma mera manutenção do cargo até o trânsito em julgado."
      },
      {
        "letra": "D",
        "texto": "A pena será duplicada e haverá demissão a bem do serviço público.",
        "comentario": "Não há duplicação de pena; o aumento é de 1/6 a 1/3, e o efeito sobre o cargo é a perda automática decorrente da sentença condenatória (§5º), não uma 'demissão a bem do serviço público' (instituto administrativo distinto)."
      }
    ],
    "gabarito": "B",
    "artigo": "Art. 1º, § 4º, I e § 5º da Lei 9.455/97",
    "justificativa": "Se o crime é cometido por agente público, a pena é aumentada de 1/6 a 1/3 (§4º, I). A condenação acarreta a perda do cargo/função/emprego e a interdição por efeito automático da sentença (§5º), pelo dobro do prazo da pena aplicada."
  },
{
  "id": "leg_48",
  "disciplina": "legislacao",
  "topico": "Crimes Hediondos (Lei 8.072/90)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Sobre os crimes hediondos (Lei 8.072/90), assinale a alternativa CORRETA:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "A pena dos crimes hediondos deve ser cumprida em regime integralmente fechado, sem possibilidade de progressão.",
      "comentario": "O STF (HC 111.840/2012) declarou inconstitucional a exigência de regime integralmente fechado; hoje é possível a progressão de regime, mediante o cumprimento dos percentuais legais."
    },
    {
      "letra": "B",
      "texto": "Os crimes hediondos são inafiançáveis e insuscetíveis de anistia, graça e indulto, mas admitem liberdade provisória (sem fiança) e progressão de regime, com percentuais diferenciados conforme o Pacote Anticrime."
    },
    {
      "letra": "C",
      "texto": "Os crimes hediondos são insuscetíveis apenas de indulto, sendo permitidas anistia e graça em casos excepcionais.",
      "comentario": "Os crimes hediondos são insuscetíveis dos três institutos — anistia, graça e indulto —, e não apenas do indulto."
    },
    {
      "letra": "D",
      "texto": "Os crimes hediondos exigem o cumprimento de 2/5 da pena para progressão, qualquer que seja a condição do condenado.",
      "comentario": "Os percentuais são diferenciados conforme a condição do condenado (ex.: 40% para primário, 60% para reincidente em crime hediondo), e não um percentual único de 2/5 para todos."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 2º da Lei 8.072/90 (redação da Lei 11.464/07) c/c STF HC 111.840/2012 e Art. 112 da LEP",
  "justificativa": "Os crimes hediondos são inafiançáveis (art. 2º, II) e insuscetíveis de anistia, graça e indulto (art. 2º, I) — os três juntos, não apenas um. A antiga vedação à liberdade provisória foi removida do texto legal pela Lei 11.464/07; hoje ela é admitida (sem fiança). O regime 'integralmente fechado' da redação original de 1990 foi declarado inconstitucional pelo STF (HC 111.840/2012): hoje é 'inicialmente fechado', com progressão possível segundo os percentuais do Art. 112 da LEP (40% para primário, 60% para reincidente em crime hediondo, entre outros patamares do Pacote Anticrime)."
},
{
  "id": "leg_49",
  "disciplina": "legislacao",
  "topico": "Lei Maria da Penha (Lei 11.340/06)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Acerca das medidas protetivas de urgência previstas na Lei Maria da Penha (Lei 11.340/06), assinale a alternativa CORRETA:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "As medidas protetivas só podem ser concedidas mediante representação da vítima.",
      "comentario": "As medidas podem ser concedidas de ofício pelo juiz ou a requerimento do MP, sem exigir representação formal da vítima."
    },
    {
      "letra": "B",
      "texto": "A concessão de medida protetiva configura pré-julgamento, sendo necessário aguardar o trânsito em julgado.",
      "comentario": "As medidas protetivas têm natureza cautelar e podem ser deferidas de imediato, independentemente do trânsito em julgado da ação penal."
    },
    {
      "letra": "C",
      "texto": "O juiz pode conceder de ofício as medidas protetivas, independentemente de requerimento, a pedido da vítima ou do MP."
    },
    {
      "letra": "D",
      "texto": "As medidas protetivas são aplicáveis apenas a mulheres casadas ou em união estável com o agressor.",
      "comentario": "As medidas se aplicam a qualquer relação íntima de afeto, não se restringindo a casamento ou união estável."
    }
  ],
  "gabarito": "C",
  "artigo": "Art. 18, I e 19 da Lei 11.340/06",
  "justificativa": "O art. 19 da Lei Maria da Penha permite que o juiz conceda as medidas protetivas de ofício ou a requerimento do MP ou da ofendida. As medidas se aplicam a qualquer relação íntima de afeto, não apenas a cônjuges/companheiras (art. 5º)."
},
{
  "id": "leg_50",
  "disciplina": "legislacao",
  "topico": "Lei Maria da Penha (Lei 11.340/06)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "A Lei Maria da Penha se aplica quando há violência doméstica e familiar contra a mulher. A respeito do âmbito de aplicação, é CORRETO afirmar que:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Aplica-se apenas quando a agressão ocorre dentro do lar do casal.",
      "comentario": "A lei se aplica a qualquer relação íntima de afeto, independentemente do local em que ocorre a agressão."
    },
    {
      "letra": "B",
      "texto": "Aplica-se em qualquer relação de afeto, independentemente de coabitação ou orientação sexual."
    },
    {
      "letra": "C",
      "texto": "Aplica-se apenas quando o agressor é o cônjuge ou companheiro da vítima.",
      "comentario": "A lei abrange qualquer relação íntima de afeto, mesmo sem vínculo de cônjuge/companheiro e mesmo sem coabitação."
    },
    {
      "letra": "D",
      "texto": "Não se aplica quando a vítima e o agressor são do mesmo sexo.",
      "comentario": "O STJ firmou entendimento de que a lei se aplica também às relações homoafetivas femininas."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 5º da Lei 11.340/06 e STJ",
  "justificativa": "O art. 5º da Lei Maria da Penha prevê que se aplica a qualquer relação íntima de afeto, independentemente de coabitação e orientação sexual. O STJ firmou que se aplica também às relações homoafetivas femininas."
},
{
  "id": "leg_51",
  "disciplina": "legislacao",
  "topico": "Estatuto do Desarmamento (Lei 10.826/03)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Sobre o Estatuto do Desarmamento (Lei 10.826/03), é CORRETO afirmar que o porte ilegal de arma de fogo de uso permitido é um crime:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "De menor potencial ofensivo, processado no Juizado Especial Criminal.",
      "comentario": "A pena máxima (4 anos) supera o limite de 2 anos exigido para a classificação como crime de menor potencial ofensivo, afastando a competência do JECRIM."
    },
    {
      "letra": "B",
      "texto": "Formal (de mera conduta), independente da demonstração de perigo real."
    },
    {
      "letra": "C",
      "texto": "Material, consumado apenas com a prova de perigo concreto à coletividade.",
      "comentario": "A jurisprudência classifica o crime como de perigo ABSTRATO (formal), dispensando a prova de perigo concreto à coletividade."
    },
    {
      "letra": "D",
      "texto": "Que depende da demonstração de dolo específico para sua configuração.",
      "comentario": "Basta o dolo genérico de portar a arma sem autorização; não se exige finalidade especial (dolo específico)."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 14 da Lei 10.826/03 e jurisprudência do STF/STJ (Tema 1.256/STJ)",
  "justificativa": "O STF e o STJ pacificaram que o porte ilegal de arma de fogo é crime de PERIGO ABSTRATO (formal/mera conduta), não exigindo a comprovação de perigo concreto. A simples conduta de portar ilegalmente já consuma o crime. (Atenção: a Súmula 513 do STJ trata de tema diverso — a abolitio criminis temporária para posse de arma de uso permitido com numeração raspada — e não deve ser confundida com esta tese.)"
},
{
  "id": "leg_52",
  "disciplina": "legislacao",
  "topico": "Lei de Drogas (Lei 11.343/06)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Nos termos da Lei de Drogas (Lei 11.343/06), qual das alternativas descreve corretamente o crime de tráfico de drogas (Art. 33)?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Crime afiançável, com pena de 5 a 15 anos de reclusão.",
      "comentario": "O tráfico é INAFIANÇÁVEL (equiparado a hediondo), e não afiançável."
    },
    {
      "letra": "B",
      "texto": "Crime inafiançável e insuscetível de sursis, com pena de 5 a 15 anos.",
      "comentario": "A afirmação está correta quanto à inafiançabilidade e à vedação ao sursis, mas a alternativa mais completa (D) é a que evidencia adicionalmente a natureza de crime equiparado a hediondo, elemento central da classificação penal do delito enfatizado pela jurisprudência do STF."
    },
    {
      "letra": "C",
      "texto": "Crime afiançável e com pena de 5 a 10 anos de reclusão.",
      "comentario": "O tráfico é inafiançável, e a pena vai de 5 a 15 anos, e não de 5 a 10 anos."
    },
    {
      "letra": "D",
      "texto": "Crime inafiançável, equiparado a hediondo, com pena de 5 a 15 anos."
    }
  ],
  "gabarito": "D",
  "artigo": "Art. 33 e 44 da Lei 11.343/06",
  "justificativa": "O tráfico de drogas é equiparado a crime hediondo (art. 44 da Lei 11.343/06), sendo inafiançável e insuscetível de sursis, graça, indulto e anistia, com pena de reclusão de 5 a 15 anos (art. 33, caput). Atenção: o STF (HC 104.339/2012, com repercussão geral confirmada no RE 1.038.925) declarou inconstitucional a expressão 'liberdade provisória' do art. 44, de modo que a prisão cautelar no tráfico depende da análise dos requisitos do art. 312 do CPP, não sendo mais vedada em abstrato."
},
{
  "id": "leg_53",
  "disciplina": "legislacao",
  "topico": "Lei de Drogas (Lei 11.343/06)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "No crime de tráfico de drogas (Art. 33, Lei 11.343/06), existe a possibilidade de redução de pena. Quais são os requisitos para essa causa de diminuição?",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Ser primário, ter bons antecedentes e não se dedicar a atividades criminosas. Redução de 1/6 a 1/3.",
      "comentario": "Falta o requisito de não integrar organização criminosa, e o intervalo de redução está incorreto — o correto é de 1/6 a 2/3, e não de 1/6 a 1/3."
    },
    {
      "letra": "B",
      "texto": "Ser primário, ter bons antecedentes, não integrar organização criminosa e não se dedicar a atividades ilícitas. Redução de 1/6 a 2/3.",
      "comentario": "O texto legal do art. 33, §4º refere-se precisamente a não se dedicar a 'atividades criminosas', e não a 'atividades ilícitas' (termo mais amplo usado nesta alternativa), motivo pelo qual a redação de D é considerada mais fiel ao dispositivo legal."
    },
    {
      "letra": "C",
      "texto": "Ser primário e colaborar voluntariamente com a persecução penal. Redução de 1/3 a 2/3.",
      "comentario": "Não há requisito de colaboração com a persecução penal para o tráfico privilegiado (isso é próprio da colaboração premiada da Lei 12.850/13), e o intervalo de redução está errado — o correto é 1/6 a 2/3, não 1/3 a 2/3."
    },
    {
      "letra": "D",
      "texto": "Ser primário, ter bons antecedentes e não integrar organização criminosa. Redução de 1/6 a 2/3."
    }
  ],
  "gabarito": "D",
  "artigo": "Art. 33, §4º da Lei 11.343/06",
  "justificativa": "Art. 33, §4º: redução de 1/6 a 2/3 se o agente for primário, de bons antecedentes e NÃO SE DEDICAR A ATIVIDADES CRIMINOSAS, NEM INTEGRAR ORGANIZAÇÃO CRIMINOSA. Não há requisito de colaboração."
},
{
  "id": "leg_54",
  "disciplina": "legislacao",
  "topico": "Abuso de Autoridade (Lei 13.869/19)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "De acordo com a Lei de Abuso de Autoridade (Lei 13.869/2019), o crime de abuso de autoridade exige, para sua configuração:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Apenas o dolo, sem necessidade de qualquer finalidade especial.",
      "comentario": "A lei exige dolo específico, não bastando o dolo genérico sem finalidade especial."
    },
    {
      "letra": "B",
      "texto": "Dolo específico: finalidade de prejudicar outrem, de beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal."
    },
    {
      "letra": "C",
      "texto": "Culpa grave do agente público, decorrente de negligência evidente.",
      "comentario": "Não há modalidade culposa no abuso de autoridade; o crime exige dolo específico, e não culpa, ainda que grave."
    },
    {
      "letra": "D",
      "texto": "Dolo e o resultado concreto de dano à vítima para que o crime se consume.",
      "comentario": "O crime não exige resultado de dano concreto para se consumar; basta a conduta dolosa com a finalidade especial exigida pela lei."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 1º, §1º da Lei 13.869/19",
  "justificativa": "O art. 1º, §1º da Lei 13.869/19 exige DOLO ESPECÍFICO (elemento subjetivo especial): o agente deve agir com finalidade de prejudicar outrem, de se beneficiar ou a terceiro, ou por mero capricho ou satisfação pessoal. Não basta o dolo genérico."
},
{
  "id": "leg_55",
  "disciplina": "legislacao",
  "topico": "Abuso de Autoridade (Lei 13.869/19)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "Comete abuso de autoridade, nos termos da Lei 13.869/19, o agente público que:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Mantém preso preventivamente o indivíduo por prazo superior ao determinado em lei, desde que exista fundamentação judicial.",
      "comentario": "A questão traz a ressalva 'desde que exista fundamentação judicial', o que afasta o abuso: havendo decisão motivada, não há o excesso de prazo ilegal que caracteriza o crime."
    },
    {
      "letra": "B",
      "texto": "Submete o preso a medida de segurança por tempo superior ao estabelecido em lei."
    },
    {
      "letra": "C",
      "texto": "Decreta a prisão preventiva em flagrante de crime afiançável sem possibilidade de arbitramento de fiança.",
      "comentario": "Essa conduta não corresponde à hipótese tratada no art. 12, parágrafo único, IV, que trata do prolongamento indevido da execução de pena, prisão ou medida de segurança além do prazo legal."
    },
    {
      "letra": "D",
      "texto": "Interroga o preso sem a presença do advogado, desde que seja comunicado posteriormente.",
      "comentario": "Essa conduta não é a hipótese tratada na alternativa correta, que trata especificamente do prolongamento indevido da execução de pena, prisão preventiva ou medida de segurança além do prazo legal."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 12, parágrafo único, IV da Lei 13.869/19",
  "justificativa": "A Lei 13.869/19 tipifica como abuso de autoridade prolongar a execução de pena privativa de liberdade, de prisão temporária, de prisão preventiva, de medida de segurança ou de internação, deixando, sem motivo justo e excepcionalíssimo, de executar o alvará de soltura (art. 12, parágrafo único, IV). A alternativa A é incorreta pois a questão diz \"desde que exista fundamentação judicial\", o que afasta o abuso."
},
{
  "id": "leg_56",
  "disciplina": "legislacao",
  "topico": "Lei de Tortura (Lei 9.455/97)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Nos termos da Lei de Tortura (Lei 9.455/97), configura tortura:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Qualquer lesão corporal dolosa praticada por agente público contra pessoa detida.",
      "comentario": "A tortura exige finalidade específica (obter informação, declaração, confissão ou aplicar castigo/medida de caráter preventivo), não bastando qualquer lesão corporal dolosa sem essa finalidade."
    },
    {
      "letra": "B",
      "texto": "Constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental, com o fim de obter informação, declaração ou confissão."
    },
    {
      "letra": "C",
      "texto": "Apenas a tortura com resultado morte, pois os demais casos configuram lesão corporal qualificada.",
      "comentario": "A tortura é tipo autônomo que não exige resultado morte para sua configuração; o resultado morte é apenas causa de aumento dentro da própria Lei 9.455/97."
    },
    {
      "letra": "D",
      "texto": "Submeter à prisão indevida qualquer pessoa privada de sua liberdade, independentemente de sofrimento.",
      "comentario": "A tortura exige o efetivo sofrimento físico ou mental da vítima como elemento do tipo, não bastando a mera prisão indevida sem esse sofrimento."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 1º, I, 'a' da Lei 9.455/97",
  "justificativa": "O art. 1º, I, 'a' da Lei 9.455/97 define tortura como constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental, com o fim de obter informação, declaração ou confissão."
},
{
  "id": "leg_57",
  "disciplina": "legislacao",
  "topico": "Crimes Hediondos (Lei 8.072/90)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "São crimes hediondos, de acordo com a Lei 8.072/90 (art. 1º), EXCETO:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Homicídio qualificado e feminicídio.",
      "comentario": "Ambos são expressamente hediondos, previstos no art. 1º da Lei 8.072/90, não servindo como a exceção pedida no enunciado."
    },
    {
      "letra": "B",
      "texto": "Estupro e estupro de vulnerável.",
      "comentario": "Ambos são crimes hediondos expressamente previstos no art. 1º da Lei 8.072/90."
    },
    {
      "letra": "C",
      "texto": "Latrocínio e extorsão mediante sequestro.",
      "comentario": "Ambos constam do rol de crimes hediondos do art. 1º da Lei 8.072/90."
    },
    {
      "letra": "D",
      "texto": "Roubo circunstanciado com emprego de arma de fogo."
    }
  ],
  "gabarito": "D",
  "artigo": "Art. 1º da Lei 8.072/90",
  "justificativa": "O ROUBO circunstanciado com emprego de arma de fogo NÃO é crime hediondo. São hediondos: homicídio qualificado/feminicídio, latrocínio, extorsão mediante sequestro, estupro, estupro de vulnerável, epidemia com resultado morte, falsificação de remédios etc. (art. 1º da Lei 8.072/90)."
},
{
  "id": "leg_58",
  "disciplina": "legislacao",
  "topico": "Lei do Crime Organizado (Lei 12.850/13)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Na colaboração premiada prevista na Lei 12.850/13, é INCORRETO afirmar que:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "O colaborador pode ser beneficiado com perdão judicial, redução da pena em até 2/3 ou substituição por pena restritiva de direitos.",
      "comentario": "Esta afirmação está correta (não é a alternativa buscada nesta questão que pede a INCORRETA): o art. 4º da Lei 12.850/13 realmente prevê esses benefícios."
    },
    {
      "letra": "B",
      "texto": "O acordo de colaboração é realizado entre o MP (ou delegado, na fase de inquérito) e o colaborador, homologado pelo juiz.",
      "comentario": "Esta afirmação está correta: o acordo é celebrado entre o MP (ou o delegado, com manifestação do MP, na fase de inquérito) e o colaborador, sendo submetido à homologação judicial (art. 4º, §§6º e 7º)."
    },
    {
      "letra": "C",
      "texto": "O juiz pode analisar o mérito das declarações do colaborador antes da homologação do acordo."
    },
    {
      "letra": "D",
      "texto": "Nenhuma sentença condenatória será proferida com fundamento exclusivamente nas declarações do colaborador.",
      "comentario": "Esta afirmação está correta: o art. 4º, §16 veda expressamente que uma condenação se baseie exclusivamente nas declarações do colaborador, exigindo corroboração por outras provas."
    }
  ],
  "gabarito": "C",
  "artigo": "Art. 4º, §7º da Lei 12.850/13",
  "justificativa": "O art. 4º, §7º da Lei 12.850/13 veda expressamente que o juiz analise o MÉRITO do acordo antes da homologação. Na homologação, o juiz apenas verifica a regularidade, legalidade e voluntariedade, sem apreciar a eficácia das declarações."
},
{
  "id": "leg_59",
  "disciplina": "legislacao",
  "topico": "Estatuto do Desarmamento (Lei 10.826/03)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "Conforme o Estatuto do Desarmamento (Lei 10.826/03), o policial penal que portar arma de fogo em desacordo com os regulamentos internos da instituição comete:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Porte ilegal de arma de fogo de uso permitido — art. 14.",
      "comentario": "O art. 14, parágrafo único, I exclui do crime os militares, policiais civis, penais e demais servidores autorizados por lei; o porte irregular por servidor dentro dos limites institucionais é infração administrativa, não o crime do art. 14."
    },
    {
      "letra": "B",
      "texto": "Posse ou porte ilegal de arma de fogo de uso restrito — art. 16.",
      "comentario": "Pela mesma exclusão legal do art. 14, parágrafo único, I, o servidor autorizado não incorre no tipo penal; além disso, a situação descrita não envolve necessariamente arma de uso restrito."
    },
    {
      "letra": "C",
      "texto": "Infração administrativa interna, sem configuração de crime."
    },
    {
      "letra": "D",
      "texto": "Disparo de arma de fogo — art. 15.",
      "comentario": "O enunciado não descreve disparo de arma, mas mero desacordo com o regulamento interno no porte, hipótese tratada como infração administrativa, não como o crime de disparo do art. 15."
    }
  ],
  "gabarito": "C",
  "artigo": "Art. 14, parágrafo único, I da Lei 10.826/03",
  "justificativa": "O art. 14, parágrafo único, I exclui do crime de porte ilegal os militares, policiais civis, penais e demais servidores autorizados por lei. O porte irregular por servidor público dentro dos limites institucionais configura infração administrativa, não crime."
},
{
  "id": "leg_60",
  "disciplina": "legislacao",
  "topico": "Lei de Drogas (Lei 11.343/06)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "O art. 33, §3º da Lei de Drogas (Lei 11.343/06) prevê uma forma privilegiada, com pena reduzida em relação ao tráfico comum, para a conduta de:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Fornecer drogas, ainda que gratuitamente, a pessoa de seu relacionamento, causando sua morte.",
      "comentario": "Essa hipótese, com resultado morte, não corresponde à forma privilegiada do §3º, que trata do compartilhamento eventual e sem intuito de lucro, sem esse resultado agravado."
    },
    {
      "letra": "B",
      "texto": "Importar ou exportar droga, ainda que em pequenas quantidades, para consumo próprio.",
      "comentario": "Essa conduta se aproxima do porte para uso pessoal (art. 28), e não da forma privilegiada de cessão eventual do art. 33, §3º."
    },
    {
      "letra": "C",
      "texto": "Oferecer droga, eventualmente e sem objetivo de lucro, à pessoa de seu relacionamento, para juntos consumirem."
    },
    {
      "letra": "D",
      "texto": "Administrar estabelecimento em que ocorram práticas de uso de drogas.",
      "comentario": "Essa conduta é tipificada em dispositivo próprio (art. 33, §1º, ou art. 34, conforme o caso), não correspondendo à figura privilegiada do §3º."
    }
  ],
  "gabarito": "C",
  "artigo": "Art. 33, §3º da Lei 11.343/06",
  "justificativa": "O art. 33, §3º trata de uma forma privilegiada de tráfico: oferecer droga, eventualmente e sem objetivo de lucro, à pessoa de seu relacionamento, para juntos consumirem. Pena é menor que o tráfico comum: detenção de 6 meses a 1 ano, mais multa."
},
{
  "id": "leg_61",
  "disciplina": "legislacao",
  "topico": "Lei Maria da Penha (Lei 11.340/06)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "A Lei Maria da Penha prevê formas de violência doméstica e familiar contra a mulher. São formas de violência previstas na lei:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "Física, psicológica e sexual apenas.",
      "comentario": "Faltam mencionar as violências patrimonial e moral, também previstas no art. 7º."
    },
    {
      "letra": "B",
      "texto": "Física, psicológica, sexual, patrimonial e moral."
    },
    {
      "letra": "C",
      "texto": "Física, psicológica, sexual, moral e institucional.",
      "comentario": "A lei não prevê a modalidade 'institucional'; a quinta forma prevista no art. 7º é a PATRIMONIAL, não a institucional."
    },
    {
      "letra": "D",
      "texto": "Física, psicológica e patrimonial apenas.",
      "comentario": "Faltam as modalidades sexual e moral, também previstas no art. 7º."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 7º da Lei 11.340/06",
  "justificativa": "O art. 7º da Lei Maria da Penha prevê cinco formas de violência doméstica contra a mulher: I — violência FÍSICA; II — violência PSICOLÓGICA; III — violência SEXUAL; IV — violência PATRIMONIAL; V — violência MORAL."
},
{
  "id": "leg_62",
  "disciplina": "legislacao",
  "topico": "Lavagem de Dinheiro (Lei 9.613/98)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Sobre o crime de lavagem de dinheiro (Lei 9.613/98), com as alterações da Lei 12.683/12, assinale a alternativa CORRETA:",
  "alternativas": [
    {
      "letra": "A",
      "texto": "O crime antecedente deve ser obrigatoriamente um crime hediondo para que haja lavagem de dinheiro.",
      "comentario": "Após a Lei 12.683/12, o rol taxativo de crimes antecedentes foi eliminado: qualquer infração penal (crime ou contravenção) pode ser antecedente da lavagem, não apenas os hediondos."
    },
    {
      "letra": "B",
      "texto": "O crime de lavagem pode ter como antecedente qualquer infração penal — crime ou contravenção."
    },
    {
      "letra": "C",
      "texto": "A lavagem de dinheiro exige que o agente seja o mesmo que cometeu o crime antecedente.",
      "comentario": "A lavagem pode ser praticada por terceiro distinto do autor do crime antecedente, não sendo essa identidade um requisito do tipo."
    },
    {
      "letra": "D",
      "texto": "A autolavagem (self-laundering) não é punível no direito brasileiro.",
      "comentario": "A autolavagem é punível no Brasil: o próprio autor do crime antecedente pode responder também pela lavagem dos valores dele decorrentes."
    }
  ],
  "gabarito": "B",
  "artigo": "Art. 1º da Lei 9.613/98 (redação da Lei 12.683/12)",
  "justificativa": "Após a Lei 12.683/12, o rol taxativo de crimes antecedentes foi eliminado: qualquer infração penal (crime OU contravenção) pode ser antecedente da lavagem. A autolavagem é punível no Brasil."
},
{
  "id": "leg_63",
  "disciplina": "legislacao",
  "topico": "Lavagem de Dinheiro - Fases (Lei 9.613/98)",
  "peso": 1,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "A doutrina identifica, no processo de lavagem de dinheiro, três fases sequenciais. Assinale a alternativa que as apresenta na ordem correta:",
  "alternativas": [
    { "letra": "A", "texto": "Integração, ocultação e colocação.", "comentario": "A ordem correta é colocação, ocultação/estratificação e, por último, integração — a colocação não ocorre por último, como sugere esta alternativa." },
    { "letra": "B", "texto": "Colocação (placement), ocultação/estratificação (layering) e integração (integration)." },
    { "letra": "C", "texto": "Fiscalização, denúncia e julgamento.", "comentario": "Essas são fases do processo penal/persecução, não as fases doutrinárias econômicas da lavagem de dinheiro." },
    { "letra": "D", "texto": "Investigação, indiciamento e condenação.", "comentario": "Também são etapas da persecução penal, não as fases econômicas da lavagem descritas pela doutrina (colocação, ocultação e integração)." }
  ],
  "gabarito": "B",
  "artigo": "Doutrina sobre a Lei 9.613/98",
  "justificativa": "A lavagem de dinheiro é descrita em três fases: colocação (introdução dos valores ilícitos no sistema financeiro), ocultação/estratificação (movimentações para dificultar o rastreamento da origem) e integração (reinserção dos recursos na economia com aparência de licitude)."
},
{
  "id": "leg_64",
  "disciplina": "legislacao",
  "topico": "Lavagem de Dinheiro - Papel do COAF",
  "peso": 1,
  "dificuldade": "medio",
  "enunciado": "No combate à lavagem de dinheiro no Brasil, o Conselho de Controle de Atividades Financeiras (COAF) tem como principal função:",
  "alternativas": [
    { "letra": "A", "texto": "Processar e julgar criminalmente os responsáveis por lavagem de dinheiro.", "comentario": "O COAF não tem função jurisdicional; é órgão de inteligência financeira, apenas comunicando suspeitas às autoridades competentes." },
    { "letra": "B", "texto": "Receber, examinar e identificar operações financeiras suspeitas, comunicando-as às autoridades competentes para investigação." },
    { "letra": "C", "texto": "Substituir o Ministério Público na propositura da ação penal.", "comentario": "O COAF não possui legitimidade para propor ação penal, papel exclusivo do Ministério Público (ou do querelante, em ação privada)." },
    { "letra": "D", "texto": "Conceder indulto às pessoas condenadas por lavagem de dinheiro.", "comentario": "O COAF não tem competência para conceder indulto, ato de natureza político-administrativa de competência do Presidente da República." }
  ],
  "gabarito": "B",
  "artigo": "Lei 9.613/98 (Capítulo sobre o COAF)",
  "justificativa": "O COAF é órgão de inteligência financeira que recebe, examina e identifica operações suspeitas de lavagem de dinheiro e financiamento do terrorismo, comunicando-as às autoridades competentes (Polícia, Ministério Público) para investigação — não tem função judicante ou persecutória própria."
},
{
  "id": "leg_65",
  "disciplina": "legislacao",
  "topico": "Lei Anticorrupção - Sanções e Acordo de Leniência",
  "peso": 1,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "Segundo a Lei nº 12.846/2013 (Lei Anticorrupção), o acordo de leniência celebrado entre a autoridade máxima do órgão e a pessoa jurídica que colabora efetivamente com as investigações pode resultar em:",
  "alternativas": [
    { "letra": "A", "texto": "Isenção total e automática de qualquer sanção, inclusive a reparação do dano.", "comentario": "A reparação integral do dano causado à administração pública nunca é dispensada pelo acordo de leniência." },
    { "letra": "B", "texto": "Redução de até 2/3 do valor da multa aplicável, além de isenção ou atenuação de sanções administrativas e judiciais, exceto a reparação integral do dano." },
    { "letra": "C", "texto": "Extinção da responsabilidade penal dos administradores da empresa, ainda que não previsto nesta lei.", "comentario": "A Lei 12.846/13 trata da responsabilização administrativa/civil da pessoa jurídica; não extingue a responsabilidade penal individual dos administradores, que segue regras próprias de outras leis." },
    { "letra": "D", "texto": "Transferência da responsabilidade da pessoa jurídica para o Estado.", "comentario": "Não existe essa transferência; a pessoa jurídica permanece responsável, apenas com benefícios de redução/isenção de sanções." }
  ],
  "gabarito": "B",
  "artigo": "Lei 12.846/2013 (Acordo de Leniência)",
  "justificativa": "O acordo de leniência pode reduzir em até 2/3 o valor da multa e isentar ou atenuar sanções administrativas e judiciais, mas a reparação integral do dano causado à administração pública nunca é dispensada."
},
{
  "id": "leg_66",
  "disciplina": "legislacao",
  "topico": "Lei Anticorrupção - Concurso de Responsabilidades",
  "peso": 1,
  "dificuldade": "medio",
  "enunciado": "De acordo com a Lei nº 12.846/2013, a responsabilização da pessoa jurídica pela prática de atos lesivos à administração pública:",
  "alternativas": [
    { "letra": "A", "texto": "Exclui a responsabilização individual dos dirigentes ou administradores que tenham participado do ato ilícito.", "comentario": "A lei expressamente NÃO exclui a responsabilização individual dos dirigentes/administradores; ambas coexistem, cada uma na medida da respectiva culpabilidade." },
    { "letra": "B", "texto": "Não exclui a responsabilidade individual de seus dirigentes, administradores ou de qualquer pessoa natural que tenha concorrido para o ato ilícito." },
    { "letra": "C", "texto": "Só pode ser aplicada após o trânsito em julgado da ação penal contra os administradores.", "comentario": "A responsabilização administrativa e civil da pessoa jurídica é independente e não depende do trânsito em julgado de eventual ação penal contra as pessoas físicas envolvidas." },
    { "letra": "D", "texto": "Depende da comprovação de culpa da pessoa jurídica, afastando a responsabilidade objetiva.", "comentario": "A Lei Anticorrupção adota responsabilidade OBJETIVA da pessoa jurídica nas esferas administrativa e civil, dispensando a comprovação de culpa." }
  ],
  "gabarito": "B",
  "artigo": "Art. 3º da Lei 12.846/2013",
  "justificativa": "A responsabilização objetiva administrativa e civil da pessoa jurídica coexiste com a responsabilidade individual de seus dirigentes/administradores ou de qualquer pessoa física que tenha concorrido para o ato lesivo, na medida de sua culpabilidade — as responsabilidades não se excluem."
},
{
  "id": "leg_67",
  "disciplina": "legislacao",
  "topico": "Pacote Anticrime - Juiz das Garantias",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "O instituto do \"juiz das garantias\", introduzido no Código de Processo Penal pela Lei nº 13.964/2019 (Pacote Anticrime), tem como principal função:",
  "alternativas": [
    { "letra": "A", "texto": "Julgar o mérito da ação penal e proferir a sentença condenatória ou absolutória.", "comentario": "Julgar o mérito e sentenciar é função do juiz do processo/instrução, e não do juiz das garantias, que atua apenas na fase de investigação e se afasta antes da fase de julgamento." },
    { "letra": "B", "texto": "Acompanhar a fase de investigação criminal, controlando a legalidade dos atos investigatórios e a proteção dos direitos fundamentais do investigado." },
    { "letra": "C", "texto": "Substituir o Ministério Público na condução do inquérito policial.", "comentario": "O juiz das garantias fiscaliza a legalidade dos atos investigatórios, mas não conduz o inquérito nem substitui o MP em sua função de controle externo da atividade policial." },
    { "letra": "D", "texto": "Presidir o júri popular nos crimes dolosos contra a vida.", "comentario": "Presidir o júri é função do juiz do processo/tribunal do júri; a atuação do juiz das garantias se encerra com o recebimento da denúncia, antes dessa fase." }
  ],
  "gabarito": "B",
  "artigo": "Lei 13.964/2019 (CPP)",
  "justificativa": "O juiz das garantias fiscaliza a fase investigatória, controlando a legalidade dos atos de investigação e assegurando os direitos fundamentais do investigado, sendo, em regra, magistrado distinto daquele que julgará o processo (estrutura acusatória)."
},
{
  "id": "leg_68",
  "disciplina": "legislacao",
  "topico": "Pacote Anticrime - Prisão Preventiva",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "Após a alteração do art. 311 do CPP pela Lei nº 13.964/2019, a prisão preventiva:",
  "alternativas": [
    { "letra": "A", "texto": "Pode ser decretada pelo juiz de ofício, a qualquer momento da investigação ou do processo.", "comentario": "A Lei 13.964/2019 suprimiu justamente a expressão \"de ofício\" do art. 311, vedando ao juiz decretar a preventiva por iniciativa própria." },
    { "letra": "B", "texto": "Não pode mais ser decretada de ofício pelo juiz, dependendo de requerimento do Ministério Público, do querelante, do assistente, ou de representação da autoridade policial." },
    { "letra": "C", "texto": "Foi extinta do ordenamento jurídico brasileiro, restando apenas a prisão em flagrante.", "comentario": "A prisão preventiva continua plenamente vigente no CPP; apenas não pode mais ser decretada de ofício pelo juiz." },
    { "letra": "D", "texto": "Passou a exigir aprovação prévia do Conselho Nacional de Justiça em todos os casos.", "comentario": "Não há essa exigência; a competência para decretar a preventiva permanece do juiz competente, sem qualquer intervenção do CNJ." }
  ],
  "gabarito": "B",
  "artigo": "Art. 311 do CPP (redação da Lei 13.964/2019)",
  "justificativa": "O Pacote Anticrime suprimiu a expressão \"de ofício\" do art. 311, vedando ao juiz decretar prisão preventiva por iniciativa própria — deve haver requerimento do MP, do querelante, do assistente ou representação da autoridade policial, reforçando a estrutura acusatória do processo penal."
},
{
  "id": "leg_69",
  "disciplina": "legislacao",
  "topico": "Pacote Anticrime - Banco de Perfis Genéticos e Limite de Pena",
  "peso": 2,
  "dificuldade": "medio",
  "enunciado": "Entre as alterações promovidas pela Lei nº 13.964/2019 (Pacote Anticrime), é correto afirmar que:",
  "alternativas": [
    { "letra": "A", "texto": "O limite máximo de cumprimento de pena privativa de liberdade passou de 30 para 40 anos, e tornou-se obrigatória a coleta de perfil genético de condenados por crime hediondo ou com violência grave contra pessoa." },
    { "letra": "B", "texto": "O limite máximo de cumprimento de pena foi reduzido de 30 para 20 anos.", "comentario": "O limite foi AUMENTADO, de 30 para 40 anos, e não reduzido para 20." },
    { "letra": "C", "texto": "A coleta de perfil genético tornou-se facultativa para todos os tipos de condenação.", "comentario": "A coleta tornou-se OBRIGATÓRIA para condenados por crime hediondo ou crime doloso com violência grave contra pessoa, não facultativa nem generalizada a todos os tipos de condenação." },
    { "letra": "D", "texto": "Não houve qualquer alteração relacionada ao limite de cumprimento de pena.", "comentario": "Houve alteração expressa: o art. 75 do CP passou a fixar o limite máximo de cumprimento de pena em 40 anos, antes fixado em 30." }
  ],
  "gabarito": "A",
  "artigo": "Art. 75 do CP e Lei 12.037/2009 (redação da Lei 13.964/2019)",
  "justificativa": "O art. 75 do CP passou a fixar em 40 anos o limite máximo de cumprimento de pena (antes 30 anos), e a Lei 12.037/2009 passou a exigir a coleta obrigatória do perfil genético de condenados por crime hediondo ou crime doloso com violência grave contra pessoa, no ingresso ao estabelecimento prisional."
},
{
  "id": "leg_70",
  "disciplina": "legislacao",
  "topico": "Pacote Anticrime - Acordo de Não Persecução Penal (ANPP)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "O Acordo de Não Persecução Penal (ANPP), instituído pela Lei nº 13.964/2019, pode ser proposto pelo Ministério Público, em vez de oferecer denúncia, ao investigado que:",
  "alternativas": [
    { "letra": "A", "texto": "Tenha confessado formal e circunstancialmente a prática de infração penal, não sendo caso de arquivamento, e desde que não seja cabível transação penal, observados os demais requisitos legais (não reincidente, sem indícios de conduta criminal habitual, reiterada ou profissional, e pena mínima inferior a 4 anos sem violência ou grave ameaça)." },
    { "letra": "B", "texto": "Seja reincidente específico em crime hediondo, independentemente de confissão.", "comentario": "A reincidência (especialmente em crime hediondo) é justamente causa que AFASTA o ANPP, e a confissão formal e circunstanciada é requisito obrigatório para sua proposta." },
    { "letra": "C", "texto": "Tenha sido condenado anteriormente por qualquer crime, mesmo que já tenha cumprido a pena integralmente.", "comentario": "A lei veda o ANPP a quem for reincidente ou tenha sido beneficiado por ANPP, transação penal ou suspensão condicional nos 5 anos anteriores — não qualquer condenação pretérita já cumprida." },
    { "letra": "D", "texto": "Esteja sendo processado por crime com pena mínima superior a 8 anos.", "comentario": "O requisito legal é exatamente o oposto: pena MÍNIMA cominada inferior a 4 anos, e sem violência ou grave ameaça à pessoa." }
  ],
  "gabarito": "A",
  "artigo": "Art. 28-A do CPP (Lei 13.964/2019)",
  "justificativa": "O ANPP exige confissão formal e circunstanciada, ausência de indícios de conduta criminal habitual/reiterada/profissional (exceto se irrelevância penal do infração pretérita), não reincidência, e que a infração não tenha sido cometida com violência ou grave ameaça, com pena mínima cominada inferior a 4 anos."
},
{
  "id": "leg_71",
  "disciplina": "legislacao",
  "topico": "Lei de Abuso de Autoridade - Requisitos do Crime",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "medio",
  "enunciado": "Segundo a Lei nº 13.869/2019 (Lei de Abuso de Autoridade), a configuração do crime de abuso de autoridade exige, cumulativamente:",
  "alternativas": [
    { "letra": "A", "texto": "Sujeito ativo agente público, conduta tipificada em dispositivo específico da lei, e dolo específico (finalidade de prejudicar outrem, beneficiar-se ou a terceiro, ou mero capricho/satisfação pessoal)." },
    { "letra": "B", "texto": "Apenas a prática de qualquer conduta que cause constrangimento a terceiro, independentemente da intenção do agente.", "comentario": "A lei exige dolo específico; sem a finalidade de prejudicar, beneficiar-se/a terceiro ou mero capricho, a conduta não configura abuso de autoridade, mesmo que cause constrangimento." },
    { "letra": "C", "texto": "Que o agente público tenha, necessariamente, mais de 10 anos de exercício no cargo.", "comentario": "Não há exigência de tempo mínimo de exercício no cargo para a configuração do crime; o requisito é apenas a condição de agente público." },
    { "letra": "D", "texto": "Que a conduta tenha causado dano patrimonial comprovado à vítima.", "comentario": "O crime de abuso de autoridade é formal e não exige resultado de dano patrimonial; basta a conduta dolosa específica tipificada na lei." }
  ],
  "gabarito": "A",
  "artigo": "Lei 13.869/2019",
  "justificativa": "A lei exige o dolo específico: a mera culpa (negligência, imprudência) ou o erro na interpretação de norma não configuram abuso de autoridade — o crime exige a finalidade específica de prejudicar, beneficiar ou satisfação pessoal do agente."
},
{
  "id": "leg_72",
  "disciplina": "legislacao",
  "topico": "Lei de Abuso de Autoridade - Sujeito Ativo",
  "peso": 2,
  "dificuldade": "medio",
  "enunciado": "Segundo a Lei nº 13.869/2019, o crime de abuso de autoridade é crime próprio, podendo ser cometido por:",
  "alternativas": [
    { "letra": "A", "texto": "Qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, Estados, DF, Municípios e Territórios." },
    { "letra": "B", "texto": "Exclusivamente por Delegados de Polícia.", "comentario": "A lei não restringe o sujeito ativo a Delegados de Polícia; abrange qualquer agente público no exercício de suas funções." },
    { "letra": "C", "texto": "Apenas por membros do Poder Judiciário e do Ministério Público.", "comentario": "O conceito de agente público adotado pela lei é amplo, não se limitando a magistrados e membros do MP." },
    { "letra": "D", "texto": "Somente por militares das Forças Armadas em operações de garantia da lei e da ordem.", "comentario": "Não há essa restrição; qualquer agente público de qualquer Poder e esfera federativa pode ser sujeito ativo do crime." }
  ],
  "gabarito": "A",
  "artigo": "Lei 13.869/2019",
  "justificativa": "A lei adota um conceito amplo de agente público como sujeito ativo, abrangendo qualquer servidor, de qualquer Poder e esfera federativa, no exercício de suas funções ou a pretexto de exercê-las — não se restringindo a nenhuma categoria específica."
},
{
  "id": "leg_73",
  "disciplina": "legislacao",
  "topico": "Lei 12.850/2013 - Conceito de Organização Criminosa",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "Segundo o art. 1º, §1º da Lei nº 12.850/2013, considera-se organização criminosa a associação de:",
  "alternativas": [
    { "letra": "A", "texto": "4 (quatro) ou mais pessoas, estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 anos, ou que sejam de caráter transnacional." },
    { "letra": "B", "texto": "2 (duas) pessoas, independentemente de estrutura organizacional ou divisão de tarefas.", "comentario": "O mínimo exigido é de 4 pessoas, com estrutura ordenada e divisão de tarefas — 2 pessoas sem esses requisitos não configuram organização criminosa." },
    { "letra": "C", "texto": "Qualquer grupo de pessoas que pratique uma única infração penal isolada, sem estabilidade ou permanência.", "comentario": "A organização criminosa pressupõe estrutura organizada e alguma estabilidade, e não uma prática isolada e eventual de uma única infração." },
    { "letra": "D", "texto": "10 (dez) ou mais pessoas, exclusivamente para o tráfico internacional de drogas.", "comentario": "O número mínimo é 4 pessoas, e a finalidade não se restringe ao tráfico internacional de drogas, abrangendo qualquer infração com pena máxima superior a 4 anos ou caráter transnacional." }
  ],
  "gabarito": "A",
  "artigo": "Art. 1º, §1º da Lei 12.850/2013",
  "justificativa": "A lei exige associação de 4 ou mais pessoas, estruturalmente ordenada, com divisão de tarefas (ainda que informal), objetivando vantagem de qualquer natureza mediante infrações penais com pena máxima superior a 4 anos ou de caráter transnacional."
},
{
  "id": "leg_74",
  "disciplina": "legislacao",
  "topico": "Lei 12.850/2013 - Colaboração Premiada",
  "peso": 2,
  "dificuldade": "dificil",
  "enunciado": "A colaboração premiada, instrumento de investigação previsto na Lei nº 12.850/2013, pode resultar, para o colaborador que preste efetiva colaboração à investigação, em:",
  "alternativas": [
    { "letra": "A", "texto": "Perdão judicial, redução da pena privativa de liberdade em até 2/3, ou substituição por restritiva de direitos, conforme os resultados obtidos com a colaboração." },
    { "letra": "B", "texto": "Extinção automática de todos os processos em curso contra o colaborador, independentemente do resultado da colaboração.", "comentario": "Os benefícios dependem da efetividade da colaboração e de decisão judicial motivada; não há extinção automática de processos em curso." },
    { "letra": "C", "texto": "Imunidade penal absoluta, vedada qualquer responsabilização futura.", "comentario": "A lei não prevê imunidade absoluta; os benefícios são graduados (perdão judicial, redução ou substituição de pena) conforme os resultados obtidos com a colaboração." },
    { "letra": "D", "texto": "Apenas o pagamento de multa, sem qualquer benefício relacionado à pena privativa de liberdade.", "comentario": "Os benefícios legais incidem justamente sobre a pena privativa de liberdade (redução, substituição ou perdão), não se limitando ao pagamento de multa." }
  ],
  "gabarito": "A",
  "artigo": "Art. 4º da Lei 12.850/2013",
  "justificativa": "O art. 4º prevê que o juiz pode conceder perdão judicial, reduzir em até 2/3 a pena privativa de liberdade, ou substituí-la por restritiva de direitos, conforme os resultados obtidos com a colaboração — não há extinção automática de processos nem imunidade absoluta."
},
{
  "id": "leg_75",
  "disciplina": "legislacao",
  "topico": "Lei de Tortura - Causa de Aumento (Pessoa Presa)",
  "peso": 2,
  "mostCobrado": true,
  "dificuldade": "dificil",
  "enunciado": "Segundo o art. 1º, §4º, II da Lei nº 9.455/1997, a pena do crime de tortura é aumentada de um sexto até um terço quando o crime é cometido:",
  "alternativas": [
    { "letra": "A", "texto": "Contra criança, gestante, portador de deficiência, adolescente ou maior de 60 anos, ou contra pessoa presa ou sujeita a medida de segurança." },
    { "letra": "B", "texto": "Em qualquer circunstância, independentemente da condição da vítima, sem previsão de causa de aumento específica.", "comentario": "A lei prevê expressamente uma causa de aumento vinculada à condição da vítima (art. 1º, §4º, II), e não uma incidência genérica e indiferente a essa condição." },
    { "letra": "C", "texto": "Apenas quando praticado por agente estranho aos quadros da Administração Pública.", "comentario": "A causa de aumento do inciso II está ligada à condição de vulnerabilidade da VÍTIMA (ou sua situação de custódia), e não à origem funcional do agente." },
    { "letra": "D", "texto": "Somente quando resulta em morte da vítima, hipótese que já é tratada como qualificadora, não como causa de aumento.", "comentario": "O resultado morte é tratado por dispositivo distinto (qualificadora do §3º), diferente desta causa de aumento do §4º, II, que decorre da vulnerabilidade ou condição de custódia da vítima." }
  ],
  "gabarito": "A",
  "artigo": "Art. 1º, §4º, II da Lei 9.455/1997",
  "justificativa": "A causa de aumento (1/6 a 1/3) protege especialmente pessoas em situação de vulnerabilidade, incluindo presos e pessoas sujeitas a medida de segurança — dispositivo de particular relevância para a atuação da Polícia Penal, já que reforça a responsabilização agravada em casos de tortura praticada contra pessoas sob custódia do Estado."
},
{
  "id": "leg_76",
  "disciplina": "legislacao",
  "topico": "Estatuto do Desarmamento - Posse x Porte Ilegal",
  "peso": 2,
  "dificuldade": "medio",
  "enunciado": "Segundo a Lei nº 10.826/2003 (Estatuto do Desarmamento), a principal diferença entre os crimes de posse irregular (art. 12) e porte ilegal (art. 14) de arma de fogo de uso permitido é que:",
  "alternativas": [
    { "letra": "A", "texto": "A posse irregular ocorre no interior da residência ou local de trabalho (desde que o agente seja o titular/responsável legal do estabelecimento), enquanto o porte ilegal ocorre fora desses locais, envolvendo o transporte ou uso da arma em via pública ou local não autorizado." },
    { "letra": "B", "texto": "Não há qualquer diferença prática entre os dois crimes, sendo sinônimos.", "comentario": "Há diferença clara de local de ocorrência (dentro ou fora de casa/trabalho) e de pena entre os dois tipos, que não são sinônimos." },
    { "letra": "C", "texto": "A posse irregular é crime mais grave que o porte ilegal, invertendo a lógica usual das penas.", "comentario": "É o contrário: o porte ilegal (reclusão de 2 a 4 anos) tem pena mais grave que a posse irregular (detenção de 1 a 3 anos)." },
    { "letra": "D", "texto": "O porte ilegal só se aplica a armas de uso restrito, nunca a armas de uso permitido.", "comentario": "O art. 14 trata justamente do porte ilegal de arma de uso PERMITIDO; o porte/posse de arma de uso restrito é tratado por outro tipo penal, o art. 16." }
  ],
  "gabarito": "A",
  "artigo": "Arts. 12 e 14 da Lei 10.826/2003",
  "justificativa": "A posse irregular (art. 12) pressupõe a arma dentro da residência/local de trabalho do titular; o porte ilegal (art. 14) envolve portar, transportar ou manter a arma fora desses locais, sem autorização — o porte ilegal tem pena mais grave (2 a 4 anos) que a posse irregular (1 a 3 anos), refletindo o maior risco à segurança coletiva quando a arma circula fora do ambiente controlado."
}
];
