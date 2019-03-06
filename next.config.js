const withSass = require('@zeit/next-sass');

// FIX ME
process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

module.exports = withSass();
