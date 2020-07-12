function reverseNum(num){
  // return String(num).split('').reverse().join('')
  let res = []
  while(num>0){
    res.push(num%10)
    num = parseInt(num/10)
  }
  return res.join('')
}
console.log(reverseNum(165165))
