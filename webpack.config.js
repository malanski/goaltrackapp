const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Seu arquivo de entrada principal
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // Pasta de saída
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Use o babel-loader para transpilar seu código
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Correspondência com extensões de imagem
        use: [
          {
            loader: 'url-loader', // Use o url-loader
            options: {
              limit: 8192, // Tamanho máximo (em bytes) para inline base64
              name: 'images/[name].[ext]', // Nome do arquivo de saída
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web', // Mapeie 'react-native' para 'react-native-web'
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Arquivo HTML de modelo
    }),
    new ReactRefreshWebpackPlugin(), // Plugin de atualização a quente para React
  ],
  devServer: {
    hot: true, // Ativar a atualização a quente no servidor de desenvolvimento
  },
};
