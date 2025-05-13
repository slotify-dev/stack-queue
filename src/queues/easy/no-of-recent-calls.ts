/*
You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:
- RecentCounter() Initializes the counter with zero recent requests.
- int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that have happened in the last 3000 milliseconds (including the new request).

Example:
Input:
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output:
[null, 1, 2, 3, 3]

Time Complexity: O(n) worst case (but amortized O(1))
Space Complexity: O(n)
*/
class RecentCounter {
  private queue: number[];

  constructor() {
    this.queue = [];
  }

  ping(t: number): number {
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }
    return this.queue.length;
  }
}
