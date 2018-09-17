var path = require('path')
var webpack = require('webpack')

module.exports={
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename:'script.js'
  },
  devtool: 'source-map-inline',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:{
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    contentBase: path.join(__dirname, './public'),
    clientLogLevel: 'error',
    port: 8080,
    host: 'localhost'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
}
