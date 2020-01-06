import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'
//导入vue构造函数
import  Vue from 'vue'
//导入单文件组件
import  app from './app.vue'
$(function(){
    $('li:odd').css('background','red');
    $('li:even').css('background','yellow')
})

class Student{
    static index='hello';
     static fun(){
         console.log('fun()');
     }
}
//Student.fun();
console.log(Student.index);
//用npm 安装的没有template 所以用render 给挂载上去
new Vue({
    el:'#app',
    render:h=>h(app)
})