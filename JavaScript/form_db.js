
const sqlite3 = require('sqlite3').verbose();

//  o .verbose permite que o SQLite emita mensagens de depuração detalhadas durante a execução

// Abre o banco de dados (ou cria um novo se não existir)

const db = new sqlite3.Database('portifolioForm.db');

// Cria a tabela para armazenar os dados do formulário

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS formulario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        nome TEXT
    )`);
});

module.exports = db;
