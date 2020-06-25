const webpack = require('webpack')
var glob = require('glob');
const path = require('path');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'classes': glob.sync('./src/js/classes/*.js'),
        'test': './src/js/test.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].min.js'
    },
    plugins: [
        new copyPlugin({
          patterns: [
            { from: 'src/html', to: '../' },
            { from: 'src/css', to: '../css' },
            { from: 'src/images', to:'../images' }
          ],
        }),
      ],
};