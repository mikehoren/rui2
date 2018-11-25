const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { 
              importLoaders: 1, 
              modules: true,
              localIdentName: '[folder]_[name]_[local]',
              camelCase: true,
          }},
          'postcss-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
};
