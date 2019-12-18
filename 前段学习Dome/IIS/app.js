const http=require("http");
const fs=require("fs");
const url=require("url");
const qs=require("querystring");
let server=http.createServer((req,res)=>{
    
    let {pathname}=url.parse(req.url);
    if(pathname!="/favicon.ico")
    {
        let file_buf=null;
        if(pathname=='/'||pathname=="/login.html")
        {
            file_buf=fs.readFileSync("./IIS/login.html");
        }else if(pathname=="/regeist.html"){
            let {username,pwd}=qs.parse(url.parse(req.url).query);
            if(username=='admin'&&pwd=='123456')
            {
                file_buf=fs.readFileSync("./IIS/login.html");
            }else
            {
            file_buf=fs.readFileSync("./IIS/regeist.html");
           }
        }else {
            file_buf=fs.readFileSync("./IIS/error.html");
        }
        res.end(file_buf);
    }
});
server.listen(3000);