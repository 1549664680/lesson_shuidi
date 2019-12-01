const db=wx.cloud.database();//上云
const productsCollection=db.collection('youyiku');//表 collection 
Page({
    addData(){
        //api
        productsCollection.add({
            data:{
                image:'../image/swiper1'
            }
        })
    }
})