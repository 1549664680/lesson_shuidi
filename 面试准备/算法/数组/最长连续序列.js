/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 
 * 给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 */
var longestConsecutive = function (nums) {
  let map = new Map();
  let max = 0;
  for(let num of nums){
    if(!map.has(num)){
      let prelen = map.get(num-1) || 0  // 找到前一个所在序列的长度
      let nextlen = map.get(num + 1) || 0 // 后一个
      let curlen = prelen + nextlen +1  // 当前的
      map.set(num,curlen) 
      max = Math.max(max,curlen)
      map.set(num-prelen,curlen)  // 更新最左端的大小
      map.set(num+nextlen,curlen)
    }
  }
  console.log(max)
  return max
};
longestConsecutive([0,3,7,2,5,8,4,6,0,1])
// 时间复杂度要求n，那就只能一次循环