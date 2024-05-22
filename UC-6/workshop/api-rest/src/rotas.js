const express = require('express');
const { listarInstrutores, listarUmInstrutor, cadastrarinstrutores, atualizarinstrutor, deletarinstrutor } = require('./controladores/instrutores');

const rotas = express();

rotas.get('/instrutores', listarInstrutores);
rotas.get('/instrutor/:id', listarUmInstrutor);
rotas.post('/instrutores', cadastrarinstrutores);
rotas.put('/instrutor/:id', atualizarinstrutor);
rotas.delete('/instrutor/:id', deletarinstrutor);


module.exports = rotas;


