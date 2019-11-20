[1,2,3,1]
?不能够相邻的偷
最对的钱？
4 
1 偷了 2 不能偷 
偷 3 或 1
    ABCD 动态规划算法
选A   不选择A
 CD      BCD
        B  CD

每个位置中最大的值决策是这样的？
i=0  Math.max( , )?
nums [1,2,3,1]
dp[i] = Math.max(nums[i]+dp[i-2],dp[i-1])