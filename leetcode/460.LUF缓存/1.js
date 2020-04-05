// var LFUCache = function(capacity) {
//   this.capacity = capacity
//   this.list = capacity
//   this.usetimes = new Map()
//   this.keyvalue = new Map();
//   this.lessuse = 99;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LFUCache.prototype.get = function(key) {
//   // cache.keyvalue.forEach((value,key)=>{
//   //   this.usetimes.set(key,this.usetimes.get(key)-1)
//   //   this.lessuse = Math.min(this.lessuse,this.usetimes.get(key))
//   // })
//   if(this.keyvalue.has(key)){
//     this.usetimes.set(key,this.usetimes.get(key)+1) // get 使用了 使用次数加一
//     return this.keyvalue.get(key)
//   }else{
//     return -1;
//   }
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LFUCache.prototype.put = function(key, value) {
//   // console.log(this.lessuse,'====')
//   // cache.keyvalue.forEach((value,key)=>{
//   //   this.usetimes.set(key,this.usetimes.get(key)-1)
//   //   this.lessuse = Math.min(this.lessuse,this.usetimes.get(key))
//   // })
//   if(this.capacity === 0){return -1}
//   if(this.list === 0){
//     if(this.keyvalue.has(key)){
//       this.keyvalue.set(key,value) // 更新值，使用次数加一
//       this.usetimes.set(key,this.usetimes.get(key)+1)
//     }else{
//       var i=0
//       this.keyvalue.forEach((value,key)=>{ // 删除最开始等于使用次数等于的key
//         if(this.usetimes.get(key) === this.lessuse){
//           this.keyvalue.delete(key)
//           this.usetimes.delete(key)
//           i++
//         }
//       })
//       if(i===0){
//         var j=0
//         this.keyvalue.forEach((value,key)=>{ // 删除最开始等于使用次数等于的key
//           if(j==0){
//             this.keyvalue.delete(key)
//             this.usetimes.delete(key)
//             j++
//           }
//         })
//       }
//       this.keyvalue.set(key, value)
//       this.usetimes.set(key,this.usetimes.has(key)?this.usetimes.get(key)+1:1)
//       this.lessuse = Math.min(this.lessuse,this.usetimes.get(key))
//     }
//   }else{
//     this.keyvalue.set(key, value)
//     this.usetimes.set(key,this.usetimes.has(key)?this.usetimes.get(key)+1:1)
//     this.lessuse = Math.min(this.lessuse,this.usetimes.get(key))
//     this.list --
//   }
// };

// /**
//  * Your LFUCache object will be instantiated and called as such:
//  * var obj = new LFUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */
// var cache = new LFUCache( 2 );
// cache.put(1, 1);
// cache.put(2, 2);
// // console.log(cache.usetimes.get(1),cache.usetimes.get(2),cache.lessuse,'=')
// console.log(cache.get(1));       // 返回 1
// // console.log(cache.usetimes.get(1),cache.usetimes.get(2),cache.lessuse,'=')
// console.log(cache.put(3, 3))    // 去除 key 2
// console.log(cache.get(2))      // 返回 -1 (未找到key 2)--------- -1
// console.log(cache.get(3))       // 返回 3
// console.log(cache.put(4, 4))    // 去除 key 1
// // console.log(cache.usetimes.get(1),cache.usetimes.get(3),cache.lessuse,'=')
// console.log(cache.get(1))       // 返回 -1 (未找到 key 1)-------- -1
// console.log(cache.get(3))       // 返回 3
// console.log(cache.get(4))       // 返回 4




//失败