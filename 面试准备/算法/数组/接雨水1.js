/**
 * @param {number[]} height
 * @return {number}
 */
// 只要有个数减去height[i]那个位置的值，那就是可以接数的量，那怎得到减height[i]的那个值呢
var trap = function (height) {
  let sum = 0;
  let max = 0
  let leftList = [0]
  let rightList = [0]
  let len = height.length
  for (let i = 0; i < len; i++) {
    leftList[i] = max = Math.max(height[i], max)
  }
  max = 0;
  for (let i = len-1; i >= 0; i--) {
    rightList[i] = max = Math.max(height[i], max)
  }
  for (let i = 0; i < len; i++) {
    sum +=Math.min(leftList[i], rightList[i]) - height[i]
  }
  return sum
};