var path = require('path')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public')
    // publicPath: "/public/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  devServer: {
    port: 8008
    // contentBase: './public'
  }
}
