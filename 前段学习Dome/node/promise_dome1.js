
// let pro=new Promise(function(resolve,reject){
//     resolve("学习中");
//     //reject("测试");
// });

// pro.then((value)=>{
// console.log("succes:"+value);
// },(ject)=>{
//   console.log("error:"+ject);
// });
// let p1 = new Promise((resolve, reject) => {
//   resolve('成功了')
// });

// let p2 = new Promise((resolve, reject) => {
//   resolve('success')
// });
// Promise.all([p1, p2]).then((result) => {
//   console.log(result);               //['成功了', 'success']
// }).catch((error) => {
//   console.log(error);
// });

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },10)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 1)
})



Promise.race([p1, p2]).then((result) => {
  console.log(result);               //['成功了', 'success']
}).catch((error) => {
  console.log(error);
});