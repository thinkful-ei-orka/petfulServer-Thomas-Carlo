class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null,
    this.last = null
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.data;
  }

  show() {
    // Return the next item in the queue.
    return this.first.data;
  }

  all() {
    // Return all items in the queue.
    let currNode = this.first;
    let store = [];
    
    while(currNode !== null) {
      store.push(currNode.data);
      currNode = currNode.next;
    }

    return store;
  }
}

module.exports = Queue

