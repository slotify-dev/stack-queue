/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Time Complexity: O(n)
Space Complexity: O(n)
*/
function trap(height: number[]): number {
  const stack: number[] = [];
  let total = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const bottom = stack.pop()!;
      if (!stack.length) break;

      const left = stack[stack.length - 1];
      const width = i - left - 1;
      const depth = Math.min(height[left], height[i]) - height[bottom];
      total += width * depth;
    }
    stack.push(i);
  }

  return total;
}
