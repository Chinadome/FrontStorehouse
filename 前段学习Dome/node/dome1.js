const http=require("http");
const hostname='127.0.0.1';
const port='3000';
const seraver=http.createServer(function(req,res){
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
res.end('Hello world\n');
});
seraver.listen(port, hostname,function(){
    
})
let school={};
e.on(function(value,key){
    school[key]=value;
    if(Object.keys(school).length===2)
    {
        console.log(school);
    }
})