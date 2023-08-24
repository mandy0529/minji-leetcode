​​​​​​
## 1. 문제 파악
- 두 숫자 중 뺐을때 가장 큰 양수의 수가 나와야하는 문제라고 처음 이해
  
## 2. 해결 step
- 변수는 최저 가격을, maxProfit 변수는 최대 이익을 나타낸다.
- Infinity로 초기화된 minPrice는 최소값을 찾을 때 사용된다.
- maxProfit은 아직 얻은 이익이 없으므로 0으로 초기화
```
let minPrice = Infinity;와 let maxProfit = 0;: minPrice 
```
- 배열 prices를 순차적으로 반복
- 각 순회마다 현재 가격 price를 가져온다.
```
for (let price of prices) {}
```
- 현재 가격 price와 이전 최저 가격 minPrice 중 작은 값을 새로운 최저 가격으로 업데이트
- 이렇게 함으로써 최저 가격을 찾아낸다/
```
minPrice = Math.min(minPrice, price);
```

- 현재 가격 price에서 최저 가격 minPrice을 뺀 값과 이전 최대 이익 maxProfit 중 큰 값을 새로운 최대 이익으로 업데이트
-  이렇게 함으로써 현재 가격에서의 이익을 계산하고 최대 이익을 업데이트
```
maxProfit = Math.max(maxProfit, price - minPrice);
```

- 반복이 끝나면 최대 이익 maxProfit을 반환
```
return maxProfit;
```



## 3. 실패 요약
- 처음에 minPrice를 0으로 정했는데 생각해보면 0이 제일작다
- 그래서 Mdn 확인해보니 Infinity로 설정하라고 해서 설정
    - 💡[mdn-Math.min() 참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
```
let minPrice = 0;
let maxProfit = 0;
```

## 4. 결과

```
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price); 
        maxProfit = Math.max(maxProfit, price - minPrice); 
    }
    return maxProfit;
};
```

## 5. solution 본 후, 회고
#### 1. 회고
- 내 코드는 배열을 단 한 번만 순회하면서 최소 가격과 최대 이익을 갱신하므로 시간 복잡도는 O(n)이다.
-  이 알고리즘은 간결하면서도 효율적인 방식으로 최대 이익을 계산
-  다른 코드를 확인해보니
-  while문을 사용해 배열을 단 한 번만 순회하면서 최대 이익을 구하는 알고리즘으로, 주어진 문제를 효율적으로 해결하는 방법을 찾았다.
-  내 코드보다 더 간결하고, 이해하기 쉬운 방법ㅁ으로 문제를 해결하는 좋은 접근 방식같다.

#### 2. 솔루션 해석
- left는 주식을 사는 시점(인덱스)
- right는 주식을 판매하는 시점(인덱스)
  -  초기에 left 다음의 인덱스인 1로 설정
- max_profit는 최대 이익을 나타낸다.
  -  초기에는 이익이 없으므로 0으로 설정
- 배열을 순회하면서 주식을 사고 판매하는 시점을 찾는다.
  -  right가 배열 길이보다 작을 때까지 루프를 실행
- left에 해당하는 시점에서 주식을 사는 시점보다 right에 해당하는 시점에서 주식을 판매하는 시점의 가격이 더 높다면, 이익을 계산
- 현재 left에서 주식을 사고 right에서 주식을 판매했을 때의 이익을 계산
- 현재까지의 최대 이익 max_profit와 현재 이익 profit 중 더 큰 값을 선택하여 최대 이익을 갱신
- 만약 주식을 사는 시점의 가격이 주식을 판매하는 시점의 가격보다 높지 않다면, left와 right를 동일한 시점으로 갱신
  -  이는 새로운 구간에서 이익을 다시 계산하기 위한 준비 단계
- right를 다음 시점으로 이동하여 루프를 계속 진행
- 루프를 모두 실행한 후 최대 이익 max_profit를 반환

```
const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
