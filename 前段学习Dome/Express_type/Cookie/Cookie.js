let http=require('http');
//node 原生cookie
http.createServer(function(req,res){
      if(req.url === '/write')
      {
        res.setHeader('Set-Cookie',['name=along222','age=30']);
        res.end('write success');
      }else if(req.url==='/user')
      {
       let cookie=req.headers['cookie'];
       res.end(cookie);
      } 
}).listen(8000,()=>{
    console.log('已启动');
});
