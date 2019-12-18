//字符串-》js脚本
/**
 * 方法1  用eval 方法
 * 
 * let str="10";
 * eval('console.log(str);');
 */

 /**
  * 方法2 用 Funtion
  */
//  let set="let str=10; console.log(str);";
//  let fn=new Function(set);
//  console.log(fn.toString());
//  fn();

/**
 * 方法3  
 * node的 自带vm模块
 *      node 模块1 核心模块（内置模块） fs  ， vm ，path .....
 *            2 自定义模块/文件模块
 *            3 第三方模块 npm/yarn
 */
// let vm=require("vm");
// let str="hi";
// vm.runInThisContext("let str=10;console.log(str);");  //提供一个干净环境 运行代码 不受外界所影响     结果为：10  

//node 内置模块path
//basename
/*
 let  path=require("path");
 let res=path.basename("my.txt");//my.txt 
 let res=path.basename("my.txt",".txt"); //my
 console.log(res);
 */
 //extname() 获取文件扩展名
//  let  path=require("path");
//  let res=path.extname("my.txt.js");//.js 
//  console.log(res);

 //dirname  获取父级目录
//  let  path=require("path");
//  let res=path.dirname("a/b/c/d");//  a/b/c     
//  console.log(res);

// join()  
 let  path=require("path");
 let res=path.join("a/b/c","../","e/f");//  a\b\e\f     
 console.log(res);

//resolve()  获取绝对路径
 let  path=require("path");
 let res=path.resolve("a/b/c","../","e/f");// e:\作业\modue\a\b\e\f  
 let res2=path.join(__dirname,"a/b/c","../","e/f");// e:\作业\modue\a\b\e\f  
 console.log(res);
 console.log(res2);

 console.log(__dirname);//当前所在文件夹路径
 console.log(__filename);//当期那所在文件路径+文件名

 // fs 模块 
 let fs=require("fs");
//  fs.readFile();//异步读取文件  有回调
//  fs.readFileSync();//同步读取文件  没有回调

//  let bool=fs.existsSync("./modue/a.js");//异步文件是否存在
//  let bool=fs.exists("./modue/a.js");//同步文件是否存在    
//  console.log(bool);


//accessSync 如果读文件不在则抛异常  如果存在就不会抛异常
try{
fs.accessSync("./modue/a.js");
}catch(e){
    //......
}
 

