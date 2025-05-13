/*
Design a hit counter which counts the number of hits received in the past 5 minutes (300 seconds).

Implement the HitCounter class:
- HitCounter() Initializes the object of the hit counter system.
- void hit(int timestamp) Records a hit that happened at timestamp (in seconds). Several hits may happen at the same timestamp.
- int getHits(int timestamp) Returns the number of hits in the past 5 minutes from timestamp (i.e., the past 300 seconds).

Example:
Input:
["HitCounter", "hit", "hit", "hit", "getHits", "hit", "getHits", "getHits"]
[[], [1], [2], [3], [4], [300], [300], [301]]
Output:
[null, null, null, null, 3, null, 4, 3]

Time Complexity:
- hit: O(1)
- getHits: O(n) worst case but amortized O(1)
Space Complexity: O(n)
*/
class HitCounter {
  private queue: [number, number][]; // [timestamp, count]

  constructor() {
    this.queue = [];
  }

  hit(timestamp: number): void {
    if (
      this.queue.length &&
      this.queue[this.queue.length - 1][0] === timestamp
    ) {
      this.queue[this.queue.length - 1][1]++;
    } else {
      this.queue.push([timestamp, 1]);
    }
  }

  getHits(timestamp: number): number {
    // Remove hits older than 300 seconds
    while (this.queue.length && this.queue[0][0] <= timestamp - 300) {
      this.queue.shift();
    }

    // Sum remaining hits
    return this.queue.reduce((sum, [_, count]) => sum + count, 0);
  }
}
