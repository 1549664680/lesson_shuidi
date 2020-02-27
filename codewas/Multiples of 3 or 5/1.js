function solution(number){
  var sum = 0;
  for(var i = 3 ; i< number ;i++){
    if(i%3 == 0 || i%5 == 0){
      sum = sum +i
    }
  }
  return sum  
}
console.log(solution(10))