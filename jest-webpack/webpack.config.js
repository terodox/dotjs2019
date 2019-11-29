'use strict';

const path = require('path');

const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        './demo/dist/truncated-number': './truncated-number.js',
    },
    externals: {
        window: 'window'
    },
    output: {
        filename: '[name].js',
        path: __dirname
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [
                /node_modules/
            ],
            use: ['babel-loader']
        }]
    },
    devtool: 'source-map'
};

module.exports = config;
