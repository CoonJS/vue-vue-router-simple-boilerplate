var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entryPoint = path.resolve(__dirname, 'index.js');

module.exports = {
  entry: entryPoint,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue, Vue-router simple boilerplate',
      filename: 'index.html'
    })
  ]
};