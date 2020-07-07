/**
 * @param {number[][]} M
 * @return {number}
 */
// dfs
var findCircleNum = function (M) {
  const visited = new Array( M.length ).fill(0);
  let res = 0;
  for (let i = 0; i < visited.length; i++) {
    if(!visited[i]){
      visited[i] = 1
      dfs(i); // 找一下 i的朋友
      res++
    }
  }
  function dfs(i){ 
    for(let j=0;j<M.length;j++){
      if( i !== j && !visited[j] && M[i][j]){ // i的盆友j找到了
        visited[j] = 1; 
        dfs(j) // 顺着j找下去，j的盆友就是我i的盆友
      }
    }
  }

  return res
};

// bfs
var findCircleNum = function (M) {
  let visited = new Array(M.length).fill(0);
  let res = 0;
  let queue = []
  for(let i=0;i<visited.length;i++){
    if(!visited[i]){
      visited[i] =1 ;
      res++
      queue.push(i)  // 找i的盆友
    }
    while(queue.length){
      let cur = queue.shift()  // 需要找盆友的队列，第一个先来
      for(let j=0;j<M.length;j++){
        if(cur!== j && !visited[j] && M[cur][j]){ // 找到了cur的盆友
          queue.push(j) // 先去后面排着队吧，等下找你的朋友
          visited[j] = 1
        }
      }
    }
  }
  return res
}
console.log(findCircleNum(
  [[1,1,0],
  [1,1,0],
  [0,0,1]]))