const getUserInfo = function(user){ // js 参数随意
  // arguments 
  return `name:${user.name},age:${user.age}`
}
// js 不会做运行前检测， 动态语言 java ， ts  静态语言
 // 先编译在运行 ts 检测语法，
 // 多人协作时 不严格的语法 会带来麻烦
console.log(getUserInfo({name:'lan'}))