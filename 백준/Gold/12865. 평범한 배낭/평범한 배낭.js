const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [a, b] = input[0].split(" ").map((x) => parseInt(x));
const w = [];
const v = [];

for (let i = 1; i <= a; i++) {
  const [weight, value] = input[i].split(" ").map((x) => parseInt(x));
  w.push(weight);
  v.push(value);
}

const dp = Array.from(Array(a + 1), () => Array(b + 1).fill(0));

for (let i = 1; i <= a; i++) {
  for (let j = 1; j <= b; j++) {
    if (j < w[i - 1]) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i - 1]] + v[i - 1]);
    }
  }
}

console.log(dp[a][b]);
