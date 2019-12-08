/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  //关掉csrf攻击
  config.security = {csrf:{enable: false}}
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575685353316_5992';
  config.sequelize = {
    dialect:'mysql',
    host:'localhost',
    port:3306,
    password:'1549664680',
    database:'ljr_instagram'
  }
  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
