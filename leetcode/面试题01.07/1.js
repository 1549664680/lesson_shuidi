var rotate = function(matrix) {
  const length = matrix.length;

  for(let i = length - 1; i >= 0; i--) {
      for(let j = 0; j < length; j++) {
          matrix[j].push(matrix[i][j]);
      }
  }

  for(let i = 0; i < length; i++) {
      matrix[i].splice(0, length);
  }
  return matrix
};
// 既然不能使用额外空间，那就要在原数组上进行操作
// 旋转九十度，相当于把每一行给立起来 
// 不用新空间，那立在哪里呢，立在原数组后面，      // [1,2,3],  最后一排  [1,2,3,7]       
// 先从最后一排开始，把它立在第一列，以此类推----->// [4,5,6], ------->  [4,5,6,8]          
// 最后我们对每一行进行切割就行了                 // [7,8,9]            [7,8,9,9]     
                             
//       |
// [1,2,3|,7,4,1] 
// [4,5,6|,8,5,2]  
// [7,8,9|,9,6,3]
//       |



console.log(rotate(
  [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]))