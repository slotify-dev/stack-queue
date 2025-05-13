class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Example
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);

console.log(queue.dequeue()); // 1 (First In, First Out)
console.log(queue.front()); // 2 (Next item to be dequeued)
console.log(queue.isEmpty()); // false
