const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const merge = require('webpack-merge')

const commonConfig = require('./webpack.common.config')

const publicConfig = {

    mode: 'production',

    devtool: 'cheap-module-source-map',

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },

    plugins: [

        new CleanWebpackPlugin(['dist'])
    ]

}

module.exports = merge(commonConfig, publicConfig)