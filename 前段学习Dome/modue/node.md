3n
npm  node package menagement  包管理工具库
nvm  切换node 版本
    windoe  nvm-windoe
   //npm install -g nrm  (安装nrm)
nrm（下载源）

//exports  module    require  __dirname  __filename 
//模块化
//var  obj={}
//a.js  b.js   解决命名冲突 无法控制依赖关系
/**
 * 模块化规范
 * AMD  requirejs   
 *  cmd  sea.js
 * 以上2种都是前端模块化解决方案
 * Commonjs   node遵循 CommonJs规范  
 *  1 每个文件就是一个模块
 * 2. 通过require 导入
 * 3.module.exports或exports 导出模块
*/

  自执行函数
   (function anonymous(exports,module,require,__dirname,__filename){
       //.....
 }


 node commonjs require()
 1.内置require() 方法
 2。通过Module._load方法加载模块
    Module._resolveFilename  解析文件路径   把相对路径转换成绝对路径 并且增加后缀
    Module._cache   模块缓存
    new Module()  id 名字 exports{}
    module.load()  取出文件后缀 读取文件  
    Module.wrap  包裹读取文件的内容
    runInthisContext 运行包裹后的字符串 
