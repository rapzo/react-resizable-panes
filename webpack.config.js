'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname),
  entry: {
    jsx: './index.js',
    html: './index.html',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js',
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.css$/,
      include: /components|containers/,
      exclude: /node_modules/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]'
      ]
    }, {
      test: /\.css$/,
      exclude: /containers|components/,
      loader: 'style!css'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: [
        'react-hot',
        'babel-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],
  devServer: {
    contentBase: '.',
    hot: true
  }
}
