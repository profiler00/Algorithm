const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const N = parseInt(input[0]);

let result = 0;

for (let i = 1; i <= N; i++) {
  result += i;
}

console.log(result);