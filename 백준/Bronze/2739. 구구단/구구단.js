const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const N = parseInt(input[0]);

for (let i = 0; i < 9; i++) {
  console.log(`${N} * ${i + 1} = ${N * (i + 1)}`);
}