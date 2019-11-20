- 数据可视化
- 使用requestAnimationFrame 请求运动帧
游戏中使用这个来代替setintervar
  function animation(){
      console.log('----');
      requstAnimationFrame(function(){
      animation();递归 自己调用自己 内存泄漏
      })
  }
  animation();

- canvas 是画布
  绘制API  画布的默认大小？300*150
  canvas.style.width 标准的  100vw  数值加单位
  canvas.width  html 属性 不接受单位， 只接受数值
  ctx = cnavas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillText(2,100,100)
  requstAnimation + clearRect()