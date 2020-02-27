 ## 深入理解node.js 中的进程与线程
 - 前端的角度 来看待进程与线程
 - node 进程 子进度 cluster 多核cpu的利用 GO
 - pm2 线上node 运行进程管理
 - docker 容器
 - k8s

 1. 从前端角度开始
  node.js 是单线程吗？ js 运行在服务器端
  是  那就GG了
  js 是单线程 html， css, js vue jsx node koa
  java 有 主线程 开辟新的进程的概念
  基于事件机制 event loop 回调 另一角度解决了能力
  单线程 js
  ajax ? 微软公司 新的线程创建出来的，
  js 是单线程 但是js宿主浏览器(容器) 多进程(http 并发 img css html js) 多线程
  注册在主线程 event 事件里 线程间可以相互通信， 
 2. node 当前main.js 进程process.pid
  服务器端天生的就是多线程的，  分布式的
  js 在服务器端执行  单线程的
  node 执行的容器 js 执行的容器 node是多进程 多线程的 10.以上的版本 多线程
  单线程 异步 IO 高性能并发

  js语言是单线程 但它所运行的浏览器是 多进程 多线程的
  node.js 容器node 高并发 创建进程，线程

  - 进程的两种方法
    child_process fork
    cluster fork
    提升运行效率 把cpu
    nginx 负载均衡