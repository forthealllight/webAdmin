var webpack = require("webpack");
var glob = require('glob');
var config = {
    entry: {
        vendor:['react', 'react-dom','react-redux','react-router','redux']
    },
    output: {
        path: __dirname + '/dist/js/',
        publicPath:'/js/',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    module: {
        loaders:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets:['es2015', 'stage-0', 'react'],
                plugins:[
                  [
                   'import',{libraryName:'antd',style:'css'}
                  ]
                ]
            }
        },{
          test:/\.less$/,
          loader:'style-loader!css-loader!less-loader'
        },{
           test:/\.css$/,
           loader:'style-loader!css-loader' 
        },{
          test:/\.(png|jpg)$/,
          loader:'url-loader?limit=8192'
        }],
        //css-loader还可以实现全局global
        preLoaders:[{
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(

          'vendor', 'vendor.bundle.js')
    ],
    eslint: {
        configFile: './.eslintrc'
    }
};
/**
 * find entries
 */
var files = glob.sync('./src/js/*/index.js');
var newEntries = files.reduce(function(memo, file) {
    var name = /.*\/(.*?)\/index\.js/.exec(file)[1];
    memo[name] = entry(name);
    return memo;
}, {});
config.entry = Object.assign({}, config.entry, newEntries);
/**
 * [entry description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function entry(name) {
    return './src/js/' + name + '/index.js';
}
module.exports = config;
