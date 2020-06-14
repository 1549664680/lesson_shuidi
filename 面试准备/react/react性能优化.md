1. ## 自己项目中使用到的优化
  # memo
    React.memo 为高阶组件
    React.memo()是判断一个函数组件的渲染是否重复执行
    props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，
    以此通过记忆组件渲染结果的方式来提高组件的性能表现
    且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍会重新渲染。
  # useMemo
  让函数在某个依赖项改变的时候才运行，这可以避免很多不必要的开销
  # useCallback
    返回一个 memoized 回调函数。
    接受一个参数数组，如何过参数数组中的数都没有变化，则会使用上次缓存的值
    解决只依赖某个变量的子组件避免不必要的 render 问题。
useMemo和useCallback接收的参数都是一样，都是在其依赖项发生变化后才执行，
都是返回缓存的值，区别在于useMemo返回的是函数运行的结果，useCallback返回的是函数。
  # useEffect
    数据获取，设置订阅或者手动直接更改 React 组件中的 DOM 都属于副作用
    可以把 useEffect Hook 视作 componentDidMount、componentDidUpdate 和 componentWillUnmount 的组合体
    第二个参数为空数组则只会执行一次，否则依赖参数

2.  ## 其他优化
    key
    箭头函数，直接使用虽然简单，但每次渲染都会生成改函数，影响性能，应该先声明好
    不可变数据Immutable：Facebook封装好的抽象数据结构，由于其结构的不变性和共享性，能让引用对象在比对的时候更加快速。使用Immutable创建的数据不可变更，因此数据在整个应用中都易于追踪。这也符合函数式编程的思想。它的核心是采用持久化的数据结构，当改变数据的时候，只会更新变更的那一部分，而数据结构中的不变部分都会公用同一引用，达到结构共享的目的。所以，在高度嵌套的数据进行深拷贝的时候，性能也会更。
    React.lazy
