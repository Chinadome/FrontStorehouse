let fs=require("fs");
//  文件是否存在
// fs.access("./Fs+path/conts.txt",(err)=>{
//     if(err)
//     throw err;
//     console.log("文件已找到");
// });

// 向 const.txt文件末尾添加数据
// fs.appendFile("./Fs+path/conts.txt","/t 哈哈哈哈",'utf8',(err)=>{
//     if (err) throw err;
//   console.log('数据已添加成功！');
// })

//  将A文件拷贝到B文件
// fs.copyFile("./Fs+path/conts.txt","./Fs+path/b.txt",(err)=>{
//     if (err) throw err;
//       console.log('已拷贝成功！');
// })

// 添加文件
// fs.mkdir('./Fs+path/c.txt',(err)=>{
//     if (err) throw err;
//     console.log('文件已添加成功');
// });

// 删除文件
// fs.unlink('./Fs+path/b.txt',(err)=>{
//     if (err) throw err;
//        console.log('删除成功！');
// })

// 删除目录
//  fs.rmdir('./Fs+path/c.txt',(err)=>{
//      if (err) throw err;
//         console.log('删除成功！');
//  })

// 读取文件信息
/**
 * Stats {
  dev: 208143876,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 3096224743818973,
  size: 27,
  blocks: undefined,
  atimeMs: 1571731149935.8809,
  mtimeMs: 1571730904941.8542,
  ctimeMs: 1571730904941.8542,
  birthtimeMs: 1571730300560.1135,
  atime: 2019-10-22T07:59:09.936Z,
  mtime: 2019-10-22T07:55:04.942Z,
  ctime: 2019-10-22T07:55:04.942Z,
  birthtime: 2019-10-22T07:45:00.560Z }
 */
fs.stat('./Fs+path/conts.txt',(err,stat)=>{
   // console.log(err);
    console.log(stat);
});