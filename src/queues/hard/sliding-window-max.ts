/*
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]

Time Complexity: O(n)
Space Complexity: O(k)
*/
function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const deque: number[] = []; // stores indices

  for (let i = 0; i < nums.length; i++) {
    // Remove indices of elements not in the current window
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove indices of elements smaller than current element
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // Add maximum to result (once window is fully formed)
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
