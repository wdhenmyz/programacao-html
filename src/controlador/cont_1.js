const carros = require('../bancoDeDados')

function listarcarros (req, res) {
    res.send(carros)
}

function listarcarro (req, res) {
    console.log(req.params.id);
    const resultado = carros.find( (carro) => {
        return carro.id === Number(req.params.id) 
        // ou return carro.id == req.params.id
    })
    res.send(resultado)
}

function filtrarcarros (req, res) {
    console.log(req.query);
    const { nome, cor, marca, ano  } = req.query;
    let resultado = carros;

    if (nome || cor || marca|| ano) {
        //resultado = carros.find( (carro) => {
        resultado = carros.filter( (carro) => {
            return (!cor || carro.cor === cor) &&
                   (!marca || carro.marca === marca) &&
                   (!nome || carro.nome === nome) &&
                   (!ano || carro.ano.toString() === ano);
        })
    }

    res.send(resultado)
}


module.exports = {
    listarcarros,
    listarcarro,
    filtrarcarros
}

