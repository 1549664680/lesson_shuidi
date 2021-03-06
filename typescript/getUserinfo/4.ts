// 自定义函数类型
type IUserInfoFunc = (user:IUser) => string;


interface IUser {
  name:string;
  age:number;
}


const getUserInfo4:IUserInfoFunc = (user) => {
  return `name:${user.name} , age:${user.age}`
}
getUserInfo4({name:'lan',age:18})