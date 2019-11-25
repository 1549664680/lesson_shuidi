//mongodb 数据库驱动 mysql
var MongoClient = require('mongodb').MongoClient;
//mongodb连接是用mongobd:// 协议来 27017端口
//mysql 3306
var url = 'mongodb://192.168.31.128:27017/runoob';
MongoClient.connect(url,{
    useNewUrlParser:true
},function(err,db){
    if(err){
        throw err;
    }
    // console.log('数据库已创建！');
    var dbbase = db.db('runoob');
    // 查询数据库是异步的？ 回调方案
    // dbbase.createCollection('ljr_site',function(err,res){  
    //     //回调函数先处理错误
    //     if (err){
    //         throw err;
    //     }
    //     console.log('创建了集合');
    //     db.close();//需要写在这里
    // })
    //db.close() 不能写在这里 异步的 createCollection需要时间 还没执行完，就会关掉数据库，产生错误

    // // 插入数据
    // // JSON object
    // var myObj = {
    //     name:'兰',
    //     url: 'www.runoob'
    // }
    // dbbase
    //     .collection('ljr_site')
    //     .insertOne(myObj, function(err,res){
    //         if(err){
    //             throw err
    //         }
    //         console.log('文档插入成功')
    //         db.close()
    //     })

    dbbase
        .collection('ljh_site')
        .find()
        .toArray(function(err,res){
            if(err){
                throw err
            }
            console.log(res)
            db.close()
        })
})