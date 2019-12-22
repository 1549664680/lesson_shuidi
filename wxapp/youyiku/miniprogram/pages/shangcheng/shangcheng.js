// pages/shangcheng/shangcheng.js
Page({
  data: {

  },
  index: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  shangcheng: function () {
    wx.navigateTo({
      url: '../shangcheng/shangcheng'
    })
  },
  gouwuche: function () {
    wx.navigateTo({
      url: '../gouwuche/gouwuche'
    })
  },
  account: function () {
    wx.navigateTo({
      url: '../account/account'
    })
  },
})