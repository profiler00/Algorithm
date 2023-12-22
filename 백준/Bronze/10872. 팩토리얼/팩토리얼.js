const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = parseInt(input[0]);

let result = 1;

for (let i = 1; i <= a; i++) {
  result *= i;
}

console.log(result);