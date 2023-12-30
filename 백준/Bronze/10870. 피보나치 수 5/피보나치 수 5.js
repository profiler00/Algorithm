const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = parseInt(input[0]);

function fibonacci(a) {
  if (a === 0) return 0;
  if (a === 1) return 1;
  return fibonacci(a - 1) + fibonacci(a - 2);
}

console.log(fibonacci(a));