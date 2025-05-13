/*
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

Example 1:
Input: num = "1432219", k = 3
Output: "1219"

Example 2:
Input: num = "10200", k = 1
Output: "200"

Time Complexity: O(n)
Space Complexity: O(n)
*/
function removeKdigits(num: string, k: number): string {
  const stack: string[] = [];

  for (const digit of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  // Remove remaining k digits from the end
  while (k-- > 0) {
    stack.pop();
  }

  // Remove leading zeros
  let result = stack.join("").replace(/^0+/, "");

  return result === "" ? "0" : result;
}
