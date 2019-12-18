// let name=require("./a");
// console.log(name);
// let content=require("./my.json");
// console.log( content);
let path=require('path');
let fs=require('fs');
let vm=require('vm');
function Module(id){
    this.id=id;
    this.exports={};
}
Module.wrapper = [
    '(function(exports,module,require,__dirname,__filename) {',
    '})'
]
Module._cache={

}
Module._extensions={
    '.js'(module){
     let content=fs.readFileSync(module.id,'utf8');
     let fnstr=Module.wrapper[0]+content+Module.wrapper[1];
     let fn=vm.runInThisContext(fnstr);
     fn.call(module.exports,module.exports,module,req);
    },
    '.json'(module){
     let json=fs.readFileSync(module.id,'utf8');
     module.exports=JSON.parse(json);
    }
}
function tryModuleLoad(module)
{
  // 获取扩展名
 let extension=path.extname(module.id);
 Module._extensions[extension](module);
 //通过后缀加载模块
}
function req(modulePath){
      //获取加载资源的绝对路径
     let absPathname=path.resolve(__dirname,modulePath);
     let extname=Object.keys(Module._extensions);//[".js",".json"];
     let old=absPathname;
     let index=-1;
       function  find(absPathname){
           if(index===extname.length)
           {
               return absPathname;
           }
           try{
            fs.accessSync(absPathname);//去查找文件在不在
            return absPathname;
            }catch(e)
            {
             let ext=extname[++index];
             let newpath=old+ext;
             return find(newpath);
            }
            //fs.accessSync(absPathname);
       }
       absPathname=find(absPathname); 
       try{
           fs.accessSync(absPathname);
       }
       catch(e){
             throw new Error("error");
       }
     //假如缓存中有 直接将exports 对象直接返回
     if(Module._cache[absPathname]){
         return Module._cache[absPathname].exports;
     }
     let module=new Module(absPathname);
     Module._cache[absPathname]=module;//
     //加载模块
     tryModuleLoad(module);
      return module.exports;
}
 //let res=req("./my.json");
 let res=req("./my.json");
 //req("./a.js");
 console.log(res);
//module.exports与exports 的区别
//exports 是module.exports  别名
//module.exports=exports={}
//exports="a1" 不能直接改变exports对象引用 不会影响module.exports的值