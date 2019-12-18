//Buffer
let buf=Buffer.from("前段工程师");
console.log(buf);//<Buffer e5 89 8d e6 ae b5 e5 b7 a5 e7 a8 8b e5 b8 88>
console.log(buf.toString());//前段工程师

//其他进制转十进制
console.log(parseInt("11",2));// 转成二进制 3
console.log(parseInt("11",8));// 转成八进制 9
console.log(parseInt("11",16));// 转成16进制 17

//十进制转其他进制
console.log((20).toString());//10进制 20
console.log((20).toString(16));//16进制 14
console.log((20).toString(2));//二进制 10100


let buf2=Buffer.from([1,2,3,4]);
console.log(buf2);

const buf3=Buffer.alloc(10);//分配空间 且初始化
console.log(buf3);//<Buffer 00 00 00 00 00 00 00 00 00 00>
const buf4=Buffer.alloc(10,1);//分配空间
console.log(buf4);//<Buffer 01 01 01 01 01 01 01 01 01 01>

const buf5=Buffer.allocUnsafe(10);//分配长度为10 且未初始化的
console.log(buf5);//<Buffer 0e 00 00 00 06 02 00 00 06 00>



