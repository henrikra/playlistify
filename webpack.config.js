module.exports = {
  entry: './src',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  devServer: {
    host: '0.0.0.0',
    watchOptions: {
      poll: true
    }
  },
  devtool: "#inline-source-map"
};
