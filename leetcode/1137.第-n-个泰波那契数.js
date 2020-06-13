/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if(n == 0){
    return  0
  }else if(n == 1 || n== 2){
    return 1
  }
  let list = [0,1,1]
  let temp;
  for(let i =3;i<=n;i++){
    temp = list[i-1]+list[i-2]+list[i-3]
    list.push(temp)
  }
  return list.pop()
};
// @lc code=end

