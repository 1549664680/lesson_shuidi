## es6
1. # class类
class类的引入，让JavaScript的面向对象编程变得更加简单和易于理解。
2. # 模块化
3. # 箭头函数
4. # 函数参数默认值
5. # 模板字符串
6. # 解构赋值
7. # 延展操作符
在函数调用时使用延展操作符
构造数组
数组拷贝
连接多个数组
8. # 对象属性简写
不指定属性名。
9. # Promise
异步编程的一种解决方案
10. # Let与Const
填补没有块级作用域的空白


## es7
includes()判断一个数组是否包含一个指定的值
a ** b指数运算符，它与 Math.pow(a, b)相同。

## es8
1. async/await
2. Object.values()
直接获取值，不用通过key
3. Object.entries()
Object.entries()函数返回一个给定对象自身可枚举属性的键值对的数组。
let [key,value] of Object.entries(obj1)
4. String padding: padStart()和padEnd()，填充字符串达到当前长度
targetLength:当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
padString:(可选)填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断，此参数的缺省值为 " "。
5. 函数参数列表结尾允许逗号
6. Object.getOwnPropertyDescriptors()
函数用来获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。

# es9
1. 异步迭代
2. Promise.finally()
无论失败成功，都会执行的代码
3. Rest/Spread 属性
Rest参数语法允许我们将一个不定数量的参数表示为一个数组。
function restParam(p1, p2, ...p3) {
  // p1 = 1
  // p2 = 2
  // p3 = [3, 4, 5]
}
4. 正则表达式命名捕获组（Regular Expression Named Capture Groups）
 /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,

## es10
1. Array.prototype.flat()
flat()方法最基本的作用就是数组降维
其次，还可以利用flat()方法的特性来去除数组的空项
Array.prototype.flatMap()
方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组
var arr1 = [1, 2, 3, 4];
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
2. 新增了String的trimStart()方法和trimEnd()方法
3. 新的基本数据类型BigInt

加上BigInt一共有七种基本数据类型，分别是： String、Number、Boolean、Null、Undefined、Symbol、BigInt