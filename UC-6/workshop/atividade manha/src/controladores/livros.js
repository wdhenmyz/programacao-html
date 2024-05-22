let { livros} = require("../biblioteca");
let { id } = require("../biblioteca");

function listarlivros (req,res) {
    return res.status(200).json(livros);
}

function listarUmlivro(req, res) {
    const { id } = req.params;

    // Verifica se o id é um número
    if ( isNaN(Number(id))) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.' });
    }

    const resultado = livros.find( (livro) => {
        return livro.id === Number(id);
    } )

    if (!resultado) {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.'})
    }

    return res.status(200).json(resultado)
}

function cadastrarlivro (req, res) {
    // console.log(req.body);
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo) {
        return res.status(400).json({ mensagem: "o campo titulo é obrigatório"})
    }

    if (!autor) {
        return res.status(400).json({ mensagem: "o campo autor é obrigatório"})
    }

    if (!ano) {
        return res.status(400).json({ mensagem: "o campo ano é obrigatório"})
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: "o campo numPaginas é obrigatório"})
    }

    const livro = {
        id: id++,
        titulo: titulo,
        autor: autor,
        ano: ano,
        numPaginas: numPaginas
    }

    livros.push(livro);

    return res.status(201).json({mensagem: "Livro cadastrado."});
}

function editarlivro (req, res) {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body

    const resultado = livros.find( (livro) => {
        return livro.id === Number(id);
    } )

    if (!resultado) {
        return res.status(404).json({ mensagem: 'livro não encontrado.'})
    }

    if (!titulo) {
        return res.status(400).json({ mensagem: "o campo titulo é obrigatório"})
    }

    if (!autor) {
        return res.status(400).json({ mensagem: "o campo autor é obrigatório"})
    }

    if (!ano) {
        return res.status(400).json({ mensagem: "o campo ano é obrigatório"})
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: "o campo numPaginas é obrigatório"})
    }

    resultado.titulo = titulo;
    resultado.autor = autor;
    resultado.ano = ano;
    resultado.numPaginas = numPaginas;

    return res.status(200).send(resultado)
}

function atualizarTitulolivro (req, res) {
    const { id } = req.params;
    const { titulo } = req.body;

    const resultado = livros.find( (livro) => {
        return livro.id === Number(id);
    } )

    if(!resultado) {
        return res.status(404).json({ mensagem: 'livro não localizado.' })
    }

    if(!titulo) {
        return res.status(400).json({ mensagem: "O campo título é obrigatório." });
    }

    resultado.titulo = titulo;

    return res.status(200).json({ mensagem: "O titulo foi atualizado com sucesso." });

}

function deletarlivro (req, res) {
    const { id } = req.params;

    const resultado = livros.find( (livro) => {
        return livro.id === Number(id);
    } )

    if (!resultado) {
        return res.status(404).json({ mensagem: 'livro não encontrado.'})
    }

    livros = livros.filter( (livro) => {
        return livro.id !== Number(id);
    })

    return res.status(200).json({mensagem: 'livro deletado com sucesso'})
}



module.exports = {
    listarlivros,
    listarUmlivro,
    cadastrarlivro,
    editarlivro,
    atualizarTitulolivro,
    deletarlivro
}