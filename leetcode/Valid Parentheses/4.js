function longestValidParentheses(s){
  // 优化时间复杂度 为O(n)
  var max = 0;
  if(s.length == 0 || s.length == 1) return max
  // 下标相减就是长度
  var stack = [-1]; // 
  for(var i = 0; i< s.length ;i++){
    // 下标法 一次遍历
    if(s[i] == '('){
      stack.push(i); //  如果是（ 那么入栈
    }else{
      stack.pop();  // 如果是） 那么出栈 
      if(stack.length < 1){ // 如果栈长度小于1 说明匹配完了 ， 并且这个-1 也被出栈了 说明来了一个无法匹配的右括号 
        stack.push(i);  // 把这个i下标替换上一个
      }else{ 
        max = Math.max(max, i-stack[stack.length-1])
        console.log(max)
      }
    }
  }
  return max
}
console.log(longestValidParentheses("()(()()()(())"))
// 再次优化？ 时间复杂服不可优化了O(n) 那么可以优化空间
