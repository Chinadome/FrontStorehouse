let express=require('express');
let app=express();
//let cookieParser=require('cookie-parser');
 
function cookieParser(sercet){
    return function(req,res,next){
                 req.secret=sercet;
                 if(!req.headers.cookie){
                     return next();
                 }
            res.cookies=require('querystring').parse(req.headers.cookie,"; ");
            if(req.sercet)
            {
                req.signedCookies={};
                for(let attr in req.signedCookies){
                   let val=req.cookies[attr];
                   req.signedCookies[attr]=unsign(val,secrt);
                }
            }
    }
}
app.use(cookieParser('Mas456'));//如果写入cookie时，设置了signed=true，则cookieParser方法要传入密钥
app.get('/write',(req,res)=>{
    //signed为true 表示加密
    res.cookie('name','ceshi1',{
        signed:true
    });
    res.cookie('age','30');
    res.send('cookie已写入');
});
app.get('/user',(req,res)=>{
/**
 * express 读取cookie
 */
//   let cookie=req.headers['cookie'];
//   res.send(cookie);

//用cookieParser 读取cookie
 //res.send(req.cookies);//只能获取未签名的密钥
 res.send(req.signedCookies);//获取签名的Cookie
});

app.listen(3000,()=>{
    console.log('已启动！！！');
    
})
var crypto=require('crypto');//加密模块
function sign(val,secret)
{
   
    return val+'.'+crypto.createHmac('sha256',secret).update(val).digest('base64').replace(/\=+$/,'');
}
function unsign(val,secret)
{
 var str=val.slice(0,val.lastIndexOf('.'));
 var mac=sign(str,secret);
 return mac===val?str:false;
}
function cookie(name,val,Option){
let {signed=false}=Option;
 if(signed){
        val=sign(val,req.secret)
 }else
 {

 }
}
