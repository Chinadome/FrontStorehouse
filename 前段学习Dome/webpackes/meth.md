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
u
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
   npm install sass-loader node-sass webpack --save-dev//安装scss 开发依赖

   module:{
       rules:[
           {
               test:/\.css$/,//处理CSS 文件
               use:['style-loader','css-loader']
           },{
            test:/\.less$/,// 处理less 文件
            use:['style-loader','css-loader','less-loader']
           }
       ]
   }

9.给css 加前缀（让ie兼容伪类选择器） 
 伪类选择器
  ::placeholder {
    color: blue;
}
 npm install postcss-loader autoprefixer -D//安装伪类选择器 开发依赖
 创建一个名为postcss.config.js 文件
    将之前安装的autoprefixer 插件给导出
    const autoprefixer=require("autoprefixer");
    module.exports={
    plugins:[autoprefixer] //挂载插件
    }

    module:{
       rules:[
           {
               test:/\.css$/,//处理CSS 文件
               use:['style-loader','css-loader','postcss-loader']
           }
       ]
   }

10.图片加载器
  npm install url-loader file-loader -D
 
  module:{
       rules:[
          {
            test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|wpff2$/,//处理图片文件
            use: 'url-loader?limit=16890'  //limit 设置bast64 最大值，如果文件大于设置的值话，则直接加载该文件，就不进行转换
          }
       ]
   }

11.js高级语法
  npm i babel-loader @babel/core @babel/runtime -D//js高级语法 依赖  
  npm i @babel/preset-env @babel/plugin-transform-runtime  @babel/plugin-proposal-class-properties -D 
  //babel依赖
  创建一个babel.config.js 文件

   module.exports={
    presets:['@babel/preset-env'],
    plugins:['@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties']
   }
 12 以.vue 结尾 叫单文件组件   
  npm i vue -S
  npm i vue-loader vue-template-compiler -D//vue 文件依赖 
  plugins:[new vueloaderplugin()]
  const  vueloaderplugin=require('vue-loader/lib/plugin');

  module:{
       rules:[
           {
            test: /\.vue$/,//处理vue文件
            use: 'vue-loader'
          }
       ]
       }
 注意：vue-loader要和vue-template-compiler 版本匹配

 上线配置build
  "scripts": {
    "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8899",
    "build":"webpack -p"
  },