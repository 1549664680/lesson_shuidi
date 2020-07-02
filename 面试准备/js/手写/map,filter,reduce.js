// 1. map
function map(arr, mapcallback) {
  if (!Array.isArray(arr) || !arr.length || typeof mapcallback !== 'function') {
    return [];
  } else {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(mapcallback(arr[i]), i, arr);
    }
    return result;
  }
}

// 2. filter
function filter(arr,filtercallback){
  if(!Array.isArray(arr) || !arr.length || typeof filtercallback !== 'function'){
    return [];
  }else{
    let result = [];
    for(let i =0;i<arr.length;i++){
      if(filtercallback(arr[i],i,arr)){
        result.push(arr[i]);
      }
    }
    return result;
  }
}

// 3.reduce
function reduce(arr,reduceCallBack,initalValue){
  if(!Array.isArray(arr) || !arr.length || typeof filtercallback !== 'function'){
    return [];
  }else{
    let hasInitalValue = initalValue !== undefined;
    let value = hasInitalValue?initalValue:arr[0];
    for(let i = hasInitalValue?1:0;i<arr.length;i++){
      value = reduceCallBack(value,arr[i],i,arr)
    }
    return value
  }
}