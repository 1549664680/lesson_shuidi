var getMaxRepetitions = function(s1, n1, s2, n2) {
	
	arr1 = s1.split("");
	arr2 = s2.split("");

	let index = 0; // 匹配s2字符串中的位置
    let cnt = 0; // 出现的总次数
    for(let i=0; i<n1; i++) {
        for(let j=0; j<arr1.length; j++) {
            if(arr1[j] == arr2[index]) {
                index++;
            }
            // 匹配一个，重置s2
            if(index == arr2.length) {
                index = 0;
                ++cnt;
            }
        }
    }
	return parseInt(cnt/n2)
};
