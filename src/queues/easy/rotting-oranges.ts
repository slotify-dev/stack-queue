/*
You are given an m x n grid where each cell can have one of three values:
- 0 representing an empty cell,
- 1 representing a fresh orange, or
- 2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Time Complexity: O(m*n)
Space Complexity: O(m*n)
*/
function orangesRotting(grid: number[][]): number {
  const queue: [number, number][] = [];
  let fresh = 0;
  let minutes = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // Initialize queue with rotten oranges and count fresh oranges
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length && fresh > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()!;
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < cols &&
          grid[nx][ny] === 1
        ) {
          grid[nx][ny] = 2;
          fresh--;
          queue.push([nx, ny]);
        }
      }
    }
    if (queue.length) minutes++;
  }

  return fresh === 0 ? minutes : -1;
}
