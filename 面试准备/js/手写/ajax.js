function ajax({
  url = '',
  method = 'get',
  headers = {},
  data = ''
}){
  return new Promise((resolve,reject) =>{
    let xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject();
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
          try{
            let response = xhr.responseText
            resolve(response)
          } catch(e){
            reject(e)
          }
        }else{
          reject(new Error(xhr.statusText))
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
ajax({url :'http://47.95.145.164:7001/default/getTypeInfo'})
.then((res)=>{
  console.log(res)
})