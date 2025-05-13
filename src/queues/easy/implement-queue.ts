/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Example:
Input:
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output:
[null, null, null, 1, 1, false]

Time Complexity:
- push: O(1)
- pop/peek: Amortized O(1)
Space Complexity: O(n)
*/
class MyQueue {
  private inStack: number[];
  private outStack: number[];

  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
    return this.outStack.pop()!;
  }

  peek(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}
