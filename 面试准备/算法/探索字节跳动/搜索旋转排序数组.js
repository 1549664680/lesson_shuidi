/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle;
  while(left <=right){
    middle = Math.floor((right + left)/2) // 二分
    if(nums[middle]  === target){return middle}
    if(nums[left]  === target){return left}
    if(nums[right]  === target){ return right} // 三次判断是否命中
    if(nums[left] < nums[middle]){      // 此时 ，判断left小于中间数，也就在前面那段
      if(target > nums[left] && target < nums[middle]){ // 如果 target在left和middle中间
        right = middle -1                               // 移动right到middle前面
      }else{
        left = middle + 1                             // 否则target不在这个区间
      }                                               // 移动left
    }else{
      if(target > nums[middle] && target < nums[right]){ // 同上
        left = middle + 1
      }else{
        right = middle -1 
      }
    }
  }
  return -1;
};
// 思路 既然是排好序的 ， 只是旋转了一下，那么target不在前面那段，就在后面那段
// 分两种情况判断，二分