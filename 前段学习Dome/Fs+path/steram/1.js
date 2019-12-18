let  fs=require('fs');
let path=require('path');
fs.readFile(path.resolve(__dirname,"a.txt"),(err,data)=>{
    //console.log(data.toString());//sssss
    fs.writeFile(path.resolve(__dirname,'b.xtx'),data,(error)=>{
        console.log("写入成功！");
    });
})