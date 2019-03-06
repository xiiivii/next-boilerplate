const { routes } = require('config');

const router = require('express').Router();

const api = require('server/controllers/api');

module.exports = server => {
    router
        .route('/hello')
        .get(api.hello);

    server.use(routes.api, router);
};
