// let express = require('express');
// let app = express();

// app.use(function(req,res,next) {
//     res.setHeader('Content-type','text/html;charset=utf8');
//     next();
// });
// app.get('/', function(req, res){
//     console.log(111);
    
//     res.end('hello world');
// });
// app.get('/about', function(req, res){
//     res.end('get请求！');
// });
// app.post('/news',function(req,res) {
//     res.end('news');
// });
// app.listen(3000,()=>{
//     console.log('where is abc?');
// });

let express = require('express');
let app = express();
let path=require('path');
//
// app.use(function(req,res,next) {
//     res.setHeader('Content-type','text/html;charset=utf8');
//     next();
// });
// app.get('/about',function(req,res) {
//     res.end('关于我们');
// });

// app.post('/news',function(req,res) {
//     res.end('news111');
// });
//所有请求都可以走这个
// app.all('/news',function(req,res) {
//     res.end('news111');
// });
//匹配所有路径
// app.get('*',function(req,res) {
// //    console.log(req.url);//获得路由
// //    console.log(req.host);//获得主机
// //    console.log(req.path);////获得当前根目录
// //     console.log(req.query);//获得请求参数
    
//     res.end('news222');
// });
//路径参数
// app.get('/:id/:sname',function(req,res) {
//    // console.log(req.params);//获取url参数中的值
    
//     // res.end('ok');
//      //res.write('hello wrold')//跟send()用法基本一样
//      /**
//       * 手写send() 原理
//       */
//      res.send=(msg)=>{
//          let type = typeof msg;
//          if (type === 'object') {
//              res.setHeader('Content-Type','application/json');
//              res.end(JSON.stringify(msg));
//          } else if (type === 'number') {
//              res.setHeader('Content-Type','text/plain');
//              res.status(msg);//设置状态码
//              res.end(require('http').STATUS_CODES[msg]);
//          } else {
//              res.setHeader('Content-Type','text/html');
//              res.end(msg);
//          }
//      }
//      res.send({a:10,b:20});//express内部方法
//  });

//res.redirect()实现原理
function Redirect(){
    console.log(111);
    
    return (req,res,next)=>{
        res.redirect= function (url){
            res.status(302);
            res.setHeader('Location',url||'/');
            res.end();
        }
        next();
    }
}
app.use(Redirect());
//app.use(express.static(path.join(__dirname,'public')));//访问静态文件

app.get('/',(req,res)=>{
    res.redirect('http://www.baidu.com');
 });
 app.get('/index',(req,res)=>{
    res.redirect('/');//路由跳转
 });


app.listen(3000,()=>{
    console.log('app is running');
});