/* 如何把一个字符串的大小写取反（大写变小写，小写变大写），例如 ’AbC' 变成 'aBc'  */
/* let str = "zhufengPEIxun的周老师很帅！吁*100！HAHA";
str = str.replace(/[a-zA-Z]/g, content => {
	//=>content:每一次正则匹配的结果
	//验证是否为大写字母：把字母转换为大写后看和之前是否一样，如果一样，之前也是大写的；在ASCII表中找到大写字母的取值范围进行判断（65-90）；
	// content.toUpperCase()===content
	// content.charCodeAt()>=65 && content.charCodeAt()<=90
	return content.toUpperCase() === content ? content.toLowerCase() : content.toUpperCase();
});
console.log(str); */

/* 实现一个字符串匹配算法，从字符串 S 中，查找是否存在字符串 T，若存在返回所在位置，不存在返回-1！（如果不能基于indexOf/includes等内置的方法，你会如何处理呢？） */
~ function () {
	/*
	 * 循环原始字符串中的每一项，让每一项从当前位置向后截取T.length个字符，然后和T进行比较，如果不一样，继续循环；如果一样返回当前索引即可（循环结束）；
	 */
	/* function myIndexOf(T) {
		//=>THIS:S
		let lenT = T.length,
			lenS = this.length,
			res = -1;
		if (lenT > lenS) return -1;
		for (let i = 0; i <= lenS - lenT; i++) {
			if (this.substr(i, lenT) === T) {
				res = i;
				break;
			}
		}
		return res;
	} */

	/*
	 * 正则处理 
	 */
	function myIndexOf(T) {
		//=>THIS:S
		let reg = new RegExp(T),
			res = reg.exec(this);
		return res === null ? -1 : res.index;
	}

	String.prototype.myIndexOf = myIndexOf;
}();
// let S = "zhufengpeixun",
// 	T = "pei";
// console.log(S.myIndexOf(T));

/* 输出下面代码运行结果 */
/* //example 1
var a={}, b='123', c=123;  
a[b]='b';
a[c]='c';  
console.log(a[b]); //=>c  因为：a["123"] <=> a[123]

//example 2
var a={}, b=Symbol('123'), c=Symbol('123');  
a[b]='b';
a[c]='c';  
console.log(a[b]);  //=>Symbol是ES6中新增的数据类型  typeof Symbol('123')==="symbol"  它创建出来的值是唯一值  Symbol('123')===Symbol('123'):FALSE

//example 3
var a={}, b={key:'123'}, c={key:'456'};  
a[b]='b';
a[c]='c';  
console.log(a[b]);
//1.对象的属性名不能是一个对象（遇到对象属性名，会默认转换为字符串）
// obj={}  arr=[12,23]  obj[arr]='珠峰'  obj=>{"12,23":"珠峰"}
//2.普通对象.toString() 调取的是Object.prototype上的方法（这个方法是用来检测数据类型的）
// obj={}  obj.toString()=>"[object Object]" 
// obj[b]='b'  => obj["[object Object]"]='b' */

/* 在输入框中如何判断输入的是一个正确的网址，例如：用户输入一个字符串，验证是否符合URL网址的格式 */
let str = "https://www.zhufengpeixun.com.cn";
let reg = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
console.log(reg.exec(str));
//=>URL格式
//1.协议://  http/https/ftp
//2.域名
// www.zhufengpeixun.cn
// zhufengpeixun.cn
// kbs.sports.qq.com
// kbs.sports.qq.com.cn
//3.请求路径
// /
// /index.html
// /stu/index.html
// /stu/
//4.问号传参
// ?xxx=xxx&xxx=xxx
//5.哈希值
// #xxx