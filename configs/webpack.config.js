/* eslint-disable @typescript-eslint/explicit-function-return-type */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const pages = require('./page-structure');

const spreadIf = (condition, toSpread) => {
  if (condition) {
    return toSpread;
  }

  if (Array.isArray(toSpread)) {
    return [];
  }
  if (typeof toSpread === 'object') {
    return {};
  }
  throw new Error('unknown spreadIf object: ' + toSpread);
};

const config = (env, args) => {
  console.log('Building Kindling project!');
  console.log('env:', env);
  console.log('args:', args);

  const isProd = args.mode === 'production';

  return {
    ...spreadIf(!isProd, {
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
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]',
            },
          },
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
      ...spreadIf(isProd, [
        new CopyPlugin({
          patterns: [
            { from: path.resolve(__dirname, '../assets/favicons'), to: '' },
          ],
        }),
      ]),
      ...(isProd
        ? pages.map(
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
          )
        : [
            new HtmlWebpackPlugin({
              filename: `index.html`,
              title: 'Dev server',
              description: 'Dev server description',
              template: path.join(__dirname, 'index.html'),
            }),
          ]),
    ],
    resolve: {
      ...spreadIf(!isProd, {
        alias: {
          react: path.resolve('./node_modules/react'),
          'styled-components': path.resolve('./node_modules/styled-components'),
        },
      }),
      extensions: ['.ts', '.tsx', '.js'],
    },
  };
};

module.exports = config;
