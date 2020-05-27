let http = require('http');
let EventEmitter = require('events')

class Koa extends EventEmitter {
  constructor() {
    super()
    this.fn = undefined;
  }
  use(fn) { //
    //  异步
    this.fn = fn;
  }
  listen(...args) {
    let server = http.createServer(this.fn);
    server.listen(...args)
  }
}

module.exports = Koa