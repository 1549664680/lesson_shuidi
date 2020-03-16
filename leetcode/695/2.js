var a = function(){
  var x = 0;
  x=b(x)
  return x;
}
var b = function(x){
  x = 2
  return x
}
console.log(a())