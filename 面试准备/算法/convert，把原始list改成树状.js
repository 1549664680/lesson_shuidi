function convert(list) {
	const res = []
  const map = list.reduce(
    (res, v) => (res[v.id] = v,res), {})
	for (const item of list) {
		if (item.parentId === 0) {
			res.push(item)
			continue
		}
		if (item.parentId in map) {
      console.log(item.parentId)
			const parent = map[item.parentId]
			parent.children = parent.children || []
			parent.children.push(item)
		}
	}
	return res
}
let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
];
 convert(list)

// 总结 其实就是一个引用的问题，res中只要存放parentId为0的就行,
// 然后这个parentId为0的父节点中的child属性会有其他节点的引用
// 比如节点8，它会插到他的父节点4，那父节点4又会插到他的父节点1
