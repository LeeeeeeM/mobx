const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./example/index.js")
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "example")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json"]
    },
    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        port: "8081",
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            inject: "body",
            chunks: ["main"]
        })
    ]
}
