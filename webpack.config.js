const NODE_ENV = process.env.NODE_ENV || 'develop';
const config = require('config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/client',
    entry: {
        index: './app/game.js',
        library: ['angular', 'jquery', 'angular-ui-router']
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extenstions: ['', '.min.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extenstions: ['', '.js']
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './templates/index.html',
            showErrors: true,
            chunks: ['vendor', 'index']
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: 2
        })
    ],
    module: {
        noParse: [/jquery|angular-ui-router/],
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.html$/,
                loader: 'html',
                query: {
                    minimize: true
                }
            },
            {
                test: /.*\.(jsx|js)?$/,
                loader: 'babel',
                include: __dirname + '/client',
                exclude: /(node_modules|bower_components)/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file'
            }
        ]
    }
};
