虚拟DOM: React是以数据驱动的，每次数据变化React都会扫描整个虚拟DOM树，自动计算与上次虚拟DOM的差异变化，
然后针对需要变化的部分进行实际的浏览器DOM更新。

组件化： React可以从功能角度划分，将UI分解成不同组件，各组件都独立封装，整个UI是由一个个小组件构成的一个大组件，
每个组件只关系自身的逻辑，彼此独立（比如你有个按钮，很多页面都有这个按钮，那么就可以把这个按钮封装成该组件）。

单项数据流：React只有单向数据流动-从父节点传递到子节点