import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  graphql: {
    enable: true,
    package: '@switchdog/egg-graphql'
  }
};

export default plugin;
