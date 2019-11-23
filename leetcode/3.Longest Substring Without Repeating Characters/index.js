var lengthOfLongestSubstring = function(s) {
       var max=0;
       var arr
    for(var i=0;i<s.length;i++){    
        var count=1;
        arr=s[i];
        for(var j=i+1;j<s.length;j++){
            if(arr.indexOf(s[j])==-1){
                arr = arr + s[j]
                count++;
            }
            else
            { 
            break
            }
        }
        max = count>max?count:max
    }
   return max
};
console.log(lengthOfLongestSubstring("pwwkew"))