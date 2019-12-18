const fs=require('fs');
let path = require('path');
function login(req,res){
    if(req.method=='GET'){
      let buf=fs.readFileSync(path.join(__dirname,'./login.html'));
      res.end(buf);
    }else if(req.method=='POST'){

    }
  
}
module.exports=login;