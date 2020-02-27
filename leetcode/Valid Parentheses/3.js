// 最长有效括号 32t
// 暴力法
 function longestValidParentheses(s){
  var max = 0 ; // 最大长度
  if( s.length == 0 || s.length == 1 ) return max
  var stack = []; // 使用栈来实现匹配
  for( var i = 0; i< s.length ;i++){
    var tmpMax = 0; // 当前的括号匹配长度  
    for( var j = i; j<s.length; j++){
      if(s[j] == '('){
        stack.push(s[j]);
        tmpMax++;
      }else if(s[j] == ')'){
        if(stack.length < 1){
          max = max<tmpMax?tmpMax:max
          break;
        }
        else{
          stack.pop();
          tmpMax++;
       } 
     }
    }
    if(stack.length == 0){
      max = max<tmpMax?tmpMax:max
    }
    stack = []
    console.log(max,tmpMax)
  }
  return max
 }
console.log(longestValidParentheses("()(()"))