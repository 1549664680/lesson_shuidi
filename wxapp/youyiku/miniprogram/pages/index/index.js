const db=wx.cloud.database();
const productsCollection=db.collection('products');
Page({
  data: {
    active1: 0,
    active2: 0,
    showModal: false,
    imgUrls:[
      "https://6c61-lan-pxbyd-1300705441.tcb.qcloud.la/swiper1.jpg?sign=3f3f33b5048385ec80d6ee9fe719caed&t=1575118473",
      "https://6c61-lan-pxbyd-1300705441.tcb.qcloud.la/swiper2.jpg?sign=b75476688239824668c43f6a7b58c0f1&t=1575118585",
      "https://6c61-lan-pxbyd-1300705441.tcb.qcloud.la/swiper3.jpg?sign=41ad8e7b135a28c71b3056acc49ef50a&t=1575118605",
      "https://6c61-lan-pxbyd-1300705441.tcb.qcloud.la/swiper4.jpg?sign=67a7a95f1217fa87313e2924f30a4f1a&t=1575118618",
      "https://6c61-lan-pxbyd-1300705441.tcb.qcloud.la/swiper5.jpg?sign=7246aff6bc4916ca43329eeb737faae8&t=1575118632",
      "https://6c61-lan-pxbyd-1300705441.tcb.qcloud.la/swiper6.jpg?sign=9688fe3f850e605a27c4a9ad611546d8&t=1575118647",
      "https://6c61-lan-pxbyd-1300705441.tcb.qcloud.la/swiper7.jpg?sign=880ea7f8744203450f52a660dfccee32&t=1575118657"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000, 
  },
onLoad(){
    productsCollection
    .get()
    .then(res=>{
        this.setData({
            products:res.data
        })
    })
},
onChange1(event) {
    this.setData({ active1: event.detail });
},
onChange2(event) {
  this.setData({ active2: event.detail });
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
  kefu: function() {
    this.setData({
    showModal: true
    })
  },
  go: function() { 
    this.setData({
    showModal: false
    })
  }
});
