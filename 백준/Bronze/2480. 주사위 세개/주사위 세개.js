const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [a, b, c] = input[0].split(" ").map((x) => parseInt(x));

let result = 0;

if (a === b && b === c && c === a) {
  result = 10000 + a * 1000;
} else if (a === b || a === c || b === c) {
  result = 1000 + (a === b ? a : c) * 100;
} else if ((a !== b) !== c) {
  result = Math.max(a, b, c) * 100;
}

console.log(result);