var decodeString = function(s) {
  let numStack = [] // 倍数num的等待栈
  let strStack = [] // 待拼接的str的等待栈
  let num = 0       // 倍数的“搬运工”
  let result = ''   // 字符串的“搬运工”
  for(const char of s){
    if(!isNaN(char)){
      num = num *10 + +char
    }else if(char == '['){
      strStack.push(result)
      result = ''
      numStack.push(num)
      num = 0
    }else if(char == ']'){
      result = strStack.pop() + result.repeat(numStack.pop())
    }else{
      result +=char
    }
  }
  return result
};