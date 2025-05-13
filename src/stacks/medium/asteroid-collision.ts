/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]

Example 2:
Input: asteroids = [8,-8]
Output: []

Time Complexity: O(n)
Space Complexity: O(n)
*/
function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroid)
      ) {
        stack.pop();
      }

      if (stack.length && stack[stack.length - 1] === Math.abs(asteroid)) {
        stack.pop();
      } else if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(asteroid);
      }
    }
  }

  return stack;
}
