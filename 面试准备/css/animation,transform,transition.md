# transform  转换效果
1. translate(100px,100px) 往x，y轴移动100px
2. scale(0.5,.5) 缩小0.5倍  小于一缩小，大于一放大
3. rotate(angle)  旋转角度
4. skew(x-angle,y-angle)  x,y轴倾斜角度

# transition  属性设置元素当过渡效果
1）只能设置一个属性
2）需要伪类/事件触发才执行
3）只能设置动画初始值和结束值
1. transition-property: none  all property
2. transition-duration: time(1s)
3. transition-timing-function:linear(相同速度) ease(慢，快，慢)
4. transition-delay:time(1s)

# animation
可以控制到每一帧
1. animation-name	规定需要绑定到选择器的 keyframe 名称。。
2. animation-duration	规定完成动画所花费的时间，以秒或毫秒计。
3. animation-timing-function	规定动画的速度曲线。
4. animation-delay	规定在动画开始之前的延迟。
5. animation-iteration-count	规定动画应该播放的次数。n|infinite;
6. animation-direction	规定是否应该轮流反向播放动画。normal|alternate|reverse;