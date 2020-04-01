// 使用库函数，一行代码搞定。
var sortArray = function(nums) {
  return nums.sort((a,b) =>a-b)
};

//选择排序
var sortArray = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      let min = Infinity; // 先赋值无穷大
      let minIndex;
      for (j = i; j < nums.length; j++) {
          if (nums[j] < min) {
              min = nums[j]
              minIndex = j;
          }
      }
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
      // 找到的最小的数，与num[i]交换，相当于把最小数往前面提
  }
  return nums;
};

// 插入排序  时间过多
var sortArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
      let temp = nums[i];
      for ( let j = i - 1; j >= 0; j--) {
          if (temp >= nums[j]) break;
          nums[j + 1] = nums[j]
      }
      nums[j + 1] = temp;
  }
  return nums;
};

//冒泡排序  时间爆炸
var sortArray = function(nums) {
  for (let i = nums.length - 1; i >= 0 ; i--) {
      for (let j = 0; j < i; j++) {
          if (nums[j] > nums[j + 1]) {
              [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
          }
      }
  }
  return nums;
};

// 快速排序  时间快
var sortArray = function(nums) {
  if (nums.length < 2) return nums; // 只有一个数时，直接返回
  return  quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
  if (left >= right) return;
  let pivotIndex = partition(nums, left, right)
  quickSort(nums, left, pivotIndex - 1)
  quickSort(nums, pivotIndex + 1, right)
  return nums;
}

function partition (nums, left, right) {
  let pivot = right;
  let leftIndex = left;
  for (let i = left; i < right; i++) {
      if (nums[i] < nums[pivot]) {
          [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
          leftIndex++;
      }
  }
  [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
  return leftIndex;
}
// 归并排序  时间快
var sortArray = function(nums) {
  return mergeSort(nums, 0, nums.length - 1)
};

function mergeSort(nums, left, right) {
  if (left >= right) return nums;
  let mid = (left + right) >> 1;
  mergeSort(nums, left, mid)
  mergeSort(nums, mid + 1, right)
  return merge(nums, left, mid, right)
}

function merge(nums, left, mid, right) {
  let ans = [];
  let c = 0, i = left, j = mid + 1;
  while (i <= mid && j <= right) {
      if (nums[i] < nums[j]) {
          ans[c++] = nums[i++];
      } else {
          ans[c++] = nums[j++]
      }
  }
  while (i <= mid) {
      ans[c++] = nums[i++];
  }
  while (j <= right) {
      ans[c++] = nums[j++];
  }
  for (let i = 0; i < ans.length; i++) {
      nums[i + left] = ans[i];
  }
  return nums;
}

