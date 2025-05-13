/*
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example:
Input: heights = [2,1,5,6,2,3]
Output: 10

Time Complexity: O(n)
Space Complexity: O(n)
*/
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
