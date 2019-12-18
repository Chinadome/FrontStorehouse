const http=require("http");
const fs=require("fs");
/*
* 方法1
*/
var server=http.createServer(function(req,red){
    //req 客户端请求信息内容 method url  data
    // console.log(req.method);
    // console.log(req.url);
    //  console.log(req.data);
    if(req.url!="/favicon.ico")
    {
        /**
         *  red.end(`<!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <title>Document</title>
       </head>
       <body>
           <h1>欢迎访问我的网站</h1>
       </body>
       </html>`);
         */
       let buffer=fs.readFileSync('./IIS/1.html');
       red.end(buffer);
    }
    red.end('hello wrold');
});
//listen 1.启动服务器 2.监听进入该端口的请求
server.listen(3000,function(){
    console.log("你好！");
});

/**
 * 方法2
 */
//var server=http.createServer();
//监听流浪器的请求
// server.on('request',(req,res)=>{
//     res.end("11111");
// });
// server.on('listening',(req,res)=>{
//   console.log("服务器启动了！");
  
// });
// server.on('connection',(req,res)=>{
//     console.log("已连接服务器！");
    
//   });
// server.listen(3000);
