var cloud = require('wx-server-sdk'); //云服务器

var rp = require('request-promise');  // npm 向API发出请求

cloud.init();

exports.main = async(event,context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=573a00ab88301c3b797e22f27f8f56cb`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=573a00ab88301c3b797e22f27f8f56cb`).then(html =>{
    return html;
  })
  return res;
}
