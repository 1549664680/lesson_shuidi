var maxProduct = function (nums) {
  let max = 1
  let min = 1
  let res = (Number.MAX_VALUE)*(-1)
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]<0){
      // 如果是负数，最大值和最小值交换
      // 这样max就拿到最小值，也就是负数，然后与负数nums[i]相乘
      [max,min] = [min,max]
    }      
    max = Math.max(max*nums[i],nums[i])
    min = Math.min(min*nums[i],nums[i])
    res = Math.max(max,res)
  }
  return res
};