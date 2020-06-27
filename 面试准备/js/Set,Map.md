## Set
ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是向 Set 加入值时认为NaN等于自身，而精确相等运算符认为NaN不等于自身。
另外，两个对象总是不相等的。
# 方法
1. Set.prototype.size：返回Set实例的成员总数。
2. Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
3. Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
4. Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
5. Set.prototype.clear()：清除所有成员，没有返回值。
# 遍历
由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
1. Set.prototype.keys()：返回键名的遍历器
2. Set.prototype.values()：返回键值的遍历器
3. Set.prototype.entries()：返回键值对的遍历器
4. Set.prototype.forEach()：使用回调函数遍历每个成员

## WeakSet
WeakSet 可以接受一个数组或类似数组的对象作为参数
WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
# 方法
1. WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
2. WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
3. WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

## Map
1. 本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
2. ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
3. Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键
# 方法
1. size()
2. set(key,value)
3. get(key)
4. has(key)
5. delete(key)
6. clear()
# 遍历
Map.prototype.keys()：返回键名的遍历器。
Map.prototype.values()：返回键值的遍历器。
Map.prototype.entries()：返回所有成员的遍历器。
Map.prototype.forEach()：遍历 Map 的所有成员。
forEach除了可以接收回调函数，还可以接受第二个参数，用来绑定this

## WeakMap
WeakMap结构与Map结构类似，也是用于生成键值对的集合。
WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。WeakMap的键名所指向的对象，不计入垃圾回收机制。
# 方法
WeakMap只有四个方法可用：get()、set()、has()、delete()。