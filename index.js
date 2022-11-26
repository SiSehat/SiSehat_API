"use strict";
import Hapi from '@hapi/hapi'
import routes from './src/routes/routes.js'

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    })

    server.route(routes);
    await server.start();

    console.log(`Server sedang berjalan di ${server.info.uri}`);
}

init();