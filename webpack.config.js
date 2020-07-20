const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.md$/i,
        use: 'raw-loader'
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
};
