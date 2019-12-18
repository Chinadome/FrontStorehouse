let fs = require("fs"); // node内置模块
let bluebird = require("bluebird");// 第三方模块
//let fs = require("mz/fs");
//let readFile = bluebird.promisify(fs.readFile);
// function readFile(url) {
//     // 返回一个Promise实例
//     return new Promise((resolve,reject)=>{
//         fs.readFile(url,"utf8",function(err,data) {
//             if(err) reject(err);
//             resolve(data);
//         })
//     });
// }

/**
 * 手写 bluebird
 * @param {*} fn 
 */
function promisify(fn) { // node util模块引入该功能
    // ["./a.txt","utf8"]
    return function(...args) {
        return new Promise((resolve,reject)=>{
            fn(...args,function(err,data) {
                 if(err) reject(err);
                 resolve(data);
            })
        })
    }
}
let readFile = promisify(fs.readFile);


// bluebird 基于promise库
// mz
Promise.all([readFile("./a.txt","utf8"),readFile("./b.txt","utf8")]).then((res)=>{
    console.log(res);  
},()=>{

});