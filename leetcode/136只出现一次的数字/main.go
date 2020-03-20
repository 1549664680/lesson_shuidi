package main

import "fmt"

// func singleNumber(nums []int) int {
// 	m := make(map[int]int)
// 	for _, v := range nums {
// 		// fmt.Printf("%d\n", v)
// 		_, ok := m[v] //检测一下 hashMap 有这个K吗
// 		// fmt.Println(ab, ok)
// 		if ok {
// 			delete(m, v)
// 		} else {
// 			m[v] = 1
// 		}
// 	}
// 	for k := range m {
// 		return k
// 	}
// 	return 0
// }
func singleNumber(nums []int) int {
	res := 0
	for _, n := range nums {
		//异或操作
		res ^= n
	}
	return res
}
func main() {
	fmt.Printf("%d", singleNumber([]int{4, 1, 2, 1, 2}))
}
