const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const {GenerateSW} = require('workbox-webpack-plugin');
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'TODOs List'
      }),
      new GenerateSW({
        swDest: 'sw.js',
        clientsClaim: true,
        skipWaiting: true
      }),
      new MiniCssExtractPlugin(),
      new WebpackPwaManifest({
        name: 'My PWA',
        short_name: 'My PWA',
        description: 'My Progressive Web App',
        background_color: '#ffffff',
        theme_color: '#2196F3',
        // icons: [
        //   {
        //     src: path.resolve('assets/images/logo'),
        //     sizes: [96, 128, 192, 512],
        //     destination: path.join('assets', 'logo'),
        //     ios: true
        //   }
        // ]
      }),
     
    ],
    

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
