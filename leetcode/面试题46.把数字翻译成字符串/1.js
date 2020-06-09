var translateNum = function(num) {
  let res = []
  res[0] = 1
  res[1] = 1
  let numList = String(num).split('').map(i=>Number(i)) //数字数组化
  let len = numList.length
  if(len === 1){
    return 1
  }else if(len === 0){
    return 0
  }
  for(let i =1;i<len;i++){ 
    if((numList[i-1] == 0 ?3:numList[i-1])*10+numList[i]<=25){ 
      res.push(res[res.length-1]+res[res.length-2])
    }else{
      res.push(res[res.length-1])
    }
  }
  console.log(res)
  return res[res.length-1]
  }
  console.log(translateNum(506))