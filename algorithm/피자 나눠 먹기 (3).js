function solution(slice, n) {
  if (n % slice !== 0) {
    return parseInt(n / slice) + 1;
  } else if (n % slice === 0) {
    return parseInt(n / slice);
  }
}
