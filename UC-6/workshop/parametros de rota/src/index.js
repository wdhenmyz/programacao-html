const express = require('express')
const { listarUsuario, filtrarUsuarios, listarUsuarios } = require('./controladores/usuarios')
const app = express()

// trás os usuários
app.get('/usuarios', listarUsuarios)

// parametros de rota
app.get('/usuarios/:id', listarUsuario)

// parametros de consulta
app.get('/usuarios-parametro', filtrarUsuarios)


app.listen(3000, () => {
    console.log('servidor: http://localhost:3000');
 })