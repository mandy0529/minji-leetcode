​​​​​​​
## 1. 문제 파악
- 주어진 문제는 정수 배열 nums와 정수 k가 주어지고, 이 배열에서 정렬된 순서에서 k번째로 큰 요소를 찾는 것
- 중요한 점은 중복된 값이 있을 수 있다는 것

## 2. 해결방법 구현 절차
- 처음에는 주어진 배열 nums를 내림차순으로 정렬하고, k번째로 큰 요소를 반환하는 방법을 선택
- 이를 위해 JavaScript의 sort() 메서드를 사용하고,
- 내림차순 정렬을 위해 비교 함수를 (a, b) => b - a로 설정
- 그 다음 nums[k - 1]을 통해 k번째로 큰 요소를 반환

## 3. 코드 설명
- nums 배열을 내림차순으로 정렬하는 부분은 nums.sort((a, b) => b - a)로 구현되었다.
- k번째로 큰 요소를 반환하는 부분은 nums[k - 1]을 통해 이루어집니다.
```
function findKthLargest(nums, k) {
    nums.sort((a, b) => b - a); // 배열을 내림차순으로 정렬
    return nums[k - 1]; // k번째로 큰 요소 반환
}
```

## 4. 회고
#### Heap으로 구현하는 솔루션에 대한 회고
- 위의 코드와 달리 Heap을 사용하는 솔루션은 k개의 가장 큰 요소를 유지하면서 배열을 탐색하는 방법을 사용한다.
- 이러한 방법은 효율적인 시간 복잡도를 갖는다.
- k가 작을 경우에는 nums.sort()를 사용한 솔루션과 비슷한 성능이지만, k가 큰 경우에는 효율적이다.
- Heap을 사용하여 k개의 요소를 유지하면서 배열을 탐색하는 과정이 복잡할 수 있지만, 시간 복잡도 측면에서는 이점이 있다.
- Heap을 사용한 솔루션은 데이터 스트림에서 k번째로 큰 요소를 실시간으로 추적하거나, 대용량 데이터에서 k번째로 큰 요소를 효율적으로 처리하는 데 유용할 수 있다.

## 5. solution 코드 분석
- 위의 코드에서 MaxHeap 클래스는 최대 힙을 구현하는데 사용된다.
- findKthLargest 함수는 주어진 배열 nums에서 k번째로 큰 요소를 찾는다.
- 코드를 실행하면 예제 테스트에 제공된 입력에 대한 결과를 확인할 수 있다.
- 이러한 솔루션은 k가 큰 경우에도 효율적으로 작동하며, 실시간 데이터 스트림에서 k번째로 큰 요소를 추적하는 데 유용할 수 있다.

```
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let largestIndex = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            if (index === largestIndex) {
                break;
            }

            this.swap(index, largestIndex);
            index = largestIndex;
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

function findKthLargest(nums, k) {
    const maxHeap = new MaxHeap();

    for (const num of nums) {
        maxHeap.push(num);
        if (maxHeap.size() > k) {
            maxHeap.pop();
        }
    }

    return maxHeap.peek();
}

// 예제 테스트
const nums1 = [3, 2, 1, 5, 6, 4];
const k1 = 2;
console.log(findKthLargest(nums1, k1)); // Output: 5

const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k2 = 4;
console.log(findKthLargest(nums2, k2)); // Output: 4

```
