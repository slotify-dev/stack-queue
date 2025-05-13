/*
You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrance_row, entrance_col] denotes the row and column of the cell you are initially standing at.

Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

Example:
Input: maze = [
    ["+","+",".","+"],
    [".",".",".","+"],
    ["+","+","+","."]
], entrance = [1,2]
Output: 1

Time Complexity: O(m*n)
Space Complexity: O(m*n)
*/
function nearestExit(maze: string[][], entrance: number[]): number {
  const m = maze.length;
  const n = maze[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const queue: [number, number, number][] = [[entrance[0], entrance[1], 0]];
  maze[entrance[0]][entrance[1]] = "+"; // Mark entrance as visited

  while (queue.length) {
    const [x, y, steps] = queue.shift()!;

    // Check if current cell is an exit (and not the entrance)
    if (
      (x === 0 || x === m - 1 || y === 0 || y === n - 1) &&
      !(x === entrance[0] && y === entrance[1])
    ) {
      return steps;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && maze[nx][ny] === ".") {
        maze[nx][ny] = "+"; // Mark as visited
        queue.push([nx, ny, steps + 1]);
      }
    }
  }

  return -1;
}
