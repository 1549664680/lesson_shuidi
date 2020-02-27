const Koa = require('koa');
const fs =require('fs')
const app = new Koa();
const views = require('koa-views');
const index = require('./routes/index')
const logger = require('koa-logger');
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// app.use(ctx =>{
//     ctx.body = fs.createReadStream('dffaf')
// })
app.use(bodyparser({
    enableTypes:['json','from','text']
}))
app.use(require('koa-static')(__dirname + '/public'))
app.use(logger());
onerror(app);
app.use(views(__dirname + '/views',{
    extension:'pug'
}));
app.use(index.routes(),index.allowedMethods())
//模块化 COMMONJS
module.exports = app;