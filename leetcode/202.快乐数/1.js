function trans(n) {
  let num = 0;
  n = n.toString().split("")
  n.forEach(element => {
    num += parseInt(element) * parseInt(element)
  });
  return num
}
var isHappy = function (n) {
  let slow = trans(n),
    fast = trans(trans(n));
  while (slow != fast) {
    slow = trans(slow)
    fast = trans(trans(fast))
  }
  return slow === 1
};
console.log(isHappy(19))