// ============================================================
// QUESTIONS_INFORMATICA — Noções de Informática, disciplina do
// bloco P1 (Conhecimentos Gerais) do edital da PPPE (Cebraspe).
// Conteúdo genérico (sistemas operacionais, editores de texto/
// planilha, internet, segurança da informação) — não depende de
// legislação estadual, aplicável a qualquer concurso.
// ============================================================

const QUESTIONS_INFORMATICA = [
  {
    id: 'info_1',
    disciplina: 'informatica',
    topico: 'Sistema Operacional (Windows) - Conceitos Básicos',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'No sistema operacional Windows (versões 10/11), qual atalho de teclado é utilizado para alternar rapidamente entre janelas de aplicativos abertos?',
    alternativas: [
      { letra: 'A', texto: 'Ctrl + C' },
      { letra: 'B', texto: 'Alt + Tab' },
      { letra: 'C', texto: 'Ctrl + Z' },
      { letra: 'D', texto: 'Shift + Delete' }
    ],
    gabarito: 'B',
    justificativa: 'Alt + Tab exibe as janelas abertas e permite alternar entre elas. Ctrl+C copia, Ctrl+Z desfaz e Shift+Delete exclui permanentemente um arquivo (sem enviar à lixeira).'
  },
  {
    id: 'info_2',
    disciplina: 'informatica',
    topico: 'Sistema Operacional - Gerenciamento de Arquivos',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Ao excluir um arquivo utilizando a combinação de teclas "Shift + Delete" no Windows, o comportamento padrão é:',
    alternativas: [
      { letra: 'A', texto: 'O arquivo é movido para a Lixeira, podendo ser restaurado normalmente.' },
      { letra: 'B', texto: 'O arquivo é excluído permanentemente, sem passar pela Lixeira.' },
      { letra: 'C', texto: 'O arquivo é apenas ocultado, mas continua acessível pelo explorador de arquivos.' },
      { letra: 'D', texto: 'O arquivo é automaticamente enviado para um backup em nuvem.' }
    ],
    gabarito: 'B',
    justificativa: 'A combinação Shift + Delete exclui o arquivo definitivamente, ignorando a Lixeira — diferente da tecla Delete isolada, que move o item para a Lixeira.'
  },
  {
    id: 'info_3',
    disciplina: 'informatica',
    topico: 'Editor de Texto (Word) - Formatação',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Em editores de texto como o Microsoft Word, a combinação de teclas "Ctrl + N" (ou "Ctrl + B", em alguns layouts) é usualmente empregada para:',
    alternativas: [
      { letra: 'A', texto: 'Sublinhar o texto selecionado.' },
      { letra: 'B', texto: 'Aplicar negrito ao texto selecionado.' },
      { letra: 'C', texto: 'Aplicar itálico ao texto selecionado.' },
      { letra: 'D', texto: 'Centralizar o parágrafo selecionado.' }
    ],
    gabarito: 'B',
    justificativa: 'Ctrl + N (ou Ctrl + B, dependendo do idioma do teclado) aplica ou remove a formatação em negrito no texto selecionado.'
  },
  {
    id: 'info_4',
    disciplina: 'informatica',
    topico: 'Editor de Texto - Localizar e Substituir',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Em editores de texto como Word e LibreOffice Writer, o recurso "Localizar e Substituir" é acionado, por padrão, pela combinação de teclas:',
    alternativas: [
      { letra: 'A', texto: 'Ctrl + F para localizar e Ctrl + H (ou Ctrl + U) para substituir.' },
      { letra: 'B', texto: 'Ctrl + P para localizar e Ctrl + S para substituir.' },
      { letra: 'C', texto: 'Alt + F4 para localizar e Alt + Tab para substituir.' },
      { letra: 'D', texto: 'F1 para localizar e F2 para substituir.' }
    ],
    gabarito: 'A',
    justificativa: 'Ctrl + F abre a busca ("Localizar"); Ctrl + H (no Word) ou Ctrl + U (no LibreOffice Writer) abre "Localizar e Substituir".'
  },
  {
    id: 'info_5',
    disciplina: 'informatica',
    topico: 'Planilha Eletrônica (Excel) - Fórmulas Básicas',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Em uma planilha eletrônica (Excel/LibreOffice Calc), a fórmula "=SOMA(A1:A5)" tem como resultado:',
    alternativas: [
      { letra: 'A', texto: 'A multiplicação dos valores das células A1 até A5.' },
      { letra: 'B', texto: 'A soma dos valores das células A1 até A5.' },
      { letra: 'C', texto: 'A média aritmética dos valores das células A1 até A5.' },
      { letra: 'D', texto: 'A contagem de quantas células, entre A1 e A5, não estão vazias.' }
    ],
    gabarito: 'B',
    justificativa: 'A função SOMA() retorna o resultado da adição dos valores numéricos contidos no intervalo de células especificado — nesse caso, de A1 até A5.'
  },
  {
    id: 'info_6',
    disciplina: 'informatica',
    topico: 'Planilha Eletrônica - Função Média',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Qual função, em planilhas eletrônicas, retorna a média aritmética de um intervalo de células numéricas?',
    alternativas: [
      { letra: 'A', texto: '=SOMA()' },
      { letra: 'B', texto: '=CONT.SE()' },
      { letra: 'C', texto: '=MÉDIA()' },
      { letra: 'D', texto: '=MÁXIMO()' }
    ],
    gabarito: 'C',
    justificativa: 'A função MÉDIA() calcula a média aritmética simples dos valores numéricos do intervalo informado. CONT.SE conta células que satisfazem um critério, e MÁXIMO retorna o maior valor do intervalo.'
  },
  {
    id: 'info_7',
    disciplina: 'informatica',
    topico: 'Internet - Navegadores e URLs',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Em um endereço de página da internet (URL) que começa com "https://", a letra "s" adicional (em relação a "http://") indica que a conexão:',
    alternativas: [
      { letra: 'A', texto: 'É mais rápida, mas não necessariamente mais segura.' },
      { letra: 'B', texto: 'Utiliza criptografia (SSL/TLS), tornando a comunicação mais segura.' },
      { letra: 'C', texto: 'É restrita a redes locais (intranet), sem acesso externo.' },
      { letra: 'D', texto: 'Só funciona em navegadores específicos, como o Internet Explorer.' }
    ],
    gabarito: 'B',
    justificativa: 'O "s" de HTTPS significa "secure" — a comunicação entre o navegador e o servidor é criptografada por meio de protocolos como SSL/TLS, protegendo os dados transmitidos contra interceptação.'
  },
  {
    id: 'info_8',
    disciplina: 'informatica',
    topico: 'Internet - Correio Eletrônico',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'No uso de correio eletrônico (e-mail), o campo "CCO" (cópia carbono oculta) tem a seguinte característica:',
    alternativas: [
      { letra: 'A', texto: 'Os destinatários incluídos nesse campo recebem a mensagem, mas seus endereços não são visíveis aos demais destinatários.' },
      { letra: 'B', texto: 'A mensagem é enviada apenas para o remetente, como rascunho.' },
      { letra: 'C', texto: 'Os destinatários do campo CCO recebem a mensagem com prioridade alta automática.' },
      { letra: 'D', texto: 'É equivalente ao campo "Para", sem nenhuma diferença prática.' }
    ],
    gabarito: 'A',
    justificativa: 'CCO (cópia carbono oculta, ou "Bcc" em inglês) permite enviar uma cópia da mensagem sem que os demais destinatários (nos campos "Para" e "CC") vejam o endereço desse destinatário oculto.'
  },
  {
    id: 'info_9',
    disciplina: 'informatica',
    topico: 'Segurança da Informação - Malware',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Um programa malicioso que se disfarça de software legítimo para induzir o usuário a executá-lo, mas que não se replica automaticamente como um vírus, é classificado como:',
    alternativas: [
      { letra: 'A', texto: 'Worm.' },
      { letra: 'B', texto: 'Cavalo de Troia (Trojan).' },
      { letra: 'C', texto: 'Firewall.' },
      { letra: 'D', texto: 'Antivírus.' }
    ],
    gabarito: 'B',
    justificativa: 'O Cavalo de Troia (Trojan) se disfarça de programa legítimo para enganar o usuário, mas não se autorreplica como vírus ou worm. Firewall e antivírus são ferramentas de proteção, não malwares.'
  },
  {
    id: 'info_10',
    disciplina: 'informatica',
    topico: 'Segurança da Informação - Phishing',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'facil',
    enunciado: 'A técnica de fraude eletrônica em que o golpista envia mensagens (e-mail, SMS) se passando por uma instituição confiável, induzindo a vítima a fornecer dados sigilosos (senhas, dados bancários), é conhecida como:',
    alternativas: [
      { letra: 'A', texto: 'Phishing.' },
      { letra: 'B', texto: 'Backup.' },
      { letra: 'C', texto: 'Criptografia.' },
      { letra: 'D', texto: 'Firewall.' }
    ],
    gabarito: 'A',
    justificativa: 'Phishing é a técnica de engenharia social que usa mensagens fraudulentas, geralmente imitando instituições confiáveis, para induzir a vítima a revelar informações sigilosas ou instalar malware.'
  },
  {
    id: 'info_11',
    disciplina: 'informatica',
    topico: 'Segurança da Informação - Backup',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Em relação às cópias de segurança (backup), o backup do tipo "incremental" caracteriza-se por:',
    alternativas: [
      { letra: 'A', texto: 'Copiar todos os arquivos do sistema, independentemente de alterações, a cada execução.' },
      { letra: 'B', texto: 'Copiar apenas os arquivos criados ou modificados desde o último backup (completo ou incremental) realizado.' },
      { letra: 'C', texto: 'Nunca poder ser restaurado, servindo apenas como registro histórico.' },
      { letra: 'D', texto: 'Ser aplicável apenas a arquivos de imagem, nunca a documentos de texto.' }
    ],
    gabarito: 'B',
    justificativa: 'O backup incremental copia somente os dados alterados ou criados desde o último backup (seja ele completo ou incremental), reduzindo tempo e espaço de armazenamento em relação ao backup completo.'
  },
  {
    id: 'info_12',
    disciplina: 'informatica',
    topico: 'Redes de Computadores - Conceitos Básicos',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Uma rede de computadores restrita ao ambiente interno de uma organização, que utiliza os mesmos protocolos da internet mas não é acessível externamente sem autorização, é denominada:',
    alternativas: [
      { letra: 'A', texto: 'Extranet.' },
      { letra: 'B', texto: 'Intranet.' },
      { letra: 'C', texto: 'World Wide Web (WWW).' },
      { letra: 'D', texto: 'Backbone.' }
    ],
    gabarito: 'B',
    justificativa: 'Intranet é uma rede privada, restrita ao ambiente interno de uma organização, que usa os mesmos protocolos da internet (como TCP/IP e HTTP), mas não é livremente acessível de fora sem autorização.'
  },
  {
    id: 'info_13',
    disciplina: 'informatica',
    topico: 'Computação em Nuvem',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'O armazenamento de arquivos em serviços como Google Drive, OneDrive ou Dropbox é um exemplo de:',
    alternativas: [
      { letra: 'A', texto: 'Computação em nuvem (cloud computing).' },
      { letra: 'B', texto: 'Rede par a par (peer-to-peer) exclusivamente.' },
      { letra: 'C', texto: 'Sistema operacional distribuído.' },
      { letra: 'D', texto: 'Firewall de aplicação.' }
    ],
    gabarito: 'A',
    justificativa: 'Serviços como Google Drive, OneDrive e Dropbox armazenam arquivos em servidores remotos acessíveis pela internet — um exemplo típico de computação em nuvem (cloud computing).'
  },
  {
    id: 'info_14',
    disciplina: 'informatica',
    topico: 'Windows - Área de Trabalho e Atalhos',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'No Windows, a combinação de teclas "Tecla Windows + D" tem como efeito:',
    alternativas: [
      { letra: 'A', texto: 'Abrir o gerenciador de tarefas.' },
      { letra: 'B', texto: 'Minimizar (ou restaurar) todas as janelas abertas, exibindo a área de trabalho.' },
      { letra: 'C', texto: 'Desligar o computador imediatamente.' },
      { letra: 'D', texto: 'Bloquear a tela do computador.' }
    ],
    gabarito: 'B',
    justificativa: 'Tecla Windows + D minimiza todas as janelas abertas, mostrando a área de trabalho (e restaura as janelas se pressionada novamente). Bloquear a tela é Tecla Windows + L.'
  },
  {
    id: 'info_15',
    disciplina: 'informatica',
    topico: 'Planilha Eletrônica - Referências Relativas e Absolutas',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Em uma planilha eletrônica, ao copiar a fórmula "=A1*$B$1" da célula C1 para a célula C2, o comportamento esperado é:',
    alternativas: [
      { letra: 'A', texto: 'A referência A1 se ajusta para A2, mas $B$1 permanece fixa em B1 (referência absoluta).' },
      { letra: 'B', texto: 'Ambas as referências, A1 e $B$1, se ajustam automaticamente.' },
      { letra: 'C', texto: 'A fórmula inteira é copiada sem qualquer ajuste de referências.' },
      { letra: 'D', texto: 'A célula C2 exibirá uma mensagem de erro, pois não é permitido copiar fórmulas com referência absoluta.' }
    ],
    gabarito: 'A',
    justificativa: 'O cifrão ($) fixa a referência (absoluta). A1, sem cifrão, é referência relativa e se ajusta conforme a célula de destino (A1 vira A2 ao copiar uma linha abaixo). Já $B$1, com cifrões na coluna e na linha, permanece fixa em B1 independentemente de para onde a fórmula for copiada.'
  },
  {
    id: 'info_16',
    disciplina: 'informatica',
    topico: 'Segurança da Informação - Autenticação',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A autenticação de dois fatores (2FA) tem como principal objetivo:',
    alternativas: [
      { letra: 'A', texto: 'Eliminar totalmente a necessidade de senha no acesso a sistemas.' },
      { letra: 'B', texto: 'Adicionar uma segunda camada de verificação de identidade, além da senha, aumentando a segurança do acesso.' },
      { letra: 'C', texto: 'Permitir que dois usuários diferentes usem a mesma conta simultaneamente sem restrição.' },
      { letra: 'D', texto: 'Acelerar o tempo de login, dispensando qualquer verificação adicional.' }
    ],
    gabarito: 'B',
    justificativa: 'A autenticação de dois fatores exige, além da senha (algo que o usuário sabe), uma segunda verificação — como um código enviado por SMS/aplicativo ou biometria (algo que o usuário tem ou é) —, dificultando o acesso não autorizado mesmo que a senha seja comprometida.'
  },
  {
    id: 'info_17',
    disciplina: 'informatica',
    topico: 'Windows - Extensões de Arquivo',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'No Windows, um arquivo com a extensão ".pdf" é, tipicamente, associado a:',
    alternativas: [
      { letra: 'A', texto: 'Um arquivo de imagem editável.' },
      { letra: 'B', texto: 'Um documento no formato PDF (Portable Document Format), geralmente não editável diretamente.' },
      { letra: 'C', texto: 'Um arquivo executável de sistema.' },
      { letra: 'D', texto: 'Um arquivo de áudio compactado.' }
    ],
    gabarito: 'B',
    justificativa: 'PDF (Portable Document Format) é um formato de documento amplamente usado para preservar a formatação original, geralmente visualizado (e não editado livremente) em leitores como Adobe Reader.'
  },
  {
    id: 'info_18',
    disciplina: 'informatica',
    topico: 'Segurança da Informação - Firewall',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'A principal função de um firewall em uma rede de computadores é:',
    alternativas: [
      { letra: 'A', texto: 'Aumentar a velocidade da conexão à internet.' },
      { letra: 'B', texto: 'Controlar e filtrar o tráfego de rede, permitindo ou bloqueando conexões conforme regras de segurança definidas.' },
      { letra: 'C', texto: 'Compactar arquivos para economizar espaço em disco.' },
      { letra: 'D', texto: 'Traduzir nomes de domínio (URLs) em endereços IP.' }
    ],
    gabarito: 'B',
    justificativa: 'O firewall atua como uma barreira de controle de tráfego entre redes (ex.: entre a rede interna e a internet), permitindo ou bloqueando conexões conforme regras de segurança configuradas — não tem relação com velocidade de conexão, compactação de arquivos ou tradução de DNS.'
  },

  // ============================================================
  // Reforço adicional alinhado ao conteúdo programático oficial do
  // edital SERES-PE/Cebraspe: sistema operacional Linux, edição de
  // apresentações, sítios de busca, grupos de discussão/redes
  // sociais e organização/gerenciamento de informações — tópicos
  // explicitamente listados no edital e ainda não cobertos.
  // ============================================================
  {
    id: 'info_19',
    disciplina: 'informatica',
    topico: 'Sistema Operacional (Linux) - Conceitos Básicos',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'O Linux é um sistema operacional de código aberto (open source) que, ao contrário de sistemas proprietários, permite que:',
    alternativas: [
      { letra: 'A', texto: 'O código-fonte seja livremente estudado, modificado e redistribuído, dando origem a diferentes distribuições (como Ubuntu e Fedora).' },
      { letra: 'B', texto: 'Seja executado apenas em computadores fabricados pela Apple.' },
      { letra: 'C', texto: 'Seja utilizado exclusivamente em ambiente corporativo, sendo vedado o uso doméstico.' },
      { letra: 'D', texto: 'Funcione apenas sem interface gráfica, exigindo o uso exclusivo de linha de comando.' }
    ],
    gabarito: 'A',
    justificativa: 'O Linux é software livre/open source: seu código-fonte pode ser estudado, modificado e redistribuído, originando diferentes distribuições. Atualmente possui diversas interfaces gráficas (GNOME, KDE etc.), não se restringindo ao terminal.'
  },
  {
    id: 'info_20',
    disciplina: 'informatica',
    topico: 'Linux - Comandos Básicos de Terminal',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Em um terminal Linux, o comando utilizado para listar os arquivos e diretórios de uma pasta é:',
    alternativas: [
      { letra: 'A', texto: 'cd' },
      { letra: 'B', texto: 'ls' },
      { letra: 'C', texto: 'rm' },
      { letra: 'D', texto: 'mkdir' }
    ],
    gabarito: 'B',
    justificativa: '"ls" (list) lista o conteúdo do diretório atual. "cd" muda de diretório, "rm" remove arquivos e "mkdir" cria diretórios.'
  },
  {
    id: 'info_21',
    disciplina: 'informatica',
    topico: 'Apresentações (PowerPoint)',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'Em softwares de apresentação de slides, como o Microsoft PowerPoint, o modo de exibição em tela cheia, slide a slide, para o público, é iniciado, tipicamente, pela tecla:',
    alternativas: [
      { letra: 'A', texto: 'F5' },
      { letra: 'B', texto: 'F2' },
      { letra: 'C', texto: 'Ctrl + P' },
      { letra: 'D', texto: 'Ctrl + N' }
    ],
    gabarito: 'A',
    justificativa: 'A tecla F5 inicia a apresentação de slides desde o primeiro slide, em modo de exibição de tela cheia. Ctrl+P é usado para imprimir, e Ctrl+N geralmente cria um novo documento/apresentação.'
  },
  {
    id: 'info_22',
    disciplina: 'informatica',
    topico: 'Sítios de Busca - Operadores de Pesquisa',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'medio',
    enunciado: 'Em sítios de busca na internet, como o Google, para pesquisar uma expressão EXATA (na ordem exata em que foi digitada), o usuário deve digitar a expressão:',
    alternativas: [
      { letra: 'A', texto: 'Sem nenhuma formatação especial.' },
      { letra: 'B', texto: 'Entre aspas duplas, como em "código penitenciário de Pernambuco".' },
      { letra: 'C', texto: 'Precedida do sinal de menos (-).' },
      { letra: 'D', texto: 'Em letras maiúsculas.' }
    ],
    gabarito: 'B',
    justificativa: 'Aspas duplas delimitam uma busca por correspondência exata da expressão. O sinal de menos (-) serve para excluir termos dos resultados, e o uso de maiúsculas ou minúsculas não afeta a busca.'
  },
  {
    id: 'info_23',
    disciplina: 'informatica',
    topico: 'Grupos de Discussão e Listas de E-mail',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Grupos de discussão baseados em listas de e-mail (mailing lists) permitem que:',
    alternativas: [
      { letra: 'A', texto: 'Uma mensagem enviada para o endereço da lista seja automaticamente distribuída a todos os membros inscritos.' },
      { letra: 'B', texto: 'Apenas o administrador da lista possa enviar e receber mensagens.' },
      { letra: 'C', texto: 'As mensagens sejam obrigatoriamente criptografadas, não podendo ser lidas por nenhum membro.' },
      { letra: 'D', texto: 'O grupo funcione exclusivamente por meio de redes sociais, sendo incompatível com correio eletrônico.' }
    ],
    gabarito: 'A',
    justificativa: 'Uma lista de discussão distribui automaticamente, a todos os inscritos, qualquer mensagem enviada ao endereço eletrônico do grupo — mecanismo típico de fóruns e grupos de e-mail temáticos.'
  },
  {
    id: 'info_24',
    disciplina: 'informatica',
    topico: 'Redes Sociais - Uso Institucional e Segurança',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'No uso institucional de redes sociais por órgãos públicos, uma boa prática de segurança da informação recomendada é:',
    alternativas: [
      { letra: 'A', texto: 'Compartilhar a senha da conta oficial entre todos os servidores do setor, por comodidade.' },
      { letra: 'B', texto: 'Habilitar autenticação de dois fatores e restringir o acesso administrativo da conta a servidores autorizados.' },
      { letra: 'C', texto: 'Publicar informações sigilosas de processos em andamento, para dar transparência.' },
      { letra: 'D', texto: 'Desabilitar qualquer forma de verificação de identidade, para agilizar o acesso da equipe.' }
    ],
    gabarito: 'B',
    justificativa: 'A autenticação de dois fatores e a restrição de acessos administrativos reduzem o risco de comprometimento da conta institucional, alinhando-se às boas práticas de segurança da informação.'
  },
  {
    id: 'info_25',
    disciplina: 'informatica',
    topico: 'Organização e Gerenciamento de Informações',
    peso: 1,
    dificuldade: 'facil',
    enunciado: 'No gerenciamento de arquivos em um sistema operacional (Windows ou Linux), a organização de documentos em uma estrutura hierárquica de pastas (diretórios) e subpastas tem como principal vantagem:',
    alternativas: [
      { letra: 'A', texto: 'Impedir que qualquer arquivo seja excluído acidentalmente.' },
      { letra: 'B', texto: 'Facilitar a localização, a organização lógica e o backup seletivo dos arquivos armazenados.' },
      { letra: 'C', texto: 'Aumentar automaticamente o espaço de armazenamento disponível no disco.' },
      { letra: 'D', texto: 'Eliminar a necessidade de nomear os arquivos.' }
    ],
    gabarito: 'B',
    justificativa: 'A hierarquia de pastas organiza logicamente os arquivos por tema/projeto, facilitando busca, manutenção e realização de backups seletivos — não interfere no espaço em disco nem impede exclusões acidentais.'
  },
  {
    id: 'info_26',
    disciplina: 'informatica',
    topico: 'Computação em Nuvem - Vantagens sobre Backup Local',
    peso: 1,
    dificuldade: 'medio',
    enunciado: 'Em relação ao armazenamento de arquivos, uma vantagem do backup em nuvem (cloud) sobre o backup exclusivamente local é:',
    alternativas: [
      { letra: 'A', texto: 'Dispensar totalmente qualquer conexão à internet para acesso aos arquivos.' },
      { letra: 'B', texto: 'Permitir o acesso aos arquivos a partir de diferentes dispositivos e locais, desde que haja conexão à internet.' },
      { letra: 'C', texto: 'Ser imune a qualquer tipo de falha de segurança ou vazamento de dados.' },
      { letra: 'D', texto: 'Não exigir nenhum tipo de autenticação para acesso aos arquivos.' }
    ],
    gabarito: 'B',
    justificativa: 'O armazenamento em nuvem permite acesso remoto multiplataforma via internet — sua principal vantagem sobre um backup estritamente local, que fica restrito ao dispositivo ou mídia física onde foi realizado.'
  },
  {
    id: 'info_27',
    disciplina: 'informatica',
    topico: 'Planilha Eletrônica - Função SE (Condicional)',
    peso: 1,
    mostCobrado: true,
    dificuldade: 'dificil',
    enunciado: 'Em uma planilha eletrônica, a fórmula "=SE(A1>=6;\"Aprovado\";\"Reprovado\")" retorna:',
    alternativas: [
      { letra: 'A', texto: '"Aprovado" se o valor de A1 for maior ou igual a 6, e "Reprovado" caso contrário.' },
      { letra: 'B', texto: 'Sempre "Aprovado", independentemente do valor de A1.' },
      { letra: 'C', texto: 'Um erro, pois a função SE não aceita texto entre aspas.' },
      { letra: 'D', texto: 'A soma dos valores de A1 com o texto "Aprovado".' }
    ],
    gabarito: 'A',
    justificativa: 'A função SE(teste_lógico; valor_se_verdadeiro; valor_se_falso) avalia a condição (A1>=6) e retorna o primeiro argumento de texto se verdadeira, ou o segundo, se falsa — nesse caso, "Aprovado" ou "Reprovado".'
  },
  {
    id: 'info_28',
    disciplina: 'informatica',
    topico: 'Planilha Eletrônica - Função PROCV',
    peso: 1,
    dificuldade: 'dificil',
    enunciado: 'Em uma planilha eletrônica, a função PROCV (ou VLOOKUP, em inglês) é utilizada para:',
    alternativas: [
      { letra: 'A', texto: 'Buscar um valor na primeira coluna de um intervalo e retornar um valor correspondente de outra coluna da mesma linha.' },
      { letra: 'B', texto: 'Ordenar automaticamente todos os dados da planilha em ordem alfabética.' },
      { letra: 'C', texto: 'Calcular a soma de todos os valores de uma planilha, ignorando células vazias.' },
      { letra: 'D', texto: 'Proteger a planilha contra edições não autorizadas.' }
    ],
    gabarito: 'A',
    justificativa: 'PROCV (Procura Vertical) busca um valor na primeira coluna de um intervalo especificado e retorna um valor correspondente de outra coluna, na mesma linha — muito usada para cruzar dados entre tabelas (ex.: buscar o nome de um servidor a partir de sua matrícula).'
  }
];
