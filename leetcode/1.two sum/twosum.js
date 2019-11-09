/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} 
 */
var twoSum = function(nums, target) {
    var result=[];
    // for(let i=0,num=nums.length;i<num;i++){//双重循环暴力破解最为致命，不可取
    //     for(let j=i+1;j<num;j++){
    //         if(nums[i]+nums[j]==target){
    //             result.push(i);
    //             result.push(j);   
    //              return result;
    //         }
    //     }
    // }
    for(let i=0,num=nums.length;i<num;i++){
        var next=nums.indexOf(target-nums[i]);//寻找另一个数
        if(next!=-1&&next!=i){//找到并且不等于自身
            result.push(i);
            result.push(next);   
            return result;
        }
    }
};
    var nums=[3,2,4];
    var target=6;
    console.log(twoSum(nums,target));