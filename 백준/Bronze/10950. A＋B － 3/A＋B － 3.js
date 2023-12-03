const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const T = parseInt(input[0]);

for (let i = 0; i < T; i++) {
  const [a, b] = input[i + 1].split(" ").map((x) => parseInt(x));
  console.log(a + b);
}