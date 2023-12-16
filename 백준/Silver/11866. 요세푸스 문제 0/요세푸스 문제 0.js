const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

let queue = [];

for (let i = 1; i <= a; i++) {
  queue.push(i);
}

let result = "<";

while (queue.length !== 0) {
  for (let i = 0; i < b - 1; i++) {
    queue.push(queue.shift());
  }
  result += queue.shift() + ", ";
}

result = result.slice(0, -2) + ">";

console.log(result);