// O(1) < O(logn) < O(n) < O(nlogn) < O(n2) < O(n3) < O(2n) < O(n!) < O(nn)
function merge(num1,num2){
  return num1.concat(num2).sort((a,b) => a-b)
}
function merge(num1,num2){
  let num1Len = num1.length - 1 ;
  let num2Len = num2.length - 1 ;
  let res = Array.from(num1).concat(new Array(num2Len + 1))
  let i = res.length -1 
  while(num2Len>=0){
    if(num1[num1Len] > num2[num2Len]){
      res[i] = num1[num1Len]
      num1Len--    
      i--
    }else{
      res[i] = num2[num2Len]
      num2Len--
      i--
    }

  }
  return res
}
console.log(merge([1,2,3,4,5,6],[4,5,6,7,8,9]))