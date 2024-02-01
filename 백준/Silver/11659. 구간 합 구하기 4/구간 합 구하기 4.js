const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const arr = input[1].split(" ").map((x) => +x);
const cumsum = new Array(arr.length + 1).fill(0);
const output = [];

arr.forEach((x, i) => {
  cumsum[i + 1] = cumsum[i] + x;
});

input.slice(2).forEach((idx) => {
  const [i, j] = idx.split(" ").map((x) => +x);
  output.push(cumsum[j] - cumsum[i - 1]);
});

console.log(output.join("\n"));