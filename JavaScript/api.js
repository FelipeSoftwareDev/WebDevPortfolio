// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./form_db');

const api = express();
const PORT = 3000;

// Configura o body-parser para lidar com dados do formulário
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

// Rota para lidar com envio de formulário
api.post('/formulario', (req, res) => {
    const { email, nome } = req.body;

    // Insere os dados do formulário no banco de dados
    db.run(`INSERT INTO formulario (email, nome) VALUES (?, ?)`, [email, nome], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Erro ao inserir dados no banco de dados.' });
        }
        res.status(200).json({ message: 'Dados do formulário inseridos com sucesso.' });
    });
});

// Inicia o servidor
api.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
