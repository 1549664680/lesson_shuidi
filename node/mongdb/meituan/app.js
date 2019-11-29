const express = require('express');//node的开发框架
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://192.168.31.129:27017/meituan';
let dbo;
MongoClient.connect(url,{
    useNewUrlParser:true,
},function(err,db){
    if(err){
        console.error(err);
    }
    dbo =db;
    console.log('数据库连接成功')
})
const app = express();
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json({}))

app.get('/',function(req,res){
    res.send({
        code: 0,
        message: 'hello world'
    })
})
app.get('/restaurant/:restaurant_id', (req, res) => {
    let restaurant_id = req.params.restaurant_id;
    let dboObject = dbo.db('meituan');
    dboObject
        .collection('restaurant')
        .find({
            _id: ObjectID(restaurant_id)
        })
        .toArray((err,result)=>{
        // res.send({
        //     msg: 'OK',
        //     data: result[0]
        // }) 
        res.render('index',{
            restaurant:result[0]
        })
        })

})
app.post('/restaurant',(req,res)=>{
    //拿一下用户填的表单req.body
    console.log(req.body)
    let dboObject = dbo.db('meituan')
    dboObject
        .collection('restaurant')
        .insertOne(req.body,(req,result)=>{
            console.log(result.insertedId)
        })
    res.send({
        code:0,
        data:req.body,
    })
})
app.listen(7000);