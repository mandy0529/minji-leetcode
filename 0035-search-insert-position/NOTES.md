​​
## 1. 문제 파악
- target이 nums배열에서 어디 위치할지 하나씩 비교해가며 target이 어디 위치할지 찾는 문제다.
- O(log n) 복잡도안에 해결해야한다고 문제에 제시되어있으니 이진검색 알고리즘을 이용한다는 생각을 하였다.
- 배열을 반을 쪼개서 중간 인덱스를 계산하고, 반복문을 돌려서 원하는 자리를 찾을 수 있을 것 같다.

## 2. 해결 step
- moveIndex는 시작점 인덱스
- endIndex는 끝 인덱스
```
    let moveIndex = 0;
    let endIndex = nums.length - 1;
```
- moveIndex가 endIndex보다 작거나 같을 때까지 반복됩니다. 검색 범위가 아직 존재하는 동안 반복한다.
```
 while (moveIndex <= endIndex) {} 
```
- 중간 인덱스인 middleIndex를 계산
- (moveIndex + endIndex) / 2를 사용하여 중간 값을 구한다.
- 이 값을 소수점 버림을 통해 정수로 변환하면 배열의 중간 인덱스가 된다.
```
const middleIndex = Math.floor((moveIndex + endIndex) / 2);
```
- 배열의 middleIndex 위치에 있는 값과 target 값을 비교
- 만약 중간 값이 target보다 작다면, 탐색 범위를 오른쪽 반으로 좁히기 위해 moveIndex를 middleIndex + 1로 업데이트
```
if (nums[middleIndex] < target) {
    moveIndex = middleIndex + 1;
} 
```
- 만약 중간 값이 target와 같다면, middleIndex를 반환하여 해당 인덱스를 반환
- 이것은 target 값을 찾은 경우
```
else if (nums[middleIndex] === target) {
   return middleIndex;
}
```
- 만약 중간 값이 target보다 크다면,
- 탐색 범위를 왼쪽 반으로 좁히기 위해 endIndex를 middleIndex - 1로 업데이트
```
else {
    endIndex = middleIndex - 1;
}
```
- 마지막으로, moveIndex를 반환하여 target을 삽입해야 할 위치의 인덱스를 반환
```
return moveIndex;
```

## 3. 요약
- 이진검색을 이용해 배열을 반으로 나눠서 중간인덱스를 찾고,
- 움직이는 시작 포인트와 끝 포인트를 조절하여 위치를 선정해주자

```
var searchInsert = function(nums, target) {
    let moveIndex = 0;
    let endIndex = nums.length - 1;
    
    while(moveIndex <= endIndex) {
        const middleIndex = Math.floor((moveIndex + endIndex) / 2);

        if (nums[middleIndex] < target) {
            moveIndex = middleIndex + 1;
        } else if(nums[middleIndex]=== target) {
            return middleIndex
        } else {
            endIndex = middleIndex - 1
        }
    }
    return moveIndex;
};
```

## 4. solution 본 후, 회고
#### 1. 방법
- 주어진 배열 nums에서 target을 삽입할 위치의 인덱스를 찾아서 반환하거나,
- target이 삽입될 수 있는 가장 마지막 위치의 다음 인덱스를 반환
- nums: 정렬된 정수 배열
- target: 찾으려는 정수 값
- for 루프를 통해 배열 nums의 각 요소를 순회
- 현재 요소 nums[i]와 target을 비교
- 만약 nums[i]가 target보다 크거나 같다면, i를 반환
- 이는 target을 삽입할 위치(이미 정렬되어 있기 때문에 target보다 크거나 같은 첫 번째 요소의 인덱스를 찾는 것)
- for 루프를 모두 순회하면, target이 배열 내 모든 요소보다 크므로 nums의 길이인 nums.length를 반환
- 이는 target이 삽입될 수 있는 가장 마지막 위치의 다음 인덱스를 의미

#### 2. 회고
- 이진 검색 알고리즘을 사용해야 된다고 생각하고, 자료들을 찾으며,
- 이진검색 패턴을 찾아 하나씩 단계별로 구현하다보니 우연히 효율적인 코드방식이 나온 것 같다.
- 솔루션 코드는 nums에서 target을 찾거나 삽입할 위치를 효율적으로 찾기 위해 반복문을 사용해서 간결한 로직과
- 코드의 의도가 명확하게 들어나서 읽기 편했고,
- 무엇보다 코드가 간결하고 효과적으로 작업을 한 것 같다.
- 하지만 이진검색을 이용하겠다고 생각하여, 로직을 구성한 나도 잘 코드를 짠 것 같다.

```
var searchInsert = function(nums, target) {
    for(let i =0;i<nums.length;i++){
        if(nums[i] >= target)   return i;
    }
    return nums.length;
};
```
