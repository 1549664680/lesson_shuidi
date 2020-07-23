# ajax

1. 
# axios axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端
语法上Axios基本就和promise一样, 在then方法中处理回调, 在catch方法中处理异常. 如下:
// 向具有指定ID的用户发出请求
1. get
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
// 也可以通过 params 对象传递参数
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
2. post
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
3. 执行多个并发请求 axios.all