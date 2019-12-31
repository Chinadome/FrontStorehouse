import $ from 'jquery'
import './css/index.css'
import './css/index.less'
$(function(){
    $('li:odd').css('background','red');
    $('li:even').css('background','yellow')
})