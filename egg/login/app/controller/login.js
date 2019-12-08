const Controller = require('egg').Controller

class LoginController extends Controller{
 async register(){
    //异步 存一条数据
    const { ctx } = this;
    const {password ,username, email} = ctx.request.body;
    //service层负责数据存储业务
    // ctx.body = 'hi, egg'; //响应体
    await ctx.service.user.register({password ,username, email});
  }
  async loginIn(){
    //异步 存一条数据
    const { ctx } = this;
    // 用户名 密码 ctx req res
    // console.log(ctx.request.body)
    const { email, password }= ctx.request.body
    console.log(email,password)
    ctx.body = '登录成功'; //响应体
    
  }
}

module.exports = LoginController;