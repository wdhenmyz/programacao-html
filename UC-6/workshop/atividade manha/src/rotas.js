const express = require('express');
const { listarlivros, listarUmlivro, cadastrarlivro, editarlivro, deletarlivro, atualizarTitulolivro } = require('./controladores/livros');

const rotas = express();

rotas.get('/livros', listarlivros);
rotas.get('/livros/:id', listarUmlivro);
rotas.post('/livros', cadastrarlivro);
rotas.put('/livros/:id', editarlivro);
rotas.patch('/livros/:id/titulo', atualizarTitulolivro);
rotas.delete('/livros/:id', deletarlivro);


module.exports = rotas;