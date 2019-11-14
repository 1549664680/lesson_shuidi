/**
 * 
 * @param {Array length even} candise 
 * @param {number} count
 */
var disteibuteCandies = (candise) =>{
    let count = 0
    // 1.种类数，unique
    // 出现过得？
    let obj = {} //对象字面量
    // candise.forEach(item =>{
    //     console.log(item)
    // })
    for (let item of candise){
        // console.log(item)
        if(!obj[item]){
            obj[item]=1;
            count++
        }
    }
    // if(count >candise.length/2){
    //     return candise.length/2
    // }else{
    //     return count
    // }
    return (count >=candise.length>>1)?candise.length>>1:count //>> 右位移运算符 
}
console.log(disteibuteCandies([1,1,2,2,3,3]))