const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: {
        'all': './src/all.js',
        'app': './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    plugins: [
        new JavaScriptObfuscator({
            rotateUnicodeArray: true
        }, [])
    ]
};