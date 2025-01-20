function cadastrar(a, b, c, d) {
    let usuario = a;
    let senha = b;
    let senha2 = c;
    let idade = d;

    if (idade < 18) {
        return console.log("menor de idade");
    }
    if (senha !== senha2) {
        return console.log("senhas não conferem");
    }
    if (senha.length < 6) {
        return console.log("senha muito curta");
    }

    let cadastro = {
        usuario: usuario,
        senha: senha,
        idade: idade
    }

    return console.log(`usuario ${cadastro.usuario} cadastrado com sucesso, bem vindo`);
}

cadastrar("joao", "123456", "123456", 18);