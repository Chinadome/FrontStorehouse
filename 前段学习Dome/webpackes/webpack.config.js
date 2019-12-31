const path=require("path")
// 导入生成html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
});
module.exports={
    mode:'production'  //1.development  开发模式 2.production  上线模式
    ,entry:path.join(__dirname,'./src/index.js')//打包文件的路径
    ,output:{
        
     path:path.join(__dirname,'./dist'),//输出目录
     filename:'bunld.js'//输出文件名
    }//打包文件配置
   ,plugins:[htmlPlugin]//配置预览页面
   ,module:{
       rules:[
           {
               test:/\.css$/,//处理CSS 文件
               use:['style-loader','css-loader']
           },{
            test:/\.less$/,// 处理less 文件
            use:['style-loader','css-loader','less-loader']
           }
       ]
   }//配置加载器
}
