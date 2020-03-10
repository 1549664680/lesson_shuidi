function Dog(name) {
	this.name = name;
}
Dog.prototype.bark = function () {
	console.log('wangwang');
}
Dog.prototype.sayName = function () {
	console.log('my name is ' + this.name);
}
//=>Fn当前要NEW的类  =>Dog
//=>ARG后期需要给构造函数传递的参数信息  =>['三毛']
function _new(Fn, ...arg) {
	//=>创建一个空对象，让他的原型链指向Fn.prototype（作为Fn的一个实例）
	//=>Object.create([AA对象])：创建一个空对象obj，并且让空对象obj作为AA对象所属构造函数的实例（obj.__proto__=AA）
	// let obj = {};
	// obj.__proto__ = Fn.prototype;
	let obj = Object.create(Fn.prototype);
	Fn.call(obj, ...arg);
	return obj;
}
let sanmao = _new(Dog, '三毛');
/* 
 * let sanmao=new Dog('三毛'); 
 *   1.像普通函数执行一样，形成一个私有的作用域
 *     + 形参赋值
 *     + 变量提升
 *   2.默认创建一个对象,让函数中的this执行这个对象,这个对象就是当前类的一个实例
 *   3.代码执行
 *   4.默认把创建的对象返回
 */

//=>基于内置的new关键词，我们可以创建Dog的一个实例sanmao，实例可以调取原型上的属性和方法，现在的需求是：自己实现一个_new方法，也能模拟出内置new后的结果
// function _new() {
// 	//=>完成你的代码
// }
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true