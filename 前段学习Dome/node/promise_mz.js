//mz
//npm i mz 下载mz报
let fs=require("mz/fs");
Promise.all([fs.readFile("./a.txt","utf8"),fs.readFile("./b.txt","utf8")]).then((res)=>{
    console.log(res);
},()=>{});
//promise 3种状态等待
//发布订阅模式