//let EveentEmitter=require('events');
class  EveentEmitter{
    constructor(){
        this._events = {};
    }
    on(eventName,callback){
          if(this._events[eventName]){
            this._events[eventName].push(callback);
          }
          else{
            this._events[eventName]=[callback];
          }
    }
    emit(eventName){
        this._events[eventName].forEach(cb => {
            cb();
        });
    }
    off(eventName,callback){
        let idx = this._events[eventName].indexOf(callback);
        this._events[eventName].splice(idx,1);
    }
}
let e=new EveentEmitter();
function ready(){
    console.log('热热身');
}
e.on('运作',ready);

e.on('运作',function(){
    console.log('跑步');
});
e.off('运作',ready);
e.emit('运作');//触发事件