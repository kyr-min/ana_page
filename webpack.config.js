const path = require('path');
const webpack = require('webpack');




module.exports = {
  mode: 'development',
  entry: './C:\Users\com\Desktop\proj\ana_site\app.js',

  output: {
    path: path.resolve(__dirname, 'C:\Users\com\Desktop\proj\ana_site')
  },

  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [],
      loader: 'babel-loader'
    }, {
      test: /.css$/,

      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  },

  devServer: {
    open: true,
    host: 'localhost'
  }
}