/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
Given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2, return an array ans of length nums1.length such that ans[i] is the next greater element as described above for each nums1[i] in nums2. 

If there is no next greater element, then ans[i] should be -1.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]

Time Complexity: O(n + m) where n is nums2 length and m is nums1 length
Space Complexity: O(n)
*/
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = [];
  const map: { [key: number]: number } = {};

  for (const num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      map[stack.pop()!] = num;
    }
    stack.push(num);
  }

  for (const num of nums1) {
    result.push(map[num] || -1);
  }

  return result;
}
