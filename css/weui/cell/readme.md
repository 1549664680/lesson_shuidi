- 界面的宏观视角

  结构>组件 (cell)
  组件: 界面构成的基础 ,拼积木一样来搭界面
  结构的套路
  .weui-cell 开启一个组件 
    .weui-cell__hd  
    .weui-cell__bd
     .weui-cell__ft
hd + bd + ft
__ BEM BLock Element Modifier 
Modifier

- 研究微信官方前端框架weui源码
- BEM 挺好的， 类名取名的依据
- .hd+.bd+.ft 少跟业务相关， 多一些抽象
- 弹性布局 align-itms:center(中间); flex:1(子元素占据之后，flex：1占据剩下的);