# leetcode 在线学习算法最好平台
- 30 道算法题，基本满足一线算法学习的过程
- leetcode 跟github一样，记录算法学习的过程
- 875 爱吃香蕉的珂珂

N 堆香蕉 每把香蕉有piles[i]只香蕉
- 选择了一个合适的数据结构，数组[,,,,]
- H小时后回来
- 每个小时吃多少只，吃完，
  每小时选择一堆香蕉，吃其中的K根，一小时内只能吃一把香蕉
  一个小时内不能吃完两把香蕉
  求 H小时内吃掉香蕉的最小速度 K
  [3,6,7,11] H=8
  - 通过例子找到规律
  [30,11,23,4,20] H = 5  30
  [30,11,23,4,20] H = 6 

  - 二分查找法
    传统查找时间复杂度是 O(n),
    二分查找时间复杂度是O(log2N)