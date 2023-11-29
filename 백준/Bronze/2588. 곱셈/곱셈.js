const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [a, b] = input

console.log(a * b[2]);
console.log(a * b[1]);
console.log(a * b[0]);
console.log(a * b);