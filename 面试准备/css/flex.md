1. ## Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性 flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为 0 1 auto
2. ## flex-grow 默认0
  # 定义弹性盒子项（flex-item）的拉伸因子，默认值0
  如何计算 
  子容器在父容器的“主轴”上还有多少空间可以“瓜分”，这个可以被“瓜分”的空间就叫做剩余空间。
剩余空间：x
假设有三个flex item元素，flex-grow 的值分别为a, b, c
每个元素可以分配的剩余空间为： a/(a+b+c) * x，b/(a+b+c) * x，c/(a+b+c) * x

以 A 为例子进行说明： A 占比剩余空间：1/(1+2+3) = 1/6，那么 A “瓜分”到的 150*1/6=25，实际宽度为100+25=125。

3. ## flex-shrink  默认1
  子容器宽度总和为650，溢出空间为150
总压缩：300 * 1 + 150 * 2 + 200 * 3 = 1200
A的压缩率：300*1 / 1200 = 0.25
A的压缩值：150 * 0.25 = 37.5
A的实际宽度：300 - 37.5 = 262.5
原来长度 减去 压缩率乘以溢出值
4. ##  flex-basis 默认auto
  MDN定义：指定了 flex 元素在主轴方向上的初始大小
  上面的例子可以通过最终元素的宽度看出几个属性的优先级关系：
max-width/min-width > flex-basis > width > box

## Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性

父类：
1. 项目方向 flex-direction:
row 项目将水平显示 
row-reverse 与 row 相同，但是以相反的顺序  
column:项目将垂直显示
column-reverse	与 column 相同，但是以相反的顺序。
2. 换行方式：flex-wrap 
nowarp
warp
warp-reverse
3. flex-flow  上面两种的缩写 默认row nowarp
4. 主轴对其方式：  justify-content
flex-start
flex-end
center
space-between
space-arround
5. 交叉轴对其方式 : align-items
flex-start
flex-end
center
baseline
stretch

子元素
主轴排列顺序 order 越小越靠前
flex-grow 0  占比率乘以剩余空间，加上原本长度
flex-shrink 1  原来长度 减去 压缩率乘以溢出值
flex-basic auto 用于设置或检索弹性盒伸缩基准值
flex ：缩写 flex-grow flex-shrink flex-basic  0  1  auto
align-self:flex-start flex-end center baseline stretch 自己对齐方式