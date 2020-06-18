先讲下react16的生命周期
 # 挂载阶段
 constructor
getDefaultProps：MyComponent.defaultProps = { age: 'unknown' }
getInitialState：
是因为这两个函数只是在ES2015语法中创建组件时暴露出来，在ES6语法中我们通过两个赋值语句实现了同样的效果。

componentWillMount() : void 17中弃用，需加上unsafe
在完成首次渲染之前调用，此时仍可以修改组件的state

componentDidMount() : void
可以发起异步请求，通过setState重新触发更新
组件渲染完成，真实的DOM被渲染出来后调用
 # 更新阶段
componentWillReceiveProps(nextProps) : void
17中弃用，需加上unsafe
组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。
props没有改变，也会触发
shouldComponentUpdate(nextProps, nextState) : bool
组件是否应当渲染新的props或state，

componentWillUpdate(nextProps, nextState) : void
17中弃用，需加上unsafe
 接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state，否则会立即触发另一轮的渲染并且又再一次调用componentWillUpdate，陷入无限循环中。

componentDidUpdate(prevProps, prevState) : void
完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。
不能进行setstate，除非是有条件的
 # 销毁阶段.
 componentWillUnmount: 
 当组件被卸载或者销毁之前调用,我们可以清除一些定时器,取消网络请求等。

