# Linked List Implementation

A linked list is a linear data structure that consists of nodes. Each node has two components: a data element and a reference (or pointer) to the next node in the sequence. Linked lists are often used in computer science to represent collections of data in a flexible and efficient manner.

## Basic Structure of a Linked List

A basic representation of a linked list can be visualized as follows:

```
[ NODE (head) ] -> [ NODE ] -> [ NODE (tail) ] -> null
```

- The first node in the list is called the "head" node.
- The last node in the list is called the "tail" node.
- Each node points to the next node in the list, forming a chain.

## Implementation

This project is an implementation of a linked list in JavaScript. It provides two classes/factories:

1. `LinkedList`: Represents the full list.
2. `Node`: Contains a `value` property and a link to the `nextNode`, both initially set to `null`.

## Functions in the LinkedList Class

- `append(value)`: Adds a new node containing `value` to the end of the list.
- `prepend(value)`: Adds a new node containing `value` to the start of the list.
- `size()`: Returns the total number of nodes in the list.
- `head()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the given index.
- `pop()`: Removes the last element from the list.
- `contains(value)`: Returns `true` if the passed-in `value` is in the list; otherwise, returns `false`.
- `find(value)`: Returns the index of the node containing `value` or `null` if not found.
- `toString()`: Represents your `LinkedList` objects as strings in the following format: `( value ) -> ( value ) -> ( value ) -> null

## Extra Credit Functions

- `insertAt(value, index)`: Inserts a new node with the provided `value` at the given index.
- `removeAt(index)`: Removes the node at the given index.

## Resources

For a more thorough understanding of linked lists, you can refer to the following resources:

- [Linked Lists in Plain English](https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3)
- [What’s a Linked List, Anyway?](https://medium.com/basecs/whats-a-linked-list-anyway-5d4c93586d6c)
- [A more verbose explanation with plenty of diagrams](https://www.geeksforgeeks.org/data-structures/linked-list/)

Feel free to explore and use this linked list implementation for your projects or educational purposes.# LinkedList_Project
