const express = require('express')
const { listarcarros, listarcarro, filtrarcarros } = require('./controlador/cont_1')
const app = express()

// trás os carros
app.get('/carros', listarcarros)

// parametros de rota
app.get('/carros/:id', listarcarro)

// parametros de consulta
app.get('/carros-parametro', filtrarcarros)


app.listen(3000, () => {
    console.log('servidor: http://localhost:3000');
 })