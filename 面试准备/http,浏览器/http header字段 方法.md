# Request header:
1. Accept	指定客户端能够接收的内容类型	Accept: text/plain, text/html
2. Accept-Charset	浏览器可以接受的字符编码集。	Accept-Charset: iso-8859-5
3. Accept-Language	浏览器可接受的语言	Accept-Language: en,zh
4. Accept-Ranges	可以请求网页实体的一个或者多个子范围字段	Accept-Ranges: bytes
5. Cache-Control	指定请求和响应遵循的缓存机制	Cache-Control: no-cache
6. Connection	表示是否需要持久连接。（HTTP 1.1默认进行持久连接）	Connection: close
7. Cookie	HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器。	Cookie: $Version=1; Skin=new;
8. Content-Length	请求的内容长度	Content-Length: 348
9. Content-Type	请求的与实体对应的MIME信息	Content-Type: application/x-www-form-urlencoded
10. Date	请求发送的日期和时间	Date: Tue, 15 Nov 2010 08:12:31 GMT
11. Host	指定请求的服务器的域名和端口号	Host: www.leixuesong.cn
12. If-Match	只有请求内容与实体相匹配才有效	If-Match: “737060cd8c284d8af7aD3082f209582d”
13. If-Modified-Since	如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回304代码	
14. If-None-Match	如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变	
15. Upgrade	向服务器指定某种传输协议以便服务器进行转换（如果支持）	Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
16. User-Agent	User-Agent的内容包含发出请求的用户信息	User-Agent: Mozilla/5.0 (Linux; X11)

# method
1. get
2. post
3. put
4. delete
5. header
6. options
7. trace
8. connect  HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。


# responses header:
1. Accept-Ranges	表明服务器是否支持指定范围请求及哪种类型的分段请求	Accept-Ranges: bytes
Age	从原始服务器到代理缓存形成的估算时间（以秒计，非负）	Age: 12
Allow	对某网络资源的有效的请求行为，不允许则返回405	Allow: GET, HEAD
Cache-Control	告诉所有的缓存机制是否可以缓存及哪种类型	Cache-Control: no-cache
Content-Encoding	web服务器支持的返回内容压缩编码类型。	Content-Encoding: gzip
Content-Language	响应体的语言	Content-Language: en,zh
Content-Length	响应体的长度	Content-Length: 348
Content-Location	请求资源可替代的备用的另一地址	Content-Location: /index.html
Content-Range	在整个返回体中本部分的字节位置	Content-Range: bytes 21010-47021/47022
Content-Type	返回内容的MIME类型	Content-Type: text/html; charset=utf-8
Date	原始服务器消息发出的时间	Date: Tue, 15 Nov 2010 08:12:31 GMT
ETag	请求变量的实体标签的当前值	ETag: “737060cd8c284d8af7ad3082f209582d”
Expires	响应过期的日期和时间	Expires: Thu, 01 Dec 2010 16:00:00 GMT
Last-Modified	请求资源的最后修改时间	Last-Modified: Tue, 15 Nov 2010 12:45:26 GMT
Location	用来重定向接收方到非请求URL的位置来完成请求或标识新的资源	Location: http://www.leixuesong.cn/724
Pragma	包括实现特定的指令，它可应用到响应链上的任何接收方	Pragma: no-cache
Set-Cookie	设置Http Cookie	Set-Cookie: UserID=raykaeso; Max-Age=3600; Version=1
Transfer-Encoding	文件传输编码	Transfer-Encoding:chunked