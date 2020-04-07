var reverse = function(x) {
  const border = 2**31
  const max = border - 1
  const min = -border
  if(x == 0){return 0}
  var res = x<0?Number(x.toString().replace(/\-/g,' ').toString().split("").reverse().join(""))/-1:Number(x.toString().split("").reverse().join(""))
  return res>max||res<min?0:res
};
console.log(reverse(1534236469))