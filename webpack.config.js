const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },

  output: {
    filename: "[name].bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new CopyPlugin({
      patterns: [
        { from: "public", to: "images" },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
devtool: "cheap-module-source-map",
};
