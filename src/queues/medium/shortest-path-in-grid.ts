/*
You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible, return -1.

Example:
Input: grid = [
    [0,0,0],
    [1,1,0],
    [0,0,0],
    [0,1,1],
    [0,0,0]
], k = 1
Output: 6

Time Complexity: O(m * n * k)
Space Complexity: O(m * n * k)
*/
function shortestPath(grid: number[][], k: number): number {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited = new Set<string>();
  const queue: [number, number, number, number][] = [[0, 0, 0, k]]; // [x, y, steps, remainingK]

  while (queue.length) {
    const [x, y, steps, remainingK] = queue.shift()!;
    if (x === m - 1 && y === n - 1) return steps;

    const key = `${x},${y},${remainingK}`;
    if (visited.has(key)) continue;
    visited.add(key);

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        const newK = remainingK - grid[nx][ny];
        if (newK >= 0) {
          queue.push([nx, ny, steps + 1, newK]);
        }
      }
    }
  }

  return -1;
}
