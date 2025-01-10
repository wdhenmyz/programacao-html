exports.plugin = {
    name: 'meu-plugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/plugin',
            handler: function (request, h) {
                return ('Plugin carregado com sucesso!');
            }
        })
    }
}