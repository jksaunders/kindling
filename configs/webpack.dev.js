const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const config = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 9104,
  },
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      title: 'Dev server',
      description: 'Dev server',
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};

module.exports = merge(common, config);
