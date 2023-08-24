​​​​​
## 1. 문제 직면
- k만큼 오른쪽으로 하나씩 수를 밀겠다의 문제 파악
- 배열의 뒷부분에서 k길이 만큼 요소 제거한 값 splice로 빼고,
- unshift로 맨앞에 위치하게 하자 생각 접근

## 2. 해결 step
- nums 배열에서 k 길이 만큼의 요소 제거한 값 추출해주고
```
const removedKcountElement=nums.splice(nums.length-k, k);
};
```
- unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
- 그래서 nums에 추출한 값 unshift로 맨앞에 넣기
```
nums.unshift(...removedKcountElement)
```

## 3. 실패 요약
- 처음처럼 splice로 k만큼의 요소 추출해내고, unshift로 앞에 박아넣었더니
- nums.lengthqhek k의 값이 클때 테스트 케이스가 충족 되지 않았다.
- 생각을 해보니 k가 만약 nums.length보다 크다면 nums.lengtht수만큼은 돌겠고,
- 그 다음 나머지 값만큼 추출 해야한다.
- 그래서 나머지 값이 k만큼 오른쪽으로 스텝을 끼게되면 될 것 같다.
```
k = k % nums.length;
```

## 4. 결과

```
var rotate = function(nums, k) {
    k = k % nums.length;
    const removedKcountElement=nums.splice(nums.length - k, k);
    nums.unshift(...removedKcountElement)
};
```

## 4. solution 본 후, 회고
#### 1. 회고
- 회전 횟수 k가 배열의 길이보다 클 수 있으므로, 실제 회전 횟수를 배열의 길이로 나눈 나머지 값을 k로 설정
- 이렇게 하면 한 바퀴 회전한 경우와 동일한 효과를 얻을 수 있다.
- ums 배열의 끝에서부터 k개의 원소를 제거하여 새 배열 removedKcountElement에 저장
- 이것은 회전한 원소들을 임시로 보관하는 역할.
- 배열의 요소들을 nums 배열의 앞쪽에 추가
- 이렇게 하면 회전한 원소들이 배열의 앞으로 이동

#### 2. 솔루션 해석
- 이 코드의 시간 복잡도는 주로 splice와 unshift 연산에 의해 결정
- splice는 O(k) 시간이 걸리며, unshift도 O(k) 시간이 소요된다.
- 따라서 전체 시간 복잡도는 O(k)입니다. 배열 크기와 회전 횟수에 따라 성능이 결정되므로, k와 배열의 크기가 크다면 성능에 영향을 줄 수 있다.
- 그래서 solution을 본 결과 환형 치환을 사용할 수있다.
- 환형 치환을 사용한다면 배열의 길이보다 회전 횟수가 클 때, 실제로는 한 바퀴 이상 회전한 효과가 나타난다.
- 이때는 회전 횟수를 배열의 길이로 나눈 나머지만큼만 회전하면 된다.
- 이렇게 하면 더 적은 회전 횟수로 원하는 결과를 얻을 수 있다.

```
var rotate = function(nums, k) {
    k = k % nums.length;
    const temp = nums.slice(nums.length - k);
    nums.splice(k, nums.length - k);
    nums.unshift(...temp);
};
