function solution(survey, choices) {
  //survey: 질문마다 판단하는 지표를 담은 1차원 문자열 배열
  //choices: 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열
  //answer: 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return
  //survey의 원소 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA"
  var answer = "";
  let r = 0;
  let t = 0;
  let c = 0;
  let f = 0;
  let j = 0;
  let m = 0;
  let a = 0;
  let n = 0;

  for (let i = 0; i < survey.length; i++) {
    if (survey[i] === "RT") {
      if (choices[i] === 1) {
        r = r + 3;
      }
      if (choices[i] === 2) {
        r = r + 2;
      }
      if (choices[i] === 3) {
        r = r + 1;
      }
      if (choices[i] === 5) {
        t = t + 1;
      }
      if (choices[i] === 6) {
        t = t + 2;
      }
      if (choices[i] === 7) {
        t = t + 3;
      }
    }
    if (survey[i] === "TR") {
      if (choices[i] === 1) {
        t = t + 3;
      }
      if (choices[i] === 2) {
        t = t + 2;
      }
      if (choices[i] === 3) {
        t = t + 1;
      }
      if (choices[i] === 5) {
        r = r + 1;
      }
      if (choices[i] === 6) {
        r = r + 2;
      }
      if (choices[i] === 7) {
        r = r + 3;
      }
    }
    if (survey[i] === "CF") {
      if (choices[i] === 1) {
        c = c + 3;
      }
      if (choices[i] === 2) {
        c = c + 2;
      }
      if (choices[i] === 3) {
        c = c + 1;
      }
      if (choices[i] === 5) {
        f = f + 1;
      }
      if (choices[i] === 6) {
        f = f + 2;
      }
      if (choices[i] === 7) {
        f = f + 3;
      }
    }
    if (survey[i] === "FC") {
      if (choices[i] === 1) {
        f = f + 3;
      }
      if (choices[i] === 2) {
        f = f + 2;
      }
      if (choices[i] === 3) {
        f = f + 1;
      }
      if (choices[i] === 5) {
        c = c + 1;
      }
      if (choices[i] === 6) {
        c = c + 2;
      }
      if (choices[i] === 7) {
        c = c + 3;
      }
    }
    if (survey[i] === "JM") {
      if (choices[i] === 1) {
        j = j + 3;
      }
      if (choices[i] === 2) {
        j = j + 2;
      }
      if (choices[i] === 3) {
        j = j + 1;
      }
      if (choices[i] === 5) {
        m = m + 1;
      }
      if (choices[i] === 6) {
        m = m + 2;
      }
      if (choices[i] === 7) {
        m = m + 3;
      }
    }
    if (survey[i] === "MJ") {
      if (choices[i] === 1) {
        m = m + 3;
      }
      if (choices[i] === 2) {
        m = m + 2;
      }
      if (choices[i] === 3) {
        m = m + 1;
      }
      if (choices[i] === 5) {
        j = j + 1;
      }
      if (choices[i] === 6) {
        j = j + 2;
      }
      if (choices[i] === 7) {
        j = j + 3;
      }
    }
    if (survey[i] === "AN") {
      if (choices[i] === 1) {
        a = a + 3;
      }
      if (choices[i] === 2) {
        a = a + 2;
      }
      if (choices[i] === 3) {
        a = a + 1;
      }
      if (choices[i] === 5) {
        n = n + 1;
      }
      if (choices[i] === 6) {
        n = n + 2;
      }
      if (choices[i] === 7) {
        n = n + 3;
      }
    }
    if (survey[i] === "NA") {
      if (choices[i] === 1) {
        n = n + 3;
      }
      if (choices[i] === 2) {
        n = n + 2;
      }
      if (choices[i] === 3) {
        n = n + 1;
      }
      if (choices[i] === 5) {
        a = a + 1;
      }
      if (choices[i] === 6) {
        a = a + 2;
      }
      if (choices[i] === 7) {
        a = a + 3;
      }
    }
  }
  if (r >= t) {
    answer = "R";
  } else {
    answer = "T";
  }
  if (c >= f) {
    answer = answer + "C";
  } else {
    answer = answer + "F";
  }
  if (j >= m) {
    answer = answer + "J";
  } else {
    answer = answer + "M";
  }
  if (a >= n) {
    answer = answer + "A";
  } else {
    answer = answer + "N";
  }
  return answer;
}
solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
