const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim();

const [a, b] = input.split(" ").map((x) => parseInt(x));

let n = 1;
let k = 1;

for (let i = a - b + 1; i <= a; i++) {
  n *= i;
}

for (let i = 1; i <= b; i++) {
  k *= i;
}

console.log(n / k);