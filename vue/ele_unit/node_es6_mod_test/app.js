// const express = require('express') // es5 支持的commonjs
import  express  from "express";//es6 模块化
const app = express();
app.listen("1234", () =>{
  console.log('api 服务器上线了')
})