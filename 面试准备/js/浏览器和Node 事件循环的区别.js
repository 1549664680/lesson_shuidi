// 其中一个主要的区别在于浏览器的event loop 和nodejs的event loop 在处理异步事件的顺序是不同的,
// nodejs中有micro event;其中Promise属于micro event 该异步事件的处理顺序就和浏览器不同.
// nodejs V11.0以上 这两者之间的顺序就相同了
// Event Loop是一个程序结构，用于等待和分派消息和事件
function test () {
  console.log('start')
   setTimeout(() => {
       console.log('children2')
       Promise.resolve().then(() => {console.log('children2-1')})
   }, 0)
   setTimeout(() => {
       console.log('children3')
       Promise.resolve().then(() => {console.log('children3-1')})
   }, 0)
   Promise.resolve().then(() => {console.log('children1')})
   console.log('end')
}
// 以上代码在node11以下版本的执行结果(先执行所有的宏任务，再执行微任务)
// start
// end
// children1
// children2
// children3
// children2-1
// children3-1

// 以上代码在node11及浏览器的执行结果(顺序执行宏任务和微任务)
// start
// end
// children1
// children2
// children2-1
// children3
// children3-1

console.log('script start')
setTimeout(function() {
  console.log('setTimeout')
}, 0)
new Promise((resolve, reject)=>{
  console.log("promise1") 
  resolve()
})
.then(()=>{
  console.log("then11")
  new Promise((resolve, reject)=>{
    console.log("promise2")
    resolve();
  })
  .then(() => {
    console.log("then2-1")
  })
  .then(() => {
    console.log("then2-2")
  })
})
.then(()=>{
  console.log("then12")
})
console.log('script end')

// script start -> promise1 -> script end -> then11 ->
//  promise2 -> then2-1 -> then12 -> then2-2 -> setTimeout

console.log('script start')

  async function async1() {
      await async2()
      console.log('async1 end')
  }
  async function async2() {
      console.log('async2 end')
  }
  async1()

  setTimeout(function() {
      console.log('setTimeout')
  }, 0)

  new Promise(resolve => {
      console.log('Promise')
      resolve()
  })
  .then(function() {
      console.log('promise1')
  })
  .then(function() {
      console.log('promise2')
  })

  console.log('script end')

  // script start
  // VM105:8 async2 end
  // VM105:17 Promise
  // VM105:27 script end
  // VM105:5 async1 end
  // VM105:21 promise1
  // VM105:24 promise2
  // VM105:13 setTimeout