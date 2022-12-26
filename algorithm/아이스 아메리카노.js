//Math.floor() : 소수점 이하를 버림한다.
//Math.ceil() : 소수점 이하를 올림한다.

function solution(money) {
  let arr = [];

  if (money % 5500 === 0) {
    arr.push(money / 5500);
    arr.push(0);
  } else if (money % 5500 !== 0) {
    arr.push(parseInt(money / 5500));
    arr.push(money % 5500);
  }

  return arr;
}

function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
