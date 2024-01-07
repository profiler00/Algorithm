const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map((x) => +x);
const visited = Array.from(Array(N + 1), () => false);

const dfs = (cnt, result) => {
  if (cnt === M) {
    console.log(result.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    dfs(cnt + 1, [...result, i]);
    visited[i] = false;
  }
};

dfs(0, []);