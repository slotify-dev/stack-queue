/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the MovingAverage class:
- MovingAverage(int size) Initializes the object with the size of the window size.
- double next(int val) Returns the moving average of the last size values of the stream.

Example:
Input:
["MovingAverage", "next", "next", "next", "next"]
[[3], [1], [10], [3], [5]]
Output:
[null, 1.0, 5.5, 4.66667, 6.0]

Time Complexity: O(1)
Space Complexity: O(n)
*/
class MovingAverage {
  private queue: number[];
  private size: number;
  private sum: number;

  constructor(size: number) {
    this.queue = [];
    this.size = size;
    this.sum = 0;
  }

  next(val: number): number {
    if (this.queue.length === this.size) {
      this.sum -= this.queue.shift()!;
    }
    this.queue.push(val);
    this.sum += val;
    return this.sum / this.queue.length;
  }
}
