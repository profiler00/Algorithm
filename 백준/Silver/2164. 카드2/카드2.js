const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim();

const a = parseInt(input);

function sol(a) {
  let answer = 1;

  for (let i = 1; i <= Math.log2(a); i++) {
    answer *= 2;
  }

  if (a !== answer) {
    answer = 2 * (a - answer);
  }

  return answer;
}

const result = sol(a);
console.log(result);
