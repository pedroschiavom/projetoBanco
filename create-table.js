const connStr = "Server=XXX;Database=XXX;User Id=XXX;Password=XXX";
const sql = require("mssql");

sql.connect(connStr)
    .then(conn => createTable(conn))
    .catch(err => console.log("erro! " + err));

    function createTable(conn){

        const table = new sql.Table('Clientes');
        table.create = true;
        table.columns.add('ID',sql.Int, {nullable: false, primary:true});
        table.columns.add('Nome',sql.NVarChar(150),{nullable:false});
        table.columns.add('CPF',sql.NChar(11), {nullable:false});
        table.rows.add(1,'teste1','12345678901');
        table.rows.add(2,'teste2','02156151511');
        table.rows.add(3,'teste3','21545656147');

        const request = new sql.Request()
        request.bulk(table)
                .then(result => console.log('funcionou'))
                .catch(result => console.log('erro no bulk. ' + err));
    }