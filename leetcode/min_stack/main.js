// 设计一个栈 Stack
// 支持 push pop top?
// 获得最小值
function MinStack() {
    this.stack = [];//使用数组模拟栈
    this.min = Number.MAX_VALUE;
}
MinStack.prototype.push = function(x){
    this.min = x<this.min?x:this.min
    return this.stack.push(x);
}
MinStack.prototype.pop = function(){
    const item = this.stack.pop();
    this.min = Number.MAX_VALUE;
    for(var i=0;i<this.stack.length;i++){
        this.min = this.stack[i]<this.min?this.stack[i]:this.min
    }
    return item;
}
MinStack.prototype.top = function(){
    return this.stack[this.stack.length -1 ]
}
MinStack.prototype.getMin = function(){
    return this.min;
}
MinStack.prototype.toString = function(){
    return this.stack.join(',');
}
var stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin())
console.log(stack.pop())
console.log(stack.top())
console.log(stack.getMin())