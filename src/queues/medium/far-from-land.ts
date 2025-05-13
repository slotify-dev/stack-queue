/*
Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance.

The distance used is the Manhattan distance.

Example:
Input: grid = [
    [1,0,1],
    [0,0,0],
    [1,0,1]
]
Output: 2

Time Complexity: O(n^2)
Space Complexity: O(n^2)
*/
function maxDistance(grid: number[][]): number {
  const n = grid.length;
  const queue: [number, number][] = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // Add all land cells to the queue
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  // If no land or all land
  if (queue.length === 0 || queue.length === n * n) return -1;

  let distance = -1;

  while (queue.length) {
    const size = queue.length;
    distance++;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()!;
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 0) {
          grid[nx][ny] = 1; // Mark as visited
          queue.push([nx, ny]);
        }
      }
    }
  }

  return distance;
}
