// 输入: [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。.
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length === 0){  // 空判断
    return intervals
  }
  let res = []; 
  intervals.sort( (a,b)=> a[0]-b[0]) // 根据每个字数组的第一个数进行升序
  res[0] = intervals[0] // 第一个就直接放结果数组
  for (let i = 1; i < intervals.length; i++) {
    if(intervals[i][0]<=res[res.length-1][1]){ 
      // 如果后面的第一个数，小于等于结果数组的最后一个数组的第二个数，那么就可以合并
      res[res.length-1]=[Math.min(res[res.length-1][0],intervals[i][0]),Math.max(res[res.length-1][1],intervals[i][1])]
      // 合并数组的第一个数两个数组第一个的最小值，第二个数是第二个数的最大值
    }else{
      // 否则不能合并
      res.push(intervals[i])
    }
  }
  return res;
};