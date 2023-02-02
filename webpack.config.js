const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(rootDirectory, 'public/index.html')
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 9000
  }
};
