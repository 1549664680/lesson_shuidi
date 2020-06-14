var Dog = function(name) {
  this.name = name
}
Dog.prototype.bark = function() {
  console.log('wangwang')
}
Dog.prototype.sayName = function() {
  console.log('my name is ' + this.name)
}
let sanmao = new Dog('三毛')
sanmao.sayName()
sanmao.bark()
// new 的作用
// 创建一个新对象obj
// 把obj的__proto__指向Dog.prototype 实现继承
// 执行构造函数，传递参数，改变this指向 Dog.call(obj, ...args)
// 最后把obj赋值给sanmao
function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype); // 创建一个新对象，指向构造函数的prototype
  //Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
  const ret = fn.apply(obj, arg);
  return ret instanceof Object ? ret : obj;
}
var simao = _new(Dog, 'simao')
simao.bark()
simao.sayName()
console.log(simao instanceof Dog) // true
// 先理清楚 new 关键字调用函数都的具体过程，那么写出来就很清楚了

// 首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象
// 把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象
// 如果构造函数返回一个非基本类型的值，则返回这个值，否则上面创建的对象