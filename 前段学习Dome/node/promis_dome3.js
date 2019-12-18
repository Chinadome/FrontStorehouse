let Pr=require("./promise1");
let p=new Pr(function(resolve,reject){ 
    resolve("shaibi");
});
//  p.then((data)=>{
//      return data;
//  }).then(data=>{
//      return data;
//  })

let promise2=p.then((data)=>{
    return data;
},(err)=>{
console.log(err);
});
promise2.then((data)=>{
    console.log(data);
},(err)=>{
    console.log('err:'+err);
}).then((data)=>{
    console.log(data);
});
