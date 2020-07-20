const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: 'raw-loader'
      }
    ]
  }
};
