const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const T = parseInt(input[0]);

let answer = "";

for (let i = 0; i < T; i++) {
  const [A, B] = input[i + 1].split(" ").map((x) => parseInt(x));
  answer += A + B + "\n";
}

console.log(answer);