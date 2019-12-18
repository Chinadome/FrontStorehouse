let path=require('path');

//  path.basename（）获取文件名
//console.log(path.basename("./Fs+path/conts.txt"));

//path.dirname() 获取目录名
//console.log(path.dirname("./Fs+path/conts.txt"));

//path.extname() 获取文件的后缀名
//console.log(path.extname("./Fs+path/conts.txt"));

//path.parse() 将文件路径转换成一个对象
/**
 * { root: '',
  dir: './Fs+path',
  base: 'conts.txt',
  ext: '.txt',
  name: 'conts' }
 */
//console.log(path.parse("./Fs+path/conts.txt"));

//path.format  从对象返回路径字符串。 与 path.parse() 相反。
// E:\作业\Fs+path\conts.txt
// console.log(path.format({
//     dir: 'E:\\作业\\Fs+path',
//     base: 'conts.txt'
//   }));

//path.jion() 用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
// let res=path.join("a/b/c","../","e/f");//  a\b\e\f     
// console.log(res);

//path.join  将路径或路径片段的序列解析为绝对路径。
// let res=path.resolve("a/b/c","../","e/f");// e:\作业\modue\a\b\e\f   
// console.log(res);


//path.isAbsolute() 方法检测 path 是否为绝对路径。
//console.log(path.isAbsolute("./Fs+path/conts.txt"));

//path.normalize() 方法规范化给定的path
// let malize=path.normalize('E:////作业\\\\/\\/\\/Fs+path');//E:\作业\Fs+path
// console.log(malize);
