// var minIncrementForUnique = function(A) {
//  var sortA = A.sort((a,b) => a-b);
//  var res = 0;
//  for(var i= 0 ; i < A.length ; i++)
//   {
//     var tmp = sortA[i]
//     for(var j = i+1; j<A.length ; j++ ){
//     if(tmp == sortA[j]){
//       sortA[j]++;
//       res++
//     }
//     }    

//   }
//  return res
// };
// 双重循环 最为致命
var minIncrementForUnique = function(A) {
  if (!A || A.length <= 1) {
    return 0;
}
   var res = 0;
   var sortA = A.sort((a,b) => a-b);
   for(var i= 0 ; i < A.length ; i++){
    if(sortA[i] == sortA[i+1]){
      ++res
      ++sortA[i+1]
    }
    if(sortA[i] > sortA[i+1]){
      res = res + sortA[i] - sortA[i+1] +1 
      sortA[i+1] = sortA[i] + 1
    }
   }
   return res
}
console.log(minIncrementForUnique([3,2,1,2,1,7]))