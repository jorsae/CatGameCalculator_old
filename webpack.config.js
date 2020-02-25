const webpack = require('webpack')
const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: {
        'all': ['./src/all/menu.js', './src/all/cookie.js'],
        'app':  ['./src/util/ui.js', './src/util/click.js', './src/util/classes.js', './src/util/globals.js', './src/util/utility.js',
                './src/app/app.js', './src/app/crafting.js', './src/app/floors.js'],
        'event':  ['./src/util/ui.js', './src/util/click.js', './src/util/classes.js', './src/util/globals.js', './src/util/utility.js',
                    './src/event/event.js', './src/event/crafting.js', './src/event/floors.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    resolve: {
        alias: {
          'classes': './src/util/classes.js',
          'click': './src/util/click.js',
          'crafting': './src/app/crafting.js',
          'crafting_requirement': './src/util/utility.js',
          'ui': './src/util/ui.js'
        }
      },
    plugins: [
        new JavaScriptObfuscator({
            rotateUnicodeArray: true
        }, []),
        new webpack.ProvidePlugin({
            'classes': 'classes',
            'globals': 'globals',
            'crafting': 'crafting',
            'utility': 'utility',
            'ui': 'ui'
          }),
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(require("./package.json").version)
        })
    ]
};