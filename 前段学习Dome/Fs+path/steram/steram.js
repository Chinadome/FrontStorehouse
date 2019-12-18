let fs=require('fs');//提供操作流的api
let path=require('path');
let s=fs.createReadStream(path.resolve(__dirname,'a.txt'),{
    flags:'r',//r 读 w 写
    highWaterMark: 4 ,//默认读64k
    encoding:null,//编码格式
    autoClass:true,//是否读完关闭
    start:1,//从哪里开始读
    end:5//读到哪里结束
})//读取部分文件流
var str="";
s.on('data',function(chunck){
  
 // console.log(chunck.toString());
 str+=chunck;
});//准备开始读取
s.on('end',function(){
   console.log(str.toString());
   
});//读完

// //防止读取出现乱码
// let arr=[]
// s.on('error',(err)=>{
//   console.log(err);  
// });//文件错误
// s.on('data',function(chunck) {
//   arr.push(chunck);
//   //s.pause(); // 暂停data事件触发
// });
// // 读取完毕
// rs.on('end',function() {
//   console.log(Buffer.concat(arr).toString());
// });
// setTimeout(()=>{
//   s.resume(); // 恢复data事件触发
// },1000);

