// interface 不太好理解
// 基础类型 在多个地方使用 ，就用的到interface
// const getUserInfo3 = (user:{name:string,age:number}):string => {
//   return 
// }
 interface IUser {
  name:string;
  age:number;
}
const getUserInfo3 = (user:IUser):string => {
  return `name:${user.name} , age:${user.age}`
}
console.log(getUserInfo3({name:'lan',age:18}))