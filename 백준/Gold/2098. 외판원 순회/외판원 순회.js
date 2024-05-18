const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const n = +input[0];
const INF = 987654321;
const w = Array.from(Array(n), () => Array(n).fill(0));
const dp = Array.from(Array(n), () => Array(1 << n).fill(0));

function tsp(cur, visited) {
    if (visited === (1 << n) - 1) {
        if (w[cur][0] === 0) return INF;
        return w[cur][0];
    }

    if (dp[cur][visited] !== 0) return dp[cur][visited];

    dp[cur][visited] = INF;
    for (let i = 0; i < n; i++) {
        if (w[cur][i] === 0 || (visited & (1 << i)) > 0) continue;
        dp[cur][visited] = Math.min(dp[cur][visited], tsp(i, visited | (1 << i)) + w[cur][i]);
    }

    return dp[cur][visited];
}

for (let i = 1; i < n + 1; i++) {
    w[i - 1] = input[i].split(' ').map((e) => +e);
}

console.log(tsp(0, 1));