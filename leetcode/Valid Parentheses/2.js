// 优化一下 空间复杂度为O(1) 不用栈
var isValid = function(s) {
  if(!s || s.length < 1){
    return true;
  }
  var len = s.length
  var sum = 0;
  for(var i = 0; i< len; i++){
    if(s[i] == '('){
      sum++;
    }else{
      if(sum == 0){
        return false
      }
      sum--;
    }
  }
  return sum == 0? true:false
};
console.log(isValid("()(()"))
//  使用一个常量 因为每次都是存储一个同样的字符 

// 