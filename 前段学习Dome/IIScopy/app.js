//nodemon 自动重启
//npm install -g  nodemon 安装 
const http=require("http");
const fs=require("fs");
const url=require("url");
const qs=require("querystring");
let  index=require("./1/1.js");
let  login=require("./login/login.js");
let  regeist=require("./regeist/regeist.js");
let resouces=require("./unit/static1.js");   
let server=http.createServer((req,res)=>{
    if(req.url!=='/favicon.ico'){
        resouces(req,res);
        switch(req.url){
              case '/':
              case '/1':
              case '/1.html':
                 index(req,res);
                  break;
             case '/login':
             case '/login.html':
                    login(req,res);
                break;
             case '/regeist':
             case '/regeist.html':
                    regeist(req,res);
                break;
             default: 
               
        }
    }
    
});
server.listen(3000,()=>{
    console.log("已启动！");
    
});