'use strict';

const path = require('path');

const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        './demo/dist/truncated-number': './truncated-number.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname
    },
    mode: 'development',
    devtool: 'source-map'
};

module.exports = config;
