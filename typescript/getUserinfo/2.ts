const getUserInfo2 = function(user : {name:string,age:number}){ // js 参数随意
  // arguments 
  return `name:${user.name},age:${user.age}`
}
console.log(getUserInfo2({name:'lan',age:18}))