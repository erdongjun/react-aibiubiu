var path = require('path');

var entry = path.resolve(__dirname, 'app/index.js');
var outpath = path.resolve(__dirname, 'build');


module.exports = {
    devtool: 'eval-source-map',
    entry: entry,
    output: {
        path: outpath,
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
    },
    module: {
      loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel'//loader的名称（必须）
            },
            {
              test: /\.less$/,
              loader: 'style!css!less'
            },
            {
              test: /\.(png|jpg)$/,
              loader: 'url?limit=25000'
            }
      ],
    }
};