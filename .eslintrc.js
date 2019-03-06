module.exports = {
    parser: 'babel-eslint',
    extends: ['iddqd/base', 'iddqd/es6', 'iddqd/node', 'iddqd/react'],
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    globals: {
        document: true,
        FileReader: true,
        window: true,
        localStorage: true,
        expect: true,
        test: true,
        describe: true
    },
    rules: {
        'react/jsx-closing-bracket-location': [2, 'props-aligned']
    }
};
