let fs=require("fs");
let Promise=require('./promise1');
function readFile(url)
{
    return new Promise((resolve,reject)=>{
        fs.readFile(url,"utf8",function(err,data){
            if(err) reject(err);
            setTimeout(()=>{reject(data)},0);
        })
    });
}
// 将多个promisr实例封装成一个promise实例,同时，结果成功和失败返回的结果是不一样的，成功返回的是一个数组，失败返回
//的是最先被reject失败状态的值。
// Promise.all([readFile("./a.txt"),readFile("./b.txt")]).then(
//     (res)=>{
//     console.log(res);
//      },
//      (err)=>{
//     console.log(err);
//      }
// );
//返回结果最快的值，不管是成功状态下，还是失败状态下
//rece Promise.race([p1, p2, p3])
// Promise.race([readFile("./b.txt"),readFile("./a.txt")]).then(
//     (res)=>{
//     console.log(res);
//      },
//      (err)=>{
//     console.log(err);
//      }
// );

//等价于 new Promise((resolve, reject) => resolve('你好'))；
// Promise.resolve().then(()=>{
//   console.log("你好");
// },()=>{
//   console.log("err");
// })

//等价于 new Promise((resolve, reject) => reject('不好'))；
Promise.reject().then(()=>{
    console.log("你好");
  },()=>{
    console.log("不好");
  })
// new Promise((resolve,reject)=>{
// resolve("11");
// }).then(()=>{
//     console.log("s1");
// },()=>{
//     console.log("s2");
// }).catch(()=>{
//     console.log("s3");
// })

let p=new Promise(function(resolve,reject){
    reject(1000);
})
p.finally(()=>{
    console.log("welcome");
}).catch((err)=>{
    console.log(err);
}).then(()=>{
console.log(1);
},()=>{
    console.log(2);
}).then((a)=>{
 console.log(a);
 
},(b)=>{
    console.log(b);
})

