function solution(array, height) {
  let count = 0;

  for (let value of array) {
    if (value > height) {
      count++;
    }
  }
  return count;
}

function solution(array, height) {
  return array.filter((value) => {
    return value > height;
  }).length;
}
