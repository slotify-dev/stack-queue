/*
Given an n x n binary matrix grid, return the length of the shortest clear path from the top-left (0, 0) to the bottom-right (n-1, n-1). If no such path exists, return -1.

A clear path in a binary matrix is a path from the top-left cell to the bottom-right cell such that:
- All the visited cells of the path are 0.
- All the adjacent cells of the path are 8-directionally connected.

Example:
Input: grid = [[0,1],[1,0]]
Output: 2

Time Complexity: O(n^2)
Space Complexity: O(n^2)
*/
function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const queue: [number, number, number][] = [[0, 0, 1]];
  grid[0][0] = 1; // Mark as visited

  while (queue.length) {
    const [x, y, dist] = queue.shift()!;
    if (x === n - 1 && y === n - 1) return dist;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 0) {
        grid[nx][ny] = 1; // Mark as visited
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}
