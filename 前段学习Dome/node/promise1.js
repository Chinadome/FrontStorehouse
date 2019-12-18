///手写Promise
function Promise(accept){
    let _this=this;
    _this.state="person";
    _this.resolvestate=[];
    _this.rejectstate=[];
    _this.resolve=undefined;
    _this.refuce=undefined;
    function resolve(value){
        if(_this.state==='person'){
        _this.resolve=value;
        _this.state="resolve";
        // _this.resolvestate.forEach(fn=>fn(_this.resolve));
        _this.resolvestate.forEach(fn=>fn());
         }
    }
    function reject(refuce){
        if(_this.state==='person'){
        _this.refuce=refuce;
        _this.state="refuce";
        // _this.rejectstate.forEach(fn=>fn(_this.refuce));
        _this.rejectstate.forEach(fn=>fn());
        }
    }
  try{
    accept(resolve,reject);
  }catch(e){
    reject(e);
  }
}

function  resolvePromise(promise2,x,resolve,reject){
    //防止重复调用
    if (x === promise2) {
        return reject(new TypeError("循环引用"));
    }
    let called;//表示是否调用成功
     if(x!=null&&(typeof x==='object'||typeof x==='function'))
     {
         
        try{
            let then=x.then;
            if(typeof then==='function')
            {
               then.call(x,(y)=>{
                if(called) //避免别人写的promise中既走resolve又走reject的情况
                 return
                  called=true;
                 resolvePromise(promise2, y, resolve, reject)
                  // if (called) return        //避免别人写的promise中既走resolve又走reject的情况
                  //   called = true;
                  //   resolvePromise(promise2, y, resolve, reject)
               },(r)=>{
                if(called) 
                return called=true;
                reject(r);
               })
            }else//不是promise
            {
               resolve(x);
            }
          // then.call()
        }catch(e){
          if(called) 
          return called=true;
            reject(e);
        }
     }else //不是引用类型
     {
       return  resolve(x);
     }

}
Promise.prototype.then=function (onresolve,onreject){
  onresolve=typeof onresolve==='function'?onresolve:(data)=>{return data};
  onreject=typeof onreject==='function'?onreject:(reason)=>{
    throw reason;
  };
    var _this=this;
    //then被执行，需要返回一个新的promise 实例
    let promise2=new Promise(function(resolve,reject){
        if(_this.state=="resolve"){
            setTimeout(()=>{
                //需要用到promise2实例,放到异步中
                try{
                    let x=onresolve( _this.resolve);
                    resolvePromise(promise2,x,resolve,reject);
                }catch(e){
                    reject(e);
                }
            },0);
          
         }
         if(_this.state=="refuce"){
            setTimeout(()=>{
             try{
                let x=onreject(_this.refuce);
                //resolve(x);
                resolvePromise(promise2,x,resolve,reject);
             }
             catch(e){
                reject(e);
             }
            },0);
          }
          if(_this.state=="person"){
             //  _this.resolvestate.push(onresolve);
             //  _this.rejectstate.push(onreject);
              _this.resolvestate.push(function(){
                  
                setTimeout(()=>{
                  try{
                   let x=onresolve(_this.resolve);
                   resolvePromise(promise2,x,resolve,reject);
                  }catch(e)
                  {
                    reject(e)
                  } 
                },0);
                 });
              _this.rejectstate.push(function(){
                setTimeout(()=>{
                  try{
                let  x=onreject(_this.refuce);
                resolvePromise(promise2,x,resolve,reject);
                //resolve(x);
                  }
                  catch(e){
                    reject(e)
                } },0);
                 });
          }
    });
   return promise2;
}
Promise.prototype.catch=function(errfn){
  return this.then(null,errfn);
}
Promise.all=function(values){
  return new Promise((resolve,reject)=>{
    //values里面的所有的状态都是成功时（普通值认为成功）
    //只要有一个失败，则为失败
    let arr=[];//存放结果
    function proccesData(value)
    {
    arr.push(value);
    if(arr.length===values.length){
      resolve(arr);
    }
    };   
    for(let i=0;i<values.length;i++){
      let current=values[i];
      //current是否时promise实例
      if(current&&current.then&&typeof current.then==='function')
      {
        //current是promise实例
        current.then((x)=>{
          proccesData(x);
        },reject)
      }else
      {
        proccesData(current);
      }
    }
  })
}
 
Promise.race=function(values){
  return new Promise((resolve,reject)=>{
    for(var i=0; i<values.length; i++) 
    {
      let current=values[i];
      if(current&&current.then&&typeof current.then==='function')
      {
       current.then(resolve,reject);
      }else
      {
        resolve(current);
      }
    }
   });
}
//返回成功结果的promise
Promise.resolve=function(){
   return new Promise((resolve,reject)=>{
       resolve();
   });
}
//返回失败结果的promise
Promise.reject=function(){
  return new Promise((resolve,reject)=>{
      reject();
  });
}

Promise.prototype.finally=function(callback){
  let p=this.constructor;
  return this.then((value)=>{
           return p.resolve(callback()).then(function(){
             return value;
           })
  },(reason)=>{
    return p.resolve(callback()).then(function(){
      throw reason;
  });
   });
}
// Promise.prototype.finally = function (callback) {
//     var P = this.constructor
//     return this.then(function (value) {
//       return P.resolve(callback()).then(function () {
//         return value
//       })
//     }, function (reason) {
//       return P.resolve(callback()).then(function () {
//         throw reason
//       })
//     })
//   }
//验证手写的promise是否符合规范
Promise.defer=Promise.deferred=function(){
  let def={};
  def.promise=new Promise((resolve,reject)=>{
    def.resolve=resolve;
    def.reject=reject;
  })
  return def;
}
  //可以使用promises-aplus-tests 测试封装的promise是否符合promiseA+规范
  //npm install -g promises-aplus-tests 下载安装promises-aplus-tests的密令
  
  //promises-aplus-tests promise1.js  检验promise是否符合
// node.js 导出
module.exports=Promise;


