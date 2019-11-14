const distributeCandies = (candies) =>{
    //核心 去重 数据结构 有种结构 数组容器 不重复
    const count = new Set(candies) //Set es6提供的去重
    console.log(count.size)
    return Math.min(count.size, candies.length >> 1) //数学对象
}

distributeCandies([1,1,2,2,3,3])