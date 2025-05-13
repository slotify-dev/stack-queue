/*
You are given an n x n integer matrix board where the cells are labeled from 1 to n^2 in a Boustrophedon style starting from the bottom left of the board and alternating direction each row.

You start on square 1 of the board. In each move, you move x positions where x is the result of a die roll. You can choose to take the ladder or snake if you land on a square that has one.

Return the least number of moves required to reach square n^2. If it is not possible, return -1.

Example:
Input: board = [
    [-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1],
    [-1,35,-1,-1,13,-1],
    [-1,-1,-1,-1,-1,-1],
    [-1,15,-1,-1,-1,-1]
]
Output: 4

Time Complexity: O(n^2)
Space Complexity: O(n^2)
*/
function snakesAndLadders(board: number[][]): number {
    const n = board.length;
    const visited = new Set<number>();
    const queue: [number, number][] = [[1, 0]]; // [square, moves]
    
    while (queue.length) {
        const [square, moves] = queue.shift()!;
        if (square === n * n) return moves;
        
        for (let i = 1; i <= 6; i++) {
            let nextSquare = square + i;
            if (nextSquare > n * n) break;
            
            const [row, col] = getPosition(nextSquare, n);
            if (board[row][col] !== -1) {
                nextSquare = board[row][col];
            }
            
            if (!visited.has(nextSquare)) {
                visited.add(nextSquare);
                queue.push([nextSquare, moves + 1]);
            }
        }
    }
    
    return -1;
}

function getPosition(square: number, n: number): [number, number] {
    const row = n - 1 - Math.floor((square - 1) / n);
    const col = (Math.floor((square - 1) / n) % 2 === 0 ? 
        (square - 1) % n : 
        n - 1 - (square - 1) % n;
    return [row, col];
}