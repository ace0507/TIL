function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}

function solution(numbers) {
  let result = numbers.map((i) => i * 2);
  return result;
}
