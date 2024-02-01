const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = input[0];
const b = parseInt(input[1]);

function sol(str, char, start, end) {
  let cnt = 0;
  for (let i = start; i <= end; i++) {
    if (str[i] === char) {
      cnt++;
    }
  }
  return cnt;
}

for (let i = 2; i < 2 + b; i++) {
  const [char, l, r] = input[i].split(" ");
  const count = sol(a, char, parseInt(l), parseInt(r));
  console.log(count);
}
