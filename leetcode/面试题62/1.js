var lastRemaining = function(n, m) {
  const arr = [];
  for(let i = 0; i < n; i++) arr.push(i);
  let head = 0;
  while(arr.length > 1) {
      head = (head + m - 1) % arr.length;
      arr.splice(head, 1);
  }
  return arr[0]; 
};

console.log(lastRemaining(5,3))