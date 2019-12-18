function EventEmitter(){
    this._arr=[];
}
EventEmitter.prototype.on=function(cb){
    
    this._arr.push(cb);
}
EventEmitter.prototype.emit=function(){
    this._arr.forEach(fn=>fn.apply(this,arguments));
}
let fs = require("fs");
 let e=new EventEmitter();
// e.on(function(){
//     console.log(1);
// })
// e.on(function(){
//     console.log(2);
// })
// e.on(function(){
//     console.log(3);
// })
// e.emit();
let school={};
e.on(function(value,key){
    school[value]=key;
    if(Object.keys(school).length===2)
    {
        console.log(school);
    }
})
fs.readFile('./b.txt',"utf8",function(err,data){
    if(err) return console.log(err);
    e.emit(data,'age');
 });
 fs.readFile('./a.txt',"utf8",function(err,data){
   if(err) return console.log(err);
   e.emit(data,'name');
});

