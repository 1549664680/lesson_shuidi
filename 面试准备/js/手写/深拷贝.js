function checkedType(target){
  return Object.prototype.toString.call(target).slice(8,-1)
}
function clone(target){
  let result,targetType = checkedType(target)
  if(targetType === 'Object'){
    result = {}
  }else if(targetType === 'Array'){
    result = []
  }else{
    return target
  }
  for(let i in target){
    let value = target[i]
    if(checkedType(value) === 'Object' || checkedType(value) === 'Array'){
      result[i] = clone(value)
    }else{
      result[i] = value
    }
  }
  return result
}