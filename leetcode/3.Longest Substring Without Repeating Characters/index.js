var lengthOfLongestSubstring = function (s) {
  if(s.length === 1) return 1
  let arr = [s[0]]
  let max = 0;
  for(let i=1;i<s.length;i++ ){
    let site = arr.indexOf(s[i]) 
    if(site != -1){
      arr.splice(0,site+1)
    }
    arr.push(s[i])
    max = arr.length>max?arr.length:max 
  }
  return max
};
// 必须时字串的话，那就直接对s进行循环，当当前这个字符在arr中出现过了，那就把这个字符包括这个字符的之前所有字符在arr中删除
// 使用一个max对最长的值进行保存
console.log(lengthOfLongestSubstring("dvdf"))