// 手写promise
function myPromise(constructor){
  let self = this
  self.status = "pending";
  self.value = undefined;
  self.reason = undefined;
  function resolve(value){
    if(self.status === "pending"){
      self.value = value;
      self.status = " resolved"
    }
  }
  function reject(reason){
    if(self.status === "pending"){
      self.reason = reason;
      self.status = " reject"
    }
  }
  try{
    constructor(resolve,reject);
  }catch(e){
    reject(e)
  }
}
myPromise.prototype.then = function(onFullfilled,onRejected){
  let self = this;
  switch(self.status){
    case "resolved":
      onFullfilled(self.value);
      break;
    case "rejected":
      onRejected(self.reason);
      break;
    default:
  }
}

Promise.all = arr => {
  let aResult = [];    //用于存放每次执行后返回结果
  return new _Promise(function (resolve, reject) {
    let i = 0;
    next();    // 开始逐次执行数组中的函数(重要)
    function next() {
      arr[i].then(function (res) {
        aResult.push(res);    // 存储每次得到的结果
        i++;
        if (i == arr.length) {    // 如果函数数组中的函数都执行完，便resolve
          resolve(aResult);
        } else {
          next();
        }
      })
    }
  })
};
function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';  
}

const myPromiseRace = (arr)=>{
  return new Promise((resolve,reject)=>{
      if(arr.length === 0){
          return 
      }else{
          for(let item of arr){
              if(isPromise(item)){
                  item.then((data)=>{
                      resolve(data);
                  },reject);
              }else{
                  resolve(item);
              }
          }
      }
  })
}
