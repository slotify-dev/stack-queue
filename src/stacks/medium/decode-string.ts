/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Time Complexity: O(n)
Space Complexity: O(n)
*/
function decodeString(s: string): string {
  const stack: (string | number)[] = [];
  let currentNum = 0;
  let currentStr = "";

  for (const char of s) {
    if (char === "[") {
      stack.push(currentStr);
      stack.push(currentNum);
      currentStr = "";
      currentNum = 0;
    } else if (char === "]") {
      const num = stack.pop() as number;
      const prevStr = stack.pop() as string;
      currentStr = prevStr + currentStr.repeat(num);
    } else if (/\d/.test(char)) {
      currentNum = currentNum * 10 + parseInt(char);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
}
