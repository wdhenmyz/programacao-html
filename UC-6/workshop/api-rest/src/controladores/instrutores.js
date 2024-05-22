let { instrutores} = require("../banco de dados");
let { id } = require("../banco de dados");


function listarInstrutores (req, res) {
    return res.status(200).json(instrutores);
}


function listarUmInstrutor(req, res) {
    const { id } = req.params;

    const resultado = instrutores.find( (instrutor) => {
        return instrutor.id === Number(id);
    } )

    if (!resultado) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado.'})
    }

    return res.status(200).json(resultado)
}


function cadastrarinstrutores (req, res) {
    // console.log(req.body);
    const { nome, email, status } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: "o campo Nome é obrigatório"})
    }

    if (!email) {
        return res.status(400).json({ mensagem: "o campo E-mail é obrigatório"})
    }

    if (!status) {
        return res.status(400).json({ mensagem: "o campo Status é obrigatório"})
    }

    const instrutor = {
        id: id++,
        nome: nome,
        email: email,
        status: status
    }

    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
}


function atualizarinstrutor (req, res) {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    const resultado = instrutores.find( (instrutor) => {
        return instrutor.id === Number(id);
    } )

    if (!resultado) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado.'})
    }

    if (!nome) {
        return res.status(400).json({ mensagem: "o campo Nome é obrigatório"})
    }

    if (!email) {
        return res.status(400).json({ mensagem: "o campo E-mail é obrigatório"})
    }

    if (!status) {
        return res.status(400).json({ mensagem: "o campo Status é obrigatório"})
    }

    resultado.nome = nome;
    resultado.email = email;
    resultado.status = status;

    return res.status(200).send(resultado)
}


function deletarinstrutor (req, res) {
    const { id } = req.params;

    const resultado = instrutores.find( (instrutor) => {
        return instrutor.id === Number(id);
    } )

    if (!resultado) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado.'})
    }

    instrutores = instrutores.filter( (instrutor) => {
        return instrutor.id !== Number(id);
    })

    return res.status(200).json({mensagem: 'usuario deletado com sucesso'})
}



module.exports = {
    listarInstrutores,
    listarUmInstrutor,
    cadastrarinstrutores,
    atualizarinstrutor,
    deletarinstrutor
}