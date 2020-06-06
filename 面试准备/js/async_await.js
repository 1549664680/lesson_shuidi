// https://juejin.im/post/5d2c814c6fb9a07ecd3d8e43#heading-1
// Async/Await 如何通过同步的方式实现异步

// 作为前端人员要回答这个问题，需要了解这三个知识点：

// 同步
// 异步
// Async/Await
// 所以了解 async/await 就不得不讲一讲 Generator,

// 而 Generator 又依赖于迭代器Iterator，

// 所以就得先讲一讲 Iterator,

// 链表（Linked list）是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序储存数据，
// 而是在每一个节点里存到下一个节点的指针（Pointer）。由于不必须按顺序储存，
// 链表在插入的时候可以达到 o(1)的复杂度，比另一种线性表顺序表快得多，
// 但是查找一个节点或者访问特定编号的节点则需要 o(n)的时间，
// 而顺序表响应的时间复杂度分别是 o(logn)和 o(1)。

// Iterator 翻译过来就是**迭代器（遍历器）**让我们先来看看它的遍历过程(类似于单向链表)：

// 创建一个指针对象，指向当前数据结构的起始位置
// 第一次调用指针对象的 next 方法，将指针指向数据结构的第一个成员
// 第二次调用指针对象的 next 方法，将指针指向数据结构的第二个成员
// 不断的调用指针对象的 next 方法，直到它指向数据结构的结束位置

// 当一个对象只有满足下述条件才会被认为是一个迭代器：
// 它实现了一个 next() 的方法，该方法必须返回一个对象,对象有两个必要的属性：

// done（bool）

// true：迭代器已经超过了可迭代次数。这种情况下,value 的值可以被省略
// 如果迭代器可以产生序列中的下一个值，则为 false。这等效于没有指定 done 这个属性

// value 迭代器返回的任何 JavaScript 值。done 为 true 时可省略

const makeIterator = arr => {
  let nextIndex = 0;
  return {
    next: () =>
      nextIndex < arr.length
        ? { value: arr[nextIndex++], done: false }
        : { value: undefined, done: true },
  };
};
const it = makeIterator(['人月', '神话']);
console.log(it.next()); // { value: "人月", done: false }
console.log(it.next()); // { value: "神话", done: false }
console.log(it.next()); // {value: undefined, done: true }

// Generator：生成器对象是生成器函数（GeneratorFunction）返回的，它符合可迭代协议和迭代器协议，
// 既是迭代器也是可迭代对象，可以调用 next 方法，但它不是函数，更不是构造函数
function* another() {
  yield '人月神话';
}
function* gen() {
  yield* another(); // 移交执行权
  const a = yield 'hello';
  const b = yield a; // a='world' 是 next('world') 传参赋值给了上一个 yidle 'hello' 的左值
  yield b; // b=！ 是 next('！') 传参赋值给了上一个 yidle a 的左值
}
const g = gen();
g.next(); // {value: "人月神话", done: false}
g.next(); // {value: "hello", done: false}
g.next('world'); // {value: "world", done: false} 将 'world' 赋给上一条 yield 'hello' 的左值，即执行 a='world'，
g.next('!'); // {value: "!", done: false} 将 '!' 赋给上一条 yield a 的左值，即执行 b='!'，返回 b
g.next(); // {value: undefined, done: false}
// 我们来总结一下 Generator 的本质，暂停，它会让程序执行到指定位置先暂停（yield），
// 然后再启动（next），再暂停（yield），再启动（next），而这个暂停就很容易让它和异步操作产生联系，
// 因为我们在处理异步时：开始异步处理（网络求情、IO 操作），然后暂停一下，等处理完了，再该干嘛干嘛。
// 不过值得注意的是，js 是单线程的（又重复了三遍）
const promisify = require('util').promisify;
const path = require('path');
const fs = require('fs');
const readFile = promisify(fs.readFile);

const gen = function*() {
  const res1 = yield readFile(path.resolve(__dirname, '../data/a.json'), { encoding: 'utf8' });
  console.log(res1);
  const res2 = yield readFile(path.resolve(__dirname, '../data/b.json'), { encoding: 'utf8' });
  console.log(res2);
};

const g = gen();

const g1 = g.next();
console.log('g1:', g1);

g1.value
  .then(res1 => {
    console.log('res1:', res1);
    const g2 = g.next(res1);
    console.log('g2:', g2);
    g2.value
      .then(res2 => {
        console.log('res2:', res2);
        g.next(res2);
      })
      .catch(err2 => {
        console.log(err2);
      });
  })
  .catch(err1 => {
    console.log(err1);
  });
// g1: { value: Promise { <pending> }, done: false }
// res1: {
//   "a": 1
// }

// {
//   "a": 1
// }

// g2: { value: Promise { <pending> }, done: false }
// res2: {
//   "b": 2
// }

// {
//   "b": 2
// }
// 首先，async/await 是 Generator 的语法糖，上面我是分割线下的第一句已经讲过，先来看一下二者的对比：
// Generator
run(function*() {
  const res1 = yield readFile(path.resolve(__dirname, '../data/a.json'), { encoding: 'utf8' });
  console.log(res1);
  const res2 = yield readFile(path.resolve(__dirname, '../data/b.json'), { encoding: 'utf8' });
  console.log(res2);
});

// async/await
const readFile = async ()=>{
  const res1 = await readFile(path.resolve(__dirname, '../data/a.json'), { encoding: 'utf8' });
  console.log(res1);
  const res2 = await readFile(path.resolve(__dirname, '../data/b.json'), { encoding: 'utf8' });
  console.log(res2);
  return 'done'
}
const res = readFile();
