const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [N, D] = input[0].split(" ").map(Number);
const K = input[1].split(" ").map(Number);

function getMaxScore(N, D, K) {
  let dp = Array(N).fill(-Infinity);
  let deque = [];

  for (let i = 0; i < N; i++) {
    dp[i] = K[i];
  }

  deque.push(0);

  for (let i = 1; i < N; i++) {
    while (deque.length && deque[0] < i - D) {
      deque.shift();
    }

    if (deque.length) {
      dp[i] = Math.max(dp[i], K[i] + dp[deque[0]]);
    }

    while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) {
      deque.pop();
    }
    deque.push(i);
  }

  return Math.max(...dp);
}

console.log(getMaxScore(N, D, K));
