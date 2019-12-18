// let fn=require("./b.js"); 
// //console.log(fn.toString());
// fn();
//console.log(require);
let fs=require('fs');
let path=require("path");
/*
console.log(__dirname); // 获取当前所在目录
let fath=path.join(__dirname,"./a.js");// 拼接  
console.log(fath);
*/

/**
 * 手写文件导入
 */
let res=myreq('./b.js');
res();

 function myreq(mod){
   let filename=path.join(__dirname,mod);
   let content=fs.readFileSync(filename,'utf8');//同步读取文件 
   let fn = new Function('exports','module','require','__dirname','__filename',content+'\n return module.exports;');
    return fn(exports,module,myreq,__dirname,__filename);
 }
 /*
 function myreq(mod) {
    // 文件路径
    let filename = path.join(__dirname,mod);
    let content = fs.readFileSync(filename,'utf8');
    let fn = new Function('exports','module','require','__dirname','__filename',content+'\n return module.exports;');
    return fn(exports,module,myreq,__dirname,__filename);  
}
 */