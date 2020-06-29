/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 1.
  // for(let i=0;i<k;i++){
  //   for(let j = i+1;j<nums.length;j++){
  //     if(nums[j] > nums[i]){
  //       [nums[j],nums[i]] = [nums[i],nums[j]]
  //     }
  //   }
  // }
  // return nums[k-1]
  // 2. 
  // nums.sort((a,b) => b-a)
  // return nums[k-1]
  // 3. 第一种循环没得说，效率最低，第二种效率高，sort也是快排实现的，所以第三种，使用快排
  function swap(nums, p, q) {  // 交换函数
    const temp = nums[p];
    nums[p] = nums[q];
    nums[q] = temp;
  }

  function partition(nums, left, right) { //  寻找一个基准数的下标
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
    let random = Math.floor(Math.random() * (r - l + 1)) + l; // 随机选取一个index
    swap(nums, random, r)
    let pivoindex = partition(nums, l, r) // 基准下标
    if (n -k < pivoindex) {  
      quick(l, pivoindex - 1)
    } else {
      quick(pivoindex + 1, r)
    }
  }

  quick(0, n - 1)
  return nums[n - k]
};