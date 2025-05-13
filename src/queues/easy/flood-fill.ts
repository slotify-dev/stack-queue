/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

Example:
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]

Time Complexity: O(m*n)
Space Complexity: O(m*n)
*/
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;

  const queue: [number, number][] = [[sr, sc]];
  const rows = image.length;
  const cols = image[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [x, y] = queue.shift()!;
    image[x][y] = color;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < rows &&
        ny >= 0 &&
        ny < cols &&
        image[nx][ny] === originalColor
      ) {
        queue.push([nx, ny]);
      }
    }
  }

  return image;
}
