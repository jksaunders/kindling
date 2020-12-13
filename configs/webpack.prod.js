const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const pages = require('../page-structure');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const config = (env) => ({
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'js/main.[contentHash].js',
    publicPath: './',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.rootLocation': env ? `"/${env.rootLocation}"` : '""',
    }),
    ...pages.map(
      (p) =>
        new HtmlWebpackPlugin({
          env: env || {},
          filename: `${p.filename}.html`,
          title: p.title,
          description: p.description,
          template: 'index.html',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
          },
        })
    ),
  ],
});

module.exports = merge(common, config);
