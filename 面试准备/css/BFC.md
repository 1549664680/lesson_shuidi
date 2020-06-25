1. ## 常见的定位方案
 普通流：元素按照其在 HTML 中的先后位置至上而下布局
 浮动 (float):元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似
 绝对定位 (absolute positioning)：在绝对定位布局中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。

 2. ## BFC
 BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。
 #　触发：
body 根元素
浮动元素：float 除 none 以外的值
绝对定位元素：position (absolute、fixed)
display 为 inline-block、table-cells、flex
overflow 除了 visible 以外的值 (hidden、auto、scroll)
 # 应用
  1. 同一个 BFC 下外边距会发生折叠
    margin: 100px;
    <div></div>
    <div></div>
    所以两个盒子之间距离只有 100px，而不是 200px。
  2. BFC 可以包含浮动的元素（清除浮动）
  3. BFC 可以阻止元素被浮动元素覆盖
3. ## 