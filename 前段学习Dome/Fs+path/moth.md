node 常用api
  fs.access(path,callback) 判断路径是否存在
  fs.appedFile(path,'添加内容',callback)  在文件末尾添加内容
  fs.copyFile(path,‘目标文件’，callback) 复制文件内容
   fs.mkdir（）  添加文件
   fs.unlink() 删除文件
   fs.rmdir() 删除目录
  fs.stat() 获取文件详细信息

path 模块 处理路径
  path.basename（）获取文件名
  path.dirname() 获取目录名
  path.extname() 获取文件的后缀名
  path.parse() 将文件路径转换成一个对象
  path.format  从对象返回路径字符串。 与 path.parse() 相反。
  path.jion() 用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
  path.join  将路径或路径片段的序列解析为绝对路径。
  path.isAbsolute() 方法检测 path 是否为绝对路径。
  path.normalize() 方法规范化给定的path


  node 路径规则
   以/开头为绝对路径
   以./开头为相对路径