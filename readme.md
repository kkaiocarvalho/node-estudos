<h1><b> Node.js </h1>
<p>Seção sobre Node.js</p>

<h2>O que é Node?</h2>

- Não é uma linguagem de programação;
- Uma ferramenta construída sobre o motor JavaScript do Google Chrome para criar aplicações rápidas e escaláveis;
- O problema: cada conexão de um cliente aloca um espaço na memória;
- Com Node: cada conexão é um evento executado na engine no Node;
- Ou seja, o Node suporta muito mais conexões do que PHP e Java em uma máquina igual, por exemplo;

<h2>Instalando o Node</h2>

- Site oficial: https://nodejs.org.en/
- No Windows é um executável, que funciona com a maioria dos outros programas para instalar (next, next, next);
- No Linux: sudo apt install nodejs e sudo apt install npm;
- Depois teste com: node -v;

<h2>Testando o Node</h2>

- Podemos criar um arquivo JavaScript e executar com o node;
- Comando: node test.js;

    Exemplo:

        let msg = "Hello World";
        console.log(msg);

<h2>O comando node</h2>

- Podemos executar instruções de JavaScript rodando o comando node;
- Podemos fazer operações matemáticas, utilizar funções do JavaScript e muito mais;


    Exemplo:

        $ node
        Welcome to Node.js v13.2.0.
        Type ".help" for mode information.
        > 1 + 1
        2
        > console.log("teste");
        teste
        undefined
        >

<h2>O npm (Node Package Manager)</h2>

- Ferramenta utilizada para instalar módulos de JavaScript;
- Que podem fazer desde operações matemáticas até comunicação HTTP;
- Instalamos um pacote pelo comando: npm install pacote;
- Vem junto com o Node;

<h2>Iniciando um projeto</h2>

- O node reclamou da falta do package.json;
- O certo sempre é ter um arquivo dessde ao iniciar um novo projeto;
- Podemos criar a partir do template, utilizando o comando: npm init;
- Aí teremos um projeto com o package.json;
- Este arquivo serve para configurações e salva nossas dependências; 

<h2>Módulo de file system</h2>

- Um dos módulos mais utilizados:
- Ele serve para trabalhar com arquivos e diretórios;
- Já é incluso no node, ou seja, não precisamos instalar;

    Exemplo:

        let {readFile} = require('fs');

        readFile("arquivo.txt", "utf8", (error,text) => {
            if(error) {
                throw error;
            } else {
                console.log(text);
            }
        });

<h2>File system: escrevendo</h2>

- Além de ler aqruivo, podemos também alterar o mesmo;
- Chamamos isso de escrever no arquivo;

    Exemplo:

        writeFile("arquivo.txt", "Inserir este texto", (error) => {
            if(error) {
                throw error;
            } else {
                console.log("Escreveu no arquivo");
            }
        });


<h2>Módulo HTTP</h2>

- Outro módulo muito utilizado, para fazer comunicação via HTTP;
- O módulo já vem com o Node;
- Pode criar um servidor que serve páginas web para nós;

    Exemplo:

        const {createServer} = require("http");

        let server = createServer((request, responde) => {
            responde.writeHead(200, {"Content-Type": "text/html"});
            responde.write(`
                <h1>Hello World!</h1>
                <p>Primeira página web com Node.js</p>`);
            response.end();
        });

        server.listen(8000);

        console.log("Listening! (port 8000)");

<h2>O que é uma API?</h2>

- Application Programming Interface;
- Uma maneira de se comunicar via HTTP a um servidor e fazer operações como vizualizar, deletar, criar e atualizar dados;
- Grandes aplicações como Facebook e Instagram utilizam APIs;
- Grande parte dos softwares desenvolvidos em Node.js tem uma API;
- E utilizam um framework chamado Express para isso;

<h2>O que é REST e RESTful?</h2>

- Quando falamos em API estamos condicionados a falar de REST e RESTful também;
- REST = Representation State Transfer, princípios e regras que permitem criar uma aplicação com interfaces bem definidas;
- RESTful = Capacidade de aplicar os princípios do REST;

<h2>REST e os verbos HTTP</h2>

- Sempre que criamos uma API devemos utilizar os verbos HTTP corretos para cada URL da nossa aplicação (veremos isso na prática);
- Verbo GET: para solicitar dados;
- Verbo POST: para inserir dados;
- Verbo DELETE: para deletar dados;
- Verbo PUT: para atualizar dados;

<h2>Express</h2>

- Um framework web, muito utilizado para criar aplicações em Node.js;
- Utiliza em seu core o módulo HTTP para criar as comunicações;
- Além de outros módulos;
- Podemos criar uma API com o Express facilmente;

<h2>Instalando o Express</h2>

- Site oficial: https://expressjs.com/pt-br/
- O Express precisa ser instalado;
- Então instalamos pelo npm;
- npm init;
- npm install express;
- O Express será instalado e adicionado as dependências do nosso projeto;

<h2>O que são rotas?</h2>

- Nos sites e nas APIs temos o que chamamos de rotas;
- Que é basicamente a URL que queremos acessar;
- Porém quando tratamos de uma API chamamos as URLs de rota;
- No Express vamos criar as nossas rotas para serem acessadas via HTTP e responderem baseadas numa lógica que inserirmos;
- E cada rota vai receber um método HTTP, que deve coincidir com o proposto pelo REST, conforme vimos anteriomente; 

<h2>Instalando o Postman</h2>

- Postman é o software mais utilizado para testar APIs;
- Quando ainda não é uma interface gráfica, podemos testar por meio dele as rotas de nossa API;
- Site oficial: https://www.postman.com/downloads/

