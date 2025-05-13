/*
Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle.

Implement the MyCircularQueue class:
- MyCircularQueue(k) Initializes the object with the size of the queue to be k.
- int Front() Gets the front item from the queue. If the queue is empty, return -1.
- int Rear() Gets the last item from the queue. If the queue is empty, return -1.
- boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
- boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
- boolean isEmpty() Checks whether the circular queue is empty or not.
- boolean isFull() Checks whether the circular queue is full or not.

Example:
Input:
["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output:
[null, true, true, true, false, 3, true, true, true, 4]

Time Complexity: O(1) for all operations
Space Complexity: O(k)
*/
class MyCircularQueue {
  private queue: number[];
  private head: number;
  private tail: number;
  private size: number;
  private capacity: number;

  constructor(k: number) {
    this.queue = new Array(k);
    this.head = -1;
    this.tail = -1;
    this.size = 0;
    this.capacity = k;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.head = 0;
    this.tail = (this.tail + 1) % this.capacity;
    this.queue[this.tail] = value;
    this.size++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.capacity;
    }
    this.size--;
    return true;
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.queue[this.head];
  }

  Rear(): number {
    return this.isEmpty() ? -1 : this.queue[this.tail];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }
}
