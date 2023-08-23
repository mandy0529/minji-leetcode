​
## 1. 문제 직면
- 1번과 같은 nums를 바꾸는 것이라는 것을 알았다.
- 그래서 내가 원하는 원소들을 가진 배열을 만들어놓고,
- nums를 빈 배열로 만들어주고, 내가 원하는 원소들을 가진 배열을 넣어주자 라고 생각했다.

## 2. 해결 step
- val과 다른 요소들로 새로운 배열 생성한다.
```
const filterNums = nums.filter(num => num !== val); 
```
- 원본 nums 배열 비워주고,
```
nums.length = 0; 
```
- 새로운 배열의 요소들을 만든 filterNums배열을 nums에 넣어주기
```
nums.push(...filterNums); 
```
- k값 즉 nums.length값을 리턴해주자
```
return nums.length; 
```

## 3. 요약
- 요약하자면 val을 뺀 새로운 배열을 만들어 준후,
- 원본 nums 배열을 빈배열로 만들어주고,
- 그 빈배열에 새로 만들어준 배열 넣어주자

```
var removeElement = function(nums, val) {
    const filterNums = nums.filter(num => num !== val); 
    nums.length = 0; 
    nums.push(...filterNums); 
    return nums.length; 
};
```

## 4. solution 본 후, 회고
#### 1. 배경
- 이 문제는 주어진 정수 배열 nums에서 주어진 값 val을 모두 제거하고, 제거한 후의 새로운 배열의 길이를 반환하는 것을 요구한다.
#### 2. 방법
- val을 제외한 요소의 수를 추적하는 변수 count를 유지하고 배열의 모든 요소를 반복한다.
- 각 요소에 대해, 그 값이 val과 같지 않다면 해당 요소를 배열의 count 인덱스에 배치하고 count를 증가시킨다.
- 새로운 배열의 길이는 count와 동일하다. 추가적인 공간을 사용하지 않고 입력 배열을 직접 수정한다.

#### 3. 회고
- 나는 한차례 한차례 해당 문제를 곱씹으며 생각하다보니, 새로운 배열을 만들고, 원래 배열을 비우고, 새로운 배열을 다시 넣는 번거로운 해결책을 택했다.
- 아직 미숙해서 한단계 한단계 행동을 해야 알고리즘을 해결할 수 있지만
- 1번에서도 그렇고 ponter를 하나 잡아서 조건에 맞게 반복문을 돌려 답을 도출해내는 것을 연습해야 할 것 같다.

```
function removeElement(nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
}
```
