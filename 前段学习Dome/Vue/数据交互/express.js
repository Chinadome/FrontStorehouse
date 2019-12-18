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
     next();
    });
    app.use('/test',function(req,res){
        res.send('第一次调用！');
    });
    app.use('/test2',function(req,res){
        res.send('第二次调用！');
    });
    app.use('/test3',function(req,res){
        res.send('第三次调用！');
    });
    app.get('/adata', function(req, res) {
        res.send('axios请求参数：' + req.query.id);
    });
    app.get('/restful/:id', function(req, res) {
        res.send('fetch的restfil请求参数' + req.params.id);
    });
    app.delete('/delete', function(req, res) {
        console.log(123);
        res.send('axios请求参数：' + req.query.id);
    })
    app.post('/adata',function(req,res){
        console.log(123);
        res.send('axios的pust求参数：' + req.body.uname+'&&'+req.body.pwd);
    })
    app.post('/fethch_post',(req,res)=>{
        res.send('tetch_post请求参数:'+req.body.name+'&&'+req.body.pwd);
    })
    app.post('/fdata/:id',(req,res)=>{
        res.send('tetch_post请求参数:'+req.params.id+'&&'+req.body.name+'&&'+req.body.pwd);
    })
    app.put('/fdata/:id',(req,res)=>{
        res.send('fetch的put请求参数:'+req.params.id+'&&'+req.body.name+'&&'+req.body.pwd);
    })
    app.put('/fdatas/:id',function(req,res) {
        res.json({
            id: req.params.id,
            name: req.body.name,
            age: req.body.pwd
        });
    });
    app.listen(3000,()=>{
     console.log("服务已启动！");
    });
   
