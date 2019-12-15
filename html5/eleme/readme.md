- 工作流
  scripts 强化我们的开发
  dev 启化我们的http 服务
  styl stylus 编译为css
  json-server 商家信息
- dom api 是过去式
  MVVM {{}}  js data:
  历史 切图仔 php/java +html/css 10年前 前端不需要了解数据后端
  随着js八年前web 2.0 有了fetch / ajax js 主动请求数据
  前后端分庭抗礼 DOM/ api
  4年前 vue/ react +node + flutter(客户端) +GO +docker 时代 MVVM时代 连数据也要处理

  小程序和vue 都是一样的
  mvvm 优秀的地方在于好简单
  - 天生集成数据驱动  data字段 {{}} :src
  - 页面是响应式的 数据变了 ，界面就会变

- inline-block 考点来了
  inline  没有设置宽高的能力 兄弟间相安无事
  block 兄弟间换行
  两列式布局 inline-block 副作用 兄弟间会产生间隙 
  浏览器实现 inline-block的天坑 
  换行\n font-size 0
  换行元素首位相连 影响结构可读性

- stylus 向css提供了函数功能 
  利用返回值的叫函数
  要复用css代码 完成了css模块化 mixin 混合

- 图片， 手机的屏幕像素不太一样
  @media 条件查询(-webkit-min-deivice-pixel-ration:3)
  图片的命名 ...@2x.png  ...@3x.png
