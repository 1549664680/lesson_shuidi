/**
 * @param {number[]} nums
 * @return {number}
 * 输入: [1,3,5,4,7]
输出: 3
解释: 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。 
 */
var findLengthOfLCIS = function(nums) {
  if(nums.length === 0){return 0}
  let cnt = 1
  let max = 0;
  for(let i = 0;i<nums.length-1;i++){
    if(nums[i+1] > nums[i]){
      cnt++
    }else{
      max = Math.max(max,cnt)
      cnt = 1
    }
  }
  max = Math.max(max,cnt) // 这个都是递增的话
  return max
};