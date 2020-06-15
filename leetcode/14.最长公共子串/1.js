/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0){return ''}
  let res = strs[0]
  let left;
  let temp
  let min
  for(let i=1;i<strs.length;i++){
    min = Math.min(res.length,strs[i].length)
    left = 0
    temp = '';
    while(left<min){
      if(res[left] === strs[i][left]){
        temp +=res[left]
      }else{
        break
      }
      left++
    }
    if(temp.length === 0){
      return ''
    }else{
      res = temp
    }
  }
  return res
};