1. 全局环境下，this永远指向window
普通函数直接在全局环境调用，this也指向Window。
2. 构造函数this指向new出来的对象
3. 对象方法中的this指向该对象
如果在对象方法中定义函数，那this指向window，可以使用that保存外部this
如果没有作为对象的一个属性被调用，那this也是window
4. call，apply，bind改变this
5. 箭头函数 的this指向外层