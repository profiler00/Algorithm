const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [a, b] = input[0].split(" ").map((x) => +x);
const arr = input[1].split(" ").map((x) => +x);
const cumsum = new Array(arr.length + 1).fill(0);

arr.forEach((x, i) => {
  cumsum[i + 1] = cumsum[i] + x;
});

let max = -Infinity;

for (let i = 0; i <= a - b; i++) {
  max = Math.max(max, cumsum[i + b] - cumsum[i]);
}

console.log(max);