
var  Animation = function(opts){
    //els 参数
    var dur = 0.3, //移动速度
    amount = '50%', //移动50%
    tl = new TimelineMax({
        repeat: -1, //一直重复
        yoyo: true, //true更流畅
        repeatDelay: 1 //隔一秒再动
    });
    tl
    .add(
         fromLeft(
          opts.leftAnimated
         )
    )
    .add(
      fromRight(
           opts.rightAnimated
         )
    )
    function fromLeft(el){
        return TweenMax.from(el,dur,{x:'-='+amount,autoAlpha:0.1}) //autoAlpha 透明度0.2
    }
    function fromRight(el){
        return TweenMax.from(el,dur,{x:'+='+amount,autoAlpha:0.1})
    }
}
// 流程式的，不适合复用
// var t1 = new TimelineMax({ //线性运动库
//     repeat: -1, //重复执行的次数 -1是一直动
//     yoyo: true,
//     repeatDelay: 1 //隔一秒再动
// })
// t1.from(['#box1, #box3'], 0.2, {x: '-=55%'}); //往左移55%
// t1.from(['#box2'], 0.2, {x: '+=55%'}) //往右移55%  中间的0.2表示动的速度，越大动的越慢

// // 假如这个动画在其他地方也要