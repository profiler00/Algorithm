const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = parseInt(input[0]);
const wines = input.slice(1).map((x) => parseInt(x));

function sol(a, wines) {
  if (a === 1) return wines[0];
  if (a === 2) return wines[0] + wines[1];

  const dp = Array(a).fill(0);
  dp[0] = wines[0];
  dp[1] = wines[0] + wines[1];
  dp[2] = Math.max(dp[1], Math.max(wines[0] + wines[2], wines[1] + wines[2]));

  for (let i = 3; i < a; i++) {
    dp[i] = Math.max(dp[i - 1], Math.max(dp[i - 2] + wines[i], dp[i - 3] + wines[i - 1] + wines[i]));
  }

  return dp[a - 1];
}

const result = sol(a, wines);
console.log(result);
