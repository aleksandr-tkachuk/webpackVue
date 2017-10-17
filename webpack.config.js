const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: '.' + path.sep + 'entry' + path.sep + 'file.js',

    output: {
        path: path.resolve(__dirname, 'disk'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack add',
            template: '.' + path.sep + 'entry'+ path.sep +'index.html'
        })
    ]
};