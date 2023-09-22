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

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */