/*
There are n cars going to the same destination along a one-lane road. The destination is target miles away.

You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

Return the number of car fleets that will arrive at the destination.

Example 1:
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3

Time Complexity: O(n log n)
Space Complexity: O(n)
*/
function carFleet(target: number, position: number[], speed: number[]): number {
  const cars = position.map((pos, i) => ({
    pos,
    time: (target - pos) / speed[i],
  }));
  cars.sort((a, b) => b.pos - a.pos);

  const stack: number[] = [];

  for (const car of cars) {
    if (!stack.length || car.time > stack[stack.length - 1]) {
      stack.push(car.time);
    }
  }

  return stack.length;
}
