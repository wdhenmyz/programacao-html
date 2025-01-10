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
        method: '*',
        path: '/',
        handler: function () {
            return ('projeto hapi!');
        }
    })

    server.route({
        method: ['PUT','POST'],
        path: '/',
        handler: function (request, h) {
            return('Requisição recebida com sucesso!');
        }
    })

    server.route({
        method: 'GET',
        path: '/{name}',
        handler: function (request, h) {
            return('Olá, ' + encodeURIComponent(request.params.name) + '!');
        }
    });

    server.route({
        method: 'GET',
        path: '/hello/{name?}',
        handler: function (request, h) {
            const name = request.params.name ? request.params.name : 'stranger';

            return (`hello, ${name}, have a nice day!`);
        }
    });

    await server.register(require('./plugin'));

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