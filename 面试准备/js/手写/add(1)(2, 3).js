function add(){
  let arg = [...arguments]
  let addfun = function(){ //每次都是返回这个函数
    arg.push(...arguments)
    return addfun
  }
  addfun.toString = function(){ // 改写tostring方法
    return arg.reduce((a,b)=>a+b)
  }
  return addfun
}
console.log(add(1)); 			// 1
console.log(add(1)(2));  	// 3
console.log(add(1)(2)(3))// 6
console.log(add(1)(2, 3)); // 6
console.log(add(1, 2)(3)); // 6
console.log(add(1, 2, 3)); // 6