let express=require('express');
let path=require('path');
let app=express();
let fs=require('fs');
let body= require('body-parser');
app.use(body.urlencoded({ extended: false }));
app.get('/',(req,res)=>{
   res.send('hello');
});
/**
 * express.static  原理
 * 
 */
express.static=function (p){
    return function(req,res,next){
     let staticpath=path.join(p,req.path);
     let exists=fs.existsSync(staticpath);
     if(exists){
        res.sendFile(staticpath);
     }else
     {
         next();
     }
    }
}

app.use(express.static(path.join(__dirname,'public')));//设置from 提交数据后端能接收到
app.all('/:name/user',(req,res)=>{
  let params=req.params;
  res.send(params);
});
app.post('/user',(req,res)=>{
    console.log(req.body);
res.send(req.body);
});
app.listen('3000',()=>{
    console.log("项目已启动！");
})