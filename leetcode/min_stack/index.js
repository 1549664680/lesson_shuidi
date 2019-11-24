const arr = [];
arr.push('建宁');
arr.push('曾柔');
arr.push('双儿');
arr.push('阿珂');
//队列， 栈 先进后出
console.log(arr);

const ake = arr.pop();//移除最后一个
console.log(arr);

arr.unshift(ake); //移入第一位
console.log(arr);

arr.unshift('苏荃');
console.log(arr);

const sq = arr.shift(); //移除第一位
arr.push(sq)
console.log(arr);