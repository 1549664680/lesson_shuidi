1. ## 浏览器渲染机制
    浏览器采用流式布局模型（Flow Based Layout）
    浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了渲染树（Render Tree）。
    有了RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。
    由于浏览器使用流式布局，对Render Tree的计算通常只需要遍历一次就可以完成，但table及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要避免使用table布局的原因之一。
## 回流必定会发生重绘，重绘不一定会引发回流。
2. ## 重绘
  当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘。
3. ## 回流
  回流是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致了其所有子元素以及DOM中紧随其后的节点、祖先节点元素的随后的回流。
4. 浏览器优化
  现代浏览器大多都是通过队列机制来批量更新布局，浏览器会把修改操作放在队列中，至少一个浏览器刷新（即16.6ms）才会清空队列，但当你获取布局信息的时候，队列中可能有会影响这些属性或方法返回值的操作，即使没有，浏览器也会强制清空队列，触发回流与重绘来确保返回正确的值。
  主要包括以下属性或方法：
  offsetTop、offsetLeft、offsetWidth、offsetHeight
  scrollTop、scrollLeft、scrollWidth、scrollHeight
  clientTop、clientLeft、clientWidth、clientHeight
  width、height
  getComputedStyle()
  getBoundingClientRect()
  所以，我们应该避免频繁的使用上述的属性，他们都会强制渲染刷新队列。
5. 减少重绘与回流
  # css
  1. 使用 transform 替代 top
  2. 使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局
  3. 避免使用table布局，可能很小的一个小改动会造成整个 table 的重新布局。
  避免设置多层内联样式，CSS 选择符从右往左匹配查找，避免节点层级过多。
  4. 将动画效果应用到position属性为absolute或fixed的元素上
  避免使用CSS表达式
  5. 将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点，例如will-change、video、iframe等标签，浏览器会自动将该节点变为图层。
  # JavaScript
  避免频繁操作样式
  避免频繁操作DOM
  对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。 