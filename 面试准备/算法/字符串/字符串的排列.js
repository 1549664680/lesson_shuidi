/**
 * 
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
换句话说，第一个字符串的排列之一是第二个字符串的子串。

示例1:

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let map1 = new Map();
  let map2 = new Map();
  let res = true
  for(let i=0;i<s1.length;i++){
    if(map1.has(s1[i])){
      map1.set(s1[i],map1.get(s1[i])+1)
    }else{
      map1.set(s1[i],1)
    }
  }
  for(let i=0;i<=s2.length-s1.length;i++){
    for(let j=i;j<i+s1.length;j++){
      if(map2.has(s2[j])){
        map2.set(s2[j],map2.get(s2[j])+1)
      }else{
        map2.set(s2[j],1)
      }
    }
    for(let key of map1.keys()){
      if(!(map2.has(key) && map2.get(key) === map1.get(key))){
        res = false
      }
    }
    if(res){return true}
    res = true
    map2.clear()
  }
  return false
};
// 窗口移动，两个map，移动一次，比较一次map
console.log(checkInclusion("adc","bcda"))