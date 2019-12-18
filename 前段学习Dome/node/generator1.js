//解决异步问题
function* fn(){
    let a=yield 100;
    console.log(a);
    let b=yield 200;
    console.log(b);
    return b;
} 
 
let it=fn();
it.next();
it.next('abc');//从第二次传参数 参数会传给上一次yield 返回值
//it.next('xyz');
console.log(it.next('xyz'));//{ value: 'xyz', done: true }

//
let fs=require("mz/fs");
//根据a.txt的内容b.txt读取b.xtx文件的内容
function* readName(){
  let content=yield  fs.readFile('./a.txt','utf8');
  let name=yield fs.readFile(content,'utf8');
  return name;
}

/**
 * 
 */
//#region 
// let tom=readName();
// let {value,done}=tom.next();
// //console.log(value);
// value.then((data)=>{
//   let {value,done}=tom.next(data);
//   value.then((res)=>{console.log(res);});
// });
//#endregion

//co   上面代码的简化
let co=require("co");
co(readName()).then((data)=>{
    console.log(data);
})