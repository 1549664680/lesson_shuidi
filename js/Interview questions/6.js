let ary1 = ['D1', 'D2', 'A1', 'A2', 'C1', 'C2', 'B1', 'B2'];
let ary2 = ['B', 'A', 'D', 'C'];
//=>合并后的数组为：['D1', 'D2','D', 'A1', 'A2','A', 'C1', 'C2','C' ,'B1', 'B2','B']
/* ary2 = ary2.map(item => item + '珠峰');
let arr = ary1.concat(ary2);
arr = arr.sort((a, b) => a.localeCompare(b)).map(item => {
	return item.replace('珠峰', '');
});
console.log(arr); */

/* let n = 0;
for (let i = 0; i < ary2.length; i++) {
	let item2 = ary2[i];
	for (let k = 0; k < ary1.length; k++) {
		let item1 = ary1[k];
		if (item1.includes(item2)) {
			//=>如果包含就记录一下当前这一项的索引位置（后面还有包含的会重新记录这个值）
			n = k;
		}
	}
	//=>把当前ITEM2这一项插入到ARY1中N的后面
	ary1.splice(n + 1, 0, item2);
}
console.log(ary1); */

//=>定时器是异步编程：每一轮循环设置定时器，无需等定时器触发执行，继续下一轮循环（定时器触发的时候，循环已经结束了）
/* for (let i = 0; i < 10; i++) {
	//=>LET存在块级作用域，每一次循环都会在当前块作用域中形成一个私有变量i存储0~9
	//当定时器执行的时候，所使用的i就是所处块作用域中的i
	setTimeout(() => {
		console.log(i);
	}, 1000);
} */

//=>闭包解决
/* for (var i = 0; i < 10; i++) {
	~ function (i) {
		setTimeout(() => {
			console.log(i);
		}, 1000);
	}(i);
} */
/* for (var i = 0; i < 10; i++) {
	setTimeout((i => () => console.log(i))(i), 1000);
} */

//=>可以基于bind的预先处理机制：在循环的时候就把每次执行函数需要输出的结果，预先传给函数即可
/* var fn = function (i) {
	console.log(i);
};
for (var i = 0; i < 10; i++) {
	setTimeout(fn.bind(null, i), 1000);
} */

/* var b = 10;
(function b() {
	b = 20;
	console.log(b); //=>函数
})();
console.log(b); //=>10 */

/* let fn = function AAA() {
	// "use strict";
	// AAA = 1000; //=>Uncaught TypeError: Assignment to constant variable.
	console.log(AAA); //=>当前函数
};
// AAA(); //=>Uncaught ReferenceError: AAA is not defined  
// 1.本应匿名的函数如果设置了函数名，在外面还是无法调用，但是在函数里面是可以使用的
// 2.而且类似于创建常量一样，这个名字存储的值不能再被修改（非严格模式下不错报，但是不会有任何的效果，严格模式下直接报错，我们可以把AAA理解为是用 const 创建出来的）
fn(); */

/* var b = 10;
(function b(b) {
	b = 20;
	console.log(b); //=>20 里面的b一定需要是私有的，不能是全局的（声明它或者改为形参）
})();
console.log(b); //=>10 */