const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    runtimeChunk: 'single',
  },  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  performance: {
    maxAssetSize: 50000,
    maxEntrypointSize: 50000,
  }    
};