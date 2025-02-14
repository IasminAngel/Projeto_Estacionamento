const mysql = require('mysql2'); 
const express = require('express'); 

const app = express();


const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wallpark'
});

conexao.connect(function(erro) {
    if (erro) {
        console.error('Erro ao conectar ao banco:', erro);
        return;
    }
    console.log('Conexão efetuada com sucesso!');
});

// Rota de teste
app.get('/', function(req, res) {
    res.send('Utilizando o nodemon');
});


app.listen(3306, () => {
    console.log('Servidor rodando na porta 8080');
});
