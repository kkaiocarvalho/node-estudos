const {createServer, request} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200,{"Content-Type": "text/html"});
    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js</p>
        `);
        response.end();
});

server.listen(8000);

console.log("Ouvindo a porta 8000");

// comandos: 1º node index.js | 2° no browser: localhost:8000