const express = require('express');
const app = express();
const path = require('path')
// 路由的模块化
const router = require('./routes/index.js');
router(app);
app.use('/', express.static(path.join(__dirname,'web')))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin', express.static(path.join(__dirname,'admin')))
// app.use()
app.listen("3000", () => {
  console.log('api 服务器上线了');
})