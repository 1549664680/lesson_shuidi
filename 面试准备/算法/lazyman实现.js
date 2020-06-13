
class LayManclass {
  constructor(name){
    this.tasklist = [];
    this.name = name;
    console.log(`Hi I am ${this.name}`);
    setTimeout(()=>{ // 不加timeout,立即next的话，此时的任务队列是没有任务的
      this.next()
    },0)
  }
  eat(food){
    let that = this;
    let fn = (function(n){
      return function(){
        console.log(`I am eating ${n}`)
        that.next()
      }
    })(food)
    this.tasklist.push(fn)
    return this
  }
  sleepFirst(time){
    let that = this;
    let fn = (function(t){
      return function(){  
        setTimeout(()=>{
          console.log(`等待了${t}秒...`)
          that.next();
        },t*1000)
      }
    })(time)
    this.tasklist.unshift(fn)
    return this
  }
  sleep(time){
    let that = this;
    let fn = (function(t){
      return function(){  
        setTimeout(()=>{
          console.log(`等待了${t}秒...`)
          that.next();
        },t*1000)
      }
    })(time)
    this.tasklist.push(fn)
    return this
  }
  next(){
    let fn = this.tasklist.shift()
    fn && fn()
  }
}
function LazyMan(name) {
  return new LayManclass(name);
}
// 每次调用完函数，都要返回this，是的下次.可以调用
// 每个任务都调用next使得下次任务得以进行
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food