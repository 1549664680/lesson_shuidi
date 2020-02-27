var longestPalindrome = function(s) {
  var new_s = '#' + s.split('').join('#') + '#'
  // console.log(new_s)
  var res = ""; 
  var temp = "";
  var len = s.length;  
  for(var i = 0;i<len; i++){
    for(var j = i; j<len ;j++){
      temp = temp + s[j]
      var tem = temp.split("").reverse().join("")
      if(tem == temp){
        res = res.length>temp.length?res:temp
      }
      
    }   
    temp = ""
  }
  return res
};

console.log(longestPalindrome("ranynar"))