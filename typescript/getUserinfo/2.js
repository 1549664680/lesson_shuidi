var getUserInfo2 = function (user) {
    // arguments 
    return "name:" + user.name + ",age:" + user.age;
};
console.log(getUserInfo2({ name: 'lan', age: 18 }));
