Function.prototype.myBind = function(thisObj, ...arg1) {
  let fn = this;
  function innerFunc(...arg2) {
    const args = arg1.concat(arg2);
    let isNewCall = this instanceof innerFunc;
    return fn.call(isNewCall ? this : thisObj, ...args);
  }
  innerFunc.prototype = fn.prototype;
  return innerFunc;
}

function Animal(name, color) {
  this.name = name;
  this.color = color;
}

Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
};

const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');

console.log(cat, cat.say())
if (cat.say() === 'I\'m a white cat' &&
  cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}