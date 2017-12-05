var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',
    entry:'./app/main.js',
    output:{
        path:__dirname + "/app/build",
        filename:'bundle.js'
    },
    devServer:{
        inline:true,
        contentBase: './app/build/',
        port: 8181
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)?$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};