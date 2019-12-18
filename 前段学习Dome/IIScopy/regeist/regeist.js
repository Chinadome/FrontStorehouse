const fs=require('fs');
let path = require('path');
let  jq = require('querystring');
function regeist(req,res){
    if(req.method === 'GET'){
      let buf=fs.readFileSync(path.join(__dirname,'./regeist.html'));
      res.end(buf);
    }else if(req.method === 'POST'){
    let arr=[];
     req.on('data',(buf)=>{
       arr.push(buf);
     });
     req.on('end',()=>{
      let buf=Buffer.concat(arr);
      let {username,pwd}=jq.parse(buf.toString());
      res.setHeader('Content-type','text/plain;charset=utf8');//设置文本类型
      if(username=='admin'&&pwd=='123456')
      {
        res.end('登录成功！');
      }else{
          console.log('账号密码错误！');
          
      }
     });
    };
  
}
module.exports=regeist;