const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'}
        ]
      },{
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
              limit: 10000
            }
            },
          ]
      },
      // {
      //   test: /\.(jpg|png|gif|svg|pdf|ico)$/,
      //   use: [
      //     {
      //     loader: 'file-loader',
      //     options: {
      //       name (file) {
      //         if (process.env.NODE_ENV === 'development') {
      //           console.log("DEV", process.env.NODE_ENV);
      //           return '[path][name].[ext]'
      //         }
      //         console.log("PRO",process.env.NODE_ENV);
      //         return '[hash].[ext]'
      //
      //       }
      //     }
      //   },
      //   ]
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
     new webpack.HotModuleReplacementPlugin(),
     new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    })
  ],
  resolve: {
  extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
    filename: 'main.js'
  },
  devServer: {
  historyApiFallback: true,
   port: 3000,
   open: 'Google Chrome',
   hot: true
  }
}
