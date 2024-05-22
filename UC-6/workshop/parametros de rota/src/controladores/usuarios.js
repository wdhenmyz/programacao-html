const usuarios = require('../bancoDeDados')

function listarUsuario (req, res) {
    console.log(req.params.id);
    const resultado = usuarios.find( (usuario) => {
        return usuario.id === Number(req.params.id) 
        // ou return usuario.id == req.params.id
    })
    res.send(resultado)
}

function listarUsuarios (req, res) {
    res.send(usuarios)
}

function filtrarUsuarios (req, res) {
    console.log(req.query);
    const { nome } = req.query;
    let resultado = usuarios;

    if (nome) {
        //resultado = usuarios.find( (usuario) => {
        resultado = usuarios.filter( (usuario) => {
            return usuario.nome === nome
        })
    }

    res.send(resultado)
}



module.exports = {
    listarUsuario,
    filtrarUsuarios,
    listarUsuarios
}



