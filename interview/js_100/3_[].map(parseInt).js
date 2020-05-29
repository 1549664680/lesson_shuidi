console.log(['1','2','3'].map(parseInt))
// 1 NaN NaN

let unary = fn => val => fn(val)
let parse = unary(parseInt)
console.log(['1','2','3'].map(parse))