var merge = function(intervals) {
  if(intervals.length === 0){
    return intervals
  }
  let res = []; 
  intervals.sort( (a,b)=> a[0]-b[0])
  res[0] = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    if(intervals[i][0]<=res[res.length-1][1]){
      res[res.length-1]=[Math.min(res[res.length-1][0],intervals[i][0]),Math.max(res[res.length-1][1],intervals[i][1])]
    }else{
      res.push(intervals[i])
    }
  }
  return res;
};
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))