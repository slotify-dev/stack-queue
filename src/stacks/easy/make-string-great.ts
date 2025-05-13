/*
Given a string s of lower and upper case English letters, a good string is a string which doesn't have two adjacent characters s[i] and s[i+1] 

where:- s[i] is a lower-case letter and s[i+1] is the same letter but upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. 
You can keep doing this until the string becomes good.

Return the string after making it good.

Example 1:
Input: s = "leEeetcode"
Output: "leetcode"

Example 2:
Input: s = "abBAcC"
Output: ""

Time Complexity: O(n)
Space Complexity: O(n)
*/
function makeGood(s: string): string {
  const stack: string[] = [];

  for (const char of s) {
    if (
      stack.length &&
      stack[stack.length - 1] !== char &&
      stack[stack.length - 1].toLowerCase() === char.toLowerCase()
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
