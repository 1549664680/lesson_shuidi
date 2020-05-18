var maxProduct = function (nums) {
  let max = 1
  let min = 1
  let res = Number.MIN_VALUE
  console.log(res)
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]<0){
      [max,min] = [min,max]
    }      
    max = Math.max(max*nums[i],nums[i])
    min = Math.min(min*nums[i],nums[i])
    res = Math.max(max,res)
  }
  return res
};