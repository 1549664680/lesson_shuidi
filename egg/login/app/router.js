'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 网站有多个模块 /register ? /login/register
  // 注册 是req res 的过程  controller控制器层
  router.post('/login/register',controller.login.register)
  // 注册
  router.post('/login/loginIn',controller.login.loginIn)
  // // 登录 用post请求login登录
};
