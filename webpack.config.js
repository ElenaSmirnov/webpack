const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'built'),
        filename: "bundle.js"
    },


module: {
        rules: [
        {
            test: /\.js$/,
                exclude: /node_modules/,
            use: "babel-loader",
        },
            {test: /\.css$/, use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]}
        ]
    },
    plugins: [ new MiniCssExtractPlugin() ]
};