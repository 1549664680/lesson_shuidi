function generate(n){
  let res = [[1]]
  for(let i = 1;i<n;i++){
    let temp = []
    temp[0] = 1
    temp[i] = 1
    if(i > 1){
      for(let j = 1;j<=i-1;j++){
        temp[j] = res[i-1][j-1] + res[i-1][j]
      }
    }
    res.push(temp)
  }
  return res
}
console.log(yanghui(5))