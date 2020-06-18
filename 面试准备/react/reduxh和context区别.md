# 什么时候使用redux
某个组件的状态，需要共享
某个状态需要在任何地方都可以拿到
一个组件需要改变全局状态
一个组件需要改变另一个组件的状态
View要从多个来源获取数据
# 设计思想
（1）Web 应用是一个状态机，视图与状态是一一对应的。
（2）所有的状态，保存在一个对象里面。。
# react-redux
React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）











1.如果项目体量较小，只是需要一个公共的store存储state，而不讲究使用action来管理state，那context完全可以胜任。反之，则是redux的优点。

2.context的缺点：因为没有了action，state的值都是被直接修改，state的数据安全性不及redux。同时也不能使用redux的中间件，比如thunk/saga，在一些异步的情况需要自己来处理。