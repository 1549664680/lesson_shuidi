var compressString = function(S) {
  var res = [];
  var temp = [S[0]];
  var len = S.length;
  if(len<3){
    return S
  }
  for (var i = 1; i<= len; i++){
    if(temp[temp.length-1] == S[i]){
      temp.push(S[i]);
    }else{
      res.push(temp[0]);
      res.push(temp.length)
      temp = [];
      temp.push(S[i]);
    }
  }
  if( res.join('').length<S.length){
    return  res.join('');
  }
  return S;
};
console.log(compressString("bbbaadadc"))