1. attachEvent是IE有的方法，它不遵循W3C标准，而其他的主流浏览器如FF等遵循W3C标准的浏览器都使用addEventListener，所以实际开发中需分开处理。

2. 多次绑定后执行的顺序是不一样的，attachEvent是后绑定先执行，addEventListener是先绑定先执行。
3. 绑定时间时，attachEvent必须带on，如onclick，onmouseover等，而addEventListener不能带on，如click，mouseover。这个区别在以上代码中可见。

4. attachEvent仅需要传递两个参数，而addEventListener需要传递三个参数，这里牵扯到“事件流”的概念。
侦听器在侦听时有三个阶段：捕获阶段、目标阶段和冒泡阶段。顺序为：捕获阶段（根节点到子节点检查是否调用了监听函数）→目 标阶段（目标本身）→冒泡阶段（目标本身到根节点）。
此处的参数确定侦听器是运行于捕获阶段、目标阶段还是冒泡阶段。 如果将 useCapture 设置为 true，则侦听器只在捕获阶段处理事件，而不在目标或冒泡阶段处理事件。 
如果useCapture 为 false，则侦听器只在目标或冒泡阶段处理事件。 要在所有三个阶段都侦听事件，请调用两次 addEventListener，一次将 useCapture 设置为 true，第二次再将useCapture 设置为 false。
