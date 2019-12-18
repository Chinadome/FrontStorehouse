node
事件环  浏览器事件环    node 事件环
js 主线程是单线程，遇到ajax，setTimeout 浏览器会开多线程
代码从上往下，会执行同步代码，后执行异步代码
异步setTimeout promise.then
//前端查看兼容性网站 caniuse
异步分为 宏任务和微任务
       宏任务 慢  异步setTimeout    setImmediate(只兼容IE10以上)   MessageChannel
       微任务 快   promise.then    vue.$nextTick(function(){})  
        MutationObserver 