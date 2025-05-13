/*
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

Example 1:
Input: s = "(()())(())"
Output: "()()()"

Example 2:
Input: s = "(()())(())(()(()))"
Output: "()()()()(())"

Time Complexity: O(n)
Space Complexity: O(n)
*/
function removeOuterParentheses(s: string): string {
  const stack: string[] = [];
  let result = "";
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }

    if (stack.length === 0) {
      result += s.substring(start + 1, i);
      start = i + 1;
    }
  }

  return result;
}
