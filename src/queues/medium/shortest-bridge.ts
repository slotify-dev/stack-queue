/*
You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

You may change 0's to 1's to connect the two islands to form one island.

Return the smallest number of 0's you must flip to connect the two islands.

Example:
Input: grid = [
    [0,1],
    [1,0]
]
Output: 1

Time Complexity: O(n^2)
Space Complexity: O(n^2)
*/
function shortestBridge(grid: number[][]): number {
  const n = grid.length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const queue: [number, number, number][] = [];
  let found = false;

  // DFS to find the first island and mark its cells
  for (let i = 0; i < n && !found; i++) {
    for (let j = 0; j < n && !found; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        found = true;
      }
    }
  }

  // BFS to expand the first island until it reaches the second island
  let steps = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y, dist] = queue.shift()!;
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          if (grid[nx][ny] === 1) {
            return steps;
          }
          if (grid[nx][ny] === 0) {
            grid[nx][ny] = -1; // Mark as visited
            queue.push([nx, ny, dist + 1]);
          }
        }
      }
    }
    steps++;
  }

  return -1;

  function dfs(x: number, y: number): void {
    if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] !== 1) return;
    grid[x][y] = -1; // Mark as visited
    queue.push([x, y, 0]);
    for (const [dx, dy] of directions) {
      dfs(x + dx, y + dy);
    }
  }
}
