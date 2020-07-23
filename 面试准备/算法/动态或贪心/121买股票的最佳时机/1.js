// var maxProfit = function(prices) {
//   if (prices.length == 0) return 0;
//   var max = 0;
//   for(var i = 0; i<prices.length;i++){
//     for(var j = i+1 ;j<prices.length;j++){
//       if(prices[j]>prices[i]){
//         max =max>(prices[j]-prices[i])?max:(prices[j]-prices[i]);
//       }
//     }
//   }
//   return max
// };s
var maxProfit = function(prices) {
  if (prices.length == 0) return 0;
  let min = prices[0];
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      ans = Math.max(ans, prices[i] - min);
    }
  }
  return ans;
};

console.log(maxProfit([7,6,4,3,1]))