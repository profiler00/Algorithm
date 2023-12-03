const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const T = parseInt(input[0]);

let result = "";

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ").map((x) => parseInt(x));
  result += `Case #${i}: ${A} + ${B} = ${A + B + "\n"}`;
}

console.log(result);
