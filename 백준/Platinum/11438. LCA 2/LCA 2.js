const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const n = parseInt(input[0]);
  const edges = input.slice(1, n);
  const queryCount = parseInt(input[n]);
  const queries = input.slice(n + 1);
  const tree = new Map();

  for (let i = 1; i <= n; i++) {
    tree.set(i, []);
  }

  edges.forEach((edge) => {
    const [u, v] = edge.split(" ").map(Number);
    tree.get(u).push(v);
    tree.get(v).push(u);
  });

  class LCA {
    constructor(tree, root = 1) {
      this.n = tree.size;
      this.LOG = Math.floor(Math.log2(this.n)) + 1;
      this.depth = Array(this.n + 1).fill(0);
      this.parent = Array.from({ length: this.n + 1 }, () =>
        Array(this.LOG).fill(-1)
      );

      this.dfs(tree, root, -1, 0);

      for (let j = 1; j < this.LOG; j++) {
        for (let i = 1; i <= this.n; i++) {
          if (this.parent[i][j - 1] !== -1) {
            this.parent[i][j] = this.parent[this.parent[i][j - 1]][j - 1];
          }
        }
      }
    }

    dfs(tree, v, p, d) {
      this.parent[v][0] = p;
      this.depth[v] = d;
      for (let u of tree.get(v)) {
        if (u !== p) {
          this.dfs(tree, u, v, d + 1);
        }
      }
    }

    getLCA(u, v) {
      if (this.depth[u] < this.depth[v]) [u, v] = [v, u];

      let diff = this.depth[u] - this.depth[v];
      for (let i = 0; i < this.LOG; i++) {
        if ((diff >> i) & 1) {
          u = this.parent[u][i];
        }
      }

      if (u === v) return u;

      for (let i = this.LOG - 1; i >= 0; i--) {
        if (this.parent[u][i] !== this.parent[v][i]) {
          u = this.parent[u][i];
          v = this.parent[v][i];
        }
      }

      return this.parent[u][0];
    }
  }

  const lcaFinder = new LCA(tree);

  const result = [];
  queries.forEach((query) => {
    const [u, v] = query.split(" ").map(Number);
    result.push(lcaFinder.getLCA(u, v));
  });

  console.log(result.join('\n'));
});
