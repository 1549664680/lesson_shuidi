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
console.log(lengthOfLongestSubstring("dvdf"))