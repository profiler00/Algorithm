const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

while (input.length) {
  const [a, b] = input.shift().split(' ').map(x => parseInt(x));
  console.log(a + b);
}