1. ## hash模式
  hash 模式背后的原理是 onhashchange 事件。
  我们可以通过两种方式触发 hash 变化，一种是通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 就会发生改变，也就会触发 hashchange 事件了：
  <a href="#search">search</a>
  复制代码还有一种方式就是直接使用 JavaScript来对 loaction.hash 进行赋值，从而改变 URL，触发 hashchange 事件：
  location.hash="#search"
  **hash 模式的特点在于 hash 出现在 url 中，但是不会被包括在 HTTP 请求中，对后端没有影响，不会重新加载页面。**

2. ## history模式
  前面的 hash 虽然也很不错，但使用时都需要加上 #，并不是很美观。因此到了 HTML5，又提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：
  ```
  window.history.pushState(null, null, path);
  window.history.replaceState(null, null, path);
  ```
  调用 history.pushState() 或者 history.replaceState() 不会触发 popstate 事件. popstate 事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮(或者调用 history.back()、history.forward()、history.go()方法)。
  
3. ## hash模式适用场景：

兼容IE8
没有重定向传参需求(第三方认证oauth)
没有锚点跳跃需求
后端不需要跟踪前端路由信息
hybrid app需要将前端资源打包在应用内，因为html的域在file://下，所以不能发生重定向

4. ## history模式适用场景：

页面内锚点需求
需要重定向传参
同构直出
后端跟踪路由信息
附加路由信息(history.state)获取路由状态
