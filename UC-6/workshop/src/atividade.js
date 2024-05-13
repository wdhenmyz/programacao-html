const express = require('express')

const app = express();

const usuario = [{nome: 'joao', idade: 38}, {nome: 'maria', idade: 27}, {nome: 'jose', idade: 56}]

app.get('/usuario', (req, res) => {
    res.send(usuario)
})

app.listen(3000, () => {
    console.log('servidor: http://localhost:3000/');
});











