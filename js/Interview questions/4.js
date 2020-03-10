/* https://developer.mozilla.org/en-US/docs/Web/JavaScript */
/*编写一个程序，将数组扁平化，并去除其中重复部分数据，最终得到一个升序且不重复的数组*/
let arr = [
	[1, 2, 2],
	[3, 4, 5, 5],
	[6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

//=>使用ES6中提供的 Array.prototype.flat 处理
// arr = arr.flat(Infinity);

//=>把数组直接变为字符串即可（数组TOSTRING之后，不管你有多少级，最后都会变为以逗号分隔的字符串，没有中括号和所谓的层级了），相当于直接的扁平化了
// arr = arr.toString().split(',').map(item => {
// 	return Number(item);
// });

//=>JSON.stringify也可以扁平化数组
// JSON.stringify(arr) : "[[1,2,2],[3,4,5,5],[6,7,8,9,..."
// replace(/(\[|\])/g, '') : "1,2,2,3,4,5,5,6,7,8,9..."
// arr = JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item => Number(item));

//=>基于数组的some方法进行判断检测：验证数组中的某一项有没有符合函数中提供的规则的
//=>find和some的区别：some返回的是boolean，find找到符合规则的，返回当前这一项，没找到符合规则的，返回undefined
//=>Array.isArray([val])：检测某个值是否为数组类型（挺准的）
/* var A = [2, 3, 4, 5];
var B = A.find(item => {
	return item < 6;
});
console.log(B); */
// while (arr.some(item => Array.isArray(item))) {
// 	arr = [].concat(...arr);
// }

//=>自己递归处理
~ function () {
	function myFlat() {
		let result = [],
			_this = this;
		//=>循环ARR中的每一项，把不是数组的存储到新数组中
		let fn = (arr) => {
			for (let i = 0; i < arr.length; i++) {
				let item = arr[i];
				if (Array.isArray(item)) {
					fn(item);
					continue;
				}
				result.push(item);
			}
		};
		fn(_this);
		return result;
	}
	Array.prototype.myFlat = myFlat;
}();
arr = arr.myFlat();



//=>基于ES6中的new Set()去重数组（也可以自己写方法）
// [...new Set(arr)]
// Array.from(new Set(arr))
arr = Array.from(new Set(arr)).sort((a, b) => a - b);
console.log(arr);