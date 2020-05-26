/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  for(let i=0;i<nums.length;i++){
    if(nums.slice(i+1).indexOf(nums[i])!=-1){
      return nums[i]
    }
  }
};
console.log(findDuplicate([2,3,1,2]))