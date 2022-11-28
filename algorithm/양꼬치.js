function solution(n, k) {
  let num1 = n * 12000;
  let num2 = k * 2000;
  let service = parseInt(n / 10);

  return num1 + num2 - service * 2000;
}
