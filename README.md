# Queues and Stacks: A Simple Guide

Queues and stacks are fundamental linear data structures that store and retrieve data in specific orders.
They are used in algorithms, OS operations, parsing, and more.

## Stack (LIFO - Last In, First Out)

Works like a stack of plates: The last item added is the first one removed.

Operations:

- **push()** → Add an item to the top.
- **pop()** → Remove the top item.
- **peek()** → View the top item (without removing).
- **isEmpty()** → Check if the stack is empty.

Use Cases:

- Undo/Redo (e.g., Ctrl+Z in editors)
- Function calls (Call Stack in programming)
- Balanced parentheses (e.g., {[()]})

## Queue (FIFO - First In, First Out)

Works like a real-world queue: The first item added is the first one removed.

Operations:

- **enqueue()** → Add an item to the back.
- **dequeue()** → Remove the front item.
- **front()** → View the front item (without removing).
- **isEmpty()** → Check if the queue is empty.

Use Cases:

- Printing tasks (First come, first served)
- Breadth-First Search (BFS) in graphs
- CPU Task Scheduling
