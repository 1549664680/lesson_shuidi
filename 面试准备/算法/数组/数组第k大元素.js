/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function swap(nums, p, q) {
    [nums[p],nums[q]] = [nums[q],nums[p]]
  }
  function partition(nums, left, right) {
    let pivot = nums[right]
    let pivoindex = left
    for (let i = left; i < right; i++) {
      if (nums[i] < pivot) {
        swap(nums, i, pivoindex)
        pivoindex++
      }
    }
    swap(nums, right, pivoindex)
    return pivoindex
  }
  let n = nums.length;
  function quick(l, r) {
    if (l > r) { return }
    let random = Math.floor(Math.random() * (r - l + 1)) + l; // 随机选取一个,放到最右边，找到这个数所在的位置
    swap(nums, random, r)
    let pivoindex = partition(nums, l, r)
    if (pivoindex > n - k) {   // 如果大于要找的位置，就说明包含了这个数，那就往下找
      quick(l, pivoindex - 1)
    } else {
      quick(pivoindex + 1, r)   // 如果小于于要找的位置，就往上找
    }
  }
  quick(0, n - 1)
  return nums[n - k]
};
console.log(findKthLargest([1,5,3,6,9,8,4],7))