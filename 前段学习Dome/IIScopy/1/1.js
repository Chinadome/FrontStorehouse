const fs=require('fs');
let path = require('path');
function index(req,res){
    if(req.method=='GET'){
      let buf=fs.readFileSync(path.join(__dirname,'./1.html'));
      res.end(buf);
    }else if(req.method=='POST'){

    }
  
}
module.exports=index;