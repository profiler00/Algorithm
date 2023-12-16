class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  pushFront(x) {
    const newNode = new Node(x);
    if (this.isEmpty()) {
      this.front = newNode;
      this.back = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.size++;
  }

  pushBack(x) {
    const newNode = new Node(x);
    if (this.isEmpty()) {
      this.front = newNode;
      this.back = newNode;
    } else {
      newNode.prev = this.back;
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  popFront() {
    if (this.isEmpty()) {
      return -1;
    }
    const value = this.front.value;
    if (this.size === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
      this.front.prev = null;
    }
    this.size--;
    return value;
  }

  popBack() {
    if (this.isEmpty()) {
      return -1;
    }
    const value = this.back.value;
    if (this.size === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.back = this.back.prev;
      this.back.next = null;
    }
    this.size--;
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getFront() {
    return this.isEmpty() ? -1 : this.front.value;
  }

  getBack() {
    return this.isEmpty() ? -1 : this.back.value;
  }

  getSize() {
    return this.size;
  }
}


const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

function solution(input) {
  const a = parseInt(input[0]);
  const deque = new Deque();
  const output = [];

  for (let i = 1; i <= a; i++) {
    const [command, value] = input[i].split(" ").map((x) => parseInt(x));

    switch (command) {
      case 1:
        deque.pushFront(value);
        break;
      case 2:
        deque.pushBack(value);
        break;
      case 3:
        output.push(deque.popFront());
        break;
      case 4:
        output.push(deque.popBack());
        break;
      case 5:
        output.push(deque.getSize());
        break;
      case 6:
        output.push(deque.isEmpty() ? 1 : 0);
        break;
      case 7:
        output.push(deque.getFront());
        break;
      case 8:
        output.push(deque.getBack());
        break;
      default:
        break;
    }
  }

  return output;
}

const result = solution(input);
console.log(result.join("\n"));
