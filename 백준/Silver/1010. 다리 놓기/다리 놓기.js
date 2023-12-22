const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split("\n");

const a = parseInt(input[0]);

for (let i = 1; i <= a; i++) {
  const [b, c] = input[i].split(" ").map((x) => parseInt(x));
  let result = 1;

  for (let i = 0; i < b; i++) {
    result *= c - i;
    result /= i + 1;
  }

  console.log(Math.round(result));
}
