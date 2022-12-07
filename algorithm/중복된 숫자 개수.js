function solution(array, n) {
  let count = 0;

  for (const value of array) {
    if (value === n) {
      count++;
    }
  }

  return count;
}
