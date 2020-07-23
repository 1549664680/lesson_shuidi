脚手架创建应用是SPA单页应用的
通过 npm run eject
会生成config目录
先是在paths里面 增加几个入口变量
appHtml:resolveApp('public/index.html)
appIndexJs:resolveModule(resolveApp,'src/index/index)

然后在webpack.config.json 中更改入口entry
从单个数组改为对象,每个属性对应一个数组
然后plugins中增加HtmlWebpackPlugin 每个页面都要对应一个