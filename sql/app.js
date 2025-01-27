const sqlite3 = require('sqlite3').verbose();
let sql;

// conectar ao banco de dados
const db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err);
})

// criar tabela / create table
/*sql = `CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome,
    sobrenome,
    usuario,
    senha,
    email
)`;
db.run(sql);*/

// deletar tabela / drop table
// db.run("DROP TABLE users");

// inserir dados / insert into
/*sql = `INSERT INTO users (nome, sobrenome, usuario, senha, email) VALUES (?,?,?,?,?)`;
db.run(sql, ['Jucelino', 'Ferreira', 'jucelino', '123', 'jucelino@gmail'], (err) => {
    if (err) return console.error(err);
    console.log('inserido com sucesso');
});*/

// realizar consulta / select
/*sql = `SELECT * FROM users`;
db.all(sql, (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach(rows => {
        console.log(rows);
    });
})*/