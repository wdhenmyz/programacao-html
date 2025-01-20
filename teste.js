function cadastrar(usuario, senha, senha2, idade) {
    if (idade < 18) {
        console.log("Menor de idade");
        return;
    }
    if (senha !== senha2) {
        console.log("Senhas não conferem");
        return;
    }
    if (senha.length < 6) {
        console.log("Senha muito curta");
        return;
    }

    const cadastro = { usuario, senha, idade };

    console.log(`Usuário ${cadastro.usuario} cadastrado com sucesso, bem-vindo`);
}

cadastrar("joao", "123456", "123456", 18);
