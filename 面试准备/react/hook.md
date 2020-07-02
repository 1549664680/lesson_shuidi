为什么用hooks
#  react都核心思想就是，将一个页面拆成一堆独立的，可复用的组件，并且用自上而下的单向数据流的形式将这些组件串联起来
1. 想要复用一个有状态的组件太麻烦了！
2. 生命周期钩子函数里的逻辑太乱了吧！
3. classed的this指向问题

# hooks中的方法
1. useState用来声明状态变量
而mixins之所以被否定，是因为Mixsins机制是让多个Mixins共享一个对象的数据空间，这样就很难确保不同Mixins依赖的状态不发生冲突。
而现在我们的hook，一方面它是直接用在function当中，而不是class；另一方面每一个hook都是相互独立的，不同组件调用同一个hook也能保证各自状态的独立性。这就是两者的本质区别了。
react是根据useState出现的顺序来定的
必须把hooks写在函数的最外层，不能写在ifelse等条件语句当中，来确保hooks的执行顺序一致。
2. useEffect 一抵三
componentDidMount，componentDidUpdate和componentWillUnmount
3. useRef
useEffect里面的state的值，是固定的，这个是有办法解决的，就是用useRef，可以理解成useRef的一个作用：
就是相当于全局作用域，一处被修改，其他地方全更新...
4. useMemo
相当于有个暂存
5. useCallback
useMemo 解决了值的缓存的问题
usecallback缓存函数
6. useReducer？
const [count, dispatch] = useReducer(reducer, 0)
7. useContext
1.如果项目体量较小，只是需要一个公共的store存储state，而不讲究使用action来管理state，那context完全可以胜任。反之，则是redux的优点。

2.context的缺点：因为没有了action，state的值都是被直接修改，state的数据安全性不及redux。同时也不能使用redux的中间件，比如thunk/saga，在一些异步的情况需要自己来处理。