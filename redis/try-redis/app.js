const http = require('http');
const redis = require('redis');
const client = redis.createClient(6379,'192.168.31.128');
let api_limit = 10;
client.set("ljr_key", 10, function(err, obj){
    console.log(obj);
})
http.createServer((req,res)=>{
    if(/^\/api/.test(req.url) >= 0){
        // 响应头 ？
        // 状态码 statuscode
        // 1** 请求进行中...
        // 2** 成功 
        // 3** 跳转
        // 4** 用户端发生错误
        // 5** 服务器
        client.get("ljr_key", function(err,count){
          res.writeHead(200, { // res代表用户访问的响应 响应体
            'Content-Type':'text/json;charset=utf-8'
    })    
        if(count>0){
        client.decrby('ljr_key',1);//减一
        res.end(JSON.stringify({
                name:'ljr',
                count:`你拥有${count}次调用权`
            }))
        }else{
            res.end(JSON.stringify({
            msg:'已达到调用上限，请充值'
        }))
        }
        })  
    }
})
.listen(7001)