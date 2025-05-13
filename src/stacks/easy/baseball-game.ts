/*
You are keeping the scores for a baseball game with strange rules. 
The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. 
You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

1. An integer x - Record a new score of x.
2. "+" - Record a new score that is the sum of the previous two scores.
3. "D" - Record a new score that is double the previous score.
4. "C" - Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record.

Example:
Input: ops = ["5","2","C","D","+"]
Output: 30

Time Complexity: O(n)
Space Complexity: O(n)
*/
function calPoints(ops: string[]): number {
  const stack: number[] = [];

  for (const op of ops) {
    if (op === "+") {
      const last = stack[stack.length - 1];
      const secondLast = stack[stack.length - 2];
      stack.push(last + secondLast);
    } else if (op === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op === "C") {
      stack.pop();
    } else {
      stack.push(parseInt(op));
    }
  }

  return stack.reduce((sum, num) => sum + num, 0);
}
