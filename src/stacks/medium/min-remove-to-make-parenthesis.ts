/*
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Example 1:
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"

Example 2:
Input: s = "a)b(c)d"
Output: "ab(c)d"

Time Complexity: O(n)
Space Complexity: O(n)
*/
function minRemoveToMakeValid(s: string): string {
  const stack: number[] = [];
  const toRemove = new Set<number>();
  const result: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length) {
        stack.pop();
      } else {
        toRemove.add(i);
      }
    }
  }

  for (const idx of stack) {
    toRemove.add(idx);
  }

  for (let i = 0; i < s.length; i++) {
    if (!toRemove.has(i)) {
      result.push(s[i]);
    }
  }

  return result.join("");
}
