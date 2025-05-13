/*
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Example:
Input:
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output:
[null, null, null, 2, 2, false]

Time Complexity:
- push: O(n)
- pop/top: O(1)
Space Complexity: O(n)
*/
class MyStack {
  private queue: number[];
  private tempQueue: number[];

  constructor() {
    this.queue = [];
    this.tempQueue = [];
  }

  push(x: number): void {
    this.tempQueue.push(x);
    while (this.queue.length) {
      this.tempQueue.push(this.queue.shift()!);
    }
    [this.queue, this.tempQueue] = [this.tempQueue, this.queue];
  }

  pop(): number {
    return this.queue.shift()!;
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
