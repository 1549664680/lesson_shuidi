// function XO(str) {
//     var arr = str.toLowerCase()
//     var count1 = 0,
//         count2 = 0
//   for(var i=0;i<arr.length;i++){
//       if('x' == arr[i]){
//       ++count1
//       }
//       if('o' == arr[i]){
//       ++count2
//       }
// }
// if(count1 == count2){return true}
// else{return false}
// }


function XO(str) {
    let x = str.match(/x/gi); //没有g 将只查找一次 i 忽略大小写
    let o = str.match(/o/gi);
    return (x&&x.length) === (o&&o.length);
  }
console.log(XO('xxoo'))