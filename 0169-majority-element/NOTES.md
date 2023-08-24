​​​​
## 1. 문제 직면
- 과반수 이상의 원소의 값을 구하는게 핵심
- reduce로 각 원소 갯수가 몇개인지 구할 수 있다고 생각하고 접근
- 그 다음 {a: 3, b: 4} 이런식으로 a,b의 원소가 몇번 호출되었는지  반환 한 후,
- 해당 객체를 for문을 돌려 nums.length의 반보다 클때 해당 원소를 반환해보자라고 생각

## 2. 해결 step
- 해당 객체를 for문을 돌려 nums.length의 반보다 클때 해당 원소를 반환
- total은 누적된 결과 객체
- current는 현재 돌아가고 있는 원소
- 처음 원소는 0으로 지정, 그 다음 등장하는 원소는 거기다가 1 더하기
```
const eachNumberShowCount=nums.reduce((total, current)=>{
        total[current] = (total[current] || 0) + 1;
        return total;
  },{});
```
- 횟수 지정한 객체를 for문 돌리면서 nums length의 반보다 넘는 key 구해서 return
```
for(let num in eachNumberShowCount) {
    if(eachNumberShowCount[num]> nums.length / 2) {
      return num
    }
  }
```

## 3. 요약
- 과반수 원소를 먼저 구하고, nums를 반으로 쪼갠다음 내가 구한 과반수가진 원소를 for문 돌려서 그거보다 크면 return 해당 num을 반환하자

```
var majorityElement = function(nums) {
  const eachNumberShowCount=nums.reduce((total, current)=>{
        total[current] = (total[current] || 0) + 1;
        return total;
  },[]);

  for(let num in eachNumberShowCount) {
    if(eachNumberShowCount[num]> nums.length / 2) {
      return num
    }
  }
};
```

## 4. solution 본 후, 회고
#### 1. 문제파악
- 주어진 배열 nums에서 과반수 요소를 찾는 문제를 해결하는 JavaScript 함수
- 과반수 요소는 배열의 크기 n의 절반보다 더 많이 나타나는 요소
#### 1. 해결방법
- candidate 변수는 현재 후보 과반수 요소
- count 변수는 현재 후보 과반수 요소의 등장 횟수
- 배열 nums를 순차적으로 반복하면서 각 원소를 num으로 가져온다.
- 초기에 count가 0일 경우, candidate를 현재 원소 num으로 지정하고 count를 1로 설정
  이는 새로운 후보 과반수 요소를 시작하는 단계
- 그렇지 않은 경우, 현재 후보 과반수 요소 candidate와 현재 원소 num를 비교
- 만약 같다면, 현재 원소 num은 후보 과반수 요소와 일치하므로 count를 증가
- 만약 다르다면, 현재 원소 num은 후보 과반수 요소와 일치하지 않으므로 count를 감소
- 이 과정을 계속 반복하면서 count를 통해 후보 과반수 요소를 추적
- count가 0이 될 때마다 새로운 후보 과반수 요소가 시작
- 마지막까지 반복하고 나면, candidate에는 실제 과반수 요소가 저장

#### 2. 회고
- 솔루션에서 함수는 주어진 배열에서 과반수 요소를 찾는 과정에서 보이어-무어 과반수 투표 알고리즘을 사용하여 효율적으로 작동
- 나는 reduce 내장함수를 사용함으로서 알고리즘 효율이 솔루션보다 떨어지는것같다.
- 현재 후보 요소, 과반수 원소 빈도 횟수로 포인터를 잡으며 해결하는 방식에 대해 회고했다.

```
var majorityElement = function(nums) {
    let candidate = 0;
    let count = 0;
    
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (candidate === num) {
            count++;
        } else {
            count--;
        }
    }
    
    return candidate;
};
