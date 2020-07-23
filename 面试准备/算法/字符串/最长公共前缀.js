/**编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"

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
// 以第一个数为基准，对strs进行循环，每两个进行对比，找出最长的公共前缀
// 如果没有，直接返回空字符，否则res更新为公共前缀