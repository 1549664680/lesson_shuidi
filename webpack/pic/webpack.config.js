const HtmlWebpackPlugin = require('html-webpack-plugin') 
const path = require('path')
module.exports = {
  mode:'development',
  entry:'./src/main.js',
  output:{
    filename:'dist.js',
    path:path.resolve(__dirname,'./dist')
  },
  module:{
    rules:[
    {
      test:/\.css$/,
      use:[
        // 动态的
        'style-loader',
        'css-loader'
      ]
    }
  ]
  },
  devServer:{
    port:'8080'
  },
  plugins:[
    new HtmlWebpackPlugin()
  ]
}