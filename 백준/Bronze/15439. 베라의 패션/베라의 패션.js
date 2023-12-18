const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split(' ');

const a = parseInt(input);

console.log(a * (a - 1));