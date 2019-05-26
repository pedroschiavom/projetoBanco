const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const sql = require('mssql');
const connStr = "Server=DESKTOP-4BGCQVH;Database=TESTE;User Id=sa;Password=pedrones;";

//fazendo a conexão global
sql.connect(connStr)
    .then(conn => global.conn = conn)
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


function execSQLQuery(sqlQry, res){
    global.conn.request()
                .query(sqlQry)
                .then(result => res.json(result.recordset))
                .catch(err => res.json(err));
}

router.get('/clientes', (req,res) => {
    execSQLQuery('SELECT * FROM Clientes1 ', res);
   
})