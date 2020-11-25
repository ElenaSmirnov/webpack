const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {template} = require("webpack");

module.exports = {
    
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },


module: {
        rules: [
        {
            test: /\.js$/,
                exclude: /node_modules/,
            use: "babel-loader",
        },
            {test: /\.scss$/, use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]}
        ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: "styles.css" }),
        new HtmlWebpackPlugin({ template: "./src/index.html" })]
    ,

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        port: 3000,
        noInfo: true,
        quiet: true,
        clientLogLevel: 'warning',
        stats: 'errors-only',
        open: false,
    },
};