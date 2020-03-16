/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.stack = [];
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.stack[this.stack.length] = x;
  return this.stack.length;
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  if(this.empty()) {
      return undefined;
  }
  let popEle = this.stack[this.stack.length-1];
  this.stack.length = this.stack.length - 1;
  return popEle;
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  if(this.stack.length === 0) {
      return true;
  }else return false;
};


var obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)
console.log(obj)
var param_2 = obj.pop()
console.log(param_2)
var param_3 = obj.top()
console.log(param_3)
var param_4 = obj.empty()
console.log(param_4)
