function Person(name, age){
    this.name = name;
    this.age = age;
}
// 覆盖了object原有的tostring方法
Person.prototype.toString = function() {
    return 'I am a Person, my name is ' + this.name;
}
function Man(name, age){
    console.log(arguments,'-----------')
    //Person 构造函数  把父类的构造函数执行以下
    Person.apply(this,arguments);
}
Man.prototype = Object.create(Person.prototype);
var ljr = new Man('lanjinron',18);
// tostring 覆盖
Man.prototype.toString = function() {
    return 'I am ironman'+this.name;
}
console.log(ljr + '')
// var person = new Person('lan',18);
// console.log(person + '') // + '' 会自动调用tostring方法
// const arr =['lan', 'jin','ron']
// console.log(Object.prototype.toString.call(arr) ) //{ }
// // [object Array]
