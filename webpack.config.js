const webpack = require('webpack')
const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: {
        'all': ['./src/all/menu.js', './src/all/cookie.js'],
        'app':  ['./src/app/classes.js', './src/app/app.js', './src/app/globals.js', './src/app/crafting.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    resolve: {
        alias: {
          'classes': './src/app/classes.js',
          'globals': './src/app/globals.js',
          'crafting': './src/app/crafting.js'
        }
      },
    plugins: [
        new JavaScriptObfuscator({
            rotateUnicodeArray: true
        }, []),
        new webpack.ProvidePlugin({
            'classes': 'classes',
            'globals': 'globals',
            'crafting': 'crafting'
          })
    ]
};