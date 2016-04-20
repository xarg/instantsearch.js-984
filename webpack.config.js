var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {filename: 'bundle.js'},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    })
  ],
}
