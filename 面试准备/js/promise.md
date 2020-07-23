
promise构造函数是同步执行的，then方法是异步执行的
# 取消或中断
1. Promises/A+标准：原Promise对象的状态将跟新对象保持一致。
```
Promise.resolve().then(() => {
    console.log('ok1')
    return new Promise(()=>{})  // 返回“pending”状态的Promise对象
}).then(() => {
    // 后续的函数不会被调用
    console.log('ok2')
}).catch(err => {
    console.log('err->', err)
})
```
2. Promise.race竞速方法
利用这一特性，也能达到后续的Promise不再执行
3. 当Promise链中抛出一个错误时，错误信息沿着链路向后传递，直至被捕获。