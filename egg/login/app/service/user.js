const Service = require('egg').Service;
const crypto = require('crypto');
const uuid = require('uuid');
class UserService extends Service{
    async register(user){
        const {ctx} = this;
        // console.log(user);
        // 密码绝对不存明文 单向加密
        user.password = crypto.createHmac('sha256','cxk1728cn').update(user.password).digest('hex')
        //加密模块
        // user.user_id = uuid.v4().replace(/-/g,'');
        const userInfo = await this.ctx.model.User.create(user);
        ctx.body = {
            msg:'注册成功',
            userInfo
            // user_id:userInfo.user_id,
            
        }
    }
}
module.exports = UserService;