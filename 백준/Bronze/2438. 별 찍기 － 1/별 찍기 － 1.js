const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  console.log("*".repeat(i));
}