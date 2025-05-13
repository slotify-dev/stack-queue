/*
You are given a 0-indexed integer array nums and an integer k.

You are initially standing at index 0. In one move, you can jump at most k steps forward without going outside the boundaries of the array. That is, you can jump from index i to any index in the range [i + 1, min(i + k, nums.length - 1)].

Your score is the sum of all nums[j] for each index j you visited in the array.

Return the maximum score you can get.

Example:
Input: nums = [1,-1,-2,4,-7,3], k = 2
Output: 7

Time Complexity: O(n)
Space Complexity: O(n)
*/
function maxResult(nums: number[], k: number): number {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  const deque: number[] = [0]; // stores indices

  for (let i = 1; i < n; i++) {
    // Remove indices that are out of the current window
    while (deque.length && deque[0] < i - k) {
      deque.shift();
    }

    dp[i] = dp[deque[0]] + nums[i];

    // Maintain deque in decreasing order of dp values
    while (deque.length && dp[i] >= dp[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(i);
  }

  return dp[n - 1];
}
