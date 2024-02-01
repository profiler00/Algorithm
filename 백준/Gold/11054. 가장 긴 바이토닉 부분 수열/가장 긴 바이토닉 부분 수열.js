const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = parseInt(input[0]);
const b = input[1].split(" ").map((x) => parseInt(x));

function LBS(a, b) {
  const increment = new Array(a).fill(1);
  const decrement = new Array(a).fill(1);

  for (let i = 1; i < a; i++) {
    for (let j = 0; j < i; j++) {
      if (b[i] > b[j]) {
        increment[i] = Math.max(increment[i], increment[j] + 1);
      }
    }
  }

  for (let i = a - 2; i >= 0; i--) {
    for (let j = a - 1; j > i; j--) {
      if (b[i] > b[j]) {
        decrement[i] = Math.max(decrement[i], decrement[j] + 1);
      }
    }
  }

  let maxLBSLength = 0;
  for (let i = 0; i < a; i++) {
    const LBSLength = increment[i] + decrement[i] - 1;
    maxLBSLength = Math.max(maxLBSLength, LBSLength);
  }

  return maxLBSLength;
}

const result = LBS(a, b);
console.log(result);
