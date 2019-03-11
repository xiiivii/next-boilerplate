const dev = process.env.NODE_ENV !== 'production';

const app = require('next')({ dev });
const server = require('server');

app
    .prepare()
    .then(() => server(app));
