/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  var stack = []; // 使用一个数组模拟
  var index = 0
  for(var i = 0; i < pushed.length; i++){
      var item = pushed[i]  
      stack.push(item);// 压入栈
      while(stack.length && stack[stack.length - 1] === popped[index]){
          stack.pop(); /// 弹出栈
          index ++;
      }
  }
  return stack.length === 0
};