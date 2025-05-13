/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Time Complexity: O(n + m)
Space Complexity: O(n + m)
*/
function backspaceCompare(s: string, t: string): boolean {
  const process = (str: string): string => {
    const stack: string[] = [];
    for (const char of str) {
      if (char === "#") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    return stack.join("");
  };

  return process(s) === process(t);
}
