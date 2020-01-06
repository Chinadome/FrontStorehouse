const path=require("path")
// 导入生成html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
});
const  vueloaderplugin=require('vue-loader/lib/plugin');
module.exports={
    mode:'production'  //1.development  开发模式 2.production  上线模式
    ,entry:path.join(__dirname,'./src/index.js')//打包文件的路径
    ,output:{
     path:path.join(__dirname,'./dist'),//输出目录
     filename:'bunld.js'//输出文件名
    }//打包文件配置
   ,plugins:[htmlPlugin,new vueloaderplugin]//配置预览页面
   ,module:{
       rules:[
           {
               test:/\.css$/,//处理CSS 文件
               use:['style-loader','css-loader','postcss-loader']
           },{
            test:/\.less$/,// 处理less 文件
            use:['style-loader','css-loader','less-loader']
           },{
            test: /\.scss$/,//处理scss文件
            use: ['style-loader','css-loader','sass-loader']
          },{
            test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|wpff2$/,//处理图片文件
            use: 'url-loader?limit=16890'  //limit 设置bast64 最大值，如果文件大于设置的值话，则直接加载该文件，就不进行转换
          },{
            test: /\.js$/,//处理js文件
            use: 'babel-loader',
            exclude:/node_modules/ //排除
          },{
            test: /\.vue$/,//处理vue文件
            use: 'vue-loader'
          }
       ]
   }//配置加载器
}
