function solution(board, moves) {
  let box = [];
  var answer = 0;
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      const el = board[j][move];
      if (el) {
        board[j][move] = 0;
        if (box.length !== 0 && box[box.length - 1] === el) {
          box.pop();
          answer += 2;
        } else {
          box.push(el);
        }
        break;
      }
    }
  }
  return answer;
}
//
