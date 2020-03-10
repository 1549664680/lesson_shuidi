/* 1.call 和 apply 的区别是什么，哪个性能更好一些？ */
// fn.call(obj,10,20,30);
// fn.apply(obj,[10,20,30]);
//=>call的性能要比apply好那么一些（尤其是传递给函数的参数超过三个的时候），所以后期开发的时候，可以使用call多一点
// let arr = [10, 20, 30],
// 	obj = {};
// function fn(x, y, z) {}
// fn.apply(obj, arr); //=>x=10 y=20 z=30
// fn.call(obj, arr); //=>x=[10,20,30] y=z=undefined
// fn.call(obj, ...arr); //=>基于ES6的展开运算符也可以实现把数组中的每一项依次传递给函数
//=>自己实现性能测试（只供参考）：任何的代码性能测试都是和测试的环境有关系的，例如CPU、内存、GPU等电脑当前性能不会有相同的情况，不同浏览器也会导致性能上的不同；
//console.time()可以测试出一段程序执行的时间
//console.profile()在火狐浏览器中安装FireBug，可以更精准的获取到程序每一个步骤所消耗的时间
// console.time('A');
// for (let i = 0; i < 100000000; i++) {

// }
// console.timeEnd('A');

/* 实现 (5).add(3).minus(2) ，使其输出结果为：6 */
/* ~ function () {
	//=>每一个方法执行完，都要返回NUMBER这个类的实例，这样才可以继续调取NUMBER类原型中的方法（链式写法）
	function check(n) {
		n = Number(n);
		return isNaN(n) ? 0 : n;
	}

	function add(n) {
		n = check(n);
		return this + n;
	}

	function minus(n) {
		n = check(n);
		return this - n;
	}

	Number.prototype.add = add;
	Number.prototype.minus = minus;
	/!* ["add", "minus"].forEach(item => {
		Number.prototype[item] = eval(item);
	}); *!/
}();
console.log((5).add(3).minus(2)); */

/* 箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？ */
/*
 * 箭头函数和普通函数的区别
 *   1.箭头函数语法上比普通函数更加简洁（ES6中每一种函数都可以使用形参赋默认值和剩余运算符）
 *   2.箭头函数没有自己的THIS，它里的THIS是继承函数所处上下文中的THIS（使用CALL/APPY等任何方式都无法改变THIS的指向）
 *   3.箭头函数中没有ARGUMENTS（类数组），只能基于...ARG获取传递的参数集合（数组）
 *   4.箭头函数不能被new执行（因为：箭头函数没有this也没有prototype）
 */
/* function Fn() {
	this.x = 100;
}
Fn.prototype.getX = function () {};
let f = new Fn; */

// let Fn = () => {
// 	this.x = 200;
// };
// let f = new Fn; //=>Uncaught TypeError: Fn is not a constructor


// function fn(x) {
// 	return function (y) {
// 		return x + y;
// 	}
// }
// let fn = x => y => x + y;

// let obj = {
// 	name: 'OBJ'
// };
// function fn1() {
// 	console.log(this);
// }
// fn1.call(obj);
// let fn2 = () => {
// 	console.log(this);
// };
// fn2.call(obj);

// document.body.onclick = () => {
// 	//=>THIS:WINDOW 不是当前操作的BODY了
// };
// document.body.onclick = function () {
// 	//=>THIS:BODY
// 	// arr.sort(function (a, b) {
// 	// 	//=>THIS:WINDOWN 回调函数中的THIS一般都是WINDOW
// 	// 	return a - b;
// 	// });
// 	arr.sort((a, b) => {
// 		//=>THIS:BODY
// 		return a - b;
// 	});
// };

//=>回调函数：把一个函数B作为实参传递给另外一个函数A，函数A在执行的时候，可以把传递进来的函数B去执行（执行N次，可传值，可改THIS）
// function each(arr, callBack) {
// 	//=>callBack:function(item, index){}
// 	for (let i = 0; i < arr.length; i++) {
// 		let flag = callBack.call(arr, arr[i], i);
// 		//=>接受回调函数返回的结果，如果是FALSE，我们结束循环
// 		if (flag === false) {
// 			break;
// 		}
// 	}
// }
// each([10, 20, 30, 40], function (item, index) {
// 	//=>this:原始操作数组
// 	if (index > 1) {
// 		return false;
// 	}
// });

// let fn = (...arg) => {
// 	// console.log(arguments); //=>Uncaught ReferenceError: arguments is not defined
// 	console.log(arg);
// };
// fn(10, 20, 30);

/* 思考题？ */
// 1.each
/* let arr = [10, 20, 30, 'AA', 40],
	obj = {};
arr = arr.each(function (item, index) {
	//=>THIS:OBJ（EACH第二个参数不传，THIS是WINDOW即可）
	if (isNaN(item)) {
		return false;  //=>如果RETURN的是FALSE，则结束当前数组的循环
	}
	return item * 10; //=>返回的结果是啥，就把数组中当前项替换成啥
}, obj);
//arr=[100,200,300,'AA',40]; */

//2.replace 重写这个方法，实现和内置一模一样的效果（只需要考虑 replace([REG],[CALLBACK]) 这种传参格式的处理）
/* let str = "zhufeng2019zhufeng2029";
str = str.replace(/zhufeng/g, function (...arg) {
	//ARG中存储了每一次大正则匹配的信息和小分组匹配的信息
	return '@'; //=>返回的是啥把当前正则匹配的内容替换成啥
}); */