const express = require('express');

const optionsWrapper = require('server/options');
const apiRouter = require('server/routers/api');
const appRouter = require('server/routers/app');
const listen = require('server/listen');

module.exports = app => {
    const server = express();

    optionsWrapper(server);
    apiRouter(server);
    appRouter(server, app);
    listen(server);
};
