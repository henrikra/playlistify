module.exports = {
  entry: './src',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    watchOptions: {
      poll: true
    }
  },
  devtool: "#inline-source-map"
};
