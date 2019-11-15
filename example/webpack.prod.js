const path = require("path");

const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production",
    // devtool: "cheap-module-source-map",
    entry: [
        path.resolve(__dirname, "../src/index.js"),
        path.resolve(__dirname, "../scss/index.scss")
    ],
    output: {
        path: path.resolve(__dirname, "../lib/"),
        filename: "azhu.min.js",
        library: "azhu",
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: [".jsx", ".js"]
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
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
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
        // new CleanWebpackPlugin(),
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // }),
        new MiniCssExtractPlugin({
            filename: "azhu.min.css"
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    warnings: false,
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compressor: {
                        sequences: true,
                        drop_debugger: true,
                        drop_console: true
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: { removeAll: true }
                        }
                    ]
                }
            })
        ]
    },
    externals: {
        // 定义外部依赖，避免把react和react-dom打包进去
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom"
        }
    }
};
