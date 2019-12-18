let fs = require('fs'); // 提供流操作api
let path = require('path');
let ws = fs.createWriteStream(path.resolve(__dirname,'b.txt'),{
    flags: 'w',
    encoding: 'utf8',
    highWaterMark: 4,// 预计写入多少字节
    autoClose: true,
    start: 0
});

// 写入的数据必须字符串或buffer
let flag = ws.write('12',function(err) {
    console.log('write success');
});
ws.write('12345',function(err) {
    console.log('write success');
});
console.log(flag);
ws.end('over');//介绍
ws.write('12345',function(err) {
    console.log('write success');
}); // 报错 已经结束 不能再写

//ws.end();