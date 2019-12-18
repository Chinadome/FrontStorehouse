let  observe=new MutationObserver(function(){
     console.log('跟新完毕!');
     console.log(conste.children.length);
});
let conste=document.querySelector('ul');
//conste表示观察Dom的节点
observe.observe(conste,{
'childList':true,
});
for(let i=0;i<10;i++){
    conste.appendChild(document.createElement('li'));
}
for(let i=0;i<10;i++){
    conste.appendChild(document.createElement('li'));
}
for(let i=0;i<10;i++){
    conste.appendChild(document.createElement('li'));
}