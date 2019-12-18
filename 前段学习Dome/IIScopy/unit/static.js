let fs = require('fs');
let url = require('url');
let path = require('path');
let qs = require('querystring');

const STATIC_ROOT = path.join(path.dirname(__dirname),'unit');
const STATIC_CSS = path.join(STATIC_ROOT,'css');
const STATIC_IMG = path.join(STATIC_ROOT,'image');
const STATIC_JS = path.join(STATIC_ROOT,'js');
function resouces(req,res) {
    let {pathname} = url.parse(req.url);
    let extname = path.extname(pathname);
    let paths = pathname.split('/');
    let resouce_name = paths[paths.length-1];
    let buf = null;
    switch(extname) {
        case '.png':
        case '.gif':
        case '.bmp':
        case '.jpg':
        case '.jpeg':
            buf = fs.readFileSync(path.join(STATIC_IMG,resouce_name));
            break;
        case '.css':
            buf = fs.readFileSync(path.join(STATIC_CSS,resouce_name));
            break;
        case '.js':
            buf = fs.readFileSync(path.join(STATIC_JS,resouce_name));
            break;        
    }
    if(buf) {
        res.end(buf);
    }
}

module.exports = resouces;