## 一
  1.js中不论宽字节还是单字节都认为是一个字符串
  
  2.为什么需要buffer对象：在node中，应用需要处理网络协议，操作数据库，处理图片，接受上传文件等，在网络流和文件的操作中，还要处理大量的二进制数据，js中自有的字符串远远不能满足这些需求，所以buffer对象应运而生
## 二
  buffer是一个像Array的对象，主要用于操作字节。
  1. buffer的结构 
    buffer是js与c++结合的模块  
    buffer所占用内存不是通过v8分配，属于堆外内存  
    let buf = new Buffer(str,'utf-8'), 可以通过buf.length得到长度  
    如果给元素赋值不是0到255的整数，如果小于0，该值逐次加256，知道在0到255之间，如果大于255，逐次减256，如果是小数，舍弃小数部分  
    采用slab分配机制，是一种动态内存管理机制。  
    以8kb为界限，区分是大对象还是小对象，8kb也就是slab的大小值，它作为单位单元进行内存分配。
    使用一个局部变量pool作为中间处理对象，slab单元都指向它  
    var pool
    function allocPool(){
      pool = new SlowBuffer(Buffer.poolSize); // SlowBuffer 大对象 Buffer 小对象
      pool.used = 0
    }  
    单创建一个Buffer对象时，判断slab空间是否足够，够，使用剩余空间，更新分配状态，  
    如果不够，创建新的slab，原slab空间造成浪费。  
    只有当slab中的所有Buffer对象的作用域释放并且可以回收时，slab的8kb才能回收。  
    小结，真正的内存是在node的c++层面提供的，js层面只是使用它，对于小的频繁的buffer操作，采用slab机制进行申请和分配，对于大的buffer，直接使用c++层面提供的，无需细腻的分配操作。  
  2. buffer的转换
    字符串转buffer new Buffer(str,[encoding])  
    可以存储不同编码类型的字符串转码的值 使用write buf.write(string,[offset,[length],[encoding]])  
    buffer转字符串 buf.tostring([encoding],[start],[end])  
    node中的buffer支持的编码类型有限Buffer.isEncoding(encoding)判断是否支持此编码  
    借助node生态圈完成转化， iconv 和 iconv-lite 两个可以支持更多编码类型的转换  
    iconv-lite 純js实现 iconv则是c++调用libiconv库完成，前者更轻量 純js的iconv-lite性能更好  
    示例： 
    ```
        var iconv = require('iconv-lite')
          var str = iconv.decode(buf,'win1251') buffer->string
          var str = iconv.encode('sample inout value','win1251') string->buffer
    ```
  3. buffer的拼接
    通常以一段一段的方式传输，
    示例部分代码 
    ```
        var rs = fs.reacteReadStream('test.md')
                var data = ''
                rs.on('data',function(chunk){
                  data + = chunk   // 错误的地方，等价于 data = data.toString() + chunk.toString()
                })
    ```
    错误的是，容易将buffer当做字符串理解，一旦输入流中有宽字节，问题就出来了，
    限定长度为11时，读取一首古诗 输出 床前明？？？光
    上面的toString() 默认为UTF-8编码，中文占三个字节，所以剩下的两个字节以乱码的形式显示。
    虽然限制了11为长度，但试想一下，无论多长，都可能被截断，只是越长概率越低，但此问题不可忽视
    设置编码方式
    readable.setEncoding(encoding) 作用是让data事件中传递的不再是一个buffer对象，而是编码后的字符串
    调用setEncoding()时 ，在可读流内部设置一个decoder对象，进行buffer到字符串的解码
    前9个字节形成字符，二后面两个将会被保留，与后续的11个字节组合在一起
    setEncoding并非万能药，只能支持utf8，base64，utf-16le
    +=方式显然不行，正确拼接方式
    ```
        var chunks = []
        var size = 0;
        rs.on('data',function(chunk){
          chunks.push(chunk)
          size +=chunk.length
        }
        res.on('end',funciton(){
          var buf = Buffer.concat(chunks,size);
          var str = iconv.decode(buf,'utf8)
        })
    ```
  4. buffer性能
    相比直接传输字符串，通过预先静态转换内容为buffer对象，可以有效减少cpu的重复使用
