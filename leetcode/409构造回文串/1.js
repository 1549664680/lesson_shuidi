// var longestPalindrome = function(s) {
//   var a = new Map();
//   var longestPalindrome= "";
//   for(var i = 0 ;i <s.length ;i++){
//     if(!a.has(s[i])){
//       a.set(s[i],1)
//     }else{
//       a.set(s[i],a.get(s[i])+1)
//     }
//   }    
//   var cnt = ''
//   a.forEach(function(value,key){
//     if(value%2 == 0){
//       longestPalindrome = longestPalindrome.split("").reverse().join("")
//       for(var i =0 ;i< value/2;i++){
//         longestPalindrome +=key
//       }
//       longestPalindrome = longestPalindrome.split("").reverse().join("")
//     }else{
//       if(value>1){
//         for(var i =0 ;i< value/2-1;i++){
//         longestPalindrome +=key
//       }
//       if(cnt == ''){
//         cnt = key
//       }
//       }else{
//         if(cnt == ''){
//           cnt = key
//         }
//    }
//     }
//   });
//   longestPalindrome = longestPalindrome+cnt+longestPalindrome.split("").reverse().join("")
//   return longestPalindrome.length
// };
var longestPalindrome = function(s) {
    var a = new Map();
    var res = 0;
  for(var i = 0 ;i <s.length ;i++){
    if(!a.has(s[i])){
      a.set(s[i],1) //没有就设值为1
    }else{
      a.set(s[i],a.get(s[i])+1) // 有就加1
    }
  }   
    a.forEach(function(value,key){
      if(value%2!=0){  //所有值为奇数的减一，res就提前设置为1 
        a.set(key,value-1)
        res=1;
      }
  })
  a.forEach(function(value){ res+=value}) // res 把所有值都加起来，就是回文串的长度
  return res
}
console.log(longestPalindrome("aaaafdafbaaaac"))
