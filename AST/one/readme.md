实战：用AST修改源码，导出全部方法
exportific.js

现在，我们想让这个文件中的函数改写成能够全部导出的形式，例如

function add (a, b) {
    return a + b
}
想改变为

exports.add = (a, b) => {
  return a + b
}
除了使用fs.read读取文件、正则匹配替换文本、fs.write写入文件这种笨拙的方式外，我们可以用AST优雅地解决问题。