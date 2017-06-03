const path = require('path');

module.exports = {
  entry: "./public/src/app.js",
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js)|(jsx)$|/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'latest', 'stage-0'],
          plugins: [path.join(__dirname, 'babelRelayPlugin.js')]
        }
      }
    ]
  }
};