const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = Boolean(eval(process.env.PRODUCTION));

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: './src/style.css',
      },
    ]),
  ],
  mode: isProduction ? 'production' : 'development',
  optimization: {
    minimize: isProduction,
  },
};
