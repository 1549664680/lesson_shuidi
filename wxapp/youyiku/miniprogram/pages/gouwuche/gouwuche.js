// miniprogram/pages/gouwuche/gouwuche.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  index: function() {
    wx.navigateTo({
    url: '../index/index'
  })
},
shangcheng: function() {
  wx.navigateTo({
  url: '../shangcheng/shangcheng'
  })
},
gouwuche:function() {
  wx.navigateTo({
  url: '../gouwuche/gouwuche'
})
},
account:function() {
  wx.navigateTo({
  url: '../account/account'
})
},
})