var waysToChange = function (n) {
  let coins = [1, 5, 10, 25]
  let res = new Array(n + 1).fill(0).fill(1, 0, 1)
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= n; j++) {
      res[j] = (res[j] + res[j - coins[i]]) % 1000000007
      // 当前的金额数 j 减去当前的币值 这个差值在res中的兑换方法数 加上原本j可以兑换的方法数
      // 每一次计数，都是在原本的基础上进行 当金额为10 时  res[10-10] =1 只能用10分兑换一次 res[10]原本是=3 因为 5+5 1.+1. 1..+5
    }
    // console.log(res)
  }
  // console.log(res)
  return res[n]
};
console.log(waysToChange(26))