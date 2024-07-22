const path = require('path');

module.exports = {
  entry: {
    frontend: './dex/src/index.js',
    backend: './dexBack/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production', 
  resolve: {
    extensions: ['.js'] 
  }
};
