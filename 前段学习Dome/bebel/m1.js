let num1=20;
let num2=30;
let num3=30;
let num4=50;
 
function  printSte(){
    console.log("导出export");
}
export function  myset(x){
    console.log("导出exports:"+x);
}
/* export default只能使用一次*/
export default{
      num1,
      num2,
      num3,
      printSte
}

export{
    num4
}
 