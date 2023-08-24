​​​​​​​
## 1. 문제 파악
- 문제에 붙어있는 태그 중 greedy algorithm이 있었고, 이거에 대해 찾아보며,
  - 💡[greedy algorithm 참고](https://en.wikipedia.org/wiki/Greedy_algorithm)
- 각 날짜간의 가격 차이를 구해서 그 합을 구하자 라는게 내 싱각 접근이였다.
  
## 2. 해결 step
- 변수를 초기화하여 최대 이익을 0으로 설정
```
let maxProfit = 0;: maxProfit
```
- 배열 prices를 순회하며 각 날짜에 대한 작업을 수행
```
for (let i = 0; i < prices.length; i++) {}
```
- 만약 현재 날짜의 가격보다 다음 날짜의 가격이 더 높다면, 이 날에 주식을 사서 다음 날에 판매할 때 이익을 얻을 수 있다.
```
if (prices[i+1] > prices[i]) {}
```

현재 날짜에서 주식을 사고 다음 날에 판매할 때 얻는 이익을 계산하여 maxProfit에 더한다.
```
maxProfit = maxProfit + prices[i+1] - prices[i]
```

- 모든 날짜를 순회한 후 총 이익인 maxProfit을 반환
```
return maxProfit
```

## 4. 결과

```
var maxProfit = function(prices) {
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    
    return maxProfit;
};
```

## 5. solution 본 후, 회고
#### 1. 회고
- 나와 같은 greedy 알고리즘으로 해결했고, runtime이 제일 빠르게 나왔다.
- 다른 코드들을보니 예외처리로 코드가 길어진것들이 있었는데
- 나는 그냥 단순하게 다음날짜가 반드시 전날짜보다 클떄의 경우의 수만 조건을 따져서
- 그 날짜들의 조건에 해당되며 for문 돌리며 산출된 Profit의 합산을 구하는 식으로 진행하였다.
- 카데인 알고리즘을 사용해 배열을 한 번만 순회하면서 최저 가격을 갱신하고, 현재 가격과 최저 가격의 차이를 최대이익과 비교하여 갱신함으로서
- 가능한 최대 이익을 찾아내는 알고리즘도 있다는것을 알았다.

#### 2. 솔루션 해석
- 이익을 저장할 배열 profits를 선언
- 현재까지의 누적 이익을 나타내는 변수 profit을 초기화
- 두 날짜를 비교하기 위한 인덱스 j를 초기화합니다. (인덱스 j는 i 다음 날짜)
- 배열 prices를 순회하면서 각 날짜에 대한 작업을 수행
- 현재 날짜의 주식 가격이 다음 날짜의 주식 가격보다 높다면, 이익이 발생할 수 있으므로 해당 이익을 누적
- 현재 날짜에서 주식을 사서 다음 날짜에 팔 때 얻는 이익을 계산하여 profit에 더한다.
- 다음 날짜를 비교하기 위해 인덱스 j를 증가
- 모든 날짜를 순회한 후 총 이익인 profit을 반환

```
var maxProfit = function(prices) {
        let profits = []
    let profit = 0;
    let j=1
    for(let i=0; i<prices.length; i++) {
        if(prices[j] > prices[i]) {
            profit += prices[j]-prices[i]
        }
        j++
    }
    return profit
};
