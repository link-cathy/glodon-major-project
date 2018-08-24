// 辅助函数
const utils = require('./utils.js');
const fullPath = utils.fullPath;
// 项目源码路径
const SRC_PATH = fullPath('../src');
// 业务模块路径
const PAGE_PATH = fullPath('../src/pages');
// 产出路径
const DIST_PATH = fullPath('../dist');

const NODE_MODULES_PATH = fullPath('../node_modules')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')

let theme = {};
const getThemeConfig = require('../src/theme.js');
theme = getThemeConfig();

const commonConfig = {

    /* 入口 */
    entry: {
        app: ['babel-polyfill',
            SRC_PATH + '/index.jsx']
    },

    /* 输出到dist文件夹，输出文件名为bundle.js */
    output: {
        path: DIST_PATH,
        filename: '[name]/[name].js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: SRC_PATH,
            exclude: NODE_MODULES_PATH
        },
        {
            test: /\.jsx?$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: SRC_PATH,
            exclude: NODE_MODULES_PATH
        },
        {
            test: /\.js$/,
            loader: ['eslint-loader'],
            enforce: 'pre',
            include: SRC_PATH,
            exclude: NODE_MODULES_PATH
        },
        {
            test: /\.(png|jpg|gif|mp4)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            ]
        },
        {
            test: /\.(css|less)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: theme
                        }
                    }]
            })
        }]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        mainFiles: ['index'],
        alias: {
            pages: PAGE_PATH,
            components: SRC_PATH + '/components',
            router: SRC_PATH + '/router',
            nls: SRC_PATH + '/nls',
            utils: SRC_PATH + '/utils',
            '@': SRC_PATH
        }
    },

    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: SRC_PATH + '/index.html',
            chunks: ['app', 'vendors']
        }
        ),
        new ExtractTextPlugin('[name]_styles.css')
    ]

}

let args = process.argv
const __DEV__ = args.join('').indexOf('development') > -1;

// 打包list
let packageList = [{
    name: 'cockpit',
    entry: `${PAGE_PATH}/cockpit/index.jsx`,
    dir: 'cockpit/',
    tpl: `${SRC_PATH}/index.html`,
    output: ''
}, {
    name: 'process',
    entry: `${PAGE_PATH}/process/index.jsx`,
    dir: 'process/',
    tpl: '',
    output: ''
}, {
    name: 'labors',
    entry: `${PAGE_PATH}/labors/index.jsx`,
    dir: 'labors/',
    tpl: '',
    output: ''
}, {
    name: 'quality',
    entry: `${PAGE_PATH}/quality/index.jsx`,
    dir: 'quality/',
    tpl: '',
    output: ''
}, {
    name: 'safety',
    entry: `${PAGE_PATH}/safety/index.jsx`,
    dir: 'safety/',
    tpl: '',
    output: ''
}, {
    name: 'surveillance',
    entry: `${PAGE_PATH}/surveillance/index.jsx`,
    dir: 'surveillance/',
    tpl: '',
    output: ''
}];

// 生成html
function packHtml(item) {
    let { name, tpl, dir } = item;
    tpl = tpl || `${SRC_PATH}/index.html`;
    return new HtmlWebpackPlugin({
        // favicon: SRC_PATH + '/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
        filename: DIST_PATH + '/' + (dir ? dir : '') + 'index.html', // 生成的html存放路径，相对于path
        template: tpl, // html模板路径
        hash: __DEV__ ? true : false, // 为静态资源生成hash值
        chunks: [name, 'vendors'], // 需要引入的chunk，不配置就会引入所有页面的资源
        minify: __DEV__ ? false : { // 压缩HTML文件
            removeComments: true, // 移除HTML中的注释
            collapseWhitespace: false, // 删除空白符与换行符
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    })
}


Array.isArray(packageList) && packageList.forEach((item) => {
    commonConfig.entry[item.name] = ['babel-polyfill',
        item.entry];
    commonConfig.plugins.push(packHtml(item));
})

module.exports = commonConfig;