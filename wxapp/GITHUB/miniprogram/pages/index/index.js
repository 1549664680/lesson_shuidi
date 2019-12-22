const userUtils = require('../../utils/users.js')

Page({
  commitAccount(e){
  let values = e.detail.value
  // console.log(values)
  let {username, password} = values
  // 检测表单的完整性 排除空格键 \s 就是空格 + 一个或多个
  if(!username.replace(/\s+/g,'')){
    wx.showToast({
      title:'请输入用户名',
      icon:'none'
    })
    return 
  }
  if(!password.replace(/\s+/g,'')){
    wx.showToast({
      title:'请输入密码',
      icon:'none'
    })
    return 
  }
  const token = this.getToken(username, password)
  console.log(token)
  this.login(token)
  },
  getToken(username,password){
    const str = username + ':' + password
    return 'Basic ' + wx.arrayBufferToBase64(new Uint8Array([...str].map(char => char.charCodeAt(0))))
  },
  login(token){
    wx.showLoading({
      title:'正在登录'
    })
    //将界面跟网络请求分开来
    userUtils
      .signIn(token)
      .then((data) => {
        console.log(data);
        wx.showToast({
          title:'登录成功',
          icon:'none'
        })
      })
  }
})
