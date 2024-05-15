const carros = require('../bancoDeDados')

function listarcarros (req, res) {
    res.send(carros)
}





module.exports = {
    listarcarros
}

