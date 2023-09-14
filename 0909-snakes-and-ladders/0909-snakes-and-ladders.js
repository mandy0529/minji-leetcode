/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
  const n = board.length;
  const target = n * n; // 목표 지점
  const visited = new Set(); // 방문한 위치를 저장할 Set
  const flatBoard = [-1]; // 보드를 1차원 배열로 변환 (인덱스 0은 사용하지 않음)
  let moves = 0; // 이동 횟수

  // 보드를 1차원 배열로 변환
  for (let i = n - 1; i >= 0; i--) {
    if ((n - 1 - i) % 2 === 0) {
      // Boustrophedon 스타일에서 홀수 행은 반대로 순회
      for (let j = 0; j < n; j++) {
        flatBoard.push(board[i][j]);
      }
    } else {
      // 짝수 행은 정방향으로 순회
      for (let j = n - 1; j >= 0; j--) {
        flatBoard.push(board[i][j]);
      }
    }
  }
  const queue = [[1, 0]]; // BFS 큐, [현재 위치, 이동 횟수] 형태로 저장
  while (queue.length > 0) {
    const [curr, moves] = queue.shift();

    if (curr === target) {
      return moves; // 목표 지점에 도달한 경우 이동 횟수 반환
    }

    if (visited.has(curr)) {
      continue; // 이미 방문한 위치면 스킵
    }

    visited.add(curr);

    for (let i = 1; i <= 6; i++) {
      const next = curr + i;

      if (next <= target) {
        const nextSquare = flatBoard[next]; // 뱀 또는 사다리 확인

        if (nextSquare !== -1) {
          queue.push([nextSquare, moves + 1]); // 뱀 또는 사다리가 있는 경우 목적지로 이동
        } else {
          queue.push([next, moves + 1]); // 뱀 또는 사다리가 없는 경우 다음 위치로 이동
        }
      }
    }
  }

  return -1; // 목표 지점에 도달할 수 없는 경우 -1 반환
}