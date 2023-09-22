​​​​​​
## 1. 문제 파악
- 이 문제는 큐를 사용하여 스택을 구현하는 것을 목표로 합니다.
- 주어진 문제를 정확하게 이해하기 위해 문제 설명을 반복해서 읽었습니다.
- 주요 요구사항은 다음과 같았습니다:
    - push, pop, top, empty와 같은 스택의 기본 동작을 지원하는 스택 클래스를 구현해야 합니다.
    - 큐의 표준 작업만 사용하여 문제를 해결해야 합니다.
    - 큐의 표준 작업은 "뒤로 추가", "앞에서 조회/제거", "크기 확인", "비어 있는지 확인"입니다.

## 2. 해결 step
- 문제를 해결하기 위해 다음과 같은 단계를 수행했습니다:
    - Queue 클래스를 생성하고 큐의 기본 동작을 구현했습니다.
    - push 메서드를 통해 요소를 큐 뒤쪽에 추가하고, pop 메서드를 통해 큐 뒤쪽에서 요소를 제거했습니다.
    - top 메서드를 사용하여 큐의 맨 뒤에 있는 요소를 반환했습니다.
    - empty 메서드를 사용하여 큐가 비어 있는지 확인했습니다.

## 3. 실패 요약
- pop에서 -1을 하지 않았던 실패:
    -  초기 코드에서 pop 메서드에서 this.rare를 감소시키기 전에 요소를 반환하는 부분에서 -1을 하지 않았습니다.
    - 따라서 맨 뒤 요소가 아닌 그 다음 위치의 요소를 반환하여 예상과 다르게 동작했습니다.

- top에서 -1을 하지 않았던 실패:
    - 비슷한 이유로 top 메서드에서도 this.rare를 감소시키기 전에 요소를 반환하는 부분에서 -1을 하지 않았습니다.
    - 이로 인해 맨 뒤 요소가 아닌 다음 위치의 요소를 반환하여 예상과 다르게 동작했습니다.

- empty에서 boolean 반환 실패:
    - empty 메서드에서 this.rare - this.front를 반환하려 했지만, 이로 인해 큐의 크기를 반환하게 되어서 스택이 비어 있는지 확인하는 목적과 맞지 않았습니다.
    - 따라서 this.rare === this.front로 비교하여 스택이 비어 있는지 여부를 확인해야 했습니다.


## 4. 회고
- 다행히도 문제를 다시 읽고 주어진 제약 조건을 고려한 후, 큐를 사용하여 스택을 구현하는 방법을 이해하게 되었습니다. 
- push, pop, top, empty와 같은 스택 동작을 큐로 시뮬레이트할 수 있도록 코드를 작성하였고, 문제를 해결할 수 있었습니다. 
- 이 경험을 통해 새로운 데이터 구조와 알고리즘을 이해하고 구현하는 데 더 자신감을 갖게 되었습니다.

## 5. 코드 결과

```
class MyStack {
    private items :object
    private front: number
    private rare: number
    constructor() {
        this.items = {};
        this.rare = 0; // 뒤쪽(rare) 포인터 초기화
        this.front = 0; // 앞쪽(front) 포인터 초기화
    }

    push(x: number): void {
        this.items[this.rare] = x;
        this.rare++;
    }

    pop(): number {
        const item = this.items[this.rare-1];
        delete this.items[this.rare-1];
        this.rare--
        return item;
    }

    top(): number {
        return this.items[this.rare-1];
    }

    empty(): boolean {
        return this.rare===this.front
    }
}
```

