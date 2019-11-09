function lengthOfLongestSubstring(s) {
    let maxlength=1;
    for(var i=0;i<s.length;i++)
        {
            var count=1;
            for(var j=i+1;j<s.length;j++)
                {
                    for(var k=i;k<j;k++)
                        {
                            if(s.charAt(j)==s.charAt(k))
                                break;
                        }
                    if(k==j)
                        {
                            count++;
                        }
                    else
                        break;
                    
                }
            if(count>=maxlength)
                maxlength=count;
        }
    if(s=="")
        maxlength=0;
    return maxlength;
}
console.log(lengthOfLongestSubstring("afsade"))