​​​​​​​
## 1. 문제 파악
- 주어진 문제는 주사위를 굴려 뱀과 사다리를 타며 게임 보드에서 출발 지점에서 목표 지점까지 이동하는 최소 이동 횟수를 찾는 것
- 게임 보드는 특별한 패턴으로 레이블이 매겨져 있으며, 뱀과 사다리의 정보가 주어졌다.
- 문제를 파악하며 한단계 한단계 정리하는 것도 힘들었으며, 풀이하는데 너무 많은 시간을 쏟았지만 풀지 못했다..
- 한단계 한단계 이해하며, 솔루션을 보며, 내 코드로 변환하며 이 문제를 간신히 풀어냈다.

## 2. 해결 step
1. 보드 변환: 주어진 2D 배열을 1D 배열로 변환하여 각 위치에 대한 정보에 쉽게 접근할 수 있도록 만들었다.
2. 이를 위해 Boustrophedon 스타일의 보드 순회를 고려하여 변환했다.
3. BFS 알고리즘 적용: BFS(너비 우선 탐색) 알고리즘을 사용하여 시작 지점부터 목표 지점까지의 최단 경로를 탐색했습다.
  - BFS는 큐를 사용하여 이동 가능한 다음 위치를 탐색하며 최단 경로를 찾는 데 효과적이다.
4. 뱀과 사다리 처리: 각 이동에서 현재 위치에서 주사위 결과에 따라 다음 위치를 계산하고, 해당 위치에 뱀 또는 사다리가 있는 경우 해당 위치로 이동했다.

## 3. 솔루션 해석 및 내 코드화로 변환
- 보드의 크기 n을 계산
```
const n = board.length;
```
- 목표 지점(최종 목적지)을 계산
```
const target = n * n;
```
- 이미 방문한 위치를 저장하기 위한 Set을 생성
```
const visited = new Set();
```
- 1차원 배열로 변환된 보드를 나타내는 배열을 초기화하고, 0번 인덱스에 -1을 추가한다.
- 보드 인덱스를 1부터 시작하므로, 0번 인덱스는 사용되지 않는다.
```
const flatBoard = [-1];
```
- 이동 횟수를 추적하기 위한 변수를 초기화
```
let moves = 0;
```
- 이 부분은 보드를 1차원 배열 flatBoard로 변환하는 부분
- 반복문을 사용하여 Boustrophedon 스타일로 보드를 탐색하고, 각 위치의 값을 flatBoard 배열에 추가한다.
- 짝수 행과 홀수 행에 따라 방향을 다르게 순회한다.
```
for (let i = n - 1; i >= 0; i--) {
    if ((n - 1 - i) % 2 === 0) {
      for (let j = 0; j < n; j++) {
        flatBoard.push(board[i][j]);
      }
    } else {
      for (let j = n - 1; j >= 0; j--) {
        flatBoard.push(board[i][j]);
      }
    }
  }
```
-  이 부분은 BFS(Breadth-First Search) 알고리즘을 사용하여 게임을 진행하는 부분이다.
- queue 배열은 BFS를 위한 큐로, 시작 위치와 이동 횟수를 저장한 배열로 초기화 된다.
- while 루프를 사용하여 BFS를 수행하며, 큐에서 현재 위치와 이동 횟수를 추출한다.
- curr이 목표 지점(target)과 같다면, 최소 이동 횟수(moves)를 반환하고 함수 종료한다.
- 이미 방문한 위치(visited)는 다시 방문하지 않도록 체크하고 스킵한다.
- 주사위 눈금(1에서 6까지)에 따라 다음 위치를 계산하고, 해당 위치에 뱀 또는 사다리가 있는지 확인한다.
- 뱀 또는 사다리가 있는 경우, 그 위치로 이동하며, 그렇지 않으면 다음 위치로 이동한다.
- 모든 탐색이 끝나도록 BFS를 수행한 후에도 목표 지점에 도달하지 못하면 -1을 반환하여 게임을 종료한다.

```
const queue = [[1, 0]];

  while (queue.length > 0) {
    const [curr, moves] = queue.shift();

    if (curr === target) {
      return moves;
    }

    if (visited.has(curr)) {
      continue;
    }

    visited.add(curr);

    for (let i = 1; i <= 6; i++) {
      const next = curr + i;

      if (next <= target) {
        const nextSquare = flatBoard[next];

        if (nextSquare !== -1) {
          queue.push([nextSquare, moves + 1]);
        } else {
          queue.push([next, moves + 1]);
        }
      }
    }
  }

  return -1;
}
```

## 4. 결과

```
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
```

## 5. solution 본 후, 회고
- 이 문제를 해결하는 데에는 주어진 게임 규칙과 보드 형태를 이해하고, BFS 알고리즘을 적용하는 것이 핵심이었다.
-  또한, 보드를 적절히 변환하여 문제를 더 쉽게 해결할 수 있었다.
-   문제 해결을 위해 단계적으로 접근하고 코드를 작성함으로써 문제를 효과적으로 해결할 수 있었다.
-   물론 솔루션을 참고하며, 내 코드식으로 풀어냈지만, 내가 직접 풀지못한거에 대한 속상함이 있다.
