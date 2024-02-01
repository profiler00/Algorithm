const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = parseInt(input[0]);
const b = input[1].split(" ").map((x) => parseInt(x));

const dp = Array(a).fill(-1);

function LIS(idx) {
  if (dp[idx] !== -1) {
    return dp[idx];
  }

  dp[idx] = 1;
  for (let i = idx - 1; i >= 0; i--) {
    if (b[i] < b[idx]) {
      dp[idx] = Math.max(dp[idx], LIS(i) + 1);
    }
  }

  return dp[idx];
}

let answer = 0;
for (let i = 0; i < a; i++) {
  answer = Math.max(answer, LIS(i));
}

console.log(answer);
