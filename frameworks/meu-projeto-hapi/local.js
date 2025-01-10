

exports.plugin = {
    name: 'meu-plugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/local',
            handler: function (request, h) {
                return h.file('../.txt');
            }
        })
    }
}