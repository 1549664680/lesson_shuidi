Page({
  scanCode() {
    wx.scanCode({
      onlyFromCamera: true,
      scanTupe:['barCode'],
      success: res =>{
          let isbn = res.result;
          // isbn ->到yun里查一下
          // 委派一朵云去查API
          wx.cloud.callFunction({
            name: 'bookinfo',
            data:{
              isbn:isbn
            },
            success: res =>{
              console.log(res.result);
            }
          })
      }
    })
  }
})