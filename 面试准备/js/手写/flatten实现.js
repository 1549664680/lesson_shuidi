let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
// 迭代
// function flatten(arr) {
//   let arrs =[...arr]
//   let newArr = [];
//   while (arrs.length){
//     let item = arrs.shift()
//     if(Array.isArray(item)){
//       arrs.unshift(...item) // 会把数组结构,在塞会原来数组,以便下次操作
//     }else {
//       newArr.push(item)
//     }
//   }
//   return newArr
// }
// console.log(flatten(arr))

// 递归
function flatten(arr) {
  let arrs = [];
  arr.map(item => {
  if(Array.isArray(item)){
      arrs.push(... flatten(item))
    } else {
      arrs.push(item)
    }
  })
  return arrs
}
console.log(flatten(arr))
//字符串转换
arr.join(',').split(',').map(item => Number(item))