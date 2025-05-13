/*
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example:
Input: matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6

Time Complexity: O(m*n)
Space Complexity: O(n)
*/
function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0) return 0;

  const m = matrix.length;
  const n = matrix[0].length;
  const heights = new Array(n).fill(0);

  let maxArea = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      heights[j] = matrix[i][j] === "1" ? heights[j] + 1 : 0;
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}

function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];

  let maxArea = 0;
  heights = [0, ...heights, 0];

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const j = stack.pop()!;
      const width = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, heights[j] * width);
    }
    stack.push(i);
  }

  return maxArea;
}
