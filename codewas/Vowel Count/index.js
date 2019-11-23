function getCount(str) {
return (str.match(/[aeiou]/ig)||[]).length; //i 忽略大小 g 全局搜索  搜索[aeiou]中的任意一个 
}


function getCount(str) {
return str.replace(/[^aeiou]/gi, '').length;
}

function getCount(str) {
    var vowelsCount = 0;
    var arr = ['a','e','i','o','u']
    for(var i=0;i<str.length;i++){
      if(arr.indexOf(str[i]) != -1){
      ++vowelsCount
      }
    }
    return vowelsCount;
  }