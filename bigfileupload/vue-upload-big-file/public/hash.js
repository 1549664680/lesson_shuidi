self.importScripts('/spark-md5.min.js')

self.onmessage = e =>{
  // self.postMessage({
  //   "msg":'你好'
  // })
  const { fileChunkList } = e.data;
  const spark = new self.SparkMD5.ArrayBuffer();
  // 计算出hash     
  let percentage = 0
  let count = 0
  const loadNext = index =>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileChunkList[index].file);
    reader.onload = e =>{ // 事件
      count++;
      spark.append(e.target.result)
      if(count === fileChunkList.length){
        self.postMessage({
          percentage:100,
          hash:spark.end()
        });
        self.close();
      }else{
        // 还没读完
        percentage += 100/fileChunkList.length
        self.postMessage({
          percentage
        })
        loadNext(count)
      }
    }
  }
  loadNext(0)
} 
// this 当前的线程