var searchInsert = function (nums, target) {
  let left = 0, rigth = nums.length - 1;
  let mid;
  while (left <= rigth) {
    mid = left + ((rigth - left) >> 1)
    if (nums[mid] === target) return mid
    if (target < nums[mid]) {
      rigth = mid - 1
    } else {
      left = mid + 1
    }
    if (nums[left] < target && target < nums[left+1]){
      return left+1
    }
  }
  return left
};
console.log(searchInsert([2,3,5,7], 6))