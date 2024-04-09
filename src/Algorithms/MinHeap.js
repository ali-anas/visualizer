class MinHeap {
    constructor() {
        this.values = [];
        this.size = 0;
    }

    empty() {
        return this.size === 0;
    }

    add(element) {
        this.values.push(element);
        let index = this.size;
        this.size += 1;

        const current = this.values[index].distance;

        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex].distance;

            if(parent > current) {
                this.values[parentIndex] = current;
                this.values[index] = parent;
                index = parentIndex;
            } else break;
        }
    }

    extractMin() {
        // Handle for EMPTY CASE
        if(this.size < 1) return null;

        const min_ = this.values[0];
        const end = this.values.pop();
        this.size -= 1;

        // if single item was present in data structure
        if(this.size === 0) {
            return min_;
        }

        this.values[0] = end;
        let index = 0;
        const current = this.values[0];
        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swapIndex = index;

            if(leftChildIndex < this.size && this.values[leftChildIndex] < current) {
                swapIndex = leftChildIndex;
            }

            if(rightChildIndex < this.size && this.values[rightChildIndex] < this.values[swapIndex]) {
                swapIndex = rightChildIndex;
            }

            if(swapIndex === index) break;
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = current;
            index = swapIndex;
        }

        return min_;
    }
}

export default MinHeap;