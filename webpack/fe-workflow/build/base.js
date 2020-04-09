const Config = require('webpack-chain'); // 配置
const config = new Config(); // 配置实例
const path = require('path');
const resolve = src => {
  return path.join(process.cwd(), src)
}

module.exports = () => {
  // console.log('在这里做基本配置吧');
  config
    .entry('app')
      .add(resolve('src/main.js'))
      .end()
    .set('mode', process.env.NODE_ENV)
    .output
      .path(resolve('dist'))
      .filename('[name].bundle.js');
  
  return config;
}