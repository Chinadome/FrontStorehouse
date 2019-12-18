let fs=require("mz/fs");
//根据a.txt的内容b.txt读取b.xtx文件的内容
function* readName(){
  let content=yield  fs.readFile('./a.txt','utf8');
  let name=yield fs.readFile(content,'utf8');
  return name;
}
//手写co
function co(it){
    return new Promise((resolve,reject)=>{
        function next(data) {
            let {value,done} = it.next(data);
            if(!done) {
                value.then(y=>{
                    next(y);
                })
            } else {
                resolve(value);
            }
        }
        next();
    });
}


co(readName()).then((data)=>{
    console.log(data);
})


//异步流程 回调 1回调嵌套地狱 
//2 不能try catch (捕获异常)
//3 并发问题 
//primose  
// genetator   
//async+await    genetator+co