​​​​​​
## 1. 문제 파악
- Inorder Traversal 을 사용해 이진 검색 트리에서 두 노드간의 최소 절대 차이를 찾는 방법을 구현 할 수 있다고 접근하였다.
- Inorder Traversal을 사용해 BST를 순회하니까 두 노드 간의 차이를 계산할때, 이전 노드와 현재 노드만을 비교하면 된다.

## 2. 해결 step
```
let result = [];
```
- 빈 배열 result를 선언
- 이 배열은 중위 순회 결과를 저장할 용도로 사용

```
function inorderTraversal(node) { ... }
```
- 중위 순회 함수 inorderTraversal을 정의
- 재귀적으로 BST를 중위 순회하면서 각 노드의 값을 result 배열에 추가

```
if (!node) { return; }
```
- 함수 내에서 node가 null인 경우, 즉 더 이상 노드가 없는 경우 함수를 종료

```
inorderTraversal(node.left);
```
- 현재 노드의 왼쪽 서브트리를 중위 순회
- 이 부분은 왼쪽 자식 노드로 이동하는 재귀 호출

```
result.push(node.val);
```
- 현재 노드의 값을 result 배열에 추가

```
inorderTraversal(node.right);
```
- 현재 노드의 오른쪽 서브트리를 중위 순회
- 이 부분은 오른쪽 자식 노드로 이동하는 재귀 호출

```
inorderTraversal(root);
```
-중위 순회 함수를 BST의 루트 노드로 호출하여 중위 순회를 시작

```
let minimumDifference = Infinity;
```
- 변수를 선언하고 무한대 값으로 초기화
- 이 변수는 최소 절대 차이를 추적할 때 사용

```
for (let i = 1; i < result.length; i++) { ... }: result
```
- 배열을 순회하는 반복문을 시작
- i는 1부터 시작하여 배열의 두 인접한 값 간의 차이를 계산

```
minimumDifference = Math.min(minimumDifference, result[i] - result[i - 1]);
```
- 현재 인덱스 i와 이전 인덱스 i - 1의 값을 비교하여 최소값을 minDiff에 저장
- 이 부분에서 최소 절대 차이를 업데이트

```
return minimumDifference;
```
- 최소 절대 차이인 minDiff 값을 반환
- 
## 4. 결과

```
var getMinimumDifference = function(root) {
    let result = [];
    
    // 중위 순회 함수 정의
    function inorderTraversal(node) {
        if (!node) {
            return;
        }
        
        inorderTraversal(node.left);
        result.push(node.val);
        inorderTraversal(node.right);
    }

    inorderTraversal(root); // 중위 순회 시작

    let minimumDifference = Infinity;
    for (let i = 1; i < result.length; i++) {
        minimumDifference = Math.min(minimumDifference, result[i] - result[i - 1]);
    }

    return minimumDifference;
};
```

## 5. solution 본 후, 회고
#### 1. 회고
- 이 코드는 중위 순회를 활용하여 문제를 해결하는 빠른 방법이다.
- 그러나 배열 result에 중위 순회 결과를 저장하므로 공간 복잡도가 높아진다.
- 만약 공간 사용을 최소화하고자 한다면, 이전에 제시한 방법 중 하나를 사용하는 것이 더 좋을 수 있을 것 같다.
- 코드를 이해하기 쉽고 간단하게 작성하려고 노력하였으며, 중요한 부분인 중위 순회를 효과적으로 활용했다.
