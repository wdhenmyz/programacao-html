const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para parsing do body
app.use(bodyParser.json());

// Conectar ao banco de dados
const db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error('Erro ao conectar ao banco de dados:', err.message);
    console.log('Conectado ao banco de dados SQLite.');
});

// Rota para criar tabela
app.post('/create-table/:tabela', (req, res) => {
    const { tabela } = req.params;
    const { parametros } = req.body;

    // Validação básica para evitar injeção de SQL
    if (!tabela || !Array.isArray(parametros) || parametros.length === 0) {
        return res.status(400).json({ error: 'Nome da tabela ou parâmetros inválidos.' });
    }

    // Garantir que os nomes são válidos
    const sanitizedTable = tabela.replace(/[^a-zA-Z0-9_]/g, '');
    const sanitizedParams = parametros.map(param => param.replace(/[^a-zA-Z0-9_]/g, ''));

    // Montar SQL dinamicamente
    const columns = sanitizedParams.map(param => `${param} TEXT`).join(', ');
    const sql = `CREATE TABLE IF NOT EXISTS ${sanitizedTable} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ${columns}
    )`;

    // Executar SQL
    db.run(sql, (err) => {
        if (err) {
            console.error('Erro ao criar tabela:', err.message);
            return res.status(500).json({ error: 'Erro ao criar tabela.' });
        }
        res.json({ message: `Tabela '${sanitizedTable}' criada com sucesso.` });
    });
});


// Rota para deletar tabela
app.delete('/drop-table', (req, res) => {
    const sql = `DROP TABLE IF EXISTS users`;
    db.run(sql, (err) => {
        if (err) {
            console.error('Erro ao deletar tabela:', err.message);
            return res.status(500).json({ error: 'Erro ao deletar tabela.' });
        }
        res.json({ message: 'Tabela deletada com sucesso.' });
    });
});

// Rota para inserir dados
app.post('/insert', (req, res) => {
    const { nome, sobrenome, usuario, senha, email } = req.body;
    const sql = `INSERT INTO users (nome, sobrenome, usuario, senha, email) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [nome, sobrenome, usuario, senha, email], (err) => {
        if (err) {
            console.error('Erro ao inserir dados:', err.message);
            return res.status(500).json({ error: 'Erro ao inserir dados.' });
        }
        res.json({ message: 'Dados inseridos com sucesso.' });
    });
});

// Rota para consultar todos os dados
app.get('/users', (req, res) => {
    const sql = `SELECT * FROM users`;
    db.all(sql, (err, rows) => {
        if (err) {
            console.error('Erro ao consultar dados:', err.message);
            return res.status(500).json({ error: 'Erro ao consultar dados.' });
        }
        res.json(rows);
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Fechar conexão com o banco de dados ao encerrar o servidor
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) console.error('Erro ao fechar conexão com o banco de dados:', err.message);
        else console.log('Conexão com o banco de dados encerrada.');
    });
    process.exit(0);
});
