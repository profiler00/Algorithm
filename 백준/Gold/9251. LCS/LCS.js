const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = input[0];
const b = input[1];

function solution(a, b) {
    const dp = new Array(a.length + 1).fill(0).map((x) => new Array(b.length + 1).fill(0));
    
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
        if (a[i - 1] === b[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        }
        else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
        }
    }
    
    return dp[a.length][b.length];
    }

const answer = solution(a, b);
console.log(answer);