const { routes } = require('config');

const router = require('express').Router();

module.exports = (server, app) => {
    const ping = (req, res) => res.send('pong');
    const render = page => (req, res) => app.render(req, res, `/${page}`);

    router
        .route('/ping')
        .get(ping);

    router
        .route('/')
        .get(render('index'));

    router
        .route('*')
        .get(render('errors/404'));

    server.use(routes.app, router);
};
