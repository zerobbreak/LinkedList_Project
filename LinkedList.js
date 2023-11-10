class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //add to to then end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }

    this.size++;
  }

  // Adding a new value to the end of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;

    this.size++;
  }

  //Fetches the size of the list
  size() {
    return this.size;
  }

  //Returns first value of the list
  head() {
    return this.head;
  }

  //Returns last value of the list
  tail() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    //iterates through the list
    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  //Returns the value at a specific index
  at(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return null;
    }

    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.nextNode;
      count++;
    }

    return current;
  }

  // Removes the last value of the list
  pop() {
    if (!this.head) {
      console.log("List is empty. Cannot remove the last element");
      return;
    }

    if (!this.head.nextNode) {
      this.head = null;
      this.size = 0;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
    this.size--;
  }

  //returns boolean value if value is in the list
  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  //returns index in which the value is at
  find(value) {
    let count = 0;
    let current = this.head;

    while (current != null) {
      if (current.value === value) {
        return count;
      }
      count++;
      current = current.nextNode;
    }

    return null;
  }

  //Shows representation of the list 
  toString() {
    let result = "";
    let current = this.head;

    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index. Cannot insert element.");
      return;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.nextNode;
        count++;
      }

      newNode.nextNode = current;
      previous.nextNode = newNode;
    }

    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index. Cannot remove element.");
      return;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.nextNode;
        count++;
      }

      previous.nextNode = current.nextNode;
    }

    this.size--;
  }
}

// Example usage:
const myList = new LinkedList();
myList.append(3);
myList.append(7);
myList.append(11);

console.log("Original Linked List:");
console.log(myList.toString());

myList.prepend(1);
myList.prepend(0);

console.log("\nLinked List after prepending 1 and 0:");
console.log(myList.toString());

console.log("\nSize of the Linked List:", myList.size);

console.log("\nHead of the Linked List:", myList.head);
console.log("Tail of the Linked List:", myList.tail());

console.log("\nNode at index 2:", myList.at(2));

myList.pop();
console.log("\nLinked List after popping:");
console.log(myList.toString());

console.log("\nDoes the list contain value 5?", myList.contains(5));
console.log("Does the list contain value 7?", myList.contains(7));

console.log("\nIndex of value 7:", myList.find(7));

myList.insertAt(2, 5);
console.log("\nLinked List after inserting value 5 at index 2:");
console.log(myList.toString());

myList.removeAt(2);
console.log("\nLinked List after removing element at index 2:");
console.log(myList.toString());
