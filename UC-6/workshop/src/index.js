const express = require('express')
const app = express()

const usuarios = [
    {id: 1 ,nome: "joão", idade: 15},
    {id: 2 ,nome: "maria", idade: 23},
    {id: 3 ,nome: "jose", idade: 29}
]

//rota normal
app.get('/usuarios', function (req, res) {
  res.send(usuarios)
})

// parametros de rota
app.get('/usuarios/:id', function (req, res) {
    // console.log(req.params.id);
    const resultado = usuarios.find( (usuario) => {
        return usuario.id === Number(req.params.id) 
        // ou return usuario.id == req.params.id
    })
    res.send(resultado)
  })

// parametros de consulta
app.get('/usuarios-parametro', (req, res) => {
    // console.log(req.query);
    const { nome } = req.query;
    let resultado = usuarios;

    if (nome) {
        resultado = usuarios.find( () => {
            return usuarios.nome === nome
        })
    }

    res.send(resultado)
})








app.listen(3000, () => {
    console.log('servidor: http://localhost:3000');
 })