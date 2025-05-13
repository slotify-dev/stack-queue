/*
Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence of that array such that for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied.

Example:
Input: nums = [10,2,-10,5,20], k = 2
Output: 37

Time Complexity: O(n)
Space Complexity: O(n)
*/
function constrainedSubsetSum(nums: number[], k: number): number {
  const n = nums.length;
  const dp = [...nums];
  const deque: number[] = []; // stores indices

  let max = dp[0];

  for (let i = 0; i < n; i++) {
    // Remove indices that are out of the current window
    while (deque.length && deque[0] < i - k) {
      deque.shift();
    }

    if (deque.length) {
      dp[i] = Math.max(dp[i], dp[deque[0]] + nums[i]);
    }

    max = Math.max(max, dp[i]);

    // Maintain deque in decreasing order of dp values
    while (deque.length && dp[i] >= dp[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(i);
  }

  return max;
}
