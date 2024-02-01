const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = parseInt(input[0]);
const wires = input.slice(1).map((x) => x.split(" ").map((x) => parseInt(x)));

function solution(a, wires) {
  wires.sort((a, b) => a[0] - b[0]);

  const dp = new Array(a).fill(1);

  for (let i = 1; i < a; i++) {
    for (let j = 0; j < i; j++) {
      if (wires[i][1] > wires[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  const maxRemoved = a - Math.max(...dp);
  return maxRemoved;
}

const answer = solution(a, wires);
console.log(answer);
