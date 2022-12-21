function solution(dot) {
  for (let i = 0; i < dot.length; i++) {
    if (dot[0] > 0 && dot[1] > 0) {
      return 1;
    } else if (dot[0] < 0 && dot[1] > 0) {
      return 2;
    } else if (dot[0] < 0 && dot[1] < 0) {
      return 3;
    } else {
      return 4;
    }
  }
}
