# ignore-plugin：
忽略部分文件
# uglifyjs-webpack-plugin：
不支持 ES6 压缩 (Webpack4 以前)
# html-webpack-plugin：
简化 HTML 文件创建 (依赖于 html-loader)
# web-webpack-plugin：
可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用
# serviceworker-webpack-plugin：
为网页应用增加离线缓存功能

## 与loader区别
Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

Plugin 就是插件，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。