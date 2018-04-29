const path = require("path");
const process = require("process");
const webpack = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "main.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.[hash].js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.json$/,
        use: ["json-loader"]
      },
      {
        test: /\.(obj|mtl)$/,
        use: ["file-loader"]
      }
    ]
  },

  devtool: "cheap-module-eval-source-map",
  devServer: {
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "src", "assets"), to: "assets" }
    ]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ]
}
