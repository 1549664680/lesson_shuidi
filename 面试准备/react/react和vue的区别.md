1. # 组件的引用
  react直接import 引入，然后可以直接在render中调用了，
  但是！！vue需要import之后，还要在components里去声明，才能用
2. React使用jsx拥抱js，vue使用模板拥抱html
2. # 监听数据变化的实现原理不同
  Vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能
  React 默认是通过比较引用的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的VDOM的重新渲染
3. # HoC 和 mixins
 Vue 中我们组合不同功能的方式是通过 mixin，而在React中我们通过 HoC (高阶组件）。
 高阶组件本质就是高阶函数，React 的组件是一个纯粹的函数，所以高阶函数对React来说非常简单。
4. # 组件通信的区别
  ，React 本身并不支持自定义事件，Vue中子组件向父组件传递消息有两种方式：事件和回调函数，而且Vue更倾向于使用事件。但是在 React 中我们都是使用回调函数的，这可能是他们二者最大的区别。
5. # vuex redux
  Redux 使用的是不可变数据，而Vuex的数据是可变的。Redux每次都是用新的state替换旧的state，而Vuex是直接修改

相同点 
1. 都支持组件化
2. 都是数据驱动视图
3. 都使用vdom操作DOM