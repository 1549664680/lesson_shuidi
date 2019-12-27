- 事件监听 执行逻辑是什么？
  浏览器 chrome.exe 进程
  js 是chrome里的语言编译器来执行的
  html + css 形成DOM树 数 数据结构
  js 执行 作为脚本 事件 它是异步的
  - 注册一个事件？ micor event 回调函数
  - 事件发生时怎么执行的？
  js 是单线程语言 onload之后
  轮循注册事件的地方

订阅， 发布者模式


房 楼房 发布者（有房卖的信息）
买房者 订阅者
建模

- 了解了什么是listen 添加订阅者
  saleOffice.clientList.push(fn); 形成订阅关系
- saleOffice 发布者
  trigger 有事通知
  把所有的订阅者都执行一次
- apply 函数除运行外，指定其this 指向 arguments
- document.body.addEventListener('click',fn)
  document.body 发布者  有订阅者 fn
  document.body.events = [] 事件池
  click
  trigger 拿出事件池的都执行一次
    event.each(fn)
  