const WebSocket = require('ws');
// const events = require('events');
const code2ws = new Map()  // Map 维护了连接关系


// 长长久久 办会员，  ID
const wss = new WebSocket.Server({
  port: 8010
})


// console.log(wss instanceof events.EventEmitter);
wss.on('connection', function connection(ws, request) {
  // ws 每一个 用户
  console.log(ws);
  let code = Math.floor(Math.random()*(999999-100000)) + 100000;
  code2ws.set(code, ws);


  ws.on('message', function incoming(message) {
    ws.sendData = (event, data) => {
      ws.send(JSON.stringify({event, data}))
    }
    // console.log('incoming', message);
    let parseMessage = {}
    try {
      parseMessage = JSON.parse(message)
    } catch (error) {
      ws.send('message invalid')
    }
    let {event,data} = parseMessage
    if(event === 'login'){
      ws.sendData('logined',{code})
    }else if(event === 'control'){
      let remote = data.remote
      if(code2ws.has(remote)){
        ws.sendData('controlled',{remote})
        ws.sendRemote = code2ws.get(remote).sendData
        ws.sendRemote('be-controlled',{
          remote:code
        })
      }
    }
  })
})