// var validPalindrome = function(s) {
//   let left = 0;
//   let right = s.length -1;
//   while(left<right){
//     if(s[left] !== s[right]){
//       let strleft = s.split("")
//       let strright = s.split("")
//       strleft.splice(left,1)
//       strright.splice(right,1)
//       return strleft.join("") === strleft.reverse().join("") ||strright.join("") === strright.reverse().join("")
//     }
//     left++
//     right--
//   }
//   return true
// };
var validPalindrome = function(s, count = 0) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s[i] === s[j]) continue;
      if (count > 0) return false;
      return validPalindrome(s.slice(i, j), count + 1) || validPalindrome(s.slice(i + 1, j + 1), count + 1);
  }
  return true;

};