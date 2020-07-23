/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。
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