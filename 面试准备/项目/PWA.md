Native app体验确实很好，下载到手机上之后入口也方便。它也有一些缺点:
开发成本高(ios和安卓)
软件上线需要审核
版本更新需要将新版本上传到不同的应用商店
想使用一个app就必须去下载才能使用，即使是偶尔需要使用一下下

而web网页开发成本低，网站更新时上传最新的资源到服务器即可，用手机带的浏览器打开就可以使用。但是出了体验上比Native app还是差一些，还有一些明显的缺点
手机桌面入口不够便捷，想要进入一个页面必须要记住它的url或者加入书签
没网络就没响应，不具备离线能力
不像APP一样能进行消息推送

1. 什么是PWA？
PWA全称Progressive Web App，即渐进式WEB应用。
一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后添加上 App Manifest(应用描述文件) 和 Service Worker 来实现 PWA 的安装和离线等功能
解决了哪些问题？

可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏
实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能
实现了消息推送

它解决了上述提到的问题，这些特性将使得 Web 应用渐进式接近原生 App。
PWA中包含的核心功能及特性如下：
1. Web App Manifest
2. Service Worker
3. Cache API 缓存
4. Push&Notification 推送与通知
5. Background Sync 后台同步
  响应式设计


开启 Workbox
脚手架已经自动引入了这个模块 
把 service-worker 改为regesiter
打包之后还可以配置manifest