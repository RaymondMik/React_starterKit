module.exports = {
  entry: './index.js',
  
  output: {
    // path: 'build',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'] 
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};