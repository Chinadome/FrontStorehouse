let fs = require('fs');
let url = require('url');
let path = require('path');
let qs = require('querystring');
function resouces(req,res) {
    let {pathname} = url.parse(req.url);
    let extname = path.extname(pathname);
    const root=path.dirname(__dirname);
    let res_path=path.join(root,pathname)
    let buf = null;
    switch(extname) {
        case '.png':
        case '.gif':
        case '.bmp':
        case '.jpg':
        case '.jpeg':
            buf = fs.readFileSync(res_path);
            break;
        case '.css':
            buf = fs.readFileSync(res_path);
            break;
        case '.js':
            buf = fs.readFileSync(res_path);
            break;        
    }
    if(buf) {
        res.end(buf);
    }
}

module.exports = resouces;