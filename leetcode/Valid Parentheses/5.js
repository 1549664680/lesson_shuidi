function longestValidParentheses(s){
  var max = 0;
  if(s.length == 0 || s.length == 1) return max
  var left = right = max = 0;
  // left  是当前还在匹配的左括号的数量
  // right 是当前右括号的数量
  for(var i = 0;i < s.length; i++){
    if(s[i] == '('){
      left++;
    }else{
      right++;
    }
    if(left == right){
      max = Math.max(max,2*right);
    }else if(right > left){ // 右括号有多
      left = right = 0; //重新开始
    }
  }
  var left = right = 0
  for(var i = s.length - 1;i >= 0; i--){
    if(s[i] == '('){
      left++;
    }else{
      right++;
    }
    if(left == right){
      max = Math.max(max,2*left);
    }else if(left > right){ // 右括号有多
      left = right = 0; //重新开始
    }
  }
  return max
}
console.log(longestValidParentheses("((())(())"))