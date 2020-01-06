## 首先初始化 文件  npm init -y
1.npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node 
npm install --save @babel/polyfill
2.创建一个名为babel.config.js 文件
   const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",npx 
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        }
      },
    ],
  ];
  
  module.exports = { presets };

3.测试  npx babel-node xx.js