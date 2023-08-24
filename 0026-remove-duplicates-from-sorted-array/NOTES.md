​​
## 1. 문제 직면
- 1,2번과 마찬가지로 nums배열을 in-place 였기때문에 원하는 배열을 만든 후, nums를 빈배열로 만들어 준후, 넣어주자 라고 생각했다.
- 그래서 내가 원하는 원소들을 가진 배열을 만들어놓고,
- nums를 빈 배열로 만들어주고, 내가 원하는 원소들을 가진 배열을 넣어주자

## 2. 해결 step
- nums에서 중복된거 없애도록 new set 쓰기
    - 💡[mdn-new Set() 참고](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)
```
const uniqueNumsSet = new Set(nums); 
```
- Set으로 중복된거 없애게 한 uniqueNumsSet을 다시 배열로 변환
```
const uniqueNumsArray = Array.from(uniqueNumsSet);
```
- 원본 기존의 nums를 빈 배열로 만들고,
```
nums.length = 0; 
```
- 중복되지 않은 수들의 배열 만들어놓은 uniqueNumsArray를 nums에 넣기
```
nums.push(...uniqueNumsArray); 
```
- nums.length를 return해주자
```
return nums.length;
``````

## 3. 요약
- 요약하자면 중복된 원소를 뺀 새로운 배열을 만들어 준 후,
- 원본 nums 배열을 빈 배열로 만들어주고,
- 그 빈 배열에 새로 만들어준 배열 넣어주자

```
var removeDuplicates = function(nums) {
    const uniqueNumsSet = new Set(nums); 
    const uniqueNumsArray = Array.from(uniqueNumsSet);
    nums.length = 0; 
    nums.push(...uniqueNumsArray); 
    return nums.length;
};
```

## 4. solution 본 후, 회고
#### 1. 아이디어
- 주어진 문제는 정렬된 배열에서 중복된 요소를 제거하는 것
- 배열 내 각 요소를 한 번씩만 남기고 중복 요소를 제거
- 배열이 정렬되어 있기 때문에 중복 요소들은 인접하게 위치하므로, 중복 요소를 왼쪽으로 이동시킴으로써 쉽게 제거
#### 2. 접근 방법
- 두 개의 포인터 i와 j를 사용
- 여기서 i는 지금까지 찾은 마지막 고유한 요소를 가리키고, j는 현재 검사 중인 요소
- 만약 nums[i]와 nums[j]가 같다면, 우리는 단순히 j를 증가
- 그렇지 않으면 i를 증가시키고 nums[j]를 nums[i]로 복사
- 마지막에 i+1을 반환하면 수정된 배열의 길이
#### 3. 복잡도
- 시간 복잡도: 배열을 한 번만 탐색하기 때문에 알고리즘의 시간 복잡도는 O(n)입니다.
- 공간 복잡도: 알고리즘은 상수 개의 추가 공간을 사용하므로 공간 복잡도는 O(1)입니다.

#### 4. 회고
- 나는 한차례 한차례 해당 문제를 곱씹으며 생각하다보니, 새로운 배열을 만들고, 원래 배열을 비우고, 새로운 배열을 다시 넣는 번거로운 해결책을 택했다.
- solution에서는 배열을 한번만 사용함으로서 시간 복잡도를 올렸다.

```
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
```​
