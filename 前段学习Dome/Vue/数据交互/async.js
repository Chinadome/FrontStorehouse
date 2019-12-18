let express=require("express");
let app=express();
let bodyParser=require("body-parser");
//处理静态资源
app.use(express.static('public'));
//处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
       extended: false,                 //扩展模式
    }));

    app.all('*',function(req,res,next){
        //支持跨域
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','X-Requested-With'); 
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Headers','mytoken');//设置可以反问的请求头
     next();
    });
    app.use('/test',function(req,res){
        res.send('async');
    });
     app.use('/awaits',function(req,res){
         res.json({
             id:req.query.id,
             nmae:req.query.name
         })
     })
    app.listen(3000,()=>{
     console.log("服务已启动！");
    });
   
