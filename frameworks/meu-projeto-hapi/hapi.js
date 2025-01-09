'use strict';
const Hapi = require('@hapi/hapi');

// configurando o servidor hapi
const server = new Hapi.server({
    port: 3000,
    host: 'localhost'
});

// iniciando o servidor e aguardando a resposta
const init = async () => {

    // ajustando as rotas
    server.route({
        method: 'GET',
        path: '/',
        handler: () =>{
            return 'projeto hapi!';
        }
    })

    server.route({
        method: 'GET',
        path: '/{name}',
        handler: function (request, reply) {
            reply('Olá, ' + encodeURIComponent(request.params.name) + '!');
        }
    });
    

    // iniciando o servidor
    await server.start();
    console.log('Servidor rodando em %s', server.info.uri);
}

// tratando erros
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

// iniciando
init();