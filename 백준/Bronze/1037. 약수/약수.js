const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split("\n");

const a = parseInt(input[0]);                                                   
const arr = input[1].split(' ').map((x) => parseInt(x)).sort((a, b) => a - b);  

console.log(arr[0] * arr[a - 1]);                                               
