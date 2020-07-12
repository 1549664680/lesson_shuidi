// let jsonp = function (url, data = {}, callback) {
//   // 转化数据为url字符串形式
//   let dataStr = url.indexOf('?') === -1 ? '?' : '&'
//   for(let key in data) {
//     dataStr += `${key}=${data[key]}&`
//   }
//   // 处理url中的回调函数
//   let cb_name = 'jsonpCallback'
//   dataStr += 'callback=' + cb_name
//   // 创建srcipt标签并添加src属性值
//   let scriptBody = document.createElement('script')
//   scriptBody.src = url + dataStr
//   // 在全局对象上挂载回调函数
//   window[cb_name] = function(data) {
//     callback(data)
//     document.body.removeChild(scriptBody)
//   }
//   // append到页面中 添加到页面就立刻发起请求
//   document.body.appendChild(scriptBody)
// }


const jsonp = ({ url, params, callbackName }) => {
  const generateURL = () => {
    let dataStr = '';
    for(let key in params) {
      dataStr += `${key}=${params[key]}&`;
    }
    dataStr += `callback=${callbackName}`;
    return `${url}?${dataStr}`;
  };
  return new Promise((resolve, reject) => {
    // 初始化回调函数名称
    callbackName = callbackName || Math.random().toString.replace(',', ''); 
    // 创建 script 元素并加入到当前文档中
    let scriptEle = document.createElement('script');
    scriptEle.src = generateURL();
    document.body.appendChild(scriptEle);
    // 绑定到 window 上，为了后面调用
    window[callbackName] = (data) => {
      resolve(data);
      // script 执行完了，成为无用元素，需要清除
      document.body.removeChild(scriptEle);
    }
  });
}