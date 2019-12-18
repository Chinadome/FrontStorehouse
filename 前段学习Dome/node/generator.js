//generator 生成器 迭代器  解决异步问题
function fn(){
     console.log(arguments);
    // let arr=[...arguments]
    // console.log(Array.isArray(arr));
    let obj={
        0:1,1:2,2:3,length:3,[Symbol.iterator]:function* (){
            //迭代器   对象
            let that=this;
            let index=0;
            return {
                next(){
                    return {
                        value:that[index++],
                        done:index>that.length//done 为true表示操作完成此时value
                    }
                }
            }
        }
    }
    obj=[...obj];
    console.log(obj);
}
fn(1,2,3,4,5,6,7);
//生成迭代器  一般配合yield 使用(中文 产出)
function* read(){
  yield 100;
  yield 200;
 return 123;
}
let res=read();
console.log(res.next());   //{value:100,done:flase}
console.log(res.next());    
console.log(res.next());   

function fn2(){
   let obj={
       0:1,1:2,2:3,length:3,[Symbol.iterator]:function* (){
           //迭代器   对象
           let that=this;
           let index=0;
            while(index==that.length){
                yield  that[index++];
            }
       }
   }
   obj=[...obj];
   console.log(Array.isArray(obj));
}
fn2(1,2,3,4,5,6,7);