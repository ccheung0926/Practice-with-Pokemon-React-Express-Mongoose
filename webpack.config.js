var webpack = require('webpack');
var path = require('path');
// npm install style-loader css-loader --save-dev
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });

// the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname,'src/client/public');
// holds the directory path of the REACT application's codebase
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var SCSS_DIR = path.resolve(__dirname, 'src/client/css');

var config = {
  entry: APP_DIR + '/route.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loaders : ['react-hot','babel'],
        include : APP_DIR,
      },
      {
        test: /\.scss$/,
        include: SCSS_DIR,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
module.exports = config;