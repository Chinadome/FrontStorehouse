let channer=new MessageChannel();
channer.port1.postMessage("I love jingjing");
channer.port2.onmessage=function(e){
    console.log(e);
}
console.log(666666);