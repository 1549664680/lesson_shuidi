// 选择排序
function xuanze(array){
  for(let i =0;i<array.length;i++){
    let minindex = i;
    for(let j = i+1;j<array.length;j++){
      if(array[j] <array[minindex]){
        minindex = j
      }
    }
    [array[minindex],array[i]] = [array[i],array[minindex]]
  }
  return array
}
console.log(xuanze([7,5,6,9,3,5,8,7]))
// 插入排序 

function insertSort(arr) {
  var len =arr.length;
  for (var i=1;i<len; i++) {
      var temp=arr[i];
      var j=i-1;//默认已排序的元素
      while (j>=0 && arr[j]>temp) {  //在已排序好的队列中从后向前扫描
              arr[j+1]=arr[j]; //已排序的元素大于新元素，将该元素移到一下个位置
              j--;
          }
      arr[j+1]=temp; 
  }
  return arr
}
// 冒泡及优化
function maopao(arr){
  const array = [...arr]
  for(let i = array.length; i > 0; i--){
    let isOk = true
    for(let j =0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j],array[j+1]] = [array[j+1],array[j]]
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
  return arr
}
console.log(quickSort([7,5,6,9,3,5,8,7]))

