/*
One way to serialize a binary tree is to use preorder traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as '#'.

Given a string of comma-separated values preorder, return true if it is a correct preorder traversal serialization of a binary tree.

Example 1:
Input: preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true

Example 2:
Input: preorder = "1,#"
Output: false

Time Complexity: O(n)
Space Complexity: O(n)
*/
function isValidSerialization(preorder: string): boolean {
  const nodes = preorder.split(",");
  const stack: string[] = [];

  for (const node of nodes) {
    stack.push(node);

    while (
      stack.length >= 3 &&
      stack[stack.length - 1] === "#" &&
      stack[stack.length - 2] === "#" &&
      stack[stack.length - 3] !== "#"
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.push("#");
    }
  }

  return stack.length === 1 && stack[0] === "#";
}
