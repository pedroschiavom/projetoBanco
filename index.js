const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const sql = require('mssql');
const connStr = "Server=DESKTOP-4BGCQVH;Database=TESTE;User Id=;Password=;";

//fazendo a conexão global
sql.connect(connStr)
    .then(conn => GLOBAL.conn = conn)
    .catch(err => console.log(err));

//configurando o body parser

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());


//definindo as rotas
const router = express.Router();
router.get('/', (req,res) => res.json({message: 'Funcionando'}));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

