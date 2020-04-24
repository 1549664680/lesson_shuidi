function findInversePairNum(arr, start, end) {
  if (start >= end) return 0
  const copy = new Array(end - start + 1);
  const mid = Math.floor((end - start) / 2);//向下取整
  const leftNum = findInversePairNum(arr, start, start + mid);
  const rightNum = findInversePairNum(arr, start + mid + 1, end);
  let i = start + mid;
  let j = end;
  let copyIndex = end - start; 
  let count = 0;
  console.log(i,j)
  while (i >= start && j >= start + mid + 1) {
    if (arr[i] > arr[j]) {
      count += j - start - mid;
      copy[copyIndex--] = arr[i--];
    } else {
      copy[copyIndex--] = arr[j--];
    }
  }

  while (i >= start) {
    copy[copyIndex--] = arr[i--];
  }

  while (j >= start + mid + 1) {
    copy[copyIndex--] = arr[j--];
  }

  for (let k = start; k <= end; ++k) {
    arr[k] = copy[k - start];
  }

  return count + leftNum + rightNum;
}
var reversePairs = function (nums) {
  return findInversePairNum(nums, 0, nums.length - 1)
}
console.log(reversePairs([7, 5, 6, 4]))