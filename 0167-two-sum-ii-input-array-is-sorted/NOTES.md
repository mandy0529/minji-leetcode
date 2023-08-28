​​​​​​​​​
## 1. 문제 파악
- 이번엔 나도 2 pointer로 이용해서 풀어보자! 라고 다짐했고,
- 두개의 합이 target이 되도록 첫번째 숫자를 잡고, 마지막 number를 잡아서
- 하나씩 비교해나가며, 계산하자 접근했다.
  
## 2. 해결 step
- 배열의 첫 번째 인덱스를 설정
- lastNumber는 배열의 마지막 인덱스를 설정
- 이 두 변수는 배열의 양 끝에서부터 숫자를 선택하여 합을 비교하기 위해 사용된다.
```
let firstNumber=0;
let lastNumber=numbers.length-1;
```
- firstNumber가 lastNumber보다 작거나 같은 동안 계속해서 반복한다.
```
while(1<=firstNumber<lastNumber) {}
```
- firstNumber와 lastNumber 인덱스에 해당하는 숫자들의 합을 sum 변수에 저장한다.
```
let sum=numbers[firstNumber]+numbers[lastNumber];
```

- sum이 target보다 작으면, 합을 키우기 위해 firstNumber를 증가시키자
- sum이 target보다 크면, 합을 줄이기 위해 lastNumber를 감소시키자
- 만약 sum이 target와 같다면, 찾았으므로
- firstNumber+1과 lastNumber+1 (인덱스가 0이 아닌 1부터 시작하므로)을 반환하여
- 두 숫자의 합이 목표값과 일치하는 인덱스를 나타내는 배열을 반환하자
```
if(sum<target) { firstNumber++ }
else if(sum>target) { lastNumber-- }
else { return [firstNumber+1, lastNumber+1] }
```

## 4. 내 코드 결과

```
var twoSum = function(numbers, target) {
    let firstNumber=0;
    let lastNumber=numbers.length-1;
    
    while(1<=firstNumber<lastNumber) {
        let sum=numbers[firstNumber]+numbers[lastNumber];
         if(sum<target) {
            firstNumber++
        } else if(sum>target) {
            lastNumber--
        }else {
            return [firstNumber+1, lastNumber+1]
        }
    }
};
```

## 5. solution 본 후, 회고
#### 1. solution 해석
- p1은 배열의 첫 번째 인덱스를, p2는 배열의 마지막 인덱스를 가리킨다.
- 무한 루프를 시작
- p1과 p2 인덱스에 해당하는 숫자들의 합이 target과 같지 않을 동안 계속해서 반복
- p1과 p2 인덱스에 해당하는 숫자들의 합이 target보다 크면, 합을 줄이기 위해 p2를 감소
- 그렇지 않으면, 합을 키우기 위해 p1를 증가
- 루프가 종료되면, p1과 p2 인덱스를 사용하여 두 숫자의 합이 목표값과 일치하는 인덱스를 나타내는 배열을 반환
- 배열의 인덱스는 0이 아닌 1부터 시작하므로 p1과 p2에 각각 1을 더한 값을 반환
```
const twoSum = (numbers, target) => {
    let p1 = 0
    let p2 = numbers.length - 1
    
    while (numbers[p1] + numbers[p2] !== target) {
        if (numbers[p1] + numbers[p2] > target) {
            p2--
        } else {
            p1++
        }
    }
    
    return [p1 + 1, p2 + 1]
}
```
- 
#### 2. 회고
- 나는 If, elseif ,else를 이용해서 직관적으로 코드를 작성 하였지만
- 해당 솔루션 코드는 내 코드보다 더 짧긴하다.
- 내 코드보다 runtime적으로 더 빨랐다. 하지만 내 코드가 memory적으로 좋았다.
- 나의 접근법 2pointer가 객관적으로 직관적이고 좋았다고 생각한다.

