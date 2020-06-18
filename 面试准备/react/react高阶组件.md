# 如果一个函数 接受一个或多个组件作为参数并且返回一个组件 就可称之为 高阶组件。

React 中的高阶组件主要有两种形式：属性代理 和 反向继承。

# 属性代理
操作 props
抽离 state
通过 ref 访问到组件实例
用其他元素包裹传入的组件 WrappedComponent
# 反向继承（Inheritance Inversion）
反向继承其实就是 一个函数接受一个 WrappedComponent 组件作为参数传入，并返回一个继承了该传入 WrappedComponent 组件的类，且在该类的 render() 方法中返回 super.render() 方法。

操作 state：
高阶组件中可以读取、编辑和删除 WrappedComponent 组件实例中的 state。甚至可以增加更多的 state 项，但是 非常不建议这么做 因为这可能会导致 state 难以维护及管理。

渲染劫持（Render Highjacking）
之所以称之为 渲染劫持 是因为高阶组件控制着 WrappedComponent 组件的渲染输出，通过渲染劫持我们可以：
有条件地展示元素树（element tree）
操作由 render() 输出的 React 元素树
在任何由 render() 输出的 React 元素中操作 props
用其他元素包裹传入的组件 WrappedComponent （同 属性代理）

# 存在问题
静态方法丢失：
因为原始组件被包裹于一个容器组件内，也就意味着新组件会没有原始组件的任何静态方法：
所以必须将静态方法做拷贝：
refs 属性不能透传
反向继承不能保证完整的子组件树被解析