/*
    ./webpack.config.js
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
     publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/,
         loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css/, 
        loader:ExtractTextPlugin.extract("css-loader") }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin("styles.css")],
   devServer: {
      historyApiFallback: true
  }
}


/* 
    ./webpack.config.js
*/



