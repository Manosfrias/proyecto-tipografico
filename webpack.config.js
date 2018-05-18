const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/dist/',
    watchContentBase: true
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  ]
};

module.exports = config;
