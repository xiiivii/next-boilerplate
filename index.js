const path = require('path');

process.env.NODE_CONFIG_DIR = path.join(__dirname, 'server', 'config');

// FIX ME
process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

const dev = process.env.NODE_ENV !== 'production';

const app = require('next')({ dev });
const server = require('server');

app
    .prepare()
    .then(() => server(app));
