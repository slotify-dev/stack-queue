/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Time Complexity: O(n)
Space Complexity: O(n)
*/
function firstUniqChar(s: string): number {
  const queue: number[] = [];
  const freq: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] === 1) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const idx = queue.shift()!;
    if (freq[s[idx]] === 1) {
      return idx;
    }
  }

  return -1;
}
