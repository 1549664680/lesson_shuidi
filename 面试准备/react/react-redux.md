1. react-redux是react官方用来绑定redux的。我们将Provider放在最上层让redux的store在任何组件里都是可用的。然后使用connect()函数来链接react的组件和redux的store。
2. React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）

3. connect 一共有4个参数
mapStateToProps?: Function
  function mapStateToProps(state) {
    return state;
  },
mapDispatchToProps?: Function | Object
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
mergeProps?: Function
options?: Object
connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。