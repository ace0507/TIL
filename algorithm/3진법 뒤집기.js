function solution(n) {
  n = n.toString(3).split("").reverse().join("");
  return parseInt(n, 3);
}
