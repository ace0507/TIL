function solution(numbers) {
  let arr = numbers;
  let result = arr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  let average = result / arr.length;
  return average;
}
