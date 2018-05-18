const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
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
