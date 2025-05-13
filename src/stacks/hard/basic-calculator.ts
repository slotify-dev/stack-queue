/*
Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:
Input: s = "1 + 1"
Output: 2

Example 2:
Input: s = " 2-1 + 2 "
Output: 3

Example 3:
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23

Time Complexity: O(n)
Space Complexity: O(n)
*/
function calculate(s: string): number {
  const stack: number[] = [];
  let result = 0;
  let num = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (/\d/.test(char)) {
      num = num * 10 + parseInt(char);
    } else if (char === "+") {
      result += sign * num;
      num = 0;
      sign = 1;
    } else if (char === "-") {
      result += sign * num;
      num = 0;
      sign = -1;
    } else if (char === "(") {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (char === ")") {
      result += sign * num;
      num = 0;
      result *= stack.pop()!;
      result += stack.pop()!;
    }
  }

  return result + sign * num;
}
