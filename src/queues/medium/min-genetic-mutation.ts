/*
A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

Given the two gene strings startGene and endGene and a gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.

Example:
Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
Output: 2

Time Complexity: O(N * L) where N is bank size and L is gene length
Space Complexity: O(N)
*/
function minMutation(
  startGene: string,
  endGene: string,
  bank: string[]
): number {
  const bankSet = new Set(bank);
  if (!bankSet.has(endGene)) return -1;

  const queue: [string, number][] = [[startGene, 0]];
  const visited = new Set<string>([startGene]);
  const choices = ["A", "C", "G", "T"];

  while (queue.length) {
    const [current, mutations] = queue.shift()!;
    if (current === endGene) return mutations;

    for (let i = 0; i < current.length; i++) {
      for (const c of choices) {
        if (c === current[i]) continue;
        const next = current.slice(0, i) + c + current.slice(i + 1);
        if (bankSet.has(next) && !visited.has(next)) {
          visited.add(next);
          queue.push([next, mutations + 1]);
        }
      }
    }
  }

  return -1;
}
