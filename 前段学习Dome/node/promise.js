// ///手写Promise
// function Promise(accept){
//     let _this=this;
//     _this.state="person";
//     _this.resolvestate=[];
//     _this.rejectstate=[];
//     _this.resolve=undefined;
//     _this.refuce=undefined;
//     function resolve(value){
//         if(_this.state==='person'){
//         _this.resolve=value;
//         _this.state="resolve";
//         // _this.resolvestate.forEach(fn=>fn(_this.resolve));
//         _this.resolvestate.forEach(fn=>fn());
//          }
//     }
//     function reject(refuce){
//         if(_this.state==='person'){
//         _this.refuce=refuce;
//         _this.state="refuce";
//         // _this.rejectstate.forEach(fn=>fn(_this.refuce));
//         _this.rejectstate.forEach(fn=>fn());
//         }
//     }
//     accept(resolve,reject);
// }
// Promise.prototype.then=function (onresolve,onreject){
//     var _this=this;
//     if(_this.state=="resolve"){
//        onresolve( _this.resolve);
//     }
//     if(_this.state=="refuce"){
//        onreject(_this.refuce);
//      }
//      if(_this.state=="person"){
//         //  _this.resolvestate.push(onresolve);
//         //  _this.rejectstate.push(onreject);
//          _this.resolvestate.push(function(){
//               onresolve(_this.resolve);
//             });
//          _this.rejectstate.push(function(){
//              onreject(_this.refuce);
//             });
//      }
// }
// // node.js 导出
// module.exports=Promise;
// 自己实现Promise类

function Promise (executor) {   
    let self = this;
    self.status = 'pending';
    self.value = undefined;    
    self.reason = undefined;
    self.onResolvedCallbacks = [];   
    self.onRejectedCallbacks = [];   
    function resolve(data_value) {
        if(self.status === 'pending') {
            self.status = 'resolved';
            self.value = data_value;
            self.onResolvedCallbacks.forEach(function(fn) {  
                fn();
            })
        }
    }
    function reject(data_reason) {
        if(self.status === 'pending') {
            self.status = 'rejected';
            self.reason = data_reason;
            self.onRejectedCallbacks.forEach(function(fn) {  
                fn();
            })
        }
    }
    try {
        executor(resolve, reject);   
    } catch (e) {  
        reject(e);                 
    }
}
 
function resolvePromise(promise2, x, resolve, reject) {
    //有可能这里返回的x是别人的promise 要尽可能允许其他人乱写 
    if(promise2 === x) {//这里应该报一个循环引用的类型错误
        return reject(new TypeError('循环引用'));
    }
    //看x是不是一个promise promise应该是一个对象
    let called;  //表示是否调用过成功或者失败
    if (x!== null && (typeof x ==='object' ||typeof x === 'function')) {
        //可能是promise 看这个对象中是否有then 如果有 姑且作为promise 用try catch防止报错
        try {
            let then = x.then;
            if (typeof then === 'function') {
                //成功
                then.call(x, function(y) {
                    if (called) return        //避免别人写的promise中既走resolve又走reject的情况
                    called = true;
                    resolvePromise(promise2, y, resolve, reject)
                }, function(err) {
                    if (called) return
                    called = true;
                    reject(err);
                })
            } else {
                resolve(x)             //如果then不是函数 则把x作为返回值.
            }
        } catch (e) {
            if (called) return
            called = true;
            reject(e)
        }
        
    } else {  //普通值
        return resolve(x)
    }
 
}
 
Promise.prototype.then = function (onFulfiled, onRejected) {
    //成功和失败默认不传给一个函数
    onFulfiled = typeof onFulfiled === 'function'? onFulfiled:function(value) {
        return value;
    }
    onRejected = typeof onRejected === 'function'? onRejected:function(err) {
        throw err;
    }
    let self = this;
    let promise2;  //新增: 返回的promise
    if(self.status === 'resolved') {
        promise2 = new Promise(function(resolve, reject){  
            setTimeout(function(){                          //用setTimeOut实现异步
                try {
                    let x = onFulfiled(self.value);        //x可能是普通值 也可能是一个promise, 还可能是别人的promise                               
                    resolvePromise(promise2, x, resolve, reject)  //写一个方法统一处理 
                } catch (e) {
                    reject(e);                                        
                }
                
            }) 
        }) 
    }
    if(self.status === 'rejected') {
        promise2 = new Promise(function(resolve, reject){
            setTimeout (function() {
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e);
                }
            })
        }) 
    }
    
    if(self.status === 'pending') {            
        promise2 = new Promise (function(resolve, reject) {   
            self.onResolvedCallbacks.push(function(){   
                setTimeout(function(){
                    try {
                        let x = onFulfiled(self.value); 
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e);
                    }   
                })
            });
            self.onRejectedCallbacks.push(function(){
                setTimeout(function(){
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e);
                    } 
                })   
            });
        })
    }
    return promise2;
}

Promise.defer=Promise.deferred=function(){
    let def={};
    def.promise=new Promise((resolve,reject)=>{
      def.resolve=resolve;
      def.reject=reject;
    })
    return def;
  }
  //可以使用promises-aplus-tests 测试封装的promise是否符合规范
  //npm install -g promises-aplus-tests 下载安装promises-aplus-tests的密令

  //promises-aplus-tests promise.js  检验promise是否符合
//all() race() reject() resolve()




// 导出该构造函数
module.exports = Promise;