const mysql = require('mysql2'); 
const express = require('express'); 
const cors = require("cors");

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

app.post("/cadastrar", (req, res) => {
    const { cor, modelo, placa, acao, tamanho } = req.body;

    if (!cor || !modelo || !placa || !acao || !tamanho) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios!" });
    }

    const sql = "INSERT INTO veiculos (cor, modelo, placa, acao, tamanho) VALUES (?, ?, ?, ?, ?)";
    const valores = [cor, modelo, placa, acao, tamanho];

    conexao.query(sql, valores, (err, result) => {
        if (err) {
            console.error("Erro ao inserir veículo:", err);
            return res.status(500).json({ erro: "Erro ao cadastrar veículo" });
        }
        res.status(201).json({ mensagem: "Veículo cadastrado com sucesso!" });
    });
});

// Iniciando o servidor
app.listen(3001, () => console.log("Servidor rodando na porta 3001"));