function dome(){
    this.age=[];
}
dome.prototype.sek=function(cb){
    this.age.push(cb);
}
dome.prototype.emt=function(){
    this.age.forEach(fn=>fn.apply(this,arguments));
}
let scauuce={};
let ae=new dome();
ae.sek(function(value,key){
    scauuce[key]=value;
    if(Object.keys(scauuce).length===2)
    {
        console.log(scauuce);
    }
})

ae.emt('张三','name');
ae.emt('156','age');