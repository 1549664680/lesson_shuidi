- 将node的模块化带入es6的世界
 1. babel 工具 js 编译器 将最新的版本js -> 当前环境可执行的js
 写的时候用最新的语法

     "@babel/cli": "^7.8.4",编译命令行
    "@babel/core": "^7.8.6",编译核心代码
    "@babel/preset-env": "^7.8.6",按照环境预处理
    "@babel/register": "^7.8.6",注册es6 -》 common.js
    "babel-loader": "^8.0.6",