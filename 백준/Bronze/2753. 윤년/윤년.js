const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const year = parseInt(input[0]);

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(1);
} else {
    console.log(0);
}