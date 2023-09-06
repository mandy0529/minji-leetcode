​​​​​​​
## 1. 문제 파악
- 작은값부터 큰값까지 나열하면 되므로 이것도 마찬가지 Inorder Traversal을 사용할 수 있다고 생각했다.
- 노드 값이 오름차순으로 정렬되니까, Inorder Traversal을 k번 진행하고, 그떄의 노드값을 반환하면 된다고 접근했다.

## 2. 해결 step
```
function inorderTraversal(node, result) { ... }
```
- 중위 순회 함수 inorderTraversal을 정의
- 이 함수는 현재 노드 node와 결과를 저장할 배열 result를 매개변수로 받는다.

```
if (!node || result.length >= k) { return; }
```
- 중위 순회 함수 내에서, 현재 노드 node가 null이거나 result 배열의 길이가 k 이상이면 함수를 종료
-  이 부분은 중요한 최적화
-  result 배열의 길이가 k 이상이면 이미 k번째 작은 값을 찾았기 때문에 더 이상의 순회는 필요 X

```
inorderTraversal(node.left, result)
```
- 현재 노드의 왼쪽 서브트리를 중위 순회
- 이 부분은 왼쪽 자식 노드로 이동하는 재귀 호출

```
result.push(node.val);
```
- 현재 노드의 값을 result 배열에 추가
- 이렇게 하면 중위 순회를 수행하면서 노드 값을 오름차순으로 저장

```
inorderTraversal(node.right, result);
```
- 현재 노드의 오른쪽 서브트리를 중위 순회
-  이 부분은 오른쪽 자식 노드로 이동하는 재귀 호출

```
const result = [];
```
- 빈 배열 result를 선언하여 중위 순회 결과를 저장할 용도로 사용

```
inorderTraversal(root, result);
```
- 중위 순회 함수를 BST의 루트 노드 root로 호출하여 중위 순회를 시작

```
return result[k - 1];
```
- 중위 순회를 통해 얻은 결과 배열 result에서 k번째 작은 값을 반환
- 배열은 0-indexed이므로 1-indexed로 반환하기 위해 k에서 1을 빼준다.


- 
## 3. 결과

```
var kthSmallest = function(root, k) {
    // 중위 순회 함수 정의
    function inorderTraversal(node, result) {
        if (!node || result.length >= k) {
            return;
        }
        
        inorderTraversal(node.left, result);
        result.push(node.val);
        inorderTraversal(node.right, result);
    }
    
    const result = [];
    inorderTraversal(root, result);

    return result[k - 1]; // 1-indexed로 반환하기 위해 k를 1 빼줍니다.
};
```

## 4. 실패 원인 분석
- return result[k]
- 중위 순회 함수에서는 result.length를 사용하여 현재까지 발견된 노드의 수를 계산하고 있다.
- result 배열은 0-indexed이기 때문에 k번째 작은 값을 찾을 때는 인덱스가 k - 1인 요소를 반환해야 한다.
- 처음에 return k를 해줘서 안됐다.
  
## 5. solution 본 후, 회고
- 코드 수정 전에는 k번째 작은 값을 찾는 대신 k번째 노드 값을 반환하려고 시도했다.
- 이런 실수를 피하기 위해 코드 작성 시 배열 인덱스와 k 값 간의 관계를 명확히 이해해야 한다.
- 중요한 변수나 값들의 인덱스, 순서 등을 주의 깊게 확인하고 디버깅 과정에서 결과를 출력하여 코드 동작을 확인하는 습관을 갖는 것이 좋을 것 같다.
- 솔루션에 대한 회고로는 중위 순회를 활용한 방법이 간단하면서도 효과적으로 BST에서 k번째 작은 값을 찾는 방법
- 방법은 BST의 특성을 활용하여 문제를 해결할 수 있다.
