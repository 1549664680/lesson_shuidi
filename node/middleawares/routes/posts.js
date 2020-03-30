const Router = require('koa-router')
const router = new Router({
  prefix:'/posts'
})
router.get('/',async (ctx) => {
  ctx.body = '文章列表'
})
// checky 一下有没有登录
let isLogged = false
const auth = (ctx,next) =>{
  if(!isLogged){
    ctx.redirect('/login')
  }else{
    next()
  }
}
router.post('/',auth,async (ctx) => {
  // ctx.redirect('/login'); 
  ctx.body = '保存成功'
})
module.exports = router