const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const pages = require('./page-structure');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const config = (env, args) => {
  console.log('Building Kindling project!');
  console.log('env:', env);
  console.log('args:', args);

  const isProd = args.mode === 'production';

  return {
    ...(!isProd && {
      devServer: {
        historyApiFallback: true,
        port: 9104,
      },
    }),
    devtool: isProd ? 'source-map' : 'inline-source-map',
    entry: path.join(__dirname, '../src/index'),
    mode: args.mode,
    module: {
      rules: [
        {
          test: /\.(ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    output: {
      path: path.join(__dirname, '../build'),
      filename: isProd ? '[name].[contenthash].js' : '[name].js',
      ...(isProd && {
        publicPath: './',
      }),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.rootLocation':
          env && env.rootLocation ? `"/${env.rootLocation}"` : '""',
      }),
      ...pages.map(
        (p) =>
          new HtmlWebpackPlugin({
            env: env || {},
            filename: `${p.filename}.html`,
            title: p.title,
            description: p.description,
            template: path.join(__dirname, 'index.html'),
            minify: {
              removeComments: true,
              collapseWhitespace: true,
            },
          })
      ),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
  };
};

module.exports = config;
