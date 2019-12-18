let fs=require("mz/fs");
//根据a.txt的内容b.txt读取b.xtx文件的内容
async function readName(){
  try{
  let content=await  fs.readFile('./a.txt','utf8');
  let name=await fs.readFile(content,'utf8');
  return name;
  }
  catch(err){
      console.log(err);
  }
}
//async 函数返回值是一个promise实例
readName().then((data)=>{
  console.log(data);
})
//并发用promise中的all方法
// async function readName(){
//     await Promise.all([fs.readFile(),readFile()])
// }