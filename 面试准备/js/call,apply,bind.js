// call()的原理比较简单，由于函数的this指向它的直接调用者，我们变更调用者即完成this指向的变更：
//变更函数调用者示例
//变更函数调用者示例
function foo() {
  console.log(this.name)
}
// 测试
const obj = {
  name: '写代码像蔡徐抻'
}
Function.prototype.myCall = function(thisArg, ...args) {
  const fn = Symbol('fn')        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  thisArg = thisArg || window    // 若没有传入this, 默认绑定window对象
  thisArg[fn] = this              // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisArg[fn](...args)  // 执行当前函数
  delete thisArg[fn]              // 删除我们声明的fn属性
  return result                  // 返回函数执行结果
}

//测试
foo.myCall(obj)     // 输出'写代码像蔡徐抻'

// bind()
Function.prototype.myBind = function(thisObj, ...arg1) {
  let fn = this;
   // new优先级
  function innerFunc(...arg2) {
    const args = arg1.concat(arg2);
    let isNewCall = this instanceof innerFunc;
    return fn.call(isNewCall ? this : thisObj, ...args);
  }
  innerFunc.prototype = fn.prototype; // 继承原型上的属性和方法
  return innerFunc;
}
