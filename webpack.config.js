const webpack = require('webpack')
const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: {
        'all': ['./src/all/menu.js', './src/all/cookie.js'],
        'app':  ['./src/util/click.js', './src/util/classes.js', './src/app/app.js', './src/app/globals.js', './src/app/crafting.js',
                './src/app/crafting_requirement.js', './src/app/floors.js'],
        'event':  ['./src/util/click.js', './src/util/classes.js', './src/event/event.js', './src/event/globals.js', './src/event/crafting.js',
                './src/event/crafting_requirement.js', './src/event/floors.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    resolve: {
        alias: {
          'classes': './src/util/classes.js',
          'click': './src/util/click.js',
          'globals': './src/app/globals.js',
          'crafting': './src/app/crafting.js',
          'crafting_requirement': './src/app/crafting_requirement.js',
          'floors': './src/app/floors.js'
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
            'crafting_requirement': 'crafting_requirement',
            'floors': 'floors',
            'calc': 'calc'
          }),
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(require("./package.json").version)
        })
    ]
};