const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split("\n");

let dict = {};
let result = 0;

for (let i = 0; i < input.length; i++) {
  const cur = input[i];

  if (i === 0) continue;

  if (cur === "ENTER") {
    dict = {};
    continue;
  }

  if (cur in dict) continue;

  dict[cur] = 1;
  result++;
}

console.log(result);
