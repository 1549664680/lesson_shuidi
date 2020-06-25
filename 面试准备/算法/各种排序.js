// 冒泡排序以及优化
// 升序冒泡
function maopao(arr){
  const array = [...arr]
  for(let i = array.length; i > 0; i--){
    for(let j =0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
// 优化
function maopao1(arr){
  const array = [...arr]
  for(let i = array.length; i > 0; i--){
    let isOk = true
    for(let j =0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        isOk = false
      }
    }
    if (isOk) {
      break
    }
  }
  return array
}

//快速排序是冒泡排序的改进算法。它也是通过不断比较和移动交换来实现排序的，
// 只不过它的实现增大了记录的比较和移动的距离，将关键字较大的元素从前面直接放到后面，
// 关键字较小的元素直接从后面放到前面，从而减小了比较次数和交换次数。
function partition(nums, left, right) {
  if (left >= right) return; //退出递归
  let piovt = nums[left]; // 以第一个为基准
  let j = left;  // 用j来记录有多少个数小于这个基准数
  // j: 0
  for (let i = left + 1; i <= right; i ++) {
    if (nums[i] < piovt) { // 如果小于，那就说明j加一了
      //交换
      // i: 1
      j ++;
      swap(nums, i, j) // 交换两个数
    }
  }
  swap(nums, j, left); // 将基准数交换
  partition(nums, left, j - 1);
  partition(nums, j + 1, right);
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function quickSort(arr) {
  partition(arr, 0, arr.length - 1)
}