const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const x = parseInt(input[0]);
const n = parseInt(input[1]);

let result = 0;

for (let i = 0; i < n; i++) {
  const [a, b] = input[i + 2].split(" ").map((x) => parseInt(x));
  result += a * b;
}

if (result === x) {
  console.log("Yes");
} else {
  console.log("No");
}