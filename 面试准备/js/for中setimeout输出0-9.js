// for (var i = 0; i< 10; i++){
// 	setTimeout(() => {
// 		console.log(i);
//     }, 1000)
// } 使之输出0-9

// 1. let 
for (let i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}

// 2. setimeout参数 IE9 及其更早版本不支持该参数
for (var i = 0; i< 10; i++){
	setTimeout((i) => {
		console.log(i);
    }, 1000,i)
}
// 3. IIFE 立即执行函数
for (var i = 0; i < 10; i++) {
  (i => {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  })(i)
}