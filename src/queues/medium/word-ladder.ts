/*
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
- Every adjacent pair of words differs by a single letter.
- Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
- sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

Example:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5

Time Complexity: O(M^2 * N) where M is word length and N is wordList size
Space Complexity: O(M^2 * N)
*/
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue: [string, number][] = [[beginWord, 1]];
  const visited = new Set<string>([beginWord]);

  while (queue.length) {
    const [word, level] = queue.shift()!;
    if (word === endWord) return level;

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < 26; j++) {
        const nextWord =
          word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
        if (wordSet.has(nextWord) && !visited.has(nextWord)) {
          visited.add(nextWord);
          queue.push([nextWord, level + 1]);
        }
      }
    }
  }

  return 0;
}
