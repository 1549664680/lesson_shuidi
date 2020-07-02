1. ## display 属性规定元素应该生成的框的类型。
  none :元素不会显示
  block: 此元素将显示为块级元素，此元素前后会带有换行符。
  inline：默认此元素会被显示为内联元素，元素前后没有换行符。
  line-block：行内块元素。（CSS2.1 新增的值）[IE6/7不支持]
  list-item：此元素会作为列表显示。
  table：此元素会作为块级表格来显示（类似 table），表格前后带有换行符。
  inline-table：此元素会作为内联表格来显示（类似 table），表格前后没有换行符。
  table-row：此元素会作为一个表格行显示（类似 tr）。
  table-cell：此元素会作为一个表格单元格显示（类似 td 和 th）.
  inherit：规定应该从父元素继承 display 属性的值。
2. # display:none
  将元素与其子元素从普通文档流中移除。这时文档的渲染就像元素从来没有存在过一样，也就是说它所占据的空间消失了。元素的内容也会消失
3. # display:block
  block元素可以设置margin和padding属性；
  block元素可以设置width、height属性。
  块级元素在设置宽度的情况下，是通过自定义margin-right来自动填满一行，这个时候你设置margin-right是无效的；块级元素在没有设置宽度的时候，margin-right会生效，块级元素的width通过自定义在自动填满一行。
4. # display:inline
  inline元素设置width、height属性无效；
  inline元素的margin和padding属性，水平方向的padding-left、padding-right、margin-left、margin-right都产生边距效果；但竖直方向的padding-top、padding-bottom、margin-top、margin-bottom不会产生边距效果。
5. # display:inline-block
  将对象呈现为inline对象，但是对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。就是集合了block和inline的全部优点。width、height、margin、padding设置都会生效。