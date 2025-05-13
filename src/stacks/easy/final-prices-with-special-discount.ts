/*
Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop: if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will receive no discount.

Return an array where the ith element is the final price you will pay for the ith item considering the special discount.

Example 1:
Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]

Example 2:
Input: prices = [1,2,3,4,5]
Output: [1,2,3,4,5]

Time Complexity: O(n)
Space Complexity: O(n)
*/
function finalPrices(prices: number[]): number[] {
  const stack: number[] = [];
  const result = [...prices];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
      const j = stack.pop()!;
      result[j] = prices[j] - prices[i];
    }
    stack.push(i);
  }

  return result;
}
