//先生成一个工程化的文件  npm init -y (初始化文件)   bluebird基于promise的库
//安装模块
 //npm i bluebird  下载包
 let  fs =require("fs");//node 内置模块
 let bluebird=require("bluebird");//第三方模块
 //let readFile=bluebird.promisify(fs.readFile);
 //自己封装的
 function promisify(fn) { // node util模块引入该功能
    return function(...args) {
        return new Promise((resolve,reject)=>{
            fn(...args,function(err,data) {
                 if(err) reject(err);
                 resolve(data);
            })
        })
    }
}
 let  readFile=promisify(fs.readFile);
 Promise.all([readFile("./a.txt","utf8"),readFile("./b.txt","utf8")]).then((res)=>{
    console.log(res);
},()=>{});

