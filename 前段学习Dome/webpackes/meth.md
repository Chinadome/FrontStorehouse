1 安装相关依赖
  npm i webpack webpack-cli -D
2 项目根目录建一个配置文件 webpack.config.js  
3 写配置
 module.exports={
    mode:'production'  //1.development  开发模式 2.production  上线模式
    ,entry:path.join(__dirname,'./src/index2.js')//打包文件的路径
    ,output:{
        
     path:path.join(__dirname,'./dist'),//输出目录
     filename:'bunld.js'//输出文件名
    }//打包文件配置

}
4 新增脚本
  package.json中scripts节点中配置 
5 npm run dev   

6.配置webpack 自动打包
 npm i webpack-dev-server -D
  把 package.josn 中的scripts 的dev 属性值 从webpack 改成webpack-dev-server 即可
  "scripts": {
    "dev": "webpack-dev-server"
  },
  生成的打包文件是存在内存中的，不是存在磁盘上的,并且是存在根目录下
  运行 npm run dev
 7.配置生成webpack 预览页面
  npm  i  html-webpack-plugin

  
     "scripts": {
        "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8889"
     },##--open 自动运行  --host   设置ip 地址  --port 设置端口
    
8.loader 加载器协助 webpack打包处理特定模块
    less-loader 
    sass-loader
    url-loader
  webpack 打包文件模块 先判断是否为js模块，假如是js模块 在判断是否包含高级js语法（包含高级语法 在看
  是否配置babel 没有配置babel 就会报错 配置的话 就调用loader处理）不包含高级js语法webpack自己处理
   npm i style-loader css-loader -D  //安装css依赖
   npm i less-loader less -D//安装 less 依赖