const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require("webpack");

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
        new HtmlWebpackPlugin( { template: "./src/index.html" } )  ]
};