const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const N = parseInt(input[0]);

let result = "";

for (let i = 1; i <= N; i++) {
  if (i % 4 === 0) {
    result += "long ";
  }
}

console.log(result + "int");