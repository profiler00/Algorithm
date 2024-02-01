const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim();

const a = +input;
const dp = Array.from(Array(a + 1), () => Array(10).fill(0));

for (let i = 1; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= a; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j + 1];
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][j - 1];
    } else {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
    }
    dp[i][j] %= 1000000000;
  }
}

let sum = 0;

for (let i = 0; i < 10; i++) {
  sum += dp[a][i];
}

console.log(sum % 1000000000);