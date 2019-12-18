let fs = require('fs');
let path = require('path');
let rs = fs.createReadStream(path.resolve(__dirname,'a.txt'),{
    highWaterMark: 3
});
let ws = fs.createWriteStream(path.resolve(__dirname,'b.txt'),{
    highWaterMark: 1
});

//手写pipe
function pipe(rs,ws){
    rs.on('data',function(chunck) {
        let flag = ws.write(chunck); 
        if(!flag) rs.pause();
    });
        
    rs.on('end',function() {
        console.log('读取完毕');
    })
    ws.on('drain',function() {
        rs.resume();
    });
}
//pipe(rs,ws);
rs.pipe(ws);//写入流