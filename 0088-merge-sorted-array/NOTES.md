## 1. 문제 파악
- 문제부터 이해하는데 시간이 꽤나 걸렸다.
- 처음 테스트 코드에 0이 들어 있었기에 0을 빼야한다는 생각에 filter를 사용하며 새로운 배열을 만들게되며 새로운 배열을 계속 반환했다.
```
const filteredNums = nums.filter(num => num !== 0);
```

- 그 결과, 헤메며, 원하는 값을 계속 얻지 못했다.
- 문제를 천천히 읽어보고, 이해해보니, *함수는 정렬된 결과 배열을 반환해서는 안 되며, 대신 결과는 nums1 배열 안에 저장되어야 한다는 핵심* 을 발견 했다.

## 2. 해결 step
- nums1을 바꾸는게 이 문제를 푸는 핵심이라고 생각했고, m+n이 nums 배열의 length가 된다.
- nums1 배열에 nums2 배열의 원소를 병합한다.
- splice() 메서드를 사용하여 m 위치부터 n 개의 원소를 nums2 배열의 원소로 대체 하자
    - 💡[mdn-splice() 참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
    
- ...nums2는 nums2 배열의 원소들을 전개하여 개별 원소로 확장하는 역할을 한다.
- 따라서 nums1 배열의 m 위치부터 n 개의 원소가 nums2 배열의 원소로 대체 하자

## 3. 요약
- 요약하자면 nums1 배열에다가 m만큼 원소는 그대로 가져가고, n만큼 num1 배열에 nums2 원소 전부를 집어넣자
- 그 다음에 sort해서 오름차순 정렬 해주고,
- nums1이 가져야하는 length만큼 slice 해주자

```
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b).slice(0, m);
};
```

## 4. solution 본 후, 회고
- sort() 내장함수 사용하는것이 시간복잡도 O((m+n)log(m+n))에 해당 된다는것을 알았다.
- while,for문을 사용하는것이 개인적으로 익숙하지않고, 내장함수를 이용하는것이 간편하다고 생각하여 사용했었는데
- 알고리즘을 풀 때, 어떤 방법을 사용해야 더 효율적인지 상황에 다르다는것을 꺠달았다.
- 각 배열을 한번씩 반복하여 while문으로 처리하여 시간복잡도 O(m+n)를 만들어내는 solution을 보고,
- 두개의 변수를 사용하여, 답을 이끄는 조건문으로 while문으로도 해결할 수 있구나를 알았습니다.

```
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};
```
