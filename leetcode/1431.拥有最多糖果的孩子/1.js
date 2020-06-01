/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandy = 0
    candies.forEach(candy=>{
      maxCandy = maxCandy<candy?candy:maxCandy
    })
    let resList = []
    candies.forEach(candy=>{
      if(candy+extraCandies>=maxCandy){
        resList.push(true)
      }else{
        resList.push(false)
      }
    })
    return resList
};