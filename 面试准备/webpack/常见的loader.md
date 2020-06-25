# file-loader：
把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)
# url-loader：.
与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)
# image-loader：
加载并且压缩图片文件
# json-loader:
 加载 JSON 文件（默认包含）
# babel-loader：
把 ES6 转换成 ES5
# ts-loader:
将 TypeScript 转换成 JavaScript
# sass-loader：
将SCSS/SASS代码转换成CSS
# css-loader：
加载 CSS，支持模块化、压缩、文件导入等特性
# style-loader：
把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
## loader 顺序要注意，style要写在最前面
其实为啥是从右往左，而不从左往右，只是Webpack选择了compose方式，而不是pipe的方式而已
# eslint-loader：
通过 ESLint 检查 JavaScript 代码