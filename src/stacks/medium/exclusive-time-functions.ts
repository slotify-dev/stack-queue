/*
On a single-threaded CPU, we execute a program containing n functions. Each function has a unique ID between 0 and n-1.

Function calls are stored in a call stack: when a function call starts, its ID is pushed onto the stack, and when a function call ends, its ID is popped off the stack. The function whose ID is at the top of the stack is the current function being executed. Each time a function starts or ends, we write a log with the timestamp, function ID, and whether it started or ended.

Given a list logs, where logs[i] represents the ith log message formatted as "{function_id}:{"start" | "end"}:{timestamp}", return the exclusive time of each function in an array.

Example:
Input: n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
Output: [3,4]

Time Complexity: O(n)
Space Complexity: O(n)
*/
function exclusiveTime(n: number, logs: string[]): number[] {
  const result = new Array(n).fill(0);
  const stack: number[] = [];
  let prevTime = 0;

  for (const log of logs) {
    const [idStr, type, timeStr] = log.split(":");
    const id = parseInt(idStr);
    const time = parseInt(timeStr);

    if (type === "start") {
      if (stack.length) {
        result[stack[stack.length - 1]] += time - prevTime;
      }
      stack.push(id);
      prevTime = time;
    } else {
      result[stack.pop()!] += time - prevTime + 1;
      prevTime = time + 1;
    }
  }

  return result;
}
