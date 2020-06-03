import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588841843406_1416';

  // add your egg config in here
   config.middleware = [ 'graphql' ];
   config.graphql = {
     router: '/graphql',
     app: true, // 加载到agent
     agent: true,
     graphiql: true,
     apolloServerOptions: {
       tracing: true, 
       debug: true
     }
   };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
