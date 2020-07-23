// 观察者模式
// 观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，所有依赖它的对象 Observer 都会得到通知。
// 优势：目标者与观察者，功能耦合度降低，专注自身功能逻辑；观察者被动接收更新，时间上解耦，实时接收目标者更新状态。
// 缺点：观察者模式虽然实现了对象间依赖关系的低耦合，但却不能对事件通知进行细分管控，如 “筛选通知”，“指定主题事件通知” 。
class Subject {
  constructor(){
    this.Observers = [];
  }
  add(Observer){
    this.Observers.push(Observer);
  }
  remove(Observer){
    let idx = this.Observers.indexOf(Observer)
    idx > -1 && this.Observers.splice(idx,1);
  }
  notify(){
    for(let observer of this.Observers){
      observer.update();
    }
  }
}
class Observer{
  constructor(name){
    this.name = name;
  }
  update(){
    console.log(`${this.name}收到消息`)
  }
}
let subject = new Subject();
let obs1 = new Observer('js')
let obs2 = new Observer('java')
subject.add(obs1)
subject.add(obs2)
subject.remove(obs1)
subject.notify()

// 发布订阅模式
let pubSub = {
  list:{},
  subscribe:function(key,fn){  // 订阅
    if(!this.list[key]){
      this.list[key] = [];
    }
    this.list[key].push(fn)
  },
  publish:function(key,...arg){ // 发布
    for(let fn of this.list[key]){
      fn.call(this,...arg)
    }
  },
  unSubscribe:function(key,fn){ // 取消订阅
    let fnlist = this.list[key]
    if(!fnlist){return false} // 不存在这个事件就return
    if(!fn){  // 不指定取消哪个订阅 就全部取消
      fnlist.length = 0 ; 
    }else{    
      fnlist.forEach((item,index) => {
        if(item === fn){
          fnlist.splice(index,1);
        }
      });
    }
  }
}
// 先订阅了这个事件，然后发布了这个事件我就做我自己的
pubSub.subscribe('onwork',time =>{
  console.log(`上班了： ${time}`)
})
pubSub.subscribe('offwork',time =>{
  console.log(`下班了： ${time}`)
})
pubSub.subscribe('launch',time =>{
  console.log(`吃饭了： ${time}`)
})

pubSub.publish('onwork','9:00:00')
pubSub.publish('onwork','10:00:00')
pubSub.publish('offwork','18:00:00')
pubSub.unSubscribe('onwork')
