const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const score = parseInt(input[0]);

if (score > 89) {
    console.log('A');
} else if (score > 79) {
    console.log('B');
} else if (score > 69) {
    console.log('C');
} else if (score > 59) {
    console.log('D');
} else {
    console.log('F');
}