function rowSumOddNumbers(n) {
  var sum = 0;
  var begin;//每一行开始的数
 if(n == 1){
   return sum + 1
 }else{
   begin = n*(n-1)+1 // 每一行开始的数 有规律的
   while(n > 0){  // 第n行有n个数
    sum = sum + begin 
    begin = begin + 2
    n--
   } 
   return sum
 }
}
console.log(rowSumOddNumbers(42))