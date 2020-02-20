const webpack = require('webpack')
const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: {
        'all': ['./src/menu.js', './src/cookie.js'],
        'app':  ['./src/crafting/classes.js', './src/crafting/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    resolve: {
        alias: {
          'classes': './src/crafting/classes.js'
        }
      },
    plugins: [
        new JavaScriptObfuscator({
            rotateUnicodeArray: true
        }, []),
        new webpack.ProvidePlugin({
            'classes': 'classes'
          })
    ]
};