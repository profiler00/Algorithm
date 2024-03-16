const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

for (let i = 1; i <= N; i++) {
    graph[i].sort((a, b) => a - b);
}

const visitedDFS = Array(N + 1).fill(false);
const visitedBFS = Array(N + 1).fill(false);

function dfs(graph, v, visited) {
    visited[v] = true;
    process.stdout.write(v + ' ');
    for (let i = 0; i < graph[v].length; i++) {
        const next = graph[v][i];
        if (!visited[next]) {
            dfs(graph, next, visited);
        }
    }
}

function bfs(graph, start, visited) {
    const queue = [start];
    visited[start] = true;

    while (queue.length !== 0) {
        const v = queue.shift();
        process.stdout.write(v + ' ');
        for (let i = 0; i < graph[v].length; i++) {
            const next = graph[v][i];
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }
}

dfs(graph, V, visitedDFS);
console.log();
bfs(graph, V, visitedBFS);