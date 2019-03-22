// Webpack v4
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports  = {
  //entry: { main: './src/index.js' },
   entry: './src/index.ts',
   //devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/
       // loader: "babel-loader"
      //  exclude: /node_modules/
       /* use: {
          loader: "babel-loader"
        }*/
      },
      /*{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },*/
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
      test: /\.less$/,
      exclude : /node_modules/,
      //loader: 'style-loader!css-loader!less-loader'
      //use: ['style-loader', 'css-loader', 'less-loader']
      use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","less-loader"]
        })
      },
      {
          test: /\.ts?$/,
          use: 'ts-loader'
         // loader: 'babel-loader'
        //  exclude: /node_modules/
      }
    ]
  },
  resolve: {
      extensions: [  '.ts', '.js' ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}