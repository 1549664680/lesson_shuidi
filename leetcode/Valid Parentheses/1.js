var isValid = function(s) {
  if(!s || s.length < 1) return true
  var len = s.length
  var stack = [] //栈
  //栈  push pop 只在数组的尾部插入或移除元素 FILO
  // 队列 在数组尾部插入push ,数组的头部移除 shift FIFO
  for(var i = 0 ; i< len ; i++){ // 时间复杂度 O(n)
    if(s[i] == "("){
      stack.push(s[i])
    }else{
      if(stack.length < 1){
        return false
      }else{
        stack.pop(); 
      }
    }
  }
  return stack.length > 0 ? false:true
};
console.log(isValid('()()()()((())'))

// 优化一下?? 空间复杂度为 O(n) stack[] 数组


