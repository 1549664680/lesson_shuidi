/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
var productExceptSelf = function(nums) {
  let output = []
  let tmp = 1;
  for(let i =0 ;i<nums.length;i++){
    output[i] = tmp
    tmp *= nums[i]
  }
  tmp = 1 ;
  for(let i =nums.length-1 ;i>=0;i--){
    output[i] *= tmp
    tmp *= nums[i]
  }
  return output
};