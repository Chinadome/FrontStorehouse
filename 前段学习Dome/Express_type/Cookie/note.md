cookie
1 在多个请求之间共享会话
2 客户端存储数据进行会话跟踪
        第一次向服务器发请求
客户端 ---------------------->服务器
      通过响应头Set-Cookie向客户端种植Cookie
      <---------------------
      后面每次请求带上Cookie请求头
      ---------------------->

express处理cookie
1 设置cookie
   res.cookie(name,value,[,options]);
2 获取cookie
  cookie-parser中间件   