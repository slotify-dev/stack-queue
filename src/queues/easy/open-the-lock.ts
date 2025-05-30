/*
You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a target representing the value of the wheels that will open the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

Example:
Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6

Time Complexity: O(10000) = O(1) since there are 10^4 possible combinations
Space Complexity: O(10000)
*/
function openLock(deadends: string[], target: string): number {
  const dead = new Set(deadends);
  const visited = new Set<string>();
  const queue: [string, number][] = [["0000", 0]];

  if (dead.has("0000")) return -1;

  while (queue.length) {
    const [current, turns] = queue.shift()!;
    if (current === target) return turns;

    for (let i = 0; i < 4; i++) {
      for (const delta of [-1, 1]) {
        const next = current.split("");
        next[i] = String((parseInt(next[i]) + delta + 10) % 10);
        const nextStr = next.join("");

        if (!dead.has(nextStr) && !visited.has(nextStr)) {
          visited.add(nextStr);
          queue.push([nextStr, turns + 1]);
        }
      }
    }
  }

  return -1;
}
