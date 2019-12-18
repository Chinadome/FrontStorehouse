let fs = require("fs");
// fs.readFile("./../作业1.html",function(err,data) {
//     console.log(data.toString());
// });
let  teachar={};
function after(times,callback){
     return function(key,value){
       teachar[key]=value;
       if(--times===0)
       {
        callback(teachar);
       }
     }
}
let newFn=after(2,function(res){
  console.log(res);
})
 fs.readFile('./a.txt',"utf8",function(err,data){
     if(err) return console.log(err);
     newFn('name',data);
  });
  fs.readFile('./b.txt',"utf8",function(err,data){
    if(err) return console.log(err);
    newFn('age',data);
 });