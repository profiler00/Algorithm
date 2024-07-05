const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [N, K] = input[0].split(" ").map(Number);
const A = input.slice(1).map(Number);

function getMaxEfficiency(N, K, A) {
  const psum = new Array(N + 1).fill(0);
  const dp = new Array(N + 1).fill(0);
  const dq = [];

  for (let i = 1; i <= N; i++) {
    psum[i] = psum[i - 1] + A[i - 1];
  }

  function C(i) {
    return dp[i - 1] - psum[i];
  }

  for (let i = 1; i <= N; i++) {
    while (dq.length > 0 && dq[0] < i - K) {
      dq.shift();
    }

    while (dq.length > 0 && C(dq[dq.length - 1]) <= C(i)) {
      dq.pop();
    }

    dq.push(i);
    dp[i] = psum[i] + C(dq[0]);

    if (i <= K) {
      dp[i] = Math.max(dp[i], psum[i]);
    }
  }

  return dp[N];
}

console.log(getMaxEfficiency(N, K, A));
