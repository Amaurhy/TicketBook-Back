const {Client} = require('pg');


//Crear conexion con posgresql
const con = new Client(process.env.DATABASE_URL);

//abrir conexion
con.connect((error)=>{
    if(error) console.error('connection error', error.stack);
    else console.log("Conexion correcta a la base de datos");
});


module.exports = con;
