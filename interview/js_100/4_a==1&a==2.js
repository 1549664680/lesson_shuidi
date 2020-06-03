var a = {
  value:0,
  valueof:function(){
    this.value++
    return this.value
  }
}
console.log(a ==1 && a == 2)
// true

let  a = {
  gn:(function* (){
    yield 1;
    yield 2;
    yield 3;
  })(),
  valueOf(){
    return this.gn.next().value 
  }
}
Object.defineProperty(window,'a',{
  get:function(){
    if(this.value){
          return this.value +=1
    }else{
      return this.value = 1
    }

  }
})