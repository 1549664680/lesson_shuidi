- NOSQl
  MTSQL 关系型数据库， 
  database->table->fields
  NOSQL 不需要写SQL语句 
  JSON object{} .save()
  find({})
  碎片化的 ，结构型并不是很良好的数据库
  MongoDB 云开发数据库就是线上版的数据库

- MMYSQL                MONGODB
  关系型数据库           NOSQl   Facebook
  show databases;       show dbs;
              use db;
  tables;               collections;
  SQL                   js语法的面向对象api

- 连接mongodb
  url mongodb://
- db.createCollection('site',funvtion(err,res){
    // err 出错
    //异步的，耗时的，
    js 里执行的代码不会阻塞
    db.close();
})
  代码顺序
  1. createCollection
  2. db.close() 在外面
  执行顺序
  1. create -> 去到mongodb ->create -> 回来跟我说
  2. 接着往后执行

- 数据库 ，后端开发框架
  express 
  node, 后端就是app
  app.get('/',(req,res)=>res.send('hello world'))
  app.listen(3000,)