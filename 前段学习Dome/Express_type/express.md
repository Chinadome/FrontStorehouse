 加载 package.json 中的依赖 用 npm install --save
## node 框架/koa
  应用场景：帮助我们开发web应用和移动端
         优点： 1.模版解析
                2.提供静态文件服务 
                3。中间件
                4.路由控制
## express使用
- 安装
  npm install express
  npm install express --save 生产依赖
  npm install express --dve-save 开发依赖
- 基本使用
  let express = require('express');
   let app = express(); 
      ...
   app.listen(port,callback);
## get请求
   app.get(path,function(req,res));  
## post请求
   app.post(path,function(req,res));  

  
 windoes  模拟请求密令   curl -v get http://localhost:3000/ 
mime类型 :请求头所用的格式类型
## 模拟get/set 请求工具 
  postman

## 参数
  http://www.baidu.com?uname=zs&age=10  查询参数   req.query 
  http://www.baidu.com/user/zs/age/18    路径参数  req.params
## 中间建
  处理HTTP请求的函数
