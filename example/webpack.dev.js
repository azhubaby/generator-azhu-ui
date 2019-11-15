const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    // devtool: "cheap-module-eval-source-map",
    entry: {
        app: path.resolve(__dirname, "./src/app")
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js",
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "src"),
            "node_modules"
        ],
        extensions: [".jsx", ".js"]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        port: 8090,
        // open: true,
        // hot: true,
        // historyApiFallback: true,
        // noInfo: true,
        // publicPath: "/",
        stats: {
            colors: true,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false,
            modules: false,
            children: false,
            version: false,
            cached: false,
            cachedAssets: false,
            reasons: false,
            source: false,
            errorDetails: false
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)/,
                use: "file-loader"
            },
            {
                test: /\.(ttf|eof|svg|woff|woff2)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html")
        })
    ]
};
