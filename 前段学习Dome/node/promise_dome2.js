let Pr=require("./promise");
let pro=new Pr(function(resolve,reject){
    //resolve("自制力");
    setTimeout(()=>{resolve("自制力");},1000);
});
pro.then((values)=>{
  return values;
},(ject)=>{
    console.log("error:"+ject);
}).then((values)=>{
  console.log("succes:"+values);
},(ject)=>{
    console.log("error:"+ject);
})