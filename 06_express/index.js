let express = require("express");
let app = express();

app.get('/', function(req, res) {
    res.send('Primeira rota com Express');
});

app.get('/teste', function(req, res) {
    res.send('Testando rota com Express');
});

app.listen(3000, function() {
    console.log("A aplicação está funcionando na porta 3000");
});

//no console: node index.js | em seguida no browser: http://localhost:3000/