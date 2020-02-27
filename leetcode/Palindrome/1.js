var isPalindrome = function(x) {
    if (x< 0 || (x % 10 == 0 && x!=0)){ //负数一定不是回文数 如果最后一位为0 那么第一位也要为0 只有0符合
      return false
    }
    var flag = true
    x=x.toString()
    for(var i = 0,len=x.length;i<len/2;i++){
      if(x[i] != x[len-1-i]){
        return flag = false
      }
    }
   return flag;
  }
console.log(isPalindrome(123))