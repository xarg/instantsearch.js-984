/* eslint  "env/es6": 0, "no-var": 0, "semi": 0 */

var webpack = require('webpack')

var __PRODUCTION__ = process.env.NODE_ENV === 'production'

var plugins = []

if (__PRODUCTION__) {
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }))
}

module.exports = {
    devtool: 'eval',
    entry: './index.js',
    output: {path: '.', filename: 'bundle.js'},
    plugins: plugins,
}
