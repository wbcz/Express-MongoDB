    var webpack = require('webpack');
    var path = require('path');

    module.exports={
        devtool: "eval-source-map",
        entry:{
            build:path.resolve(__dirname,'./app/entry/entry.jsx')
        },
        output:{
            path:path.join(__dirname,'./app/build/'),
            publicPath: "dist/js/",        //用于配置文件发布路径，如CDN或本地服务器
            filename:'[name].js'
        },
        resolve:{
            extensions:['','.js','.jsx']
        },
        module:{
            loaders:[
                {
                    test:/\.js|\.jsx$/,
                    loader:'babel-loader',
                    exclude:/node_modules/,
                    query:{
                        presets:['es2015','stage-0','react']
                    }

                },
                {
                    test:/\.css$/,
                    loader:'style-loader!css-loader'
                }
            ]
        },
        postcss: [
            require('autoprefixer')//调用autoprefixer插件
        ],
        devServer: {
            colors: true,
            historyApiFallback: true,
            inline: true,
            hot: true
        },
        plugins:[
            new webpack.NoErrorsPlugin(),
            //提供全局的变量，在模块中使用无需用require引入
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery",
                // nie: "nie"
            }),
            //将公共代码抽离出来合并为一个文件
            new CommonsChunkPlugin('common.js'),
            //js文件的压缩
            new uglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    }