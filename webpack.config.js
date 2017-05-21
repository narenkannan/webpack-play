// https://webpack.js.org/configuration

var path = require('path');

const config = {
    devtool: 'eval',
    context: path.resolve(__dirname, "src"),
    entry: () => new Promise((resolve) => resolve(['./index', './moduleA/index', './moduleB/index'])),      //https://webpack.js.org/configuration/entry-context/#dynamic-entry
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkhash].js",
        chunkFilename: "[query].[name].[chunkhash].js"
    }
}
module.exports = config;
