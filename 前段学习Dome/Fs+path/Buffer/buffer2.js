//copy() 方法原理
Buffer.prototype.copy2=function(tergetBuffer,targetShart,soureShart,soureEnd){
    for(let i=soureShart;i<soureEnd;i++)
    {
     tergetBuffer[targetShart++]=this[i];
    }
 }
let fel=Buffer.from("测试");
let fel2=Buffer.alloc(6);
fel.copy(fel2,0,0,3);
console.log(fel2.toString());//测试
  fel.copy2(fel2,3,3,6)
 //console.log(fel2.toString());//测试

//concat() 方法原理
Buffer.concat2=function(List,length){
    if(!Array.isArray(List))
    {
        throw  new Error("arguments  error");
    }
    if(length===0){
        return Buffer(0);
    }
    if(typeof length!=='number')
    {
        length=0;
        for (var i = 0; i < List.length; i++) {
			length += List[i].length;
		}

    }
    pos = 0;
	let buf =new Buffer(length);
	for (let j = 0; j < List.length; j++) {
		var tem = List[j];
		tem.copy(buf, pos);
		pos += tem.length;
	}
	return buf

}
let  buf=Buffer.from("测");
let  buf2=Buffer.from("试");
let  buf3=Buffer.concat2([buf,buf2]);
console.log(buf3);





let buf1 = Buffer.from("阿龙");
console.log(buf1.toString('base64')); // 6Zi/
console.log(buf1); // <Buffer e9 98 bf>
console.log(parseInt('e9',16)); // 233
console.log(parseInt('98',16)); // 152
console.log(parseInt('bf',16)); // 191
console.log((233).toString(2)); // 11101001
console.log((152).toString(2)); // 10011000
console.log((191).toString(2)); // 10111111
1000110011101010010110010001
// 11101001 10011000 10111111  3*8
// 00111010 00011001 00100010 00111111 4
//   58      25       34        63
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str += str.toLowerCase();
str += "0123456789+/";
console.log(str);
console.log(str[58]+str[25]+str[34]+str[63]);

// transfer(str) 



var num=parseInt(111010,10);
console.log(num);
console.log(parseInt(num,2));

//base64 原理
function transfer(str)
{
  let buf1= Buffer.from(str);
  let num='';
  for(let i=0;i<buf1.length;i++)
  {
    let utt=(buf1[i]).toString(2);
    num+=utt;
  }
  var numstring=num.toString();
  var part= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  part+= part.toLowerCase();
  part+= "0123456789+/";
  var set=numstring.length/6;
  var state='';
  for(let i=0;i<set;i++)
  {
    var a=numstring.substring(i*6,(i+1)*6);
    state+=part[parseInt(a,2)]
  }
  return state;
}
console.log(transfer('阿龙'));