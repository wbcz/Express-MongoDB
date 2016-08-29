var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename:"[name].js"
	},
    devServer: {
        contentBase: "./public",
        colors: true,
        inline: true
    },
	module: {
        loaders: [
            // 样式动态插入html style标签里
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 和autoprefixer 兼容css后缀 来编译处理
            // { test: /\.scss$/, loader: 'style!css!autoprefixer?{browsers:["Firefox >= 20","> 5%","last 2 versions"]}'},
            //图片文件使用 url-loader 来处理，小于40kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=40000'},


            // ExtractTextPlugin.extract()动态输出Link标签
            //{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
            //{ test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass!autoprefixer?{browsers:["Firefox >= 20","> 5%","last 2 versions"]}') }
        ]
    },
    resolve: {
        extensions: ['', '.vue', '.js', '.json', '.scss', '.css']
    },
    plugins: [
    	new HtmlWebpackPlugin(),
	    new webpack.optimize.CommonsChunkPlugin('../common.js', ['Greeter', 'other']),
	    //new ExtractTextPlugin("[name].css")
	    new webpack.HotModuleReplacementPlugin(),//热加载插件s
     //    new webpack.optimize.UglifyJsPlugin()
    ]
}