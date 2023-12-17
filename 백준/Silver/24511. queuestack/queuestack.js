class Node {
  constructor(value) {
    this.value = value;
  }
  prev = null;
  next = null;
}

class Deque {
  left = null;
  right = null;
  size = 0;
  leftInsert(val) {
    const curNode = new Node(val);
    this.size += 1;
    if (!this.left || !this.right) {
      this.left = curNode;
      this.right = curNode;
    } else {
      curNode.next = this.left;
      this.left.prev = curNode;
      this.left = curNode;
    }
  }
  rightInsert(val) {
    const curNode = new Node(val);
    this.size += 1;
    if (!this.left || !this.right) {
      this.left = curNode;
      this.right = curNode;
    } else {
      curNode.prev = this.right;
      this.right.next = curNode;
      this.right = curNode;
    }
  }
  leftExtract() {
    if (!this.left) return;
    const popedVal = this.left.value;
    this.size -= 1;
    if (this.left.next) {
      this.left = this.left.next;
      this.left.prev = null;
    } else {
      this.left = null;
      this.right = null;
    }
    return popedVal;
  }
}

const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');
const deque = new Deque();
const c = input.pop().split(" ");
const c_leng = input.pop();
const b = input.pop().split(" ");
const a = input.pop().split(" ");
const ab_leng = Number(input.pop());
const result = [];

for (let i = 0; i < ab_leng; i++) {
  if (a[i] === "0") deque.leftInsert(b[i]);
}

for (let i = 0; i < c_leng; i++) {
  deque.rightInsert(c[i]);
  result.push(deque.leftExtract());
}

console.log(result.join(" "));
