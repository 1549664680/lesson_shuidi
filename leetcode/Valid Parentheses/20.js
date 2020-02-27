var isValid = function(s) {
  var len = s.length
  var stack = []
  if(!s || len < 1) return true
  for(var i = 0; i< len ;i++){
    c = s[i]
    if(c == '(' || c == '{' || c == '['){
      stack.push(c)
    }else{
      if(stack.length < 1 ) return false
      tmp = stack[stack.length - 1]
      if(tmp == '(' && s[i] == ')' || tmp == '{' && s[i] == '}' || tmp == '[' && s[i] == ']'){
        stack.pop()
      }else{
        return false
      }
    }
  }
  return stack.length == 0
};
// 优化一下 ？
// var isValid = function(s) {
//   var stack = []
//   var obj = {
//     '(':')',
//     '{':'}',
//     '[':']'
//   }
//   for(var i = 0;i < s.length ; i++){
//     var tmp = s[i];
//     if(tmp in obj){ // 如果在obj这个表里 入栈
//         stack.push(tmp)
//     }else{
//       if(tmp != obj[stack.pop()]){ // 如果tmp 不在表里 说明是右边括号 那么这个右边括号与退栈的括号对应的值不同 返回false
//         return false
//       }
//     }
//   }
//   return !stack.length
// }
console.log(isValid('([])'))