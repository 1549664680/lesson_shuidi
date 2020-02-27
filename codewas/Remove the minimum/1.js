function removeSmallest(numbers) {
  if(numbers == null){
    return numbers
  }else{
  var sortnumbers= numbers.slice(0) //深复制
  var changenumbers = numbers.slice(0)
  sortnumbers.sort((a,b)=>{return a-b}) // 排序 为了得到最小值
  var min = sortnumbers[0];
  var length = numbers.length
    for(var i = 0 ;i<length;i++){
      if(numbers[i] == min){
        changenumbers.splice(i,1)  // 删除第 i 位置 一个数
        return changenumbers
    }
  }
  return numbers
  }
}
var numbers = [29, 267, 37, 198, 399, 306, 62, 368, 307, 251, 201]
console.log(removeSmallest(numbers))
