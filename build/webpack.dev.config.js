const merge = require('webpack-merge')
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin')

const commonConfig = require('./webpack.common.config')

const devConfig = {

    mode: 'development',

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 3001
    },



    plugins: [
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '../src/mockservices'),
            to: path.join(__dirname, '../dist')
        }])
    ]

}

let config = merge(commonConfig, devConfig)

module.exports = config