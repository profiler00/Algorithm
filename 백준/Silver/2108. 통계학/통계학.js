const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n').map(Number);

const a = input.shift();
input.sort((a, b) => a - b);

console.log(Math.round(input.reduce((x, y) => x + y, 0) / a).toString());
console.log(input[Math.floor(a / 2)].toString());

const frequency = Object.entries(
  input.reduce((x, y) => {
    if (x[y]) x[y]++;
    else x[y] = 1;
    return x;
  }, {})
).sort((a, b) => {
  if (a[1] == b[1]) {
    return a[0] - b[0];
  } else {
    return b[1] - a[1];
  }
});
if (frequency.length > 1 && frequency[0][1] == frequency[1][1]) {
  console.log(frequency[1][0]);
} else {
  console.log(frequency[0][0]);
}

console.log((input[input.length - 1] - input[0]).toString());