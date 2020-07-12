function ajax({
  url='',
  method = 'get',
  headers = {},
  data = ''
}){
  return new Promise((resolve,reject)=>{
    var xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');//code for IE6, IE5
    xhr.onreadystatechange = function(){  // 服务器给XMLHttpRequest发送响应时触发
      if(xhr.readyState === 4){ 
        // 状态4表示完成 ,可以访问发回来的数据了
        // 3 正在交互 
        // 2 加载完毕
        // 1 正在加载
        // 0 未初始化
        if(xhr.status >=200 && xhr.status < 300 || xhr.status === 304){
          try {
            var response = JSON.parse(xhr.responseText);
            resolve(response)
          } catch (e) {
            reject(e)
          }
        }else{
          reject(new Error('Request failed: ' + xhr.statusText))
        }
      }
    }
    xhr.open(method,url,true);
    for(let key in headers){
      xhr.setRequestHeader(key,headers[key])
    }
    xhr.send(JSON.stringify(data))
  })
}