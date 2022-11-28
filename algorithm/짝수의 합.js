function solution(n) {
  let num = 0;

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      num = num + i;
    }
  }
  return num;
}
