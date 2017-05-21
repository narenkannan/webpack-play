const config = {
    "context": __dirname + "/src",
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: "[name].bundle.js"
    },
    devtool: 'eval'
}

module.exports = config;
