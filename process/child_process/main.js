// - web worker 计算hash 创建一个新的线程 
const http = require('http');
const fork = require('child_process').fork; // 创建新的进程 

http.createServer((req,res) =>{
  const compute = fork('./fork_compute.js');
  compute.send('开启一个新的进程吧')
  compute.on('message',sum => {
    res.end(`sum is ${sum}`)
  })
}).listen(1314, () =>{
  console.log(process.pid)
})