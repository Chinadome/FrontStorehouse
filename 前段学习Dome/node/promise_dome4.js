let promise1=require('./promise1');
let p=new promise1(function(relsove,reject)
{
   setTimeout(()=>{relsove('s');},0);
});
// p.then().then().then((data)=>{console.log(22+data);},(reason)=>{
//     console.log('测试'+reason);
// });
p.then(function(data){
    return new Promise((relsove,reject)=>{
        relsove("success");
    });
},function(reason){
    console.log(reason);
}
).then((data)=>{
    console.log(data);
});

p.then(function(data){
    throw   '张三';
},function(reason){
    console.log(reason);
}).then(function(data){
    console.log(data);
},function(reason){
    console.log(reason);
})