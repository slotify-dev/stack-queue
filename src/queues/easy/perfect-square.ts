/*
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

Example 1:
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

Example 2:
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

Time Complexity: O(n * sqrt(n))
Space Complexity: O(n)
*/
function numSquares(n: number): number {
  const queue: [number, number][] = [[n, 0]];
  const visited = new Set<number>([n]);

  while (queue.length) {
    const [num, steps] = queue.shift()!;
    if (num === 0) return steps;

    for (let i = 1; i * i <= num; i++) {
      const next = num - i * i;
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
}
