const oracledb = require('oracledb');

async function connectToOracle() {
    try {
        const connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectString: process.env.DB_DSN
        });
        console.log("Conexão com o Oracle Database realizada com sucesso!");
        
        // Implemente as operações com o banco de dados aqui
        
    } catch (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
    }
}

connectToOracle();
