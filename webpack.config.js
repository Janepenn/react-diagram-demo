const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Paths
const rootDirectory = path.resolve(__dirname, '.');
const srcPath = path.resolve(rootDirectory, 'src');

module.exports = {
  mode: 'development',
  entry: path.resolve(srcPath, 'index.js'),
  output: {
    path: path.resolve(rootDirectory, 'dist'),
    filename: '[name]-[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.css|scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.bpmn$/,
        type: 'asset/source'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(rootDirectory, 'public/index.html')
    }),
    new MiniCssExtractPlugin({ filename: '[name]-[contenthash].css' }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 9000
  }
};
